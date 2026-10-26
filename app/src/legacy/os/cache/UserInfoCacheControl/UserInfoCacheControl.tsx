/** @origin UBTConnect_Utils.CacheControl.CacheControl_UserInfo */
// @os-block UBTConnect_Utils.CacheControl.CacheControl_UserInfo
import { useLayoutEffect, useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { putCacheableObject } from '@/api/client/cache';
import { callAction } from '@/api/client/callAction';
import { memberCache } from '@/api/member';
import { getClientVar } from '@/platform/session/session';
import { CacheControl } from '@/legacy/os/cache/CacheControl';
import type { CacheControl_UserInformation } from './types';

export interface UserInfoCacheControlProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Empty → the client variable UniqueCacheKey (OnInitialize). */
  cacheKey?: string;
  /** Event Result(CacheControl_Response). */
  onResult?: (cacheControlResponse: CacheControl_UserInformation) => void;
}

/** The user information through the memory cache (p:UBTConnect_Utils.CacheControl.CacheControl_UserInfo.mvc.js):
    CacheTypeId Connect_CacheType.DirectoryUser (:32-33), the type the shell's GetUserInformation_Wrapper reads
    (src/shell/userInfo.ts); an empty CacheKey becomes UniqueCacheKey (:322-325). No TimeToLiveSeconds input: the
    nested CacheControl gets the TTL output of GetCacheInfo (0 until fetched, view :174). Miss: GetCacheInfo, then
    PutCacheableObject with that TTL and Result (:247-276, :339-366); hit: AssignFromObject → Result (:371-400). */
export function UserInfoCacheControl({ id, cacheKey = '', onResult }: UserInfoCacheControlProps) {
  const [key] = useState(() => (cacheKey === '' ? getClientVar('UBTConnect_Utils.UniqueCacheKey') : cacheKey));
  const [ttl, setTtl] = useState(0);
  const latest = useRef(onResult);
  useLayoutEffect(() => {
    latest.current = onResult;
  });
  const onCacheHit = (object: unknown) => {
    latest.current?.(object as CacheControl_UserInformation);
  };
  const onNonCacheHit = async () => {
    const out = await callAction('UBTConnect_Utils', 'CacheControl_UserInfo/DataActionGetCacheInfo', {
      CacheKey: key,
      CacheTypeId: memberCache.userInfoType,
    });
    setTtl(out.TTL);
    putCacheableObject(memberCache.userInfo(key, out.TTL), out.CacheControl_Response);
    latest.current?.(out.CacheControl_Response);
  };
  return (
    <OSBlock name="CacheControl.CacheControl_UserInfo" id={id}>
      <CacheControl
        cacheTypeId={memberCache.userInfoType}
        cacheKey={key}
        timeToLiveSeconds={ttl}
        onCacheHit={onCacheHit}
        onNonCacheHit={onNonCacheHit}
      />
    </OSBlock>
  );
}
