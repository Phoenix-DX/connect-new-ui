import { describe, expect, it } from 'vitest';
import {
  defaultActionGetLocalityInformation_Output,
  defaultCacheableSubdivisionInformation,
  defaultLocalityHouseholdsResultItem,
} from '@/mocks/modules/Connect2_LegacyShared/mockDefaults';
import {
  toAllLocalities,
  toAllSubdivisions,
  toBulkSubdivisionsInputs,
  toEventFilterLocalities,
  toInterchanges,
  toLocalityCardList,
  toLocalityCardListInputs,
  toLocalityDetails,
  toLocalityDetailsInputs,
  toLocalityInformation,
  toOneSchoolCards,
  toOneSchoolGlobalDetails,
  toOneSchoolGlobalDetailsInputs,
  toOneSchoolListInputs,
  toSubdivisionCards,
  toSubdivisionDetails,
  toSubdivisionHouseholdCards,
  toSubdivisionInformationResults,
  toSubdivisionListInputs,
  toSubdivisionName,
  toSubdivisionNameInputs,
  type AllLocalitiesWire,
  type AllSubdivisionsWire,
  type BulkSubdivisionsWire,
  type InterchangesWire,
  type LocalityCardListWire,
  type LocalityDetailsWire,
  type OneSchoolGlobalDetailsWire,
  type OneSchoolListWire,
  type SubdivisionDetailsWire,
  type SubdivisionHouseholdsWire,
  type SubdivisionListWire,
} from './mapper';
import type { OneSchoolCard } from './types';

/** A statistics card as the server sends it: the counts in an OutSystems list. */
const statisticsWire = (title: string) => ({
  Title: title,
  Subtitle: '',
  AvatarURL: '',
  Statistics: {
    List: [
      { Name: 'Supper Meetings', Value: '3', IconColorId: '', IconId: '' },
      { Name: 'Brethren', Value: '95', IconColorId: 'Primary', IconId: 'Users' },
    ],
  },
});
const statisticsCard = (title: string) => ({
  Title: title,
  Subtitle: '',
  AvatarURL: '',
  Statistics: [
    { Name: 'Supper Meetings', Value: '3', IconColorId: '', IconId: '' },
    { Name: 'Brethren', Value: '95', IconColorId: 'Primary', IconId: 'Users' },
  ],
});

describe('locality mapper: AssembleEvents, BrowseDirectory, LDM_MyEvents_V2', () => {
  it('toSubdivisionNameInputs adds SubdivisionName empty; toSubdivisionName reads SelectedSubdivisionName', () => {
    expect(
      toSubdivisionNameInputs({ SubdivisionId: '1210', ShowBackNavigation: true, IsUserSubdivision: false }),
    ).toEqual({ SubdivisionId: '1210', ShowBackNavigation: true, IsUserSubdivision: false, SubdivisionName: '' });
    expect(toSubdivisionName({ SelectedSubdivisionName: 'Zapiola (Main Meeting Room)' })).toBe(
      'Zapiola (Main Meeting Room)',
    );
  });

  it('toLocalityCardListInputs sends the screen variables at their initial values and the country code', () => {
    expect(toLocalityCardListInputs('AR')).toEqual({
      MarkersList: { List: [] },
      Center: { List: [] },
      Local_MapId: '',
      CountryCode: 'AR',
    });
  });

  it('toLocalityCardList unwraps the lists, makes the coordinates numbers and drops the fields the screen does not read', () => {
    const wire: LocalityCardListWire = {
      CountryName: 'Argentina',
      Out_LocalitiesStatistics: {
        List: [
          {
            LocalityId: '252',
            Name: 'Bahia Blanca',
            Latitude: '-38.6921654',
            Longitude: '-62.2906036',
            MainHallSubdivisionId: '1210',
            Statistics: statisticsWire('Bahia Blanca'),
            UI_TypedStatisticsTexts: {
              Members: '95',
              Households: '25',
              Localities: '',
              Brothers: '53',
              Sisters: '42',
              SupperMeetings: '3',
              Distance: '',
            },
          },
          {
            LocalityId: '253',
            Name: 'Monte Hermoso',
            Latitude: '',
            Longitude: '-61.2964',
            MainHallSubdivisionId: '9301',
            Statistics: statisticsWire('Monte Hermoso'),
            UI_TypedStatisticsTexts: {
              Members: '',
              Households: '',
              Localities: '',
              Brothers: '',
              Sisters: '',
              SupperMeetings: '',
              Distance: '',
            },
          },
        ],
      },
    };
    expect(toLocalityCardList(wire)).toEqual({
      countryName: 'Argentina',
      localities: [
        {
          localityId: '252',
          name: 'Bahia Blanca',
          latitude: -38.6921654,
          longitude: -62.2906036,
          statistics: statisticsCard('Bahia Blanca'),
        },
        {
          localityId: '253',
          name: 'Monte Hermoso',
          latitude: 0,
          longitude: -61.2964,
          statistics: statisticsCard('Monte Hermoso'),
        },
      ],
    });
  });

  it('toEventFilterLocalities unwraps EventLocalities and keeps the three attributes', () => {
    expect(
      toEventFilterLocalities({
        EventLocalities: {
          List: [
            { IdAsText: '252', Name: 'Bahia Blanca', IsSelected: false },
            { IdAsText: '253', Name: 'Monte Hermoso', IsSelected: true },
          ],
        },
      }),
    ).toEqual([
      { IdAsText: '252', Name: 'Bahia Blanca', IsSelected: false },
      { IdAsText: '253', Name: 'Monte Hermoso', IsSelected: true },
    ]);
  });
});

