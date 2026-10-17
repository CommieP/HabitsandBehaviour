// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { ResearchData } from '../src/Data/ResearchProjectsData';
import { CapstoneData } from '../src/Data/CapstoneProjectsData';
import { ExperimentsData } from '../src/Data/ExperimentsData';
import images from '../src/Data/ImageData.json';

const publicDir = resolve(import.meta.dirname, '../public');

// Check exact names even on macOS's case-insensitive filesystem.
function assertExactAsset(url) {
    let dir = publicDir;
    for (const segment of decodeURIComponent(url).split('/').filter(Boolean)) {
        expect(readdirSync(dir), `${url}: missing ${segment}`).toContain(segment);
        dir = resolve(dir, segment);
    }
    return dir;
}

describe('published assets', () => {
    it('resolves every available document with exact spelling and a PDF signature', () => {
        const documents = [...ResearchData.flatMap(semester => semester.papers), ...CapstoneData].filter(paper => paper.url);
        expect(documents).toHaveLength(22);
        for (const paper of documents) expect(readFileSync(assertExactAsset(paper.url)).subarray(0, 5).toString()).toBe('%PDF-');
    });

    it('resolves every responsive image candidate', () => {
        for (const image of Object.values(images)) {
            assertExactAsset(image.src);
            for (const candidate of image.srcSet.split(', ')) assertExactAsset(candidate.split(' ')[0]);
            expect(image.width).toBeGreaterThan(0);
            expect(image.height).toBeGreaterThan(0);
        }
    });

    it('includes all experiment thumbnails locally with exact filenames', () => {
        for (const item of ExperimentsData.flatMap(section => section.items)) {
            const file = readFileSync(assertExactAsset(item.src));
            expect(file.subarray(0, 3).toString('hex')).toBe('ffd8ff');
        }
    });
});
