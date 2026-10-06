// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://javiermontano.dev',
  // El sitio sigue siendo estático; solo /api/chat se ejecuta bajo demanda (prerender = false).
  adapter: cloudflare({ imageService: 'compile' }),
  // Sin sesiones: el sitio no tiene login, así que no se crea el KV que el adaptador añade por defecto.
  session: false,
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
