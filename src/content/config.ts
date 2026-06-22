import { defineCollection, z } from 'astro:content';

const siteCollection = defineCollection({
  type: 'data',
  schema: z.object({
    domain: z.string(),
    siteName: z.string(),
    tagline: z.string(),
    heroHeadline: z.string(),
    heroSubheadline: z.string(),
    ctaEmail: z.string(),
    heroImage: z.string(),
  }),
});

export const collections = {
  site: siteCollection,
};
