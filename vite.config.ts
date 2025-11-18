import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import { defineConfig } from 'vite';
import wasm from '@rollup/plugin-wasm';

export default defineConfig({
  plugins: [
    sveltekit(),
    devtoolsJson(),
    tailwindcss(),
    wasm() // ← plugin valid
  ],

  ssr: {
    noExternal: [
      'tsparticles',
      '@tsparticles/engine',
      '@tsparticles/slim',
      '@tsparticles/svelte'
    ]
  }
});

