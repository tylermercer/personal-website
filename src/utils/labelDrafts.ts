import { type CollectionEntry } from "astro:content";
import isDraft from "./isDraft";


export default function labelDrafts(entries: CollectionEntry<'posts'>[]): CollectionEntry<'posts'>[] {
    const label = `[Draft]`;
    return entries.map((e: CollectionEntry<'posts'>) => {
        e.data.title = (isDraft(e) && !e.data.title.startsWith(label)) ? `${label} ${e.data.title}` : e.data.title;
        return e;
    });
}
