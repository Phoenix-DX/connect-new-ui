# Screen spec: Notifications

Sources: `analysis/sources/pretty/UBTConnect.App_Notifications.Notifications.mvc.js` (SCR), its blocks
(`…Notifications_Action`, `…NotificationsListBreakpoints`, `…NotificationsList`, `…Notifications_Header`,
`…Notifications_SortSheet`, `…Notifications_MoreActionSheet`, `…App_CommonBlocks_Filter.SortSheet` (SORT),
`…App_CommonBlocks_Filter.MoreActionSheet` (MORE), `UBTConnectLibrary.ConnectCorePatterns.Notification_ListItem` (ITEM),
`UBTConnectLibrary.Layouts.Layout_MainPages_Upgrade` (LAY)), `sources/raw/UBTConnect.controller.js` (UC),
`BookmarksByGroup/analysis/sources/raw/UBTConnectLibrary.controller.js` (ULC), `analysis/dom/*.html`, `analysis/calls.json`.

## 0. Summary
`/UBTConnect/Notifications`, no inputs. Notification centre opened by the bell when flag C2NewNotifications is on (D11 c,
user 2026-10-14; the bell is shared). Layout_MainPages_Upgrade (gray background) with back arrow, title "Notifications" +
badge, kebab (more actions sheet), search input, a "Sort / Only show unread" action row, then the notifications grouped by
date range (Today, Last 7 Days, Last 30 Days, Older), each group a header (range name + unread badge) and its items.
Captured states: default (19 items: 9 "Last 30 Days", 10 "Older"; 16 unread), loading and offline (empty list, same DOM).

## 1. Entry and routing
Route `/UBTConnect/Notifications`. Back arrow (LAY :648-663) = navigateBack. No navigation out of the screen: the items
have no click event (NotificationsList view: `events: {}` on Notification_ListItem; ITEM has no events).

## 2. Component tree
Layout_MainPages_Upgrade [build here, `components/Layout_MainPages_Upgrade.tsx`] > Placeholder_Header_Title ("Notifications"
+ Badge xs red-dark, Number BadgeNumber (never assigned: 0), MaxNumber 9; SCR :449-497), Placeholder_Header_Right (Icon
more_vertical `Icon_Kebab2` when not scrolled; search + kebab when scrolled; SCR :499-614), Placeholder_Header_Input
(ConnectPatterns.Input `Search_PreScroll`, SCR :615-680), HeaderContent (Notifications_Action; the floating
Notifications_Header is in a Container `visible: false`, never rendered, SCR :700-720), Content (NoItemsFound when not
loading, fetched and empty; otherwise NotificationsListBreakpoints; the flat List_Notifications sits in a Container
`visible: false`, SCR :724-760), Bottom (BottomBarMenu, ActiveItem null), CommonUI_InsideLayout. After the layout:
Notifications_SortSheet ($b20) and Notifications_MoreActionSheet ($b21) (SCR end of view).
Blocks built here: Notifications_Action, NotificationsListBreakpoints, Notifications_Header, NotificationsList,
Notification_ListItem, Notifications_SortSheet + SortSheet, Notifications_MoreActionSheet + MoreActionSheet.
Shared: Input, Icon, Badge, CustomContainer, Columns_Two/Three, IconText, CustomText, SkeletonSection, AvatarImage,
SanitizedHtml, ScrollAnchor, BottomSheet, FilterSheet_OptionChoice_Item, Button, BottomBarMenu, CommonUI_InsideLayout,
LayoutRuntime_Top, BackNavigationHandler. Gaps: Notifications_NoItemsFound (not captured) → `<NotCaptured>`.

## 3. DOM and markup contract
`analysis/dom/default.html` (layout :1-220, items :223-1680, sheets :1914-2213). Ids as captured (`b1-*` placeholders,
`b11-*` action row, `b14-l1-115_<n>-*` groups, `$b20`/`$b21` sheets).

## 5. Data model
MessageListItem (Connect2_Notification_CS): Id (Long), Title, DateTimeCreated, IsRead, ProfileIconURL (+ unused fields).
Breakpoint (UI_UpdateItem_Breakpoint): Position, SectionName, BadgeCount, DateRange {Range, From, To}.

