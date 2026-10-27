# Pack of UI flow Deprecated_Calendar_PersonalEvent (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Server and service actions called

| Action | Kind | Module | Inputs | Outputs |
|---|---|---|---|---|
| Connect_Search | ref-service | Connect_Search_CS | SearchKey: Text (mandatory); CountryCode: Text; Category: Connect_SearchCategories Identifier (mandatory) | Households: SearchResult List; Members: SearchResult List; Places: SearchResult List |
| GetEventsByCacheKeys | ref-server | Connect2_MyCalendar_BL | KeyList: Text List (mandatory); MyCalendarEventSourceIds: Type_MyCalendarEventSource Identifier List; TimeZone: Text (mandatory) | CacheableCalendarEvents: CacheableCalendarEventsSource List |
| PersonalEvent_Create | ref-service | Deprecated_Connect2_PersonalEvents | In_UI_PersonalEvent: UI_PersonalEvent (mandatory) | Out_PersonalEventId: Text |
| PersonalEvent_Get | ref-service | Deprecated_Connect2_PersonalEvents | In_PersonalEventId: Text (mandatory); In_UserTimezone: Text = "UTC" | Out_PersonalEvent: UI_PersonalEvent |

## Entity actions called (local entities)

- CreateTemp_PersonalEventIds → local entity Temp_PersonalEventIds (UBTConnect)

## Local entities of UBTConnect that the flow names

- **Temp_PersonalEventIds** (IClientEntity): Id: Text

## Client variables

| Variable | Type | Default | Folder | Read | Written |
|---|---|---|---|---|---|
| Client.App_PIN_BiometricEnabled | Boolean | True | App_PIN | yes |  |
| Client.App_Policies_HasPolicyToAccept | Boolean | - | App_Policies | yes |  |
| Client.App_Policies_RedirectURL | Text | - | App_Policies | yes | yes |
| Client.ColumnsPerView | Integer | 7 | MyCalendar | yes |  |
| Client.IsNavigateToHomeOnBack | Boolean | - | Navigation | yes | yes |
| Client.MinimumDate | Date | #2022-01-01# | MyCalendar | yes |  |
| Client.MonthsBuffer | Integer | 2 | MyCalendar_Month | yes |  |

## Structures of UBTConnect that the flow names

- **CacheControl_CalendarEvents**: MyCalendarEventSource: MyCalendarEventSource List
- **Lookup_CalendarEventSource**: Assemble: UI_CalendarEventSourceConfiguration; LDM: UI_CalendarEventSourceConfiguration; Orbit: UI_CalendarEventSourceConfiguration; UserCreated: UI_CalendarEventSourceConfiguration
- **Lookup_RecurrenceDayOfWeek**: Type_DayOfWeekId: DayOfWeek Identifier; WeekdayLabel: WeekdayLabelType
- **Lookup_RecurrencePatternWeekIndex**: Id: RecurrencePatternWeekIndex Identifier; Index: Integer
- **Lookup_RecurrenceType**: Id: RecurrenceType Identifier; Label: Text; PluralLabel: Text; DisplayLabel: Text
- **Lookup_ReminderType**: Id: ReminderOption Identifier; Label: Text; IsAllDay: Boolean
- **Member**: Id: Long Integer; HouseholderId: Text; Name: Text; Lastname: Text; MaidenName: Text; DateOfBirth: Date; IsDeceased: Boolean; DeceasedDate: Date; Avatar: SignedURL; Email: Text; DisplayTitle: Text; DisplayDescription: Text; HasEmail: Boolean; HasMobilephone: Boolean; IsDisplayAge: Boolean; LastUpdated: Date Time; ExtraDetails: DetailByType List; IsDisabled: Boolean
- **MonthLabel**: Index: Integer; Label: Text
- **SignedURL**: LowResolution: Text; MediumResolution: Text; HighResolution: Text
- **UI_CalendarDotEventType**: EventSourceId: Type_MyCalendarEventSource Identifier; Color: UBT_Color Identifier
- **UI_CalendarEventSourceConfiguration**: Id: Type_MyCalendarEventSource Identifier; LongLabel: Text; HeaderBackgroundColor: UBT_Color Identifier; HeaderTextColor: UBT_Color Identifier; IndicatorColor: UBT_Color Identifier; IconId: UBT_Icons2 Identifier; DisplayOrder: Integer
- **UI_MyCalendar_Day**: Date: Date; Number: Long Integer; IsSelected: Boolean; IsCurrentDay: Boolean; IsFromActiveMonth: Boolean; UI_CalendarDotEventTypes: UI_CalendarDotEventType List
- **UI_MyCalendar_Month**: Name: Text; FirstDay: Date; DayList: UI_MyCalendar_Day List
- **UI_MyCalendar_Week**: MonthName: Text; FirstDayOfWeek: Date; DayList: UI_MyCalendar_Day List
- **UI_RecurrenceTypes**: Id: RecurrenceType Identifier; Label: Text
