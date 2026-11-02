'use strict';

/**
 * Built-in fileview renderer plugins.
 *
 * A renderer is a plain object implementing the fileview renderer contract:
 *
 *   {
 *     Hash:         <string>,              // unique id in the registry
 *     Priority:     <number>,              // tiebreak when two renderers score equally (higher wins)
 *     Capability?:  (pFileviewProvider) => boolean,   // abstain (fall through) when a dependency is absent
 *     matches:      (pDescriptor) => number,          // score tier — see Pict-Fileview-Provider.resolveRenderer
 *     prepareDescriptor?: (pDescriptor, pFileviewProvider) => void,  // enrich the descriptor before mount
 *     mount:        (pContainerSelector, pDescriptor, pFileviewProvider) => handle
 *   }
 *
 * `mount` paints the body into pContainerSelector (always through pict.ContentAssignment) and returns a handle:
 *
 *   { Hash, Descriptor, ChildViewHash?, Ready?, update?(pDescriptor), destroy() }
 *
 * The provider keeps one handle at a time. On a SAME-KIND re-point (next file, same renderer) it calls the
 * handle's optional update(pDescriptor) to re-feed the live child instead of tearing it down — the
 * reuse-one-per-kind rule (Pict has no removeView, so re-minting a child per file leaks views/observers). On a
 * TYPE switch it calls destroy(). `Ready` is an optional promise a renderer that loads asynchronously resolves
 * once its content has painted — the provider ignores it; tests await it.
 *
 * Phase-1 slices covered here:
 *   - DownloadCard : the always-matches floor (score 1) — no file is ever unviewable.
 *   - Text         : any textual file, fetched and shown in a <pre>. Self-contained (no external dependency);
 *                    also the graceful degrade when Code/Markdown abstain.
 *   - Code         : delegates to pict-section-code (CodeJar, read-only). Host-provided + CodeJar-gated.
 *   - Markdown     : delegates to pict-section-content's parseMarkdown. Host-provided.
 *
 * Image / enormous-image / PDF / native-media renderers register on top of these in later slices.
 */

// -------------------------------------------------------------------------------------------------------------
// Score tiers (see resolveRenderer). Extension outranks the header MIME outranks magic bytes; an explicit
// config Kind trumps all of them; the download card sits at the floor.
// -------------------------------------------------------------------------------------------------------------
const SCORE_KIND = 10000;
const SCORE_EXTENSION = 700;
const SCORE_MIME = 400;
const SCORE_FALLBACK = 1;

// Textual file families. CODE and MARKDOWN extensions are also claimed by the Text renderer (at the extension
// tier) so a code/markdown file whose specialized renderer abstains still renders as readable plain text.
const CODE_EXTENSIONS =
[
	// NOTE: 'svg' is intentionally NOT here — a viewer should render an SVG as a graphic (the image lens), not as
	// source. An SVG loaded via <img src> is script-inert, so rendering it is safe. A host that wants SVG source
	// can register a renderer that claims it.
	'js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'json5', 'html', 'htm', 'xml', 'xhtml',
	'css', 'scss', 'less', 'sass', 'sql', 'sh', 'bash', 'zsh', 'fish', 'py', 'rb', 'go', 'rs', 'java',
	'c', 'h', 'cpp', 'cc', 'cxx', 'hpp', 'cs', 'php', 'pl', 'pm', 'lua', 'swift', 'kt', 'kts', 'scala',
	'dart', 'r', 'groovy', 'gradle', 'vue', 'svelte', 'yaml', 'yml', 'toml'
];
const MARKDOWN_EXTENSIONS = [ 'md', 'markdown', 'mdown', 'mkd', 'mkdn', 'mdx' ];
const TEXT_EXTENSIONS =
[
	'txt', 'text', 'log', 'csv', 'tsv', 'conf', 'cfg', 'ini', 'env', 'properties', 'list', 'diff', 'patch',
	'srt', 'vtt', 'nfo', 'me', 'readme'
];

// Extension → the highlighter language pict-section-code understands. Unknown languages degrade safely in the
// highlighter (escape + render), so an unmapped extension just falls back to itself.
const LANGUAGE_BY_EXTENSION =
{
	js: 'javascript', mjs: 'javascript', cjs: 'javascript', jsx: 'javascript', ts: 'javascript', tsx: 'javascript',
	json: 'json', json5: 'json',
	html: 'html', htm: 'html', xml: 'html', xhtml: 'html', vue: 'html', svelte: 'html',
	css: 'css', scss: 'css', less: 'css', sass: 'css',
	sql: 'sql'
};

// Config Kind → family (the strongest, config-tier signal).
const KIND_CODE = [ 'code', 'source', 'sourcecode' ];
const KIND_MARKDOWN = [ 'markdown' ];
const KIND_TEXT = [ 'text', 'plaintext', 'plain', 'log' ];

function lowerKind(pDescriptor) { return String((pDescriptor && pDescriptor.Kind) || '').toLowerCase(); }
function lowerExt(pDescriptor) { return String((pDescriptor && pDescriptor.Extension) || '').toLowerCase(); }
function lowerMIME(pDescriptor) { return String((pDescriptor && pDescriptor.MIMEType) || '').toLowerCase().split(';')[0].trim(); }

function isTextualMIME(pMIME)
{
	if (!pMIME) { return false; }
	if (pMIME.indexOf('text/') === 0) { return true; }
	if (pMIME.indexOf('+xml') >= 0 || pMIME.indexOf('+json') >= 0) { return true; }
	return (
	[
		'application/json', 'application/xml', 'application/javascript', 'application/x-javascript',
		'application/x-sh', 'application/x-yaml', 'application/yaml', 'application/toml', 'application/sql'
	].indexOf(pMIME) >= 0);
}

// Image families. Only browser-renderable raster/vector formats belong here — a format a browser cannot paint
// into an <img> (TIFF, HEIC/HEIF, camera RAW, PSD) is deliberately excluded so it degrades to the download card
// rather than a broken image. (A server-side rendition service turning those into web formats is a later slice.)
const IMAGE_EXTENSIONS =
[
	'png', 'apng', 'jpg', 'jpeg', 'jpe', 'jfif', 'gif', 'webp', 'bmp', 'dib', 'svg', 'svgz', 'avif', 'ico', 'cur'
];
const NON_RENDERABLE_IMAGE_EXTENSIONS =
[
	'tif', 'tiff', 'heic', 'heif', 'psd', 'raw', 'cr2', 'cr3', 'nef', 'arw', 'dng', 'orf', 'rw2'
];
const NON_RENDERABLE_IMAGE_MIMES =
[
	'image/tiff', 'image/x-tiff', 'image/heic', 'image/heif', 'image/heic-sequence', 'image/heif-sequence',
	'image/vnd.adobe.photoshop', 'image/x-adobe-dng', 'image/x-canon-cr2', 'image/x-nikon-nef', 'image/x-sony-arw'
];
const KIND_IMAGE = [ 'image', 'picture', 'photo', 'photograph', 'bitmap' ];
const KIND_PDF = [ 'pdf' ];

