
import remarkEmdash from 'lib/plugins/remark/emdash';
import rehypeRewrite from 'rehype-rewrite';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';


const md = remark()
    .use(remarkGfm)
    .use(remarkEmdash as any)
    .use(remarkRehype)
    .use(rehypeRewrite, {
      rewrite: (node) => {
        if(node.type == 'element' && node.tagName == 'a' && node.properties.href!.toString().startsWith('/')) {
          node.properties.href = `https://tylermercer.net${node.properties.href}`;
        }
      }
    })
    .use(rehypeStringify);

export default async function renderMarkdown(markdown: string): Promise<string> {
    return String(await md.process(markdown));
}