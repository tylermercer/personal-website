import cloudflare from '@astrojs/cloudflare';
import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from 'astro/config';
import remarkEmdash from './src/plugins/remark/emdash';
import { jamComments } from "@jam-comments/astro/config";

import { loadEnv } from "vite";
const {
  JAM_COMMENTS_DOMAIN,
  JAM_COMMENTS_API_KEY,
  JAM_COMMENTS_ENVIRONMENT
} = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: cloudflare(),
  site: 'https://tylermercer.net',
  markdown: {
    remarkPlugins: [remarkEmdash],
  },
  integrations: [
    expressiveCode({
      themes: ['material-theme-ocean'],
      styleOverrides: {
        borderRadius: '0',
      }
    }),
    mdx(),
    jamComments({
      domain: JAM_COMMENTS_DOMAIN,
      apiKey: JAM_COMMENTS_API_KEY,
      environment: JAM_COMMENTS_ENVIRONMENT,
    }),
  ],
  vite: {
    server: {
      hostname: 'tylermercer.localhost'
    },
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