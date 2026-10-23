/** The route inputs of Photobook, from the query string by their original names. The server call of the screen is
    in the domain api/household (DataActionGetLocalityHouseholdIds).
    @origin UBTConnect.Directory_Photobook.Photobook */
export interface PhotobookInputs {
  /** In_HouseholdId (Long Integer as text, "0" when absent): the household that the photobook opens on. */
  In_HouseholdId: string;
  /** In_LocalityId (Long Integer as text, "0" when absent). */
  In_LocalityId: string;
}

/** OutSystems Long Integer input from the query string: "0" for an absent or empty value. */
const osLongInput = (value: string | null): string => (value === null || value === '' ? '0' : value);

/** Screen inputs from the query string with the original names and the OutSystems default 0. */
export function readPhotobookInputs(params: URLSearchParams): PhotobookInputs {
  return {
    In_HouseholdId: osLongInput(params.get('In_HouseholdId')),
    In_LocalityId: osLongInput(params.get('In_LocalityId')),
  };
}
