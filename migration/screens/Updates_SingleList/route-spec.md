# Screen spec: Updates_SingleList

Tier full. Sources: pack.md; compiled `analysis/sources/pretty/UBTConnect.Directory_Updates.Updates_SingleList.mvc.js`
(SCR; view :225-1194, controller :1200-3375, JS nodes :3377-3630), `…UpdateItem_Header.mvc.js` (UIH),
`…SectionHeader.mvc.js` (SH), `…Directory_Updates_FilterSheet.mvc.js` (DUFS); module actions
`analysis/sources/raw/UBTConnect.controller.js` (UC: Directory_Updates_AugmentDateRanges / GetBreakpoints /
GetListBreakpoint / GetUpdatedBreakpoints / MarkAllAsRead / MinDateToShow, GetSkeletonList_UI_Updates); captures
`analysis/dom/{default,loading,offline}.html` (dom/…).

## 0. Summary

The Updates tab (bottom bar item Updates, `isRootPage`): Layout_MainPages_FixedTitle (gray background) has:
- the title "Updates" + App_NotificationIcon;
- a search row (Input "Search updates" + FilterSheet_Icon);
- a white HorizontalTagList (All / Birth / Marriage / Taken, single selection);
- the sticky UpdateItem_Header (current date range + red badge + "Mark All as Read");
- then the List `List_Updates` of update items (Update_ListItem, ScrollAnchor), with an in-list SectionHeader where the date range changes.

Data: GetDateRanges → AugmentDateRanges → SetDefaultFilters → FetchUpdates (refresh only, SCR :1233-1236).
Loading shows 10 skeleton items (GetSkeletonList_UI_Updates(10)).

## 1. Entry and routing

Route `/UBTConnect/Updates_SingleList`, no inputs (pack). Navigates to `/UBTConnect/HouseholdCarousel?In_StartingHouseholdId`
(C2EnableCarousel on) — SCR ctrl :354-376; the HouseholdDetails branch (flag off) is not built (default-only).

## 2. Component tree

- `Layout_MainPages_FixedTitle` [shared] isGrayBackground; OnHeaderScrolled → IsHeaderScrolled (SCR :238-260)
  - Header_Title: "Updates", or when IsToggleSearch and IsHeaderScrolled a CustomContainer (flex, center, row,
    full-width) with Icon arrow_left_alt (margin-right-s) + Input `Search_PostScroll` (SCR :271-427)
  - Header_Right: when IsHeaderScrolled: Icon_Search (unless IsToggleSearch) + FilterSheet_Icon `Icon_FilterSheet_PostScroll`;
    always App_NotificationIcon `$b7` (SCR :429-513)
  - Header_Input: Input `Search_PreScroll` "Search updates", debounce 300, rounded (SCR :514-590)
  - Header_Input_Icon: FilterSheet_Icon `Icon_FilterSheet_PreScroll` (SCR :591-615)
  - HeaderContent: CustomContainer `$b10` (neutral-0, padding y s / x base, margin-top base) > HorizontalTagList `$b11`
    (single selection, Filter_UpdateTypeOptions); UpdateItem_Header `ListHeader` [BUILD here] (SCR :616-733)
  - Content: Updates_NoItemsFound (not captured → NotCaptured) when not loading, fetched and empty. Otherwise the List
    `List_Updates` "list list-group background-neutral-0 updates-list" (+ `list-loading` while FetchUpdates has not
    succeeded, dom/loading.html:236), animateItems false, position relative (SCR :734-993).
    - Per row: SkeletonSection (In_IsLoading = isLoading) > Container `updates-list__list-item` `data-plus-date` = DateToText(Date) >
      SectionHeader [BUILD here] for rows ≠ 0, Update_ListItem `UpdateItem` (ShowImage False, PaddingSizeId general base),
      ScrollAnchor (Id = UpdateItemId)
  - Bottom: BottomBarMenu `$b18` ActiveItem Updates, isRootPage (SCR :995-1017)
  - CommonUI_InsideLayout `$b19`
