## Result
status: pass
summary: OrbitAdminLanding is now a page. The block flows (OnReady, card click) are in `hooks/useAdminLanding.ts` (useFlowState, W23) with the pure `hooks/adminLandingState.ts`. The screen handler (GetMilestoneScanFF, then navigation) is in `hooks/useNavigateToEventDetail.ts`, and the props-only view is `components/AdminLandingView.tsx`. `api.ts` and `types.ts` are deleted. The hooks call `api/event` directly.
A temporary old-vs-new test gave equal results in 12 scenarios. The quick checks and the full suite pass. Bundle: HomeFeed 244.39 → 244.36 kB gzip and Login 184.41 → 184.39 kB gzip, so neither grows (W21).

## Files changed
app/src/pages/OrbitAdminLanding/OrbitAdminLandingPage.tsx (rewritten: hooks + view, no logic)
app/src/pages/OrbitAdminLanding/OrbitAdminLanding.test.tsx (new)
app/src/pages/OrbitAdminLanding/mocks.ts (only the `./types` import, replaced by the 2 wire types inline; the answers are unchanged)
app/src/pages/OrbitAdminLanding/api.ts (deleted, not staged)
app/src/pages/OrbitAdminLanding/types.ts (deleted, not staged)
app/src/pages/OrbitAdminLanding/components/ScreenBlock_AdminLanding.tsx → app/src/pages/OrbitAdminLanding/components/AdminLandingView.tsx (rewritten as a props-only view; the move-map target)
app/src/pages/OrbitAdminLanding/components/AdminLandingView.test.tsx (new)
app/src/pages/OrbitAdminLanding/components/actions.ts → app/src/pages/OrbitAdminLanding/hooks/applicationEvents.ts (the payload type moved to adminLandingState.ts)
app/src/pages/OrbitAdminLanding/components/staticEntities.ts → app/src/pages/OrbitAdminLanding/staticEntities.ts (comments only)
app/src/pages/OrbitAdminLanding/hooks/adminLandingState.ts (new)
app/src/pages/OrbitAdminLanding/hooks/adminLandingState.test.ts (new)
app/src/pages/OrbitAdminLanding/hooks/useAdminLanding.ts (new)
app/src/pages/OrbitAdminLanding/hooks/useAdminLanding.test.tsx (new)
app/src/pages/OrbitAdminLanding/hooks/useNavigateToEventDetail.ts (new)
app/src/pages/OrbitAdminLanding/hooks/useNavigateToEventDetail.test.tsx (new)
migration/refactor/handoffs/P6-G5-B-OrbitAdminLanding/dev.md (new)

These files did not change: `api/event/*` (fetchAdminEvents and fetchMilestoneScanFF were already there), `components/orbit/*`, `components/layout/*`, `src/mocks/**`, the other G5 routes and the docs.

## Commands run
All commands ran in the worktree with Node 24 on PATH.
- Bundle before: `npm --prefix app run build` + `node app/build/bundle-report.mjs HomeFeed Login OrbitAdminLanding` → exit 0. HomeFeed 751.29 kB / 244.39 kB gzip (40 chunks), Login 601.24 / 184.41 (12), OrbitAdminLanding 669.46 / 208.43 (28).
- `npx depcruise src … --output-type err` (before) → 0 errors, 211 warnings. 2 of them are in the route: rule-9 `mocks.ts → legacy/os/os-wire` and `ScreenBlock_AdminLanding.tsx → legacy/os/exceptions`.
- `npm --prefix app run typecheck` → exit 0
- `cd app && npx eslint src/pages/OrbitAdminLanding` → exit 0, 0 problems. `npx prettier --check src/pages/OrbitAdminLanding` → clean. I ran `prettier --write` once on the 2 new test files.
- `cd app && npx vitest run src/pages/OrbitAdminLanding` → 5 files, 34 tests pass. I ran it 5 times and it passed each time. With `src/api/event` added: 8 files, 176 tests.
- `cd app && npx vitest run` (full suite) → 498 files, 2748 tests pass.
- `npm --prefix app run lint` → 0 errors, 84 warnings. None of them is in `src/pages/OrbitAdminLanding`.
- `npm --prefix app run format:check` → all files pass
- `npx depcruise …` (after) → 0 errors, 210 warnings. The rule-9 warning of the old block is gone, because the hook imports `raiseToFlowHandler` from `platform/feedback/flowErrors`. The `mocks.ts` warning stays.
- `python3 migration/tools/refactor/arch_baseline.py check` → exit 0: 83 warnings, 83 baseline rows, 0 new, 0 gone. The route has no baseline row.
- Bundle after (`build` exit 0):
  - HomeFeed: 751.29 / 244.36 kB gzip (−0.03)
  - Login: 601.24 / 184.39 kB gzip (−0.02)
  - OrbitAdminLanding: 671.04 / 209.04 kB gzip (+0.61), 29 chunks. The page now loads the shared `flowState` chunk (899 B raw, 0.49 kB gzip), as CountryList did in G4. The page chunk is 4,900 B raw, 2.14 kB gzip.
