import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { eventLocalities } from '@/mocks/fictional/ldm';
import { householdsOfSupperMeeting } from '@/mocks/fictional/directory';
import { sampleInterchanges, sampleOneSchools, sampleSubdivisions } from '@/pages/Locality_Details/mocks';
import { MOCK_LOCALITY_SUBDIVISIONS } from '@/mocks/modules/Connect2_LegacyShared/mocks';
import {
  fetchAllLocalities,
  fetchBulkSubdivisions,
  fetchCommunityBusinessShareCard,
  fetchEventFilterLocalities,
  fetchInterchanges,
  fetchLocalityCardList,
  fetchLocalityDetails,
  fetchLocalityInformation,
  fetchOneSchoolCards,
  fetchOneSchoolGlobalDetails,
  fetchSubdivisionCards,
  fetchSubdivisionDetails,
  fetchSubdivisionHouseholds,
  fetchSubdivisionName,
} from './repository';

/* The MSW mocks of the test setup: AssembleEvents/mocks.ts (the fictional halls), BrowseDirectory/mocks.ts,
   containers/SupperMeetingDetails/mocks.ts (DataActionGetSubdivision: a TST recording, non-person data;
   DataActionGetSubdivisionHouseholds: the fictional households), CacheControl_AllLocalities/mocks.ts (a TST recording),
   Locality_Details/mocks.ts (the recorded locality and the fictional tag cards), LDM_MyEvents_V2/mocks.ts (the
   localities of the fictional past events) and Connect2_LegacyShared/lib/mocks.ts (the fictional localities and
   halls). */

const call = () => window.__osCalls?.[0];

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
});

