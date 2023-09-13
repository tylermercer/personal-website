import { z, defineCollection } from 'astro:content';

const posts = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.union([
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date()
    }),
    z.object({
      title: z.string(),
      description: z.string(),
      draft: z.boolean()
    }),
  ]),
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
    slug: z.string(),
    title: z.string(),
    description: z.string(),
  })
});

export const collections = {
  'posts': posts,
  'pages': pages,
  'categories': categories,
};