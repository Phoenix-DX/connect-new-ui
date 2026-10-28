# Item 8 solution: the flow lifecycle after leaving, and the error page (proposal, 2026-10-28)

Status: **proposal, not approved**. No code changed. Facts R1–R6, P1–P7 and the patterns X1–X4 come from
`item8-w23-errorpage.md` (settled). Inventory rows: `item8-inventory/group-A.md` to `group-D.md`.

React paths are under `app/src/`. `W<n>` = character offset in `migration/runtime-sources/OutSystems.js`.
The decision that this note replaces: W23 (`migration/refactor/auto-decisions-2026-10-22.md:99`).

## 1. Summary

- One platform mechanism, the **flow scope**, replaces the W23 rule and the 55 hand-written guards. `useFlowState`
  gives each screen or block instance one `flow` object (`platform/navigation/flowScope.ts`, new). A hook author
  wraps three things with it. These are a data action or aggregate (`flow.fetch`, R1), an own client action
  (`flow.own`, R3) and the block events (`flow.events`, R3). Server actions, module actions and toasts are not wrapped (R2, R5).
- Navigation gets its context check in the platform: `useOsNavigate` and `useNavigateBack` throw
  `OutOfContextException` when the hook's history entry is not the current one (R4). No hook changes for this.
- "Left" has two forms, as on TST. **Disposed** = the instance unmounted (R1, R3). **Out of context** = the screen's
  entry is not the current entry (R4, R6). Both are facts the code already has (section 2.1).
- `useFlowState` takes the StrictMode once-guard, drops `dispatch` after the unmount, and sends a flow error to the
  handler with its scope. `raiseToFlowHandler` opens the error page only from an active scope (R6).
- The error page becomes the app's own static document `public/UBTConnect/_error.html`, a port of P2–P5. A
  full document change with the sessionStorage hand-off of P1 reaches it. The `NotCaptured` gate goes away.
- Rollout in 6 steps: the platform, then the inventory groups B, A, C, D, then the cleanup. Section 7.
- Open points for the user (section 6):
  - the R1 model (throw or hang)
  - the navigation stop (throw or no-op)
  - the error page home (static document or React gate)
  - the signature change
  - the stale-run meaning of `isAlive`.

## 2. Design A: the flow scope

### 2.1 What the code can know about "left"

| TST notion | Evidence | React fact | Evidence |
|---|---|---|---|
| Controller disposed (R1, R3) | `isDisposed` W533101; `ensureControllerAlive` W534313 | The hook's instance unmounted: the mount effect's cleanup ran. StrictMode (dev) runs cleanup and effect again on the same instance, with its refs kept | `flowState.ts:106-126`; `blockLifecycle.ts:9-18` |
| Active screen (R4, R6) | `activeScreen.viewName !== callContext.viewName` W518580 | The hook's `useLocation().key` is frozen per history entry, also while the screen leaves; `currentEntry().key` is the entry the router shows | `ScreenTransitionGroup.tsx:33, 179`; `historyStack.ts:22, 42-63`; `NavigationHost.tsx:42-44` |
| A block that the parent removed | the block controller is disposed (R3) | the block hook unmounted while the screen stays mounted | same cleanup as row 1 |

A leaving screen stays mounted for the 300 ms transition (`ScreenTransitionGroup.tsx:25-35`). In that window it is
out of context but not disposed. TST is the same: `onNavigationStart` removes `active-screen` at once
(`ScreenTransitionGroup.tsx:30`), and the controller is disposed later. So R4 blocks at once, and R1 blocks after the
unmount. The design keeps both moments apart.

### 2.2 The `FlowScope` API (`platform/navigation/flowScope.ts`, new)

```ts
export interface FlowScope<E = undefined> {
  /** True from the mount until the unmount. A StrictMode remount keeps it true. Replaces `isAlive` for flows. */
  alive: () => boolean;
  /** True while the hook's history entry is the one the router shows (R4, R6). */
  active: () => boolean;
  /** A data action or a screen aggregate (R1). When the instance is disposed at the answer, the answer and the
      failure are dropped: the call throws ControllerDisposedException, so nothing after it in the flow runs. */
  fetch: <T>(call: Promise<T>) => Promise<T>;
  /** An own client action of the screen or block (R3): ensureControllerAlive at its start. */
  own: <A extends unknown[], R>(action: (...args: A) => R) => (...args: A) => R;
  /** The block events (R3): each one checks `alive()` and then calls the newest handler of the parent. */
  events: E;
  /** A flow that a widget event starts: runs it and sends an unhandled error to the flow handler with this scope. */
  run: (flow: () => Promise<void>) => void;
}
```

