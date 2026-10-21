/* The app service worker (ADR-9; guide: app/docs/guides/pwa.md). Built by vite-plugin-pwa (injectManifest) only for
   builds that register it: production (VITE_USE_MOCKS=false) and the demo build. Never in dev and never in the plain
   mock build, where MSW's worker is the only service worker (P16).
   Routes follow the caching table 3a (src/pwa/swRoutes.ts, unit-tested there):
   - precache (cache-first, revisioned by Workbox): hashed bundles, index.html, the original per-screen CSS, fonts
     (the demo precaches every file, mock data chunk included, so the installed demo opens offline);
   - navigations: network-first with a 4 s network timeout (src/pwa/networkFirst.ts), then the precached index.html;
   - the network ping (`/UBTConnect/status/network-ping.txt`): network-only with `cache: "no-store"`, routed before the
     precache and dropped from the precache list (PWA-2);
   - original images: cache-first, 30 days, entry limit; other fonts: cache-first;
   - never: API (POST), /bff/*, /UBT_AppManager/*, network-ping.txt, signed URLs, other origins.
   Update: silent. No skipWaiting and no clientsClaim: a new version waits and takes over on the next cold start
   (P11, the OutSystems background upgrade). The only exception is the SKIP_WAITING message that
   src/pwa/register.ts sends when the API contract version changed (hook ready, not wired until the BFF exists). */
import { cleanupOutdatedCaches, matchPrecache, precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkOnly } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import type { WorkboxPlugin } from 'workbox-core/types';
import {
  CACHE_FONTS,
  CACHE_IMAGES,
  FONT_MAX_ENTRIES,
  IMAGE_MAX_AGE_SECONDS,
  IMAGE_MAX_ENTRIES,
  isAppNavigation,
  isCacheableAssetResponse,
  isFont,
  isNetworkPing,
  isOriginalImage,
  offlinePageFor,
  withoutNeverPrecached,
} from '../pwa/swRoutes';
import { networkFirstWithTimeout } from '../pwa/networkFirst';

declare const self: ServiceWorkerGlobalScope & { __WB_MANIFEST: (string | { url: string; revision: string | null })[] };

const origin = self.location.origin;

cleanupOutdatedCaches();
// the network ping measures connectivity: never a cache, not even the HTTP cache (first route, before the precache)
registerRoute(
  ({ request, url }) => isNetworkPing(url, request.method, origin),
  new NetworkOnly({ fetchOptions: { cache: 'no-store' } }),
);
// a precached URL is always answered from the precache
precacheAndRoute(withoutNeverPrecached(self.__WB_MANIFEST));

registerRoute(
  ({ request, url }) => request.mode === 'navigate' && isAppNavigation(url, request.method, origin),
  ({ request, url }) => networkFirstWithTimeout(fetch(request), () => matchPrecache(offlinePageFor(url, origin))),
);

const onlyRealFiles: WorkboxPlugin = {
  cacheWillUpdate: ({ response }) => Promise.resolve(isCacheableAssetResponse(response) ? response : null),
};

registerRoute(
  ({ request, url }) => isOriginalImage(url, request.method, origin),
  new CacheFirst({
    cacheName: CACHE_IMAGES,
    plugins: [
      onlyRealFiles,
      new ExpirationPlugin({
        maxAgeSeconds: IMAGE_MAX_AGE_SECONDS,
        maxEntries: IMAGE_MAX_ENTRIES,
        purgeOnQuotaError: true,
      }),
    ],
  }),
);

registerRoute(
  ({ request, url }) => isFont(url, request.method, origin),
  new CacheFirst({
    cacheName: CACHE_FONTS,
    plugins: [onlyRealFiles, new ExpirationPlugin({ maxEntries: FONT_MAX_ENTRIES, purgeOnQuotaError: true })],
  }),
);

// forced update when the API contract changed (src/pwa/register.ts reloadForContractChange); nothing else skips waiting
self.addEventListener('message', (event) => {
  const data: unknown = event.data;
  if (typeof data === 'object' && data !== null && (data as { type?: unknown }).type === 'SKIP_WAITING') {
    void self.skipWaiting();
  }
});
