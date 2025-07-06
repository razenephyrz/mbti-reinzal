import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit(), devtoolsJson(), tailwindcss()],
  ssr: {
    noExternal: [
      'tsparticles',
      '@tsparticles/engine',
      '@tsparticles/slim',
      '@tsparticles/svelte'
    ]
  }
});

