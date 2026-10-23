import { FLAGS } from './registry';
import type { FlagKey, FlagValues } from './types';

/** The keys of the registry, in its order. */
export const FLAG_KEYS = Object.keys(FLAGS) as readonly FlagKey[];

export const isFlagKey = (name: string): name is FlagKey => Object.hasOwn(FLAGS, name);

/** The default value of every flag (registry `default`). */
export function defaultFlags(): FlagValues {
  return Object.fromEntries(FLAG_KEYS.map((key) => [key, FLAGS[key].default])) as FlagValues;
}

/** The value of every flag. Precedence: default < server < override (plan v2 §3.1). A missing value, or a key that is
    not in the registry, leaves the value below it. */
export function resolveFlags(
  defaults: FlagValues,
  server: Partial<FlagValues>,
  overrides: Partial<FlagValues>,
): FlagValues {
  const resolved = { ...defaults };
  for (const key of FLAG_KEYS) {
    const value = overrides[key] ?? server[key];
    if (value !== undefined) resolved[key] = value;
  }
  return resolved;
}