// The oversize floor: raw bytes larger than this are never blitted into an <img> (an 800 MB flat image blows the
// browser's max-canvas and memory). Such a file degrades to the download card today; the enormous-image path
// (a server DZI pyramid → pict-section-openseadragon) registers a higher-priority renderer in a later slice.
// A coarse static hint because matches() has no provider handle — mirrors CodeRenderer._maxBytesHint.
const IMAGE_MAX_BYTES_HINT = 30000000;

/** Is this a browser-renderable image MIME (image/* but not one of the formats a browser cannot paint)? */
function isRenderableImageMIME(pMIME)
{
	if (!pMIME || pMIME.indexOf('image/') !== 0) { return false; }
	return (NON_RENDERABLE_IMAGE_MIMES.indexOf(pMIME) < 0);
}

/**
 * The shared image score for a descriptor (used by both the delegating and the self-contained image renderers so
 * they tie on score and resolve by Priority). Returns 0 when the file is not a renderable image, or is larger
 * than the oversize floor, so it degrades honestly to the download card.
 */
function scoreImage(pDescriptor)
{
	// Oversize: don't blit huge bytes into an <img>, even when the Kind says image.
	if (typeof pDescriptor.Size === 'number' && pDescriptor.Size > IMAGE_MAX_BYTES_HINT) { return 0; }

	const tmpExt = lowerExt(pDescriptor);
	const tmpMIME = lowerMIME(pDescriptor);

	// Formats a browser can't paint — step aside for the download card.
	if (NON_RENDERABLE_IMAGE_EXTENSIONS.indexOf(tmpExt) >= 0) { return 0; }
	if (NON_RENDERABLE_IMAGE_MIMES.indexOf(tmpMIME) >= 0) { return 0; }

	if (KIND_IMAGE.indexOf(lowerKind(pDescriptor)) >= 0) { return SCORE_KIND; }
	if (IMAGE_EXTENSIONS.indexOf(tmpExt) >= 0) { return SCORE_EXTENSION; }
	if (isRenderableImageMIME(tmpMIME)) { return SCORE_MIME; }
	return 0;
}

// Media families. Only formats a browser can play in a <video>/<audio> element belong here — a container a browser
// cannot decode (AVI, MKV, WMV, FLV; WMA, AIFF) is deliberately excluded so it degrades to the download card rather
// than a dead player. (A server-side transcode turning those into web formats is a later slice, exactly like the
// deep-zoom tiler.) Seeking in the renderable formats rides the browser's native HTTP Range requests, so a
// range-served file scrubs without downloading the whole clip — the same 206 contract the rest of fileview speaks.
const VIDEO_EXTENSIONS = [ 'mp4', 'm4v', 'webm', 'ogv' ];
const AUDIO_EXTENSIONS = [ 'mp3', 'm4a', 'aac', 'oga', 'ogg', 'opus', 'wav', 'flac', 'weba' ];
const NON_RENDERABLE_VIDEO_EXTENSIONS = [ 'avi', 'mkv', 'wmv', 'flv', 'mpeg', 'mpg', 'mpe', 'mov', '3gp', '3g2', 'm2ts', 'mts', 'ts', 'vob', 'divx', 'rm', 'rmvb' ];
const NON_RENDERABLE_AUDIO_EXTENSIONS = [ 'wma', 'aiff', 'aif', 'aifc', 'ape', 'amr', 'ra', 'mid', 'midi', 'au' ];
const NON_RENDERABLE_VIDEO_MIMES = [ 'video/x-msvideo', 'video/x-matroska', 'video/x-ms-wmv', 'video/x-flv', 'video/quicktime', 'video/mpeg', 'video/3gpp', 'video/mp2t', 'video/x-ms-asf' ];
const NON_RENDERABLE_AUDIO_MIMES = [ 'audio/x-ms-wma', 'audio/aiff', 'audio/x-aiff', 'audio/x-ape', 'audio/amr', 'audio/midi', 'audio/x-midi', 'audio/basic', 'audio/vnd.rn-realaudio' ];
const KIND_VIDEO = [ 'video', 'movie', 'film', 'clip' ];
const KIND_AUDIO = [ 'audio', 'sound', 'music', 'song', 'track', 'voice', 'podcast' ];

/**
 * The shared video score for a descriptor (used by both the delegating and the self-contained <video> renderers so
 * they tie on score and resolve by Priority). Returns 0 when the file is not a browser-playable video — including a
 * container a browser cannot decode — so it degrades honestly to the download card. There is no oversize cap: a
 * video streams over Range, so its byte count never forces a decision.
 */
function scoreVideo(pDescriptor)
{
	const tmpExt = lowerExt(pDescriptor);
	const tmpMIME = lowerMIME(pDescriptor);
	if (NON_RENDERABLE_VIDEO_EXTENSIONS.indexOf(tmpExt) >= 0) { return 0; }
	if (NON_RENDERABLE_VIDEO_MIMES.indexOf(tmpMIME) >= 0) { return 0; }

	if (KIND_VIDEO.indexOf(lowerKind(pDescriptor)) >= 0) { return SCORE_KIND; }
	if (VIDEO_EXTENSIONS.indexOf(tmpExt) >= 0) { return SCORE_EXTENSION; }
	if (tmpMIME.indexOf('video/') === 0) { return SCORE_MIME; }
	return 0;
}

/**
 * The shared audio score for a descriptor (used by both the delegating and the self-contained <audio> renderers).
 * Returns 0 when the file is not a browser-playable audio format so it degrades to the download card.
 */
function scoreAudio(pDescriptor)
{
	const tmpExt = lowerExt(pDescriptor);
	const tmpMIME = lowerMIME(pDescriptor);
	if (NON_RENDERABLE_AUDIO_EXTENSIONS.indexOf(tmpExt) >= 0) { return 0; }
	if (NON_RENDERABLE_AUDIO_MIMES.indexOf(tmpMIME) >= 0) { return 0; }

	if (KIND_AUDIO.indexOf(lowerKind(pDescriptor)) >= 0) { return SCORE_KIND; }
	if (AUDIO_EXTENSIONS.indexOf(tmpExt) >= 0) { return SCORE_EXTENSION; }
	if (tmpMIME.indexOf('audio/') === 0) { return SCORE_MIME; }
	return 0;
}

