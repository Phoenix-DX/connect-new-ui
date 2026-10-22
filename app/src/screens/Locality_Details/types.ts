/** Domain types of Locality_Details (wire shapes stay in api.ts and mocks.ts). Long Integers stay text. */
import type { UI_Subdivision_Card_Content } from '@/shared/UBTConnect/lib/structures';
import type { StatisticsOptions } from '@/shared/UBTConnectLibrary/lib/structures';

/** Connect_Geography_CS UI_LocalityDetails_ForHousehold (Get_LocalityDetails.LocalityDetails). */
export interface LocalityDetails {
  bretherenCount: number;
  householdCount: number;
  maiinHallLatitude: string;
  mainHallLongitude: string;
  localityName: string;
  countryName: string;
  countryCode: string;
  timezoneName: string;
  /** UI_LocalityTimezone.TimezoneOffset: seconds, Long Integer as text. */
  timezoneOffset: string;
}

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

/** Connect_Subdivision_CS UI_Subdivision_Card (Get_Subdivision_List.Out_Subdivision_Card_List). */
export interface SubdivisionCard {
  subdivisionId: string;
  content: UI_Subdivision_Card_Content;
}

/** Connect_Subdivision_CS UI_Interchange (GetInterchangesByLocalityId.Out_InterchangeList). */
export interface InterchangeItem {
  interchangeLocalityId: string;
  interchangeLocalityName: string;
  interchangeCountryName: string;
  interchangeDistance: string;
  isBookmarked: boolean;
  interchangeStatistics: StatisticsOptions;
}

/** Connect_CommunityBusiness_CS UI_OneSchool_Card (Get_OneSchoolGlobal_List.Out_OneSchoolGlobal_List). */
export interface OneSchoolCard {
  communityBusinessId: string;
  signedURL: string;
  name: string;
  localityName: string;
  localityId: string;
  countryName: string;
  countryCode: string;
  phone: string;
  email: string;
}
