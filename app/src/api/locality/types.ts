import type { ActionOutputs, PathOf } from '@/api/client/callAction';

/* Domain types of the locality calls: the fields that the UI reads. The readers are the screens BrowseDirectory,
   Locality_Details (and its tag blocks), AssembleEvents and LDM_MyEvents_V2, the blocks SupperMeeting_DetailsBlock
   and FilterSheet (through CacheControl_AllLocalities), and the Assemble blocks (through Connect2_LegacyShared). Each
   type has the shape that its readers use today, so no caller changes: camelCase fields where a screen mapped the
   record, the OutSystems names and nesting where the reader takes the record as it is. The wire types stay in
   src/api/schema.d.ts. Long Integer ids are text. */

/* ---- Statistics cards (UBTConnectLibrary) ---- */

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

/* ---- AssembleEvents: DataActionGetSubdivisionName ---- */

/** The inputs of DataActionGetSubdivisionName besides SubdivisionName (the block variables that its flow sets;
    SubdivisionName is sent empty). A type alias, not an interface: the contract inputs have an index signature. */
export type SubdivisionNameCallInputs = {
  SubdivisionId: string;
  ShowBackNavigation: boolean;
  IsUserSubdivision: boolean;
};

/* ---- BrowseDirectory: DataActionGetLocalityStatistics ---- */

/** A locality of BrowseDirectory (Connect_Geography_CS UI_LocalityStatistics): the id, the name, the coordinates and
    the statistics card. The screen does not read UI_TypedStatisticsTexts or MainHallSubdivisionId. */
export interface LocalityCard {
  /** LocalityId (Long Integer as text; "0" = the record default). */
  localityId: string;
  name: string;
  latitude: number;
  longitude: number;
  statistics: StatisticsCard;
}

/** The localities of a country with their cards, and the country name: the outputs of
    DataActionGetLocalityStatistics of BrowseDirectory, with the list unwrapped. */
export interface LocalityCardList {
  localities: LocalityCard[];
  countryName: string;
}

/* ---- LDM_MyEvents_V2: DataActionGetEventLocalitiesForFilter ---- */

/** The inputs of DataActionGetEventLocalitiesForFilter: the variables of MyEvents_MyTimelineFilterButton that the
    server reads. A type alias: the contract inputs have an index signature. */
export type EventLocalitiesCallInputs = {
  In_HasLoaded: boolean;
  In_DefaultDateRangeInMonths: number;
  In_IsShowing: boolean;
  IsShowFilters: boolean;
  HasLocalityData: boolean;
};

/** A locality choice of the timeline filter (Connect2_OrbitMobile_BL EventLocalitiesFilter). The filter sends the
    record back in SelectedFilters.Localities, so every attribute stays. */
export interface EventFilterLocality {
  IdAsText: string;
  IsSelected: boolean;
  Name: string;
}

/* ---- Locality_Details: the locality and its tag blocks ---- */

/** A tag of the screen (UBTConnectLibrary Tag), as the screen keeps it in TagsList. Absent attributes take their
    OutSystems default when the call sends them. */
export interface LocalityTag {
  Text?: string;
  Identifier?: string;
  IconId?: string;
  IsSelected?: boolean;
  Enabled?: boolean;
}

/** The screen variables that OutSystems sends with DataActionGet_LocalityDetails (the recorded call's inputs,
    src/mocks/fixtures/UBTConnect/DataActionGet_LocalityDetails/01-a5fd3a96.json). */
export type LocalityDetailsCallInputs = {
  TagsList: LocalityTag[];
  HeaderIsScrolled: boolean;
  TagsList_SelectedTag: string;
  IsUserLocality: boolean;
  LocalityLabel: string;
  IsScreenInitialized: boolean;
  LocalityId: string;
  PreloadedLocalityLabel: string;
};

/** Connect_Geography_CS UI_LocalityDetails_ForHousehold (Get_LocalityDetails.LocalityDetails), flattened. */
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

/** Connect_Subdivision_CS UI_Subdivision_Card_Content: the name, the address and the counts of a supper meeting. */
export interface SubdivisionCardContent {
  Address?: string;
  BretherenCount?: number;
  BrothersCount?: number;
  HouseholdCount?: number;
  Name?: string;
  SistersCount?: number;
}

/** Connect_Subdivision_CS UI_Subdivision_Card (Get_Subdivision_List.Out_Subdivision_Card_List), as Locality_Details
    keeps it. */
export interface SubdivisionCard {
  subdivisionId: string;
  content: SubdivisionCardContent;
}

/** The block variables that OutSystems sends with DataActionGet_Subdivision_List (Locality_Subdivisions model). */
export interface SubdivisionListCallInputs {
  getSubdivisions_StartIndex: number;
  getSubdivisions_Offset: number;
  subdivision_Card_List: SubdivisionCard[];
  subdivision_Card_List_IsLoading: boolean;
  isPaginated: boolean;
  localityId: string;
}

