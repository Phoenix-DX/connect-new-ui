## Result
status: pass
summary: shared/ no longer imports screens/, app/ or pages/ (depcruise: 0 edges; 2 new warn rules guard it). F1 done, F2 done, F3 done.
NotCaptured moved to platform/feedback (codemod), the update-items mock store moved into the shared Directory_Updates mock,
the PINRegister test reads PATHS.home. Typecheck, full vitest (1485), eslint, format:check and a targeted strict parity pass.

## Files changed
app/.dependency-cruiser.cjs
app/src/app/ErrorBoundary.tsx
app/src/app/NotMigrated.tsx
app/src/app/RouteError.tsx
app/src/app/NotCaptured.tsx -> app/src/platform/feedback/NotCaptured.tsx (moved, codemod git mv; one comment path fixed)
app/src/app/NotCaptured.stories.tsx -> app/src/platform/feedback/NotCaptured.stories.tsx (moved, codemod git mv)
app/src/containers/index.ts
app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx
app/src/containers/HouseholdDetails/HouseholdDetailsContainer.stories.tsx
app/src/pages/HouseholdDetails/hooks/useHouseholdDetails.ts -> app/src/containers/HouseholdDetails/hooks/useHouseholdDetails.ts (moved, codemod git mv)
app/src/pages/HouseholdDetails/hooks/householdDetailsState.ts -> app/src/containers/HouseholdDetails/hooks/householdDetailsState.ts (moved, codemod git mv)
app/src/pages/HouseholdDetails/hooks/householdDetailsState.test.ts -> app/src/containers/HouseholdDetails/hooks/householdDetailsState.test.ts (moved, codemod git mv)
app/src/pages/HouseholdDetails/mocks.ts -> app/src/containers/HouseholdDetails/mocks.ts (moved, codemod git mv; import and header comment changed)
app/src/pages/HouseholdDetails/mockData.ts -> app/src/containers/HouseholdDetails/mockData.ts (moved, codemod git mv)
app/src/pages/HouseholdDetails/api.ts -> app/src/pages/HouseholdDetails/inputs.ts (moved, codemod git mv; then rewritten with the folded type)
app/src/pages/HouseholdDetails/types.ts (deleted, folded into inputs.ts)
app/src/pages/HouseholdDetails/HouseholdDetailsPage.tsx
app/src/legacy/os/reviewMarkers.ts
app/src/mocks/handlers.ts
app/src/mocks/handlers.test.ts
app/src/platform/feedback/FeedbackMessageHost.tsx
app/src/platform/feedback/dialogs/DialogAccessRestrictedAction.tsx
app/src/screens/BookmarksByGroup/components/BookmarkNoteDialogs.tsx
app/src/screens/BookmarksByGroup/components/ScreenBlock_BookmarkGroup.tsx
app/src/screens/ContactUsDetails/index.tsx
app/src/screens/CountryDetails/index.tsx
app/src/screens/HomeFeed/components/Dialog_GoExternalApp.tsx
app/src/screens/HomeFeed/components/FeedBlock_Updates.tsx
app/src/screens/HomeFeed/mocks.ts
app/src/screens/HostSurvey/components/HostSurvey_Blocks.tsx
app/src/screens/HostSurvey/components/ScreenBlock_HostSurvey.tsx
app/src/screens/HouseholdCarousel/mocks.ts
app/src/screens/LDM_MyEvents_V2/components/MyEvents_MyTimelineFilterButton.tsx
app/src/screens/LegacyShareObject/components/ProfileList.tsx
app/src/screens/Locality_Details/components/UBT_LazyImage_List.tsx
app/src/screens/Locality_Details/index.tsx
app/src/screens/MessageDetail/components/NotificationDetailBlock.tsx
app/src/screens/MessageDetail/components/ScreenBlock_MessageDetail.tsx
app/src/screens/MilestoneDetail/components/ScreenBlock_AccommodationHost.tsx
app/src/screens/MilestoneDetail/components/ScreenBlock_MilestoneWrapper.tsx
app/src/screens/Notifications/index.tsx
app/src/screens/Profile/components/Profile_HouseholdPreview.tsx
app/src/screens/Profile/index.tsx
app/src/screens/Profile/mocks.ts
app/src/screens/Updates_SingleList/index.tsx
app/src/shared/test/PendingBlock.tsx
app/src/shared/UBTConnect/Block_PINRegister_ContentWrapper/Block_PINRegister_ContentWrapper.test.tsx
app/src/shared/UBTConnect/BottomBarMenu/BottomBarMenu.tsx
app/src/shared/UBTConnect/Directory_EntityDetailsActions/mocks.ts
app/src/shared/UBTConnect/Directory_Updates/mocks.ts
app/src/shared/UBTConnect/EntitiesCarousel/EntitiesCarousel.stories.tsx
app/src/shared/UBTConnect/EntitiesCarousel_Element/EntitiesCarousel_Element.stories.tsx
app/src/shared/UBTConnect/EntitiesCarousel_HouseholdDetails/EntitiesCarousel_HouseholdDetails.tsx
app/src/shared/UBTConnect/EntitiesCarousel_HouseholdDetails/EntitiesCarousel_HouseholdDetails.stories.tsx
app/src/shared/UBTConnect/UnsupportedVersion_Native/UnsupportedVersion_Native.tsx
app/src/shared/UBTConnect/UnsupportedVersion_WebView/UnsupportedVersion_WebView.tsx
app/src/shared/UBTConnect_Utils/ContactPopup/ContactPopup.tsx
app/src/shared/UBT_AppManager_Mobile/FingerprintScanner/FingerprintScanner.tsx
migration/tools/docs_gen.py
migration/tools/refactor/move-map.mjs
migration/refactor/handoffs/P3-1/dev.md