// -------------------------------------------------------------------------------------------------------------
// The download card: the universal fallback. Matches every descriptor at the floor score, so a resolver that
// finds nothing better always lands here and shows name + type + size with a download affordance when the bytes
// have an address. Downloading is the viewer's reader clicking a plain anchor — the viewer never fetches on its
// own.
// -------------------------------------------------------------------------------------------------------------
const DownloadCardRenderer =
{
	Hash: 'Fileview-Renderer-DownloadCard',
	Priority: -1000,   // the floor: anything with a real opinion outranks it

	matches: function (pDescriptor)
	{
		return SCORE_FALLBACK;
	},

	mount: function (pContainerSelector, pDescriptor, pFileviewProvider)
	{
		const tmpProvider = pFileviewProvider;
		const tmpName = pDescriptor.Name || 'Untitled file';
		const tmpType = pDescriptor.MIMEType || (pDescriptor.Extension ? ('.' + pDescriptor.Extension) : 'Unknown type');
		const tmpSize = (typeof pDescriptor.Size === 'number' && pDescriptor.Size >= 0) ? tmpProvider._formatBytes(pDescriptor.Size) : '';
		const tmpGlyph = tmpProvider._icon('File', 1.8);
		const tmpDownloadGlyph = tmpProvider._icon('Download');

		let tmpSub = tmpProvider._esc(tmpType);
		if (tmpSize) { tmpSub += ' · ' + tmpProvider._esc(tmpSize); }

		let tmpAction = '';
		if (pDescriptor.URL)
		{
			// A plain anchor — the reader initiates the download. `download` hints the save-as filename.
			tmpAction = '<div class="pfv-card-actions">'
				+ '<a class="pfv-btn pfv-btn-primary" href="' + tmpProvider._esc(pDescriptor.URL) + '" download'
				+ (pDescriptor.Name ? ('="' + tmpProvider._esc(pDescriptor.Name) + '"') : '')
				+ '>' + tmpDownloadGlyph + 'Download</a></div>';
		}

		const tmpHTML = '<div class="pfv-card">'
			+ '<div class="pfv-card-icon">' + tmpGlyph + '</div>'
			+ '<div class="pfv-card-meta">'
			+ '<div class="pfv-card-name">' + tmpProvider._esc(tmpName) + '</div>'
			+ '<div class="pfv-card-sub">' + tmpSub + '</div>'
			+ '</div>'
			+ tmpAction
			+ '</div>';

		tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, tmpHTML);

		return (
		{
			Hash: DownloadCardRenderer.Hash,
			Descriptor: pDescriptor,
			ChildViewHash: null,
			destroy: function ()
			{
				tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, '');
			}
		});
	}
};

// -------------------------------------------------------------------------------------------------------------
// Text: fetch a textual file and show it in a <pre>. Self-contained (no external dependency), and the graceful
// degrade for code/markdown when their specialized renderers abstain. Capped by TextMaxBytes (a Range read) so
// an enormous log does not lock the tab.
// -------------------------------------------------------------------------------------------------------------
const TextRenderer =
{
	Hash: 'Fileview-Renderer-Text',
	Priority: 0,

	// Needs some way to fetch the bytes; without one it abstains so the download card takes over.
	Capability: function (pFileviewProvider) { return (pFileviewProvider._getFetch() !== null); },

	matches: function (pDescriptor)
	{
		const tmpKind = lowerKind(pDescriptor);
		if (KIND_TEXT.indexOf(tmpKind) >= 0) { return SCORE_KIND; }

		const tmpExt = lowerExt(pDescriptor);
		if (TEXT_EXTENSIONS.indexOf(tmpExt) >= 0
			|| CODE_EXTENSIONS.indexOf(tmpExt) >= 0
			|| MARKDOWN_EXTENSIONS.indexOf(tmpExt) >= 0)
		{
			return SCORE_EXTENSION;
		}

		if (isTextualMIME(lowerMIME(pDescriptor))) { return SCORE_MIME; }
		return 0;
	},

	mount: function (pContainerSelector, pDescriptor, pFileviewProvider)
	{
		const tmpProvider = pFileviewProvider;
		const tmpMax = tmpProvider._textMaxBytes();

		tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector,
			'<div class="pfv-textwrap"><div class="pfv-loading">' + tmpProvider._icon('File') + ' Loading…</div></div>');

		function fLoad(pFeedDescriptor)
		{
			return tmpProvider.fetchFileText(pFeedDescriptor.URL, { MaxBytes: tmpMax }).then((pText) =>
			{
				const tmpTruncated = (typeof pFeedDescriptor.Size === 'number' && pFeedDescriptor.Size > tmpMax);
				const tmpNotice = tmpTruncated
					? ('<div class="pfv-notice">Showing the first ' + tmpProvider._formatBytes(tmpMax) + ' of '
						+ tmpProvider._formatBytes(pFeedDescriptor.Size) + ' — download the file for the rest.</div>')
					: '';
				tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector,
					'<div class="pfv-textwrap">' + tmpNotice + '<pre class="pfv-text">' + tmpProvider._esc(pText) + '</pre></div>');
			}).catch((pError) =>
			{
				tmpProvider._paintRendererError(pContainerSelector, 'Could not load this file for display.', pError);
			});
		}

		const tmpHandle =
		{
			Hash: TextRenderer.Hash,
			Descriptor: pDescriptor,
			ChildViewHash: null,
			update: function (pNextDescriptor) { this.Descriptor = pNextDescriptor; return fLoad(pNextDescriptor); },
			destroy: function () { tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, ''); }
		};
		tmpHandle.Ready = fLoad(pDescriptor);
		return tmpHandle;
	}
};

