'use strict';

const libPictProvider = require('pict-provider');

const { FILEVIEW_CSS } = require('../Pict-Fileview-CSS.js');
const { BUILTIN_RENDERERS, LANGUAGE_BY_EXTENSION } = require('../BuiltinRenderers.js');
const libFileviewProbe = require('../Fileview-Probe.js');

/**
 * The fileview dispatch core — the DOM-free heart of pict-section-fileview.
 *
 * It owns three things and no rendering of its own:
 *   1. a pluggable renderer registry (registerRenderer / unregisterRenderer / listRenderers / getRenderer);
 *   2. descriptor normalization — a host may hand a complete record OR a bare URL string, and both become one
 *      FileDescriptor (locked decision #2);
 *   3. resolution — resolveRenderer(descriptor) picks the highest-scoring renderer whose Capability gate passes.
 *
 * The view (Pict-View-Fileview) is a thin shell that paints the container and calls renderFileview() here; the
 * registry/normalize/resolve methods are pure and unit-testable headless. Element ids derive from the instance's
 * ProviderIdentifier so multiple fileviews coexist on one page (locked decision #1).
 *
 * FileDescriptor (the contract every renderer reads):
 *   { URL, Name, Extension, MIMEType, Size, Kind, AcceptRanges, MagicBytes,
 *     Meta:{ title, language, poster, TileSources, duration, peaks },
 *     Probe:{ KindSource, MIMESource, ResolvedRendererHash, Strategy } }
 */
