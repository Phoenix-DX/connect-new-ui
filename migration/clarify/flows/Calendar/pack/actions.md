# Pack of UI flow Calendar (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Module client actions the flow calls (transitive): 36; of them shared (in `../../_shared/pack/actions.md`): 13

## Shared actions (signature only)

| Action | Folder | Inputs | Outputs | Used by flows |
|---|---|---|---|---|
| ExitApplicationForWebViewUpdate | ExternalNavigation | Delay: Integer | - | 29 |
| GetURLFromEventDataURL | Share_Utils | EventDataURL: Text (mandatory) | URL: Text | 29 |
| Get_IsUnsupportedSystem | UnsupportedSystems | - | Out_IsUnsupportedSystem: Boolean | 29 |
| Get_IsUnsupportedVersion | UnsupportedSystems | - | Out_IsUnsupportedWebViewVersion: Boolean; Out_IsUnsupportedAppVersion: Boolean; Out_IsUnsupportedBrowserVersion: Boolean | 29 |
| OfflineDataSync | App_OfflineDataSync | SyncUnit: Text (mandatory) | - | 29 |
| OfflineDataSyncConfiguration | App_OfflineDataSync | - | SyncOnOnline: Boolean; SyncOnLogin: Boolean; SyncOnResume: Boolean; RetryOnError: Boolean; RetryIntervalInSeconds: Integer | 29 |
| OpenGooglePlay_Chrome | ExternalNavigation | - | - | 29 |
| OpenGooglePlay_UBTConnect | ExternalNavigation | - | - | 29 |
| OpenGooglePlay_WebView | ExternalNavigation | - | - | 29 |
| SetResumeLoginLink | Share_Utils | URL: Text (mandatory) | - | 29 |
| Try_GetIsSupportedVersion | UnsupportedSystems | - | IsSupportedNativeVersion: Boolean = True; IsSupportedWebView: Boolean = True; IsAndroid: Boolean; IsApple: Boolean | 29 |
| Upgrade_UBTConnect | ExternalNavigation | - | - | 29 |
| Upgrade_WebView | ExternalNavigation | - | - | 29 |

## Actions of this flow (full)

