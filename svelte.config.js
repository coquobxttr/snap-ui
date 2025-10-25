import path from 'path'
import { fileURLToPath } from 'url';
import { mdsvex, escapeSvelte } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter } from 'shiki';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const theme = 'github-light';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript', 'svelte', 'bash']
});

const dev = process.argv.includes('dev');

const config = {
	preprocess: [vitePreprocess(), mdsvex({
		layout: {
			_: path.resolve(__dirname, 'src/lib/DocsLayout.svelte')
		},
		highlight: {
			highlighter: async (code, lang = 'text') => {
				const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
				return `${html}`;
			}
		},
	})],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: false
		}),
		paths: {
      		base: '/snap-ui'
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;