describe('locality repository: screen and block data actions', () => {
  it('fetchSubdivisionName calls DataActionGetSubdivisionName with SubdivisionName empty', async () => {
    const name = await fetchSubdivisionName({
      SubdivisionId: '1210',
      ShowBackNavigation: true,
      IsUserSubdivision: false,
    });
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'Connect2_Assemble_MUI',
        owner: 'ScreenBlock_AssembleEvents',
        action: 'DataActionGetSubdivisionName',
        inputNames: ['IsUserSubdivision', 'ShowBackNavigation', 'SubdivisionId', 'SubdivisionName'],
      }),
    ]);
    expect(name).toBe('Zapiola (Main Meeting Room)');
  });

  it('fetchLocalityCardList calls DataActionGetLocalityStatistics of BrowseDirectory with the screen variables', async () => {
    const data = await fetchLocalityCardList('AR');
    expect(call()).toEqual(
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'BrowseDirectory',
        action: 'DataActionGetLocalityStatistics',
        inputNames: ['Center', 'CountryCode', 'Local_MapId', 'MarkersList'],
      }),
    );
    expect(data.countryName).toBe('Argentina');
    expect(data.localities.map((l) => l.name)).toEqual(['Bahia Blanca', 'Buenos Aires', 'Rosario']);
    expect(data.localities[0]).toEqual(
      expect.objectContaining({ localityId: '585', latitude: -38.6921654, longitude: -62.2906036 }),
    );
    expect(data.localities[0]?.statistics.Statistics?.[0]).toEqual({
      Name: 'Supper Meetings',
      Value: '3',
      IconColorId: '',
      IconId: '',
    });
  });

  it('fetchEventFilterLocalities calls DataActionGetEventLocalitiesForFilter with the block variables', async () => {
    const localities = await fetchEventFilterLocalities({
      In_HasLoaded: true,
      In_DefaultDateRangeInMonths: 24,
      In_IsShowing: true,
      IsShowFilters: false,
      HasLocalityData: false,
    });
    expect(call()).toEqual(
      expect.objectContaining({
        module: 'Connect2_OrbitMobile_MUI',
        owner: 'MyEvents_MyTimelineFilterButton',
        action: 'DataActionGetEventLocalitiesForFilter',
        inputNames: ['HasLocalityData', 'In_DefaultDateRangeInMonths', 'In_HasLoaded', 'In_IsShowing', 'IsShowFilters'],
      }),
    );
    expect(localities).toEqual([
      { IdAsText: 'AllLocalities', Name: 'All Localities', IsSelected: true },
      ...eventLocalities(),
    ]);
  });

  it('fetchLocalityDetails calls DataActionGet_LocalityDetails with the screen variables', async () => {
    const details = await fetchLocalityDetails({
      TagsList: [{ Text: 'Households', Identifier: 'Households', IsSelected: true }],
      HeaderIsScrolled: false,
      TagsList_SelectedTag: 'Households',
      IsUserLocality: true,
      LocalityLabel: 'Bahia Blanca, Argentina',
      IsScreenInitialized: true,
      LocalityId: '252',
      PreloadedLocalityLabel: '',
    });
    expect(call()).toEqual(
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'Locality_Details',
        action: 'DataActionGet_LocalityDetails',
        inputNames: [
          'HeaderIsScrolled',
          'IsScreenInitialized',
          'IsUserLocality',
          'LocalityId',
          'LocalityLabel',
          'PreloadedLocalityLabel',
          'TagsList',
          'TagsList_SelectedTag',
        ],
      }),
    );
    expect(details).toEqual({
      bretherenCount: 95,
      householdCount: 25,
      maiinHallLatitude: '-38.6921654',
      mainHallLongitude: '-62.2906036',
      localityName: 'Bahia Blanca',
      countryName: 'Argentina',
      countryCode: 'AR',
      timezoneName: 'ART',
      timezoneOffset: '-10800',
    });
  });

  it('fetchSubdivisionCards calls DataActionGet_Subdivision_List of Locality_Subdivisions', async () => {
    const cards = await fetchSubdivisionCards({
      getSubdivisions_StartIndex: 0,
      getSubdivisions_Offset: 20,
      subdivision_Card_List: [],
      subdivision_Card_List_IsLoading: true,
      isPaginated: false,
      localityId: '252',
    });
    expect(call()).toEqual(
      expect.objectContaining({
        owner: 'Locality_Subdivisions',
        action: 'DataActionGet_Subdivision_List',
        inputNames: [
          'GetSubdivisions_Offset',
          'GetSubdivisions_StartIndex',
          'IsPaginated',
          'LocalityId',
          'Subdivision_Card_List',
          'Subdivision_Card_List_IsLoading',
        ],
      }),
    );
    expect(cards).toEqual(
      sampleSubdivisions.map((s) => ({ subdivisionId: s.SubdivisionId, content: s.Subdivision_Card_Content })),
    );
  });

  it('fetchInterchanges calls DataActionGetInterchangesByLocalityId with In_InterchangeLocalityId', async () => {
    const interchanges = await fetchInterchanges('252');
    expect(call()).toEqual(
      expect.objectContaining({
        owner: 'Locality_Interchange',
        action: 'DataActionGetInterchangesByLocalityId',
        inputNames: ['In_InterchangeLocalityId'],
      }),
    );
    expect(interchanges.map((i) => [i.interchangeLocalityId, i.interchangeLocalityName])).toEqual(
      sampleInterchanges.map((i) => [i.InterchangeLocalityId, i.InterchangeLocalityName]),
    );
    expect(interchanges[0]?.interchangeStatistics.Statistics).toEqual(
      sampleInterchanges[0]?.InterchangeStatistics.Statistics.List,
    );
  });

  it('fetchOneSchoolCards calls DataActionGet_OneSchoolGlobal_List of Locality_OneSchoolGlobal', async () => {
    const cards = await fetchOneSchoolCards({
      getOneSchoolGlobal_List_StartIndex: 0,
      getOneSchoolGlobal_List_Offset: 10,
      get_OneSchoolGlobal_List_IsLoading: true,
      out_OneSchoolGlobal_List2: [],
      in_LocalityId: '252',
      in_LocalityTimezoneData: { TimezoneName: 'ART', TimezoneOffset: '-10800' },
    });
    expect(call()).toEqual(
      expect.objectContaining({
        owner: 'Locality_OneSchoolGlobal',
        action: 'DataActionGet_OneSchoolGlobal_List',
        inputNames: [
          'GetOneSchoolGlobal_List_Offset',
          'GetOneSchoolGlobal_List_StartIndex',
          'Get_OneSchoolGlobal_List_IsLoading',
          'In_LocalityId',
          'In_LocalityTimezoneData',
          'Out_OneSchoolGlobal_List2',
        ],
      }),
    );
    expect(cards.map((c) => [c.communityBusinessId, c.name, c.localityName])).toEqual(
      sampleOneSchools.map((s) => [s.CommunityBusinessId, s.OneSchool_Card_Content.Name, 'Bahia Blanca']),
    );
  });

  it('fetchSubdivisionDetails calls DataActionGetSubdivision with In_SubdivsionId and keeps the card', async () => {
    const details = await fetchSubdivisionDetails('2820');
    expect(call()).toEqual(
      expect.objectContaining({
        owner: 'SupperMeeting_DetailsBlock',
        action: 'DataActionGetSubdivision',
        inputNames: ['In_SubdivsionId'],
      }),
    );
    expect(details.Subdivision_Card.SubdivisionId).toBe('2820');
    expect(details.Subdivision_Card.Subdivision_Card_Content.Name).toBe('Zapiola (Main Meeting Room)');
    expect(details).not.toHaveProperty('Subdivision_Actions');
  });

  it('fetchSubdivisionHouseholds calls DataActionGetSubdivisionHouseholds with In_SubdivisionId and unwraps the cards', async () => {
    const households = await fetchSubdivisionHouseholds('1210');
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'SupperMeeting_HouseholdList',
        action: 'DataActionGetSubdivisionHouseholds',
        inputNames: ['In_SubdivisionId'],
      }),
    ]);
    expect(households.map((h) => h.HouseholdId)).toEqual(householdsOfSupperMeeting('1210').map((h) => h.id));
    expect(Object.keys(households[0] ?? {}).sort()).toEqual(['ChildrenNames', 'HouseholdId', 'HouseholdName']);
  });

  it('fetchAllLocalities calls DataActionGetCacheInfo of CacheControl_AllLocalities with the inputs as they are', async () => {
    const all = await fetchAllLocalities({ CacheKey: 'Unique', CacheTypeId: 'AllLocalities', TimeToLiveSeconds: 7200 });
    expect(call()).toEqual(
      expect.objectContaining({
        module: 'UBTConnect_Utils',
        owner: 'CacheControl_AllLocalities',
        action: 'DataActionGetCacheInfo',
        inputNames: ['CacheKey', 'CacheTypeId', 'TimeToLiveSeconds'],
      }),
    );
    expect(all.LocalityList.List.length).toBeGreaterThan(0);
    expect(all.LocalityList.List[0]).toEqual({
      LocalityId: '1',
      Name: 'Zürich',
      CountryName: 'Switzerland',
      CountryCode: 'ch',
    });
  });
});

