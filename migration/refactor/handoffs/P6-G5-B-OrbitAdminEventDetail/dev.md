## Result
status: pass
summary: OrbitAdminEventDetail is now a page. The block flows (OnReady/RefreshData and the scan flows) are in `hooks/useAdminEventDetail.ts`, which uses useFlowState and the pure `adminEventDetailState.ts`. ScreenBlock_AdminEventDetail is now the props-only `components/AdminEventDetailView.tsx`. `api.ts` and `types.ts` are replaced by `inputs.ts`, the domains api/event and api/member, and the new `api/image/repository.ts` (GetCacheableSignedImageURL). A temporary old-vs-new test gave equal traces in 14 scenarios. Quick checks, the full suite and arch_baseline pass. HomeFeed and Login did not grow (W21).

## Files changed
app/src/api/image/index.ts (exports fetchLegacySignedImageURL)
app/src/api/image/repository.ts (new: Connect2_LegacyShared GetCacheableSignedImageURL + GetBulkSignedImageURL, from the old api.ts)
app/src/api/image/repository.test.ts (new)
app/src/pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx (calls the hook, renders the view)
app/src/pages/OrbitAdminEventDetail/OrbitAdminEventDetail.test.tsx (new: page test on the MSW mocks)
app/src/pages/OrbitAdminEventDetail/inputs.ts (new: AdminEventDetailInputs + readInputs, from types.ts and api.ts)
app/src/pages/OrbitAdminEventDetail/staticEntities.ts (git mv from components/staticEntities.ts, content unchanged)
app/src/pages/OrbitAdminEventDetail/components/AdminEventDetailView.tsx (git mv from components/ScreenBlock_AdminEventDetail.tsx; rewritten props only, same DOM)
app/src/pages/OrbitAdminEventDetail/components/AdminEventDetailView.test.tsx (new)
app/src/pages/OrbitAdminEventDetail/components/actions.ts (now only GetFormattedLocalDateTime, which the popup uses)
app/src/pages/OrbitAdminEventDetail/components/OrbitErrorMessage.tsx (@origin only)
app/src/pages/OrbitAdminEventDetail/components/Popup_QRCodeScan.tsx (@origin and type imports only)
app/src/pages/OrbitAdminEventDetail/hooks/useAdminEventDetail.ts (new)
app/src/pages/OrbitAdminEventDetail/hooks/useAdminEventDetail.test.tsx (new, with the W23 tests)
app/src/pages/OrbitAdminEventDetail/hooks/adminEventDetailState.ts (new: state record, reducer, call inputs; ScannedUser and ScanError from types.ts)
app/src/pages/OrbitAdminEventDetail/hooks/adminEventDetailState.test.ts (new)
app/src/pages/OrbitAdminEventDetail/hooks/adminEventDetailActions.ts (new: deserializeQRCodeInformation, onApplicationEvent_Orbit, from components/actions.ts)
app/src/pages/OrbitAdminEventDetail/hooks/adminEventDetailActions.test.ts (new)
app/src/pages/OrbitAdminEventDetail/api.ts (deleted)
app/src/pages/OrbitAdminEventDetail/types.ts (deleted)
migration/refactor/handoffs/P6-G5-B-OrbitAdminEventDetail/dev.md (new)
Unchanged: mocks.ts, components/AdminPopup.tsx.

