# G1 developer report (mode new)

## Result

Status: `pass`.

- The compiled handler was found: App_Common `OnException` in
  `migration/shell/sources/UBTConnect.App_Common.controller.js` ("ACF", lines 12-125; SecurityException branch
  lines 61-89). `raiseToFlowHandler` (`app/src/legacy/os/exceptions.ts`) now follows it, in the order of ACF:
  - CommunicationException: `showCommunicationExceptionMessage()` (no change, ACF:46-59).
  - SecurityException, with "Has User Id?" = `currentUserId() !== null` (ACF:66-68):
    - signed in: `showExceptionMessage(message, true)` (ACF:69-75). That is the forced-logout path: the toast, then
      `signedOutRemotely()`, then `pageRedirect('\UBTConnect\Login', true)`. No second logout path.
    - anonymous: `setAppCallbackCurrentLocation()` (AppManager_SetAppCallback_CurrentLocation, OutSystems_LastURL =
      `window.location.pathname`), then `/UBTConnect/Login?In_IsFromInvalidPermissions=True` with the Default
      transition, as a push (ACF:76-85; `navigateTo(url, transition, callContext, true)`: the 4th argument is the
      "do not stop pending resources" flag, not replace, OutSystems.js line 8 `function M`).
  - Any other error: `showExceptionMessage(message, false)` (no change, ACF:91-105).
- The anonymous branch must navigate from a plain function (`raiseToFlowHandler` has about 250 callers, many as
  `.catch(raiseToFlowHandler)`). New `osNavigateTo(path, params, options)` in `platform/navigation/osNavigate.ts`. It
  uses the same code as `useOsNavigate` (shared `goTo`: flag redirects, ReplaceOnUpcomingNavigation, transition)
  through the router navigate that `NavigationHost` registers (`setHostNavigate`). Without a NavigationHost it sets
  `location.href`, as the runtime's navigateTo does when no router exists (OutSystems.js line 8: no `goTo` →
  `changeWindowLocation`).
- Hierarchy fact checked in `migration/runtime-sources/OutSystems.js` line 2: `InvalidLoginException` and
  `NotRegisteredException` extend `SecurityException`. They take the same branch (as in the original;
  `isInstanceOf` is `instanceof`). Effect: a NotRegisteredException that a screen re-raises (CountryList, MyBookmarks,
  LDM_MyEvents_V2, Directory_EntityDetailsActions) now logs out or goes to Login instead of a toast. No mock answers
  a security exception in the default scenario, so parity does not see it.
- Mock scenario `security` (`?mock=security`) in `app/src/screens/ContactUsDetails/mocks.ts`. Both ContactUsDetails
  data actions answer the contract's error answer `{ error, exception: 'SecurityException' }` with HTTP 500. Every
  other scenario falls through to the existing handlers. Manual check:
  - Signed in: Menu → Contact Us → a subject. GetLocalityTimezone fails: toast, logout, full load of Login.
  - Signed out: Contact Us → a subject. GetCountriesNames fails: Login with the flag, and ContactUsDetails is the
    sign-in callback.
  - `?mock=real` goes back to the normal data.
- Tests were written first. The 6 SecurityException tests failed before the fix, and the 3 "other exception" tests
  passed. All pass after the fix.

## Files changed

| File | Change |
| --- | --- |
| `app/src/legacy/os/exceptions.ts` | SecurityException branch in `raiseToFlowHandler`; JSDoc cites ACF lines |
| `app/src/legacy/os/exceptions.test.tsx` | new: signed-in (order toast → signedOut → page load; same end state and storage as `showExceptionMessage(msg, true)`; subtypes), anonymous (3 classes), other types (UserException signed in and anonymous, CommunicationException) |
| `app/src/platform/navigation/osNavigate.ts` | shared `goTo`; new `setHostNavigate`, `osNavigateTo` |
| `app/src/platform/navigation/osNavigate.test.tsx` | 3 tests for `osNavigateTo` (router path, redirect, no-router fallback) |
| `app/src/platform/navigation/NavigationHost.tsx` | registers the router navigate for `osNavigateTo` |
| `app/src/platform/session/auth.ts` | comment of `signedOutRemotely` only (the "G1 not ported" text was stale) |
| `app/src/screens/ContactUsDetails/mocks.ts` | scenario `security` (2 fall-through handlers) |
| `app/src/api/message/repository.test.ts` | test of the scenario `security` |

