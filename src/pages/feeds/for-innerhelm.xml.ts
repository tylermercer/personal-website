import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { experimental_AstroContainer } from "astro/container";
import { getCollection, render } from 'astro:content';
import metadata from '../../content/_metadata';
import combineDescriptionItems from '../../utils/combineDescriptionItems';
import getPostDate from "../../utils/getPostDate";
import isDraft from '../../utils/isDraft';
import sortByDate from "../../utils/sortByDate";

const container = await experimental_AstroContainer.create();

const expectedApiKey = import.meta.env.INNERHELM_SYNDICATION_API_KEY;

const error = (status: number, message: string) => new Response(JSON.stringify({
    error: message,
}), {
    status
});

export const prerender = false;

export const GET: APIRoute = async (context) => {
    const apiKey = context.request.headers.get('X-API-Key');

    if (!apiKey) {
        return error(401, 'No API Key provided');
    }
    if (apiKey !== expectedApiKey || !expectedApiKey) {
        return error(403, 'Invalid API Key');
    }

    const includeDrafts = context.url.searchParams.has('includeDrafts');

    const posts = sortByDate(await getCollection(
        'posts',
        e => e.data.crosspostToInnerhelm && (includeDrafts || !isDraft(e))
    ));

    return rss({
        title: metadata.title,
        description: combineDescriptionItems(metadata.descriptionItems),
        site: context.site!,
        items: await Promise.all(posts.map(async (post) => ({
            title: post.data.title,
            pubDate: getPostDate(post),
            description: post.data.description,
            link: `/posts/${post.slug}/`,
            content: (await container.renderToString((await render(post)).Content)).substring('<!DOCTYPE html>'.length),
        }))),
        customData: `<language>${metadata.language}</language>`,
    });
} 
