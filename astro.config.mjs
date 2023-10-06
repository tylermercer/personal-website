import { defineConfig } from 'astro/config';
import remarkFootnote from 'remark-footnotes';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://tylermercer.net',
  markdown: {
    remarkPlugins: [[remarkFootnote, {
      inlineNotes: true
    }]],
    shikiConfig: {
        // Choose from Shiki's built-in themes (or add your own)
        // https://github.com/shikijs/shiki/blob/main/docs/themes.md
        theme: 'material-theme-ocean',
        // Add custom languages
        // Note: Shiki has countless langs built-in, including .astro!
        // https://github.com/shikijs/shiki/blob/main/docs/languages.md
        langs: [],
        // Enable word wrap to prevent horizontal scrolling
        wrap: true,
    }
  },
  integrations: [mdx()]
});