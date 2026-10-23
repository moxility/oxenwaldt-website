#!/usr/bin/env node
/**
 * Sync the LinkedIn newsletter editions from the Future Bytes governance portal.
 *
 * The newsletter "Weekly AI news for business" is published by Columbus on
 * LinkedIn, one article per AI News episode. The governance portal keeps the
 * measured list of those articles; this copies it into src/data so the site
 * build does not depend on a path outside the repo.
 *
 * Usage:
 *     npm run newsletter:sync                 # read the portal's default file
 *     npm run newsletter:sync -- <path.json>  # read another copy
 *
 * The site links to each article and never carries its text: the text is
 * Columbus's, and copying it would put new material in front of marketing.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SOURCE_DEFAULT =
	'E:/Dev/repos/future-bytes-governance-portal-20260819-112559/data/linkedin-newsletter.json';
const SITE_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TARGET = join(SITE_ROOT, 'src', 'data', 'newsletter-editions.json');

const source = process.argv[2] ?? SOURCE_DEFAULT;
const raw = JSON.parse(readFileSync(source, 'utf8'));
const editions = Array.isArray(raw) ? raw : raw.editions;
if (!Array.isArray(editions)) throw new Error(`${source}: no editions[] array`);

// Spotify may come as an id, an episode link or an embed link; the site wants the
// public episode page.
function spotifyEpisodeUrl(value) {
	if (!value) return null;
	const id = String(value).match(/(?:episode\/|^)([A-Za-z0-9]{22})(?:[/?]|$)/)?.[1];
	return id ? `https://open.spotify.com/episode/${id}` : null;
}

const byEpisode = new Map();
const skipped = [];
for (const e of editions) {
	// No number means the edition's embed did not resolve; never guess which episode.
	const n = e.episodeNumber == null ? NaN : Number(e.episodeNumber);
	const url = String(e.url ?? '').split('?')[0];
	if (!Number.isInteger(n) || n < 1 || !/^https:\/\/www\.linkedin\.com\/pulse\/[^/]+\/?$/.test(url)) {
		skipped.push(e.url ?? JSON.stringify(e).slice(0, 80));
		continue;
	}
	const row = {
		episodeNumber: n,
		headline: String(e.headline ?? '').trim() || null,
		url,
		publishedOn: e.publishedOn ?? null,
		spotifyEpisodeUrl: spotifyEpisodeUrl(e.spotifyEpisode),
	};
	// If one episode is ever embedded in two editions, keep the first published,
	// which is the one the episode was released with. Dates come as "October 20, 2026".
	const held = byEpisode.get(n);
	const when = (r) => Date.parse(r.publishedOn ?? '') || Infinity;
	if (!held || when(row) < when(held)) byEpisode.set(n, row);
}

const out = {
	source: 'future-bytes-governance-portal data/linkedin-newsletter.json',
	syncedAt: new Date().toISOString(),
	editions: [...byEpisode.values()].sort((a, b) => b.episodeNumber - a.episodeNumber),
};
writeFileSync(TARGET, JSON.stringify(out, null, '\t') + '\n');
console.log(`Wrote ${out.editions.length} editions to src/data/newsletter-editions.json`);
for (const e of out.editions) console.log(`  #${e.episodeNumber}  ${e.headline}  ${e.url}`);
if (skipped.length) console.log(`Skipped ${skipped.length} without an episode number or article link:`, skipped);