// -------------------------------------------------------------------------------------------------------------
// Code: delegate to pict-section-code (CodeJar, read-only, line numbers). The child class is host-provided
// (config.CodeSectionClass or window.PictSectionCode) and CodeJar is a page global — when either is absent, or
// the file is larger than CodeMaxBytes, this abstains and the Text renderer renders it as plain text.
// -------------------------------------------------------------------------------------------------------------
const CodeRenderer =
{
	Hash: 'Fileview-Renderer-Code',
	Priority: 100,

	Capability: function (pFileviewProvider)
	{
		return (!!pFileviewProvider._resolveCodeSectionClass()
			&& pFileviewProvider._isCodeJarAvailable()
			&& (pFileviewProvider._getFetch() !== null));
	},

	matches: function (pDescriptor)
	{
		const tmpKind = lowerKind(pDescriptor);
		if (KIND_CODE.indexOf(tmpKind) >= 0) { return SCORE_KIND; }

		// A file larger than the highlight budget scores 0 so Code steps aside for Text (which Range-caps).
		if (typeof pDescriptor.Size === 'number' && pDescriptor.Size > CodeRenderer._maxBytesHint) { return 0; }

		const tmpExt = lowerExt(pDescriptor);
		if (CODE_EXTENSIONS.indexOf(tmpExt) >= 0) { return SCORE_EXTENSION; }

		const tmpMIME = lowerMIME(pDescriptor);
		if (tmpMIME.indexOf('text/x-') === 0
			|| [ 'application/json', 'application/xml', 'application/javascript', 'application/x-javascript', 'application/x-sh', 'application/sql' ].indexOf(tmpMIME) >= 0)
		{
			return SCORE_MIME;
		}
		return 0;
	},

	// A coarse upper bound used only by matches() (which has no provider handle). The real, configurable cap is
	// enforced in Capability() and in the Range-capped fetch at mount; this just keeps the obvious giant off the
	// highlighter. Overridable by a host that re-registers the renderer.
	_maxBytesHint: 8000000,

	mount: function (pContainerSelector, pDescriptor, pFileviewProvider)
	{
		const tmpProvider = pFileviewProvider;
		const tmpSectionClass = tmpProvider._resolveCodeSectionClass();
		const tmpHostId = tmpProvider.identifier + '-CodeHost';
		const tmpChildHash = tmpProvider._nextChildHash('CodeChild');

		tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector,
			'<div id="' + tmpHostId + '" class="pfv-code-host"></div>');

		const tmpChildConfiguration = Object.assign({}, (tmpSectionClass.default_configuration || {}),
		{
			RenderOnLoad: false,
			CSSHash: 'Pict-Section-Code-CSS',
			DefaultRenderable: tmpChildHash + '-Wrap',
			DefaultDestinationAddress: '#' + tmpHostId,
			TargetElementAddress: '#' + tmpHostId,
			Templates: [ { Hash: tmpChildHash + '-Template', Template: '<!-- fileview code host -->' } ],
			Renderables: [ { RenderableHash: tmpChildHash + '-Wrap', TemplateHash: tmpChildHash + '-Template', DestinationAddress: '#' + tmpHostId, RenderMethod: 'replace' } ],
			Language: tmpProvider._languageForDescriptor(pDescriptor),
			ReadOnly: true,
			LineNumbers: true,
			DefaultCode: ''
		});

		tmpProvider.pict.addView(tmpChildHash, tmpChildConfiguration, tmpSectionClass);
		const tmpChild = tmpProvider.pict.views[tmpChildHash];

		// Building the editor (and connecting CodeJar) happens in the child's onAfterInitialRender during render.
		try { if (tmpChild && (typeof tmpChild.render === 'function')) { tmpChild.render(); } }
		catch (pError) { tmpProvider.log.warn('pict-section-fileview: code child render() threw.', { Error: pError.message }); }

		function fFeed(pFeedDescriptor)
		{
			return tmpProvider.fetchFileText(pFeedDescriptor.URL, { MaxBytes: tmpProvider._codeMaxBytes() }).then((pText) =>
			{
				if (!tmpChild) { return; }
				if (typeof tmpChild.setLanguage === 'function')
				{
					try { tmpChild.setLanguage(tmpProvider._languageForDescriptor(pFeedDescriptor)); }
					catch (pError) { /* language swap is best-effort */ }
				}
				if (typeof tmpChild.setCode === 'function') { tmpChild.setCode(pText); }
			}).catch((pError) =>
			{
				tmpProvider._paintRendererError(pContainerSelector, 'Could not load this file for display.', pError);
			});
		}

		const tmpHandle =
		{
			Hash: CodeRenderer.Hash,
			Descriptor: pDescriptor,
			ChildViewHash: tmpChildHash,
			update: function (pNextDescriptor) { this.Descriptor = pNextDescriptor; return fFeed(pNextDescriptor); },
			destroy: function ()
			{
				try { if (tmpChild && (typeof tmpChild.destroy === 'function')) { tmpChild.destroy(); } }
				catch (pError) { /* CodeJar teardown is best-effort */ }
				tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, '');
			}
		};
		tmpHandle.Ready = fFeed(pDescriptor);
		return tmpHandle;
	}
};

// -------------------------------------------------------------------------------------------------------------
// Markdown: delegate to pict-section-content's parseMarkdown (DOM-free — we assign the HTML into our own stage
// element, so two markdown viewers on one page never collide on a shared body id). The content provider class
// is host-provided (config.ContentProviderClass or window.PictSectionContent.PictContentProvider).
// -------------------------------------------------------------------------------------------------------------
const MarkdownRenderer =
{
	Hash: 'Fileview-Renderer-Markdown',
	Priority: 100,

	Capability: function (pFileviewProvider)
	{
		return (!!pFileviewProvider._resolveContentProviderClass() && (pFileviewProvider._getFetch() !== null));
	},

	matches: function (pDescriptor)
	{
		const tmpKind = lowerKind(pDescriptor);
		if (KIND_MARKDOWN.indexOf(tmpKind) >= 0) { return SCORE_KIND; }

		const tmpExt = lowerExt(pDescriptor);
		if (MARKDOWN_EXTENSIONS.indexOf(tmpExt) >= 0) { return SCORE_EXTENSION; }

		const tmpMIME = lowerMIME(pDescriptor);
		if (tmpMIME === 'text/markdown' || tmpMIME === 'text/x-markdown') { return SCORE_MIME; }
		return 0;
	},

	mount: function (pContainerSelector, pDescriptor, pFileviewProvider)
	{
		const tmpProvider = pFileviewProvider;
		const tmpContentProvider = tmpProvider._ensureContentProvider();
		const tmpBodyId = tmpProvider.identifier + '-MarkdownBody';

		tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector,
			'<div id="' + tmpBodyId + '" class="pict-content pfv-content-host"><div class="pfv-loading">Loading…</div></div>');

		function fLoad(pFeedDescriptor)
		{
			return tmpProvider.fetchFileText(pFeedDescriptor.URL, { MaxBytes: tmpProvider._textMaxBytes() }).then((pText) =>
			{
				let tmpHTML;
				try { tmpHTML = tmpContentProvider.parseMarkdown(pText); }
				catch (pError) { tmpHTML = '<pre class="pfv-text">' + tmpProvider._esc(pText) + '</pre>'; }
				tmpProvider.pict.ContentAssignment.assignContent('#' + tmpBodyId, tmpHTML);
			}).catch((pError) =>
			{
				tmpProvider._paintRendererError(pContainerSelector, 'Could not load this document for display.', pError);
			});
		}

		const tmpHandle =
		{
			Hash: MarkdownRenderer.Hash,
			Descriptor: pDescriptor,
			ChildViewHash: null,
			update: function (pNextDescriptor) { this.Descriptor = pNextDescriptor; return fLoad(pNextDescriptor); },
			destroy: function () { tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, ''); }
		};
		tmpHandle.Ready = fLoad(pDescriptor);
		return tmpHandle;
	}
};

