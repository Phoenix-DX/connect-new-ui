import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import type { BrowserContext, Page } from 'playwright';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { MANIFEST_PATH } from '../pwa';
import { NOT_FOUND_TITLE } from '../unknownPaths';
import { APP_DIR, DEMO_ARGS, DEMO_ENV, PRODUCTION_ENV, viteBuild } from '../viteBuild';
import {
  cachedUrls,
  freePort,
  openProfile,
  pageOf,
  pngSize,
  precacheManifest,
  previewProduction,
  readyScope,
  registrationFromWorker,
  registrations,
  serveDemo,
  type StaticServer,
} from './harness';

/* PWA e2e (ADR-9, ADR-12 / P14; guide: docs/guides/pwa.md "Testing"). Real builds in a temp folder (never dist-demo/):
   the demo build served by its own serve.mjs, a second demo build that stands for the next release, and the production
   build served by `vite preview`. Headless Chrome, one fresh persistent profile per scenario. The demo scenarios share
   one profile and run in order: first visit → offline → ping → update. Parity and captures keep blocking service
   workers; this suite is where the service worker is tested. */

const TST_MANIFEST = JSON.parse(readFileSync(join(APP_DIR, 'src/pwa/manifest.json'), 'utf8')) as {
  icons: { src: string; type: string; sizes: string }[];
};
const PING = '/UBTConnect/status/network-ping.txt';
const HOME = '/UBTConnect/HomeFeed';
/** HomeFeed's update list with at least one mock update (the demo's fictional data). */
const UPDATE_ITEM = '.home-page--update-list .ubt-update-item';
const PIN_KEY = '.ubt-pincode__button';
/** Requests a production page must never make: MSW, the mock chunks (build/mockFreeBuild.test.ts), mock files. */
const MOCK_REQUEST =
  /\/mockServiceWorker\.js|\/mock-(images|embeds)\/|\/embed\/feeds|\/assets\/(mocks|fixtures|handlers|browser|inProcess|contract|store)-[\w-]+\.js/;

const work = mkdtempSync(join(tmpdir(), 'pwa-e2e-'));
const dirs = { demo: join(work, 'demo'), demoNext: join(work, 'demo-next'), production: join(work, 'production') };
let demoPort = 0;
let demoServer: StaticServer;
let productionServer: StaticServer;
const profiles: BrowserContext[] = [];

async function profile(): Promise<BrowserContext> {
  const context = await openProfile(work);
  profiles.push(context);
  return context;
}

beforeAll(async () => {
  await Promise.all([
    viteBuild(dirs.demo, DEMO_ENV, DEMO_ARGS),
    // the next release: same sources, another build-time value inside the main bundle, so index.html, the bundle and
    // sw.js's precache revisions change as in a real new version
    viteBuild(dirs.demoNext, { ...DEMO_ENV, VITE_APP_ENV: 'demo-next-release' }, DEMO_ARGS),
    viteBuild(dirs.production, PRODUCTION_ENV),
  ]);
  demoPort = await freePort();
  [demoServer, productionServer] = await Promise.all([
    serveDemo(dirs.demo, demoPort),
    freePort().then((port) => previewProduction(dirs.production, port)),
  ]);
}, 180_000);

afterAll(async () => {
  await Promise.all(profiles.map((context) => context.close()));
  await Promise.all([demoServer.stop(), productionServer.stop()]);
  rmSync(work, { recursive: true, force: true });
}, 60_000);

/** The TST manifest at its original path, with its type, and the 4 TST icons at their sizes. */
async function expectTstManifest(origin: string): Promise<void> {
  const response = await fetch(`${origin}${MANIFEST_PATH}`);
  expect(response.status).toBe(200);
  expect(response.headers.get('content-type')).toContain('application/manifest+json');
  const served: unknown = await response.json();
  expect(served).toEqual(TST_MANIFEST);
  expect(served).toMatchObject({
    name: 'Connect 2.0',
    short_name: 'Connect 2.0',
    display: 'standalone',
    start_url: '/UBTConnect/',
    theme_color: '#1992ab',
    background_color: '#ffffff',
    orientation: 'portrait',
  });
  expect(TST_MANIFEST.icons.map((icon) => icon.sizes)).toEqual(['48x48', '96x96', '192x192', '512x512']);
  for (const icon of TST_MANIFEST.icons) {
    const image = await fetch(new URL(icon.src, `${origin}${MANIFEST_PATH}`));
    expect(image.status, icon.src).toBe(200);
    expect(image.headers.get('content-type'), icon.src).toBe('image/png');
    expect(pngSize(new Uint8Array(await image.arrayBuffer())), icon.src).toBe(icon.sizes);
  }
}

