// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dominio definitivo (placeholder finché non si registra): usato per sitemap, canonical, hreflang.
  site: 'https://sacrelia.com',

  // Inglese di default sulla root (nessun prefisso); le altre lingue con prefisso.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it', 'de', 'fr', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      // hreflang nella sitemap: l'inglese è la lingua di default (root).
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', it: 'it', de: 'de', fr: 'fr', es: 'es' },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
