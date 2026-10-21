import { beforeEach, describe, expect, test } from 'vitest';
import { MOCK_USER_ID } from './mockUser';
import { deletePin, isLocked, lock, pinCheck, registerPin, verifyPin } from './pin';
import { getClientVar, getShellState, readPin, setClientVar, setSignedInUser } from './session';
import { freshPage } from './testSupport';

beforeEach(() => {
  freshPage();
  setClientVar('UBT_AppManager.PIN_Use', true);
});

describe('pinCheck (PIN_Check)', () => {
  test('without PIN_Use nothing is needed', () => {
    setClientVar('UBT_AppManager.PIN_Use', false);
    setSignedInUser(MOCK_USER_ID);
    expect(pinCheck()).toEqual({ needRegister: false, needUnlock: false });
  });

  test('PIN_Use without a local PIN needs a registration, with one an unlock', async () => {
    setSignedInUser(MOCK_USER_ID);
    expect(pinCheck()).toEqual({ needRegister: true, needUnlock: false });
    await registerPin('1357');
    expect(pinCheck()).toEqual({ needRegister: false, needUnlock: true });
  });
});

test('registerPin keeps only a salted hash and unlocks the tab', async () => {
  setSignedInUser(MOCK_USER_ID);
  await registerPin('1357');
  const stored = readPin();
  expect(stored?.userId).toBe(MOCK_USER_ID);
  expect(stored?.hash).toMatch(/^[0-9a-f]{64}$/);
  expect(JSON.stringify(localStorage)).not.toContain('1357');
  expect(getClientVar('UBT_AppManager.PIN_HasUnlocked')).toBe(true);
  expect(getShellState().hasLocalPin).toBe(true);
});

test('registerPin needs a signed-in user', async () => {
  await expect(registerPin('1357')).rejects.toThrow('User not logged in.');
});

describe('verifyPin (Pincode_Unlock OnSetPin)', () => {
  beforeEach(async () => {
    setSignedInUser(MOCK_USER_ID);
    await registerPin('1357');
    setClientVar('UBT_AppManager.PIN_HasUnlocked', false);
    lock();
  });

  test('the right PIN unlocks: HasUnlocked true, IsLocked false', async () => {
    expect(isLocked()).toBe(true);
    await expect(verifyPin('1357')).resolves.toEqual({ status: 'unlocked' });
    expect(isLocked()).toBe(false);
    expect(getClientVar('UBT_AppManager.PIN_HasUnlocked')).toBe(true);
  });

  test('a wrong PIN keeps the lock', async () => {
    await expect(verifyPin('0000')).resolves.toEqual({ status: 'error', error: 'Pin does not match' });
    expect(isLocked()).toBe(true);
  });

  test('another user has no PIN here', async () => {
    setSignedInUser('123');
    await expect(verifyPin('1357')).resolves.toEqual({ status: 'error', error: 'User not found' });
  });

  test('signed out', async () => {
    setSignedInUser(null);
    await expect(verifyPin('1357')).resolves.toEqual({ status: 'error', error: 'User not logged in.' });
  });
});

test('deletePin removes only the PIN of that user', async () => {
  setSignedInUser(MOCK_USER_ID);
  await registerPin('1357');
  deletePin('someone-else');
  expect(readPin()).not.toBeNull();
  deletePin(MOCK_USER_ID);
  expect(readPin()).toBeNull();
});