- Temporary old-vs-new test. It ran the base page (copied from the index) in `pages/OrbitAdminLanding_old/` with `compare.test.tsx`, and I deleted the folder after the run. A copy of the test is in the scratchpad: `oal-old/compare.test.tsx`.
  - Result: 12 of 12 scenarios equal, in 3 runs.
  - Each snapshot compares the block DOM (bottom bar content blanked), the bottom-bar and CommonUI ids, the URL, the call list, the request bodies, the ApplicationEvent log entries and the feedback message.
  - The scenarios:
    - Load, card 0, back (view restored, no new fetch).
    - A click on a card title. The nested onClick handlers of OrbitCard run twice, the same in old and new.
    - `scanpermilestone` (OrbitAdminMilestones?EventId).
    - `noadminevents`, `empty`, `error` and `loading`.
    - StrictMode: load, click and back.
    - A MemberId that is not a number, and an empty first name.
    - A card click, then back before GetMilestoneScanFF answers: HomeFeed first, then OrbitAdminEventDetail and 1 audit event, in both.
    - Leave during the fetch, then back: a permanent skeleton in both. This is the old behavior.
    - An error, then away and back.
- Browser check with Playwright on a dev server on port 5177, from 05:37 to about 05:42. I did it before the master note; the server is stopped and port 5177 is free.
  - `?mock=real`: 3 cards, header "Matías".
  - A card click opens OrbitAdminEventDetail with the 6 inputs in the original order.
  - `?mock=noadminevents`: the NoInformation_Orbit text.
  - Console: only the existing nested `<a>` warning of BottomBar.
  - With a deep-link start, the browser back goes on to HomeFeed. OrbitLanding and CountryList do the same, and this step does not change them.
  - The headless browser does not show the back arrow of OrbitAdminEventDetail, so I did not test the in-app back. The jsdom tests above cover the back restore.
  - The Playwright package wants `chromium_headless_shell-1234`, which is not installed. I used the installed 1248 binary (`executablePath`) and installed nothing.

## Deviations from the brief
1. Branch: I worked on the prefetch branch `rf/prefetch-P6-G5-B-OrbitAdminLanding-892cf6c3`, not on `refactor/architecture`, as the master told me.
2. Git index: the index holds exactly the staged base (G5-A + G5-B-Shared). All the changes of this step are unstaged.
   - My first `git mv` rewrote the staged G5-A renames, because G5-A is not committed. I moved the 3 entries back with `git mv` and then moved the files on disk with `mv`.
   - `git show :<path>` matches the base for every route file.
   - Result: the 3 old paths (`components/ScreenBlock_AdminLanding.tsx`, `components/actions.ts`, `components/staticEntities.ts`) and `api.ts` / `types.ts` show as unstaged deletions. The new files are untracked.
3. Shape: page + hooks + view. There is no container, because of the container criterion: 1 data hook, 1 event handler, a 100-line view.
   - Move-map row 24 names only `useAdminLanding` and `AdminLandingView`. The screen handler OnHandle_NavigateToEventDetail (it was inline in the old page) is now `hooks/useNavigateToEventDetail.ts`, so the page has no logic.
   - `wireDateTimeParam` moved there from `api.ts`, and it is unchanged.
   - `staticEntities.ts` moved to the page root, because the view (MenuAction_Menu) and the audit event (ClickEvent id) both use it.
4. Hook details, with no visible change:
   - View-cache key: `Model` → `Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding`.
   - The restore condition was `restored && saved !== null`. It is now `restored && (isFetchingData || isDataFetched)` (`hasStarted`). Both give the same views, because OnReady makes its first write at once.
   - The 2 writes of OnAfterFetch are now 1. React already batched them into 1 render.
   - The block event NavigateTo_EventDetail takes one `EventDetailTarget` object, not 6 positional arguments. The URL parameter order did not change.
5. W23:
   - After an unmount, the OnReady state writes are skipped. A Get_AdminEventsList error still goes to the flow handler, once.
   - A card click that started before the unmount still navigates and logs its audit event, once.
   - The old block had no guard. Its writes after an unmount had no visible effect, because the view is saved when it is left.
   - The once-guard is `readyStarted`, the StrictMode pattern of CountryList and MessageDetail.
   - Tests: `useAdminLanding.test.tsx` (3 W23 tests), `useNavigateToEventDetail.test.tsx` (1) and the page test (1).
6. R4:
   - `@origin` of the block: `adminLandingState.ts`, `useAdminLanding.ts`, `AdminLandingView.tsx`.
   - `@origin` of the screen: the page and `useNavigateToEventDetail.ts`.
   - `applicationEvents.ts` has `@origin Connect2_OrbitMobile_MUI.OnApplicationEvent_ClickEvent`, a client action of the module.
   - The rewritten files have no compiled-line references. `mocks.ts` keeps its header comment.
7. Shared Vite cache, for the master:
   - The worktree's `app/node_modules` is a symlink to the main tree. Because of this, my dev server (05:37–05:42) and my vitest runs went through the main tree's `app/node_modules/.vite`.
   - `app/node_modules/.vite/deps/_metadata.json` there was last written at 05:44:33. That is after my dev server stopped, and at the same time as one of my vitest runs.
   - I did not touch the main tree. Please check the deps cache of the 5174 server before parity. I will not start a dev server in a worktree again; I will use `vite preview` on my port.
8. For the documenter:
   - `move-map.csv`:
     - Row 24 (ScreenBlock_AdminLanding): shape `hook+component`, with useAdminLanding, adminLandingState and AdminLandingView, plus the screen hook useNavigateToEventDetail.
     - Row 316 (the page): no `api.ts` or `types.ts` any more.
   - `app/docs/refactor/calls-by-domain.md` lines 108–109: the 2 `screens/OrbitAdminLanding/api.ts` rows. The hooks call `fetchAdminEvents` and `fetchMilestoneScanFF` of `api/event` directly.
   - `app/src/api/README.md` (event domain): OrbitAdminLanding has no old re-export file now.
   - The CHANGELOG entry.

## Questions for the user
none
