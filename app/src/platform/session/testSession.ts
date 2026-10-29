import { MOCKS_BUILT } from '@/platform/config/config';
import { osNumber } from '@/lib/os-wire';
import { appManager_SetCachedUserInfo } from './cachedUserInfo';
import { MOCK_USER_ID, mockCachedUserInfo } from './mockUser';
import { registerPin } from './pin';
import { readPin, setClientVar, setSignedInUser, writePin } from './session';
import { readItem, writeItem } from '@/platform/storage/storage';

/* Test switch of the mock phase (user decision, 2026-10-14), so screens behind sign-in can be reviewed and
   parity-checked before the Login and PIN screens exist. Read once per page load, before the app start:
     ?mocksession=unlocked  signed in as the mock user, local PIN set, this tab unlocked (as the TST captures were taken)
     ?mocksession=out       signed out
     ?mocksession=nopin     signed in, no local PIN (as PINRegister was captured)
     ?mocksession=locked    signed in, local PIN set, this tab not unlocked (as PINUnlock was captured)
   Parity runs use the plan's cloneQuery to start each screen in the state of its capture.
   Demo default (user, 2026-10-15): the first load of a tab without the parameter starts as `unlocked`, so links opened
   without ?mocksession work; later loads of that tab keep what the tab did (a sign-out or a lock stays). Any
   ?mocksession value wins and also counts as the tab's start, once per tab and value: a reload with the same parameter
   keeps what the tab did since (a lock, a sign-out), as a reload of the original app keeps its PIN lock (user report
   2026-10-16: F5 on the lock screen of a ?mocksession=unlocked link unlocked the app). Ignored when the app does not run
   on mocks. */
/** The mock user's PIN (user, 2026-10-16: "mặc định là 0223" = "the default is 0223"); PinLength 4 (PINRegister: Pincode block input
    In_PinLength); it passes PIN_ValidateRules (no calendar year, no 3 repeating or consecutive digits). */
export const TEST_PIN = '0223';

const DEFAULT_MODE = 'unlocked';
/** Session-storage key marking that this tab already started (tests set it to check the original, parameterless app). */
export const TAB_STARTED = 'ubtc-mock:tab-started';
/** Session-storage key: the ?mocksession value this tab last applied. */
const APPLIED_MODE = 'ubtc-mock:applied-mode';
/** Local-storage key: the TEST_PIN the device's mock PIN was set with (a device set up with an older test PIN gets the
    current one on its next mock session). */
const PIN_SEED = 'ubtc-mock:test-pin';

/** The mode of this load: the parameter, else the demo default on the tab's first load, else none. */
function pickMode(): string | null {
  const param = new URL(window.location.href).searchParams.get('mocksession');
  const started = readItem('session', TAB_STARTED) === true;
  writeItem('session', TAB_STARTED, true);
  if (param !== null) {
    const applied = readItem('session', APPLIED_MODE);
    writeItem('session', APPLIED_MODE, param);
    return started && applied === param ? null : param;
  }
  return started ? null : DEFAULT_MODE;
}

export async function applyTestSession(): Promise<void> {
  if (!MOCKS_BUILT) return; // static: production builds drop the mock session and its fixture and mock chunks
  const mode = pickMode();
  if (mode === 'out') {
    setSignedInUser(null);
    return;
  }
  if (mode !== 'unlocked' && mode !== 'nopin' && mode !== 'locked') return;
  setSignedInUser(MOCK_USER_ID);
  appManager_SetCachedUserInfo(mockCachedUserInfo());
  if (mode === 'nopin') {
    writePin(null);
    setClientVar('UBT_AppManager.PIN_HasUnlocked', false);
    return;
  }
  if (readPin() === null || readItem('local', PIN_SEED) !== TEST_PIN) {
    await registerPin(TEST_PIN);
    writeItem('local', PIN_SEED, TEST_PIN);
  }
  setClientVar('UBT_AppManager.PIN_HasUnlocked', mode === 'unlocked');
  setClientVar('UBT_AppManager.PIN_IsLocked', false);
  if (mode === 'unlocked') {
    await seedCapturedTabClientVars();
    await seedCapturedTabLocalEntities();
  }
}

/* The TST captures were taken in a tab that had already run the app (the loading and offline states reload that tab):
   OutSystems client variables persist, so its counts came from the earlier runs. Seeded from the recorded answers:
   the bell's UnreadNotificationsNumber (SynchronizeNumberUnreadMessages, startup.ts) and the bottom bar's unread updates
   with a check made just now, which is why the captures make no Get_UI_UpdateItems_UnreadCount_All call
   (Directory_Updates_RefreshBottomBarCount, UC:2458-2470; CR-HomeFeed-3). */
async function seedCapturedTabClientVars(): Promise<void> {
  const { fixtureData } = await import('@/mocks/fixtures');
  const updates = fixtureData('UBTConnect', 'ServiceAPIGet_UI_UpdateItems_UnreadCount_All') as {
    UnreadCount: string | number;
  };
  setClientVar('UBTConnect.Directory_Updates_UnreadCount', osNumber(updates.UnreadCount));
  setClientVar('UBTConnect.Directory_Updates_UnreadCount_LastCheck', new Date().toISOString().slice(0, 19));
  const messages = fixtureData('Connect2_LegacyShared', 'ActionGetNumberUnreadMessages') as {
    NumberPublicUnreadMessages: string | number;
    NumberPrivateUnreadMessages: string | number;
  };
  const publicCount = osNumber(messages.NumberPublicUnreadMessages);
  setClientVar(
    'Connect2_LegacyShared.UnreadNotificationsNumber',
    publicCount + osNumber(messages.NumberPrivateUnreadMessages),
  );
  setClientVar('Connect2_LegacyShared.UnreadPublicMessagesNumber', publicCount);
}

/* The same tab also kept the device's local entities of those runs (client entities persist, as the client variables
   do). Directory_EntityDetailsActions OnReady (GetLocalBookmarkByObjectId_C2) and Locality_Households_HouseholdList
   OnAfterFetch (GetLocal_Bookmark_C2 with C2NewBookmarks on, else GetLocal_Bookmark) read the local bookmarks while this app start's Sync_Info_GetMain has not answered yet
   (appStartSteps.ts waits for the first screen), so the captures show the bookmarks the earlier runs synced: the
   bookmarks of the Sync_Info_GetMain mock (CR-HouseholdDetails-2 §2, CR-Locality_Details-1). The app start then replaces them with
   the same rows (SynchBookmarks).
   Likewise the Orbit static entities (LocalOrbitMilestoneType, LocalSurveyStatus): earlier app starts synced them, so
   the captures' MilestoneHeader shows the milestone type even when this start's Sync_Info_GetMain never answers (the
   loading and offline states, HelpersDetail "Helper (Host)"; CR-HelpersDetail-1). Seeded with SyncAllOrbitStaticEntities
   of the Sync_Info_GetMain mock's OrbitStaticEntities, as an earlier app start ran it. */
async function seedCapturedTabLocalEntities(): Promise<void> {
  const [
    { mockLocalBookmarks, mockLocalBookmarksC2, orbitStaticEntities },
    { synchBookmarks, synchBookmarksC2, syncAllOrbitStaticEntities },
  ] = await Promise.all([import('@/platform/bootstrap/mocks'), import('@/platform/storage/localEntities')]);
  await synchBookmarks(mockLocalBookmarks());
  await synchBookmarksC2(mockLocalBookmarksC2());
  await syncAllOrbitStaticEntities(orbitStaticEntities());
}
