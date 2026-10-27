# Flow report: Directory_Updates

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 1 (built: 1, Updates_SingleList; not built: none) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `evidence.md` (reader), `app/src/pages/Updates_SingleList/**`, KB `ui/updates.md` and its rules, TST compiled code: `Updates_SingleList.mvc.js`, `Updates_NoItemsFound.mvc.js`, `UpdateItem_Header.mvc.js`, `Directory_Updates_FilterSheet.mvc.js`, `UBTConnect.controller.js` |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 125 · partial 3 · missing 5 · differs 0 · mock-only 5 · n/a 9 · unclear 2 (same as `checklist.json`).
- F1 (major): React does not build the empty state `Updates_NoItemsFound`. A completed fetch with no update shows a `NotCaptured` marker. TST shows a calendar icon, "No Updates Found" and "We were unable to find any Updates to display."
- F2 (minor): on Back to a restored view, React restores the scroll offsets through the shell view cache. TST uses its own anchor mechanism (`CaptureScrollPosition`, `RememberFocusedScrollAnchor`, `GetFocusedScrollAnchorOnBack`, `ScrollFix`) and `ReactiveInstance_ForceUpdate`. No recorded decision names this replacement (Q1).
- F3 (minor): the mock of `DataActionFetchUpdates` ignores `Filter_Updates`. The chips, the search and the filter sheet do not change the list, and the empty state cannot appear in the demo.
- Status: a user can open the list, search, pick a type chip and apply the filter sheet. The user can mark one or all updates read, share an update, open the household carousel and come back. A user whose filter returns no update sees an empty area instead of the "No Updates Found" panel.

## 2. Screens

### 2.1 Updates_SingleList

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | route / roles | QueryString; Registered, UBTOne_User | `/UBTConnect/Updates_SingleList`, member route | `match` | `pack/app.md`; `migration/board.md:23` (build, built, V3a) |
| 002 | input parameters | none | none | `match` | `pack/app.md`; TST `Model.setInputs` empty |
| 003 | lifecycle | OnInitialize, OnReady, OnDestroy → DestroyEventListener | `useFlowState` restore and onReady; unmount removes the scrollend listeners | `match` | `useUpdatesSingleList.ts:67-83, 143-148`. DestroyEventListener is a no-op on TST: only the dead SetupScrollThreshold path sets its two variables (TST `Updates_SingleList.mvc.js:1964-1967, 3599-3601`) |

**Data**

| Id | Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 004 | local variables (22) | Filter_*, ShowMarkAll, isLoading, Breakpoints, … | the same names in camelCase, without EventListener / EventListenerTarget | `match` | `updatesSingleListState.ts:99-125`. The two absent variables serve only the dead path (row 098) |
| 005 | FetchUpdates (OnDemand) | Get_UI_UpdateItems(Filter_Updates) → OnAfterFetch | `fetchUpdatesList` → `Updates_SingleList/DataActionFetchUpdates` | `match` | `api/update/repository.ts:30-34`; `useUpdatesSingleList.ts:151-175` |
| 006 | GetDateRanges (OnDemand) | aggregate over Updates_DateRanges, max 4, sort Order | `fetchUpdateDateRangeIds` → `DataActionGetDateRanges` | `match` | `api/update/repository.ts:38-42`; `useUpdatesSingleList.ts:189`; recorded fixture `mocks.ts:152` |
| 007 | Get_UI_UpdateItems (server) | Connect_Updates_CS, filtered by Filter_Updates | mock returns all 88 rows and their unread count | `mock-only` | `mocks.ts:153-156`. Production needs Connect_Updates_CS/Get_UI_UpdateItems. The mock ignores the filter. **F3** (minor) |
| 008 | Action_UI_UpdateItem_MarkAllAsRead (server) | marks the rows of Filter_Updates read | mock marks every row read | `mock-only` | `mocks.ts:157-160`; CR-Updates_SingleList-1 (open) |
| 009 | Action_UI_UpdateItem_MarkAsRead (server) | marks one row read | mock writes the HomeFeed collection | `mock-only` | `pages/HomeFeed/mocks.ts:27-30`; CR-Updates_SingleList-1 (open): a later refresh shows the row unread again |
| 010 | Action_UI_UpdateItem_MarkAsUnread (server) | marks one row unread | mock writes the HomeFeed collection | `mock-only` | `pages/HomeFeed/mocks.ts:31-34`; CR-Updates_SingleList-1 (open) |
| 011 | Get_UI_UpdateItems_UnreadCount_All (server) | unread count of the bottom bar | recorded fixture, fixed count | `mock-only` | `api/update/repository.ts:72-74`; `app-shell.spec.md:312` |
| 012 | static entity Updates_DateRanges | Today, Last 7 Days, Last 30 Days, Older | the same four ids | `match` | `components/staticEntities.ts:8-13` |
| 013 | static entity Type_CarouselItemSwipeAction | UpdatesCarousel_SetIsRead | used by the carousel preload helper | `match` | `lib/ubtConnect/actions.ts:92`; Home report row 139 |
| 014 | Client.App_PIN_BiometricEnabled | read by CommonUI | session accessor | `match` | `platform/session/session.ts:204`; shared (App_PIN report) |
| 015 | Client.App_Policies_HasPolicyToAccept | read and written by CommonUI | user info mapping | `match` | `platform/session/userInfo.ts:36`; shared (App_Policies report) |
| 016 | Client.App_Policies_RedirectURL | only disabled nodes use it | no such variable | `n/a` | dead in the model: App_Policies report row 083 |
| 017 | Client.Directory_Updates_UnreadCount | written by RefreshBottomBarCount, read by the bottom bar | the same | `match` | `lib/ubtConnect/actions.ts:69`; `BottomBar.tsx:62` |
| 018 | Client.…_CheckFrequency_Minut (5) | read by RefreshBottomBarCount | default 5 | `match` | `platform/session/clientVars.ts:25`; `actions.ts:67` |
| 019 | Client.Directory_Updates_UnreadCount_LastCheck | read and written | the same | `match` | `lib/ubtConnect/actions.ts:66, 70` |
| 020 | Client.IsNavigateToHomeOnBack | CommonUI back handling | the same | `match` | `platform/feedback/dialogs/commonUiBack.ts:16-18`; shared (App_Common report) |
| 021 | Client.Notifications_IsSynched | bell icon | the same | `match` | `platform/bootstrap/postLogin.ts:46`; shared |
| 022 | Client.Notifications_LastChecked | bell icon | the same | `match` | `platform/session/useNotificationIcon.ts:13`; shared |
| 023 | Client.Directory_Updates_MonthsToShow | MinDateToShow: NullDate when 0, else CurrDate − N months | the same; default 0 | `match` | `updatesSingleListState.ts:175-177`; `clientVars.ts:26`; TST `UBTConnect.controller.js:2404-2420` |

