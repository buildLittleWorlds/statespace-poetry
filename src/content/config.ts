import { defineCollection, z } from 'astro:content';

const poemCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    relatedEssay: z.string().optional(),
    date: z.date().optional(),
    summary: z.string().optional(), // Add this if you want to use the summary field
  }),
});

const essayCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    relatedPoem: z.string().optional(),
    date: z.date().optional(), // Add this line
  }),
});

export const collections = {
  'poems': poemCollection,
  'essays': essayCollection,
};