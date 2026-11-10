/**
 * The free reference guide that sits beside each companion app page, modelled on the
 * hand-authored EU AI Act reader at /aiact/act.html: a standalone page on the subject the
 * app teaches, which is what people search for, ending in "practise it in the app".
 *
 * Content lives in src/data/guides/<slug>.mjs (one module per app, default export). This
 * file only loads, validates and renders it; build-app-pages.mjs supplies the page shell
 * so the guide shares the app's header, footer, colours and calls to action.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const GUIDES_DIR = path.join(HERE, '..', 'src', 'data', 'guides');
export const GUIDE_FILE = 'guide.html';

const REQUIRED = ['slug', 'nav', 'title', 'description', 'h1', 'lede', 'updated', 'sections', 'sources', 'practice'];
// Section HTML is authored copy, so it is allowed only the tags the page styles.
const ALLOWED_TAGS = new Set(['p', 'h3', 'ul', 'ol', 'li', 'strong', 'em', 'a', 'code', 'div', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'br']);

/**
 * Slugs that have a guide module on disk, without importing them. astro.config passes its
 * own directory: when Vite bundles a module, import.meta.url here no longer points at scripts/.
 */
export function guideSlugs(dir = GUIDES_DIR) {
	if (!fs.existsSync(dir)) return [];
	return fs
		.readdirSync(dir)
		.filter((f) => f.endsWith('.mjs'))
		.map((f) => f.replace(/\.mjs$/, ''))
		.sort();
}

