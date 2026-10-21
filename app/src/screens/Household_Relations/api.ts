import { callAction } from '../../lib/api';
import { osList } from '../../lib/os-wire';
import type { Get_MemberDetailsOutput, Get_ParentHouseholdDetailsOutput, Household_RelationsInputs } from './types';

const osLongInput = (v: string | null): string => (v === null || v === '' ? '0' : v);

/** HouseholdId and MemberId (Long Integer) from the query string, OutSystems default 0 when absent
    (Household_Relations.mvc.js model :13-30, setInputs). */
export function readHousehold_RelationsInputs(params: URLSearchParams): Household_RelationsInputs {
  return { HouseholdId: osLongInput(params.get('HouseholdId')), MemberId: osLongInput(params.get('MemberId')) };
}

/** Block variables OutSystems sends with the block's data actions (screenData.variables, calls.md "Screen variables
    sent with the call"): the inputs, UserAge_Visibility, isLoading and ShowNotesSheet. */
export type HouseholdRelationsCallInputs = {
  HouseholdId: string;
  MemberId: string;
  UserAge_Visibility: boolean;
  isLoading: boolean;
  ShowNotesSheet: boolean;
};

/** DataActionGet_MemberDetails (HouseholdRelations_Block.mvc.js:1657-1685): on demand only (Action_Refresh_Get_MemberDetails
    from ScreenEvent_OnReady). */
export async function get_MemberDetails(inputs: HouseholdRelationsCallInputs): Promise<Get_MemberDetailsOutput> {
  const out = await callAction('UBTConnect', 'HouseholdRelations_Block/DataActionGet_MemberDetails', inputs);
  return {
    MemberName: out.MemberName,
    FamilyName: out.FamilyName,
    Father: out.Father,
    Mother: out.Mother,
    FormerSpouses: osList(out.FormerSpouses),
    ParentHouseholdId: out.ParentHouseholdId,
  };
}

/** DataActionGet_ParentHouseholdDetails (HouseholdRelations_Block.mvc.js:1609-1632): on demand only
    (OnAfterFetch_Get_MemberDetails). */
export async function get_ParentHouseholdDetails(
  inputs: HouseholdRelationsCallInputs,
): Promise<Get_ParentHouseholdDetailsOutput> {
  const out = await callAction('UBTConnect', 'HouseholdRelations_Block/DataActionGet_ParentHouseholdDetails', inputs);
  return { Out_siblingRelations: osList(out.Out_siblingRelations) };
}
