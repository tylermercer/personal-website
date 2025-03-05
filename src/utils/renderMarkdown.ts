
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkEmdash from 'lib/plugins/remark/emdash';
import remarkGfm from 'remark-gfm';


const md = remark()
    .use(remarkGfm)
    .use(remarkEmdash as any)
    .use(remarkRehype)
    .use(rehypeStringify);

export default async function renderMarkdown(markdown: string): Promise<string> {
    return String(await md.process(markdown));
}