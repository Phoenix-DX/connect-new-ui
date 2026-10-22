/* In-memory object cache of the running page, keyed like the original MemoryClientCache: (cache type, cache key), with
   a time to live in seconds (spec 9 "Cache control"). GetCacheableObject answers a hit, or runs the miss callback and
   stores its answer. Lost on reload; cleared by Cache_InvalidateEverything (logout). */
interface Entry {
  value: unknown;
  expiresAt: number;
}

const entries = new Map<string, Entry>();
const keyOf = (type: string, key: string) => `${type}\u0000${key}`;

export function putCacheableObject(type: string, key: string, value: unknown, ttlSeconds: number): void {
  entries.set(keyOf(type, key), { value, expiresAt: Date.now() + ttlSeconds * 1000 });
}

export function peekCacheableObject(type: string, key: string): { hit: true; value: unknown } | { hit: false } {
  const entry = entries.get(keyOf(type, key));
  if (!entry || entry.expiresAt <= Date.now()) return { hit: false };
  return { hit: true, value: entry.value };
}

/** A key whose single-object miss is resolving (MemoryCache_QueueResolution QueueJS, MemoryClientCache.controller.js
    :1626-1645): the readers waiting for it, the TTL of the reader that queued it and the time after which a new reader
    stops trusting the running fetch. */
interface QueuedMiss {
  key: string;
  timeToLive: number;
  onResolve: ((value: unknown) => void)[];
  onFailure: ((error: unknown) => void)[];
  timeout?: number;
}

const missQueues = new Map<string, QueuedMiss>();

/** GetCacheableObject (MemoryClientCache.controller.js:249-452 → GetCacheableObjectInternal :674-713 → QueueJS
    :1608-1966, single mode). A hit within its expiry answers at once (:680). A miss joins the queue of (type, key)
    (:1626-1645): the first reader queues the key; a reader arriving while it resolves only adds its callbacks, so
    concurrent readers share one onMiss call (CR-AssembleEvents-1). A new fetch starts only when the key was just queued
    or its timeout (`timeoutSeconds` after the last start) has passed (:1651-1654); the earlier fetch keeps running and
    settles the same queued readers. The answer removes the key from the queue (:1660, :1691, unconditional: a late
    answer of a timed-out fetch also drops a newer queued item of that key, as compiled), stores a truthy value for the
    queuing reader's TTL (:1664-1668) and settles every waiting reader (:1670-1687); a failure stores nothing and
    rejects them (:1690-1712). Every compiled caller passes Timeout 10 (Connect2_LegacyShared.controller.js:3229 :3365
    :3501 :3639 :4340 :4481, UBTConnect_Utils Cache_UserInfo_Get$vars), the default here. */
export function getCacheableObject<T>(
  type: string,
  key: string,
  ttlSeconds: number,
  onMiss: () => Promise<T>,
  timeoutSeconds = 10,
): Promise<T> {
  const found = peekCacheableObject(type, key);
  if (found.hit) return Promise.resolve(found.value as T);
  const queueKey = keyOf(type, key);
  return new Promise<T>((resolve, reject) => {
    let queued = missQueues.get(queueKey);
    const onResolve = (value: unknown) => {
      resolve(value as T);
    };
    if (queued) {
      queued.onResolve.push(onResolve);
      queued.onFailure.push(reject);
    } else {
      queued = { key, timeToLive: ttlSeconds, onResolve: [onResolve], onFailure: [reject] };
      missQueues.set(queueKey, queued);
    }
    const now = Date.now();
    if (queued.timeout === undefined || queued.timeout < now) {
      queued.timeout = now + timeoutSeconds * 1000;
      const item = queued;
      const resolved = (value: unknown) => {
        missQueues.delete(queueKey);
        if (value) putCacheableObject(type, item.key, value, item.timeToLive);
        for (const callback of item.onResolve) callback(value);
        item.onResolve = [];
        item.onFailure = [];
      };
      const failure = (error: unknown) => {
        missQueues.delete(queueKey);
        for (const callback of item.onFailure) callback(error);
        item.onResolve = [];
        item.onFailure = [];
      };
      // resolveSingle (:1719-1770): a callback that throws before giving its promise fails the same way.
      try {
        void onMiss().then(resolved, failure);
      } catch (error) {
        failure(error);
      }
    }
  });
}

/** One answer of a bulk callback (the TextTextText records of Cache_SignedImageURL_GetCallback, UC:769-805): the cache
    key, an error text ("" = none) and the object. */
export interface BulkCacheResult<T> {
  key: string;
  error: string;
  value: T;
}
export type BulkCacheCallback<T> = (keys: string[]) => Promise<BulkCacheResult<T>[]>;

interface BulkQueue {
  keys: string[];
  ttlSeconds: number;
  onMissBulk: BulkCacheCallback<unknown>;
  settle: Map<string, { resolve: (value: unknown) => void }>;
  timer?: ReturnType<typeof setTimeout>;
}

const bulkQueues = new Map<string, BulkQueue>();
const pendingKeys = new Map<string, Promise<unknown>>();

