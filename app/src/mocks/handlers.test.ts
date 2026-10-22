import { http, HttpResponse, type RequestHandler } from 'msw';
import { describe, expect, it } from 'vitest';
import { collectHandlers, handlers } from './handlers';

const make = (id: string) => [http.get('/x', () => HttpResponse.json({ id }))];

describe('mock handler order', () => {
  it('keeps the order of the groups', () => {
    const a = make('a');
    const b = make('b');
    expect(collectHandlers({ m: { handlers: a } }, { m: { handlers: b } })).toEqual([...a, ...b]);
  });

  it('puts the platform/bootstrap fallback after screens and shared mocks', async () => {
    const platform = await import('../platform/bootstrap/mocks');
    const all = handlers;
    const first = Math.min(...platform.handlers.map((h) => all.indexOf(h)));
    const screenModules = import.meta.glob<{ handlers?: RequestHandler[] }>(
      ['../screens/*/mocks.ts', '../shared/**/mocks.ts'],
      { eager: true },
    );
    const last = Math.max(
      ...Object.values(screenModules).flatMap((m) => (m.handlers ?? []).map((h) => all.indexOf(h))),
    );
    expect(first).toBeGreaterThan(last);
  });
});
