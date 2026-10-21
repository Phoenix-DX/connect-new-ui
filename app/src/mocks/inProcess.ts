import { getResponse, type RequestHandler } from 'msw';
import { handlers } from './handlers';

/* In-process mocks for the demo build (user, 2026-10-16: a shareable PWA with mock data). The demo registers the app
   service worker, and a scope has room for one worker only, so MSW's worker cannot run there. The same MSW handlers
   answer from inside the page instead: `fetch` is wrapped and every request goes through msw's getResponse first.
   src/lib/api.ts looks fetch up per call, so the wrapper is seen by every API adapter.
   Behaviour kept from the worker (`onUnhandledRequest: 'bypass'`): unhandled requests and `passthrough()` go to the
   real network; `HttpResponse.error()` rejects like a network error; `delay()` and the scenario params
   (`?mock=loading|empty|error`, `latency`) work unchanged because they run inside the handlers.
   Dev and the plain mock build keep the MSW worker (src/main.tsx): parity depends on it. */

function abortReason(signal: AbortSignal): Error {
  const reason: unknown = signal.reason;
  return reason instanceof Error ? reason : new DOMException('The operation was aborted.', 'AbortError');
}

/** Rejects when the request is aborted, as a real fetch does ("loading" scenarios never answer). */
function untilAborted<T>(work: Promise<T>, signal: AbortSignal): Promise<T> {
  if (signal.aborted) return Promise.reject(abortReason(signal));
  return new Promise<T>((resolve, reject) => {
    const onAbort = () => {
      reject(abortReason(signal));
    };
    signal.addEventListener('abort', onAbort, { once: true });
    void work.then(resolve, reject).finally(() => {
      signal.removeEventListener('abort', onAbort);
    });
  });
}

/** A fetch that answers from `list` first and falls back to `passthrough`. */
export function createMockFetch(passthrough: typeof fetch, list: readonly RequestHandler[] = handlers): typeof fetch {
  return async (input, init) => {
    const request = new Request(input, init);
    const mocked = await untilAborted(getResponse([...list], request.clone()), request.signal);
    if (mocked === undefined || mocked.headers.get('x-msw-intention') === 'passthrough') return passthrough(request);
    // HttpResponse.error(): the worker turns it into a network error ("Failed to fetch"), so does this
    if (mocked.type === 'error') throw new TypeError('Failed to fetch', { cause: mocked });
    return mocked;
  };
}

/** Wraps the global fetch once; call before the first API request. */
export function installInProcessMocks(target: { fetch: typeof fetch } = globalThis): void {
  target.fetch = createMockFetch(target.fetch.bind(target));
}
