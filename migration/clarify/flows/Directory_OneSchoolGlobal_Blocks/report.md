# Flow report: Directory_OneSchoolGlobal_Blocks

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 0 (block-only flow) |
| Own blocks | 9. Used by a built screen: OneSchoolGlobal_List (Locality_OneSchoolGlobal in Locality_Details, board:32). Not used: DW_OneSchoolGlobal_EventList, OneSchoolGlobal_Event_ListCard_List, OneSchoolGlobal_Event_ListCard, DW_OneSchoolGlobal_Numbers, OneSchoolGlobal_Numbers (dead in the model); OneSchoolGlobal_Event_Card, UI_OneSchoolGlobalEventDetail_IconTextWrapper (board:78 skip); OneSchoolGlobal_DetailCard_Content (no caller) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/…`, KB pages `ui/supper-meetings-oneschool.md`, `ui/directory-entity-actions.md`, TST compiled code of OneSchoolGlobal_List (`tst_source.py`), `migration/knowledge/audit-a1-empty-handlers.md` |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 11 · partial 0 · missing 0 · differs 0 · mock-only 0 · n/a 18 · unclear 0 (same as `checklist.json`).
- No finding.
- `OneSchoolGlobal_List` never raises `Event_OnClick_Bookmark` on TST: the controller only declares it (TST :421).
  React leaves the prop out. This matches.
- Status: in React a user sees the OneSchool Global campus cards of a locality, opens a campus, and uses the actions
  bar (with notes on). The 8 other blocks are dead or skipped, and React does not build them.

## 2. Blocks

### 2.1 OneSchoolGlobal_List

Used by `Locality_OneSchoolGlobal` (screen Locality_Details). React: `app/src/pages/Locality_Details/components/OneSchoolGlobal_List.tsx` (OSGL below); caller `Locality_OneSchoolGlobal.tsx:54-60`.

**Identity and data**

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block instance (-012) | used by Locality_OneSchoolGlobal | `OneSchoolGlobal_List`, OSBlock name of the block | match | OSGL:45 |
| inputs In_IsLoading, OneSchoolList (-013) | mandatory | props, defaults false and empty | match | OSGL:38-39 |
| list keys (-022) | record keys | DOM ids of the TST capture | match | OSGL:18-20,56 |

**UI tree**

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| SkeletonSection (-015) | In_IsLoading | `<Skeleton>` | match | OSGL:46 |
| list (-016) | 'list list-group list--gap-s', OnScrollEnding | same class, `animateItems`, `onScrollEnding` | match | OSGL:47-54; TST :176, :182 |
| ImageCard_LazyLoading (-017) | bookmark--rounded, List, padding-bottom-s, no avatar list | same | match | OSGL:58-63; TST :210-212 |
| UBT_LazyImage (-019) | OneSchoolGlobal, HasErrorMessage, MaxWidth_100vw, SignedURL | same | match | OSGL:65-76; TST :263, :267 |
| ImageCard__Content (-020) | title Name, subtitle LocalityName | same | match | OSGL:77-82 |
| Directory_EntityDetailsActions (-021) | inside StopPropagationHelper; Name = Trim(Name), image SignedURL, EnableNotes = True | same options | match | OSGL:83-93; TST :314-353; BR-UBTCON-839 |

**Block actions and events**

| Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| card click (-018) | Event_OnClick(CommunityBusinessId) | `onEventOnClick(card.communityBusinessId)` | match | OSGL:64 |
| events (-014) | Event_OnClick, Event_OnClick_Bookmark, Event_ScrollEnding | 2 props; no bookmark prop | match | OSGL:21-24,34; TST :421 declares the event and no node raises it; `audit-a1-empty-handlers.md:62` |

**Validations**: none. **Strings**: the block has no own literal.

### 2.2 Blocks not used by a built screen

DW_OneSchoolGlobal_EventList (-001, -002) and DW_OneSchoolGlobal_Numbers (-008, -009) have one user,
`OneSchoolGlobalDetails_Block`, in `If False` branches. The KB ties these branches to BR-UBTCON-906 and BR-UBTCON-907.
TST OneSchoolGlobalDetails shows ComingSoon there, and React does the same (`OneSchoolGlobalDetailsPage.tsx:199-201`,
row -011, owned by Directory_OneSchoolGlobal).

OneSchoolGlobal_Event_ListCard_List (-003), OneSchoolGlobal_Event_ListCard (-004) and OneSchoolGlobal_Numbers (-010)
are only in that dead chain. The data actions of the chain use Wait and hard-coded events or numbers. A build needs real data actions and a reason to switch the branches
on. Verdict `n/a`, dead in the model.

OneSchoolGlobal_Event_Card (-005) and UI_OneSchoolGlobalEventDetail_IconTextWrapper (-006) have one user, the screen
OneSchoolGlobalEventDetail. The board has `skip:dead` for it (board.md:78, user, 2026-10-14: no way in, input unused).
Verdict `n/a`.

OneSchoolGlobal_DetailCard_Content (-007) has no caller (KB `ui/supper-meetings-oneschool.md`). The screen
OneSchoolGlobalDetails has the same text inline ("Educating Students From:", `OneSchoolGlobalDetailsPage.tsx:109`,
row -028); flow Directory_OneSchoolGlobal owns that copy. Verdict `n/a`, dead in the model.

### 2.3 Flow-level items

| Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| shared client actions (-023) | signature only | `lib/ubtConnect/actions.ts` | n/a | shared, checked in the report of `_shared` |
| skeleton actions of the event and number cards (-024) | dead blocks only | - | n/a | dead in the model |
| server actions (-025) | Get_OneSchoolGlobalDetails; stub actions | - | n/a | owned by Directory_OneSchoolGlobal; the stubs are dead |
| client variables (-026) | read by shared actions | `platform/session/clientVars.ts:17` | n/a | owned by `_shared` |
| strings of dead blocks (-027) | 7 literals | - | n/a | dead in the model |
| 'Educating Students From:' (-028) | text of the unused card block | inline in the screen | n/a | dead in the model; owned by Directory_OneSchoolGlobal |
| exception messages (-029) | shared actions | - | n/a | owned by Directory_CommonBlocks and `_shared` |

## 3. Blocks of the flow

The own blocks are in §2. Blocks of other flows:
- `Directory_EntityDetailsActions` (flow Directory_CommonBlocks): arguments checked in row -021; internals and rules BR-UBTCON-833 to 840 in the report of Directory_CommonBlocks.
- Library blocks (`_libraries`): `ImageCard_LazyLoading`, `ImageCard__Content`, `SkeletonSection`, `StopPropagationHelper`, `UBT_LazyImage`. The arguments match; the internals are not checked here.

## 4. Shared blocks and actions

`GetBookmarkCategoryId_ByEntityTypeId`, `GetNameAndSurname_ByFullName`, `GetShareType_FromEntity` and
`ToggleBookmarkItem_C2` (`app/src/lib/ubtConnect/actions.ts`): no own block in use calls them. They are checked in the
report of `_shared`.

## 5. Findings

None.

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

None. The reader found no pack element absent on TST, and no TST element absent in the pack.

### 6.2 KB pages vs TST (for the KB owner)

None.

## 7. Questions for the user

None.

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 9 | 1 | 0 | 0 | 0 | 0 | 8 | 0 |
| data | 6 | 2 | 0 | 0 | 0 | 0 | 4 | 0 |
| ui | 6 | 6 | 0 | 0 | 0 | 0 | 0 | 0 |
| actions | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 4 | 1 | 0 | 0 | 0 | 0 | 3 | 0 |
| strings | 3 | 0 | 0 | 0 | 0 | 0 | 3 | 0 |
| **total** | **29** | **11** | **0** | **0** | **0** | **0** | **18** | **0** |
