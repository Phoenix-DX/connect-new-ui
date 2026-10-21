/* Navigations of the app service worker (src/sw/sw.ts): network-first with a network timeout, then the precached
   page (caching table 3a "index.html: network-first, fallback to the precached index.html"; PWA-2 auto-accepted: a 4 s
   timeout, as Workbox NetworkFirst `networkTimeoutSeconds`). Workbox's own NetworkFirst falls back to a runtime cache
   of the responses it stored; the app never stores navigations, its fallback is the precached SPA entry, so the
   strategy is this small function. Pure (no service-worker API), unit-tested in networkFirst.test.ts. */

/** Seconds a navigation waits for the network before the precached page answers (lie-fi, captive portals). */
export const NAVIGATION_NETWORK_TIMEOUT_SECONDS = 4;

/**
 * The network's answer when it comes within `timeoutMs` (any HTTP status, as NetworkFirst); otherwise, or when the
 * request fails, the fallback page. Without a fallback page: the network's answer or error, however late.
 */
export async function networkFirstWithTimeout(
  network: Promise<Response>,
  fallback: () => Promise<Response | undefined>,
  timeoutMs: number = NAVIGATION_NETWORK_TIMEOUT_SECONDS * 1000,
): Promise<Response> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timedOut = new Promise<'timeout'>((resolve) => {
    timer = setTimeout(() => {
      resolve('timeout');
    }, timeoutMs);
  });
  try {
    const first = await Promise.race([network, timedOut]);
    if (first !== 'timeout') return first;
    const page = await fallback();
    if (!page) return await network;
    network.catch(() => undefined); // a late failure has nobody to tell
    return page;
  } catch (error) {
    const page = await fallback();
    if (page) return page;
    throw error;
  } finally {
    clearTimeout(timer);
  }
}
