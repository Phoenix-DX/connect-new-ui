import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { osList, osNumber } from '@/legacy/os/os-wire';
import type {
  AllCountries,
  CountryCard,
  CountryInfo,
  CountryLocality,
  CountryLocalityStatistics,
  CountrySummary,
  CountryWithMapPosition,
  LocalityStatistics,
  StatisticsCard,
  StatisticsTexts,
} from './types';

/* The outputs of each call, as the contract describes them. */
/** DataActionGetCountriesStatistics of BrowseCountries. */
export type BrowseCountriesStatisticsWire = ActionOutputs<
  PathOf<'UBTConnect', 'BrowseCountries/DataActionGetCountriesStatistics'>
>;
/** DataActionGetCountriesStatistics of CountryList. */
export type CountryListStatisticsWire = ActionOutputs<
  PathOf<'UBTConnect', 'CountryList/DataActionGetCountriesStatistics'>
>;
/** DataActionGetLocalityStatistics of CountryDetails. */
export type LocalityStatisticsWire = ActionOutputs<
  PathOf<'UBTConnect', 'CountryDetails/DataActionGetLocalityStatistics'>
>;
/** DataActionGetCountryInfo of Profile. */
type CountryInfoWire = ActionOutputs<PathOf<'UBTConnect', 'Profile/DataActionGetCountryInfo'>>;
/** The server action GetUserLocalitiesForCountryCodeWithGPS of Connect2_LegacyShared. */
type CountryLocalitiesWire = ActionOutputs<
  PathOf<'Connect2_LegacyShared', 'ActionGetUserLocalitiesForCountryCodeWithGPS'>
>;
/** The server action GetCountriesBySubscription of Connect2_LegacyShared. */
export type RegionSubscribedCountriesWire = ActionOutputs<
  PathOf<'Connect2_LegacyShared', 'ActionGetCountriesBySubscription'>
>;
/** DataActionGetCacheInfo of CacheControl_AllCountries. */
export type AllCountriesWire = ActionOutputs<
  PathOf<'UBTConnect_Utils', 'CacheControl_AllCountries/DataActionGetCacheInfo'>
>;

type CountryStatisticsWire = BrowseCountriesStatisticsWire['Out_CountriesStatistics']['List'][number];
type StatisticsCardWire = CountryStatisticsWire['Statistics'];
type StatisticsTextsWire = CountryStatisticsWire['UI_TypedStatisticsTexts'];
type LocalityStatisticsItemWire = LocalityStatisticsWire['Out_LocalitiesStatistics']['List'][number];

const toStatisticsTexts = (w: StatisticsTextsWire): StatisticsTexts => ({
  Members: w.Members,
  Households: w.Households,
  Localities: w.Localities,
  Brothers: w.Brothers,
  Sisters: w.Sisters,
  SupperMeetings: w.SupperMeetings,
  Distance: w.Distance,
});

const toStatisticsCard = (w: StatisticsCardWire): StatisticsCard => ({
  Title: w.Title,
  Subtitle: w.Subtitle,
  AvatarURL: w.AvatarURL,
  Statistics: osList(w.Statistics).map((s) => ({
    Name: s.Name,
    Value: s.Value,
    IconColorId: s.IconColorId,
    IconId: s.IconId,
  })),
});

/** The countries of BrowseCountries: the code and the statistics card of each one. */
export const toCountryCards = (wire: BrowseCountriesStatisticsWire): CountryCard[] =>
  osList(wire.Out_CountriesStatistics).map((w) => ({
    countryCode: w.CountryCode,
    statistics: toStatisticsCard(w.Statistics),
  }));

/** The countries of CountryList: the code, the title, the avatar and the counts as texts of each one. */
export const toCountrySummaries = (wire: CountryListStatisticsWire): CountrySummary[] =>
  osList(wire.Out_CountriesStatistics).map((w) => ({
    countryCode: w.CountryCode,
    title: w.Statistics.Title,
    avatarURL: w.Statistics.AvatarURL,
    texts: toStatisticsTexts(w.UI_TypedStatisticsTexts),
  }));

const toLocalityStatistics = (w: LocalityStatisticsItemWire): LocalityStatistics => ({
  localityId: w.LocalityId,
  name: w.Name,
  latitude: osNumber(w.Latitude),
  longitude: osNumber(w.Longitude),
  statisticsTitle: w.Statistics.Title,
  typedStatisticsTexts: toStatisticsTexts(w.UI_TypedStatisticsTexts),
  mainHallSubdivisionId: w.MainHallSubdivisionId,
});

/** The localities of a country (Decimal latitude and longitude as numbers) and the country name. */
export const toCountryLocalityStatistics = (wire: LocalityStatisticsWire): CountryLocalityStatistics => ({
  localities: osList(wire.Out_LocalitiesStatistics).map(toLocalityStatistics),
  countryName: wire.CountryName,
});

/** The address format of a country. */
export const toCountryInfo = (wire: CountryInfoWire): CountryInfo => ({
  addressFormat: wire.AddressInfo2.AddressFormat,
});

/** The localities of a country: the id and the name of each one. */
export const toCountryLocalities = (wire: CountryLocalitiesWire): CountryLocality[] =>
  osList(wire.Results).map((w) => ({ Id: w.Id, Name: w.Name }));

/** The countries of a subscription region. Long Integers and Decimals become numbers. */
export const toRegionSubscribedCountries = (wire: RegionSubscribedCountriesWire): CountryWithMapPosition[] =>
  osList(wire.Countries).map((c) => ({
    Code: c.Code,
    Name: c.Name,
    RegionId: Number(c.RegionId),
    LocalitiesCount: Number(c.LocalitiesCount),
    HouseholdersCount: Number(c.HouseholdersCount),
    MembersCount: Number(c.MembersCount),
    InitialLatitude: Number(c.InitialLatitude),
    InitialLongitude: Number(c.InitialLongitude),
    InitialZoom: c.InitialZoom,
    WithinSubscription: c.WithinSubscription,
  }));

/** The list of all countries: the code and the name of each one, in the wrapped list of the OutSystems record. */
export const toAllCountries = (wire: AllCountriesWire): AllCountries => ({
  CountryList: {
    List: osList(wire.CacheControl_Response.CountryList).map((c) => ({
      CountryCode: c.CountryCode,
      CountryName: c.CountryName,
    })),
  },
});
