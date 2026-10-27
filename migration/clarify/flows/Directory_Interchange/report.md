# Flow report: Directory_Interchange

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Blocks on DEV | 1 (built: 1): Directory_Interchange_StatisticsList. No screens. |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/pages/Locality_Details/components/Directory_Interchange_StatisticsList.tsx`, KB pages of `pack/kb.md`, TST compiled code (`isl.js` = Directory_Interchange_StatisticsList.mvc.js) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 22 · partial 0 · missing 0 · differs 0 · mock-only 0 · n/a 18 · unclear 0 (same as `checklist.json`).
- No finding. The block, its list items, its click handler and its nested blocks match TST.
- The `n/a` rows belong to the nested Directory_EntityDetailsActions and Directory_EmptyState blocks. The report of flow Directory_CommonBlocks checks them.
- Status: a user can open an interchange locality, bookmark it and add notes as on TST.

## 2. Blocks

### 2.1 Directory_Interchange_StatisticsList

**Identity and data**

| Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block (row 001) | 4 inputs, 1 event, no lifecycle | component under Locality_Details | match | `Directory_Interchange_StatisticsList.tsx:32-46`; only user Locality_Interchange |
| inputs (rows 002-005) | In_IsLoading, In_ShowSubtitle, In_HighlightWords, In_InterchangeList | props | match | `Directory_Interchange_StatisticsList.tsx:34-37` |
| event (row 006) | Event_NavigateToLocality(LocalityId, CountryName) | onEventNavigateToLocality(localityId, countryName) | match | TST `isl.js:431` |

**UI tree**

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| container, skeleton, list (rows 007-009) | Neutral0, padding, list--gap-s | same | match | `Directory_Interchange_StatisticsList.tsx:47-61` |
| Statistics_ListItem args (rows 010-012) | HasActionsMenu True, bookmarked class, options, subtitle | same | match | TST `isl.js:255-329` |
| Directory_EntityDetailsActions args (rows 016-018) | Interchange, locality id, bookmark and notes, name override | same | match | TST `isl.js:255-329` |
| empty state (rows 019-021) | Directory_EmptyState "in this locality" when the list is empty and not loading | same | match | `Directory_Interchange_StatisticsList.tsx:90-91` |

**Block actions**

| Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| Event_Clicked → Handler_Clicked (rows 013-015) | no event while loading; else Event_NavigateToLocality | same | match | TST `isl.js:404-439` |

**Validations**: none.

**Strings**: row 036 ("in this locality") matches. Rows 037-040 are strings of the nested blocks (`n/a`).

## 3. Blocks of the flow

Directory_EntityDetailsActions and Directory_EmptyState belong to flow Directory_CommonBlocks. Their use here matches (rows 016-021). Statistics_ListItem belongs to UBTConnectLibrary (ConnectCorePatterns). §2 checks its arguments; its logic is not checked here (shared).

## 4. Shared blocks and actions

| Element | React location | Verdict |
|---|---|---|
| server actions of Directory_EntityDetailsActions (rows 022-029) | `api/bookmark/repository.ts:108-119`, `containers/EntityDetailsActions/mocks.ts` | checked in the report of flow Directory_CommonBlocks |
| GetBookmarkCategoryId_ByEntityTypeId, GetNameAndSurname_ByFullName, GetShareType_FromEntity, ToggleBookmarkItem_C2 (rows 030-033) | `lib/ubtConnect/actions.ts` | checked in the report of the _shared unit |
| client variables Bookmarks_IsSynched, Notes_IsSynched (rows 034-035) | `useEntityDetailsActions.ts:244-245` | checked in the report of flow Directory_CommonBlocks |

## 5. Findings

None.

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

None. The reader found no pack element that is absent on TST, and no TST element that is absent in the pack.

### 6.2 KB pages vs TST

None.

## 7. Questions for the user

None.

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| data | 14 | 4 | 0 | 0 | 0 | 0 | 10 | 0 |
| ui | 11 | 11 | 0 | 0 | 0 | 0 | 0 | 0 |
| actions | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 7 | 3 | 0 | 0 | 0 | 0 | 4 | 0 |
| strings | 5 | 1 | 0 | 0 | 0 | 0 | 4 | 0 |
| **total** | **40** | **22** | **0** | **0** | **0** | **0** | **18** | **0** |
