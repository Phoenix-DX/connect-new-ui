## Result
status: pass
summary: MyEntertaining is now a page with 2 hooks: `useMyEntertaining` (flows of MyEntertaining_Embedded) and `useEntertainingCalendar` (calls of Embedded_MyEntertaining). It also has 2 props-only block views. The 2 calls moved from the route's `api.ts` to the new domain `api/entertaining`. `api.ts` and `types.ts` are deleted. A temporary old-vs-new test gave the same DOM, calls, request bodies and external links in 10 of 10 scripts. All quick checks pass. The arch baseline shows 0 new warnings. HomeFeed and Login raw sizes do not grow (gzip +0.08 / +0.02 kB, which is hash-name noise).

## Files changed
app/src/pages/MyEntertaining/MyEntertainingPage.tsx (rewritten: reads the input, runs `useMyEntertaining`, renders CommonUI_InsideLayout and the MyEntertaining_Embedded view; a local `EntertainingCalendar` runs `useEntertainingCalendar` at the place of the block)
app/src/pages/MyEntertaining/inputs.ts (added: route input and its reader, from the old `api.ts` and `types.ts`)
app/src/pages/MyEntertaining/staticEntities.ts (moved with plain `mv` from `components/staticEntities.ts`, content unchanged)
app/src/pages/MyEntertaining/components/staticEntities.ts (deleted by that move)
app/src/pages/MyEntertaining/api.ts (deleted)
app/src/pages/MyEntertaining/types.ts (deleted)
app/src/pages/MyEntertaining/components/Embedded_MyEntertaining.tsx (rewritten: props only; `config` and `onRefreshToken` are props; `@origin`; exports `EMBEDDED_MY_ENTERTAINING_DEFAULTS`)
app/src/pages/MyEntertaining/components/MyEntertaining_Embedded.tsx (rewritten: props-only view; `DetailLayout` with `onBack` and the slot `renderCalendar(id)`; `@origin`)
app/src/pages/MyEntertaining/components/Embedded_MyEntertaining.test.tsx (added)
app/src/pages/MyEntertaining/components/MyEntertaining_Embedded.test.tsx (added)
app/src/pages/MyEntertaining/hooks/useMyEntertaining.ts (added)
app/src/pages/MyEntertaining/hooks/useMyEntertaining.test.tsx (added)
app/src/pages/MyEntertaining/hooks/useEntertainingCalendar.ts (added)
app/src/pages/MyEntertaining/hooks/useEntertainingCalendar.test.tsx (added)
app/src/pages/MyEntertaining/MyEntertaining.test.tsx (added: page test with the MSW mocks, including the W23 unmount tests and StrictMode)
app/src/api/entertaining/types.ts (added)
app/src/api/entertaining/mapper.ts (added)
app/src/api/entertaining/repository.ts (added)
app/src/api/entertaining/keys.ts (added)
app/src/api/entertaining/hooks.ts (added)
app/src/api/entertaining/index.ts (added)
app/src/api/entertaining/mapper.test.ts (added)
app/src/api/entertaining/repository.test.ts (added)
app/src/api/entertaining/hooks.test.tsx (added)
migration/refactor/handoffs/P6-G5-B-MyEntertaining/dev.md (added)
Not changed: app/src/pages/MyEntertaining/mocks.ts, app/src/pages/MyEntertaining/components/connect2Entertaining.ts.

