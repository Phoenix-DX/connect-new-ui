import { readItem, removeItem, writeItem } from '@/platform/storage/storage';

/* Server settings of the app, typed (plan v2 §3.2). AppManager_SynchAppContext(Internal) fills them from
   AppManager_ClientCache (AM:4939-5120; platform/bootstrap/startup.ts synchAppContext). The original keeps them in
   UBT_AppManager client variables: their OutSystems names are in legacy/os/clientVarNames.ts, and getClientVar reads
   this store for those names.
   Persistence is the one of the client variables (decision U5): localStorage, so a reload keeps the last server values
   (also when SynchAppContext fails with a communication error), and a logout resets them to the defaults (session.ts
   clearClientVarsAfterLogout). Each read reads the storage, as getClientVar does. */

export interface Settings {
  /** PIN_Use: the app asks for a PIN (PIN_Check). */
  'pin.enabled': boolean;
  /** PIN_SessionInactivity_Use: the inactivity lock is on. */
  'pin.inactivity.enabled': boolean;
  /** PIN_SessionInactivity_Seconds: seconds without activity before the lock. */
  'pin.inactivity.seconds': number;
  /** PIN_SessionInactivity_Navigate: on timeout, a full page load of PINUnlock instead of the lock in place. */
  'pin.inactivity.navigate': boolean;
  /** PIN_EnforceOnReady. */
  'pin.enforceOnReady': boolean;
  /** PIN_EnableFingerprint. */
  'pin.fingerprint': boolean;
  /** OutSystems_Environment: the environment name (AppManager_ClientCache.Environment), shown by the Version block. */
  'app.environment': string;
  /** MinNativeAppVersion. */
  'app.minNativeVersion': string;
  /** MinWebViewVersion_Chrome. */
  'app.minWebViewChrome': string;
  /** MinWebViewVersion_Safari. */
  'app.minWebViewSafari': string;
  /** AzureInsights_Use. */
  'insights.enabled': boolean;
}

export type SettingKey = keyof Settings;

/** The compiled defaults of the client variables: the type defaults false, 0 and "" (migration/shell/client-variables.md). */
const DEFAULTS: Readonly<Settings> = {
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
};

const KEYS = Object.keys(DEFAULTS) as SettingKey[];
const STORAGE_KEY = 'settings';
const listeners = new Set<() => void>();

function storedValues(): Partial<Record<SettingKey, unknown>> {
  const stored = readItem('local', STORAGE_KEY);
  return typeof stored === 'object' && stored !== null ? stored : {};
}

/** A stored value of the wrong type gives the default, as getClientVar does. */
function valueOf<K extends SettingKey>(stored: Partial<Record<SettingKey, unknown>>, key: K): Settings[K] {
  const value = stored[key];
  return typeof value === typeof DEFAULTS[key] ? (value as Settings[K]) : DEFAULTS[key];
}

export function getSetting<K extends SettingKey>(key: K): Settings[K] {
  return valueOf(storedValues(), key);
}

/** All settings, for code outside React. */
export function getSettings(): Settings {
  const stored = storedValues();
  return Object.fromEntries(KEYS.map((key) => [key, valueOf(stored, key)])) as unknown as Settings;
}

function emit(): void {
  for (const listener of listeners) listener();
}

/** Writes some settings (AppManager_SynchAppContext writes all of them) and tells the listeners. */
export function setSettings(values: Partial<Settings>): void {
  writeItem('local', STORAGE_KEY, { ...getSettings(), ...values });
  emit();
}

/** Back to the defaults: the runtime resets the client variables on a logout (AM:4176-4194). */
export function resetSettings(): void {
  removeItem('local', STORAGE_KEY);
  emit();
}

export function subscribeSettings(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