## Commands run
node migration/tools/refactor/move.ts --from app/src/pages/HouseholdDetails/hooks --to app/src/containers/HouseholdDetails/hooks --no-typecheck → 3 files moved, 6 imports rewritten
node migration/tools/refactor/move.ts --from app/src/pages/HouseholdDetails/mocks.ts --to app/src/containers/HouseholdDetails/mocks.ts --no-typecheck → 1 file moved, 1 import rewritten
node migration/tools/refactor/move.ts --from app/src/pages/HouseholdDetails/mockData.ts --to app/src/containers/HouseholdDetails/mockData.ts --no-typecheck → 1 file moved, 7 imports rewritten
node migration/tools/refactor/move.ts --from app/src/pages/HouseholdDetails/api.ts --to app/src/pages/HouseholdDetails/inputs.ts --no-typecheck → 1 file moved, 1 import rewritten
node migration/tools/refactor/move.ts --from app/src/app/NotCaptured.tsx --to app/src/platform/feedback/NotCaptured.tsx --no-typecheck → 2 files moved (with the story), 30 imports rewritten
npm --prefix app run typecheck → exit 0
cd app && npx vitest run (full suite) → exit 0; 331 files, 1485 tests passed
cd app && npx eslint <the 57 changed code files> → exit 0, no error, no warning
cd app && npm run format:check → exit 0, all files use Prettier style
cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err → exit 1 (pre-existing error, unchanged: no-circular platform/session/cachedUserInfo.ts ↔ mockUser.ts); warnings 240 → 238; the 2 removed are rule-8 platform/feedback/{FeedbackMessageHost,dialogs/DialogAccessRestrictedAction}.tsx → app/NotCaptured.tsx; diff of the violation lists shows no new one; 0 hits for the 2 new rules
depcruise on 2 temporary probe files (shared → app and pages, containers → pages; deleted right after) → both new rules fire
grep "@/(screens|app|pages)/" in src/shared → 0; grep "@/pages/" outside src/pages → 0
node migration/tools/refactor/move-map.mjs --check → runs (at HEAD it crashed: ENOENT stat src/shared/UBTConnect/HouseholdDetails_Block); 0 "no origin"; HEAD with only a missing-path guard gives 2 "no origin" (HouseholdDetails_Block, HouseholdDetails_Members_Block), now read from @origin at the target; 3 "no domain" problems are the same in both runs (FreeSubscriptionActionDialog, NoResults, Orbit_FooterWithActions)
python3 migration/tools/docs_gen.py --out <scratchpad> → exit 0; against app/docs/reference only the header line of shared-blocks.md differs; the tag scan finds 400 names, including HouseholdDetails_Block and HouseholdDetails_Members_Block (@origin)
python3 migration/tools/refactor_parity.py --changed --explain → 64 routes (global paths: app/, mocks/handlers.ts, legacy/os/)
python3 migration/tools/refactor_parity.py --level strict --routes HouseholdDetails HouseholdCarousel Profile Locality_Details HomeFeed --ref both --app http://localhost:5174 --report <scratchpad> → exit 0, PASS: 18 states OK for outsystems and self (dev check only; the full gate is the tester's)
cd app && npx knip (information only) → no touched file is unused; the new barrel type export HouseholdDetailsFlags is listed with the existing barrel types (621 unused exported types in total)

