import { experimental_AstroContainer } from "astro/container";
import satori, { type FontStyle, type FontWeight } from "satori";
import { html as htmlToSatori } from "satori-html";
import sharp from "sharp";
import { generateCacheKey, type IBufferCacheProvider } from "../cache/BufferCache";

interface FontOptions {
    data: Buffer | ArrayBuffer;
    name: string;
    weight?: FontWeight;
    style?: FontStyle;
    lang?: string;
}

interface Dimensions {
    width: number,
    height: number,
}

export interface Image {
    dimensions: Dimensions;
    path: string;
}

type AstroComponentFactory = Parameters<experimental_AstroContainer['renderToString']>[0]
type ContainerOptions = Parameters<experimental_AstroContainer['renderToString']>[1]

export type OgImageOptions = {
    dimensions: Dimensions;
    images: Record<string, Image>;
    fonts: FontOptions[];
    component: AstroComponentFactory,
    options: ContainerOptions,
    keySlug: string
}

export default class OgImageRenderer<T extends Partial<OgImageOptions>> {
    private readonly containerPromise: Promise<experimental_AstroContainer>;

    constructor(private readonly cache: IBufferCacheProvider, private renderOptions: T) {
        this.containerPromise = experimental_AstroContainer.create({
            streaming: false,
            renderers: []
        });
    }

    public async renderOgImage<Q extends Omit<OgImageOptions, keyof T> & Partial<OgImageOptions>>(options: Q) {
        const _options: OgImageOptions = { ...this.renderOptions, ...options } as OgImageOptions;

        const slug = _options.keySlug;

        return this.imageToResponse(await this.cache.getOrCreate(
            await generateCacheKey(_options, { prefix: slug + '-full' }),
            async () => await this.htmlToImage(await this.getHtml(_options, slug), _options.dimensions, _options.fonts)
        ));
    }

    private async getHtml(props: OgImageOptions, slug: string) {
        const componentProps = {
            ...props.options?.props,
            images: Object.fromEntries(
                await Promise.all(
                    Object.entries(props.images).map(
                        async ([key, value]) => [key, {
                            ...value,
                            path: await this.assetToDataUrl(`${slug}-${key}`, value.path, value.dimensions)
                        }]
                    )
                )
            ),
        }

        return (await (await this.containerPromise).renderToString(props.component, {
            ...props.options,
            props: componentProps
        })).replace('<!DOCTYPE html>', '');
    }

    private async htmlToImage(renderedHtml: string, dimensions: Dimensions, fonts: FontOptions[]) {
        const svg = await satori(htmlToSatori(renderedHtml), {
            width: dimensions.width,
            height: dimensions.height,
            fonts,
        });
        return await sharp(Buffer.from(svg)).png().toBuffer();
    }

    private imageToResponse(image: Buffer) {
        return new Response(image, {
            status: 200,
            headers: {
                "Content-Type": "image/png",
            },
        });
    }

    private async assetToDataUrl(slug: string, file: string, dimensions: Dimensions) {
        const base64Image = (await this.cache.getOrCreate(
            await generateCacheKey({ file }, { prefix: slug + '-thumbnail' }),
            async () => Buffer.from((await sharp(file)
                .resize(dimensions.width, dimensions.height, { fit: 'cover' })
                .jpeg({ mozjpeg: true })
                .toBuffer())
                .toString('base64'))
        )).toString();

        return `data:image/jpeg;base64,${base64Image}`
    }
}