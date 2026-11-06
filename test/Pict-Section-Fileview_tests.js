/*
	Unit tests for pict-section-fileview.

	Phase 1 covers the dispatch core (the factory, the registry, descriptor normalization, resolution), the probe
	ladder, and the first renderers: the always-matches download card, the self-contained text lens, and the
	code / markdown lenses that delegate to pict-section-code / pict-section-content. The delegating renderers are
	host-dependency-gated, so these tests inject fakes (a stub fetch, a stub content provider, a window.CodeJar
	flag) rather than reaching the network or the real editor engine.
*/

const libBrowserEnv = require('browser-env');
libBrowserEnv();

// jsdom has no media pipeline; make the <video>/<audio> methods quiet no-ops so the delegated video/audio lens
// tests emit no jsdom noise when they mount the real pict-section-video / pict-section-audio children.
if ((typeof window !== 'undefined') && window.HTMLMediaElement)
{
	window.HTMLMediaElement.prototype.play = function () { return Promise.resolve(); };
	window.HTMLMediaElement.prototype.pause = function () {};
	window.HTMLMediaElement.prototype.load = function () {};
}

const Chai = require('chai');
const Expect = Chai.expect;

const libPict = require('pict');
const libPictProvider = require('pict-provider');
const libFileview = require('../source/Pict-Section-Fileview.js');

// The real code child-section, when it is resolvable in this checkout (it is a sibling in the monorepo). The
// code-lens integration test below is skipped if it (or the umbrella node_modules) is absent.
let libPictSectionCode = null;
try { libPictSectionCode = require('pict-section-code'); } catch (pError) { libPictSectionCode = null; }

// The real image child-section (a sibling in the monorepo, by relative path since it is not installed into this
// module's node_modules). The image-lens integration test is skipped when it is absent.
let libPictSectionImage = null;
try { libPictSectionImage = require('../../pict-section-image/source/Pict-Section-Image.js'); } catch (pError) { libPictSectionImage = null; }

// The real video / audio child-sections (siblings in the monorepo, by relative path). The delegating-lens
// integration tests are skipped when they are absent (a standalone checkout).
let libPictSectionVideo = null;
try { libPictSectionVideo = require('../../pict-section-video/source/Pict-Section-Video.js'); } catch (pError) { libPictSectionVideo = null; }
let libPictSectionAudio = null;
try { libPictSectionAudio = require('../../pict-section-audio/source/Pict-Section-Audio.js'); } catch (pError) { libPictSectionAudio = null; }

// ---- small test doubles -------------------------------------------------------------------------------------

// A fetch stub that resolves one body for every request. A Range request reports 206 (the text/code/markdown
// renderers send Range when capping), a plain request 200.
function makeTextFetch(pBody)
{
	return function (pURL, pRequest)
	{
		const tmpRanged = !!(pRequest && pRequest.headers && pRequest.headers.Range);
		return Promise.resolve(
		{
			ok: true,
			status: tmpRanged ? 206 : 200,
			text: function () { return Promise.resolve(pBody); }
		});
	};
}

// A Headers-like object with a case-insensitive get(), as the probe reads.
function headersOf(pMap)
{
	const tmpMap = pMap || {};
	return {
		get: function (pName)
		{
			const tmpKeys = Object.keys(tmpMap);
			for (let i = 0; i < tmpKeys.length; i++)
			{
				if (tmpKeys[i].toLowerCase() === String(pName).toLowerCase()) { return tmpMap[tmpKeys[i]]; }
			}
			return null;
		}
	};
}

function bytesToArrayBuffer(pBytes)
{
	const tmpBytes = (pBytes instanceof Uint8Array) ? pBytes : new Uint8Array(pBytes || []);
	return tmpBytes.buffer.slice(tmpBytes.byteOffset, tmpBytes.byteOffset + tmpBytes.byteLength);
}

// A fetch stub for the probe: pSpec = { head?: { ok?, headers? }, range?: { status?, headers?, bytes? } }.
function makeProbeFetch(pSpec)
{
	const tmpSpec = pSpec || {};
	return function (pURL, pRequest)
	{
		if (pRequest && pRequest.method === 'HEAD')
		{
			if (!tmpSpec.head) { return Promise.reject(new Error('HEAD not supported')); }
			return Promise.resolve({ ok: (tmpSpec.head.ok !== false), headers: headersOf(tmpSpec.head.headers) });
		}
		if (pRequest && pRequest.headers && pRequest.headers.Range)
		{
			if (!tmpSpec.range) { return Promise.reject(new Error('Range blocked')); }
			return Promise.resolve(
			{
				ok: true,
				status: (typeof tmpSpec.range.status === 'number') ? tmpSpec.range.status : 206,
				headers: headersOf(tmpSpec.range.headers),
				arrayBuffer: function () { return Promise.resolve(bytesToArrayBuffer(tmpSpec.range.bytes)); }
			});
		}
		return Promise.reject(new Error('unexpected request'));
	};
}