**UI tree**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 024 | Layout_MainPages_FixedTitle | isGrayBackground; OnHeaderScrolled | the same | `match` | `Updates_SingleListPage.tsx:94-97` |
| 025 | If IsToggleSearch and IsHeaderScrolled (title) | back arrow + Search_PostScroll, else "Updates" | the same | `match` | `Updates_SingleListPage.tsx:99-129` |
| 026 | CustomContainer (title row) | full-width, flex row, centered | the same | `match` | `Updates_SingleListPage.tsx:100-108` |
| 027 | Icon back arrow | ArrowLeftAlt, margin-right-s; Click → Handler_ToggleSearch | the same | `match` | `Updates_SingleListPage.tsx:110-116` |
| 028 | Search_PostScroll options | "Search updates", debounce 300, rounded | the same | `match` | `Updates_SingleListPage.tsx:66-73`; TST `Updates_SingleList.mvc.js:345-346` |
| 029 | Search_PostScroll events | Clear, OnChange(False), Submit | the same | `match` | `Updates_SingleListPage.tsx:117-125` |
| 030 | Search_PreScroll | same options; OnChange(True) | the same | `match` | `Updates_SingleListPage.tsx:151-159`; TST `:519-520` |
| 031 | If IsHeaderScrolled / If not IsToggleSearch (icons) | search icon, filter icon, bell | the same | `match` | `Updates_SingleListPage.tsx:133-146` |
| 032 | Icon_Search | Search, Neutral0, Base_24 | the same | `match` | `Updates_SingleListPage.tsx:136-142` |
| 033 | FilterSheet_Icon (pre and post scroll) | BottomSheetId, HaveFiltersApplied, isLoaded, ShowSubscriptionOnClick | the same | `match` | `Updates_SingleListPage.tsx:74-83, 144, 161`. The internals belong to flow App_CommonBlocks_Filter |
| 034 | App_NotificationIcon | bell in the header | the same | `match` | `Updates_SingleListPage.tsx:147`; shared; getHasNewNotifications is off on TST |
| 035 | HeaderContent + HorizontalTagList | Neutral0, padding Small/Base, margin top Base; single select | the same | `match` | `Updates_SingleListPage.tsx:164-173`; TST `:628-637` (cut argument read on TST) |
| 036 | UpdateItem_Header #ListHeader | badge, isLoading, ShowMarkAll, title of CurrentBreakpoint | the same | `match` | `Updates_SingleListPage.tsx:174-182` |
| 037 | If_HasNoUpdates | not isLoading and IsDataFetched and list empty → Updates_NoItemsFound, else list | the same condition; True branch renders `NotCaptured` | `partial` | `UpdatesList.tsx:53-54`; TST `:737-738`; BR-UBTCON-872. **F1** (major) |
| 038 | List_Updates | source FetchUpdates list; classes `list list-group background-neutral-0 updates-list` | the same, with the runtime loading classes | `match` | `UpdatesList.tsx:56-67` |
| 039 | SkeletonSection in the row | In_IsLoading = isLoading | `Skeleton isLoading` | `match` | `UpdatesList.tsx:71` |
| 040 | updates-list__list-item | data-plus-date = Date | the same | `match` | `UpdatesList.tsx:72` |
| 041 | If CurrentRowNumber <> 0 → SectionHeader | six inputs; Event_UpdateListHeader | the same | `match` | `UpdatesList.tsx:73-85`; `Updates_SingleListPage.tsx:193`; BR-UBTCON-873 |
| 042 | Update_ListItem #UpdateItem (inputs) | item fields, PaddingSizeId Base, ShowImage False | the same | `match` | `UpdatesList.tsx:86-98` |
| 043 | Update_ListItem events | Share, MarkAsRead, MarkAsUnread, OnClick | the same; the handlers get the row | `match` | `UpdatesList.tsx:99-110` |
| 044 | ScrollAnchor | Id = UpdateItemId | the same | `match` | `UpdatesList.tsx:112`; `ScrollAnchor.tsx:14-19` |
| 045 | BottomBarMenu | Updates, isRootPage | the same | `match` | `Updates_SingleListPage.tsx:201`; shared |
| 046 | CommonUI_InsideLayout | common overlays | the same | `match` | `Updates_SingleListPage.tsx:202`; shared |
| 047 | If False #HideInServiceStudio_BottomSheet | else: Directory_Updates_FilterSheet with three events | the else branch | `match` | `Updates_SingleListPage.tsx:204-210`. The True branch is empty: dead in the model |
| 048 | If False #HideInServiceStudio_ShareSheet | else: ShareSheet with five inputs | the else branch | `match` | `Updates_SingleListPage.tsx:211-218`. Dead True branch |
| 049 | ShareSheet preview Update_ListItem | disabled, no border, IsRead False | the same | `match` | `Updates_SingleListPage.tsx:220-233`; TST `:1157` |

