import createClient from 'openapi-fetch';
import type { paths } from '@/api/schema';
import { config } from '@/platform/config/config';
import { log } from '@/platform/log/log';
import {
  CONNECTION_TIMED_OUT,
  CommunicationException,
  ViewHasChangedException,
  exceptionOfAnswer,
} from '@/legacy/os/os-exceptions';

/* Typed caller for server-side actions, typed from the API contract (src/api/openapi.yaml → npm run gen:api).
   One endpoint per OutSystems action, body = the inputs with their OutSystems names, answer = { data: <outputs> }:
     server and service actions   POST /api/<Module>/<Action>           callAction('Module', 'ActionName', inputs)
     data actions and aggregates  POST /api/<Module>/<Owner>/<Action>   callAction('Module', 'Owner/DataActionName', inputs)
   (<Owner> = the screen or block that defines the data action: same-named data actions of different blocks differ).
   Today MSW answers with mock data; later the backend implements the same contract.
   Screens never call fetch directly: they call an adapter in src/screens/<Screen>/api.ts.
   Errors are the OutSystems exceptions of src/lib/os-exceptions.ts, as the runtime's server call raises them
   (migration/runtime-sources/OutSystems.js:3):
     no answer within the module's timeout           CommunicationException 'The connection has timed out' (onTimeout)
     request failed (fetch rejects)                 CommunicationException 'Request failed with an error'  (onError)
     error answer { error, exception, specificType } that exception (UserException, SecurityException, ...)
     404 without an exception                        ViewHasChangedException
     any other answer that is not ok                 CommunicationException 'Request failed with status <N>' */
/** Every endpoint of the contract. */
export type ActionPath = Extract<keyof paths, `/api/${string}/${string}`>;
/** The endpoint of callAction(module, action): action is 'Action' or, for data actions, 'Owner/Action'. */
export type PathOf<M extends string, A extends string> = Extract<ActionPath, `/api/${M}/${A}`>;
type Post<P extends ActionPath> = paths[P] extends { post: infer O } ? O : never;
/** Inputs of an action, as the contract describes them. */
export type ActionInputs<P extends ActionPath> =
  Post<P> extends { requestBody: { content: { 'application/json': infer B extends object } } }
    ? B
    : Record<string, never>;
/** Outputs of an action (the `data` of its answer), as the contract describes them. */
export type ActionOutputs<P extends ActionPath> =
  Post<P> extends { responses: { 200: { content: { 'application/json': { data: infer D } } } } } ? D : never;
type ModuleOf<P> = P extends `/api/${infer M}/${string}` ? M : never;
/** The modules of the contract. An endpoint's module is the module of the original endpoint
    (screenservices/<Module>/...), i.e. the module whose controller makes the call. */
export type ContractModule = ModuleOf<ActionPath>;

/* Server request timeout, in seconds, of the module that makes the call (Module > Server Request Timeout, compiled as
   the controller's defaultTimeout; every screen and block controller's getDefaultTimeout returns its module's value).
   The runtime takes applicationDefaultTimeout || the call's own timeout || the controller's getDefaultTimeout()
   (getEffectiveTimeoutForServerCall, OutSystems.js:17 offset 523471) for server actions (innerCallServerAction, same
   place), data actions (innerCallDataAction, offset 532649) and aggregates (innerCallAggregate, offset 531787).
   On TST applicationDefaultTimeout is 0 (runtime-sources/moduleinfo.json), no call sets its own timeout (no
   withTimeout in the compiled code; every callDataAction / callAggregate* passes `undefined`), so the module value
   decides. A timeout of 0 would mean none (OutSystems.js:3 offset 71295, `if(r)`). Sources (o: runtime-sources/,
   s: screens/<S>/analysis/sources/): */
export const SERVER_REQUEST_TIMEOUT: Readonly<Record<ContractModule, number>> = {
  Connect2_Assemble_MUI: 10, // s:AssembleEvents raw/Connect2_Assemble_MUI.controller.js:1745
  Connect2_LegacyShared: 10, // o:Connect2_LegacyShared.controller.js:7976
  Connect2_OrbitMobile_MUI: 10, // s:EventDetail raw/Connect2_OrbitMobile_MUI.controller.js:8742
  Connect2_MyBookmarks_MUI: 10, // s:BookmarksByGroup pretty/Connect2_MyBookmarks_MUI.controller.js:276
  OrbitPassportScanC2: 10, // o:OrbitPassportScanC2.controller.js:161
  UBTConnect: 20, // s:BookmarksByGroup raw/UBTConnect.controller.js:18597
  UBTConnect_EmbedFeed: 10, // s:HomeFeed pretty/UBTConnect_EmbedFeed.controller.js:161
  UBTConnect_EmbedMyEntertaining: 10, // o:UBTConnect_EmbedMyEntertaining.controller.js:11
  UBTConnect_Notes_MCS: 10, // o:UBTConnect_Notes_MCS.controller.js:883
  UBTConnect_Bookmarks_MCS: 10, // o:UBTConnect_Bookmarks_MCS.controller.js:1218
  UBTConnect_Utils: 10, // s:BookmarksByGroup pretty/UBTConnect_Utils.controller.js:5552
  UBT_AppManager: 10, // s:BookmarksByGroup raw/UBT_AppManager.controller.js:8579
};

