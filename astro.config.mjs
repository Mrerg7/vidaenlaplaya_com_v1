import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vidaenlaplaya.com',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport',
  },
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    build: {
      cssMinify: true,
      minify: true,
    },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date(),
    }),
  ],
});