## 6. API calls
| Phase | Call | Inputs | Evidence |
|---|---|---|---|
| OnReady | `Notifications/DataActionGetDateRanges` | screen variables | SCR :1892-1938, fetch at start -1 (:1110) |
| after GetDateRanges | `Notifications/DataActionFetchNotifications` | screen variables (Filter_Updates with dates, MaxRecords 20…) | SCR :2029-2121 |
| after FetchNotifications | Directory_Updates_RefreshBottomBarCount(True) (shared) → `ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | – | SCR :2289-2385 |
| ApplyFilters / search submit / clear | FetchNotifications again (isLoading, scroll top) | | SCR :1204-1268, :2464-2518 |
Shell calls (SynchAppContext, AfterInitialize, Sync_Info_GetMain, GetUserInformation, GetNumberUnreadMessages, map) are app start.

## 7. State and lifecycle
OnInitialize (SCR :1429-1569): not restored from cache → SelectedFilter_* defaults, InitializeSetting (user logged:
ShowWarning True, message types from the selected ones; Filter_OrderASC/DESC), CurrentBreakpoint {0, Today, 0}. Restored
from cache with a preload object: unread decrements (only from the Updates carousel; no caller here, built as no-op).
OnReady: SetStickyHeaderHeight (no `.updates-list__header` yet → no-op), isLoading True, skeleton list (10), GetDateRanges →
AugmentDateRanges (UC :358-483) → SetDefaultFilters (dates Older.From..Today.To, ReadOnly None, Sort Yes) → FetchNotifications
→ GetBreakpoints (UC :497-616), CurrentBreakpoint, ShowMarkAll, isLoading False, scroll listener (its top element is the
hidden header: no-op), RefreshBottomBarCount(True). Errors (not system) → isLoading False, raise BubbleGenericException.

## 8. Render logic
Group = DateRanges in order with ≥1 item whose date is in [From, To]; Position = first index; BadgeCount = unread in group.
NotificationsList keeps the items of its range computed at OnInitialize only (no OnParametersChanged).
ITEM: background cyan-lightest when unread (GetBackgroundColor_IsRead), avatar 52 (AvatarImage; icon when URL empty),
title through SanitizedHtml (ResetWhitelist), elapsed Get_ElapsedTime_Notification (ULC :1703-1760: s/m/h/d, then
Round(days/7)+"w"), unread dot image when not read. SkeletonSection In_IsLoading = isLoading.

## 9. Interactions and navigation
- Sort row (Notifications_Action iconClick): isLoaded True → ShowSubscriptionOnClick (never set, Loaded is not raised:
  CacheControl wrapper not rendered) ? upgrade popup : BottomSheetOpen(Filter_BottomSheetId).
- Only show unread switch: local variable only, no action.
- Kebab: BottomSheetOpen(MoreAction_BottomSheetId).
- SortSheet: Newest (default) / Oldest; Clear disabled when equal to empty, Apply disabled when equal to last applied;
  Apply → close, ApplySort → wrapper ApplyFilters → screen Handler_ApplyFilters (HasFiltersApplied, ShowMarkAll False,
  ScrollTop, isLoading, FetchNotifications). The choice is not passed to the screen (wrapper has no output).
- MoreActionSheet: Mark all as read / Delete all → events the wrapper handles with empty actions (MORE :1942-2205,
  wrapper :254-398): nothing happens. Cancel → OnClick_Clear → OnClick_Apply → close + ApplyFilters → refetch.
- Search: OnChange stores the text (and IsToggleSearch for the post-scroll input); Submit/Clear → Handler_FilterSearchText.
- Back (device): sheets close first (BackNavigationHandler in SORT/MORE).

## 11. Error handling
FetchNotifications / GetDateRanges failure: isLoading False, BubbleGenericException (UserException) to the screen handler.

## 12. Strings
"Notifications", "Search notifications", "Sort", "Only show unread", "Last 30 Days", "Older", "Newest to Oldest",
"Oldest to Newest", "Clear", "Apply", "Mark all as read", "Delete all notifications", "Cancel".

## 13. Accessibility, platform and security notes
Notification texts and the unread state come from the server; server must scope them to the user.

## 13a. Feature flags
None of this screen's own logic reads a flag. The pack's rows are the shared bottom bar / CommonUI ones, decided
(user 2026-10-14): C2EnableC1DirectoryView on, C2NewBookmarks off, mobileDirectoryBookmarkNote off (default-only); the
others are not flags. C2NewNotifications picks this screen in the shared bell (D11 c).

## 14. Unclear points
All answered (user, 2026-10-15; `questions.md`), except Q5 (open, parity decision):
- Q1 GetDateRanges: re-recorded read-only with the static-entity ids kept (`fixtures/UBTConnect/DataActionGetDateRanges/
  01-e1d555a6.json`: Today, Last 7 Days, Last 30 Days, Older) → `recordedHandler(…, { matchInputs: false })` (the answer
  does not depend on the inputs; the recorded CurrentBreakpoint.SectionName is anonymised) (`mocks.ts`).
- Q2 UBT_CW logos: served by the dev server at `/UBT_CW/img/*` (`app/vite.config.ts:34-44`); CR-Notifications-1 applied.
- Q3 titles: the TST test labels the capture shows unmasked ("Test Noti 56", "Save draft 02:50", "Notification 6/4/3/1",
  dom/default.html SanitizedHtml of items 0, 5, 12-15) are reused; masked titles stay fictional with the captured lengths.
- Q4 UnreadCount_All vs the app-start chain: `callOrderFree` CALL-ORDER-APPSTART-RACE (count compared, order not).
- Q5 (open) footer scroll shadow in pixel parity: see 15a.

## 15. Acceptance criteria
Parity default/loading/offline; calls in the captured order; sheets open/close; Apply/Cancel refetch.

## 15a. Parity
`route.py parity Notifications` run twice after the last change (2026-10-15), same result both times:
| State | DOM/style/text/layout/position | Calls | Pixel |
|---|---|---|---|
| default | 0 | 0 (CALL-ORDER-APPSTART-RACE) | 1: 0.29 %, worst tile 6.6 % |
| loading | 0 | – | 0 (0.02 %) |
| offline | 0 | – | 0 (0.02 %) |
Exemptions used: CAPTURE-LINK-HREF-CURSOR-HOMEFEED, CAPTURE-BADGE-MASKED-TEXT-HOMEFEED, one ignoreSubtrees.
Default pixel cause (`parity/default.diff.png`): rows 786-787 × 390 px = the footer scroll shadow
(`footer.content-bottom::before`, bundle.css:26235-26241, visibility `var(--footer-shadow-scroll)`, :root hidden
:24034-24037). The capture has `--footer-shadow-scroll: hidden` on the screen container (dom/default.html:4).
SetScrollShadow (layout OnReady, LAY :756-806; `app/src/shared/UBTConnectLibrary/lib/actions.ts:680-692`) sets it once
after 200 ms, then only on scroll. The parity runner serves mocks with latency 0 (parity_check.cjs:542): the list is
loaded at 200 ms → visible. On TST and in the app with the default 600 ms latency the list is still loading → hidden
(probe 2026-10-15). Same code; mock timing only (new kind) → Q5. The rest: bottom-bar badge masked "••" vs "9+"
(60 px, worst tile 2.2 %, under the thresholds; same kind as CAPTURE-BADGE-MASKED-TEXT).

## 16. Decisions to confirm
- Q1 (user, 2026-10-15): GetDateRanges from the re-recorded fixture (`recordedHandler`, inputs not matched).
- Q2 (user, 2026-10-15): avatars are the TST app logos at their original paths, served by the dev server.
- Q3 (user, 2026-10-15): TST test labels reused for the 6 unmasked titles; other titles fictional, captured lengths.
- Q4 (user, 2026-10-15): call order of UnreadCount_All vs the app-start chain exempted (CALL-ORDER-APPSTART-RACE).
- Q5 (open, recommend A): exemption for the footer scroll shadow decided at 200 ms under the runner's mock latency 0.
- FetchNotifications is never recorded (person data): 19 fictional rows keep the captured count, read state, avatar
  kind and age (days before the capture day 2026-10-14), so the groups and "Nw" labels stay stable.
- Mark all / Delete all do nothing, as compiled (wrapper actions empty).
- Post-scroll search header (IsToggleSearch + IsHeaderScrolled) is built from the compiled code, not captured;
  `flex-direction-row` is the TST value written as the shared RowReverse class.
- Change requests: CR-Notifications-1 (UBT_CW logos), applied by the foundation (2026-10-15). None open.

## 17. Patterns used
P-PARAMS, P-STATES, P-DIALOG, P-DATA, P-MOCKS, P-CALLS, P-BACK, P-OSUI, P-LIST.

## 18. Builder notes
Port Get_ElapsedTime_Notification, App_Notifications_AugmentDateRanges and App_Notifications_GetBreakpoints locally
(`components/actions.ts`); scroll-threshold / scroll-end JS are no-ops here (target elements never rendered).

- 2026-10-15: Q5 settled by the per-state mock latency (capture-plan `latencies`, default 600 ms): parity 0 in default, loading and offline, no new exemption.
