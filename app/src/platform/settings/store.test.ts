import { act, renderHook } from '@testing-library/react';
import { beforeEach, expect, test, vi } from 'vitest';
import {
  getSetting,
  getSettings,
  resetSettings,
  setSettings,
  subscribeSettings,
  useSetting,
} from '@/platform/settings';
import { freshPage, reloadPage } from '@/test/testSupport';

beforeEach(() => {
  freshPage();
});

test('settings start at the compiled defaults of the client variables (shell/client-variables.md)', () => {
  expect(getSettings()).toEqual({
    'pin.enabled': false,
    'pin.inactivity.enabled': false,
    'pin.inactivity.seconds': 0,
    'pin.inactivity.navigate': false,
    'pin.enforceOnReady': false,
    'pin.fingerprint': false,
    'app.environment': '',
    'app.minNativeVersion': '',
    'app.minWebViewChrome': '',
    'app.minWebViewSafari': '',
    'insights.enabled': false,
  });
});

test('a write keeps the other settings, and the values survive a reload (localStorage)', () => {
  setSettings({ 'pin.enabled': true, 'pin.inactivity.seconds': 1200 });
  setSettings({ 'app.environment': 'TST' });
  reloadPage({ newTab: true });
  expect(getSetting('pin.enabled')).toBe(true);
  expect(getSetting('pin.inactivity.seconds')).toBe(1200);
  expect(getSetting('app.environment')).toBe('TST');
  expect(getSetting('pin.fingerprint')).toBe(false);
});

test('a stored value of the wrong type gives the default of that setting only', () => {
  localStorage.setItem('ubtc-mock:settings', JSON.stringify({ 'pin.enabled': 'yes', 'pin.inactivity.seconds': 30 }));
  expect(getSetting('pin.enabled')).toBe(false);
  expect(getSetting('pin.inactivity.seconds')).toBe(30);
  localStorage.setItem('ubtc-mock:settings', '"not an object"');
  expect(getSetting('pin.inactivity.seconds')).toBe(0);
});

test('a reset gives the defaults again (logout, AM:4176-4194)', () => {
  setSettings({ 'pin.enabled': true, 'insights.enabled': true });
  resetSettings();
  expect(getSetting('pin.enabled')).toBe(false);
  expect(getSetting('insights.enabled')).toBe(false);
});

test('listeners hear every write and reset until they unsubscribe', () => {
  const listener = vi.fn();
  const unsubscribe = subscribeSettings(listener);
  setSettings({ 'pin.enabled': true });
  resetSettings();
  expect(listener).toHaveBeenCalledTimes(2);
  unsubscribe();
  setSettings({ 'pin.enabled': true });
  expect(listener).toHaveBeenCalledTimes(2);
});

test('useSetting renders again when the setting changes', () => {
  const seconds = renderHook(() => useSetting('pin.inactivity.seconds'));
  expect(seconds.result.current).toBe(0);
  act(() => {
    setSettings({ 'pin.inactivity.seconds': 1200 });
  });
  expect(seconds.result.current).toBe(1200);
});
