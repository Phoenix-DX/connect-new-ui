# Flow report: Calendar_Events

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 0 (block-only flow) |
| Own blocks | 5, none used by a built screen: CacheControl_CalendarEvents, Calendar_EventCard, Calendar_NoEvents, EventListItem, EventListNew |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), KB page `ui/calendar.md`, `migration/board.md`, TST file names of the 5 blocks (reader check) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 0 · partial 0 · missing 0 · differs 0 · mock-only 0 · n/a 8 · unclear 0 (same as `checklist.json`).
- No finding.
- Status: no React screen uses these blocks, and React does not build them. Every row is `n/a`.

## 2. Blocks

### 2.1 Blocks not used by a built screen

CacheControl_CalendarEvents (-001), Calendar_EventCard (-002) and Calendar_NoEvents (-003) sit in the calendar blocks of
flow Calendar (EventList, EventList_CacheWrapper, CacheControl_Calendar_Coordinator). That chain ends at MyCalendar
(board.md:75), Recurrence (board.md:85) and, through Picker_Date and UserEventForm_DateTimeWrapper, at PersonalEventForm
(board.md:83). The board has `skip:dead` for all three (user, 2026-10-14). MyEntertaining replaces MyCalendar and does
not use these blocks.

On DEV, the cache block keeps one month of events for two hours (BR-UBTCON-715, BR-UBTCON-716). The card block draws an
event with its source header (BR-UBTCON-744). Calendar_NoEvents shows "Nothing in your calendar.". A build needs
GetEventsByCacheKeys (Connect2_MyCalendar_BL), Get_CalendarEventSourceConfiguration and
Get_FilteredCacheKeyByDateAndEventSources (BR-UBTCON-127, 128, 131). Verdict `n/a` for each block.

EventListItem (-004) and EventListNew (-005) are empty blocks with no user (KB `ui/calendar.md:108`). Verdict `n/a`,
dead in the model.

### 2.2 Flow-level items

| Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| server action GetEventsByCacheKeys (-006) | called by CacheControl_CalendarEvents | - | n/a | only the dead block of row -001 calls it |
| client actions Get_CalendarEventSourceConfiguration, Get_FilteredCacheKeyByDateAndEventSources (-007) | called by the event card and the cache block | - | n/a | only dead blocks call them |
| strings (-008) | 4 literals | - | n/a | literals of the dead blocks |

## 3. Blocks of the flow

None is used by a built screen. Library blocks `CacheControl`, `EventCard` and `CustomContainer` are not checked here.

## 4. Shared blocks and actions

None in use.

## 5. Findings

None.

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

None. All 5 blocks have a TST file; the reader found no difference.

### 6.2 KB pages vs TST (for the KB owner)

None.

## 7. Questions for the user

None.

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 5 | 0 | 0 | 0 | 0 | 0 | 5 | 0 |
| data | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| ui | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| actions | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| strings | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| **total** | **8** | **0** | **0** | **0** | **0** | **0** | **8** | **0** |
