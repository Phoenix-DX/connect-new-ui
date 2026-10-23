## Result
status: pass
summary: ContactUsDetails is now a page with a hook (`useContactUsDetails`), a pure state file (`contactUsDetailsState`) and 6 page components. `api.ts` and `types.ts` are deleted. The hook calls `@/api/message` directly. The route inputs are in `inputs.ts`. A temporary old-vs-new check in 8 mock scenarios gave the same DOM after each step, the same calls, request bodies, feedback and final location (deleted after use). Typecheck, eslint, prettier, the 42 route tests and `arch_baseline.py check` pass.

## Files changed
app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx (rewritten: route only; renders DetailLayout directly)
app/src/pages/ContactUsDetails/inputs.ts (added: ContactUsDetailsInputs, readContactUsDetailsInputs)
app/src/pages/ContactUsDetails/api.ts (deleted)
app/src/pages/ContactUsDetails/types.ts (deleted)
app/src/pages/ContactUsDetails/staticEntities.ts (git mv from components/staticEntities.ts, content unchanged)
app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts (git mv from components/actions.ts, rewritten: state, reducer, client actions, call inputs)
app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.test.ts (git mv from components/actions.test.ts: old tests kept, reducer and call-input tests added)
app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts (added: the flows)
app/src/pages/ContactUsDetails/hooks/useContactUsDetails.test.tsx (added)
app/src/pages/ContactUsDetails/components/InformationDialog.tsx (git mv from components/Dialog_Information.tsx; renamed, props header/body/buttonLabel, `@origin` replaces `// @os-block`)
app/src/pages/ContactUsDetails/components/MessageTextArea.tsx (git mv from components/TextArea_Message.tsx; renamed, exported props type)
app/src/pages/ContactUsDetails/components/ContactUsDetailsHeader.tsx (added)
app/src/pages/ContactUsDetails/components/ContactUsDetailsHeader.test.tsx (added)
app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx (added)
app/src/pages/ContactUsDetails/components/ContactUsMessageForm.test.tsx (added)
app/src/pages/ContactUsDetails/components/ContactUsDetailsFooter.tsx (added)
app/src/pages/ContactUsDetails/components/ContactUsDetailsFooter.test.tsx (added)
app/src/pages/ContactUsDetails/components/SubmittedConfirmationDialog.tsx (added)
app/src/pages/ContactUsDetails/components/SubmittedConfirmationDialog.test.tsx (added)
migration/refactor/handoffs/P6-G2-B-ContactUsDetails/dev.md (added)

## Commands run
git branch --show-current → rf/prefetch-P6-G2-B-ContactUsDetails-53ac3e7 (prefetch worktree from 53ac3e7, as the master said)
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages/ContactUsDetails → exit 0; 6 files, 42 tests passed
cd app && npx vitest run src/app src/mocks src/legacy/os/exceptions.test.tsx src/api/message → exit 0; 11 files, 112 tests passed
cd app && npx eslint src/pages/ContactUsDetails → exit 0; 0 problems
cd app && npx prettier --check src/pages/ContactUsDetails → exit 0 (after `prettier --write` on 3 new files)
cd app && npm run arch → 0 errors, 214 warnings (same total as before the change); the route has 2 rule-9 warnings, now in hooks/useContactUsDetails.ts (they were in ContactUsDetailsPage.tsx), same targets
python3 migration/tools/refactor/arch_baseline.py check → exit 0; 48 warnings, 48 rows, 0 new, 0 gone (no row of this route)
cd app && npx knip → the route has only 3 unused exported Props interfaces (the same kind as Dialog_InformationProps before); no unused file
npm --prefix app run build && node app/build/bundle-report.mjs → build exit 0; Login first load 193.05 kB gzip (entry and shell not changed); ContactUsDetailsPage chunk 16.51 kB (5.62 kB gzip)
Temporary old-vs-new check (HEAD copy of the old page in app/src/__tmp_old_cud/, one page per vitest process, JSON results compared with cmp) → SAME in 8 scenarios: signed in send and close (8 snapshots, 3 calls, back to ContactUsMenu), feedback subject with the check box (9 snapshots), back with a message, signed out, error scenario, security scenario signed in and signed out, unknown subject. The temporary folder and the scratch results are deleted.

## Deviations from the brief
- Branch: the work is in the prefetch worktree on `rf/prefetch-P6-G2-B-ContactUsDetails-53ac3e7`, not on `refactor/architecture`, as the master told me.
- The hook uses `useReducer` and a `latest` copy that `dispatch` updates at once, not `useFlowState`. `useFlowState` keeps the state in the view cache, and this screen did not keep it, so a back navigation to it would restore a typed message (a behavior change). Menu and Profile use `useReducer` for the same reason.
- 2 rule-9 warnings stay in the route and move from the page to the hook: `@/legacy/os/exceptions` (`isSystemException`, `exceptionMessage` for the AllExceptions handler of Send) and `@/legacy/os/os-assets` (`osImage`, the UBT logo of the call popup). `raiseToFlowHandler` now comes from `@/platform/feedback/flowErrors` (allowed). To remove the 2 warnings, `platform/` must re-export these helpers. That is outside the route, and the parallel G2 steps have the same imports, so I did not change it (a follow-up, the same case as `pages/Profile/hooks/useProfile.ts`).
- `localityTimezoneCallInputs` keeps the literal values that the old flow sent (IsFormFilled, IsAnyFilled, isSubmiting and isLoadingMainData False, CallPopupData the default record), not the live state, so the request body does not change.
- Not changed: `mocks.ts` and `staticEntities.ts` (only moved, so their inline compiled-line references stay). `Type_ContactSubject` is also in `pages/ContactUsMenu/components/staticEntities.ts`, a duplicate for step C (jscpd) or a later shared move.
- Documents left to the documenter: suggested move-map shape for row `src/screens/ContactUsDetails/index.tsx`: `page + hook` (no container: one data source, under the criterion). The CHANGELOG entry is also left to the documenter.
- I ran `npx prettier --write` (the project formatter) on 3 new files.

## Questions for the user
none
