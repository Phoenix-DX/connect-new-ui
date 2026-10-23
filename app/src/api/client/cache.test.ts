import { onlineManager } from '@tanstack/react-query';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import {
  bulkCacheEntry,
  cacheEntry,
  cacheKeyPart,
  clearMemoryCache,
  getCacheableObject,
  getCacheableObjectInBulk,
  getCacheKeyParts,
  peekCacheableObject,
  putCacheableObject,
  type BulkCacheCallback,
} from './cache';
import { queryClient } from './queryClient';

/** The objects that the cache queries of the app QueryClient hold. */
const cacheQueryData = () =>
  queryClient
    .getQueryCache()
    .findAll({ queryKey: ['memoryCache'] })
    .flatMap((query) => {
      const data = query.state.data as { value: unknown } | undefined;
      return data ? [data.value] : [];
    });

const entry = (type: string, key: string, ttlSeconds = 60) => cacheEntry(type, key, ttlSeconds);
const bulkEntry = (type: string, key: string, maxBulkSize = 15) =>
  bulkCacheEntry(type, key, 300, { bulkWindowMs: 10, maxBulkSize });

beforeEach(() => {
  clearMemoryCache();
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
});

test('GetCacheableObject: a miss runs the callback, a hit within the TTL does not', async () => {
  const fetch = vi.fn(() => Promise.resolve({ n: 1 }));
  await expect(getCacheableObject(entry('T', 'K'), fetch)).resolves.toEqual({ n: 1 });
  await expect(getCacheableObject(entry('T', 'K'), fetch)).resolves.toEqual({ n: 1 });
  expect(fetch).toHaveBeenCalledTimes(1);
  vi.advanceTimersByTime(60_000);
  expect(peekCacheableObject(entry('T', 'K')).hit).toBe(false);
  await getCacheableObject(entry('T', 'K'), fetch);
  expect(fetch).toHaveBeenCalledTimes(2);
});

test('entries are keyed by type and key', async () => {
  await getCacheableObject(entry('T', 'A'), () => Promise.resolve('a'));
  expect(peekCacheableObject(entry('T', 'B')).hit).toBe(false);
  expect(peekCacheableObject(entry('U', 'A')).hit).toBe(false);
});

test('an entry keeps the TTL of its writer, also past the 5 minutes of the default gcTime', () => {
  putCacheableObject(entry('T', 'W', 7200), 'kept');
  vi.advanceTimersByTime(6 * 60_000);
  expect(peekCacheableObject(entry('T', 'W', 1))).toEqual({ hit: true, value: 'kept' });
  vi.advanceTimersByTime(7200_000 - 6 * 60_000);
  expect(peekCacheableObject(entry('T', 'W', 7200)).hit).toBe(false);
  putCacheableObject(entry('T', 'S', 60), 'short');
  vi.advanceTimersByTime(60_000);
  expect(peekCacheableObject(entry('T', 'S', 7200)).hit).toBe(false);
});

test('GetCacheableObject: readers of a key that is resolving share its fetch (QueueJS, CR-AssembleEvents-1)', async () => {
  let answer: (value: { n: number }) => void = () => undefined;
  const fetch = vi.fn(
    () =>
      new Promise<{ n: number }>((resolve) => {
        answer = resolve;
      }),
  );
  const readers = [1, 2, 3].map(() => getCacheableObject(entry('T', 'K'), fetch));
  expect(fetch).toHaveBeenCalledTimes(1);
  answer({ n: 7 });
  await expect(Promise.all(readers)).resolves.toEqual([{ n: 7 }, { n: 7 }, { n: 7 }]);
  expect(peekCacheableObject(entry('T', 'K')).hit).toBe(true);
});

test('GetCacheableObject: a failed fetch rejects every waiting reader and stores nothing; the next reader fetches again', async () => {
  let fail: (error: Error) => void = () => undefined;
  const fetch = vi.fn(
    () =>
      new Promise<string>((_resolve, reject) => {
        fail = reject;
      }),
  );
  const first = getCacheableObject(entry('T', 'F'), fetch);
  const second = getCacheableObject(entry('T', 'F'), fetch);
  const both = expect(Promise.all([first, second])).rejects.toThrow('down');
  fail(new Error('down'));
  await both;
  expect(peekCacheableObject(entry('T', 'F')).hit).toBe(false);
  void getCacheableObject(entry('T', 'F'), fetch);
  expect(fetch).toHaveBeenCalledTimes(2);
});

/* Replaces "past the timeout a new reader starts another fetch" (memoryCache.ts, QueueJS :1651-1654): with TanStack
   Query every reader shares the running fetch (P5-4, decision Q13 of the user). */
test('GetCacheableObject: past the timeout a new reader shares the running fetch; the answer settles all, a falsy one is not stored', async () => {
  const answers: ((value: string) => void)[] = [];
  const fetch = vi.fn(
    () =>
      new Promise<string>((resolve) => {
        answers.push(resolve);
      }),
  );
  const first = getCacheableObject(entry('T', 'S'), fetch);
  vi.advanceTimersByTime(10_001);
  const late = getCacheableObject(entry('T', 'S'), fetch);
  expect(fetch).toHaveBeenCalledTimes(1);
  answers[0]?.('first');
  await expect(Promise.all([first, late])).resolves.toEqual(['first', 'first']);
  const emptyFetch = vi.fn(() => Promise.resolve(''));
  await expect(getCacheableObject(entry('T', 'E'), emptyFetch)).resolves.toBe('');
  expect(peekCacheableObject(entry('T', 'E')).hit).toBe(false);
  await getCacheableObject(entry('T', 'E'), emptyFetch);
  expect(emptyFetch).toHaveBeenCalledTimes(2);
});

