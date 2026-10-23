import type { Query } from '@tanstack/react-query';
import { queryClient } from './queryClient';

/* The in-memory object cache of the running page (MemoryClientCache, spec 9 "Cache control"), as TanStack queries of the
   app QueryClient. An entry is keyed like the original, by (cache type, cache key), and lives for the time to live
   (TTL, in seconds) that its writer gave. The domains define their entries in api/<domain>/keys.ts with cacheEntry or
   bulkCacheEntry: the query key, and the TTL that becomes the staleTime of the query. Lost on reload; cleared at logout
   (clearMemoryCache).

   Rules of every cache query, and why:
   - staleTime: the TTL stored with the object (storedTimeToLive). MemoryClientCache judges an entry by the TTL of its
     writer (expiresAt = put time + TTL), not by the TTL of the reader.
   - gcTime Infinity: an entry has no observer, and the default 5 minutes would drop an entry with a longer TTL.
   - networkMode 'always': the original makes the call when the browser is offline, and the call fails.
   - retry false, structuralSharing false: one call per miss, and the object is stored as the writer gave it.
   - the session epoch is part of the key: a reader after a logout never joins a miss of the session before. */

/** The first part of every cache query key. */
const CACHE_ROOT = 'memoryCache';

/** Raised by clearMemoryCache. The entries of an earlier epoch are out of reach. */
let sessionEpoch = 0;

/** [root, session epoch, cache type, cache key]. */
export type CacheQueryKey = readonly [typeof CACHE_ROOT, number, string, string];

/** What a cache query holds: the object and the TTL that its writer gave (0: the object is not stored). */
interface CachedObject {
  value: unknown;
  ttlSeconds: number;
}

type CacheQuery = Query<CachedObject, Error, CachedObject, CacheQueryKey>;

/** The staleTime of every cache query: the TTL stored with the object, in ms. */
const storedTimeToLive = (query: CacheQuery): number => (query.state.data?.ttlSeconds ?? 0) * 1000;

/** The query options of one cache entry. */
export interface CacheEntryOptions {
  queryKey: CacheQueryKey;
  /** TimeToLiveSeconds of the reader or the writer (GetCacheableObject, PutCacheableObject). */
  ttlSeconds: number;
  staleTime: (query: CacheQuery) => number;
  gcTime: number;
  networkMode: 'always';
  retry: false;
  structuralSharing: false;
}

/** The query options of one entry of a bulk cache (GetCacheableObjectInBulk). */
export interface BulkCacheEntryOptions extends CacheEntryOptions {
  /** Timeout input: the misses of one cache type are collected for this many ms, then fetched with one call. */
  bulkWindowMs: number;
  /** MaxBulkSize input: the collected misses are fetched at once when this many keys wait (0: each key at once). */
  maxBulkSize: number;
}

/** The query key of the entry (type, key) of the current session. */
export const cacheQueryKey = (type: string, key: string): CacheQueryKey => [CACHE_ROOT, sessionEpoch, type, key];

/** The entry (type, key) of the current session, with the TTL of its reader or writer. */
export function cacheEntry(type: string, key: string, ttlSeconds: number): CacheEntryOptions {
  return {
    queryKey: cacheQueryKey(type, key),
    ttlSeconds,
    staleTime: storedTimeToLive,
    gcTime: Infinity,
    networkMode: 'always',
    retry: false,
    structuralSharing: false,
  };
}

/** The entry (type, key) of a bulk cache: cacheEntry, with the window and the bulk size of its misses. */
export function bulkCacheEntry(
  type: string,
  key: string,
  ttlSeconds: number,
  bulk: { bulkWindowMs: number; maxBulkSize: number },
): BulkCacheEntryOptions {
  return { ...cacheEntry(type, key, ttlSeconds), ...bulk };
}

const findQuery = (queryKey: CacheQueryKey): CacheQuery | undefined =>
  queryClient.getQueryCache().find<CachedObject, Error, CachedObject>({ queryKey, exact: true }) as
    CacheQuery | undefined;

/** PutCacheableObject: stores the object for the TTL of the entry. */
export function putCacheableObject(entry: CacheEntryOptions, value: unknown): void {
  const { ttlSeconds, ...options } = entry;
  queryClient.getQueryCache().build(queryClient, options).setData({ value, ttlSeconds }, { manual: true });
}

/** GetCachedObject: the object of the entry when it is within the TTL that its writer stored. A lookup needs only the
    key. */
export function peekCacheableObject({
  queryKey,
}: Pick<CacheEntryOptions, 'queryKey'>): { hit: true; value: unknown } | { hit: false } {
  const query = findQuery(queryKey);
  const data = query?.state.data;
  if (!query || data === undefined || query.isStaleByTime(storedTimeToLive(query))) return { hit: false };
  return { hit: true, value: data.value };
}

/** GetCacheableObject (MemoryClientCache.controller.js:249-452 → GetCacheableObjectInternal :674-713 → QueueJS
    :1608-1966, single mode). A hit within its TTL answers at once (:680). A miss calls onMiss; a reader that comes while
    the miss resolves shares that call (QueueJS :1626-1645, CR-AssembleEvents-1). The answer settles every reader that
    waits (:1670-1687). A truthy answer is stored for the TTL of the reader that started the miss (:1664-1668); a falsy
    answer is not stored (TTL 0: the next reader calls again). A failure stores nothing and rejects the readers that
    wait (:1690-1712); a callback that throws before it gives its promise fails the same way (resolveSingle
    :1719-1770). Changed (P5-4): a reader that comes more than Timeout (10 s) after the miss started also shares the
    call; QueueJS starts a second call (:1651-1654). */
