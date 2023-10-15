import type { APIRoute } from "astro";
import { renderImage } from "./_renderImage";
import allPostsCategory from "../../utils/allPostsCategory";

export const GET: APIRoute = async () => {
    return await renderImage({
        ...allPostsCategory.data,
        growTitleBox: true
    });
}