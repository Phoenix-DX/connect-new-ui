import { defaultFlags, FLAG_KEYS, resolveFlags } from './resolve';
import type { FlagKey, FlagValues } from './types';

/* The resolved flags of the page, for useSyncExternalStore (useFlag). Two layers on top of the registry defaults: the
   server values (server.ts loadFlags, an app-start step) and the overrides (overrides.ts: `?ff=` and the flag panel,
   compiled only when FLAG_OVERRIDES_BUILT is true). This module does not import overrides.ts, so a production build
   drops it. */

const DEFAULTS = defaultFlags();
let serverValues: Partial<FlagValues> = {};
let overrideValues: Partial<FlagValues> = {};
let resolved: FlagValues = DEFAULTS;
const listeners = new Set<() => void>();

/** Resolves again; tells the listeners only when a value changed (the snapshot keeps its identity otherwise). */
function update(): void {
  const next = resolveFlags(DEFAULTS, serverValues, overrideValues);
  if (FLAG_KEYS.every((key) => next[key] === resolved[key])) return;
  resolved = next;
  for (const listener of listeners) listener();
}

/** The value of one flag, for code outside React (pages, hooks and containers use useFlag). */
export const flagValue = (key: FlagKey): boolean => resolved[key];

/** Every flag (the flag panel). The object changes only when a value changes. */
export const getFlags = (): Readonly<FlagValues> => resolved;

/** The server values (server.ts). They replace the ones before. */
export function setServerFlags(values: Partial<FlagValues>): void {
  serverValues = { ...values };
  update();
}

/** The current overrides (overrides.ts). */
export const getOverrideValues = (): Partial<FlagValues> => overrideValues;

/** The overrides (overrides.ts). They replace the ones before. */
export function setOverrideValues(values: Partial<FlagValues>): void {
  overrideValues = { ...values };
  update();
}

export function subscribeFlags(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
