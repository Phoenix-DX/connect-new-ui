## Result
status: question
summary: Ported the TST 2026-11-07 header (Horizontal_Filter_TagList with FilterSheet_Icon_Label in FilterPills; no filter icons in the header; no badge in UpdateItem_Header; PillsLoaded). Rebuilt the 88 mock rows from the fresh capture and fixed the NO-WIRE finding. Parity is clean in every state and the quick checks pass. One finding from before this item (NO-BROWSER-STORAGE) needs a user decision.

## Files changed
app/src/pages/Updates_SingleList/Updates_SingleListPage.tsx
app/src/pages/Updates_SingleList/components/UpdateItem_Header.tsx
app/src/pages/Updates_SingleList/components/staticEntities.ts
app/src/pages/Updates_SingleList/hooks/updatesSingleListState.ts
app/src/pages/Updates_SingleList/mocks.ts
app/src/pages/Updates_SingleList/mocks.test.ts
app/src/pages/Updates_SingleList/Updates_SingleList.test.tsx
migration/screens/Updates_SingleList/parity/default.json, default.build.png, default.diff.png (route.py parity output)
migration/screens/Updates_SingleList/parity/loading.json, loading.build.png (route.py parity output)
migration/screens/Updates_SingleList/parity/offline.json, offline.build.png, offline.diff.png (route.py parity output)

What changed, with the evidence (p: = migration/sources/pretty/UBTConnect.Directory_Updates.Updates_SingleList.mvc@857c68f9.js):
- Header right: only Icon_Search (scrolled, not toggled) and App_NotificationIcon `$b6` (p:432-492). Removed Icon_FilterSheet_PostScroll. Placeholder_Header_Input_Icon is empty (p:571). Removed Icon_FilterSheet_PreScroll.
- Header content: CustomContainer `$b8` (neutral-0, margin-top base, no padding) > CustomContainer `FilterPills` (background-neutral-0, padding y xs / x base, margin-top base) > Horizontal_Filter_TagList `$b10` (single selection, In_TagsLoading = not PillsLoaded and isLoading) with FilterSheet_Icon_Label `$b11` (isLoaded True, ShowSubscriptionOnClick False, HaveFiltersApplied, BottomSheetId) in its Filter placeholder (p:573-723; dom/default.html:124-211). The shared components were used as they are.
- PillsLoaded: a new state variable. It is True after OnInitialize of a new visit (p:2121). A restored view keeps its saved value.
- UpdateItem_Header: the IconText icon placeholder is empty now (UpdateItem_Header.mvc@83c85bd4.js:314-316), so the BadgeNumber badge is removed. The callers still pass BadgeNumber. "Mark All as Read" is `<scope>-$b5`. The unused UBT_Color_RedDark constant of the page is removed.
- Mock: 88 rows in the order of the fresh capture. Each row has the captured type, the tag gender (pink/blue), all rows unread, and the day as days before 2026-11-07 (from data-plus-date: "Last 7 Days" 28 rows, "Last 30 Days" 60 rows). Every name and location has fictional text with the captured word lengths (checked one by one against the masked capture).
- NO-WIRE-IN-COMPONENTS (hooks/updatesSingleListState.ts, the literal '1900-01-01'): the literal is replaced with OS_NULL_DATE from '@/lib/osDateTime'. os-wire.ts has no helper from domain to wire.
- Tests: the expected counts are updated to the capture (88 unread). The search test now uses Joseph Hargreaves. The click test uses row 44 (Joshua & Emily Caldwell, household 880056). The type-tag test now uses `$b10`. New checks: the "Filter" label is inside Horizontal_Filter_TagList, the header has no FilterSheet_Icon, and the list header has no Badge.
- Other changed TST files (FilterSheet, HorizontalTagList, TagContent, ShareSheet, CacheControl_UserInfo): no change was needed for the captured states (parity is clean). FilterSheet is already frozen (CountryDetails item). The ShareSheet open state is not captured.

## Commands run
npm --prefix app run typecheck → exit 0, no errors
cd app && npx vitest run src/pages/Updates_SingleList src/components/filter → 10 files, 61 tests passed
cd app && npx eslint src/pages/Updates_SingleList → exit 0
npm --prefix app run arch → no dependency violations (139 known ignored)
python3 tools/pipeline/consistency_check.py --screen Updates_SingleList → 1 problem: [NO-BROWSER-STORAGE] actions.ts:15 (pre-existing; NO-WIRE fixed)
python3 tools/pipeline/route.py parity Updates_SingleList --app http://localhost:5173 → parity clean
  default: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.02%, worst tile 2.2%
  loading: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.00%, worst tile 0.0%
  offline: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.02%, worst tile 2.2%

## Deviations from the brief
- I rewrote UpdateItem_Header.tsx once with a short Python string-replace script, not with the Edit tool (agent rule 7). The change is the one shown in the diff. All other edits used the Edit tool.
- Shared components not granted to this item, recorded for the Notes item (no change was needed here, parity is clean): the live Horizontal_Filter_TagList gives its list the name "TagList" (UBTConnectLibrary.ConnectPatterns.Horizontal_Filter_TagList.mvc.js:356). The capture shows `id="b10-TagList"` and the row ids `b10-l1-71_<n>-$b4`. app/src/components/filter/HorizontalFilterTagList/Horizontal_Filter_TagList.tsx renders no id on the list div and gives the rows `l1-60_<n>`. Parity does not compare these ids.

## Questions for the user
- NO-BROWSER-STORAGE (this finding was there before this item): app/src/pages/Updates_SingleList/actions.ts:15-16 (setItem), 23-24 (getItem) and the removeItem calls in scrollFix. They keep `scrollAnchorId` and `scrollAnchorDelta` in localStorage, as the TST JS nodes CaptureScrollPosition / ScrollFix do. These keys hold no token and no personal data (an update id and a pixel offset). Options: (a) keep localStorage as the original does and record a consistency exemption; (b) move the two keys to an in-memory store of the shell (platform/navigation, outside this item's paths); (c) use sessionStorage. Recommendation: (b), because the values only need to live while the app is open. This needs a platform change request.
