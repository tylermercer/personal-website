import cloudflare from '@astrojs/cloudflare';
import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from 'astro/config';
import remarkFootnote from 'remark-footnotes';
import remarkEmdash from './src/plugins/remark/emdash';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: cloudflare(),
  site: 'https://tylermercer.net',
  markdown: {
    remarkPlugins: [[remarkFootnote, {
      inlineNotes: true
    }], remarkEmdash],
  },
  integrations: [expressiveCode({
    themes: ['material-theme-ocean'],
    styleOverrides: {
      borderRadius: '0',
    }
  }), mdx()],
  vite: {
    plugins: [rawFonts(['.woff'])],
    ssr: {
      external: [
        'markdown-it',
        'sharp',
      ]
    }
  },
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
    },
  };
}