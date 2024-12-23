import { z, defineCollection } from 'astro:content';

const posts = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string(),
    dropCaps: z.optional(z.boolean()),
    date: z.optional(z.date()), // no date = is draft
    featured: z.optional(z.boolean()),
    overrideMetaTitle: z.optional(z.string()),
    overrideMetaDescription: z.optional(z.string()),
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