// Generated from captured response shapes. Long Integer / Decimal travel as strings.

export interface AppManager_ClientCache {
  BaseURL: string;
  Environment: string;
  IdpProviderId: number;
  AzureB2C_Policy_Login: string;
  AzureB2C_Policy_ResetPass: string;
  AzureB2C_ClientId: string;
  FrontEgg_AppId: string /* "" in capture */;
  FrontEgg_CodeVerifier: string /* "" in capture */;
  FrontEgg_CodeChallenge: string /* "" in capture */;
  Firebase_ProjectId: string;
  Firebase_RealTimeDatabase_Use: boolean;
  AzureInsights_Use: boolean;
  PIN_Use: boolean;
  PIN_SessionInactivity_Use: boolean;
  PIN_SessionInactivity_Seconds: number;
  PIN_SessionInactivity_Navigate: boolean;
  PIN_EnableFingerprint: boolean;
  PIN_EnforceOnReady: boolean;
  CustomCallback: string /* "" in capture */;
  MinWebViewVersion_Chrome: string /* "" in capture */;
  MinWebViewVersion_Safari: string /* "" in capture */;
  MinNativeAppVersion: string /* "" in capture */;
  PackageName: string;
  AndroidAppId: string;
  EnableFrameworkExtension: boolean;
  PluginUse_PrivacyScreen: boolean;
  Streamline_TOTP_LoginCheck: boolean;
}

export interface AppManager_ClientConfig {
  AppManager_ClientCache: AppManager_ClientCache;
  EspaceName: string;
  CurrentUTCTime: string /* ISO DateTime */;
  Firebase_RealTimeDatabase_URL: string;
  Firebase_RealTimeDatabase_APIKey: string;
  Firebase_CloudMessage_Use: boolean;
  AzureInsights_ConnectionString: string;
  DeviceAwareness_Use: boolean;
  Streamline_Use: boolean;
  CheckDeviceOnReady: boolean;
}

export interface AppManager_SynchAppContextResponse {
  AppManager_ClientConfig: AppManager_ClientConfig;
  isSuccess: boolean;
  PermissionList: string[] /* wire: { List: [...] } */ /* wire: { List: [...] } */;
  FirebaseRealTimeDB_Token: string;
}

export interface URL {
  Bucket: string /* "" in capture */;
  Path: string /* "" in capture */;
  Type: string /* "" in capture */;
  CropX: string /* Long Integer as string */;
  CropY: string /* Long Integer as string */;
  CropW: string /* Long Integer as string */;
  CropH: string /* Long Integer as string */;
  SignedURL: string /* "" in capture */;
}

export interface URL720 {
  Bucket: string /* "" in capture */;
  Path: string /* "" in capture */;
  Type: string /* "" in capture */;
  CropX: string /* Long Integer as string */;
  CropY: string /* Long Integer as string */;
  CropW: string /* Long Integer as string */;
  CropH: string /* Long Integer as string */;
  SignedURL: string /* "" in capture */;
}

export interface URL340 {
  Bucket: string /* "" in capture */;
  Path: string /* "" in capture */;
  Type: string /* "" in capture */;
  CropX: string /* Long Integer as string */;
  CropY: string /* Long Integer as string */;
  CropW: string /* Long Integer as string */;
  CropH: string /* Long Integer as string */;
  SignedURL: string /* "" in capture */;
}

export interface HallPhoto {
  Id: string /* Long Integer as string */;
  SignedURL: string /* "" in capture */;
  SignedURL720: string /* "" in capture */;
  SignedURL340: string /* "" in capture */;
  URL: URL;
  URL720: URL720;
  URL340: URL340;
}

export interface Config {
  CountryCode: string /* "" in capture */;
  CountryName: string /* "" in capture */;
  TermsAndConditions: string /* "" in capture */;
  TermsAndConditionsLastUpdated: string /* "1900-01-01..." = no value */;
  Phone: string /* "" in capture */;
  Email: string /* "" in capture */;
  ManageSubscriptionLink: string /* "" in capture */;
  Active: boolean;
  LocalityIconColourHex: string /* "" in capture */;
  CountryIconColourHex: string /* "" in capture */;
}

