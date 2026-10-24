import { describe, expect, it } from 'vitest';
import { defaultLocalityResultItemWithGPS } from '@/mocks/modules/Connect2_LegacyShared/mockDefaults';
import {
  toAllCountries,
  toCountryCards,
  toCountryInfo,
  toCountryLocalities,
  toCountryLocalityStatistics,
  toCountrySummaries,
  toRegionSubscribedCountries,
  type AllCountriesWire,
  type BrowseCountriesStatisticsWire,
  type CountryListStatisticsWire,
  type LocalityStatisticsWire,
  type RegionSubscribedCountriesWire,
} from './mapper';

type CountryStatisticsWire = BrowseCountriesStatisticsWire['Out_CountriesStatistics']['List'][number];
type TextsWire = CountryStatisticsWire['UI_TypedStatisticsTexts'];

/** UI_StatisticsTexts as the server sends it: every field, "" by default. */
const textsWire = (fields: Partial<TextsWire> = {}): TextsWire => ({
  Members: '',
  Households: '',
  Localities: '',
  Brothers: '',
  Sisters: '',
  SupperMeetings: '',
  Distance: '',
  ...fields,
});

/** A UI_CountryStatistics record as the server sends it. */
const countryWire = (
  code: string,
  title: string,
  counts: { Name: string; Value: string }[],
  texts: Partial<TextsWire> = {},
): CountryStatisticsWire => ({
  CountryCode: code,
  Statistics: {
    Title: title,
    Subtitle: '',
    AvatarURL: '',
    Statistics: {
      List: counts.map((c) => ({ ...c, IconColorId: '', IconId: '' })),
      EmptyListItem: { Name: '', Value: '', IconColorId: '', IconId: '' },
    },
  },
  UI_TypedStatisticsTexts: textsWire(texts),
});

