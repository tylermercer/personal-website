import type { CollectionEntry } from "astro:content";
import slugify from "slugify";
import getLinkDate from "./getLinkDate";

export default function getLinkSlug(link: CollectionEntry<'links'>) {
    const date = getLinkDate(link.slug);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return slugify(
        `${date.getFullYear()}-${month}-${day}-${link.data.title}`,
    ).toLowerCase();
}