## Deviations from the brief
1. File count: 60 files, more than "about 40" for a change step. The step's own goal is about 38 files, and 30 of them are
   codemod import-line rewrites for the NotCaptured move. F1 to F3 (put in this step by the master) add about 22 files,
   most of them codemod moves. I did not stop because the extra files are mechanical and the master asked for F1 to F3 here.
2. Moves inside a change step: NotCaptured (step goal), the HouseholdDetails hooks, mocks and mockData (F1), api.ts →
   inputs.ts (F2). All moves used the codemod (`git mv`, so the renames are staged). Then I edited a few of the
   rewritten imports by hand, so that they use the `@/containers` barrel or a `./` path inside the container folder.
3. NotCaptured location: `platform/feedback/`. Shared, screens and app may import platform/. Platform may import
   `legacy/os/reviewMarkers`. `legacy/os/` would add 30 rule-9 warnings. `components/ui/` cannot import legacy/os
   (rules 5 and 9). The move also removes 2 rule-8 warnings (platform → app).
4. Directory_Updates ↔ HomeFeed mocks: the update-items collection (`HomeFeed.updateItems`, same store key, same 3-item
   seed and builder) moved from `screens/HomeFeed/mocks.ts` to `shared/UBTConnect/Directory_Updates/mocks.ts`.
   HomeFeed now imports it from there (screens → shared). The shared mock types the item from the contract
   (`ActionOutputs<PathOf<…FetchUpdates>>`), so it does not import `screens/HomeFeed/types`.
5. `Block_PINRegister_ContentWrapper.test.tsx` compares with `PATHS.home` (`platform/navigation/paths`, same value
   `/UBTConnect/HomeFeed`) instead of `HOME` from `app/routes.generated`. This is a test-only change.
6. MSW order: pages and screens, then containers, then shared, then platform (`containers/*/mocks.ts` glob). The 2
   HouseholdDetails handlers move from the sorted pages-and-screens group to the containers group. No other handler
   answers their 2 endpoints, so matching is unchanged; the targeted parity confirms this. `handlers.test.ts` has a new
   test (containers after pages/screens and before shared) and the platform test now includes containers.
7. dependency-cruiser: 2 new rules, `warn` like the other folder rules. `pages-imported-by-own-route-only` (F1): nothing
   outside `pages/` imports `pages/`. With rule 3 this gives "only pages/<Route>/ imports pages/<Route>/" and
   "containers/ never imports pages/". `shared-no-import-of-screens-or-app` guards the check of this step.
8. F3 details:
   - `move-map.mjs` also skips a source path that is gone (it crashed since P2-3) and then reads the tag in the file at
     the target path.
   - `docs_gen.py` has a new `--src` option (default `app/src`). Built = `builtAt` or a tag found in the code. I did not
     regenerate `app/docs/reference/` (see the list for the documenter below).
9. Comment-only fixes for paths that this step made wrong: `legacy/os/reviewMarkers.ts`, `platform/feedback/NotCaptured.tsx`,
   `screens/HouseholdCarousel/mocks.ts`, and the header of `containers/HouseholdDetails/mocks.ts`. `inputs.ts` was
   rewritten: it has `@origin UBTConnect.Directory_Household.HouseholdDetails` and no compiled-line references.
10. Git: I ran `git add -N app/src` once to list files. Its only effect: the deletion of
    `app/src/pages/HouseholdDetails/types.ts` is staged. No other index change; no commit.

Follow-ups: F1 done, F2 done, F3 done.

For the documenter (I did not change these documents):
- `app/src/containers/HouseholdDetails/README.md`: lines 11, 12, 15 and 43 still name `pages/HouseholdDetails/...`.
- `app/docs/guides/page-template.md`: remove the "Temporary exception" (lines 24-25) and the F2 note (lines 29-30), and update the table rows (lines 35-37).
- `app/docs/refactor/move-map.csv`: row 181 notes (hook location), row 166 notes (Directory_Updates no longer imports HomeFeed mocks; it owns the update-items collection), row 379 (NotCaptured is now in `src/platform/feedback/`).
- `app/docs/guides/os-widgets.md` line 14 and `app/docs/README.md`: where NotCaptured lives.
- `app/docs/reference/shared-blocks.md`: re-run `python3 migration/tools/docs_gen.py`. Only the header line changes (it now names `@origin`).
- `migration/refactor/followups.md`: F1, F2 and F3 are done.

## Questions for the user
none