- Directory_Updates_FilterSheet `$b20` [BUILD here] > FilterSheet (sorting Newest/Oldest, countries 1, localities 2,
  extra choice "Filter by status": Read Only / Unread Only / All Updates, order 2) (DUFS view, OnInitialize)
- ShareSheet `$b21` (Type_ShareObject Update) with an Update_ListItem preview (SCR :1105-1193)

## 3. DOM and markup contract

dom/default.html is the contract; ids as captured (`l1-478_<i>` data rows, `l1-106_<i>` skeleton rows, `l1-129_<i>`
offline rows: runtime list keys). SectionHeader renders its Container only when its breakpoint is set and not loading
(SH view); the captured one has inline `z-index: 10` (SH InitializeIntersectionObserver JS).

## 5. Data model

UI_UpdateItem (UpdateItemId Long Integer as text, UpdateItemTypeId, Name, Date, GenderId, LocationString, IsRead,
HasAccess, HasShare, HouseholdId, ParentsNames, BirthType, MemberId); UI_Updates_DateRange {Range, From, To};
UI_UpdateItem_Breakpoint {Position, SectionName, BadgeCount, DateRange}; Filter_Updates {Filter_Date {Date_From,
Date_To}, Filter_SearchText, Filter_UpdateTypeId, CountryIds, LocalitiesIds, Filter_ReadOnly, Sort_ByNewest}.

## 6. API calls

| Call | When | Inputs | Evidence |
|---|---|---|---|
| `Updates_SingleList/DataActionGetDateRanges` | OnReady (not restored) | screen variables | SCR ctrl :687; fixture 02-0400bafb |
| `Updates_SingleList/DataActionFetchUpdates` | RefreshUpdates (after date ranges, search, tag, filters, mark all) | screen variables | SCR :1273-1300 |
| `ServiceAPIAction_UI_UpdateItem_MarkAsRead` | item click, context menu | UpdateItemId | SCR :1244 |
| `ServiceAPIAction_UI_UpdateItem_MarkAsUnread` | context menu | UpdateItemId | SCR :1262 |
| `ServiceAPIAction_UI_UpdateItem_MarkAllAsRead` | Mark All as Read | Filter_Updates | SCR :1253 |
| Directory_Updates_RefreshBottomBarCount(true) | after fetch / marks | — | shared action |

Calls of the shell/shared blocks (CacheControl, App start, unread counts) come from their owners (calls.json).

## 7. State and lifecycle

Screen variables and defaults: SCR model :45-126.

OnInitialize (ctrl :458-519):
- Not restored: CurrentBreakpoint {0, Today, 0}, UpdateFilterTypesOptions (All selected, Birth, Marriage, Taken).
- Restored: swiped carousel items (preload) set IsRead, decrement UnreadCount and the breakpoint badge.

OnReady (ctrl :643-694): not restored → isLoading, skeleton list (10), GetDateRanges → OnAfterFetch_GetDateRanges (AugmentDateRanges, SetDefaultFilters, RefreshUpdates).

OnAfterFetch_FetchUpdates (ctrl :829-873): GetBreakpoints, CurrentBreakpoint = first or empty, ShowMarkAll = UnreadCount > 0, isLoading False, scroll-end listener, RefreshBottomBarCount.

The scroll-end listener (JS :3520-3600) runs once at setup (setTimeout 0) and on `scrollend`:
- The item that straddles the ListHeader's bottom edge gives its `data-plus-date`.
- → GetListBreakpoint(Breakpoints, date, CurrDate, False) → CurrentBreakpoint.
- This is why the captured header says "Last 7 Days" with a badge, not the first breakpoint.

## 8. Render logic