## AddEventsToDayList (action, folder ZTemp_ForSampleData_ToDELETE_OR_REPLACE)
- inputs: DayList: UI_MyCalendar_Day List (mandatory); MyCalendarEventSourceWithEventsList: MyCalendarEventSource List
- outputs: CompleteDayList: UI_MyCalendar_Day List
- locals: UI_CalendarDotEventType: UI_CalendarDotEventType; MyCalendarEventSource_WithOrder: MyCalendarEventSource, Order Record List
```
if (Has day data?) not DayList.Empty
  call GetLookup_CalendarEventSource()
  assign: MyCalendarEventSource_WithOrder = ConvertList(MyCalendarEventSourceWithEventsList,  {"MyCalendarEventSource.MyCalendarEventList":"MyCalendarEventList","MyCalendarEventSource.MyCalendar_EventSource":"MyCalendar_EventSource"})
  [M1] for each MyCalendarEventSource_WithOrder
    assign: MyCalendarEventSource_WithOrder.Current.Order = Get_CalendarEventSourceConfiguration(MyCalendarEventSource_WithOrder.Current.MyCalendarEventSource.MyCalendar_EventSource.Id,In_IsAllEvents:).DisplayOrder
    → continues at [M1]
  end for
  call ListSort(By=Order, List=MyCalendarEventSource_WithOrder)
  assign: MyCalendarEventSourceWithEventsList = ConvertList(MyCalendarEventSource_WithOrder,  {Value:"MyCalendarEventSource"})
  [M2] for each DayList (ForEachDay)
    [M3] for each MyCalendarEventSourceWithEventsList (ForEachEventSource)
      call ListAny(Condition=IsEventOnDay(DayList.Current.Date,Start,End,IsAllDay), List=MyCalendarEventSourceWithEventsList.Current.MyCalendarEventList)
      if ListAny.Result
        assign: UI_CalendarDotEventType.EventSourceId = TextToIdentifier(MyCalendarEventSourceWithEventsList.Current.MyCalendar_EventSource.Id); UI_CalendarDotEventType.Color = Get_CalendarEventSourceConfiguration(MyCalendarEventSourceWithEventsList.Current.MyCalendar_EventSource.Id).IndicatorColor
        call ListAppend(Element=UI_CalendarDotEventType, List=DayList.Current.UI_CalendarDotEventTypes) as ListAppendEventTypeToDayList
        → continues at [M3]
      else
        → continues at [M3]
    end for
    → continues at [M2]
  end for
  assign: CompleteDayList = DayList
  end
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## CopyClassesAcrossPortal (action, folder Calendar)
- inputs: RootWidgetId: Text (mandatory); PopupWidgetId: Text (mandatory)
- outputs: -
```
javascript CopyClassesAcrossPortal(PopupWidgetId=PopupWidgetId, RootWidgetId=RootWidgetId)
  | var root = document.getElementById($parameters.RootWidgetId);
  | var popup = document.getElementById($parameters.PopupWidgetId);
  | 
  | if (root && popup) {
  |     var rootParent = root.parentNode.parentNode;
  | 
  |     var portalRoot = popup.parentNode.parentNode;
  |     var portalParent = portalRoot.parentNode;
  | 
  | 
  |     portalRoot.className = root.className;
  |     portalParent.className = "portal-class" + (rootParent.className? " " + rootParent.className: "");
  | 
  |     // Portals are rendered with "display: inline;" style, but we remove it to not interfere with any CSS rules
  |     portalParent.removeAttribute("style");
  | }
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## FillDaysAfter (action, folder Calendar_DateManipulation)
- inputs: DayList: UI_MyCalendar_Day List (mandatory)
- outputs: FilledDayList: UI_MyCalendar_Day List
- locals: Temp_DayItem: UI_MyCalendar_Day; NumberOfDaysToAdd: Integer; DayToAdd: Date
```
if (Has data?) not DayList.Empty
  assign (Set Initial Data): NumberOfDaysToAdd = GetMonthGrid() - DayList.Length; DayToAdd = DateTimeToDate(AddDays(DayList[DayList.Length - 1].Date,1)); FilledDayList = DayList
  [M1] assign (Set data): Temp_DayItem.Date = DayToAdd; Temp_DayItem.Number = Day(DayToAdd); Temp_DayItem.IsFromActiveMonth = False
  call ListAppend(Element=Temp_DayItem, List=FilledDayList)
  assign (Increment): DayToAdd = DateTimeToDate(AddDays(DayToAdd,1)); NumberOfDaysToAdd = NumberOfDaysToAdd - 1
  if (Need to add more?) NumberOfDaysToAdd > 0
    → continues at [M1]
  else
    end
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## FillDaysAfter_ExtraRow (action, folder Calendar_DateManipulation)
- inputs: DayList: UI_MyCalendar_Day List (mandatory)
- outputs: FilledDayList: UI_MyCalendar_Day List
- locals: Temp_DayItem: UI_MyCalendar_Day; NumberOfDaysToAdd: Integer; DayToAdd: Date
```
if (Has data?) not DayList.Empty
  assign (Set Initial Data): NumberOfDaysToAdd = GetMonthGrid_ExtraRow() - DayList.Length; DayToAdd = DateTimeToDate(AddDays(DayList[DayList.Length - 1].Date,1)); FilledDayList = DayList
  [M1] assign (Set data): Temp_DayItem.Date = DayToAdd; Temp_DayItem.Number = Day(DayToAdd); Temp_DayItem.IsFromActiveMonth = False
  call ListAppend(Element=Temp_DayItem, List=FilledDayList)
  assign (Increment): DayToAdd = DateTimeToDate(AddDays(DayToAdd,1)); NumberOfDaysToAdd = NumberOfDaysToAdd - 1
  if (Need to add more?) NumberOfDaysToAdd > 0
    → continues at [M1]
  else
    end
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## FillDaysBefore (action, folder Calendar_DateManipulation)
- inputs: DayList: UI_MyCalendar_Day List (mandatory); StartingPosition: Integer
- outputs: FilledDayList: UI_MyCalendar_Day List
- locals: NumberOfDaysToAdd: Integer; DayToAdd: Date; Temp_DayItem: UI_MyCalendar_Day
```
if (Has data?) not DayList.Empty
  assign (Set Initial Data): NumberOfDaysToAdd = StartingPosition; DayToAdd = DateTimeToDate(AddDays(DayList[0].Date,-1)); FilledDayList = DayList
  [M1] assign (Set data): Temp_DayItem.Date = DayToAdd; Temp_DayItem.Number = Day(DayToAdd); Temp_DayItem.IsFromActiveMonth = False
  call ListInsert(Element=Temp_DayItem, List=FilledDayList, Position=0)
  assign (Decrement): DayToAdd = DateTimeToDate(AddDays(DayToAdd,-1)); NumberOfDaysToAdd = NumberOfDaysToAdd - 1
  if (Need to add more?) NumberOfDaysToAdd > 0
    → continues at [M1]
  else
    end
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## GetAbbreviatedMonthNameList (action, folder Utils_DateTime_Month_DateCalculation)
- inputs: -
- outputs: MonthNameList: MonthLabel Record List
- locals: MonthIndex: Integer = 1
```
[M1] if MonthIndex <= 12
  call ListAppend(Element={ MonthLabel: { Index: MonthIndex, Label: FormatDateTime(TextToDate("2000-"+MonthIndex+"-01"),"MMM") } }, List=MonthNameList)
  assign: MonthIndex = MonthIndex + 1
  → continues at [M1]
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetCalendarItems (action, folder Calendar_DateManipulation)
- inputs: CalendarViewId: CalendarView Identifier (mandatory); SelectedDate: Date (mandatory); Buffer: Integer (mandatory); MinimumDate: Date (mandatory); MaximumDate: Date
- outputs: DateList: Date List
```
switch (Calendar View)
  case CalendarViewId = Entities.CalendarView.Month (Month Dates)
    call GetCalendarItemsMonth(BufferSize=Buffer, MaximumDate=MaximumDate, MinimumDate=MinimumDate, SelectedDate=SelectedDate)
    assign: DateList = GetCalendarItemsMonth.DateList
    end
  case CalendarViewId = Entities.CalendarView.Week (Week Dates)
    call GetCalendarItemsWeeks(BufferSize=Buffer, MaximumDate=MaximumDate, MinimumDate=MinimumDate, SelectedDate=SelectedDate)
    assign: DateList = GetCalendarItemsWeeks.DateList
    end
  case CalendarViewId = Entities.CalendarView.Day (Day)
    call GetCalendarItemsDays(BufferSize=Buffer, MaximumDate=MaximumDate, MinimumDate=MinimumDate, SelectedDate=SelectedDate)
    assign: DateList = GetCalendarItemsDays.DateList
    end
  otherwise
    end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## GetCalendarItemsDays (action, folder Calendar_DateManipulation)
- inputs: SelectedDate: Date (mandatory); BufferSize: Integer (mandatory); MinimumDate: Date (mandatory); MaximumDate: Date
- outputs: DateList: Date List
- locals: Date: Date
```
assign: Date = AddDays(SelectedDate,-1*BufferSize)
[M1] if DateList.Length < 2*BufferSize + 1
  if Date < MinimumDate
    [M2] assign: Date = AddDays(Date,1)
    → continues at [M1]
  else
    if MaximumDate <> NullDate() and Date > MaximumDate 
      end
    else
      call ListAppend(Element=Date, List=DateList)
      → continues at [M2]
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## GetCalendarItemsMonth (action, folder Calendar_DateManipulation)
- inputs: SelectedDate: Date (mandatory); BufferSize: Integer (mandatory); MinimumDate: Date (mandatory); MaximumDate: Date
- outputs: DateList: Date List
- locals: Date: Date
```
assign: Date = GetDateOfFirstDayOfMonth(AddMonths(SelectedDate,-1*BufferSize))
[M1] if DateList.Length < 2*BufferSize + 1
  if GetDateOfLastDayOfMonth(Date) < MinimumDate
    [M2] assign: Date = AddMonths(Date,1)
    → continues at [M1]
  else
    if MaximumDate <> NullDate() and GetDateOfFirstDayOfMonth(Date) > MaximumDate 
      end
    else
      call ListAppend(Element=Date, List=DateList)
      → continues at [M2]
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## GetCalendarItemsWeeks (action, folder Calendar_DateManipulation)
- inputs: SelectedDate: Date (mandatory); BufferSize: Integer (mandatory); MinimumDate: Date (mandatory); MaximumDate: Date
- outputs: DateList: Date List
- locals: Date: Date
```
assign: Date = AddDays(SelectedDate,-1*(7*BufferSize))
[M1] if DateList.Length < 2*BufferSize + 1
  if GetDateOfLastDayOfWeek(Date) < MinimumDate
    [M2] assign: Date = AddDays(Date,7)
    → continues at [M1]
  else
    if MaximumDate <> NullDate() and GetDateOfFirstDayOfWeek(Date) > MaximumDate 
      end
    else
      call ListAppend(Element=Date, List=DateList)
      → continues at [M2]
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## GetDateListKeyByDate (function, folder Calendar_DynamicCalendar)
- inputs: Date: Date (mandatory); CalendarViewId: CalendarView Identifier (mandatory)
- outputs: DateListDate: Date
```
switch (View Type)
  case CalendarViewId = Entities.CalendarView.Day (Days)
    assign: DateListDate = Date
    end
  case CalendarViewId = Entities.CalendarView.Week (Week)
    assign: DateListDate = AddDays(Date,-1*DayOfWeek(Date))
    end
  case CalendarViewId = Entities.CalendarView.Month (Month)
    assign: DateListDate = AddDays(Date,(-1*Day(Date))+1)
    end
  otherwise
    end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## GetFirstDayOfTheWeek (action, folder Utils_DateTime_Week_DateCalculation)
- inputs: DayInWeek: Date (mandatory)
- outputs: CalculatedDate: Date
```
if (Is Sunday?) DayOfWeek(DayInWeek) = 0
  assign (Set Outputs): CalculatedDate = DayInWeek
  end