/** Connect_Subdivision_CS UI_Interchange (GetInterchangesByLocalityId.Out_InterchangeList). */
export interface Interchange {
  interchangeLocalityId: string;
  interchangeLocalityName: string;
  interchangeCountryName: string;
  interchangeDistance: string;
  isBookmarked: boolean;
  interchangeStatistics: StatisticsCard;
}

/** Connect_CommunityBusiness_CS UI_OneSchool_Card (Get_OneSchoolGlobal_List.Out_OneSchoolGlobal_List), flattened. */
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

/** Connect_Geography_CS UI_LocalityTimezone: the time zone name and its offset in seconds (Long Integer as text). */
export interface LocalityTimezone {
  TimezoneName: string;
  TimezoneOffset: string;
}

/** The block variables that OutSystems sends with DataActionGet_OneSchoolGlobal_List (Locality_OneSchoolGlobal model). */
export interface OneSchoolListCallInputs {
  getOneSchoolGlobal_List_StartIndex: number;
  getOneSchoolGlobal_List_Offset: number;
  get_OneSchoolGlobal_List_IsLoading: boolean;
  out_OneSchoolGlobal_List2: OneSchoolCard[];
  in_LocalityId: string;
  in_LocalityTimezoneData: LocalityTimezone;
}

/* ---- SupperMeeting_DetailsBlock: DataActionGetSubdivision ---- */

/** Connect_Subdivision_CS UI_Screen_SubdivisionDetails: the card of a supper meeting, with the OutSystems names that
    the block reads. The block does not read Subdivision_Actions. */
export interface SubdivisionDetails {
  Subdivision_Card: {
    SubdivisionId: string;
    Subdivision_Card_Content: SubdivisionCardContent;
  };
}

/* ---- SupperMeeting_HouseholdList: DataActionGetSubdivisionHouseholds ---- */

/** Connect_Household_CS UI_SubdivisionHousehold: the gallery card of a household of a supper meeting
    (Household_GalleryCard_List), with the OutSystems names that the card reads. */
export interface SubdivisionHouseholdCard {
  HouseholdId: string;
  HouseholdName: string;
  ChildrenNames: string;
}

/* ---- CacheControl_AllLocalities: DataActionGetCacheInfo ---- */

/** A locality of the list of all localities (UBTConnect_Utils UI_LocalityDetails): the fields that FilterSheet and
    Profile read. */
export interface LocalityListItem {
  LocalityId: string;
  Name: string;
  /** Profile: the option label (Name + ", " + CountryName) and the option group of the locality dropdown. */
  CountryName: string;
  CountryCode: string;
}

/** The list of all localities (UBTConnect_Utils CacheControl_AllLocalities). The list stays wrapped
    (`LocalityList.List`): the block CacheControl_AllLocalities puts the record in the memory cache and raises it in its
    Result event, and FilterSheet reads it as it is. */
export interface AllLocalities {
  LocalityList: { List: LocalityListItem[] };
}

/** The inputs of DataActionGetCacheInfo of CacheControl_AllLocalities. A type alias: the contract inputs have an index
    signature. */
export type AllLocalitiesCallInputs = {
  CacheKey: string;
  CacheTypeId: string;
  TimeToLiveSeconds: number;
};

/* ---- CacheControl_AllSubdivisions: DataActionGetCacheInfo ---- */

/** A subdivision of the list of all subdivisions (APIDomain_Directory_IS Directory_LocalitySubdivision). Profile
    filters it by LocalityId and shows SubdivisionName. */
export interface SubdivisionListItem {
  SubdivisionId: string;
  SubdivisionName: string;
  LocalityId: string;
  LocalityName: string;
}

/** The list of all subdivisions (UBTConnect_Utils CacheControl_AllSubdivions). The list stays wrapped
    (`SubdivionsList.List`), as for CacheControl_AllLocalities: the block keeps the record in the memory cache. */
export interface AllSubdivisions {
  SubdivionsList: { List: SubdivisionListItem[] };
}

/** The inputs of DataActionGetCacheInfo of CacheControl_AllSubdivisions. */
export type AllSubdivisionsCallInputs = AllLocalitiesCallInputs;

/* ---- Connect2_LegacyShared server actions (the Assemble blocks, through the memory cache) ---- */

/** Connect2_LegacyShared CacheableLocalityInformation: the locality of GetLocalityInformation. The record stays as the
    contract describes it: GetCacheableLocality keeps it in the memory cache, and GetLocalBookmarkedLocalityInformation
    (Connect2_Assemble_MUI) clones it and sets IsBookmarked in the locality and in its interchange, household, supper
    meeting, school and store lists, as the original client action does. */
