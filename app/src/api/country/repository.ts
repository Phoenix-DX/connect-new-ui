import { callAction } from '@/api/client/callAction';
import {
  toAllCountries,
  toCountryCards,
  toCountryInfo,
  toCountryLocalities,
  toCountryLocalityStatistics,
  toCountrySummaries,
  toRegionSubscribedCountries,
} from './mapper';
import type {
  AllCountries,
  AllCountriesCallInputs,
  CountryCard,
  CountryInfo,
  CountryLocality,
  CountryLocalityStatistics,
  CountrySummary,
  CountryWithMapPosition,
  LocalityStatisticsCallInputs,
} from './types';

/* The server calls of the country domain, called with their OutSystems names and owners: the screens BrowseCountries,
   CountryList, CountryDetails and Profile, the module Connect2_LegacyShared and the block CacheControl_AllCountries.
   Each function makes one call. The callers decide when to fetch (screen flows, query hooks, the memory cache). */

/** DataActionGetCountriesStatistics of BrowseCountries: the countries with their statistics cards. The screen fetches
    it on demand only (Action_RefreshData). The screen has no variables, so the call sends no input. */
export async function fetchBrowseCountriesStatistics(): Promise<CountryCard[]> {
  return toCountryCards(await callAction('UBTConnect', 'BrowseCountries/DataActionGetCountriesStatistics', {}));
}

/** DataActionGetCountriesStatistics of CountryList: the countries with their counts as texts. The call sends no input:
    the server does not read the screen variables that OutSystems sends. */
export async function fetchCountryListStatistics(): Promise<CountrySummary[]> {
  return toCountrySummaries(await callAction('UBTConnect', 'CountryList/DataActionGetCountriesStatistics', {}));
}

/** DataActionGetCommunityStatistics of CountryList (live TST of 2026-10-27, CountryList.mvc.js:1191-1210): the community
    counts (Connect_Geography_CS.UI_CommunityStatistics). The screen only refreshes it; no widget reads the answer, so
    the function returns nothing. The call sends no input. */
export async function fetchCountryListCommunityStatistics(): Promise<void> {
  await callAction('UBTConnect', 'CountryList/DataActionGetCommunityStatistics', {});
}

/** DataActionGetCommunityStatistics of HomeFeed (live TST of 2026-10-27, HomeFeed.mvc.js:690-712): as the one of
    CountryList. */
export async function fetchHomeFeedCommunityStatistics(): Promise<void> {
  await callAction('UBTConnect', 'HomeFeed/DataActionGetCommunityStatistics', {});
}

/** DataActionGetLocalityStatistics of CountryDetails: the localities of a country with their counts, and the country
    name. The inputs are the screen variables that the screen sets before a fetch. */
export async function fetchCountryLocalityStatistics(
  inputs: LocalityStatisticsCallInputs,
): Promise<CountryLocalityStatistics> {
  return toCountryLocalityStatistics(
    await callAction('UBTConnect', 'CountryDetails/DataActionGetLocalityStatistics', inputs),
  );
}

/** DataActionGetCountryInfo of Profile: the address format of a country. CurrentCountryCode is the only screen
    variable that the server reads. */
export async function fetchCountryInfo(currentCountryCode: string): Promise<CountryInfo> {
  return toCountryInfo(
    await callAction('UBTConnect', 'Profile/DataActionGetCountryInfo', { CurrentCountryCode: currentCountryCode }),
  );
}

/** The server action GetUserLocalitiesForCountryCodeWithGPS of Connect2_LegacyShared (called by its client action
    GetCountryInformation): the localities of a country. */
export async function fetchCountryLocalities(countryCode = ''): Promise<CountryLocality[]> {
  return toCountryLocalities(
    await callAction('Connect2_LegacyShared', 'ActionGetUserLocalitiesForCountryCodeWithGPS', {
      CountryCode: countryCode,
    }),
  );
}

/** The server action GetCountriesBySubscription of Connect2_LegacyShared (called by its client action
    GetRegionSubscribedCountries): the countries of a subscription region, with their map positions. */
export async function fetchRegionSubscribedCountries(subscriptionRegionId = ''): Promise<CountryWithMapPosition[]> {
  return toRegionSubscribedCountries(
    await callAction('Connect2_LegacyShared', 'ActionGetCountriesBySubscription', {
      SubscriptionRegionId: subscriptionRegionId,
    }),
  );
}

/** DataActionGetCacheInfo of CacheControl_AllCountries: the list of all countries. The block calls it when its memory
    cache has no entry. */
export async function fetchAllCountries(inputs: AllCountriesCallInputs): Promise<AllCountries> {
  return toAllCountries(
    await callAction('UBTConnect_Utils', 'CacheControl_AllCountries/DataActionGetCacheInfo', inputs),
  );
}