else
  assign (Set outputs): CalculatedDate = AddDays(DayInWeek,- DayOfWeek(DayInWeek))
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## GetLookup_CalendarEventSource (action, folder Calendar)
- inputs: -
- outputs: Lookup_CalendarEventType: Lookup_CalendarEventSource
```
assign (Assemble): Lookup_CalendarEventType.Assemble = Get_CalendarEventSourceConfiguration(Entities.Type_MyCalendarEventSource.Assemble); Lookup_CalendarEventType.LDM = Get_CalendarEventSourceConfiguration(Entities.Type_MyCalendarEventSource.LDM); Lookup_CalendarEventType.Orbit = Get_CalendarEventSourceConfiguration(Entities.Type_MyCalendarEventSource.Orbit); Lookup_CalendarEventType.UserCreated = Get_CalendarEventSourceConfiguration(Entities.Type_MyCalendarEventSource.UserCreated)
assign (LDM): Lookup_CalendarEventType.LDM.Id = Entities.Type_MyCalendarEventSource.LDM; Lookup_CalendarEventType.LDM.LongLabel = "Lord’s Day Meal"; Lookup_CalendarEventType.LDM.HeaderBackgroundColor = Entities.UBT_Color.PeachDarkGradientLinear; Lookup_CalendarEventType.LDM.HeaderTextColor = Entities.UBT_Color.PeachDarker; Lookup_CalendarEventType.LDM.IconId = Entities.UBT_Icons2.LDM
assign (Orbit): Lookup_CalendarEventType.Orbit.Id = Entities.Type_MyCalendarEventSource.Orbit; Lookup_CalendarEventType.Orbit.LongLabel = "Orbit"; Lookup_CalendarEventType.Orbit.HeaderBackgroundColor = Entities.UBT_Color.BlueDarkGradientLinear; Lookup_CalendarEventType.Orbit.HeaderTextColor = Entities.UBT_Color.BlueDarker; Lookup_CalendarEventType.Orbit.IconId = Entities.UBT_Icons2.Orbit
assign (UserCreated): Lookup_CalendarEventType.UserCreated.Id = Entities.Type_MyCalendarEventSource.UserCreated; Lookup_CalendarEventType.UserCreated.LongLabel = "Personal events"; Lookup_CalendarEventType.UserCreated.HeaderBackgroundColor = Entities.UBT_Color.CyanDarkGradientLinear; Lookup_CalendarEventType.UserCreated.HeaderTextColor = Entities.UBT_Color.Neutral0; Lookup_CalendarEventType.UserCreated.IconId = Entities.UBT_Icons2.AccountCircleFill
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetMonthCacheKey (function, folder Calendar_Cache)
- inputs: DateInMonth: Date (mandatory)
- outputs: CacheKey: Text
```
assign: CacheKey = FormatDateTime(DateInMonth,"MM/yyyy")
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetMonthView (action, folder Utils_DateTime_Month_DateCalculation)
- inputs: DayInMonth: Date (mandatory)
- outputs: FullMonth: UI_MyCalendar_Month
- locals: StartingPosition: Integer
```
assign (Set Initial Data): StartingPosition = GetStartingPosition(DayInMonth)
call GetStandardMonth(DayInMonth=DayInMonth)
assign (Set Standard data): FullMonth = GetStandardMonth.StandardMonth
if (Need more days?) GetStandardMonth.StandardMonth.DayList.Length <> GetMonthGrid()
  if (Need days before?) StartingPosition > 0 and StartingPosition <= 6
    call FillDaysBefore(DayList=FullMonth.DayList, StartingPosition=StartingPosition)
    assign (Set Filled data): FullMonth.DayList = FillDaysBefore.FilledDayList
    [M1] if (Needs days after?) FullMonth.DayList.Length < GetMonthGrid()
      call FillDaysAfter(DayList=FullMonth.DayList)
      assign (Set Final Data): FullMonth.DayList = FillDaysAfter.FilledDayList
      end
    else
      if (Exact grid?) FullMonth.DayList.Length = GetMonthGrid()
        end
      else
        if (Needs extra row?) FullMonth.DayList.Length > GetMonthGrid()
          call FillDaysAfter_ExtraRow(DayList=FullMonth.DayList)
          assign (Set Final Data): FullMonth.DayList = FillDaysAfter_ExtraRow.FilledDayList
          end
        else
          end
  else
    → continues at [M1]
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
  end
  end
  end
```

