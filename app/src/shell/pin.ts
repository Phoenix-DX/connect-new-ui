import { APP_ID } from './paths';
import { currentUserId, getClientVar, getShellState, readPin, setClientVar, writePin } from './session';

/* Mock of the device PIN (UBT_AppManager PIN_* actions, decision U5): the PIN is kept on the device, hashed with a
   random salt (SHA-256), never in clear text. Screens (PINRegister, PINUnlock, lock overlay) call these functions. */

async function hashPin(pin: string, salt: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${salt}:${pin}`));
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, '0')).join('');
}

/** PIN_Check (AM:7593-7616): with PIN_Use, a local PIN means NeedUnlock, none means NeedRegister. */
export function pinCheck(): { needRegister: boolean; needUnlock: boolean } {
  if (!getClientVar('UBT_AppManager.PIN_Use')) return { needRegister: false, needUnlock: false };
  const hasPin = getShellState().hasLocalPin;
  return { needRegister: !hasPin, needUnlock: hasPin };
}

/** Pincode_Register confirmed (knowledge/auth.md): PIN_Set, then PIN_HasUnlocked = True. The inactivity timer
    (PIN_SessionInactivity_Start) restarts through LockHost, which watches the session. */
export async function registerPin(pin: string): Promise<void> {
  const userId = currentUserId();
  if (userId === null) throw new Error('User not logged in.');
  const salt = crypto.randomUUID();
  writePin({ userId, appId: APP_ID, salt, hash: await hashPin(pin, salt) });
  setClientVar('UBT_AppManager.PIN_HasUnlocked', true);
}

/** Event texts of Pincode_Unlock OnSetPin (p:UBT_AppManager.PIN.Pincode_Unlock.mvc.js); the screen maps them. */
export type PinUnlockError = 'Pin does not match' | 'PIN not configured' | 'User not found' | 'User not logged in.';
export type PinUnlockResult = { status: 'unlocked' } | { status: 'error'; error: PinUnlockError };

/** Pincode_Unlock OnSetPin → OnUnlockSuccess: PIN_HasUnlocked = True, PIN_IsLocked = False (Pincode_Unlock:628-637). */
export async function verifyPin(pin: string): Promise<PinUnlockResult> {
  const userId = currentUserId();
  if (userId === null) return { status: 'error', error: 'User not logged in.' };
  const stored = readPin();
  if (stored === null || stored.userId !== userId || stored.appId !== APP_ID) {
    return { status: 'error', error: 'User not found' };
  }
  if (stored.hash.trim() === '') return { status: 'error', error: 'PIN not configured' };
  if ((await hashPin(pin, stored.salt)) !== stored.hash) return { status: 'error', error: 'Pin does not match' };
  setClientVar('UBT_AppManager.PIN_HasUnlocked', true);
  setClientVar('UBT_AppManager.PIN_IsLocked', false);
  return { status: 'unlocked' };
}

/** PIN_IsLocked: the inactivity lock is on. */
export const isLocked = (): boolean => getClientVar('UBT_AppManager.PIN_IsLocked');

/** Pincode_Unlock OnTimeout (Pincode_Unlock:666-670). */
export function lock(): void {
  setClientVar('UBT_AppManager.PIN_IsLocked', true);
}

/** PIN_Delete(UserId, AppName), part of AppManager_Logout (AM:3712). */
export function deletePin(userId: string | null): void {
  const stored = readPin();
  if (stored !== null && stored.userId === userId && stored.appId === APP_ID) writePin(null);
}