Header badge when BadgeNumber > 0 (UIH); "Mark All as Read" when ShowMarkAll (UIH). SectionHeader: GetListBreakpoint
(Breakpoints, Current, Previous, IsAscending = Sort_ByNewest ≠ Yes); shown unless Today (desc) / Older (asc) (SH OnReady).

## 9. Interactions and navigation

Search submit / clear → Handler_FilterSearchText; tag change → OnChange_FilterType; filter sheet apply →
Handler_ApplyFilters (no change → nothing); all: ShowMarkAll False, ScrollTop, isLoading, RefreshUpdates. Item click →
MarkAsRead, local IsRead, carousel preload (GetCarouselPreloadedHouseholds of HasAccess items), HouseholdCarousel.
Share → ShareSheet (C2ExtendedShare on). Mark All → server action, local list read, badges 0, RefreshUpdates.

## 11. Error handling

OnAfterFetch_* : non-system error → isLoading False, raise UBTConnect.BubbleGenericException (ctrl :860-871, :948-959);
MarkAll: isLoading False only. Offline (dom/offline.html): GetDateRanges fails, skeleton stays with `list-loading`.

## 12. Strings

- "Updates", "Search updates", "All", "Birth", "Marriage", "Taken", "Mark All as Read".
- "Newest to Oldest", "Oldest to Newest", "Filter by status", "Read Only", "Unread Only", "All Updates" (compiled literals).

## 13. Accessibility, platform and security notes

MarkAsRead / MarkAsUnread / MarkAllAsRead are writes: the server must check the update belongs to the user.
CaptureScrollPosition / ScrollFix store the scroll anchor in localStorage (JS :3377-3480): replaced by the shell's
view-cache scroll restore (P-BACK, NO-BROWSER-STORAGE) — question Q1.

## 13a. Feature flags

C2EnableCarousel on (HouseholdCarousel; HouseholdDetails not built), C2ExtendedShare on (ShareSheet; coming-soon not
built), read with `useFlagOn` (user decisions 2026-10-14, pack). Other route flags: not flags / default-only, no branch here.

## 14. Unclear points

- The handlers of HomeFeed mock the mark-read writes on the shared `HomeFeed.updateItems` collection; the items of this screen
  live elsewhere → CR-Updates_SingleList-1 (open, section 16a).
- Scroll anchor storage: settled by Q1 = A (shell view cache, section 16).
- Bottom-bar slider timing in the loading / offline captures: settled by Q2 = A (exemptions, section 15a).
- No other open point.

## 15. Acceptance criteria

Every captured state (default, loading, offline) passes parity; calls as calls.json per phase.

## 15a. Parity (route.py parity, 2026-10-15, after the last code change)

- default: 0 differences; pixels 0.03 %, worst tile 2.2 % (exempted: link cursor, masked badge, slider subtree,
  SLIDER-APPEAR-TIMING).
- loading: 0 differences; pixels 0.02 %, worst tile 2.2 % (exempted: link cursor, skeleton shimmer phase, masked badge,
  ignoreSubtrees×2 incl. SLIDER-LOADING-TIMEOUT-PIXEL).
  - Before the parity tool fix it failed on pixels (worst tile 3.8 %, hotspots 160-200,760 and 200,800).
  - 92 of the 153 unmasked pixels were the TST slider line (rows 788-789, x 172-217; the build has no slider yet, SLIDER-LOADING-TIMEOUT).
  - 60 other pixels were the right edge of the masked badge ("••" in the capture vs "9+", the CAPTURE-BADGE-MASKED-TEXT kind). It is below the tile limit on its own.
  - The checker did not mask the slider. It masked an ignored subtree only by its border box, and the slider's box is 0 px tall (section 16, parity tool fix).
