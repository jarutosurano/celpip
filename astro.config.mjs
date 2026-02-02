import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jarutosurano.github.io',
  base: '/celpip',
  integrations: [mdx(), sitemap()],
  output: 'static',
  build: {
    assets: '_assets'
  },
  security: {
    checkOrigin: true
  }
});