/** Chrome's own view: the linked manifest parses without error and the page is installable. */
async function expectInstallable(context: BrowserContext, page: Page, origin: string): Promise<void> {
  const cdp = await context.newCDPSession(page);
  const manifest = await cdp.send('Page.getAppManifest');
  expect(manifest.url).toBe(`${origin}${MANIFEST_PATH}`);
  expect(manifest.errors).toEqual([]);
  expect((await cdp.send('Page.getInstallabilityErrors')).installabilityErrors).toEqual([]);
  await cdp.detach();
}

async function expectHomeFeedWithMockData(page: Page): Promise<void> {
  await page.locator(UPDATE_ITEM).first().waitFor({ state: 'visible', timeout: 20_000 });
  expect(await page.locator(UPDATE_ITEM).count()).toBeGreaterThan(0);
}

function ping(page: Page): Promise<string> {
  return page.evaluate(async (path) => {
    try {
      const response = await fetch(`${path}?d=${Date.now()}`, { cache: 'no-store' });
      return `${response.status} ${(await response.text()).trim()}`;
    } catch {
      return 'failed';
    }
  }, PING);
}

const revisionOf = (dir: string, url: string): string =>
  precacheManifest(dir).find((entry) => entry.url === url)?.revision ?? '';

describe('demo build (serve.mjs, mocks in the page, app service worker at /)', () => {
  let demo: BrowserContext;
  let page: Page;

  it('registers the app service worker at scope / (one worker, no MSW) and is installable', async () => {
    demo = await profile();
    page = await pageOf(demo);
    await page.goto(`${demoServer.origin}${HOME}?latency=0`);
    expect(await readyScope(page)).toBe(`${demoServer.origin}/`);
    expect(await registrations(page)).toEqual([
      { scope: `${demoServer.origin}/`, active: `${demoServer.origin}/sw.js`, waiting: null, installing: null },
    ]);
    await expectHomeFeedWithMockData(page);
    await expectInstallable(demo, page, demoServer.origin);
  });

  it('serves the TST manifest at /UBTConnect/moduleservices/pwa/manifest; the 4 icons load', async () => {
    await expectTstManifest(demoServer.origin);
  });

  it('opens offline after one visit: a reload with the server stopped renders HomeFeed with mock data', async () => {
    // the first visit was not controlled (no clientsClaim); install finished, so the whole demo is precached
    expect(await ping(page)).toBe('200 pong');
    await demoServer.stop();
    // Playwright's offline mode does not cover the service worker's own requests: the stopped server does
    await demo.setOffline(true);
    await page.reload();
    await expectHomeFeedWithMockData(page);
    expect(await page.evaluate(() => navigator.serviceWorker.controller?.scriptURL)).toBe(`${demoServer.origin}/sw.js`);
  });

  it('never answers the network ping from a cache', async () => {
    expect(await ping(page)).toBe('failed'); // offline: no cached answer
    expect((await cachedUrls(page)).filter((url) => url.includes('network-ping'))).toEqual([]);
    expect(precacheManifest(dirs.demo).filter((entry) => entry.url.includes('network-ping'))).toEqual([]);
    demoServer = await serveDemo(dirs.demo, demoPort);
    await demo.setOffline(false);
    expect(await ping(page)).toBe('200 pong'); // through the worker to the network
    expect((await cachedUrls(page)).filter((url) => url.includes('network-ping'))).toEqual([]);
  });

  it('update: a new release installs in the background and waits (no skipWaiting) until every window is closed', async () => {
    const before = revisionOf(dirs.demo, 'index.html');
    const after = revisionOf(dirs.demoNext, 'index.html');
    expect(before).not.toBe('');
    expect(after).not.toBe(before);
    expect(readFileSync(join(dirs.demoNext, 'sw.js'), 'utf8')).not.toBe(readFileSync(join(dirs.demo, 'sw.js'), 'utf8'));

    // deploy the next release on the same origin
    await demoServer.stop();
    demoServer = await serveDemo(dirs.demoNext, demoPort);
    const origin = demoServer.origin;
    const waiting = { scope: `${origin}/`, active: `${origin}/sw.js`, waiting: `${origin}/sw.js`, installing: null };
    await page.evaluate(async () => {
      await (await navigator.serviceWorker.getRegistration())?.update();
    });
    await expect.poll(() => registrations(page), { timeout: 30_000 }).toEqual([waiting]);
    // installed beside the running version: both index.html revisions in the precache
    const installed = await cachedUrls(page);
    expect(installed).toContain(`${origin}/index.html?__WB_REVISION__=${before}`);
    expect(installed).toContain(`${origin}/index.html?__WB_REVISION__=${after}`);

    // a reload keeps the old worker: the window never closed
    await page.reload();
    await expectHomeFeedWithMockData(page);
    expect(await registrations(page)).toEqual([waiting]);

    // close every window: once the old worker is idle, the new one activates (next cold start)
    for (const open of demo.pages()) await open.close();
    await expect.poll(() => registrationFromWorker(demo), { timeout: 15_000 }).toBe('active activated, waiting no');
    // open the app again: the new worker controls it and dropped the old precache entries
    page = await demo.newPage();
    await page.goto(`${origin}${HOME}`);
    await expect
      .poll(() => registrations(page), { timeout: 15_000 })
      .toEqual([{ scope: `${origin}/`, active: `${origin}/sw.js`, waiting: null, installing: null }]);
    const activated = await cachedUrls(page);
    expect(activated).toContain(`${origin}/index.html?__WB_REVISION__=${after}`);
    expect(activated).not.toContain(`${origin}/index.html?__WB_REVISION__=${before}`);
    await expectHomeFeedWithMockData(page);
  });

  it('PIN 0223 unlocks a ?mocksession=locked session; a reload keeps the lock', async () => {
    const locked = await pageOf(await profile());
    const keys = locked.locator(`${PIN_KEY}:visible`);
    await locked.goto(`${demoServer.origin}${HOME}?mocksession=locked&latency=0`);
    await locked.waitForURL('**/UBTConnect/PINUnlock', { timeout: 20_000 });
    await expect.poll(() => keys.count(), { timeout: 10_000 }).toBe(10); // one keypad once the screen transition ends

    await locked.reload();
    await keys.first().waitFor({ timeout: 20_000 });
    expect(new URL(locked.url()).pathname).toBe('/UBTConnect/PINUnlock');
    expect(await locked.locator(UPDATE_ITEM).count()).toBe(0);

    for (const digit of '0223')
      await keys
        .filter({ hasText: new RegExp(`^${digit}$`) })
        .first()
        .click();
    await locked.waitForURL(`**${HOME}*`, { timeout: 20_000 });
    await expectHomeFeedWithMockData(locked);
    await expect.poll(() => keys.count(), { timeout: 10_000 }).toBe(0); // PINUnlock left with its transition
  });

  it('deep link signed out: a member screen opens Login with the flag; signing in returns to the link', async () => {
    const page = await pageOf(await profile());
    // a device with the mock user's PIN (the locked session sets it), then the user is signed out
    await page.goto(`${demoServer.origin}${HOME}?mocksession=locked&latency=0`);
    await page.waitForURL('**/UBTConnect/PINUnlock', { timeout: 20_000 });

    await page.goto(`${demoServer.origin}/UBTConnect/Notes?mocksession=out&latency=0`);
    await page.waitForURL(
      (url) => url.pathname === '/UBTConnect/Login' && url.searchParams.get('In_IsFromInvalidPermissions') === 'True',
      { timeout: 20_000 },
    );
    await page.getByRole('button', { name: 'Login with UBT One' }).click();
    await page.waitForURL('**/UBTConnect/Notes', { timeout: 20_000 }); // the sign-in callback kept by the route guard
  });
});

