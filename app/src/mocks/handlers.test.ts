import { http, HttpResponse, type RequestHandler } from 'msw';
import { describe, expect, it } from 'vitest';
import { collectHandlers, handlers } from './handlers';

const make = (id: string) => [http.get('/x', () => HttpResponse.json({ id }))];

type MockModules = Record<string, { handlers?: RequestHandler[] }>;

/** The positions of the handlers of some mock modules in the joined list. */
const positions = (modules: MockModules): number[] =>
  Object.values(modules).flatMap((m) => (m.handlers ?? []).map((h) => handlers.indexOf(h)));

describe('mock handler order', () => {
  it('keeps the order of the groups', () => {
    const a = make('a');
    const b = make('b');
    expect(collectHandlers({ m: { handlers: a } }, { m: { handlers: b } })).toEqual([...a, ...b]);
  });

  it('puts the container mocks after the page mocks and before the shared mocks', () => {
    const pagesAndScreens = import.meta.glob<{ handlers?: RequestHandler[] }>('../pages/*/mocks.ts', { eager: true });
    const containers = import.meta.glob<{ handlers?: RequestHandler[] }>('../containers/*/mocks.ts', { eager: true });
    const shared = import.meta.glob<{ handlers?: RequestHandler[] }>('./modules/**/mocks.ts', { eager: true });
    const own = positions(containers);
    expect(own.length).toBeGreaterThan(0);
    expect(own).not.toContain(-1);
    expect(Math.min(...own)).toBeGreaterThan(Math.max(...positions(pagesAndScreens)));
    expect(Math.max(...own)).toBeLessThan(Math.min(...positions(shared)));
  });

  it('puts the platform/bootstrap fallback after pages, containers and shared mocks', async () => {
    const platform = await import('../platform/bootstrap/mocks');
    const all = handlers;
    const first = Math.min(...platform.handlers.map((h) => all.indexOf(h)));
    const screenModules = import.meta.glob<{ handlers?: RequestHandler[] }>(
      ['../pages/*/mocks.ts', '../containers/*/mocks.ts', './modules/**/mocks.ts', '../components/**/mocks.ts'],
      { eager: true },
    );
    const last = Math.max(...positions(screenModules));
    expect(first).toBeGreaterThan(last);
  });
});
