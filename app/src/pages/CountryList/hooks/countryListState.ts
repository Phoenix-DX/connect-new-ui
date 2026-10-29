import type { CountrySummary } from '@/api/country';
import type { Directory_UserCurrent } from '@/lib/ubtConnectUtils/structures';

/** The variables of the screen CountryList, the reducer and the client actions. Pure; the flows are in
    useCountryList.
    @origin UBTConnect.Directory_Locality.CountryList */

/** The data fetch status of GetCountriesStatistics, as the List shows it: `list-loading` until it answers,
    `list-error` after a failed fetch (captured dom/loading.html and dom/offline.html). */
export type CountriesFetchStatus = 'notFetched' | 'ok' | 'error';

/** LocalCacheControl_UserInformation (BooleanDirectory_UserCurrent): the user's geography that the two header cards
    show, and isFetched. Long Integers stay text. */
export interface UserGeography {
  isFetched: boolean;
  localityId: string;
  localityName: string;
  localitySubdivisionCount: string;
  countryCode: string;
  countryName: string;
  countryLocalityCount: string;
}

/** The variables of the screen. */
export interface CountryListState {
  /** GetCountriesStatistics.Out_CountriesStatistics (the skeleton rows while loading). */
  countries: CountrySummary[];
  fetchStatus: CountriesFetchStatus;
  isDataFetched: boolean;
  hasFetchError: boolean;
  /** LocalCacheControl_UserInformation. */
  user: UserGeography;
  /** BottomSheetId (the legend sheet). */
  bottomSheetId: string;
}

/** An assignment of one or more variables. */
type CountryListPatch = Partial<CountryListState>;

/** LocalCacheControl_UserInformation before CacheControl_UserInfo_Wrapper answers. */
export const NO_USER_GEOGRAPHY: UserGeography = {
  isFetched: false,
  localityId: '0',
  localityName: '',
  localitySubdivisionCount: '0',
  countryCode: '',
  countryName: '',
  countryLocalityCount: '0',
};

/** The variables after OnInitialize (the screen has no OnInitialize: the defaults). */
export const INITIAL_COUNTRY_LIST_STATE: CountryListState = {
  countries: [],
  fetchStatus: 'notFetched',
  isDataFetched: false,
  hasFetchError: false,
  user: NO_USER_GEOGRAPHY,
  bottomSheetId: '',
};

/** The variables after an assignment. */
export const countryListReducer = (state: CountryListState, patch: CountryListPatch): CountryListState => ({
  ...state,
  ...patch,
});

/** CacheControl_UserInfo_WrapperResult: LocalCacheControl_UserInformation from the user's geography, isFetched
    True. */
export function userGeographyOf(user: Directory_UserCurrent): UserGeography {
  const g = user.Directory_UserCurrent_Geography;
  return {
    isFetched: true,
    localityId: g.Locality_Id,
    localityName: g.Locality_Name,
    localitySubdivisionCount: g.Locality_SubdivisionCount,
    countryCode: g.Country_Code,
    countryName: g.Country_Name,
    countryLocalityCount: g.Country_LocalityCount,
  };
}

/** GetSkeleton_UI_CountryStatistics: Statistics.Title "Australia", Statistics.AvatarURL "-" (its Statistics list of
    five counts is not read by this screen), everything else empty. */
export function getSkeleton_UI_CountryStatistics(): CountrySummary {
  return { countryCode: '', title: 'Australia', avatarURL: '-', texts: {} };
}

/** GetSkeletonList_UI_CountryStatistics(ListLength): ListLength skeleton rows. */
export function getSkeletonList_UI_CountryStatistics(listLength: number): CountrySummary[] {
  return Array.from({ length: Math.max(0, listLength) }, getSkeleton_UI_CountryStatistics);
}

/** OS TextToLongInteger then LongIntegerToText: the digits of a whole number, "0" for any other text (a country code). */
export function longIntegerTextOf(text: string): string {
  const t = text.trim();
  return /^[+-]?\d+$/.test(t) ? BigInt(t).toString() : '0';
}

/** LongIntegerToText(count) + (count = 1 ? singular : plural); an empty count is 0. */
export function countText(count: string, singular: string, plural: string): string {
  const n = longIntegerTextOf(count);
  return n + (n === '1' ? singular : plural);
}
