import { beforeEach, describe, expect, it, vi } from 'vitest';
import { bootPlan } from './bootPlan';

const registerSpy = vi.fn(() => Promise.resolve({} as ServiceWorkerRegistration));
const constructed: { url: string; scope: string | undefined }[] = [];
vi.mock('workbox-window', () => ({
  Workbox: class {
    constructor(url: string, options?: { scope?: string }) {
      constructed.push({ url, scope: options?.scope });
    }
    register = registerSpy;
  },
}));

const {
  clearStaleServiceWorkers,
  isContractChanged,
  registerAppServiceWorker,
  staleRegistrations,
  API_CONTRACT_VERSION,
} = await import('./register');

const MOCK = bootPlan({ useMocks: true, demo: false });
const DEMO = bootPlan({ useMocks: true, demo: true });
const PRODUCTION = bootPlan({ useMocks: false, demo: false });

function registration(scriptURL: string) {
  return { active: { scriptURL }, waiting: null, installing: null, unregister: vi.fn(() => Promise.resolve(true)) };
}

beforeEach(() => {
  constructed.length = 0;
  registerSpy.mockClear();
});

describe('boot plan (P16 + demo amendment)', () => {
  it('maps the three build modes', () => {
    expect(MOCK).toEqual({ mocks: 'worker', appServiceWorker: false, swScope: '/UBTConnect/' });
    expect(DEMO).toEqual({ mocks: 'in-process', appServiceWorker: true, swScope: '/' });
    expect(PRODUCTION).toEqual({ mocks: 'none', appServiceWorker: true, swScope: '/UBTConnect/' });
  });
});

describe('registerAppServiceWorker', () => {
  it('never registers the app service worker in a mock (MSW) build', async () => {
    expect(await registerAppServiceWorker(MOCK, { isBuilt: true, supported: true })).toBe(false);
    expect(constructed).toEqual([]);
  });

  it('never registers in dev (no sw.js is served) or where service workers are missing', async () => {
    expect(await registerAppServiceWorker(PRODUCTION, { isBuilt: false, supported: true })).toBe(false);
    expect(await registerAppServiceWorker(PRODUCTION, { isBuilt: true, supported: false })).toBe(false);
    expect(constructed).toEqual([]);
  });

  it('registers /sw.js with the manifest scope in production and the root scope in the demo', async () => {
    expect(await registerAppServiceWorker(PRODUCTION, { isBuilt: true, supported: true })).toBe(true);
    expect(await registerAppServiceWorker(DEMO, { isBuilt: true, supported: true })).toBe(true);
    expect(constructed).toEqual([
      { url: '/sw.js', scope: '/UBTConnect/' },
      { url: '/sw.js', scope: '/' },
    ]);
  });

  it('degrades without an error when the registration fails', async () => {
    registerSpy.mockImplementationOnce(() => Promise.reject(new Error('insecure origin')));
    expect(await registerAppServiceWorker(PRODUCTION, { isBuilt: true, supported: true })).toBe(false);
  });
});

describe('clearStaleServiceWorkers (one service worker per scope)', () => {
  const msw = () => registration('http://localhost:5173/mockServiceWorker.js');
  const app = () => registration('http://localhost:5173/sw.js');

  it('picks the app service worker in an MSW build and MSW in the other builds', () => {
    const [m, a] = [msw(), app()];
    expect(staleRegistrations([m, a], MOCK)).toEqual([a]);
    expect(staleRegistrations([m, a], DEMO)).toEqual([m]);
    expect(staleRegistrations([m, a], PRODUCTION)).toEqual([m]);
  });

  it('unregisters a stale app service worker before MSW starts and reloads a page it controls', async () => {
    const stale = app();
    const reload = vi.fn();
    const container = {
      controller: { scriptURL: stale.active.scriptURL },
      getRegistrations: () => Promise.resolve([stale]),
    };
    expect(await clearStaleServiceWorkers(MOCK, container, reload)).toBe(true);
    expect(stale.unregister).toHaveBeenCalledOnce();
    expect(reload).toHaveBeenCalledOnce();
  });

  it('does nothing when only the expected worker is registered or service workers are missing', async () => {
    const own = msw();
    const reload = vi.fn();
    const container = { controller: null, getRegistrations: () => Promise.resolve([own]) };
    expect(await clearStaleServiceWorkers(MOCK, container, reload)).toBe(false);
    expect(await clearStaleServiceWorkers(MOCK, undefined, reload)).toBe(false);
    expect(own.unregister).not.toHaveBeenCalled();
    expect(reload).not.toHaveBeenCalled();
  });
});

describe('API contract version hook (ready, not wired)', () => {
  it('reports a change only for another non-empty version', () => {
    expect(API_CONTRACT_VERSION).toMatch(/^[0-9a-f]{12}$/);
    expect(isContractChanged(API_CONTRACT_VERSION)).toBe(false);
    expect(isContractChanged(null)).toBe(false);
    expect(isContractChanged('')).toBe(false);
    expect(isContractChanged('0123456789ab' === API_CONTRACT_VERSION ? 'ffffffffffff' : '0123456789ab')).toBe(true);
  });
});
