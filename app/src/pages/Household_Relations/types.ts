import type { UI_HouseholdMember } from '@/shared/UBTConnect/lib/structures';

/** Route inputs of UBTConnect.Directory_Household.Household_Relations (Household_Relations.mvc.js model :13-30,
    query string). */
export interface Household_RelationsInputs {
  /** HouseholdId (Long Integer, kept as a string): passed to HouseholdRelations_Block. */
  HouseholdId: string;
  /** MemberId (Long Integer, kept as a string): passed to HouseholdRelations_Block. */
  MemberId: string;
}

/** Outputs of DataActionGet_MemberDetails (analysis/types.ts Get_MemberDetailsResponse), lists unwrapped. */
export interface Get_MemberDetailsOutput {
  MemberName: string;
  FamilyName: string;
  Father: UI_HouseholdMember;
  Mother: UI_HouseholdMember;
  FormerSpouses: UI_HouseholdMember[];
  ParentHouseholdId: string;
}

/** Outputs of DataActionGet_ParentHouseholdDetails (analysis/types.ts Get_ParentHouseholdDetailsResponse). */
export interface Get_ParentHouseholdDetailsOutput {
  Out_siblingRelations: UI_HouseholdMember[];
}
