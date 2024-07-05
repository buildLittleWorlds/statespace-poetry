import { defineCollection, z } from 'astro:content';

const poemCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});

const essayCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    relatedPoems: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'poems': poemCollection,
  'essays': essayCollection,
};