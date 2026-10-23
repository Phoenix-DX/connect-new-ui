/** Domain types of Locality_Details (wire shapes stay in api.ts and mocks.ts). Long Integers stay text. */

/* The locality records of the screen and its tag blocks are domain types of api/locality: UI_LocalityDetails_ForHousehold
   (LocalityDetails), UI_Subdivision_Card (SubdivisionCard), UI_Interchange (InterchangeItem) and UI_OneSchool_Card
   (OneSchoolCard). This module keeps the names that the screen and the blocks use. */
export type { Interchange as InterchangeItem, LocalityDetails, OneSchoolCard, SubdivisionCard } from '@/api/locality';

/** Connect_Household_CS UI_LocalityHousehold (GetLocalityHouseholds.LocalityHouseholds). */
export interface LocalityHousehold {
  householdId: string;
  householdName: string;
  childrenNames: string;
  isBookmarked: boolean;
  localityName: string;
  countryName: string;
}

/** UBTConnect_Utils LazyImage (GetMembers.HouseholdMembers). */
export interface LazyImageItem {
  imageURL: string;
  entityId: string;
  entityType: string;
}

export interface HouseholdMembers {
  members: LazyImageItem[];
  visibleAvatars: number;
}