// -------------------------------------------------------------------------------------------------------------
// Image (basic): a self-contained, responsive <img> that fits the stage — the universal image lens. No external
// dependency and no fetch (the browser loads <img src> directly), so an ordinary image always shows even when
// the nicer pict-section-image module is not on the page. It is the image counterpart of the Text degrade.
// -------------------------------------------------------------------------------------------------------------
const BasicImageRenderer =
{
	Hash: 'Fileview-Renderer-ImageBasic',
	Priority: 0,

	matches: function (pDescriptor) { return scoreImage(pDescriptor); },

	mount: function (pContainerSelector, pDescriptor, pFileviewProvider)
	{
		const tmpProvider = pFileviewProvider;

		function fPaint(pFeedDescriptor)
		{
			const tmpAlt = tmpProvider._esc(pFeedDescriptor.Name || 'Image');
			tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector,
				'<div class="pfv-imagewrap"><img class="pfv-image" alt="' + tmpAlt + '" src="'
				+ tmpProvider._esc(pFeedDescriptor.URL || '') + '" /></div>');
		}
		fPaint(pDescriptor);

		return (
		{
			Hash: BasicImageRenderer.Hash,
			Descriptor: pDescriptor,
			ChildViewHash: null,
			Ready: Promise.resolve(),
			update: function (pNextDescriptor) { this.Descriptor = pNextDescriptor; fPaint(pNextDescriptor); },
			destroy: function () { tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, ''); }
		});
	}
};

// -------------------------------------------------------------------------------------------------------------
// Image (delegated): mount pict-section-image for the full zoom/pan/download chrome. Host-provided
// (config.ImageSectionClass or window.PictSectionImage); when absent, this abstains and BasicImageRenderer
// paints the plain <img>. fileview owns the toolbar, so the child runs with ShowToolbar:false.
// -------------------------------------------------------------------------------------------------------------
const ImageRenderer =
{
	Hash: 'Fileview-Renderer-Image',
	Priority: 100,

	Capability: function (pFileviewProvider) { return !!pFileviewProvider._resolveImageSectionClass(); },

	matches: function (pDescriptor) { return scoreImage(pDescriptor); },

	mount: function (pContainerSelector, pDescriptor, pFileviewProvider)
	{
		const tmpProvider = pFileviewProvider;
		const tmpSectionClass = tmpProvider._resolveImageSectionClass();
		const tmpHostId = tmpProvider.identifier + '-ImageHost';
		const tmpChildHash = tmpProvider._nextChildHash('ImageChild');

		tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector,
			'<div id="' + tmpHostId + '" class="pfv-image-host"></div>');

		const tmpChildConfiguration = Object.assign({}, (tmpSectionClass.default_configuration || {}),
		{
			RenderOnLoad: false,
			DefaultRenderable: tmpChildHash + '-Wrap',
			DefaultDestinationAddress: '#' + tmpHostId,
			TargetElementAddress: '#' + tmpHostId,
			Templates: [ { Hash: tmpChildHash + '-Template', Template: '<!-- fileview image host -->' } ],
			Renderables: [ { RenderableHash: tmpChildHash + '-Wrap', TemplateHash: tmpChildHash + '-Template', DestinationAddress: '#' + tmpHostId, RenderMethod: 'replace' } ],
			ShowToolbar: false,   // fileview owns the chrome
			Checkerboard: true
		});

		tmpProvider.pict.addView(tmpChildHash, tmpChildConfiguration, tmpSectionClass);
		const tmpChild = tmpProvider.pict.views[tmpChildHash];

		try { if (tmpChild && (typeof tmpChild.render === 'function')) { tmpChild.render(); } }
		catch (pError) { tmpProvider.log.warn('pict-section-fileview: image child render() threw.', { Error: pError.message }); }

		function fFeed(pFeedDescriptor)
		{
			if (tmpChild && (typeof tmpChild.setImage === 'function'))
			{
				tmpChild.setImage({ URL: pFeedDescriptor.URL, Name: pFeedDescriptor.Name, AltText: pFeedDescriptor.Name });
			}
		}
		fFeed(pDescriptor);

		return (
		{
			Hash: ImageRenderer.Hash,
			Descriptor: pDescriptor,
			ChildViewHash: tmpChildHash,
			Ready: Promise.resolve(),
			update: function (pNextDescriptor) { this.Descriptor = pNextDescriptor; fFeed(pNextDescriptor); },
			destroy: function ()
			{
				try { if (tmpChild && (typeof tmpChild.destroy === 'function')) { tmpChild.destroy(); } }
				catch (pError) { /* child teardown is best-effort */ }
				tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, '');
			}
		});
	}
};

