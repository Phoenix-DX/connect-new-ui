# Pack of UI flow Calendar (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Server and service actions called

| Action | Kind | Module | Inputs | Outputs |
|---|---|---|---|---|
| GetEventsByCacheKeys | ref-server | Connect2_MyCalendar_BL | KeyList: Text List (mandatory); MyCalendarEventSourceIds: Type_MyCalendarEventSource Identifier List; TimeZone: Text (mandatory) | CacheableCalendarEvents: CacheableCalendarEventsSource List |
| Get_CalendarViewOptions | own-server | UBTConnect | - | UI_CalendarFilter: UI_CalendarFilter |

## Server actions of UBTConnect (full)
## Get_CalendarViewOptions (action, folder Calendar)
- inputs: -
- outputs: UI_CalendarFilter: UI_CalendarFilter
```
aggregate GetEventSources max=None: 
call-server ListAppendAll(List=UI_CalendarFilter.UI_CalendarEventSources, SourceList=ConvertList(GetEventSources.List,  {EventSourceId:"Type_MyCalendarEventSource.Id",IsSelected:"True"})) as ListAppendAllEventsSources
aggregate GetCalendarViews max=None: sources[CalendarView] filter[CalendarView.Is_Active = True] sort[CalendarView.Order Descending]
call-server ListAppendAll(List=UI_CalendarFilter.UI_Calendarviews, SourceList=ConvertList(GetCalendarViews.List,  {ViewId:"CalendarView.Id",IconId:"CalendarView.IconClass",IsSelected:"CalendarView.Id = Entities.CalendarView.Month"}))
end
unreachable nodes (not connected to start or to an exception handler):
  [DISABLED] call-server ListAppend(Element={ EventSourceId: NullTextIdentifier(), IsSelected: True }, List=UI_CalendarFilter.UI_CalendarEventSources) as ListAppend_AllEventsRecord
  end
```

## Entity actions called (local entities)


## Local entities of UBTConnect that the flow names


## Client variables

| Variable | Type | Default | Folder | Read | Written |
|---|---|---|---|---|---|
| Client.App_PIN_BiometricEnabled | Boolean | True | App_PIN | yes |  |
| Client.App_Policies_HasPolicyToAccept | Boolean | - | App_Policies | yes |  |
| Client.App_Policies_RedirectURL | Text | - | App_Policies | yes | yes |
| Client.ColumnsPerView | Integer | 7 | MyCalendar | yes |  |
| Client.DaysBuffer | Integer | 2 | MyCalendar_Day | yes |  |
| Client.Embedd_B2CTenant | Text | - | - | yes |  |
| Client.IsNavigateToHomeOnBack | Boolean | - | Navigation | yes | yes |
| Client.MinimumDate | Date | #2022-01-01# | MyCalendar | yes |  |
| Client.MonthsBuffer | Integer | 2 | MyCalendar_Month | yes |  |
| Client.WeeksBuffer | Integer | 2 | MyCalendar_Week | yes |  |

## Structures of UBTConnect that the flow names

- **CacheControl_CalendarEvents**: MyCalendarEventSource: MyCalendarEventSource List
- **Lookup_CalendarEventSource**: Assemble: UI_CalendarEventSourceConfiguration; LDM: UI_CalendarEventSourceConfiguration; Orbit: UI_CalendarEventSourceConfiguration; UserCreated: UI_CalendarEventSourceConfiguration
- **MonthLabel**: Index: Integer; Label: Text
- **UI_CalendarDotEventType**: EventSourceId: Type_MyCalendarEventSource Identifier; Color: UBT_Color Identifier
- **UI_CalendarEventSourceConfiguration**: Id: Type_MyCalendarEventSource Identifier; LongLabel: Text; HeaderBackgroundColor: UBT_Color Identifier; HeaderTextColor: UBT_Color Identifier; IndicatorColor: UBT_Color Identifier; IconId: UBT_Icons2 Identifier; DisplayOrder: Integer
- **UI_CalendarFilter**: UI_CalendarEventSources: UI_CalendarEventSource List; UI_Calendarviews: UI_Calendarview List
- **UI_MyCalendar_Day**: Date: Date; Number: Long Integer; IsSelected: Boolean; IsCurrentDay: Boolean; IsFromActiveMonth: Boolean; UI_CalendarDotEventTypes: UI_CalendarDotEventType List
- **UI_MyCalendar_Month**: Name: Text; FirstDay: Date; DayList: UI_MyCalendar_Day List
- **UI_MyCalendar_Week**: MonthName: Text; FirstDayOfWeek: Date; DayList: UI_MyCalendar_Day List
