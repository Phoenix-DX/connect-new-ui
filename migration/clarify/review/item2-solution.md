# Item 2: proposal for the failed data calls in React (2026-10-28)

Proposal for the user to approve. No code changed. Facts come from `item2-fetch-errors.md` (E1–E8, D1–D14), the
compiled TST code (`tst_source.py`, `migration/runtime-sources/`, `migration/shell/sources/`) and the React code.
"ACF" = `migration/shell/sources/UBTConnect.App_Common.controller.js`; "UC" = `migration/runtime-sources/UBTConnect.controller.js`;
"OS.js" = `migration/runtime-sources/OutSystems.js` (minified, cited by function name).

## 1. Summary

- One central place turns a failed query into the flow-handler behaviour: a subscription on the TanStack
  `QueryCache` in `platform/feedback/flowErrors.ts`, installed once by `main.tsx`. Every failed fetch of every query
  goes to `raiseToFlowHandler`, once per failed fetch. This is what the OutSystems runtime does for a data action
  (E1: `executeDataFetchAction` → `handleError`; OS.js `safeExecuteClientAction` → `handleError` for an unhandled
  action error).
- A query that a flow awaits itself (`refetch()`, `fetchQuery`) opts out with `meta: { errorFlow: 'caller' }`. This
  is the OutSystems "Refresh inside an action that has its own Handle Error".
- `raiseToFlowHandler` becomes the exact App_Common handler. The ignore step comes first (E5). Then come the four
  branches in the compiled order, with the new "NoteCommunicationError" test (E4). The system-exception step is last
  (E6, open).
- `showCommunicationExceptionMessage` adds `navigator.onLine` (E7).
- The per-hook `useFetchErrorToFlowHandler` and the two hand-written copies (D13) go away. Pages and hooks do nothing
  for a failed fetch; the query status still drives the skeleton and the `list-error` classes.
- `meta.errorLog` stays as it is (a log, in `api/client/queryClient.ts`).
- 13 of the 14 D items change behaviour (they show the message TST shows, or stop showing one TST ignores); D14 is a
  structure change only.

## 2. Design

### 2.1 Responsibilities

| Responsibility | OutSystems (TST) | React: where | Evidence |
|---|---|---|---|
| A fetch that no action awaits fails → the screen or block `handleError` → the flow handler | Runtime `executeDataFetchAction`: `t.model.flush(), t.handleError(e)`; blocks delegate to the screen controller | `installQueryErrorsToFlowHandler(queryClient)` in `platform/feedback/flowErrors.ts`, installed in `main.tsx` | E1, E3; OS.js `executeDataFetchAction`; `main.tsx:23` (`connectDialogs()` is the same kind of wiring) |
| A fetch that an action awaits fails → the action's Handle Error nodes; without them → `handleError` | `Refresh Query` inside a client action; OS.js `safeExecuteClientAction` = `tryCatchFinally(action, e => this.handleError(e), flush)` | The flow keeps its `try/catch` and marks the query `meta: { errorFlow: 'caller' }`; a flow without a handler leaves the default (`'screen'`) | ShareObject `_onParametersChanged$Action` (:946-966, no Handle Error); `useMessageList.ts:116-124` |
| Ignore an ignorable error | `OS.ErrorHandling.ignoreError` at the start of the handler | First line of `raiseToFlowHandler` | E5; ACF:24-26 |
| The four branches and their texts | App_Common `OnException` | `raiseToFlowHandler` (`legacy/os/exceptions.ts`) | E4; ACF:31-117 |
| The communication message rule | `ShowCommunicationExceptionMessage`, JS node `CheckIsOnlineNow` | `showCommunicationExceptionMessage` (`platform/feedback/exceptionMessages.ts`) | E7; UC:16110-16114, UC:16155-16157 |
| A system exception that is not ignorable | `throw ex` → runtime error page `_error.html` | Open point (section 5.1) | E6; ACF:119-125 |
| The block's own log of a failed data action | Block code | `meta.errorLog` → `logQueryError` (`api/client/queryClient.ts:6-9`), unchanged | D4, D5 |
| Skeleton and error classes | `dataFetchStatus` of the aggregate or data action, flushed before `handleError` | The query status (`isError`, `data === undefined`) in the hook, unchanged | E1 (`flush` then `handleError`) |

