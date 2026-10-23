/* Feature flags (plan v2 §3.1): the registry, the resolved values and their readers. Pages, hooks and containers read a
   flag with useFlag; code outside React with flagValue. The overrides (initFlagOverrides, setFlagOverride, FlagPanel)
   are for dev and demo builds only: callers keep them behind FLAG_OVERRIDES_BUILT (platform/config). */
export { flagValue } from './store';
export { useFlag } from './useFlag';
export { fetchFlags, loadFlags } from './server';
export { clearFlagOverrides, initFlagOverrides, setFlagOverride } from './overrides';
export { FlagPanel } from './FlagPanel';
export type { FlagKey, FlagValues } from './types';
