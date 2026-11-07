## Result
status: pass
summary: Directory_CommunityNumbers is ported to the fresh capture. HomeFeed has the `$b6` CustomContainer with `$b7`, fed by GetCommunityStatistics in OnReady; FetchCount is gone; the mock is fictional; NO-WIRE is fixed. Resume (master answers Q1 a, Q2 b, Q3 leave): IconSvg, UBT_Icons and the asset manifest now have the four SVG_Community* icons, and the shared update items are the three "Birth" items of the fresh capture. Parity: default, loading and offline have 0 differences. Quick checks pass, except one typecheck error in a sibling file (CountryList, not caused by this item).

## Files changed
app/src/components/feed/CommunityPopulation/CommunityNumbers.tsx (new)
app/src/components/feed/CommunityPopulation/CommunityNumbers.stories.tsx (new)
app/src/components/feed/CommunityPopulation/CommunityNumbers.test.tsx (new)
app/src/components/feed/CommunityPopulation/__captures__/numbers-default.html (new, extracted from HomeFeed/analysis/dom/default.html)
app/src/components/feed/CommunityPopulation/__captures__/numbers-loading.html (new, extracted from HomeFeed/analysis/dom/loading.html)
app/src/components/feed/CommunityPopulation/index.ts
app/src/components/feed/CommunityPopulation/mocks.ts
app/src/components/feed/CommunityPopulation/README.md
app/src/components/ui/IconSvg/IconSvg.tsx (resume, granted)
app/src/lib/ubtConnectLibrary/staticEntities.ts (resume, granted)
app/src/lib/os-assets.manifest.json (resume, granted)
app/src/mocks/modules/UBTConnect/Directory_Updates/mocks.ts (resume, granted)
app/src/pages/HomeFeed/HomeFeedPage.tsx
app/src/pages/HomeFeed/hooks/useHomeFeedReady.ts
app/src/pages/HomeFeed/hooks/useHomeFeedReady.test.tsx
app/src/pages/HomeFeed/HomeFeed.test.tsx
app/src/pages/HomeFeed/mocks.ts
migration/screens/HomeFeed/parity/* (made by route.py parity)
(The four `app/public/os-assets/UBTConnect/img/UBTConnectLibrary.Community*.svg` files were added by the master, not by me.)

## Commands run
npm --prefix app run typecheck → exit 2, one error, in a sibling file: `src/pages/CountryList/CountryListPage.tsx(23,31) TS2554`. It comes from the BrowseCountries change of `useCommunityPopulationQuery(owner)` and belongs to the CountryList item. HomeFeed has no errors.
cd app && npx vitest run src/pages/HomeFeed src/components/feed src/components/ui/IconSvg src/components/ui/Icon src/mocks src/pages/Updates_SingleList src/lib src/api/member → 44 files, 306 tests passed
cd app && npx eslint (all changed files) → exit 0; npx prettier --check → clean
npm --prefix app run arch → no dependency violations (139 known violations ignored)
python3 tools/pipeline/consistency_check.py --screen HomeFeed → OK
python3 tools/pipeline/route.py parity HomeFeed --app http://localhost:5173 (dev server cwd = <root>/app) → HomeFeed: parity clean
- default: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.03%, worst tile 2.2%
- loading: all 0; pixels 0.00%
- offline: all 0; pixels 0.03%, worst tile 2.2%
Image boxes: the parity layout check compares every `<img>` box with the capture (members 40×43, the three others 24×26) and reports 0 layout and 0 position differences for the icons. The capture shows broken-image boxes, and the app now shows the real SVGs in boxes of the same size; the pixel check stays inside its limit.

## Deviations from the brief
- I kept `CommunityPopulation` (the old FeedBlock_CommunityPopulation) next to the new `CommunityNumbers`, because CountryList still uses it. The CountryList item can remove it. I removed the FetchCount mock handler because TST no longer calls it.
- The fictional handler for HomeFeed/DataActionGetCommunityStatistics is in the component `mocks.ts`: 48,215 members, +6, 19,870 households, 386 localities, and 17 countries as captured. I removed the handler that answered all zeros from `pages/HomeFeed/mocks.ts`.
- The data comes from the screen data action of the OnReady flow (`useHomeFeedReady` calls `fetchCommunityStatistics('HomeFeed')` and keeps IsDataFetched and the answer in the view state), not from `useCommunityPopulationQuery`. TST calls it only on demand in ScreenEvent_OnReady and skips it when the view cache restores the screen. I left `fetchHomeFeedCommunityStatistics` in api/country for the CountryList item (Q3).
- Local_CommunityStatistics follows the compiled logic: 1000 placeholders while loading, then it copies the input on OnParametersChanged when not loading. A negative change shows "-" + FormatCurrency(n), which gives "--4". The negative and zero change cases are compiled code only (stories ChangeDown and NoChange).
- Update items 2 and 3 (shared mock):
  - Both are now "Birth" items for boys, with fictional names of the captured lengths: "Samuel Hartley" (6+7) and "Florence Bishop" (8+6).
  - Their locations are short ("Lismore, Australia" and "Leichhardt, Australia", the same form as item 1), not the captured 44 and 46 masked characters. In TST these locations show on one line. Fictional texts of the captured lengths wrapped to two lines in the app and moved the location icon (position 0,2 → 0,9, checked with three parity runs). The masked capture does not tell the real text widths. The mock comment records this.
- In the TST capture, the CSS of `.directory-numbers-card*` is not applied (the card is stacked). The app has no such CSS either, so the layout matches.

## Questions for the user
none
