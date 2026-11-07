import { cacheEntry } from '@/api/client/cache';
import type { AvailableMembersCallInputs } from './types';

/** Query keys of the member queries. The inputs are part of the key: the server answer depends on all of them. */
export const memberKeys = {
  all: ['member'] as const,
  detail: (memberId: string) => [...memberKeys.all, 'detail', memberId] as const,
  /** `requestId` counts the Refresh Query requests of the caller: each new request is a new key, so it fetches again. */
  availableMembers: (inputs: AvailableMembersCallInputs, requestId: number) =>
    [...memberKeys.all, 'availableMembers', inputs, requestId] as const,
};

/** Connect_CacheType.DirectoryUser (UBTConnect_Utils static entity). The runtime identifiers of Connect_CacheType were
    not captured (the recorded CacheTypeId inputs are anonymised), so the name stands in for the identifier. */
const DIRECTORY_USER = 'Connect_CacheType.DirectoryUser';

/** The memory-cache entries of the user information (api/client/cache.ts): the TTL is the staleTime. */
export const memberCache = {
  /** The cache type of the user information of UBTConnect_Utils, also the CacheTypeId input of GetCacheInfo. */
  userInfoType: DIRECTORY_USER,
  /** Cache_UserInfo_Get, CacheControl_UserInfo and PutCacheableObject(DirectoryUser, UniqueCacheKey): type
      DirectoryUser, key UniqueCacheKey, TTL 7200 s (Cache_UserInfo_Get TimeToLiveSeconds default,
      UBTConnect_Utils.controller.js, Cache_UserInfo_Get$vars) or the TTL of the writer. */
  userInfo: (uniqueCacheKey: string, ttlSeconds = 7200) => cacheEntry(DIRECTORY_USER, uniqueCacheKey, ttlSeconds),
  /** GetCacheableUserInfo (Connect2_LegacyShared.controller.js:4391-4520): type DirectoryCacheType.User
      (static-entities-tst.json `Connect2_LegacyShared.directoryCacheType`), key "UserInfo", TTL 7200 s (:4458-4475). */
  legacyUserInfo: () => cacheEntry('User', 'UserInfo', 7200),
};
