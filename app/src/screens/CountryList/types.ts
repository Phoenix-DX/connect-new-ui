/* A country row of the screen (Connect_Geography_CS UI_CountryStatistics: the code, the title, the avatar and the
   counts as texts) is a domain type of api/country. This module keeps the name that the screen and its client actions
   use. */
export type { CountrySummary as CountryStatistics } from '@/api/country';

/** LocalCacheControl_UserInformation (BooleanDirectory_UserCurrent, CountryList.mvc.js:32-34): the user's geography
    the two header cards show, and isFetched. Long Integers stay text. */
export interface UserGeography {
  isFetched: boolean;
  localityId: string;
  localityName: string;
  localitySubdivisionCount: string;
  countryCode: string;
  countryName: string;
  countryLocalityCount: string;
}