// A stand-in for pict-section-content's provider (only parseMarkdown is exercised).
class FakeContentProvider extends libPictProvider
{
	parseMarkdown(pMarkdown)
	{
		return '<h1>' + String(pMarkdown).replace(/^#\s*/, '') + '</h1>';
	}
}

// A stand-in for the pict-section-code class — never mounted here (the code mount is browser-only); only its
// presence is checked by the Code renderer's Capability gate.
function FakeCodeSection() {}
FakeCodeSection.default_configuration = {};

suite('Pict-Section-Fileview', () =>
{
	suite('Exports', () =>
	{
		test('exposes the factory + base classes + assets + renderers + probe', () =>
		{
			Expect(libFileview.createFileview).to.be.a('function');
			Expect(libFileview.setDefaultDestination).to.be.a('function');
			Expect(libFileview.PictFileviewProvider).to.be.a('function');
			Expect(libFileview.PictViewFileview).to.be.a('function');
			Expect(libFileview.FILEVIEW_CSS).to.be.a('string');
			Expect(libFileview.BUILTIN_RENDERERS).to.be.an('array');
			Expect(libFileview.DownloadCardRenderer).to.be.an('object');
			Expect(libFileview.TextRenderer).to.be.an('object');
			Expect(libFileview.CodeRenderer).to.be.an('object');
			Expect(libFileview.MarkdownRenderer).to.be.an('object');
			Expect(libFileview.BasicImageRenderer).to.be.an('object');
			Expect(libFileview.ImageRenderer).to.be.an('object');
			Expect(libFileview.BasicVideoRenderer).to.be.an('object');
			Expect(libFileview.VideoRenderer).to.be.an('object');
			Expect(libFileview.BasicAudioRenderer).to.be.an('object');
			Expect(libFileview.AudioRenderer).to.be.an('object');
			Expect(libFileview.probeDescriptor).to.be.a('function');
			Expect(libFileview.sniffMagic).to.be.a('function');
		});

		test('FILEVIEW_CSS carries the chrome + lens classes', () =>
		{
			Expect(libFileview.FILEVIEW_CSS).to.contain('.pfv-root');
			Expect(libFileview.FILEVIEW_CSS).to.contain('.pfv-stage');
			Expect(libFileview.FILEVIEW_CSS).to.contain('.pfv-text');
		});
	});

	suite('createFileview()', () =>
	{
		let tmpPict;
		suiteSetup(() =>
		{
			tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'DocFileView' });
		});

		test('registers the provider + view under the config Identifier', () =>
		{
			Expect(tmpPict.providers.DocFileView).to.be.an('object');
			Expect(tmpPict.views.DocFileView).to.be.an('object');
		});

		test('the provider seeds its registry with the twelve built-in renderers', () =>
		{
			const tmpProvider = tmpPict.providers.DocFileView;
			Expect(tmpProvider.listRenderers()).to.have.length(12);
			Expect(tmpProvider.getRenderer('Fileview-Renderer-DownloadCard')).to.be.an('object');
			Expect(tmpProvider.getRenderer('Fileview-Renderer-Text')).to.be.an('object');
			Expect(tmpProvider.getRenderer('Fileview-Renderer-Code')).to.be.an('object');
			Expect(tmpProvider.getRenderer('Fileview-Renderer-Markdown')).to.be.an('object');
			Expect(tmpProvider.getRenderer('Fileview-Renderer-ImageBasic')).to.be.an('object');
			Expect(tmpProvider.getRenderer('Fileview-Renderer-Image')).to.be.an('object');
			Expect(tmpProvider.getRenderer('Fileview-Renderer-VideoBasic')).to.be.an('object');
			Expect(tmpProvider.getRenderer('Fileview-Renderer-Video')).to.be.an('object');
			Expect(tmpProvider.getRenderer('Fileview-Renderer-AudioBasic')).to.be.an('object');
			Expect(tmpProvider.getRenderer('Fileview-Renderer-Audio')).to.be.an('object');
			Expect(tmpProvider.getRenderer('Fileview-Renderer-PDF')).to.be.an('object');
			Expect(tmpProvider.getRenderer('Fileview-Renderer-DeepZoom')).to.be.an('object');
		});

		test('element selectors derive from the instance Identifier', () =>
		{
			const tmpProvider = tmpPict.providers.DocFileView;
			Expect(tmpProvider.stageSelector).to.equal('#DocFileView-Stage');
			Expect(tmpProvider.toolbarSelector).to.equal('#DocFileView-Toolbar');
		});
	});

	suite('normalizeDescriptor()', () =>
	{
		let tmpProvider;
		suiteSetup(() =>
		{
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'NormFileView' });
			tmpProvider = tmpPict.providers.NormFileView;
		});

		test('a bare URL string becomes a descriptor with a decoded name + extension, probed auto', () =>
		{
			const tmpDescriptor = tmpProvider.normalizeDescriptor('https://host/files/report%20final.pdf?x=1');
			Expect(tmpDescriptor.URL).to.equal('https://host/files/report%20final.pdf?x=1');
			Expect(tmpDescriptor.Name).to.equal('report final.pdf');
			Expect(tmpDescriptor.Extension).to.equal('pdf');
			Expect(tmpDescriptor.Probe.Strategy).to.equal('auto');
		});