## Commands run
npm --prefix app run typecheck → exit 0
npx vitest run src/pages/MyEntertaining src/api/entertaining → exit 0; 8 files, 37 tests
npx vitest run (full suite) → exit 0; 520 files, 2917 tests
npx eslint src/pages/MyEntertaining src/api/entertaining → exit 0; 0 problems
npx eslint . → exit 0; 0 errors, 83 warnings, none in pages/MyEntertaining or api/entertaining
npx prettier --check src/pages/MyEntertaining src/api/entertaining → clean
npx depcruise src --config .dependency-cruiser.cjs --output-type err → exit 0; 0 errors, 198 warnings, none in pages/MyEntertaining or api/entertaining
python3 migration/tools/refactor/arch_baseline.py check → exit 0; 82 warnings, 82 baseline rows, 0 new, 0 gone (the route had no row)
npx knip → no unused file from this step. The new findings follow the existing patterns: the `entertainingKeys` and `fetchEntertainingConfig` barrel exports (like `policyKeys`, `serviceKeys`, `fetchFeedConfig`) and the exported types `MyEntertainingInputs` and `EntertainingCalendarData` (like the other `*Inputs` types of `inputs.ts`). The props interfaces and the `connect2Entertaining.ts` types were already flagged before.
npx vite build && node build/bundle-report.mjs HomeFeed Login MyEntertaining, before (base of the worktree) and after:
  - HomeFeed: 751.30 → 751.29 kB raw, 244.39 → 244.47 kB gzip.
  - Login: 601.24 → 601.24 kB raw, 184.41 → 184.43 kB gzip.
  - MyEntertaining: 595.59 → 595.48 kB raw, 182.24 → 182.07 kB gzip; 8 → 7 chunks (the Layout_DetailPage adapter chunk is no longer loaded).
  - A per-chunk compare of the 2 build logs shows that only `MyEntertainingPage.js` changed in raw size (5.61 → 6.12 kB). Every other chunk has the same raw size. Their gzip sizes moved by ±0.01 kB because the chunk hashes in their import strings changed (a new route chunk hash changes the entry hash).
Temporary old-vs-new test (the old page, `api.ts`, `types.ts` and components from the index copied to `pages/MyEntertainingOld/`; same MSW mocks; deleted after use; a copy is in the scratchpad as `me-compare.test.tsx.kept`) → 10 of 10 scripts the same. The scripts: no input, LDM with a B2C tenant, Orbit, Assemble, UserCreated, an unknown id, error scenario, StrictMode, 2 token refreshes then close, and open-map. Each script compared the DOM at 3 moments (first render, after the configuration, after the calendar load), the called actions with their input names, the request bodies of GetEntertainingConfig, and the `window.open` calls.
Browser check on `vite preview --port 5183` (stopped after use) → the direct load of `/UBTConnect/MyEntertaining?MyCalendarEventSourceId=event-orbit` shows the calendar (no skeleton), sends 1 GetEntertainingConfig with Sources "orbit", and the "Map" link of the mock calendar opens `https://www.google.com/maps/search/?api=1&query=-38.7158,-62.2611`. There were no console errors. Screenshot: scratchpad `me-browser-loaded.png`.

