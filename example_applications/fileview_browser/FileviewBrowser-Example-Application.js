const libPictApplication = require('pict-application');
const libPictView = require('pict-view');

// The fileview orchestrator, plus the real delegated child sections (see the gallery example — nothing is faked).
const libFileview = require('../../source/Pict-Section-Fileview.js');
const libPictSectionCode = require('../../../pict-section-code/source/Pict-Section-Code.js');
const libPictSectionContent = require('../../../pict-section-content/source/Pict-Section-Content.js');
const libPictSectionImage = require('../../../pict-section-image/source/Pict-Section-Image.js');

const _Delegates =
{
	CodeSectionClass: libPictSectionCode,
	ContentProviderClass: libPictSectionContent.PictContentProvider,
	ImageSectionClass: libPictSectionImage
};

// The file list the sidebar shows. Each entry is a Sluice-StoredFile-shaped record (ProbeStrategy 'none' → the
// viewer resolves the lens straight from the record, no network probe). setFile() accepts the whole record and
// ignores the display-only extras (Index / Selected / Caption). Two JPEGs and a PNG sit next to each other on
// purpose: clicking from one image to the next is a SAME-KIND re-point, so the viewer re-feeds the live
// pict-section-image child via update() instead of tearing it down — while clicking from an image to code is a
// TYPE switch, so the image child is destroyed and the code child mounted.
const _Files =
[
	{ Index: 0, Selected: true,  Name: 'readme.txt',         Caption: 'text',     URL: './readme.txt',         Extension: 'txt', MIMEType: 'text/plain',             Size: 824,     ProbeStrategy: 'none' },
	{ Index: 1, Selected: false, Name: 'greeter-service.js', Caption: 'code',     URL: './greeter-service.js', Extension: 'js',  MIMEType: 'application/javascript', Size: 868,     ProbeStrategy: 'none' },
	{ Index: 2, Selected: false, Name: 'notes.md',           Caption: 'markdown', URL: './notes.md',           Extension: 'md',  MIMEType: 'text/markdown',          Size: 1224,    ProbeStrategy: 'none' },
	{ Index: 3, Selected: false, Name: 'landscape.jpg',      Caption: 'image',    URL: './landscape.jpg',      Extension: 'jpg', MIMEType: 'image/jpeg',             Size: 39871,   ProbeStrategy: 'none' },
	{ Index: 4, Selected: false, Name: 'portrait.png',       Caption: 'image',    URL: './portrait.png',       Extension: 'png', MIMEType: 'image/png',              Size: 5677793, ProbeStrategy: 'none' },
	{ Index: 5, Selected: false, Name: 'panorama.jpg',       Caption: 'image',    URL: './panorama.jpg',       Extension: 'jpg', MIMEType: 'image/jpeg',             Size: 61443,   ProbeStrategy: 'none' },
	{ Index: 6, Selected: false, Name: 'diagram.svg',        Caption: 'vector',   URL: './diagram.svg',        Extension: 'svg', MIMEType: 'image/svg+xml',          Size: 2062,    ProbeStrategy: 'none' },
	{ Index: 7, Selected: false, Name: 'dataset.zip',        Caption: 'binary',   URL: './dataset.zip',        Extension: 'zip', MIMEType: 'application/zip',         Size: 2115,    ProbeStrategy: 'none' }
];

// Friendly lens names for the status line (the fileview AppData slot exposes the resolved renderer Hash).
const _LensLabels =
{
	'Fileview-Renderer-Text':         'Text lens (self-contained <pre>)',
	'Fileview-Renderer-Code':         'Code lens (pict-section-code)',
	'Fileview-Renderer-Markdown':     'Markdown lens (pict-section-content)',
	'Fileview-Renderer-Image':        'Image lens (pict-section-image)',
	'Fileview-Renderer-ImageBasic':   'Basic image lens (<img>)',
	'Fileview-Renderer-DownloadCard': 'Download card (no inline lens)'
};

