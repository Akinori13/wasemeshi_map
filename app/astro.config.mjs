import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	site: "https://Akinori13.github.io",
	base: "/wasemeshi_map",
	output: "server",
	adapter: vercel(),
});
