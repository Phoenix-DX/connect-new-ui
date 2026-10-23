## Result
status: pass
summary: EmailTarget is now a page, a hook (`useHouseholdEmail`) and a props-only view (`HouseholdEmailView`), with two state files: the block's records and client actions, and the screen's EmailSubmitted handler. `api.ts` became `inputs.ts` and `types.ts` folded into it. The hook calls `sendUserContactEmail` of api/message directly. A temporary old-vs-new test (deleted after use) showed the same DOM, calls, request bodies, logs, feedback and URL in 15 cases. Typecheck, eslint, prettier, the tests (25 new), arch_baseline and lint:arch pass.

## Files changed
app/src/pages/EmailTarget/EmailTargetPage.tsx (rewritten: reads the inputs, calls useHouseholdEmail, renders HouseholdEmailView in the ValidationServiceProvider, then CommonUiLayout; no inline compiled-line references)
app/src/pages/EmailTarget/components/ScreenBlock_Household_Email.tsx -> app/src/pages/EmailTarget/components/HouseholdEmailView.tsx (git mv, then rewritten: props only, `@origin` instead of `// @os-block`, the two field widgets are private components that own their refs, no compiled-line references)
app/src/pages/EmailTarget/hooks/useHouseholdEmail.ts (new: OnInitialize, OnChange_InputSubject, OnChange_InputMessage, OnSubmit_Email with UserContactUser, NavigationHandlerNavigation; the logic is unchanged)
app/src/pages/EmailTarget/components/actions.ts -> app/src/pages/EmailTarget/hooks/householdEmailState.ts (git mv, then edited: the block records and client actions are unchanged; added householdEmailIds, headerText (moved from the block), isFilled, userContactRequest, emailHouseholdEventAttachment; the screen records moved to emailTargetState.ts)
app/src/pages/EmailTarget/hooks/emailTargetState.ts (new: ApplicationEvents_LDM and addAuditEventDetailEvent (from actions.ts, unchanged) and onEmailLDMEventParticipant, the old inline page handler)
app/src/pages/EmailTarget/api.ts -> app/src/pages/EmailTarget/inputs.ts (git mv, then edited: readInputs renamed to readEmailTargetInputs, the EmailTargetInputs type from types.ts with field notes, the `userContactUser` re-export removed)
app/src/pages/EmailTarget/types.ts (deleted: it held only the input type, now in inputs.ts)
app/src/pages/EmailTarget/EmailTarget.test.tsx (new: page test in the app frame on a memory router)
app/src/pages/EmailTarget/components/HouseholdEmailView.test.tsx (new)
app/src/pages/EmailTarget/hooks/householdEmailState.test.ts (new)
app/src/pages/EmailTarget/hooks/emailTargetState.test.ts (new)
app/src/pages/EmailTarget/inputs.test.ts (new)
migration/refactor/handoffs/P6-G2-B-EmailTarget/dev.md (this report)

## Commands run
npm --prefix app run typecheck → exit 0
cd app && npx eslint --max-warnings 0 src/pages/EmailTarget → exit 0, 0 warnings
cd app && npx prettier --check src/pages/EmailTarget → exit 0
cd app && npx vitest run src/pages/EmailTarget → exit 0, 5 files, 25 tests
cd app && npx vitest run src/pages/EmailTarget src/app src/mocks/handlers.test.ts src/api/message → exit 0, 13 files, 120 tests
python3 migration/tools/refactor/arch_baseline.py check → exit 0 (48 warnings, 48 baseline rows, 0 new, 0 gone)
npm --prefix app run lint:arch → exit 0 (dependency-cruiser 212 warnings, 1 fewer than after ContactUsMenu: the old block's rule-9 import of `@/legacy/os/exceptions` is gone; eslint 49 warnings); no warning in src/pages/EmailTarget
cd app && npx knip → no finding in src/pages/EmailTarget
temporary test src/__tmp_parity/ (deleted): the HEAD copy of the page and block against the new page in renderRoutes, 3 query strings (LDM host with all inputs, empty, Campus&Co) × 5 scripts (first render; whitespace subject + empty send + typing; send; send offline; change then back arrow) → 15 of 15 the same: body innerHTML at each step, called actions, UserContactUser request bodies, log entries, final URL and feedback message
temporary test src/__tmp_parity/remount.test.tsx (deleted): with the app's ScreenTransitionGroup, a navigation from `?InitialEmailSubject=First` to `?InitialEmailSubject=Second` shows "Second" for the old and the new page

## Deviations from the brief
- Shape: hook+component as in the move-map row (HouseholdEmailView, hooks/useHouseholdEmail.ts). No container: one data source, no data hook, and the view is not over 200 lines.
- No reducer: the variables do not depend on each other. The `latest` ref and the three useState values stay as they were. The block is not in the view cache, so useFlowState is not used.
- The page no longer puts `key={params.toString()}` on the block. The app's ScreenTransitionGroup makes one screen container per history entry (location.key), and each container keeps its own location. So the inputs cannot change while the page is mounted, and a new query string always mounts a new page. The temporary remount test showed this for the old and the new page.
- The ValidationServiceProvider moved from inside the block's OSBlock to the page, around the view (as Profile does). It renders no DOM, and the same elements are under it, so the DOM is the same.
- api.ts re-exported `sendUserContactEmail` as `userContactUser`. The hook now imports `sendUserContactEmail` from `@/api/message`, the same function. It does not use `useSendUserContactEmailMutation`, which has no caller and would put the call through TanStack Query.
- `raiseToFlowHandler` now comes from `@/platform/feedback/flowErrors` (the same function) instead of `@/legacy/os/exceptions` (plan rule 9), as ContactUsMenu did.
- mocks.ts is not changed. No shared block changed (LegacyLayout, MenuIcon, InputCounter, NavigationConfirmationDialog, DEPRECATED_ButtonLoading, BottomBar and CommonUiLayout are imported as they are). components/contact/* is not touched. Nothing was added to the entry or the shell: the page is still lazy.
- Moves are staged with `git mv` and the deletion with `git rm`. Nothing is committed. The new files are untracked.
- The worktree branch is `rf/prefetch-P6-G2-B-EmailTarget-52510c7` (the master's prefetch worktree), not `refactor/architecture`. I worked there as the master told me to.
- For the documenter: the move-map row `src/screens/EmailTarget/components/ScreenBlock_Household_Email.tsx` needs status `moved` with shape hook+component (view components/HouseholdEmailView.tsx, hook hooks/useHouseholdEmail.ts, state hooks/householdEmailState.ts). The screen row can note inputs.ts (from api.ts + types.ts) and hooks/emailTargetState.ts. calls-by-domain.md, inventory.csv, routes.csv and app/docs/reference/screens.md still list the old screens/ paths. These are baseline or generated files, and earlier B steps did not update them.

## Questions for the user
none