Mutations are not touched: an action that calls a server action keeps its `try/catch` with `raiseBubbledToFlowHandler`
or `raiseToFlowHandler` (B4 App_Services F1, F6). The `MutationCache` gets no subscription.

### 2.2 Public API (sketches)

`api/client/queryClient.ts` owns the vocabulary of `meta` (it already reads `meta.errorLog`):

```ts
// api/client/queryClient.ts
declare module '@tanstack/react-query' {
  interface Register { queryMeta: QueryMeta }
}
/** What happens when a fetch of this query fails. */
export interface QueryMeta {
  /** A warning logged with the error: the block's own log of its failed data action. */
  errorLog?: string;
  /** 'screen' (default): no flow awaits the fetch. The error goes to the flow handler, as the screen's handleError does.
      'caller': a flow awaits the fetch (refetch(), fetchQuery) and tests the error itself, as an action with Handle Error. */
  errorFlow?: 'screen' | 'caller';
}
```

`platform/feedback/flowErrors.ts` (platform may import `api/` and `legacy/os/`; it needs only the type of the client):

```ts
// platform/feedback/flowErrors.ts
import { CancelledError, type QueryClient } from '@tanstack/react-query';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';

/** A failed fetch of a query goes to the flow handler, once per failed fetch (OutSystems: model flush, then the
    screen's handleError, E1). A query with meta.errorFlow 'caller' is handled by the flow that awaits it. */
export function installQueryErrorsToFlowHandler(client: QueryClient): () => void {
  return client.getQueryCache().subscribe((event) => {
    if (event.type !== 'updated' || event.action.type !== 'error') return;
    const { error } = event.action;
    if (error instanceof CancelledError) return; // a cancelled fetch is not a failed fetch
    if (event.query.meta?.errorFlow === 'caller') return;
    raiseToFlowHandler(error);
  });
}
```

`legacy/os/exceptions.ts`, the handler in the compiled order:

```ts
export function raiseToFlowHandler(error: unknown): void {
  if (isInstanceOf(error, IgnorableSystemException)) return;                 // ACF:24-26 (E5)
  if (isUserException(error, 'UBTConnect.BubbleCommunicationException') ||    // ACF:31-44
      isCommunicationException(error)) {                                      // ACF:46-59
    showCommunicationExceptionMessage();
    return;
  }
  if (isInstanceOf(error, SecurityException)) { /* unchanged, ACF:61-88 */ return; }
  if (!isSystemException(error)) {                                            // ACF:90-117
    const message = exceptionMessage(error);
    if (message.includes('NoteCommunicationError')) showCommunicationExceptionMessage(); // ACF:98-103
    else void showExceptionMessage(message, false);                           // ACF:105-110
    return;
  }
  raiseSystemException(error);                                                // ACF:119 `throw ex` (E6): section 5.1
}
```

`platform/feedback/exceptionMessages.ts`:

```ts
export function showCommunicationExceptionMessage(): void {
  const isOnlineNow = navigator.onLine;                                        // CheckIsOnlineNow, UC:16155-16157
  if (getClientVar('UBTConnect.App_NetworkStatus_IsOnline_IsPersistent') && isOnlineNow) { /* info, "Service Interruption" */ }
  else { /* error, "No internet connection…" */ }                              // UC:16114-16124
}
```

`main.tsx`: `installQueryErrorsToFlowHandler(queryClient);` next to `connectDialogs();` (`main.tsx:23`). A test
helper `testQueryClient()` in `src/test/testSupport.ts` returns `new QueryClient()` with the subscription installed.

### 2.3 Folder and import rules

| Piece | Folder | Rule check |
|---|---|---|
| `QueryMeta`, `Register` augmentation, `logQueryError` | `api/client/` | No new import. `api/client` stays free of `platform/` for this feature (rule 7 is about `api/<domain>/`, `.dependency-cruiser.cjs:69-72`; the existing `platform/log` import of `queryClient.ts` is not touched). |
| `installQueryErrorsToFlowHandler` | `platform/feedback/flowErrors.ts` | `platform → legacy/os` (rule 9, `.dependency-cruiser.cjs:82-86`) and `platform → @tanstack/react-query`. It does not import `api/`: the client is a parameter. |
| The handler | `legacy/os/exceptions.ts` | Unchanged owner. |
| Wiring | `app/main.tsx` | `app → platform`, `app → api` (overview, import graph). |
| `meta` on queries | `api/<domain>/hooks.ts`, `api/client/cache.ts`, `pages/MessageList/hooks/useMessageList.ts` | Data only, no import. |

