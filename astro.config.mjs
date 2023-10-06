import { defineConfig } from 'astro/config';
import remarkFootnote from 'remark-footnotes';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://tylermercer.net',
  markdown: {
    remarkPlugins: [[remarkFootnote, {
      inlineNotes: true
    }]]
  },
  integrations: [mdx()]
});