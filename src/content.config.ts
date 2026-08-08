import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		// Plain string path (relative to /public or full URL) so /blog-images/* works
		heroImage: z.string().optional(),
	}),
});

const speaking = defineCollection({
	// Load Markdown files in the `src/content/speaking/` directory.
	loader: glob({ base: './src/content/speaking', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			event: z.string(),
			location: z.string(),
			date: z.coerce.date(),
			description: z.string(),
			eventUrl: z.string().url().optional(),
			slidesUrl: z.string().url().optional(),
			videoUrl: z.string().url().optional(),
			image: image().optional(),
			heroImage: z.string().optional(),
			tags: z.array(z.string()).optional(),
			featured: z.boolean().optional().default(false),
		}),
});

const episodes = defineCollection({
	// Load Markdown files for podcast episodes
	loader: glob({ base: './src/content/episodes', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		episodeNumber: z.number(),
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		duration: z.string(),
		spotifyUrl: z.string().url().optional(),
		appleUrl: z.string().url().optional(),
		guest: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog, speaking, episodes };