## GetStandardMonth (action, folder Utils_DateTime_Month_DateCalculation)
- inputs: DayInMonth: Date (mandatory)
- outputs: StandardMonth: UI_MyCalendar_Month
- locals: Temp_CurrentDayItem: UI_MyCalendar_Day; DayToAdd: Date
```
if (Is date value correct?) DayInMonth <> NullDate()
  assign (Set Initial Data): DayToAdd = NewDate(Year(DayInMonth),Month(DayInMonth),1); StandardMonth.Name = GetMonthName(DayInMonth); StandardMonth.FirstDay = DayToAdd
  [M1] assign (Set data): Temp_CurrentDayItem.Date = DayToAdd; Temp_CurrentDayItem.Number = Day(DayToAdd); Temp_CurrentDayItem.IsCurrentDay = Temp_CurrentDayItem.Date = CurrDate(); Temp_CurrentDayItem.IsFromActiveMonth = True
  call ListAppend(Element=Temp_CurrentDayItem, List=StandardMonth.DayList)
  assign (Increment): DayToAdd = DateTimeToDate(AddDays(DayToAdd,1))
  if (Same month?) Month(DayToAdd) = Month(DayInMonth)
    → continues at [M1]
  else
    end
else
  message Info (Incorrect year value): "Incorrect year value"
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## GetStandardWeek (action, folder Utils_DateTime_Week_DateCalculation)
- inputs: DayInWeek: Date (mandatory)
- outputs: StandardView: UI_MyCalendar_Week
- locals: DayToAdd: Date; Temp_CurrentDayItem: UI_MyCalendar_Day
```
if (Is date value correct?) DayInWeek <> NullDate()
  call GetFirstDayOfTheWeek(DayInWeek=DayInWeek)
  assign (Set Initial Data): DayToAdd = GetFirstDayOfTheWeek.CalculatedDate; StandardView.MonthName = GetMonthName(DayInWeek); StandardView.FirstDayOfWeek = GetFirstDayOfTheWeek.CalculatedDate
  [M1] assign (Set data): Temp_CurrentDayItem.Date = DayToAdd; Temp_CurrentDayItem.Number = Day(DayToAdd); Temp_CurrentDayItem.IsSelected = Temp_CurrentDayItem.Date = CurrDate(); Temp_CurrentDayItem.IsCurrentDay = Temp_CurrentDayItem.Date = CurrDate(); Temp_CurrentDayItem.IsFromActiveMonth = Month(Temp_CurrentDayItem.Date) = Month(DayInWeek)
  call ListAppend(Element=Temp_CurrentDayItem, List=StandardView.DayList)
  assign (Increment): DayToAdd = DateTimeToDate(AddDays(DayToAdd,1))
  if (Same week?) StandardView.DayList.Length < 7
    → continues at [M1]
  else
    end
