import { describe, expect, it } from 'vitest';
import { orbitStaticEntities } from '@/platform/bootstrap/mocks';
import {
  toAppContext,
  toCacheableHouseholds,
  toCacheableMapEntities,
  toPolicies,
  toSyncInfoMain,
  type CacheableHouseholdsWire,
  type CacheableMapEntitiesWire,
  type SynchAppContextWire,
  type SyncInfoMainWire,
} from './mapper';

type HouseholdRecordWire = CacheableHouseholdsWire['Household_Markers']['List'][number];

/** AppManager_SynchAppContext as the server sends it: every field, with fictional keys and tokens. */
const synchAppContextWire = (isSuccess = true): SynchAppContextWire => ({
  isSuccess,
  FirebaseRealTimeDB_Token: 'mock-firebase-token',
  PermissionList: { List: { List: ['Directory'] } },
  AppManager_ClientConfig: {
    EspaceName: 'UBTConnect',
    CheckDeviceOnReady: true,
    CurrentUTCTime: '2026-10-23T08:00:00',
    DeviceAwareness_Use: false,
    Firebase_CloudMessage_Use: true,
    Firebase_RealTimeDatabase_APIKey: 'mock-firebase-api-key',
    Firebase_RealTimeDatabase_URL: 'https://mock-rtdb.invalid',
    AzureInsights_ConnectionString: 'mock-insights-connection-string',
    Streamline_Use: true,
    AppManager_ClientCache: {
      AndroidAppId: 'com.example.ubtconnect.mock',
      AzureB2C_ClientId: '00000000-0000-0000-0000-000000000000',
      AzureB2C_Policy_Login: 'B2C_1A_MOCK_SIGNIN',
      AzureB2C_Policy_ResetPass: 'B2C_1A_MOCK_RESETPASSWORD',
      AzureInsights_Use: true,
      BaseURL: 'https://mock-app.invalid/',
      CustomCallback: '',
      EnableFrameworkExtension: true,
      Environment: 'TST',
      Firebase_ProjectId: 'mock-firebase-project',
      Firebase_RealTimeDatabase_Use: true,
      FrontEgg_AppId: '',
      FrontEgg_CodeChallenge: '',
      FrontEgg_CodeVerifier: '',
      IdpProviderId: 1,
      MinNativeAppVersion: '4.2.0',
      MinWebViewVersion_Chrome: '110',
      MinWebViewVersion_Safari: '16',
      PIN_EnableFingerprint: true,
      PIN_EnforceOnReady: false,
      PIN_SessionInactivity_Navigate: false,
      PIN_SessionInactivity_Seconds: 1200,
      PIN_SessionInactivity_Use: true,
      PIN_Use: true,
      PackageName: 'com.example.ubtconnect.mock',
      PluginUse_PrivacyScreen: false,
      Streamline_TOTP_LoginCheck: true,
    },
  },
});

/** A household marker record. The mapper does not read into MarkerWithWindow, so the test only needs a distinct
    object there. */
const householdRecord = (id: string, name: string): HouseholdRecordWire => ({
  MarkerWithWindow: { Marker: { Id: id } } as unknown as HouseholdRecordWire['MarkerWithWindow'],
  MapExploreItem: {
    Id: id,
    Name: name,
    Address: '14 Harbour Road, Nelson',
    Latitude: '-41.2706',
    Longitude: '173.2840',
    PhotoURL: '',
    PhotoURL2: '',
    Type: 'Household',
  },
});

