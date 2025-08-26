import { type CollectionEntry } from "astro:content";

export const filterOutCrossSitePosts = (entries: CollectionEntry<'posts'>[]): CollectionEntry<'posts'>[] => {
    return entries.filter(entry => !entry.data.externalLink);
}