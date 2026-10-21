import { spawn, type ChildProcess } from 'node:child_process';
import { mkdtempSync, readFileSync } from 'node:fs';
import { createServer } from 'node:net';
import { join } from 'node:path';
import { chromium, type Browser, type BrowserContext, type Page } from 'playwright';
import { APP_DIR } from '../viteBuild';

/* Servers, browsers and service-worker probes of the PWA e2e (pwa.e2e.ts) and the Lighthouse run
   (../lighthouse/lighthouse.run.ts); guide: docs/guides/pwa.md "Testing". Builds come from ../viteBuild.ts. */

const VITE = join(APP_DIR, 'node_modules/vite/bin/vite.js');
const READY_PATH = '/UBTConnect/moduleservices/pwa/manifest';

/** A free TCP port on localhost (service workers and installing need localhost or HTTPS). */
export function freePort(): Promise<number> {
  return new Promise((resolvePort, reject) => {
    const server = createServer();
    server.once('error', reject);
    server.listen(0, 'localhost', () => {
      const address = server.address();
      const port = typeof address === 'object' && address !== null ? address.port : 0;
      server.close(() => {
        resolvePort(port);
      });
    });
  });
}

const pause = (ms: number) =>
  new Promise((resolveTimer) => {
    setTimeout(resolveTimer, ms);
  });

async function waitForHttp(url: string, child: ChildProcess, timeoutMs = 20_000): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (child.exitCode !== null) throw new Error(`the server for ${url} exited with code ${child.exitCode}`);
    try {
      if ((await fetch(url)).ok) return;
    } catch {
      // not listening yet
    }
    await pause(100);
  }
  throw new Error(`no answer from ${url} after ${timeoutMs} ms`);
}

export interface StaticServer {
  readonly origin: string;
  stop(): Promise<void>;
}

async function startServer(args: string[], port: number, env: NodeJS.ProcessEnv = process.env): Promise<StaticServer> {
  const origin = `http://localhost:${port}`;
  const child = spawn(process.execPath, args, { cwd: APP_DIR, env, stdio: 'ignore' });
  await waitForHttp(`${origin}${READY_PATH}`, child);
  return {
    origin,
    stop: () =>
      new Promise((resolveStop) => {
        if (child.exitCode !== null) {
          resolveStop();
          return;
        }
        child.once('exit', () => {
          resolveStop();
        });
        child.kill('SIGTERM');
      }),
  };
}

/** The demo's own zero-dependency server (build/demo/serve.mjs, copied into every demo build), as colleagues run it. */
export function serveDemo(dir: string, port: number): Promise<StaticServer> {
  return startServer([join(dir, 'serve.mjs'), String(port)], port);
}

/** `vite preview` of a production build (the app's vite.config.ts serves the manifest at its TST path). */
export function previewProduction(dir: string, port: number): Promise<StaticServer> {
  const args = [VITE, 'preview', '--outDir', dir, '--port', String(port), '--strictPort', '--host', 'localhost'];
  return startServer(args, port, { ...process.env, VITE_USE_MOCKS: 'false' });
}

/**
 * Launches with the system Google Chrome (`channel: 'chrome'`); without it, Playwright's own Chromium
 * (`npx playwright install chromium`). PWA_E2E_BROWSER=chromium forces Playwright's Chromium.
 */
async function withChrome<T>(launch: (channel: 'chrome' | undefined) => Promise<T>): Promise<T> {
  if (process.env.PWA_E2E_BROWSER !== 'chromium') {
    try {
      return await launch('chrome');
    } catch {
      // no system Chrome: try Playwright's Chromium below
    }
  }
  try {
    return await launch(undefined);
  } catch (error) {
    throw new Error('No browser. Install Google Chrome, or run `npx playwright install chromium` in app/.', {
      cause: error,
    });
  }
}

/**
 * A fresh Chrome profile. Persistent, because Playwright's default contexts are incognito, where Chrome reports the
 * installability error `in-incognito`.
 */
export function openProfile(work: string): Promise<BrowserContext> {
  const userDataDir = mkdtempSync(join(work, 'profile-'));
  const options = { viewport: { width: 390, height: 844 }, serviceWorkers: 'allow' as const };
  return withChrome((channel) => chromium.launchPersistentContext(userDataDir, { ...options, channel }));
}

/** Headless Chrome with a DevTools port, for tools that drive it over CDP themselves (Lighthouse). */
export function launchChromeForCdp(debuggingPort: number): Promise<Browser> {
  return withChrome((channel) => chromium.launch({ channel, args: [`--remote-debugging-port=${debuggingPort}`] }));
}

export async function pageOf(profile: BrowserContext): Promise<Page> {
  return profile.pages()[0] ?? (await profile.newPage());
}

export interface SwRegistrationState {
  scope: string;
  active: string | null;
  waiting: string | null;
  installing: string | null;
}

/** Every service-worker registration of the page's origin. */
export function registrations(page: Page): Promise<SwRegistrationState[]> {
  return page.evaluate(async () =>
    (await navigator.serviceWorker.getRegistrations()).map((reg) => ({
      scope: reg.scope,
      active: reg.active?.scriptURL ?? null,
      waiting: reg.waiting?.scriptURL ?? null,
      installing: reg.installing?.scriptURL ?? null,
    })),
  );
}

/** Waits for the page's registration to be active (install, so the whole precache, is done) and returns its scope. */
export function readyScope(page: Page): Promise<string> {
  return page.evaluate(async () => (await navigator.serviceWorker.ready).scope);
}

/** Every request URL in the origin's Cache Storage (precache and runtime caches). */
export function cachedUrls(page: Page): Promise<string[]> {
  return page.evaluate(async () => {
    const urls: string[] = [];
    for (const name of await caches.keys()) {
      const cache = await caches.open(name);
      for (const request of await cache.keys()) urls.push(request.url);
    }
    return urls;
  });
}

/** The registration as the service worker itself sees it, for moments without any window (all pages closed). */
export async function registrationFromWorker(context: BrowserContext): Promise<string> {
  const worker = context.serviceWorkers().at(-1);
  if (!worker) return 'no worker';
  try {
    return await worker.evaluate(() => {
      const reg = (self as unknown as { registration: ServiceWorkerRegistration }).registration;
      return `active ${reg.active?.state ?? 'none'}, waiting ${reg.waiting ? 'yes' : 'no'}`;
    });
  } catch {
    return 'worker gone';
  }
}

/** The precache manifest that vite-plugin-pwa injected into a build's sw.js. */
export function precacheManifest(dir: string): { url: string; revision: string }[] {
  const sw = readFileSync(join(dir, 'sw.js'), 'utf8');
  return [...sw.matchAll(/\{"revision":"([^"]*)","url":"([^"]+)"\}/g)].map((m) => ({
    revision: m[1] ?? '',
    url: m[2] ?? '',
  }));
}

/** Width and height from a PNG header (IHDR). */
export function pngSize(bytes: Uint8Array): string {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  return `${view.getUint32(16)}x${view.getUint32(20)}`;
}