- offline: 0 differences; pixels 0.03 %, worst tile 2.2 % (SLIDER-APPEAR-TIMING now covers offline, Q2).
- Regression of the parity tool fix (scratch reports, never written into the other routes):
  - The 11 finished routes with captured states have the same counts (0), diff pixels and worst tile before and after. The routes are HomeFeed, Login, MessageDetail, MyEntertaining, Notes, Notifications, PINRegister, PINUnlock, Search, Services, Splash.
  - Only HomeFeed loading gains one mask rectangle (8 → 9) with the same 1 diff pixel.
  - AcceptPendingPolicies and FeedItemDetail have no captured state.
- Timed check: the header title/badge ("Last 7 Days" + badge in the capture) come from the scroll-end correction.
  - The correction runs 0 ms after FetchUpdates (SetupScrollEndListener).
  - With mock latency 0 it matches.

## 16. Decisions to confirm

- Q1 = A (auto-accepted recommendation in the user's 3h window, 2026-10-15): the scroll position comes back through
  the shell view cache (`app/src/shell/navigation/ScreenFrame.tsx:15-17` → `viewCache.ts:88-99`).
  - This replaces the localStorage anchor of the original (SCR JS :3377-3480).
  - The route stores nothing (index.tsx:265-266).
- Q2 = A (auto-accepted, same window): the bottom-bar slider timing is exempted: SLIDER-APPEAR-TIMING now covers
  offline (class), SLIDER-LOADING-TIMEOUT-PIXEL (`ignoreSubtrees`, loading) masks the slider's pixels.
- Parity tool fix (2026-10-15):
  - `parity_check.cjs` masked an ignored subtree only by its own border box (`skipped.push(v.box, …)`, old :300 and :343-344).
  - The slider is a 0 px tall fixed box (UBTConnectLibrary css:1771-1780). Its 2 px line is a positioned `::before` of its child (css:1782-1800).
  - `getBoundingClientRect` never includes pseudo-elements, so SLIDER-LOADING-TIMEOUT-PIXEL masked nothing.
  - The checker now also masks the painted rectangles of positioned `::before`/`::after` inside an ignored subtree (`pseudoBox`/`pboxes` in serialize, `skipSubtree` in diffTrees).
  - Regression parity of the finished routes is unchanged (section 15a).
- CR-Updates_SingleList-1: one shared UI_UpdateItem mock collection with MarkAsRead/MarkAsUnread/MarkAllAsRead
  (today HomeFeed's handlers answer MarkAsRead/MarkAsUnread on HomeFeed's collection; the route keeps IsRead locally).
- DataActionFetchUpdates is fictional (never recorded, person data). It has 88 items with the captured types, genders (tag colour), read states (4 read), days before the capture day 2026-10-14 and text lengths.
  - The last row's place is the place name that the capture shows unmasked (place names kept as real values: mock-fixtures.md, Q3 a).
  - The MarkAllAsRead handler is added in the route's mocks.ts.
- Not built / not captured:
  - Updates_NoItemsFound (NotCaptured).
  - HouseholdDetails branch (C2EnableCarousel off).
  - Share coming-soon branch (C2ExtendedShare off).
  - The restored-view branch is built from the compiled code (P-BACK) but not captured.
- Divergence: the scroll-end listeners are removed on unmount (the original never removes them).

## 16a. Change requests

- CR-Updates_SingleList-1 (open, `migration/change-requests/CR-Updates_SingleList-1.md`): one shared UI_UpdateItem
  mock collection with the MarkAsRead / MarkAsUnread / MarkAllAsRead handlers. Workaround: the route keeps IsRead
  locally after the call, as the original does; MarkAllAsRead is answered by the route's mocks.ts. Nothing on screen
  is marked NotCaptured for it.

## 17. Patterns used

P-DATA, P-CALLS, P-MOCKS, P-MUTATION, P-LIST, P-STATES, P-FLAGS, P-OSUI, P-PARAMS, P-BACK, P-DIALOG.

## 18. Builder notes

Copy Notifications' model/reducer structure; Directory_Updates_* module actions ported in
`components/actions.ts`; static values from static-entities-tst.json.
