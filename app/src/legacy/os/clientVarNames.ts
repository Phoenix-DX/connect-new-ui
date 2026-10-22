import { getSetting, setSettings, type SettingKey, type Settings } from '@/platform/settings';

/* OutSystems names of the server settings: the UBT_AppManager client variables that AppManager_SynchAppContext fills
   (AM:4939-5120), mapped to the keys of the typed settings store (platform/settings). The parity tools and the specs
   use these names.
   Adapter: the readers of these client variables keep their call (`getClientVar('UBT_AppManager.PIN_Use')`,
   `useClientVar`, and `setClientVar` in tests and stories). platform/session/session.ts sends these names here, and the
   functions below read and write the store. A reader changes to `getSetting` or `useSetting` when its page moves. */
export const SETTING_CLIENT_VARS = {
  'UBT_AppManager.AzureInsights_Use': 'insights.enabled',
  'UBT_AppManager.OutSystems_Environment': 'app.environment',
  'UBT_AppManager.PIN_Use': 'pin.enabled',
  'UBT_AppManager.PIN_SessionInactivity_Use': 'pin.inactivity.enabled',
  'UBT_AppManager.PIN_SessionInactivity_Seconds': 'pin.inactivity.seconds',
  'UBT_AppManager.PIN_SessionInactivity_Navigate': 'pin.inactivity.navigate',
  'UBT_AppManager.PIN_EnableFingerprint': 'pin.fingerprint',
  'UBT_AppManager.PIN_EnforceOnReady': 'pin.enforceOnReady',
  'UBT_AppManager.MinNativeAppVersion': 'app.minNativeVersion',
  'UBT_AppManager.MinWebViewVersion_Chrome': 'app.minWebViewChrome',
  'UBT_AppManager.MinWebViewVersion_Safari': 'app.minWebViewSafari',
} as const satisfies Record<string, SettingKey>;

export type SettingClientVarName = keyof typeof SETTING_CLIENT_VARS;
export type SettingClientVarValue<N extends SettingClientVarName> = Settings[(typeof SETTING_CLIENT_VARS)[N]];

export const isSettingClientVar = (name: string): name is SettingClientVarName =>
  Object.hasOwn(SETTING_CLIENT_VARS, name);

/** The value of a setting, read by its OutSystems name. */
export function readSettingClientVar<N extends SettingClientVarName>(name: N): SettingClientVarValue<N> {
  return getSetting(SETTING_CLIENT_VARS[name]);
}

/** Writes a setting by its OutSystems name. */
export function writeSettingClientVar<N extends SettingClientVarName>(name: N, value: SettingClientVarValue<N>): void {
  const values: Partial<Settings> = {};
  values[SETTING_CLIENT_VARS[name]] = value;
  setSettings(values);
}
