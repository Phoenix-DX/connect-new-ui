# Flow report: SubLayout

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 0 (block-only flow) |
| Own blocks | SubLayout_Browse_Section, SubLayout_DirectoryCalendar, SubLayout_DirectoryDetailScreen, SubLayout_DirectoryDetailScreen_Section (4) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/…`, `migration/board.md`, TST compiled code of the 4 blocks |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 10 · partial 0 · missing 0 · differs 0 · mock-only 0 · n/a 2 · unclear 0 (same as `checklist.json`).
- No findings.
- `SubLayout_DirectoryCalendar` is `n/a`. Its only user MyCalendar is `skip` on the board (V7, skip:dead).
- `HideActions` of `SubLayout_DirectoryDetailScreen` sets the class `display-none` on the call-to-action container on
  TST. React does the same. The DEV dump does not show this style.
- Status: the browse section, the directory detail layout and the detail section render as on TST.

## 2. Blocks

### 2.1 SubLayout_Browse_Section

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -001 identity | no inputs, no events; used by BrowseDirectory, CountryDetails | `BrowseSection` | match | `app/src/components/layout/BrowseSection/BrowseSection.tsx:17` |
| -002 ui | container `directory-detail-screen` with Placeholder_TopSection, Placeholder_BottomSection | the same, in that order | match | React `:20-23` |

### 2.2 SubLayout_DirectoryCalendar

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -003 identity | no inputs; used by MyCalendar | no port | n/a | board skip: `migration/board.md:75`, MyCalendar V7 skip:dead, replaced by MyEntertaining (user, 2026-10-14) |
| -004 ui | container `calendar-full-content` with Placeholder_CalendarContent | no port | n/a | as row -003 |

The board decision `skip` for MyCalendar covers this block. A build needs one container with the class
`calendar-full-content` and one placeholder (TST view `:124`, `:137`).

### 2.3 SubLayout_DirectoryDetailScreen

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -005 identity | input HideActions | `DirectoryDetailLayout({ hideActions = false, … })` | match | `app/src/components/layout/DirectoryDetailLayout/DirectoryDetailLayout.tsx:22-28` |
| -006 ui | container `directory-detail-screen` with Placeholder_DetailCard, Placeholder_CallToAction, Placeholder_Content | the same, in that order | match | React `:31-35`; TST `SubLayout_DirectoryDetailScreen.mvc.js:138-169` |
| -007 logic HideActions | the dump shows no use | call-to-action container class `display-none` when true, else "" | match | TST `SubLayout_DirectoryDetailScreen.mvc.js:155-157`; React `:33` |

### 2.4 SubLayout_DirectoryDetailScreen_Section

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -008 identity | In_Title (mandatory), In_PaddingTop = Small, In_PaddingBottom = Small | `DirectoryDetailSection` with the same props; `inTitle` default "" | match | `app/src/components/layout/DirectoryDetailSection/DirectoryDetailSection.tsx:27-33` |
| -009 ui `CustomContainer` | Neutral0; horizontal Base; top and bottom from the inputs | the same | match | React `:36-41` |
| -010 ui `SubLayout_Section` | no arguments; placeholders Title and Content | `SectionLayout` with `title` and `content` | match | React `:42-46`; the `_libraries` unit owns the internals of `UBTConnectLibrary.Layouts.SubLayout_Section` |
| -011 logic If `In_Title <> ""` | true: `CustomText` SemiBold; false: nothing | `inTitle !== '' && <CustomText …/>` | match | React `:43-45` |

### 2.5 Flow-level rows

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -012 strings | none (`pack/strings.md`) | none | match | the blocks hold placeholders only |

No block has an action, a data source or a validation.

## 3. Blocks of the flow

The flow uses no block of another UBTConnect flow. This report checks only the arguments of the referenced
`UBTConnectLibrary` blocks (`CustomContainer`, `SubLayout_Section`, `CustomText`).

## 4. Shared blocks and actions

The flow calls no shared client action.

## 5. Findings

No findings.

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| SubLayout_DirectoryDetailScreen, call-to-action container | the dump shows a plain placeholder, no style | style `display-none` when HideActions, else "" | TST | `SubLayout_DirectoryDetailScreen.mvc.js:155-157`; `DirectoryDetailLayout.tsx:33` |

### 6.2 KB pages vs TST (for the KB owner)

None. The KB names no rule for these blocks.

## 7. Questions for the user

None.

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 4 | 3 | 0 | 0 | 0 | 0 | 1 | 0 |
| data | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| ui | 5 | 4 | 0 | 0 | 0 | 0 | 1 | 0 |
| actions | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| strings | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | 12 | 10 | 0 | 0 | 0 | 0 | 2 | 0 |
