import { log } from '@/platform/log/log';
import { APP_ID } from '@/platform/navigation/paths';

/* NetworkDetection (knowledge/shell-facts.md U11), ported 1:1 from its JavaScript node
   NetworkDetection_OnApplicationReady.NetworkDetection3JS ("ND" = migration/shell/sources/NetworkDetection.controller.js):
   - one detector per page: a second start returns at once, the first caller wins (ND:646-648);
   - state `isOnline` starts null (ND:657) and the callbacks run only on a transition (definitelyOnline /
     definitelyOffline, ND:726-749); OnNetworkOnline / OnNetworkOffline call the user callback (ND:1037-1075, 995-1033);
   - the ping: native fetch GET of `status/network-ping.txt` + `d=<now>`, `cache: "no-store"`, an AbortController
     timeout of PingTimeout ms (10 000 when 0), ok = response.ok; one shared promise, so pings never run in parallel
     (rawPing / checkOnline, ND:665-722). The file is the TST one (`pong`, migration/runtime-sources/
     UBTConnect.status.network-ping.txt), served at the TST path in every build (app/public/UBTConnect/status/);
   - networkState(message): ping, then online / offline, then the pending-ping resolve (ND:751-778);
   - the browser's `online` / `offline` events on window decide at once, without a ping (ND:783-786);
   - a timer check every FrequencySeconds, only while the tab is visible (skipped, not delayed, when hidden), the next
     one scheduled after the previous ping settled (ND:791-820);
   - the initial check, async: DefineNetworkStateAsync("Initial") → networkState(" - Initial") (ND:824-826, 119, 155-160);
   - the override of the runtime's request factory (ND:828-862): a server call that answers (XHR `load`, any HTTP
     status) → online; `error` / `timeout` / `abort` → networkStateSync (validate with a ping). The clone's server calls
     are `fetch` POSTs to `/api/` (src/lib/api.ts, which looks fetch up per call), so the observer wraps fetch for those
     URLs only; it is installed only where a real network answers them (not with mocks, whose answers are no network).
   Not ported, no reader in the app: the client variables NetworkDetection_StatusIsOnline_IsPersistent (read only by
   NetworkDetection_Get_IsOnline and NetworkDetection_ShowCommunicationExceptionMessage, which the clone's mock sign-in
   does not run) and Offline_NetworkStatus_PendingPing_Check / _Message (0 readers, shell-facts U11); LogNetworkMessage
   goes to the debug log. The versioned URL (`getVersionedUrl`, a `?<hash>` the build adds) is not reproduced:
   `d=<now>` already makes every ping URL unique. */

/** `OS.Navigation.VersionedURL.getVersionedUrl("status/network-ping.txt")` from a screen of the module (ND:630). */
export const PING_URL = `/${APP_ID}/status/network-ping.txt`;
/** Both start-up calls pass 30 and 300 000 (AM:3019-3020, 7363-7384; shell-facts U11). */
export const FREQUENCY_SECONDS = 30;
export const PING_TIMEOUT_MS = 300_000;
/** `$parameters.PingTimeout || 10000` (ND:706). */
const FALLBACK_PING_TIMEOUT_MS = 10_000;

export interface PingResult {
  ok: boolean;
}

/** The part of the app's server calls the detector watches (ND:828-862). */
export interface ServerCallObserver {
  /** Object whose `fetch` the app calls (globalThis). */
  target: { fetch: typeof fetch };
  /** True for a URL of a server call (the API), false for everything else (the ping, files, embeds). */
  isServerCall: (url: string) => boolean;
}

export interface NetworkDetectionOptions {
  frequencySeconds?: number;
  pingTimeout?: number;
  pingUrl?: string;
  onOnline?: (() => void) | null;
  onOffline?: (() => void) | null;
  /** Watch server calls (production); null with mocks. */
  serverCalls?: ServerCallObserver | null;
}

export interface NetworkDetection {
  /** null until the first decision (ND:657). */
  readonly isOnline: boolean | null;
  checkOnline(): Promise<PingResult>;
  networkState(message: string): Promise<boolean | null>;
}

let active: (NetworkDetection & { stop(): void }) | null = null;

/** The running detector (`window.dx.Network`), or null before the start. */
export function networkDetection(): NetworkDetection | null {
  return active;
}

const urlOf = (input: RequestInfo | URL): string =>
  input instanceof Request ? input.url : input instanceof URL ? input.href : input;

const isAbort = (error: unknown) =>
  error instanceof DOMException && (error.name === 'AbortError' || error.name === 'TimeoutError');

