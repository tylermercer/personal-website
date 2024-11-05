import rss from '@astrojs/rss';

import metadata from '../../../content/_metadata';
import { getCollection } from 'astro:content';
import combineDescriptionItems from '../../../utils/combineDescriptionItems';
import getPostDate from "../../../utils/getPostDate";
import renderMarkdown from "../../../utils/renderMarkdown";
import sortByDate from "../../../utils/sortByDate";
import type { APIRoute } from 'astro';
import isDraft from '../../../utils/isDraft';

const error = (status: number, message: string) => new Response(JSON.stringify({
    error: message,
}), {
    status
});

export const prerender = false;

export const GET: APIRoute = async (context) => {
    const expectedApiKey = context.locals.runtime.env.INNERHELM_SYNDICATION_API_KEY;

    const apiKey = context.request.headers.get('X-API-Key');

    if (!apiKey) {
        return error(401, 'No API Key provided');
    }
    if (apiKey !== expectedApiKey || !expectedApiKey) {
        console.error(`Expected valid apiKey but got ${apiKey.substring(0, 10)}`);
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
            content: await renderMarkdown(post.body),
            categories: isDraft(post) ? ['draft'] : [],
        }))),
        customData: `<language>${metadata.language}</language>`,
    });
} 
