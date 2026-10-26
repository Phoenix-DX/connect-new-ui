## Result
status: pass
summary: MilestoneDetail is now a page. Two hooks (`useMilestoneWrapper`, `useAccommodationHost`, both on `useFlowState` with `beforePaint: true`, W28), two pure state files, two props-only views and `inputs.ts` replace the 2 ScreenBlocks, `api.ts`, `types.ts` and `actions.ts`. The quick checks, the full suite (2813 tests), arch_baseline (0 new) and W21 pass. The old-vs-new check matches in 19 of 21 scenarios. The other 2 are the former crash paths ("old: crash, new: reload"), accepted by decision W27 (a).

## Files changed
app/src/pages/MilestoneDetail/MilestoneDetailPage.tsx (rewritten: inputs, flag, navigation; small block components `MilestoneWrapper` and `AccommodationHost`, HomeFeed pattern)
app/src/pages/MilestoneDetail/inputs.ts (added)
app/src/pages/MilestoneDetail/mocks.ts (changed: the 4 wire types of the deleted types.ts are now local types; handlers unchanged)
app/src/pages/MilestoneDetail/api.ts (deleted)
app/src/pages/MilestoneDetail/types.ts (deleted)
app/src/pages/MilestoneDetail/components/actions.ts (deleted: pure actions → hooks/accommodationHostState.ts, application events → hooks/useAccommodationHost.ts)
app/src/pages/MilestoneDetail/components/ScreenBlock_MilestoneWrapper.tsx (deleted)
app/src/pages/MilestoneDetail/components/ScreenBlock_AccommodationHost.tsx (deleted)
app/src/pages/MilestoneDetail/components/MilestoneWrapperView.tsx (added)
app/src/pages/MilestoneDetail/components/MilestoneWrapperView.test.tsx (added)
app/src/pages/MilestoneDetail/components/AccommodationHostView.tsx (added)
app/src/pages/MilestoneDetail/components/AccommodationHostView.test.tsx (added)
app/src/pages/MilestoneDetail/hooks/milestoneWrapperState.ts (added)
app/src/pages/MilestoneDetail/hooks/milestoneWrapperState.test.ts (added)
app/src/pages/MilestoneDetail/hooks/accommodationHostState.ts (added)
app/src/pages/MilestoneDetail/hooks/accommodationHostState.test.ts (added)
app/src/pages/MilestoneDetail/hooks/useMilestoneWrapper.ts (added)
app/src/pages/MilestoneDetail/hooks/useMilestoneWrapper.test.tsx (added)
app/src/pages/MilestoneDetail/hooks/useAccommodationHost.ts (added)
app/src/pages/MilestoneDetail/hooks/useAccommodationHost.test.tsx (added)
app/src/pages/MilestoneDetail/MilestoneDetail.test.tsx (added)
app/src/api/image/repository.ts (added: copied byte for byte from the OrbitAdminEventDetail worktree, master note)
app/src/api/image/repository.test.ts (added: same copy)
app/src/api/image/index.ts (changed: same copy, one export line)
app/src/platform/navigation/flowState.ts (changed: copied byte for byte from the wt-F17b worktree, step P6-F17, decision W28; not edited)
app/src/platform/feedback/flowErrors.ts (changed: re-exports `isUserException`, one line at the end)
migration/tools/refactor/strip-compiled-lines-milestonedetail.py (added: removes the compiled-line references from the rewritten files)
migration/refactor/handoffs/P6-G5-B-MilestoneDetail/dev.md (added)
(`hooks/useReadyBeforePaint.ts` and its test were added in the first pass and deleted again for W28. The master had already staged them, so the working tree shows them as `AD`.)

