# Plan: live API bridge (the local app calls the OutSystems TST API, read-only)

Status: proposed 2026-11-07, not begun. The user decides D1 to D6 and says "start".

## 1. Goal

The React app on localhost gets its API answers from the real OutSystems TST (or DEV) backend instead of MSW. Reads
only, module by module. Nothing in the app changes except its configuration. The same work is the first two
phases of the real integration (contract check and transport adapter), done before a backend exists.

## 2. Facts the design rests on (file:line)

| Fact                                                                                                                                                                                                                                                                                                       | Where                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The app calls `POST /api/<Module>/<Action>` with the inputs as body; the answer is `{ data }`. Typed by the contract.                                                                                                                                                                                      | `app/src/api/client/callAction.ts:13`, `:86-116`                                                                                                                                |
| Every contract operation keeps its original path: `x-os-paths: ['screenservices/<Module>/<Flow>/<Screen>/<Action>']`; 184 operations, 46 with `x-os-writes: true`; `x-os-inputs: 'screen-variables'` marks data actions that receive the screen variables.                                                 | `app/src/api/openapi.yaml:13-49`                                                                                                                                                |
| OutSystems request: `POST /UBTConnect/screenservices/<Module>/<Flow>/<Screen>/<Action>`, body `{ versionInfo: { moduleVersion, apiVersion }, viewName, inputParameters }` for actions, `screenData: { variables }` for screen data actions; header `X-CSRFToken` from the `crf` key of the session cookie. | `migration/sources/runtime/OutSystems.js` (`versionInfo:{moduleVersion:…getLastApplicationVersionToken…,apiVersion:t}`, `screenData={variables:…}`, `CSRFHeader="X-CSRFToken"`) |
| `moduleVersion` = `versionToken` of the live `moduleinfo`; `apiVersion` is the third argument of every compiled `callDataAction(name, path, apiVersion, …)`.                                                                                                                                               | `migration/sources/runtime/moduleinfo.json` (`manifest.versionToken`), `migration/sources/raw/UBTConnect.Home.HomeFeed.mvc@72d0941a.js` (`"WEbiZcexFuzyELbRsdqeIw"`)            |
| Answer: `{ data, exceptions, versionInfo }`; `versionInfo.hasApiVersionChanged` means the app was republished (`ViewHasChangedException`). The app already has `ApiError.kind = 'viewChanged'`.                                                                                                            | `OutSystems.js` (`hasApiVersionChanged`), `app/src/api/client/apiError.ts`                                                                                                      |
| The capture pipeline signs in with the scripts only (`site_auth.cjs`, `.auth/`), keeps a read-only guard by action name and by the user's allow list, and records HAR of the real calls.                                                                                                                   | `tools/pipeline/site_auth.cjs:275-305`, `tools/pipeline/record_har.cjs:60-70`, `migration/capture-plan.json` → `defaults.allowActions`                                          |
| Mocks answer only while `VITE_USE_MOCKS` is not `false`; an unhandled request or `passthrough()` goes to the network. `apiBaseUrl` comes from `VITE_API_BASE_URL`.                                                                                                                                         | `app/src/platform/config/config.ts:22-33`, `app/src/mocks/inProcess.ts:8-37`                                                                                                    |
| Hard rule 6: read-only on the real app; only the calls of `defaults.allowActions` may run as user actions. Rule 1: nothing of `.auth/` is read by a person or an agent.                                                                                                                                    | `CLAUDE.md`                                                                                                                                                                     |

## 3. Decisions for the user

| Id  | Question                         | Options                                                                                                           | Recommendation                                                                              |
| --- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| D1  | Target environment               | a) TST b) DEV c) both, selected by a flag                                                                         | a) TST first: source of truth, contract made from its code. c) later.                       |
| D2  | Writes                           | a) blocked always b) blocked except `allowActions` of the capture plan c) a per-session allow list the user types | b) as rule 6; c) only on a non-production environment, later.                               |
| D3  | Session                          | a) the bridge reuses the storage state file of the capture login b) its own login flow                            | a) one login path, no new secret handling.                                                  |
| D4  | Switch granularity               | a) per module (`VITE_API_LIVE=UBTConnect,UBTConnect_Utils`) b) per operation c) all or nothing                    | a), with b) as a debug override (`?live=DataActionGetServices`).                            |
| D5  | Real data on screen              | a) never stored (no fixture, no screenshot in git, no note) b) screenshots allowed in the scratchpad only         | a). The parity tool is not run against live data.                                           |
| D6  | Where the contract mismatches go | a) `migration/knowledge/contract-conformance-<date>.md` + a question per mismatch b) fixed by an agent at once    | a): a mismatch can be a contract error, a mapper error or TST drift; the user decides each. |

