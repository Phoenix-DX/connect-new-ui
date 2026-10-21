/* Which requests the app service worker (src/sw/sw.ts) handles, and how: the caching table 3a decided by the user
   (migration/pwa/pwa-discussion-plan.md section 3a and 7 P3, ADR-9). Pure functions over URL and method, so the rules
   are unit-tested without a service worker; sw.ts only wires them to Workbox strategies. A request that no rule
   handles goes to the network untouched (no respondWith), which is how the "never cached" rows are kept. */

/** Manifest scope of the original (start_url `/UBTConnect/`, no `scope`: migration/runtime-sources/UBTConnect.pwa-manifest.json). */
export const APP_SCOPE = '/UBTConnect/';
/** URL of the built service worker (vite-plugin-pwa output, outDir root). */
export const SW_URL = '/sw.js';
/** The precached SPA entry that answers an app navigation when the network fails. */
export const OFFLINE_ENTRY = '/index.html';
/** The demo's static mock Feed CMS page (build/staticFiles.ts); the same page answers the feed list and every item. */
export const MOCK_FEED_PAGE = '/embed/feeds/index.html';

/** Cache names of the runtime routes (the precache has its own Workbox name). */
export const CACHE_IMAGES = 'ubtconnect-original-images';
export const CACHE_FONTS = 'ubtconnect-fonts';
/** Images: cache-first with a 30-day expiry and an entry limit (table 3a). */
export const IMAGE_MAX_AGE_SECONDS = 30 * 24 * 60 * 60;
export const IMAGE_MAX_ENTRIES = 300;
export const FONT_MAX_ENTRIES = 60;

/** The OutSystems network ping (NetworkDetection, src/shell/feedback/networkDetection.ts PING_URL): TST file `pong`,
    fetched with `cache: "no-store"` and a unique `d=<now>`. The service worker answers it network-only and never
    precaches it. */
export const NETWORK_PING_PATH = '/UBTConnect/status/network-ping.txt';

/** Paths never served from a cache: the API (`POST /api/<Module>/<Action>`, app/src/api/openapi.yaml), the future BFF,
    the B2C sign-in callback (`/UBT_AppManager/Callback`, migration/knowledge/auth.md:9-14) and the OutSystems network
    ping (`status/network-ping.txt`, fetched with `cache: "no-store"`; it measures connectivity). */
const NEVER_CACHED_PREFIXES = ['/api/', '/bff/', '/UBT_AppManager/'];
/** Query parameters of signed URLs (GetCacheableSignedPhotoURL: signed URLs expire and carry personal data). */
const SIGNATURE_PARAMS = ['sig', 'signature', 'x-amz-signature', 'token', 'se', 'expires'];

const ORIGINAL_IMAGE_PREFIXES = ['/UBTConnect/img/', '/UBT_CW/img/', '/os-assets/'];
const IMAGE_FILE = /\.(png|jpe?g|gif|svg|webp|ico)$/i;
const FONT_FILE = /\.(woff2?|ttf|otf|eot)$/i;

function isSameOrigin(url: URL, origin: string): boolean {
  return url.origin === origin;
}

/** A signed URL (photo URLs from GetCacheableSignedPhotoURL and the like): network only. */
export function isSignedUrl(url: URL): boolean {
  for (const key of url.searchParams.keys()) {
    if (SIGNATURE_PARAMS.includes(key.toLowerCase())) return true;
  }
  return false;
}

/** True for every request the service worker must leave to the network, whatever other rule would match. */
export function isNeverCached(url: URL, method: string, origin: string): boolean {
  if (method !== 'GET') return true; // API calls are POST
  if (!isSameOrigin(url, origin)) return true; // other origins (CMS embeds, signed photo hosts): not handled
  if (NEVER_CACHED_PREFIXES.some((p) => url.pathname.startsWith(p))) return true;
  if (url.pathname.endsWith('/network-ping.txt')) return true; // the ping, under any base path
  return isSignedUrl(url);
}

/** A path whose last segment has no file extension: a screen route (`/UBTConnect/HomeFeed`), not a file. */
function isRoutePath(pathname: string): boolean {
  const last = pathname.slice(pathname.lastIndexOf('/') + 1);
  return !last.includes('.');
}

/** The demo's same-origin mock Feed CMS (`/embed/feeds`, `/embed/feeds/item/<id>`; vite.config.ts mockFeedCms). */
export function isMockFeedPage(url: URL, origin: string): boolean {
  if (!isSameOrigin(url, origin)) return false;
  return /^\/embed\/feeds\/?$/.test(url.pathname) || /^\/embed\/feeds\/item\/[^/]+\/?$/.test(url.pathname);
}

/**
 * A navigation the service worker answers network-first with a precached page as the offline fallback: the app's
 * screen routes under `/UBTConnect/` (and the site root, which redirects to the home screen), plus the demo's mock
 * Feed CMS page. Files, the API, the BFF and the sign-in callback are left alone.
 */
export function isAppNavigation(url: URL, method: string, origin: string): boolean {
  if (isNeverCached(url, method, origin)) return false;
  if (isMockFeedPage(url, origin)) return true;
  const inApp = url.pathname === '/' || url.pathname === '/UBTConnect' || url.pathname.startsWith(APP_SCOPE);
  return inApp && isRoutePath(url.pathname);
}

/** The precached page that answers a navigation when the network fails. */
export function offlinePageFor(url: URL, origin: string): string {
  return isMockFeedPage(url, origin) ? MOCK_FEED_PAGE : OFFLINE_ENTRY;
}

/** Original OutSystems images (`/UBTConnect/img/*`, `/UBT_CW/img/*`, `/os-assets/*`): cache-first, 30-day expiry. */
export function isOriginalImage(url: URL, method: string, origin: string): boolean {
  if (isNeverCached(url, method, origin)) return false;
  return ORIGINAL_IMAGE_PREFIXES.some((p) => url.pathname.startsWith(p)) && IMAGE_FILE.test(url.pathname);
}

/** Same-origin font files that are not precached (precache: the formats current browsers load): cache-first. */
export function isFont(url: URL, method: string, origin: string): boolean {
  return !isNeverCached(url, method, origin) && FONT_FILE.test(url.pathname);
}

/** Only real files go into the runtime caches: a static host's SPA fallback answers a missing image or font with
    index.html (status 200), which must not stay cached for 30 days under the image's URL. */
export function isCacheableAssetResponse(response: Pick<Response, 'ok' | 'headers'>): boolean {
  return response.ok && !(response.headers.get('content-type') ?? '').startsWith('text/html');
}

/** The network ping: answered network-only with `cache: "no-store"` (route before the precache in sw.ts). */
export function isNetworkPing(url: URL, method: string, origin: string): boolean {
  return method === 'GET' && isSameOrigin(url, origin) && url.pathname.endsWith('/network-ping.txt');
}

type PrecacheEntry = string | { url: string; revision?: string | null };

/** The build's precache list without the files that must never come from a cache (the demo precaches every file of
    the output, `public/UBTConnect/status/network-ping.txt` included). */
export function withoutNeverPrecached<E extends PrecacheEntry>(entries: readonly E[]): E[] {
  return entries.filter((entry) => {
    const url = typeof entry === 'string' ? entry : entry.url;
    return !url.split('?')[0]?.endsWith('network-ping.txt');
  });
}
