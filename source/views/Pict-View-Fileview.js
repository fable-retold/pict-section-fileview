'use strict';

const libPictView = require('pict-view');

/**
 * pict-section-fileview base view — a thin shell. It paints one container (toolbar + stage) and hands all rendering
 * to the matching provider (same Identifier), which resolves the file's renderer and mounts it into the stage. The
 * factory (createFileview) builds this view's default_configuration: the container template (with instance-scoped
 * element ids), the renderable, and the shared CSS.
 */
class PictViewFileview extends libPictView
{
	get provider() { return this.pict.providers[this.options.ViewIdentifier]; }

	onAfterRender(pRenderable)
	{
		this.pict.CSSMap.injectCSS();
		const tmpProvider = this.provider;
		if (tmpProvider && (typeof tmpProvider.renderFileview === 'function')) { tmpProvider.renderFileview(); }
		return super.onAfterRender(pRenderable);
	}

	/**
	 * Convenience proxy so a host can drive the viewer through the view handle (pict.views[id].setFile(...)) as well
	 * as through the provider. Returns the resolved FileDescriptor.
	 * @param {(string|Object)} pInput
	 */
	setFile(pInput)
	{
		const tmpProvider = this.provider;
		return tmpProvider ? tmpProvider.setFile(pInput) : null;
	}
}

module.exports = PictViewFileview;
