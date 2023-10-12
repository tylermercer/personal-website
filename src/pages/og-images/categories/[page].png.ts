import { getCollection, type CollectionEntry, getDataEntryById } from "astro:content";
import type { APIRoute } from "astro";

import { renderImage } from "../_renderImage";

export async function getStaticPaths() {
    const categories = await getCollection('categories');
    return categories.map(c => ({
        params: { page: c.id },
    }));
}

export const GET: APIRoute = async ({ params }) => {
    const page = params.page;

    const entry = await getDataEntryById('categories', page!!) as CollectionEntry<'categories'>;
    return await renderImage({
        ...entry.data,
        category: page
    });
}