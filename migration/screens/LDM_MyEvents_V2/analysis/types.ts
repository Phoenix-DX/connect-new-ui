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

export interface EventLocalitiesItem {
  IdAsText: string;
  Name: string;
  IsSelected: boolean;
}

export interface GetEventLocalitiesForFilterResponse {
  EventLocalities: EventLocalitiesItem[] /* wire: { List: [...] } */;
}

export interface TimeZone {
  TZName: string;
  WindowsName: string;
  OffsetSeconds: string /* Long Integer as string */;
  Abbreviation: string;
}

export interface GuestsItem {
  HouseholderId: string /* Long Integer as string */;
  EventGuestId: string /* Long Integer as string */;
  HouseholderName: string;
  LocalityId: string /* Long Integer as string */;
  LocalityName: string;
  MobilePhone: string;
  Email: string;
  WorkPhone: string /* "" in capture */;
  CountryCode: string;
  SignedImagePath: string;
  RecordDisabled: boolean;
  HouseholdDisplay: boolean;
  Address: string;
  CountryName: string;
  Longitude: string /* Decimal as string */;
  Latitude: string /* Decimal as string */;
  TimeZone: TimeZone;
  HomePhone: string /* "" in capture */;
  HouseholderSignedImagePath: string;
  HouseholderFirstName: string;
}

export interface EventsCalendarItem {
  EventId: string /* Long Integer as string */;
  EventHostId: string /* Long Integer as string */;
  EventLocalityId: string /* Long Integer as string */;
  EventDate: string /* ISO DateTime */;
  GuestCount: string /* Long Integer as string */;
  EventName: string;
  HostId: string /* Long Integer as string */;
  HostFullName: string;
  HostLocality: string;
  Hosting: boolean;
  HouseholdDisplay: boolean;
  Guests: GuestsItem[] /* wire: { List: [...] } */;
}

export interface Out_PastEventsItem {
  CurrentMonthDate: string;
  EventsCalendar: EventsCalendarItem[] /* wire: { List: [...] } */;
}

export interface Guests {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface EmptyListItem {
  EventId: string /* Long Integer as string */;
  EventHostId: string /* Long Integer as string */;
  EventLocalityId: string /* Long Integer as string */;
  EventDate: string /* "" in capture */;
  GuestCount: string /* "" in capture */;
  EventName: string /* "" in capture */;
  HostId: string /* Long Integer as string */;
  HostFullName: string /* "" in capture */;
  HostLocality: string /* "" in capture */;
  Hosting: boolean;
  HouseholdDisplay: boolean;
  Guests: Guests;
}

export interface Out_UpcomingEvents {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface GetEventsForMyTimelineResponse {
  Out_PastEvents: Out_PastEventsItem[] /* wire: { List: [...] } */;
  Out_UpcomingEvents: Out_UpcomingEvents;
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

export interface Directory_UserCurrent_Visibility {
  DisplayWorkPhone: boolean;
  DisplayMobilePhone: boolean;
  DisplayAge: boolean;
}

export interface Directory_UserCurrent_Geography {
  Subdivision_Id: string /* Long Integer as string */;
  Subdivision_Name: string;
  Locality_Id: string /* Long Integer as string */;
  Locality_Name: string;
  Locality_SubdivisionCount: string /* Long Integer as string */;
  Country_Code: string;
  Country_Name: string;
  Country_Email: string;
  Country_Phone: string;
  Country_LocalityCount: string /* Long Integer as string */;
}

export interface SubscribedCountriesItem {
  Code: string;
  Name: string;
  RegionId: string /* Long Integer as string */;
}

export interface Directory_UserCurrent_Subscription {
  SubscriptionID: string;
  SubscriptionType: string;
  SubscriptionRegionId: string;
  SubscriptionRegion: string;
  SubscriptionManageLink: string;
  SubscriptionActive: boolean;
  SubscribedCountries: SubscribedCountriesItem[] /* wire: { List: [...] } */;
}

export interface Photo {
  Bucket: string;
  Path: string;
  Type: string;
  SignedURL: string;
}

export interface AddressItemsListItem {
  Label: string;
  Visible: boolean;
  Required: boolean;
  Value: string /* "" in capture */;
  NumberRef: number;
  IsValid: boolean;
}

export interface Address {
  AddressItemsList: AddressItemsListItem[] /* wire: { List: [...] } */;
  FormattedAddress: string;
  Lat: string /* Long Integer as string */;
  Long: string /* Long Integer as string */;
}

export interface Directory_UserCurrent_Member {
  HouseholderId: string /* Long Integer as string */;
  isHouseholder: boolean;
  SpouseId: string /* Long Integer as string */;
  SpouseIsHouseholder: boolean;
  Photo: Photo;
  Address: Address;
}

export interface Directory_UserCurrent {
  Id: string;
  UserName: string;
  Email: string /* "" in capture */;
  AccountEmail: string;
  FirstName: string;
  LastName: string;
  FullName: string;
  MemberID: string /* Long Integer as string */;
  AccountNumber: string;
  HomeNumber: string /* "" in capture */;
  MobileNumber: string /* "" in capture */;
  WorkNumber: string /* "" in capture */;
  Directory_UserCurrent_Visibility: Directory_UserCurrent_Visibility;
  Directory_UserCurrent_Geography: Directory_UserCurrent_Geography;
  Directory_UserCurrent_Subscription: Directory_UserCurrent_Subscription;
  Directory_UserCurrent_Member: Directory_UserCurrent_Member;
}

export interface UserInformation {
  Directory_UserCurrent: Directory_UserCurrent;
  HasPoliciesToAccept: boolean;
}

export interface GetUserInformationResponse {
  UserInformation: UserInformation;
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
