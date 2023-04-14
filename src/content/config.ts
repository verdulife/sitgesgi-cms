import { defineCollection, z } from "astro:content";

const post = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    image: z.string().optional(),
  }),
});

const cover = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string(),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
  }),
});

const highlight = defineCollection({
  schema: z.object({
    title: z.string(),
    link: z.string(),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
  }),
});

const member = defineCollection({
  schema: z.object({
    image: z.string(),
    title: z.string(),
    number: z.number(),
    description: z.string(),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
  }),
});

export const collections = { post, cover, highlight, member };
