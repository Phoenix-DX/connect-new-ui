import { delay } from 'msw';

/* Reviewers switch mock data without code changes:
   ?mock=<scenario>&latency=<ms> in the URL (remembered in sessionStorage).
   Each screen documents its scenarios in its mocks.ts (e.g. "real", "empty", "error"). */
function param(name: string, fallback: string): string {
  const url = new URL(window.location.href).searchParams.get(name);
  if (url !== null) sessionStorage.setItem(`mock:${name}`, url);
  return sessionStorage.getItem(`mock:${name}`) ?? fallback;
}
export const scenario = () => param('mock', 'real');
/* "loading" (or latency=infinite) never answers, to reproduce the captured loading state; callAction then times out
   after the module's request timeout, as on TST (SERVER_REQUEST_TIMEOUT in src/lib/api.ts) */
export const latency = (): number | 'infinite' => {
  const v = param('latency', '600');
  return v === 'infinite' || scenario() === 'loading' ? 'infinite' : Number(v);
};
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
