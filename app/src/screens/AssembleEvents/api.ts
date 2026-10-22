import { callAction } from '@/api/client/callAction';
import { osDate, osList } from '@/legacy/os/os-wire';
import {
  getCacheableRegionSubscribedCountries,
  getCacheableUserInfo,
} from '../../shared/Connect2_LegacyShared/lib/actions';
import { getUserInformation } from '@/platform/session/userInfo';
import type {
  AssembleEventFilter,
  AssembleEventTypeItem,
  AssembleMeeting,
  CountryWithMapPosition,
  MeetingListQuery,
} from './types';

/* Adapters of AssembleEvents (P-DATA / P-CALLS). Data actions are called with their owner block and the screen
   variables OutSystems sends with them; Long Integers stay strings, counts and coordinates become numbers. */

const filterWire = (f: AssembleEventFilter) => ({
  AssembleFilterTimeOptionId: f.AssembleFilterTimeOptionId,
  AssembleEventType: { List: f.AssembleEventType },
});

/** ScreenBlock_AssembleEvents DataActionGetSubdivisionName (OnReady with a SubdivisionId) → SelectedSubdivisionName. */
export async function getSubdivisionName(vars: {
  SubdivisionId: string;
  ShowBackNavigation: boolean;
  IsUserSubdivision: boolean;
}): Promise<string> {
  const out = await callAction('Connect2_Assemble_MUI', 'ScreenBlock_AssembleEvents/DataActionGetSubdivisionName', {
    ...vars,
    SubdivisionName: '',
  });
  return out.SelectedSubdivisionName;
}

/** GetCacheableUserInfo (Connect2_LegacySharedController) → the Subdivision the blocks read (Id, Name). */
export async function getUserSubdivision(): Promise<{ Id: string; Name: string }> {
  const userInformation = await getCacheableUserInfo();
  return { Id: userInformation.Subdivision.Id, Name: userInformation.Subdivision.Name };
}

/** AssembleSummary_List DataActionGetAssembleEventTypes → AssembleEventTypeList. */
export async function getAssembleEventTypes(): Promise<AssembleEventTypeItem[]> {
  const out = await callAction('Connect2_Assemble_MUI', 'AssembleSummary_List/DataActionGetAssembleEventTypes', {});
  return osList(out.AssembleEventTypeList).map((t) => ({ Id: t.Id, Title: t.Title }));
}

/** AssembleSummary_List DataActionGetAssembleMeetingSummaryList → AssembleSummaryMeetingList (one page). */
export async function getAssembleMeetingSummaryList(query: MeetingListQuery): Promise<AssembleMeeting[]> {
  const out = await callAction(
    'Connect2_Assemble_MUI',
    'AssembleSummary_List/DataActionGetAssembleMeetingSummaryList',
    {
      ...query,
      EventList_Filter: filterWire(query.EventList_Filter),
    },
  );
  return osList(out.AssembleSummaryMeetingList).map((m) => ({
    ...m,
    DateTime: osDate(m.DateTime) ?? '',
    BrothersCount: Number(m.BrothersCount),
    SistersCount: Number(m.SistersCount),
    HostingSubdivisionLatitude: Number(m.HostingSubdivisionLatitude),
    HostingSubdivisionLongitude: Number(m.HostingSubdivisionLongitude),
  }));
}

/** Assemble_FilterSheet FetchCountries: Cache_UserInfo_Get, then GetCacheableRegionSubscribedCountries(Subscription
    RegionId) (Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet.mvc.js:794-848). */
export async function getSubscribedCountries(): Promise<CountryWithMapPosition[]> {
  const userInformation = await getUserInformation();
  return getCacheableRegionSubscribedCountries(
    userInformation.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionRegionId,
  );
}
