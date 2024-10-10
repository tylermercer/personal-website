import cloudflare from '@astrojs/cloudflare';
import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from 'astro/config';
import remarkEmdash from './src/plugins/remark/emdash';
import { FontaineTransform } from 'fontaine';

const fontaine = FontaineTransform.vite({
  fallbacks: ['BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'Noto Sans'],
});

function rawFontsOrFontaine(ext) {
  return {
    name: 'vite-plugin-raw-fonts',
    transform(code, id) {
      if (ext.some(e => id.endsWith(e))) {
        const buffer = fs.readFileSync(id);
        return {
          code: `export default Buffer.from(${JSON.stringify(buffer)})`,
          map: null
        };
      }
      else if (!id.includes('?raw')) {
        return fontaine.transform(code, id);
      }
    },
  };
}

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: cloudflare(),
  site: 'https://tylermercer.net',
  markdown: {
    remarkPlugins: [remarkEmdash],
  },
  integrations: [expressiveCode({
    themes: ['material-theme-ocean'],
    styleOverrides: {
      borderRadius: '0',
    }
  }), mdx()],
  vite: {
    server: {
      hostname: 'tylermercer.localhost'
    },
    plugins: [
      rawFontsOrFontaine(['.woff']),
    ],
    ssr: {
      external: [
        'markdown-it',
        'sharp',
      ]
    }
  },
});
