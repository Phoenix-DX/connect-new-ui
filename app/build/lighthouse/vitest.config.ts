import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

/* `npm run lighthouse` (ADR-13; guide: docs/guides/pwa.md "Lighthouse"): one vitest run in Node, so the script reuses
   the TypeScript build and server helpers of the PWA e2e. Budget misses are warnings; only a failed run fails. */
export default defineConfig({
  root: fileURLToPath(new URL('../..', import.meta.url)),
  test: {
    include: ['build/lighthouse/*.run.ts'],
    environment: 'node',
    silent: false, // the score table and the budget warnings are the output
    testTimeout: 300_000,
    hookTimeout: 180_000,
  },
});
