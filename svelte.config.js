import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess()],

  kit: {
    adapter: adapter(),

    // other kit options
    files: {
      static: {
        '**/robots.txt': 'robots.txt'
      }
    }
  }
};

export default config;
