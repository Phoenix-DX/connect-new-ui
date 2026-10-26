# Developer report: P6-G3-B-HomeFeed-Page (mode new, prefetch worktree)

## Result
status: question
summary: The page part of HomeFeed is done. FeedBlock_Services, FeedBlock_Updates and Dialog_GoExternalApp are now hooks (`pages/HomeFeed/hooks/`) and props-only components. GetServices of FeedBlock_Services is in `api/service`. `pages/HomeFeed/api.ts` and `types.ts` are deleted. A temporary old-vs-new test gave equal results in 18 scenarios (DOM, calls and their order, request bodies, URL, feedback message, preload object). Typecheck, eslint, prettier, the full suite (453 files, 2431 tests) and arch_baseline pass. The W21 tripwire is hit: the HomeFeed first load grows by 1.11 kB gzip (245.91 → 247.03; limit 248.22). See the question.

## Files changed
app/src/api/service/types.ts (types ServiceItem, ServicesPage, ExternalAppPopUpInfo, FeedServicesVariables, FeedServices)
app/src/api/service/mapper.ts (toFeedServices, toFeedServicesVariablesWire; wire types of the call)
app/src/api/service/mapper.test.ts (2 tests)
app/src/api/service/repository.ts (fetchFeedServices)
app/src/api/service/repository.test.ts (1 test)
app/src/api/service/keys.ts (serviceKeys.feed())
app/src/api/service/hooks.ts (useFeedServicesQuery)
app/src/api/service/hooks.test.tsx (3 tests)
app/src/api/service/index.ts (2 exports)
app/src/pages/HomeFeed/HomeFeedPage.tsx (rewritten: the two block bindings, NULL_DATE, no compiled-line references)
app/src/pages/HomeFeed/HomeFeed.test.tsx (new, 3 tests)
app/src/pages/HomeFeed/api.ts (deleted, with `rm`, not staged)
app/src/pages/HomeFeed/types.ts (deleted, with `rm`, not staged)
app/src/pages/HomeFeed/mocks.ts (the wire type of the update item comes from the contract; `./types` is gone)
app/src/pages/HomeFeed/components/staticEntities.ts -> app/src/pages/HomeFeed/staticEntities.ts (git mv, content unchanged, staged)
app/src/pages/HomeFeed/components/FeedBlock_Services.tsx (rewritten: props only)
app/src/pages/HomeFeed/components/FeedBlock_Services.test.tsx (new, 5 tests)
app/src/pages/HomeFeed/components/FeedBlock_Updates.tsx (rewritten: props only)
app/src/pages/HomeFeed/components/FeedBlock_Updates.test.tsx (new, 4 tests)
app/src/pages/HomeFeed/components/Dialog_GoExternalApp.tsx (props only: GoToExternalApp is the prop `onGoToExternalApp`)
app/src/pages/HomeFeed/components/Dialog_GoExternalApp.test.tsx (new, 2 tests)
app/src/pages/HomeFeed/components/Section_FeedWrapper.tsx (`@origin` instead of `// @os-block`; import of `@/pages/HomeFeed/staticEntities`)
app/src/pages/HomeFeed/components/Section.tsx (`@origin` instead of `// @os-block`)
app/src/pages/HomeFeed/components/AppLogo_White.tsx (`@origin` instead of `// @os-block`)
app/src/pages/HomeFeed/hooks/useFeedServices.ts (new)
app/src/pages/HomeFeed/hooks/useFeedServices.test.tsx (new, 14 tests)
app/src/pages/HomeFeed/hooks/feedServicesState.ts (new)
app/src/pages/HomeFeed/hooks/feedServicesState.test.ts (new, 4 tests)
app/src/pages/HomeFeed/hooks/goToExternalApp.ts (new)
app/src/pages/HomeFeed/hooks/useFeedUpdates.ts (new)
app/src/pages/HomeFeed/hooks/useFeedUpdates.test.tsx (new, 9 tests)
app/src/pages/HomeFeed/hooks/feedUpdatesState.ts (new)
app/src/pages/HomeFeed/hooks/feedUpdatesState.test.ts (new, 3 tests)
migration/refactor/handoffs/P6-G3-B-HomeFeed-Page/dev.md (this report)

Not changed: the shared blocks (`components/feed/*`, `components/notification/*`, `components/filter/*`), `containers/`, `platform/`, the other pages, `src/mocks/` fixtures, `openapi.yaml`. Base: HEAD 2eba38f3 plus the staged diff of P6-G3-B-Services (not unstaged).