## Commands run
npm --prefix app run typecheck → exit 0
npx vitest run src/pages/OrbitAdminEventDetail src/api/image → 6 files, 44 tests pass
npx vitest run src/pages/OrbitAdminEventDetail src/api/image src/api/event src/api/member → 12 files, 205 tests pass
npx vitest run (full suite) → 499 files, 2758 tests pass
npx eslint src/pages/OrbitAdminEventDetail src/api/image → exit 0, no warning
npm run lint → 0 errors, 84 warnings (all Rule 4 rows outside this step's folders)
npm run format:check → all files pass (prettier --write was run on 3 new files of this step)
python3 migration/tools/refactor/arch_baseline.py check → exit 0 (83 warnings, 83 rows, 0 new, 0 gone; the route had no rows)
npx depcruise (npm run arch) → 211 → 209 warnings. Gone: the rule-9 warnings of api.ts (os-wire) and ScreenBlock_AdminEventDetail.tsx (exceptions, os-exceptions). One new path: hooks/useAdminEventDetail.ts → legacy/os/exceptions (exceptionMessage, isSystemException, UserException, the same import as CountryList and Notifications). Unchanged: mocks.ts (os-wire) and Popup_QRCodeScan.tsx (os-assets). api/image/repository.ts imports only api/client, legacy/os and its own domain (rule 7).
npx vite build + node build/bundle-report.mjs HomeFeed Login OrbitAdminEventDetail → HomeFeed 244.39 → 244.36 kB gzip (raw 751.29 both), Login 184.41 → 184.39 (raw 601.24 both). OrbitAdminEventDetail 213.15 → 213.84 (+0.69, 28 → 29 chunks: the route now loads the shared flowState chunk).
Temporary old-vs-new test → 14/14 scenarios equal, stable in 3 runs. The old page came from the index (G5-A/G5-B-Shared base). Both pages ran on the same deterministic scanner, and the test files were deleted before the hand-off. Each trace compares the whole body DOM at checkpoints, the scanner inputs, every request with its body, the audit events (log), the feedback messages and the URL. Scenarios:
- open, an empty query, an unknown event
- scan success, then Done → a code of another event, then Done → scanner closed
- a household member, an unknown member
- an unreadable code, then Ok → a code without ids → a scanner error
- an empty scan text, the plugin unavailable
- noqrcode, error (HTTP 500)
- back navigation after a scan (restored popup, no new call)
- leaving while the scanner is open, with a valid code and with a code without ids (the server calls, the audit event and the message still happen; the restored view keeps the spinner, as before)
Browser smoke check: vite preview of the build on port 5178 (stopped at the end), Playwright → the event rows, Scan QR Code, the result popup, Done → the next attendee. No console errors.

## Deviations from the brief
- W23. The flows write state only while the screen is mounted. A started flow still runs to the end after an unmount: the server calls, feedback messages, audit events and flow-handler errors happen once. OnReady has a once-guard against StrictMode. The QRCodeScanned payload now takes the member and the role from the flow's local values, not from the state. The state is no longer written after an unmount, and these are the values that were assigned just before, so the payload is the same. Unit tests cover the unmount during OnReady (answer and error) and during the scan (check-in, and a code that cannot be processed).
- The Get_EventInformation call is built from the state with IsFetchingData True. The old code read the state after that write. The request body is the same.
- OnReady keeps the old check "restored and a saved state" (`latest.current !== INITIAL_ADMIN_EVENT_DETAIL_STATE`, because useFlowState gives back the initial record when nothing was saved). The view-cache key changed from 'Model' to 'Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail'.
- GetCacheableSignedImageURL (Connect2_LegacyShared GetSignedImagesInBulk) goes to the existing domain api/image (decision W8: reuse api/image for ActionGetSignedImagesInBulk). The new file is `api/image/repository.ts` with `fetchLegacySignedImageURL`, named after `imageCache.legacySignedImage`. It has its own private textToLongInteger, because rule 7 does not let api/ import shared/. GuestArrangements, HelpersDetail, MilestoneDetail and QRCodeGenerate have the same function in their api.ts. Their B steps can reuse this one. When they run in parallel, the master may need to merge `api/image/index.ts` and `repository.ts` by hand.
- No container (criterion §2.3: one data hook). The page calls the hook and passes props, as move-map row 23 says. The view takes the inputs (spread) and the state record. Its types come from the hook state file, as CountryListContent does.
- Kept names: OrbitErrorMessage, Popup_QRCodeScan and AdminPopup keep their names and code. Only the `// @os-block` → `@origin` line and the type imports changed. Their compiled-line references stay because this step did not rewrite them. staticEntities.ts moved to the page root, because the hook, the actions file and the view read it. Its comments still say "SB …" without the definition that the deleted block file gave. This file was not rewritten.
- The mocks.ts comment says that the error scenario shows NoInformation_Orbit. Old and new both keep the skeleton, because IsFetchingData stays True after the exception. The page test checks the actual behavior. mocks.ts is not changed.
- For the browser check I used `vite preview` of the build on port 5178, not the dev server. The worktree's node_modules is a symlink to the main tree, so a dev server here would write the shared `node_modules/.vite` deps cache.
- For the documenter: the move-map.csv rows 23 (shape hook+component, status) and 315; calls-by-domain.md (3 rows of `screens/OrbitAdminEventDetail/api.ts` → api/event, api/member, api/image); api/README.md (image domain now has a repository with 1 call; the event and member paragraphs say "the old api.ts files re-export it", which is no longer true for this route); the comment "The calls stay with their callers until Phase 6" in api/image/keys.ts; the CHANGELOG.

## Questions for the user
none
