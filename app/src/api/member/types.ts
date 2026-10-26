import type { ActionInputs, PathOf } from '@/api/client/callAction';

/* Domain types of a member: the fields that the UI reads. The names are those of the OutSystems records, because the
   callers read them as they are. The wire types stay in src/api/schema.d.ts. Long Integer ids are text. */

/** The inputs of DataActionGetAvailableMembers: the ShareSheet variables that its flow sets (original names). The
    other block variables are not sent. A type alias, not an interface: the contract inputs have an index signature. */
export type AvailableMembersCallInputs = {
  In_ShareObjectTypeId: string;
  In_ShareableObjectId: string;
  In_UpdateType: string;
  In_UpdateDate: string;
  SearchTerm: string;
};

/** A member that a search found (Connect_Search_CS.SearchResult), with the fields that the share sheet and
    SearchResult_Item read. */
export interface MemberSearchResult {
  Id: string;
  HouseholderId: string;
  Name: string;
  Location: string;
  AdditionalInformation: string;
  /** Connect_Entity identifier. */
  Type: string;
  /** True: the subscription of the user does not allow a share with this member. */
  RecordDisabled: boolean;
}

/** A member record (APIDomain_Directory_IS.Directory_MemberById): the id, the names, the locality and the country. */
export interface Member {
  Id: string;
  FirstName: string;
  /** The OutSystems attribute name (lower-case "n"). */
  Lastname: string;
  LocalityName: string;
  CountryName: string;
}

/** UI_AccountForm (Connect_Household_CS): the account form that Member_EditDetails_Service saves. The Profile screen
    keeps the form in this shape and the service takes it as it is, so the domain type is the contract type. */
export type MemberAccountForm = ActionInputs<
  PathOf<'UBTConnect', 'ServiceAPIMember_EditDetails_Service'>
>['UI_AccountForm'];
