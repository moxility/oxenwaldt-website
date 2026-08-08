/**
 * Walks site/dist and verifies every root-relative href/src resolves to a real
 * file. Exists because extensionless URLs 404 on this host (moxapps PLAYBOOK
 * §9b) — a link that works locally in `astro dev` can still be dead in prod.
 *
 *   npm run apps:check-links
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');

function walk(dir, out = []) {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const p = path.join(dir, entry.name);
		entry.isDirectory() ? walk(p, out) : out.push(p);
	}
	return out;
}

if (!fs.existsSync(DIST)) {
	console.error('No dist/ — run `npm run build` first.');
	process.exit(1);
}

const files = walk(DIST).filter((f) => f.endsWith('.html'));
const broken = new Set();
let checked = 0;

for (const file of files) {
	const html = fs.readFileSync(file, 'utf8');
	for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
		const url = decodeURIComponent(match[1]);
		if (url.startsWith('//')) continue;
		checked++;
		const target = path.join(DIST, url);
		let ok = fs.existsSync(target) && fs.statSync(target).isFile();
		if (!ok && fs.existsSync(target) && fs.statSync(target).isDirectory()) {
			ok = fs.existsSync(path.join(target, 'index.html'));
		}
		if (!ok) broken.add(`${path.relative(DIST, file).replace(/\\/g, '/')}  ->  ${url}`);
	}
}

if (broken.size) {
	console.log([...broken].sort().join('\n'));
	console.log(`\n${broken.size} broken link(s) out of ${checked} checked, across ${files.length} pages.`);
	process.exit(1);
}
console.log(`All ${checked} root-relative links resolve, across ${files.length} pages.`);

// A placeholder is a VALID link, so a hero-image lookup that silently misses every
// post still passes the check above — that shipped once, serving placeholders for
// all 85 posts. Report the split so the regression is visible rather than green.
const blogIndex = path.join(DIST, 'blog', 'index.html');
if (fs.existsSync(blogIndex)) {
	const html = fs.readFileSync(blogIndex, 'utf8');
	const real = [...html.matchAll(/src="\/blog-images\/[^"]+"/g)].length;
	const placeheld = [...html.matchAll(/src="\/blog-placeholder-[^"]+"/g)].length;
	const pct = placeheld / Math.max(1, real + placeheld);
	console.log(`Blog heroes: ${real} generated, ${placeheld} placeholder.`);
	if (pct > 0.5) {
		console.log(
			`\nOver half the blog cards fall back to a placeholder. That usually means the ` +
				`image lookup is resolving to the wrong directory, not that the images are missing.`,
		);
		process.exit(1);
	}
}
