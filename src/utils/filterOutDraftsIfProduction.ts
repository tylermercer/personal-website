import { type CollectionEntry } from "astro:content";
import isDraft from "./isDraft";

export default function filterOutDraftsIfProduction(entries: CollectionEntry<'posts'>[]): CollectionEntry<'posts'>[] {
    const isProduction = (import.meta.env.MODE === 'production');
    if (!isProduction) return entries;
    return entries.filter(
        (e: CollectionEntry<'posts'>) => !isDraft(e)
    );
}
