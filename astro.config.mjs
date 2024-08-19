import { defineConfig } from 'astro/config';
// import db from '@astrojs/db';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercel({
    imageService: true,
    speedInsights: {
      enabled: true
    },
    webAnalytics: {
      enabled: true
    }
  }),
  site: 'https://webdevdialogues.com',
  integrations: [
    preact(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
      nesting: true
    })
  ]
});
