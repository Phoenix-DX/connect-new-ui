import { beforeEach, expect, test } from 'vitest';
import { SETTING_CLIENT_VARS, isSettingClientVar, readSettingClientVar, writeSettingClientVar } from './clientVarNames';
import { getSetting, getSettings, setSettings } from '@/platform/settings';
import { freshPage } from '@/test/testSupport';

beforeEach(() => {
  freshPage();
});

test('each setting has exactly one OutSystems name', () => {
  const mapped = Object.values(SETTING_CLIENT_VARS).sort();
  expect(mapped).toEqual(Object.keys(getSettings()).sort());
});

test('only the names of the map are settings', () => {
  expect(isSettingClientVar('UBT_AppManager.PIN_Use')).toBe(true);
  expect(isSettingClientVar('UBT_AppManager.PIN_IsLocked')).toBe(false); // session state, not a server setting
  expect(isSettingClientVar('toString')).toBe(false);
});

test('the adapter reads and writes the store by the OutSystems name', () => {
  setSettings({ 'pin.enabled': true, 'app.environment': 'TST' });
  expect(readSettingClientVar('UBT_AppManager.PIN_Use')).toBe(true);
  expect(readSettingClientVar('UBT_AppManager.OutSystems_Environment')).toBe('TST');
  writeSettingClientVar('UBT_AppManager.PIN_SessionInactivity_Seconds', 30);
  expect(getSetting('pin.inactivity.seconds')).toBe(30);
  expect(getSetting('pin.enabled')).toBe(true);
});