function validate(slug, g) {
	const problems = [];
	for (const k of REQUIRED) if (g[k] == null || g[k] === '') problems.push(`missing ${k}`);
	if (g.slug && g.slug !== slug) problems.push(`slug "${g.slug}" does not match file name`);
	if (g.nav && g.nav.length > 14) problems.push(`nav label longer than 14 characters`);
	if (g.updated && !/^\d{4}-\d{2}-\d{2}$/.test(g.updated)) problems.push(`updated must be YYYY-MM-DD`);
	const ids = new Set();
	for (const s of g.sections ?? []) {
		if (!/^[a-z0-9-]+$/.test(s.id ?? '')) problems.push(`section id "${s.id}" is not kebab-case`);
		if (ids.has(s.id)) problems.push(`duplicate section id "${s.id}"`);
		ids.add(s.id);
		for (const [, tag] of String(s.html).matchAll(/<\/?([a-zA-Z0-9]+)/g)) {
			if (!ALLOWED_TAGS.has(tag.toLowerCase())) problems.push(`section "${s.id}" uses <${tag}>`);
		}
		if (/\sstyle=|<script/i.test(s.html)) problems.push(`section "${s.id}" carries inline style or script`);
	}
	for (const [label, url] of g.sources ?? []) {
		if (!/^https:\/\//.test(url) && !url.startsWith('/')) problems.push(`source "${label}" has no usable URL`);
	}
	return problems;
}

/** Load every guide module. A guide that fails validation stops the build, loudly. */
export async function loadGuides() {
	const guides = {};
	const failures = [];
	for (const slug of guideSlugs()) {
		const mod = await import(pathToFileURL(path.join(GUIDES_DIR, `${slug}.mjs`)).href);
		const g = mod.default;
		const problems = validate(slug, g ?? {});
		if (problems.length) failures.push(`${slug}: ${problems.join('; ')}`);
		else guides[slug] = g;
	}
	if (failures.length) {
		throw new Error(`Guide modules failed validation:\n  ${failures.join('\n  ')}`);
	}
	return guides;
}

export const guideHref = (slug) => `/${slug}/${GUIDE_FILE}`;

/** "Study guide" -> "study guide", but "ADM guide" stays "ADM guide". */
const sentenceCase = (s) => (/^[A-Z][a-z]/.test(s) ? s[0].toLowerCase() + s.slice(1) : s);

const strip = (s) => String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

const longDate = (iso) =>
	new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/**
 * A table wider than a phone scrolls inside its .tbl wrapper, and a scrolling region must be
 * reachable by keyboard (axe scrollable-region-focusable), so each wrapper becomes a labelled,
 * focusable region named after its section.
 */
function focusableTables(html, sectionName, esc) {
	let n = 0;
	return String(html).replace(/<div class="tbl">/g, () => {
		n++;
		return `<div class="tbl" tabindex="0" role="region" aria-label="${esc(sectionName)}, table${n > 1 ? ` ${n}` : ''}">`;
	});
}

export function guideWords(g) {
	return strip(g.sections.map((s) => s.html).join(' ')).split(' ').filter(Boolean).length;
}

export function guideCss() {
	return `
  .guide .eyebrow { margin-bottom: 4px; }
  .guide h1 { font-size: 40px; line-height: 1.12; letter-spacing: -0.025em; margin: 18px 0 0; }
  .guide .lede { margin-top: 18px; }
  .guide .byline { color: var(--muted); font-size: 14px; margin: 18px 0 0; }
  .toc { border: 1px solid var(--line); border-radius: 14px; background: var(--card); padding: 18px 22px; margin: 30px 0 8px; }
  .toc p { margin: 0 0 8px; font-size: 12.5px; font-weight: 650; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-2); }
  .toc ol { margin: 0; padding-left: 20px; columns: 2; column-gap: 34px; }
  .toc li { margin: 0 0 5px; font-size: 15px; break-inside: avoid; }
  .guide .gsec { scroll-margin-top: 80px; }
  .guide h2 { font-size: 25px; line-height: 1.25; letter-spacing: -0.015em; margin: 46px 0 12px; color: var(--text); }
  .guide h3 { color: var(--accent); }
  .guide ol { padding-left: 22px; }
  /* Links inside prose must not rely on colour alone (WCAG 1.4.1, axe link-in-text-block). */
  .guide .gsec a, .guide .byline a, .guide .practice p a, .guide details a, .guide .checked a,
  .guide .author a, .sources a { text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 2px; }
  .tbl { overflow-x: auto; margin: 20px 0; border: 1px solid var(--line); border-radius: 12px; }
  .tbl:focus-visible { outline: 2px solid var(--accent-2); outline-offset: 2px; }
  .tbl table { border-collapse: collapse; width: 100%; font-size: 15px; line-height: 1.5; }
  .tbl th, .tbl td { text-align: left; vertical-align: top; padding: 10px 14px; border-bottom: 1px solid var(--line); }
  .tbl th { background: var(--panel); color: var(--text); font-weight: 650; white-space: nowrap; }
  .tbl td { color: #C6D3E8; }
  .tbl tr:last-child td { border-bottom: 0; }
  .guide .faq { margin-top: 14px; }
  .practice { border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
              background: color-mix(in srgb, var(--accent) 6%, transparent);
              border-radius: 16px; padding: 24px 26px; margin: 50px 0 10px; }
  .practice h2 { margin-top: 0; }
  .practice .cta { margin-top: 20px; }
  .sources { padding-left: 20px; }
  .sources li { font-size: 15px; }
  .checked { color: var(--muted); font-size: 14px; }
  .guide .author { margin-top: 40px; }
  @media (max-width: 860px) {
    .guide h1 { font-size: 31px; }
    .toc ol { columns: 1; }
    .guide h2 { font-size: 22px; }
  }
`;
}

export function guideJsonLd({ app, guide, OWNER }) {
	const pageUrl = `${OWNER.site}${guideHref(app.slug)}`;
	const author = { '@type': 'Person', name: OWNER.name, url: OWNER.site, sameAs: [OWNER.linkedin] };
	const graph = [
		{
			'@type': 'Article',
			'@id': `${pageUrl}#article`,
			headline: strip(guide.h1),
			description: strip(guide.description),
			url: pageUrl,
			mainEntityOfPage: pageUrl,
			datePublished: guide.published ?? guide.updated,
			dateModified: guide.updated,
			inLanguage: 'en',
			author,
			publisher: author,
			// A guide may be about something other than the app (a book guide whose app is only a
			// prototype); `guide.about` then names it, with the author filled in.
			about: guide.about
				? { ...guide.about, ...(guide.about['@type'] === 'Book' ? { author } : {}) }
				: { '@type': 'SoftwareApplication', name: app.name, url: `${OWNER.site}/${app.slug}/index.html` },
		},
		{
			'@type': 'BreadcrumbList',
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Apps', item: `${OWNER.site}/apps/` },
				{ '@type': 'ListItem', position: 2, name: app.name, item: `${OWNER.site}/${app.slug}/index.html` },
				{ '@type': 'ListItem', position: 3, name: strip(guide.nav), item: pageUrl },
			],
		},
	];
	if (guide.faq?.length) {
		graph.push({
			'@type': 'FAQPage',
			mainEntity: guide.faq.map(([q, a]) => ({
				'@type': 'Question',
				name: strip(q),
				acceptedAnswer: { '@type': 'Answer', text: strip(a) },
			})),
		});
	}
	return { '@context': 'https://schema.org', '@graph': graph };
}

/**
 * Render the guide. `shell` comes from build-app-pages.mjs so header, footer, head and the
 * call-to-action block stay identical to the app's other pages.
 */