describe('locality repository: Connect2_LegacyShared server actions', () => {
  it('fetchLocalityInformation calls GetLocalityInformation and answers CacheableLocalityInformation', async () => {
    const info = await fetchLocalityInformation('254');
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'Connect2_LegacyShared',
        action: 'ActionGetLocalityInformation',
        inputNames: ['LocalityId'],
      }),
    ]);
    expect(info.Name).toBe('Córdoba');
    expect(info.LocalitySubdivisionsList.List.map((s) => s.Id)).toEqual(
      (MOCK_LOCALITY_SUBDIVISIONS['254'] ?? []).map((s) => s.Id),
    );
  });

  it('fetchBulkSubdivisions calls GetBulkSubdivisions_V2 once for the keys and answers one result per known key', async () => {
    const results = await fetchBulkSubdivisions(['1210', '424242']);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'Connect2_LegacyShared',
        action: 'ActionGetBulkSubdivisions_V2',
        inputNames: ['CacheKeys'],
      }),
    ]);
    expect(results.map((r) => [r.CacheKey, r.Error])).toEqual([['1210', '']]);
    expect(results[0]?.Value.Subdivision.Locality).toEqual({ Id: '252', Country: { Code: 'AR' } });
    expect(results[0]?.Value.HouseholdListResponse.List.map((h) => h.Id)).toEqual(
      householdsOfSupperMeeting('1210').map((h) => h.id),
    );
  });
});

/* ---- OneSchoolGlobalDetails: DataActionGetOneSchoolGlobalDetails ---- */

describe('locality repository: OneSchoolGlobalDetails', () => {
  it('fetchOneSchoolGlobalDetails calls DataActionGetOneSchoolGlobalDetails with the screen variables', async () => {
    const details = await fetchOneSchoolGlobalDetails({
      lookupSections: {
        Actions: { Singular: 'Action', Plural: 'Actions' },
        Households: { Singular: 'Household', Plural: 'Households' },
        OneSchoolStatistitics: { Singular: 'Show student numbers', Plural: 'Show student numbers' },
      },
      selected_OneschoolGlobal_SubsectionId: 'Upcoming events',
      type_OneschoolGlobal_SubsectionId: { UpcomingEvents: 'Upcoming events', AboutOurCampus: 'About our campus' },
      localIsBookmarked: false,
      in_OneSchoolGlobalId: '1430',
    });
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'OneSchoolGlobalDetails_Block',
        action: 'DataActionGetOneSchoolGlobalDetails',
        inputNames: [
          'In_OneSchoolGlobalId',
          'LocalIsBookmarked',
          'LookupSections',
          'Selected_OneschoolGlobal_SubsectionId',
          'Type_OneschoolGlobal_SubsectionId',
        ],
      }),
    ]);
    // The mock of the page: the recorded card with the cast name of school 1430 and the neutral landscape photo.
    const { signedURL, ...card } = details.card;
    expect(signedURL).toMatch(/mock-images\/placeholder-landscape\.svg$/);
    expect(card).toEqual({
      communityBusinessId: '4281',
      name: 'OneSchool Alem',
      address: 'et Voluptate Sed Commodo Nostrud',
      areasServed: 'Bahia Blanca',
      businessLinks: [{ text: 'tst', link: 'https://bw.campusandco.us', id: '0' }],
    });
    expect(details.householdCoordinates).toEqual({ Longitude: '0.0', Latitude: '0.0', UseCoordinates: false });
  });
});

/* LegacyShareObject/mocks.ts answers one fictional share card with empty photo fields. */
describe('locality repository: community business share card', () => {
  it('fetchCommunityBusinessShareCard calls Get_UI_CommunityBusinessShareCard with In_CommunityBusinessId', async () => {
    const card = await fetchCommunityBusinessShareCard('1430');
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'Connect2_LegacyShared',
        action: 'ServiceAPIGet_UI_CommunityBusinessShareCard',
        inputNames: ['In_CommunityBusinessId'],
      }),
    ]);
    expect(card).toEqual({
      name: 'OneSchool Global Bahia Blanca',
      areasServed: 'Bahia Blanca',
      countryName: 'Argentina',
      photoBucket: '',
      photoPath: '',
      photoType: '',
      photoSignedPath: '',
    });
  });
});
