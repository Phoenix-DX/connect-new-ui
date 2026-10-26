import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { osList } from '@/lib/os-wire';
import type {
  AppContext,
  CacheableHouseholds,
  CacheableMapEntities,
  Policies,
  PolicyInformation,
  SyncInfoMain,
} from './types';

/* The outputs of each call, as the contract describes them. */
/** The server action AppManager_SynchAppContext of UBT_AppManager. */
export type SynchAppContextWire = ActionOutputs<PathOf<'UBT_AppManager', 'ActionAppManager_SynchAppContext'>>;
/** The server action Sync_Info_GetMain of UBTConnect. */
export type SyncInfoMainWire = ActionOutputs<PathOf<'UBTConnect', 'ActionSync_Info_GetMain'>>;
/** The service action FetchData_CacheableMapEntities of UBTConnect. */
export type CacheableMapEntitiesWire = ActionOutputs<PathOf<'UBTConnect', 'ServiceAPIFetchData_CacheableMapEntities'>>;
/** The service action FetchData_CacheableHouseholds of UBTConnect. */
export type CacheableHouseholdsWire = ActionOutputs<PathOf<'UBTConnect', 'ServiceAPIFetchData_CacheableHouseholds'>>;
/** DataActionGetCacheInfo of CacheControl_Policies. */
export type PoliciesWire = ActionOutputs<PathOf<'UBTConnect_Utils', 'CacheControl_Policies/DataActionGetCacheInfo'>>;

type ClientConfigWire = SynchAppContextWire['AppManager_ClientConfig'];
type PolicyInformationWire = PoliciesWire['CacheControl_Response']['PolicyInformation_PrivacyPolicy'];

/** The success flag and the client config: the module name, CheckDeviceOnReady and the settings of the client cache. */
export const toAppContext = (wire: SynchAppContextWire): AppContext => {
  const config: ClientConfigWire = wire.AppManager_ClientConfig;
  const c = config.AppManager_ClientCache;
  return {
    isSuccess: wire.isSuccess,
    AppManager_ClientConfig: {
      EspaceName: config.EspaceName,
      CheckDeviceOnReady: config.CheckDeviceOnReady,
      AppManager_ClientCache: {
        PackageName: c.PackageName,
        Environment: c.Environment,
        AzureInsights_Use: c.AzureInsights_Use,
        PIN_Use: c.PIN_Use,
        PIN_SessionInactivity_Use: c.PIN_SessionInactivity_Use,
        PIN_SessionInactivity_Seconds: c.PIN_SessionInactivity_Seconds,
        PIN_SessionInactivity_Navigate: c.PIN_SessionInactivity_Navigate,
        PIN_EnforceOnReady: c.PIN_EnforceOnReady,
        PIN_EnableFingerprint: c.PIN_EnableFingerprint,
        MinNativeAppVersion: c.MinNativeAppVersion,
        MinWebViewVersion_Chrome: c.MinWebViewVersion_Chrome,
        MinWebViewVersion_Safari: c.MinWebViewVersion_Safari,
      },
    },
  };
};

/** The tenant, the months of the updates feed, the Orbit static entities as they are, and the three local-entity
    lists unwrapped (each record as it is). */
export const toSyncInfoMain = (wire: SyncInfoMainWire): SyncInfoMain => ({
  b2cTenant: wire.B2CTenant,
  updatesFeedMonthsToShow: wire.Sync_SiteProperties.UpdatesFeed_MonthsToShow,
  orbitStaticEntities: wire.OrbitStaticEntities,
  localEntities: {
    bookmarks: osList(wire.LocalEntities_App.LocalBookmark),
    bookmarks_C2: osList(wire.LocalEntities_App.LocalBookmarksC2),
    notes: osList(wire.LocalEntities_App.LocalNotes),
  },
});

/** The five map objects, each one as the server sends it. */
export const toCacheableMapEntities = (wire: CacheableMapEntitiesWire): CacheableMapEntities => ({
  GlobalLocations_Markers: wire.GlobalLocations_Markers,
  Countries_Markers: wire.Countries_Markers,
  Countries_GeoJSON: wire.Countries_GeoJSON,
  Localities_Markers: wire.Localities_Markers,
  Localities_GeoJSON: wire.Localities_GeoJSON,
});

/** One list of markers and one list of explore items, in the order of the Household_Markers records. */
export const toCacheableHouseholds = (wire: CacheableHouseholdsWire): CacheableHouseholds => {
  const records = wire.Household_Markers.List;
  return {
    markers: records.map((r) => r.MarkerWithWindow),
    exploreItems: records.map((r) => r.MapExploreItem),
  };
};

const toPolicyInformation = (w: PolicyInformationWire): PolicyInformation => ({
  Policy_Url: w.Policy_Url,
  Policy_FileName: w.Policy_FileName,
  Policy_ContentType: w.Policy_ContentType,
});

/** The two policy documents of CacheControl_Response. */
export const toPolicies = (wire: PoliciesWire): Policies => ({
  PolicyInformation_PrivacyPolicy: toPolicyInformation(wire.CacheControl_Response.PolicyInformation_PrivacyPolicy),
  PolicyInformation_TermsAndConditions: toPolicyInformation(
    wire.CacheControl_Response.PolicyInformation_TermsAndConditions,
  ),
});
