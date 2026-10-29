import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  fetchAllCountries,
  fetchBrowseCountriesStatistics,
  fetchCountryInfo,
  fetchCountryListCommunityStatistics,
  fetchCountryListStatistics,
  fetchCountryLocalities,
  fetchCountryLocalityStatistics,
  fetchHomeFeedCommunityStatistics,
  fetchRegionSubscribedCountries,
} from './repository';
import type { AllCountriesCallInputs, LocalityStatisticsCallInputs } from './types';

/* The MSW mocks of the test setup answer the recorded TST fixtures (17 countries for the statistics and the list of all
   countries; the three localities of Argentina for CountryDetails; the address format of the United States for
   Profile) and the fictional Connect2_LegacyShared and Assemble worlds (four localities of Argentina, 17 countries of
   the subscription). */

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
});

describe('country repository', () => {
  it('the two DataActionGetCommunityStatistics calls go to their screen with no input', async () => {
    await fetchCountryListCommunityStatistics();
    await fetchHomeFeedCommunityStatistics();
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'CountryList',
        action: 'DataActionGetCommunityStatistics',
        inputNames: [],
      }),
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'HomeFeed',
        action: 'DataActionGetCommunityStatistics',
        inputNames: [],
      }),
    ]);
  });

  it('fetchBrowseCountriesStatistics calls DataActionGetCountriesStatistics of BrowseCountries with no input', async () => {
    const countries = await fetchBrowseCountriesStatistics();
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'BrowseCountries',
        action: 'DataActionGetCountriesStatistics',
        inputNames: [],
      }),
    ]);
    expect(countries).toHaveLength(17);
    expect(countries[0]?.countryCode).toBe('AR');
    expect(countries[0]?.statistics.Title).toBe('Argentina');
    expect(countries[0]?.statistics.Statistics?.map((s) => s.Name)).toEqual([
      'Localities',
      'Brethren',
      'Households',
      'Brothers',
      'Sisters',
    ]);
  });

  it('fetchCountryListStatistics calls DataActionGetCountriesStatistics of CountryList with no input', async () => {
    const countries = await fetchCountryListStatistics();
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'CountryList',
        action: 'DataActionGetCountriesStatistics',
        inputNames: [],
      }),
    ]);
    expect(countries).toHaveLength(17);
    expect(countries[0]).toEqual(expect.objectContaining({ countryCode: 'AR', title: 'Argentina', avatarURL: '' }));
    expect(countries[0]?.texts).toEqual(
      expect.objectContaining({ Members: '397', Households: '125', Localities: '3' }),
    );
  });

  it('fetchCountryLocalityStatistics calls DataActionGetLocalityStatistics of CountryDetails with the inputs as they are', async () => {
    const inputs: LocalityStatisticsCallInputs = {
      Local_MapId: '',
      SearchString: '',
      HasFiltersApplied: false,
      OriginalCountryCode: 'AR',
      CountryCode: 'AR',
    };
    const statistics = await fetchCountryLocalityStatistics(inputs);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'CountryDetails',
        action: 'DataActionGetLocalityStatistics',
        inputNames: Object.keys(inputs).sort(),
      }),
    ]);
    expect(statistics.countryName).toBe('Argentina');
    expect(statistics.localities.map((l) => l.name)).toEqual(['Bahia Blanca', 'Buenos Aires', 'Rosario']);
    expect(statistics.localities[0]).toEqual(
      expect.objectContaining({ localityId: '585', latitude: -38.6921654, mainHallSubdivisionId: '2820' }),
    );
  });

  it('fetchCountryInfo calls DataActionGetCountryInfo of Profile with CurrentCountryCode only', async () => {
    const info = await fetchCountryInfo('US');
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'Profile',
        action: 'DataActionGetCountryInfo',
        inputNames: ['CurrentCountryCode'],
      }),
    ]);
    expect(info).toEqual({
      addressFormat: '[Address1] \r\n[Address2] [Address3] \r\n[Address4] [Address5] [Address6] ',
    });
  });

  it('fetchCountryLocalities calls GetUserLocalitiesForCountryCodeWithGPS and answers the id and the name', async () => {
    const localities = await fetchCountryLocalities('AR');
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'Connect2_LegacyShared',
        action: 'ActionGetUserLocalitiesForCountryCodeWithGPS',
        inputNames: ['CountryCode'],
      }),
    ]);
    expect(localities.map((l) => l.Name)).toEqual(['Bahia Blanca', 'Monte Hermoso', 'Córdoba', 'Neuquén']);
    expect(localities.every((l) => Object.keys(l).sort().join() === 'Id,Name')).toBe(true);
    expect(await fetchCountryLocalities('ZZ')).toEqual([]);
  });

  it('fetchRegionSubscribedCountries calls GetCountriesBySubscription and answers numbers for the counts', async () => {
    const countries = await fetchRegionSubscribedCountries('1');
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'Connect2_LegacyShared',
        action: 'ActionGetCountriesBySubscription',
        inputNames: ['SubscriptionRegionId'],
      }),
    ]);
    expect(countries).toHaveLength(17);
    expect(countries[0]).toEqual({
      Code: 'AR',
      Name: 'Argentina',
      RegionId: 1,
      LocalitiesCount: 4,
      HouseholdersCount: 104,
      MembersCount: 268,
      InitialLatitude: -38.4161,
      InitialLongitude: -63.6167,
      InitialZoom: 4,
      WithinSubscription: true,
    });
  });

  it('fetchAllCountries calls DataActionGetCacheInfo of CacheControl_AllCountries with the inputs as they are', async () => {
    const inputs: AllCountriesCallInputs = {
      CacheKey: 'Unique',
      CacheTypeId: 'Connect_CacheType.AllCountries',
      TimeToLiveSeconds: 7200,
    };
    const countries = await fetchAllCountries(inputs);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect_Utils',
        owner: 'CacheControl_AllCountries',
        action: 'DataActionGetCacheInfo',
        inputNames: Object.keys(inputs).sort(),
      }),
    ]);
    expect(countries.CountryList.List).toHaveLength(17);
    expect(countries.CountryList.List[0]).toEqual({ CountryCode: 'AR', CountryName: 'Argentina' });
  });

  it('a failed call raises the exception of callAction', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await expect(fetchCountryListStatistics()).rejects.toThrow('Request failed with status 500');
  });
});