interface CallLog {
  module: string;
  /** the OutSystems action name (last path segment), as in analysis/calls.json */
  action: string;
  /** screen or block owning a data action / aggregate */
  owner?: string;
  inputNames: string[];
  phase: string;
  t: number;
}
declare global {
  interface Window {
    __osCalls?: CallLog[];
    __osPhase?: string;
  }
}

// fetch is looked up per call (the default captures it at import, before MSW patches it in the browser and in tests)
const client = createClient<paths>({
  baseUrl: config.apiBaseUrl || window.location.origin,
  fetch: (request) => globalThis.fetch(request),
});
type UntypedPost = (
  path: string,
  init: { body: unknown; signal: AbortSignal },
) => Promise<{ data?: unknown; error?: unknown; response: Response }>;

export async function callAction<M extends ContractModule, A extends string>(
  module: M,
  action: A,
  inputs: ActionInputs<PathOf<M, A>>,
): Promise<ActionOutputs<PathOf<M, A>>> {
  // read by parity_check.cjs (call parity): which action, with which input names, in which phase (load or a plan step)
  const slash = action.lastIndexOf('/');
  const owner = slash >= 0 ? action.slice(0, slash) : undefined;
  (window.__osCalls ??= []).push({
    module,
    action: action.slice(slash + 1),
    owner,
    inputNames: Object.keys(inputs).sort(),
    phase: window.__osPhase ?? 'load',
    t: Math.round(performance.now()),
  });
  const timeout = startTimeout(SERVER_REQUEST_TIMEOUT[module], `${module}/${action}`, owner !== undefined);
  let result: Awaited<ReturnType<UntypedPost>>;
  try {
    // the only cast: openapi-fetch cannot type a path built from generic parts; callAction's signature carries the types
    const post = (client.POST as unknown as UntypedPost)(`/api/${module}/${action}`, {
      body: inputs,
      signal: timeout.signal,
    });
    result = await Promise.race([post, timeout.reached]);
  } catch (error) {
    if (timeout.raised(error)) throw error;
    throw new CommunicationException('Request failed with an error');
  } finally {
    timeout.clear();
  }
  if (!result.response.ok) throw failedCall(result.response.status, result.error);
  return (result.data as { data: ActionOutputs<PathOf<M, A>> }).data;
}

/** The runtime's request timeout (OutSystems.js:3 offset 71295): a timer of `seconds` from the send; when it fires
    before the answer is in, the request is aborted and the call raises CommunicationException 'The connection has
    timed out' (onTimeout, offset 74168), after the runtime's trace line (innerCallServerAction / callServerDataSource,
    OutSystems.js:17). The answer clears the timer (onFinish → clearTimeout). TST is published with debugEnabled
    (runtime-sources/UBTConnect.appDefinition.js:9), so its timer first asks the server whether the Service Studio
    debugger holds the request (GET moduleservices/checkrequestsuspended, offset 70947) and times out when it does
    not; the clone has no debugger, so it times out when the timer fires. */
function startTimeout(seconds: number, endpoint: string, isDataFetch: boolean) {
  const abort = new AbortController();
  let exception: CommunicationException | undefined;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const reached = new Promise<never>((_, reject) => {
    if (!seconds) return;
    timer = setTimeout(() => {
      const doing = isDataFetch ? 'fetching this screen data' : 'executing this server action';
      log.debug(`The timeout of ${seconds}s was reached while ${doing}.`, { endpoint });
      exception = new CommunicationException(CONNECTION_TIMED_OUT);
      // settle the race first, so the aborted fetch's own rejection can never win it
      reject(exception);
      abort.abort();
    }, seconds * 1000);
  });
  return {
    signal: abort.signal,
    reached,
    raised: (error: unknown) => exception !== undefined && error === exception,
    clear: () => {
      clearTimeout(timer);
    },
  };
}

/** The exception of an answer that is not ok (OutSystems.js:3): the server's own exception, else 404 →
    ViewHasChangedException, else CommunicationException. */
function failedCall(status: number, body: unknown): Error {
  const raised = exceptionOfAnswer(body);
  if (raised) return raised;
  if (status === 404) return new ViewHasChangedException();
  return new CommunicationException(`Request failed with status ${status}`);
}
