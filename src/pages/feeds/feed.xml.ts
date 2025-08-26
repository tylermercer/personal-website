import rss from '@astrojs/rss';

import metadata from '@content/_metadata';
import combineDescriptionItems from '@utils/combineDescriptionItems';
import filterOutDraftsIfProduction from "@utils/filterOutDraftsIfProduction";
import getPostDate from "@utils/getPostDate";
import renderMarkdown from "@utils/renderMarkdown";
import sortByDate from "@utils/sortByDate";
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async (context) => {
    const blog = sortByDate(filterOutDraftsIfProduction(await getCollection('posts')));
    return rss({
        title: metadata.title,
        description: combineDescriptionItems(metadata.descriptionItems),
        site: context.site,
        items: await Promise.all(blog.map(async (post) => ({
            title: post.data.title,
            pubDate: getPostDate(post),
            description: post.data.description,
            link: post.data.externalLink || `/posts/${post.slug}/`,
            content: !post.data.externalLink ? await renderMarkdown(post.body) : undefined,
        }))),
        customData: `<language>${metadata.language}</language>`,
    });
}
