// define the collection for the application
import { file } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

// configure the collection
const books = defineCollection({
  // loader property - a function to load the data source
  // file: loads data from a single file
  // glob: loads data from multiple files
  loader: file("src/content/books.json"),

  // schema property - defines how the data should look (zod)
  // this field is optional
  // use it to ensure type safety and initiate intellisense
  // this z object represents how the data object in the json file should be structured
  schema: z.object({
    id: z.string(), // required to be text
    title: z.string(), // required to be text
    author: z.string(), // required to be text
    rating: z.number(), // required to be a number
    summary: z.string(), // required to be text
    // finished: z.boolean().optional(), // optional true/false
  }),
});

// export the collection
// must export for each collection defined in this file
export const collections = { books };