// -------------------------------------------------------------------------------------------------------------
// PDF: render pages to canvas with PDF.js (page-lazy, Range-fed). PDF.js is host-provided (config.PdfLibrary or
// the window.pdfjsLib page global) and fetches the URL itself with HTTP Range requests — so pages load on demand
// straight from a Range-capable server (orator-file-service, a Sluice depot, a bare 206 URL). When PDF.js is
// absent this abstains and the file falls through to the download card. Self-contained: it does not delegate to a
// child pict-view (a <canvas> painted by PDF.js is inherently imperative, like the <img> in pict-section-image).
// -------------------------------------------------------------------------------------------------------------
const PdfRenderer =
{
	Hash: 'Fileview-Renderer-PDF',
	Priority: 100,

	Capability: function (pFileviewProvider) { return !!pFileviewProvider._resolvePdfLibrary(); },

	matches: function (pDescriptor)
	{
		if (KIND_PDF.indexOf(lowerKind(pDescriptor)) >= 0) { return SCORE_KIND; }
		if (lowerExt(pDescriptor) === 'pdf') { return SCORE_EXTENSION; }
		if (lowerMIME(pDescriptor) === 'application/pdf') { return SCORE_MIME; }
		return 0;
	},

	mount: function (pContainerSelector, pDescriptor, pFileviewProvider)
	{
		const tmpProvider = pFileviewProvider;
		const tmpPdfLib = tmpProvider._resolvePdfLibrary();
		const tmpHostId = tmpProvider.identifier + '-PdfHost';
		const tmpDocument = (typeof document !== 'undefined') ? document : null;

		// PDF.js needs a worker URL; honor a host-configured one if PDF.js hasn't been given one already.
		try
		{
			if (tmpPdfLib.GlobalWorkerOptions && !tmpPdfLib.GlobalWorkerOptions.workerSrc
				&& tmpProvider.fileviewConfig && tmpProvider.fileviewConfig.PdfWorkerSrc)
			{
				tmpPdfLib.GlobalWorkerOptions.workerSrc = tmpProvider.fileviewConfig.PdfWorkerSrc;
			}
		}
		catch (pError) { /* worker configuration is best-effort */ }

		const tmpState = { Document: null, LoadingTask: null, Observer: null, Destroyed: false };

		function fHostElement()
		{
			const tmpSet = tmpProvider.pict.ContentAssignment.getElement('#' + tmpHostId);
			return (tmpSet && tmpSet.length) ? tmpSet[0] : null;
		}

		function fRenderPage(pPageElement, pPageNumber, pScale)
		{
			if (!tmpState.Document || !tmpDocument) { return Promise.resolve(); }
			if (pPageElement.getAttribute('data-rendered') === '1') { return Promise.resolve(); }
			pPageElement.setAttribute('data-rendered', '1');

			return tmpState.Document.getPage(pPageNumber).then((pPage) =>
			{
				if (tmpState.Destroyed) { return; }
				const tmpViewport = pPage.getViewport({ scale: pScale });
				const tmpCanvas = tmpDocument.createElement('canvas');
				tmpCanvas.className = 'pfv-pdf-canvas';
				tmpCanvas.width = Math.floor(tmpViewport.width);
				tmpCanvas.height = Math.floor(tmpViewport.height);
				pPageElement.appendChild(tmpCanvas);
				let tmpContext = null;
				try { tmpContext = (typeof tmpCanvas.getContext === 'function') ? tmpCanvas.getContext('2d') : null; }
				catch (pError) { tmpContext = null; }   // headless canvases have no 2d context
				try { pPage.render({ canvasContext: tmpContext, viewport: tmpViewport }); }
				catch (pError) { /* render failures leave the (sized) placeholder in place */ }
			}).catch((pError) => { /* a single page failing should not break the document */ });
		}

		function fLayoutAndRender()
		{
			const tmpHostElement = fHostElement();
			if (!tmpHostElement || !tmpState.Document) { return Promise.resolve(); }

			// Size every page from page 1 at fit-width (pages in a PDF are near-always uniform); this lets us lay
			// out placeholders without fetching every page up front.
			return tmpState.Document.getPage(1).then((pFirstPage) =>
			{
				if (tmpState.Destroyed) { return; }
				const tmpAvailableWidth = (tmpHostElement.clientWidth || 800) - 24;
				const tmpBaseViewport = pFirstPage.getViewport({ scale: 1 });
				const tmpScale = (tmpBaseViewport.width > 0) ? (tmpAvailableWidth / tmpBaseViewport.width) : 1;
				const tmpPageHeight = Math.round(tmpBaseViewport.height * tmpScale);

				let tmpHTML = '';
				for (let tmpPage = 1; tmpPage <= tmpState.Document.numPages; tmpPage++)
				{
					tmpHTML += '<div class="pfv-pdf-page" data-page="' + tmpPage + '" style="height:' + tmpPageHeight + 'px"></div>';
				}
				tmpProvider.pict.ContentAssignment.assignContent('#' + tmpHostId, tmpHTML);

				const tmpPageElements = tmpHostElement.querySelectorAll('.pfv-pdf-page');

				// Lazy via IntersectionObserver when available (browser-level observer — a documented exception to
				// the no-addEventListener rule); otherwise render every page eagerly (headless / older engines).
				if (typeof IntersectionObserver === 'function')
				{
					tmpState.Observer = new IntersectionObserver((pEntries, pObserver) =>
					{
						for (let i = 0; i < pEntries.length; i++)
						{
							if (pEntries[i].isIntersecting)
							{
								const tmpElement = pEntries[i].target;
								fRenderPage(tmpElement, parseInt(tmpElement.getAttribute('data-page'), 10), tmpScale);
								pObserver.unobserve(tmpElement);
							}
						}
					}, { rootMargin: '300px 0px' });
					for (let i = 0; i < tmpPageElements.length; i++) { tmpState.Observer.observe(tmpPageElements[i]); }
					return;   // pages paint as the reader scrolls
				}

				let tmpRenders = [];
				for (let i = 0; i < tmpPageElements.length; i++)
				{
					tmpRenders.push(fRenderPage(tmpPageElements[i], parseInt(tmpPageElements[i].getAttribute('data-page'), 10), tmpScale));
				}
				return Promise.all(tmpRenders);
			}).catch((pError) => { tmpProvider._paintRendererError(pContainerSelector, 'Could not render this PDF.', pError); });
		}

		function fTeardownDocument()
		{
			if (tmpState.Observer) { try { tmpState.Observer.disconnect(); } catch (pError) { /* ok */ } tmpState.Observer = null; }
			if (tmpState.LoadingTask && (typeof tmpState.LoadingTask.destroy === 'function')) { try { tmpState.LoadingTask.destroy(); } catch (pError) { /* ok */ } }
			if (tmpState.Document && (typeof tmpState.Document.destroy === 'function')) { try { tmpState.Document.destroy(); } catch (pError) { /* ok */ } }
			tmpState.LoadingTask = null;
			tmpState.Document = null;
		}

		function fLoad(pFeedDescriptor)
		{
			fTeardownDocument();
			tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector,
				'<div id="' + tmpHostId + '" class="pfv-pdf"><div class="pfv-loading">' + tmpProvider._icon('File') + ' Loading…</div></div>');

			tmpState.LoadingTask = tmpPdfLib.getDocument(pFeedDescriptor.URL);
			return Promise.resolve(tmpState.LoadingTask.promise).then((pPdf) =>
			{
				if (tmpState.Destroyed) { return; }
				tmpState.Document = pPdf;
				// Clear the loading message before laying out pages.
				tmpProvider.pict.ContentAssignment.assignContent('#' + tmpHostId, '');
				return fLayoutAndRender();
			}).catch((pError) =>
			{
				tmpProvider._paintRendererError(pContainerSelector, 'Could not load this PDF.', pError);
			});
		}

		const tmpHandle =
		{
			Hash: PdfRenderer.Hash,
			Descriptor: pDescriptor,
			ChildViewHash: null,
			update: function (pNextDescriptor) { this.Descriptor = pNextDescriptor; return fLoad(pNextDescriptor); },
			destroy: function ()
			{
				tmpState.Destroyed = true;
				fTeardownDocument();
				tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, '');
			}
		};
		tmpHandle.Ready = fLoad(pDescriptor);
		return tmpHandle;
	}
};

