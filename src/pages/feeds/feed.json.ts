import metadata from '@content/_metadata';
import { getCollection } from 'astro:content';
import formatDateIso from '@utils/formatDateIso';
import getPostDate from "@utils/getPostDate";
import sortByDate from "@utils/sortByDate";
import filterOutDraftsIfProduction from "@utils/filterOutDraftsIfProduction";
import getCategory from "@utils/getCategory";
import renderMarkdown from "@utils/renderMarkdown";
import combineDescriptionItems from '@utils/combineDescriptionItems';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
    const blog = sortByDate(filterOutDraftsIfProduction(await getCollection('posts')));

    const items = (await Promise.all(blog.map(async (post) => ({
        id: `${context.site}posts/${post.slug}/`,
        url: `${context.site}posts/${post.slug}/`,
        title: post.data.title,
        content_html: await renderMarkdown(post.body),
        date_published: formatDateIso(getPostDate(post)),
        category: (await getCategory(post))?.id ?? "uncategorized"
    }))));

    return new Response(
        JSON.stringify({
            version: "https://jsonfeed.org/version/1.1",
            title: metadata.title,
            home_page_url: context.site,
            feed_url: context.url,
            description: combineDescriptionItems(metadata.descriptionItems),
            author: metadata.author,
            items,
        }));
}