Why the raise is not in the existing `QueryCache({ onError })` of `api/client/queryClient.ts`: that file must then
import `legacy/os/exceptions`. That module imports `platform/session` and `platform/feedback`, and
`platform/session/auth.ts` imports `api/client`. That is an import cycle (rule 10). The subscription avoids it.

### 2.4 No double messages

| Case | What happens | Why once |
|---|---|---|
| StrictMode (dev) mounts twice | One fetch: the second observer joins the fetch in flight | The subscription is on the cache, not on the component. One failed fetch = one `error` action = one raise. |
| Re-render of the page | No fetch, no event | Nothing to raise. |
| Refetch after a failure (`refetch()`, key change, remount with `gcTime: 0`) | A new fetch, a new failure, a new message | Same as TST: every `Refresh` that fails calls `handleError` again (OS.js `executeDataFetchAction` runs per fetch). |
| Cancelled fetch (`CancelledError`) | Skipped | A cancel is not a failed request; `QueryCache.onError` of TanStack skips it in the same way. Tested. |
| Flow awaits the fetch and handles the error (MessageList D14, `cache.ts` reads) | `meta.errorFlow: 'caller'`: the subscription skips it; the flow raises or handles | One place raises. |
| Two components share one query key | One fetch, one message | TST runs one data action per block, so it can show two. This is the call-parity question of plan §5.4 (dedup exemptions). The messages follow the calls: a call that is exempt is also one message. |

Order inside one failure: TanStack dispatches the `error` action (status → `error`). The subscription raises in the
same tick. React commits the error status and the feedback store in the next render. The skeleton or `list-error`
state and the message land together, as TST's `flush()` then `handleError` (E1).

### 2.5 Fetch-at-start and on-demand queries

| Kind | OutSystems | React query | Error path |
|---|---|---|---|
| Fetch at start | `dataFetchDependencies` entry `0`, run by `fetchReadySources` (OS.js) | `useQuery` with `enabled: true` on mount | Subscription → flow handler (default) |
| On demand, refreshed in an action without Handle Error | entry `-1`; `Refresh Query` inside the action; unhandled → `safeExecuteClientAction` → `handleError` | `useQuery` with `enabled` that turns true later, or a key with a request id (ShareSheet D8, ProfileList D9), or `void refetch()` (CountryDetails `useCountryDetails.ts:186`) | Subscription → flow handler (default). Same end: the screen's handler. |
| On demand, refreshed in an action with Handle Error, or awaited by a flow | `Refresh Query` inside the action, the action's handlers run | `enabled: false` + `await refetch()` (MessageList `useMessageList.ts:100-124`), `queryClient.fetchQuery` (`api/client/cache.ts:116,186`) | `meta.errorFlow: 'caller'`; the flow's own `try/catch` or `result.error` test, as today |

The marker is set where the query is declared, by the hook that owns the flow: the only two places today are
`useMessageList.ts` and `cache.ts`. A later `await refetch()` without the marker gives two messages; the test in 6.2
(every `fetchQuery` and `enabled: false` query carries the marker) guards it.

### 2.6 `meta.errorLog`

Stays. `logQueryError` (`api/client/queryClient.ts:6-9`) keeps the warn of the blocks that logged
(`api/member/hooks.ts:46-55`, `api/feed/hooks.ts:22`). The App_Common handler also logs the error
(`OS.Logger.error(null, ex)`, ACF:33, :48, :93); React's `raiseToFlowHandler` does not log today and this proposal
does not add a log (no user-visible behaviour). The two hook comments that say "a log, as the block did" get one
more sentence: the fetch error also goes to the flow handler.

## 3. Behaviour mapping

