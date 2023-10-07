import { getCollection } from "astro:content";
import { labelDrafts, sortByDate, filterOutDraftsIfProduction } from "../../utils/utils";


export async function getStaticPaths() {
    const posts = labelDrafts(sortByDate(filterOutDraftsIfProduction(await getCollection("posts"))));
    //TODO: get pages too, and merge
    const all = posts;
    return (all).map((entry) => ({
        params: { post: entry.slug },
        props: { entry },
    }));
}

export async function GET(context) {
    //TODO: generate images
}