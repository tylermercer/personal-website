import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

import metadata from '../../utils/metadata';
import { getCollection } from 'astro:content';
import { filterOutDraftsIfProduction, formatDateIso, getPostDate, sortByDate } from '../../utils/utils';

export async function GET(context) {
    const blog = sortByDate(filterOutDraftsIfProduction(await getCollection('posts')));
    return rss({
        title: metadata.title,
        description: metadata.description,
        site: context.site,
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: getPostDate(post),
            description: post.data.description,
            link: `/posts/${post.slug}/`,
            content: sanitizeHtml(parser.render(post.body)),
        })),
        customData: `<language>${metadata.language}</language>`,
        stylesheet: '/rss/styles.xsl',
    });
}