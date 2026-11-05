# Pict Section Fileview

> Universal, embeddable quality file viewer — detect a file’s type and render it well.

- **Orchestrator, not a renderer** — type detection, a pluggable kind→renderer registry, the chrome, and child lifecycle
- **One control, every type** — text, code, markdown, image, video, audio, PDF, and deep-zoom lenses
- **Score-tier resolution** — config Kind / extension / MIME / magic bytes decide the lens; new types are registry rows
- **Probe ladder** — HEAD → Range → magic-byte sniff enriches a bare URL before it paints
- **Graceful degrade** — a lens whose dependency is absent abstains; nothing is ever unviewable (the download card is the floor)
- **Client-only** — rides the server’s existing HTTP Range / 206 contract; multiple viewers coexist on a page

[Overview](README.md)
[Configuration](configuration.md)
[Architecture](architecture.md)
[GitHub](https://github.com/fable-retold/pict-section-fileview)

<!-- docuserve:examples:start -->
| Example | Complexity | Launch |
|---------|------------|--------|
| [Fileview Browser](examples/fileview%5Fbrowser/README.md) | Intermediate | [Launch](examples/fileview%5Fbrowser/index.html) |
| [Fileview Gallery](examples/fileview%5Fgallery/README.md) | Basic | [Launch](examples/fileview%5Fgallery/index.html) |
<!-- docuserve:examples:end -->