- `fetch` awaits the call. After the await (resolved or rejected) it checks `alive()`. When false, it throws
  `ControllerDisposedException`. The thrown exception is an `IgnorableSystemException`, so `raiseToFlowHandler`
  ignores it (`legacy/os/exceptions.ts:83`), a "Handle Error: AllExceptions" port throws it on
  (`useAdminEventDetail.ts:171`), and a `catch (e) { if (!isCommunicationException(e)) throw e; }` throws it on
  (`useMessageDetail.ts:367`). A bare `catch { return }` (`useHostSurvey.ts:192-195`) swallows it; the result is the
  same as TST (nothing).
- `own` returns the action with the check in front. When the instance is disposed, the call throws
  `ControllerDisposedException` (TST W534313). The author wraps the actions that another flow calls after an await
  (X4): `const refreshMessages = flow.own(async () => { … })`.
- `events` is a Proxy over the `events` ref of `useFlowState` (`flowState.ts:93-99`). Each property is a function
  that checks `alive()` and then calls the newest handler. An optional handler that the parent did not give does
  nothing, as today. The TST block trigger is R3 (`group-A.md`, "Event triggers of a block").
- `run` is `flow().catch((e) => raiseToFlowHandler(e, scope))`. It replaces the 78 `.catch(raiseToFlowHandler)`
  sites (count: grep, 2026-10-28) and gives the handler the context for R6.
- New exception classes in `legacy/os/os-exceptions.ts`, next to `ViewHasChangedException` (:89):
  `ControllerDisposedException` (TST W49870) and `OutOfContextException` (TST R4). Both extend
  `IgnorableSystemException` (:82). `platform/` may import `legacy/os/` (rule 9, `overview.md:117`).
- `useFlowScope(events?)` is a public hook for an instance without reducer state (today: `useViewState` only, or a
  query hook only). `useFlowState` calls it and returns `flow`.

### 2.3 `useFlowState` changes (`flowState.ts`)

1. It returns `flow` (section 2.2). The flow callbacks keep their parameters in the first step: `onReady(isAlive,
   restored)`, `onParametersChanged(isAlive)`. The cleanup step changes them to `onReady(flow, restored)` (section 6,
   point 4).
2. The once-guard moves in. The default-mode effect (`:118-126`) gets the shape of the before-paint effect
   (`:106-117`): `readyStarted` and `readyAlive` refs. StrictMode then runs OnReady once, and `flow.alive()` stays
   true through the simulated remount. The 18 copies of `readyStarted` + `newestReadyRun` in the hooks, and the
   helpers `blockLifecycle.ts` and `readyOnce.ts`, go away.
3. `dispatch` (`:82-90`) returns at once when `flow.alive()` is false. Item 8 §3 says a late `dispatch` updates the
   view cache. By `viewCache.ts:65-72` the saved view is read when the entry is left. `registerViewState` is
   removed at the unmount (`hooks.ts:65`), so a dispatch after the unmount changes `latest` only. The no-op makes the
   question moot; one test pins it (section 7.2).
4. Both catches (`:112, :121, :133`) become `.catch((e) => raiseToFlowHandler(e, flow))`.
5. `isAlive` of `onParametersChanged` keeps its meaning (false at the next run, `:8-9`) until the user decides
   section 6, point 5.

### 2.4 Navigation (R4, `osNavigate.ts`)

`useOsNavigate` (`:102-110`) and `useNavigateBack` (`:135-145`) read `useLocation().key` and compare it with
`currentEntry()?.key` at each call. When they differ, the function throws `OutOfContextException` and does not
navigate. When `currentEntry()` is null (no `NavigationHost`, as in a hook test), the navigation goes through, like the
`redirect` default (`:84-85`). `osNavigateTo` (`:123-129`) has no entry and does not change: the App_Common
SecurityException path (`exceptions.ts:94`) keeps its navigation.

