// Builds the LinkedIn/X share image for every blog post that has generated card art.
// public/blog-images/<id>.png (about 2 MB, 3:2) -> public/og/blog/<id>.jpg (1200x630, ~150 KB),
// the size and ratio link previews expect. Re-run after adding card art; existing,
// newer JPGs are left alone. The post page picks the JPG up automatically if it exists.
import { readdirSync, statSync, mkdirSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import sharp from 'sharp';

const src = join(process.cwd(), 'public', 'blog-images');
// Only posts get a share image; blog-images also holds in-article pictures.
const posts = new Set(readdirSync(join(process.cwd(), 'src', 'content', 'blog')).map((n) => n.replace(/\.(md|mdx)$/, '')));
const out = join(process.cwd(), 'public', 'og', 'blog');
mkdirSync(out, { recursive: true });
let made = 0, kept = 0;
for (const f of readdirSync(src).filter((n) => n.endsWith('.png') && posts.has(basename(n, '.png')))) {
	const target = join(out, `${basename(f, '.png')}.jpg`);
	if (existsSync(target) && statSync(target).mtimeMs >= statSync(join(src, f)).mtimeMs) { kept++; continue; }
	await sharp(join(src, f)).resize(1200, 630, { fit: 'cover', position: 'attention' }).jpeg({ quality: 82, mozjpeg: true }).toFile(target);
	made++;
}
console.log(`Share images: ${made} written, ${kept} up to date, in public/og/blog`);
