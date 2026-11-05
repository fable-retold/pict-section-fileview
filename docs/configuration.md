# Configuration

```javascript
const libFileview = require('pict-section-fileview');

libFileview.createFileview(pict, { Identifier: 'MyFileView', DestinationAddress: '#SomeDiv' });
pict.views.MyFileView.render();

pict.providers.MyFileView.setFile('https://host/1.0/Depot/File/42/Open');   // a bare URL (probed)
pict.providers.MyFileView.setFile(tmpStoredFileRecord);                     // or a record
```

## `createFileview(pict, config)`

| Key | Meaning |
|---|---|
| `Identifier` | Instance hash — the registration key for the provider, the view, and every element id. Default `Pict-Section-Fileview`. |
| `DestinationAddress` | CSS selector the viewer mounts into. Default `#Pict-Application-Container`. |
| `File` | An optional initial file (record or URL). |
| `Renderers` | Extra renderer plugins to register on top of the built-ins. |
| `DisableBuiltins` | Skip seeding the built-in renderers. |
| `Fetch` | A `fetch`-compatible function for probing and loading bytes. Defaults to the page global. |
| `Probe` | `false` disables the bare-URL probe ladder. Default on. |
| `ShowFullscreen` | `false` hides the maximize button. Default on. |
| `CodeSectionClass` | `pict-section-code` class for the code lens. Defaults to `window.PictSectionCode`. |
| `ContentProviderClass` | `pict-section-content` provider for the markdown lens. Defaults to `window.PictSectionContent.PictContentProvider`. |
| `ImageSectionClass` | `pict-section-image` class for the image lens. Defaults to `window.PictSectionImage`. |
| `VideoSectionClass` | `pict-section-video` class for the video lens. Defaults to `window.PictSectionVideo`. |
| `AudioSectionClass` | `pict-section-audio` class for the audio lens. Defaults to `window.PictSectionAudio`. |
| `PdfLibrary` / `PdfWorkerSrc` | PDF.js library + worker URL for the PDF lens. Defaults to `window.pdfjsLib`. |
| `OpenSeadragon` / `OpenSeadragonOptions` | OpenSeaDragon factory + extra settings for the deep-zoom lens. Defaults to `window.OpenSeadragon`. |
| `CodeMaxBytes` / `TextMaxBytes` | Byte caps for the code highlighter (2 MB) and the text/markdown Range read (5 MB). |
| `CSSExtra` | Extra CSS appended to the shell styles. |

A delegating lens whose class/library is absent abstains via its `Capability` gate and the viewer falls through to
the next best renderer. The hard dependencies are only `pict-view` and `pict-provider`.

## Built-in renderers

| Hash | Handles | Depends on |
|---|---|---|
| `Fileview-Renderer-Code` | source files | `pict-section-code` + `window.CodeJar` |
| `Fileview-Renderer-Markdown` | `.md` / markdown | `pict-section-content` |
| `Fileview-Renderer-DeepZoom` | enormous images, via a server DZI pyramid | OpenSeaDragon + a `Meta.TileSources` |
| `Fileview-Renderer-PDF` | PDF documents (page-lazy, Range-fed) | PDF.js |
| `Fileview-Renderer-Image` | images (zoom / pan / download) | `pict-section-image` |
| `Fileview-Renderer-Video` | web-playable video (play / seek / volume / rate) | `pict-section-video` |
| `Fileview-Renderer-Audio` | web-playable audio (titled, optional waveform) | `pict-section-audio` |
| `Fileview-Renderer-ImageBasic` | images; a responsive `<img>` | nothing |
| `Fileview-Renderer-VideoBasic` | web-playable video; native `<video controls>` | nothing |
| `Fileview-Renderer-AudioBasic` | web-playable audio; native `<audio controls>` | nothing |
| `Fileview-Renderer-Text` | any textual file; a `<pre>` | nothing |
| `Fileview-Renderer-DownloadCard` | everything else (the floor) | nothing |

## The renderer contract

```javascript
{
    Hash:        'My-Renderer',           // unique id
    Priority:    0,                       // tiebreak when two renderers score equally (higher wins)
    Capability:  (provider) => boolean,   // optional — abstain (fall through) when a dependency is absent
    matches:     (descriptor) => number,  // score tier
    prepareDescriptor: (descriptor, provider) => void,  // optional — enrich before mount
    mount:       (containerSelector, descriptor, provider) => handle
}
```

`mount()` paints into the stage (always through `pict.ContentAssignment`) and returns a handle
`{ Hash, Descriptor, ChildViewHash?, Ready?, update?(descriptor), destroy() }`. Register your own with
`provider.registerRenderer(plugin)` — new types need zero changes to the core.

## FileDescriptor

```
{ URL, Name, Extension, MIMEType, Size, Kind, AcceptRanges, MagicBytes,
  Meta:  { title, language, poster, TileSources, duration, peaks },
  Probe: { KindSource, MIMESource, ResolvedRendererHash, Strategy } }
```
