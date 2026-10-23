import {
  getCacheableRegionSubscribedCountries,
  getCacheableUserInfo,
} from '@/shared/Connect2_LegacyShared/lib/actions';
import { getUserInformation } from '@/platform/session/userInfo';
import type { CountryWithMapPosition } from './types';

/* Adapters of AssembleEvents (P-DATA / P-CALLS). Data actions are called with their owner block and the screen
   variables OutSystems sends with them; Long Integers stay strings, counts and coordinates become numbers. */

/* DataActionGetAssembleEventTypes and DataActionGetAssembleMeetingSummaryList of AssembleSummary_List are in the
   domain api/event. This module keeps the names that the screen uses. */
export {
  fetchAssembleEventTypes as getAssembleEventTypes,
  fetchAssembleMeetings as getAssembleMeetingSummaryList,
} from '@/api/event';

/* ScreenBlock_AssembleEvents DataActionGetSubdivisionName (OnReady with a SubdivisionId) → SelectedSubdivisionName is
   in the domain api/locality. This module keeps the name that the block uses, until it imports the domain name. */
export { fetchSubdivisionName as getSubdivisionName } from '@/api/locality';

/** GetCacheableUserInfo (Connect2_LegacySharedController) → the Subdivision the blocks read (Id, Name). */
export async function getUserSubdivision(): Promise<{ Id: string; Name: string }> {
  const userInformation = await getCacheableUserInfo();
  return { Id: userInformation.Subdivision.Id, Name: userInformation.Subdivision.Name };
}

/** Assemble_FilterSheet FetchCountries: Cache_UserInfo_Get, then GetCacheableRegionSubscribedCountries(Subscription
    RegionId) (Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet.mvc.js:794-848). */
export async function getSubscribedCountries(): Promise<CountryWithMapPosition[]> {
  const userInformation = await getUserInformation();
  return getCacheableRegionSubscribedCountries(
    userInformation.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionRegionId,
  );
}
