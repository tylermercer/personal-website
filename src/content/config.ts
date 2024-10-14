import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content_layer',
  loader: glob({
    pattern: "**\/*.md",
    base: "./src/content/posts",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    dropCaps: z.optional(z.boolean()),
    date: z.optional(z.date()), // no date = is draft
    featured: z.optional(z.boolean()),
    crosspostToInnerhelm: z.optional(z.boolean()),
  }),
});
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});
const categories = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  })
});

export const collections = {
  'posts': posts,
  'pages': pages,
  'categories': categories,
};