## Deviations from the brief
- Worktree and git: I worked in the prefetch worktree on the branch `rf/prefetch-P6-G5-B-MyEntertaining-810fba69`, as the master told me. I used plain `mv` and `rm`, not `git mv` and `git rm`. Nothing is staged.
- Item 4 (api.ts → the domain hooks), domain choice (decision W8, by data ownership): both calls are of the module UBTConnect_EmbedMyEntertaining. They return the configuration of the Connect2Entertaining calendar SDK and the ID token that refreshes it. No existing domain owns this data. The precedent is `api/feed`, which holds the configuration of the feed SDK. `api/app` holds the app-start calls and is in the entry chunk (W18, W21), so a call there would put code in the entry. So I made the new domain `api/entertaining` with types, mapper, repository, keys, hooks, barrel and tests.
- Query semantics kept: `useEntertainingConfigQuery(inputs)` has `staleTime: Infinity`, `gcTime: 0` and `retry: false`. The key has no inputs (`['entertaining', 'config']`, was `['MyEntertaining', 'DataActionGetEntertainingConfig']`), and the call sends the inputs of the last render. This is the same pattern as `useFeedServicesQuery`. OnParametersChanged still does not refetch. The token refresh call (`fetchUserIdToken`) has no hook: the 10-minute timer of the view calls it.
- Call order: the config query runs in a small page-local component (`EntertainingCalendar`) at the place of the block, inside the layout content. So GetEntertainingConfig starts before the effects of the nested CommonUI_InsideLayout, as before (Household_Relations pattern). The props-only view `MyEntertaining_Embedded` gets this as the slot `renderCalendar(id)`.
- Item 1: no `ScreenBlock_*` in this route. The 2 blocks keep their business names (`MyEntertaining_Embedded`, `Embedded_MyEntertaining`) and are now props only. `log` (platform) moved into `useEntertainingCalendar`, and the page-local api import is gone. The Layout_DetailPage adapter (shared/) is replaced by `DetailLayout` + `useNavigateBack`, as in OneSchoolGlobalDetails and FeedItemDetail. The adapter passed the same props, and the DOM is the same (old-vs-new test).
- Items 2 and 3: no shared block moves. The route uses `components/layout` (DetailLayout, CommonUiLayout) and the UBTConnectLibrary blocks still in `shared/` (CustomContainer, LazyImage, SkeletonSection). These are imported and not changed.
- W23: the only flows are GetEntertainingConfig (no app-level side effect) and Action_RefreshToken (a server call, then a warning log on failure). Both keep the old behavior. A refresh call that started runs to its end after the unmount and logs its failure once. The token then goes nowhere, because CleanupCalendar destroyed the SDK. No state is written after the unmount. The timer and the message listener stop on unmount. The SDK events (OnError, OnOpenMap and the others) keep their old `alive` guard. They come from the SDK, which is destroyed on unmount. No once-guard is needed: StrictMode does not run an interval callback twice, and the query removes duplicate calls (the StrictMode test shows 1 call and 1 iframe). Tests: unmount while GetEntertainingConfig is pending (1 call, no SDK start, no console error); unmount while a failing refresh is pending (1 token call, 1 warning, no SDK token, no more refresh); unmount while a successful refresh is pending (no SDK token).
- W28 and P6-F17 (2 messages of the master): not applicable. The old blocks have no OnReady before paint. Their only `useLayoutEffect` updates the `latest` ref of the inputs and events, and that stays. The route does not use `useFlowState`: it has no reducer and no view cache, and the old port had none. So I did not copy `hooks/useReadyBeforePaint.ts`. I also did not copy the F17 `platform/navigation/flowState.ts`: nothing in this step uses it, and the step changes only the route, its domain and its handoff. The F17 diff is opt-in (`beforePaint` defaults to false), so the step works with or without it. The master can copy it when F17 lands.
- `fetchLegacySignedImageURL` (W8, OrbitAdminEventDetail) is not used by this route, so I did not copy the `api/image` files.
- Browser check note: the pushState + popstate trick (from HomeFeed) loses the query string. I saw the same with HouseholdDetails (HouseholdId "0"). It is a quirk of the trick, not of this step. A direct load and the app's own navigation keep the input.
- Process: I made the temporary comparison copies with `git show :<path>` and a Python string replacement into new files. I changed the temporary test and a scratch browser script with Python. All tracked files were changed only with the Edit and Write tools and `prettier --write`. No `sed -i` was used.
- For the documenter:
  - `move-map.csv` row `src/screens/MyEntertaining/index.tsx`: shape is page + 2 hooks + 2 props-only views, no container; `api.ts` and `types.ts` are deleted; there is an `inputs.ts`; `staticEntities.ts` is at the page root; the calls are in `api/entertaining`.
  - `calls-by-domain.md` line 171 still names `screens/MyEntertaining/api.ts`.
  - `api/README.md` needs a paragraph on the new domain `entertaining/`: 2 calls, `useEntertainingConfigQuery` (caller `useEntertainingCalendar`), and `fetchUserIdToken` with no hook.
  - The CHANGELOG needs the step.

## Questions for the user
none