## Commands run
git branch --show-current → rf/prefetch-P6-G3-B-HomeFeed-Page-2eba38f3 (the prefetch worktree that the master gave)
Bundle before the change (`npx vite build --outDir <scratchpad>` of the worktree with the Services diff, then bundle-report.mjs on that folder) → HomeFeed 756.67 kB / 245.91 kB gzip (39 chunks), Login 608.95 / 186.95
`npm --prefix app run typecheck` → exit 0
`cd app && npx vitest run src/pages/HomeFeed src/api/service` → exit 0, 11 files, 63 tests
`cd app && npx vitest run` (full suite) → exit 0, 453 files, 2431 tests
`cd app && npx eslint src/pages/HomeFeed src/api/service` → exit 0, 0 problems
`cd app && npx prettier --write` on 4 files, then `npx prettier --check src/pages/HomeFeed src/api/service` and `npm run format:check` → exit 0
`python3 migration/tools/refactor/arch_baseline.py check` → exit 0 (61 warnings, 61 baseline rows, 0 new, 0 gone)
`cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err` → 0 errors; warnings 208 → 207 (`pages/HomeFeed/api.ts` → `legacy/os/os-wire` is gone). HomeFeed keeps 1 warning from before: `AppLogo_White.tsx` → `legacy/os/os-assets` (rule 9). No new warning.
Temporary old-vs-new test (HEAD copy of `pages/HomeFeed` in `src/__tmp_old_homefeed__/`, deleted after the run) → 19 tests pass, 18 scenarios equal. Each scenario renders the old and the new page in the app frame (`renderRoutes`) with the MSW mocks. After each step it compares the DOM of the body (Splide and React useId counters normalized), the URL, the calls with their input names and phase (also in order), the feedback message and the preload object. At the end it compares all request bodies (also in order). Scenarios:
  - Load: real, loading, error, empty (Section_Updates hidden).
  - Services: Orbit, LDM, Assemble, MyCalendar, MyNotes, the settings button, Trove (the dialog opens, then confirm), Trove (cancel).
  - Updates: an item opens HouseholdCarousel after MarkAsRead; Mark as Read then Mark as Unread from the context menu; Share opens the share sheet (GetRecentlyShared, GetSignedImagesInBulk).
  - Other: View all opens Updates_SingleList.
  - Back navigation: with HasUpdates False, the return does not call FetchUpdates; with updates, the return calls GetServices and FetchUpdates again.
Bundle after the change → build exit 0; HomeFeed 759.06 kB / 247.03 kB gzip (40 chunks), Login 608.98 / 187.02 (limit 193.84). Per chunk (gzip bytes, before → after):
  - New shared chunk `hooks` (all of `api/service`): 973. About 320 of it is the feed call, which was in the HomeFeedPage chunk before. About 650 is the code of the Services screen (useUserServicesQuery, fetchUserServices, changeServicesOrder and their mappers). HomeFeed now loads it, because Rollup puts a module that two pages import into one shared chunk.
  - HomeFeedPage: 6167 → 6191 (+24). The feed call left this chunk; the hooks, the props and the two bindings came in.
  - Entry: 175152 → 175196 (+44). The preload list of the new chunk.
  - Other chunks: ±1 to 5 each (hash names in the import lines).
Variant B, measured only in a scratchpad copy (not in the worktree): the feed call in its own module `api/service/feed.ts` (its own mapping, query and repository function; `keys.ts` shared) → HomeFeed 757.78 kB / 246.41 kB gzip (+0.49). HomeFeedPage 6510 (+343: the feed call, about 0.32 kB of hooks and props), new `keys` chunk 97, entry +68.

## Deviations from the brief
1. Branch: I worked in the prefetch worktree on `rf/prefetch-P6-G3-B-HomeFeed-Page-2eba38f3`, as the master said, not on `refactor/architecture`. No commit.
2. Where the hooks run. The page file has two small binding components. `FeedServices` calls `useFeedServices` and renders `FeedBlock_Services` `$b5`. `FeedUpdates` calls `useFeedUpdates` and renders `FeedBlock_Updates` `$b9`. The page body does not call the hooks, because:
   - Section_Updates removes FeedBlock_Updates after Event_NoUpdates. With the hook in the page body, a view that the view cache restores with HasUpdates False would call FetchUpdates again. The old block did not (old-vs-new scenario "back with HasUpdates False", and the page test).
   - A change of block state (GetServices answer, popup info, read state) renders only the block, as before. The call order is the same as before.
   The flags are read in the bindings (`useFlagOn`) and given to the hooks as `flags` and to the component as `hasCustomEvents`.
