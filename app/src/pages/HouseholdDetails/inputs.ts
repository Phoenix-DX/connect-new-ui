/** The route inputs of HouseholdDetails, from the query string. The screen calls no action of its own: the household
    details (containers/HouseholdDetails), BottomBarMenu and CommonUI_InsideLayout make their own calls.
    @origin UBTConnect.Directory_Household.HouseholdDetails */
export interface HouseholdDetailsInputs {
  /** HouseholdId (Long Integer, kept as a string): passed to the household details. */
  HouseholdId: string;
}

const osLongInput = (v: string | null): string => (v === null || v === '' ? '0' : v);

/** HouseholdId (Long Integer) from the query string; the OutSystems default 0 when it is absent. */
export function readHouseholdDetailsInputs(params: URLSearchParams): HouseholdDetailsInputs {
  return { HouseholdId: osLongInput(params.get('HouseholdId')) };
}