**Screen actions**

| Id | Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 050 | Handler_OnHeaderScrolled | IsHeaderScrolled = event value | the same | `match` | `useUpdatesSingleList.ts:325-327` |
| 051 | Handler_ToggleSearch | IsToggleSearch = not IsToggleSearch | the same | `match` | `useUpdatesSingleList.ts:225-227` |
| 052 | Handler_OnChangeSearchInput: In_IsToggleSearch | True → IsToggleSearch = True | the same | `match` | `useUpdatesSingleList.ts:221-223` |
| 053 | Handler_OnChangeSearchInput: assign | CurrentSearchString = text | the same | `match` | `useUpdatesSingleList.ts:222` |
| 054 | Handler_FilterSearchText: same text | assign, then end | the same | `match` | `useUpdatesSingleList.ts:215-217`; BR-UBTCON-869 |
| 055 | Handler_FilterSearchText: new text | filter, ShowMarkAll False, ScrollTop, isLoading, RefreshUpdates | the same order | `match` | `useUpdatesSingleList.ts:208-218` |
| 056 | OnChange_FilterType: same chip | end | the same | `match` | `useUpdatesSingleList.ts:229-232`; BR-UBTCON-870 |
| 057 | OnChange_FilterType: new chip | type id, IsSelected loop, ScrollTop, reload | the same | `match` | `useUpdatesSingleList.ts:233-239` |
| 058 | Handler_ApplyFilters: no change | end | the same | `match` | `useUpdatesSingleList.ts:243`; BR-UBTCON-868 |
| 059 | Handler_ApplyFilters: change | filter, HasFiltersApplied, reload | the same | `match` | `useUpdatesSingleList.ts:244` |
| 060 | Handler_FilterSheetLoaded | IsLoaded True, ShowSubscription | the same | `match` | `useUpdatesSingleList.ts:352-354` |
| 061 | Handler_FilterSheetSheetInitialized | Filter_BottomSheetId = SheetId | the same | `match` | `useUpdatesSingleList.ts:355-357` |
| 062 | Handler_CloseShareSheet | IsShareOpen False | the same | `match` | `useUpdatesSingleList.ts:358-360` |
| 063 | Handler_OnShare: extended share on | item, IsShareOpen, MemberId | the same | `match` | `useUpdatesSingleList.ts:318-321`; BR-UBTCON-867 |
| 064 | Handler_OnShare: extended share off | ShowComingSoonMessage | not built | `n/a` | getHasExtendedShare is true on TST (`flag-values-tst.json`) |
| 065 | Handler_MarkAsRead | server, IsRead, RefreshUpdatesAndFlags, bottom bar | the same order | `match` | `useUpdatesSingleList.ts:264-269`; BR-UBTCON-865 |
| 066 | Handler_MarkAsUnread | the same with IsRead False | the same | `match` | `useUpdatesSingleList.ts:271-276` |
| 067 | Handler_MarkAllAsRead: start | ShowMarkAll False, isLoading True | the same | `match` | `useUpdatesSingleList.ts:279`; BR-UBTCON-864 |
| 068 | Handler_MarkAllAsRead: server | MarkAllAsRead(Filter_Updates) | the same | `match` | `useUpdatesSingleList.ts:281` |
| 069 | Handler_MarkAllAsRead: local | flip list, zero badges, isLoading False | the same | `match` | `useUpdatesSingleList.ts:282-287` |
| 070 | Handler_MarkAllAsRead: refresh | bottom bar (forced), RefreshUpdates | the same | `match` | `useUpdatesSingleList.ts:288-289` |
| 071 | Handler_MarkAllAsRead: AllExceptions | isLoading False, no message | the same; system errors go on | `match` | `useUpdatesSingleList.ts:290-293`; `legacy/os/exceptions.ts:44-45`; TST `:2700, 2867, 3021` (`OS.Exceptions.isSystem`) |
| 072 | Handler_OnClickUpdateItem: mark read | Handler_MarkAsRead | the same | `match` | `useUpdatesSingleList.ts:300`; BR-UBTCON-866 |
| 073 | Handler_OnClickUpdateItem: CaptureScrollPosition (JS) | anchor id and offset into localStorage | no step | `unclear` | TST `:1824-1826, 3369-3384`; 0 hits in `app/src`. Q1 |
| 074 | Handler_OnClickUpdateItem: RememberFocusedScrollAnchor | NavigationHandler call | no call | `unclear` | TST `:1829-1831`; 0 hits in `app/src`. Q1 |
| 075 | Handler_OnClickUpdateItem: FocusedScrollAnchorId, IsRead | assign both | the same | `match` | `useUpdatesSingleList.ts:301-302` |
| 076 | Handler_OnClickUpdateItem: ScreenModel_Flush | persist the model for Back | the view cache writes the state when the entry is left | `match` | `viewCache.ts:5-8`; TST `:1838-1841`; Home report row 120 |
| 077 | Handler_OnClickUpdateItem: GetHasCarouselEnabled | branch on the flag | `flags.carousel` | `match` | `useUpdatesSingleList.ts:303`; `Updates_SingleListPage.tsx:43` |
| 078 | Handler_OnClickUpdateItem: carousel | HasAccess filter, preload, HouseholdCarousel | the same | `match` | `useUpdatesSingleList.ts:304-314`; TST `:1846-1876` |
| 079 | Handler_OnClickUpdateItem: flag off | HouseholdDetails | not built | `n/a` | getHasCarouselEnabled is true on TST (`flag-values-tst.json`) |
| 080 | Handler_ScrollEnding_UpdateBreakpoint | GetListBreakpoint(…, IsAscending False) | the same | `match` | `useUpdatesSingleList.ts:93-102`; BR-UBTCON-876 |
| 081 | UpdateCurrentBreakpoint | find section by name | the same | `match` | `useUpdatesSingleList.ts:248-251` |
| 082 | SectionHeaderEvent_UpdateListHeader | CurrentBreakpoint = event value | the same | `match` | `useUpdatesSingleList.ts:338-340` |
| 083 | RefreshUpdatesAndFlags: GetUpdatedBreakpoints | Breakpoints = updated | the same | `match` | `useUpdatesSingleList.ts:254-255`; BR-UBTCON-165, 166 |
| 084 | RefreshUpdatesAndFlags: current section | UpdateCurrentBreakpoint, SetMarkAllTag | the same | `match` | `useUpdatesSingleList.ts:256-258` |
| 085 | RefreshUpdates | refresh FetchUpdates | the same | `match` | `useUpdatesSingleList.ts:151-175` |
| 086 | OnAfterFetch_FetchUpdates: breakpoints | Breakpoints[0] or EmptyBreakpoint | the same | `match` | `useUpdatesSingleList.ts:161-164`; BR-UBTCON-863 |
| 087 | OnAfterFetch_FetchUpdates: tail | ShowMarkAll, isLoading, listener, forced badge | the same | `match` | `useUpdatesSingleList.ts:165-169`. DestroyEventListener is a no-op (row 003) |
| 088 | OnAfterFetch_FetchUpdates: AllExceptions | isLoading False, BubbleGenericException | the same | `match` | `useUpdatesSingleList.ts:170-174`; TST `OS.Exceptions.isSystem` rule as row 071 |
| 089 | OnAfterFetch_GetDateRanges | AugmentDateRanges, SetDefaultFilters, RefreshUpdates | the same | `match` | `useUpdatesSingleList.ts:194-204` |
| 090 | ScreenEvent_OnInitialize: fresh | CurrentBreakpoint Today, UpdateFilterTypesOptions | initial state | `match` | `updatesSingleListState.ts:100, 111` |
| 091 | UpdateFilterTypesOptions | All, Birth, Marriage, Taken | the same four options | `match` | `updatesSingleListState.ts:69-74` |
| 092 | ScreenEvent_OnInitialize: restored | swiped rows read, UnreadCount − 1, section badge − 1 | the same | `match` | `updatesSingleListState.ts:130-146`; `useHouseholdCarousel.ts:94`; TST `:2025-2075` (cut condition read on TST); BR-UBTCON-871 |
| 093 | ScreenEvent_OnReady: SetStickyHeaderHeight | `--sticky-top-offset` = header heights + 9 | the same | `match` | `useUpdatesSingleList.ts:43-50` |
| 094 | ScreenEvent_OnReady: fresh | isLoading, 10 skeleton rows, GetDateRanges | the same | `match` | `useUpdatesSingleList.ts:186-189`; BR-UBTCON-862 |
| 095 | ScreenEvent_OnReady: restored | ForceUpdate, SetupScrollListener, GetFocusedScrollAnchorOnBack, ScrollFix | SetupScrollListener only | `partial` | `useUpdatesSingleList.ts:177-185`; `viewCache.ts:5-8`; TST `:2348-2378, 3441-3462`. **F2** (minor), Q1 |
| 096 | SetupScrollListener: If(True) | SetupScrollEndListener; the else branch is dead | the True branch only | `match` | `useUpdatesSingleList.ts:88-90, 107-142` |
| 097 | SetupScrollEndListener (JS) | 0 ms timer, scrollend, item under the header, 3 retries | the same | `match` | `useUpdatesSingleList.ts:109-136` |
| 098 | SetupScrollThreshold, DestroyEventListener, EventListener variables | only the dead branch sets them | not built | `n/a` | dead in the model: TST `:1230-1231, 1925-1967, 3599-3601` |
| 099 | SetDefaultFilters | dates, ReadOnly None, Sort Yes, country and locality None, default state | the same | `match` | `updatesSingleListState.ts:296-311`; BR-UBTCON-860, 861 |
| 100 | SetBadgeCountsToZero | every badge 0 | inline | `match` | `useUpdatesSingleList.ts:284-285` |
| 101 | SetMarkAllTag | ShowMarkAll = some unread | inline | `match` | `useUpdatesSingleList.ts:258`; TST `:1629-1630` |

