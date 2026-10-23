## Result
status: pass
summary: All gates pass. `npm run ci` exit 0 (346 files, 1650 tests). Parity strict --all with both references: 64 of 64 routes clean. The Q12 review points hold (details below).

## Files changed
none (only this file)

## Commands run
- dev server check: `curl http://localhost:5174/UBTConnect/HomeFeed` → 200; vite cwd = `/Users/khaitruong/Projects/connect-new/app`
- `npm --prefix app run ci` → exit 0, 346 test files, 1650 tests passed, build ok
- `npm --prefix app run lint:arch` → 0 errors, 1 warning (`components/ui/os/OSPopup/usePopupWidget.ts`, rule 4, not a file of this step); no cycle
- `cd app && npx eslint src/legacy/os src/api/client src/platform/session src/platform/feedback` → exit 0, no output
- `python3 migration/tools/refactor_parity.py --level strict --all --ref both --app http://localhost:5174 --report app/docs/refactor/reports/P5-1.md` (no `--out`) → exit 0, outsystems 64/64 clean, self 64/64 clean, 0 new differences, 4.2 min. Includes the offline and loading states of the routes.
- P5-F8 pending check: without `--out`, the output went to `migration/refactor-parity/last/` (folders `outsystems` and `self`, written 09:45-09:49 during this run), as before. Confirmed.
- `npm --prefix app run build && node app/build/bundle-report.mjs` → HomeFeed 238.70 kB gzip (baseline 236.40, +0.97%), Login 187.25 kB gzip (baseline 184.61, +1.43%). Both within +5%.
- `parity_sweep.py`: not run (the gate applies only before P0-2).
- `rf.py diffcheck --move`: not applicable (change step).

## Diff review
1. No change in `openapi.yaml`, `src/mocks/`, `public/UBTConnect/css/`: pass.
2. No deleted test file: pass. Test files added or extended only.
3. Scope: pass. Code changes are only in `legacy/os`, `api/client`, `platform/session`, `platform/feedback`. Other changes are in migration/refactor docs, state and ledger.
4. `@origin`: not needed. `apiError.ts` ports no OutSystems screen or block, and no file ported one in this step. pass.
5. Not a move step: n/a.
6. Behavior change: none found.
   - `callAction` is unchanged (no diff). `raiseToFlowHandler` is unchanged.
   - `signedOutRemotely()` is called only at `platform/feedback/exceptionMessages.ts:123`, in the forced-logout branch. The redirect after it is unchanged. `signOut()` and `signedOutRemotely()` share `connectLogout(event)`; the step order is the same and only the session event differs.
   - The machine treats `signedOutRemotely` exactly as `signOut`. `machine.test.ts` has a row for each signed-in status and a check that the result equals the `signOut` result.
   - The test in `auth.test.ts` does compare both paths. It prepares the same signed-in device (PIN, persistent client variable, two cache entries, local-note rows) and runs `signOut` and then `signedOutRemotely`. It compares status sequence, machine status, shell state, PIN, the full localStorage and sessionStorage, caches, IndexedDB rows and server calls with `toEqual`. It also asserts concrete values, so it is not vacuous. Limit: the session event itself is told apart only in `machine.test.ts`, which is acceptable.
   - `ApiError`: kind is `timeout | network | server | security | viewChanged`; `cause` is the OutSystems exception (`declare readonly cause: Exception`). Tests check the kind and the `cause` class for timeout, network, 500, 401, SecurityException, 404, UserException (with its specificType), `asApiError` and `ofKind`.
   - Mapping in `legacy/os/os-exceptions.ts` is complete for the classes the clone has. Defined: Server, DataBase, Communication, Security (with InvalidLogin, NotRegistered), System/IgnorableSystem, ViewHasChanged, AbortActivityChange, User. ViewHasChanged → viewChanged; Security family → security; the rest → server. BubbleGenericException, BubbleCommunicationException, OnlineCommunicationException and UnknownException are not exception classes that `callAction` raises (they only appear as identifiers elsewhere). A both-ways test covers each kind.
   - Note: the 401 and SecurityException triggers do not call `signedOutRemotely()` yet (waits for the BFF; known gap G1 in followups.md). This is stated in dev.md and matches the brief's decision Q12 option C.
7. No secret, password, PIN or account email in the diff: pass (the test PIN is a mock value `1357` in an existing test pattern).

## Deviations from the brief
none from the tester side. The brief's gate line uses `--changed`; the step's Check says `--all`, and I ran `--all`.

## Questions for the user
none
