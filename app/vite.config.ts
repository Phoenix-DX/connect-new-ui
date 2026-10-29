/// <reference types="vitest/config" />
import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { bootPlan } from './src/pwa/bootPlan';
import { apiContractVersion, appServiceWorker, pwaManifest } from './build/pwa';
import { mockFreeBuild } from './build/mockFree';
import { demoHostFiles, mockFeedCms, originalImages } from './build/staticFiles';
import { unknownPaths } from './build/unknownPaths';

/* Three build modes (src/pwa/bootPlan.ts, docs/guides/pwa.md): dev and the plain mock build use MSW's worker; the
   demo build (`--mode demo`, .env.demo) answers mocks in the page and registers the app service worker, output
   dist-demo/; production (VITE_USE_MOCKS=false) has no mocks and registers the app service worker, and mockFreeBuild
   keeps every mock module and mock file out of its output. */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, import.meta.dirname, 'VITE_');
  const plan = bootPlan({ useMocks: env.VITE_USE_MOCKS !== 'false', demo: env.VITE_DEMO === 'true' });
  const demo = plan.mocks === 'in-process';
  return {
    plugins: [
      react(),
      mockFeedCms({ emit: plan.mocks !== 'none' }),
      originalImages(),
      pwaManifest({ headTags: plan.appServiceWorker }),
      ...(demo ? [demoHostFiles()] : []),
      ...(plan.mocks === 'none' ? mockFreeBuild() : []),
      appServiceWorker(plan),
      // last, after the plugins that answer their own paths: HTTP 404 for a path that no screen has (item 9 D4, P7)
      unknownPaths(),
    ],
    resolve: { alias: { '@': path.resolve(import.meta.dirname, 'src') } },
    define: { __API_CONTRACT_VERSION__: JSON.stringify(apiContractVersion()) },
    build: { outDir: demo ? 'dist-demo' : 'dist' },
    server: { port: 5173, strictPort: true },
    test: { environment: 'jsdom', setupFiles: ['./src/test/setup.ts'], css: false, restoreMocks: true },
  };
});
