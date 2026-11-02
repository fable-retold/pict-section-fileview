pict-section-fileview
=====================

A universal, embeddable "quality viewer" for the Retold / Pict ecosystem.

Drop one control on a page, point it at a server-served file -- a Sluice
StoredFile record OR a bare, range-served URL -- and it detects the type and
renders it well on phones, iPads, desktops, TVs, and projected displays.

It is an orchestrator, not a renderer: it owns type detection, a pluggable
kind -> renderer registry, the viewer chrome, and child lifecycle, and it
delegates each media kind to a purpose-built child section.

This very file is being shown through the self-contained text lens -- no
syntax highlighting, no markdown, just a monospaced <pre> fed the file's
bytes over a Range request. It is also the lens every other textual file
falls back to when its richer lens is unavailable.
