import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_URL, PERSON, PODCAST } from '../consts';

// Full-text dump of every essay on the site, intended for LLM crawlers
// that want to ingest the canonical content without rendering HTML.

export const GET: APIRoute = async () => {
	const posts = (await getCollection('blog')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);

	const out: string[] = [];
	out.push(`# ${PERSON.name} — Complete Essays`);
	out.push('');
	out.push(`Author: ${PERSON.name} (${PERSON.jobTitle} at ${PERSON.worksFor})`);
	out.push(`Site: ${SITE_URL}`);
	out.push(`Podcast: ${PODCAST.name} — ${PODCAST.spotifyUrl}`);
	out.push(`Generated: ${new Date().toISOString().slice(0, 10)}`);
	out.push('');
	out.push('---');
	out.push('');

	for (const p of posts) {
		const date = p.data.pubDate.toISOString().slice(0, 10);
		out.push(`## ${p.data.title}`);
		out.push('');
		out.push(`Published: ${date}`);
		out.push(`URL: ${SITE_URL}/blog/${p.id}/`);
		out.push(`Description: ${p.data.description}`);
		out.push('');
		out.push(p.body || '');
		out.push('');
		out.push('---');
		out.push('');
	}

	return new Response(out.join('\n'), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