		test('a Sluice-style record maps its fields and probes none when Kind is present', () =>
		{
			const tmpDescriptor = tmpProvider.normalizeDescriptor(
				{ FileName: 'photo.JPG', FileSize: 2048, ContentType: 'image/jpeg', Kind: 'image', URL: '/content/3/photo.JPG' });
			Expect(tmpDescriptor.Name).to.equal('photo.JPG');
			Expect(tmpDescriptor.Extension).to.equal('jpg');
			Expect(tmpDescriptor.MIMEType).to.equal('image/jpeg');
			Expect(tmpDescriptor.Size).to.equal(2048);
			Expect(tmpDescriptor.Kind).to.equal('image');
			Expect(tmpDescriptor.Probe.Strategy).to.equal('none');
		});
	});

	suite('resolveRenderer()', () =>
	{
		let tmpPict;
		let tmpProvider;
		suiteSetup(() =>
		{
			tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'ResolveFileView' });
			tmpProvider = tmpPict.providers.ResolveFileView;
		});

		test('an unknown binary resolves to the download card', () =>
		{
			const tmpDescriptor = tmpProvider.normalizeDescriptor('https://host/x.bin');
			Expect(tmpProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-DownloadCard');
		});

		test('a higher-scoring renderer wins over the download card', () =>
		{
			tmpProvider.registerRenderer(
				{ Hash: 'test-strong', Priority: 0, matches: () => 700, mount: (pSel, pDesc) => ({ Hash: 'test-strong', Descriptor: pDesc, destroy: () => {} }) });
			const tmpDescriptor = tmpProvider.normalizeDescriptor('https://host/x.bin');
			Expect(tmpProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('test-strong');
		});

		test('a renderer whose Capability gate is closed abstains, falling through to the next best', () =>
		{
			tmpProvider.registerRenderer(
				{ Hash: 'test-gated', Priority: 0, Capability: () => false, matches: () => 5000, mount: () => ({}) });
			const tmpDescriptor = tmpProvider.normalizeDescriptor('https://host/x.bin');
			// test-gated scores highest but is gated off → test-strong (700) still wins.
			Expect(tmpProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('test-strong');
		});

		test('unregisterRenderer removes a plugin', () =>
		{
			Expect(tmpProvider.unregisterRenderer('test-strong')).to.equal(true);
			Expect(tmpProvider.getRenderer('test-strong')).to.equal(null);
		});
	});

	suite('renderer scoring + capability', () =>
	{
		let tmpProvider;
		suiteSetup(() =>
		{
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict,
			{
				Identifier: 'ScoreFileView',
				Probe: false,
				Fetch: makeTextFetch(''),
				CodeSectionClass: FakeCodeSection,
				ContentProviderClass: FakeContentProvider
			});
			tmpProvider = tmpPict.providers.ScoreFileView;
		});
		teardown(() => { try { delete window.CodeJar; } catch (pError) { window.CodeJar = undefined; } });

		test('a markdown file resolves to the markdown renderer', () =>
		{
			const tmpDescriptor = tmpProvider.normalizeDescriptor('https://host/README.md');
			Expect(tmpProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-Markdown');
		});

		test('a source file resolves to the code renderer when CodeJar is present', () =>
		{
			window.CodeJar = function () {};
			const tmpDescriptor = tmpProvider.normalizeDescriptor('https://host/app.js');
			Expect(tmpProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-Code');
		});

		test('a source file degrades to the text lens when CodeJar is absent', () =>
		{
			try { delete window.CodeJar; } catch (pError) { window.CodeJar = undefined; }
			const tmpDescriptor = tmpProvider.normalizeDescriptor('https://host/app.js');
			Expect(tmpProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-Text');
		});

		test('a plain-text file resolves to the text lens', () =>
		{
			const tmpDescriptor = tmpProvider.normalizeDescriptor('https://host/notes.txt');
			Expect(tmpProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-Text');
		});

		test('an explicit markdown Kind outranks the extension signals', () =>
		{
			const tmpDescriptor = tmpProvider.normalizeDescriptor({ URL: 'https://host/x', Name: 'x', Kind: 'markdown' });
			Expect(tmpProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-Markdown');
		});
	});

	suite('fetchFileText()', () =>
	{
		test('resolves the body text', (pDone) =>
		{
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'FetchOkView', Probe: false, Fetch: makeTextFetch('hello body') });
			tmpPict.providers.FetchOkView.fetchFileText('https://host/a.txt')
				.then((pText) => { Expect(pText).to.equal('hello body'); pDone(); })
				.catch(pDone);
		});

		test('rejects on an HTTP error status', (pDone) =>
		{
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'FetchErrView', Probe: false,
				Fetch: () => Promise.resolve({ ok: false, status: 404, text: () => Promise.resolve('') }) });
			tmpPict.providers.FetchErrView.fetchFileText('https://host/missing')
				.then(() => { pDone(new Error('expected a rejection')); })
				.catch(() => { pDone(); });
		});
	});

	suite('probe ladder', () =>
	{
		test('sniffMagic recognizes common containers', () =>
		{
			Expect(libFileview.sniffMagic(new Uint8Array([ 0x25, 0x50, 0x44, 0x46 ]))).to.equal('application/pdf');
			Expect(libFileview.sniffMagic(new Uint8Array([ 0x89, 0x50, 0x4E, 0x47 ]))).to.equal('image/png');
			const tmpWebp = new Uint8Array([ 0x52, 0x49, 0x46, 0x46, 0, 0, 0, 0, 0x57, 0x45, 0x42, 0x50 ]);
			Expect(libFileview.sniffMagic(tmpWebp)).to.equal('image/webp');
		});

		test('HEAD alone resolves a sharp MIME + size + range support (no range read needed)', (pDone) =>
		{
			const tmpFetch = makeProbeFetch({ head: { headers: { 'content-type': 'application/pdf', 'content-length': '12345', 'accept-ranges': 'bytes' } } });
			libFileview.probeDescriptor({ URL: 'https://host/blob' }, { fetch: tmpFetch }).then((pResult) =>
			{
				Expect(pResult.MIMEType).to.equal('application/pdf');
				Expect(pResult.MIMESource).to.equal('header');
				Expect(pResult.Size).to.equal(12345);
				Expect(pResult.AcceptRanges).to.equal(true);
				pDone();
			}).catch(pDone);
		});

		test('a generic HEAD escalates to a magic-byte read over the Range rung', (pDone) =>
		{
			const tmpFetch = makeProbeFetch(
			{
				head: { headers: { 'content-type': 'application/octet-stream' } },
				range: { status: 206, headers: { 'content-range': 'bytes 0-63/5000' }, bytes: new Uint8Array([ 0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A ]) }
			});
			libFileview.probeDescriptor({ URL: 'https://host/blob' }, { fetch: tmpFetch }).then((pResult) =>
			{
				Expect(pResult.MIMEType).to.equal('image/png');
				Expect(pResult.MIMESource).to.equal('magic');
				Expect(pResult.AcceptRanges).to.equal(true);
				Expect(pResult.Size).to.equal(5000);
				Expect(pResult.MagicBytes.indexOf('89504e47')).to.equal(0);
				pDone();
			}).catch(pDone);
		});

		test('resolves an empty enrichment when no fetch is available', (pDone) =>
		{
			libFileview.probeDescriptor({ URL: 'https://host/blob' }, {}).then((pResult) =>
			{
				Expect(pResult.MIMEType).to.equal('');
				Expect(pResult.AcceptRanges).to.equal(null);
				pDone();
			}).catch(pDone);
		});
	});

	suite('render', () =>
	{
		test('paints the download card for an arbitrary file', () =>
		{
			document.body.innerHTML = '<div id="Fileview-Host"></div>';
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'SmokeFileView', DestinationAddress: '#Fileview-Host', Probe: false });
			tmpPict.views.SmokeFileView.render();
			tmpPict.providers.SmokeFileView.setFile(
				{ Name: 'archive.zip', Size: 1048576, MIMEType: 'application/zip', URL: 'https://host/archive.zip' });

			const tmpStage = document.getElementById('SmokeFileView-Stage');
			Expect(tmpStage).to.not.equal(null);
			Expect(tmpStage.innerHTML).to.contain('pfv-card');
			Expect(tmpStage.innerHTML).to.contain('archive.zip');
			Expect(tmpStage.innerHTML).to.contain('1 MB');
		});

		// Regression: a consumer whose own template owns the fileview host (so every consumer re-render re-stamps it)
		// wipes the stage DOM out from under a live mount. The reuse-one-per-kind fast-path must NOT short-circuit on
		// the now-stale handle; _isStagePopulated() detects the empty stage and forces a clean re-mount + repaint.
		test('re-mounts when the stage DOM was wiped out from under a live mount (same descriptor)', () =>
		{
			document.body.innerHTML = '<div id="WipeHost"></div>';
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'WipeFileView', DestinationAddress: '#WipeHost', Probe: false });
			tmpPict.views.WipeFileView.render();
			const tmpProvider = tmpPict.providers.WipeFileView;
			tmpProvider.setFile({ Name: 'archive.zip', Size: 1048576, MIMEType: 'application/zip', URL: 'https://host/archive.zip' });

			const tmpStage = document.getElementById('WipeFileView-Stage');
			Expect(tmpStage.innerHTML).to.contain('archive.zip');   // first mount painted

			// Simulate the host-owning consumer re-rendering: the stage is emptied while _currentHandle still points at it.
			tmpStage.innerHTML = '';
			Expect(tmpStage.children.length).to.equal(0);

			// Resolve again with the SAME descriptor (a bare re-render). Pre-fix this hit "same descriptor -> return"
			// and left the stage blank; the _isStagePopulated() guard forces a re-mount.
			tmpProvider._mountResolved();
			Expect(tmpStage.innerHTML).to.contain('archive.zip');   // re-painted, not blank
		});

		test('the text lens fetches and paints the file into a <pre>', (pDone) =>
		{
			document.body.innerHTML = '<div id="TextHost"></div>';
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict,
				{ Identifier: 'TextFileView', DestinationAddress: '#TextHost', Probe: false, Fetch: makeTextFetch('line one\nline two') });
			tmpPict.views.TextFileView.render();
			tmpPict.providers.TextFileView.setFile('https://host/notes.txt');

			const tmpHandle = tmpPict.providers.TextFileView._currentHandle;
			Expect(tmpHandle).to.not.equal(null);
			Expect(tmpHandle.Hash).to.equal('Fileview-Renderer-Text');
			tmpHandle.Ready.then(() =>
			{
				const tmpStage = document.getElementById('TextFileView-Stage');
				Expect(tmpStage.innerHTML).to.contain('pfv-text');
				Expect(tmpStage.innerHTML).to.contain('line one');
				pDone();
			}).catch(pDone);
		});

		test('the markdown lens parses via the content provider and paints the HTML', (pDone) =>
		{
			document.body.innerHTML = '<div id="MdHost"></div>';
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict,
				{ Identifier: 'MdFileView', DestinationAddress: '#MdHost', Probe: false, ContentProviderClass: FakeContentProvider, Fetch: makeTextFetch('# Hello Doc') });
			tmpPict.views.MdFileView.render();
			tmpPict.providers.MdFileView.setFile('https://host/readme.md');

			const tmpHandle = tmpPict.providers.MdFileView._currentHandle;
			Expect(tmpHandle).to.not.equal(null);
			Expect(tmpHandle.Hash).to.equal('Fileview-Renderer-Markdown');
			tmpHandle.Ready.then(() =>
			{
				const tmpBody = document.getElementById('MdFileView-MarkdownBody');
				Expect(tmpBody).to.not.equal(null);
				Expect(tmpBody.innerHTML).to.contain('Hello Doc');
				pDone();
			}).catch(pDone);
		});

		test('the code lens mounts the real pict-section-code and feeds it the fetched source', (pDone) =>
		{
			if (!libPictSectionCode) { pDone(); return; }   // standalone checkout without the sibling — skip

			// CodeJar is a page-global the host provides; stub the minimal surface pict-section-code drives.
			window.CodeJar = function (pElement, pHighlight, pOptions)
			{
				return {
					updateCode: function (pCode) { pElement.textContent = pCode; if (typeof pHighlight === 'function') { try { pHighlight(pElement); } catch (pError) {} } },
					toString: function () { return pElement.textContent; },
					onUpdate: function () {},
					destroy: function () {}
				};
			};

			document.body.innerHTML = '<div id="CodeHost"></div>';
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict,
			{
				Identifier: 'CodeFileView',
				DestinationAddress: '#CodeHost',
				Probe: false,
				Fetch: makeTextFetch('const answer = 42;'),
				CodeSectionClass: libPictSectionCode
			});
			tmpPict.views.CodeFileView.render();
			tmpPict.providers.CodeFileView.setFile('https://host/app.js');

			const tmpHandle = tmpPict.providers.CodeFileView._currentHandle;
			Expect(tmpHandle).to.not.equal(null);
			Expect(tmpHandle.Hash).to.equal('Fileview-Renderer-Code');
			Expect(tmpHandle.ChildViewHash).to.be.a('string');
			tmpHandle.Ready.then(() =>
			{
				const tmpStage = document.getElementById('CodeFileView-Stage');
				Expect(tmpStage.innerHTML).to.contain('pict-code-editor');
				Expect(tmpStage.textContent).to.contain('const answer = 42;');
				try { delete window.CodeJar; } catch (pError) { window.CodeJar = undefined; }
				pDone();
			}).catch((pError) =>
			{
				try { delete window.CodeJar; } catch (pIgnore) { window.CodeJar = undefined; }
				pDone(pError);
			});
		});

		test('a same-kind re-point reuses the live lens via update() (no new handle)', (pDone) =>
		{
			document.body.innerHTML = '<div id="ReuseHost"></div>';
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict,
				{ Identifier: 'ReuseFileView', DestinationAddress: '#ReuseHost', Probe: false, Fetch: makeTextFetch('body') });
			tmpPict.views.ReuseFileView.render();
			const tmpProvider = tmpPict.providers.ReuseFileView;

			tmpProvider.setFile('https://host/a.txt');
			const tmpFirstHandle = tmpProvider._currentHandle;
			tmpFirstHandle.Ready.then(() =>
			{
				tmpProvider.setFile('https://host/b.txt');
				const tmpSecondHandle = tmpProvider._currentHandle;
				// Same renderer kind → the handle instance is reused (updated in place), not replaced.
				Expect(tmpSecondHandle).to.equal(tmpFirstHandle);
				Expect(tmpSecondHandle.Descriptor.Name).to.equal('b.txt');
				pDone();
			}).catch(pDone);
		});
	});

	suite('image scoring + capability', () =>
	{
		// No ImageSectionClass here, so the delegating ImageRenderer abstains and the self-contained basic lens wins.
		let tmpBasicProvider;
		// With an ImageSectionClass present, the delegate should win on Priority.
		let tmpDelegateProvider;
		suiteSetup(() =>
		{
			const tmpPictA = new libPict();
			libFileview.createFileview(tmpPictA, { Identifier: 'ImgBasicScore', Probe: false });
			tmpBasicProvider = tmpPictA.providers.ImgBasicScore;

			function FakeImageSection() {}
			FakeImageSection.default_configuration = {};
			const tmpPictB = new libPict();
			libFileview.createFileview(tmpPictB, { Identifier: 'ImgDelegateScore', Probe: false, ImageSectionClass: FakeImageSection });
			tmpDelegateProvider = tmpPictB.providers.ImgDelegateScore;
		});

		test('an image extension resolves to the basic image lens when no image module is present', () =>
		{
			const tmpDescriptor = tmpBasicProvider.normalizeDescriptor('https://host/photo.png');
			Expect(tmpBasicProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-ImageBasic');
		});

		test('an SVG resolves to an image lens (rendered as a graphic, not source)', () =>
		{
			const tmpDescriptor = tmpBasicProvider.normalizeDescriptor('https://host/logo.svg');
			Expect(tmpBasicProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-ImageBasic');
		});

		test('an image MIME with no extension still resolves to an image lens', () =>
		{
			const tmpDescriptor = tmpBasicProvider.normalizeDescriptor({ URL: 'https://host/blob', Name: 'blob', MIMEType: 'image/webp' });
			Expect(tmpBasicProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-ImageBasic');
		});

		test('the delegating image lens wins on Priority when an image module is present', () =>
		{
			const tmpDescriptor = tmpDelegateProvider.normalizeDescriptor('https://host/photo.jpg');
			Expect(tmpDelegateProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-Image');
		});

		test('a non-renderable image format (TIFF) degrades to the download card', () =>
		{
			const tmpDescriptor = tmpBasicProvider.normalizeDescriptor({ URL: 'https://host/scan.tiff', Name: 'scan.tiff', MIMEType: 'image/tiff' });
			Expect(tmpBasicProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-DownloadCard');
		});

		test('an oversize image degrades to the download card (never blit raw into an <img>)', () =>
		{
			const tmpDescriptor = tmpBasicProvider.normalizeDescriptor(
				{ URL: 'https://host/huge.png', Name: 'huge.png', MIMEType: 'image/png', Kind: 'image', Size: 900000000 });
			Expect(tmpBasicProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-DownloadCard');
		});
	});

	suite('image render', () =>
	{
		test('the basic image lens paints a responsive <img> with the file URL', () =>
		{
			document.body.innerHTML = '<div id="ImgBasicHost"></div>';
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'ImgBasicView', DestinationAddress: '#ImgBasicHost', Probe: false });
			tmpPict.views.ImgBasicView.render();
			tmpPict.providers.ImgBasicView.setFile({ Name: 'cat.png', MIMEType: 'image/png', URL: 'https://host/cat.png' });

			const tmpHandle = tmpPict.providers.ImgBasicView._currentHandle;
			Expect(tmpHandle).to.not.equal(null);
			Expect(tmpHandle.Hash).to.equal('Fileview-Renderer-ImageBasic');
			const tmpStage = document.getElementById('ImgBasicView-Stage');
			const tmpImage = tmpStage.querySelector('img.pfv-image');
			Expect(tmpImage).to.not.equal(null);
			Expect(tmpImage.getAttribute('src')).to.equal('https://host/cat.png');
			Expect(tmpImage.getAttribute('alt')).to.equal('cat.png');
		});

		test('a same-kind re-point updates the basic image src in place (one handle)', () =>
		{
			document.body.innerHTML = '<div id="ImgReuseHost"></div>';
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'ImgReuseView', DestinationAddress: '#ImgReuseHost', Probe: false });
			tmpPict.views.ImgReuseView.render();
			const tmpProvider = tmpPict.providers.ImgReuseView;

			tmpProvider.setFile({ Name: 'a.png', MIMEType: 'image/png', URL: 'https://host/a.png' });
			const tmpFirstHandle = tmpProvider._currentHandle;
			tmpProvider.setFile({ Name: 'b.png', MIMEType: 'image/png', URL: 'https://host/b.png' });
			Expect(tmpProvider._currentHandle).to.equal(tmpFirstHandle);
			const tmpImage = document.getElementById('ImgReuseView-Stage').querySelector('img.pfv-image');
			Expect(tmpImage.getAttribute('src')).to.equal('https://host/b.png');
		});

		test('the image lens mounts the real pict-section-image and feeds it the file', () =>
		{
			if (!libPictSectionImage) { return; }   // standalone checkout without the sibling — skip

			document.body.innerHTML = '<div id="ImgDelegateHost"></div>';
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict,
			{
				Identifier: 'ImgDelegateView',
				DestinationAddress: '#ImgDelegateHost',
				Probe: false,
				ImageSectionClass: libPictSectionImage
			});
			tmpPict.views.ImgDelegateView.render();
			tmpPict.providers.ImgDelegateView.setFile({ Name: 'cat.png', MIMEType: 'image/png', URL: 'https://host/cat.png' });

			const tmpHandle = tmpPict.providers.ImgDelegateView._currentHandle;
			Expect(tmpHandle).to.not.equal(null);
			Expect(tmpHandle.Hash).to.equal('Fileview-Renderer-Image');
			Expect(tmpHandle.ChildViewHash).to.be.a('string');

			const tmpHost = document.getElementById('ImgDelegateView-ImageHost');
			Expect(tmpHost).to.not.equal(null);
			const tmpImage = tmpHost.querySelector('img.psi-image');
			Expect(tmpImage).to.not.equal(null);
			Expect(tmpImage.getAttribute('src')).to.equal('https://host/cat.png');
		});
	});

	suite('fullscreen (fill the viewport)', () =>
	{
		test('the toolbar shows a maximize button by default', () =>
		{
			document.body.innerHTML = '<div id="FsHost"></div>';
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'FsView', DestinationAddress: '#FsHost', Probe: false });
			tmpPict.views.FsView.render();
			tmpPict.providers.FsView.setFile({ Name: 'a.zip', MIMEType: 'application/zip', URL: 'https://host/a.zip' });

			const tmpToolbar = document.getElementById('FsView-Toolbar');
			Expect(tmpToolbar.querySelector('.pfv-fullscreen-btn')).to.not.equal(null);
		});

		test('ShowFullscreen:false omits the maximize button', () =>
		{
			document.body.innerHTML = '<div id="FsOffHost"></div>';
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'FsOffView', DestinationAddress: '#FsOffHost', Probe: false, ShowFullscreen: false });
			tmpPict.views.FsOffView.render();

			const tmpToolbar = document.getElementById('FsOffView-Toolbar');
			Expect(tmpToolbar.querySelector('.pfv-fullscreen-btn')).to.equal(null);
		});

		test('toggleFullscreen adds then removes pfv-fullscreen on the root and tracks state', () =>
		{
			document.body.innerHTML = '<div id="FsToggleHost"></div>';
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'FsToggleView', DestinationAddress: '#FsToggleHost', Probe: false });
			tmpPict.views.FsToggleView.render();
			const tmpProvider = tmpPict.providers.FsToggleView;
			const tmpRoot = document.getElementById('FsToggleView-Root');

			Expect(tmpProvider.isFullscreen()).to.equal(false);
			tmpProvider.toggleFullscreen();
			Expect(tmpProvider.isFullscreen()).to.equal(true);
			Expect(tmpRoot.classList.contains('pfv-fullscreen')).to.equal(true);
			tmpProvider.toggleFullscreen();
			Expect(tmpProvider.isFullscreen()).to.equal(false);
			Expect(tmpRoot.classList.contains('pfv-fullscreen')).to.equal(false);
		});

		test('the Escape key exits fullscreen', () =>
		{
			document.body.innerHTML = '<div id="FsEscHost"></div>';
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'FsEscView', DestinationAddress: '#FsEscHost', Probe: false });
			tmpPict.views.FsEscView.render();
			const tmpProvider = tmpPict.providers.FsEscView;

			tmpProvider.enterFullscreen();
			Expect(tmpProvider.isFullscreen()).to.equal(true);
			document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape' }));
			Expect(tmpProvider.isFullscreen()).to.equal(false);
		});

		test('destroy detaches the Escape handler (a later Escape does not re-enter)', () =>
		{
			document.body.innerHTML = '<div id="FsDestroyHost"></div>';
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'FsDestroyView', DestinationAddress: '#FsDestroyHost', Probe: false });
			tmpPict.views.FsDestroyView.render();
			const tmpProvider = tmpPict.providers.FsDestroyView;

			tmpProvider.enterFullscreen();
			tmpProvider.destroy();
			Expect(tmpProvider._keydownHandler).to.equal(null);
			document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape' }));
			Expect(tmpProvider.isFullscreen()).to.equal(false);
		});
	});

	// ---- PDF lens (delegates to a host-provided PDF.js) -----------------------------------------------------
	suite('PDF renderer', () =>
	{
		// A minimal PDF.js stand-in: getDocument().promise resolves to a document whose pages report a viewport
		// and a no-op render. Enough to exercise layout + the (eager, in headless) page render path.
		function makeFakePdfLibrary(pNumPages)
		{
			const tmpPages = pNumPages || 3;
			return {
				GlobalWorkerOptions: { workerSrc: '' },
				getDocument: function (pSrc)
				{
					return {
						promise: Promise.resolve(
						{
							numPages: tmpPages,
							getPage: function (pPageNumber)
							{
								return Promise.resolve(
								{
									getViewport: function (pOptions) { const tmpScale = (pOptions && pOptions.scale) || 1; return { width: 600 * tmpScale, height: 800 * tmpScale }; },
									render: function (pParameters) { return { promise: Promise.resolve() }; }
								});
							},
							destroy: function () {}
						}),
						destroy: function () {}
					};
				}
			};
		}

		test('a PDF with no PDF.js present degrades to the download card', () =>
		{
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'PdfAbsentView' });
			const tmpProvider = tmpPict.providers.PdfAbsentView;
			const tmpDescriptor = tmpProvider.normalizeDescriptor({ Name: 'paper.pdf', URL: 'https://host/paper.pdf' });
			Expect(tmpProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-DownloadCard');
		});

		test('a PDF resolves to the PDF renderer when PDF.js is provided', () =>
		{
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'PdfPresentView', PdfLibrary: makeFakePdfLibrary(2) });
			const tmpProvider = tmpPict.providers.PdfPresentView;
			const tmpDescriptor = tmpProvider.normalizeDescriptor({ Name: 'paper.pdf', URL: 'https://host/paper.pdf' });
			Expect(tmpProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-PDF');
		});

		test('the PDF lens lays out one placeholder per page and paints canvases', (pDone) =>
		{
			document.body.innerHTML = '<div id="PdfHost"></div>';
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict,
				{ Identifier: 'PdfRenderView', DestinationAddress: '#PdfHost', Probe: false, PdfLibrary: makeFakePdfLibrary(3) });
			tmpPict.views.PdfRenderView.render();
			tmpPict.providers.PdfRenderView.setFile('https://host/doc.pdf');

			const tmpHandle = tmpPict.providers.PdfRenderView._currentHandle;
			Expect(tmpHandle).to.not.equal(null);
			Expect(tmpHandle.Hash).to.equal('Fileview-Renderer-PDF');
			tmpHandle.Ready.then(() =>
			{
				const tmpStage = document.getElementById('PdfRenderView-Stage');
				const tmpPages = tmpStage.querySelectorAll('.pfv-pdf-page');
				Expect(tmpPages.length).to.equal(3);
				// Headless has no IntersectionObserver, so pages render eagerly — a canvas per page.
				Expect(tmpStage.querySelectorAll('.pfv-pdf-canvas').length).to.equal(3);
				pDone();
			}).catch(pDone);
		});
	});

	// ---- Deep-zoom lens (enormous images via a server tile pyramid) -----------------------------------------
	suite('Deep-zoom renderer', () =>
	{
		// A minimal OpenSeaDragon stand-in capturing the settings and open()/destroy() calls.
		function makeFakeOpenSeadragon(pLog)
		{
			return function (pSettings)
			{
				pLog.created = (pLog.created || 0) + 1;
				pLog.lastSettings = pSettings;
				return {
					open: function (pTileSources) { pLog.opened = (pLog.opened || 0) + 1; pLog.lastTileSources = pTileSources; },
					destroy: function () { pLog.destroyed = (pLog.destroyed || 0) + 1; }
				};
			};
		}

		test('an image with a tile source + OpenSeaDragon resolves to the deep-zoom renderer', () =>
		{
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'DzResolveView', OpenSeadragon: makeFakeOpenSeadragon({}) });
			const tmpProvider = tmpPict.providers.DzResolveView;
			const tmpDescriptor = tmpProvider.normalizeDescriptor(
				{ Name: 'huge.tif', Kind: 'image', URL: 'https://host/huge/Open', Meta: { TileSources: 'https://host/huge/Tiles/image.dzi' } });
			Expect(tmpProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-DeepZoom');
		});

		test('without a tile source the deep-zoom renderer abstains', () =>
		{
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'DzNoTilesView', OpenSeadragon: makeFakeOpenSeadragon({}) });
			const tmpProvider = tmpPict.providers.DzNoTilesView;
			const tmpDescriptor = tmpProvider.normalizeDescriptor({ Name: 'photo.png', URL: 'https://host/photo.png' });
			Expect(tmpProvider.resolveRenderer(tmpDescriptor).Hash).to.not.equal('Fileview-Renderer-DeepZoom');
		});

		test('without OpenSeaDragon the deep-zoom renderer abstains even with a tile source', () =>
		{
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'DzNoOsdView' });
			const tmpProvider = tmpPict.providers.DzNoOsdView;
			const tmpDescriptor = tmpProvider.normalizeDescriptor(
				{ Name: 'huge.tif', Size: 900000000, URL: 'https://host/huge/Open', Meta: { TileSources: 'https://host/huge/Tiles/image.dzi' } });
			// An oversize image with no deep-zoom and no ordinary lens lands on the download card.
			Expect(tmpProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-DownloadCard');
		});

		test('the deep-zoom lens mounts OpenSeaDragon on its own element and re-points on update', () =>
		{
			document.body.innerHTML = '<div id="DzHost"></div>';
			const tmpLog = {};
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict,
				{ Identifier: 'DzMountView', DestinationAddress: '#DzHost', Probe: false, OpenSeadragon: makeFakeOpenSeadragon(tmpLog) });
			tmpPict.views.DzMountView.render();
			const tmpProvider = tmpPict.providers.DzMountView;

			tmpProvider.setFile({ Name: 'a.tif', Kind: 'image', URL: 'https://host/a/Open', Meta: { TileSources: 'https://host/a/Tiles/image.dzi' } });
			const tmpHandle = tmpProvider._currentHandle;
			Expect(tmpHandle.Hash).to.equal('Fileview-Renderer-DeepZoom');
			Expect(tmpLog.created).to.equal(1);
			Expect(tmpLog.lastSettings.tileSources).to.equal('https://host/a/Tiles/image.dzi');
			Expect(tmpLog.lastSettings.element.id).to.equal('DzMountView-OSDHost');

			// Same-kind re-point reuses the viewer (open()), does not re-create it.
			tmpProvider.setFile({ Name: 'b.tif', Kind: 'image', URL: 'https://host/b/Open', Meta: { TileSources: 'https://host/b/Tiles/image.dzi' } });
			Expect(tmpLog.created).to.equal(1);
			Expect(tmpLog.opened).to.equal(1);
			Expect(tmpLog.lastTileSources).to.equal('https://host/b/Tiles/image.dzi');

			// Switching to a non-image type tears the viewer down.
			tmpProvider.setFile({ Name: 'notes.txt', URL: 'https://host/notes.txt' });
			Expect(tmpLog.destroyed).to.equal(1);
		});
	});

	// ---- Video lens (native <video>, or the delegated pict-section-video) ------------------------------------
	suite('video scoring + capability', () =>
	{
		// No VideoSectionClass here → the delegating VideoRenderer abstains and the self-contained basic lens wins.
		let tmpBasicProvider;
		// With a VideoSectionClass present, the delegate should win on Priority.
		let tmpDelegateProvider;
		suiteSetup(() =>
		{
			const tmpPictA = new libPict();
			libFileview.createFileview(tmpPictA, { Identifier: 'VidBasicScore', Probe: false });
			tmpBasicProvider = tmpPictA.providers.VidBasicScore;

			function FakeVideoSection() {}
			FakeVideoSection.default_configuration = {};
			const tmpPictB = new libPict();
			libFileview.createFileview(tmpPictB, { Identifier: 'VidDelegateScore', Probe: false, VideoSectionClass: FakeVideoSection });
			tmpDelegateProvider = tmpPictB.providers.VidDelegateScore;
		});

		test('an mp4 resolves to the basic video lens when no video module is present', () =>
		{
			const tmpDescriptor = tmpBasicProvider.normalizeDescriptor('https://host/clip.mp4');
			Expect(tmpBasicProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-VideoBasic');
		});

		test('a video MIME with no extension still resolves to a video lens', () =>
		{
			const tmpDescriptor = tmpBasicProvider.normalizeDescriptor({ URL: 'https://host/blob', Name: 'blob', MIMEType: 'video/webm' });
			Expect(tmpBasicProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-VideoBasic');
		});

		test('an explicit video Kind outranks the extension signals', () =>
		{
			const tmpDescriptor = tmpBasicProvider.normalizeDescriptor({ URL: 'https://host/x', Name: 'x', Kind: 'video' });
			Expect(tmpBasicProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-VideoBasic');
		});

		test('the delegating video lens wins on Priority when a video module is present', () =>
		{
			const tmpDescriptor = tmpDelegateProvider.normalizeDescriptor('https://host/clip.mp4');
			Expect(tmpDelegateProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-Video');
		});

		test('a non-playable container (AVI) degrades to the download card', () =>
		{
			const tmpDescriptor = tmpBasicProvider.normalizeDescriptor({ URL: 'https://host/home.avi', Name: 'home.avi', MIMEType: 'video/x-msvideo' });
			Expect(tmpBasicProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-DownloadCard');
		});
	});

	suite('video render', () =>
	{
		test('the basic video lens paints a native <video controls> with the file URL', () =>
		{
			document.body.innerHTML = '<div id="VidBasicHost"></div>';
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'VidBasicView', DestinationAddress: '#VidBasicHost', Probe: false });
			tmpPict.views.VidBasicView.render();
			tmpPict.providers.VidBasicView.setFile({ Name: 'clip.mp4', MIMEType: 'video/mp4', URL: 'https://host/clip.mp4' });

			const tmpHandle = tmpPict.providers.VidBasicView._currentHandle;
			Expect(tmpHandle).to.not.equal(null);
			Expect(tmpHandle.Hash).to.equal('Fileview-Renderer-VideoBasic');
			const tmpVideo = document.getElementById('VidBasicView-Stage').querySelector('video.pfv-video');
			Expect(tmpVideo).to.not.equal(null);
			Expect(tmpVideo.getAttribute('src')).to.equal('https://host/clip.mp4');
			Expect(tmpVideo.hasAttribute('controls')).to.equal(true);
		});

		test('a same-kind re-point updates the basic video src in place (one handle)', () =>
		{
			document.body.innerHTML = '<div id="VidReuseHost"></div>';
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'VidReuseView', DestinationAddress: '#VidReuseHost', Probe: false });
			tmpPict.views.VidReuseView.render();
			const tmpProvider = tmpPict.providers.VidReuseView;

			tmpProvider.setFile({ Name: 'a.mp4', MIMEType: 'video/mp4', URL: 'https://host/a.mp4' });
			const tmpFirstHandle = tmpProvider._currentHandle;
			tmpProvider.setFile({ Name: 'b.mp4', MIMEType: 'video/mp4', URL: 'https://host/b.mp4' });
			Expect(tmpProvider._currentHandle).to.equal(tmpFirstHandle);
			const tmpVideo = document.getElementById('VidReuseView-Stage').querySelector('video.pfv-video');
			Expect(tmpVideo.getAttribute('src')).to.equal('https://host/b.mp4');
		});

		test('the video lens mounts the real pict-section-video and feeds it the file', () =>
		{
			if (!libPictSectionVideo) { return; }   // standalone checkout without the sibling — skip

			document.body.innerHTML = '<div id="VidDelegateHost"></div>';
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict,
			{
				Identifier: 'VidDelegateView',
				DestinationAddress: '#VidDelegateHost',
				Probe: false,
				VideoSectionClass: libPictSectionVideo
			});
			tmpPict.views.VidDelegateView.render();
			tmpPict.providers.VidDelegateView.setFile({ Name: 'movie.mp4', MIMEType: 'video/mp4', URL: 'https://host/movie.mp4' });

			const tmpHandle = tmpPict.providers.VidDelegateView._currentHandle;
			Expect(tmpHandle).to.not.equal(null);
			Expect(tmpHandle.Hash).to.equal('Fileview-Renderer-Video');
			Expect(tmpHandle.ChildViewHash).to.be.a('string');

			const tmpHost = document.getElementById('VidDelegateView-VideoHost');
			Expect(tmpHost).to.not.equal(null);
			const tmpVideo = tmpHost.querySelector('video.psv-video');
			Expect(tmpVideo).to.not.equal(null);
			Expect(tmpVideo.getAttribute('src')).to.equal('https://host/movie.mp4');
		});
	});

	// ---- Audio lens (native <audio>, or the delegated pict-section-audio) ------------------------------------
	suite('audio scoring + capability', () =>
	{
		let tmpBasicProvider;
		let tmpDelegateProvider;
		suiteSetup(() =>
		{
			const tmpPictA = new libPict();
			libFileview.createFileview(tmpPictA, { Identifier: 'AudBasicScore', Probe: false });
			tmpBasicProvider = tmpPictA.providers.AudBasicScore;

			function FakeAudioSection() {}
			FakeAudioSection.default_configuration = {};
			const tmpPictB = new libPict();
			libFileview.createFileview(tmpPictB, { Identifier: 'AudDelegateScore', Probe: false, AudioSectionClass: FakeAudioSection });
			tmpDelegateProvider = tmpPictB.providers.AudDelegateScore;
		});

		test('an mp3 resolves to the basic audio lens when no audio module is present', () =>
		{
			const tmpDescriptor = tmpBasicProvider.normalizeDescriptor('https://host/song.mp3');
			Expect(tmpBasicProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-AudioBasic');
		});

		test('an audio MIME with no extension still resolves to an audio lens', () =>
		{
			const tmpDescriptor = tmpBasicProvider.normalizeDescriptor({ URL: 'https://host/blob', Name: 'blob', MIMEType: 'audio/mpeg' });
			Expect(tmpBasicProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-AudioBasic');
		});

		test('the delegating audio lens wins on Priority when an audio module is present', () =>
		{
			const tmpDescriptor = tmpDelegateProvider.normalizeDescriptor('https://host/song.mp3');
			Expect(tmpDelegateProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-Audio');
		});

		test('a non-playable audio format (WMA) degrades to the download card', () =>
		{
			const tmpDescriptor = tmpBasicProvider.normalizeDescriptor({ URL: 'https://host/voice.wma', Name: 'voice.wma', MIMEType: 'audio/x-ms-wma' });
			Expect(tmpBasicProvider.resolveRenderer(tmpDescriptor).Hash).to.equal('Fileview-Renderer-DownloadCard');
		});
	});

	suite('audio render', () =>
	{
		test('the basic audio lens paints a native <audio controls> with the file URL', () =>
		{
			document.body.innerHTML = '<div id="AudBasicHost"></div>';
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict, { Identifier: 'AudBasicView', DestinationAddress: '#AudBasicHost', Probe: false });
			tmpPict.views.AudBasicView.render();
			tmpPict.providers.AudBasicView.setFile({ Name: 'song.mp3', MIMEType: 'audio/mpeg', URL: 'https://host/song.mp3' });

			const tmpHandle = tmpPict.providers.AudBasicView._currentHandle;
			Expect(tmpHandle).to.not.equal(null);
			Expect(tmpHandle.Hash).to.equal('Fileview-Renderer-AudioBasic');
			const tmpAudio = document.getElementById('AudBasicView-Stage').querySelector('audio.pfv-audio');
			Expect(tmpAudio).to.not.equal(null);
			Expect(tmpAudio.getAttribute('src')).to.equal('https://host/song.mp3');
			Expect(tmpAudio.hasAttribute('controls')).to.equal(true);
		});

		test('the audio lens mounts the real pict-section-audio and feeds it the file', () =>
		{
			if (!libPictSectionAudio) { return; }   // standalone checkout without the sibling — skip

			document.body.innerHTML = '<div id="AudDelegateHost"></div>';
			const tmpPict = new libPict();
			libFileview.createFileview(tmpPict,
			{
				Identifier: 'AudDelegateView',
				DestinationAddress: '#AudDelegateHost',
				Probe: false,
				AudioSectionClass: libPictSectionAudio
			});
			tmpPict.views.AudDelegateView.render();
			tmpPict.providers.AudDelegateView.setFile({ Name: 'track.mp3', MIMEType: 'audio/mpeg', URL: 'https://host/track.mp3' });

			const tmpHandle = tmpPict.providers.AudDelegateView._currentHandle;
			Expect(tmpHandle).to.not.equal(null);
			Expect(tmpHandle.Hash).to.equal('Fileview-Renderer-Audio');
			Expect(tmpHandle.ChildViewHash).to.be.a('string');

			const tmpHost = document.getElementById('AudDelegateView-AudioHost');
			Expect(tmpHost).to.not.equal(null);
			const tmpAudio = tmpHost.querySelector('audio.psa-audio');
			Expect(tmpAudio).to.not.equal(null);
			Expect(tmpAudio.getAttribute('src')).to.equal('https://host/track.mp3');
			// The delegated player also shows its titled header.
			Expect(tmpHost.querySelector('.psa-title')).to.not.equal(null);
		});
	});
});