**Validations**

| Id | Validation | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 149 | Search_PostScroll / Search_PreScroll | no Mandatory, no MaxLength; no validation widget | none | `match` | TST `:153, 345-346, 519-520`; `Updates_SingleListPage.tsx:66-73`; KB `ui/updates.md` (Validation: none) |

**Business logic**

| Id | Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 102 | Directory_Updates_AugmentDateRanges | four ranges by day offsets | the same | `match` | `updatesSingleListState.ts:181-198`; BR-UBTCON-160 |
| 103 | Directory_Updates_GetBreakpoints | first index, name, unread badge, sort by position | the same | `match` | `updatesSingleListState.ts:205-222`; BR-UBTCON-163, 164 |
| 104 | Directory_Updates_GetListBreakpoint | null check, swap when ascending, five date tests | the same | `match` | `updatesSingleListState.ts:226-245`; BR-UBTCON-167, 168, 169 |
| 105 | Directory_Updates_GetUpdatedBreakpoints | last section at or before the position; recount | the same | `match` | `updatesSingleListState.ts:249-267`; BR-UBTCON-165, 166 |
| 106 | Directory_Updates_MarkAllAsRead | flip unread rows | the same | `match` | `updatesSingleListState.ts:270-271`; BR-UBTCON-170 |
| 107 | Directory_Updates_GetCarouselPreloadedHouseholds | swipe action only on unread rows | the same | `match` | `lib/ubtConnect/actions.ts:83-110`; Home report row 139; BR-UBTCON-172 |
| 108 | Directory_Updates_RefreshBottomBarCount | fetch when stale or forced | the same | `match` | `lib/ubtConnect/actions.ts:65-71`; BR-UBTCON-171 |
| 109 | GetSkeletonList_UI_Updates / GetSkeleton_UI_UpdatesContent | 10 rows of a fixed sample | the same sample; null date | `match` | `updatesSingleListState.ts:275-292`; TST `UBTConnect.controller.js:12474-12499`. The date shows under SkeletonSection only |
| 110 | Directory_Updates_MinDateToShow | NullDate or CurrDate − N months | the same | `match` | `updatesSingleListState.ts:175-177`; TST `UBTConnect.controller.js:2404-2420` |
| 111 | App_CommonFilter_CheckCountry / DefineOptionNames | called by FilterSheet | - | `n/a` | No element of this flow calls them; flow App_CommonBlocks_Filter checks them |
| 112 | KB rules of the screen and blocks | BR-UBTCON-860…873, 875…878 | all rows match except the empty state | `partial` | KB `ui/updates.md`; BR-UBTCON-872 fails. **F1** |
| 113 | flags getHasCarouselEnabled, getHasExtendedShare | both true on TST | `useFlagOn`, mock at TST values | `match` | `Updates_SingleListPage.tsx:42-45`; `flag-values-tst.json`; `app-shell.spec.md:238` |
| 114 | flag candidates handler_ToggleSearch, bottomSheetOnToggle | no flag check on TST | no flag check | `match` | `migration/flags.md:11, 28`; 0 hits of bottomSheetOnToggle in TST |
| 148 | referenced blocks (UBTConnectLibrary, NavigationHandler, UBTConnect_Utils) | TST files in `references.md` | React components | `unclear` | Home report row 116 checks Update_ListItem. Input, HorizontalTagList, Layout_MainPages_FixedTitle, SkeletonSection, ScrollAnchor and ShareSheet are not checked. Q2 |

