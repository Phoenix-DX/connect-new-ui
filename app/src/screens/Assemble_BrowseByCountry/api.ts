import {
  getCacheableRegionSubscribedCountries,
  getCacheableUserInfo,
} from '../../shared/Connect2_LegacyShared/lib/actions';
import { getUserInformation } from '@/platform/session/userInfo';
import type { CountryWithMapPosition } from './types';

/* Adapters of ScreenBlock_Assemble_Filter (p:Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.mvc.js, cited
   as F:<line>). The server calls go through the shared client actions, which call `callAction` with the original
   input names: Connect2_LegacyShared/ActionGetUserInformation (GetCacheableUserInfo), UBTConnect_Utils
   /ActionGetUserInformation (Cache_UserInfo_Get, the shell's user-info cache) and Connect2_LegacyShared
   /ActionGetCountriesBySubscription (GetCacheableRegionSubscribedCountries). */

/** OnReady (F:879-946): GetCacheableUserInfo → UserInformation. The block reads only Subdivision.Id (OnClickApply
    F:984-1000). */
export async function getUserSubdivisionId(): Promise<string> {
  const userInformation = await getCacheableUserInfo();
  return userInformation.Subdivision.Id;
}

/** FetchCountries (F:1025-1100) and OnChange_SearchTearm with an empty term (F:630-660): Cache_UserInfo_Get, then
    GetCacheableRegionSubscribedCountries(UserInformation.Directory_UserCurrent.Directory_UserCurrent_Subscription
    .SubscriptionRegionId) → CountryWithMapPosition. */
export async function getSubscribedCountries(): Promise<CountryWithMapPosition[]> {
  const userInformation = await getUserInformation();
  return getCacheableRegionSubscribedCountries(
    userInformation.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionRegionId,
  );
}
