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

export interface PermissionList {
  List: unknown[] /* empty in capture */;
  EmptyListItem: string /* "" in capture */;
}

export interface AppManager_SynchAppContextResponse {
  AppManager_ClientConfig: AppManager_ClientConfig;
  isSuccess: boolean;
  PermissionList: PermissionList /* wire: { List: [...] } */;
  FirebaseRealTimeDB_Token: string /* "" in capture */;
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

export interface EmptyListItem {
  Id: number /* 0 in capture */;
  HeaderLabel: string /* "" in capture */;
  AddLabel: string /* "" in capture */;
  Order: number /* 0 in capture */;
  IsDataStep: boolean;
}

export interface HostSurveyStep {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface OrbitBedSize {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface OrbitGenderPreference {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface OrbitHouseFloor {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface OrbitVehicleOwner {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface OrbitVehicleType {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface HelperStatus {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface SurveyStatusItem {
  Id: number;
  Label: string;
  Order: number;
  Is_Active: boolean;
  JSON_Name: string;
}

export interface MealType {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface HelperRoles {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface OrbitStaticEntities {
  OrbitEventTypes: OrbitEventTypesItem[] /* wire: { List: [...] } */;
  OrbitMilestoneTypes: OrbitMilestoneTypesItem[] /* wire: { List: [...] } */;
  HostSurveyStep: HostSurveyStep;
  OrbitBedSize: OrbitBedSize;
  OrbitGenderPreference: OrbitGenderPreference;
  OrbitHouseFloor: OrbitHouseFloor;
  OrbitVehicleOwner: OrbitVehicleOwner;
  OrbitVehicleType: OrbitVehicleType;
  HelperStatus: HelperStatus;
  SurveyStatus: SurveyStatusItem[] /* wire: { List: [...] } */;
  MealType: MealType;
  HelperRoles: HelperRoles;
}

export interface LocalBookmark {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
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
  LocalBookmark: LocalBookmark;
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

export interface Get_RuntimeVersionResponse {
  Out_RuntimeVersion: number;
  Out_Name: string /* "" in capture */;
}