| # | React today | TST (E) | The design | Same? |
|---|---|---|---|---|
| D1 | `raiseToFlowHandler`: no ignore step; a system exception shows a message | E5 ignored silently; E6 raised again → error page | Ignore step first (`IgnorableSystemException` → return); system exception → the option chosen in 5.1 | Ignore: same. System exception: open (5.1) |
| D2 | Client variable only | E7: variable AND `navigator.onLine` | `navigator.onLine` read at the moment of the error | Same: conditions, both texts, both types |
| D3 | No "NoteCommunicationError" test | E4: AllExceptions → message contains it → communication message, else `ShowExceptionMessage(message, False)` | The `includes` test inside the AllExceptions branch, before `showExceptionMessage` | Same order, same texts (open 5.2: now or later) |
| D4 | `meta.errorLog` only (`api/member/hooks.ts:46-55`) | E3 probe: communication message | Subscription raises; `errorLog` stays | Same: 1 message + 1 log |
| D5 | `meta.errorLog` only (`api/feed/hooks.ts:22`, via `useEmbeddedFeed.ts:40`) | E3 probe: communication message | Subscription raises; `errorLog` stays | Same |
| D6 | Error status only (`useFeedServices.ts:57`, `useFeedUpdates.ts:61`) | E3: message per failed block fetch | Subscription raises per query; status unchanged | Same: 2 fetches, 2 raises; skeleton stays |
| D7 | Error status only (`useCountryDetails.ts:110-115`) | E1 probe: "Service Interruption"; skeleton list kept | Subscription raises on the mount fetch and on `void refetch()` (:186) | Same; `skeletonOut` stays |
| D8 | Error status only (`useShareSheet.ts:114-115`) | E3: block mechanism (not probed) | Subscription raises per failed request id | Same (one raise per failed fetch of each query) |
| D9 | Error status only (`useProfileList.ts:113-131`) | E3 probe: message | Subscription raises; the `settled`/`waiters` logic stays | Same |
| D10 | Error status only (`useShareObject.ts:54`) | E1/E3 confirmed (5.3): fetch at start and the unhandled OnParametersChanged refresh → block `handleError` → App_Common | Subscription raises on the first fetch and on each key change | Same |
| D11 | Error status only (`useProfile.ts:115`) | E1 confirmed (5.3): on demand; both refresh sites are in actions without Handle Error → screen `handleError` | Subscription raises when the enabled query fails or its key (country code) changes and fails | Same |
| D12 | Error status only (`useSearch.ts:173`) | E3 confirmed (5.3): aggregate on demand, refreshed in OnReady without Handle Error → block `handleError` | Subscription raises | Same |
| D13 | Own copies: `usePendingPoliciesForm.ts:66-70` (no ignorable skip), `useOneSchoolGlobalDetails.ts:57-60` (raises on each change of `error`, no ignorable skip) | E1/E5: one raise per failed fetch, ignorable skipped | Both effects removed; the subscription raises once per failed fetch; the ignore step is in the handler | Same (fixes the two deviations) |
| D14 | Raises after a failed `refetch()` (`useMessageList.ts:116-124`) | Refresh inside an action; same as TST | `meta: { errorFlow: 'caller' }` on the query; the flow keeps its raise and `return false` | Same (structure only) |

Message count: unchanged per failed fetch. Example, HomeFeed offline: CommunityPopulation, FeedConfig (when the feed
flag is on), Services and Updates fail. That gives 4 raises and 4 `feedbackMessage_AutoClose` calls. The host shows one
message at a time (shell.md, "One message at a time shows in `#feedbackMessageContainer`"), as for TST's 4 block
`handleError` calls.

## 4. Options considered

| | a. Central cache subscription + per-query opt-out (recommended) | b. Per-hook opt-in (`useFetchErrorToFlowHandler(query)` in every page hook) | c. Handler injected into `QueryCache.onError` in `api/client` (`setQueryErrorHandler(fn)`) |
|---|---|---|---|
| Fidelity | Every fetch gets the OutSystems default (screen `handleError`) without a page doing anything; the exception is explicit (`'caller'`) | Depends on each hook remembering the call: today 3 of 13 remember (D4–D13) | Same as a |
| Clean React | One subscription, no React hook, no `useRef` guard against StrictMode; pages stay data-only | A hook per query, with its own "raised at" ref | A global setter in `api/client`; the raise is registered from `main.tsx` |
| Import rules | `platform → legacy/os` (allowed); `api/` untouched | Same as today | `api/client` keeps a mutable handler; the raise still lives outside `api/` because of the cycle (2.3) |
| Double messages | Impossible by construction (one event per failed fetch) | Guarded per hook (`errorUpdatedAt`), fragile when a hook is copied (D13) | Same as a; TanStack skips `CancelledError` itself |
| Risk | A flow that awaits a fetch must set the marker (2 places today; test guards it) | A new page forgets the call (10 of 13 did) | Two registration points for errors in `api/client` (`errorLog` and the handler) |
| Effort | Small: 1 function, 1 wiring line, 2 markers, 5 removals | Small per hook, 10 hooks to touch now, every new hook later | Small, like a |

