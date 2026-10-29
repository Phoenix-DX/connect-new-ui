import { createElement } from 'react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { addLogSink, type LogEntry } from '@/platform/log/log';
import { lazyScreen, prepareScreen } from './screens';

/* Item 9 D5 (migration/clarify/review/item9-solution.md §6): the screen code does not load. TST: ScreenLoader calls
   loadModule without an error callback and CDNFilenameVersioning is false, so no retry (N12); requirejs.onError →
   Application.handleError opens the error page, and the load promise never settles (N13), so a later navigation does
   not advance (N4) and the first load stays empty (N5) until the document changes. */

const loads = vi.hoisted(() => ({ failing: 0, working: 0 }));

// the code of one screen fails to load (a chunk that the server does not answer)
vi.mock('@/pages/ContactUsMenu/ContactUsMenuPage', () => {
  loads.failing += 1;
  throw new Error('Failed to fetch dynamically imported module: ContactUsMenuPage.js');
});
vi.mock('@/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage', () => {
  loads.working += 1;
  return { default: () => createElement('p', null, 'AcceptPendingPolicies content') };
});

const FAILING = { pathname: '/UBTConnect/ContactUsMenu' };
const WORKING = { pathname: '/UBTConnect/AcceptPendingPolicies' };

let logs: LogEntry[] = [];
let removeSink: () => void = () => undefined;
let location: { assign: ReturnType<typeof vi.fn> };

beforeEach(() => {
  logs = [];
  removeSink = addLogSink((entry) => logs.push(entry));
  location = { assign: vi.fn() };
  vi.stubGlobal('location', location);
  vi.spyOn(console, 'error').mockImplementation(() => undefined);
});

afterEach(() => {
  removeSink();
  vi.unstubAllGlobals();
});

/** Lets the module import and the promise callbacks run. */
const settle = () => new Promise<void>((resolve) => setTimeout(resolve, 20));

describe('screen code load (screens.ts)', () => {
  test('a failed load: the error page once, the load and prepareScreen never settle, no retry (N12, N13)', async () => {
    expect(lazyScreen('ContactUsMenu')).not.toBeNull();
    const done = vi.fn();
    void prepareScreen(FAILING)?.then(done, done);
    await settle();

    expect(location.assign).toHaveBeenCalledExactlyOnceWith('/UBTConnect/_error.html');
    // showErrorPage logs the name and message of the import error (Vitest wraps the error of the module factory)
    expect(logs.filter((entry) => entry.message === 'error page')).toEqual([
      expect.objectContaining({ data: expect.objectContaining({ name: 'Error' }) as unknown }),
    ]);
    expect(done).not.toHaveBeenCalled(); // ScreenTransitionGroup does not advance (N4)

    // the component stays unloaded, so prepareScreen still gives a promise; the cached load is not started again
    const again = prepareScreen(FAILING);
    expect(again).not.toBeNull();
    void again?.then(done, done);
    await settle();
    expect(done).not.toHaveBeenCalled();
    expect(loads.failing).toBe(1);
    expect(location.assign).toHaveBeenCalledOnce();
  });

  test('a load that works: prepareScreen resolves, then the screen renders at once (null)', async () => {
    expect(lazyScreen('AcceptPendingPolicies')).not.toBeNull();
    await expect(prepareScreen(WORKING)).resolves.toBeUndefined();
    expect(prepareScreen(WORKING)).toBeNull();
    expect(loads.working).toBe(1);
    expect(location.assign).not.toHaveBeenCalled();
  });

  test('a path that shows no screen needs no preparation', () => {
    expect(prepareScreen({ pathname: '/UBTConnect/NoSuchScreen' })).toBeNull();
  });
});
