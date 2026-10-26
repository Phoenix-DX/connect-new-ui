import { useQuery } from '@tanstack/react-query';
import { callAction } from '@/api/client/callAction';
import { osList, wireList } from '@/lib/os-wire';
import type { SearchResult } from '@/lib/ubtConnectUtils/structures';
import { shareKeys } from './keys';
import type { ShareProfileLink, ShareSheetVariables } from './types';

/* The ShareSheet block of UBTConnect_Utils (CW_Share) in its own module: only the lazily loaded ShareSheet chunk
   imports it, so the HomeFeed first load does not carry it twice (W21). */

/** DataActionGetRecentlyShared (ShareSheet.mvc.js:2039-2065): the recently shared members, sent with the block's screen
    variables. */
export async function fetchRecentlyShared(variables: ShareSheetVariables): Promise<SearchResult[]> {
  const out = await callAction('UBTConnect_Utils', 'ShareSheet/DataActionGetRecentlyShared', { ...variables });
  return osList(out.Out_SearchResultItemList);
}

/** CS_ShareObject (Action_SubmitShare, ShareSheet.mvc.js:3084-3183): shares the object with the target CB users, in the
    name of the sharer ("FirstName LastName", read by the caller from the user-info cache). */
export async function csShareObject(
  variables: Omit<ShareSheetVariables, 'SearchTerm'>,
  sharingProfileName: string,
  targetMemberIds: string[],
): Promise<void> {
  await callAction('UBTConnect_Utils', 'ActionCS_ShareObject', {
    In_ShareObjectTypeId: variables.In_ShareObjectTypeId,
    In_SharedObjectId: variables.In_ShareableObjectId,
    In_SharingProfileName: sharingProfileName,
    In_TargetCBUserIds: wireList(targetMemberIds),
    In_UpdateType: variables.In_UpdateType,
    In_UpdateDate: variables.In_UpdateDate,
  });
}

/** CS_CreateShareProfileLink (Handler_OnClickExternalOption, ShareSheet.mvc.js:2250-2301): the share id and URL. */
export async function csCreateShareProfileLink(
  variables: Omit<ShareSheetVariables, 'SearchTerm'>,
): Promise<ShareProfileLink> {
  const out = await callAction('UBTConnect_Utils', 'ActionCS_CreateShareProfileLink', {
    In_ShareObjectTypeId: variables.In_ShareObjectTypeId,
    In_SharedObjectId: variables.In_ShareableObjectId,
    In_UpdateType: variables.In_UpdateType,
    In_UpdateDate: variables.In_UpdateDate,
  });
  return { shareId: out.ShareId, url: out.URL };
}

/** DataActionGetRecentlyShared as a query, fetched on demand only: `fetchId` > 0 = a Refresh Query was asked (0: none).
    No retry: OutSystems does not retry a failed data action. */
export function useRecentlySharedQuery(variables: ShareSheetVariables, fetchId: number) {
  return useQuery({
    queryKey: shareKeys.recentlyShared(variables, fetchId),
    queryFn: () => fetchRecentlyShared(variables),
    enabled: fetchId > 0,
    retry: false,
  });
}
