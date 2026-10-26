import { http, HttpResponse } from 'msw';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { freshPage } from '@/test/testSupport';
import { server } from '@/test/setup';
import { SERVER_REQUEST_TIMEOUT, callAction, type ActionPath, type ContractModule } from './callAction';
import { CONNECTION_TIMED_OUT, CommunicationException } from '@/legacy/os/os-exceptions';

/* The OutSystems request timeout in callAction: getEffectiveTimeoutForServerCall + the request's onTimeout
   (migration/runtime-sources/OutSystems.js:17 offset 523471, :3 offsets 71295 and 74168). */

/** One endpoint of each module of the contract (src/api/openapi.yaml). */
const endpointOf: Record<ContractModule, ActionPath> = {
  Connect2_Assemble_MUI: '/api/Connect2_Assemble_MUI/AssembleSummary_List/DataActionGetAssembleEventTypes',
  Connect2_LegacyShared: '/api/Connect2_LegacyShared/ActionGetNumberUnreadMessages',
  Connect2_MyBookmarks_MUI: '/api/Connect2_MyBookmarks_MUI/ActionGetBookmarkById',
  Connect2_OrbitMobile_MUI: '/api/Connect2_OrbitMobile_MUI/ActionEventContact',
  UBTConnect: '/api/UBTConnect/ActionGet_ShareDetails',
  UBTConnect_EmbedFeed: '/api/UBTConnect_EmbedFeed/Embedded_FeedCMS/DataActionGetFeedConfig',
  UBTConnect_EmbedMyEntertaining: '/api/UBTConnect_EmbedMyEntertaining/ActionAppManager_Get_UserIdToken',
  UBTConnect_Notes_MCS: '/api/UBTConnect_Notes_MCS/ActionGet_NotePills_ByNoteCategoryIds',
  UBTConnect_Utils: '/api/UBTConnect_Utils/ActionGetSignedImagesInBulk',
  UBT_AppManager: '/api/UBT_AppManager/ActionAppManager_SynchAppContext',
};
/** callAction on a contract endpoint; inputs do not matter to the timeout. */
function call(path: ActionPath) {
  const [module = '', ...action] = path.slice('/api/'.length).split('/');
  return callAction(module as ContractModule, action.join('/'), {});
}
/** The settled state of a call, without letting a rejection go unhandled. */
function track(promise: Promise<unknown>) {
  const state: { settled: boolean; error?: unknown; value?: unknown } = { settled: false };
  promise.then(
    (value) => Object.assign(state, { settled: true, value }),
    (error: unknown) => Object.assign(state, { settled: true, error }),
  );
  return state;
}
const neverAnswer = (path: ActionPath) => http.post(path, () => new Promise<never>(() => undefined));

beforeEach(() => {
  freshPage();
  vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] });
});
afterEach(() => {
  vi.useRealTimers();
});

/* Controller.prototype.defaultTimeout of each module's compiled controller (the sources cited in api.ts):
   Connect2_Assemble_MUI.controller.js:1745 = 10, Connect2_OrbitMobile_MUI.controller.js:8742 = 10,
   UBTConnect.controller.js:18597 = 20, every other module 10. */
test('module timeouts are the compiled defaultTimeout: UBTConnect 20 s, every other module 10 s', () => {
  expect(SERVER_REQUEST_TIMEOUT).toEqual({
    Connect2_Assemble_MUI: 10,
    Connect2_LegacyShared: 10,
    Connect2_MyBookmarks_MUI: 10,
    Connect2_OrbitMobile_MUI: 10,
    UBTConnect: 20,
    UBTConnect_EmbedFeed: 10,
    UBTConnect_EmbedMyEntertaining: 10,
    UBTConnect_Notes_MCS: 10,
    UBTConnect_Utils: 10,
    UBT_AppManager: 10,
  });
});

test.each(Object.entries(endpointOf) as [ContractModule, ActionPath][])(
  '%s: a call that gets no answer times out after exactly its module timeout',
  async (module, path) => {
    server.use(neverAnswer(path));
    const state = track(call(path));
    const ms = SERVER_REQUEST_TIMEOUT[module] * 1000;
    await vi.advanceTimersByTimeAsync(ms - 1);
    expect(state.settled).toBe(false);
    await vi.advanceTimersByTimeAsync(1);
    expect(state.settled).toBe(true);
    expect(state.error).toBeInstanceOf(CommunicationException);
    expect(state.error).toMatchObject({ message: CONNECTION_TIMED_OUT, exception: 'CommunicationException' });
    expect(vi.getTimerCount()).toBe(0);
  },
);

test('the timeout raises CommunicationException "The connection has timed out", the runtime class and text', async () => {
  const path = endpointOf.UBT_AppManager;
  server.use(neverAnswer(path));
  const pending = call(path);
  const check = expect(pending).rejects.toSatisfy(
    (e: unknown) =>
      e instanceof CommunicationException &&
      e.message === 'The connection has timed out' &&
      e.name === 'CommunicationException' &&
      e.specificType === '',
  );
  await vi.advanceTimersByTimeAsync(10_000);
  await check;
});

test('a call answered before its timeout returns the answer and leaves no timer', async () => {
  const path = endpointOf.UBT_AppManager;
  server.use(
    http.post(path, async () => {
      await new Promise((resolve) => setTimeout(resolve, 9_999));
      return HttpResponse.json({ data: { isSuccess: true } });
    }),
  );
  const state = track(call(path));
  await vi.advanceTimersByTimeAsync(9_999);
  expect(state).toMatchObject({ settled: true, value: { isSuccess: true } });
  expect(state.error).toBeUndefined();
  expect(vi.getTimerCount()).toBe(0);
  // the cleared timer never fires: no late rejection
  await vi.advanceTimersByTimeAsync(30_000);
  expect(state.error).toBeUndefined();
});

test('a failed answer before the timeout keeps its own exception and leaves no timer', async () => {
  const path = endpointOf.UBTConnect;
  server.use(http.post(path, () => HttpResponse.json({ error: 'x' }, { status: 500 })));
  const state = track(call(path));
  await vi.advanceTimersByTimeAsync(0);
  expect(state.error).toMatchObject({ message: 'Request failed with status 500' });
  expect(vi.getTimerCount()).toBe(0);
});

test('the loading scenario (latency=infinite) times out like TST: app start 10 s, UBTConnect data action 20 s', async () => {
  sessionStorage.setItem('mock:mock', 'loading');
  const sync = track(callAction('UBT_AppManager', 'ActionAppManager_SynchAppContext', { EspaceName: 'UBTConnect' }));
  const data = track(call('/api/UBTConnect/BrowseCountries/DataActionGetCountriesStatistics'));
  // parity photographs the loading state about 1.5 s after load: nothing has settled yet
  await vi.advanceTimersByTimeAsync(1_500);
  expect([sync.settled, data.settled]).toEqual([false, false]);
  await vi.advanceTimersByTimeAsync(10_000 - 1_500);
  expect(sync.error).toMatchObject({ message: CONNECTION_TIMED_OUT });
  expect(data.settled).toBe(false);
  await vi.advanceTimersByTimeAsync(10_000);
  expect(data.error).toMatchObject({ message: CONNECTION_TIMED_OUT });
  // (the timers left are MSW's own 'infinite' delays, on the mock side)
});