else
  message Info (Incorrect year value): "Incorrect year value"
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## GetVisibleCalendarElement (action, folder Calendar)
- inputs: ListId: Text (mandatory)
- outputs: PositionInList: Integer; Order: Integer
```
javascript GetVisibleElement(ListId=ListId) → ElementOrder: Integer; ElementPosition: Integer
  | /*const elementIsVisibleInViewport = (el) => {
  |     const left = Math.floor(el.getBoundingClientRect().left);
  |     const right = Math.floor(el.getBoundingClientRect().right);
  |     const { innerWidth } = window;
  |     return ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))|| (left >= 0 && right <= innerWidth);
  | };
  | 
  | var listElement = document.getElementById($parameters.ListId);
  | var listElementItems = listElement.childNodes;
  | var elementOrder = null;
  | var elementPosition = null;
  | for(let i = 0; i < listElementItems.length; i++){
  |     if(elementOrder && elementPosition) {
  |         break;
  |     }
  |     if (elementIsVisibleInViewport(listElementItems[i])) {
  |         elementOrder = listElementItems[i].style.order;
  |         elementPosition = i;
  |     }
  | }
  | 
  | $parameters.ElementOrder = parseInt(elementOrder);
  | $parameters.ElementPosition = elementPosition;*/
  | 
  | var listElement = document.getElementById($parameters.ListId);
  | 
  | const elementIsVisibleInViewport = (el, parent) => {
  |     const rect = el.getBoundingClientRect();
  |     const parentRect = parent.getBoundingClientRect();
  | 
  |     // Instead of 0 and innerWidth, we use the parent's actual edges.
  |     // This ignores elements hidden by the parent's padding/overflow.
  |     return rect.left >= parentRect.left && rect.right <= parentRect.right;
  | };
  | 
  | var listElementItems = listElement.children; // Using .children to avoid text-node bugs
  | var elementOrder = null;
  | var elementPosition = null;
  | 
  | for(let i = 0; i < listElementItems.length; i++){
  |     if(elementOrder !== null && elementPosition !== null) {
  |         break;
  |     }
  |     // Pass both the item and the parent container
  |     if (elementIsVisibleInViewport(listElementItems[i], listElement)) {
  |         elementOrder = listElementItems[i].style.order;
  |         elementPosition = i;
  |     }
  | }
  | 
  | $parameters.ElementOrder = parseInt(elementOrder);
  | $parameters.ElementPosition = elementPosition;
assign: Order = GetVisibleElement.ElementOrder; PositionInList = GetVisibleElement.ElementPosition
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetWeekView (action, folder Utils_DateTime_Week_DateCalculation)
- inputs: DayInWeek: Date (mandatory)
- outputs: WeekView: UI_MyCalendar_Week
```
if (Is date value correct?) DayInWeek <> NullDate()
  call GetStandardWeek(DayInWeek=DayInWeek)
  assign: WeekView = GetStandardWeek.StandardView
  end
