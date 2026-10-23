import { useSyncExternalStore } from 'react';
import { flagValue, subscribeFlags } from './store';
import type { FlagKey } from './types';

/** One flag, for pages, hooks and containers (components get it as a prop: plan v2 §3.1 rule 1). The component
    renders again when the flag changes. */
export function useFlag(key: FlagKey): boolean {
  return useSyncExternalStore(subscribeFlags, () => flagValue(key));
}
