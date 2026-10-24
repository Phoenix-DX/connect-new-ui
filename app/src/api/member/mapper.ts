import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import { osList } from '@/lib/os-wire';
import type { Member, MemberAccountForm, MemberSearchResult } from './types';

/** The outputs of DataActionGetAvailableMembers, as the contract describes them. */
export type AvailableMembersWire = ActionOutputs<
  PathOf<'UBTConnect_Utils', 'ShareSheet/DataActionGetAvailableMembers'>
>;
/** The outputs of GetMemberByMemberId, as the contract describes them. */
export type MemberWire = ActionOutputs<PathOf<'Connect2_OrbitMobile_MUI', 'ActionGetMemberByMemberId'>>;
/** The inputs of Member_EditDetails_Service, as the contract describes them. */
export type EditMemberDetailsWire = ActionInputs<PathOf<'UBTConnect', 'ServiceAPIMember_EditDetails_Service'>>;

type SearchResultWire = AvailableMembersWire['Out_SearchResultItemList']['List'][number];

/** A search result, with the fields that the UI reads. */
const toMemberSearchResult = (w: SearchResultWire): MemberSearchResult => ({
  Id: w.Id,
  HouseholderId: w.HouseholderId,
  Name: w.Name,
  Location: w.Location,
  AdditionalInformation: w.AdditionalInformation,
  Type: w.Type,
  RecordDisabled: w.RecordDisabled,
});

/** The members of DataActionGetAvailableMembers: Out_SearchResultItemList, unwrapped. */
export const toMemberSearchResults = (wire: AvailableMembersWire): MemberSearchResult[] =>
  osList(wire.Out_SearchResultItemList).map(toMemberSearchResult);

/** The member of GetMemberByMemberId (its output Response). */
export const toMember = (wire: MemberWire): Member => ({
  Id: wire.Response.Id,
  FirstName: wire.Response.FirstName,
  Lastname: wire.Response.Lastname,
  LocalityName: wire.Response.LocalityName,
  CountryName: wire.Response.CountryName,
});

/** The inputs of Member_EditDetails_Service: the account form as it is, and isRequireRequestCreation. */
export const toEditMemberDetailsInputs = (
  accountForm: MemberAccountForm,
  isRequireRequestCreation: boolean,
): EditMemberDetailsWire => ({
  UI_AccountForm: accountForm,
  isRequireRequestCreation,
});
