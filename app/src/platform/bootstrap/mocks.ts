import type { components } from '@/api/schema';
import { contractHandler } from '@/mocks/contract';
import { fixtureData, recordedHandler } from '@/mocks/fixtures';
import {
  ORBIT_BED_SIZES,
  ORBIT_EVENT_TYPES,
  ORBIT_GENDER_PREFERENCES,
  ORBIT_HELPER_ROLES,
  ORBIT_HELPER_STATUSES,
  ORBIT_HOST_SURVEY_STEPS,
  ORBIT_HOUSE_FLOORS,
  ORBIT_MEAL_TYPES,
  ORBIT_MILESTONE_TYPES,
  ORBIT_SURVEY_STATUSES,
  ORBIT_VEHICLE_OWNERS,
  ORBIT_VEHICLE_TYPES,
} from '@/mocks/fictional/orbit';
import { allLegacyBookmarks } from '@/mocks/modules/Connect2_MyBookmarks_MUI/mocks';
import { notesCollection } from '@/containers/NoteListActions/mocks';
import { collection } from '@/mocks/store';
import { currentUserId } from '@/platform/session/session';
import { mockUserInformation } from '@/platform/session/mockUser';

/* Mock answers of the app-start and shell-block calls (app-shell.spec.md section 10). Recorded where a fixture exists
   (migration/mock-scope.json), fictional otherwise: no real id, key, token or URL (.example.com / .invalid hosts). */
type Schemas = components['schemas'];
type UserInfoCacheOutput = Schemas['UBTConnect_Utils__CacheControl_UserInfo__DataActionGetCacheInfo__Output'];

const nowWire = () => new Date().toISOString().slice(0, 19);

/** TST settings of shell-observed U2; every id, key and URL fictional. */
const synchAppContext = contractHandler('UBT_AppManager', 'ActionAppManager_SynchAppContext', ({ EspaceName }) => ({
  isSuccess: true,
  FirebaseRealTimeDB_Token: 'mock-firebase-token',
  PermissionList: { List: { List: [] } },
  AppManager_ClientConfig: {
    EspaceName,
    CurrentUTCTime: nowWire(),
    CheckDeviceOnReady: true,
    DeviceAwareness_Use: false,
    Firebase_CloudMessage_Use: true,
    Firebase_RealTimeDatabase_URL: 'https://mock-rtdb.invalid',
    Firebase_RealTimeDatabase_APIKey: 'mock-firebase-api-key',
    AzureInsights_ConnectionString: 'mock-insights-connection-string',
    Streamline_Use: true,
    AppManager_ClientCache: {
      BaseURL: 'https://mock-app.invalid/',
      Environment: 'TST', // TST value (knowledge/shell-observed.md U2); shown by the Version block
      IdpProviderId: 1,
      AzureB2C_Policy_Login: 'B2C_1A_MOCK_SIGNIN',
      AzureB2C_Policy_ResetPass: 'B2C_1A_MOCK_RESETPASSWORD',
      AzureB2C_ClientId: '00000000-0000-0000-0000-000000000000',
      FrontEgg_AppId: '',
      FrontEgg_CodeVerifier: '',
      FrontEgg_CodeChallenge: '',
      Firebase_ProjectId: 'mock-firebase-project',
      Firebase_RealTimeDatabase_Use: true,
      AzureInsights_Use: true,
      PIN_Use: true,
      PIN_SessionInactivity_Use: true,
      PIN_SessionInactivity_Seconds: 1200,
      PIN_SessionInactivity_Navigate: false,
      PIN_EnableFingerprint: true,
      PIN_EnforceOnReady: false,
      CustomCallback: '',
      MinWebViewVersion_Chrome: '',
      MinWebViewVersion_Safari: '',
      MinNativeAppVersion: '',
      PackageName: 'com.example.ubtconnect.mock',
      AndroidAppId: 'com.example.ubtconnect.mock',
      EnableFrameworkExtension: true,
      PluginUse_PrivacyScreen: false,
      Streamline_TOTP_LoginCheck: true,
    },
  },
}));

/** OrbitStaticEntities (fictional, src/mocks/fictional/orbit.ts): the static lists of the fictional Orbit world, which
    the app start writes to the Orbit local entities (SyncAllOrbitStaticEntities, CR-EventDetail-1, CR-HostSurvey-1):
    event types, milestone types, survey statuses and the host-survey lists (steps, bed sizes, gender preferences,
    floors, vehicle owners and types, helper statuses and roles, meal types). Only the "Confirmed" label of status 2
    (EventDetail dom/default.html:104-111) and the host-survey labels listed in orbit.ts are captured; the other labels,
    every JSON_Name and Order are fictional. TravelInfoHeaderIcon and the transport fields: not captured, empty. Also
    seeded into the device database by the `unlocked` test session (testSession.ts), as earlier app starts left them. */
