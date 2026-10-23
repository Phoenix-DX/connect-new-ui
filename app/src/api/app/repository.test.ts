import { beforeEach, describe, expect, it, vi } from 'vitest';
import { deviceContext } from '@/platform/device/deviceContext';
import { freshPage, recordBodies } from '@/test/testSupport';
import {
  afterInitialize,
  fetchAppContext,
  fetchCacheableHouseholds,
  fetchCacheableMapEntities,
  fetchPolicies,
  fetchSyncInfoMain,
} from './repository';
import type { PoliciesCallInputs } from './types';

/* The MSW mocks of the test setup answer the app-start calls (platform/bootstrap/mocks.ts): the TST settings of
   SynchAppContext with fictional keys, the recorded AfterInitialize and policy documents, the fictional local
   entities and Orbit static entities of Sync_Info_GetMain, and empty map lists. */

beforeEach(() => {
  freshPage();
  vi.spyOn(console, 'warn').mockImplementation(() => undefined); // recordedHandler: anonymised inputs never match
});

describe('app repository', () => {
  it('fetchAppContext calls AppManager_SynchAppContext with the module name and keeps the settings, not the keys', async () => {
    const bodies = recordBodies('UBT_AppManager/ActionAppManager_SynchAppContext');
    const context = await fetchAppContext('UBTConnect');
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBT_AppManager',
        action: 'ActionAppManager_SynchAppContext',
        inputNames: ['EspaceName'],
      }),
    ]);
    expect(bodies).toEqual([{ EspaceName: 'UBTConnect' }]);
    expect(context.isSuccess).toBe(true);
    expect(context.AppManager_ClientConfig).toEqual(
      expect.objectContaining({ EspaceName: 'UBTConnect', CheckDeviceOnReady: true }),
    );
    expect(context.AppManager_ClientConfig.AppManager_ClientCache).toEqual(
      expect.objectContaining({ PIN_Use: true, PIN_SessionInactivity_Seconds: 1200, Environment: 'TST' }),
    );
    expect(JSON.stringify(context)).not.toMatch(/mock-firebase|mock-insights|B2C_1A/);
  });

  it('afterInitialize calls AppManager_AfterInitialize with the inputs as they are and answers nothing', async () => {
    const inputs = {
      EspaceName: 'UBTConnect',
      AppManager_MobileContext: deviceContext('com.example.ubtconnect.mock'),
      TOTP: '',
    };
    await expect(afterInitialize(inputs)).resolves.toBeUndefined();
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBT_AppManager',
        action: 'ActionAppManager_AfterInitialize',
        inputNames: ['AppManager_MobileContext', 'EspaceName', 'TOTP'],
      }),
    ]);
  });

  it('fetchSyncInfoMain calls Sync_Info_GetMain with isFromLogin and answers the tenant and the local entities', async () => {
    const bodies = recordBodies('UBTConnect/ActionSync_Info_GetMain');
    const main = await fetchSyncInfoMain(true);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({ module: 'UBTConnect', action: 'ActionSync_Info_GetMain', inputNames: ['isFromLogin'] }),
    ]);
    expect(bodies).toEqual([{ isFromLogin: true }]);
    expect(main.b2cTenant).toBe('mock-tenant');
    expect(main.updatesFeedMonthsToShow).toBe(0);
    expect(main.localEntities.bookmarks.length).toBeGreaterThan(0);
    expect(main.localEntities.bookmarks[0]).toEqual(
      expect.objectContaining({ BookmarkId: expect.any(String) as unknown, ObjectType: expect.any(String) as unknown }),
    );
    expect(main.localEntities.bookmarks_C2).toEqual([]);
    expect(main.localEntities.notes.length).toBeGreaterThan(0);
    expect(main.orbitStaticEntities.SurveyStatus.List.map((s) => s.JSON_Name)).toContain('confirmed');
  });

  it('fetchCacheableMapEntities calls FetchData_CacheableMapEntities with no input and answers the five map objects', async () => {
    const entities = await fetchCacheableMapEntities();
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        action: 'ServiceAPIFetchData_CacheableMapEntities',
        inputNames: [],
      }),
    ]);
    expect(entities).toEqual({
      GlobalLocations_Markers: { List: [] },
      Countries_Markers: { List: [] },
      Countries_GeoJSON: { List: [] },
      Localities_Markers: { List: [] },
      Localities_GeoJSON: { List: [] },
    });
  });

  it('fetchCacheableHouseholds calls FetchData_CacheableHouseholds with no input and answers the two lists', async () => {
    const households = await fetchCacheableHouseholds();
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        action: 'ServiceAPIFetchData_CacheableHouseholds',
        inputNames: [],
      }),
    ]);
    expect(households).toEqual({ markers: [], exploreItems: [] });
  });

  it('fetchPolicies calls DataActionGetCacheInfo of CacheControl_Policies with the inputs as they are', async () => {
    const inputs: PoliciesCallInputs = { CacheKey: 'Unique', CacheTypeId: 'Policies', TimeToLiveSeconds: 7200 };
    const policies = await fetchPolicies(inputs);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect_Utils',
        owner: 'CacheControl_Policies',
        action: 'DataActionGetCacheInfo',
        inputNames: Object.keys(inputs).sort(),
      }),
    ]);
    expect(policies.PolicyInformation_TermsAndConditions.Policy_Url).toMatch(/^https:/);
    expect(policies.PolicyInformation_PrivacyPolicy).toEqual(
      expect.objectContaining({ Policy_ContentType: 'application/pdf' }),
    );
  });

  it('a failed call raises the exception of callAction', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await expect(fetchSyncInfoMain(false)).rejects.toThrow('Request failed with status 500');
    await expect(fetchAppContext('UBTConnect')).rejects.toThrow('Request failed with status 500');
  });
});
