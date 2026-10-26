import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';

/* Domain types of the app-start calls: the server actions of OnApplicationReady (AppManager_SynchAppContext,
   AppManager_AfterInitialize, Sync_Info_GetMain, FetchData_CacheableMapEntities and FetchData_CacheableHouseholds) and
   the data action of the block CacheControl_Policies. The readers are the app start and the logged context
   (platform/bootstrap), the sign-out (platform/session/auth.ts) and the policy links (TermsAndPoliciesMenu,
   Block_PINUnlock_ContentWrapper). Each type has the shape that its readers use today, so no caller changes: the
   OutSystems names and nesting where the reader takes the record as it is, camelCase where the app start maps the
   record. The records that the app keeps as they are (the local entities, the Orbit static entities and the map
   objects) have their contract types. The wire types stay in src/api/schema.d.ts. */

type SyncInfoMainWire = ActionOutputs<PathOf<'UBTConnect', 'ActionSync_Info_GetMain'>>;
type SyncLocalEntitiesWire = SyncInfoMainWire['LocalEntities_App'];
type MapEntitiesWire = ActionOutputs<PathOf<'UBTConnect', 'ServiceAPIFetchData_CacheableMapEntities'>>;
type HouseholdMarkerWire = ActionOutputs<
  PathOf<'UBTConnect', 'ServiceAPIFetchData_CacheableHouseholds'>
>['Household_Markers']['List'][number];

/** AppManager_ConfigClientCache (UBT_AppManager_CS): the settings that the app start keeps (platform/settings) and the
    package name of the device context. The other fields (identity provider, Firebase and FrontEgg keys, URLs) are not
    read. */
export interface ClientCache {
  PackageName: string;
  /** OutSystems_Environment, shown by the Version block. */
  Environment: string;
  AzureInsights_Use: boolean;
  PIN_Use: boolean;
  PIN_SessionInactivity_Use: boolean;
  PIN_SessionInactivity_Seconds: number;
  PIN_SessionInactivity_Navigate: boolean;
  PIN_EnforceOnReady: boolean;
  PIN_EnableFingerprint: boolean;
  MinNativeAppVersion: string;
  MinWebViewVersion_Chrome: string;
  MinWebViewVersion_Safari: string;
}

/** AppManager_ConfigClient (UBT_AppManager_CS): the fields that the app start reads. The keys and the tokens are not
    kept. */
export interface ClientConfig {
  EspaceName: string;
  /** True: a signed-in start calls AppManager_AfterInitialize. */
  CheckDeviceOnReady: boolean;
  AppManager_ClientCache: ClientCache;
}

/** The outputs of AppManager_SynchAppContext that the app start reads. FirebaseRealTimeDB_Token and PermissionList are
    not kept. */
export interface AppContext {
  /** False: the app start raises InvalidApp ("Error defining login information"). */
  isSuccess: boolean;
  AppManager_ClientConfig: ClientConfig;
}

/** The inputs of AppManager_AfterInitialize, as the contract describes them: the module name, the device context and
    the Streamline TOTP. */
export type AfterInitializeCallInputs = ActionInputs<PathOf<'UBT_AppManager', 'ActionAppManager_AfterInitialize'>>;

/** A legacy bookmark of the user (Connect2_LegacyShared LocalBookmark), as the local copy keeps it. */
export type SyncLegacyLocalBookmark = SyncLocalEntitiesWire['LocalBookmark']['List'][number];
/** A bookmark of the user (UBTConnect_Bookmarks_MCS LocalBookmark), as the local copy keeps it. */
export type SyncLocalBookmark = SyncLocalEntitiesWire['LocalBookmarksC2']['List'][number];
/** A note of the user (UBTConnect_Notes_MCS LocalNote), as the local copy keeps it. */
export type SyncLocalNote = SyncLocalEntitiesWire['LocalNotes']['List'][number];

/** LocalEntities_App of Sync_Info_GetMain (UBTConnect Sync_LocalEntities), with the lists unwrapped: the local copies
    that Connect_SetLoggedContext replaces. The records stay as they are: the local copies store them. */
export interface SyncLocalEntityLists {
  /** LocalBookmark. */
  bookmarks: SyncLegacyLocalBookmark[];
  /** LocalBookmarksC2. */
  bookmarks_C2: SyncLocalBookmark[];
  /** LocalNotes. */
  notes: SyncLocalNote[];
}

/** The Orbit static entities (Connect2_OrbitMobile_MUI StaticEntities_Orbit), as SyncAllOrbitStaticEntities stores
    them. */
export type OrbitStaticEntities = SyncInfoMainWire['OrbitStaticEntities'];

/** The outputs of Sync_Info_GetMain that Sync_Info_Main reads. FeedBaseURL and MyEntertainingBaseURL are not read. */
export interface SyncInfoMain {
  /** B2CTenant: the client variable Embedd_B2CTenant. */
  b2cTenant: string;
  /** Sync_SiteProperties.UpdatesFeed_MonthsToShow: the client variable Directory_Updates_MonthsToShow. */
  updatesFeedMonthsToShow: number;
  orbitStaticEntities: OrbitStaticEntities;
  localEntities: SyncLocalEntityLists;
}

/** The map objects of FetchData_CacheableMapEntities, as the server sends them (the lists stay wrapped): the app start
    keeps each one in the memory cache as it is (CacheableMapObjects). */
export interface CacheableMapEntities {
  GlobalLocations_Markers: MapEntitiesWire['GlobalLocations_Markers'];
  Countries_Markers: MapEntitiesWire['Countries_Markers'];
  Countries_GeoJSON: MapEntitiesWire['Countries_GeoJSON'];
  Localities_Markers: MapEntitiesWire['Localities_Markers'];
  Localities_GeoJSON: MapEntitiesWire['Localities_GeoJSON'];
}

/** The households of FetchData_CacheableHouseholds, one list per part of each Household_Markers record, as the
    original splits them (Get_Cacheable_MapHouseholds). The app start keeps each list in the memory cache as it is. */
export interface CacheableHouseholds {
  /** MarkerWithWindow of each record (Leaflet MarkerWithWindow). */
  markers: HouseholdMarkerWire['MarkerWithWindow'][];
  /** MapExploreItem of each record (Connect_Map_CS MapExploreItem). */
  exploreItems: HouseholdMarkerWire['MapExploreItem'][];
}

/** A policy document (UBTConnect_Utils PolicyInformation). The web reads Policy_Url; the native branch of OpenPolicy
    (OpenApplicationPolicy, out of scope) reads the file name and the content type. */
export interface PolicyInformation {
  Policy_Url: string;
  Policy_FileName: string;
  Policy_ContentType: string;
}

/** The policy documents (UBTConnect_Utils CacheControl_Policies). The record keeps its OutSystems names: the block
    CacheControl_Policies puts it in the memory cache and raises it in its Result event, and the readers take it as it
    is. */
export interface Policies {
  PolicyInformation_PrivacyPolicy: PolicyInformation;
  PolicyInformation_TermsAndConditions: PolicyInformation;
}

/** The inputs of DataActionGetCacheInfo of CacheControl_Policies. A type alias: the contract inputs have an index
    signature. */
export type PoliciesCallInputs = {
  CacheKey: string;
  CacheTypeId: string;
  TimeToLiveSeconds: number;
};
