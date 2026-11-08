import { existsSync } from 'node:fs';
import { join, basename, extname } from 'node:path';

/**
 * The small WebP a page should actually serve for a photograph it draws at
 * 192 CSS px or less, built by scripts/make-site-images.mjs.
 *
 * Falls back to the original when no derivative has been built, so a page never
 * breaks because the script has not been run — it just stays heavy, which is
 * the behaviour it had before.
 *
 * Only ever use this for what is DISPLAYED. The originals are still the press-kit
 * downloads on /speaking/ and the og:image in consts.ts, and those must stay
 * full size.
 */
export function thumb(ref) {
	if (!ref || !ref.startsWith('/')) return ref;
	const opt = `/images/opt/${basename(ref, extname(ref))}-400.webp`;
	// Resolve against the project root, not import.meta.url: Astro bundles this
	// into a chunk at build time, so import.meta.url is not the source path.
	return existsSync(join(process.cwd(), 'public', opt.replace(/^\//, ''))) ? opt : ref;
}
