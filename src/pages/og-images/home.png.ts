import type { APIRoute } from "astro";
import { renderImage } from "./_renderImage";
import metadata from "../../content/_metadata";
import combineDescriptionItems from "../../utils/combineDescriptionItems";

export const GET: APIRoute = async () => {
    
    const description = combineDescriptionItems(metadata.descriptionItems);

    return await renderImage({
        ...metadata,
        description, 
        growTitleBox: true,
        hideDateline: true,
    });
}