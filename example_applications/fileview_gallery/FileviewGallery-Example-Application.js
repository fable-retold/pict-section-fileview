const libPictApplication = require('pict-application');

// The fileview orchestrator under test.
const libFileview = require('../../source/Pict-Section-Fileview.js');

// The delegated child sections, required straight from their sibling sources and handed to fileview as config
// classes. Nothing here is faked: the code lens drives the real pict-section-code (CodeJar), the markdown lens
// the real pict-section-content parser, and the image lens the real pict-section-image zoom/pan viewer. CodeJar
// itself is a page global (see codejar.js in the HTML shell).
const libPictSectionCode = require('../../../pict-section-code/source/Pict-Section-Code.js');
const libPictSectionContent = require('../../../pict-section-content/source/Pict-Section-Content.js');
const libPictSectionImage = require('../../../pict-section-image/source/Pict-Section-Image.js');
const libPictSectionVideo = require('../../../pict-section-video/source/Pict-Section-Video.js');
const libPictSectionAudio = require('../../../pict-section-audio/source/Pict-Section-Audio.js');

// The host-provided delegate classes every fileview instance in this gallery shares.
const _Delegates =
{
	CodeSectionClass: libPictSectionCode,
	ContentProviderClass: libPictSectionContent.PictContentProvider,
	ImageSectionClass: libPictSectionImage,
	VideoSectionClass: libPictSectionVideo,
	AudioSectionClass: libPictSectionAudio
};

// Each gallery slot: a fileview instance, the DOM div it mounts into, and the file descriptor it is pointed at.
// The descriptors are shaped like Sluice StoredFile records (a Name, a range-served URL, an Extension, a MIMEType,
// a Size) with ProbeStrategy 'none' so resolution is deterministic from the record alone — no network probe.
const _GallerySlots =
[
	{
		Identifier: 'Gallery-Text',
		Destination: '#Slot-Text',
		File: { Name: 'readme.txt', URL: './readme.txt', Extension: 'txt', MIMEType: 'text/plain', Size: 824, ProbeStrategy: 'none' }
	},
	{
		Identifier: 'Gallery-Code',
		Destination: '#Slot-Code',
		File: { Name: 'greeter-service.js', URL: './greeter-service.js', Extension: 'js', MIMEType: 'application/javascript', Size: 868, ProbeStrategy: 'none' }
	},
	{
		Identifier: 'Gallery-Markdown',
		Destination: '#Slot-Markdown',
		File: { Name: 'notes.md', URL: './notes.md', Extension: 'md', MIMEType: 'text/markdown', Size: 1224, ProbeStrategy: 'none' }
	},
	{
		Identifier: 'Gallery-Image',
		Destination: '#Slot-Image',
		File: { Name: 'landscape.jpg', URL: './landscape.jpg', Extension: 'jpg', MIMEType: 'image/jpeg', Size: 39871, ProbeStrategy: 'none' }
	},
	{
		Identifier: 'Gallery-Vector',
		Destination: '#Slot-Vector',
		File: { Name: 'diagram.svg', URL: './diagram.svg', Extension: 'svg', MIMEType: 'image/svg+xml', Size: 2062, ProbeStrategy: 'none' }
	},
	{
		Identifier: 'Gallery-Binary',
		Destination: '#Slot-Binary',
		File: { Name: 'dataset.zip', URL: './dataset.zip', Extension: 'zip', MIMEType: 'application/zip', Size: 2115, ProbeStrategy: 'none' }
	},
	{
		// PDF lens — delegates to PDF.js (a page global; see index.html). Served same-origin with Range support.
		Identifier: 'Gallery-PDF',
		Destination: '#Slot-PDF',
		File: { Name: 'sample.pdf', URL: './sample.pdf', Extension: 'pdf', MIMEType: 'application/pdf', Size: 2639, ProbeStrategy: 'none' }
	},
	{
		// Video lens — delegates to pict-section-video (its own play/seek/volume/rate control bar). Served
		// same-origin with Range support so seeking scrubs without downloading the whole clip.
		Identifier: 'Gallery-Video',
		Destination: '#Slot-Video',
		File: { Name: 'sample.mp4', URL: './sample.mp4', Extension: 'mp4', MIMEType: 'video/mp4', Size: 119110, ProbeStrategy: 'none', Meta: { poster: './poster.jpg' } }
	},
	{
		// Audio lens — delegates to pict-section-audio (titled header with cover art + a control bar). A
		// precomputed Meta.peaks array draws a clickable waveform.
		Identifier: 'Gallery-Audio',
		Destination: '#Slot-Audio',
		File:
		{
			Name: 'sample.mp3', URL: './sample.mp3', Extension: 'mp3', MIMEType: 'audio/mpeg', Size: 60857, ProbeStrategy: 'none',
			Meta: { poster: './cover.jpg', peaks: [ 0.1, 0.35, 0.6, 0.8, 0.95, 0.7, 0.5, 0.65, 0.85, 0.6, 0.4, 0.55, 0.75, 0.9, 0.7, 0.45, 0.3, 0.5, 0.7, 0.85, 0.6, 0.4, 0.25, 0.45, 0.65, 0.8, 0.9, 0.7, 0.5, 0.3, 0.2, 0.4 ] }
		}
	},
	{
		// Deep-zoom lens — an image too large to blit into an <img> (Size over the oversize floor), carrying a
		// Meta.TileSources DZI the host attached. OpenSeaDragon (a page global) streams the pyramid tile-by-tile;
		// the client never holds the whole image. In production that DZI is produced by orator-file-service's
		// libvips (dzsave) tiler and served with Range support; this standalone demo points at a stable public DZI.
		Identifier: 'Gallery-DeepZoom',
		Destination: '#Slot-DeepZoom',
		File:
		{
			Name: 'duomo.dzi (deep zoom)', URL: 'https://openseadragon.github.io/example-images/duomo/duomo.dzi',
			Extension: 'png', MIMEType: 'image/png', Kind: 'image', Size: 800000000, ProbeStrategy: 'none',
			Meta: { TileSources: 'https://openseadragon.github.io/example-images/duomo/duomo.dzi' }
		}
	}
];

class FileviewGalleryExampleApplication extends libPictApplication
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);

		// Spin up one fileview orchestrator per slot. Every instance derives its element ids from its Identifier,
		// so six viewers coexist on one page with no id collisions (locked decision #1).
		for (let i = 0; i < _GallerySlots.length; i++)
		{
			const tmpSlot = _GallerySlots[i];
			libFileview.createFileview(this.pict, Object.assign(
			{
				Identifier: tmpSlot.Identifier,
				DestinationAddress: tmpSlot.Destination,
				File: tmpSlot.File
			}, _Delegates));
		}
	}

	onAfterInitialize()
	{
		super.onAfterInitialize();

		// Render each viewer's chrome; the seeded File paints as soon as the stage exists.
		for (let i = 0; i < _GallerySlots.length; i++)
		{
			const tmpView = this.pict.views[_GallerySlots[i].Identifier];
			if (tmpView) { tmpView.render(); }
		}
	}
}

module.exports = FileviewGalleryExampleApplication;

module.exports.default_configuration =
{
	"Name": "Fileview Gallery Example",
	"Hash": "FileviewGalleryExample",
	"pict_configuration":
	{
		"Product": "FileviewGallery-Example"
	}
};
