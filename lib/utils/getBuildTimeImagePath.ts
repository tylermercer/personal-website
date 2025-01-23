import fs from 'fs';
import path from 'path';

const assetsBasePath = path.resolve(process.cwd(), 'src', 'assets');

// Create a map of filenames to directories
const filenameToDirMap: Map<string, string> = new Map();

function addFilenameToDirMap(filename: string, dir: string) {
    if (filenameToDirMap.has(filename)) {
        throw new Error(`Duplicate filename: ${filename}, cannot auto-detect directory.`);
    }
    filenameToDirMap.set(filename, dir);
}

// Populate the map by scanning the assets directory, including root files
function initializeFilenameToDirMap() {
    // Process files in the root of the assets directory
    const rootFiles = fs.readdirSync(assetsBasePath, { withFileTypes: true })
        .filter(dirent => dirent.isFile())
        .map(dirent => dirent.name);

    for (const file of rootFiles) {
        const [filename] = file.split('.');
        addFilenameToDirMap(filename!, ""); // Root files get an empty string for the directory
    }

    // Process subdirectories
    const directories = fs.readdirSync(assetsBasePath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    for (const dir of directories) {
        const dirPath = path.join(assetsBasePath, dir);
        const files = fs.readdirSync(dirPath, { withFileTypes: true })
            .filter(dirent => dirent.isFile())
            .map(dirent => dirent.name);

        for (const file of files) {
            const [filename] = file.split('.');
            addFilenameToDirMap(filename!, dir); // Subdirectory files map to their directory name
        }
    }
}

// Initialize the map when the module is loaded
initializeFilenameToDirMap();

export default function getBuildTimeImagePath({ src }: { src: string }, imageDir?: string | undefined): string {
    const parts = src.split('/').pop()!.split('?')[0]!.split('.');

    const filename = parts.at(0)!;
    const ext = parts.at(-1)!;

    const dir = imageDir ?? filenameToDirMap.get(filename);

    if (dir == null) {
        throw new Error(`Directory for file "${filename}" not found.`);
    }

    return path.resolve(assetsBasePath, dir, `${filename}.${ext}`);
}