export function getCacheableObject<T>(entry: CacheEntryOptions, onMiss: () => Promise<T>): Promise<T> {
  const { ttlSeconds, ...options } = entry;
  return queryClient
    .fetchQuery({
      ...options,
      queryFn: async (): Promise<CachedObject> => {
        const value: unknown = await onMiss();
        return { value, ttlSeconds: value ? ttlSeconds : 0 };
      },
    })
    .then((cached) => cached.value as T);
}

/** One answer of a bulk callback (the TextTextText records of Cache_SignedImageURL_GetCallback, UC:769-805): the cache
    key, an error text ("" = none) and the object. */
export interface BulkCacheResult<T> {
  key: string;
  error: string;
  value: T;
}
export type BulkCacheCallback<T> = (keys: string[]) => Promise<BulkCacheResult<T>[]>;

/** The misses of one cache type that wait for one call of the bulk callback. */
interface BulkQueue {
  keys: string[];
  ttlSeconds: number;
  onMissBulk: BulkCacheCallback<unknown>;
  settle: Map<string, (cached: CachedObject) => void>;
  timer?: ReturnType<typeof setTimeout>;
}

const bulkQueues = new Map<string, BulkQueue>();

/** A key answered with an error, or not answered: undefined, not stored. */
const notStored = (): CachedObject => ({ value: undefined, ttlSeconds: 0 });

function flushBulk(type: string): void {
  const queue = bulkQueues.get(type);
  if (!queue) return;
  bulkQueues.delete(type);
  clearTimeout(queue.timer);
  void queue.onMissBulk([...queue.keys]).then(
    (results) => {
      const byKey = new Map(results.map((result) => [result.key, result]));
      for (const [key, settle] of queue.settle) {
        const result = byKey.get(key);
        settle(result && result.error === '' ? { value: result.value, ttlSeconds: queue.ttlSeconds } : notStored());
      }
    },
    // A failed callback answers undefined to every waiting key (nothing stored), as for a key answered with an error.
    // Evidence: Cache_SignedImageURL_Get and its Callbacks JS node have no handler (UBTConnect_Utils.controller.js
    // :543-700, CallbacksJS), and UBT_LazyImage OnReady (UBT_LazyImage.mvc.js:719-785) sets isFetched = True only
    // after the call returns; yet with every service call aborted (the `offline` captures) no UBT_LazyImage of the 11
    // captured screens keeps its skeleton, e.g. HouseholdDetails dom/offline.html shows the no-image placeholder.
    () => {
      for (const settle of queue.settle.values()) settle(notStored());
    },
  );
}

/** GetCacheableObjectInBulk (MemoryClientCache, as Cache_SignedImageURL_Get calls it, UC:576-585: TTL 300, timeout 10,
    bulk of 15): a hit answers at once; the misses of one cache type are collected for `bulkWindowMs` ms, or until
    `maxBulkSize` keys wait, and fetched with one call of the bulk callback (the callback of the first miss). Each answer
    without an error is stored for the TTL of the first miss. A key that waits already shares that call. A key answered
    with an error, or not answered, gives undefined and is not stored; a failed callback gives undefined to every key
    that waits (see flushBulk). */
export function getCacheableObjectInBulk<T>(
  entry: BulkCacheEntryOptions,
  onMissBulk: BulkCacheCallback<T>,
): Promise<T | undefined> {
  const { ttlSeconds, bulkWindowMs, maxBulkSize, ...options } = entry;
  const [, , type, key] = entry.queryKey;
  return queryClient
    .fetchQuery({
      ...options,
      queryFn: () =>
        new Promise<CachedObject>((resolve) => {
          let queue = bulkQueues.get(type);
          if (!queue) {
            queue = { keys: [], ttlSeconds, onMissBulk, settle: new Map() };
            bulkQueues.set(type, queue);
          }
          queue.settle.set(key, resolve);
          queue.keys.push(key);
          if (queue.keys.length >= maxBulkSize) flushBulk(type);
          else
            queue.timer ??= setTimeout(() => {
              flushBulk(type);
            }, bulkWindowMs);
        }),
    })
    .then((cached) => cached.value as T | undefined);
}

/** CacheKeyPart: one part of a composite key. The MemoryClientCache encoding is in no source we have; any reversible
    one works (keys never leave the memory of the page). */
export const cacheKeyPart = (part: string): string => `${encodeURIComponent(part)}|`;
/** GetCacheKeyParts: the parts of a key built with cacheKeyPart. */
export const getCacheKeyParts = (key: string): string[] => key.split('|').slice(0, -1).map(decodeURIComponent);

/** Clears the memory cache: at logout (Connect_Logout: Cache_InvalidateEverything, and every other entry, ADR-10) and
    for a page reload (tests). A new session epoch starts, so the next readers start their own calls. The idle entries
    are removed. A miss that is running settles its readers, then its entry is removed. The misses of a bulk cache that
    wait for their window are dropped with their call, as before (their readers do not settle). */
export function clearMemoryCache(): void {
  sessionEpoch += 1;
  for (const queue of bulkQueues.values()) clearTimeout(queue.timer);
  bulkQueues.clear();
  const cache = queryClient.getQueryCache();
  for (const query of cache.findAll({ queryKey: [CACHE_ROOT] })) {
    const running = query.state.fetchStatus === 'idle' ? undefined : query.promise;
    if (!running) {
      cache.remove(query);
      continue;
    }
    const remove = () => {
      cache.remove(query);
    };
    void running.then(remove, remove);
  }
}