// -------------------------------------------------------------------------------------------------------------
// Deep zoom (enormous images): mount OpenSeaDragon against a server tile pyramid (a DZI tile source). This is the
// path for images too large to blit into an <img> (where the ordinary image lenses score 0). It activates only
// when the descriptor carries Meta.TileSources — a DZI descriptor URL or an OpenSeaDragon tileSources value that
// the host (or a probe) attached, pointing at a tiler such as orator-file-service. OpenSeaDragon is host-provided
// (config.OpenSeadragon or the window.OpenSeadragon page global); absent ⇒ abstain (the file degrades to the
// download card). Self-contained: it news up OpenSeaDragon on its OWN instance-unique element, so unlike a
// delegate to pict-section-openseadragon (whose DOM ids are hardcoded) two deep-zoom fileviews can coexist on a
// page. Priority 200 so that, when a tile source is present, deep zoom outranks the ordinary image lenses.
// -------------------------------------------------------------------------------------------------------------
const DeepZoomRenderer =
{
	Hash: 'Fileview-Renderer-DeepZoom',
	Priority: 200,

	Capability: function (pFileviewProvider) { return !!pFileviewProvider._resolveOpenSeadragon(); },

	matches: function (pDescriptor)
	{
		// Only when a tile source is available — the client cannot tile on its own.
		if (pDescriptor && pDescriptor.Meta && pDescriptor.Meta.TileSources) { return SCORE_KIND; }
		return 0;
	},

	mount: function (pContainerSelector, pDescriptor, pFileviewProvider)
	{
		const tmpProvider = pFileviewProvider;
		const tmpOpenSeadragon = tmpProvider._resolveOpenSeadragon();
		const tmpHostId = tmpProvider.identifier + '-OSDHost';

		tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector,
			'<div id="' + tmpHostId + '" class="pfv-osd-host"></div>');

		let tmpViewer = null;

		function fHostElement()
		{
			const tmpSet = tmpProvider.pict.ContentAssignment.getElement('#' + tmpHostId);
			return (tmpSet && tmpSet.length) ? tmpSet[0] : null;
		}

		function fOpen(pFeedDescriptor)
		{
			const tmpTileSources = pFeedDescriptor.Meta && pFeedDescriptor.Meta.TileSources;

			if (tmpViewer)
			{
				// Re-point the live viewer (reuse-one-per-kind).
				try { tmpViewer.open(tmpTileSources); }
				catch (pError) { tmpProvider.log.warn('pict-section-fileview: OpenSeaDragon open() threw.', { Error: pError.message }); }
				return;
			}

			const tmpElement = fHostElement();
			if (!tmpElement) { return; }

			const tmpSettings = Object.assign(
				{
					element: tmpElement,
					tileSources: tmpTileSources,
					showNavigationControl: false,   // fileview owns the chrome; mouse/touch still zoom & pan
					showNavigator: false,
					crossOriginPolicy: 'Anonymous'
				},
				(tmpProvider.fileviewConfig && tmpProvider.fileviewConfig.OpenSeadragonOptions) || {});

			try { tmpViewer = tmpOpenSeadragon(tmpSettings); }
			catch (pError) { tmpProvider._paintRendererError(pContainerSelector, 'Could not open this image for deep zoom.', pError); }
		}
		fOpen(pDescriptor);

		return (
		{
			Hash: DeepZoomRenderer.Hash,
			Descriptor: pDescriptor,
			ChildViewHash: null,
			Ready: Promise.resolve(),
			update: function (pNextDescriptor) { this.Descriptor = pNextDescriptor; fOpen(pNextDescriptor); },
			destroy: function ()
			{
				try { if (tmpViewer && (typeof tmpViewer.destroy === 'function')) { tmpViewer.destroy(); } }
				catch (pError) { /* OSD teardown is best-effort */ }
				tmpViewer = null;
				tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, '');
			}
		});
	}
};

// -------------------------------------------------------------------------------------------------------------
// Video (basic): a self-contained, native <video controls> that fits the stage — the universal video lens. No
// external dependency (the browser owns playback + seeking over Range), so a web-playable video always shows even
// when the richer pict-section-video module is not on the page. The video counterpart of the Text / ImageBasic
// degrade.
// -------------------------------------------------------------------------------------------------------------
const BasicVideoRenderer =
{
	Hash: 'Fileview-Renderer-VideoBasic',
	Priority: 0,

	matches: function (pDescriptor) { return scoreVideo(pDescriptor); },

	mount: function (pContainerSelector, pDescriptor, pFileviewProvider)
	{
		const tmpProvider = pFileviewProvider;

		function fPaint(pFeedDescriptor)
		{
			const tmpPoster = (pFeedDescriptor.Meta && pFeedDescriptor.Meta.poster)
				? (' poster="' + tmpProvider._esc(pFeedDescriptor.Meta.poster) + '"') : '';
			tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector,
				'<div class="pfv-videowrap"><video class="pfv-video" controls playsinline preload="metadata"'
				+ tmpPoster + ' src="' + tmpProvider._esc(pFeedDescriptor.URL || '') + '"></video></div>');
		}
		fPaint(pDescriptor);

		return (
		{
			Hash: BasicVideoRenderer.Hash,
			Descriptor: pDescriptor,
			ChildViewHash: null,
			Ready: Promise.resolve(),
			update: function (pNextDescriptor) { this.Descriptor = pNextDescriptor; fPaint(pNextDescriptor); },
			destroy: function () { tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, ''); }
		});
	}
};

// -------------------------------------------------------------------------------------------------------------
// Video (delegated): mount pict-section-video for the bespoke control bar (play / seek / time / volume / rate /
// fullscreen). Host-provided (config.VideoSectionClass or window.PictSectionVideo); when absent, this abstains and
// BasicVideoRenderer paints the native <video controls>. fileview owns the file-identity toolbar (name / size /
// download / fullscreen), so the child runs with ShowFullscreen:false and ShowDownload:false but keeps its own
// transport controls (ShowToolbar:true) — those are the media controls, which fileview's toolbar does not provide.
// -------------------------------------------------------------------------------------------------------------
const VideoRenderer =
{
	Hash: 'Fileview-Renderer-Video',
	Priority: 100,

	Capability: function (pFileviewProvider) { return !!pFileviewProvider._resolveVideoSectionClass(); },

	matches: function (pDescriptor) { return scoreVideo(pDescriptor); },

	mount: function (pContainerSelector, pDescriptor, pFileviewProvider)
	{
		const tmpProvider = pFileviewProvider;
		const tmpSectionClass = tmpProvider._resolveVideoSectionClass();
		const tmpHostId = tmpProvider.identifier + '-VideoHost';
		const tmpChildHash = tmpProvider._nextChildHash('VideoChild');

		tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector,
			'<div id="' + tmpHostId + '" class="pfv-video-host"></div>');

		const tmpChildConfiguration = Object.assign({}, (tmpSectionClass.default_configuration || {}),
		{
			RenderOnLoad: false,
			DefaultRenderable: tmpChildHash + '-Wrap',
			DefaultDestinationAddress: '#' + tmpHostId,
			TargetElementAddress: '#' + tmpHostId,
			Templates: [ { Hash: tmpChildHash + '-Template', Template: '<!-- fileview video host -->' } ],
			Renderables: [ { RenderableHash: tmpChildHash + '-Wrap', TemplateHash: tmpChildHash + '-Template', DestinationAddress: '#' + tmpHostId, RenderMethod: 'replace' } ],
			ShowToolbar: true,       // the media transport controls (fileview does not provide these)
			ShowFullscreen: false,   // fileview owns fullscreen
			ShowDownload: false      // fileview owns the download affordance
		});

		tmpProvider.pict.addView(tmpChildHash, tmpChildConfiguration, tmpSectionClass);
		const tmpChild = tmpProvider.pict.views[tmpChildHash];

		try { if (tmpChild && (typeof tmpChild.render === 'function')) { tmpChild.render(); } }
		catch (pError) { tmpProvider.log.warn('pict-section-fileview: video child render() threw.', { Error: pError.message }); }

		function fFeed(pFeedDescriptor)
		{
			if (tmpChild && (typeof tmpChild.setVideo === 'function'))
			{
				tmpChild.setVideo(
				{
					URL: pFeedDescriptor.URL,
					Title: pFeedDescriptor.Name,
					Name: pFeedDescriptor.Name,
					PosterURL: (pFeedDescriptor.Meta && pFeedDescriptor.Meta.poster) || ''
				});
			}
		}
		fFeed(pDescriptor);

		return (
		{
			Hash: VideoRenderer.Hash,
			Descriptor: pDescriptor,
			ChildViewHash: tmpChildHash,
			Ready: Promise.resolve(),
			update: function (pNextDescriptor) { this.Descriptor = pNextDescriptor; fFeed(pNextDescriptor); },
			destroy: function ()
			{
				try { if (tmpChild && (typeof tmpChild.destroy === 'function')) { tmpChild.destroy(); } }
				catch (pError) { /* child teardown is best-effort */ }
				tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, '');
			}
		});
	}
};

