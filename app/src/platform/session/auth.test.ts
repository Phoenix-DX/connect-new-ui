import { beforeEach, describe, expect, test, vi } from 'vitest';
import { signIn, signOut, signedOutRemotely } from './auth';
import type { LocalDatabase, TableSchema } from '@/platform/storage/localEntities/database';
import {
  getLocalOrbitMilestoneTypesById,
  localBookmarksDatabase,
  localBookmarksSchemas,
  localNotesDatabase,
  localNotesSchemas,
  localSearchHistoryDatabase,
  localSearchHistorySchemas,
  orbitStaticEntitiesDatabase,
  orbitStaticEntitiesSchemas,
  recentSearchDatabase,
  recentSearchSchemas,
  syncOrbitMilestoneTypes,
} from '@/platform/storage/localEntities';
import { appCache } from '@/api/app';
import { bookmarkCache } from '@/api/bookmark';
import { peekCacheableObject, putCacheableObject } from '@/api/client/cache';
import { queryClient } from '@/api/client/queryClient';
import { memberCache } from '@/api/member';
import { getSessionStatus, subscribeSessionStatus } from './machine';
import { MOCK_USER_ID } from './mockUser';
import { registerPin } from './pin';
import { setAppCallback, setResumeLoginLink } from './resume';
import { getClientVar, getShellState, readPin, setClientVar, setSignedInUser } from './session';
import { startApp } from '@/platform/bootstrap/appStartSteps';
import { calledActions, freshPage, recordBodies } from '@/test/testSupport';

beforeEach(async () => {
  freshPage();
  vi.spyOn(console, 'warn').mockImplementation(() => undefined);
  await startApp(); // signed-out start: PIN settings from SynchAppContext (PIN_Use true)
  window.__osCalls = [];
});

/** A device that already has a PIN of the mock user (signed out before without a logout). */
async function devicePinOfMockUser() {
  setSignedInUser(MOCK_USER_ID);
  await registerPin('1357');
  setSignedInUser(null);
}

describe('signIn (decision U4: the Login callback branches)', () => {
  test('runs Connect_SetLoggedContext(isFromLogin = True)', async () => {
    const main = recordBodies('UBTConnect/ActionSync_Info_GetMain');
    await signIn();
    expect(getShellState()).toMatchObject({ signedIn: true, userId: MOCK_USER_ID });
    expect(calledActions()).toEqual([
      'ActionGetUserInformation',
      'ActionSync_Info_GetMain',
      'ActionGetNumberUnreadMessages',
    ]);
    expect(main).toEqual([{ isFromLogin: true }]);
    expect(getClientVar('UBTConnect.Notifications_IsSynched')).toBe(true);
  });

  test('no local PIN: PINRegister, even with a callback kept', async () => {
    setAppCallback('/UBTConnect/Notes');
    await expect(signIn()).resolves.toBe('/UBTConnect/PINRegister');
  });

  test('with a local PIN: the resume link first (and it is consumed)', async () => {
    await devicePinOfMockUser();
    setAppCallback('/UBTConnect/Notes');
    setResumeLoginLink('/UBTConnect/ConnectShare?ShareId=abc');
    await expect(signIn()).resolves.toBe('/UBTConnect/ConnectShare?ShareId=abc');
    setSignedInUser(null);
    await expect(signIn()).resolves.toBe('/UBTConnect/Notes');
  });

  test('with a local PIN and nothing kept: HomeFeed', async () => {
    await devicePinOfMockUser();
    await expect(signIn()).resolves.toBe('/UBTConnect/HomeFeed');
  });
});

