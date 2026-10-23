import { log } from '@/platform/log/log';
import { FLAGS } from './registry';
import { FLAG_KEYS } from './resolve';
import { setServerFlags } from './store';
import type { FlagValues } from './types';

/* The server values of the flags (plan v2 §3.1). In OutSystems each flag is a per-user check on the server (the GetHas…
   helpers, migration/knowledge/feature-flag-helpers.md). Mock phase: the server answers the registry defaults, without a
   call. Production (R5 a): one call through the BFF, cached with TanStack Query and persisted for offline use (ADR-10);
   it comes with the BFF. */

/** The server value of each flag whose source is `server`. Mock phase: its registry default. */
export function fetchFlags(): Promise<Partial<FlagValues>> {
  const values: Partial<FlagValues> = {};
  for (const key of FLAG_KEYS) if (FLAGS[key].source === 'server') values[key] = FLAGS[key].default;
  return Promise.resolve(values);
}

/** The app-start step `fetchFlags` (platform/bootstrap/appStartSteps.ts): the server values go to the store. On a
    failure the store keeps the values it has: the last known ones, else the defaults (plan v2 §3.1 rule 3; persisted
    values come with the production call). `fetch` is for tests. */
export async function loadFlags(fetch: () => Promise<Partial<FlagValues>> = fetchFlags): Promise<void> {
  try {
    setServerFlags(await fetch());
  } catch (e) {
    log.warn('fetchFlags failed: the flags keep their last known values', e);
  }
}
