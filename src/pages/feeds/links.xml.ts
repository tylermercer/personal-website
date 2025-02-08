import rss from '@astrojs/rss';
import metadata from '@content/_metadata';
import getLinkDate from '@utils/getLinkDate';
import getLinkSlug from '@utils/getLinkSlug';
import renderMarkdown from "@utils/renderMarkdown";
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async (context) => {
    const links = (await getCollection('links')).sort((a, b) => (a.slug > b.slug ? -1 : 1));
    return rss({
        title: "Tyler Mercer - Links",
        description: "Links I find interesting",
        site: context.site,
        items: await Promise.all(links.map(async (link) => ({
            title: link.data.title,
            pubDate: getLinkDate(link.slug),
            link: `/links/${getLinkSlug(link)}/`,
            content: await renderMarkdown(`# [${link.data.title}](${link.data.link})\n${link.body}`),
        }))),
        customData: `<language>${metadata.language}</language>`,
    });
}
