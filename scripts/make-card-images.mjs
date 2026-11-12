// Builds the blog-index card thumbnails from the generated card art.
// public/blog-images/<id>.png or assets/blog-masters/<id>.png (1536x1024, about 2.2 MB) ->
// public/blog-images/cards/<id>-400.webp and -800.webp (about 25 KB and 70 KB).
//
// Why: the index renders every card at 358 CSS px at most (measured on the live
// site: 358 below 600px, 320 in the two-column band, 203 in the three-column one),
// but it was serving the full 1536-wide PNG to each of them. 89 cards made the
// page 193 MB of images if a reader scrolled to the end of it.
//
// Re-run after adding card art; existing, newer WebPs are left alone. The PNGs
// stay where they are - scripts/make-share-images.mjs still builds the 1200x630
// link-preview JPEGs from them, and they are the masters for any future size.
import { readdirSync, statSync, mkdirSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import sharp from 'sharp';

const WIDTHS = [400, 800];
const QUALITY = 76;

// Masters live in two places. A PNG the site serves (an in-article picture or an
// undated hero) stays in public/blog-images. A master only used to build these
// derivatives lives in assets/blog-masters, outside public/, so it is not
// published: 111 of them were 211 MiB of production that no page requested.
const SOURCES = [join(process.cwd(), 'public', 'blog-images'), join(process.cwd(), 'assets', 'blog-masters')];
const masters = new Map();
for (const dir of SOURCES) {
	if (!existsSync(dir)) continue;
	for (const n of readdirSync(dir)) if (n.endsWith('.png') && !masters.has(n)) masters.set(n, join(dir, n));
}
// Only posts get card art; blog-images also holds in-article pictures.
const posts = new Set(readdirSync(join(process.cwd(), 'src', 'content', 'blog')).map((n) => n.replace(/\.(md|mdx)$/, '')));
const out = join(process.cwd(), 'public', 'blog-images', 'cards');
mkdirSync(out, { recursive: true });

let made = 0, kept = 0, srcBytes = 0, outBytes = 0;
for (const f of [...masters.keys()].filter((n) => posts.has(basename(n, '.png')))) {
	const id = basename(f, '.png');
	const from = masters.get(f);
	srcBytes += statSync(from).size;
	for (const w of WIDTHS) {
		const target = join(out, `${id}-${w}.webp`);
		if (existsSync(target) && statSync(target).mtimeMs >= statSync(from).mtimeMs) {
			kept++;
		} else {
			// 16:10 to match the card's aspect-ratio, cropped from the centre. The
			// browser's object-fit: cover crops the 3:2 master centrally today, so a
			// centre crop here keeps every card framed exactly as it is now. (The
			// share-image script uses 'attention' because a 1200x630 link preview is
			// a much harder crop and nobody is comparing it with a previous one.)
			await sharp(from).resize(w, Math.round(w * 10 / 16), { fit: 'cover', position: 'centre' })
				.webp({ quality: QUALITY }).toFile(target);
			made++;
		}
		outBytes += statSync(target).size;
	}
}
const mb = (b) => (b / 1048576).toFixed(1) + ' MB';
console.log(`Card images: ${made} written, ${kept} up to date, in public/blog-images/cards`);
console.log(`  masters ${mb(srcBytes)} -> derivatives ${mb(outBytes)} across ${WIDTHS.length} widths`);
