// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://javiermontano.dev',
  integrations: [
    sitemap({
      // Cada página lista su par en el otro idioma, igual que los hreflang del <head>.
      i18n: { defaultLocale: 'es', locales: { es: 'es-CO', en: 'en-US' } },
      filter: (page) => !page.includes('/404'),
    }),
  ],

  // Español en la raíz (/) e inglés bajo /en/.
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