// -------------------------------------------------------------------------------------------------------------
// Audio (basic): a self-contained, native <audio controls> — the universal audio lens, no external dependency.
// The audio counterpart of BasicVideoRenderer.
// -------------------------------------------------------------------------------------------------------------
const BasicAudioRenderer =
{
	Hash: 'Fileview-Renderer-AudioBasic',
	Priority: 0,

	matches: function (pDescriptor) { return scoreAudio(pDescriptor); },

	mount: function (pContainerSelector, pDescriptor, pFileviewProvider)
	{
		const tmpProvider = pFileviewProvider;

		function fPaint(pFeedDescriptor)
		{
			tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector,
				'<div class="pfv-audiowrap"><audio class="pfv-audio" controls preload="metadata" src="'
				+ tmpProvider._esc(pFeedDescriptor.URL || '') + '"></audio></div>');
		}
		fPaint(pDescriptor);

		return (
		{
			Hash: BasicAudioRenderer.Hash,
			Descriptor: pDescriptor,
			ChildViewHash: null,
			Ready: Promise.resolve(),
			update: function (pNextDescriptor) { this.Descriptor = pNextDescriptor; fPaint(pNextDescriptor); },
			destroy: function () { tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, ''); }
		});
	}
};

// -------------------------------------------------------------------------------------------------------------
// Audio (delegated): mount pict-section-audio for the titled player (cover art / icon, optional peaks waveform, and
// the transport controls). Host-provided (config.AudioSectionClass or window.PictSectionAudio); when absent, this
// abstains and BasicAudioRenderer paints the native <audio controls>. fileview owns the download affordance, so the
// child runs with ShowDownload:false.
// -------------------------------------------------------------------------------------------------------------
const AudioRenderer =
{
	Hash: 'Fileview-Renderer-Audio',
	Priority: 100,

	Capability: function (pFileviewProvider) { return !!pFileviewProvider._resolveAudioSectionClass(); },

	matches: function (pDescriptor) { return scoreAudio(pDescriptor); },

	mount: function (pContainerSelector, pDescriptor, pFileviewProvider)
	{
		const tmpProvider = pFileviewProvider;
		const tmpSectionClass = tmpProvider._resolveAudioSectionClass();
		const tmpHostId = tmpProvider.identifier + '-AudioHost';
		const tmpChildHash = tmpProvider._nextChildHash('AudioChild');

		tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector,
			'<div id="' + tmpHostId + '" class="pfv-audio-host"></div>');

		const tmpChildConfiguration = Object.assign({}, (tmpSectionClass.default_configuration || {}),
		{
			RenderOnLoad: false,
			DefaultRenderable: tmpChildHash + '-Wrap',
			DefaultDestinationAddress: '#' + tmpHostId,
			TargetElementAddress: '#' + tmpHostId,
			Templates: [ { Hash: tmpChildHash + '-Template', Template: '<!-- fileview audio host -->' } ],
			Renderables: [ { RenderableHash: tmpChildHash + '-Wrap', TemplateHash: tmpChildHash + '-Template', DestinationAddress: '#' + tmpHostId, RenderMethod: 'replace' } ],
			ShowToolbar: true,
			ShowDownload: false      // fileview owns the download affordance
		});

		tmpProvider.pict.addView(tmpChildHash, tmpChildConfiguration, tmpSectionClass);
		const tmpChild = tmpProvider.pict.views[tmpChildHash];

		try { if (tmpChild && (typeof tmpChild.render === 'function')) { tmpChild.render(); } }
		catch (pError) { tmpProvider.log.warn('pict-section-fileview: audio child render() threw.', { Error: pError.message }); }

		function fFeed(pFeedDescriptor)
		{
			if (tmpChild && (typeof tmpChild.setAudio === 'function'))
			{
				tmpChild.setAudio(
				{
					URL: pFeedDescriptor.URL,
					Title: pFeedDescriptor.Name,
					Name: pFeedDescriptor.Name,
					Subtitle: pFeedDescriptor.MIMEType || '',
					PosterURL: (pFeedDescriptor.Meta && pFeedDescriptor.Meta.poster) || '',
					Peaks: (pFeedDescriptor.Meta && pFeedDescriptor.Meta.peaks) || null
				});
			}
		}
		fFeed(pDescriptor);

		return (
		{
			Hash: AudioRenderer.Hash,
			Descriptor: pDescriptor,
			ChildViewHash: tmpChildHash,
			Ready: Promise.resolve(),
			update: function (pNextDescriptor) { this.Descriptor = pNextDescriptor; fFeed(pNextDescriptor); },
			destroy: function ()
			{
				try { if (tmpChild && (typeof tmpChild.destroy === 'function')) { tmpChild.destroy(); } }
				catch (pError) { /* child teardown is best-effort */ }
				tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, '');
			}
		});
	}
};

// Registration order is cosmetic (resolution is by score, then Priority, then ordinal). Floor first, then the
// generic degrades (text, basic image/video/audio), then the specialized delegates.
const BUILTIN_RENDERERS = [ DownloadCardRenderer, TextRenderer, BasicImageRenderer, BasicVideoRenderer, BasicAudioRenderer, MarkdownRenderer, CodeRenderer, ImageRenderer, VideoRenderer, AudioRenderer, PdfRenderer, DeepZoomRenderer ];

module.exports =
{
	BUILTIN_RENDERERS,
	DownloadCardRenderer,
	TextRenderer,
	CodeRenderer,
	MarkdownRenderer,
	BasicImageRenderer,
	ImageRenderer,
	BasicVideoRenderer,
	VideoRenderer,
	BasicAudioRenderer,
	AudioRenderer,
	PdfRenderer,
	DeepZoomRenderer,
	// Exported for hosts that build their own renderers against the same tiers / families.
	SCORE_KIND,
	SCORE_EXTENSION,
	SCORE_MIME,
	SCORE_FALLBACK,
	CODE_EXTENSIONS,
	MARKDOWN_EXTENSIONS,
	TEXT_EXTENSIONS,
	IMAGE_EXTENSIONS,
	VIDEO_EXTENSIONS,
	AUDIO_EXTENSIONS,
	LANGUAGE_BY_EXTENSION,
	scoreImage,
	scoreVideo,
	scoreAudio
};