## Commands run
npm --prefix app run typecheck → exit 0
npx vitest run src/pages/MilestoneDetail src/api/image src/platform/navigation → 24 files, 149 tests passed
npx vitest run (full suite) → 505 files, 2813 tests passed (first pass 2816: the 4 tests of `useReadyBeforePaint` left with the hook, 1 restore test added)
npx eslint src/pages/MilestoneDetail src/api/image src/platform/feedback/flowErrors.ts src/platform/navigation/flowState.ts → exit 0
npx prettier --check (same files) → clean
npx depcruise (arch) → MilestoneDetail has 1 warning left (rule 9, mocks.ts → legacy/os/os-wire, unchanged). The 3 rule-9 warnings of the old wrapper, block and api.ts are gone
python3 migration/tools/refactor/arch_baseline.py check → 83 warnings, 83 baseline rows, 0 new, 0 gone
vite build + node build/bundle-report.mjs → HomeFeed 244.37 → 244.35 kB gzip, Login 184.38 → 184.38 kB gzip (raw first load unchanged: 751.29 / 601.24 kB). W21 holds
Old-vs-new vitest, run again after W28. The old files come from the base tree of the worktree and sat in a scratch folder for the run, then were deleted; 21 scenarios, both variants in one run → same URL, calls, request bodies, DOM, body theme class, feedback and logs in 19 scenarios: default, missing host id, missing milestone name, notification known / unknown / no event name / loading, loading, meal guest, other type, no data, error (HTTP 500), member → HouseholdDetails → back, phone popup, helpdesk, helpdesk without Orbit access, unmount while GetAccommodationHost runs, notification unmount → back. The other 2 are the former crash paths (Deviations, item 2)
Browser smoke on `vite preview --port 5181`, run again after W28 (no dev server, master note 2; stopped after the check) → default: 6 rooms, an open room shows the guest cards; notification path: 6 rooms; no console errors. A browser back from the first loaded page goes to HomeFeed. That is shell behavior, the same for both ports; the router back is in the vitest check

## Deviations from the brief
1. OnReady runs before the first paint, as in the old port: `useFlowState({ ..., onReady, beforePaint: true })` (W28; flowState.ts copied from P6-F17). With `onReady` after the paint, a visit from a notification would paint the "Event not found" layout for one frame. The skeleton would also show without the Orbit body theme, which the first Failed layout sets, and GetGmpMilestoneHost would run before GetAccommodationHost. The `isAlive` that onReady gets is true until the unmount. `useAccommodationHost` keeps it in a ref, so the state writes of its event flows (the call popup) stop after the unmount (W23).
2. Back navigation (decision W27 (a)): ScreenBlock_AccommodationHost does not restore its state. It fetches again from the record defaults, as the old port did; `restore` gives the defaults and OnReady ignores `restored`. The old blocks used the same view-cache name, `Model`. Results:
   - From EventDetail (all inputs set): old reload, new reload (same).
   - Optional input missing, then member → back: old crash ("Unexpected Application Error", TypeError on `ContactPopupData`), new reload (the wrapper keeps its saved state; one more GetAccommodationHost + Get_Document pair).
   - From a notification, then member → back: old crash (TypeError on `Status`), new reload (same as above).
   - The OutSystems behavior (the compiled OnReady keeps the restored state, no call) is a follow-up next to F22. The documenter adds it.
3. As the master asked, the 3 `api/image` files are byte-for-byte copies from the OrbitAdminEventDetail worktree (`fetchLegacySignedImageURL`). The route imports the function from `@/api/image`. The Connect2_LegacyShared GetSignedImagesInBulk MSW handler stays in `pages/MilestoneDetail/mocks.ts`, because GuestArrangements and HelpersDetail use it too.
4. `platform/feedback/flowErrors.ts` re-exports `isUserException`, one line added at the end. The hook then does not import `legacy/os/`, which rule 9 does not allow.
5. The blocks are small components in the page file that call their hook and render their view (HomeFeed pattern), not containers. ScreenBlock_AccommodationHost mounts only when the wrapper chooses it. The wrapper view receives it as the slot `renderAccommodationHost`. Move-map shape: `hook+component` for both blocks, as the move-map rows say.
6. Docs are not updated (move-map status, CHANGELOG, calls-by-domain, api/README, the W27 follow-up). The documenter does them.
7. Kept quirks, unchanged: AddExtensionToFile adds the extension without the dot ("Roomspdf"), as compiled. The CallMember and ViewHousehold application events go to the log (U17).
8. The vitest runs of this worktree write their results cache to `node_modules/.vite/vitest` through the symlink to the main tree. They do not touch the dev server's dependency cache.

## Questions for the user
none