3. Query key: `serviceKeys.feed()` = `['service', 'feed']`, not `['HomeFeed', 'FeedBlock_Services/DataActionGetServices']`. The master said "keep its query key and options as now". I kept a key of its own, separate from `serviceKeys.user()` of the Services screen, and the same options: `retry: false`, library default staleTime and gcTime. Only the key value follows the domain layout, as P5-2 did for `updateKeys.feed()` and the Services step did for `serviceKeys.user()`. No code reads the key. If the master wants the old value, only `keys.ts` changes.
4. Domain types: `FeedServices.services` is `Service[]` and uses the `toService` mapper of the Services step. This maps all 7 fields of Connect_Services, where the old code mapped 4. The UI reads the same 4. The UI structures that the request sends (UI_ServicesPage, UI_ServiceItem, ExternalApp_PopUpInfo) are domain types in `api/service/types.ts`, as `UpdatesListVariables` is in `api/update`. The page components import these types from `@/api/service`, as `pages/Services` and `pages/AcceptPendingPolicies` do.
5. `goToExternalApp.ts` (the client action GoToExternalApp of Dialog_GoExternalApp) is a plain function in `pages/HomeFeed/hooks/`, with the `@origin` of the dialog. The dialog has no state, so it has no hook. The dialog component keeps its OnReady → OnPopUpReady effect, which only raises the event prop.
6. The screen variables and handlers of HomeFeed itself (the share sheet, HasUpdates, IsScreenInitialized) stay in the page. They are screen state in the view cache, not a block, and the brief does not name them.
7. `@origin`: the rewritten files and the new hook files have one tag each. I also replaced `// @os-block` with `@origin` in Section, Section_FeedWrapper and AppLogo_White (comment only, gate checklist item 1). The rewritten code has no compiled-line references. The `NotCaptured` names keep their text, because the review markers show it in the DOM.
8. W23: no flow of this step uses `useFlowState` and no flow checks `isAlive`. The flows run on user events, so StrictMode does not run them twice. After MarkAsRead, the jump to HouseholdCarousel also runs when the block was closed, as before. The new unit test "W23: when the block closes while MarkAsRead runs, HouseholdCarousel still opens, once" covers this.
9. Edits and git:
   - I made one edit with an inline Python string replacement (`api/service/types.ts`: the header comment and the appended types), not with the Edit tool. Every other edit used Edit or Write, then `prettier --write`. No `sed -i`.
   - The temporary old-vs-new files were written by a Python script (git show HEAD → `src/__tmp_old_homefeed__/`) and deleted. A copy of the compare test is in the scratchpad: `hfp-compare.test.tsx.txt`.
   - `staticEntities.ts` was moved with `git mv` (staged), as the Services step did. `api.ts` and `types.ts` were deleted with `rm` (not staged).
10. Bundle: the tripwire is hit, so this is a question (below). I did not trim anything outside the step.
11. For the documenter:
    - `app/docs/refactor/move-map.csv` row 292 (HomeFeed): `api.ts` and `types.ts` are gone. The blocks FeedBlock_Services, FeedBlock_Updates and Dialog_GoExternalApp are hook + component in `pages/HomeFeed` (shape: hook+component, with the page bindings).
    - `app/docs/refactor/calls-by-domain.md` line 162: `FeedBlock_Services/DataActionGetServices` is now in `api/service` (`fetchFeedServices`, `useFeedServicesQuery`). Line 77: the HomeFeed calls of `api/update` are imported directly now; the re-exports of `pages/HomeFeed/api.ts` are gone.
    - `app/src/api/README.md`: the `service/` domain gets the HomeFeed call and the key `serviceKeys.feed()`.
    - `app/docs/refactor/followups.md` F17: the new first-load number.
    - The CHANGELOG.

## Questions for the user
1. Bundle, W21 tripwire (F17: "one step adds more than +0.3 kB: stop and trim the HomeFeed entry before the next step"). HomeFeed is 247.03 kB gzip (+1.11 kB; limit 248.22; margin 1.19 kB). The parts:
   - About 0.65 kB: the code of the Services screen, which comes with the shared `api/service` chunk.
   - About 0.3 kB: the hooks and the props of the three blocks.
   - About 0.15 kB: chunk overhead (entry preload list, import lines).
   Options:
   - (a) Accept +1.11 kB, keep the domain layout as it is in the worktree. The margin is still above 1.0 kB, but the per-step guard is hit.
   - (b) Put the HomeFeed call in its own module `api/service/feed.ts`: +0.49 kB (measured). This breaks the one-file-per-role layout of a domain, like W21 option (b), and it is still above +0.3 kB.
   - (c) Do what W21 says first: a separate step trims the HomeFeed entry (for example a slimmer route table). Then this step lands as in (a), with no code change in this step (recommended, because (a) and (b) both hit the guard and (c) is the action that W21 prescribes).
