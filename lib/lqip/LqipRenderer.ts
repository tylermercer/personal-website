import { generateCacheKey, type IBufferCacheProvider } from "../cache/BufferCache";
import sharp from "sharp";

export default class LqipRenderer {
    constructor(private readonly cache: IBufferCacheProvider) {}

    private async assetToBase64Webp(file: string) {

        const base64Image = (await cache.getOrCreate(await generateCacheKey({ file }), async () => {
            return Buffer.from((await sharp(file)
                .resize(16)
                .webp()
                .toBuffer())
                .toString('base64'));
        })).toString();
    
        return `data:image/webp;base64,${base64Image}`
    }
    
    public async getLqipStyles(imagePath: string) {
        const webpImage = await this.assetToBase64Webp(imagePath);
    return `
        color: transparent;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('data:image/svg+xml;charset=utf-8,\
            <svg xmlns="http://www.w3.org/2000/svg">\
                <filter id="b" color-interpolation-filters="sRGB">\
                    <feGaussianBlur stdDeviation="20"/>\
                    <feComponentTransfer>\
                        <feFuncA type="discrete" tableValues="1 1"/>\
                    </feComponentTransfer>\
                </filter>\
                <g filter="url(%23b)">\
                    <image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="${webpImage}"/>\
                </g>\
            </svg>');
    `;
    }
}