const active = <R extends object>(list: readonly R[]) => list.map((r) => ({ ...r, Is_Active: true }));

export const orbitStaticEntities = (): Schemas['Connect2_OrbitMobile_MUI__StaticEntities_Orbit'] => ({
  HelperRoles: { List: active(ORBIT_HELPER_ROLES) },
  HelperStatus: { List: active(ORBIT_HELPER_STATUSES) },
  HostSurveyStep: { List: ORBIT_HOST_SURVEY_STEPS.map((s) => ({ ...s })) },
  MealType: { List: active(ORBIT_MEAL_TYPES) },
  OrbitBedSize: { List: ORBIT_BED_SIZES.map((b) => ({ ...b })) },
  OrbitEventTypes: { List: Object.values(ORBIT_EVENT_TYPES).map((t) => ({ ...t })) },
  OrbitGenderPreference: { List: active(ORBIT_GENDER_PREFERENCES) },
  OrbitHouseFloor: { List: active(ORBIT_HOUSE_FLOORS) },
  OrbitMilestoneTypes: {
    List: Object.values(ORBIT_MILESTONE_TYPES).map((t) => ({
      ...t,
      IconTransportArrival: '',
      IconTransportDeparture: '',
      TransportHeaderClass: '',
      TravelInfoHeader: '',
      TravelInfoHeaderIcon: '',
    })),
  },
  OrbitVehicleOwner: { List: ORBIT_VEHICLE_OWNERS.map((o) => ({ ...o })) },
  OrbitVehicleType: { List: active(ORBIT_VEHICLE_TYPES) },
  SurveyStatus: {
    List: ORBIT_SURVEY_STATUSES.map((s, i) => ({
      Id: Number(s.Id),
      Is_Active: true,
      JSON_Name: s.JSON_Name,
      Label: s.Label,
      Order: i + 1,
    })),
  },
});

/** LocalEntities_App.LocalNotes (fictional): one row per note of the CW_Notes mock collection (`notesCollection`), so
    the note ids, categories and items SyncNotes stores at sign-in (UBTConnect.controller.js:1145) are the ones the notes
    blocks show and change. The server's own LocalNote ids are unknown: Id = NoteId. NotesTotalCount (live TST record,
    contract regeneration of I10-6) keeps its default 0: no React code reads it. */
const mockLocalNotes = (): LocalNoteWire[] =>
  notesCollection()
    .all()
    .map((note) => ({
      NotesTotalCount: '0',
      Id: String(note.Id),
      UserId: Number(currentUserId() ?? 0),
      NoteId: String(note.Id),
      NoteCategoryId: String(note.NoteCategoryId),
      ItemId: String(note.ItemId),
      DateCreatedUtc: String(note.DateCreatedUtc),
      DateEditedUtc: String(note.DateEditedUtc),
    }));
type LocalNoteWire = components['schemas']['UBTConnect_Notes_MCS__LocalNote'];

/** The legacy LocalBookmark rows of the mock user (Connect2_LegacyShared, read while C2NewBookmarks is off as on TST):
    the device copy of the server's legacy bookmarks, i.e. of the shared collection that the Connect2_Assemble_MUI and
    Directory_EntityDetailsActions bookmark mocks write (src/mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts,
    CR-MyBookmarks-2), so a delete there shows after the next sync. Id = BookmarkId = the server row's Id (fictional). It holds the households bookmarked in the TST
    captures:
    - 42438, the household of the HouseholdDetails / HouseholdCarousel parity routes (`?HouseholdId=42438`,
      analysis/states.json): "Unmark", `ubt-image-card__bookmarked` (CR-HouseholdDetails-2 §2); it is also the first
      card of the Locality_Details list (screens/Locality_Details/mocks.ts), the captured only bookmarked one
      (Locality_Details dom/default.html:302; CR-Locality_Details-1; decision A, 2026-10-16).
    No other household or location of a finished route's mock is in it (the captured SupperMeeting_Details 1210 and
    Locality 252 show "Bookmark"). Also seeded into the local copy by the `unlocked` test session (testSession.ts), as
    the capture tab kept them. */
export const mockLocalBookmarks = (): LegacyLocalBookmarkWire[] =>
  allLegacyBookmarks().map((b) => ({
    Id: b.Id,
    UserId: Number(currentUserId() ?? 0),
    BookmarkId: b.Id,
    ObjectType: b.ObjectType,
    ObjectId: b.ObjectId,
    Group: b.Group,
    DateCreatedUtc: b.DateCreatedUtc,
    Note: b.Note,
  }));
type LegacyLocalBookmarkWire = components['schemas']['Connect2_LegacyShared__LocalBookmark'];

