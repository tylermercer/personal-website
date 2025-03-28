import { getFileSystemBufferCache } from "../../../../lib/cache/BufferCache";
import OgImageRenderer from "../../../../lib/og-image/OgImageRenderer";
import OgImage from "./OgImage.astro";
import faustina from '@fontsource/faustina/files/faustina-latin-400-normal.woff';
import figtree from '@fontsource/figtree/files/figtree-latin-700-normal.woff';

const renderer = new OgImageRenderer(getFileSystemBufferCache('og-images', './assets-cache/'), {
    component: OgImage,
    keySlug: "og",
    dimensions: { width: 1200, height: 630 },
    fonts: [
        {
            name: 'Figtree',
            data: figtree as unknown as Buffer,
            weight: 700,
            style: 'normal',
        },
        {
            name: 'Faustina',
            data: faustina as unknown as Buffer,
            weight: 400,
            style: 'normal',
        },
        {
            name: 'Faustina',
            data: faustina as unknown as Buffer,
            weight: 300,
            style: 'normal',
        },
    ],
    images: {},
});

export default renderer;