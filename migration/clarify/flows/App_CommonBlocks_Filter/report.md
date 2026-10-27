# Flow report: App_CommonBlocks_Filter

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Blocks on DEV | 7 (built: 7): FilterSheet, FilterSheet_Icon, FilterSheet_Icon_Label, FilterSheet_OptionChoice_Item, FilterSheet_OptionList_Item, MoreActionSheet, SortSheet. No screens. |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/components/filter/*`, `app/src/containers/FilterSheet/*`, `app/src/pages/Notes/components/FilterSheet_Icon_Label.tsx`, `app/src/pages/Notifications/components/{MoreActionSheet,SortSheet}.tsx`, KB page `ui/filter-sort-sheets.md`, TST compiled code (`fs.js` = FilterSheet.mvc.js, `mas.js` = MoreActionSheet.mvc.js, `ss.js` = SortSheet.mvc.js, `fol.js` = FilterSheet_OptionList_Item.mvc.js) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 210 · partial 1 · missing 0 · differs 0 · mock-only 0 · n/a 2 · unclear 0 (same as `checklist.json`).
- F1 (major): the option-list search keeps the accents. TST removes them from both texts before it compares. React compares the raw texts.
- MoreActionSheet and SortSheet are FilterSheet copies. Their only users pass fixed inputs (empty records, or HasSorting only). React ports only the visible part. The output is the same as TST.
- Four DEV elements are not on TST. React follows TST for each of them (§6.1).
- Status: a user can sort, filter, clear and apply in React as on TST. A search for a name with accents gives other results than on TST.

## 2. Blocks

### 2.1 FilterSheet

**Identity**

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block (row 001) | 3 inputs, 3 events, OnInitialize + OnParametersChanged | component + hook + actions + container | match | `components/filter/FilterSheet/FilterSheet.tsx:99`; `containers/FilterSheet/FilterSheetContainer.tsx:31` |
| lifecycle (rows 031-032) | both events call Action_Define_OptionControl | useState initializer, then effect on inOptions / inStartFilter | match | `useFilterSheet.ts:79-87` |

**Data**

| Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs (rows 002-004) | In_StartFilter, In_Options (mandatory), ExtendedClasses | props with empty defaults | match | `FilterSheet.tsx:53-55` |
| local variables (rows 008-013) | sub-states, option controls, caches, flags | `filterSheetState.ts:7-37` | match | names map one to one |
| cache blocks (rows 027-029) | CacheControl_AllCountries / _AllLocalities / _UserInfo_Wrapper under If | rendered under the same conditions | match | `FilterSheetContainer.tsx:46-66` |

**UI tree**

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| BottomSheet (row 014) | title If(main, "Sort & Filter", SheetTitle + " Filter"), footer 72px | same | match | `FilterSheet.tsx:247-252` |
| skeleton (row 017) | asymmetric In_IsLoading expression | same expression | match | TST `fs.js:304` |
| option lists, choices, flat lists (rows 018-022) | three lists, "All " + Title, selected names | same | match | `FilterSheet.tsx:167-241`; flat-list title reads row 0, as TST `getCurrent` (`fs.js:699`) |
| option list view (row 023) | FilterSheet_OptionList_Item, ShowHeader = not isSingleFilter | same | match | `FilterSheet.tsx:267-283` |
| footer buttons (rows 024-026) | Clear disabled when empty, Apply disabled when unchanged | same | match | `FilterSheet.tsx:297-315`; BR-UBTCON-328 |

**Block actions and business logic**

| Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| Action_Define_OptionControl (rows 033-038) | copy lists, define countries, localities, sort; sort by Order | same | match | `filterSheetActions.ts:158-173` |
| Action_Define_Countries (rows 039-048) | paid plan guard, CheckCountry on non-Global, sort, replace or append, tail calls | same | match | TST `fs.js:1577-1703`; tail runs after both branches; BR-UBTCON-321, -322 |
| Action_Define_Localities (rows 049-053) | Order from HasSorting, preselection copies country ids | same quirks | match | TST `fs.js:1883`, `:1903`; BR-UBTCON-324 |
| Action_FilterLocalitiesByCountry (rows 054-062) | follows the country selection | same | match | `filterSheetActions.ts:114-138`; BR-UBTCON-323 |
| Action_DefineSortBy (rows 063-067) | one sort choice, default Yes | same | match | TST `fs.js:2367-2373`; BR-UBTCON-325 |
| Last / Empty / single filter (rows 068-077) | snapshots and single-filter mode | same | match | `filterSheetActions.ts:39-60`; flat-list loop is DEV only (§6.1) |
| sheet handlers (rows 078-083, 090-091) | close, toggle, revert on close, back navigation | same | match | `filterSheetActions.ts:179-269` |
| cache results and Loaded (rows 084-089) | define lists, ShowSubscriptionOnClick | same | match | `useFilterSheet.ts:89-116`; BR-UBTCON-326 |
| change and click handlers (rows 092-101) | choice, list, flat list, back, clear, apply | same | match | TST `fs.js:2680-2725` for OnChange_ListOption; BR-UBTCON-329, -330 |
| shared actions (row 102), client variable (row 103) | App_CommonFilter_*, GetUserInformation_Wrapper_Assign | `lib/ubtConnect/actions.ts:115-136` | n/a | owned by the _shared unit, see its report |

**Validations**: none in this block.

**Strings**: all 3 strings match (rows 204-206).

### 2.2 FilterSheet_Icon

| Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block and inputs (rows 104-108) | 4 mandatory inputs | props with defaults | match | `components/filter/FilterSheetIcon/FilterSheetIcon.tsx:24-31` |
| skeleton, dot, icon (rows 109-111) | ErrorFill dot when filters apply | same | match | `FilterSheetIcon.tsx:39-53` |
| IconClick (rows 112-114) | ignore until loaded; upgrade pop-up or open sheet | same | match | `FilterSheetIcon.tsx:33-35`; BR-UBTCON-327 |

### 2.3 FilterSheet_Icon_Label

All 5 rows (115-119) match: `pages/Notes/components/FilterSheet_Icon_Label.tsx:34-90`. The Bookmarks use is checked in the report of flow Bookmarks.

### 2.4 FilterSheet_OptionChoice_Item

All 8 rows (120-127) match: `components/filter/FilterOptionChoice/FilterOptionChoice.tsx:23-71`. The none option shows only with a NoneLabel (BR-UBTCON-333).

### 2.5 FilterSheet_OptionList_Item

| Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block, variables, lifecycle (rows 128-130) | Search_Selection, Options; define on ready and on change | useMemo on list, search, forceUpdate | match | `FilterOptionList.tsx:80-102` |
| search filter (row 131) | Index(RemoveAccents(DisplayText), RemoveAccents(Search), ignore case) | identity removeAccents, lower case, includes | partial | F1. TST `fol.js:721-739`; BR-UBTCON-331 |
| All option and selection (rows 132-134) | "All " + Title when not searching; isSelected from SelectedIds | same | match | `FilterOptionList.tsx:60-72` |
| header, search input, lists (rows 135-145) | back header, Search prompt, debounce 300, no-results texts, locked option opens upgrade | same | match | `FilterOptionList.tsx:103-177`; BR-UBTCON-332 |

### 2.6 MoreActionSheet

| Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block and inputs (rows 146-147) | FilterSheet copy with 2 more events | props for the events only | match | the only user passes empty records (TST `Notifications_MoreActionSheet.mvc.js:127-139`) |
| BottomSheet and wrapper (rows 148-149) | ShowHeader False, title Sort; DEV wrapper moreActionContainer | no wrapper | match | wrapper is DEV only (§6.1) |
| menu rows (rows 150-154) | Mark all as read, Delete all notifications | events raised at once | match | TST `mas.js:395`, `:498`, `:1923-1940`, `:2150-2170`; popup is DEV only |
| Cancel, back, sheet events (rows 155-159) | OnClick_Clear, then OnClick_Apply, ApplySort | close, then onApplySort | match | the wrapper ignores SortBy_Title (`Notifications_MoreActionSheet.mvc.js:201-210`) |
| copied FilterSheet actions (rows 160-179) | same text as FilterSheet | not ported | match | judged once in §2.1; empty inputs change no visible state |

### 2.7 SortSheet

| Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block and inputs (row 180) | FilterSheet copy, In_Filter_Common_Options_Choice | yesLabel, noLabel props | match | the wrapper passes HasSorting only (`Notifications_SortSheet.mvc.js:135-157`) |
| sheet, choice, buttons (rows 181-184) | title Sort, one choice, Clear and Apply | same | match | `SortSheet.tsx:59-132`; TST `ss.js:423`, `:514` |
| apply, clear, empty, close, back (rows 185-190) | ApplySort(SortBy_Title) | onApplySort() | match | the wrapper ignores the argument (`Notifications_SortSheet.mvc.js:164-172`) |
| copied FilterSheet actions (rows 191-202), Loaded (row 203) | same text as FilterSheet | not ported | match | judged once in §2.1; HasSorting only |

**Strings of the flow**: rows 207-209 match. Rows 210-213 are the strings of the DEV-only confirm popup; React follows TST.

## 3. Blocks of the flow

All own blocks are in §2. §2 checks the arguments of the referenced blocks. Their logic is shared and this report does not check it. The blocks: BottomSheet, SelectionOption_List, Input, Button, Columns_Two, CustomContainer, CustomText, Icon, IconText, SkeletonSection, BackNavigationHandler, CacheControl_*.

## 4. Shared blocks and actions

| Element | React location | Verdict |
|---|---|---|
| App_CommonFilter_CheckCountry, App_CommonFilter_DefineOptionNames | `lib/ubtConnect/actions.ts:122-140` | checked in the report of the _shared unit |
| GetUserInformation_Wrapper_Assign | `lib/ubtConnect/actions.ts:115-118` | checked in the report of the _shared unit |
| JSUtils_String_RemoveAccents (UBTJavaScriptUtils) | `lib/jsUtils.ts:79-81` exists; FilterOptionList does not use it | F1 |

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| F1 | major | FilterSheet_OptionList_Item, Action_DefineOptions (row 131) | TST removes accents from DisplayText and from the search text before the compare (`fol.js:721-739`, `UBTJavaScriptUtils.controller.js:3078-3084`). React keeps the accents. A search for "Sao" does not find "São Paulo" in React. BR-UBTCON-331. | `app/src/components/filter/FilterOptionList/FilterOptionList.tsx:43` | Use `jSUtils_String_RemoveAccents` of `app/src/lib/jsUtils.ts:79` for both texts. |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| MoreActionSheet delete popup (rows 152-153, 210-213) | Notifications_ConfirmDialog, ShowConfirmDeleteAllPopup, Toggle_DeleteAllPopup, 4 strings | no popup; the row raises DeleteAllNotification at once | TST | `mas.js:498`, `:1923-1940`; grep: no ConfirmDialog |
| MarkAllAsReadClicked (row 151) | triggers MarkAllAsRead, then BottomSheetOnClose | triggers MarkAllAsRead only | TST | `mas.js:2150-2170` |
| moreActionContainer wrapper (row 149) | container around the BottomSheet | no such style | TST | grep `mas.js`: 0 hits |
| Action_DefineOptionControl_Empty (row 071) | third loop clears the flat lists | clears OptionList_Control only | TST | `fs.js:2425-2440` |

### 6.2 KB pages vs TST

| Id | KB text | TST evidence | File |
|---|---|---|---|
| K1 | "SortSheet: nobody (inventory-only)" and "MoreActionSheet: nobody" | Notifications_SortSheet and Notifications_MoreActionSheet embed the blocks. The DEV pack also lists Notifications_MoreActionSheet. | KB `ui/filter-sort-sheets.md` (table "The family"); TST `UBTConnect.App_Notifications.Notifications_SortSheet.mvc.js:135-172`, `Notifications_MoreActionSheet.mvc.js:126-210` |

## 7. Questions for the user

None.

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 7 | 7 | 0 | 0 | 0 | 0 | 0 | 0 |
| data | 15 | 14 | 0 | 0 | 0 | 0 | 1 | 0 |
| ui | 33 | 33 | 0 | 0 | 0 | 0 | 0 | 0 |
| actions | 18 | 18 | 0 | 0 | 0 | 0 | 0 | 0 |
| validations | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 129 | 127 | 1 | 0 | 0 | 0 | 1 | 0 |
| strings | 10 | 10 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | **213** | **210** | **1** | **0** | **0** | **0** | **2** | **0** |
