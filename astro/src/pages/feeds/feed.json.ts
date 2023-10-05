import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

import metadata from '../../utils/metadata';
import { getCollection } from 'astro:content';
import { filterOutDraftsIfProduction, formatDateIso, getPostDate, sortByDate } from '../../utils/utils';

export async function GET(context) {
    const blog = sortByDate(filterOutDraftsIfProduction(await getCollection('posts')));
    return new Response(
        JSON.stringify({
            version: "https://jsonfeed.org/version/1.1",
            title: metadata.title,
            home_page_url: context.site,
            feed_url: context.url,
            description: metadata.description,
            author: metadata.author,
            items: blog.map((post) => ({
                id: `${context.site}/posts/${post.slug}/`,
                url: `${context.site}/posts/${post.slug}/`,
                title: post.data.title,
                content_html: sanitizeHtml(parser.render(post.body)),
                date_published: formatDateIso(getPostDate(post)) + 'Z',
            })),
        }));
}