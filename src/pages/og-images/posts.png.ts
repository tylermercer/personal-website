import type { APIRoute } from "astro";
import allPostsCategory from "../../content/_allPostsCategory";
import renderer from "./_og-utils/renderer";

export const GET: APIRoute = async () => {

    return await renderer.renderOgImage({
        options: {
            props: {
                ...allPostsCategory.data,
                cacheBust: 1,
            }
        }
    });
}