class PictFileviewProvider extends libPictProvider
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);

		// Providers register their own CSS (pict CLAUDE.md). The view uses the same hash, so it injects once.
		if (this.pict && this.pict.CSSMap && (typeof this.pict.CSSMap.addCSS === 'function'))
		{
			this.pict.CSSMap.addCSS('Pict-Section-Fileview-CSS', FILEVIEW_CSS, 500);
		}

		const tmpConfig = (this.options && this.options.FileviewConfig) || {};
		this.fileviewConfig = tmpConfig;

		// The registry: an ordered list plus a by-hash index for dedupe/replacement.
		this._renderers = [];
		this._rendererIndex = {};
		this._registrationOrdinal = 0;

		if (!tmpConfig.DisableBuiltins)
		{
			for (let i = 0; i < BUILTIN_RENDERERS.length; i++) { this.registerRenderer(BUILTIN_RENDERERS[i]); }
		}
		if (Array.isArray(tmpConfig.Renderers))
		{
			for (let i = 0; i < tmpConfig.Renderers.length; i++) { this.registerRenderer(tmpConfig.Renderers[i]); }
		}

		// Current file + mounted renderer handle.
		this._descriptor = null;
		this._currentHandle = null;

		// Fullscreen (fill-the-viewport) state + the document Escape handler installed only while maximized.
		this._fullscreen = false;
		this._keydownHandler = null;

		// Monotonic counter for instance-unique child view hashes (a delegated child per mount).
		this._childSerial = 0;

		// Observable state slot.
		const tmpId = this.identifier;
		if (this.pict && this.pict.AppData)
		{
			this.pict.AppData[tmpId] = this.pict.AppData[tmpId] || { Descriptor: null, ResolvedRendererHash: null };
		}

		// Seed an initial file if the config carried one.
		if (tmpConfig.File) { this.setFile(tmpConfig.File); }
	}

	/** The instance hash — the registration key for the provider, its view, and every element id. */
	get identifier()
	{
		return (this.options && (this.options.ProviderIdentifier || this.options.ViewIdentifier)) || 'Pict-Section-Fileview';
	}

	get stageSelector() { return '#' + this.identifier + '-Stage'; }
	get toolbarSelector() { return '#' + this.identifier + '-Toolbar'; }
	get rootSelector() { return '#' + this.identifier + '-Root'; }

	// ---------------------------------------------------------------------------------------------------------------
	// Registry
	// ---------------------------------------------------------------------------------------------------------------

	/**
	 * Register (or replace, by Hash) a renderer plugin. Returns the provider for chaining.
	 * @param {Object} pRenderer - { Hash, Priority?, Capability?, matches, prepareDescriptor?, mount }
	 */
	registerRenderer(pRenderer)
	{
		if (!pRenderer || !pRenderer.Hash || (typeof pRenderer.matches !== 'function') || (typeof pRenderer.mount !== 'function'))
		{
			this.log.warn('pict-section-fileview: ignoring an invalid renderer (needs Hash + matches() + mount()).', { Renderer: pRenderer });
			return this;
		}

		const tmpEntry = { Renderer: pRenderer, Ordinal: this._registrationOrdinal++ };

		if (Object.prototype.hasOwnProperty.call(this._rendererIndex, pRenderer.Hash))
		{
			// Replace in place, preserving list position.
			const tmpExisting = this._rendererIndex[pRenderer.Hash];
			for (let i = 0; i < this._renderers.length; i++)
			{
				if (this._renderers[i] === tmpExisting) { this._renderers[i] = tmpEntry; break; }
			}
		}
		else
		{
			this._renderers.push(tmpEntry);
		}
		this._rendererIndex[pRenderer.Hash] = tmpEntry;
		return this;
	}

	/** Remove a renderer by Hash. Returns true if one was removed. */
	unregisterRenderer(pHash)
	{
		if (!Object.prototype.hasOwnProperty.call(this._rendererIndex, pHash)) { return false; }
		const tmpEntry = this._rendererIndex[pHash];
		const tmpPosition = this._renderers.indexOf(tmpEntry);
		if (tmpPosition >= 0) { this._renderers.splice(tmpPosition, 1); }
		delete this._rendererIndex[pHash];
		return true;
	}

	/** The registered renderer plugins, in registration order. */
	listRenderers()
	{
		return this._renderers.map((pEntry) => { return pEntry.Renderer; });
	}

	/** Look up a renderer plugin by Hash (or null). */
	getRenderer(pHash)
	{
		const tmpEntry = this._rendererIndex[pHash];
		return tmpEntry ? tmpEntry.Renderer : null;
	}

	// ---------------------------------------------------------------------------------------------------------------
	// Descriptor normalization — a record OR a bare URL, both to one FileDescriptor (locked decision #2)
	// ---------------------------------------------------------------------------------------------------------------

	/**
	 * Normalize a host input into a FileDescriptor. Accepts:
	 *   - a string: treated as a URL (ProbeStrategy 'auto' — the probe itself is a later slice);
	 *   - an object: a record (Sluice StoredFile or a pre-built descriptor), mapped field-by-field with common
	 *     Sluice fallbacks. When the host hands a complete record with Kind set, ProbeStrategy is 'none'.
	 * No network is touched here — this is pure.
	 * @param {(string|Object)} pInput
	 * @returns {Object} FileDescriptor
	 */
	normalizeDescriptor(pInput)
	{
		let tmpRaw;
		let tmpStrategy;
		if (typeof pInput === 'string')
		{
			tmpRaw = { URL: pInput };
			tmpStrategy = 'auto';
		}
		else
		{
			tmpRaw = pInput || {};
			tmpStrategy = tmpRaw.ProbeStrategy || (tmpRaw.Kind ? 'none' : 'auto');
		}

		const tmpURL = tmpRaw.URL || tmpRaw.ContentURL || tmpRaw.Url || tmpRaw.Address || '';
		const tmpName = tmpRaw.Name || tmpRaw.FileName || tmpRaw.Filename || this._basename(tmpURL) || '';
		const tmpExtension = (tmpRaw.Extension || tmpRaw.FileExtension || this._extensionFromName(tmpName) || '').replace(/^\./, '').toLowerCase();
		const tmpMIME = tmpRaw.MIMEType || tmpRaw.MimeType || tmpRaw.ContentType || tmpRaw.Type || '';
		let tmpSize = tmpRaw.Size;
		if (typeof tmpSize !== 'number') { tmpSize = (typeof tmpRaw.FileSize === 'number') ? tmpRaw.FileSize : ((typeof tmpRaw.SizeInBytes === 'number') ? tmpRaw.SizeInBytes : null); }

		return (
		{
			URL: tmpURL,
			Name: tmpName,
			Extension: tmpExtension,
			MIMEType: tmpMIME,
			Size: tmpSize,
			Kind: tmpRaw.Kind || '',
			AcceptRanges: (typeof tmpRaw.AcceptRanges === 'boolean') ? tmpRaw.AcceptRanges : null,
			MagicBytes: tmpRaw.MagicBytes || null,
			Meta: Object.assign({}, tmpRaw.Meta),
			Probe: Object.assign({ KindSource: '', MIMESource: '', ResolvedRendererHash: '', Strategy: tmpStrategy }, tmpRaw.Probe)
		});
	}

	// ---------------------------------------------------------------------------------------------------------------
	// Resolution — highest score wins; Capability gate lets a renderer abstain; Priority then order break ties
	// ---------------------------------------------------------------------------------------------------------------

	/**
	 * Pick the best renderer for a descriptor. Score comes from each renderer's matches(); a renderer whose
	 * Capability(provider) returns false is skipped entirely (so a missing page-global library falls through to the
	 * next-best renderer, ultimately the download card). Ties break by Priority (higher wins) then registration order.
	 * @param {Object} pDescriptor
	 * @returns {Object|null} the winning renderer plugin
	 */
	resolveRenderer(pDescriptor)
	{
		let tmpBest = null;
		let tmpBestScore = -Infinity;
		let tmpBestPriority = -Infinity;
		let tmpBestOrdinal = Infinity;

		for (let i = 0; i < this._renderers.length; i++)
		{
			const tmpEntry = this._renderers[i];
			const tmpRenderer = tmpEntry.Renderer;

			if ((typeof tmpRenderer.Capability === 'function') && !tmpRenderer.Capability(this)) { continue; }

			let tmpScore;
			try { tmpScore = tmpRenderer.matches(pDescriptor); }
			catch (pError) { this.log.warn('pict-section-fileview: a renderer matches() threw; skipping it.', { Hash: tmpRenderer.Hash, Error: pError.message }); continue; }

			if (typeof tmpScore !== 'number' || !(tmpScore > 0)) { continue; }

			const tmpPriority = (typeof tmpRenderer.Priority === 'number') ? tmpRenderer.Priority : 0;
			if ((tmpScore > tmpBestScore)
				|| (tmpScore === tmpBestScore && tmpPriority > tmpBestPriority)
				|| (tmpScore === tmpBestScore && tmpPriority === tmpBestPriority && tmpEntry.Ordinal < tmpBestOrdinal))
			{
				tmpBest = tmpRenderer;
				tmpBestScore = tmpScore;
				tmpBestPriority = tmpPriority;
				tmpBestOrdinal = tmpEntry.Ordinal;
			}
		}

		return tmpBest;
	}

	// ---------------------------------------------------------------------------------------------------------------
	// Public API — point the viewer at a file
	// ---------------------------------------------------------------------------------------------------------------

	/**
	 * Point the viewer at a file (a record or a URL string). Normalizes, stores the descriptor in AppData, and
	 * re-paints the stage if the view has already rendered. Returns the resolved FileDescriptor.
	 * @param {(string|Object)} pInput
	 * @returns {Object} FileDescriptor
	 */
	setFile(pInput)
	{
		this._descriptor = (pInput === null || typeof pInput === 'undefined') ? null : this.normalizeDescriptor(pInput);

		const tmpId = this.identifier;
		if (this.pict && this.pict.AppData)
		{
			this.pict.AppData[tmpId] = this.pict.AppData[tmpId] || {};
			this.pict.AppData[tmpId].Descriptor = this._descriptor;
		}

		// Re-paint only if the container exists (the view has rendered at least once).
		if (this._stageExists()) { this.renderFileview(); }

		// Bare-URL inputs climb the probe ladder (async) to learn MIME / size / range support / magic, then
		// re-paint if the resolver's answer sharpens. Records that already carry a Kind are 'none' → no probe.
		if (this._descriptor
			&& this._descriptor.Probe
			&& this._descriptor.Probe.Strategy === 'auto'
			&& !this._descriptor.Probe.Probed
			&& this.fileviewConfig.Probe !== false)
		{
			this._probeAndRepaint(this._descriptor);
		}

		return this._descriptor;
	}

	/**
	 * Climb the probe ladder for a descriptor and merge the result (filling only blanks — a record's explicit
	 * values always win), then re-paint when something changed and a newer setFile has not superseded us.
	 * Fire-and-forget: never throws, and quietly no-ops when no fetch is available.
	 * @param {Object} pDescriptor
	 */
	_probeAndRepaint(pDescriptor)
	{
		const tmpFetch = this._getFetch();
		if (!tmpFetch) { pDescriptor.Probe.Probed = true; return; }

		libFileviewProbe.probeDescriptor(pDescriptor, { fetch: tmpFetch }).then((pEnrichment) =>
		{
			pDescriptor.Probe.Probed = true;
			if (this._descriptor !== pDescriptor) { return; }   // a newer setFile replaced this file mid-probe

			let tmpChanged = false;
			if (!pDescriptor.MIMEType && pEnrichment.MIMEType)
			{
				pDescriptor.MIMEType = pEnrichment.MIMEType;
				pDescriptor.Probe.MIMESource = pEnrichment.MIMESource;
				tmpChanged = true;
			}
			if ((pDescriptor.AcceptRanges === null) && (pEnrichment.AcceptRanges !== null))
			{
				pDescriptor.AcceptRanges = pEnrichment.AcceptRanges;
				tmpChanged = true;
			}
			if ((typeof pDescriptor.Size !== 'number') && (typeof pEnrichment.Size === 'number'))
			{
				pDescriptor.Size = pEnrichment.Size;
				tmpChanged = true;
			}
			if (!pDescriptor.MagicBytes && pEnrichment.MagicBytes)
			{
				pDescriptor.MagicBytes = pEnrichment.MagicBytes;
				tmpChanged = true;
			}

			if (tmpChanged && this._stageExists()) { this.renderFileview(); }
		}).catch((pError) =>
		{
			pDescriptor.Probe.Probed = true;
			this.log.warn('pict-section-fileview: probe failed.', { Error: (pError && pError.message) });
		});
	}

	/** The current FileDescriptor (or null). */
	get descriptor() { return this._descriptor; }

	// ---------------------------------------------------------------------------------------------------------------
	// Rendering — the view calls this from onAfterRender
	// ---------------------------------------------------------------------------------------------------------------

	/** Paint the toolbar + stage into the container the view rendered. */
	renderFileview()
	{
		if (!this.pict || !this.pict.ContentAssignment) { return; }
		this._renderToolbar();
		this._mountResolved();
		// A repaint never re-stamps the root, but keep the class in sync in case a full view re-render did.
		if (this._fullscreen) { this._applyFullscreenClass(true); }
	}

	// ---------------------------------------------------------------------------------------------------------------
	// Fullscreen — fill the browser viewport, and back (the viewer's own chrome; the embedded child runs headless)
	// ---------------------------------------------------------------------------------------------------------------

	/** Toggle the maximized (fill-the-viewport) presentation. */
	toggleFullscreen()
	{
		if (this._fullscreen) { this.exitFullscreen(); } else { this.enterFullscreen(); }
	}

	/** Maximize: lift the viewer root out of its host box to fill the browser viewport (Esc or the button restores). */
	enterFullscreen()
	{
		if (this._fullscreen) { return; }
		this._fullscreen = true;
		this._applyFullscreenClass(true);
		this._installEscapeHandler();
		this._renderToolbar();   // swap the glyph to "restore"
	}

	/** Restore the viewer to its host box. */
	exitFullscreen()
	{
		if (!this._fullscreen) { return; }
		this._fullscreen = false;
		this._applyFullscreenClass(false);
		this._removeEscapeHandler();
		this._renderToolbar();
	}

	/** Is the viewer currently maximized? */
	isFullscreen() { return this._fullscreen; }

	/** Add or remove the pfv-fullscreen class on the viewer root. */
	_applyFullscreenClass(pOn)
	{
		if (!this.pict || !this.pict.ContentAssignment || (typeof this.pict.ContentAssignment.getElement !== 'function')) { return; }
		const tmpSet = this.pict.ContentAssignment.getElement(this.rootSelector);
		const tmpRoot = (tmpSet && tmpSet.length > 0) ? tmpSet[0] : null;
		if (tmpRoot && tmpRoot.classList) { tmpRoot.classList[pOn ? 'add' : 'remove']('pfv-fullscreen'); }
	}

	/**
	 * Install a document-level Escape handler while maximized. A document keydown listener is the documented pict
	 * exception (a browser-level event with no element-level inline equivalent); it is added only while fullscreen
	 * and removed on exit / destroy.
	 */
	_installEscapeHandler()
	{
		if (this._keydownHandler || (typeof document === 'undefined') || (typeof document.addEventListener !== 'function')) { return; }
		const tmpSelf = this;
		this._keydownHandler = function (pEvent)
		{
			if (pEvent && pEvent.key === 'Escape' && tmpSelf._fullscreen) { tmpSelf.exitFullscreen(); }
		};
		document.addEventListener('keydown', this._keydownHandler);
	}

	/** Remove the document-level Escape handler. */
	_removeEscapeHandler()
	{
		if (this._keydownHandler && (typeof document !== 'undefined') && (typeof document.removeEventListener === 'function'))
		{
			document.removeEventListener('keydown', this._keydownHandler);
		}
		this._keydownHandler = null;
	}

	/** Register the maximize / restore glyphs in the icon registry (idempotent; no-op without an Icon provider). */
	_ensureFullscreenIcons()
	{
		if (!this.pict || !this.pict.providers || !this.pict.providers.Icon || (typeof this.pict.providers.Icon.registerSet !== 'function')) { return; }
		this.pict.providers.Icon.registerSet(
		{
			Outline:
			{
				Maximize: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
				Minimize: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/></svg>'
			}
		});
	}

	_renderToolbar()
	{
		const tmpDescriptor = this._descriptor;
		const tmpTitleGlyph = this._icon('File');
		const tmpName = tmpDescriptor ? (tmpDescriptor.Name || 'Untitled file') : 'File viewer';

		let tmpSub = '';
		if (tmpDescriptor)
		{
			const tmpBits = [];
			if (tmpDescriptor.MIMEType) { tmpBits.push(tmpDescriptor.MIMEType); }
			else if (tmpDescriptor.Extension) { tmpBits.push('.' + tmpDescriptor.Extension); }
			if (typeof tmpDescriptor.Size === 'number' && tmpDescriptor.Size >= 0) { tmpBits.push(this._formatBytes(tmpDescriptor.Size)); }
			tmpSub = tmpBits.join(' · ');
		}

		let tmpActions = '';

		// Maximize / restore — fills the browser viewport and back (config ShowFullscreen, default on). An inline
		// onclick survives the toolbar's re-render on every setFile (the pict rule against addEventListener).
		if (this.fileviewConfig.ShowFullscreen !== false)
		{
			this._ensureFullscreenIcons();
			const tmpGlyph = this._icon(this._fullscreen ? 'Minimize' : 'Maximize');
			const tmpTitle = this._fullscreen ? 'Exit full screen' : 'Full screen';
			const tmpHandlerTarget = "_Pict.providers['" + this._esc(this.identifier) + "']";
			tmpActions += '<button type="button" class="pfv-btn pfv-fullscreen-btn" title="' + tmpTitle + '"'
				+ ' onclick="' + tmpHandlerTarget + '.toggleFullscreen()">' + tmpGlyph + '</button>';
		}

		if (tmpDescriptor && tmpDescriptor.URL)
		{
			tmpActions += '<a class="pfv-btn" href="' + this._esc(tmpDescriptor.URL) + '" download'
				+ (tmpDescriptor.Name ? ('="' + this._esc(tmpDescriptor.Name) + '"') : '')
				+ '>' + this._icon('Download') + 'Download</a>';
		}

		const tmpHTML = '<div class="pfv-toolbar-title">' + tmpTitleGlyph
			+ '<span class="pfv-name">' + this._esc(tmpName) + '</span>'
			+ (tmpSub ? ('<span class="pfv-toolbar-sub">' + this._esc(tmpSub) + '</span>') : '')
			+ '</div>'
			+ '<div class="pfv-toolbar-actions">' + tmpActions + '</div>';

		this.pict.ContentAssignment.assignContent(this.toolbarSelector, tmpHTML);
	}

	_mountResolved()
	{
		const tmpStage = this.stageSelector;

		if (!this._descriptor)
		{
			this._destroyCurrentHandle();
			this.pict.ContentAssignment.assignContent(tmpStage,
				'<div class="pfv-empty"><span class="pfv-empty-glyph">' + this._icon('File', 2) + '</span><p>No file loaded.</p></div>');
			return;
		}

		const tmpRenderer = this.resolveRenderer(this._descriptor);
		if (!tmpRenderer)
		{
			// Should never happen (the download card always matches), but degrade honestly rather than render nothing.
			this._destroyCurrentHandle();
			this.pict.ContentAssignment.assignContent(tmpStage,
				'<div class="pfv-empty"><span class="pfv-empty-glyph">' + this._icon('Warning', 2) + '</span><p>No renderer matched this file.</p></div>');
			return;
		}

		if (typeof tmpRenderer.prepareDescriptor === 'function')
		{
			try { tmpRenderer.prepareDescriptor(this._descriptor, this); }
			catch (pError) { this.log.warn('pict-section-fileview: prepareDescriptor threw.', { Hash: tmpRenderer.Hash, Error: pError.message }); }
		}

		// Reuse-one-per-kind. Pict has no removeView, so re-minting a child per file leaks views/observers. When
		// the resolved renderer is the one already mounted:
		//   - same descriptor identity (a bare re-render) → nothing to do;
		//   - new file, renderer exposes update() → re-feed the live child in place, no teardown;
		//   - otherwise → fall through to a clean destroy + re-mount.
		if (this._currentHandle && this._currentHandle.Hash === tmpRenderer.Hash)
		{
			if (this._currentHandle.Descriptor === this._descriptor) { return; }
			if (typeof this._currentHandle.update === 'function')
			{
				this._currentHandle.Descriptor = this._descriptor;
				try { this._currentHandle.update(this._descriptor, this); return; }
				catch (pError) { this.log.warn('pict-section-fileview: a renderer update() threw; re-mounting.', { Hash: tmpRenderer.Hash, Error: pError.message }); }
			}
		}

		this._destroyCurrentHandle();
		this.pict.ContentAssignment.assignContent(tmpStage, '');

		let tmpHandle = null;
		try { tmpHandle = tmpRenderer.mount(tmpStage, this._descriptor, this); }
		catch (pError)
		{
			this.log.error('pict-section-fileview: a renderer mount() threw.', { Hash: tmpRenderer.Hash, Error: pError.message });
			this.pict.ContentAssignment.assignContent(tmpStage,
				'<div class="pfv-empty"><span class="pfv-empty-glyph">' + this._icon('Error', 2) + '</span><p>This file could not be displayed.</p></div>');
			return;
		}

		this._currentHandle = tmpHandle || null;
		const tmpId = this.identifier;
		if (this.pict && this.pict.AppData && this.pict.AppData[tmpId]) { this.pict.AppData[tmpId].ResolvedRendererHash = tmpRenderer.Hash; }
	}

	_destroyCurrentHandle()
	{
		if (this._currentHandle && (typeof this._currentHandle.destroy === 'function'))
		{
			try { this._currentHandle.destroy(); }
			catch (pError) { this.log.warn('pict-section-fileview: a renderer destroy() threw.', { Error: pError.message }); }
		}
		this._currentHandle = null;
	}

	/** Tear down the mounted renderer. Hosts call this when disposing the viewer. */
	destroy()
	{
		this._removeEscapeHandler();
		this._fullscreen = false;
		this._destroyCurrentHandle();
	}

	_stageExists()
	{
		if (!this.pict || !this.pict.ContentAssignment || (typeof this.pict.ContentAssignment.getElement !== 'function')) { return false; }
		const tmpElement = this.pict.ContentAssignment.getElement(this.stageSelector);
		if (!tmpElement) { return false; }
		if (typeof tmpElement.length === 'number') { return tmpElement.length > 0; }
		return true;
	}

	// ---------------------------------------------------------------------------------------------------------------
	// Content loading + delegate resolution the renderers lean on
	// ---------------------------------------------------------------------------------------------------------------

	/**
	 * The fetch implementation, in order: a host-injected config.Fetch (lets a test stub or a host REST client
	 * stand in), then the page global. Returns null when none is available — renderers that need bytes abstain
	 * so the download card takes over. The global is bound so it is not called with the wrong receiver.
	 * @returns {(Function|null)}
	 */
	_getFetch()
	{
		if (this.fileviewConfig && (typeof this.fileviewConfig.Fetch === 'function')) { return this.fileviewConfig.Fetch; }
		if ((typeof globalThis !== 'undefined') && (typeof globalThis.fetch === 'function')) { return globalThis.fetch.bind(globalThis); }
		if ((typeof window !== 'undefined') && (typeof window.fetch === 'function')) { return window.fetch.bind(window); }
		return null;
	}

	/**
	 * Fetch a file's text, optionally capped with a Range read so an enormous file does not lock the tab.
	 * @param {string} pURL
	 * @param {Object} [pOptions] - { MaxBytes?: number }
	 * @returns {Promise<string>}
	 */
	fetchFileText(pURL, pOptions)
	{
		const tmpOptions = pOptions || {};
		const tmpFetch = this._getFetch();
		if (!tmpFetch) { return Promise.reject(new Error('No fetch implementation available to load file content.')); }
		if (!pURL) { return Promise.reject(new Error('No URL to load.')); }

		const tmpRequest = {};
		if (typeof tmpOptions.MaxBytes === 'number' && tmpOptions.MaxBytes > 0)
		{
			tmpRequest.headers = { Range: 'bytes=0-' + (tmpOptions.MaxBytes - 1) };
		}

		return Promise.resolve(tmpFetch(pURL, tmpRequest)).then((pResponse) =>
		{
			if (!pResponse || (!pResponse.ok && pResponse.status !== 206))
			{
				throw new Error('HTTP ' + (pResponse ? pResponse.status : '0'));
			}
			return pResponse.text();
		});
	}

	/** The code child-section class: config.CodeSectionClass, else the page global, else null. */
	_resolveCodeSectionClass()
	{
		if (this.fileviewConfig && this.fileviewConfig.CodeSectionClass) { return this.fileviewConfig.CodeSectionClass; }
		if ((typeof window !== 'undefined') && window.PictSectionCode)
		{
			// The quack UMD bundle may expose the class directly or on a .default.
			return (typeof window.PictSectionCode === 'function') ? window.PictSectionCode : (window.PictSectionCode.default || null);
		}
		return null;
	}

	/** Is CodeJar (pict-section-code's editor engine) present as a page global? */
	_isCodeJarAvailable()
	{
		return ((typeof window !== 'undefined') && (typeof window.CodeJar === 'function'));
	}

	/** The image child-section class: config.ImageSectionClass, else the page global, else null. */
	_resolveImageSectionClass()
	{
		if (this.fileviewConfig && this.fileviewConfig.ImageSectionClass) { return this.fileviewConfig.ImageSectionClass; }
		if ((typeof window !== 'undefined') && window.PictSectionImage)
		{
			// The quack UMD bundle may expose the class directly or on a .default.
			return (typeof window.PictSectionImage === 'function') ? window.PictSectionImage : (window.PictSectionImage.default || null);
		}
		return null;
	}

	/** The video child-section class: config.VideoSectionClass, else the page global, else null. */
	_resolveVideoSectionClass()
	{
		if (this.fileviewConfig && this.fileviewConfig.VideoSectionClass) { return this.fileviewConfig.VideoSectionClass; }
		if ((typeof window !== 'undefined') && window.PictSectionVideo)
		{
			// The quack UMD bundle may expose the class directly or on a .default.
			return (typeof window.PictSectionVideo === 'function') ? window.PictSectionVideo : (window.PictSectionVideo.default || null);
		}
		return null;
	}

	/** The audio child-section class: config.AudioSectionClass, else the page global, else null. */
	_resolveAudioSectionClass()
	{
		if (this.fileviewConfig && this.fileviewConfig.AudioSectionClass) { return this.fileviewConfig.AudioSectionClass; }
		if ((typeof window !== 'undefined') && window.PictSectionAudio)
		{
			// The quack UMD bundle may expose the class directly or on a .default.
			return (typeof window.PictSectionAudio === 'function') ? window.PictSectionAudio : (window.PictSectionAudio.default || null);
		}
		return null;
	}

	/** The markdown content-provider class: config.ContentProviderClass, else the page global, else null. */
	_resolveContentProviderClass()
	{
		if (this.fileviewConfig && this.fileviewConfig.ContentProviderClass) { return this.fileviewConfig.ContentProviderClass; }
		if ((typeof window !== 'undefined') && window.PictSectionContent && window.PictSectionContent.PictContentProvider)
		{
			return window.PictSectionContent.PictContentProvider;
		}
		return null;
	}

	/** The PDF.js library: config.PdfLibrary, else the page global window.pdfjsLib, else null. */
	_resolvePdfLibrary()
	{
		if (this.fileviewConfig && this.fileviewConfig.PdfLibrary) { return this.fileviewConfig.PdfLibrary; }
		if ((typeof window !== 'undefined') && window.pdfjsLib) { return window.pdfjsLib; }
		return null;
	}

	/** The OpenSeadragon factory: config.OpenSeadragon, else the page global window.OpenSeadragon, else null. */
	_resolveOpenSeadragon()
	{
		if (this.fileviewConfig && (typeof this.fileviewConfig.OpenSeadragon === 'function')) { return this.fileviewConfig.OpenSeadragon; }
		if ((typeof window !== 'undefined') && (typeof window.OpenSeadragon === 'function')) { return window.OpenSeadragon; }
		return null;
	}

	/**
	 * Lazily register a single shared content provider (its parseMarkdown is stateless) and return it. Shared
	 * across every fileview instance under one hash so the markdown CSS registers once.
	 * @returns {Object|null}
	 */
	_ensureContentProvider()
	{
		const tmpHash = 'Fileview-Content-Provider';
		if (this.pict.providers[tmpHash]) { return this.pict.providers[tmpHash]; }
		const tmpClass = this._resolveContentProviderClass();
		if (!tmpClass) { return null; }
		this.pict.addProvider(tmpHash, {}, tmpClass);
		return this.pict.providers[tmpHash];
	}

	/** An instance-unique child view hash (so delegated children of different fileviews never collide). */
	_nextChildHash(pPrefix)
	{
		this._childSerial++;
		return this.identifier + '-' + (pPrefix || 'Child') + '-' + this._childSerial;
	}

	/** The highlighter language for a descriptor's extension (unmapped extensions fall back to themselves). */
	_languageForDescriptor(pDescriptor)
	{
		const tmpExt = String((pDescriptor && pDescriptor.Extension) || '').toLowerCase();
		return LANGUAGE_BY_EXTENSION[tmpExt] || tmpExt || 'plaintext';
	}

	/** The byte cap for the code highlighter (config CodeMaxBytes, default 2 MB). */
	_codeMaxBytes()
	{
		const tmpConfigured = this.fileviewConfig && this.fileviewConfig.CodeMaxBytes;
		return (typeof tmpConfigured === 'number' && tmpConfigured > 0) ? tmpConfigured : 2000000;
	}

	/** The byte cap for the plain-text / markdown fetch (config TextMaxBytes, default 5 MB). */
	_textMaxBytes()
	{
		const tmpConfigured = this.fileviewConfig && this.fileviewConfig.TextMaxBytes;
		return (typeof tmpConfigured === 'number' && tmpConfigured > 0) ? tmpConfigured : 5000000;
	}

	/** Paint a renderer's failure state into the stage and log it (shared by the content-loading renderers). */
	_paintRendererError(pContainerSelector, pMessage, pError)
	{
		this.log.warn('pict-section-fileview: ' + pMessage, { Error: (pError && pError.message) });
		if (this.pict && this.pict.ContentAssignment)
		{
			this.pict.ContentAssignment.assignContent(pContainerSelector,
				'<div class="pfv-empty"><span class="pfv-empty-glyph">' + this._icon('Warning', 2) + '</span><p>' + this._esc(pMessage) + '</p></div>');
		}
	}

	// ---------------------------------------------------------------------------------------------------------------
	// Small shared utilities the renderers lean on
	// ---------------------------------------------------------------------------------------------------------------

	/** Emit a themable glyph from the icon registry, scaled by font-size; degrades to '' when no registry is present. */
	_icon(pName, pEmSize)
	{
		if (!this.pict || (typeof this.pict.icon !== 'function')) { return ''; }
		const tmpOptions = {};
		if (typeof pEmSize === 'number') { tmpOptions.style = 'font-size:' + pEmSize + 'em'; }
		try { return this.pict.icon(pName, tmpOptions); }
		catch (pError) { return ''; }
	}

	/** Escape HTML metacharacters for safe interpolation into markup. */
	_esc(pText)
	{
		if (pText === null || typeof pText === 'undefined') { return ''; }
		return String(pText)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;');
	}

	/** Human-readable byte count (1536 → "1.5 KB"). */
	_formatBytes(pBytes)
	{
		const tmpBytes = Number(pBytes);
		if (!isFinite(tmpBytes) || tmpBytes < 0) { return ''; }
		if (tmpBytes < 1024) { return tmpBytes + ' B'; }
		const tmpUnits = [ 'KB', 'MB', 'GB', 'TB', 'PB' ];
		let tmpValue = tmpBytes / 1024;
		let tmpUnitIndex = 0;
		while (tmpValue >= 1024 && tmpUnitIndex < tmpUnits.length - 1) { tmpValue /= 1024; tmpUnitIndex++; }
		const tmpRounded = (tmpValue >= 100) ? Math.round(tmpValue) : Math.round(tmpValue * 10) / 10;
		return tmpRounded + ' ' + tmpUnits[tmpUnitIndex];
	}

	/** The last path segment of a URL (no query/fragment). */
	_basename(pURL)
	{
		if (!pURL) { return ''; }
		let tmpPath = String(pURL).split('?')[0].split('#')[0];
		if (tmpPath.charAt(tmpPath.length - 1) === '/') { tmpPath = tmpPath.slice(0, -1); }
		const tmpSegments = tmpPath.split('/');
		let tmpName = tmpSegments[tmpSegments.length - 1] || '';
		try { tmpName = decodeURIComponent(tmpName); } catch (pError) { /* leave encoded */ }
		return tmpName;
	}

	/** The extension of a filename (no leading dot, lowercased), or '' when there is none. */
	_extensionFromName(pName)
	{
		if (!pName) { return ''; }
		const tmpName = String(pName).split('?')[0].split('#')[0];
		const tmpDot = tmpName.lastIndexOf('.');
		if (tmpDot <= 0 || tmpDot === tmpName.length - 1) { return ''; }
		return tmpName.slice(tmpDot + 1).toLowerCase();
	}
}

module.exports = PictFileviewProvider;

module.exports.default_configuration =
{
	ProviderIdentifier: 'Pict-Section-Fileview',
	AutoInitialize: true,
	AutoInitializeOrdinal: 230
};
