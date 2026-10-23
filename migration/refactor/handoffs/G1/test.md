# G1 tester report

Status: `pass`

## Commands run

- Server check: `curl http://localhost:5174/UBTConnect/HomeFeed` gives 200; vite cwd is `/Users/khaitruong/Projects/connect-new/app`.
- `npm --prefix app run ci`: exit 0. 377 test files, 2046 tests pass; build ok. The one ESLint warning is
  `components/ui/os/OSPopup/usePopupWidget.ts` (rule 4), a file this step did not change (the developer reports it as
  there before).
- `python3 migration/tools/refactor_parity.py --level strict --changed --ref both --app http://localhost:5174 --out migration/refactor-parity/G1`
  (`--out G1` alone is refused: it must be under `migration/refactor-parity/`): 64 routes, outsystems 64 clean / 0
  differences, self 64 clean / 0 differences. PASS. Report: `migration/refactor-parity/G1/report.md`.
- Manual run with Playwright (headless Chromium, workspace `app/node_modules`), mock session signed in by default:
  - Signed in, `/UBTConnect/ContactUsDetails?mock=security`: GetLocalityTimezone answers 500; the page ends on
    `/UBTConnect/Login` through a full page load (two main-frame navigations), no flag. This is the forced-logout path.
  - Then signed out (the session was cleared by that logout), the same URL: GetCountriesNames answers 500; the app ends on
    `/UBTConnect/Login?In_IsFromInvalidPermissions=True`. This is the requested scenario.
- Not run: `lint:arch` and `rf.py diffcheck --move` separately (the step is not a move; `ci` includes the lint).

## Gate

| Check | Result |
| --- | --- |
| `npm run ci` | pass |
| parity strict, both refs | pass, 0 differences |
| Manual scenario (signed out) | pass |
| Manual scenario (signed in) | pass (Login by full load) |

## Diff review (`git diff HEAD`)

1. No change in `openapi.yaml`, fixtures or CSS: pass. The `mocks.ts` change adds a scenario handler only; the existing
   handlers are unchanged and come after it.
2. No deleted test file: pass. New `exceptions.test.tsx`; tests added to `osNavigate.test.tsx` and `repository.test.ts`.
3. Scope: pass. The 8 code files are the ones the brief needs (handler, osNavigateTo, NavigationHost registration, auth
   comment, scenario). `ledger.csv`, `auto-decisions-2026-10-22.md` and `followups.md` are changed by the master, not
   by the developer.
4. `@origin`: not applicable (no new ported screen or block).
5. Move step: not applicable.
6. Change step, no unrequested behavior change: pass. `raiseToFlowHandler` matches ACF lines 61-89 of
   `UBTConnect.App_Common.controller.js`: the signed-in check `getUserId() !== nullIdentifier` goes to
   `showExceptionMessage(message, true)`; else `setAppCallbackCurrentLocation()` then navigate to
   `/UBTConnect/Login?In_IsFromInvalidPermissions=True` with the Default transition. One logout path (`signedOutRemotely`
   through `showExceptionMessage`). CommunicationException and other errors are unchanged. `useOsNavigate` now uses the
   shared `goTo` with the same body. Side effect to know: subclasses of SecurityException (InvalidLoginException,
   NotRegisteredException) also take the branch, as in the original (the developer documented it).
7. Secrets: pass (none in the diff; the mock message is fictional).

Deviation 1 (one-off Python insert for the `osNavigateTo` tests): the result is a normal edit in the diff
(`osNavigate.test.tsx`, a `describe` block, formatted; prettier/eslint pass in `ci`). Nothing remains in the repo from
the script. Accepted.

## Failures

None.
