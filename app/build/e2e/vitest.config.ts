import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

/* PWA e2e runner (`npm run e2e:pwa`; guide: docs/guides/pwa.md "Testing"): vitest in Node with Playwright's library,
   apart from the unit tests (the root config's jsdom setup does not apply; `npm test` does not match *.e2e.ts). */
export default defineConfig({
  root: fileURLToPath(new URL('../..', import.meta.url)),
  test: {
    include: ['build/e2e/**/*.e2e.ts'],
    environment: 'node',
    fileParallelism: false,
    testTimeout: 60_000,
    hookTimeout: 180_000,
  },
});