else
  message Info (Incorrect year value): "Incorrect date value"
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## Get_CalendarEventSourceConfiguration (function, folder Calendar)
- inputs: In_EventSourceId: Type_MyCalendarEventSource Identifier (mandatory); In_IsAllEvents: Boolean
- outputs: Out_CalendarEventSourceConfiguration: UI_CalendarEventSourceConfiguration
```
if In_IsAllEvents
  assign (UserCreated): Out_CalendarEventSourceConfiguration.Id = NullTextIdentifier(); Out_CalendarEventSourceConfiguration.LongLabel = "All events"; Out_CalendarEventSourceConfiguration.HeaderBackgroundColor = NullTextIdentifier(); Out_CalendarEventSourceConfiguration.HeaderTextColor = NullTextIdentifier(); Out_CalendarEventSourceConfiguration.IconId = Entities.UBT_Icons2.ListAlt; Out_CalendarEventSourceConfiguration.DisplayOrder = 0
  end
else
  switch (EventSource)
    case In_EventSourceId = Entities.Type_MyCalendarEventSource.Assemble (Assemble?)
      assign (Assemble): Out_CalendarEventSourceConfiguration.Id = Entities.Type_MyCalendarEventSource.Assemble; Out_CalendarEventSourceConfiguration.LongLabel = "Assemble"; Out_CalendarEventSourceConfiguration.HeaderBackgroundColor = Entities.UBT_Color.PurpleDarkGradientLinear; Out_CalendarEventSourceConfiguration.HeaderTextColor = Entities.UBT_Color.PurpleDarker; Out_CalendarEventSourceConfiguration.IconId = Entities.UBT_Icons2.Assemble; Out_CalendarEventSourceConfiguration.DisplayOrder = 4; Out_CalendarEventSourceConfiguration.IndicatorColor = Entities.UBT_Color.PurpleDark
      [M1] assign (>>): 
      end
    case In_EventSourceId = Entities.Type_MyCalendarEventSource.LDM (LDM?)
      assign (LDM): Out_CalendarEventSourceConfiguration.Id = Entities.Type_MyCalendarEventSource.LDM; Out_CalendarEventSourceConfiguration.LongLabel = "Lord’s Day Meal"; Out_CalendarEventSourceConfiguration.HeaderBackgroundColor = Entities.UBT_Color.PeachDarkGradientLinear; Out_CalendarEventSourceConfiguration.HeaderTextColor = Entities.UBT_Color.PeachDarker; Out_CalendarEventSourceConfiguration.IconId = Entities.UBT_Icons2.LDM; Out_CalendarEventSourceConfiguration.DisplayOrder = 3; Out_CalendarEventSourceConfiguration.IndicatorColor = Entities.UBT_Color.Peach
      → continues at [M1]
    case In_EventSourceId = Entities.Type_MyCalendarEventSource.Orbit (Orbit?)
      assign (Orbit): Out_CalendarEventSourceConfiguration.Id = Entities.Type_MyCalendarEventSource.Orbit; Out_CalendarEventSourceConfiguration.LongLabel = "Orbit"; Out_CalendarEventSourceConfiguration.HeaderBackgroundColor = Entities.UBT_Color.BlueDarkGradientLinear; Out_CalendarEventSourceConfiguration.HeaderTextColor = Entities.UBT_Color.BlueDarker; Out_CalendarEventSourceConfiguration.IconId = Entities.UBT_Icons2.Orbit; Out_CalendarEventSourceConfiguration.DisplayOrder = 2; Out_CalendarEventSourceConfiguration.IndicatorColor = Entities.UBT_Color.BlueDark
      → continues at [M1]
    case In_EventSourceId = Entities.Type_MyCalendarEventSource.UserCreated (UserCreated?)
      assign (UserCreated): Out_CalendarEventSourceConfiguration.Id = Entities.Type_MyCalendarEventSource.UserCreated; Out_CalendarEventSourceConfiguration.LongLabel = "Personal events"; Out_CalendarEventSourceConfiguration.HeaderBackgroundColor = Entities.UBT_Color.CyanDarkGradientLinear; Out_CalendarEventSourceConfiguration.HeaderTextColor = Entities.UBT_Color.Neutral0; Out_CalendarEventSourceConfiguration.IconId = Entities.UBT_Icons2.AccountCircleFill; Out_CalendarEventSourceConfiguration.DisplayOrder = 1; Out_CalendarEventSourceConfiguration.IndicatorColor = Entities.UBT_Color.Primary
      → continues at [M1]
    otherwise
      end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
  end
```

