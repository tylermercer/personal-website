import rss from '@astrojs/rss';

import metadata from '../../content/_metadata';
import { getCollection } from 'astro:content';
import { filterOutDraftsIfProduction, formatDateIso, getPostDate, renderMarkdown, sortByDate } from '../../utils/utils';

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
            content: renderMarkdown(post.body),
        })),
        customData: `<language>${metadata.language}</language>`,
        stylesheet: '/rss/styles.xsl',
    });
}