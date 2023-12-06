import { type CollectionEntry } from "astro:content";
import getPostDate from "./getPostDate";


export default function sortByDate(entries: CollectionEntry<'posts'>[]): CollectionEntry<'posts'>[] {
    return entries.sort(
        (a, b) => getPostDate(b).getTime() - getPostDate(a).getTime());
}
