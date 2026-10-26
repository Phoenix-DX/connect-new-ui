import { log } from '@/platform/log/log';
import { isFlagKey } from './resolve';
import { getOverrideValues, setOverrideValues } from './store';
import type { FlagKey, FlagValues } from './types';

/* Flag overrides for tests and reviews (plan v2 §3.1): `?ff=Key:on,Other:off` (a key alone is on) and the flag panel
   (`?ffpanel=1`, FlagPanel.tsx), kept for the tab (sessionStorage). Only dev, mock and demo builds use them: main.tsx and
   AppFrame call them behind FLAG_OVERRIDES_BUILT (platform/config), and the app's other imports of this module are
   test helpers (setFlag of flags.ts), so a production build drops it. */

const STORAGE_KEY = 'ff:overrides';
const TRUE_TEXTS = ['on', 'true', '1', 'yes'];

/** The value of an override text: on, true, 1 or yes (any case) is true; any other text is false. */
export const parseFlagText = (text: string): boolean => TRUE_TEXTS.includes(text.toLowerCase());

/** The overrides kept for the tab. Values of earlier builds are texts (on, off). */
function storedOverrides(): Partial<FlagValues> {
  const values: Partial<FlagValues> = {};
  try {
    const stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? '{}') as unknown;
    if (typeof stored !== 'object' || stored === null) return values;
    for (const [name, value] of Object.entries(stored)) {
      if (!isFlagKey(name)) continue;
      if (typeof value === 'boolean') values[name] = value;
      else if (typeof value === 'string') values[name] = parseFlagText(value);
    }
  } catch {
    /* no storage or a broken value: no override */
  }
  return values;
}

function persist(values: Partial<FlagValues>): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(values));
  } catch {
    /* private mode */
  }
}

function apply(values: Partial<FlagValues>): void {
  setOverrideValues(values);
  persist(values);
}

/** At the page start (main.tsx): the overrides kept for the tab, then the ones of `?ff=`. */
export function initFlagOverrides(): void {
  const values = storedOverrides();
  const query = new URL(window.location.href).searchParams.get('ff');
  if (query)
    for (const pair of query.split(',')) {
      const [name, text] = pair.split(':');
      if (!name) continue;
      if (isFlagKey(name)) values[name] = parseFlagText(text ?? 'on');
      else log.warn(`?ff= names ${name}, which is not a flag of the registry (platform/flags/registry.ts)`);
    }
  apply(values);
}

/** Overrides one flag; null removes its override. Dev and demo builds only (the flag panel, tests). */
export function setFlagOverride(key: FlagKey, value: boolean | null): void {
  const others = Object.entries(getOverrideValues()).filter(([name]) => name !== key);
  apply(Object.fromEntries(value === null ? others : [...others, [key, value]]));
}

/** Removes every override (test helpers). */
export function clearFlagOverrides(): void {
  apply({});
}
