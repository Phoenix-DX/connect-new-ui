import { delay } from 'msw';
import { latency } from './scenarioParams';

/* The review switches ?mock=<scenario>&latency=<ms> are read in scenarioParams.ts (kept apart so that the entry does not
   pull MSW); the mock handlers import them from here. */
export { latency, scenario } from './scenarioParams';
export const mockDelay = () => delay(latency());

/* The `empty` scenario: every OutSystems list ({ List: [...] }) emptied, the rest unchanged. */
export const emptyLists = (v: unknown): unknown =>
  Array.isArray(v)
    ? []
    : v && typeof v === 'object'
      ? Object.fromEntries(
          Object.entries(v).map(([k, x]) => [k, k === 'List' && Array.isArray(x) ? [] : emptyLists(x)]),
        )
      : v;
