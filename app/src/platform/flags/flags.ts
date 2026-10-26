import { parseFlagText, setFlagOverride } from './overrides';
import { flagValue } from './store';
import { useFlag } from './useFlag';
import type { FlagKey } from './types';

/* Adapter for the readers of the flag store before P4-5. They keep their call (`useFlagOn('C2ExtendedShare')`,
   `isOn(…)`, and `setFlag(…)` in tests); the key is now a FlagKey of the registry, so a key that is not in the registry
   does not compile. A reader changes to useFlag or flagValue of the barrel (`@/platform/flags`) when its page moves. */

/** The value of a flag, outside React (flagValue). */
export const isOn = (key: FlagKey): boolean => flagValue(key);

/** The value of a flag, in a component (useFlag). */
export const useFlagOn = (key: FlagKey): boolean => useFlag(key);

/** Overrides a flag with a text value (on, true, 1, yes: on; any other text: off); null removes the override. Tests. */
export function setFlag(key: FlagKey, value: string | null): void {
  setFlagOverride(key, value === null ? null : parseFlagText(value));
}
