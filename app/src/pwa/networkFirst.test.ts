import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { NAVIGATION_NETWORK_TIMEOUT_SECONDS, networkFirstWithTimeout } from './networkFirst';

beforeEach(() => {
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
});

const page = () => Promise.resolve(new Response('precached index.html'));
const none = () => Promise.resolve(undefined);
const later = <T>(ms: number, value: T) =>
  new Promise<T>((resolve) =>
    setTimeout(() => {
      resolve(value);
    }, ms),
  );
const failLater = (ms: number, error: Error) =>
  new Promise<Response>((_, reject) =>
    setTimeout(() => {
      reject(error);
    }, ms),
  );

test('the timeout is 4 s', () => {
  expect(NAVIGATION_NETWORK_TIMEOUT_SECONDS).toBe(4);
});

test('a network answer within the timeout wins, whatever its status', async () => {
  const answer = networkFirstWithTimeout(later(3_900, new Response('fresh', { status: 503 })), page);
  await vi.advanceTimersByTimeAsync(3_900);
  const response = await answer;
  expect(response.status).toBe(503);
  expect(await response.text()).toBe('fresh');
});

test('offline (the request fails): the precached page at once', async () => {
  const response = await networkFirstWithTimeout(Promise.reject(new TypeError('Failed to fetch')), page);
  expect(await response.text()).toBe('precached index.html');
});

test('a slow network: the precached page after 4 s; the late failure is swallowed', async () => {
  const answer = networkFirstWithTimeout(failLater(10_000, new TypeError('late')), page);
  await vi.advanceTimersByTimeAsync(4_000);
  expect(await (await answer).text()).toBe('precached index.html');
  await vi.advanceTimersByTimeAsync(10_000);
});

test('no precached page: the network answer however late, or its error', async () => {
  const slow = networkFirstWithTimeout(later(6_000, new Response('slow')), none);
  await vi.advanceTimersByTimeAsync(6_000);
  expect(await (await slow).text()).toBe('slow');
  await expect(networkFirstWithTimeout(Promise.reject(new TypeError('offline')), none)).rejects.toThrow('offline');
});
