import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';
import footnote from 'markdown-it-footnote';

const parser = new MarkdownIt({
    html: true,
    typographer: true
}).use(anchor, {
    permalink: anchor.permalink.headerLink({
        safariReaderFix: true
    })
}).use(footnote);

export default function renderMarkdown(markdown: string) {
    return sanitizeHtml(parser.render(markdown));
}