export interface Country {
  Code: string /* "" in capture */;
  Name: string /* "" in capture */;
  LocalitiesCount: string /* Long Integer as string */;
  HouseholdersCount: string /* Long Integer as string */;
  MembersCount: string /* Long Integer as string */;
  BrotherCount: string /* Long Integer as string */;
  SisterCount: string /* Long Integer as string */;
  RegionId: string /* Long Integer as string */;
  Config: Config;
}

export interface Locality {
  Id: string /* Long Integer as string */;
  Name: string /* "" in capture */;
  HallPhoto: HallPhoto;
  Country: Country;
}

export interface Subdivision {
  Id: string /* Long Integer as string */;
  Name: string;
  IsMainHall: boolean;
  HallPhoto: HallPhoto;
  Address1: string /* "" in capture */;
  Address2: string /* Long Integer as string */;
  Address3: string;
  Address4: string;
  Address5: string;
  Address6: string /* Long Integer as string */;
  Address7: string /* "" in capture */;
  Address8: string /* "" in capture */;
  FormattedAddress: string /* "" in capture */;
  Locality: Locality;
  HouseholdCount: string /* Long Integer as string */;
  MemberCount: string /* Long Integer as string */;
  Latitude: string /* Decimal as string */;
  Longitude: string /* Decimal as string */;
}

export interface ConnectConfig {
  CountryCode: string /* "" in capture */;
  CountryName: string /* "" in capture */;
  TermsAndConditions: string /* "" in capture */;
  TermsAndConditionsLastUpdated: string /* "1900-01-01..." = no value */;
  Phone: string /* "" in capture */;
  Email: string /* "" in capture */;
  ManageSubscriptionLink: string /* "" in capture */;
  Active: boolean;
  LocalityIconColourHex: string /* "" in capture */;
  CountryIconColourHex: string /* "" in capture */;
}

export interface DefaultCountry {
  Code: string;
  Name: string;
  RegionId: string /* Long Integer as string */;
  ConnectConfig: ConnectConfig;
  LocalitiesCount: string /* Long Integer as string */;
}

export interface TimeZone {
  TimezoneLabel: string /* "" in capture */;
  OffsetSeconds: string /* Long Integer as string */;
  TimezoneAbreviation: string /* "" in capture */;
  CountryName: string /* "" in capture */;
}

export interface DefaultLocality {
  Id: string /* Long Integer as string */;
  Name: string;
  HallPhoto: HallPhoto;
  Country: Country;
  HouseholdCount: string /* Long Integer as string */;
  MemberCount: string /* Long Integer as string */;
  SubdivisionsCount: string /* Long Integer as string */;
  MainHallAddress: string;
  AddressForMap: string;
  MainHallLatitude: string /* Decimal as string */;
  MainHallLongitude: string /* Decimal as string */;
  Active: boolean;
  IsBookmarked: boolean;
  TimeZone: TimeZone;
  BrotherCount: string /* Long Integer as string */;
  SisterCount: string /* Long Integer as string */;
  MainHallSubdivisionId: string /* Long Integer as string */;
}

export interface Photo {
  Id: string /* Long Integer as string */;
  SignedURL: string /* "" in capture */;
  SignedURL720: string /* "" in capture */;
  SignedURL340: string /* "" in capture */;
  URL: URL;
  URL720: URL720;
  URL340: URL340;
  HouseholderId: string /* Long Integer as string */;
  PublishedOn: string /* "1900-01-01..." = no value */;
  LastUpdated: string /* "1900-01-01..." = no value */;
  LastUpdatedUser: string /* "" in capture */;
  X: string /* Long Integer as string */;
  Y: string /* Long Integer as string */;
  Width: string /* Long Integer as string */;
  Height: string /* Long Integer as string */;
  MemberId: string /* Long Integer as string */;
}

export interface EmptyListItem {
  DisplayType: string /* "" in capture */;
  Photo: Photo;
  Data: string /* "" in capture */;
  DisplayTitle: string /* "" in capture */;
  DisplayDescription: string /* "" in capture */;
  Deceased: boolean;
  IsHidden: boolean;
}