Not changed by this step: `migration/metrics/ledger.csv`, `migration/refactor/auto-decisions-2026-10-22.md` and
`migration/refactor/followups.md`. They show as modified in `git status`, but I did not edit them (master edits).
No change to `openapi.yaml`, fixtures or CSS.

## Commands run

- `npm --prefix app run typecheck`: pass.
- `npx vitest run src/legacy/os/exceptions.test.tsx`, before the fix: 6 failed, 3 passed (expected).
- `npx vitest run src/api/message src/legacy/os src/platform/navigation src/platform/session src/platform/feedback`:
  38 files, 324 tests, pass.
- `npx vitest run` (full suite, extra): 377 files, 2046 tests, pass. The single "Not implemented: navigation to
  another Document" line comes from `src/shared/UBTJavaScriptUtils/lib/actions.test.ts`. That file did not change,
  and the line was there before this step.
- `npx eslint` and `npx prettier --check` on the 8 changed files: pass.
- `npm run arch` before and after: the same 184 warnings, 0 errors (the sorted lists are the same; only the module
  count changes, +1 test file). `npm run lint:arch`: exit 0. The one ESLint warning
  (`components/ui/os/OSPopup/usePopupWidget.ts`) was there before this step.

## Deviations

1. Rule 6: I put the `osNavigateTo` tests into `osNavigate.test.tsx` with a one-off Python insert script in the
   session scratchpad, not with the Edit tool or a script in `migration/tools/refactor/`. It was not a `sed -i`. The
   result is the same as an Edit. All other edits were made with Edit or Write.
2. The test file is `exceptions.test.tsx` (it renders routes), not `exceptions.test.ts` as in the followups row.
3. The scenario uses an msw fall-through handler with the literal error answer, not `contractHandler` with
   `throw new SecurityException(...)`. Two reasons:
   - an import of `legacy/os` from `screens/` adds a new rule-9 warning;
   - `recordedHandler` (GetLocalityTimezone) cannot fall through.

   The body is the one that `contractHandler` sends for a thrown SecurityException. The message
   "You do not have access to this information." is fictional: no TST capture has a SecurityException.

## Notes for the documenter and the master

- These docs still say that the SecurityException trigger waits for the BFF. Update them for G1:
  - `app/src/platform/README.md:11`
  - `app/docs/architecture/overview.md:108`
  - `app/docs/guides/api-and-mocks.md:45`
  - `app/docs/guides/shell.md:332` (the `raiseToFlowHandler` summary)

  The new scenario `security` can go in the scenario list of the mocks guide.
- `migration/knowledge/shell-facts.md` U1 lists the open question "Is NotRegisteredException a SecurityException
  subtype?". `OutSystems.js` line 2 now answers it: yes, and InvalidLoginException is a subtype too.
- These ACF branches are still not ported. They are outside G1, and their behavior is the same as before this step:
  - BubbleCommunicationException (ACF:31-44). A `UserException('…', 'UBTConnect.BubbleCommunicationException')` that
    reaches `raiseToFlowHandler` shows `ShowExceptionMessage(msg, False)`, not `ShowCommunicationExceptionMessage`.
    For example, with `?mock=error` the CountryList fetch error (a CommunicationException
    "Request failed with status 500" that the screen bubbles) would show "Request failed with status 500." as the
    toast. The original shows "Service Interruption". I found this by reading the code; I did not run it.
  - `OS.ErrorHandling.ignoreError` (ACF:24-26).
  - The re-throw of system exceptions to the runtime default (ACF:107-114).

  These are candidates for a new followups row.