describe('production build (vite preview, no mocks, app service worker at /UBTConnect/)', () => {
  it('registers only the app service worker at scope /UBTConnect/ and never requests MSW or a mock chunk', async () => {
    const production = await profile();
    const requested: string[] = [];
    production.on('request', (request) => requested.push(request.url()));
    const page = await pageOf(production);
    const origin = productionServer.origin;
    await page.goto(`${origin}${HOME}`);
    expect(await readyScope(page)).toBe(`${origin}/UBTConnect/`);
    await page.waitForLoadState('networkidle');
    expect(await registrations(page)).toEqual([
      { scope: `${origin}/UBTConnect/`, active: `${origin}/sw.js`, waiting: null, installing: null },
    ]);
    expect(requested.length).toBeGreaterThan(0);
    expect(requested.filter((url) => MOCK_REQUEST.test(url))).toEqual([]);
    expect(await (await fetch(`${origin}/mockServiceWorker.js`)).text()).not.toContain('Mock Service Worker');
    await expectInstallable(production, page, origin);
  });

  it('serves the TST manifest at /UBTConnect/moduleservices/pwa/manifest; the 4 icons load', async () => {
    await expectTstManifest(productionServer.origin);
  });

  /* Item 9 D4 (migration/clarify/review/item9-solution.md §5.3): TST's server answers HTTP 404 with its own page, and
     the app does not load (P7). `vite preview` does the same through build/unknownPaths.ts. */
  it('first load of a path that no screen has: HTTP 404 and the TST server page, no app document', async () => {
    const page = await pageOf(await profile());
    const response = await page.goto(`${productionServer.origin}/UBTConnect/NoSuchScreen`);
    expect(response?.status()).toBe(404);
    expect(await page.title()).toBe(NOT_FOUND_TITLE);
    expect(await page.locator('body').innerText()).toContain('Server Error');
    expect(await page.locator('script').count()).toBe(0);
    // a screen path still loads the app
    expect((await page.goto(`${productionServer.origin}${HOME}`))?.status()).toBe(200);
  });
});
