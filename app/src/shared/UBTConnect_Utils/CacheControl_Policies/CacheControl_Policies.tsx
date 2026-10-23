// @os-block UBTConnect_Utils.CacheControl.CacheControl_Policies
import { useLayoutEffect, useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { fetchPolicies } from '@/api/app';
import { CACHE_TYPE, putCacheableObject } from '@/platform/storage/memoryCache';
import { getClientVar } from '@/platform/session/session';
import { CacheControl } from '@/shared/UBTConnect_Utils/CacheControl';
import type { CacheControl_PoliciesRec } from './types';

export interface CacheControl_PoliciesProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Empty → the client variable UniqueCacheKey (OnInitialize). */
  cacheKey?: string;
  timeToLiveSeconds?: number;
  /** Event Result(CacheControl_Response). */
  onResult?: (cacheControlResponse: CacheControl_PoliciesRec) => void;
}

/** Policies through the memory cache (p:UBTConnect_Utils.CacheControl.CacheControl_Policies.mvc.js): CacheTypeId is
    Connect_CacheType.Policies (:34-35); OnInitialize sets an empty CacheKey to UniqueCacheKey (:417-420). The nested
    CacheControl then raises a hit (AssignFromObject → Result, :360-382) or a miss (GetCacheInfo data action, then
    PutCacheableObject and Result: :295-345). */
export function CacheControl_Policies({
  id,
  cacheKey = '',
  timeToLiveSeconds = 7200,
  onResult,
}: CacheControl_PoliciesProps) {
  const [key] = useState(() => (cacheKey === '' ? getClientVar('UBTConnect_Utils.UniqueCacheKey') : cacheKey));
  const latest = useRef(onResult);
  useLayoutEffect(() => {
    latest.current = onResult;
  });
  const onCacheHit = (object: unknown) => {
    latest.current?.(object as CacheControl_PoliciesRec);
  };
  const onNonCacheHit = async () => {
    const response = await fetchPolicies({
      CacheKey: key,
      CacheTypeId: CACHE_TYPE.policies,
      TimeToLiveSeconds: timeToLiveSeconds,
    });
    putCacheableObject(CACHE_TYPE.policies, key, response, timeToLiveSeconds);
    latest.current?.(response);
  };
  return (
    <OSBlock name="CacheControl.CacheControl_Policies" id={id}>
      <CacheControl
        cacheTypeId={CACHE_TYPE.policies}
        cacheKey={key}
        timeToLiveSeconds={timeToLiveSeconds}
        onCacheHit={onCacheHit}
        onNonCacheHit={onNonCacheHit}
      />
    </OSBlock>
  );
}
