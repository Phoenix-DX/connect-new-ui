import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import {
  appReady,
  clearClientVarsAfterLogout,
  clientVar,
  currentUserId,
  getClientVar,
  getShellState,
  hasLocalPin,
  hasUnlocked,
  isSignedIn,
  markAppReady,
  setClientVar,
  setSignedInUser,
  useClientVar,
  useShellState,
  writePin,
} from './session';
import { CLIENT_VAR_DEFAULTS } from './clientVars';
import { getSessionStatus } from './machine';
import { getSetting, setSettings } from '@/platform/settings';
import { freshPage, reloadPage } from '@/test/testSupport';

beforeEach(() => {
  freshPage();
});

test('client variables start at the compiled defaults (shell/client-variables.md)', () => {
  expect(getClientVar('UBTConnect_Utils.UniqueCacheKey')).toBe('Unique');
  expect(getClientVar('UBTConnect.App_NetworkStatus_IsOnline_IsPersistent')).toBe(true);
  expect(getClientVar('UBTConnect.Directory_Updates_UnreadCount_CheckFrequency_Minut')).toBe(5);
  expect(getClientVar('UBT_AppManager.PIN_Use')).toBe(false);
  expect(getClientVar('UBTConnect.LastURL')).toBe('');
});

test('values are kept in namespaced localStorage keys and survive a reload', () => {
  setClientVar('UBT_AppManager.OutSystems_LastURL', '/UBTConnect/Menu');
  expect(localStorage.getItem('ubtc-mock:cv:UBT_AppManager.OutSystems_LastURL')).toBe('"/UBTConnect/Menu"');
  reloadPage();
  expect(getClientVar('UBT_AppManager.OutSystems_LastURL')).toBe('/UBTConnect/Menu');
});

test('PIN_HasUnlocked survives a reload but not a new tab (shell-observed U3)', () => {
  setClientVar('UBT_AppManager.PIN_HasUnlocked', true);
  reloadPage();
  expect(getClientVar('UBT_AppManager.PIN_HasUnlocked')).toBe(true);
  reloadPage({ newTab: true });
  expect(getClientVar('UBT_AppManager.PIN_HasUnlocked')).toBe(false);
});

test('a stored value of the wrong type falls back to the default', () => {
  localStorage.setItem('ubtc-mock:cv:UBT_AppManager.PIN_IsLocked', '"yes"');
  expect(getClientVar('UBT_AppManager.PIN_IsLocked')).toBe(false);
});

test('the server settings are read and written in the settings store by their OutSystems names (P4-1)', () => {
  setSettings({ 'pin.enabled': true });
  expect(getClientVar('UBT_AppManager.PIN_Use')).toBe(true);
  setClientVar('UBT_AppManager.PIN_SessionInactivity_Seconds', 30);
  expect(getSetting('pin.inactivity.seconds')).toBe(30);
  expect(localStorage.getItem('ubtc-mock:cv:UBT_AppManager.PIN_SessionInactivity_Seconds')).toBeNull();
});

test('a settings change is a client variable change: readers and the shell snapshot update', () => {
  const pinUse = renderHook(() => useClientVar('UBT_AppManager.PIN_Use'));
  const before = getShellState();
  act(() => {
    setSettings({ 'pin.enabled': true });
  });
  expect(pinUse.result.current).toBe(true);
  expect(getShellState()).not.toBe(before); // usePopupWidget renders again on every client variable change
});

test('the signed-in user is kept across reloads', () => {
  setSignedInUser('990001');
  reloadPage({ newTab: true });
  expect(getShellState()).toMatchObject({ signedIn: true, userId: '990001', appReady: false });
  setSignedInUser(null);
  expect(getShellState().signedIn).toBe(false);
});

test('after a logout every client variable is reset except *_IsPersistent (AM:4176-4194)', () => {
  setClientVar('UBTConnect.App_NetworkStatus_IsOnline_IsPersistent', false);
  setClientVar('UBT_AppManager.PIN_Use', true);
  setClientVar('UBT_AppManager.PIN_HasUnlocked', true);
  clearClientVarsAfterLogout();
  expect(getClientVar('UBTConnect.App_NetworkStatus_IsOnline_IsPersistent')).toBe(false);
  expect(getClientVar('UBT_AppManager.PIN_Use')).toBe(false);
  expect(getClientVar('UBT_AppManager.PIN_HasUnlocked')).toBe(false);
  expect(getSetting('pin.enabled')).toBe(false);
});

