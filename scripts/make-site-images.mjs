// Builds the small WebP derivatives the fixed pages use for photographs that are
// drawn far smaller than their source. public/images/<name>.<ext> ->
// public/images/opt/<name>-<w>.webp.
//
// Why: measured on the live site, these photographs were served at full resolution
// into boxes of 192 CSS px or less -
//   magnus_portrait_casual.png     1.15 MB   drawn 192x192, 112x112 and 56x56
//   finnish_embassy_collage.jpg     908 KB   drawn 192x144
//   dynug_panel.png                 774 KB   drawn 192x144
//   triona_event.png                509 KB   drawn 192x144
//   magnus-oxenwaldt-2024-columbus  406 KB   drawn 112x112
//   future_bytes_cover.jpg          387 KB   drawn 192x192
//   security_summit.png             289 KB   drawn 192x144
// which is what made /speaking/ 4.4 MB, /about/ 1.3 MB and the home page 1.6 MB.
//
// The originals are NOT replaced and NOT removed. Two of them are the press-kit
// downloads on /speaking/, and the portrait and the podcast cover are the og:image
// in src/consts.ts; all of those must stay full size.
import { existsSync, mkdirSync, statSync, readdirSync, readFileSync } from 'node:fs';
import { join, basename, extname } from 'node:path';
import sharp from 'sharp';

// 400w covers every one of these at 2x on the largest box any of them is drawn in
// (192 CSS px). The aspect ratio of each source is preserved - these are
// photographs in varied shapes, so nothing is cropped.
const WIDTH = 400;
const QUALITY = 80;

const pub = join(process.cwd(), 'public');
const out = join(pub, 'images', 'opt');
mkdirSync(out, { recursive: true });

// Everything referenced by a page as a small photograph: the fixed ones, plus
// every speaking event's heroImage, which lives in the content collection.
const fixed = [
	'/images/magnus_portrait_casual.png',
	'/images/magnus-oxenwaldt-2024-columbus.jpg',
	'/images/future_bytes_cover.jpg',
];
const speakingDir = join(process.cwd(), 'src', 'content', 'speaking');
const heroes = existsSync(speakingDir)
	? readdirSync(speakingDir)
		.filter((n) => n.endsWith('.md') || n.endsWith('.mdx'))
		.flatMap((n) => {
			const m = /^heroImage:\s*["']?([^"'\n\r]+)["']?\s*$/m.exec(
				readFileSync(join(speakingDir, n), 'utf8'));
			return m ? [m[1].trim()] : [];
		})
	: [];

let made = 0, kept = 0, missing = 0, srcBytes = 0, outBytes = 0;
for (const ref of [...new Set([...fixed, ...heroes])]) {
	const from = join(pub, ref.replace(/^\//, ''));
	if (!existsSync(from)) { console.warn(`  missing source, skipped: ${ref}`); missing++; continue; }
	srcBytes += statSync(from).size;
	const target = join(out, `${basename(ref, extname(ref))}-${WIDTH}.webp`);
	if (existsSync(target) && statSync(target).mtimeMs >= statSync(from).mtimeMs) {
		kept++;
	} else {
		// withoutEnlargement: a source already narrower than 400px is copied at its
		// own size rather than upscaled into a bigger, blurrier file.
		await sharp(from).resize({ width: WIDTH, withoutEnlargement: true })
			.webp({ quality: QUALITY }).toFile(target);
		made++;
	}
	outBytes += statSync(target).size;
}
const kb = (b) => Math.round(b / 1024) + ' KB';
console.log(`Site images: ${made} written, ${kept} up to date, ${missing} missing, in public/images/opt`);
console.log(`  sources ${kb(srcBytes)} -> derivatives ${kb(outBytes)}`);
