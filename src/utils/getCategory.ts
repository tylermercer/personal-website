import { getCollection, type CollectionEntry } from "astro:content";

export default async function getCategory(entry: CollectionEntry<'posts'>): Promise<CollectionEntry<'categories'> | undefined> {
    const categories = await getCollection('categories');
    const category = entry.id.split('/').at(0);
    if (!category) return undefined;
    return categories.find(c => c.id === category);
}
