import { defineConfig } from 'astro/config';
import remarkFootnote from 'remark-footnotes';
import remarkEmdash from './src/plugins/remark/emdash';
import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: 'https://tylermercer.net',
  markdown: {
    remarkPlugins: [[remarkFootnote, {
      inlineNotes: true
    }], remarkEmdash],
  },
  integrations: [expressiveCode(), mdx()],
  vite: {
    plugins: [rawFonts(['.woff'])]
  }
});
function rawFonts(ext) {
  return {
    name: 'vite-plugin-raw-fonts',
    transform(_, id) {
      if (ext.some(e => id.endsWith(e))) {
        const buffer = fs.readFileSync(id);
        return {
          code: `export default Buffer.from(${JSON.stringify(buffer)})`,
          map: null
        };
      }
    }
  };
}