test('clearMemoryCache (logout): a reader after it never joins a miss of the session before; that miss settles its readers and stays out of the new session', async () => {
  putCacheableObject(entry('T', 'Idle'), 'before');
  const answers: ((value: string) => void)[] = [];
  const fetch = vi.fn(
    () =>
      new Promise<string>((resolve) => {
        answers.push(resolve);
      }),
  );
  const before = getCacheableObject(entry('T', 'K'), fetch);
  clearMemoryCache();
  expect(peekCacheableObject(entry('T', 'Idle')).hit).toBe(false);
  const after = getCacheableObject(entry('T', 'K'), fetch);
  expect(fetch).toHaveBeenCalledTimes(2);
  answers[0]?.('old session');
  await expect(before).resolves.toBe('old session');
  expect(peekCacheableObject(entry('T', 'K')).hit).toBe(false);
  answers[1]?.('new session');
  await expect(after).resolves.toBe('new session');
  expect(peekCacheableObject(entry('T', 'K'))).toEqual({ hit: true, value: 'new session' });
  // ADR-10: no object of the session before stays in the client
  expect(cacheQueryData()).toEqual(['new session']);
});

test('GetCacheableObject: a miss calls the server while the browser is offline (networkMode always)', async () => {
  onlineManager.setOnline(false);
  try {
    const fetch = vi.fn(() => Promise.resolve('answer'));
    await expect(getCacheableObject(entry('T', 'O'), fetch)).resolves.toBe('answer');
    expect(fetch).toHaveBeenCalledTimes(1);
  } finally {
    onlineManager.setOnline(true);
  }
});

test('GetCacheableObjectInBulk: misses within the timeout go in one callback call; hits and waiting keys do not', async () => {
  const callback = vi.fn<BulkCacheCallback<string>>((keys) =>
    Promise.resolve(keys.map((key) => ({ key, error: '', value: `url-${key}` }))),
  );
  const a = getCacheableObjectInBulk(bulkEntry('I', 'a'), callback);
  const b = getCacheableObjectInBulk(bulkEntry('I', 'b'), callback);
  const again = getCacheableObjectInBulk(bulkEntry('I', 'a'), callback);
  expect(callback).not.toHaveBeenCalled();
  await vi.advanceTimersByTimeAsync(10);
  await expect(Promise.all([a, b, again])).resolves.toEqual(['url-a', 'url-b', 'url-a']);
  expect(callback).toHaveBeenCalledTimes(1);
  expect(callback).toHaveBeenCalledWith(['a', 'b']);
  await expect(getCacheableObjectInBulk(bulkEntry('I', 'b'), callback)).resolves.toBe('url-b');
  expect(callback).toHaveBeenCalledTimes(1);
  vi.advanceTimersByTime(300_000);
  expect(peekCacheableObject(bulkEntry('I', 'a')).hit).toBe(false);
});

test('GetCacheableObjectInBulk: a full bulk is fetched at once; errors and missing answers give undefined', async () => {
  const callback = vi.fn<BulkCacheCallback<string>>((keys) =>
    Promise.resolve(
      keys.filter((key) => key !== 'k3').map((key) => ({ key, error: key === 'k2' ? 'x' : '', value: key })),
    ),
  );
  const results = ['k1', 'k2', 'k3'].map((key) => getCacheableObjectInBulk(bulkEntry('J', key, 3), callback));
  expect(callback).toHaveBeenCalledTimes(1);
  await expect(Promise.all(results)).resolves.toEqual(['k1', undefined, undefined]);
  expect(peekCacheableObject(bulkEntry('J', 'k2')).hit).toBe(false);
  const failing = getCacheableObjectInBulk(bulkEntry('K', 'z'), () => Promise.reject(new Error('down')));
  const answered = expect(failing).resolves.toBeUndefined();
  await vi.advanceTimersByTimeAsync(10);
  await answered;
  expect(peekCacheableObject(bulkEntry('K', 'z')).hit).toBe(false);
});

test('GetCacheableObjectInBulk: bulk size 0 calls at once for each key; a key that waits shares its call', async () => {
  const callback = vi.fn<BulkCacheCallback<string>>((keys) =>
    Promise.resolve(keys.map((key) => ({ key, error: '', value: `photo-${key}` }))),
  );
  const p = getCacheableObjectInBulk(bulkEntry('P', 'p', 0), callback);
  const q = getCacheableObjectInBulk(bulkEntry('P', 'q', 0), callback);
  const pAgain = getCacheableObjectInBulk(bulkEntry('P', 'p', 0), callback);
  expect(callback.mock.calls).toEqual([[['p']], [['q']]]);
  await expect(Promise.all([p, q, pAgain])).resolves.toEqual(['photo-p', 'photo-q', 'photo-p']);
});

test('cache key parts round-trip', () => {
  expect(getCacheKeyParts(cacheKeyPart('12') + cacheKeyPart('Member') + cacheKeyPart('a|b'))).toEqual([
    '12',
    'Member',
    'a|b',
  ]);
});