TST ignores an `IgnorableSystemException` at the top (`ignoreError` W324172). The app gets the same top-level
filter: `platform/feedback/ignorableErrors.ts` installs `error` and `unhandledrejection` listeners that
`preventDefault()` for an `IgnorableSystemException`. It covers a synchronous click handler on a leaving screen
(`onClick={() => { go('/x'); }}`) that has no `.catch`.

### 2.5 How a hook author uses it

Before (`useBrowseCountries.ts:36-65, 84-88`): `readyStarted`, `newestReadyRun`, `write`, `.catch(raiseToFlowHandler)`.
After:

```ts
const { state, dispatch, latest, flow } = useFlowState({
  viewName: 'Directory_Locality.BrowseCountries',
  reducer: browseCountriesReducer,
  initial: INITIAL_BROWSE_COUNTRIES_STATE,
  parameters: null,
  onReady: (_isAlive, restored) => onReady(restored),
});
/** Action_RefreshData. */
const refreshData = async () => {
  dispatch({ type: 'refreshStarted' });
  const countries = await flow.fetch(fetchBrowseCountriesStatistics()); // R1
  dispatch({ type: 'countriesStatisticsFetched', countries });
};
const statisticsListClicked = async (eventId: string) => {
  if (eventId === '') return;
  const hasAccess = await hasAccessToRegion(textToLongInteger(eventId), eventId); // module action: not wrapped
  if (hasAccess) {
    navigate('/UBTConnect/BrowseDirectory', { CountryCode: eventId }); // R4 in useOsNavigate
    return;
  }
  await showUpgradePopUp(); // module action: runs after leaving (same as TST)
};
return { state, onStatisticsListClicked: (eventId) => flow.run(() => statisticsListClicked(eventId)) };
```

The rules for an author, to go into `docs/guides/page-template.md` in place of `:68-76`:

| The awaited call is | Wrap | Rule |
|---|---|---|
| a data action or a screen aggregate (`callAction` path `Owner/Action`, `callAction.ts:15, 100`; a `refetch()` or `fetchQuery` of a query) | `await flow.fetch(call)` | R1 |
| a server action (`callAction` path `Action`), a module client action, a plugin, a dialog | nothing | R2, module actions run |
| an own action of this screen or block that a flow calls after an await | define it with `flow.own(…)` | R3 |
| a block event after an await | `flow.events.onX(…)` instead of `eventsRef.current.onX(…)` | R3 |
| a navigation | `navigate(…)` or `back()` as today | R4 (platform) |
| a toast | `showFeedbackMessage(…)` as today | R5 |
| a widget handler that starts a flow | `flow.run(() => handler(…))` | R6 context |
| a state write | `dispatch(…)` as today; no `write` helper | no-op after the unmount |

The three representative hooks: `useMessageDetail.ts` wraps `fetchMessageInstance` (:257, :362) and
`fetchMessageTemplateParameters` (:195) with `flow.fetch`; it defines `leaveToMessageList` (:163) and
`onAfterFetchMessageInstance` (:218) with `flow.own`, and calls `flow.events.onNavigateToMessageList()`. The
`variables` copy (:219-222) and `write` (:156-158) go away. `useAdminEventDetail.ts` wraps `fetchAdminEventInformation`
(:88) with `flow.fetch` and defines `onHandleScanCode` (:109) with `flow.own` (TST `ensureControllerAlive` at
`ScreenBlock_AdminEventDetail.js:935`, `group-C.md:121-138`); `fetchMember`, `fetchScanEventQRCode` and the audit are
not wrapped (R2, module). The three `void …catch(raiseToFlowHandler)` (:242-248) become `flow.run`.

### 2.6 StrictMode, the view cache, blocks, TanStack Query

- StrictMode: section 2.3 item 2. `flow.alive()` is a ref that the cleanup turns off and the effect turns on. A
  dispatch cannot land in the gap, because the gap is synchronous.
- View cache: section 2.3 item 3. A back navigation restores the state of the leave moment, as TST (item 8 §3).
- Blocks: a block hook gets its own scope. `alive` is the block's mount; `active` is the shared screen entry. An event
  of a removed block stops at `flow.events` (R3); the parent's handler then never runs its navigation. The parent's
  own navigation checks the parent's entry (R4).
