import metadata from '@content/_metadata';
import { filterOutFutureLinksIfProduction } from '@utils/filterOutFutureLinksIfProduction';
import formatDateIso from '@utils/formatDateIso';
import getLinkDate from '@utils/getLinkDate';
import getLinkSlug from '@utils/getLinkSlug';
import renderMarkdown from "@utils/renderMarkdown";
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async (context) => {
    const links = filterOutFutureLinksIfProduction(await getCollection('links')).sort((a, b) => (a.slug > b.slug ? -1 : 1));

    return new Response(
        JSON.stringify({
            version: "https://jsonfeed.org/version/1.1",
            title: "Tyler Mercer - Links",
            description: "Links I find interesting",
            home_page_url: context.site,
            feed_url: context.url,
            author: metadata.author,
            items: (await Promise.all(links.map(async (link) => ({
                id: `${context.site}links/${getLinkSlug(link)}/`,
                url: `${context.site}links/${getLinkSlug(link)}/`,
                title: link.data.title,
                content_html: await renderMarkdown(`# [${link.data.title}](${link.data.link})\n${link.body}`),
                date_published: formatDateIso(getLinkDate(link.slug)),
            })))),
        }));
}