export function guidePage({ app, guide, OWNER, shell }) {
	const { head, siteHeader, siteFooter, ctaBlock, esc } = shell;
	const url = guideHref(app.slug);
	return `${head(app, {
		title: guide.title,
		description: guide.description,
		pageUrl: url,
		jsonld: guideJsonLd({ app, guide, OWNER }),
		ogType: 'article',
		ogTitle: guide.ogTitle,
		ogDescription: guide.ogDescription,
		extraCss: guideCss(),
	})}
${siteHeader(app, 'guide')}
<article class="doc guide">
  <div class="wrap narrow">
    <span class="eyebrow"><span class="dot"></span>${esc(guide.eyebrow ?? 'Free reference')}</span>
    <h1>${guide.h1}</h1>
    <p class="lede">${guide.lede}</p>
    <p class="byline">By <a href="${OWNER.site}/about/">${esc(OWNER.name)}</a> &middot; checked ${esc(longDate(guide.updated))} &middot; companion to <a href="/${app.slug}/index.html">${esc(app.name)}</a></p>
    <nav class="toc" aria-label="On this page">
      <p>On this page</p>
      <ol>
        ${guide.sections.map((s) => `<li><a href="#${s.id}">${esc(strip(s.h2))}</a></li>`).join('\n        ')}${
				guide.faq?.length ? `\n        <li><a href="#faq">Common questions</a></li>` : ''
			}
        <li><a href="#sources">Sources</a></li>
      </ol>
    </nav>
${guide.sections
	.map(
		(s) => `
    <div class="gsec" id="${s.id}">
      <h2>${s.h2}</h2>
      ${focusableTables(s.html, strip(s.h2), esc)}
    </div>`,
	)
	.join('\n')}

    <div class="practice" id="practise">
      <h2>${esc(guide.practice.heading)}</h2>
      ${guide.practice.body}
      ${guide.cta ? guideCta(guide.cta, esc) : ctaBlock(app)}
    </div>
${
	guide.faq?.length
		? `
    <div class="gsec" id="faq">
      <h2>Common questions</h2>
      <div class="faq">
        ${guide.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${a}</p></details>`).join('\n        ')}
      </div>
    </div>`
		: ''
}

    <div class="gsec" id="sources">
      <h2>Sources</h2>
      <ul class="sources">
        ${guide.sources.map(([label, href]) => `<li><a href="${esc(href)}">${esc(label)}</a></li>`).join('\n        ')}
      </ul>
      <p class="checked">${esc(guide.checkedNote ?? `Checked against the sources above on ${longDate(guide.updated)}.`)} Spotted something out of date? <a href="mailto:${OWNER.email}?subject=${encodeURIComponent(`${app.name} guide correction`)}">Tell me</a>.</p>
    </div>

    <div class="author">
      <p class="label">About the author</p>
      <p>${esc(OWNER.bio)}</p>
      <p class="links">
        <a href="${OWNER.site}">oxenwaldt.com</a> &middot;
        <a href="${OWNER.linkedin}">LinkedIn</a> &middot;
        <a href="${OWNER.podcast}">Future Bytes</a> &middot;
        <a href="mailto:${OWNER.email}">Email</a>
      </p>
    </div>
  </div>
</article>
${siteFooter(app)}
`;
}

/**
 * Call to action for a guide whose funnel is not the app, e.g. a book guide while the app is
 * only a prototype: `cta: { primary: [label, href], secondary?: [label, href], note? }`.
 */
function guideCta(cta, esc) {
	const [pl, ph] = cta.primary;
	const sec = cta.secondary ? `\n        <a class="btn btn-ghost" href="${esc(cta.secondary[1])}">${esc(cta.secondary[0])}</a>` : '';
	const note = cta.note ? `\n        <span class="cta-note">${esc(cta.note)}</span>` : '';
	return `
      <div class="cta">
        <a class="btn btn-primary" href="${esc(ph)}">${esc(pl)}</a>${sec}${note}
      </div>`;
}

/** Teaser on the app's landing page, so the landing links its own reference. */
export function guideTeaser({ app, guide, esc }) {
	return `<section>
  <div class="wrap narrow">
    <p class="kicker">Free reference</p>
    <h2>${guide.h1}</h2>
    <p class="section-intro">${esc(strip(guide.description))}</p>
    <div class="cta">
      <a class="btn btn-ghost" href="${guideHref(app.slug)}">Read the ${esc(sentenceCase(strip(guide.nav)))}</a>
    </div>
  </div>
</section>

`;
}