/**
 * NetworkDetection_OnApplicationReady: starts the detector once per page. Returns the stop function (React effects,
 * tests); while a detector runs, another start returns a no-op stop, as the original returns early.
 */
export function startNetworkDetection({
  frequencySeconds = FREQUENCY_SECONDS,
  pingTimeout = PING_TIMEOUT_MS,
  pingUrl = PING_URL,
  onOnline = null,
  onOffline = null,
  serverCalls = null,
}: NetworkDetectionOptions = {}): () => void {
  if (active) return () => undefined;
  let stopped = false;
  let isOnline: boolean | null = null;
  let currentPing: Promise<PingResult> | null = null;
  let timer: ReturnType<typeof setTimeout> | undefined;

  const logNetworkMessage = (message: string) => {
    log.debug(`NetworkDetection: ${message}`, { isOnline });
  };

  /** rawPing + checkOnline (ND:665-722). The global fetch is looked up per ping (the original calls native fetch). */
  const checkOnline = (): Promise<PingResult> => {
    if (currentPing) return currentPing;
    const url = `${pingUrl}${pingUrl.includes('?') ? '&' : '?'}d=${String(Date.now())}`;
    const abort = new AbortController();
    const timeout = setTimeout(() => {
      abort.abort();
    }, pingTimeout || FALLBACK_PING_TIMEOUT_MS);
    currentPing = globalThis
      .fetch(url, { cache: 'no-store', signal: abort.signal })
      .then(
        (response) => ({ ok: response.ok }),
        () => ({ ok: false }),
      )
      .finally(() => {
        clearTimeout(timeout);
        currentPing = null;
      });
    return currentPing;
  };

  const definitelyOnline = (message?: string) => {
    if (stopped) return;
    const wasOnline = isOnline;
    isOnline = true;
    if (message) logNetworkMessage(message);
    if (wasOnline !== true) onOnline?.();
  };

  const definitelyOffline = (message: string) => {
    if (stopped) return;
    const wasOnline = isOnline;
    isOnline = false;
    logNetworkMessage(message);
    if (wasOnline !== false) onOffline?.();
  };

  /** networkState / networkStateSync (ND:751-778): the same steps; the pending-ping resolve has no reader here. */
  const networkState = async (message: string): Promise<boolean | null> => {
    const result = await checkOnline();
    if (result.ok) definitelyOnline(`From networkState: ${message}`);
    else definitelyOffline(`From networkState: ${message}`);
    return isOnline;
  };

  const onBrowserOnline = () => {
    definitelyOnline('Browser online event');
  };
  const onBrowserOffline = () => {
    definitelyOffline('Browser offline event');
  };
  window.addEventListener('online', onBrowserOnline);
  window.addEventListener('offline', onBrowserOffline);

  /** detect / detectNext (ND:791-820). */
  const detectNext = () => {
    if (stopped || frequencySeconds <= 0) return;
    timer = setTimeout(detect, frequencySeconds * 1000);
  };
  function detect() {
    if (document.visibilityState !== 'visible') {
      detectNext();
      return;
    }
    void checkOnline()
      .then((result) => {
        if (result.ok) definitelyOnline('Timer check online');
        else definitelyOffline('Timer check offline');
      })
      .finally(detectNext);
  }
  detectNext();

  // DefineNetworkStateAsync("Initial"): Message = " - " + Message (ND:119), not awaited
  void networkState(' - Initial');

  let restoreFetch: () => void = () => undefined;
  if (serverCalls) {
    const { target, isServerCall } = serverCalls;
    const original = target.fetch;
    const observed: typeof fetch = (input, init) => {
      const answer = Reflect.apply(original, target, [input, init]);
      if (!isServerCall(urlOf(input))) return answer;
      answer.then(
        () => {
          definitelyOnline('XHR load');
        },
        (error: unknown) => {
          // Do NOT assume offline: validate with a ping (ND:844-857)
          void networkState(isAbort(error) ? 'XHR abort' : 'XHR error');
        },
      );
      return answer;
    };
    target.fetch = observed;
    restoreFetch = () => {
      if (target.fetch === observed) target.fetch = original;
    };
  }

  const handle = {
    get isOnline() {
      return isOnline;
    },
    checkOnline,
    networkState,
    stop() {
      stopped = true;
      clearTimeout(timer);
      window.removeEventListener('online', onBrowserOnline);
      window.removeEventListener('offline', onBrowserOffline);
      restoreFetch();
      if (active === handle) active = null;
    },
  };
  active = handle;
  return () => {
    handle.stop();
  };
}
