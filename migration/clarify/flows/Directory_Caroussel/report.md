# Flow report: Directory_Caroussel

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Blocks on DEV | 7 (built: 6). Not built: EntitiesCarousel_OneSchoolGlobal (board: OneSchoolGlobalCarousel `skip`, V8, dev-only). No screens. |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/components/directory/{CarouselTag,EntitiesCarousel,EntitiesCarouselElement,EntitiesCarouselHeader,CarouselHouseholdDetails,CarouselSupperMeetingDetails}/*`, KB pages of `pack/kb.md`, TST compiled code of the 6 blocks |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 69 · partial 0 · missing 0 · differs 0 · mock-only 0 · n/a 24 · unclear 1 (same as `checklist.json`).
- No finding. React follows TST for each block of the flow.
- Q1: the body of the shared action Get_IsInsideRenderBuffer is not in the TST files read.
- Three DEV elements are not on TST: the OneSchoolGlobal carousel, RemoveCarouselOnResizeHandler and two extra CarouselTag instances.
- Status: a user can swipe the household and supper-meeting carousels as on TST. The OneSchoolGlobal carousel is not built (board skip).

## 2. Blocks

### 2.1 CarouselTag

All 4 rows (001-004) match: `components/directory/CarouselTag/CarouselTag.tsx:17-23`.

### 2.2 EntitiesCarouse_lSupperMeetingDetails

All 4 rows (005-008) match: `components/directory/CarouselSupperMeetingDetails/CarouselSupperMeetingDetails.tsx:31-44`.

### 2.3 EntitiesCarousel

| Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block, inputs, events (rows 009-014) | 3 inputs, Event_Moved, Event_SetHeader | props | match | `EntitiesCarousel.tsx:35-59` |
| local variables (rows 015-020) | indexes, HeaderList, RenderBuffer 3, UseMoveHandler False | state and constants | match | `EntitiesCarousel.tsx:23-24`, `:64-68` |
| OnInitialize (rows 021-022) | Index_Initial from In_StartingPosition | useState initializer | match | TST `EntitiesCarousel.mvc.js:537-546` |
| Carousel, list, element, header (rows 023-028) | splide carousel, list of elements, header generator | same args | match | `EntitiesCarousel.tsx:75-156` |
| Initialized handler (rows 029-035) | disable on render, configs, callbacks, events | same | match | TST `EntitiesCarousel.mvc.js:583-633`; no resize handler on TST |
| disabled nodes (rows 036, 039-040) | [DISABLED] nodes and their only target | none | n/a | dead in the model |
| Move, Moved, SetHeaderList (rows 037-038, 041-042) | index updates and header list | same | match | `EntitiesCarousel.tsx:82-111` |

### 2.4 EntitiesCarousel_Element

| Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block, inputs, variables (rows 043-051) | 7 inputs, 4 variables | props and derived values | match | `EntitiesCarouselElement.tsx:16-72` |
| render buffer logic (rows 052-056) | Get_IsInsideRenderBuffer for active and next | same | match | TST `EntitiesCarousel_Element.mvc.js:434-443` |
| render gate and branches (rows 057, 059-060) | Supper Meetings and Household branches | same | match | TST `EntitiesCarousel_Element.mvc.js:236-335` |
| OneSchoolGlobal branch (row 058) | third If | none | n/a | board skip; absent on TST |
| CarouselTag instances (row 061) | 5 tags in the DEV pack | one tag per slide | match | TST has one per branch (§6.1) |
| Get_IsInsideRenderBuffer (row 067) | shared action, body not in the pack | Abs(current - active) <= buffer | unclear | Q1 |

### 2.5 EntitiesCarousel_HeaderGenerator

All 5 rows (062-066) match: `components/directory/EntitiesCarouselHeader/EntitiesCarouselHeader.tsx:24-43`. Get_CurrentEntityHeader matches TST `UBTConnect.controller.js:4174-4215`.

### 2.6 EntitiesCarousel_HouseholdDetails

| Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block and nested block (rows 068-069) | HouseholdDetails_Block with In_IsSkeletonOnly | render prop | match | `CarouselHouseholdDetails.tsx:40-58` |
| HouseholdDataFetched (rows 070-071) | 3 arguments into 3 block variables | 2 arguments | match | no widget reads the variables (TST `EntitiesCarousel_HouseholdDetails.mvc.js:263`, `:378`) |
| Event_SetHeader (row 072) | Locality + ", " + Country | same | match | `CarouselHouseholdDetails.tsx:57` |

### 2.7 EntitiesCarousel_OneSchoolGlobal (not built)

Board decision: OneSchoolGlobalCarousel is `skip` (V8, dev-only; `migration/board.md:93`). TST has no compiled file for this block.

On DEV the block shows OneSchoolGlobalDetails_Block for one school. It raises Event_SetHeader with the locality and the country. A build needs OneSchoolGlobalDetails_Block and Get_OneSchoolGlobalDetails. Rows 073-075 and 093 are `n/a`.

### 2.8 Rows of nested blocks

Rows 076-088 (server actions, client variables) and 090-092 (strings) belong to nested blocks of other flows. They are `n/a`: see the reports of Directory_Household, Directory_SupperMeetings and Directory_CommonBlocks. Rows 089 and 094 match.

## 3. Blocks of the flow

All own blocks are in §2. HouseholdDetails_Block (Directory_Household) and SupperMeeting_DetailsBlock (Directory_SupperMeetings) come in through render props. Their own reports check them.

## 4. Shared blocks and actions

| Element | React location | Verdict |
|---|---|---|
| Get_CurrentEntityHeader | `lib/ubtConnect/actions.ts:512-523` | match (row 066) |
| Get_IsInsideRenderBuffer | `lib/ubtConnect/actions.ts:525-533` | unclear (row 067, Q1) |
| Carousel, SetSplideConfigs, SetSplideEvent, UnsetSplideEvent (OutSystemsUI) | `EntitiesCarousel.tsx:92-106` | not checked here (shared) |

## 5. Findings

None.

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| EntitiesCarousel_OneSchoolGlobal and its If (rows 058, 073-075) | block and branch | no file, no branch | TST (board skip) | `tst_source.py list Directory_Caroussel`; `EntitiesCarousel_Element.mvc.js:236-335` |
| RemoveCarouselOnResizeHandler (rows 034-035) | JS node at merge [M1] | handler ends after the UseMoveHandler If | TST | `EntitiesCarousel.mvc.js:611-633` |
| CarouselTag instances (row 061) | 3 under Household, 2 in unnamed placeholders | one per branch in Placeholder_CarouselTag | TST | `EntitiesCarousel_Element.mvc.js:269`, `:335` |

### 6.2 KB pages vs TST

None.

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | What does Get_IsInsideRenderBuffer return on TST? | It decides which slides render and which show the skeleton. | A: Abs(Current - Active) <= RenderBuffer, as React. B: another rule. | Read the action in the MCP review pass. Keep React if it is A. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 7 | 6 | 0 | 0 | 0 | 0 | 1 | 0 |
| data | 32 | 19 | 0 | 0 | 0 | 0 | 13 | 0 |
| ui | 14 | 12 | 0 | 0 | 0 | 0 | 2 | 0 |
| actions | 5 | 5 | 0 | 0 | 0 | 0 | 0 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 30 | 25 | 0 | 0 | 0 | 0 | 4 | 1 |
| strings | 6 | 2 | 0 | 0 | 0 | 0 | 4 | 0 |
| **total** | **94** | **69** | **0** | **0** | **0** | **0** | **24** | **1** |
