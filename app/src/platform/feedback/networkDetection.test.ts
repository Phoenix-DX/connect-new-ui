import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { networkDetection, PING_URL, startNetworkDetection } from './networkDetection';

/* NetworkDetection (ND = migration/shell/sources/NetworkDetection.controller.js; shell-facts U11). */

let stop: () => void = () => undefined;
let pingOk: boolean | 'reject' = true;
const fetchMock = vi.fn((url: RequestInfo | URL, init?: RequestInit) => {
  void url;
  void init;
  return pingOk === 'reject'
    ? Promise.reject(new TypeError('Failed to fetch'))
    : Promise.resolve(new Response('pong', { status: pingOk ? 200 : 503 }));
});
const onOnline = vi.fn();
const onOffline = vi.fn();
const href = (url: RequestInfo | URL) => (typeof url === 'string' ? url : url instanceof URL ? url.href : url.url);
const pings = () => fetchMock.mock.calls.filter(([url]) => href(url).startsWith(PING_URL));

beforeEach(() => {
  vi.useFakeTimers();
  pingOk = true;
  fetchMock.mockClear();
  onOnline.mockClear();
  onOffline.mockClear();
  vi.stubGlobal('fetch', fetchMock);
});
afterEach(() => {
  stop();
  vi.unstubAllGlobals();
  vi.useRealTimers();
  vi.restoreAllMocks();
});

const start = (extra: Parameters<typeof startNetworkDetection>[0] = {}) => {
  stop = startNetworkDetection({ onOnline, onOffline, ...extra });
};
const settle = () => vi.advanceTimersByTimeAsync(0);

describe('ping', () => {
  test('the initial check pings the TST file with cache "no-store" and a unique d=<now> (ND:700-722, 826)', async () => {
    vi.setSystemTime(1_700_000_000_000);
    start();
    await settle();
    expect(pings()).toHaveLength(1);
    const [url, init] = pings()[0] ?? [];
    expect(url).toBe('/UBTConnect/status/network-ping.txt?d=1700000000000');
    expect(init).toMatchObject({ cache: 'no-store' });
    expect(onOnline).toHaveBeenCalledTimes(1); // null → true is a transition
    expect(networkDetection()?.isOnline).toBe(true);
  });

  test('a failed or non-ok ping is offline (ok = response.ok, ND:674-690)', async () => {
    pingOk = false;
    start();
    await settle();
    expect(onOffline).toHaveBeenCalledTimes(1);
    expect(networkDetection()?.isOnline).toBe(false);
  });

  test('one shared ping: concurrent checks do not start a second request (ND:700-701)', async () => {
    start();
    const detector = networkDetection();
    const a = detector?.checkOnline();
    const b = detector?.checkOnline();
    expect(a).toBe(b);
    await settle();
    expect(pings()).toHaveLength(1);
  });

  test('the per-ping timeout aborts the request (PingTimeout, ND:666-668)', async () => {
    fetchMock.mockImplementationOnce(
      (_url, init) =>
        new Promise<Response>((_, reject) => {
          init?.signal?.addEventListener('abort', () => {
            reject(new DOMException('aborted', 'AbortError'));
          });
        }),
    );
    start({ pingTimeout: 5_000 });
    await vi.advanceTimersByTimeAsync(5_000);
    expect(onOffline).toHaveBeenCalledTimes(1);
  });
});

describe('timer and events', () => {
  test('checks every 30 s while visible, skips the ping while hidden (ND:791-820)', async () => {
    start();
    await settle();
    await vi.advanceTimersByTimeAsync(30_000);
    expect(pings()).toHaveLength(2);
    vi.spyOn(document, 'visibilityState', 'get').mockReturnValue('hidden');
    await vi.advanceTimersByTimeAsync(60_000);
    expect(pings()).toHaveLength(2);
    vi.spyOn(document, 'visibilityState', 'get').mockReturnValue('visible');
    await vi.advanceTimersByTimeAsync(30_000);
    expect(pings()).toHaveLength(3);
  });

  test('callbacks run only on a transition; browser events decide without a ping (ND:726-749, 783-786)', async () => {
    start();
    await settle();
    window.dispatchEvent(new Event('online'));
    expect(onOnline).toHaveBeenCalledTimes(1);
    window.dispatchEvent(new Event('offline'));
    window.dispatchEvent(new Event('offline'));
    expect(onOffline).toHaveBeenCalledTimes(1);
    pingOk = 'reject';
    await vi.advanceTimersByTimeAsync(30_000);
    expect(onOffline).toHaveBeenCalledTimes(1);
    pingOk = true;
    await vi.advanceTimersByTimeAsync(30_000);
    expect(onOnline).toHaveBeenCalledTimes(2);
    expect(pings()).toHaveLength(3);
  });

  test('the first start wins; stop removes the listeners and the timer (ND:646-648)', async () => {
    start();
    const second = vi.fn();
    const stopSecond = startNetworkDetection({ onOnline: second });
    await settle();
    stopSecond();
    expect(second).not.toHaveBeenCalled();
    expect(networkDetection()).not.toBeNull();
    stop();
    expect(networkDetection()).toBeNull();
    window.dispatchEvent(new Event('offline'));
    await vi.advanceTimersByTimeAsync(60_000);
    expect(onOffline).not.toHaveBeenCalled();
    expect(pings()).toHaveLength(1);
  });
});

describe('server calls (the request override, ND:828-862)', () => {
  const target = { fetch: fetchMock as typeof fetch };
  const serverCalls = { target, isServerCall: (url: string) => url.includes('/api/') };

  test('an answer of any status is online; a failure is validated with a ping', async () => {
    start({ serverCalls });
    await settle();
    window.dispatchEvent(new Event('offline'));
    expect(onOffline).toHaveBeenCalledTimes(1);
    await target.fetch('/api/UBTConnect/ActionX', { method: 'POST' });
    await settle();
    expect(onOnline).toHaveBeenCalledTimes(2);

    fetchMock.mockImplementationOnce(() => Promise.reject(new TypeError('Failed to fetch')));
    pingOk = false;
    await expect(target.fetch('/api/UBTConnect/ActionY', { method: 'POST' })).rejects.toThrow('Failed to fetch');
    await settle();
    expect(pings()).toHaveLength(2);
    expect(onOffline).toHaveBeenCalledTimes(2);
  });

  test('other requests are not watched, and stop restores fetch', async () => {
    start({ serverCalls });
    await settle();
    expect(target.fetch).not.toBe(fetchMock);
    window.dispatchEvent(new Event('offline'));
    await target.fetch('/UBTConnect/img/logo.png');
    await settle();
    expect(onOnline).toHaveBeenCalledTimes(1);
    stop();
    expect(target.fetch).toBe(fetchMock);
  });
});
