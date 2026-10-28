# context-063: item 2, the failed data calls (2026-10-28)

## Result
- Item 2 of the user's list (`migration/clarify/RESUME.md`) is built: one query-cache subscription raises a failed
  fetch once, while a mounted screen uses the query; `raiseToFlowHandler` follows App_Common in the compiled order.
- Evidence and status: `migration/clarify/review/item2-fetch-errors.md` (E1–E9, D1–D14, §5); design and addendum:
  `item2-solution.md` (Fable, React architect). 24 checklist rows recorded (`rechecked`, 13 stale marks gone).
- Gates: `npm run ci` green (4364 tests). Parity sweep on port 5174 (this repo): 64 routes, 0 with diffs.

## Decisions (user, 2026-10-28)
- Evidence order: the MCP (DEV) first, then the compiled TST code; TST wins on a difference, noted.
- A mismatch goes to a Fable agent (React architect) for a design that keeps the behaviour; the user approves it.
- Design (a) central subscription; D1 (b) error-page marker for a system exception; D3 (a) the
  "NoteCommunicationError" branch now; after E9: skip a query with no observer; SupperMeetings raises nothing after
  the unmount. The other W23 flows wait for a later decision.

## Facts learned (evidence)
- TST, read-only probes (`migration/clarify/tools/probe_fetch_errors.cjs`): a failed fetch of a screen or block
  (UBTConnect, EmbedFeed, EmbedMyEntertaining, Connect2_LegacyShared) shows the App_Common message (E3). A fetch that
  fails after the user left shows nothing (E9). Blocks call an undeclared `controller.handleError`; the mechanism is
  not readable, the probe facts stand.
- MCP = TST live for App_Common OnException (new NoteCommunicationError If node) and ShowCommunicationExceptionMessage
  (new CheckIsOnlineNow, `navigator.onLine`); B4 re-check confirmed (5 items).
- The `meta.errorLog` "log only" of HomeFeed and Feed was not TST behaviour (D4, D5).
- MCP tool notes: flow handler = `IOnExceptionAction`, system event = `ISystemEvent`, screen action = `IScreenAction`,
  data action = `UI.Mobile.IDataAction`, screen aggregate = `UI.Mobile.IScreenAggregate`.

## Files changed
- `app/`: `api/client/queryClient.ts`, `cache.ts`, `platform/feedback/flowErrors.ts`, `exceptionMessages.ts`,
  `errorPage.ts` (new), `legacy/os/exceptions.ts`, `app/ErrorPageGate.tsx` (new), `main.tsx`,
  `platform/navigation/testRouter.tsx`, `test/setup.ts`, 6 page/container hooks, tests, 3 guides.
- `migration/clarify/`: review files, `tools/probe_fetch_errors.cjs` (new), `tools/mark_stale.py`, 13 checklists,
  `INDEX.md`, `builds/README.md`, `RESUME.md`.

## Open issues
- Later (user): the other W23 flows (`item2-solution.md` §8.2 b); a capture of `_error.html`.

## Next
- Item 3 of the user's list: merge the two custom dropdowns and add `useValidationWidget`.
