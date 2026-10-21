import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

/* The vendored TST web scanner is never edited (ADR-11, SOURCE.md): its bytes stay those fetched from TST. */
describe('vendor/barcodeplugin', () => {
  it('is the TST file, byte for byte', () => {
    // Vitest runs from app/ (jsdom: import.meta.url is not a file URL)
    const file = resolve(process.cwd(), 'src/vendor/barcodeplugin/BarcodePlugin.OSBarcodePlugin.js');
    const bytes = readFileSync(file);
    expect(bytes.length).toBe(405396);
    expect(createHash('sha256').update(bytes).digest('hex')).toBe(
      '5daff690380132a67fbd463ecb30eb2cc87ea3cfdce33744cc46a3f097a893b1',
    );
  });
});
