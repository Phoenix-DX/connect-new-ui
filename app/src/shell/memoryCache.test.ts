import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import {
  cacheKeyPart,
  clearMemoryCache,
  getCacheableObject,
  getCacheableObjectInBulk,
  getCacheKeyParts,
  peekCacheableObject,
  type BulkCacheCallback,
} from './memoryCache';

beforeEach(() => {
  clearMemoryCache();
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
});

test('GetCacheableObject: a miss runs the callback, a hit within the TTL does not', async () => {
  const fetch = vi.fn(() => Promise.resolve({ n: 1 }));
  await expect(getCacheableObject('T', 'K', 60, fetch)).resolves.toEqual({ n: 1 });
  await expect(getCacheableObject('T', 'K', 60, fetch)).resolves.toEqual({ n: 1 });
  expect(fetch).toHaveBeenCalledTimes(1);
  vi.advanceTimersByTime(60_000);
  expect(peekCacheableObject('T', 'K').hit).toBe(false);
  await getCacheableObject('T', 'K', 60, fetch);
  expect(fetch).toHaveBeenCalledTimes(2);
});

test('entries are keyed by type and key', async () => {
  await getCacheableObject('T', 'A', 60, () => Promise.resolve('a'));
  expect(peekCacheableObject('T', 'B').hit).toBe(false);
  expect(peekCacheableObject('U', 'A').hit).toBe(false);
});

test('GetCacheableObject: readers of a key that is resolving share its fetch (QueueJS, CR-AssembleEvents-1)', async () => {
  let answer: (value: { n: number }) => void = () => undefined;
  const fetch = vi.fn(
    () =>
      new Promise<{ n: number }>((resolve) => {
        answer = resolve;
      }),
  );
  const readers = [1, 2, 3].map(() => getCacheableObject('T', 'K', 60, fetch));
  expect(fetch).toHaveBeenCalledTimes(1);
  answer({ n: 7 });
  await expect(Promise.all(readers)).resolves.toEqual([{ n: 7 }, { n: 7 }, { n: 7 }]);
  expect(peekCacheableObject('T', 'K').hit).toBe(true);
});

test('GetCacheableObject: a failed fetch rejects every waiting reader and stores nothing; the next reader fetches again', async () => {
  let fail: (error: Error) => void = () => undefined;
  const fetch = vi.fn(
    () =>
      new Promise<string>((_resolve, reject) => {
        fail = reject;
      }),
  );
  const first = getCacheableObject('T', 'F', 60, fetch);
  const second = getCacheableObject('T', 'F', 60, fetch);
  const both = expect(Promise.all([first, second])).rejects.toThrow('down');
  fail(new Error('down'));
  await both;
  expect(peekCacheableObject('T', 'F').hit).toBe(false);
  void getCacheableObject('T', 'F', 60, fetch);
  expect(fetch).toHaveBeenCalledTimes(2);
});

test('GetCacheableObject: past the timeout a new reader starts another fetch; the first answer settles all, a falsy one is not stored', async () => {
  const answers: ((value: string) => void)[] = [];
  const fetch = vi.fn(
    () =>
      new Promise<string>((resolve) => {
        answers.push(resolve);
      }),
  );
  const first = getCacheableObject('T', 'S', 60, fetch, 10);
  vi.advanceTimersByTime(10_000);
  const sameWindow = getCacheableObject('T', 'S', 60, fetch, 10);
  expect(fetch).toHaveBeenCalledTimes(1);
  vi.advanceTimersByTime(1);
  const late = getCacheableObject('T', 'S', 60, fetch, 10);
  expect(fetch).toHaveBeenCalledTimes(2);
  answers[1]?.('second');
  await expect(Promise.all([first, sameWindow, late])).resolves.toEqual(['second', 'second', 'second']);
  const empty = getCacheableObject('T', 'E', 60, () => Promise.resolve(''));
  await expect(empty).resolves.toBe('');
  expect(peekCacheableObject('T', 'E').hit).toBe(false);
});

test('GetCacheableObjectInBulk: misses within the timeout go in one callback call; hits and waiting keys do not', async () => {
  const callback = vi.fn<BulkCacheCallback<string>>((keys) =>
    Promise.resolve(keys.map((key) => ({ key, error: '', value: `url-${key}` }))),
  );
  const a = getCacheableObjectInBulk('I', 'a', 300, 10, callback, 15);
  const b = getCacheableObjectInBulk('I', 'b', 300, 10, callback, 15);
  const again = getCacheableObjectInBulk('I', 'a', 300, 10, callback, 15);
  expect(callback).not.toHaveBeenCalled();
  await vi.advanceTimersByTimeAsync(10);
  await expect(Promise.all([a, b, again])).resolves.toEqual(['url-a', 'url-b', 'url-a']);
  expect(callback).toHaveBeenCalledTimes(1);
  expect(callback).toHaveBeenCalledWith(['a', 'b']);
  await expect(getCacheableObjectInBulk('I', 'b', 300, 10, callback, 15)).resolves.toBe('url-b');
  expect(callback).toHaveBeenCalledTimes(1);
  vi.advanceTimersByTime(300_000);
  expect(peekCacheableObject('I', 'a').hit).toBe(false);
});

test('GetCacheableObjectInBulk: a full bulk is fetched at once; errors and missing answers give undefined', async () => {
  const callback = vi.fn<BulkCacheCallback<string>>((keys) =>
    Promise.resolve(
      keys.filter((key) => key !== 'k3').map((key) => ({ key, error: key === 'k2' ? 'x' : '', value: key })),
    ),
  );
  const results = ['k1', 'k2', 'k3'].map((key) => getCacheableObjectInBulk('J', key, 300, 10, callback, 3));
  expect(callback).toHaveBeenCalledTimes(1);
  await expect(Promise.all(results)).resolves.toEqual(['k1', undefined, undefined]);
  expect(peekCacheableObject('J', 'k2').hit).toBe(false);
  const failing = getCacheableObjectInBulk('K', 'z', 300, 10, () => Promise.reject(new Error('down')), 15);
  const answered = expect(failing).resolves.toBeUndefined();
  await vi.advanceTimersByTimeAsync(10);
  await answered;
  expect(peekCacheableObject('K', 'z').hit).toBe(false);
});

test('cache key parts round-trip', () => {
  expect(getCacheKeyParts(cacheKeyPart('12') + cacheKeyPart('Member') + cacheKeyPart('a|b'))).toEqual([
    '12',
    'Member',
    'a|b',
  ]);
});