- TanStack Query: a page that renders a query hook has no flow after the answer. The query-cache subscription drops a
  failure with no observer (`flowErrors.ts:47`, item 2 E9): R1 holds without the scope. A flow that awaits
  `refetch()` with `meta.errorFlow: 'caller'` (`flowErrors.ts:34-35`; `useMessageList.ts:114-124` per `group-A.md:64`)
  wraps it with `flow.fetch`; the manual raise after it then never runs after the unmount.

## 3. Design B: the error page

### 3.1 Place: a static document outside the React tree

TST leaves the app for a separate document (P1). The runtime that may be broken is not needed to show it. The port
keeps that property: `app/public/UBTConnect/_error.html` (served at `/UBTConnect/_error.html`, next to
`public/UBTConnect/css/`, `overview.md:56`) with one inline script. `platform/feedback/errorPage.ts` keeps
`showErrorPage(error)`.

It logs (P7, as today `:19`). It writes the three sessionStorage keys of P1
(`ErrorPageMessage` = "" per P7, `ErrorPageExtraMessage` = "", `ErrorPageExceptionInfo` = name + message). It calls
`window.location.assign('/UBTConnect/_error.html')`. `app/ErrorPageGate.tsx`, its test and the `NotCaptured` use are
deleted; `main.tsx:59-61` loses the gate. The store, `subscribeErrorPage` and `resetErrorPage` go.

The alternative, a React `ErrorPage` component behind the gate, is section 5 B (b).

### 3.2 Markup, styles, texts, RELOAD (P2–P5)

- Markup: the body of `UBTConnect._error.html:155-170` as it is, ids and classes kept, including `#exception-detail`
  (hidden by its style, P4: `showExceptionStack` false; the Show Detail button is not wired).
- Styles: the `<style>` block `:36-150` copied into the document. No app stylesheet is loaded; the document is
  self-contained, as the original (it loads the runtime scripts only to run `error.js`, `:26-33`, `error.js:9`).
- Script (a port of `ErrorScreen` W536056-538400, in plain JavaScript, about 40 lines):
  read the three keys. The
  message text = stored message, else "There was an error processing your request."; the extra text = stored extra,
  else "". The button = "RELOAD" (P4; `appDefinition` sets the three config texts to null). On click: hide the button,
  show the spinner, after 2000 ms `window.location.assign('/UBTConnect/')` (P5). The head keeps the viewport meta
  (`:8`) and the OutSystemsApp user-agent script (`:10-24`) is dropped: the clone has no native shell.
- The exception detail is never shown (P4). The message of the exception is not on the page (P7). It is in the log.

### 3.3 R6 and logging

`raiseToFlowHandler(error, scope?)`: the last step (`exceptions.ts:103`) becomes `if (scope === undefined ||
scope.active()) showErrorPage(error); else log.error('error page skipped: out of context', …)`. A left screen logs and
shows no page (R6, `ErrorHandling` W322831). Module-level callers (app start, the query subscription) pass no scope and
keep the page. P6 (the page logs and flushes to the server): the log happens in `showErrorPage` before the document
change. The static page does not log. Difference recorded; the server sink is a production follow-up anyway.

## 4. Behaviour mapping

| Rule or pattern | TST | React after this design | Where |
|---|---|---|---|
| R1 answer dropped, failure dropped, nothing after it | `isDisposed` W533101, W535250 | `flow.fetch` throws `ControllerDisposedException`; the handler ignores it | flowScope.ts; exceptions.ts:83 |
| R2 server action continues | W523585 | not wrapped | hooks |
| R3 own action stops silently | W534313, W49870 | `flow.own`, `flow.events` | flowScope.ts |
| R4 no navigation, flow stops | W221750, W518580 | `useOsNavigate`, `useNavigateBack` throw `OutOfContextException` | osNavigate.ts |
| R5 toast shows | W325288 | unchanged | feedback |
| R6 no error page out of context | W322831 | `raiseToFlowHandler(error, scope)` | exceptions.ts:103 |
| Module and global actions run | `ensureControllerAlive` no-op W524880 | unchanged (plain functions) | lib/, platform/ |
| X1 OnAfterFetch body after a left data action | R1 | stops at `flow.fetch` | 55 hooks |
| X2 failure to the handler after the unmount | R1 | stops at `flow.fetch`; `useFlowState` catch gets the scope | flowState.ts |
| X3 navigation or event after an await | R3, R4 | `flow.events`, navigation check | platform |
| X4 own action after a server action | R3 | `flow.own` | hooks |
| StrictMode double OnReady | n/a | once-guard in `useFlowState` | flowState.ts |
| Late `dispatch` (item 8 §3) | R1 | no-op after the unmount | flowState.ts:82-90 |
| P1 document change + sessionStorage | W322831 | `showErrorPage` → `location.assign` | errorPage.ts |
| P2–P5 markup, styles, texts, RELOAD | `_error.html`, `ErrorScreen` | static document | public/UBTConnect/_error.html |
| P6 page log + flush | W536056 | log before leaving only (difference) | errorPage.ts |
| P7 empty message, default text | W322831 | `ErrorPageMessage` = "" | errorPage.ts |
| N3 HostSurvey `void onPrimaryButton()` (`group-D.md:75`) | handler | `flow.run` in the group D step | useHostSurvey.ts:428, 432 |

