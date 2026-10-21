import { afterEach, beforeEach, expect, test } from 'vitest';
import { verifyPin } from './pin';
import { getShellState, readPin, setClientVar } from './session';
import { applyTestSession, TEST_PIN } from './testSession';
import { freshPage } from './testSupport';

beforeEach(() => {
  freshPage();
});

afterEach(() => {
  window.history.replaceState(null, '', '/');
});

test('?mocksession=unlocked starts signed in, with a local PIN, unlocked', async () => {
  window.history.replaceState(null, '', '/UBTConnect/HomeFeed?mocksession=unlocked');
  await applyTestSession();
  expect(getShellState().signedIn).toBe(true);
  expect(getShellState().hasUnlocked).toBe(true);
  expect(readPin()).not.toBeNull();
  expect(await verifyPin(TEST_PIN)).toEqual({ status: 'unlocked' });
});

test('?mocksession=out signs out', async () => {
  window.history.replaceState(null, '', '/UBTConnect/HomeFeed?mocksession=out');
  await applyTestSession();
  expect(getShellState().signedIn).toBe(false);
});

test('?mocksession=nopin: signed in without a local PIN; ?mocksession=locked: PIN set, tab not unlocked', async () => {
  window.history.replaceState(null, '', '/UBTConnect/PINRegister?mocksession=nopin');
  await applyTestSession();
  expect(getShellState().signedIn).toBe(true);
  expect(readPin()).toBeNull();
  window.history.replaceState(null, '', '/UBTConnect/PINUnlock?mocksession=locked');
  await applyTestSession();
  expect(readPin()).not.toBeNull();
  expect(getShellState().hasUnlocked).toBe(false);
});

test('demo default: the first load of a tab without ?mocksession starts unlocked; later loads keep the tab state', async () => {
  sessionStorage.clear(); // a new tab (freshPage marks tabs as started)
  window.history.replaceState(null, '', '/UBTConnect/HomeFeed');
  await applyTestSession();
  expect(getShellState().signedIn).toBe(true);
  expect(getShellState().hasUnlocked).toBe(true);
  window.history.replaceState(null, '', '/UBTConnect/Notes?mocksession=out');
  await applyTestSession();
  expect(getShellState().signedIn).toBe(false);
  window.history.replaceState(null, '', '/UBTConnect/Notes');
  await applyTestSession();
  expect(getShellState().signedIn).toBe(false);
});

test('the mock PIN is 0223, and a device set up with an older test PIN gets it', async () => {
  window.history.replaceState(null, '', '/UBTConnect/HomeFeed?mocksession=unlocked');
  await applyTestSession();
  expect(TEST_PIN).toBe('0223');
  expect(await verifyPin('0223')).toEqual({ status: 'unlocked' });
  expect(await verifyPin('1234')).toEqual({ status: 'error', error: 'Pin does not match' });
});

test('a reload with the same ?mocksession keeps the tab state (a lock is not undone by F5)', async () => {
  window.history.replaceState(null, '', '/UBTConnect/HomeFeed?mocksession=unlocked');
  await applyTestSession();
  expect(getShellState().hasUnlocked).toBe(true);
  setClientVar('UBT_AppManager.PIN_HasUnlocked', false); // the tab locked (PINUnlock / lock overlay)
  await applyTestSession(); // F5 on the same URL
  expect(getShellState().hasUnlocked).toBe(false);
});
