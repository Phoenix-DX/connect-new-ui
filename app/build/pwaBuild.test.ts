import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { APP_DIR as appDir, viteBuildSync } from './viteBuild';

/* Build check of the PWA (ADR-9, P16): a production build (VITE_USE_MOCKS=false) emits the app service worker with a
   precache manifest that holds the shell and every original per-screen stylesheet; the plain mock build emits none.
   Real `vite build` runs in a child process (the test environment is jsdom). */

const work = mkdtempSync(join(tmpdir(), 'pwa-build-'));

afterAll(() => {
  rmSync(work, { recursive: true, force: true });
});

function build(name: string, env: Record<string, string>): string {
  const outDir = join(work, name);
  const run = viteBuildSync(outDir, env);
  expect(run.status, String(run.error ?? run.stderr)).toBe(0);
  return outDir;
}

function precacheOf(outDir: string): string[] {
  const sw = readFileSync(join(outDir, 'sw.js'), 'utf8');
  return [...sw.matchAll(/"url":"([^"]+)"/g)].map((m) => m[1] ?? '');
}

describe('PWA build output', () => {
  it('production build: app service worker with the shell, original CSS and fonts precached, no mocks', () => {
    const out = build('production', { VITE_USE_MOCKS: 'false' });
    const urls = precacheOf(out);
    expect(urls).toContain('index.html');
    const originalCss = readdirSync(join(appDir, 'public/UBTConnect/css')).filter((f) => f.endsWith('.css'));
    expect(originalCss.length).toBeGreaterThan(0);
    for (const file of originalCss) expect(urls).toContain(`UBTConnect/css/${file}`);
    expect(urls.some((u) => /^assets\/index-[\w-]+\.js$/.test(u))).toBe(true);
    expect(urls).toContain('UBTConnect/Roboto-Regular.ttf');
    expect(urls.filter((u) => /mockServiceWorker|\/api\/|inProcess|handlers-|browser-/.test(u))).toEqual([]);
    // manifest and icons at the original paths, head tags of installed apps
    expect(existsSync(join(out, 'UBTConnect/moduleservices/pwa/manifest'))).toBe(true);
    expect(existsSync(join(out, 'UBTConnect/img/UBTConnect.AppLogo.512.png'))).toBe(true);
    const html = readFileSync(join(out, 'index.html'), 'utf8');
    expect(html).toContain('<link rel="manifest" href="/UBTConnect/moduleservices/pwa/manifest"');
    expect(html).toContain('name="theme-color"');
    expect(html).toContain('rel="apple-touch-icon"');
    expect(existsSync(join(out, 'embed/feeds/index.html'))).toBe(false);
  }, 180_000);

  it('mock build: no app service worker, MSW worker kept, manifest linked without the extra head tags', () => {
    const out = build('mock', { VITE_USE_MOCKS: 'true' });
    expect(existsSync(join(out, 'sw.js'))).toBe(false);
    expect(existsSync(join(out, 'mockServiceWorker.js'))).toBe(true);
    const html = readFileSync(join(out, 'index.html'), 'utf8');
    expect(html).toContain('<link rel="manifest" href="/UBTConnect/moduleservices/pwa/manifest"');
    expect(html).not.toContain('theme-color');
    expect(html).not.toContain('apple-touch-icon');
  }, 180_000);
});
