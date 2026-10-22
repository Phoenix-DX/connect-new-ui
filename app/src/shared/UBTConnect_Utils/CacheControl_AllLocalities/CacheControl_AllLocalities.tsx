// @os-block UBTConnect_Utils.CacheControl.CacheControl_AllLocalities
import { useLayoutEffect, useRef, useState } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { callAction } from '../../../lib/api';
import { CACHE_TYPE, putCacheableObject } from '@/platform/storage/memoryCache';
import { getClientVar } from '@/platform/session/session';
import { CacheControl } from '../CacheControl';
import type { CacheControl_AllLocalitiesRec } from './types';

export interface CacheControl_AllLocalitiesProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Empty → the client variable UniqueCacheKey (OnInitialize). */
  cacheKey?: string;
  timeToLiveSeconds?: number;
  /** Event Result(CacheControl_Response). */
  onResult?: (cacheControlResponse: CacheControl_AllLocalitiesRec) => void;
}

/** Same flow as CacheControl_Policies (p:UBTConnect_Utils.CacheControl.CacheControl_AllLocalities.mvc.js): CacheTypeId
    Connect_CacheType.AllLocalities (:34-35), TimeToLiveSeconds default 7200 (:43-44), an empty CacheKey becomes UniqueCacheKey
    on initialize; the nested CacheControl raises a hit (AssignFromObject → Result) or a miss (GetCacheInfo data
    action, then PutCacheableObject and Result). */
export function CacheControl_AllLocalities({
  id,
  cacheKey = '',
  timeToLiveSeconds = 7200,
  onResult,
}: CacheControl_AllLocalitiesProps) {
  const [key] = useState(() => (cacheKey === '' ? getClientVar('UBTConnect_Utils.UniqueCacheKey') : cacheKey));
  const latest = useRef(onResult);
  useLayoutEffect(() => {
    latest.current = onResult;
  });
  const onCacheHit = (object: unknown) => {
    latest.current?.(object as CacheControl_AllLocalitiesRec);
  };
  const onNonCacheHit = async () => {
    const out = await callAction('UBTConnect_Utils', 'CacheControl_AllLocalities/DataActionGetCacheInfo', {
      CacheKey: key,
      CacheTypeId: CACHE_TYPE.allLocalities,
      TimeToLiveSeconds: timeToLiveSeconds,
    });
    putCacheableObject(CACHE_TYPE.allLocalities, key, out.CacheControl_Response, timeToLiveSeconds);
    latest.current?.(out.CacheControl_Response);
  };
  return (
    <OSBlock name="CacheControl.CacheControl_AllLocalities" id={id}>
      <CacheControl
        cacheTypeId={CACHE_TYPE.allLocalities}
        cacheKey={key}
        timeToLiveSeconds={timeToLiveSeconds}
        onCacheHit={onCacheHit}
        onNonCacheHit={onNonCacheHit}
      />
    </OSBlock>
  );
}
