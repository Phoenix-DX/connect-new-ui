import { useSyncExternalStore } from 'react';
import { getSetting, subscribeSettings, type SettingKey, type Settings } from './store';

/** One setting, for pages, hooks and containers. The component renders again when the setting changes. */
export function useSetting<K extends SettingKey>(key: K): Settings[K] {
  return useSyncExternalStore(subscribeSettings, () => getSetting(key));
}
