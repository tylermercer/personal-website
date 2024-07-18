import { html as htmlToSatori } from "satori-html";
import satori from "satori";
import sharp from "sharp";

import styles from './_styles.css?raw';
import faustinaRaw from '@fontsource/faustina/files/faustina-latin-400-normal.woff';
import figtreeRaw from '@fontsource/figtree/files/figtree-latin-700-normal.woff';
import formatPostDate from "../../utils/formatPostDate";
import unMarkdown from "../../utils/unMarkdown";

// They already are Buffers because of the custom rawFonts Vite plugin in astro.config.js, but TS doesn't know that
const figtree = figtreeRaw as unknown as Buffer;
const faustina = faustinaRaw as unknown as Buffer;

type Options = {
    title: string,
    description: string,
    category?: string,
    growTitleBox?: boolean,
    date?: Date,
    hideDateline?: boolean,
}

const getHtml = (
    options: Options) => {

    const { title, description, growTitleBox, category, hideDateline } = options;
    const date: Date | undefined = ('date' in options) ? options.date : undefined;

    return (`
        <style>
            ${styles}
        </style>
        <div class="root">
            <div class="pattern pattern-${category || ''} ${growTitleBox ? 'grow' : ''}">
                <h1 class="title">${title}</h1>
            </div>
            <div class="bg-container ${growTitleBox ? '' : 'grow'}">
                <div class="description">${unMarkdown(description)}</div>
                ${hideDateline ? '' : `<div class="dateline">${date ? `${formatPostDate(date)} — ` : ''}Evelyn Mercer</div>` }
            </div>
        </div>
        `.trim());
}

const htmlToImage = async (renderedHtml: string) => {
    const svg = await satori(htmlToSatori(renderedHtml), {
        width: 1200,
        height: 630,
        fonts: [
            {
                name: 'Figtree',
                data: figtree,
                weight: 700,
                style: 'normal',
            },
            {
                name: 'Faustina',
                data: faustina,
                weight: 400,
                style: 'normal',
            },
            {
                name: 'Faustina',
                data: faustina,
                weight: 300,
                style: 'normal',
            },
        ],
    });

    return await sharp(Buffer.from(svg)).png().toBuffer();
}

const imageToResponse = (image: Buffer) =>
    new Response(image, {
        status: 200,
        headers: {
            "Content-Type": "image/png",
        },
    });

export async function renderImage(options: Options) {
    return imageToResponse(await htmlToImage(getHtml(options)));
}