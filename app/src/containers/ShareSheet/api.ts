import { useQuery } from '@tanstack/react-query';
import { callAction } from '@/api/client/callAction';
import { osList, wireList } from '@/legacy/os/os-wire';
import { getUserInformation } from '@/platform/session/userInfo';
import type { SearchResult } from '@/shared/UBTConnect_Utils/lib/structures';

/* Server data and actions of CW_Share.ShareSheet (P-DATA / P-CALLS). Both data actions are fetched only on demand
   (no capture records them on a screen load): GetRecentlyShared when the sheet opens (OnParametersChanged :2172-2176),
   GetAvailableMembers when a search is submitted (Handler_InputEventSubmit :2809-2867). They are sent with the block's
   screen variables; the ones below are those the flow sets (original names). */
export interface ShareSheetVariables {
  In_ShareObjectTypeId: string;
  In_ShareableObjectId: string;
  In_UpdateType: string;
  In_UpdateDate: string;
  SearchTerm: string;
}

/** DataActionGetRecentlyShared (ShareSheet.mvc.js:2039-2065). `fetchId` > 0 = a Refresh Query was asked (0: none). */
export function useGetRecentlyShared(variables: ShareSheetVariables, fetchId: number) {
  return useQuery({
    queryKey: ['ShareSheet', 'DataActionGetRecentlyShared', { ...variables, fetchId }],
    queryFn: async (): Promise<SearchResult[]> => {
      const out = await callAction('UBTConnect_Utils', 'ShareSheet/DataActionGetRecentlyShared', { ...variables });
      return osList(out.Out_SearchResultItemList);
    },
    enabled: fetchId > 0,
    retry: false,
  });
}

/* DataActionGetAvailableMembers is in the domain api/member. This module keeps the name that the block uses, until it
   imports the domain name. The second argument is the number of the submitted search (`fetchId`). */
export { useAvailableMembersQuery as useGetAvailableMembers } from '@/api/member';

/** Action_SubmitShare (ShareSheet.mvc.js:3084-3183): Cache_UserInfo_Get (the user-info cache, shell/userInfo), then
    CS_ShareObject with the sharer's "FirstName LastName" and the target CB user ids. */
export async function cs_ShareObject(
  variables: Omit<ShareSheetVariables, 'SearchTerm'>,
  targetMemberIds: string[],
): Promise<void> {
  const user = (await getUserInformation()).Directory_UserCurrent;
  await callAction('UBTConnect_Utils', 'ActionCS_ShareObject', {
    In_ShareObjectTypeId: variables.In_ShareObjectTypeId,
    In_SharedObjectId: variables.In_ShareableObjectId,
    In_SharingProfileName: `${user.FirstName} ${user.LastName}`,
    In_TargetCBUserIds: wireList(targetMemberIds),
    In_UpdateType: variables.In_UpdateType,
    In_UpdateDate: variables.In_UpdateDate,
  });
}

/** CS_CreateShareProfileLink (Handler_OnClickExternalOption, ShareSheet.mvc.js:2250-2301): the share id and URL. */
export async function cs_CreateShareProfileLink(
  variables: Omit<ShareSheetVariables, 'SearchTerm'>,
): Promise<{ shareId: string; url: string }> {
  const out = await callAction('UBTConnect_Utils', 'ActionCS_CreateShareProfileLink', {
    In_ShareObjectTypeId: variables.In_ShareObjectTypeId,
    In_SharedObjectId: variables.In_ShareableObjectId,
    In_UpdateType: variables.In_UpdateType,
    In_UpdateDate: variables.In_UpdateDate,
  });
  return { shareId: out.ShareId, url: out.URL };
}