## Get_FilteredCacheKeyByDateAndEventSources (action, folder Calendar_Cache)
- inputs: In_MyCalendarEventSourceIds: Type_MyCalendarEventSource Identifier List (mandatory); In_CacheKey: Text (mandatory)
- outputs: Out_FilteredCacheKey: Text
```
call ListSort(By=Value, List=In_MyCalendarEventSourceIds)
[M1] for each In_MyCalendarEventSourceIds
  assign: Out_FilteredCacheKey = Out_FilteredCacheKey + In_MyCalendarEventSourceIds.Current + If(In_MyCalendarEventSourceIds.CurrentRowNumber < (In_MyCalendarEventSourceIds.Length-1),"&","")
  → continues at [M1]
end for
assign: Out_FilteredCacheKey = Out_FilteredCacheKey + "/" + In_CacheKey
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Get_MonthSelector_IsMonthValid (function, folder Calendar)
- inputs: In_MinimumDate: Date (mandatory); In_MaximumDate: Date (mandatory); In_SelectedDate: Date (mandatory); In_MonthIndex: Integer (mandatory)
- outputs: Out_IsMonthValid: Boolean
```
if In_MinimumDate <> NullDate() and\nYear(In_MinimumDate) = Year(In_SelectedDate) and\nIn_MonthIndex < Month(In_MinimumDate)
  end
else
  if In_MaximumDate <> NullDate() and\nYear(In_MaximumDate) = Year(In_SelectedDate) and\nIn_MonthIndex > Month(In_MaximumDate)
    end
  else
    assign: Out_IsMonthValid = True
    end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
  end
```

## IsItemBelowMinimumDate (action, folder Calendar_DynamicCalendar)
- inputs: CalendarViewTypeId: CalendarView Identifier (mandatory); ItemDate: Date (mandatory); MinimumDate: Date (mandatory)
- outputs: IsBelowMinimumDate: Boolean
```
switch
  case CalendarViewTypeId = Entities.CalendarView.Day (Day?)
    assign: IsBelowMinimumDate = ItemDate < MinimumDate
    end
  case CalendarViewTypeId = Entities.CalendarView.Week (Week?)
    assign: IsBelowMinimumDate = GetDateOfLastDayOfWeek(ItemDate) < MinimumDate
    end
  case CalendarViewTypeId = Entities.CalendarView.Month (Month)
    assign: IsBelowMinimumDate = GetDateOfLastDayOfMonth(ItemDate) < MinimumDate
    end
  otherwise
    end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```
