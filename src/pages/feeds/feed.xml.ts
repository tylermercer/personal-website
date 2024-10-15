import rss from '@astrojs/rss';

import metadata from '../../content/_metadata';
import { getCollection } from 'astro:content';
import combineDescriptionItems from '../../utils/combineDescriptionItems';
import filterOutDraftsIfProduction from "../../utils/filterOutDraftsIfProduction";
import getPostDate from "../../utils/getPostDate";
import renderMarkdown from "../../utils/renderMarkdown";
import sortByDate from "../../utils/sortByDate";

export async function GET(context) {
    const blog = sortByDate(filterOutDraftsIfProduction(await getCollection('posts')));
    return rss({
        title: metadata.title,
        description: combineDescriptionItems(metadata.descriptionItems),
        site: context.site,
        items: await Promise.all(blog.map(async (post) => ({
            title: post.data.title,
            pubDate: getPostDate(post),
            description: post.data.description,
            link: `/posts/${post.slug}/`,
            content: await renderMarkdown(post.body),
        }))),
        customData: `<language>${metadata.language}</language>`,
    });
}
