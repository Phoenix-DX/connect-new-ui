# Notes of Calendar_Events (reader, stage 1)

## Scope
- Block-only flow. screens.md: none. Own blocks: CacheControl_CalendarEvents, Calendar_EventCard, Calendar_NoEvents, EventListItem, EventListNew.
- No built screen uses any of them. Chain (pack blocks.md of flow Calendar): EventList is used by CalendarDays and
  EventList_CacheWrapper; CalendarDays by CalendarView; EventList_CacheWrapper by CalendarView_MonthWrapper;
  CalendarView and its wrappers by MyCalendar and Picker_Date. CacheControl_Calendar_Coordinator is used by CalendarView.
- Board lines (migration/board.md): MyCalendar line 75 skip (V7 skip:dead, replaced by MyEntertaining); PersonalEventForm
  line 83 skip; Recurrence line 85 skip; Reminder line 86 skip; ViewEventList line 91 skip. Picker_Date is used by Recurrence
  and UserEventForm_DateTimeWrapper (flow Deprecated_Calendar_PersonalEvent).
- MyEntertaining_Embedded (flow Calendar, built via MyEntertaining) does not use these blocks: EventList_CacheWrapper has
  one user, CalendarView_MonthWrapper.
- Not verified: the owner screen of UserEventForm_DateTimeWrapper (I did not read that pack).

## TST presence check
- All 5 own blocks have a TST compiled file (UBTConnect.Calendar_Events.<Block>.mvc.js). Pack elements absent on TST: none seen.
- TST elements absent in the pack: none seen. Checked: CacheControl_CalendarEvents TTL 7200, CacheType MyCalendarEvents,
  GetTimezoneName JS; Calendar_EventCard OnClickEvent and Get_CalendarEventSourceConfiguration; Calendar_NoEvents text and style.
- EventListItem and EventListNew: empty on TST as in the pack.

## Pack gaps
- app.md lists no mock handler for GetEventsByCacheKeys. The flow has no mock files per screen.
- references.md was not read (the blocks are unused; EventCard, CacheControl, CustomContainer are library blocks).
- No row for widget details of Calendar_EventCard: the block is unused.

## Mock files
- none for this flow.
