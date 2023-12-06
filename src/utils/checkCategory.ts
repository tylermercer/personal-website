import { type CollectionEntry } from "astro:content";

export default function checkCategory(entry: CollectionEntry<'posts'>, knownCategorySlug: string) {
    return entry.id.split('/').at(0) === knownCategorySlug;
}
