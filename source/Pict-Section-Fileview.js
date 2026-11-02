'use strict';

/**
 * pict-section-fileview — a universal, embeddable "quality viewer."
 *
 * Drop one control on a page, point it at a server-served file (a Sluice StoredFile record OR a bare range-served
 * URL), and it detects the type and renders it well — on phones, iPads, desktops, TVs, and projected displays. It is
 * an orchestrator, not a renderer: it owns type detection, a pluggable kind→renderer registry, the chrome, and child
 * lifecycle, and delegates each media kind to a purpose-built child section.
 *
 * Shape — the 3-file idiom (as pict-section-content / pict-section-workspace):
 *   Pict-Section-Fileview.js            this file — the factory + the public exports
 *   providers/Pict-Fileview-Provider.js the DOM-free heart: registry + descriptor normalize + resolve + render
 *   views/Pict-View-Fileview.js         the chrome shell (container + lifecycle)
 *   BuiltinRenderers.js                 the default renderer plugins (Phase 1: the download card)
 *   Pict-Fileview-CSS.js                the shared `.pfv-*` chrome CSS
 *
 * Usage:
 *   const libFileview = require('pict-section-fileview');
 *   libFileview.createFileview(pict, { Identifier: 'MyFileView', DestinationAddress: '#SomeDiv' });
 *   pict.views.MyFileView.render();
 *   pict.providers.MyFileView.setFile('https://host/1.0/Depot/File/42/Open');   // a URL
 *   pict.providers.MyFileView.setFile(tmpStoredFileRecord);                      // or a record
 */

const PictFileviewProvider = require('./providers/Pict-Fileview-Provider.js');
const PictViewFileview = require('./views/Pict-View-Fileview.js');
const { FILEVIEW_CSS } = require('./Pict-Fileview-CSS.js');
const { BUILTIN_RENDERERS, DownloadCardRenderer, TextRenderer, CodeRenderer, MarkdownRenderer, BasicImageRenderer, ImageRenderer, BasicVideoRenderer, VideoRenderer, BasicAudioRenderer, AudioRenderer, PdfRenderer, DeepZoomRenderer } = require('./BuiltinRenderers.js');
const libFileviewProbe = require('./Fileview-Probe.js');

// Where the viewer mounts by default. Override per instance via config `DestinationAddress`, or set an app-wide
// default with the exported setDefaultDestination().
let DEFAULT_DESTINATION = '#Pict-Application-Container';
function setDefaultDestination(pSelector) { if (pSelector) { DEFAULT_DESTINATION = pSelector; } }

/**
 * Register a fileview provider + view pair with a pict application.
 *
 * @param {Object} pPict - the pict application instance
 * @param {Object} [pConfig] - { Identifier?, DestinationAddress?, Ordinal?, File?, Renderers?, DisableBuiltins?,
 *                               CSSExtra?, ProviderClass?, ViewClass? }
 * @returns {{ Identifier: string }}
 */
function createFileview(pPict, pConfig)
{
	const tmpConfig = pConfig || {};
	const tmpId = tmpConfig.Identifier || 'Pict-Section-Fileview';
	const tmpDest = tmpConfig.DestinationAddress || DEFAULT_DESTINATION;
	const tmpProviderClass = tmpConfig.ProviderClass || PictFileviewProvider;
	const tmpViewClass = tmpConfig.ViewClass || PictViewFileview;

	pPict.addProvider(tmpId,
		{ ProviderIdentifier: tmpId, AutoInitialize: true, AutoInitializeOrdinal: tmpConfig.Ordinal || 230, FileviewConfig: tmpConfig },
		tmpProviderClass);

	// Instance-scoped element ids (so multiple fileviews coexist on one page — locked decision #1).
	const tmpContainerTemplate = '<div class="pfv-root" id="' + tmpId + '-Root">'
		+ '<div class="pfv-toolbar" id="' + tmpId + '-Toolbar"></div>'
		+ '<div class="pfv-stage" id="' + tmpId + '-Stage"></div>'
		+ '</div>';

	pPict.addView(tmpId,
		{
			ViewIdentifier: tmpId,
			DefaultRenderable: tmpId + '-Wrap',
			DefaultDestinationAddress: tmpDest,
			AutoRender: false,
			CSS: FILEVIEW_CSS + (tmpConfig.CSSExtra || ''),
			Templates: [ { Hash: tmpId + '-Template', Template: tmpContainerTemplate } ],
			Renderables: [ { RenderableHash: tmpId + '-Wrap', TemplateHash: tmpId + '-Template', DestinationAddress: tmpDest, RenderMethod: 'replace' } ]
		},
		tmpViewClass);

	return { Identifier: tmpId };
}

module.exports = {
	createFileview,
	setDefaultDestination,
	PictFileviewProvider,
	PictViewFileview,
	FILEVIEW_CSS,
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
	probeDescriptor: libFileviewProbe.probeDescriptor,
	sniffMagic: libFileviewProbe.sniffMagic
};