**Strings**

| Id | String | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 115 | 13 strings of the screen and its blocks | Search updates, Filter by status, …, Updates | all found | `match` | evidence row 115 gives each file and line |
| 116 | "No Updates Found" | Updates_NoItemsFound | - | `missing` | TST `Updates_NoItemsFound.mvc.js:287`. **F1** |
| 117 | "We were unable to find any Updates to display." | Updates_NoItemsFound | - | `missing` | TST `Updates_NoItemsFound.mvc.js:306`. **F1** |
| 118 | strings of the shared blocks | CommonUI_InsideLayout | shared components | `match` | the App_PIN and App_Common reports check them |

## 3. Blocks of the flow

### 3.1 Directory_Updates_FilterSheet

| Id | Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 119 | signature | In_FilterUpdates; ApplyFilters, Loaded, SheetInitialized | the same props | `match` | `Directory_Updates_FilterSheet.tsx:14-25` |
| 120 | FilterSheet In_Options, In_StartFilter | sorting, countries, localities, Extra_OptionChoices; empty start filter | the same | `match` | `Directory_Updates_FilterSheet.tsx:42-58`; TST `Directory_Updates_FilterSheet.mvc.js:149-180` (cut argument read on TST); BR-UBTCON-878 |
| 121 | OnInitialize | status choice: Read Only, Unread Only, All Updates, Order 2 | the same | `match` | `Directory_Updates_FilterSheet.tsx:45-54`; TST `:429-451` |
| 122 | FilterSheetApplyFilters | countries, localities, sort, status by title; ApplyFilters | the same | `match` | `Directory_Updates_FilterSheet.tsx:70-77` |
| 123 | Handler_FilterSheetLoaded | Loaded(ShowSubscriptionOnClick) | the same | `match` | `Directory_Updates_FilterSheet.tsx:86` |
| 124 | SheetInitialized | pass the SheetId | the same | `match` | `Directory_Updates_FilterSheet.tsx:87` |
| 125 | FilterSheet internals | flow App_CommonBlocks_Filter | `FilterSheetContainer` | `n/a` | That flow checks them; row 120 checks the use |
| 126 | strings | six strings | found | `match` | `Directory_Updates_FilterSheet.tsx:14, 42, 49-51` |

