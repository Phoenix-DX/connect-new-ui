import { act, renderHook } from '@testing-library/react';
import { beforeEach, expect, test } from 'vitest';
import {
  clearClientVarsAfterLogout,
  getClientVar,
  getShellState,
  setClientVar,
  setSignedInUser,
  useClientVar,
  useShellState,
} from './session';
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
