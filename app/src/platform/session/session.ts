import { useSyncExternalStore } from 'react';
import {
  CLIENT_VAR_DEFAULTS,
  SESSION_SCOPED,
  isStoredClientVarName,
  survivesLogout,
  type ClientVarName,
  type ClientVarValue,
  type StoredClientVarName,
} from './clientVars';
import {
  isSettingClientVar,
  readSettingClientVar,
  writeSettingClientVar,
  type SettingClientVarValue,
} from '@/legacy/os/clientVarNames';
import {
  getSessionStatus,
  resetSessionStatus,
  sendSessionEvent,
  subscribeSessionStatus,
  type PinNeed,
  type SessionFacts,
} from './machine';
import { APP_ID } from '@/platform/navigation/paths';
import { resetSettings, subscribeSettings } from '@/platform/settings';
import { itemKeys, readItem, removeItem, writeItem } from '@/platform/storage/storage';

/* The mock session store (decision U5): signed-in user, local PIN (hashed) and client variables in browser storage, and
   the session status of the running page in the state machine (machine.ts). Components read it with useShellState /
   useClientVar (useSyncExternalStore).
   The server settings (PIN_Use, ...) are in the typed store platform/settings: getClientVar, setClientVar and
   useClientVar reach them through the adapter legacy/os/clientVarNames.ts.
   Selectors (plan v2 §3.2; the names are kept, the values are the ones before P4-2):
     appReady()                     the status left `starting` (the app start finished)
     isSignedIn(), currentUserId()  the user of the status; while the status is `starting` or `signingIn`, the stored
                                    session, which the app start and the post-login step then resolve into a status
     hasLocalPin()                  a PIN of this app for that user is on this device (PIN_Get)
     hasUnlocked()                  PIN_HasUnlocked, the tab flag that the app start resolves `locked` from
     isLocked() (pin.ts)            PIN_IsLocked: the lock content shows
   hasUnlocked() and isLocked() keep reading the two client variables: the status `locked` also covers the app-start
   lock, where no lock content shows (the redirect to PINUnlock, or Login and PINRegister, which ignore the lock
   screen). pin.ts writes both variables and sends the machine's events with them. */
export interface StoredPin {
  userId: string;
  appId: string;
  salt: string;
  hash: string;
}

export interface ShellState {
  signedIn: boolean;
  userId: string | null;
  /** a PIN is registered on this device for the signed-in user */
  hasLocalPin: boolean;
  /** PIN_IsLocked: the inactivity lock is showing */
  locked: boolean;
  /** PIN_HasUnlocked: this tab was unlocked (or registered a PIN) */
  hasUnlocked: boolean;
  /** the app-start sequence finished (section 10) */
  appReady: boolean;
}

const SESSION_KEY = 'session';
const PIN_KEY = 'pin';
const VAR_PREFIX = 'cv:';

const listeners = new Set<() => void>();
let snapshot: ShellState = buildSnapshot();

function storedUserId(): string | null {
  const s = readItem('local', SESSION_KEY);
  if (typeof s !== 'object' || s === null || !('userId' in s)) return null;
  return typeof s.userId === 'string' && s.userId !== '' ? s.userId : null;
}

export function readPin(): StoredPin | null {
  const p = readItem('local', PIN_KEY);
  if (typeof p !== 'object' || p === null) return null;
  const { userId, appId, salt, hash } = p as Partial<Record<keyof StoredPin, unknown>>;
  return typeof userId === 'string' && typeof appId === 'string' && typeof salt === 'string' && typeof hash === 'string'
    ? { userId, appId, salt, hash }
    : null;
}

/** PIN_Get(GetUserId, AppId): a PIN of another user or app does not count. */
function hasPinOf(userId: string | null): boolean {
  const pin = readPin();
  return pin !== null && pin.userId === userId && pin.appId === APP_ID;
}

/** The user of the session status. While the status is `starting` or `signingIn` it has no user yet: the stored session
    (the mock identity provider) gives it. */
function sessionUserId(): string | null {
  const status = getSessionStatus();
  if ('userId' in status) return status.userId;
  return status.status === 'signedOut' ? null : storedUserId();
}

function buildSnapshot(): ShellState {
  const userId = sessionUserId();
  return {
    signedIn: userId !== null,
    userId,
    hasLocalPin: hasPinOf(userId),
    locked: getClientVar('UBT_AppManager.PIN_IsLocked'),
    hasUnlocked: getClientVar('UBT_AppManager.PIN_HasUnlocked'),
    appReady: getSessionStatus().status !== 'starting',
  };
}

function notify() {
  for (const l of listeners) l();
}

/* The session user is kept in storage by the mock identity provider (setSignedInUser; another tab of the device writes
   the same key). At each change of this store the status follows a change of that user (machine.ts `userChanged`), as
   the snapshot read the stored user at each change before P4-2. */