export interface Details {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface Householder {
  Id: string /* Long Integer as string */;
  FirstName: string;
  LastName: string;
  MaidenName: string /* "" in capture */;
  Title: string;
  Email: string;
  IsHouseholder: boolean;
  Address1: string /* "" in capture */;
  Address2: string /* Long Integer as string */;
  Address3: string;
  Address4: string;
  Address5: string;
  Address6: string /* Long Integer as string */;
  Address7: string /* "" in capture */;
  Address8: string /* "" in capture */;
  IsDeceased: boolean;
  Name: string /* "" in capture */;
  IsMainHall: boolean;
  HouseholderId: string /* Long Integer as string */;
  LastUpdated: string /* "1900-01-01..." = no value */;
  Photo: Photo;
  Details: Details;
  DisplayTitle: string /* "" in capture */;
  DisplayDescription: string /* "" in capture */;
  HomePhoneLastUpdated: string /* ISO DateTime */;
  MobilePhoneLastUpdated: string /* ISO DateTime */;
  DisplayAge: boolean;
}

export interface PhotoTag {
  Id: string /* Long Integer as string */;
  SignedURL: string;
  URL: URL;
  X: string /* Long Integer as string */;
  Y: string /* Long Integer as string */;
  Width: string /* Long Integer as string */;
  Height: string /* Long Integer as string */;
  MemberId: string /* Long Integer as string */;
  LastUpdated: string /* ISO DateTime */;
}

export interface Spouse {
  Id: string /* Long Integer as string */;
  FirstName: string /* "" in capture */;
  LastName: string /* "" in capture */;
  DisplayName: string /* "" in capture */;
  Title: string /* "" in capture */;
  MaidenName: string /* "" in capture */;
  Email: string /* "" in capture */;
  IsHouseholder: boolean;
  IsDeceased: boolean;
}

export interface Member {
  Id: string /* Long Integer as string */;
  FirstName: string;
  LastName: string;
  MaidenName: string /* "" in capture */;
  DateOfBirth: string /* ISO DateTime */;
  Title: string;
  HomePhone: string /* "" in capture */;
  WorkPhone: string /* "" in capture */;
  MobilePhone: string /* "" in capture */;
  Email: string /* "" in capture */;
  IsHouseholder: boolean;
  Householder: Householder;
  PhotoTag: PhotoTag;
  Address1: string /* "" in capture */;
  Address2: string /* Long Integer as string */;
  Address3: string;
  Address4: string;
  Address5: string;
  Address6: string /* Long Integer as string */;
  Address7: string /* "" in capture */;
  Address8: string /* "" in capture */;
  Country: Country;
  Locality: Locality;
  Subdivision: Subdivision;
  IsDeceased: boolean;
  HomePhoneLastUpdated: string /* ISO DateTime */;
  WorkPhoneLastUpdated: string /* ISO DateTime */;
  MobilePhoneLastUpdated: string /* ISO DateTime */;
  Spouse: Spouse;
  FormattedAddress: string;
  DisplayWorkPhone: boolean;
  DisplayMobilePhone: boolean;
  DisplayAge: boolean;
  UbtAccountNumber: string;
}

export interface Roles {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface Claims {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface SubscribedRegionsItem {
  Id: string;
  Name: string;
  Active: boolean;
}

export interface SubscribedCountriesItem {
  Code: string;
  Name: string;
  RegionId: string /* Long Integer as string */;
  Address1Label: string;
  Address1Visible: boolean;
  Address1Required: boolean;
  Address2Label: string;
  Address2Visible: boolean;
  Address2Required: boolean;
  Address3Label: string;
  Address3Visible: boolean;
  Address3Required: boolean;
  Address4Label: string;
  Address4Visible: boolean;
  Address4Required: boolean;
  Address5Label: string;
  Address5Visible: boolean;
  Address5Required: boolean;
  Address6Label: string;
  Address6Visible: boolean;
  Address6Required: boolean;
  Address7Label: string;
  Address7Visible: boolean;
  Address7Required: boolean;
  Address8Label: string;
  Address8Visible: boolean;
  Address8Required: boolean;
  LocalitiesCount: string /* Long Integer as string */;
  ConnectConfig: ConnectConfig;
}

export interface Subscription {
  Id: string;
  SubscriptionType: string;
  Active: boolean;
  SubscribedRegions: SubscribedRegionsItem[] /* wire: { List: [...] } */;
  SubscribedCountries: SubscribedCountriesItem[] /* wire: { List: [...] } */;
  IsSignUpUser: boolean;
}

export interface UserInformation {
  Id: string;
  UserName: string;
  Email: string;
  FirstName: string;
  LastName: string;
  MemberID: string /* Long Integer as string */;
  Subdivision: Subdivision;
  Locality: Locality;
  Country: Country;
  DefaultCountry: DefaultCountry;
  DefaultLocality: DefaultLocality;
  Member: Member;
  Active: boolean;
  EmailConfirmed: boolean;
  Roles: Roles;
  Claims: Claims;
  Subscription: Subscription;
  DisplayWorkPhone: boolean;
  DisplayMobilePhone: boolean;
  DisplayAge: boolean;
}

export interface GetUserInformationResponse {
  UserInformation: UserInformation;
}

export interface CountriesItem {
  Code: string;
  Name: string;
  RegionId: string /* Long Integer as string */;
  LocalitiesCount: string /* Long Integer as string */;
  HouseholdersCount: string /* Long Integer as string */;
  MembersCount: string /* Long Integer as string */;
  InitialLatitude: string /* Decimal as string */;
  InitialLongitude: string /* Decimal as string */;
  InitialZoom: number;
  WithinSubscription: boolean;
}

export interface GetCountriesBySubscriptionResponse {
  Countries: CountriesItem[] /* wire: { List: [...] } */;
}

export interface AppManager_AfterInitializeResponse {
  isNotRegistered: boolean;
}

export interface OrbitEventTypesItem {
  Id: string;
  Is_Active: boolean;
  Type: string;
  Name: string;
  MainColorVar: string;
  MainIcon: string;
}

export interface OrbitMilestoneTypesItem {
  Id: string;
  Is_Active: boolean;
  Order: number;
  Type: string;
  Name: string;
  MainColorVar: string;
  MainIcon: string;
  CanHost: boolean;
  IsTransportMilestone: boolean;
  IconTransportDeparture: string /* "" in capture */;
  IconTransportArrival: string /* "" in capture */;
  TransportHeaderClass: string /* "" in capture */;
  TravelInfoHeader: string /* "" in capture */;
  TravelInfoHeaderIcon: string /* "" in capture */;
}

export interface HostSurveyStepItem {
  Id: number;
  HeaderLabel: string /* "" in capture */;
  AddLabel: string /* "" in capture */;
  Order: number;
  IsDataStep: boolean;
}

export interface OrbitBedSizeItem {
  Id: string /* Long Integer as string */;
  Label: string;
  Order: number;
  JSON_Name: string;
}

export interface OrbitGenderPreferenceItem {
  Id: number;
  Label: string;
  Order: number;
  Is_Active: boolean;
  JSON_Name: string;
}

export interface OrbitHouseFloorItem {
  Id: number;
  Label: string;
  Order: number;
  JSON_Name: string;
  Is_Active: boolean;
}

export interface OrbitVehicleOwnerItem {
  Id: string /* Long Integer as string */;
  Label: string;
  Order: number;
  JSON_Name: string;
}

export interface OrbitVehicleTypeItem {
  Id: string /* Long Integer as string */;
  Label: string;
  Order: number;
  JSON_Name: string;
  Is_Active: boolean;
}

export interface HelperStatusItem {
  Id: number;
  Label: string;
  Order: number;
  Is_Active: boolean;
  JSON_Name: string;
}

export interface SurveyStatusItem {
  Id: number;
  Label: string;
  Order: number;
  Is_Active: boolean;
  JSON_Name: string;
}

export interface MealTypeItem {
  Id: number;
  Label: string;
  Order: number;
  Is_Active: boolean;
  JSON_Name: string;
}

export interface HelperRolesItem {
  Id: number;
  Label: string;
  Order: number;
  Is_Active: boolean;
  JSON_Name: string;
  isReadOnly: boolean;
}

export interface OrbitStaticEntities {
  OrbitEventTypes: OrbitEventTypesItem[] /* wire: { List: [...] } */;
  OrbitMilestoneTypes: OrbitMilestoneTypesItem[] /* wire: { List: [...] } */;
  HostSurveyStep: HostSurveyStepItem[] /* wire: { List: [...] } */;
  OrbitBedSize: OrbitBedSizeItem[] /* wire: { List: [...] } */;
  OrbitGenderPreference: OrbitGenderPreferenceItem[] /* wire: { List: [...] } */;
  OrbitHouseFloor: OrbitHouseFloorItem[] /* wire: { List: [...] } */;
  OrbitVehicleOwner: OrbitVehicleOwnerItem[] /* wire: { List: [...] } */;
  OrbitVehicleType: OrbitVehicleTypeItem[] /* wire: { List: [...] } */;
  HelperStatus: HelperStatusItem[] /* wire: { List: [...] } */;
  SurveyStatus: SurveyStatusItem[] /* wire: { List: [...] } */;
  MealType: MealTypeItem[] /* wire: { List: [...] } */;
  HelperRoles: HelperRolesItem[] /* wire: { List: [...] } */;
}

export interface LocalBookmarkItem {
  Id: string /* Long Integer as string */;
  UserId: number;
  BookmarkId: string /* Long Integer as string */;
  ObjectType: string;
  ObjectId: string /* Long Integer as string */;
  Group: string;
  DateCreatedUtc: string /* ISO DateTime */;
  Note: string /* "" in capture */;
}

export interface LocalBookmarksC2 {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface LocalNotes {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface LocalEntities_App {
  LocalBookmark: LocalBookmarkItem[] /* wire: { List: [...] } */;
  LocalBookmarksC2: LocalBookmarksC2;
  LocalNotes: LocalNotes;
}

export interface Sync_SiteProperties {
  UpdatesFeed_MonthsToShow: number;
}

export interface Sync_Info_GetMainResponse {
  OrbitStaticEntities: OrbitStaticEntities;
  LocalEntities_App: LocalEntities_App;
  Sync_SiteProperties: Sync_SiteProperties;
  MyEntertainingBaseURL: string;
  FeedBaseURL: string;
  B2CTenant: string;
}

export interface GetNumberUnreadMessagesResponse {
  NumberPublicUnreadMessages: string /* Long Integer as string */;
  NumberPrivateUnreadMessages: string /* Long Integer as string */;
}

export interface Latlng {
  List: number[];
  EmptyListItem: number /* 0 in capture */;
}

export interface IconSize {
  List: unknown[] /* empty in capture */;
  EmptyListItem: number /* 0 in capture */;
}

export interface IconAnchor {
  List: unknown[] /* empty in capture */;
  EmptyListItem: number /* 0 in capture */;
}

export interface PopupAnchor {
  List: unknown[] /* empty in capture */;
  EmptyListItem: number /* 0 in capture */;
}

export interface TooltipAnchor {
  List: unknown[] /* empty in capture */;
  EmptyListItem: number /* 0 in capture */;
}

export interface ShadowSize {
  List: unknown[] /* empty in capture */;
  EmptyListItem: number /* 0 in capture */;
}

export interface ShadowAnchor {
  List: unknown[] /* empty in capture */;
  EmptyListItem: number /* 0 in capture */;
}

export interface Icon {
  iconUrl: string;
  iconRetinaUrl: string /* "" in capture */;
  iconSize: IconSize;
  iconAnchor: IconAnchor;
  popupAnchor: PopupAnchor;
  tooltipAnchor: TooltipAnchor;
  shadowUrl: string /* "" in capture */;
  shadowRetinaUrl: string /* "" in capture */;
  shadowSize: ShadowSize;
  shadowAnchor: ShadowAnchor;
  className: string /* "" in capture */;
  crossOrigin: string /* "" in capture */;
  isTextIcon: boolean;
}

export interface Options {
  Icon: Icon;
  Draggable: boolean;
  Keyboard: boolean;
  Title: string /* "" in capture */;
  Alt: string /* "" in capture */;
  ZIndexOffset: string /* Long Integer as string */;
  Opacity: string /* Decimal as string */;
  RiseOnHover: boolean;
  RiseOffset: string /* Long Integer as string */;
}

export interface Marker {
  Id: string /* Long Integer as string */;
  Type: string;
  ExtraData: string;
  Latlng: Latlng;
  Options: Options;
}

export interface Tooltip {
  Content: string;
  Options: Options;
}

export interface AutoPanPadding {
  X: string /* Long Integer as string */;
  Y: string /* Long Integer as string */;
}

export interface Popup {
  Pane: string;
  MaxWidth: string /* Long Integer as string */;
  MinWidth: string /* Long Integer as string */;
  AutoPan: boolean;
  AutoPanPadding: AutoPanPadding;
  KeepInView: boolean;
  CloseButton: boolean;
  AutoClose: boolean;
  CloseOnEscapeKey: boolean;
  ClassName: string /* "" in capture */;
  Interactive: boolean;
  Content: string /* "" in capture */;
}

export interface MarkerWithWindow {
  Marker: Marker;
  Tooltip: Tooltip;
  Popup: Popup;
}

export interface Localities_MarkersItem {
  MarkerWithWindow: MarkerWithWindow;
  IsLocked: boolean;
}

export interface Localities_GeoJSON {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface PathOptions {
  stroke: boolean;
  color: string;
  weight: number;
  opacity: string /* Decimal as string */;
  lineCap: string;
  lineJoin: string;
  dashArray: string /* Long Integer as string */;
  dashOffset: string /* "" in capture */;
  fill: boolean;
  fillColor: string;
  fillOpacity: string /* Decimal as string */;
  fillRule: string /* "" in capture */;
  bubblingMouseEvents: boolean;
  className: string /* "" in capture */;
  interactive: boolean;
  pane: string /* "" in capture */;
  attribution: string /* "" in capture */;
}

export interface GeoJSONFeatureList {
  FeatureJSON: string;
  Id: string;
  Type: string;
  ExtraData: string /* "" in capture */;
  PathOptions: PathOptions;
}

export interface Countries_GeoJSONItem {
  GeoJSONFeatureList: GeoJSONFeatureList;
  IsLocked: boolean;
}

export interface Countries_MarkersItem {
  MarkerWithWindow: MarkerWithWindow;
  IsLocked: boolean;
}

export interface MapExploreItem {
  Name: string;
  Address: string;
  Latitude: string /* Decimal as string */;
  Longitude: string /* Decimal as string */;
  PhotoURL: string /* "" in capture */;
  PhotoURL2: string /* "" in capture */;
  Type: string;
  Id: string /* Long Integer as string */;
  DisplayHouseholdName: boolean;
  DisplayAddress: boolean;
}

export interface GlobalLocations_MarkersItem {
  MarkerWithWindow: MarkerWithWindow;
  MapExploreItem: MapExploreItem;
}

export interface ServiceAPIFetchData_CacheableMapEntitiesResponse {
  Localities_Markers: Localities_MarkersItem[] /* wire: { List: [...] } */;
  Localities_GeoJSON: Localities_GeoJSON;
  Countries_GeoJSON: Countries_GeoJSONItem[] /* wire: { List: [...] } */;
  Countries_Markers: Countries_MarkersItem[] /* wire: { List: [...] } */;
  GlobalLocations_Markers: GlobalLocations_MarkersItem[] /* wire: { List: [...] } */;
}

export interface Household_MarkersItem {
  MarkerWithWindow: MarkerWithWindow;
  MapExploreItem: MapExploreItem;
}

export interface ServiceAPIFetchData_CacheableHouseholdsResponse {
  Household_Markers: Household_MarkersItem[] /* wire: { List: [...] } */;
}
