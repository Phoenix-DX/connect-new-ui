import { useSyncExternalStore } from 'react';
import generated from './flags.generated.json';

/* Feature flags of the clone. Defaults come from the user's decisions (flags.py decide, then flags.py export).
   Override while testing: ?ff=NewHome:on,Legacy:off (kept for the session), or the flag panel (?ffpanel=1).
   Routes read flags only through useFlag / flagValue: never from storage or from a hard-coded constant. */
type FlagDef = { default: string; values: string[]; branches: string; routes: string[]; decision: string };
const DEFS = (generated as { flags: Record<string, FlagDef> }).flags;
const KEY = 'ff:overrides';
let overrides: Record<string, string> = {};
const listeners = new Set<() => void>();

export function initFlags() {
  try {
    overrides = JSON.parse(sessionStorage.getItem(KEY) ?? '{}') as Record<string, string>;
  } catch {
    overrides = {};
  }
  const q = new URL(window.location.href).searchParams.get('ff');
  if (q)
    for (const pair of q.split(',')) {
      const [k, v] = pair.split(':');
      if (k) overrides[k] = v ?? 'on';
    }
  persist();
}
function persist() {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(overrides));
  } catch {
    /* private mode */
  }
}
export function flagValue(name: string): string {
  if (!(name in DEFS)) console.warn(`[flags] ${name} is not a decided flag (flags.py decide + export)`);
  return overrides[name] ?? DEFS[name]?.default ?? 'off';
}
export const isOn = (name: string) => ['on', 'true', '1', 'yes'].includes(flagValue(name).toLowerCase());
export function setFlag(name: string, value: string | null) {
  overrides = Object.fromEntries(Object.entries(overrides).filter(([k]) => k !== name));
  if (value !== null) overrides[name] = value;
  persist();
  for (const l of listeners) l();
}
export const flagDefs = () => DEFS;
const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};
export function useFlag(name: string): string {
  return useSyncExternalStore(subscribe, () => flagValue(name));
}
export function useFlagOn(name: string): boolean {
  return useSyncExternalStore(subscribe, () => isOn(name));
}
