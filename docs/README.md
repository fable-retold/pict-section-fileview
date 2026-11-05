# pict-section-fileview

A universal, embeddable **quality file viewer** for the Retold/Pict ecosystem. Drop one control on a page, point it
at a server-served file — a [Sluice](https://github.com/fable-retold) StoredFile record *or* a bare, range-served URL
— and it detects the type and renders it well on phones, iPads, desktops, TVs, and projected secondary displays.

It is an **orchestrator, not a renderer.** It owns type detection, a pluggable kind→renderer registry, the viewer
chrome, and child lifecycle, and delegates each media kind to a purpose-built child section that stays independently
usable on any page.

> **Status: Phase 1 complete.** Shipped: the dispatch core (registry, descriptor normalization, score-tier
> resolution, the chrome), the **probe ladder** (HEAD → Range → magic-byte sniff for bare URLs), and the full
> renderer set — the always-matches **download card**, a self-contained **text** lens, a **code** lens delegating to
> `pict-section-code`, a **markdown** lens delegating to `pict-section-content`, the **image** lenses (a
> self-contained responsive `<img>` plus a richer zoom/pan lens delegating to `pict-section-image`), the **video**
> and **audio** lenses (a self-contained native `<video>`/`<audio controls>` plus bespoke players delegating to
> `pict-section-video` / `pict-section-audio`), a **PDF** lens (PDF.js, page-lazy, Range-fed), and a **deep-zoom**
> lens for enormous images (OpenSeaDragon on a server DZI tile pyramid). See the architecture plan in the
> `pict-section-fileview` plansheet.

## Install

```bash
npm install pict-section-fileview
```

Hard dependencies are only `pict-view` and `pict-provider`. Every specialized renderer is **optional** and
host-provided: `pict-section-code` (code), `pict-section-content` (markdown), `pict-section-image` (zoom/pan image),
`pict-section-video` (video), `pict-section-audio` (audio), `PDF.js` (`window.pdfjsLib`, for PDFs), and
`OpenSeaDragon` (`window.OpenSeadragon`, for deep zoom). A renderer whose dependency is absent abstains via its
`Capability` gate, and the viewer falls through to the next best renderer — code/markdown degrade to readable text,
an image to a plain `<img>`, a video/audio to the native `<video>`/`<audio controls>`, and only a genuinely opaque
or non-web-playable file reaches the download card — rather than breaking.

## Usage

```javascript
const libFileview = require('pict-section-fileview');

// Register a provider + view pair with your pict application.
libFileview.createFileview(pict, { Identifier: 'MyFileView', DestinationAddress: '#SomeDiv' });

// Render the chrome, then point it at a file.
pict.views.MyFileView.render();

pict.providers.MyFileView.setFile('https://host/1.0/Depot/File/42/Open');   // a bare URL
pict.providers.MyFileView.setFile(tmpStoredFileRecord);                      // or a record
```

`createFileview(pPict, pConfig)` config:

| Key | Meaning |
|---|---|
| `Identifier` | The instance hash — the registration key for the provider, the view, and every element id (so multiple fileviews coexist on one page). Default `Pict-Section-Fileview`. |
| `DestinationAddress` | CSS selector the viewer mounts into. Default `#Pict-Application-Container` (override app-wide with `setDefaultDestination()`). |
| `File` | An optional initial file (record or URL). |
| `Renderers` | Extra renderer plugins to register on top of the built-ins. |
| `DisableBuiltins` | Skip seeding the built-in renderers (you provide your own set). |
| `Fetch` | A `fetch`-compatible function the viewer uses to probe and load file bytes. Defaults to the page global; set it to route through a host REST client or to stub in tests. |
| `Probe` | `false` disables the bare-URL probe ladder (HEAD/Range/magic). Default on. |
| `ShowFullscreen` | `false` hides the toolbar's maximize button. Default on — the viewer can fill the browser viewport and back (`toggleFullscreen()` / `Esc`). |
| `CodeSectionClass` | The `pict-section-code` class for the code lens. Defaults to `window.PictSectionCode`. Absent ⇒ code files degrade to the text lens. |
| `ContentProviderClass` | The `pict-section-content` provider class for the markdown lens. Defaults to `window.PictSectionContent.PictContentProvider`. Absent ⇒ markdown degrades to the text lens. |
| `ImageSectionClass` | The `pict-section-image` class for the zoom/pan image lens. Defaults to `window.PictSectionImage`. Absent ⇒ images render in the self-contained basic `<img>` lens. |
| `VideoSectionClass` | The `pict-section-video` class for the bespoke video lens. Defaults to `window.PictSectionVideo`. Absent ⇒ video renders in the self-contained native `<video controls>` lens. |
| `AudioSectionClass` | The `pict-section-audio` class for the bespoke audio lens. Defaults to `window.PictSectionAudio`. Absent ⇒ audio renders in the self-contained native `<audio controls>` lens. |
| `PdfLibrary` | The PDF.js library for the PDF lens. Defaults to `window.pdfjsLib`. Absent ⇒ a PDF degrades to the download card. |
| `PdfWorkerSrc` | A PDF.js worker URL to set once (when PDF.js has not been given one). Alternatively set `pdfjsLib.GlobalWorkerOptions.workerSrc` yourself. |
| `OpenSeadragon` | The OpenSeaDragon factory for the deep-zoom lens. Defaults to `window.OpenSeadragon`. Absent ⇒ an enormous image degrades to the download card. |
| `OpenSeadragonOptions` | Extra options merged into the OpenSeaDragon viewer settings (e.g. `{ showNavigator: true }`). |
| `CodeMaxBytes` | Byte cap fed to the code highlighter (default 2 MB); larger files use the text lens. |
| `TextMaxBytes` | Byte cap (a Range read) for the text / markdown lenses (default 5 MB); the remainder is a download. |
| `CSSExtra` | Extra CSS appended to the shell styles. |
| `Ordinal`, `ProviderClass`, `ViewClass` | Advanced overrides. |

## Built-in renderers

| Hash | Handles | Depends on |
|---|---|---|
| `Fileview-Renderer-Code` | source files (CodeJar, read-only, line numbers) | `pict-section-code` + a `window.CodeJar` page global |
| `Fileview-Renderer-Markdown` | `.md` / markdown | `pict-section-content`'s `parseMarkdown` |
| `Fileview-Renderer-DeepZoom` | enormous images, via a server DZI tile pyramid (zoom / pan) | OpenSeaDragon + a `Meta.TileSources` |
| `Fileview-Renderer-PDF` | PDF documents; pages rendered to canvas, page-lazy, Range-fed | PDF.js |
| `Fileview-Renderer-Image` | images, with zoom / pan / download chrome | `pict-section-image` |
| `Fileview-Renderer-Video` | web-playable video, with a bespoke control bar (play / seek / volume / rate) | `pict-section-video` |
| `Fileview-Renderer-Audio` | web-playable audio, a titled player with an optional waveform | `pict-section-audio` |
| `Fileview-Renderer-ImageBasic` | images; a responsive, fit-to-stage `<img>` | nothing (self-contained) |
| `Fileview-Renderer-VideoBasic` | web-playable video; a native `<video controls>` | nothing (self-contained) |
| `Fileview-Renderer-AudioBasic` | web-playable audio; a native `<audio controls>` | nothing (self-contained) |
| `Fileview-Renderer-Text` | any textual file; a `<pre>` | nothing (self-contained) |
| `Fileview-Renderer-DownloadCard` | everything else (the floor) | nothing |

The delegating lenses are **optional and host-provided** (see the config table): each gates on its dependency via
its `Capability`, and when that dependency is absent the viewer falls through to the next best renderer — a code or
markdown file without its lens still renders as readable text, an image without `pict-section-image` still renders
in the basic `<img>` lens, and only a genuinely opaque binary reaches the download card. The text/code/markdown
lenses fetch the file's bytes themselves (client-only, Range-capped) through the configured `Fetch`; the image
lenses load the bytes directly through an `<img>`.

An image a browser cannot paint (TIFF, HEIC, camera RAW) and an **oversize** image (raw bytes larger than ~30 MB —
never blit into an `<img>`) score 0 for the ordinary image lenses. When the descriptor carries a `Meta.TileSources`
(a DZI descriptor URL or an OpenSeaDragon tile source) **and** OpenSeaDragon is on the page, the **deep-zoom** lens
takes over and streams the image from a server tile pyramid — the client never holds the whole image. Produce that
pyramid with any DZI tiler; [`orator-file-service`](https://github.com/fable-retold/orator-file-service) generates
one with libvips (`dzsave`) and serves it (and the original bytes, with Range support) over HTTP. The deep-zoom lens
is self-contained — it news up OpenSeaDragon on its own instance-unique element, so two deep-zoom fileviews coexist
on one page. Without a tile source (or without OpenSeaDragon) an oversize/unpaintable image still degrades to the
download card.

The **PDF** lens delegates to PDF.js (a host-provided page global, `window.pdfjsLib`): it hands PDF.js the URL and
lets it fetch pages on demand with HTTP Range requests, rendering each page to a `<canvas>` lazily as it scrolls
into view (eagerly where `IntersectionObserver` is unavailable). Without PDF.js a PDF degrades to the download card.

The **video** and **audio** lenses play web-playable media: MP4/WebM/Ogg for video, MP3/M4A/Ogg/WAV/FLAC for audio.
Seeking rides the browser's native HTTP Range requests, so a range-served file scrubs without downloading the whole
clip — the same 206 contract the rest of the viewer speaks. When `pict-section-video` / `pict-section-audio` are on
the page the richer bespoke players take over (a control bar with play/seek/volume/rate, a titled audio header with
an optional `Meta.peaks` waveform); absent, the self-contained native `<video controls>` / `<audio controls>` lens
plays it anyway. A container a browser cannot decode (AVI, MKV, WMV; WMA, AIFF) scores 0 for the media lenses and
degrades to the download card — a server-side transcode into a web format is a later slice, like the deep-zoom tiler.

## Renderer contract

A renderer is a plain object the registry dispatches to:

```javascript
{
    Hash:        'My-Renderer',           // unique id
    Priority:    0,                       // tiebreak when two renderers score equally (higher wins)
    Capability:  (provider) => boolean,   // optional — abstain (fall through) when a page-global lib is absent
    matches:     (descriptor) => number,  // score tier (see below)
    prepareDescriptor: (descriptor, provider) => void,  // optional — enrich before mount (the probe hook)
    mount:       (containerSelector, descriptor, provider) => handle
}
```

`matches()` returns a **score tier**, and `resolveRenderer()` picks the highest (ties broken by `Priority`, then
registration order):

| Signal | Score |
|---|---|
| explicit config `Kind` | 10000 |
| strong extension | ~700 |
| header `Content-Type` | ~400 |
| magic bytes | ~200 |
| download-card fallback | 1 (always) |

`mount()` paints into `containerSelector` (always through `pict.ContentAssignment`) and returns a handle
`{ Hash, Descriptor, ChildViewHash?, Ready?, update?(descriptor), destroy() }`. The provider keeps one handle at a
time. On a **same-kind re-point** (the next file resolves to the same renderer) it calls the handle's optional
`update(descriptor)` to re-feed the live child in place rather than tearing it down and re-mounting — the
*reuse-one-per-kind* rule, since Pict has no `removeView` and re-minting a child per file leaks views/observers. On a
**type switch** it calls `destroy()`. `Ready` is an optional promise an async renderer resolves once its content has
painted (handy in tests). Register your own with `provider.registerRenderer(plugin)` — new types need zero changes to
the core.

### FileDescriptor

The normalized contract every renderer reads:

```
{ URL, Name, Extension, MIMEType, Size, Kind, AcceptRanges, MagicBytes,
  Meta:  { title, language, poster, TileSources, duration, peaks },
  Probe: { KindSource, MIMESource, ResolvedRendererHash, Strategy } }
```

`normalizeDescriptor()` accepts either a bare URL string (`Strategy: 'auto'`) or a record (a Sluice StoredFile or a
pre-built descriptor; `Strategy: 'none'` when `Kind` is already set), and both become one FileDescriptor.

## Examples

Two runnable example applications live under `example_applications/`:

| Example | What it shows |
|---|---|
| `fileview_gallery` | Ten independent fileview instances on one page, one per media type — text, JavaScript (code lens), markdown, a raster photo, a vector SVG, a binary that degrades to the download card, a **PDF** (PDF.js), an **enormous image** deep-zoomed with OpenSeaDragon against a live `orator-file-service` DZI pyramid, a **video** (pict-section-video), and an **audio** track (pict-section-audio). The breadth-and-multi-instance showcase. |
| `fileview_browser` | A single fileview embedded in an app shell and driven by a file list — clicking a file re-points the viewer. Demonstrates live type dispatch, the *reuse-one-per-kind* `update()` path (image→image), and `destroy()` teardown on a type switch (image→code), with the active lens shown under the viewer. |

Both drive the **real** delegated sections (pict-section-code + CodeJar, pict-section-content, pict-section-image, pict-section-video, pict-section-audio) — nothing is faked.

```bash
npm run build          # build the module
cd example_applications/fileview_gallery && npm run build   # build an example's browser bundle
npm run example-serve  # (from the module root) serve the built examples at http://localhost:<port>/
```

`example-serve` runs `quack examples-serve` in static mode; open `/<example>/dist/index.html`.

## Development

```bash
npm test        # Mocha TDD via quackage
npm run build   # browser bundle via quackage
```

MIT © Steven Velozo
