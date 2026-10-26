import { getCacheableObject } from '@/api/client/cache';
import { fetchUserInformation, memberCache } from '@/api/member';
import type { UserInformation } from './mockUser';
import { getClientVar, isSignedIn, setClientVar } from './session';

/* While a signed-in app start runs, readers wait for its GetUserInformation_Wrapper step (Connect_SetLoggedContext,
   UC:1092-1160): in TST the app start fills the user-info cache and screens read it afterwards, e.g. PINRegister's
   only GetUserInformation comes after Sync_Info_GetMain (migration/screens/PINRegister/analysis/calls.json), the
   original block reading the cached user (AppManager_GetCachedUserInfo). The clone's first screen renders before that
   step (appStartSteps.ts waitForFirstScreen), so without this wait a screen's reader would call first (CR-Search-3). */
let appStartStep: Promise<void> | null = null;
let releaseAppStartStep: (() => void) | null = null;

/** runAppStart, signed in: readers wait until releaseUserInfoForAppStart. */
export function holdUserInfoForAppStart(): void {
  if (appStartStep) return;
  appStartStep = new Promise((resolve) => {
    releaseAppStartStep = resolve;
  });
}

/** After the app start's user-info step, or when the app start ends without reaching it. */
export function releaseUserInfoForAppStart(): void {
  releaseAppStartStep?.();
  appStartStep = null;
  releaseAppStartStep = null;
}

/** GetUserInformation_Wrapper for screens and blocks: after the app start's own step when one is running. */
export async function getUserInformation(): Promise<UserInformation> {
  if (appStartStep) await appStartStep;
  return getUserInformation_Wrapper();
}

/** GetUserInformation_Wrapper (UC:13616-13710): the user-info cache (type DirectoryUser, key UniqueCacheKey) calls
    GetUserInformation only on a miss; then App_Policies_HasPolicyToAccept = HasPoliciesToAccept. A screen whose
    CacheControl_UserInfo block already filled the cache causes no call (Menu calls.md: no GetUserInformation). */
export async function getUserInformation_Wrapper(): Promise<UserInformation> {
  if (!isSignedIn()) throw new Error('User is not logged in'); // Cache_UserInfo_Get raises ObjectNotFound
  const info = await getCacheableObject(
    memberCache.userInfo(getClientVar('UBTConnect_Utils.UniqueCacheKey')),
    fetchUserInformation,
  );
  setClientVar('UBTConnect.App_Policies_HasPolicyToAccept', info.HasPoliciesToAccept);
  return info;
}
