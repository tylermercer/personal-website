import type { APIRoute } from "astro";
import { renderImage } from "./_renderImage";
import metadata from "../../utils/metadata";

export const GET: APIRoute = async () => {
    return await renderImage({
        ...metadata,
        growTitleBox: true
    });
}