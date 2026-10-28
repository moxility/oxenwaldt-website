import assert from 'node:assert/strict';
import { test } from 'node:test';
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const script = fileURLToPath(new URL('./sync-newsletter.mjs', import.meta.url));
const old = { episodeNumber: 53, headline: 'Old edition', url: 'https://www.linkedin.com/pulse/old-edition', publishedOn: 'May 6, 2026', spotifyEpisodeUrl: null };
const newer = { ...old, episodeNumber: 83, headline: 'New edition', url: 'https://www.linkedin.com/pulse/new-edition', publishedOn: 'October 27, 2026' };

function run(source, current = [old], args = ['--additive']) {
	const dir = mkdtempSync(join(tmpdir(), 'oxw-newsletter-test-'));
	try {
		mkdirSync(join(dir, 'scripts'));
		mkdirSync(join(dir, 'src', 'data'), { recursive: true });
		copyFileSync(script, join(dir, 'scripts', 'sync-newsletter.mjs'));
		const target = join(dir, 'src', 'data', 'newsletter-editions.json');
		const before = JSON.stringify({ editions: current });
		writeFileSync(target, before);
		writeFileSync(join(dir, 'source.json'), JSON.stringify(source));
		const result = spawnSync(process.execPath, [join(dir, 'scripts', 'sync-newsletter.mjs'), join(dir, 'source.json'), ...args], { encoding: 'utf8' });
		const after = readFileSync(target, 'utf8');
		return { ...result, before, after, rows: JSON.parse(after).editions };
	} finally {
		// Only the exact temporary directory created above may be removed.
		assert.equal(dirname(resolve(dir)), resolve(tmpdir()));
		assert.ok(basename(dir).startsWith('oxw-newsletter-test-'));
		rmSync(dir, { recursive: true, force: true });
	}
}
const partial = (editions) => ({ newsletter: { editions: 54 }, editions });
function refused(result) {
	assert.equal(result.status, 3, result.stderr);
	assert.equal(result.after, result.before, 'refusal must not write');
}

test('partial listing adds a new edition without removing the unobserved old one', () => {
	const r = run(partial([newer]));
	assert.equal(r.status, 0, r.stderr);
	assert.deepEqual(r.rows, [newer, old]);
	assert.match(r.stdout, /retained 1/);
});
test('same partial listing on a second run is byte-stable', () => {
	const r = run(partial([newer]), [newer, old]);
	assert.equal(r.status, 0);
	assert.equal(r.after, r.before);
});
test('an explicit URL change still refuses the entire batch', () => {
	refused(run(partial([{ ...old, url: 'https://www.linkedin.com/pulse/replacement' }, newer])));
});
test('an observed title change still refuses the entire batch', () => {
	refused(run(partial([{ ...old, headline: 'Changed title' }, newer])));
});
test('observed old URL losing its episode number is not silently retained', () => {
	refused(run(partial([{ ...old, episodeNumber: null }, newer])));
});
test('observed old URL reassigned to another episode is not silently retained', () => {
	refused(run(partial([{ ...old, episodeNumber: 52 }, newer])));
});
test('complete snapshot removal remains a refusal', () => {
	refused(run({ newsletter: { editions: 1 }, editions: [newer] }));
});
test('no coverage metadata, empty snapshot, and invalid totals fail closed', () => {
	for (const source of [[newer], { editions: [newer] }, partial([]), { newsletter: { editions: '54' }, editions: [newer] }]) refused(run(source));
});
test('full additive snapshot still adds normally', () => {
	const r = run({ newsletter: { editions: 2 }, editions: [newer, old] });
	assert.equal(r.status, 0);
	assert.deepEqual(r.rows, [newer, old]);
});
test('explicit non-additive sync keeps its original replacement behavior', () => {
	const r = run(partial([newer]), [old], []);
	assert.equal(r.status, 0);
	assert.deepEqual(r.rows, [newer]);
});
