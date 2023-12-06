import { marked } from 'marked';

export default function renderInlineMarkdown(markdown: string) {
    return marked.parseInline(markdown);
}