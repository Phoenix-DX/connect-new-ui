/** @origin UBTConnect_Utils.CacheControl.CacheControl */
// @os-block UBTConnect_Utils.CacheControl.CacheControl
import { useEffect, useLayoutEffect, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { cacheQueryKey, peekCacheableObject } from '@/api/client/cache';

export interface CacheControlProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Connect_CacheType identifier (the `…Type` of the domain cache entries, for example `appCache.policiesType`). */
  cacheTypeId?: string;
  cacheKey?: string;
  /** Default 7200. Passed to GetCacheableObject in the original; a lookup does not need it here (README). */
  timeToLiveSeconds?: number;
  /** Default 10. GetCacheableObject's timeout; not used by the shell cache (README). */
  timeout?: number;
  /** Event OnCacheHit(Object). */
  onCacheHit?: (object: unknown) => void | Promise<void>;
  /** Event OnNonCacheHit. */
  onNonCacheHit?: () => void | Promise<void>;
}

/** OnInitialize: GetCacheableObject(CacheTypeId, CacheKey) in the memory cache, then OnCacheHit with the object or
    OnNonCacheHit (p:UBTConnect_Utils.CacheControl.CacheControl.mvc.js:207-250). Renders an empty wrapper. */
export function CacheControl({ id, cacheTypeId = '', cacheKey = '', onCacheHit, onNonCacheHit }: CacheControlProps) {
  const events = useRef({ onCacheHit, onNonCacheHit });
  useLayoutEffect(() => {
    events.current = { onCacheHit, onNonCacheHit };
  });
  const initialized = useRef(false);
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const found = peekCacheableObject({ queryKey: cacheQueryKey(cacheTypeId, cacheKey) });
    if (found.hit) void events.current.onCacheHit?.(found.value);
    else void events.current.onNonCacheHit?.();
  }, [cacheTypeId, cacheKey]);
  return <OSBlock name="CacheControl.CacheControl" id={id} />;
}
