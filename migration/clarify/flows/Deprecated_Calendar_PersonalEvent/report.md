# Flow report: Deprecated_Calendar_PersonalEvent

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 5 (built: 0; not built: PersonalEventDetails, PersonalEventForm, Recurrence, Reminder, ViewEventList, all board `skip` V7 skip:dead) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `migration/board.md`, `migration/knowledge/flag-values-tst.json`, TST file list (`tst_source.py list <Screen>`) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 0 · partial 0 · missing 0 · differs 0 · mock-only 0 · n/a 9 · unclear 0 (same as `checklist.json`).
- No finding. No screen of the flow is built.
- Status of the flow: a React user cannot create or view a personal event. The flag `C2EnablePersonalEvents` is false on TST, and the screens are reachable only from other dead screens.

## 2. Screens

Board decision for all five screens: `skip`, reason `V7 skip:dead`: Deprecated_Calendar_PersonalEvent, only from dead screens; `C2EnablePersonalEvents` is false on TST (user, 2026-10-14). The probe of 2026-10-14 still shows `getHasPersonalEvents` false. All five screens have roles Registered and UBTOne_User.

### 2.1 PersonalEventDetails

The DEV screen shows one personal event. Input: `In_PersonalEventId` (mandatory). The data action `GetPersonalEvent` (at start) calls the service action `PersonalEvent_Get`. The tree has a detail layout with title, date and time, and a list of invitees.

The initialize action is empty. Two disabled nodes hold sample data.

A build needs: the blocks `UserEventDetails_IconTextWrapper` and `UserEventDetails_InviteeList` (own), and `Layout_DetailPage`, `CommonUI_InsideLayout`, `Columns_Two`, `CustomContainer` and `Icon` (other flows). Server action: `PersonalEvent_Get`. Flag: `C2EnablePersonalEvents`.

### 2.2 PersonalEventForm

The DEV screen creates a personal event. Input: `In_PersonalEventId` (optional, not used by a visible branch). It holds the local record `PersonalEventForm` (type `UI_PersonalEvent`) and the picker state. Fields: title (with clear), all-day switch, start and end date and time pickers, and rows that open Recurrence, Reminder, attendees and location.

Start time is the closest selectable time; end time is 30 minutes later. A start date change moves the end time when needed. A view restored from cache reads the preload object.

Main action `OnClick_CreateEvent`: if start is not after end, it calls `PersonalEvent_Create`, stores the new id in the local entity `Temp_PersonalEventIds` and shows "Created". Otherwise it shows the error "Event end date-time must be after event start date-time". 

The button on the screen opens ViewEventList. The attendee sheet (`Indev_AddAttendees`) has an "in development" name. The location action is empty.

A build needs: the own blocks `Indev_AddAttendees`, `PersonalEventForm_IconContent`, `PersonalEventForm_LabelContent`, `UserEventForm_DateTimeWrapper`, `UserEventForm_Item__Navigate` (and through them `Picker_Date`, `Picker_Time`, `UserEventForm_DateTime`), plus `DynamicTextArea`, `Input_Underlined`, `FixedFooter`, `ButtonLoading`, `Layout_DetailPage`, `CommonUI_InsideLayout`. Client action `GetClosestSelectableDateTime`; the preload object actions. Server actions: `PersonalEvent_Create`, `Connect_Search` (attendee search). Flag: `C2EnablePersonalEvents`.

### 2.3 Recurrence

The DEV screen edits the repeat rule of the event in the form. It has no input. It reads the form from the preload object. The repeat type list starts with "Don't repeat", then "Every" plus each type (daily, weekly, monthly, yearly).

It also has a repeat interval selector (values 1 to 100) and a weekday tag list. A week-index selector serves monthly rules. An end date picker has a default end date. On back navigation it writes the form back to the preload object.

A build needs: the own blocks `ConnectForm_ItemContainer`, `CustomScrollListWrapper`, `PersonalEventForm_LabelContent`, `PersonalEventForm_TagInput`, `Picker_Date`, `Recurrence_WeekdaysTagList`, and `BackNavigationHandler`, `SelectionOption_List`, `IconText`, `Layout_DetailPage` (other flows). Client actions: `Get_LookupRecurrenceTypes`, `Get_LookupRecurrencePatternWeekIndeces`, `Get_LookupDaysOfWeek`, `Get_IsValidRecurrence`, `Get_IsValidWeeklyRecurrence`, `Get_RecurrenceDefaultEndDate`, `Get_MaybeLimited_RecurrenceEndDate`, `Get_UpdatedRecurrence_DaysOfWeek`, `Get_RecurrencePatternWeekIndexIdList_ByDate`. No server action. Static entities: recurrence type, day of week, week index.

### 2.4 Reminder

The DEV screen picks the reminder option of the event. No input. It reads the form from the preload object. It loads the reminder types with `Get_LookupReminderTypes` and filters them.

All-day events get the all-day options and "Do not remind"; other events get the timed options and "Do not remind". `OnChange_ReminderTypes` sets `ReminderId`. Back navigation writes the form to the preload object.

A build needs: `SelectionOption_List`, `BackNavigationHandler`, `Layout_DetailPage`, `CommonUI_InsideLayout`, `CustomContainer`. Client action `Get_LookupReminderTypes`. Static entity `ReminderOption`. No server action.

### 2.5 ViewEventList

The DEV screen is a test list. It reads the local entity `Temp_PersonalEventIds` (aggregate `GetTempPersonalEventIds`, at start, max 50) and shows each id. A click opens PersonalEventDetails with that id. No input. No server action.

A build needs: `LayoutBlank` (App_Common) and the local entity `Temp_PersonalEventIds`.

## 3. Blocks of the flow

Not compared: no built screen uses them. The own blocks are named in §2. The pack also lists calendar blocks of the flow Calendar (`CalendarView`, `CalendarMonths`, `CalendarWeeks`, `CalendarDays`, `CacheControl_Calendar_Coordinator`) and many calendar date actions. They belong to the flow Calendar. The caller of `GetEventsByCacheKeys` is not stated in the pack.

## 4. Shared blocks and actions

Not checked here (shared). The shared actions are in `../_shared/pack/actions.md`.

## 5. Findings

None.

## 6. DEV vs TST differences

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| PersonalEventDetails | present | present (`UBTConnect.Deprecated_Calendar_PersonalEvent.PersonalEventDetails.mvc.js`) | not built | `tst_source.py list` |
| PersonalEventForm | present | present (with IconContent, LabelContent, TagInput files) | not built | `tst_source.py list` |
| Recurrence | present | present (with WeekdaysTagList file) | not built | `tst_source.py list` |
| Reminder | present | present | not built | `tst_source.py list` |
| ViewEventList | present | present | not built | `tst_source.py list` |
| `C2EnablePersonalEvents` | not read in the pack | false (`getHasPersonalEvents`) | false | `migration/knowledge/flag-values-tst.json` |

## 7. Questions for the user

None. The board reason still holds: the flag is false on TST.

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 5 | 0 | 0 | 0 | 0 | 0 | 5 | 0 |
| data | 4 | 0 | 0 | 0 | 0 | 0 | 4 | 0 |
| ui | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| actions | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| strings | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | 9 | 0 | 0 | 0 | 0 | 0 | 9 | 0 |