test('components re-render on changes', () => {
  const state = renderHook(() => useShellState());
  const lastUrl = renderHook(() => useClientVar('UBTConnect.LastURL'));
  expect(state.result.current.signedIn).toBe(false);
  act(() => {
    setSignedInUser('990001');
    setClientVar('UBTConnect.LastURL', '/UBTConnect/Notes');
  });
  expect(state.result.current.signedIn).toBe(true);
  expect(lastUrl.result.current).toBe('/UBTConnect/Notes');
});

describe('the typed accessors clientVar.<key> (F58)', () => {
  const accessors = Object.values(clientVar);

  test('each accessor starts at the compiled default of its client variable', () => {
    for (const accessor of accessors) expect(accessor.get()).toBe(CLIENT_VAR_DEFAULTS[accessor.name]);
    expect(clientVar.lastUrl.get()).toBe('');
    expect(clientVar.uniqueCacheKey.get()).toBe('Unique');
    expect(clientVar.biometricEnabled.get()).toBe(true);
    expect(clientVar.searchRecentClickedResultsLimit.get()).toBe(10);
    expect(clientVar.pinHeaderFinalHeightPercentage.get()).toBe(90);
    expect(clientVar.updatesUnreadCount.get()).toBe(0);
  });

  test('an accessor and the OutSystems name read and write the same value', () => {
    clientVar.lastUrl.set('/UBTConnect/Menu');
    expect(getClientVar('UBTConnect.LastURL')).toBe('/UBTConnect/Menu');
    setClientVar('Connect2_OrbitMobile_MUI.BookletGuestsMaxRows', 25);
    expect(clientVar.bookletGuestsMaxRows.get()).toBe(25);
  });

  test('set keeps the value in the same localStorage key, which survives a reload', () => {
    clientVar.photobookSpeed.set(3000);
    clientVar.biometricEnabled.set(false);
    expect(localStorage.getItem('ubtc-mock:cv:UBTConnect.PhotobookCarousel_SelectedSpeed')).toBe('3000');
    reloadPage({ newTab: true });
    expect(clientVar.photobookSpeed.get()).toBe(3000);
    expect(clientVar.biometricEnabled.get()).toBe(false);
  });

  test('a logout resets every accessor to its default (none is *_IsPersistent)', () => {
    clientVar.isNavigateToHomeOnBack.set(true);
    clientVar.unreadWhatsNewsNumber.set(4);
    clientVar.deviceUuid.set('device-1');
    clearClientVarsAfterLogout();
    for (const accessor of accessors) expect(accessor.get()).toBe(CLIENT_VAR_DEFAULTS[accessor.name]);
  });

  test('useClientVar takes an accessor; the component renders again on set', () => {
    const hasPolicy = renderHook(() => useClientVar(clientVar.hasPolicyToAccept));
    expect(hasPolicy.result.current).toBe(false);
    act(() => {
      clientVar.hasPolicyToAccept.set(true);
    });
    expect(hasPolicy.result.current).toBe(true);
  });
});

describe('the selectors read the session machine (plan v2 §3.2)', () => {
  test('while the app starts, the stored session gives the user; the app start resolves it into a status', () => {
    setSignedInUser('990001');
    expect(getSessionStatus()).toEqual({ status: 'starting' });
    expect([isSignedIn(), currentUserId(), appReady()]).toEqual([true, '990001', false]);
    markAppReady();
    expect(getSessionStatus()).toEqual({ status: 'unlocked', userId: '990001' }); // PIN_Use false
    expect([isSignedIn(), currentUserId(), appReady()]).toEqual([true, '990001', true]);
    expect(getShellState()).toMatchObject({ signedIn: true, userId: '990001', appReady: true });
  });

  test('a change of the session user moves the status (userChanged)', () => {
    setSettings({ 'pin.enabled': true });
    markAppReady();
    expect(getSessionStatus()).toEqual({ status: 'signedOut' });
    setSignedInUser('990001');
    expect(getSessionStatus()).toEqual({ status: 'needPinRegister', userId: '990001' });
    expect(hasLocalPin()).toBe(false);
    writePin({ userId: '990001', appId: 'UBTConnect', salt: 's', hash: 'h' });
    expect(hasLocalPin()).toBe(true);
    setSignedInUser(null);
    expect(getSessionStatus()).toEqual({ status: 'signedOut' });
    expect([isSignedIn(), currentUserId(), hasLocalPin()]).toEqual([false, null, false]);
  });

  test('hasUnlocked() is PIN_HasUnlocked; a reload starts the status again', () => {
    setClientVar('UBT_AppManager.PIN_HasUnlocked', true);
    expect(hasUnlocked()).toBe(true);
    markAppReady();
    reloadPage({ newTab: true });
    expect(hasUnlocked()).toBe(false);
    expect(getSessionStatus()).toEqual({ status: 'starting' });
    expect(appReady()).toBe(false);
  });
});