describe('locality mapper: Locality_Details', () => {
  it('toLocalityDetailsInputs wraps TagsList and gives absent tag attributes their defaults', () => {
    const inputs = toLocalityDetailsInputs({
      TagsList: [{ Text: 'Households', Identifier: 'Households', IsSelected: true }, { Text: 'Interchange' }],
      HeaderIsScrolled: false,
      TagsList_SelectedTag: 'Households',
      IsUserLocality: true,
      LocalityLabel: 'Bahia Blanca, Argentina',
      IsScreenInitialized: true,
      LocalityId: '252',
      PreloadedLocalityLabel: '',
    });
    expect(inputs).toEqual({
      TagsList: {
        List: [
          { Text: 'Households', Identifier: 'Households', IconId: '', IsSelected: true, Enabled: true },
          { Text: 'Interchange', Identifier: '', IconId: '', IsSelected: false, Enabled: true },
        ],
      },
      HeaderIsScrolled: false,
      TagsList_SelectedTag: 'Households',
      IsUserLocality: true,
      LocalityLabel: 'Bahia Blanca, Argentina',
      IsScreenInitialized: true,
      LocalityId: '252',
      PreloadedLocalityLabel: '',
    });
    expect(Object.keys(inputs)[0]).toBe('TagsList');
  });

  it('toLocalityDetails flattens LocalityDetails', () => {
    const wire: LocalityDetailsWire = {
      LocalityDetails: {
        BretherenCount: 95,
        HouseholdCount: 25,
        MaiinHallLatitude: '-38.6921654',
        MainHallLongitude: '-62.2906036',
        UI_LocalityDetails: { LocalityId: '252', Name: 'Bahia Blanca', CountryName: 'Argentina', CountryCode: 'AR' },
        UI_LocalityTimezone: { TimezoneName: 'ART', TimezoneOffset: '-10800' },
      },
    };
    expect(toLocalityDetails(wire)).toEqual({
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

  it('toSubdivisionListInputs sends the cards back with their defaults; toSubdivisionCards unwraps the answer', () => {
    expect(
      toSubdivisionListInputs({
        getSubdivisions_StartIndex: 0,
        getSubdivisions_Offset: 20,
        subdivision_Card_List: [{ subdivisionId: '0', content: { Name: 'Subdivision Name Example' } }],
        subdivision_Card_List_IsLoading: true,
        isPaginated: false,
        localityId: '252',
      }),
    ).toEqual({
      GetSubdivisions_StartIndex: 0,
      GetSubdivisions_Offset: 20,
      Subdivision_Card_List: {
        List: [
          {
            SubdivisionId: '0',
            Subdivision_Card_Content: {
              Name: 'Subdivision Name Example',
              BretherenCount: 0,
              HouseholdCount: 0,
              BrothersCount: 0,
              SistersCount: 0,
              Address: '',
            },
          },
        ],
      },
      Subdivision_Card_List_IsLoading: true,
      IsPaginated: false,
      LocalityId: '252',
    });

    const wire: SubdivisionListWire = {
      Out_Subdivision_Card_List: {
        List: [
          {
            SubdivisionId: '1210',
            Subdivision_Card_Content: {
              Name: 'Zapiola (Main Meeting Room)',
              BretherenCount: 39,
              BrothersCount: 24,
              SistersCount: 15,
              HouseholdCount: 11,
              Address: 'Zapiola 1450',
            },
          },
        ],
      },
    };
    expect(toSubdivisionCards(wire)).toEqual([
      {
        subdivisionId: '1210',
        content: {
          Name: 'Zapiola (Main Meeting Room)',
          BretherenCount: 39,
          BrothersCount: 24,
          SistersCount: 15,
          HouseholdCount: 11,
          Address: 'Zapiola 1450',
        },
      },
    ]);
  });

  it('toInterchanges unwraps Out_InterchangeList and the statistics of each card', () => {
    const wire: InterchangesWire = {
      Out_InterchangeList: {
        List: [
          {
            InterchangeLocalityId: '253',
            InterchangeLocalityName: 'Monte Hermoso',
            InterchangeCountryName: 'Argentina',
            InterchangeDistance: '105 km',
            IsBookmarked: true,
            InterchangeStatistics: statisticsWire('Monte Hermoso'),
          },
        ],
      },
    };
    expect(toInterchanges(wire)).toEqual([
      {
        interchangeLocalityId: '253',
        interchangeLocalityName: 'Monte Hermoso',
        interchangeCountryName: 'Argentina',
        interchangeDistance: '105 km',
        isBookmarked: true,
        interchangeStatistics: statisticsCard('Monte Hermoso'),
      },
    ]);
  });

  it('toOneSchoolListInputs sends the cards back with their OutSystems names; toOneSchoolCards flattens the answer', () => {
    const card: OneSchoolCard = {
      communityBusinessId: '1430',
      signedURL: '/mock-images/placeholder-landscape.svg',
      name: 'OneSchool Alem',
      localityName: 'Bahia Blanca',
      localityId: '252',
      countryName: 'Argentina',
      countryCode: 'AR',
      phone: '',
      email: '',
    };
    const cardWire = {
      CommunityBusinessId: '1430',
      SignedURL: '/mock-images/placeholder-landscape.svg',
      OneSchool_Card_Content: {
        Name: 'OneSchool Alem',
        LocalityName: 'Bahia Blanca',
        LocalityId: '252',
        CountryName: 'Argentina',
        CountryCode: 'AR',
        Phone: '',
        Email: '',
      },
    };
    expect(
      toOneSchoolListInputs({
        getOneSchoolGlobal_List_StartIndex: 0,
        getOneSchoolGlobal_List_Offset: 10,
        get_OneSchoolGlobal_List_IsLoading: false,
        out_OneSchoolGlobal_List2: [card],
        in_LocalityId: '252',
        in_LocalityTimezoneData: { TimezoneName: 'ART', TimezoneOffset: '-10800' },
      }),
    ).toEqual({
      GetOneSchoolGlobal_List_StartIndex: 0,
      GetOneSchoolGlobal_List_Offset: 10,
      Get_OneSchoolGlobal_List_IsLoading: false,
      Out_OneSchoolGlobal_List2: { List: [cardWire] },
      In_LocalityId: '252',
      In_LocalityTimezoneData: { TimezoneName: 'ART', TimezoneOffset: '-10800' },
    });
    const wire: OneSchoolListWire = { Out_OneSchoolGlobal_List: { List: [cardWire] } };
    expect(toOneSchoolCards(wire)).toEqual([card]);
  });
});

describe('locality mapper: SupperMeeting_DetailsBlock and CacheControl_AllLocalities', () => {
  it('toSubdivisionDetails keeps the card and drops Subdivision_Actions, which the block does not read', () => {
    const wire: SubdivisionDetailsWire = {
      Subdivision: {
        Subdivision_Card: {
          SubdivisionId: '1210',
          Subdivision_Card_Content: {
            Name: 'Zapiola (Main Meeting Room)',
            BretherenCount: 39,
            HouseholdCount: 11,
            BrothersCount: 24,
            SistersCount: 15,
            Address: 'Zapiola 1450, Bahia Blanca',
          },
        },
        Subdivision_Actions: {
          HasBookmark: true,
          HasCall: false,
          HasEmail: false,
          HasGift: false,
          HasNotes: true,
          HasShare: true,
          HasUnbookmark: false,
          HasViewDetails: false,
        },
      },
    };
    expect(toSubdivisionDetails(wire)).toEqual({
      Subdivision_Card: {
        SubdivisionId: '1210',
        Subdivision_Card_Content: {
          Name: 'Zapiola (Main Meeting Room)',
          BretherenCount: 39,
          HouseholdCount: 11,
          BrothersCount: 24,
          SistersCount: 15,
          Address: 'Zapiola 1450, Bahia Blanca',
        },
      },
    });
  });

  it('toSubdivisionHouseholdCards unwraps Household_GalleryCard_List and keeps the three card fields', () => {
    const wire: SubdivisionHouseholdsWire = {
      Household_GalleryCard_List: {
        List: [
          { HouseholdId: '42438', HouseholdName: 'Marco & Lucia Vitale', ChildrenNames: 'Sofia, Mateo' },
          { HouseholdId: '91004', HouseholdName: 'Diego Ortiz', ChildrenNames: '' },
        ],
      },
    };
    expect(toSubdivisionHouseholdCards(wire)).toEqual([
      { HouseholdId: '42438', HouseholdName: 'Marco & Lucia Vitale', ChildrenNames: 'Sofia, Mateo' },
      { HouseholdId: '91004', HouseholdName: 'Diego Ortiz', ChildrenNames: '' },
    ]);
    expect(toSubdivisionHouseholdCards({ Household_GalleryCard_List: { List: [] } })).toEqual([]);
  });

  it('toAllLocalities keeps the list wrapped with LocalityId, Name, CountryName and CountryCode only', () => {
    const wire: AllLocalitiesWire = {
      CacheControl_Response: {
        LocalityList: {
          List: [
            {
              LocalityId: '252',
              Name: 'Bahia Blanca',
              CountryName: 'Argentina',
              CountryCode: 'ar',
              Latitude: '-38.6921654',
              Longitude: '-62.2906036',
            },
          ],
        },
      },
    };
    expect(toAllLocalities(wire)).toEqual({
      LocalityList: {
        List: [{ LocalityId: '252', Name: 'Bahia Blanca', CountryName: 'Argentina', CountryCode: 'ar' }],
      },
    });
  });

  it('toAllSubdivisions keeps the list wrapped with every attribute of Directory_LocalitySubdivision', () => {
    const item = {
      SubdivisionId: '9202',
      SubdivisionName: 'Patagonia',
      LocalityId: '585',
      LocalityName: 'Bahia Blanca',
    };
    const wire: AllSubdivisionsWire = { CacheControl_Response: { SubdivionsList: { List: [item] } } };
    expect(toAllSubdivisions(wire)).toEqual({ SubdivionsList: { List: [item] } });
  });
});

describe('locality mapper: Connect2_LegacyShared', () => {
  it('toLocalityInformation keeps CacheableLocalityInformation as it is', () => {
    const wire = defaultActionGetLocalityInformation_Output();
    wire.CacheableLocalityInformation.Name = 'Córdoba';
    expect(toLocalityInformation(wire)).toBe(wire.CacheableLocalityInformation);
  });

  it('toBulkSubdivisionsInputs wraps the cache keys', () => {
    expect(toBulkSubdivisionsInputs(['1210', '9202'])).toEqual({ CacheKeys: { List: ['1210', '9202'] } });
  });

  it('toSubdivisionInformationResults keeps the key, the error, the households and the locality of the hall', () => {
    const value = defaultCacheableSubdivisionInformation();
    value.Subdivision.Id = '1210';
    value.Subdivision.Name = 'Zapiola (Main Meeting Room)';
    value.Subdivision.Locality.Id = '252';
    value.Subdivision.Locality.Name = 'Bahia Blanca';
    value.Subdivision.Locality.Country.Code = 'AR';
    value.Subdivision.Locality.Country.Name = 'Argentina';
    const photo = {
      ...defaultLocalityHouseholdsResultItem().Photo340,
      Bucket: 'households',
      Path: '42438/340.jpg',
      Type: 'Household',
      SignedURL: '/mock-images/placeholder-square.svg',
    };
    value.HouseholdListResponse.List = [
      {
        ...defaultLocalityHouseholdsResultItem(),
        Id: '42438',
        Name: 'Vitale, Marco & Lucia',
        Family: 'Tomas, Ana',
        Location: 'Bahia Blanca, Argentina',
        IsBookmarked: true,
        Photo: photo,
        Photo340: photo,
      },
    ];
    const wire: BulkSubdivisionsWire = {
      Results: {
        List: [
          { CacheKey: '1210', Error: '', Value: value },
          { CacheKey: '424242', Error: 'Not found', Value: defaultCacheableSubdivisionInformation() },
        ],
      },
    };
    expect(toSubdivisionInformationResults(wire)).toEqual([
      {
        CacheKey: '1210',
        Error: '',
        Value: {
          HouseholdListResponse: {
            List: [
              {
                Id: '42438',
                Name: 'Vitale, Marco & Lucia',
                Family: 'Tomas, Ana',
                Location: 'Bahia Blanca, Argentina',
                IsBookmarked: true,
                Photo340: {
                  Bucket: 'households',
                  Path: '42438/340.jpg',
                  Type: 'Household',
                  SignedURL: '/mock-images/placeholder-square.svg',
                },
              },
            ],
          },
          Subdivision: { Locality: { Id: '252', Country: { Code: 'AR' } } },
        },
      },
      {
        CacheKey: '424242',
        Error: 'Not found',
        Value: { HouseholdListResponse: { List: [] }, Subdivision: { Locality: { Id: '0', Country: { Code: '' } } } },
      },
    ]);
  });
});

/* ---- OneSchoolGlobalDetails: DataActionGetOneSchoolGlobalDetails ---- */

describe('locality mapper: OneSchoolGlobalDetails', () => {
  it('toOneSchoolGlobalDetailsInputs sends the screen variables with their OutSystems names, "" for an absent label', () => {
    expect(
      toOneSchoolGlobalDetailsInputs({
        lookupSections: {
          Actions: { Singular: 'Action', Plural: 'Actions' },
          Households: { Singular: 'Household', Plural: 'Households' },
          OneSchoolStatistitics: {
            Singular: 'Show student numbers',
            Plural: 'Show student numbers',
            Icon: 'connect-icon-school',
          },
        },
        selected_OneschoolGlobal_SubsectionId: 'About our campus',
        type_OneschoolGlobal_SubsectionId: { UpcomingEvents: 'Upcoming events', AboutOurCampus: 'About our campus' },
        localIsBookmarked: true,
        in_OneSchoolGlobalId: '1430',
      }),
    ).toEqual({
      LookupSections: {
        Actions: { Singular: 'Action', Plural: 'Actions', Icon: '', Icon_Color: '' },
        Households: { Singular: 'Household', Plural: 'Households', Icon: '', Icon_Color: '' },
        OneSchoolStatistitics: {
          Singular: 'Show student numbers',
          Plural: 'Show student numbers',
          Icon: 'connect-icon-school',
          Icon_Color: '',
        },
      },
      Selected_OneschoolGlobal_SubsectionId: 'About our campus',
      Type_OneschoolGlobal_SubsectionId: { UpcomingEvents: 'Upcoming events', AboutOurCampus: 'About our campus' },
      LocalIsBookmarked: true,
      In_OneSchoolGlobalId: '1430',
    });
  });

  it('toOneSchoolGlobalDetails flattens the detail card, unwraps the links and keeps the coordinates', () => {
    const coordinates = { Longitude: '-62.27', Latitude: '-38.72', UseCoordinates: true };
    const wire = {
      Out_OneSchoolGlobal: {
        OneSchoolGlobal_DetailCard: {
          CommunityBusinessId: '1430',
          SignedURL: '/mock-images/placeholder-landscape.svg',
          UI_OneSchool_Card_Content: {
            Name: 'OneSchool Alem',
            LocalityName: 'Bahia Blanca',
            LocalityId: '252',
            CountryName: 'Argentina',
            CountryCode: 'AR',
            Phone: '',
            Email: '',
          },
          OneSchoolGlobal__DetailCard_Content: {
            Address: '1240 Avenida Colon, Bahia Blanca',
            AreasServed: 'Bahia Blanca, Tandil',
            BusinesLinks: {
              List: [
                { Text: 'Campus website', Link: 'https://campus.example.org', ID: '7' },
                { Text: 'Enrolments', Link: 'https://campus.example.org/enrol', ID: '8' },
              ],
            },
          },
        },
      },
      HouseholdCoordinates: coordinates,
    } as unknown as OneSchoolGlobalDetailsWire;
    const details = toOneSchoolGlobalDetails(wire);
    expect(details).toEqual({
      card: {
        communityBusinessId: '1430',
        signedURL: '/mock-images/placeholder-landscape.svg',
        name: 'OneSchool Alem',
        address: '1240 Avenida Colon, Bahia Blanca',
        areasServed: 'Bahia Blanca, Tandil',
        businessLinks: [
          { text: 'Campus website', link: 'https://campus.example.org', id: '7' },
          { text: 'Enrolments', link: 'https://campus.example.org/enrol', id: '8' },
        ],
      },
      householdCoordinates: coordinates,
    });
    expect(details.householdCoordinates).toBe(coordinates);
  });
});
