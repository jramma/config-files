import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
	site: "https://jramma.github.io",
	base: "/",
	integrations: [
		starlight({
			title: "Jramma Docs",
			social: [
				{ icon: "github", label: "GitHub", href: "https://github.com/jramma" },
			],
			sidebar: [
				{ label: "Git", autogenerate: { directory: "git" } },
				{ label: "Bash", autogenerate: { directory: "bash" } },
				{ label: "Codium", autogenerate: { directory: "codium" } },
				{ label: "Android", autogenerate: { directory: "android" } },
				{ label: "Photo", autogenerate: { directory: "photo" } },

			],
		}),
	],
});
