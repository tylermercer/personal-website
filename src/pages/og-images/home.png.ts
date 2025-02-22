import type { APIRoute } from "astro";
import renderer from "./_og-utils/renderer";
import metadata from "../../content/_metadata";
import combineDescriptionItems from "../../utils/combineDescriptionItems";

export const GET: APIRoute = async () => {
    
    const description = combineDescriptionItems(metadata.descriptionItems);

    return await renderer.renderOgImage({
        options: {
            props: {
                ...metadata,
                description, 
                hideDateline: true,
                cacheBust: 1,
            }
        }
    });
}