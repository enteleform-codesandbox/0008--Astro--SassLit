// @ts-check

export default /** @type {import("astro").AstroUserConfig} */ ({
	renderers: [
		"@astrojs/renderer-lit", // <-- @@@ ERROR @@@
		"@astrojs/renderer-preact",
		"@astrojs/renderer-react",
		"@astrojs/renderer-solid",
		"@astrojs/renderer-svelte",
		"@astrojs/renderer-vue",
	],
})