const _FileListConfig =
{
	"ViewIdentifier": "FileList",
	"DefaultRenderable": "FileList-Wrap",
	"DefaultDestinationAddress": "#FileList-Pane",
	"AutoRender": false,
	"CSS": /*css*/`
		.filelist { display: flex; flex-direction: column; gap: 0.2rem; }
		.filelist-title { font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #8a7a63; padding: 0.2rem 0.6rem 0.5rem; }
		.filelist-row { display: flex; align-items: baseline; justify-content: space-between; gap: 0.5rem; padding: 0.5rem 0.65rem; border-radius: 7px; cursor: pointer; border: 1px solid transparent; }
		.filelist-row:hover { background: #F3E6C8; }
		.filelist-row-selected, .filelist-row-selected:hover { background: #264653; border-color: #264653; }
		.filelist-row-selected .filelist-row-name { color: #FAEDCD; }
		.filelist-row-selected .filelist-row-cap { color: #D4A373; }
		.filelist-row-name { font-size: 0.86rem; font-weight: 600; color: #264653; font-family: 'SFMono-Regular', Menlo, Consolas, monospace; }
		.filelist-row-cap { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.05em; color: #8a7a63; }
	`,
	"Templates":
	[
		{
			"Hash": "FileList-Container",
			"Template": /*html*/`
<div class="filelist">
	<div class="filelist-title">Files</div>
	{~TS:FileBrowser-Row:AppData.FileBrowser.Files~}
</div>`
		},
		{
			"Hash": "FileBrowser-Row",
			"Template": /*html*/`
<div class="filelist-row {~NE:Record.Selected^filelist-row-selected~}" onclick="_Pict.views.FileList.select({~D:Record.Index~})">
	<span class="filelist-row-name">{~D:Record.Name~}</span>
	<span class="filelist-row-cap">{~D:Record.Caption~}</span>
</div>`
		}
	],
	"Renderables":
	[
		{ "RenderableHash": "FileList-Wrap", "TemplateHash": "FileList-Container", "DestinationAddress": "#FileList-Pane", "RenderMethod": "replace" }
	]
};

class FileListView extends libPictView
{
	onBeforeRender(pRenderable)
	{
		this.pict.AppData.FileBrowser = this.pict.AppData.FileBrowser || {};
		this.pict.AppData.FileBrowser.Files = _Files;
		return super.onBeforeRender(pRenderable);
	}

	// Point the single shared viewer at the clicked file, update the selection highlight + status line, re-render.
	select(pIndex)
	{
		const tmpFile = _Files[pIndex];
		if (!tmpFile) { return; }

		for (let i = 0; i < _Files.length; i++) { _Files[i].Selected = (i === pIndex); }

		const tmpProvider = this.pict.providers['Viewer'];
		if (tmpProvider) { tmpProvider.setFile(tmpFile); }

		// The provider records the resolved renderer Hash synchronously after mount; surface it as a friendly label.
		const tmpResolved = (this.pict.AppData['Viewer'] && this.pict.AppData['Viewer'].ResolvedRendererHash) || '';
		this.pict.AppData.FileBrowser.ActiveLens = _LensLabels[tmpResolved] || tmpResolved || '';
		this.pict.ContentAssignment.assignContent('#Viewer-Status', this.pict.AppData.FileBrowser.ActiveLens);

		this.render();
	}

	onAfterRender(pRenderable)
	{
		this.pict.CSSMap.injectCSS();
		return super.onAfterRender(pRenderable);
	}
}

class FileviewBrowserExampleApplication extends libPictApplication
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);

		// One viewer, pointed at the first file on boot.
		libFileview.createFileview(this.pict, Object.assign(
		{
			Identifier: 'Viewer',
			DestinationAddress: '#Viewer-Pane',
			File: _Files[0]
		}, _Delegates));

		this.pict.addView('FileList', _FileListConfig, FileListView);
	}

	onAfterInitialize()
	{
		super.onAfterInitialize();

		if (this.pict.views['Viewer']) { this.pict.views['Viewer'].render(); }
		if (this.pict.views['FileList']) { this.pict.views['FileList'].render(); }

		// Seed the status line with the boot file's lens.
		const tmpResolved = (this.pict.AppData['Viewer'] && this.pict.AppData['Viewer'].ResolvedRendererHash) || '';
		this.pict.ContentAssignment.assignContent('#Viewer-Status', _LensLabels[tmpResolved] || tmpResolved || '');
	}
}

module.exports = FileviewBrowserExampleApplication;

module.exports.default_configuration =
{
	"Name": "Fileview Browser Example",
	"Hash": "FileviewBrowserExample",
	"pict_configuration":
	{
		"Product": "FileviewBrowser-Example"
	}
};
