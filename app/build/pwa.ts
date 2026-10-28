import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import type { Connect, Plugin } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import manifest from '../src/pwa/manifest.json';
import type { BootPlan } from '../src/pwa/bootPlan';

/* Build side of the PWA (ADR-9; guide: app/docs/guides/pwa.md). */

/** Where the original serves its manifest (every capture: environment.manifestLink). index.html links it. */
export const MANIFEST_PATH = '/UBTConnect/moduleservices/pwa/manifest';
const MANIFEST_TYPE = 'application/manifest+json';

/** The TST manifest (src/pwa/manifest.json = migration/runtime-sources/UBTConnect.pwa-manifest.json) at its TST path in
    every build, mock included, so the head matches the original and installing works in the demo. Builds that register
    the app service worker also get the head tags the original does not have but installed apps need on iOS and in
    the browser chrome: theme-color and apple-touch-icon. */
export function pwaManifest({ headTags }: { headTags: boolean }): Plugin {
  const body = JSON.stringify(manifest, null, 2) + '\n';
  const serve: Connect.NextHandleFunction = (req, res, next) => {
    if ((req.url ?? '').split('?')[0] !== MANIFEST_PATH) {
      next();
      return;
    }
    res.setHeader('Content-Type', MANIFEST_TYPE);
    res.end(body);
  };
  return {
    name: 'pwa-manifest',
    configureServer(server) {
      server.middlewares.use(serve);
    },
    configurePreviewServer(server) {
      server.middlewares.use(serve);
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: MANIFEST_PATH.slice(1), source: body });
    },
    transformIndexHtml() {
      if (!headTags) return [];
      return [
        { tag: 'meta', attrs: { name: 'theme-color', content: manifest.theme_color }, injectTo: 'head' },
        {
          tag: 'link',
          attrs: { rel: 'apple-touch-icon', href: '/UBTConnect/img/UBTConnect.AppLogo.192.png' },
          injectTo: 'head',
        },
      ];
    },
  };
}

/** Hash of the API contract (src/api/openapi.yaml) baked into the build: the forced-update hook compares it. */
export function apiContractVersion(): string {
  const yaml = readFileSync(new URL('../src/api/openapi.yaml', import.meta.url));
  return createHash('sha256').update(yaml).digest('hex').slice(0, 12);
}

/** Precache of production (table 3a): hashed bundles, index.html, the original per-screen CSS and the fonts that
    current browsers load (eot and SVG fonts are for old browsers outside stack `browsers`). */
const PRODUCTION_PRECACHE = [
  'index.html',
  'assets/**/*',
  'UBTConnect/css/**/*.css',
  'UBTConnect/*.{woff,woff2,ttf,otf}',
  'UBTConnect/fonts/*.{woff,woff2,ttf,otf}',
  // The runtime error page: TST precaches it (pwaServiceWorker.js urlVersions, first row) and maps
  // /UBTConnect/_error.html to it, so the page opens offline (item 8 S0b Q4, user 2026-10-28).
  'UBTConnect/_error.html',
];
/** The demo precaches every file (mock data chunk, images, mock embeds) so the installed demo opens offline. */
const DEMO_PRECACHE = ['**/*'];
const NEVER_PRECACHED = [
  '**/network-ping.txt', // NetworkDetection ping: network-only, never cached (PWA-2)
  'mockServiceWorker.js',
  '404.html',
  '_redirects',
  '_headers',
  'README-demo.md',
  'serve.mjs',
  'serve.py',
  '**/*.eot',
  '**/*.map',
];

/** vite-plugin-pwa (injectManifest, src/sw/sw.ts): built only when the boot plan registers the app service worker. */
export function appServiceWorker(plan: BootPlan): Plugin[] {
  return VitePWA({
    disable: !plan.appServiceWorker,
    strategies: 'injectManifest',
    srcDir: 'src/sw',
    filename: 'sw.ts',
    injectRegister: false, // src/pwa/register.ts registers it
    manifest: false, // the TST manifest is served by pwaManifest()
    devOptions: { enabled: false },
    injectManifest: {
      rollupFormat: 'iife',
      globPatterns: plan.mocks === 'in-process' ? DEMO_PRECACHE : PRODUCTION_PRECACHE,
      globIgnores: NEVER_PRECACHED,
      maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
    },
  });
}
