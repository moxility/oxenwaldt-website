/**
 * Checks every external <a href> in site/dist against the live web. Read-only: GET requests only.
 * Exists because nothing watched outbound links: on 7 Nov 2026 a one-off audit found two Columbus
 * reposts whose "Read the full article" link had silently become a redirect to a generic listing, an
 * archive link the archive never captured, and six Book 1 Apple links that had been 404 for days.
 *
 *   npm run build && npm run apps:check-external        (writes ../review/external-links/<stamp>.json)
 *
 * Verdicts: ok | dead (404/410, a LinkedIn embed 404, an archive capture that does not exist)
 *           | suspect (a deep page that now redirects to a shallow listing: a soft 404)
 *           | blocked (bot walls: 401/403/429/999/202/5xx/timeouts) - NOT verified, listed by name.
 * Before trusting any "dead", three made-up URLs must come back 404; if one does not, the run stops
 * (exit 2) because the instrument has not shown it can see a dead link.
 * Exit 0 = nothing dead or suspect, 1 = at least one, 2 = controls failed.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
// --dist <dir> checks another build (for example the live site/ build from a worktree).
const distArg = process.argv.indexOf('--dist');
const DIST = distArg > 0 ? path.resolve(process.argv[distArg + 1]) : path.join(SITE, 'dist');
const OUT_DIR = path.join(SITE, '..', 'review', 'external-links');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36';
const SPACING_MS = 1500;
const sleep = ms => new Promise(r => setTimeout(r, ms));

const CONTROLS = [
	'https://www.linkedin.com/feed/update/urn:li:activity:7000000000000000001/',
	'https://lnkd.in/zzzzzzzzzzzz',
	'https://www.columbusglobal.com/this-page-does-not-exist-20261107',
];

function walk(dir, out = []) {
	for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
		const p = path.join(dir, e.name);
		e.isDirectory() ? walk(p, out) : p.endsWith('.html') && out.push(p);
	}
	return out;
}

function collect() {
	const map = new Map();
	for (const f of walk(DIST)) {
		const page = '/' + path.relative(DIST, f).split(path.sep).join('/').replace(/index\.html$/, '');
		for (const m of fs.readFileSync(f, 'utf8').matchAll(/<a\b[^>]*?\bhref="(https?:\/\/[^"]+)"/gi)) {
			const u = m[1].replace(/&amp;/g, '&');
			if (/^https?:\/\/(www\.)?oxenwaldt\.com/i.test(u)) continue;
			if (!map.has(u)) map.set(u, new Set());
			map.get(u).add(page);
		}
	}
	return [...map].map(([url, pages]) => ({ url, pages: [...pages].sort() }));
}

async function get(url, redirect = 'follow') {
	const ac = new AbortController();
	const timer = setTimeout(() => ac.abort(), 30000);
	try {
		const r = await fetch(url, { redirect, signal: ac.signal, headers: { 'user-agent': UA, accept: 'text/html,application/xhtml+xml,*/*;q=0.8', 'accept-language': 'en-GB,en;q=0.9' } });
		const html = (r.headers.get('content-type') || '').includes('html') ? (await r.text()).slice(0, 400000) : '';
		const title = ((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '').trim().replace(/\s+/g, ' ').slice(0, 140);
		return { status: r.status, final: r.url, location: r.headers.get('location') || '', title, html };
	} catch (e) {
		return { status: 0, error: String(e.cause?.code || e.name || e).slice(0, 80) };
	} finally {
		clearTimeout(timer);
	}
}

const segs = u => new URL(u).pathname.split('/').filter(Boolean).length;
function verdict(status, url, final) {
	if (status === 404 || status === 410) return 'dead';
	// A deep page redirected to a shallow listing on its own host is a soft 404, even when the listing
	// itself then sits behind a bot wall: the redirect is the evidence (Columbus /en/blog -> /insights/articles).
	if (final && final !== url && segs(url) >= 3 && segs(final) <= 2 && new URL(final).host === new URL(url).host) return 'suspect';
	if (status >= 200 && status < 300 && status !== 202) return 'ok';
	return 'blocked';
}

