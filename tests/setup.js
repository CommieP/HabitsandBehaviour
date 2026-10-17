import '@testing-library/jest-dom/vitest';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);
if (typeof window !== 'undefined') {
    window.scrollTo = vi.fn();
    // jsdom cannot render canvas text; browser checks cover visual accessibility.
    window.HTMLCanvasElement.prototype.getContext = () => null;
}
