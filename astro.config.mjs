// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Jramma Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jramma' }],
			sidebar: [
				// {
				// 	label: 'Bash',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Bash Theme', slug: 'bash/theme' },
				// 		{ label: 'Copy extensions', slug: 'bash/extensions' },

				// 	],
				// },
				{
					label: 'Git',
					autogenerate: { directory: 'git' },
				},
				{
					label: 'Bash',
					autogenerate: { directory: 'bash' },
				},
				{
					label: 'Codium',
					autogenerate: { directory: 'codium' },
				},
			],
		}),
	],
});