### 3.1 Decisions taken (user, 2026-11-07)

- D1: TST ("D1: TST").
- D3: a) the bridge reuses the storage state of the capture login ("D3: a)").
- D5: a) real data is never stored ("D5: a)").
- D6: a) mismatches go to a report and a question each ("D6: a").
- D2: b) now: the 40 write calls are blocked, the 6 calls of `allowActions` pass ("Trước mắt làm b)"). The user also
  needs to test the write calls later ("tương lai tôi cũng cần test call API ghi"). Phase B7 "writes on a test
  environment" comes after B6: DEV or a test account, one call at a time, each approved by the user. Not planned in
  detail yet.
- D4: a) per module, every module live by default ("D4: a").
- Way of work (user, 2026-11-07: "chạy theo từng phần, done phần nào thì dừng lại chờ tôi duyệt tiếp"): the master
  runs one phase. It reports the result in 5 lines (counts, files, what needs a decision) and stops. The next phase starts
  only after the user approves in the chat. The approval words are recorded in the status table below.

### 3.2 Status

| Phase              | Status                | Approved by the user (words, date) |
| ------------------ | --------------------- | ---------------------------------- |
| B0                 | not begun             | -                                  |
| B1                 | not begun             | -                                  |
| B2                 | not begun             | -                                  |
| B3                 | not begun             | -                                  |
| B4                 | not begun             | -                                  |
| B5                 | not begun             | -                                  |
| B6                 | not begun             | -                                  |
| B7 (writes, later) | not planned in detail | -                                  |

## 4. Phases

