# Pack of UI flow Calendar_Events (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Server and service actions called

| Action | Kind | Module | Inputs | Outputs |
|---|---|---|---|---|
| GetEventsByCacheKeys | ref-server | Connect2_MyCalendar_BL | KeyList: Text List (mandatory); MyCalendarEventSourceIds: Type_MyCalendarEventSource Identifier List; TimeZone: Text (mandatory) | CacheableCalendarEvents: CacheableCalendarEventsSource List |

## Entity actions called (local entities)


## Local entities of UBTConnect that the flow names


## Client variables

| Variable | Type | Default | Folder | Read | Written |
|---|---|---|---|---|---|

## Structures of UBTConnect that the flow names

- **CacheControl_CalendarEvents**: MyCalendarEventSource: MyCalendarEventSource List
- **UI_CalendarEventSourceConfiguration**: Id: Type_MyCalendarEventSource Identifier; LongLabel: Text; HeaderBackgroundColor: UBT_Color Identifier; HeaderTextColor: UBT_Color Identifier; IndicatorColor: UBT_Color Identifier; IconId: UBT_Icons2 Identifier; DisplayOrder: Integer
