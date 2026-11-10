// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import { fileURLToPath } from 'node:url';

import { APPS } from './src/data/apps.mjs';
import { guideHref, guideSlugs } from './scripts/app-guide-page.mjs';

const SITE = 'https://www.oxenwaldt.com';
const GUIDE_SLUGS = guideSlugs(fileURLToPath(new URL('./src/data/guides/', import.meta.url)));

// The companion app pages are static files under public/, so Astro does not know
// about them and the sitemap integration cannot discover them. List them here or
// they stay invisible to search engines. Unlisted apps (internal, TestFlight-only)
// keep reachable pages but are deliberately kept out of the index.
const appPages = APPS.filter((app) => !app.unlisted).flatMap((app) => [
  ...['index', 'privacy', 'terms', 'support'].map((p) => `${SITE}/${app.slug}/${p}.html`),
  ...(app.extraLinks ?? []).map(([, href]) => `${SITE}${href}`),
  // The free reference guide, written by scripts/build-app-pages.mjs when a guide module exists.
  ...(app.generated && GUIDE_SLUGS.includes(app.slug) ? [`${SITE}${guideHref(app.slug)}`] : []),
]);

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [mdx(), sitemap({ customPages: appPages })],

  vite: {
    plugins: [tailwindcss()],
  },
});
