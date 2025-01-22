import { promises as fs } from 'fs';
import * as path from 'path';
import crypto from "crypto";

interface GenerateCacheKeyOptions {
    prefix?: string;
    suffix?: string;
}

export interface IBufferCacheProvider {
    get(key: string): Promise<Buffer>;
    getOrCreate(key: string, valueFactory: () => Promise<Buffer> | Buffer): Promise<Buffer>;
    has(key: string): Promise<boolean>;
    set(key: string, value: Buffer): Promise<void>;
    delete(key: string): Promise<void>;
}

export interface IBufferCacheAdapter {
    isValidNamespace(namespace: string): boolean;
    isValidKey(key: string): boolean;
    get(namespace: string, key: string): Promise<Buffer>;
    has(namespace: string, key: string): Promise<boolean>;
    set(namespace: string, key: string, value: Buffer): Promise<void>;
    delete(namespace: string, key: string): Promise<void>;
}

class FileSystemBufferCacheAdapter implements IBufferCacheAdapter {
    constructor(private basePath: string) { }

    private getFilePath(namespace: string, key: string): string {
        return path.join(this.basePath, namespace, `${key}.cache`);
    }

    async ensureDirectoryExists(directory: string): Promise<void> {
        try {
            await fs.mkdir(directory, { recursive: true });
        } catch (error) {
            if ((error as any).code !== 'EEXIST') throw error;
        }
    }

    isValidNamespace(namespace: string): boolean {
        return typeof namespace === "string" && namespace.length > 0;
    }

    isValidKey(key: string): boolean {
        return typeof key === "string" && key.length > 0;
    }

    async get(namespace: string, key: string): Promise<Buffer> {
        const filePath = this.getFilePath(namespace, key);
        try {
            return await fs.readFile(filePath);
        } catch (error) {
            if ((error as any).code === 'ENOENT') return Buffer.from('');
            throw error;
        }
    }

    async has(namespace: string, key: string): Promise<boolean> {
        const filePath = this.getFilePath(namespace, key);
        try {
            await fs.access(filePath);
            return true;
        } catch (error) {
            return false;
        }
    }

    async set(namespace: string, key: string, value: Buffer): Promise<void> {
        const filePath = this.getFilePath(namespace, key);
        await this.ensureDirectoryExists(path.dirname(filePath));
        await fs.writeFile(filePath, Buffer.from(value as unknown as ArrayBuffer) as unknown as string);
    }

    async delete(namespace: string, key: string): Promise<void> {
        const filePath = this.getFilePath(namespace, key);
        try {
            await fs.unlink(filePath);
        } catch (error) {
            if ((error as any).code !== 'ENOENT') throw error;
        }
    }
}

class BufferCacheProvider implements IBufferCacheProvider {
    constructor(private namespace: string, private cacheAdapter: FileSystemBufferCacheAdapter) { }

    async get(key: string): Promise<Buffer> {
        const value = await this.cacheAdapter.get(this.namespace, key);
        return value as Buffer;
    }

    async getOrCreate(key: string, valueFactory: () => Promise<Buffer> | Buffer): Promise<Buffer> {
        if (await this.has(key)) {
            return this.get(key);
        }
        const value = await valueFactory();
        await this.set(key, value);
        return value;
    }

    async has(key: string): Promise<boolean> {
        return this.cacheAdapter.has(this.namespace, key);
    }

    async set(key: string, value: Buffer): Promise<void> {
        const valueToCache = value instanceof Buffer ? value : Buffer.from(JSON.stringify(value));
        await this.cacheAdapter.set(this.namespace, key, valueToCache);
    }

    async delete(key: string): Promise<void> {
        await this.cacheAdapter.delete(this.namespace, key);
    }
}

export function getCache(namespace: string, basePath: string): BufferCacheProvider {
    const adapter = new FileSystemBufferCacheAdapter(basePath);
    return new BufferCacheProvider(namespace, adapter);
}


export async function generateCacheKey<T extends object>(
    sourceObj: T,
    options?: GenerateCacheKeyOptions,
): Promise<string> {
    const jsonString = JSON.stringify(sourceObj);
    const hash = crypto.createHash('sha256').update(jsonString).digest('hex');
    return `${options?.prefix ? (options.prefix + '-') : ''}${hash}${options?.suffix ? ('-' + options.suffix) : ''}`;
}