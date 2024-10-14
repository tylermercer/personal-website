import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { experimental_AstroContainer } from "astro/container";
import { getCollection, render } from 'astro:content';
import metadata from '../../content/_metadata';
import combineDescriptionItems from '../../utils/combineDescriptionItems';
import filterOutDraftsIfProduction from "../../utils/filterOutDraftsIfProduction";
import getPostDate from "../../utils/getPostDate";
import sortByDate from "../../utils/sortByDate";

const container = await experimental_AstroContainer.create();

export const GET: APIRoute = async (context) => {
    const blog = sortByDate(filterOutDraftsIfProduction(await getCollection('posts')));
    return rss({
        title: metadata.title,
        description: combineDescriptionItems(metadata.descriptionItems),
        site: context.site!,
        items: await Promise.all(blog.map(async (post) => ({
            title: post.data.title,
            pubDate: getPostDate(post),
            description: post.data.description,
            link: `/posts/${post.slug}/`,
            content: (await container.renderToString((await render(post)).Content)).substring('<!DOCTYPE html>'.length),
        }))),
        customData: `<language>${metadata.language}</language>`,
    });
}
