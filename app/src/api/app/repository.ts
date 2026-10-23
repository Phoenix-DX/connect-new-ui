import { callAction } from '@/api/client/callAction';
import { toAppContext, toCacheableHouseholds, toCacheableMapEntities, toPolicies, toSyncInfoMain } from './mapper';
import type {
  AfterInitializeCallInputs,
  AppContext,
  CacheableHouseholds,
  CacheableMapEntities,
  Policies,
  PoliciesCallInputs,
  SyncInfoMain,
} from './types';

/* The app-start calls, called with their OutSystems names: the server actions of OnApplicationReady (UBT_AppManager
   and UBTConnect) and the data action of the block CacheControl_Policies. Each function makes one call and raises the
   exceptions of callAction. The callers decide when to call and how to handle an error: the app start and the logged
   context (platform/bootstrap), the sign-out (platform/session/auth.ts) and the block CacheControl_Policies (memory
   cache). */

/** AppManager_SynchAppContext of UBT_AppManager: the client config of the module `espaceName`. The app start calls it
    first, and the sign-out calls it again. */
export async function fetchAppContext(espaceName: string): Promise<AppContext> {
  return toAppContext(
    await callAction('UBT_AppManager', 'ActionAppManager_SynchAppContext', { EspaceName: espaceName }),
  );
}

/** AppManager_AfterInitialize of UBT_AppManager: the device check of a signed-in app start (CheckDeviceOnReady). The
    caller does not read its output isNotRegistered. */
export async function afterInitialize(inputs: AfterInitializeCallInputs): Promise<void> {
  await callAction('UBT_AppManager', 'ActionAppManager_AfterInitialize', inputs);
}

/** Sync_Info_GetMain of UBTConnect: the tenant, the site properties, the Orbit static entities and the local entities
    of the user. The app start sends isFromLogin false; the post-login sequence sends true. */
export async function fetchSyncInfoMain(isFromLogin: boolean): Promise<SyncInfoMain> {
  return toSyncInfoMain(await callAction('UBTConnect', 'ActionSync_Info_GetMain', { isFromLogin }));
}

/** FetchData_CacheableMapEntities of UBTConnect: the map objects of the countries, the localities and the global
    locations. The call sends no input. */
export async function fetchCacheableMapEntities(): Promise<CacheableMapEntities> {
  return toCacheableMapEntities(await callAction('UBTConnect', 'ServiceAPIFetchData_CacheableMapEntities', {}));
}

/** FetchData_CacheableHouseholds of UBTConnect: the household markers and explore items of the map. The call sends no
    input. */
export async function fetchCacheableHouseholds(): Promise<CacheableHouseholds> {
  return toCacheableHouseholds(await callAction('UBTConnect', 'ServiceAPIFetchData_CacheableHouseholds', {}));
}

/** DataActionGetCacheInfo of CacheControl_Policies: the policy documents. The block calls it when its memory cache
    has no entry. */
export async function fetchPolicies(inputs: PoliciesCallInputs): Promise<Policies> {
  return toPolicies(await callAction('UBTConnect_Utils', 'CacheControl_Policies/DataActionGetCacheInfo', inputs));
}