describe('signIn and signOut write the session machine (plan v2 §3.2)', () => {
  const statusesDuring = async (run: () => Promise<unknown>) => {
    const seen: string[] = [];
    const stop = subscribeSessionStatus(() => seen.push(getSessionStatus().status));
    try {
      await run();
    } finally {
      stop();
    }
    return seen;
  };

  test('no local PIN: signedOut → signingIn → needPinRegister', async () => {
    expect(getSessionStatus()).toEqual({ status: 'signedOut' });
    expect(await statusesDuring(signIn)).toEqual(['signingIn', 'needPinRegister']);
    expect(getSessionStatus()).toEqual({ status: 'needPinRegister', userId: MOCK_USER_ID });
  });

  test('with a local PIN: signingIn → unlocked', async () => {
    await devicePinOfMockUser();
    expect(await statusesDuring(signIn)).toEqual(['signingIn', 'unlocked']);
    expect(getSessionStatus()).toEqual({ status: 'unlocked', userId: MOCK_USER_ID });
  });

  test('sign out: signedOut', async () => {
    await signIn();
    await registerPin('1357');
    expect(await statusesDuring(signOut)).toEqual(['signedOut']);
  });
});

describe('signOut (Connect_Logout)', () => {
  beforeEach(async () => {
    await signIn();
    await registerPin('1357');
    setClientVar('UBTConnect.App_NetworkStatus_IsOnline_IsPersistent', false);
    window.__osCalls = [];
  });

  test('ends the session, deletes the PIN, resets client variables except *_IsPersistent', async () => {
    const uuid = getClientVar('UBT_AppManager.DeviceInfo_UUID');
    await signOut();
    expect(getShellState()).toMatchObject({ signedIn: false, hasLocalPin: false, hasUnlocked: false });
    expect(readPin()).toBeNull();
    expect(getClientVar('UBTConnect.Notifications_IsSynched')).toBe(false);
    expect(getClientVar('UBTConnect.App_NetworkStatus_IsOnline_IsPersistent')).toBe(false);
    expect(getClientVar('UBT_AppManager.DeviceInfo_UUID')).toBe(uuid); // AppManager_SetDeviceContext
  });

  test('re-syncs the app context, which restores the settings', async () => {
    await signOut();
    expect(calledActions()).toEqual(['ActionAppManager_SynchAppContext']);
    expect(getClientVar('UBT_AppManager.PIN_Use')).toBe(true);
  });

  test('invalidates the user-info cache, so the next sign-in asks again', async () => {
    putCacheableObject(memberCache.userInfo('Unique'), {});
    await signOut();
    expect(peekCacheableObject(memberCache.userInfo('Unique')).hit).toBe(false);
    await signIn();
    expect(calledActions()).toContain('ActionGetUserInformation');
  });

  test('ADR-10 (added): clears the whole memory cache, map objects of the app start included', async () => {
    putCacheableObject(appCache.mapObject('Households'), []);
    putCacheableObject(bookmarkCache.myBookmarks('All'), [{ BookmarkId: 'b-1' }]);
    await signOut();
    expect(peekCacheableObject(appCache.mapObject('Households')).hit).toBe(false);
    expect(peekCacheableObject(bookmarkCache.myBookmarks('All')).hit).toBe(false);
    // the objects are gone from the app QueryClient, not only out of reach
    const kept = queryClient
      .getQueryCache()
      .findAll({ queryKey: ['memoryCache'] })
      .filter((query) => query.state.data !== undefined);
    expect(kept).toEqual([]);
  });

  test('signedOutRemotely (the server ended the session) ends as signOut: status, session user, client variables, PIN, caches, calls', async () => {
    const notes = localNotesDatabase();
    const noteTables = localNotesSchemas().map((s) => s.tableName);
    /** The signed-in device of the beforeEach, with a cache entry and a local note row. */
    const fillDevice = async () => {
      putCacheableObject(memberCache.userInfo('Unique'), {});
      putCacheableObject(bookmarkCache.myBookmarks('All'), [{ BookmarkId: 'b-1' }]);
      await notes.transaction(noteTables, 'readwrite', async (tx) => {
        for (const s of localNotesSchemas()) {
          await tx.put(s.tableName, Object.fromEntries(s.keyPath.map((k) => [k, `x-${k}`])));
        }
      });
      window.__osCalls = [];
    };
    const storageOf = (storage: Storage) =>
      Object.fromEntries(
        Array.from({ length: storage.length }, (_, i) => storage.key(i) ?? '')
          .sort()
          .map((key) => [key, storage.getItem(key)]),
      );
    /** What a logout leaves: the machine, the shell state, the PIN, both storages, the caches, the rows, the calls. */
    const endStateOf = async (logout: () => Promise<void>) => {
      await fillDevice();
      const statuses: string[] = [];
      const stop = subscribeSessionStatus(() => statuses.push(getSessionStatus().status));
      await logout();
      stop();
      return {
        statuses,
        status: getSessionStatus(),
        shell: getShellState(),
        pin: readPin(),
        localStorage: storageOf(localStorage),
        sessionStorage: storageOf(sessionStorage),
        caches: [
          peekCacheableObject(memberCache.userInfo('Unique')).hit,
          peekCacheableObject(bookmarkCache.myBookmarks('All')).hit,
        ],
        noteRows: await notes.transaction(noteTables, 'readonly', async (tx) =>
          (await Promise.all(noteTables.map((table) => tx.getAll(table)))).flat(),
        ),
        calls: calledActions(),
      };
    };

    const bySignOut = await endStateOf(signOut);
    // the same signed-in device again (beforeEach), then the remote sign-out
    await signIn();
    await registerPin('1357');
    setClientVar('UBTConnect.App_NetworkStatus_IsOnline_IsPersistent', false);
    const bySignedOutRemotely = await endStateOf(signedOutRemotely);

    expect(bySignedOutRemotely).toEqual(bySignOut);
    expect(bySignOut).toMatchObject({
      statuses: ['signedOut'],
      status: { status: 'signedOut' },
      shell: { signedIn: false, hasLocalPin: false },
      pin: null,
      caches: [false, false],
      noteRows: [],
      calls: ['ActionAppManager_SynchAppContext'],
    });
    // the storages are not empty: the *_IsPersistent variable and the device id stay after both
    expect(getClientVar('UBTConnect.App_NetworkStatus_IsOnline_IsPersistent')).toBe(false);
    expect(Object.keys(bySignOut.localStorage).length).toBeGreaterThan(0);
  });

  test('ADR-10 (added): clears every local entity store, metadata included; the original calls are unchanged', async () => {
    const stores: [LocalDatabase, readonly TableSchema[]][] = [
      [localNotesDatabase(), localNotesSchemas()],
      [localBookmarksDatabase(), localBookmarksSchemas()],
      [localSearchHistoryDatabase(), localSearchHistorySchemas()],
      [recentSearchDatabase(), recentSearchSchemas()],
      [orbitStaticEntitiesDatabase(), orbitStaticEntitiesSchemas()],
    ];
    await syncOrbitMilestoneTypes([{ Id: 'mt-1', Type: 'Arrival', MainIcon: 'icon-plane' }]);
    for (const [db, schemas] of stores) {
      await db.transaction(
        schemas.map((s) => s.tableName),
        'readwrite',
        async (tx) => {
          for (const s of schemas) await tx.put(s.tableName, Object.fromEntries(s.keyPath.map((k) => [k, `x-${k}`])));
        },
      );
    }
    await signOut();
    for (const [db, schemas] of stores) {
      const left = await db.transaction(
        schemas.map((s) => s.tableName),
        'readonly',
        async (tx) => (await Promise.all(schemas.map((s) => tx.getAll(s.tableName)))).flat(),
      );
      expect(left).toEqual([]);
    }
    expect(calledActions()).toEqual(['ActionAppManager_SynchAppContext']);
    // the page keeps the Orbit reference lists for a new sign-in; the next app start re-syncs the stores
    expect(getLocalOrbitMilestoneTypesById('mt-1')).toHaveLength(1);
  });
});
