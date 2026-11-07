import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { cacheQueryKey, peekCacheableObject, putCacheableObject, type CacheEntryOptions } from '@/api/client/cache';
import {
  fetchAllLocalities,
  fetchAllSubdivisions,
  localityCache,
  type AllLocalities,
  type AllSubdivisions,
} from '@/api/locality';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { clientVar } from '@/platform/session/session';

/* The two cache blocks of the address section: CacheControl_AllLocalities and CacheControl_AllSubdivisions
   (UBTConnect_Utils). Both have the same flow: CacheTypeId from Connect_CacheType, TimeToLiveSeconds 7200, an empty
   CacheKey becomes UniqueCacheKey on initialize (CacheControl_AllSubdivisions.mvc.js:32-44, 400-415), and the nested
   CacheControl raises a hit (AssignFromObject → Result, :296-330) or a miss (GetCacheInfo, then PutCacheableObject and
   Result in OnAfterFetch, :331-395). The shared CacheControl_AllLocalities block lives in legacy/os/cache, which a page
   may not import (architecture rule 9; follow-up F37 replaces those blocks with api hooks), so this page builds both
   blocks on api/client/cache, as the legacy CacheControl block does. */

const TIME_TO_LIVE_SECONDS = 7200;

interface CacheControlFlow<T> {
  /** Connect_CacheType identifier (the CacheTypeId input of GetCacheInfo). */
  cacheTypeId: string;
  entry: (cacheKey: string, ttlSeconds: number) => CacheEntryOptions;
  fetch: (inputs: { CacheKey: string; CacheTypeId: string; TimeToLiveSeconds: number }) => Promise<T>;
}

/** CacheControl (UBTConnect_Utils.CacheControl.CacheControl.mvc.js:207-250) inside a CacheControl_<Type> block: on
    initialize, the memory cache lookup, then Result with the cached object or with the fetched response. A failed
    fetch goes to `onError` (the screen's handler). */
function useCacheControl<T>(
  flow: CacheControlFlow<T>,
  onResult: ((response: T) => void) | undefined,
  onError: ((error: unknown) => void) | undefined,
): void {
  const [cacheKey] = useState(() => clientVar.uniqueCacheKey.get());
  const events = useRef({ onResult, onError });
  useLayoutEffect(() => {
    events.current = { onResult, onError };
  });
  const initialized = useRef(false);
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const found = peekCacheableObject({ queryKey: cacheQueryKey(flow.cacheTypeId, cacheKey) });
    if (found.hit) {
      events.current.onResult?.(found.value as T);
      return;
    }
    flow
      .fetch({ CacheKey: cacheKey, CacheTypeId: flow.cacheTypeId, TimeToLiveSeconds: TIME_TO_LIVE_SECONDS })
      .then((response) => {
        putCacheableObject(flow.entry(cacheKey, TIME_TO_LIVE_SECONDS), response);
        events.current.onResult?.(response);
      })
      .catch((error: unknown) => {
        events.current.onError?.(error);
      });
  }, [flow, cacheKey]);
}

const ALL_LOCALITIES: CacheControlFlow<AllLocalities> = {
  cacheTypeId: localityCache.allLocalitiesType,
  entry: localityCache.allLocalities,
  fetch: fetchAllLocalities,
};

const ALL_SUBDIVISIONS: CacheControlFlow<AllSubdivisions> = {
  cacheTypeId: localityCache.allSubdivisionsType,
  entry: localityCache.allSubdivisions,
  fetch: fetchAllSubdivisions,
};

interface AddressCacheControlProps<T> {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Event Result(CacheControl_Response). */
  onResult?: (cacheControlResponse: T) => void;
  /** A failed GetCacheInfo (the screen's error handler). */
  onError?: (error: unknown) => void;
}

/** CacheControl_AllLocalities (p:UBTConnect_Utils.CacheControl.CacheControl_AllLocalities.mvc.js): the list of all
    localities, kept in the memory cache.
    @origin UBTConnect_Utils.CacheControl.CacheControl_AllLocalities */
export function CacheControl_AllLocalities({ id, onResult, onError }: AddressCacheControlProps<AllLocalities>) {
  useCacheControl(ALL_LOCALITIES, onResult, onError);
  return (
    <OSBlock name="CacheControl.CacheControl_AllLocalities" id={id}>
      <OSBlock name="CacheControl.CacheControl" />
    </OSBlock>
  );
}

/** CacheControl_AllSubdivisions (p:UBTConnect_Utils.CacheControl.CacheControl_AllSubdivisions.mvc.js): the list of all
    subdivisions, kept in the memory cache. Profile is its only user on TST.
    @origin UBTConnect_Utils.CacheControl.CacheControl_AllSubdivisions */
export function CacheControl_AllSubdivisions({ id, onResult, onError }: AddressCacheControlProps<AllSubdivisions>) {
  useCacheControl(ALL_SUBDIVISIONS, onResult, onError);
  return (
    <OSBlock name="CacheControl.CacheControl_AllSubdivisions" id={id}>
      <OSBlock name="CacheControl.CacheControl" />
    </OSBlock>
  );
}
