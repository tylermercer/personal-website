import { defineConfig } from 'astro/config';
import remarkFootnote from 'remark-footnotes';

// https://astro.build/config
export default defineConfig({
    site: 'https://tylermercer.net',
    markdown: {
        remarkPlugins: [[remarkFootnote, {inlineNotes: true}]],
    }
});
