import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { forbiddenMockModules, KNOWN_MOCK_LEFTOVERS, MOCK_PUBLIC_FILES } from './mockFree';
import { viteBuildSync } from './viteBuild';

/* Production bundle hygiene (docs/guides/pwa.md "Build modes", ADR-9): a production build (VITE_USE_MOCKS=false) ships
   no mock chunk, no MSW code, no recorded fixture and none of public/'s mock files, and its service worker precaches no
   mock file; the plain mock build and the demo build keep them. Real `vite build` runs in a child process. */

const work = mkdtempSync(join(tmpdir(), 'mock-free-build-'));

afterAll(() => {
  rmSync(work, { recursive: true, force: true });
});

function build(name: string, env: Record<string, string>, args: string[] = []): string {
  const outDir = join(work, name);
  const run = viteBuildSync(outDir, env, args);
  expect(run.status, String(run.error ?? run.stderr)).toBe(0);
  return outDir;
}

const precacheOf = (outDir: string): string[] =>
  [...readFileSync(join(outDir, 'sw.js'), 'utf8').matchAll(/"url":"([^"]+)"/g)].map((m) => m[1] ?? '');

const scriptsOf = (outDir: string): string[] =>
  readdirSync(join(outDir, 'assets')).filter((file) => file.endsWith('.js'));

/** Chunks named after the mock modules (src/mocks/fixtures.ts, src/shell/mocks.ts, MSW's browser worker, …). */
const MOCK_CHUNK = /^(mocks|fixtures|handlers|browser|inProcess|contract|store)-[\w-]+\.js$/;
/** MSW's log prefix (msw/lib/core/utils/internal/devUtils), present wherever MSW code is bundled. */
const MSW_CODE = '[MSW]';
/** A recorded fixture (src/mocks/fixtures/**.json: module, action, screen, …) as an object literal or JSON string. */
const FIXTURE_RECORD = /["']?module["']?:[^,]{1,80},["']?action["']?:[^,]{1,160},["']?screen["']?:/;
/** src/mocks/fixtures.ts's warning text. */
const FIXTURE_LOADER = '[mock] no recorded call';
const MOCK_FILE = /mock|fixture|msw/i;
/** The storage key of the flag overrides (src/platform/flags/overrides.ts): present where `?ff=` and the flag panel are
    bundled, which only FLAG_OVERRIDES_BUILT builds do (plan v2 §3.1). */
const FLAG_OVERRIDES_CODE = 'ff:overrides';
const bundles = (outDir: string, text: string): boolean =>
  scriptsOf(outDir).some((name) => readFileSync(join(outDir, 'assets', name), 'utf8').includes(text));
/** A precached URL without the content hash of a built asset (`assets/<name>-<hash>.<ext>`): a hash can spell "msw"
    (`assets/useQuery-Bu8xmswu.js`). */
const withoutHash = (url: string): string => url.replace(/^(assets\/.+)-[\w-]{8}(\.\w+)$/, '$1$2');

describe('mock-free production build', () => {
  it('production build: no mock chunk, MSW code, fixture, flag override or mock public file, none precached', () => {
    const out = build('production', { VITE_USE_MOCKS: 'false' });
    const scripts = scriptsOf(out);
    expect(scripts.filter((file) => MOCK_CHUNK.test(file))).toEqual([]);
    for (const file of [...scripts.map((name) => join('assets', name)), 'sw.js']) {
      const code = readFileSync(join(out, file), 'utf8');
      expect(code.includes(MSW_CODE), `${file} bundles MSW`).toBe(false);
      expect(code.includes(FIXTURE_LOADER), `${file} bundles the fixture loader`).toBe(false);
      expect(FIXTURE_RECORD.test(code), `${file} bundles a recorded fixture`).toBe(false);
      expect(code.includes(FLAG_OVERRIDES_CODE), `${file} bundles the flag overrides`).toBe(false);
    }
    for (const entry of MOCK_PUBLIC_FILES) expect(existsSync(join(out, entry)), entry).toBe(false);
    expect(existsSync(join(out, 'embed/feeds/index.html'))).toBe(false);
    // public/ itself is still copied (original stylesheets and fonts)
    expect(existsSync(join(out, 'UBTConnect/Roboto-Regular.ttf'))).toBe(true);
    const urls = precacheOf(out);
    expect(urls).toContain('index.html');
    expect(urls.filter((url) => MOCK_FILE.test(withoutHash(url)))).toEqual([]);
  }, 180_000);

  it('mock build (dev mode files): MSW worker, mock embeds and mock images kept', () => {
    const out = build('mock', { VITE_USE_MOCKS: 'true', VITE_DEMO: 'false' });
    for (const entry of MOCK_PUBLIC_FILES) expect(existsSync(join(out, entry)), entry).toBe(true);
    expect(scriptsOf(out).some((file) => /^fixtures-[\w-]+\.js$/.test(file))).toBe(true);
    expect(bundles(out, FLAG_OVERRIDES_CODE)).toBe(true); // ?ff= and the flag panel
  }, 180_000);

  it('demo build: mock files kept and precached for offline use', () => {
    const out = build('demo', { VITE_USE_MOCKS: 'true', VITE_DEMO: 'true' }, ['--mode', 'demo']);
    for (const entry of MOCK_PUBLIC_FILES) expect(existsSync(join(out, entry)), entry).toBe(true);
    const urls = precacheOf(out);
    expect(urls.some((url) => /^assets\/fixtures-[\w-]+\.js$/.test(url))).toBe(true);
    expect(urls.some((url) => url.startsWith('mock-images/'))).toBe(true);
    expect(bundles(out, FLAG_OVERRIDES_CODE)).toBe(true); // ?ff= and the flag panel
  }, 180_000);
});

describe('forbiddenMockModules (the production build guard of build/mockFree.ts)', () => {
  const root = '/app';
  it('flags MSW, src/mocks, the mocks.ts of screens, blocks and the shell, and the mock identity provider', () => {
    const ids = [
      '/app/node_modules/msw/lib/core/http.mjs',
      '/app/node_modules/@mswjs/interceptors/lib/browser/index.mjs',
      '/app/src/mocks/fixtures.ts',
      '/app/src/mocks/fixtures/UBTConnect/ActionGetUserInformation.json',
      '/app/src/mocks/fictional/directory.ts',
      '/app/src/screens/HomeFeed/mocks.ts',
      '/app/src/shell/mocks.ts',
      '/app/src/shared/UBTConnect/HouseholdDetails_Block/mockData.ts',
      '/app/src/platform/auth/mockAuth.ts',
      '/app/src/platform/session/mockUser.ts',
    ];
    expect(forbiddenMockModules(ids, root)).toEqual(ids);
  });

  it('passes app code and the known leftovers', () => {
    const ids = [
      '/app/src/main.tsx',
      '/app/src/platform/session/testSession.ts',
      '/app/src/platform/auth/authProvider.ts',
      '/app/node_modules/react/index.js',
      ...KNOWN_MOCK_LEFTOVERS.map((file) => `${root}/${file}`),
    ];
    expect(forbiddenMockModules(ids, root)).toEqual([]);
  });
});