### 3.2 Directory_Updates_Section_Wrapper

| Id | Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 127 | block | no screen or block uses it | not built | `n/a` | dead in the model: `pack/blocks.md` (used by: nothing); KB `ui/updates.md`, Plumbing / dead |
| 128 | "Mark All as Read" | string of the unused block | - | `n/a` | dead in the model (row 127) |

### 3.3 SectionHeader

| Id | Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 129 | signature | six inputs; Event_MarkAllAsRead, Event_UpdateListHeader | the inputs and Event_UpdateListHeader | `match` | `SectionHeader.tsx:12-26`. Event_MarkAllAsRead cannot fire (row 131) |
| 130 | If SectionName <> null and not loading | section header with UpdateItem_Header, ShowMarkAll False | the same | `match` | `SectionHeader.tsx:80, 121-134`; BR-UBTCON-875, 877 |
| 131 | Click_MarkAll → Event_MarkAllAsRead | the link never shows | no handler | `match` | `SectionHeader.tsx:125-132`; `migration/knowledge/audit-a1-empty-handlers.md:55` |
| 132 | OnReady: GetListBreakpoint | current and previous dates | the same | `match` | `SectionHeader.tsx:29-35` |
| 133 | OnReady: first section | keep the breakpoint for Today (newest first) or Older (oldest first) | the same | `match` | `SectionHeader.tsx:36-39`; BR-UBTCON-875 |
| 134 | OnReady: observer start | when shown and no observer | the same | `match` | `SectionHeader.tsx:81-111`. Disabled JS nodes are not built |
| 135 | InitializeIntersectionObserver (JS) | sticky offset, z-index 10, Action_UpdateHeader | the same | `match` | `SectionHeader.tsx:85-109` |
| 136 | Action_UpdateHeader | current → own breakpoint, else the previous one | the same | `match` | `SectionHeader.tsx:59-68`; BR-UBTCON-876 |
| 137 | OnParametersChanged | OnReady again when an observer exists | the same | `match` | `SectionHeader.tsx:71-76` |
| 138 | OnDestroy | disconnect, observer null | the same | `match` | `SectionHeader.tsx:113-119` |

### 3.4 UpdateItem_Header

