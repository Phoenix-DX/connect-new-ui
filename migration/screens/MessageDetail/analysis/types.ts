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

export interface AppManager_AfterInitializeResponse {
  isNotRegistered: boolean;
}

export interface MessagesItem {
  Id: string /* Long Integer as string */;
  MessageTemplateTypeId: number;
  Title: string;
  Summary: string /* "" in capture */;
  DateTimeCreated: string /* ISO DateTime */;
  MessageTemplatePriorityId: number;
  ProfileIconURL: string /* "" in capture */;
  IsClear: boolean;
  IsRead: boolean;
  CreatedByUserId: number;
  CreatedByMemberId: string /* Long Integer as string */;
  MessageInfoTypeId: number;
  MessageSenderTargetName: string;
}

export interface GetMessagesResponse {
  Messages: MessagesItem[] /* wire: { List: [...] } */;
  HasUnreadMessages: boolean;
  CountUnreadMessages: string /* Long Integer as string */;
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

export interface LocalBookmarksC2Item {
  Id: string /* Long Integer as string */;
  UserId: number;
  BookmarkId: string /* Long Integer as string */;
  BookmarkCategoryId: string;
  ItemId: string /* Long Integer as string */;
  CreatedAtDateUtc: string /* ISO DateTime */;
}

export interface EmptyListItem {
  Id: string /* Long Integer as string */;
  UserId: number /* 0 in capture */;
  NoteId: string /* Long Integer as string */;
  NoteCategoryId: string /* "" in capture */;
  ItemId: string /* "" in capture */;
  DateCreatedUtc: string /* "1900-01-01..." = no value */;
  DateEditedUtc: string /* "1900-01-01..." = no value */;
  NotesTotalCount: string /* Long Integer as string */;
}

export interface LocalNotes {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface LocalEntities_App {
  LocalBookmark: LocalBookmarkItem[] /* wire: { List: [...] } */;
  LocalBookmarksC2: LocalBookmarksC2Item[] /* wire: { List: [...] } */;
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

export interface ResultsItem {
  Id: string /* Long Integer as string */;
  Type: string;
  Size: string;
  SignedURL: string;
  Error: string /* "" in capture */;
}

export interface GetSignedImagesInBulkResponse {
  Results: ResultsItem[] /* wire: { List: [...] } */;
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
  MainHall_Latitude: string /* Decimal as string */;
  MainHall_Longitude: string /* Decimal as string */;
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
  Lat: string /* Decimal as string */;
  Long: string /* Decimal as string */;
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

export interface MessagePriority {
  Id: number /* 0 in capture */;
  Label: string /* "" in capture */;
  Order: number /* 0 in capture */;
  Is_Active: boolean;
}

export interface MessageContent {
  Id: string /* Long Integer as string */;
  MessageContent: string;
}

export interface MessageTemplate {
  Id: string /* Long Integer as string */;
  IsAdaptiveCard: boolean;
  Title: string;
  Summary: string /* "" in capture */;
  MessageContentId: string /* Long Integer as string */;
  CreatedByUser: number /* 0 in capture */;
  CreatedDate: string /* "1900-01-01..." = no value */;
  LastUpdated: string /* "1900-01-01..." = no value */;
  UpdatedBy: number /* 0 in capture */;
  MessageTemplateStatusId: number /* 0 in capture */;
  MessageTemplateTypeId: number;
  MessageTemplatePriorityId: number;
  MessageInfoTypeId: number;
  AdaptiveCardJSONId: string /* Long Integer as string */;
  SentAs: number;
  SavedTemplateId: string /* Long Integer as string */;
  MessageSendToTypeId: number /* 0 in capture */;
  MessageApplicationTargetId: number /* 0 in capture */;
  RecalledBy: number /* 0 in capture */;
  IsPushNotificationOnly: boolean;
  HideTitleOnPushNotification: boolean;
  HideBodyOnPushNotification: boolean;
}

export interface MessageSenderTarget {
  Id: number;
  Name: string;
  ProfileIconURL: string;
  Order: number /* 0 in capture */;
  Is_Active: boolean;
  NotificationIcon: string /* "" in capture */;
  NotificationHeading: string /* "" in capture */;
}

export interface MessageInstance {
  Id: string /* Long Integer as string */;
  MessageTemplateId: string /* Long Integer as string */;
  UserId: number;
  DeviceHardwareId: string /* "" in capture */;
  IsSent: boolean;
  IsReceived: boolean;
  IsRead: boolean;
  IsReplied: boolean;
  IsClear: boolean;
  DateTimeCreated: string /* ISO DateTime */;
  NotificationUUID: string /* "" in capture */;
  SendAttemptCount: number /* 0 in capture */;
  LastSendAttemptDateTime: string /* "1900-01-01..." = no value */;
  NextSendAttemptDateTime: string /* "1900-01-01..." = no value */;
  CheckForReceiptCount: number /* 0 in capture */;
  LastCheckForReceiptDateTime: string /* "1900-01-01..." = no value */;
  NextCheckForReceiptDateTime: string /* "1900-01-01..." = no value */;
  SentToWebDevice: boolean;
  MessageError: string /* "" in capture */;
}

export interface AdaptiveCardJSON {
  Id: string /* Long Integer as string */;
  AdaptiveCardContent: string /* "" in capture */;
}

export interface User {
  Id: number /* 0 in capture */;
  Name: string;
  Username: string /* "" in capture */;
  Password: string /* "" in capture */;
  Email: string /* "" in capture */;
  MobilePhone: string /* "" in capture */;
  External_Id: string /* "" in capture */;
  Creation_Date: string /* "1900-01-01..." = no value */;
  Last_Login: string /* "1900-01-01..." = no value */;
  Is_Active: boolean;
}

export interface Message {
  MessagePriority: MessagePriority;
  MessageContent: MessageContent;
  MessageTemplate: MessageTemplate;
  MessageSenderTarget: MessageSenderTarget;
  MessageInstance: MessageInstance;
  AdaptiveCardJSON: AdaptiveCardJSON;
  User: User;
  CreatedByMemberId: string /* Long Integer as string */;
}

export interface Delimiters {
  Delimiter_Function: string /* "" in capture */;
  Delimiter_Parameter: string /* "" in capture */;
  Delimiter_Placeholder: string /* "" in capture */;
}

export interface PlaceholderDelimiters {
  Delimiters: Delimiters;
}

export interface GetMessageInstanceResponse {
  Message: Message;
  IsRetracted: boolean;
  IsCleared: boolean;
  PlaceholderDelimiters: PlaceholderDelimiters;
}