describe('country mapper', () => {
  it('toCountryCards keeps the code and the statistics card, with the counts unwrapped', () => {
    const wire: BrowseCountriesStatisticsWire = {
      Out_CountriesStatistics: {
        List: [
          countryWire('NZ', 'New Zealand', [
            { Name: 'Localities', Value: '41' },
            { Name: 'Brethren', Value: '6284' },
          ]),
        ],
      },
    };
    expect(toCountryCards(wire)).toEqual([
      {
        countryCode: 'NZ',
        statistics: {
          Title: 'New Zealand',
          Subtitle: '',
          AvatarURL: '',
          Statistics: [
            { Name: 'Localities', Value: '41', IconColorId: '', IconId: '' },
            { Name: 'Brethren', Value: '6284', IconColorId: '', IconId: '' },
          ],
        },
      },
    ]);
  });

  it('toCountrySummaries keeps the code, the title, the avatar and every count text', () => {
    const wire: CountryListStatisticsWire = {
      Out_CountriesStatistics: {
        List: [countryWire('DK', 'Denmark', [], { Members: '95', Households: '27', Localities: '3', Brothers: '49' })],
      },
    };
    expect(toCountrySummaries(wire)).toEqual([
      {
        countryCode: 'DK',
        title: 'Denmark',
        avatarURL: '',
        texts: textsWire({ Members: '95', Households: '27', Localities: '3', Brothers: '49' }),
      },
    ]);
  });

  it('toCountryLocalityStatistics turns the coordinates into numbers and keeps the country name', () => {
    const wire: LocalityStatisticsWire = {
      CountryName: 'Denmark',
      Out_LocalitiesStatistics: {
        List: [
          {
            LocalityId: '4410',
            Name: 'Aarhus',
            Latitude: '56.1629',
            Longitude: '10.2039',
            MainHallSubdivisionId: '8812',
            Statistics: countryWire('', 'Aarhus', [{ Name: 'Households', Value: '9' }]).Statistics,
            UI_TypedStatisticsTexts: textsWire({ Members: '31', Households: '9', SupperMeetings: '2' }),
          },
          {
            LocalityId: '4411',
            Name: 'Odense',
            Latitude: '',
            Longitude: '',
            MainHallSubdivisionId: '0',
            Statistics: countryWire('', 'Odense', []).Statistics,
            UI_TypedStatisticsTexts: textsWire(),
          },
        ],
      },
    };
    expect(toCountryLocalityStatistics(wire)).toEqual({
      countryName: 'Denmark',
      localities: [
        {
          localityId: '4410',
          name: 'Aarhus',
          latitude: 56.1629,
          longitude: 10.2039,
          statisticsTitle: 'Aarhus',
          typedStatisticsTexts: textsWire({ Members: '31', Households: '9', SupperMeetings: '2' }),
          mainHallSubdivisionId: '8812',
        },
        {
          localityId: '4411',
          name: 'Odense',
          latitude: 0,
          longitude: 0,
          statisticsTitle: 'Odense',
          typedStatisticsTexts: textsWire(),
          mainHallSubdivisionId: '0',
        },
      ],
    });
  });

  it('toCountryInfo keeps only the address format', () => {
    expect(
      toCountryInfo({
        AddressInfo2: {
          AddressFormat: '[Address1] \r\n[Address2]',
          AddressItemsList: { List: [] },
          CountryCode: 'NZ',
          CountryName: 'New Zealand',
        },
      }),
    ).toEqual({ addressFormat: '[Address1] \r\n[Address2]' });
  });

  it('toCountryLocalities keeps the id and the name of each locality', () => {
    expect(
      toCountryLocalities({
        Results: {
          List: [
            {
              ...defaultLocalityResultItemWithGPS(),
              Id: '310',
              Name: 'Wellington',
              Latitude: '-41.2865',
              Active: true,
            },
            { ...defaultLocalityResultItemWithGPS(), Id: '311', Name: 'Nelson', SubdivisionsCount: '2' },
          ],
        },
      }),
    ).toEqual([
      { Id: '310', Name: 'Wellington' },
      { Id: '311', Name: 'Nelson' },
    ]);
  });

  it('toRegionSubscribedCountries turns the Long Integers and the Decimals into numbers', () => {
    const wire: RegionSubscribedCountriesWire = {
      Countries: {
        List: [
          {
            Code: 'NZ',
            Name: 'New Zealand',
            RegionId: '3',
            LocalitiesCount: '41',
            HouseholdersCount: '2107',
            MembersCount: '6284',
            InitialLatitude: '-40.9006',
            InitialLongitude: '174.886',
            InitialZoom: 5,
            WithinSubscription: true,
          },
        ],
      },
    };
    expect(toRegionSubscribedCountries(wire)).toEqual([
      {
        Code: 'NZ',
        Name: 'New Zealand',
        RegionId: 3,
        LocalitiesCount: 41,
        HouseholdersCount: 2107,
        MembersCount: 6284,
        InitialLatitude: -40.9006,
        InitialLongitude: 174.886,
        InitialZoom: 5,
        WithinSubscription: true,
      },
    ]);
  });

  it('toAllCountries keeps the code and the name of each country in the wrapped list', () => {
    const wire: AllCountriesWire = {
      CacheControl_Response: {
        CountryList: {
          List: [
            { CountryCode: 'NZ', CountryName: 'New Zealand', Latitude: '-40.9006', Longitude: '174.886' },
            { CountryCode: 'DK', CountryName: 'Denmark', Latitude: '56.2639', Longitude: '9.5018' },
          ],
          EmptyListItem: { CountryCode: '', CountryName: '', Latitude: '0', Longitude: '0' },
        },
      },
    };
    expect(toAllCountries(wire)).toEqual({
      CountryList: {
        List: [
          { CountryCode: 'NZ', CountryName: 'New Zealand' },
          { CountryCode: 'DK', CountryName: 'Denmark' },
        ],
      },
    });
  });

  it('empty wire lists give empty lists', () => {
    expect(toCountryCards({ Out_CountriesStatistics: { List: [] } })).toEqual([]);
    expect(toCountrySummaries({ Out_CountriesStatistics: { List: [] } })).toEqual([]);
    expect(toCountryLocalities({ Results: { List: [] } })).toEqual([]);
    expect(toRegionSubscribedCountries({ Countries: { List: [] } })).toEqual([]);
    expect(toAllCountries({ CacheControl_Response: { CountryList: { List: [] } } })).toEqual({
      CountryList: { List: [] },
    });
  });
});
