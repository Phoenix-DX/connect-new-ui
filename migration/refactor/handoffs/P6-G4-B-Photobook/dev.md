## Result
status: pass
summary: Photobook is now a page. The screen flow (OnInitialize, GetLocalityHouseholdIds, OnAfterFetch) is in `hooks/usePhotobook.ts` (useFlowState and the pure `photobookState.ts`). The Photobook_Options_Left caption flow is in `hooks/useHouseholdCaption.ts`. The 2 calls are in `api/household`. `api.ts` and `types.ts` are replaced by `inputs.ts` and the domain. A temporary old-vs-new test gave equal results in 12 scenarios. Quick checks pass, the full suite passes, arch_baseline exits 0, and the bundle is within W21.

## Files changed
app/src/api/household/index.ts
app/src/api/household/types.ts
app/src/api/household/mapper.ts
app/src/api/household/mapper.test.ts
app/src/api/household/repository.ts
app/src/api/household/repository.test.ts
app/src/pages/Photobook/PhotobookPage.tsx
app/src/pages/Photobook/Photobook.test.tsx (new)
app/src/pages/Photobook/inputs.ts (new)
app/src/pages/Photobook/hooks/photobookState.ts (new)
app/src/pages/Photobook/hooks/photobookState.test.ts (new)
app/src/pages/Photobook/hooks/usePhotobook.ts (new)
app/src/pages/Photobook/hooks/usePhotobook.test.tsx (new)
app/src/pages/Photobook/hooks/useHouseholdCaption.ts (new)
app/src/pages/Photobook/hooks/useHouseholdCaption.test.tsx (new)
app/src/pages/Photobook/components/Photobook_Options_Left.tsx
app/src/pages/Photobook/components/Photobook_Carousel.tsx (type import, @origin only)
app/src/pages/Photobook/components/Photobook_Gallery.tsx (type import, @origin only)
app/src/pages/Photobook/components/Photobook_Item.tsx (type import, @origin only)
app/src/pages/Photobook/components/Photobook_Options_Player.tsx (@origin only)
app/src/pages/Photobook/components/Photobook_Options_Right.tsx (@origin only)
app/src/pages/Photobook/components/PanZoom.tsx (@origin only)
app/src/pages/Photobook/api.ts (deleted)
app/src/pages/Photobook/types.ts (deleted)
migration/refactor/handoffs/P6-G4-B-Photobook/dev.md (new)

## Commands run
npm --prefix app run typecheck → exit 0
npx vitest run src/pages/Photobook src/api/household → 7 files, 44 tests pass
npx vitest run (full suite) → 481 files, 2630 tests pass
npx eslint src/pages/Photobook src/api/household → exit 0, no warnings
npm run lint → 0 errors, 88 warnings (all outside this step's folders)
npm run format:check → all files pass
npm run arch → 210 warnings (HEAD 213). These 3 rule-9 warnings are gone: PhotobookPage.tsx, Photobook_Options_Left.tsx and api.ts imported legacy/os. Photobook/mocks.ts still has 1 (mocks unchanged).
python3 migration/tools/refactor/arch_baseline.py check → exit 0 (87 warnings, 87 rows, 0 new, 0 gone; Photobook had no rows)
npx vite build + node build/bundle-report.mjs HomeFeed Login Photobook → HomeFeed 244.19 → 244.14 kB gzip (−0.05), Login 184.16 → 184.18 (+0.02), Photobook 239.29 → 237.38 (−1.91). Within W21 (+0.3 kB per step).
Temporary old-vs-new test (old page copied from HEAD; both files deleted before the hand-off) → 12/12 scenarios equal, stable in 4 runs. Each scenario compares the DOM, the call list and order, the request bodies of both actions, the URL, the preload object and the feedback message. The scenarios: open on the first, the third, an absent and an unknown household; a failed call; close to HouseholdCarousel; close to HouseholdDetails with the flag off; back; the info sheet twice and a thumbnail click; a quick back navigation and a late one; leaving before the answer and coming back.

## Deviations from the brief
- The old-vs-new test found one behavior that the first draft changed, and the draft was fixed. The old query never went stale, so the view cache gave it back on a back navigation, and the old page did not call GetLocalityHouseholdIds again on a restored view. `usePhotobook` now keeps this behavior. A restored view with a list does not call again. A restored view without a list (the user left before the answer) calls again with its saved variables, as before. Page tests cover both cases.
- W23 nuance. With the old page, a GetLocalityHouseholdIds failure that came after the unmount did not reach the flow handler, because the query had no observer any more. `usePhotobook` keeps this: it sends a failure to the flow handler only while the screen is mounted. This is the old behavior and W23 option (b). A unit test covers it. The caption flow already raised failures after an unmount in the old port, and it still does (W23).
- Photobook_Options_Left calls `useHouseholdCaption` itself, so the page does not call it. The block's state lifetime and render scope stay as before, and the carousel does not re-render when the caption loads. The block is the only user.
- Photobook_Carousel, Photobook_Gallery, Photobook_Item, Photobook_Options_Player, Photobook_Options_Right and PanZoom keep their local UI state. They make no server calls. Only their type imports and their `// @os-block` → `@origin` line changed. Their compiled-line references stay because this step did not rewrite them.
- `SelectedHousehold` moved to `api/household/types.ts`, because GetLocalityHouseholdIds sends it. `PhotobookHousehold` and `HouseholdCaption` also moved there.
- `api/household` is shared with other G4 B steps that may run in parallel (for example Locality_Details and Household_Relations). Each new block is appended at the end of `types.ts`, `mapper.ts`, `repository.ts`, `mapper.test.ts` and `repository.test.ts`, and the barrel export list grew, so the master may need to merge by hand. The household `repository.ts` header still names only HouseholdDetails_Block (`@origin`). It was left unchanged to avoid merge conflicts; the documenter or step C can generalize it.
- I fixed the click selectors in my new `Photobook.test.tsx` with a one-off Python string replace, not with the Edit tool (rule 6). This file is new in this step, and the result is in the diff.
- For the documenter: `calls-by-domain.md` (the 2 `screens/Photobook/api.ts` rows → `api/household/repository.ts`), `api/README.md` (household domain: 2 Photobook calls), `move-map.csv` (Photobook row, shape `page`, no container) and the CHANGELOG.

## Questions for the user
none
