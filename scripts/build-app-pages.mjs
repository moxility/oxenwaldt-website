/**
 * Generates the companion web pages for every app in the moxapps portfolio.
 *
 *   npm run apps:build                  # write the pages
 *   npm run apps:build -- --dry         # report what would change
 *   npm run apps:build -- --only pmp    # one app
 *
 * Output: site/public/<slug>/{index,privacy,terms,support}.html
 *
 * These are plain static files rather than Astro routes on purpose. Apple's
 * store listings already point at https://www.oxenwaldt.com/<slug>/privacy.html,
 * and extensionless URLs 404 on this host (moxapps PLAYBOOK §9b) — so the .html
 * suffix has to survive, on the page itself and on every cross-link.
 *
 * Apps flagged `generated: false` in src/data/apps.mjs are hand-authored and are
 * left alone (today: aiact, which ships its own reader at /aiact/act.html).
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { APPS, GENERATED_APPS, OWNER, STATES, appStoreUrl, bySlug } from '../src/data/apps.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(HERE, '..', 'public');

const argv = process.argv.slice(2);
const DRY = argv.includes('--dry');
const ONLY = argv.includes('--only') ? argv[argv.indexOf('--only') + 1] : null;

/** ISO date used as the "last updated" stamp on the legal pages. */
const TODAY = new Date().toISOString().slice(0, 10);

// ───────────────────────────────────────────────────────────────── helpers ──