In plain terms: option a puts one guard at the door. The guard reports every failed data read as the OutSystems
screen reports it. A page says "I handle this one myself" only when its button flow already shows its own message.
Option b asks every page to remember to call the guard; the findings show that most pages forgot. Option c is option a
with the guard registered from the data layer. It works, but it gives the data layer a setting that it does not need,
and it splits the error registration into two places.

Recommendation: a. It keeps the OutSystems default as the React default. It removes code (one hook, two copies, three
calls) instead of adding it. The only per-query knowledge (`'caller'`) sits where the flow that handles the error is
written.

## 5. Open points for the user

### 5.1 D1 / E6: a system exception that is not ignorable

TST: the handler re-raises (`throw ex`, ACF:119); the runtime shows `_error.html` (`navigateToErrorPage`, OS.js
ErrorHandling). React has no such page; `_error.html` is not captured. No React code raises such an exception today.
The server answers map to `ServerException`, `UserException` and the others (`os-exceptions.ts`, `fromServer`). The
only system exception is `ViewHasChangedException`, and it is ignorable (findings §4).

| Option | What the user sees | Pros | Cons |
|---|---|---|---|
| a. Keep today: `showExceptionMessage(message, false)` | A toast | No change | Differs from TST (a toast instead of an error page) |
| b. Log, then show the error marker page: a small `fatalError` store in `platform/feedback`; `app/ErrorBoundary` or `RouteError` renders `NotCaptured("error screen of the original app")` with the message, as `RouteError.tsx:19` does for route errors | A full page, marked as not captured | Closest to `_error.html` without inventing a page; the marker shows what still needs a capture | A new small mechanism that nothing triggers today |
| c. Log only (`log.error`), no UI | Nothing | Smallest | Differs from TST (the user sees nothing) |

Recommendation: b, with the capture of `_error.html` as a follow-up (static GET, read-only, under the standing approval
for static files). Until a decision, the code keeps a; the change is one line in the last step of `raiseToFlowHandler`.

### 5.2 D3: the "NoteCommunicationError" branch

| Option | Pros | Cons |
|---|---|---|
| a. Now | One `includes` test (ACF:98), one unit test; the handler then equals the compiled order completely | None found: the branch is harmless until E8 raises it |
| b. With the new Notes flow (E8) | Ships with its only raiser | The handler stays incomplete; the Notes work must remember it |
| c. Never | - | Differs from TST once the Notes flow is built |

Recommendation: a.

### 5.3 D10–D12 confirmed from the TST code

