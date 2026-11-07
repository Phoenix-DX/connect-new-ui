/** The route inputs of Household_Relations, from the query string by their original names, with their OutSystems
    defaults. The screen gives them to HouseholdRelations_Block. The server calls of the block are in the domain
    api/household (DataActionGet_MemberDetails and DataActionGet_ParentHouseholdDetails).
    @origin UBTConnect.Directory_Household.Household_Relations */
export interface Household_RelationsInputs {
  /** HouseholdId (Long Integer as text, "0" when absent): passed to HouseholdRelations_Block. */
  HouseholdId: string;
  /** MemberId (Long Integer as text, "0" when absent): passed to HouseholdRelations_Block. */
  MemberId: string;
}

/** OutSystems Long Integer input from the query string: "0" for an absent or empty value. */
const osLongInput = (value: string | null): string => (value === null || value === '' ? '0' : value);

/** HouseholdId and MemberId from the query string, with the OutSystems default 0 when absent. */
export function readHousehold_RelationsInputs(params: URLSearchParams): Household_RelationsInputs {
  return { HouseholdId: osLongInput(params.get('HouseholdId')), MemberId: osLongInput(params.get('MemberId')) };
}