Visible changes against today:

A user who leaves a screen while its data action runs gets no toast, no jump and no
counter change from it (X1). A back navigation to that screen shows its state of the leave moment. A system exception
of a left screen opens no error page. The error page is the TST page, not the marker. Parity screenshots do not change
(no captured state covers "leave while pending").

## 5. Options considered

### A. The lifecycle mechanism

| Option | For | Against |
|---|---|---|
| (a) one platform scope (this note) | one place to test; TST semantics by construction; removes 18 once-guards, 2 helpers and the `write` copies; future hooks get it for free | every R1 call site gets `flow.fetch` (about 47 data-action functions, `callAction` count 2026-10-28), every X4 action `flow.own` |
| (b) keep W23, record the difference | no code | 151 known differences stay (item 8 §3); the fix of item 2 E9 covers only failed queries |
| (c) per-hook guards | no platform change | 151 hand-written `if (!isAlive()) return` lines; each one is a chance for a miss; the navigation and error-page checks still need the platform |

Recommendation: (a). The behaviour is a property of the runtime, not of a screen. A platform rule is the React shape
of it, and the hooks read as the OutSystems flows do.

### B. The error page home

| Option | For | Against |
|---|---|---|
| (a) static document `public/UBTConnect/_error.html` (this note) | the same mechanism as TST: URL, back button, F5, a torn-down app; no React needed to show it; about 40 lines of script | plain JavaScript in `public/`; two checks: the dev server serves the file, the service worker does not answer the navigation with the app shell |
| (b) React `ErrorPage` component behind `ErrorPageGate` | TypeScript, Vitest as the rest; today's structure | the URL stays the screen URL; back changes the URL under a dead router; F5 loses the page; the gate needs a healthy React tree |
| (c) a React route `/UBTConnect/_error.html` | TypeScript | the bootstrap must skip the app start for that path; a `.html` path in the SPA fallback needs a dev-server rule |

Recommendation: (a). Fidelity is attribute 1 (`overview.md:15`), and a terminal page outside the app is a normal
web pattern.

### C. The R1 model inside `flow.fetch`

(a) throw `ControllerDisposedException` (this note): the flow stops, `finally` blocks run, tests assert it. The TST
promise never settles, so a `finally` is the one difference. (b) a promise that never settles: exact R1; the flow
hangs for ever, `finally` never runs, tests need timers. Recommendation: (a).

### D. The R4 stop

(a) throw `OutOfContextException` (this note): the rest of the flow does not run (HostSurvey's toast after the
blocked back, `group-D.md:69-70`). (b) a silent no-op: the rest runs; four known rows stay different.
Recommendation: (a), with the top-level ignore filter of section 2.4.

## 6. Open points for the user

