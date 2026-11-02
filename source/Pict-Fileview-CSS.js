'use strict';

// The shared fileview shell CSS — the `.pfv-*` family. Every color/size is wired through pict-provider-theme
// tokens (var(--theme-color-*, #fallback)) so a host using pict-provider-theme gets a themed viewer automatically,
// and a host without it still gets the hand-picked fallbacks. Renderer-specific styling (the code gutter, the
// OpenSeadragon canvas, the PDF page strip, …) stays with each delegated child section; this file owns only the
// chrome (toolbar + stage + empty state + the always-present download card).

const FILEVIEW_CSS = /*css*/`
	.pfv-root { display: flex; flex-direction: column; min-height: 0; height: 100%; width: 100%; box-sizing: border-box;
		background: var(--theme-color-background-panel, #ffffff); color: var(--theme-color-text-primary, #1f2733);
		border: 1px solid var(--theme-color-border-default, #d7dce3); border-radius: 8px; overflow: hidden; }

	/* Maximized: the viewer leaves its host box and fills the browser viewport. Esc or the toolbar button restores it. */
	.pfv-root.pfv-fullscreen { position: fixed; top: 0; right: 0; bottom: 0; left: 0; width: 100vw; height: 100vh;
		border-radius: 0; border: 0; z-index: 2147483000; }

	.pfv-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; flex: 0 0 auto;
		padding: 0.55rem 0.85rem; border-bottom: 1px solid var(--theme-color-border-light, #e8ebf0);
		background: var(--theme-color-background-secondary, #f7f9fb); min-height: 2.6rem; }
	.pfv-toolbar-title { display: inline-flex; align-items: center; gap: 0.5rem; min-width: 0; font-size: 0.9rem; font-weight: 600; }
	.pfv-toolbar-title .pfv-name { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
	.pfv-toolbar-sub { font-size: 0.74rem; font-weight: 500; color: var(--theme-color-text-muted, #6b7686); white-space: nowrap; }
	.pfv-toolbar-actions { display: inline-flex; align-items: center; gap: 0.4rem; flex: 0 0 auto; }

	.pfv-stage { position: relative; flex: 1 1 auto; min-height: 0; overflow: auto;
		display: flex; align-items: stretch; justify-content: stretch; }
	.pfv-stage > * { min-width: 0; width: 100%; }

	.pfv-btn { font-size: 0.8rem; font-weight: 600; padding: 0.38rem 0.72rem; border-radius: 7px;
		border: 1px solid var(--theme-color-border-medium, #d5dbe3); background: var(--theme-color-background-panel, #fff);
		color: var(--theme-color-text-secondary, #45505f); cursor: pointer; display: inline-flex; align-items: center;
		gap: 0.35rem; text-decoration: none; }
	.pfv-btn:hover { border-color: var(--theme-color-brand-primary, #5650e6); color: var(--theme-color-text-primary, #1f2733); text-decoration: none; }
	.pfv-btn-primary { background: var(--theme-color-brand-primary, #5650e6); border-color: var(--theme-color-brand-primary, #5650e6); color: #fff; }
	.pfv-btn-primary:hover { color: #fff; opacity: 0.94; }

	.pfv-empty { margin: auto; text-align: center; color: var(--theme-color-text-muted, #8a94a3); padding: 2.4rem 1rem; }
	.pfv-empty .pfv-empty-glyph { font-size: 2rem; opacity: 0.5; display: block; margin-bottom: 0.6rem; }
	.pfv-empty p { margin: 0; font-size: 0.9rem; }

	.pfv-card { margin: auto; display: flex; align-items: center; gap: 0.9rem; max-width: 30rem; width: calc(100% - 2rem);
		padding: 1.1rem 1.2rem; border: 1px solid var(--theme-color-border-light, #e8ebf0); border-radius: 10px;
		background: var(--theme-color-background-secondary, #f7f9fb); }
	.pfv-card-icon { font-size: 1.8rem; color: var(--theme-color-brand-primary, #5650e6); flex: 0 0 auto; }
	.pfv-card-meta { min-width: 0; flex: 1 1 auto; }
	.pfv-card-name { font-size: 0.98rem; font-weight: 650; color: var(--theme-color-text-primary, #1f2733);
		white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
	.pfv-card-sub { font-size: 0.78rem; color: var(--theme-color-text-muted, #6b7686); margin-top: 0.15rem; }
	.pfv-card-actions { flex: 0 0 auto; }

	/* Loading + truncation notice shared by the content-loading renderers (text / code / markdown). */
	.pfv-loading { margin: auto; padding: 1.6rem 1rem; color: var(--theme-color-text-muted, #8a94a3); font-size: 0.88rem;
		display: inline-flex; align-items: center; gap: 0.4rem; }
	.pfv-notice { padding: 0.5rem 0.85rem; font-size: 0.76rem; color: var(--theme-color-text-muted, #6b7686);
		background: var(--theme-color-background-secondary, #f7f9fb); border-bottom: 1px solid var(--theme-color-border-light, #e8ebf0); }

	/* Plain-text lens — a readable, horizontally-scrolling <pre>. Also the degrade for code/markdown. */
	.pfv-textwrap { width: 100%; min-width: 0; display: flex; flex-direction: column; }
	.pfv-text { margin: 0; padding: 0.9rem 1.05rem; flex: 1 1 auto; overflow: auto; white-space: pre; tab-size: 4;
		font-family: var(--theme-typography-family-mono, 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace);
		font-size: 0.82rem; line-height: 1.55; color: var(--theme-color-text-primary, #1f2733);
		background: var(--theme-color-background-panel, #ffffff); }

	/* Hosts the delegated children mount into. The child owns its own inner styling; fileview just gives it the
	   full stage and lets it scroll. */
	.pfv-code-host { width: 100%; min-width: 0; display: flex; }
	.pfv-code-host .pict-code-editor-wrap { flex: 1 1 auto; border: 0; border-radius: 0; }
	.pfv-content-host { width: 100%; min-width: 0; overflow: auto; padding: 0.4rem 1.1rem 1.4rem; box-sizing: border-box; }
	.pfv-image-host { width: 100%; min-width: 0; height: 100%; min-height: 0; display: flex; }

	/* Basic (self-contained) image lens — a responsive, fit-to-stage <img>. The full zoom/pan chrome lives in
	   the delegated pict-section-image child; this is the always-present degrade. */
	.pfv-imagewrap { width: 100%; min-width: 0; height: 100%; min-height: 0; display: flex; align-items: center; justify-content: center; overflow: auto; padding: 0.6rem; box-sizing: border-box; }
	.pfv-image { display: block; max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; margin: auto; }

	/* Video / audio lenses. The host divs the delegated pict-section-video / pict-section-audio children mount into
	   (they own their own control bars); the wrap classes style the self-contained native <video>/<audio> degrade. */
	.pfv-video-host { width: 100%; min-width: 0; height: 100%; min-height: 0; display: flex; }
	.pfv-videowrap { width: 100%; min-width: 0; height: 100%; min-height: 0; display: flex; align-items: center; justify-content: center; overflow: hidden; background: #000; }
	.pfv-video { display: block; max-width: 100%; max-height: 100%; width: auto; height: auto; background: #000; }
	.pfv-audio-host { width: 100%; min-width: 0; height: 100%; min-height: 0; display: flex; }
	.pfv-audiowrap { width: 100%; min-width: 0; height: 100%; min-height: 0; display: flex; align-items: center; justify-content: center; padding: 1rem; box-sizing: border-box; }
	.pfv-audio { width: 100%; max-width: 32rem; }

	/* PDF lens — a vertical strip of page canvases rendered lazily by PDF.js. */
	.pfv-pdf { width: 100%; min-width: 0; height: 100%; min-height: 0; overflow: auto; padding: 0.75rem 0; box-sizing: border-box;
		background: var(--theme-color-background-sunken, #eef1f5); display: flex; flex-direction: column; align-items: center; gap: 0.75rem; }
	.pfv-pdf-page { width: 100%; max-width: 1100px; display: flex; justify-content: center;
		background: var(--theme-color-background-panel, #ffffff); box-shadow: 0 1px 4px rgba(0,0,0,0.18); }
	.pfv-pdf-canvas { display: block; max-width: 100%; height: auto; }

	/* Deep-zoom lens — OpenSeaDragon fills the stage; its own canvas handles zoom/pan. */
	.pfv-osd-host { width: 100%; min-width: 0; height: 100%; min-height: 0; position: relative;
		background: var(--theme-color-background-sunken, #1b1f24); }

	/* Container-relative responsive hooks. The provider stamps pfv-phone / pfv-tablet / pfv-desktop on the root from a
	   ResizeObserver (a later cross-device slice); these are the baseline rules so the chrome is usable before that
	   lands and on hosts without ResizeObserver. */
	.pfv-root.pfv-phone .pfv-toolbar { flex-wrap: wrap; }
	.pfv-root.pfv-phone .pfv-toolbar-sub { display: none; }
`;

module.exports = { FILEVIEW_CSS };
