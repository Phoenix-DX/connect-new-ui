/* src/mocks/fixtures.ts: serve fixtures recorded from the real app (har_to_fixtures.py) through MSW.
 *
 * In a screen's mocks.ts:
 *   import { recordedHandler } from '../../mocks/fixtures';
 *   export const handlers = [
 *     recordedHandler('App', 'Orders/DataActionGetOrders'),   // data action / aggregate: <Owner>/<Action>
 *     recordedHandler('App', 'ActionGetOrderStatus'),         // server or service action
 *   ];
 *
 * The adapter calls callAction('App', 'Orders/DataActionGetOrders', { OrderId }) with the SAME input names as the
 * OutSystems action (the owner is the screen or block that defines a data action, as in the API contract). The handler picks the recorded call whose inputs match, so a list and the detail
 * opened from it stay consistent (ids were remapped with one table).
 * Scenarios (?mock=...): real (default) = recorded data, empty = every list emptied, error = HTTP 500,
 * loading = never answers (the captured loading state). Mutations that must change what lists show: src/mocks/store.ts.
 */
import { http, HttpResponse, type RequestHandler } from 'msw';
import { emptyLists, mockDelay, scenario } from './scenario';

type Fixture = {
  module: string;
  action: string;
  screen: string | null;
  status: number;
  inputs: Record<string, unknown>;
  data: unknown;
};

const files = import.meta.glob<unknown>('./fixtures/**/*.json', { eager: true, import: 'default' });
const isFixture = (f: unknown): f is Fixture =>
  typeof f === 'object' && f !== null && !Array.isArray(f) && 'action' in f && 'module' in f; // skips index.json
const byAction = new Map<string, Fixture[]>();
for (const [, f] of Object.entries(files).sort(([a], [b]) => a.localeCompare(b))) {
  if (!isFixture(f)) continue;
  // data actions and aggregates belong to a screen or block (same-named ones differ): <Module>/<Owner>/<Action>
  const owned = /^(DataAction|ScreenDataSet|Aggregate)/.test(f.action) && f.screen;
  const key = owned ? `${f.module}/${f.screen ?? ''}/${f.action}` : `${f.module}/${f.action}`;
  byAction.set(key, [...(byAction.get(key) ?? []), f]);
}

const same = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

function pick(list: [Fixture, ...Fixture[]], sent: Record<string, unknown>): Fixture {
  const exact = list.find((f) => Object.entries(sent).every(([k, v]) => k in f.inputs && same(f.inputs[k], v)));
  if (exact) return exact;
  console.warn(
    `[mock] no recorded call for inputs ${JSON.stringify(sent)} → using the first recording. ` +
      'Record this case in the real app to get exact data.',
  );
  return list[0];
}
const recorded = (module: string, action: string): [Fixture, ...Fixture[]] | null => {
  const list = byAction.get(`${module}/${action}`) ?? [];
  return list.length ? (list as [Fixture, ...Fixture[]]) : null;
};

/* matchInputs false: the answer does not depend on the inputs (e.g. a device id that anonymisation replaced), so the
   first recording is served without the "no recorded call for inputs" warning. */
export function recordedHandler(module: string, action: string, opts: { matchInputs?: boolean } = {}): RequestHandler {
  return http.post(`/api/${module}/${action}`, async ({ request }) => {
    await mockDelay();
    const list = recorded(module, action);
    if (!list) return HttpResponse.json({ error: `no fixture for ${module}/${action}` }, { status: 501 });
    if (scenario() === 'error') return HttpResponse.json({ error: 'mock error' }, { status: 500 });
    const sent = ((await request.json().catch(() => ({}))) ?? {}) as Record<string, unknown>;
    const f = opts.matchInputs === false ? list[0] : pick(list, sent);
    const data = scenario() === 'empty' ? emptyLists(f.data) : f.data;
    return HttpResponse.json({ data }, { status: f.status >= 400 ? f.status : 200 });
  });
}

/* The recorded answer of an action (data only), e.g. to seed an in-memory collection (src/mocks/store.ts).
   The caller states the wire type: fixtureData('App', 'DataActionGetOrders') as GetOrdersWire. */
export function fixtureData(module: string, action: string, inputs: Record<string, unknown> = {}): unknown {
  const list = recorded(module, action);
  if (!list) throw new Error(`no fixture for ${module}/${action}`);
  return structuredClone(pick(list, inputs).data);
}

/* Every recorded action of a module (handy for the shell or a first smoke run). */
export const recordedHandlers = (module: string): RequestHandler[] =>
  [...byAction.keys()]
    .filter((k) => k.startsWith(`${module}/`))
    .map((k) => recordedHandler(module, k.slice(module.length + 1)));