/** The C2 LocalBookmark rows of the mock user (UBTConnect_Bookmarks_MCS, the only store that
    Directory_EntityDetailsActions and, with C2NewBookmarks on as on TST, Locality_Households_HouseholdList read): the
    device copy of the C2 bookmarks collection that AddBookmark2 / DeleteBookmarkByBookmarkId2 write
    (containers/EntityDetailsActions/mocks.ts). Empty at start, except school 1430 in scenario `captured`; household 42438
    is not in it (the TST captures of 2026-10-29 show it not bookmarked; drift wave H-Q2 (a), user 2026-10-29).
    BookmarkId = the server row's Id. The collection is read by its name (the store keeps one per name), so this platform
    module does not import the container. */
export const mockLocalBookmarksC2 = (): LocalBookmarkC2Wire[] =>
  collection('Connect_Bookmarks_CS.bookmarks', () => [], 'Id')
    .all()
    .map((b) => ({
      Id: String(b.Id),
      UserId: Number(currentUserId() ?? 0),
      BookmarkId: String(b.Id),
      BookmarkCategoryId: String(b.BookmarkCategoryId),
      ItemId: String(b.ItemId),
      CreatedAtDateUtc: String(b.DateCreatedUtc),
    }));
type LocalBookmarkC2Wire = components['schemas']['UBTConnect_Bookmarks_MCS__LocalBookmark'];

/** Fictional: the mock user's legacy bookmarks are mockLocalBookmarks and the C2 bookmarks mockLocalBookmarksC2 (above); the notes are those of
    the notes mock collection (above); the Orbit static entities are those of orbitStaticEntities (above).
    UpdatesFeed_MonthsToShow: TST value not captured (type default). */
const syncInfoGetMain = contractHandler('UBTConnect', 'ActionSync_Info_GetMain', () => ({
  B2CTenant: 'mock-tenant',
  FeedBaseURL: 'https://mock-feed.invalid/',
  MyEntertainingBaseURL: 'https://mock-entertaining.invalid/',
  LocalEntities_App: {
    LocalBookmark: { List: mockLocalBookmarks() },
    LocalBookmarksC2: { List: mockLocalBookmarksC2() },
    LocalNotes: { List: mockLocalNotes() },
  },
  OrbitStaticEntities: orbitStaticEntities(),
  Sync_SiteProperties: { UpdatesFeed_MonthsToShow: 0 },
}));

const getUserInformation = contractHandler('UBTConnect_Utils', 'ActionGetUserInformation', () => ({
  UserInformation: mockUserInformation(),
}));

/** Recorded TTL and shape; Directory_UserCurrent was dropped from the fixture (mock-rules dropOutputs) and comes from
    the mock user (knowledge/mock-fixtures.md:25-27), with HasPoliciesToAccept following the same user. */
const userInfoCache = contractHandler('UBTConnect_Utils', 'CacheControl_UserInfo/DataActionGetCacheInfo', () => {
  const recorded = fixtureData(
    'UBTConnect_Utils',
    'CacheControl_UserInfo/DataActionGetCacheInfo',
  ) as UserInfoCacheOutput;
  const user = mockUserInformation();
  return {
    ...recorded,
    CacheControl_Response: {
      ...recorded.CacheControl_Response,
      Directory_UserCurrent: user.Directory_UserCurrent,
      HasPoliciesToAccept: user.HasPoliciesToAccept,
    },
  };
});

/** Fictional map data: the Map screen is skipped and households are person data; no list counts were captured. */
const cacheableMapEntities = contractHandler('UBTConnect', 'ServiceAPIFetchData_CacheableMapEntities', () => ({
  Countries_GeoJSON: { List: [] },
  Countries_Markers: { List: [] },
  GlobalLocations_Markers: { List: [] },
  Localities_GeoJSON: { List: [] },
  Localities_Markers: { List: [] },
}));
const cacheableHouseholds = contractHandler('UBTConnect', 'ServiceAPIFetchData_CacheableHouseholds', () => ({
  Household_Markers: { List: [] },
}));

export const handlers = [
  synchAppContext,
  recordedHandler('UBT_AppManager', 'ActionAppManager_AfterInitialize', { matchInputs: false }), // inputs: device context
  syncInfoGetMain,
  getUserInformation,
  recordedHandler('Connect2_LegacyShared', 'ActionGetNumberUnreadMessages', { matchInputs: false }), // input: anonymised DeviceId
  cacheableMapEntities,
  cacheableHouseholds,
  userInfoCache,
  // calls of shell blocks built later (lock content, App_Common.Version, bottom bar): recorded
  // CacheControl_Policies/DataActionGetCacheInfo: src/mocks/modules/UBTConnect_Utils/CacheControl_Policies/mocks.ts (FIX-D)
  recordedHandler('UBTConnect_Utils', 'ActionGet_RuntimeVersion'),
  recordedHandler('UBTConnect', 'ServiceAPIGet_UI_UpdateItems_UnreadCount_All'),
];