async function checkArchive(url) {
	const m = url.match(/^https?:\/\/web\.archive\.org\/web\/(\d+)\/(.+)$/);
	if (!m) return null;
	const [, ts, orig] = m;
	const q = `https://web.archive.org/cdx/search/cdx?url=${encodeURIComponent(orig)}&fl=timestamp,statuscode&filter=statuscode:200&limit=50`;
	// The CDX index, not the snapshot page: /web/ rate-limits bursts (429), and the availability API
	// gave a false "no snapshot" on 7 Nov 2026 for a capture the index holds.
	for (let attempt = 0; attempt < 3; attempt++) {
		try {
			const r = await fetch(q, { headers: { 'user-agent': UA } });
			if (r.status === 200) {
				const rows = (await r.text()).trim().split('\n').filter(Boolean);
				return { status: 200, via: 'cdx', captures: rows.length, exact: rows.some(l => l.startsWith(ts)), verdict: rows.length ? 'ok' : 'dead' };
			}
			if (attempt === 2) return { status: r.status, via: 'cdx', verdict: 'blocked' };
		} catch (e) {
			if (attempt === 2) return { status: 0, via: 'cdx', verdict: 'blocked', error: String(e.cause?.code || e.name) };
		}
		await sleep(15000);
	}
}

async function check(item) {
	const { url } = item;
	const out = { ...item };
	const urn = decodeURIComponent(url).match(/linkedin\.com\/feed\/update\/(urn:li:[a-zA-Z]+:[\w-]+)/);
	if (urn) {
		if (/groupPost/.test(urn[1])) return { ...out, verdict: 'blocked', note: 'LinkedIn group post: members only, no public embed' };
		const r = await get(`https://www.linkedin.com/embed/feed/update/${urn[1]}`);
		return { ...out, via: 'linkedin-embed', status: r.status, title: r.title, error: r.error, verdict: verdict(r.status, url) };
	}
	const arch = await checkArchive(url);
	if (arch) return { ...out, ...arch };
	let target = url;
	if (/^https?:\/\/lnkd\.in\//.test(url)) {
		const r = await get(url, 'manual');
		target = (r.location || (r.html.match(/<a[^>]+data-tracking-control-name="external_url_click"[^>]+href="([^"]+)"/) || [])[1] || '').replace(/&amp;/g, '&');
		if (!target) return { ...out, status: r.status, verdict: r.status === 404 ? 'dead' : 'blocked', note: 'lnkd.in gave no target' };
		out.target = target;
		await sleep(800);
	}
	const r = await get(target);
	return { ...out, status: r.status, final: r.final, title: r.title, error: r.error, verdict: verdict(r.status, target, r.final) };
}

async function run(list) {
	const byHost = new Map();
	for (const it of list) {
		const h = new URL(it.url).host;
		if (!byHost.has(h)) byHost.set(h, []);
		byHost.get(h).push(it);
	}
	const results = [];
	await Promise.all([...byHost.values()].map(async items => {
		for (const it of items) { results.push(await check(it)); await sleep(SPACING_MS); }
	}));
	return results.sort((a, b) => a.url.localeCompare(b.url));
}

if (!fs.existsSync(DIST)) { console.error('No dist/ - run npm run build first.'); process.exit(2); }

const controls = await run(CONTROLS.map(url => ({ url, pages: ['CONTROL'] })));
const blind = controls.filter(c => c.verdict !== 'dead');
if (blind.length) {
	for (const c of blind) console.error(`control did not read dead: ${c.url} -> ${c.status} ${c.verdict}`);
	console.error('Stopping: the checker has not shown it can see a dead link on these hosts.');
	process.exit(2);
}

const links = collect();
const results = await run(links);
const by = v => results.filter(r => r.verdict === v);
const stamp = new Date().toISOString().replace(/[:.]/g, '').slice(0, 15) + 'Z';
fs.mkdirSync(OUT_DIR, { recursive: true });
const file = path.join(OUT_DIR, `${stamp}.json`);
fs.writeFileSync(file, JSON.stringify({ checkedAt: new Date().toISOString(), total: results.length, controls, results }, null, 1));

console.log(`${results.length} external links: ${by('ok').length} ok, ${by('dead').length} dead, ${by('suspect').length} suspect, ${by('blocked').length} not verified (bot walls).`);
for (const v of ['dead', 'suspect']) for (const r of by(v)) console.log(`${v.toUpperCase()} ${r.via === 'cdx' ? 'archive index: ' + r.captures + ' captures' : r.status} ${r.target ? r.url + ' -> ' + r.target : r.url}${r.final && r.final !== (r.target || r.url) ? ' => ' + r.final : ''}  on ${r.pages.join(', ')}`);
console.log(`Not verified: ${[...new Set(by('blocked').map(r => new URL(r.target || r.url).host))].join(', ') || 'none'}`);
console.log(`Report: ${file}`);
process.exit(by('dead').length + by('suspect').length ? 1 : 0);