| Id | Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 139 | signature | ShowMarkAll (True), Title, BadgeNumber, isLoading; Click_MarkAll | the same; default False | `match` | `UpdateItem_Header.tsx:18-29`. Both uses pass the value |
| 140 | CustomContainer updates-list__header | Neutral0, padding ExtraSmall/Base, border Neutral4 top Large | the same | `match` | `UpdateItem_Header.tsx:47-56`; TST `UpdateItem_Header.mvc.js:200-214` (cut argument read on TST) |
| 141 | Columns_Two + SkeletonSection + IconText | title Neutral7, ExtraSmall, SemiBold | the same | `match` | `UpdateItem_Header.tsx:57-72` |
| 142 | If_HasBadge | Badge RedDark, max 9, ExtraSmall | the same | `match` | `UpdateItem_Header.tsx:73-81`; BR-UBTCON-877 |
| 143 | If_ShowMarkAll | right-aligned "Mark All as Read" → Click_MarkAll | the same | `match` | `UpdateItem_Header.tsx:86-99`; TST `UpdateItem_Header.mvc.js:356` |
| 144 | "Mark All as Read" | CustomText | found | `match` | `UpdateItem_Header.tsx:90` |

### 3.5 Updates_NoItemsFound

| Id | Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 145 | block (no inputs, no events) | shown by If_HasNoUpdates | `NotCaptured` marker | `missing` | `UpdatesList.tsx:53-54`; the test `UpdatesList.test.tsx:78-81` expects the marker; TST `Updates_NoItemsFound.mvc.js`. **F1** |
| 146 | widget tree | full-size container; bordered CircleButton with CalendarBusyFill; two texts | - | `missing` | TST `Updates_NoItemsFound.mvc.js`. **F1** |
| 147 | two strings | "No Updates Found"; "We were unable to find any Updates to display." | - | `missing` | TST `Updates_NoItemsFound.mvc.js:287, 306`. **F1** |

Blocks of other flows: FilterSheet_Icon and FilterSheet (flow App_CommonBlocks_Filter, rows 033 and 120 check the use).
BottomBarMenu, CommonUI_InsideLayout and App_NotificationIcon (flow App_Common, rows 034, 045 and 046 check the use).

## 4. Shared blocks and actions

| Item | React location | Verdict |
|---|---|---|
| Directory_Updates_RefreshBottomBarCount (BR-UBTCON-171) | `app/src/lib/ubtConnect/actions.ts:65-71` | `match` (row 108) |
| Directory_Updates_GetCarouselPreloadedHouseholds (BR-UBTCON-172) | `app/src/lib/ubtConnect/actions.ts:83-110` | `match` (row 107; Home report row 139) |
| ScrollTop (".active-screen", "instant") | `app/src/lib/ubtConnect/actions.ts` | `match` (row 055) |
| App_CommonFilter_CheckCountry, App_CommonFilter_DefineOptionNames | `app/src/lib/ubtConnect/actions.ts:122, 136` | not checked here (flow App_CommonBlocks_Filter) |
| Update_ListItem (UBTConnectLibrary) | `app/src/components/feed/UpdateListItem/UpdateListItem.tsx` | checked in the Home report (row 116) |
| Input, HorizontalTagList, Layout_MainPages_FixedTitle, SkeletonSection, ScrollAnchor, ShareSheet | `app/src/components/ui/*`, `app/src/containers/ShareSheet` | not checked against TST (row 148, Q2) |

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix | Status |
|---|---|---|---|---|---|---|
| F1 | major | Updates_SingleList / If_HasNoUpdates, Updates_NoItemsFound | When a completed fetch returns no update, TST shows `Updates_NoItemsFound` (BR-UBTCON-872): a bordered circle button with the CalendarBusyFill icon, "No Updates Found" and "We were unable to find any Updates to display." React renders a `NotCaptured` marker, which shows nothing in the built app (App_Notifications F1 has the same cause). TST: `Updates_SingleList.mvc.js:737-738`, `Updates_NoItemsFound.mvc.js:287, 306`. | `app/src/pages/Updates_SingleList/components/UpdatesList.tsx:53-54` | Build `Updates_NoItemsFound` from the TST view (429 lines), replace the marker, and change `UpdatesList.test.tsx:78-81`. Share the layout with `Notifications_NoItemsFound` if the two TST views are equal. | |
| F2 | minor | Updates_SingleList / ScreenEvent_OnReady (restored), Handler_OnClickUpdateItem | On Back, TST runs `ReactiveInstance_ForceUpdate` on the list and scrolls the saved anchor back to its saved offset (`CaptureScrollPosition`, `RememberFocusedScrollAnchor`, `GetFocusedScrollAnchorOnBack`, `ScrollFix`). React runs only `SetupScrollListener` and uses the scroll offsets of the shell view cache (U19). The result differs only when the list height changes between leave and return. No recorded decision names the replacement. | `app/src/pages/Updates_SingleList/hooks/useUpdatesSingleList.ts:177-185`; `app/src/platform/navigation/viewCache.ts:5-8` | Q1 decides. | open: capture done 2026-10-27 (MarkAsRead allowed by the user): TST writes scrollAnchorId/scrollAnchorDelta on the tap (rows 073/074 now `missing`); the restore on Back was not observed (Back landed on HomeFeed). Decision needed: port the anchor save and restore (NavigationHandler code is not in the survey) |
| F3 | minor | Updates_SingleList / mock of DataActionFetchUpdates | The mock handler returns all 88 rows for every `Filter_Updates`. In the demo, the chips, the search, the status and sort choices and the country filters do not change the list, and F1 cannot show. | `app/src/pages/Updates_SingleList/mocks.ts:153-156` | Apply the type, search, status and sort of `Filter_Updates` in the mock handler, as Connect_Updates_CS does (BR-C2SVC-320…332). | fixed 2026-10-27 (`fixes/F-lists.md`): the mock applies Filter_Updates; row 007 stays mock-only |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

