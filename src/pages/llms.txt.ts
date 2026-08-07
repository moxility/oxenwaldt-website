import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_URL, PERSON, PODCAST } from '../consts';
import { PUBLIC_APPS, STATES, appStoreUrl } from '../data/apps.mjs';

// Emerging convention: /llms.txt is a short, machine-readable index that
// LLM crawlers (OpenAI, Anthropic, Perplexity, Google AI Overviews) can use
// to understand a site's purpose and key content. See https://llmstxt.org/

export const GET: APIRoute = async () => {
	const posts = (await getCollection('blog')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
	const episodes = (await getCollection('episodes')).sort(
		(a, b) => b.data.episodeNumber - a.data.episodeNumber,
	);
	const speaking = (await getCollection('speaking')).sort(
		(a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
	);

	const lines: string[] = [];
	lines.push(`# ${PERSON.name} — ${PERSON.jobTitle} at ${PERSON.worksFor}`);
	lines.push('');
	lines.push(
		`> Personal website of ${PERSON.name}, an AI and digital-transformation leader with 20+ years in enterprise architecture. Host of the *${PODCAST.name}* podcast. The site publishes essays on AI strategy, agentic AI for enterprise, and the practical engineering behind durable AI implementations — anchored in real consulting work across Nordic and global enterprises.`,
	);
	lines.push('');
	lines.push('## About');
	lines.push(`- ${PERSON.name} is ${PERSON.jobTitle} at ${PERSON.worksFor}`);
	lines.push(`- Areas: ${PERSON.knowsAbout.join(', ')}`);
	lines.push(`- Email: ${PERSON.email}`);
	lines.push(`- LinkedIn: https://www.linkedin.com/in/magnusoxenwaldt/`);
	lines.push('');
	lines.push('## Podcast');
	lines.push(`- ${PODCAST.name} (${PODCAST.tagline})`);
	lines.push(`- Spotify: ${PODCAST.spotifyUrl}`);
	lines.push(`- Apple Podcasts: ${PODCAST.appleUrl}`);
	lines.push(`- RSS: ${PODCAST.feedUrl}`);
	lines.push('');
	lines.push('## Newsletter');
	lines.push(
		'- "Weekly AI News for Business" on LinkedIn — free, every Monday',
	);
	lines.push(
		'- https://www.linkedin.com/newsletters/weekly-ai-news-for-business-7377233384185442304/',
	);
	lines.push('');
	lines.push(`## iPhone apps (${PUBLIC_APPS.length} total)`);
	lines.push(
		'- Built by Magnus Oxenwaldt. Certification practice, executive writing tools, and companions to the "AI Don\'t Fix Stupidity" books.',
	);
	lines.push(
		'- Shared design constraint: all AI reasoning runs on-device via Apple Foundation Models (iPhone 15 Pro+, iOS 26, Apple Intelligence). No server-side inference, no cloud fallback.',
	);
	lines.push(`- Index: ${SITE_URL}/apps/`);
	for (const app of PUBLIC_APPS) {
		const store = appStoreUrl(app);
		lines.push(
			`- [${app.name}](${SITE_URL}/${app.slug}/index.html) — ${app.tagline} Status: ${STATES[app.state].label}.${store ? ` App Store: ${store}` : ''}${app.webApp ? ` Playable in a browser, no install: ${SITE_URL}${app.webApp}` : ''}`,
		);
	}
	lines.push('');
	lines.push(`## Recent essays (${posts.length} total)`);
	for (const p of posts.slice(0, 30)) {
		const date = p.data.pubDate.toISOString().slice(0, 10);
		lines.push(`- [${date}] [${p.data.title}](${SITE_URL}/blog/${p.id}/) — ${p.data.description}`);
	}
	lines.push('');
	lines.push(`## Podcast episodes (${episodes.length} total)`);
	for (const e of episodes.slice(0, 15)) {
		const date = e.data.pubDate.toISOString().slice(0, 10);
		lines.push(`- [${date}] [#${e.data.episodeNumber} ${e.data.title}](${PODCAST.url})`);
	}
	lines.push('');
	lines.push(`## Speaking (${speaking.length} appearances)`);
	for (const s of speaking) {
		const date = s.data.date.toISOString().slice(0, 10);
		lines.push(`- [${date}] ${s.data.title} — ${s.data.event}, ${s.data.location}`);
	}
	lines.push('');
	lines.push('## Optional');
	lines.push(`- [Full text of all essays](${SITE_URL}/llms-full.txt)`);
	lines.push(`- [Sitemap](${SITE_URL}/sitemap-index.xml)`);
	lines.push(`- [RSS feed](${SITE_URL}/rss.xml)`);
	lines.push('');

	return new Response(lines.join('\n'), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