| # | Point | Options | Recommendation |
|---|---|---|---|
| 1 | R1 model in `flow.fetch` | (a) throw an ignorable exception; (b) never settle | (a), section 5 C |
| 2 | R4 stop in the navigation hooks | (a) throw an ignorable exception + top-level ignore filter; (b) silent no-op | (a), section 5 D |
| 3 | Error page home | (a) static document; (b) React component behind the gate; (c) React route | (a), section 5 B. Conditions: the dev server serves `public/UBTConnect/_error.html` at that path; the PWA service worker's navigation fallback excludes it (`src/pwa`, `docs/guides/pwa.md`); one TST capture of `_error.html` for a pixel check |
| 4 | Callback signature | (a) keep `onReady(isAlive, restored)` during the waves, change to `onReady(flow, restored)` in the cleanup step; (b) change it in the platform step and fix all 51 users at once | (a): each wave stays at the file budget |
| 5 | `isAlive` of a superseded `onParametersChanged` run (`flowState.ts:8-9`) | (a) keep today's meaning (the older run skips its writes) until an MCP or TST check; (b) check TST now and port it | (a); item 8 §1 has no fact about it. Unclear: does TST take the answer of an older OnParametersChanged run? |
| 6 | `osNavigateTo` from the App_Common handler for a left screen (`exceptions.ts:94`) | (a) unchanged; (b) pass the scope and block it | (a); rare path (SecurityException, no user id). Unclear on TST |
| 7 | Rollout grouping | (a) by inventory group B, A, C, D; (b) by pattern X1–X4 | (a): the inventory tables are the packs; group B is the smallest change (X2 only, `group-B.md`) |

## 7. Change list and test plan

### 7.1 Changes (after approval), six steps

| Step | Files | Size |
|---|---|---|
| S0 platform | new `platform/navigation/flowScope.ts` (+ test, + export in `index.ts:4`); `flowState.ts` (scope, once-guard, dispatch, catch); `osNavigate.ts` (R4); `legacy/os/os-exceptions.ts` (2 classes); `legacy/os/exceptions.ts` (scope parameter); new `platform/feedback/ignorableErrors.ts`; `platform/feedback/errorPage.ts` (rewrite); new `public/UBTConnect/_error.html`; delete `app/ErrorPageGate.tsx` + test; `main.tsx`; `docs/guides/page-template.md:58-76` | about 12 files, 500 lines + 450 test lines |
| S1 group B | 15 hooks (`group-B.md`): `flow.fetch` on the data actions, delete the local guards, `flow.run`; 15 tests | 20–40 lines per hook |
| S2 group A | 13 hooks (`group-A.md`): X1, X4 (`flow.own`), `flow.events`; 13 tests | 40–80 lines per hook |
| S3 group C | 14 hooks; the N1 decision first (OrbitAdminLanding, `group-C.md:147-155`) | 30–60 lines per hook |
| S4 group D | 13 hooks; N3 fixed by `flow.run` | 30–60 lines per hook |
| S5 cleanup | `onReady(flow, restored)`, `isAlive` type removed; delete `blockLifecycle.ts`, `readyOnce.ts`; the "Decision W23" comments in 97 files (grep 2026-10-28) become "Flow scope (item 8)"; CHANGELOG; a note at W23 ("superseded by item 8, user, date") by the documenter | mechanical |

A check script for the reviewer of each step lists every `await` of a function named `fetch*` or of a `refetch(`
in `pages/**/hooks` and `containers/**/hooks`. It reports each one that is not inside `flow.fetch(`. The script runs in `npm run ci` as a warning
until S5, then as an error.

### 7.2 Tests (Vitest, written first)

Platform (`flowScope.test.tsx`, `flowState.test.tsx`, `osNavigate.test.tsx`, `exceptions.test.ts`, `errorPage.test.ts`):

1. Unmount while `flow.fetch` is pending; the call resolves: the continuation does not run, no `dispatch`, no raise.
2. Same with a rejected call: `raiseToFlowHandler` is not called with the error.
3. Unmount while a server action (not wrapped) is pending: the continuation runs. A toast in it shows (R2, R5). The
   first `flow.own` call in it throws `ControllerDisposedException`, which the handler ignores.
4. `flow.events.onX()` after the unmount: the parent handler is not called.
5. `useOsNavigate` from a screen whose entry is not current: no route change, `OutOfContextException`. From the
   current entry: the route changes. Without a `NavigationHost`: the route changes.
6. A `beforePaint` OnReady that navigates at once on the first screen (layout-effect order, risk 1).
7. StrictMode: OnReady runs once; `flow.alive()` is true after the simulated remount, false after the real unmount.
8. `dispatch` after the unmount: `latest` and the saved view do not change.
9. `raiseToFlowHandler(systemError, inactiveScope)`: log only, no `location.assign`; with an active scope or no scope:
   the three sessionStorage keys and `location.assign('/UBTConnect/_error.html')`.
10. The static document (jsdom loads the file): the default texts; RELOAD hides the button and shows the spinner;
    after 2000 ms `location.assign('/UBTConnect/')`; `#exception-detail` hidden.