No difference found. The judge read TST for the cut arguments: the HeaderContent margin, the filter sheet
`In_Options` and `In_StartFilter`, the UpdateItem_Header border and text alignment. The judge also read TST for these
branches: the restored-view loop of OnInitialize, the restored branch of OnReady, the item click and the AllExceptions
handlers. The same is true for DestroyEventListener, GetSkeleton_UI_UpdatesContent and Directory_Updates_MinDateToShow.
The reader matched the 30 screen actions.

### 6.2 KB pages vs TST

None found.

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | On Back to Updates_SingleList, do you accept the scroll offsets of the shell view cache in place of the anchor mechanism of TST (rows 073, 074, 095; F2)? | TST stores the tapped anchor and its offset (`Updates_SingleList.mvc.js:3369-3384`) and scrolls it back (`:3441-3462`); it also forces a list re-render. TST reads `UI_UpdateItemList.Current` outside a loop to choose the anchor (`:2364`), so its exact result depends on NavigationHandler code that the project did not capture. | (a) Accept the view cache and record it under U19 in `app-shell.spec.md`. (b) Compare both on TST first (open an update, go back, compare the position; read-only). (c) Build the anchor mechanism in React. | (b), then (a) when the positions are equal. |
| Q2 | Do you want one shared check of the referenced library blocks against their TST files (row 148)? | This flow depends on Input, HorizontalTagList, Layout_MainPages_FixedTitle, SkeletonSection, ScrollAnchor and ShareSheet. No flow report checks their internals; App_Notifications also left them out. | (a) One shared pass for UBTConnectLibrary, NavigationHandler and UBTConnect_Utils blocks. (b) A check in each flow report. (c) Rely on the parity gate. | (a): one pass covers every flow at the lowest cost. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 8 | 6 | 0 | 1 | 0 | 0 | 1 | 0 |
| data | 20 | 14 | 0 | 0 | 0 | 5 | 1 | 0 |
| ui | 34 | 32 | 1 | 1 | 0 | 0 | 0 | 0 |
| actions | 55 | 49 | 1 | 0 | 0 | 0 | 3 | 2 |
| validations | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 23 | 19 | 1 | 0 | 0 | 0 | 3 | 0 |
| strings | 8 | 4 | 0 | 3 | 0 | 0 | 1 | 0 |
| **total** | 149 | 125 | 3 | 5 | 0 | 5 | 9 | 2 |

## 9. Follow-up pass (2026-10-27)

Rows settled or sharpened after the user answers of 2026-10-27 and the TST files that `tst_source.py` reads. A row that stays `unclear` has a new question that names what settles it. Every row below has `verified: "live"`.

| Row | Old verdict | New verdict | Evidence |
|---|---|---|---|
| Directory_Updates-073 | `unclear` | `unclear` | Q1 answered (b), then (a) (user decision 2026-10-27, Directory_Updates Q1 (b)). Capture that settles it (read-only TST session and the React app, same steps): open Updates_SingleList, scroll until an update is half visible, tap it, go Back; record the scroll offset of the list after Back, and on TST the localStorage keys scrollAnchorId and scrollAnchorDelta (Updates_SingleList.mvc.js:3369-3384). When the positions are equal, (a) applies: record the view cache under U19 and rows 073, 074 and 095 become differs; when they differ, F2 stands. |
| Directory_Updates-074 | `unclear` | `unclear` | Same capture as row 073 (user decision 2026-10-27, Directory_Updates Q1 (b)). RememberFocusedScrollAnchor (NavigationHandler) has no TST file in the survey; the capture compares the result, not the code. |
| Directory_Updates-148 | `unclear` | `n/a` | migration/clarify/flows/_libraries/report.md:54, 81-96, 382, 518, 527-529; migration/clarify/answers.json Directory_Updates:Q2 |

## 12. Captures on TST (2026-10-27)

Rows 073 and 074 stay `unclear`: the read-only capture stops at the tap on an update (`ServiceAPIAction_UI_UpdateItem_MarkAsRead` is a write; guard stop). Before the tap, `scrollAnchorId` and `scrollAnchorDelta` were absent from storage. A capture with that write allowed by the user, or a decision, settles the rows (`review/captures.md` §2).
