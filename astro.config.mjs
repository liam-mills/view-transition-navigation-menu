// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://liam-mills.github.io',
  base: '/view-transition-navigation-menu',
  vite: {
    plugins: [tailwindcss()]
  }
});