11. The ignore filter: an `OutOfContextException` from a click handler does not reach `console.error`.

Per hook (replaces the W23 test of the hook): "unmount while the R1 call is pending: no side effect, no state write";
where the hook has an R2 path: "unmount while the server action is pending: the toast shows, the own action or the
event or the navigation stops, nothing after it runs".

### 7.3 Parity

`route.py parity` visual on every route of a step (the states have no "leave while pending" capture, so the gate
proves no regression). A pixel check of `_error.html` against one TST capture (static GET, standing rule).

## 8. Risks

1. Layout-effect order: `NavigationHost` commits the entry in a layout effect (`NavigationHost.tsx:42-44`); a
   `beforePaint` OnReady of the first screen runs in a layout effect too (`flowState.ts:106-117`). When the screen's
   effect runs first, `currentEntry()` is still the old key and a navigation throws. Test 6 pins it; the fix, if
   needed, is to treat "entry not yet committed" as current.
2. A `try/finally` around a `flow.fetch` runs its `finally` after the unmount (TST never settles). The known cases
   are state writes (no-op). The reviewer checks each `finally` in the step.
3. The top-level ignore filter hides every `IgnorableSystemException`, as TST does. A wrong throw in a sync handler
   is then silent. The platform tests and the check script cover the known throw sites.
4. The service worker answers a navigation to `_error.html` with the app shell (open point 3). Verified in S0 with
   `npm run e2e:pwa`.
5. A hook that forgets `flow.fetch` keeps the W23 behaviour for that call. The check script of 7.1 finds it.
6. The 300 ms window: a data action that answers while the screen leaves still writes the state (same as TST,
   section 2.1). No user-visible effect; the view cache was saved before.

## 9. Decisions (user, 2026-10-28)

- Design A (a): the platform flow scope replaces W23.
- Error page (a): the static document `public/UBTConnect/_error.html`.
- Open points 1, 2, 4, 5, 6 and 7: (a), as recommended.
- The port gaps N2, N3 and N4 of `item8-w23-errorpage.md` §4 are fixed in the waves: N2 in group A, N4 in group C, N3
  in group D.
- N1 (OrbitAdminLanding `GetMilestoneScanFF`) waits with the deferred item "the 5 new TST screens" (`../RESUME.md`).
- Build: S0a (flow scope), S0b (error page), then the groups B, A, C, D, then the cleanup S5. Each step passes
  `npm run ci` and the 64-route parity sweep, then gets a local commit.
- Timing of R4 (user, 2026-10-28, after the live probe `probe-leave-rules.json`): (a) keep S0a. React blocks a
  navigation of the old screen from the start of the navigation. TST blocks it only after the new screen's controller
  exists (`setAsActiveScreen`, OutSystems.js W517020). The two differ only while the new screen's code loads. This is
  a known difference.
- S0b questions (user, 2026-10-28): Q3 (c), a separate item after item 8. It checks the TST global error handler
  (`setErrorHandler`) first, then designs the render and route errors (`ErrorBoundary`, `RouteError`). Q4 (a): the
  production precache of `_error.html` waits for the production phase.
- Group B questions (user, 2026-10-28): S1a Q1 and Q2 (a), the cleanup step S5 moves HouseholdCarousel to
  `useFlowScope` and `flow.run`, and replaces the OnReady `isAlive` checks after a module action with `flow.own`.
  S1b Q1 (a): `onScrollEnding`-style events keep `.catch((e) => raiseToFlowHandler(e, flow))`; S5 decides on a
  promise-returning `flow.run` from the count of such sites in groups A, C and D.
- Group A questions (user, 2026-10-28), all for the cleanup step S5: S2a Q1 (a), MessageDetail returns
  `(id) => flow.run(...)` for the Orbit event click, so a failure reaches the flow handler. S2b Q1 (a), useConnectShare
  moves to `useFlowState` and `flow.run`. S2c Q1 (a), check MessageList on the MCP and the TST code: does a failed
  GetMessages stop OnScrollEnding, the search-history selection and the pull-to-refresh? If yes, `refreshGetMessages`
  throws.
- Gates (user, 2026-10-28): `npm run unused` before the full `npm run ci`; groups C and D build in parallel with one gate;
  parity per change scope; one full 64-route sweep at the end of item 8.
