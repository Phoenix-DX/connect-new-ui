/* Domain types of the country calls: the fields that the UI reads. The readers are the screens BrowseCountries,
   CountryList, CountryDetails and Profile, the Assemble country filters (through Connect2_LegacyShared) and FilterSheet
   (through the block CacheControl_AllCountries). Each type has the shape that its readers use today, so no caller
   changes: camelCase fields where a screen mapped the record, the OutSystems names and nesting where the reader takes
   the record as it is. The wire types stay in src/api/schema.d.ts. Long Integer ids are text. */

/** The counts of a country or a locality, as formatted texts (Connect_Geography_CS UI_StatisticsTexts). */
export interface StatisticsTexts {
  Members?: string;
  Households?: string;
  Localities?: string;
  Brothers?: string;
  Sisters?: string;
  SupperMeetings?: string;
  Distance?: string;
}

/** One count of a statistics card (UBTConnectLibrary TextTextUBT_ColorIdentifierUBT_IconsIdentifier). */
export interface StatisticsCount {
  Name?: string;
  Value?: string;
  /** UBT_Color identifier. */
  IconColorId?: string;
  /** UBT_Icons identifier; "" (null identifier) = no icon. */
  IconId?: string;
}

/** A statistics card (UBTConnectLibrary StatisticsOptions): the title, the subtitle, the avatar and the counts. */
export interface StatisticsCard {
  Title?: string;
  Subtitle?: string;
  AvatarURL?: string;
  Statistics?: StatisticsCount[];
}

/** A country of BrowseCountries (Connect_Geography_CS UI_CountryStatistics): the code and the statistics card. The
    screen does not read UI_TypedStatisticsTexts. */
export interface CountryCard {
  countryCode: string;
  statistics: StatisticsCard;
}

/** A country of CountryList (Connect_Geography_CS UI_CountryStatistics): the code, Statistics.Title,
    Statistics.AvatarURL and UI_TypedStatisticsTexts. The screen does not read the counts of the card. */
export interface CountrySummary {
  countryCode: string;
  title: string;
  /** Statistics.AvatarURL: "" from the server, the flag image after OnAfterFetch, "-" in the skeleton rows. */
  avatarURL: string;
  texts: StatisticsTexts;
}

/** A locality of a country (Connect_Geography_CS UI_LocalityStatistics), as CountryDetails reads it. */
export interface LocalityStatistics {
  /** LocalityId (Long Integer, kept as text). */
  localityId: string;
  name: string;
  latitude: number;
  longitude: number;
  /** Statistics.Title: the marker's ExtraData (popup link text). */
  statisticsTitle: string;
  /** UI_TypedStatisticsTexts: the counts that Statistics_Icons shows. */
  typedStatisticsTexts: StatisticsTexts;
  /** MainHallSubdivisionId (Long Integer, kept as text): the image of the card. */
  mainHallSubdivisionId: string;
}

/** The localities of a country with their counts, and the country name: the outputs of DataActionGetLocalityStatistics
    of CountryDetails, with the list unwrapped. */
export interface CountryLocalityStatistics {
  localities: LocalityStatistics[];
  countryName: string;
}

/** The screen variables that DataActionGetLocalityStatistics sends besides the country code. The query reads them at
    fetch time. */
export interface LocalityStatisticsVariables {
  originalCountryCode: string;
  searchString: string;
  hasFiltersApplied: boolean;
  localMapId: string;
}

/** The inputs that DataActionGetLocalityStatistics sends, with their OutSystems names. A type alias, not an interface:
    the contract inputs have an index signature. */
export type LocalityStatisticsCallInputs = {
  Local_MapId: string;
  SearchString: string;
  HasFiltersApplied: boolean;
  OriginalCountryCode: string;
  CountryCode: string;
};

/** The address format of a country (AddressInfo2.AddressFormat of DataActionGetCountryInfo), the only part that the
    Profile screen reads. */
export interface CountryInfo {
  addressFormat: string;
}

/** A locality of a country (Connect2_LegacyShared LocalityResultItemWithGPS): the fields that the Assemble locality
    filter reads. */
export interface CountryLocality {
  /** Long Integer, as text. */
  Id: string;
  Name: string;
}

/** A country of a subscription region (Connect2_LegacyShared CountryWithMapPosition). Defaults: Code and Name "",
    RegionId, LocalitiesCount, HouseholdersCount and MembersCount 0 (Long Integer, a number here), InitialLatitude and
    InitialLongitude 0 (Decimal), InitialZoom 5, WithinSubscription False. */
export interface CountryWithMapPosition {
  Code?: string;
  Name?: string;
  RegionId?: number;
  LocalitiesCount?: number;
  HouseholdersCount?: number;
  MembersCount?: number;
  InitialLatitude?: number;
  InitialLongitude?: number;
  InitialZoom?: number;
  WithinSubscription?: boolean;
}

/** A country of the list of all countries (UBTConnect_Utils UI_CountryDetails): the fields that FilterSheet reads. */
export interface CountryCodeName {
  CountryCode: string;
  CountryName: string;
}

/** The list of all countries (UBTConnect_Utils CacheControl_AllCountries). The list stays wrapped (`CountryList.List`):
    the block CacheControl_AllCountries puts the record in the memory cache and raises it in its Result event, and
    FilterSheet reads it as it is. */
export interface AllCountries {
  CountryList: { List: CountryCodeName[] };
}

/** The inputs of DataActionGetCacheInfo of CacheControl_AllCountries. A type alias: the contract inputs have an index
    signature. */
export type AllCountriesCallInputs = {
  CacheKey: string;
  CacheTypeId: string;
  TimeToLiveSeconds: number;
};