export type LocalityInformation = ActionOutputs<
  PathOf<'Connect2_LegacyShared', 'ActionGetLocalityInformation'>
>['CacheableLocalityInformation'];

/** A signed photo (APIDomain_Directory_IS ImageData): the parts that the attendee rows read. */
export interface SignedPhoto {
  Bucket: string;
  Path: string;
  Type: string;
  SignedURL: string;
}

/** A household of a supper meeting (APIDomain_Directory_IS LocalityHouseholdsResultItem): the fields that the
    attendee rows of AssembleEventDetail_Localities read. */
export interface SubdivisionHousehold {
  Id: string;
  Name: string;
  Family: string;
  Location: string;
  IsBookmarked: boolean;
  Photo340: SignedPhoto;
}

/** Connect2_LegacyShared CacheableSubdivisionInformation: the households of a supper meeting and the locality and
    country of its hall, with the OutSystems names and nesting that AssembleEventDetail_Localities reads. The household
    list stays wrapped (`HouseholdListResponse.List`). */
export interface SubdivisionInformation {
  HouseholdListResponse: { List: SubdivisionHousehold[] };
  Subdivision: {
    Locality: {
      /** Long Integer, as text. */
      Id: string;
      Country: { Code: string };
    };
  };
}

/** One answer of GetBulkSubdivisions_V2 (Connect2_LegacyShared CacheableSubdivisionInformationTextTextRecord): the
    cache key (a hall id), an error text ("" = none) and the record. */
export interface SubdivisionInformationResult {
  CacheKey: string;
  Error: string;
  Value: SubdivisionInformation;
}

/* ---- OneSchoolGlobalDetails: DataActionGetOneSchoolGlobalDetails ---- */

/** A link of a school (UBTConnect BusinessLinkItem): the In_Link of External_Link. */
export interface BusinessLinkItem {
  text: string;
  link: string;
  /** Long Integer, as text. */
  id: string;
}

/** Connect_CommunityBusiness_CS UI_OneSchoolGlobal_DetailCard (GetOneSchoolGlobalDetails.Out_OneSchoolGlobal
    .OneSchoolGlobal_DetailCard): the fields that the screen reads, flattened. */
export interface OneSchoolGlobalDetailCard {
  /** Long Integer, as text. */
  communityBusinessId: string;
  signedURL: string;
  name: string;
  address: string;
  areasServed: string;
  businessLinks: BusinessLinkItem[];
}

/** APIDomain_Directory_IS Directory_Coordinates: the map coordinates of an address. */
export interface DirectoryCoordinates {
  Latitude?: string;
  Longitude?: string;
  UseCoordinates?: boolean;
}

/** The outputs of DataActionGetOneSchoolGlobalDetails that the screen reads: the detail card and the coordinates of
    the school address (the output HouseholdCoordinates, kept as the server sends it). */
export interface OneSchoolGlobalDetails {
  card: OneSchoolGlobalDetailCard;
  householdCoordinates: DirectoryCoordinates;
}

/** A label of the screen's LookupSections (UBTConnectLibrary LookupItem). An absent attribute is sent as "". */
export interface LookupLabel {
  Singular?: string;
  Plural?: string;
  Icon?: string;
  Icon_Color?: string;
}

/** The screen variables that OutSystems sends with DataActionGetOneSchoolGlobalDetails (screenData.variables; the
    recorded call's inputs, src/mocks/fixtures/UBTConnect/DataActionGetOneSchoolGlobalDetails/01-5a0e2715.json). */
export interface OneSchoolGlobalDetailsCallInputs {
  /** LookupSections (UBTConnect LookupSections). */
  lookupSections: { Actions: LookupLabel; Households: LookupLabel; OneSchoolStatistitics: LookupLabel };
  selected_OneschoolGlobal_SubsectionId: string;
  /** Type_OneschoolGlobal_SubsectionId: the record of the two sub-section values. */
  type_OneschoolGlobal_SubsectionId: { UpcomingEvents: string; AboutOurCampus: string };
  localIsBookmarked: boolean;
  /** In_OneSchoolGlobalId (Long Integer, as text). */
  in_OneSchoolGlobalId: string;
}

/* ---- ScreenBlock_ShareObject (LegacyShareObject): Get_UI_CommunityBusinessShareCard ---- */

/** The share card of a community business, Campus&Co or OneSchool Global
    (Connect_CommunityBusiness_CS.UI_CommunityBusiness_ShareCard). */
export interface CommunityBusinessShareCard {
  name: string;
  areasServed: string;
  countryName: string;
  photoBucket: string;
  photoPath: string;
  photoType: string;
  photoSignedPath: string;
}
