import { type CollectionEntry } from "astro:content";
import isDraft from "./isDraft";

export default function filterOutDraftsIfProduction(entries: CollectionEntry<'posts'>[]): CollectionEntry<'posts'>[] {
    const isProduction = (true || import.meta.env.MODE === 'production');
    if (!isProduction) return entries;
    const filtered = entries.filter(
        (e: CollectionEntry<'posts'>) => !isDraft(e)
    );
    const startsWithHyphen = filtered.map(e => e.slug.split('/').reverse()[0]).filter(slug => slug.startsWith('-'));
    if (startsWithHyphen.length) {
        throw new Error(`One or more posts have slugs that start with hyphens: ${startsWithHyphen.join(', ')}`);
    }
    return filtered;
}