| # | Finding | Evidence |
|---|---|---|
| D10 | `GetShareObjectTypeById` is an aggregate of the block `ScreenBlock_ShareObject` (module Connect2_LegacyShared), fetched at start, and refreshed by `OnParametersChanged`. That action has no Handle Error node; its `catch` re-raises. The block's `handleError` delegates to the screen controller, and the module has no `OnException` → App_Common. Path E1/E3: the communication message. | `Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject.mvc.js`: `dataFetchActionNames` :881, dependency `0` :715, `_onParametersChanged$Action` :946-966 (Refresh :949, `throw ex` :962), `handleError` :1227-1229; E3 |
| D11 | `GetCountryInfo` is a data action of the screen `Profile`, on demand (dependency `-1`). Two actions refresh it: `OnChange_LocalityDropdown` and `CacheControl_UserInfo_WrapperResult`. Neither has a Handle Error node; the only Handle Error nodes of the screen are in `OnClick_Save`. An unhandled action error goes to the screen's `handleError` (OS.js `safeExecuteClientAction`) → App_Profile flow → App_Common (E2). Path E1: the message. | `UBTConnect.App_Profile.Profile.mvc.js`: `-1` :2830, `_onChange_LocalityDropdown$Action` :3232 (Refresh :3280), `_cacheControl_UserInfo_WrapperResult$Action` :3359 (Refresh :3473), `_onClick_Save$Action` :3500 with Handle Error :3663, :3676, :3692 |
| D12 | `Get_SearchBirthdayOptions` is an aggregate (`ScreenDataSetGet_SearchBirthdayOptions`) of the block `ScreenBlock_Search`, on demand (`-1`), refreshed in `ScreenEvent_OnReady` when the permission check is true. That action has no Handle Error node (the block's only Handle Error nodes, :2671-2704, are in another action). Unhandled → block `handleError` → screen → App_Common. Path E3: the message. | `UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js`: aggregate :2143-2165, `-1` :1839, `_screenEvent_OnReady$Action` :3355 (Refresh :3391, `throw ex` :3409), `handleError` :4230 |

The React `enabled` conditions of these three queries keep the fetch moments: `useCountryInfoQuery` is enabled when
the user info has come, `useSearchBirthdayOptionsQuery(enabled)`, and `useShareObjectTypeLabelQuery` is keyed by the
block inputs. The design adds only the raise.

### 5.4 Smaller points

- E5 second half, `LicensingException` → app-offline page: React has no such class and no server raises it. Unclear
  whether the BFF will ever send it. Proposed: out of scope, noted in `exceptions.ts`.
- Two components sharing one query key give one message where TST may give two (2.4). Proposed: follow the call-parity
  exemption list of plan §5.4, no extra rule.

## 6. Change list and test plan

### 6.1 Files

| File | Change |
|---|---|
| `app/src/api/client/queryClient.ts` | `QueryMeta` with `errorLog` and `errorFlow`; `Register` augmentation. `logQueryError` unchanged. |
| `app/src/api/client/cache.ts:116, :186` | `meta: { errorFlow: 'caller' }` on both `fetchQuery` calls (one options helper, so the marker is set once). |
| `app/src/platform/feedback/flowErrors.ts` | Add `installQueryErrorsToFlowHandler`. Remove `useFetchErrorToFlowHandler` and `FetchErrorStatus`. Module comment updated. |
| `app/src/legacy/os/exceptions.ts` | Ignore step; `NoteCommunicationError` test (5.2); system-exception step (5.1); header comment with ACF lines. |
| `app/src/platform/feedback/exceptionMessages.ts:17-23` | `navigator.onLine` in the condition; comment UC:16110-16124. |
| `app/src/main.tsx` | `installQueryErrorsToFlowHandler(queryClient)` after `connectDialogs()`. |
| `app/src/test/testSupport.ts` | `testQueryClient()`: a `QueryClient` with the subscription. |
| `app/src/pages/MessageList/hooks/useMessageList.ts:100-106` | `meta: { errorFlow: 'caller' }`; the raise at :122 stays. |
| `app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:66-70` | Remove the effect (the `handleFlowError` alias :43 and its use at :126 stay). |
| `app/src/pages/OneSchoolGlobalDetails/hooks/useOneSchoolGlobalDetails.ts:57-60` | Remove the effect. |
| `app/src/pages/Services/hooks/useServices.ts:63`, `app/src/pages/MyEntertaining/hooks/useEntertainingCalendar.ts:38` | Remove the hook call and its import. |
| `app/src/api/member/hooks.ts:42-45`, `app/src/api/feed/hooks.ts:20-22` | Comment: the fetch error also goes to the flow handler. No code change. |
| D6–D12 hooks | No code change. |
| Docs | `app/docs/guides/page-template.md:114-116`, `app/docs/guides/shell.md:405-407`, `app/docs/architecture/overview.md:283`: the subscription replaces the hook; `meta.errorFlow` documented in `app/docs/guides/api-and-mocks.md` (query options). `migration/clarify/builds/B4-errors.md`: link to this file. |

No new library. No new folder. `knip` loses one export (`useFetchErrorToFlowHandler`); the baselines only shrink.

### 6.2 Tests to write first (Vitest; each fails before its change)

| Test | Asserts | Fails today because |
|---|---|---|
| `platform/feedback/flowErrors.test.tsx` (new) | With `testQueryClient()`: a failing `useQuery` → `raiseToFlowHandler` once; StrictMode wrapper → once; a re-render → no new call; `refetch()` that fails → a second call; `meta.errorFlow: 'caller'` → none; a `CancelledError` → none; `ViewHasChangedException` → none | The function does not exist |
| `legacy/os/exceptions.test.tsx` | `raiseToFlowHandler(new ViewHasChangedException())` shows nothing (D1); `new UserException('… NoteCommunicationError …')` → `showCommunicationExceptionMessage` (D3); the other branches unchanged; the system-exception case per 5.1 | No ignore step; no Note branch |
| `platform/feedback/exceptionMessages.test.tsx` | Variable true + `navigator.onLine` false → "No internet connection…" (error); true + true → "Service Interruption" (info); false + true → error text (D2) | `navigator.onLine` not read |
| `api/client/queryClient.test.ts` (new) or in `cache.test.ts` | Every `fetchQuery` of `cache.ts` carries `errorFlow: 'caller'`; a failed cache read raises nothing through the subscription | Marker missing |
| Page or hook tests for D4–D12 (one case each, MSW `HttpResponse.error()` on the action): `HomeFeed` (D4, D5, D6), `useCountryDetails` (D7, mount and `refetch`), `useShareSheet` (D8), `useProfileList` (D9), `useShareObject` (D10), `useProfile` (D11), `useSearch` (D12) | `raiseToFlowHandler` called once with a `CommunicationException`; the skeleton or error status unchanged | Nothing raises |
| `useOneSchoolGlobalDetails.test.tsx`, `usePendingPoliciesForm.test.tsx` (D13) | One raise per failed fetch; `ViewHasChangedException` → none | Own copies raise on ignorable errors |
| `useMessageList` test (D14) | A failed refetch → exactly one raise | Would be two without the marker once the subscription exists |

### 6.3 Existing tests that change

- `useServices.test.tsx`, `useEntertainingCalendar.test.tsx`: use `testQueryClient()` in their wrapper (today
  `new QueryClient()`, `useServices.test.tsx:27-29`); the raise assertions stay.
- `api/member/hooks.test.tsx:155-166`, `api/feed/hooks.test.tsx:68-78`: the `errorLog` assertions stay; one more case
  with the subscription installed.
- `exceptions.test.tsx`, `exceptionMessages.test.tsx`, `bubbleErrors.test.ts`: the mocks of `showExceptionMessage` and
  `showCommunicationExceptionMessage` stay; `navigator.onLine` is stubbed where the communication text is asserted
  (jsdom reports `true` by default).
- Tests that mock `@/legacy/os/exceptions` `raiseToFlowHandler` keep working: the subscription calls the mocked import.

### 6.4 Parity sweep

No effect: the captures hold no error state, and the design changes no DOM, class, call or call order of a successful
path. The `call` check of `refactor_parity.py` sees the same calls (no retry, no new fetch). `npm run ci` covers the
architecture lint (new import `platform/feedback → @tanstack/react-query`, allowed) and the flag check (no flag read).

## 7. Risks

| Risk | Effect | Mitigation |
|---|---|---|
| A future flow awaits `refetch()` or `fetchQuery` without `errorFlow: 'caller'` | Two messages | The `cache.ts` test (6.2); a sentence in the page template; `enabled: false` queries are easy to grep |
| `CancelledError` reaches the subscription in a case not tested (key change while a fetch is in flight) | A message for a cancel | The `instanceof CancelledError` guard; a test with a key change during the fetch |
| Tests that build their own `QueryClient` see no raise | A false "no message" | `testQueryClient()` and the D4–D14 tests above |
| The error status and the message render in one commit; TST flushes, then shows | None visible; worth one manual check on CountryDetails offline (`?mock=` with a failing action, or devtools offline) | Manual check noted in the review |
| Query dedup (two observers, one key) | One message where TST may show two | Plan §5.4 exemption list; no case known today |
| E6 page unknown | Option b shows the marker until `_error.html` is captured | Capture follow-up |
| `navigator.onLine` in an installed PWA or a webview can report `true` while offline | Same as TST: it reads the same property (UC:16157) | None needed (1:1) |

## 8. Addendum (late failure), 2026-10-28

Approved: design a, D1 option b, D3 option a. New fact E9 (read-only probe `probe_fetch_errors.cjs --late`,
`probe-fetch-errors-late.json`): a fetch that fails after the user has left the screen or block shows nothing. The
same fetch shows "Service Interruption" when the user stays (CountryDetails control). This holds for a screen data
action fetched at start (CountryDetails) and for a `Refresh` inside a block OnReady action (SupperMeeting_DetailsBlock).
No unhandled rejection. The runtime mechanism (a disposed controller) is not readable in the minified OS.js: unclear,
the probe fact stands.

### 8.1 The subscription skips a fetch that no mounted screen awaits

| Option | Signal | Pros | Cons |
|---|---|---|---|
| a. `event.query.getObserversCount() === 0` at the `error` action (recommended) | TanStack: observers = mounted `useQuery` callers; the fetch runs on after the last unsubscribes and still dispatches `error` | One line, no React state; the same API the view cache already uses (`viewCache.ts:60`); no flag to keep per screen | A query that two screens share (one left, one mounted) still raises: edge, no case known |
| b. The route tells the subscription: `platform/navigation` publishes the active entry; the query carries `meta.screen` | Exact per screen | A meta on 46 queries; a new coupling navigation → feedback | Heavy, invents data |
| c. Keep raising after unmount (today) | None | Nothing to do | Differs from TST (E9) |

Reliability of a, checked:
- The view cache does not keep observers alive. `saveView` dehydrates only successful queries with observers
  (`viewCache.ts:60-73`); `enterView` hydrates data on a back navigation (`:78-83`). The left screen's `useQuery`
  callers unmount. A failed query is never saved, so the back navigation fetches again. When that fetch fails on the
  screen, it raises: the user is there, and TST does the same ("Restored without data" rule of page-template.md).
- The transition keeps the leaving screen mounted until its exit ends (`ScreenTransitionGroup.tsx:79-92, :158, :210-212`,
  a few hundred ms). A failure inside that window raises. Unclear whether TST's probe window covers it; proposed:
  accept (it equals "the user is still on the screen" in React) and note it.
- `gcTime: 0` queries are removed only when idle: the fetch in flight still dispatches `error` on the same `Query`
  object with 0 observers → skipped. Covered by the test "unmount while pending → no raise".
- `errorFlow: 'caller'` queries are unaffected: their flow decides.

Tests: in `flowErrors.test.tsx` add "unmount before the failure → no raise" and "a second mounted caller of the same
key → raise". `useOneSchoolGlobalDetails.test.tsx:207-217` keeps passing (no raise after unmount) once its own effect
is removed and the subscription is installed in the test client.

### 8.2 The flows that raise through their own code (not a query)

`useSupperMeetingDetails.ts:48-52, :94-97, :106-109` raises after an unmount through `raiseToFlowHandler` in its
`try/catch` (B4, citing W23). E9 shows TST does not: the SupperMeeting_DetailsBlock probe is exactly this flow.

| Option | Scope | Pros | Cons |
|---|---|---|---|
| a. Item 2 now: SupperMeetingDetails only. Guard the raise with the block's `isAlive` (`newestReadyRun.current()`, the check `write` already uses, :85-87); comment cites E9; its unit test flips to "unmount while pending → no raise" (recommended) | The one flow E9 verified, the one B4 touched | Keeps item 2 inside the error-handling work; evidence-backed | Leaves W23 as a rule for the other flows |
| b. Item 2 now: also the W23 flows (Search, MessageList, MessageDetail, Notifications, HouseholdDetails) | Five more screens, side effects beyond messages (toast, navigation, counters, server calls) | One rule | E9 verified only the message; W23 covers navigation and server calls, which E9 did not probe; changes behaviour of five screens without evidence |
| c. Nothing now; all with a later W23 decision | - | Smallest | React keeps a message TST does not show, in a flow B4 just changed |

Recommendation: a now. b is a separate decision for later. Probe a W23 side effect that is not a message first, for
example MessageDetail's jump to MessageList.

What E9 changes in W23's reasoning: its premise "the OutSystems
fact is not verified on TST" is now false for the error message. Proposed wording for the later decision: "the
flow-handler message of a flow whose screen or block was left is not shown (E9); other app-level side effects keep
W23 until probed". No other item-2 code raises after unmount: `useMessageList.ts` awaits the refetch inside a mounted
flow, and the D13 copies are removed.
