## Result
status: pass
summary: HelpersDetail is now a page. It has a hook (`useHelperDetails`), a pure state file, a client-actions file, a view with props only (`HelperDetailsView`) and `inputs.ts`. The hook uses `useFlowState` with `beforePaint: true` (P6-F17, W28), so OnReady still runs before the first paint. `api.ts`, `types.ts` and `ScreenBlock_HelperDetails.tsx` are deleted, and the photo call is `fetchLegacySignedImageURL` of `api/image`. An old-vs-new check gave the same DOM, calls, request bodies, URL and feedback in 14 of 14 scripts, normal and StrictMode. The quick checks and the full suite pass.

## Files changed
app/src/api/image/index.ts (copied byte for byte from wt-OrbitAdminEventDetail, W8)
app/src/api/image/repository.ts (added; copied byte for byte from wt-OrbitAdminEventDetail, W8)
app/src/api/image/repository.test.ts (added; copied byte for byte from wt-OrbitAdminEventDetail, W8)
app/src/platform/navigation/flowState.ts (copied byte for byte from wt-F17b, P6-F17: option `beforePaint`)
app/src/pages/HelpersDetail/HelpersDetailPage.tsx (changed)
app/src/pages/HelpersDetail/HelpersDetail.test.tsx (added)
app/src/pages/HelpersDetail/inputs.ts (added)
app/src/pages/HelpersDetail/mocks.ts (changed: the 3 wire types moved in from types.ts)
app/src/pages/HelpersDetail/components/HelperDetailsView.tsx (added)
app/src/pages/HelpersDetail/components/HelperDetailsView.test.tsx (added)
app/src/pages/HelpersDetail/components/actions.ts → app/src/pages/HelpersDetail/hooks/helperDetailsActions.ts (moved with `mv`; comments rewritten without compiled-line references, `@origin` added)
app/src/pages/HelpersDetail/hooks/helperDetailsActions.test.ts (added)
app/src/pages/HelpersDetail/hooks/helperDetailsState.ts (added)
app/src/pages/HelpersDetail/hooks/helperDetailsState.test.ts (added)
app/src/pages/HelpersDetail/hooks/useHelperDetails.ts (added)
app/src/pages/HelpersDetail/hooks/useHelperDetails.test.tsx (added)
app/src/pages/HelpersDetail/api.ts (deleted)
app/src/pages/HelpersDetail/types.ts (deleted)
app/src/pages/HelpersDetail/components/ScreenBlock_HelperDetails.tsx (deleted)
migration/refactor/handoffs/P6-G5-B-HelpersDetail/dev.md (added)

## Commands run
All commands ran in the worktree, with Node 24.
cp + cmp of api/image/{repository.ts,repository.test.ts,index.ts} from wt-OrbitAdminEventDetail → identical (cmp exit 0)
cp + cmp of platform/navigation/flowState.ts from wt-F17b → identical (cmp exit 0). The page-local `useReadyBeforePaint.ts` of the first version (W28 interim copy) is deleted; no test of it was copied.
npm --prefix app run typecheck → exit 0
npx vitest run src/pages/HelpersDetail src/api/image src/platform/navigation → 22 files, 129 tests passed
npx vitest run (full suite) → 515 files, 2916 tests passed
npx eslint src/pages/HelpersDetail src/api/image src/platform/navigation/flowState.ts → exit 0, no warning
npx prettier --check (same paths) → all formatted
npx depcruise src --config .dependency-cruiser.cjs → exit 0; 198 → 196 warnings, no new warning. The 2 rule-9 warnings of api.ts and of the ScreenBlock are gone; mocks.ts keeps its old os-wire warning.
python3 migration/tools/refactor/arch_baseline.py check → 83 warnings, 83 rows, 0 new, 0 gone
npx knip → no finding in pages/HelpersDetail or api/image. The 2 findings in flowState.ts (exported interfaces FlowStateOptions and FlowState) were already there on the base tree.
Temporary old-vs-new check, run again after the switch to `beforePaint` (old route copied to pages/HelpersDetail/__old__ with a scratch test; both deleted afterwards):
  - 14 scripts, each in normal mode and in StrictMode: default (no helper), no query string, helpers, loading, error, member click with and without directory access, phone popup (open, loaded, cancel), second member phone, helpdesk footer with and without Orbit access, back navigation, back navigation with an open popup, leave while loading.
  - All scripts gave the same body HTML, call list, request bodies, URL and feedback message.
  - The only difference was where the feedback container sits in the error script. This comes from the test, not the app: both pages run in one test, and the first run creates the container.
W21 first load. The base is the same tree with the old route, built from a scratch copy; then `vite build` and `build/bundle-report.mjs`:
  HomeFeed 751.29 kB raw / 244.38 kB gzip → 751.30 / 244.34
  Login    601.24 kB raw / 184.39 kB gzip → 601.24 / 184.39
  - Per chunk: only the entry changed raw size, by +3 bytes. The entry's preload list for the lazy HelpersDetail route has one more index, because the route now also loads the existing `flowState` chunk.
  - The gzip changes are noise from the content hashes: earlier builds of this step gave +0.00 to +0.06.
  - HelpersDetail itself: 668.39 → 670.87 kB raw.

## Deviations from the brief
- OnReady runs before the first paint, as in the old block (a layout effect), through `useFlowState({ onReady, beforePaint: true })` (W28, P6-F17).
- The event flows (member click, call popup) guard their state writes with the `isAlive` that OnReady gets, kept in a ref (`blockAlive`). It is true until the unmount (W23: state writes only), and no event flow can start before OnReady, which runs at the mount.
- The old block skipped OnReady when `restored && saved`; the new one skips it when `restored`. The result is the same: OnReady writes the state at the mount, so a view that the cache restores always has its saved record.
- The view-cache key of the block state is now `Orbit_ScreenBlocks.ScreenBlock_HelperDetails` (it was `Model`). It is an internal name only.
- W21: the entry of HomeFeed and Login grows by 3 bytes raw (see Commands run). This is under the W21 tripwire (0.3 kB per step) but not zero, so the master should judge it.
- No browser check with `vite preview`: the DOM-level old-vs-new check above covers the states of the route. I did not start a dev server.
- Docs (move-map, CHANGELOG, READMEs, api/README for api/image) are left to the documenter.

## Questions for the user
none
