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
import { APP_ID } from '@/platform/navigation/paths';
import { resetSettings, subscribeSettings } from '@/platform/settings';
import { itemKeys, readItem, removeItem, writeItem } from '@/platform/storage/storage';

/* The mock session store (decision U5): signed-in user, local PIN (hashed), client variables, and the in-memory flags
   of the running page. Components read it with useShellState / useClientVar (useSyncExternalStore).
   The server settings (PIN_Use, ...) are in the typed store platform/settings: getClientVar, setClientVar and
   useClientVar reach them through the adapter legacy/os/clientVarNames.ts. */
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
let appReady = false;
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

function buildSnapshot(): ShellState {
  const userId = storedUserId();
  const pin = readPin();
  return {
    signedIn: userId !== null,
    userId,
    // PIN_Get(GetUserId, AppId): a PIN of another user or app does not count
    hasLocalPin: pin !== null && pin.userId === userId && pin.appId === APP_ID,
    locked: getClientVar('UBT_AppManager.PIN_IsLocked'),
    hasUnlocked: getClientVar('UBT_AppManager.PIN_HasUnlocked'),
    appReady,
  };
}

function emit() {
  snapshot = buildSnapshot();
  for (const l of listeners) l();
}

/* A settings change is a client variable change of the original: the listeners of this store hear it, as the readers
   of useClientVar and the Popup widget (usePopupWidget re-renders on every client variable change) did before. */
subscribeSettings(emit);

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

/** Mock of the OutSystems session: a user id when signed in, null after a logout. */
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

export function markAppReady(): void {
  appReady = true;
  emit();
}

/** Forgets the in-memory state, as a new page load does (storage is kept). For tests and the app-start reset. */
export function reloadSessionState(): void {
  appReady = false;
  emit();
}

export function useShellState(): ShellState {
  return useSyncExternalStore(subscribe, getShellState);
}

export function useClientVar<N extends ClientVarName>(name: N): ClientVarValue<N> {
  return useSyncExternalStore(subscribe, () => getClientVar(name));
}
