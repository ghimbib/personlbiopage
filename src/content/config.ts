import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['AI Systems', 'Product Lessons', 'Personal Stories']),
    date: z.coerce.date(),
    image: z.string().optional(),
    imagePosition: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    hidden: z.boolean().default(false),
  }),
});

export const collections = { blog };