const esc = (s) =>
	String(s).replace(/&(?!(?:[a-zA-Z]+|#\d+);)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Copy in apps.mjs may carry inline <em>/<strong>; keep those, escape the rest. */
const rich = (s) => String(s);

const iconDataUri = (app) =>
	'data:image/svg+xml,' +
	encodeURIComponent(
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">` +
			`<rect width="100" height="100" rx="18" fill="#0D2454"/>` +
			`<path fill="none" stroke="${app.accent}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round" d="${app.glyph}"/>` +
			`</svg>`,
	);

const appTile = (app) =>
	`<svg class="tile" viewBox="0 0 100 100" role="img" aria-label="${esc(app.name)} app icon">` +
	`<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">` +
	`<stop offset="0" stop-color="#12295C"/><stop offset="1" stop-color="#060D20"/>` +
	`</linearGradient></defs>` +
	`<rect width="100" height="100" rx="22" fill="url(#g)"/>` +
	`<path fill="none" stroke="${app.accent}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round" d="${app.glyph}"/>` +
	`</svg>`;

function head(app, { title, description, pageUrl }) {
	return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${OWNER.site}${pageUrl}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(app.name)}">
<meta property="og:url" content="${OWNER.site}${pageUrl}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta name="twitter:card" content="summary">${
		app.unlisted ? '\n<meta name="robots" content="noindex, follow">' : ''
	}
<link rel="icon" href="${iconDataUri(app)}">
<style>${css(app)}</style>
</head>
<body>`;
}

function css(app) {
	return `
  :root {
    --accent: ${app.accent};
    --accent-2: ${app.accent2};
    --bg: #0B1220;
    --panel: #0C1526;
    --text: #EAF0FA;
    --muted: #98A9C6;
    --line: rgba(234,240,250,0.13);
    --card: rgba(234,240,250,0.045);
  }
  * { box-sizing: border-box; }
  html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; }
  body {
    margin: 0; background: var(--bg); color: var(--text); font-size: 17px; line-height: 1.65;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  a { color: var(--accent-2); text-decoration: none; }
  a:hover { text-decoration: underline; }
  .wrap { max-width: 1060px; margin: 0 auto; padding: 0 22px; }
  .narrow { max-width: 760px; }

  header.site {
    position: sticky; top: 0; z-index: 20; border-bottom: 1px solid var(--line);
    background: rgba(11,18,32,0.86); backdrop-filter: saturate(160%) blur(12px);
    -webkit-backdrop-filter: saturate(160%) blur(12px);
  }
  header.site .wrap { display: flex; align-items: center; gap: 20px; min-height: 62px; flex-wrap: wrap; }
  .brand { display: flex; align-items: center; gap: 10px; color: var(--text); font-weight: 600; letter-spacing: -0.01em; }
  .brand:hover { text-decoration: none; }
  .brand .mark { width: 26px; height: 26px; flex: none; border-radius: 7px; }
  nav.site { margin-left: auto; display: flex; gap: 18px; font-size: 14.5px; flex-wrap: wrap; }
  nav.site a { color: var(--muted); }
  nav.site a:hover { color: var(--text); }
  nav.site a.on { color: var(--accent); }

  .hero { background: radial-gradient(1100px 620px at 50% -18%, #0D2454 0%, rgba(5,12,28,0) 68%); padding: 62px 0 54px; }
  .hero-grid { display: grid; grid-template-columns: 1fr 190px; gap: 44px; align-items: start; }
  .tile { width: 190px; height: 190px; border-radius: 42px; display: block;
          box-shadow: 0 26px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08); }
  .eyebrow {
    display: inline-flex; align-items: center; gap: 9px; font-size: 13px; font-weight: 600;
    letter-spacing: 0.06em; text-transform: uppercase; color: var(--accent);
    border: 1px solid color-mix(in srgb, var(--accent) 34%, transparent);
    background: color-mix(in srgb, var(--accent) 8%, transparent);
    padding: 6px 13px; border-radius: 999px;
  }
  .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); flex: none; }
  .dot.wait { background: var(--accent-2); }
  .dot.idle { background: var(--muted); }
  h1 { font-size: 44px; line-height: 1.1; letter-spacing: -0.025em; margin: 22px 0 0; font-weight: 700; }
  .lede { font-size: 19.5px; color: #C6D3E8; margin: 20px 0 0; max-width: 42em; }
  .lede strong, .lede em { color: var(--text); }
  .sub { color: var(--muted); margin: 18px 0 0; max-width: 42em; }

  .cta { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; margin-top: 32px; }
  .btn { display: inline-block; padding: 13px 24px; border-radius: 12px; font-weight: 650; font-size: 16px; }
  .btn:hover { text-decoration: none; }
  .btn-primary { background: var(--accent); color: #10131A; box-shadow: 0 10px 30px color-mix(in srgb, var(--accent) 18%, transparent); }
  .btn-primary:hover { filter: brightness(1.1); }
  .btn-ghost { border: 1px solid var(--line); color: var(--text); }
  .btn-ghost:hover { border-color: color-mix(in srgb, var(--accent-2) 60%, transparent); color: #fff; }
  .cta-note { font-size: 14px; color: var(--muted); }

  .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--line);
           border: 1px solid var(--line); border-radius: 14px; overflow: hidden; margin-top: 50px; }
  .stat { background: var(--panel); padding: 18px 20px; }
  .stat .n { font-size: 22px; font-weight: 700; letter-spacing: -0.02em; color: var(--accent); }
  .stat .l { font-size: 13.5px; color: var(--muted); margin-top: 3px; line-height: 1.45; }

  section { padding: 64px 0; border-top: 1px solid var(--line); }
  h2 { font-size: 30px; line-height: 1.2; letter-spacing: -0.02em; margin: 0 0 12px; font-weight: 700; }
  .kicker { font-size: 13px; font-weight: 650; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-2); margin: 0 0 12px; }
  .section-intro { color: var(--muted); max-width: 44em; margin: 0 0 32px; }

  .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(272px, 1fr)); gap: 16px; }
  .card { border: 1px solid var(--line); border-radius: 14px; background: var(--card); padding: 22px 22px 24px; }
  .card h3 { margin: 0 0 8px; font-size: 17.5px; letter-spacing: -0.01em; }
  .card p { margin: 0; color: var(--muted); font-size: 15.5px; line-height: 1.6; }
  .card .num { font-size: 12.5px; font-weight: 700; letter-spacing: 0.1em; color: var(--accent-2); display: block; margin-bottom: 10px; }

  .band { background: linear-gradient(180deg, rgba(13,36,84,0.55), rgba(5,12,28,0)); }
  .privacy-points { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 28px; }
  .pp b { display: block; color: var(--accent); font-size: 15px; margin-bottom: 4px; }
  .pp span { color: var(--muted); font-size: 15px; }

  .prices { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; }
  .price { border: 1px solid var(--line); border-radius: 16px; background: var(--card); padding: 26px; }
  .price.pro { border-color: color-mix(in srgb, var(--accent) 42%, transparent); background: color-mix(in srgb, var(--accent) 5%, transparent); }
  .price h3 { margin: 0; font-size: 19px; }
  .price .amt { font-size: 32px; font-weight: 700; letter-spacing: -0.03em; margin: 10px 0 2px; }
  .price .per { color: var(--muted); font-size: 14px; }
  .price ul { list-style: none; padding: 0; margin: 20px 0 0; }
  .price li { position: relative; padding-left: 24px; margin-bottom: 9px; color: var(--muted); font-size: 15.5px; }
  .price li::before { content: ""; position: absolute; left: 4px; top: 9px; width: 7px; height: 7px;
                      border-radius: 50%; background: var(--accent); }

  .faq { display: grid; gap: 12px; }
  details { border: 1px solid var(--line); border-radius: 12px; background: var(--card); padding: 16px 20px; }
  details[open] { border-color: color-mix(in srgb, var(--accent) 34%, transparent); }
  summary { cursor: pointer; font-weight: 600; list-style: none; }
  summary::-webkit-details-marker { display: none; }
  summary::after { content: "+"; float: right; color: var(--accent); font-weight: 700; }
  details[open] summary::after { content: "\\2013"; }
  details p { color: var(--muted); margin: 12px 0 0; font-size: 15.5px; }

  .author { border: 1px solid var(--line); border-radius: 16px; background: var(--card); padding: 26px; }
  .author .label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); font-weight: 650; margin: 0 0 8px; }
  .author p { margin: 0 0 12px; }
  .author .links { font-size: 15px; color: var(--muted); margin: 0; }

  .siblings { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 14px; }
  .sib { display: flex; gap: 12px; align-items: center; border: 1px solid var(--line); border-radius: 12px;
         background: var(--card); padding: 14px 16px; color: var(--text); }
  .sib:hover { text-decoration: none; border-color: color-mix(in srgb, var(--accent-2) 55%, transparent); }
  .sib img { width: 38px; height: 38px; border-radius: 10px; flex: none; }
  .sib b { display: block; font-size: 15px; }
  .sib span { display: block; font-size: 13px; color: var(--muted); }

  footer.site { border-top: 1px solid var(--line); padding: 34px 0 54px; color: var(--muted); font-size: 14.5px; }
  footer.site .row { display: flex; flex-wrap: wrap; gap: 14px 22px; align-items: center; }
  footer.site .row .sp { margin-left: auto; }
  .tm { margin-top: 18px; font-size: 12.5px; color: #6E7E99; max-width: 60em; }

  /* legal / support documents */
  .doc { padding: 54px 0 20px; }
  .doc h1 { font-size: 34px; margin: 0; }
  .doc .updated { color: var(--muted); font-size: 14px; margin: 8px 0 0; }
  .doc h2 { font-size: 21px; margin: 38px 0 10px; color: var(--accent); }
  .doc h3 { font-size: 17px; margin: 24px 0 6px; }
  .doc p, .doc li { color: #C6D3E8; }
  .doc ul { padding-left: 22px; }
  .doc li { margin-bottom: 7px; }
  .doc code { background: rgba(255,255,255,0.06); border: 1px solid var(--line); padding: 1px 6px; border-radius: 5px; font-size: 14px; }
  .callout { border: 1px solid color-mix(in srgb, var(--accent) 38%, transparent);
             background: color-mix(in srgb, var(--accent) 7%, transparent);
             border-radius: 12px; padding: 16px 20px; margin: 22px 0; }
  .callout p { margin: 0; color: var(--text); }

  @media (max-width: 860px) {
    .hero-grid { grid-template-columns: 1fr; gap: 28px; }
    .tile { width: 128px; height: 128px; border-radius: 28px; }
    .stats { grid-template-columns: repeat(2, 1fr); }
    h1 { font-size: 34px; }
    .doc h1 { font-size: 28px; }
    h2 { font-size: 25px; }
  }
`;
}

function siteHeader(app, current) {
	const nav = [
		['Overview', `/${app.slug}/index.html`, 'overview'],
		...(app.extraLinks ?? []).map(([label, href]) => [label, href, href]),
		['Support', `/${app.slug}/support.html`, 'support'],
		['Privacy', `/${app.slug}/privacy.html`, 'privacy'],
		['Terms', `/${app.slug}/terms.html`, 'terms'],
	];
	return `
<header class="site">
  <div class="wrap">
    <a class="brand" href="/${app.slug}/index.html">
      <img class="mark" src="${iconDataUri(app)}" alt="" width="26" height="26">
      <span>${esc(app.name)}</span>
    </a>
    <nav class="site">
      ${nav.map(([l, h, k]) => `<a href="${h}"${k === current ? ' class="on"' : ''}>${esc(l)}</a>`).join('\n      ')}
      <a href="/apps/">All apps</a>
    </nav>
  </div>
</header>`;
}

function siteFooter(app) {
	return `
<footer class="site">
  <div class="wrap">
    <div class="row">
      <span>&copy; ${new Date().getFullYear()} ${esc(OWNER.name)}</span>
      <a href="/${app.slug}/support.html">Support</a>
      <a href="/${app.slug}/privacy.html">Privacy</a>
      <a href="/${app.slug}/terms.html">Terms</a>
      <span class="sp"></span>
      <a href="/apps/">All apps</a>
      <a href="${OWNER.site}">oxenwaldt.com</a>
      <a href="${OWNER.linkedin}">LinkedIn</a>
      <a href="mailto:${OWNER.email}">${OWNER.email}</a>
    </div>
    ${app.trademark ? `<p class="tm">${esc(app.trademark)}</p>` : ''}
  </div>
</footer>
</body>
</html>`;
}

// ────────────────────────────────────────────────────────────── the landing ──

function ctaBlock(app) {
	const url = appStoreUrl(app);
	const state = STATES[app.state];
	if (state.cta === 'download' && url) {
		return `
      <div class="cta">
        <a class="btn btn-primary" href="${url}">Download on the App Store</a>
        <a class="btn btn-ghost" href="/${app.slug}/support.html">Support</a>
        <span class="cta-note">iPhone &middot; requires iOS 26</span>
      </div>`;
	}
	if (state.cta === 'none') {
		return `
      <div class="cta">
        <a class="btn btn-ghost" href="/${app.slug}/support.html">Support</a>
        <span class="cta-note">Distributed internally through TestFlight — not on the App Store</span>
      </div>`;
	}
	const subject = encodeURIComponent(`${app.name} — tell me when it launches`);
	return `
      <div class="cta">
        <a class="btn btn-primary" href="mailto:${OWNER.email}?subject=${subject}&amp;body=${encodeURIComponent(`Hi Magnus, please let me know when ${app.name} is available.`)}">Tell me when it launches</a>
        ${url ? `<a class="btn btn-ghost" href="${url}">App Store listing</a>` : `<a class="btn btn-ghost" href="/apps/">See the other apps</a>`}
        <span class="cta-note">${esc(STATES[app.state].label)}</span>
      </div>`;
}

function siblingBlock(app) {
	const sibs = (app.siblings ?? []).map(bySlug).filter(Boolean);
	if (!sibs.length) return '';
	return `
<section>
  <div class="wrap">
    <p class="kicker">Related</p>
    <h2>Also from the same world</h2>
    <div class="siblings">
      ${sibs
			.map(
				(s) => `<a class="sib" href="/${s.slug}/index.html">
        <img src="${iconDataUri(s)}" alt="" width="38" height="38">
        <span><b>${esc(s.name)}</b><span>${esc(s.tagline)}</span></span>
      </a>`,
			)
			.join('\n      ')}
    </div>
  </div>
</section>`;
}

const PRIVACY_HEADLINES = {
	'on-device-only': [
		['No account', 'There is nothing to sign up for and no password to lose.'],
		['No server', 'The app has no backend. Your content has nowhere to be sent.'],
		['On-device AI', "Generation runs on Apple's Foundation Models, on your phone."],
		['Works offline', 'It does its job in airplane mode.'],
	],
	'account-study': [
		['Your account, deletable', 'Settings → Delete account removes everything, immediately and permanently.'],
		['EU storage', 'Account and practice data live in Frankfurt (eu-central-1).'],
		['On-device tutor', 'Tutor questions never leave your phone. There is no server fallback.'],
		['Never sold', 'No advertising, no cross-app tracking, no sale of your data.'],
	],
	'anon-progress': [
		['No email required', 'A session is minted anonymously on first launch.'],
		['Progress, not identity', 'What is stored is how far you got — not who you are.'],
		['On-device AI', 'Conversations with the in-app advisor stay on your phone.'],
		['Never sold', 'No advertising, no cross-app tracking, no sale of your data.'],
	],
	'anon-optional-profile': [
		['No account to create', 'You are signed in anonymously on first launch.'],
		['Every profile field skippable', 'Email, name, company and role are optional — all of them.'],
		['On-device Advisor', 'Advisor conversations never leave your phone.'],
		['Never sold', 'No advertising, no cross-app tracking, no sale of your data.'],
	],
	'internal-sso': [
		['Columbus accounts only', 'Authentication is your ordinary Entra ID sign-in.'],
		['A client, not a store', 'The app displays the portal; the portal holds the data.'],
		['No consumer distribution', 'TestFlight only, for colleagues on the programme.'],
		['No analytics SDKs', 'No Sentry, no PostHog, no advertising identifiers.'],
	],
};

function landing(app) {
	const url = `/${app.slug}/index.html`;
	const description = `${app.tagline} ${String(app.lede).replace(/<[^>]+>/g, '')}`.slice(0, 300);
	const state = STATES[app.state];

	return `${head(app, { title: `${app.name} — ${app.tagline}`, description, pageUrl: url })}
${siteHeader(app, 'overview')}

<div class="hero">
  <div class="wrap">
    <div class="hero-grid">
      <div>
        <span class="eyebrow"><span class="dot ${state.tone === 'good' ? '' : state.tone}"></span>${esc(state.label)}</span>
        <h1>${esc(app.name)}</h1>
        <p class="lede">${rich(app.lede)}</p>
        ${app.sub ? `<p class="sub">${rich(app.sub)}</p>` : ''}
        ${ctaBlock(app)}
      </div>
      ${appTile(app)}
    </div>
    ${
			app.stats
				? `<div class="stats">
      ${app.stats.map(([n, l]) => `<div class="stat"><div class="n">${esc(n)}</div><div class="l">${esc(l)}</div></div>`).join('\n      ')}
    </div>`
				: ''
		}
  </div>
</div>

${
	app.features
		? `<section>
  <div class="wrap">
    <p class="kicker">What it does</p>
    <h2>${esc(app.tagline)}</h2>
    <div class="cards">
      ${app.features
				.map(
					([h, p], i) =>
						`<div class="card"><span class="num">${String(i + 1).padStart(2, '0')}</span><h3>${esc(h)}</h3><p>${rich(p)}</p></div>`,
				)
				.join('\n      ')}
    </div>
  </div>
</section>`
		: ''
}

<section class="band">
  <div class="wrap">
    <p class="kicker">Privacy</p>
    <h2>Built so there is nothing to leak</h2>
    <p class="section-intro">The full policy is on the <a href="/${app.slug}/privacy.html">privacy page</a>. The short version:</p>
    <div class="privacy-points">
      ${PRIVACY_HEADLINES[app.privacy].map(([b, s]) => `<div class="pp"><b>${esc(b)}</b><span>${esc(s)}</span></div>`).join('\n      ')}
    </div>
  </div>
</section>

${
	app.pricing
		? `<section>
  <div class="wrap">
    <p class="kicker">Pricing</p>
    <h2>What it costs</h2>
    <div class="prices">
      ${app.pricing
				.map(
					(p) => `<div class="price${p.pro ? ' pro' : ''}">
        <h3>${esc(p.name)}</h3>
        <div class="amt">${esc(p.amount)}</div>
        <div class="per">${esc(p.per)}</div>
        ${p.points?.length ? `<ul>${p.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
      </div>`,
				)
				.join('\n      ')}
    </div>
  </div>
</section>`
		: ''
}

${
	app.faq
		? `<section>
  <div class="wrap narrow">
    <p class="kicker">Questions</p>
    <h2>Before you ask</h2>
    <div class="faq">
      ${app.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${rich(a)}</p></details>`).join('\n      ')}
    </div>
  </div>
</section>`
		: ''
}

${siblingBlock(app)}

<section>
  <div class="wrap narrow">
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
</section>
${siteFooter(app)}
`;
}

// ─────────────────────────────────────────────────────────── legal + support ──

function docShell(app, { current, title, heading, body }) {
	const url = `/${app.slug}/${current}.html`;
	return `${head(app, { title, description: `${title} for ${app.name}.`, pageUrl: url })}
${siteHeader(app, current)}
<div class="doc">
  <div class="wrap narrow">
    <h1>${esc(heading)}</h1>
    <p class="updated">${esc(app.name)} &middot; Last updated ${TODAY}</p>
${body}
  </div>
</div>
${siteFooter(app)}
`;
}

const SUB_APP = (app) => (app.pricing ?? []).some((p) => /\$/.test(p.amount) || /\$/.test(p.per));

function privacyBody(app) {
	const A = app.privacy;
	const parts = [];

	parts.push(
		`<p>This Privacy Policy describes how the iOS app <strong>${esc(app.name)}</strong> (the &ldquo;App&rdquo;), developed by ${esc(OWNER.name)} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), collects, uses and shares information.</p>`,
	);

	if (A === 'on-device-only') {
		parts.push(`<div class="callout"><p><strong>${esc(app.name)} is built on a single principle: your content never leaves your iPhone.</strong></p></div>`);
		parts.push(`<h2>What we collect</h2>
<p><strong>Nothing.</strong> The App has no account, no login and no server. We do not collect, transmit, store or have any access to:</p>
<ul>
  <li>what you type, paste or dictate,</li>
  <li>what the App generates in response,</li>
  <li>your voice or any audio recording,</li>
  <li>your settings or preferences,</li>
  <li>analytics, usage statistics, advertising identifiers or crash telemetry.</li>
</ul>`);
		parts.push(`<h2>How the App works</h2>
<ul>
  <li><strong>Generation.</strong> Responses are produced by Apple&rsquo;s on-device Foundation Models, which run entirely on your iPhone. Your input is never sent to us or to any third-party AI service.</li>
  <li><strong>Speech.</strong> Where the App listens, speech is transcribed using Apple&rsquo;s on-device speech recognition. The audio and the transcript stay on your device and are not written to a file or uploaded.</li>
  <li><strong>Storage.</strong> Anything the App keeps is stored locally using the operating system&rsquo;s standard app storage. Deleting the App deletes it permanently. We hold no copy and cannot recover it.</li>
  <li><strong>Offline.</strong> The App works in airplane mode. It needs no network connection to do its job.</li>
</ul>`);
	}

	if (A === 'account-study') {
		parts.push(`<h2>What we collect</h2>
<h3>Account information</h3>
<p>The App requires an account. When you create one, we collect:</p>
<ul>
  <li><strong>Email address</strong> — used to identify your account, sign you in, and contact you about the service.</li>
  <li><strong>A hashed password</strong> — managed by our authentication provider Supabase; we never see your plaintext password.</li>
</ul>
<h3>App usage</h3>
<p>We store your interaction with the App to power its features:</p>
<ul>
  <li><strong>Practice attempts</strong> — which questions you answered, which answer you selected, whether it was correct, and time spent.</li>
  <li><strong>Sessions</strong> — when you started a practice session or mock exam, what mode, and how many questions it contained.</li>
  <li><strong>Daily quotas</strong> — how many free-tier questions you have used each day, so the free-tier limit can be enforced.</li>
  <li><strong>Topic progress</strong> — your best score and pace per topic, so your progress survives reinstalling the App.</li>
  <li><strong>Subscription state</strong> — whether you have an active Pro subscription, as reported by Apple&rsquo;s StoreKit via RevenueCat.</li>${
			app.promoCodes
				? `\n  <li><strong>Promotional code redemptions</strong> — if you redeem a promo code, we record which code and when.</li>`
				: ''
		}
  <li><strong>Support tickets</strong> — if you contact support from inside the App, we store what you wrote along with your app version and device model.</li>
</ul>
<p>We use this to show you progress statistics, surface your weakest topics, and improve the App over time.</p>
<h3>Diagnostics${app.sessionReplay ? ' and session recording' : ''}</h3>
<p>We use <a href="https://sentry.io">Sentry</a> for crash reporting. A crash report includes the stack trace, device model and OS version.</p>${
			app.sessionReplay
				? `
<p><strong>Please read this part carefully.</strong> During the App&rsquo;s early-launch period, Sentry&rsquo;s Session Replay feature is enabled and records <strong>every session</strong>, not only sessions that crash. A replay is a reconstruction of what appeared on your screen and where you tapped, played back like a video. Images are masked; <strong>on-screen text is not masked</strong>, so a replay can show the question you were reading and the answer you selected. Replays are stored by Sentry and are used only to diagnose bugs and layout problems. We intend to reduce this to error-only recording once the App is stable, and we will update this policy and the date above when we do.</p>
<p>If you would rather not be recorded, do not use the App while this notice stands.</p>`
				: ''
		}
<h3>Product analytics</h3>
<p>We use <a href="https://posthog.com">PostHog</a> to understand which screens you visit and which features you use, so we can improve the App. PostHog events are linked to a randomly generated app-install identifier, not to your email address. You can opt out by deleting the App.</p>
<h3>Reminders</h3>
<p>The optional daily streak reminder is scheduled entirely on your iPhone using local notifications. We do <strong>not</strong> collect a push token and we cannot send you a push notification. Turning the reminder on or off never leaves your device.</p>
<h3>AI Tutor</h3>
<p>The AI Tutor runs entirely on your iPhone via Apple Foundation Models, which requires iPhone 15 Pro or newer with Apple Intelligence enabled. <strong>Your tutor questions never leave your device.</strong> We do not collect, store or have any access to what you type into the Tutor. On devices that do not support Apple Intelligence, the Tutor reports that it is unavailable rather than falling back to a server.</p>`);
		parts.push(`<h2>Data storage</h2>
<p>Account and practice data are stored in Supabase (Postgres) in the EU (Frankfurt, <code>eu-central-1</code>). Crash reports${app.sessionReplay ? ' and session replays are' : ' are'} stored by Sentry. Product analytics are stored by PostHog in its US region.</p>`);
	}

	if (A === 'anon-optional-profile') {
		parts.push(`<h2>What we collect</h2>
<h3>Account information (optional)</h3>
<p>On first launch the App signs you in <strong>anonymously</strong> via Supabase. No email, no password and no personal details are required to use it.</p>
<p>During onboarding the App optionally asks for:</p>
<ul>
  <li><strong>Email address</strong> — if you provide it, we use it to identify your account across devices and to contact you about the App.</li>
  <li><strong>Name, company, role, country</strong> — if you provide these, they help us understand who the App is reaching.</li>
</ul>
<p><strong>Every one of those fields is skippable</strong>, and the App works fully without them.</p>
<h3>App usage</h3>
<ul>
  <li><strong>Progress</strong> — which chapters you have opened and finished, your XP, your streak, your assessment score.</li>
  <li><strong>Plan checkmarks</strong> — which items you have marked complete on the ninety-day plan.</li>
  <li><strong>Runtime preferences</strong> — which Advisor tier you have chosen.</li>
</ul>
<p>This lives on your device and syncs to your anonymous account row in Supabase, so your progress survives reinstalls when you have provided an email.</p>
<h3>Diagnostics</h3>
<p>We use <a href="https://sentry.io">Sentry</a> for crash reporting. A crash report includes the stack trace, device model and OS version. Crash reports do not include your email or profile fields.</p>
<h3>Product analytics</h3>
<p>We use <a href="https://posthog.com">PostHog</a> to understand which screens are visited and which features are used, so we can improve the App. PostHog events are linked to a randomly generated app-install identifier, not to your email address. You can opt out by deleting the App.</p>
<h3>AI Advisor</h3>
<p>The Advisor runs entirely on your iPhone via Apple Foundation Models, which requires iPhone 15 Pro or newer with Apple Intelligence enabled. <strong>Your Advisor conversations never leave your device.</strong> We do not collect, store or have any access to anything you type into the Advisor.</p>
<h2>Data storage</h2>
<p>Account and progress data are stored in Supabase (Postgres) in the EU (Frankfurt region). Crash reports are stored by Sentry. Product analytics are stored by PostHog in its US region.</p>`);
	}

	if (A === 'anon-progress') {
		parts.push(`<h2>What we collect</h2>
<h3>No email, no password</h3>
<p>The App does not ask you to register. On first launch it mints an <strong>anonymous session</strong> so that your progress survives closing the App. That session identifies a device, not a person: we hold no email address, no name and no password for you.</p>
<h3>Progress</h3>
<ul>
  <li><strong>Where you have got to</strong> — chapters read, assessments completed, plan items marked done, streaks and XP.</li>
  <li><strong>Assessment answers</strong> — the scores you gave yourself, so the App can show you a result and a next step.</li>
</ul>
<h3>Diagnostics</h3>
<p>We use <a href="https://sentry.io">Sentry</a> for crash reporting. A crash report includes the stack trace, device model and OS version — not your content.</p>
<h3>On-device AI</h3>
<p>Anything you say to the in-app advisor is processed by Apple Foundation Models on your iPhone, which requires iPhone 15 Pro or newer with Apple Intelligence enabled. <strong>Those conversations never leave your device</strong>, and there is no server-side fallback. On unsupported hardware the advisor reports as unavailable.</p>
<h2>Data storage</h2>
<p>Progress is stored in Supabase (Postgres) in the EU. Because the session is anonymous, that record cannot be tied back to you by us.</p>`);
	}

	if (A === 'internal-sso') {
		parts.push(`<div class="callout"><p><strong>This is an internal Columbus Global application distributed through TestFlight. It is not sold and is not available to the public.</strong></p></div>`);
		parts.push(`<h2>What the App is</h2>
<p>The App is a thin native client around the Columbus AI-First Customer Zero control panel. It displays that portal; it does not hold its own copy of the data. Data handling inside the portal is governed by Columbus Global&rsquo;s own internal policies, not by this page.</p>
<h2>What we collect</h2>
<p>The App itself collects <strong>nothing</strong>. It contains no analytics SDK, no crash-reporting SDK and no advertising identifier.</p>
<ul>
  <li><strong>Authentication</strong> — sign-in uses your ordinary Columbus Entra ID account, handled by Microsoft inside the App&rsquo;s web view. We never see your password.</li>
  <li><strong>Session cookies</strong> — kept on the device so you are not signed out between launches. They are cleared when you sign out or delete the App.</li>
  <li><strong>Environment preference</strong> — whether you selected production or staging, stored locally on the device.</li>
  <li><strong>Microphone</strong> — used only while a voice agent session is active, inside the portal. No audio is recorded to a file by the App.</li>
</ul>`);
	}

	parts.push(`<h2>What we do not do</h2>
<ul>
  <li>We do not sell your data to third parties.</li>
  <li>We do not show third-party advertising.</li>
  <li>We do not track you across other apps or websites.</li>
  <li>We do not use your content to train any AI model.</li>
</ul>`);

	if (A === 'account-study') {
		parts.push(`<h2>Your rights</h2>
<ul>
  <li><strong>Delete</strong> your account and everything attached to it from inside the App — Settings &rsaquo; Delete account. This removes your practice history, sessions, progress, support tickets and your login, immediately and permanently.</li>
  <li><strong>Access</strong> all data we hold about you by emailing <a href="mailto:${OWNER.email}">${OWNER.email}</a>.</li>
  <li><strong>Correct</strong> your account email by contacting support.</li>
  <li><strong>Export</strong> your practice history by emailing support; we will provide a JSON export within 30 days.</li>
</ul>`);
	} else if (A === 'anon-progress' || A === 'anon-optional-profile') {
		parts.push(`<h2>Your rights</h2>
<ul>
  <li><strong>Access</strong> all data we hold about you by emailing <a href="mailto:${OWNER.email}">${OWNER.email}</a>.</li>
  <li><strong>Correct</strong> any profile field by contacting us.</li>
  <li><strong>Delete</strong> your account and all associated data by emailing us — we will action it within 30 days. Deleting the App also removes everything held on the device.</li>
  <li><strong>Export</strong> your progress${A === 'anon-optional-profile' ? ' and profile' : ''} by emailing us; we will provide a JSON export within 30 days.</li>
</ul>`);
	} else {
		parts.push(`<h2>Your rights</h2>
<p>Because we hold no data about you, there is nothing for us to show you, correct, export or erase. Deleting the App from your iPhone removes everything it stored. If you would like that confirmed in writing, email <a href="mailto:${OWNER.email}">${OWNER.email}</a>.</p>`);
	}

	if (SUB_APP(app)) {
		parts.push(`<h2>Subscription handling</h2>
<p>Subscriptions are processed by Apple via StoreKit. Apple shares minimal information with us through <strong>RevenueCat, Inc.</strong>: that you have an active subscription and which tier. We do not see your Apple ID, your payment details or your billing address. See <a href="https://www.revenuecat.com/privacy">RevenueCat&rsquo;s privacy policy</a>. Manage or cancel your subscription in your iPhone&rsquo;s Settings &rsaquo; Apple Account &rsaquo; Subscriptions. Deleting your data in the App does not cancel your subscription, because only Apple can do that.</p>`);
	}

	parts.push(`<h2>Children</h2>
<p>The App is a professional tool and is not directed at children. We do not knowingly collect information from anyone under 13.</p>
<h2>Changes to this policy</h2>
<p>If we change this policy materially, we will update the &ldquo;Last updated&rdquo; date at the top and, where the App has a way to reach you, notify you in-app on next launch.</p>
<h2>Contact</h2>
<p><a href="mailto:${OWNER.email}">${OWNER.email}</a></p>`);

	return parts.join('\n');
}

function termsBody(app) {
	const sub = SUB_APP(app);
	const parts = [];
	parts.push(`<p>These terms are the End User Licence Agreement (&ldquo;EULA&rdquo;) between you and ${esc(OWNER.name)} for the iOS app <strong>${esc(app.name)}</strong> (the &ldquo;App&rdquo;). By downloading or using the App you agree to them. If you do not agree, do not use the App.</p>

<h2>Licence</h2>
<p>You are granted a personal, non-transferable, non-exclusive licence to use the App on any Apple device that you own or control, as permitted by the App Store Terms of Service. You may not sell, rent, sub-licence, reverse-engineer or redistribute the App or its content.</p>

<h2>The content is a study and thinking aid</h2>
<p>The App&rsquo;s content is provided for learning and professional development. It is offered in good faith and is checked, but it is not guaranteed to be complete, current or error-free, and it is <strong>not professional advice</strong>. Decisions you take remain yours.${app.trademark ? ' The App is independent and unaffiliated with any certification body — see the notice at the foot of this page.' : ''}</p>`);

	if (app.privacy === 'on-device-only' || app.privacy === 'anon-progress' || app.privacy === 'anon-optional-profile') {
		parts.push(`<h2>AI-generated output</h2>
<p>Parts of the App generate text using Apple&rsquo;s on-device Foundation Models. Generated output can be wrong, incomplete or misleading, and it should be read and edited before you rely on it or send it to anyone. You are responsible for what you do with it. We do not receive that output and therefore cannot review, moderate or recover it.</p>`);
	}

	if (app.privacy === 'on-device-only') {
		parts.push(`<h2>Your content</h2>
<p>Anything you write, dictate or generate in the App is yours. It is stored only on your device; we claim no rights over it. Because we hold no copy, we cannot recover it if you delete the App or lose your device.</p>`);
	}

	if (app.privacy === 'account-study') {
		parts.push(`<h2>Your account</h2>
<p>You are responsible for keeping your login credentials secure and for activity under your account. You may delete your account and everything attached to it at any time from Settings &rsaquo; Delete account; that action is immediate and irreversible.</p>
<h2>Acceptable use</h2>
<p>Do not attempt to scrape, bulk-export or republish the question bank, and do not use the App to build a competing product. Accounts doing so may be suspended without refund.</p>`);
	}

	if (sub) {
		parts.push(`<h2>Subscriptions</h2>
<ul>
  ${(app.pricing ?? [])
			.filter((p) => /\$/.test(p.amount))
			.map((p) => `<li><strong>${esc(p.name)}</strong> — ${esc(p.amount)} ${esc(p.per)}.</li>`)
			.join('\n  ')}
  <li>Payment is charged to your Apple ID at confirmation of purchase.</li>
  <li>Subscriptions renew automatically unless auto-renew is turned off at least 24 hours before the end of the current period.</li>
  <li>Your Apple ID is charged for renewal within 24 hours before the end of the current period.</li>
  <li>You can manage or cancel a subscription in your iPhone&rsquo;s Settings &rsaquo; Apple Account &rsaquo; Subscriptions.</li>
  <li>Where a free trial is offered, any unused portion is forfeited when you buy a subscription.</li>
</ul>
<h2>Refunds</h2>
<p>Purchases are handled by Apple, so refunds are Apple&rsquo;s to give. Request one at <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>. We cannot issue refunds directly.</p>`);
	} else {
		parts.push(`<h2>Price</h2>
<p>${esc(app.name)} is currently offered free of charge. If that ever changes, existing functionality you already have will not be taken away without notice.</p>`);
	}

	parts.push(`<h2>Device requirements</h2>
<p>Some features rely on Apple Intelligence and therefore require iPhone 15 Pro or newer running iOS 26 with Apple Intelligence enabled. On other devices those features report as unavailable rather than degrading to a server. Requirements are set by Apple and may change.</p>

<h2>Availability</h2>
<p>The App is provided &ldquo;as is&rdquo;. We do not warrant that it will be uninterrupted or error-free, and we may change, suspend or discontinue features. To the maximum extent permitted by law, our total liability arising from the App is limited to the amount you paid for it in the twelve months before the claim.</p>

<h2>Third-party terms</h2>
<p>Your use of the App is also subject to the Apple Media Services Terms and Conditions. Apple is a third-party beneficiary of this EULA and may enforce it against you.</p>

<h2>Privacy</h2>
<p>How the App handles data is described in the <a href="/${app.slug}/privacy.html">Privacy Policy</a>, which forms part of these terms.</p>

<h2>Changes</h2>
<p>If these terms change materially, the updated version is published here with a new date. Continuing to use the App after that constitutes acceptance.</p>

<h2>Governing law</h2>
<p>These terms are governed by the laws of Sweden, without regard to conflict-of-law rules, and the courts of Sweden have jurisdiction — except where mandatory consumer law in your country of residence gives you the right to bring proceedings locally.</p>

<h2>Contact</h2>
<p><a href="mailto:${OWNER.email}">${OWNER.email}</a></p>`);

	return parts.join('\n');
}

function supportBody(app) {
	const url = appStoreUrl(app);
	const state = STATES[app.state];
	const parts = [];

	parts.push(`<div class="callout"><p><strong>Email <a href="mailto:${OWNER.email}?subject=${encodeURIComponent(`${app.name} support`)}">${OWNER.email}</a></strong> and you will get a reply from a person, usually within two working days. There is no ticket system and no bot.</p></div>`);

	parts.push(`<h2>Status</h2>
<p>${esc(app.name)} ${app.version ? `version ${esc(app.version)} ` : ''}is currently <strong>${esc(state.label.toLowerCase())}</strong>.${url ? ` The App Store listing is <a href="${url}">here</a>.` : ''}</p>`);

	parts.push(`<h2>What to include</h2>
<p>To get to an answer in one round trip rather than three, include:</p>
<ul>
  <li>your iPhone model and iOS version (Settings &rsaquo; General &rsaquo; About),</li>
  <li>the App version (shown at the bottom of Settings inside the App),</li>
  <li>what you did, what you expected, and what happened instead,</li>
  <li>a screenshot if anything looked wrong on screen.</li>
</ul>`);

	if (app.faq?.length) {
		parts.push(`<h2>Common questions</h2>`);
		for (const [q, a] of app.faq) {
			parts.push(`<h3>${esc(q)}</h3>\n<p>${rich(a)}</p>`);
		}
	}

	if (app.privacy !== 'internal-sso') {
		parts.push(`<h3>Apple Intelligence says it is unavailable</h3>
<p>The on-device model requires iPhone 15 Pro or newer running iOS 26, with Apple Intelligence switched on in Settings &rsaquo; Apple Intelligence &amp; Siri, and enough free storage for the model to download. On a simulator it never works — that is expected.</p>`);
	}

	if (SUB_APP(app)) {
		parts.push(`<h3>I subscribed and Pro is not active</h3>
<p>Open the App and use <em>Restore purchases</em>. If it still does not activate, check that you are signed in with the same Apple ID you bought it with, then email me with the date of purchase and I will look at it.</p>
<h3>How do I cancel?</h3>
<p>iPhone Settings &rsaquo; tap your name &rsaquo; Subscriptions &rsaquo; ${esc(app.name)} &rsaquo; Cancel. Cancelling in the App is not possible — only Apple can do it.</p>
<h3>How do I get a refund?</h3>
<p>Apple handles all payments, so refunds go through <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>. I cannot issue them directly.</p>`);
	}

	if (app.privacy === 'account-study') {
		parts.push(`<h3>How do I delete my account?</h3>
<p>Settings &rsaquo; Delete account, inside the App. It removes your history, progress and login immediately and permanently. It does not cancel a subscription — only Apple can do that.</p>`);
	}

	parts.push(`<h2>Reporting a bug</h2>
<p>Bug reports are genuinely welcome, including blunt ones. If the App crashed, say roughly when — crash reports are collected only where the privacy policy says so, and a timestamp makes them findable.</p>

<h2>Requesting a feature</h2>
<p>Also welcome. This is a small independent operation, so the honest answer is sometimes no or not soon — but you will get an answer either way.</p>

<h2>Contact</h2>
<p><a href="mailto:${OWNER.email}">${OWNER.email}</a> &middot; <a href="${OWNER.linkedin}">LinkedIn</a> &middot; <a href="${OWNER.site}">oxenwaldt.com</a></p>`);

	return parts.join('\n');
}

// ────────────────────────────────────────────────────────────────── writing ──

let written = 0;
let unchanged = 0;

function emit(slug, file, contents) {
	const dir = path.join(PUBLIC_DIR, slug);
	const target = path.join(dir, file);
	const existing = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : null;
	if (existing === contents) {
		unchanged++;
		return;
	}
	if (DRY) {
		console.log(`  would write ${slug}/${file}${existing ? '' : '  (new)'}`);
		written++;
		return;
	}
	fs.mkdirSync(dir, { recursive: true });
	fs.writeFileSync(target, contents, 'utf8');
	console.log(`  ${existing ? 'updated' : 'created'} ${slug}/${file}`);
	written++;
}

const targets = GENERATED_APPS.filter((a) => !ONLY || a.slug === ONLY);
if (ONLY && !targets.length) {
	console.error(`No generated app with slug "${ONLY}". Known: ${GENERATED_APPS.map((a) => a.slug).join(', ')}`);
	process.exit(1);
}

console.log(`Building companion pages for ${targets.length} app(s)${DRY ? ' (dry run)' : ''}\n`);
for (const app of targets) {
	console.log(`${app.name} → /${app.slug}/`);
	emit(app.slug, 'index.html', landing(app));
	emit(app.slug, 'privacy.html', docShell(app, { current: 'privacy', title: `Privacy Policy — ${app.name}`, heading: 'Privacy Policy', body: privacyBody(app) }));
	emit(app.slug, 'terms.html', docShell(app, { current: 'terms', title: `Terms of Use — ${app.name}`, heading: 'Terms of Use', body: termsBody(app) }));
	emit(app.slug, 'support.html', docShell(app, { current: 'support', title: `Support — ${app.name}`, heading: 'Support', body: supportBody(app) }));
}

console.log(`\n${written} file(s) ${DRY ? 'would change' : 'written'}, ${unchanged} unchanged.`);
console.log(`Hand-authored, left untouched: ${APPS.filter((a) => !a.generated).map((a) => a.slug).join(', ') || 'none'}`);