function emit() {
  sendSessionEvent({ type: 'userChanged', ...storedSessionFacts() });
  snapshot = buildSnapshot();
  notify();
}

/* A settings change is a client variable change of the original: the listeners of this store hear it, as the readers
   of useClientVar and the Popup widget (usePopupWidget re-renders on every client variable change) did before. */
subscribeSettings(emit);

/* A change of the session status is not a client variable change: the listeners hear it only when the state they read
   changes (the app start, a sign-out). The other events come with the client variable writes that tell them, as
   before. */
subscribeSessionStatus(() => {
  const next = buildSnapshot();
  if ((Object.keys(next) as (keyof ShellState)[]).every((key) => next[key] === snapshot[key])) return;
  snapshot = next;
  notify();
});

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export const getShellState = (): ShellState => snapshot;

export function getClientVar<N extends ClientVarName>(name: N): ClientVarValue<N> {
  if (isSettingClientVar(name)) return readSettingClientVar(name) as ClientVarValue<N>;
  const key: StoredClientVarName = name;
  const fallback = CLIENT_VAR_DEFAULTS[key] as ClientVarValue<N>;
  const stored = readItem(SESSION_SCOPED.has(key) ? 'session' : 'local', VAR_PREFIX + key);
  return typeof stored === typeof fallback ? (stored as ClientVarValue<N>) : fallback;
}

export function setClientVar<N extends ClientVarName>(name: N, value: ClientVarValue<N>): void {
  if (isSettingClientVar(name)) {
    writeSettingClientVar(name, value as SettingClientVarValue<typeof name>); // the store emits (subscribeSettings)
    return;
  }
  const key: StoredClientVarName = name;
  writeItem(SESSION_SCOPED.has(key) ? 'session' : 'local', VAR_PREFIX + key, value);
  emit();
}

export const isSignedIn = (): boolean => snapshot.signedIn;
export const currentUserId = (): string | null => snapshot.userId;
/** A PIN of this app for the session's user is on this device. */
export const hasLocalPin = (): boolean => snapshot.hasLocalPin;
/** PIN_HasUnlocked: this tab unlocked or registered a PIN. */
export const hasUnlocked = (): boolean => snapshot.hasUnlocked;
/** The app start finished: the session status left `starting`. */
export const appReady = (): boolean => snapshot.appReady;

/** The location of the page, path and query: where an unlock returns (the status `locked`). */
export const currentLocation = (): string => `${window.location.pathname}${window.location.search}`;

/** PIN_Check (pin.ts pinCheck) and PIN_HasUnlocked, as the app-start PIN check reads them (startup.ts
    pinUnlockRedirect). */
function pinNeedOf(userId: string | null): PinNeed {
  if (!getClientVar('UBT_AppManager.PIN_Use')) return 'none';
  if (!hasPinOf(userId)) return 'register';
  return getClientVar('UBT_AppManager.PIN_HasUnlocked') ? 'none' : 'unlock';
}

/** The stored session, which the machine resolves into a status (app start, change of the session user). */
function storedSessionFacts(): SessionFacts {
  const userId = storedUserId();
  return { userId, pinNeed: pinNeedOf(userId), returnTo: currentLocation() };
}

/** Mock of the OutSystems session: a user id when signed in, null after a logout. The session status follows a change
    of the user (emit, machine.ts `userChanged`). */
export function setSignedInUser(userId: string | null): void {
  if (userId === null) removeItem('local', SESSION_KEY);
  else writeItem('local', SESSION_KEY, { userId });
  emit();
}

export function writePin(pin: StoredPin | null): void {
  if (pin === null) removeItem('local', PIN_KEY);
  else writeItem('local', PIN_KEY, pin);
  emit();
}

/** What the runtime does on logout: every client variable goes back to its default, except `*_IsPersistent`. */
export function clearClientVarsAfterLogout(): void {
  for (const kind of ['local', 'session'] as const) {
    for (const key of itemKeys(kind, VAR_PREFIX)) {
      const name = key.slice(VAR_PREFIX.length);
      if (!isStoredClientVarName(name) || !survivesLogout(name)) removeItem(kind, key);
    }
  }
  resetSettings(); // no server setting is `*_IsPersistent`
  emit();
}

/** The app start finished (appStartSteps.ts runAppStart): the session status leaves `starting` with the status of the
    stored session (machine.ts `appStartDone`). */
export function markAppReady(): void {
  sendSessionEvent({ type: 'appStartDone', ...storedSessionFacts() });
}

/** Forgets the in-memory state, as a new page load does (storage is kept): the session status is `starting` again. For
    tests and the app-start reset. */
export function reloadSessionState(): void {
  resetSessionStatus();
  emit();
}

export function useShellState(): ShellState {
  return useSyncExternalStore(subscribe, getShellState);
}

export function useClientVar<N extends ClientVarName>(name: N): ClientVarValue<N> {
  return useSyncExternalStore(subscribe, () => getClientVar(name));
}