| #   | Phase          | Output                                                                                                                                                                                                                                                                                                                 | Gate                                                                                                                      | Estimate                           |
| --- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| B0  | Prepare        | branch `feature/live-bridge` from `sync/tst-2026-11` after the sync wave closes; the user's D1–D6                                                                                                                                                                                                                      | the user says start                                                                                                       | ½ h                                |
| B1  | Contract index | `tools/bridge/contract_index.py`: from `openapi.yaml` and the compiled sources, one JSON row per operation: module, action, original path, viewName, apiVersion, kind, inputs kind, writes flag. `--check` fails when an operation has no path or no apiVersion.                                                       | unit test; 184 rows; 0 missing                                                                                            | ½ day                              |
| B2  | Bridge         | `tools/bridge/bridge.cjs` (Node, stdlib + the project's Playwright only for login): listens on `:5180`; `POST /api/<M>/<A>` → envelope → TST; answer `{ data }` or the contract error shape; guard; log; `moduleinfo` refresh on `hasApiVersionChanged`.                                                               | unit tests with recorded HAR bodies (`tools/pipeline/har_to_fixtures.py` parsing reused); 6 app-start calls answered live | 1–1½ days                          |
| B3  | App switch     | `VITE_API_LIVE` (modules) and `VITE_API_BASE_URL=http://localhost:5180`; MSW handlers of a live module return `passthrough()`; `?live=` override; a badge in the flag panel "live: UBTConnect". No page changes.                                                                                                       | `npm run ci`; a production build stays mock-free                                                                          | ½ day                              |
| B4  | Conformance    | `tools/bridge/conformance.py`: replays the recorded read-only requests through the bridge, validates every answer against `openapi.yaml` (jsonschema), compares the field set with the mapper's reads; validates every fixture against the schema too. Report in `migration/knowledge/contract-conformance-<date>.md`. | report; questions to the user (D6)                                                                                        | 1 day + the fixes the user decides |
| B5  | Route smoke    | `tools/bridge/smoke.cjs`: opens every captured route on localhost with the live modules, waits for settle, lists the calls the bridge served and compares with `migration/screens/<Route>/analysis/calls.json` (names and order, as `route-check`). Console errors = fail. Nothing stored but the call names.          | 55 routes, 0 unexpected calls, 0 console errors                                                                           | 1 day                              |
| B6  | Close          | guide `app/docs/guides/live-api.md`; ADR "live bridge and transport adapter"; `tools/README.md` rows; context note; ledger                                                                                                                                                                                             | the user accepts                                                                                                          | ½ day                              |

Total: 4½ to 5 days of work, plus the fixes of B4. Tokens: B1–B3 ≈ 400 k, B4 ≈ 300 k + fixes, B5 ≈ 200 k.

## 5. The bridge (B2) in detail

```
browser ──POST /api/M/A {inputs}──▶ bridge :5180 ──POST /UBTConnect/screenservices/M/Flow/Screen/A──▶ TST
                                      │  envelope: versionInfo{moduleVersion,apiVersion}, viewName,
                                      │            inputParameters | screenData.variables
                                      │  headers: Cookie (storage state), X-CSRFToken (crf of the cookie)
                                      │  guard:   writes blocked (D2), allow list, log
         ◀── { data } | { error } ────┘  answer:  data | exceptions → the contract error shape
```

- Session: `bridge.cjs login --account <label>` runs `site_auth.cjs`, which stores the Playwright storage state in
  `.auth/state-bridge.json` (D3). The bridge reads cookies from that file at start; it never prints them. When TST
  answers 401/302 to the sign-in page, the bridge answers `{ error: 'session' }` and logs "login needed".
- Guard: the operation rows of B1 give `writes`; a write is answered `403 { error: 'read-only', action }` unless the
  name is in `defaults.allowActions` of the capture plan (D2 b). The name regexes of `record_har.cjs:65-66` are the
  second net, for operations the contract marks wrong.
- Envelope: `inputParameters` for actions; for `x-os-inputs: 'screen-variables'` the body is
  `screenData: { variables: inputs }`. The compiled data action receives the screen variables by name. The ones the
  app does not send take the server defaults. B4 tells whether any call needs more.
- Versions: `moduleVersion` from the live `moduleinfo` (fetched at start, cached, refreshed when an answer has
  `hasApiVersionChanged`); `apiVersion` from the B1 index. After a TST publish the index is rebuilt from the live
  compiled files (`survey_diff.py --update-live-files` then `contract_index.py`).
- Answer: `{ data }` as the contract; `exceptions` → `{ error: { kind, cause } }` as `apiError.ts` expects (the same
  shapes the MSW handlers produce today, so `callAction` needs no change).
- Log: one line per call `time module action status ms` to `migration/bridge/log-<date>.txt` (git-ignored); no
  payload, no cookie, no URL query.
- Environment (D1): `--origin https://ubtm-tst.ubtconnectglobal.com` (default) or DEV.

## 6. What stays as it is

- `callAction.ts`, mappers, hooks, screens: no change. The bridge speaks the contract.
- MSW scenarios and the mock store keep working for the modules that are not live, and for every test.
- Parity: runs on mocks only (D5). Live data is for the eyes and for B4/B5 checks.
- Hard rules 1, 6 and 7 as they are: the bridge is a script that reads `.auth/` itself; writes stay blocked;
  nothing is pushed.

## 7. Risks

| Risk                                                              | Effect                     | Mitigation                                                                                                              |
| ----------------------------------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| A screen data action needs screen variables the app does not keep | empty or wrong answer      | B4 lists the inputs per call from the compiled `screenData`; the contract gets the missing variables with `x-os-inputs` |
| TST publishes while testing                                       | `hasApiVersionChanged`     | bridge refreshes `moduleinfo`; the index rebuild is one command                                                         |
| Session expires or a policy appears at sign-in                    | 302 to login, policy block | `bridge.cjs login` again; policy accounts are known (`migration/knowledge/test-accounts-coverage-2026-11-06.md`)        |
| The guard misses a write by name                                  | a write on TST             | the contract flag and the regex both apply; unknown operations are blocked                                              |
| Real data leaks into git                                          | privacy                    | D5; `.gitignore` for `migration/bridge/`; the smoke stores call names only                                              |
| DEV differs from TST                                              | false mismatches           | D1: TST first; DEV as a flag, differences noted (CLAUDE.md "Environment")                                               |

## 8. Out of scope

A backend or BFF; authentication of end users in the React app (the bridge uses the test session); writes on
production; offline sync; performance work. Writes on a test environment are phase B7, after B6 (D2). These come after the user chooses the target of the real integration
(plan C in the chat of 2026-11-07: adapter first, BFF per module later).

## 9. Verification

- B1: `python3 -m unittest discover -s tools/bridge`; `contract_index.py --check` exit 0.
- B2: `node tools/bridge/bridge.cjs selftest` posts the 6 app-start calls and prints status and `data` keys (no
  values); the write guard test posts `ServiceAPIAddBookmark2` and expects 403.
- B3: `npm --prefix app run ci`; `VITE_USE_MOCKS=false npm run build` passes `build/mockFree.ts`.
- B4: the report lists every operation with ok / mismatch / not-replayable (no recording) counts.
- B5: `smoke.cjs` prints `ROUTES 55 UNEXPECTED 0 ERRORS 0`.
