/* Domain types of the Photobook route (wire shapes stay in api.ts / mocks.ts). */

/** Route inputs (Photobook.mvc.js model :96-104): Long Integers kept as strings, "0" when absent. */
export interface PhotobookInputs {
  In_HouseholdId: string;
  In_LocalityId: string;
}

/** Connect_Household_CS UI_PhotobookHousehold. */
export interface PhotobookHousehold {
  householdId: string;
  householdName: string;
  locality: string;
}

/** UBTConnect SelectedHousehold (Id, Position). */
export interface SelectedHousehold {
  id: string;
  position: number;
}

/** DataActionGetHouseholdCaption outputs (Photobook_Options_Left). */
export interface HouseholdCaption {
  householdCaption: string;
  lastFetchedHousehold: PhotobookHousehold;
}
