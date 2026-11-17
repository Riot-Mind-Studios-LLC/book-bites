// astro unifies how you use collections no matter where the data source is behind the collections api
// each type of data can have its own sub-folder
// for md files, you dont need a unique id because the file name of each markdown file is going to be automatically used by astro as the id
// the way you access the data behind the component remains the same
// define the collection for the application
// import { file } from "astro/loaders"; // for the single json file
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders"; // for the md files

// configure the collection
const books = defineCollection({
  // loader property - a function to load the data source
  // file: loads data from a single file
  // glob: loads data from multiple files
  // loader: file("src/content/books.json"), // json collection

  // in the books folder that holds the .md files, find any file that ends in .md
  loader: glob({ base: "src/content/books", pattern: "*.md" }),

  // schema property - defines how the data should look (zod)
  // this field is optional
  // use it to ensure type safety and initiate intellisense
  // this z object represents how the data object in the json file should be structured
  schema: z.object({
    // id: z.string(), // required to be text - used for single json file
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