describe('app mapper', () => {
  it('toAppContext keeps the success flag, the module name, CheckDeviceOnReady and the settings of the client cache', () => {
    const context = toAppContext(synchAppContextWire());
    expect(context).toEqual({
      isSuccess: true,
      AppManager_ClientConfig: {
        EspaceName: 'UBTConnect',
        CheckDeviceOnReady: true,
        AppManager_ClientCache: {
          PackageName: 'com.example.ubtconnect.mock',
          Environment: 'TST',
          AzureInsights_Use: true,
          PIN_Use: true,
          PIN_SessionInactivity_Use: true,
          PIN_SessionInactivity_Seconds: 1200,
          PIN_SessionInactivity_Navigate: false,
          PIN_EnforceOnReady: false,
          PIN_EnableFingerprint: true,
          MinNativeAppVersion: '4.2.0',
          MinWebViewVersion_Chrome: '110',
          MinWebViewVersion_Safari: '16',
        },
      },
    });
    expect(JSON.stringify(context)).not.toMatch(/mock-firebase|mock-insights|B2C_1A|mock-app\.invalid/);
    expect(toAppContext(synchAppContextWire(false)).isSuccess).toBe(false);
  });

  it('toSyncInfoMain keeps the tenant, the months, the Orbit static entities and the three lists, each record as it is', () => {
    const legacyBookmark = {
      Id: '7101',
      UserId: 3315,
      BookmarkId: '7101',
      ObjectType: 'Household',
      ObjectId: '42438',
      Group: 'Households',
      DateCreatedUtc: '2026-09-14T09:12:00',
      Note: '',
    };
    const bookmark = {
      Id: '88',
      UserId: 3315,
      BookmarkId: '88',
      BookmarkCategoryId: 'Locality',
      ItemId: '252',
      CreatedAtDateUtc: '2026-08-02T17:40:00',
    };
    const note = {
      Id: '512',
      UserId: 3315,
      NoteId: '512',
      NoteCategoryId: 'Household',
      ItemId: '42438',
      DateCreatedUtc: '2026-07-21T10:05:00',
      DateEditedUtc: '2026-07-22T08:30:00',
      NotesTotalCount: '0',
    };
    const orbit = orbitStaticEntities();
    const wire: SyncInfoMainWire = {
      B2CTenant: 'mock-tenant',
      FeedBaseURL: 'https://mock-feed.invalid/',
      MyEntertainingBaseURL: 'https://mock-entertaining.invalid/',
      LocalEntities_App: {
        LocalBookmark: { List: [legacyBookmark] },
        LocalBookmarksC2: { List: [bookmark] },
        LocalNotes: { List: [note] },
      },
      OrbitStaticEntities: orbit,
      Sync_SiteProperties: { UpdatesFeed_MonthsToShow: 6 },
    };
    const main = toSyncInfoMain(wire);
    expect(main).toEqual({
      b2cTenant: 'mock-tenant',
      updatesFeedMonthsToShow: 6,
      orbitStaticEntities: orbit,
      localEntities: { bookmarks: [legacyBookmark], bookmarks_C2: [bookmark], notes: [note] },
    });
    expect(main.orbitStaticEntities).toBe(orbit);
    expect(JSON.stringify(main)).not.toContain('invalid');
  });

  it('toCacheableMapEntities keeps each of the five map objects as the server sends it', () => {
    const wire: CacheableMapEntitiesWire = {
      Countries_GeoJSON: { List: [] },
      Countries_Markers: { List: [] },
      GlobalLocations_Markers: { List: [householdRecord('1', 'Global')] },
      Localities_GeoJSON: { List: [] },
      Localities_Markers: { List: [] },
    };
    const entities = toCacheableMapEntities(wire);
    expect(Object.keys(entities).sort()).toEqual(Object.keys(wire).sort());
    expect(entities.GlobalLocations_Markers).toBe(wire.GlobalLocations_Markers);
    expect(entities.Countries_Markers).toBe(wire.Countries_Markers);
    expect(entities.Countries_GeoJSON).toBe(wire.Countries_GeoJSON);
    expect(entities.Localities_Markers).toBe(wire.Localities_Markers);
    expect(entities.Localities_GeoJSON).toBe(wire.Localities_GeoJSON);
  });

  it('toCacheableHouseholds splits each record into its marker and its explore item, in the order of the records', () => {
    const first = householdRecord('42438', 'Harbour Road household');
    const second = householdRecord('42511', 'Kauri Street household');
    const households = toCacheableHouseholds({ Household_Markers: { List: [first, second] } });
    expect(households.markers).toHaveLength(2);
    expect(households.markers[0]).toBe(first.MarkerWithWindow);
    expect(households.markers[1]).toBe(second.MarkerWithWindow);
    expect(households.exploreItems).toEqual([first.MapExploreItem, second.MapExploreItem]);
  });

  it('toPolicies keeps the URL, the file name and the content type of both policy documents', () => {
    const terms = {
      Policy_Url: 'https://policies.example.com/terms',
      Policy_FileName: 'Terms of Use.pdf',
      Policy_ContentType: 'application/pdf',
    };
    const privacy = {
      Policy_Url: 'https://policies.example.com/privacy',
      Policy_FileName: 'Privacy Policy.pdf',
      Policy_ContentType: 'application/pdf',
    };
    expect(
      toPolicies({
        CacheControl_Response: {
          PolicyInformation_TermsAndConditions: terms,
          PolicyInformation_PrivacyPolicy: privacy,
        },
      }),
    ).toEqual({ PolicyInformation_TermsAndConditions: terms, PolicyInformation_PrivacyPolicy: privacy });
  });

  it('empty wire lists give empty lists', () => {
    expect(toCacheableHouseholds({ Household_Markers: { List: [] } })).toEqual({ markers: [], exploreItems: [] });
    expect(
      toSyncInfoMain({
        B2CTenant: '',
        FeedBaseURL: '',
        MyEntertainingBaseURL: '',
        LocalEntities_App: { LocalBookmark: { List: [] }, LocalBookmarksC2: { List: [] }, LocalNotes: { List: [] } },
        OrbitStaticEntities: orbitStaticEntities(),
        Sync_SiteProperties: { UpdatesFeed_MonthsToShow: 0 },
      }).localEntities,
    ).toEqual({ bookmarks: [], bookmarks_C2: [], notes: [] });
  });
});
