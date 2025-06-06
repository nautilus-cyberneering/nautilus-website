import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			strict: false // Allow dynamic routes (e.g., API)
		}),
		prerender: {
			handleHttpError: ({ status, path, message }) => {
				if (status === 404) {
					console.warn(`Ignoring 404 for path: ${path}`);
					return;
				}
				throw new Error(message);
			}
		}
	},
	extensions: ['.svelte']
};

export default config;
