import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = fileURLToPath(new URL('../', import.meta.url));
const sourceDir = path.join(root, 'public/assets/images');
const outputDir = path.join(sourceDir, 'optimized');
await mkdir(outputDir, { recursive: true });
const manifest = {};
for (const filename of ['intro1.jpeg', 'intro2.jpg', 'intro3.jpeg', 'intro4.jpg']) {
    const input = path.join(sourceDir, filename);
    const metadata = await sharp(input).metadata();
    const sourceWidth = metadata.autoOrient?.width ?? metadata.width;
    const widths = [...new Set([640, 1280, 1920].map(width => Math.min(width, sourceWidth)))];
    const stem = path.parse(filename).name;
    const variants = [];
    for (const width of widths) {
        const output = `${stem}-${width}.webp`;
        const info = await sharp(input).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(outputDir, output));
        variants.push({ src: `/assets/images/optimized/${output}`, width: info.width, height: info.height, bytes: info.size });
    }
    const fallback = variants.find(image => image.width >= 1280) ?? variants.at(-1);
    manifest[`/assets/images/${filename}`] = { src: fallback.src, srcSet: variants.map(image => `${image.src} ${image.width}w`).join(', '), width: fallback.width, height: fallback.height };
    console.log(`${filename}: ${variants.map(image => `${image.width}px / ${Math.round(image.bytes / 1024)} KB`).join(', ')}`);
}
await writeFile(path.join(root, 'src/Data/ImageData.json'), JSON.stringify(manifest, null, 2) + '\n');
