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
 *     npm run newsletter:sync -- --additive   # unattended: new editions only
 *
 * The file is left untouched when the editions have not changed, so an unchanged
 * sync never shows up as a diff. With --additive (the episode auto-publish uses
 * it) the sync refuses, exit 3, if an edition already on the site would be
 * removed or point somewhere else: that is a correction for a person to look at.
 * A declared partial snapshot may omit older editions. Keep those existing rows
 * unchanged; absence from an incomplete listing is not evidence of removal.
 *
 * The site links to each article and never carries its text: the text is
 * Columbus's, and copying it would put new material in front of marketing.
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SOURCE_DEFAULT =
	'E:/Dev/repos/future-bytes-governance-portal-20260819-112559/data/linkedin-newsletter.json';
const SITE_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TARGET = join(SITE_ROOT, 'src', 'data', 'newsletter-editions.json');

const args = process.argv.slice(2);
const additive = args.includes('--additive');
const source = args.find((a) => !a.startsWith('--')) ?? process.env.NEWSLETTER_SOURCE ?? SOURCE_DEFAULT;
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

let fresh = [...byEpisode.values()].sort((a, b) => b.episodeNumber - a.episodeNumber);
if (skipped.length) console.log(`Skipped ${skipped.length} without an episode number or article link:`, skipped);

const current = existsSync(TARGET) ? JSON.parse(readFileSync(TARGET, 'utf8')).editions : [];
const reportedTotal = raw?.newsletter?.editions;
const partialSnapshot = Number.isInteger(reportedTotal) && editions.length > 0 && reportedTotal > editions.length;
if (additive && partialSnapshot) {
	// Retain only rows absent from the source itself. An observed URL with a
	// missing/reassigned episode number must still reach the refusal below.
	const observedUrls = new Set(editions.map((e) => String(e.url ?? '').split('?')[0]));
	const retained = current.filter((e) => !byEpisode.has(e.episodeNumber) && !observedUrls.has(e.url));
	fresh = [...fresh, ...retained].sort((a, b) => b.episodeNumber - a.episodeNumber);
	if (retained.length) console.log(`Partial snapshot (${editions.length}/${reportedTotal}): retained ${retained.length} unobserved existing edition(s) unchanged.`);
}
if (JSON.stringify(current) === JSON.stringify(fresh)) {
	console.log(`Unchanged: ${fresh.length} editions, newest #${fresh[0]?.episodeNumber}.`);
	process.exit(0);
}

if (additive) {
	const next = new Map(fresh.map((e) => [e.episodeNumber, e]));
	const altered = current.filter((e) => JSON.stringify(next.get(e.episodeNumber)) !== JSON.stringify(e));
	if (altered.length) {
		console.log(`Refused (--additive): ${altered.length} edition(s) already on the site would be removed or changed:`);
		for (const e of altered) console.log(`  #${e.episodeNumber}  ${e.url}  ->  ${next.get(e.episodeNumber)?.url ?? '(gone)'}`);
		process.exit(3);
	}
}

const out = {
	source: 'future-bytes-governance-portal data/linkedin-newsletter.json',
	syncedAt: new Date().toISOString(),
	editions: fresh,
};
writeFileSync(TARGET, JSON.stringify(out, null, '\t') + '\n');
const known = new Set(current.map((e) => e.episodeNumber));
console.log(`Wrote ${fresh.length} editions to src/data/newsletter-editions.json`);
for (const e of fresh) console.log(`  ${known.has(e.episodeNumber) ? ' ' : '+'}#${e.episodeNumber}  ${e.headline}  ${e.url}`);
