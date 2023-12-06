import metadata from '../../content/_metadata';
import { getCollection } from 'astro:content';
import formatDateIso from '../../utils/formatDateIso';
import getPostDate from "../../utils/getPostDate";
import sortByDate from "../../utils/sortByDate";
import filterOutDraftsIfProduction from "../../utils/filterOutDraftsIfProduction";
import getCategory from "../../utils/getCategory";
import renderMarkdown from "../../utils/renderMarkdown";

export async function GET(context) {
    const blog = sortByDate(filterOutDraftsIfProduction(await getCollection('posts')));

    const items = (await Promise.all(blog.map(async (post) => ({
        id: `${context.site}posts/${post.slug}/`,
        url: `${context.site}posts/${post.slug}/`,
        title: post.data.title,
        content_html: renderMarkdown(post.body),
        date_published: formatDateIso(getPostDate(post)),
        category: (await getCategory(post))?.id ?? "uncategorized"
    }))));

    return new Response(
        JSON.stringify({
            version: "https://jsonfeed.org/version/1.1",
            title: metadata.title,
            home_page_url: context.site,
            feed_url: context.url,
            description: metadata.description,
            author: metadata.author,
            items,
        }));
}