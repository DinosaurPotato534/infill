// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
      title: 'INFILL',
      customCss: [
          // Relative path to your @font-face CSS file.
          './src/styles/custom.css',
          '@fontsource/poppins/400.css',
          '@fontsource/poppins/500.css',
      ],
      social: {
          github: 'https://github.com/hackclub/infill',
      },
      sidebar: [
          {
              label: 'Overview',
              autogenerate: { directory: 'overview' },
          },
          {
              label: 'Printers',
              autogenerate: { directory: 'printers' },
          },
      ],
      }), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});