/** CacheKeyPart: one part of a composite key. The MemoryClientCache encoding is in no source we have; any reversible
    one works (keys never leave this module's memory). */
export const cacheKeyPart = (part: string): string => `${encodeURIComponent(part)}|`;
/** GetCacheKeyParts: the parts of a key built with cacheKeyPart. */
export const getCacheKeyParts = (key: string): string[] => key.split('|').slice(0, -1).map(decodeURIComponent);

function flushBulk(type: string): void {
  const queue = bulkQueues.get(type);
  if (!queue) return;
  bulkQueues.delete(type);
  clearTimeout(queue.timer);
  const settled = (key: string) => {
    pendingKeys.delete(keyOf(type, key));
  };
  void queue.onMissBulk([...queue.keys]).then(
    (results) => {
      const byKey = new Map(results.map((result) => [result.key, result]));
      for (const [key, { resolve }] of queue.settle) {
        settled(key);
        const result = byKey.get(key);
        if (result && result.error === '') {
          putCacheableObject(type, key, result.value, queue.ttlSeconds);
          resolve(result.value);
        } else resolve(undefined);
      }
    },
    // A failed callback answers undefined to every waiting key (nothing stored), as for a key answered with an error.
    // Evidence: Cache_SignedImageURL_Get and its Callbacks JS node have no handler (UBTConnect_Utils.controller.js
    // :543-700, CallbacksJS), and UBT_LazyImage OnReady (UBT_LazyImage.mvc.js:719-785) sets isFetched = True only
    // after the call returns; yet with every service call aborted (the `offline` captures) no UBT_LazyImage of the 11
    // captured screens keeps its skeleton, e.g. HouseholdDetails dom/offline.html shows the no-image placeholder.
    () => {
      for (const [key, { resolve }] of queue.settle) {
        settled(key);
        resolve(undefined);
      }
    },
  );
}

/** GetCacheableObjectInBulk (MemoryClientCache, as Cache_SignedImageURL_Get calls it, UC:576-585: TTL 300, timeout 10,
    bulk of 15): a hit answers at once; misses of the same cache type are collected for `timeout` ms, or until
    `maxBulkSize` keys wait, and fetched with one call of the bulk callback; each answer without error is stored for
    `ttlSeconds`. A key already waiting shares that fetch. A key answered with an error, or not answered, gives
    undefined and is not stored; a failed callback gives undefined to every waiting key (see flushBulk). */
export function getCacheableObjectInBulk<T>(
  type: string,
  key: string,
  ttlSeconds: number,
  timeout: number,
  onMissBulk: BulkCacheCallback<T>,
  maxBulkSize: number,
): Promise<T | undefined> {
  const found = peekCacheableObject(type, key);
  if (found.hit) return Promise.resolve(found.value as T);
  const waiting = pendingKeys.get(keyOf(type, key));
  if (waiting) return waiting as Promise<T | undefined>;
  let queue = bulkQueues.get(type);
  if (!queue) {
    queue = { keys: [], ttlSeconds, onMissBulk, settle: new Map() };
    bulkQueues.set(type, queue);
  }
  const { settle } = queue;
  const promise = new Promise<T | undefined>((resolve) => {
    settle.set(key, {
      resolve: (value) => {
        resolve(value as T | undefined);
      },
    });
  });
  pendingKeys.set(keyOf(type, key), promise);
  queue.keys.push(key);
  if (queue.keys.length >= maxBulkSize) flushBulk(type);
  else
    queue.timer ??= setTimeout(() => {
      flushBulk(type);
    }, timeout);
  return promise;
}

export function removeCacheableObjectsByType(type: string): void {
  for (const k of [...entries.keys()]) if (k.startsWith(`${type}\u0000`)) entries.delete(k);
}

/* Cache types of the UBTConnect_Utils Connect_CacheType static entity. Their runtime identifiers were not captured
   (the recorded CacheTypeId inputs are anonymised), so the names stand in for them. */
export const CACHE_TYPE = {
  directoryUser: 'Connect_CacheType.DirectoryUser',
  allCountries: 'Connect_CacheType.AllCountries',
  allLocalities: 'Connect_CacheType.AllLocalities',
  allSubdivisions: 'Connect_CacheType.AllSubdivisions',
  image: 'Connect_CacheType.Image',
  myCalendarEvents: 'Connect_CacheType.MyCalendarEvents',
  policies: 'Connect_CacheType.Policies',
} as const;

/** Cache_InvalidateEverything (UBTConnect_Utils.controller.js:429-466): the seven Connect cache types; the map
    objects cached at app start stay. Called by Connect_Logout (UC:1062-1066). */
export function invalidateEverything(): void {
  for (const type of Object.values(CACHE_TYPE)) removeCacheableObjectsByType(type);
}

/** Drops every entry, as a page reload does (tests). */
export function clearMemoryCache(): void {
  entries.clear();
  for (const queue of bulkQueues.values()) clearTimeout(queue.timer);
  bulkQueues.clear();
  pendingKeys.clear();
  missQueues.clear();
}
