import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // Other config options...
  content: {
    collections: [{
      name: 'poems',
      schema: 'src/content/config.ts'
    }, {
      name: 'essays',
      schema: 'src/content/config.ts'
    }]
  },
  integrations: [mdx()]
});