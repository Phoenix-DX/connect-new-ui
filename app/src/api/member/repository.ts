import { callAction } from '@/api/client/callAction';
import { toEditMemberDetailsInputs, toMember, toMemberSearchResults } from './mapper';
import type { AvailableMembersCallInputs, Member, MemberAccountForm, MemberSearchResult } from './types';

/* The member calls, with their OutSystems names. Each caller decides when it calls: none of them runs at a screen
   start on its own. */

/** DataActionGetAvailableMembers of the ShareSheet block (UBTConnect_Utils, CW_Share): the members that match the
    search term. The block refreshes it when a search is submitted. */
export async function fetchAvailableMembers(inputs: AvailableMembersCallInputs): Promise<MemberSearchResult[]> {
  return toMemberSearchResults(
    await callAction('UBTConnect_Utils', 'ShareSheet/DataActionGetAvailableMembers', inputs),
  );
}

/** GetMemberByMemberId (server action of Connect2_OrbitMobile_MUI): one member by id. The admin event detail calls it
    for the member of a scanned QR code. */
export async function fetchMember(memberId: string): Promise<Member> {
  return toMember(await callAction('Connect2_OrbitMobile_MUI', 'ActionGetMemberByMemberId', { MemberId: memberId }));
}

/** DataActionFetchCount of FeedBlock_CommunityPopulation (UBTConnect): the number of members of the community
    (UI_MembersStatistics.TotalNumberOfMembers, a Long Integer as text). No screen variables. */
export async function fetchCommunityPopulation(): Promise<string> {
  const out = await callAction('UBTConnect', 'FeedBlock_CommunityPopulation/DataActionFetchCount', {});
  return out.UI_MembersStatistics.TotalNumberOfMembers;
}

/** Member_EditDetails_Service (service action of UBTConnect): saves the account form of the Profile screen. No
    outputs. A write: the mocks answer it, the real server never gets it. */
export async function editMemberDetails(
  accountForm: MemberAccountForm,
  isRequireRequestCreation: boolean,
): Promise<void> {
  await callAction(
    'UBTConnect',
    'ServiceAPIMember_EditDetails_Service',
    toEditMemberDetailsInputs(accountForm, isRequireRequestCreation),
  );
}

/** RequestPhotoUpdate (server action of UBTConnect, screen Menu): asks for an update of the photo of the signed-in
    member. No inputs; the screen does not read Out_IsSuccess. A write: the mocks answer it, the real server never gets
    it. */
export async function requestPhotoUpdate(): Promise<boolean> {
  const out = await callAction('UBTConnect', 'ActionRequestPhotoUpdate', {});
  return out.Out_IsSuccess;
}
