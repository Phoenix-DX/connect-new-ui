# Pack of UI flow Calendar (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: CacheControl_Calendar_Coordinator, CalendarDays, CalendarHeaderWeekdays, CalendarMonths, CalendarView, CalendarView_MonthWrapper, CalendarView_WeekWrapper, CalendarWeeks, Calendar_Header, Calendar_Header_SelectedDate, Calendar_ViewActionMenu, DayList, EventList, EventList_CacheWrapper, MonthPicker, MyEntertaining_Embedded, Weekday
Blocks of other UBTConnect flows that the flow uses (transitive): 17

## Block CacheControl_Calendar_Coordinator (flow Calendar)
- public: False
- input parameters: In_CacheKeys: Text List (mandatory); In_MyCalendarEventSourceIds: Type_MyCalendarEventSource Identifier List (mandatory)
- events: Result(CacheControl_Response: CacheControl_CalendarEvents; CacheControl_CacheKey: Text (mandatory)) mandatory
- local variables: CalendarEventCache: IsLoading, Key Record List; MyCalendarEventSourceIds: Type_MyCalendarEventSource Identifier List
- lifecycle: OnInitialize → ScreenEvent_OnInitialize; OnParametersChanged → ScreenEvent_OnParametersChanged
- used by (UBTConnect): CalendarView

#### Widget tree
```
list source=CalendarEventCache mode=Default  [style="list list-group"]
  block CacheControl_CalendarEvents (UBTConnect.Calendar_Events)
    args: CacheKey=CalendarEventCache.Current.Key, MyCalendarEventSourceIds=In_MyCalendarEventSourceIds
    on Result → EventHandler_CalendarEventsResult(CacheControl_Response=CacheControl_Response)
```

#### Block actions
- **Action_UpdateCacheList**
  ```
  call ListDistinct(SourceList=In_CacheKeys) as ListDistinct2
  [M1] for each ListDistinct2.DistinctList
    call ListIndexOf(Condition=Key = ListDistinct2.DistinctList.Current and\nIsLoading, List=CalendarEventCache)
    if ListIndexOf.Position <> -1
      → continues at [M1]
    else
      call ListAppend(Element={ IsLoading: True, Key: ListDistinct2.DistinctList.Current }, List=CalendarEventCache)
      → continues at [M1]
  end for
  end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] call ListClear(List=CalendarEventCache)
    [DISABLED] call ListDistinct(SourceList=In_CacheKeys)
    [DISABLED] assign: CalendarEventCache = ListDistinct.DistinctList
    end
  ```
- **EventHandler_CalendarEventsResult** inputs: CacheControl_Response: CacheControl_CalendarEvents (mandatory)
  ```
  assign: CalendarEventCache.Current.IsLoading = False
  trigger event Result(CacheControl_CacheKey=CalendarEventCache.Current.Key, CacheControl_Response=CacheControl_Response)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  javascript IsRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if IsRestoredFromCache.IsRestoredFromCache
    end
  else
    call ListDistinct(SourceList=In_CacheKeys)
    [M1] for each ListDistinct.DistinctList
      call ListAppend(Element={ IsLoading: True, Key: ListDistinct.DistinctList.Current }, List=CalendarEventCache)
      → continues at [M1]
    end for
    assign: MyCalendarEventSourceIds = In_MyCalendarEventSourceIds
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **ScreenEvent_OnParametersChanged**; locals: IndexesToRemove: Integer List
  ```
  json-serialize JSONSerialize_InputSourceIds = In_MyCalendarEventSourceIds (dates ISO)
  json-serialize JSONSerialize_LocalSourceIds = MyCalendarEventSourceIds (dates ISO)
  if JSONSerialize_InputSourceIds.JSON <> JSONSerialize_LocalSourceIds.JSON
    call ListClear(List=CalendarEventCache)
    call ScreenEvent_OnInitialize()
    end
  else
    [M1] for each CalendarEventCache
      if CalendarEventCache.Current.IsLoading
        → continues at [M1]
      else
        call ListAppend(Element=CalendarEventCache.CurrentRowNumber, List=IndexesToRemove)
        → continues at [M1]
    end for
    call ListSort(Ascending=False, By=Value, List=IndexesToRemove)
    [M2] for each IndexesToRemove
      call ListRemove(List=CalendarEventCache, Position=IndexesToRemove.Current)
      → continues at [M2]
    end for
    call Action_UpdateCacheList()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block Calendar_Header (flow Calendar)
- public: False
- input parameters: CalendarViewId: CalendarView Identifier (mandatory); SelectedDate: Date (mandatory); HeaderSourceCount: Integer (mandatory)
- events: CalendarViewSelectorOnClick(); MonthSelectorOnClick()
- local variables: -
- lifecycle: none
- used by (UBTConnect): MyCalendar

#### Widget tree
```
container  [style="padding-x-base padding-y-s display-flex align-items-center justify-content-space-between"]
  container  [style="display-flex justify-content-flex-start align-content-center font-semi-bold font-size-s"; on onclick → CalendarViewSelectorOnClick]
    container
      block IconText (UBTConnectLibrary.ConnectPatterns)
        args: SpacingSize=Entities.UBT_Size.ExtraSmall, Text=If(HeaderSourceCount > 0, HeaderSourceCount,\n    If(HeaderSourceCount = -1, "0", "All") )\n+ " event " + If(HeaderSourceCount = 1, "type","types")\n
        placeholder Icon:
          block Icon (UBTConnectLibrary.ConnectPatterns)
            args: In_IconId=If(CalendarViewId = Entities.CalendarView.Month,Entities.UBT_Icons2.CalendarFill,\nIf(CalendarViewId = Entities.CalendarView.Week,Entities.UBT_Icons2.EventNoteFill,Entities.UBT_Icons2.EventFill))\n, In_SizeId=Entities.UBT_IconsSize.Medium_20
  container  [on onclick → MonthSelectorOnClick]
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small }, DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_AlignItems.Center, JustifyContent: Entities.UBT_JustifyConte…
      placeholder Content:
        block Calendar_Header_SelectedDate (UBTConnect.Calendar)
          args: None=CalendarViewId, SelectedDate=SelectedDate
```

## Block Calendar_Header_SelectedDate (flow Calendar)
- public: False
- input parameters: SelectedDate: Date (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): Calendar_Header, Picker_Date

#### Widget tree
```
container
  placeholder-def Placeholder_Icon
  container
    block CustomText (UBTConnectLibrary.BasePatterns)
      args: In_Text=FormatDateTime(SelectedDate, "MMMM, yyyy"), In_TextOptions={ Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
```

## Block Calendar_ViewActionMenu (flow Calendar)
- public: False
- input parameters: IsOpen: Boolean; In_InitialEventSourceId: Type_MyCalendarEventSource Identifier (mandatory)
- events: ToggleCalendarMenu() mandatory; UpdateCalendarView(Selected_EventSourceIds: Type_MyCalendarEventSource Identifier List; Selected_ViewId: CalendarView Identifier = Entities.CalendarView.Month; IsAllEventSources: Boolean (mandatory)) mandatory
- local variables: Initial_EventSources: Type_MyCalendarEventSource Identifier List; Initial_ViewId: CalendarView Identifier = Entities.CalendarView.Month; Selected_EventSources: Type_MyCalendarEventSource Identifier List; Selected_ViewId: CalendarView Identifier
- lifecycle: OnReady → ScreenEvent_OnReady
- used by (UBTConnect): MyCalendar

#### Data sources
- data action **GetCalendarViewOptions** fetch=OnDemand; outputs: Out_CalendarFilter: UI_CalendarFilter; OnAfterFetch → OnAfterFetch_GetCalendarViewOptions
  ```
  call-server Get_CalendarViewOptions()
  assign: Out_CalendarFilter = Get_CalendarViewOptions.UI_CalendarFilter
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
container  [style=If(IsOpen,"calendar-view-drawer-overlay open","")]
  container  [style=If(IsOpen,"calendar-view-drawer-options open", "calendar-view-drawer-options")]
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: ExtendedClasses="overflow-hidden", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, BorderOptions: { Radius: { TopRightId: Entities.UBT_Shape.Large } }, DisplayOptions: { Display: Entities.UBT_Display.Flex, JustifyConte…
      placeholder Content:
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base, TopSizeId: Entities.UBT_Size.Medium, BottomSizeId: Entities.UBT_Size.Base }, B…
          placeholder Content:
            container #top
              container #Header  [style="margin-bottom-base"]
                block Columns_Two (UBTConnectLibrary.BasePatterns)
                  args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast }
                  placeholder Left:
                    text: Calendar  [classes="font-semi-bold font-size-base text-neutral-10"]
                  placeholder Right:
                    block Icon (UBTConnectLibrary.ConnectPatterns)
                      args: In_IconId=Entities.UBT_Icons2.Close, In_SizeId=Entities.UBT_IconsSize.Medium_20
                      on Click → CancelOnClick
              container  [style="calendar-view-drawer-content"]
                container #Views  [style="padding-bottom-xs"]
                  container  [style="calendar-view-drawer-title"]
                    text: Display
                  container
                    block SelectionOption_List (UBTConnectLibrary.ConnectPatterns)
                      args: IconSizeId=Entities.UBT_IconsSize.Medium_20, isMultiselect=False, Item_StyleOptions={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Base, HorizontalSizeId: Entities.UBT_Size.Small }, TextOptions: { FontSize: Entities.UBT_FontSize.Small } }, SelectionOption_ItemList=ConvertList(GetCalendarViewOptions.Out_CalendarFilter.UI_Calendarviews,  {Id:"ViewId",DisplayText:"ViewId",IconId:"IconId",isSelected:"IsSelected"})
                      on OnSelectionChange → Handler_OnChangeDisplayView(Selected_DisplayViewId=TextToIdentifier(ClickedItemId))
                container #Sources  [style="padding-bottom-xs"]
                  container  [style="calendar-view-drawer-title"]
                    text: Event types
                  container
                    block SelectionOption_List (UBTConnectLibrary.ConnectPatterns)
                      args: IconSizeId=Entities.UBT_IconsSize.Medium_20, isMultiselect=True, Item_StyleOptions={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Base, HorizontalSizeId: Entities.UBT_Size.Small }, TextOptions: { FontSize: Entities.UBT_FontSize.Small } }, SelectionOption_ItemList=ConvertList(GetCalendarViewOptions.Out_CalendarFilter.UI_CalendarEventSources,  {Id:"EventSourceId",DisplayText:"EventLabel",IconId:"IconId",isSelected:"IsSelected"})
                      on OnSelectionChange → Handler_OnChangeEventSource(SelectedItems=SelectedItems)
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: ExtendedClasses="calendar-view-drawer-bottom", Options={ PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base }, DisplayOptions: { Display: Entities.UBT_Display.Flex } }
          placeholder Content:
            block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
              args: ButtonOptions={ UBT_ButtonSizeId: Entities.UBT_ButtonSize.Small }, ButtonText="Apply"
              on buttonOnClick → SaveOnClick
```

#### Block actions
- **CancelOnClick**; locals: SelectedItems: SelectionOption_Item List
  ```
  trigger event ToggleCalendarMenu()
  assign: Selected_EventSources = Initial_EventSources
  [M1] for each GetCalendarViewOptions.Out_CalendarFilter.UI_CalendarEventSources
    call ListIndexOf(Condition=Value = GetCalendarViewOptions.Out_CalendarFilter.UI_CalendarEventSources.Current.EventSourceId, List=Initial_EventSources)
    assign: GetCalendarViewOptions.Out_CalendarFilter.UI_CalendarEventSources.Current.IsSelected = ListIndexOf.Position <> -1
    → continues at [M1]
  end for
  assign: Selected_ViewId = Initial_ViewId
  [M2] for each GetCalendarViewOptions.Out_CalendarFilter.UI_Calendarviews
    assign: GetCalendarViewOptions.Out_CalendarFilter.UI_Calendarviews.Current.IsSelected = GetCalendarViewOptions.Out_CalendarFilter.UI_Calendarviews.Current.ViewId = Initial_ViewId
    → continues at [M2]
  end for
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnChangeDisplayView** inputs: Selected_DisplayViewId: CalendarView Identifier = Entities.CalendarView.Month
  ```
  assign: Selected_ViewId = Selected_DisplayViewId
  [M1] for each GetCalendarViewOptions.Out_CalendarFilter.UI_Calendarviews
    assign: GetCalendarViewOptions.Out_CalendarFilter.UI_Calendarviews.Current.IsSelected = GetCalendarViewOptions.Out_CalendarFilter.UI_Calendarviews.Current.ViewId = Selected_DisplayViewId
    → continues at [M1]
  end for
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnChangeEventSource** inputs: SelectedItems: SelectionOption_Item List (mandatory)
  ```
  assign: Selected_EventSources = ConvertList(SelectedItems,  {Value:"TextToIdentifier(Id)"})
  [M1] for each GetCalendarViewOptions.Out_CalendarFilter.UI_CalendarEventSources
    call ListIndexOf(Condition=Id = GetCalendarViewOptions.Out_CalendarFilter.UI_CalendarEventSources.Current.EventSourceId, List=SelectedItems)
    assign: GetCalendarViewOptions.Out_CalendarFilter.UI_CalendarEventSources.Current.IsSelected = ListIndexOf.Position <> -1
    → continues at [M1]
  end for
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch_GetCalendarViewOptions**
  ```
  call ListClear(List=Initial_EventSources)
  [M1] for each GetCalendarViewOptions.Out_CalendarFilter.UI_CalendarEventSources
    call Get_CalendarEventSourceConfiguration(In_EventSourceId=GetCalendarViewOptions.Out_CalendarFilter.UI_CalendarEventSources.Current.EventSourceId, In_IsAllEvents=GetCalendarViewOptions.Out_CalendarFilter.UI_CalendarEventSources.Current.EventSourceId = NullTextIdentifier())
    assign: GetCalendarViewOptions.Out_CalendarFilter.UI_CalendarEventSources.Current.EventLabel = Get_CalendarEventSourceConfiguration.Out_CalendarEventSourceConfiguration.LongLabel; GetCalendarViewOptions.Out_CalendarFilter.UI_CalendarEventSources.Current.IconId = Get_CalendarEventSourceConfiguration.Out_CalendarEventSourceConfiguration.IconId; GetCalendarViewOptions.Out_CalendarFilter.UI_CalendarEventSources.Current.IsSelected = In_InitialEventSourceId = NullTextIdentifier() or Get_CalendarEventSourceConfiguration.Out_CalendarEventSourceConfiguration.Id = In_InitialEventSourceId; GetCalendarViewOptions.Out_CalendarFilter.UI_CalendarEventSources.Current.Order = Get_CalendarEventSourceConfiguration.Out_CalendarEventSourceConfiguration.DisplayOrder
    → continues at [M1]
  end for
  call ListSort(By=Order, List=GetCalendarViewOptions.Out_CalendarFilter.UI_CalendarEventSources)
  call ListFilter(Condition=IsSelected, SourceList=GetCalendarViewOptions.Out_CalendarFilter.UI_CalendarEventSources) as ListFilter_SelectedSources
  assign: Initial_EventSources = ConvertList(ListFilter_SelectedSources.FilteredList,  {Value:"EventSourceId"}); Selected_EventSources = Initial_EventSources
  assign: Selected_ViewId = Initial_ViewId
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **SaveOnClick**
  ```
  assign: Initial_EventSources = Selected_EventSources
  assign: Initial_ViewId = Selected_ViewId
  trigger event UpdateCalendarView(IsAllEventSources=Selected_EventSources.Length = GetCalendarViewOptions.Out_CalendarFilter.UI_CalendarEventSources.Length, Selected_EventSourceIds=Selected_EventSources, Selected_ViewId=Selected_ViewId)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnReady**
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache
    end
  else
    refresh data GetCalendarViewOptions
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block CalendarDays (flow Calendar)
- public: False
- input parameters: In_Day: Date (mandatory); In_IsLoading: Boolean (mandatory); In_CacheControl_Response: CacheControl_CalendarEvents (mandatory); In_IsSublist: Boolean (mandatory); In_IsCalendarOnly: Boolean (mandatory)
- events: CalendarEventClicked(MyCalendarEventNavigationDataJSON: Text (mandatory)) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): CalendarView

#### Widget tree
```
block EventList (UBTConnect.Calendar)
  args: CalendarViewIdentifier=Entities.CalendarView.Day, In_CacheControl_Response=In_CacheControl_Response, In_IsCalendarOnly=In_IsCalendarOnly, In_IsLoading=In_IsLoading, In_IsSublist=In_IsSublist, IsFixedHeigh=True, SelectedDate=In_Day
  on CalendarEventClicked → CalendarEventClicked(MyCalendarEventNavigationDataJSON=MyCalendarEventNavigationDataJSON)
```

## Block CalendarHeaderWeekdays (flow Calendar)
- public: False
- input parameters: -
- events: -
- local variables: Weekdays: Text List
- lifecycle: OnInitialize → OnInitialize
- used by (UBTConnect): CalendarMonths

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: ExtendedClasses="calendar-header-weekdays", Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small } }
  placeholder Content:
    list source=Weekdays mode=Default  [style="list list-group calendar-header-weekdays__list"; disable-virtualization=True]
      block Weekday (UBTConnect.Calendar)
        args: Label=Weekdays.Current
```

#### Block actions
- **OnInitialize**
  ```
  if Weekdays.Empty
    call ListAppendAll(List=Weekdays, SourceList=[ "LD", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ])
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block CalendarMonths (flow Calendar)
- public: False
- input parameters: DayInMonth: Date (mandatory); SelectedDate: Date (mandatory); MinimumDate: Date (mandatory); IsCalendarOnly: Boolean (mandatory); In_CacheControl_Response: CacheControl_CalendarEvents (mandatory); In_IsLoading: Boolean (mandatory); In_MaximumDate: Date
- events: DayClicked(Event_Day: UI_MyCalendar_Day (mandatory)) mandatory
- local variables: Month: UI_MyCalendar_Month; IsLoadingEvents: Boolean
- lifecycle: OnReady → OnReady; OnParametersChanged → ScreenEvent_OnParametersChanged
- used by (UBTConnect): CalendarView

#### Widget tree
```
block CalendarHeaderWeekdays (UBTConnect.Calendar)
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small } }
  placeholder Content:
    block DayList (UBTConnect.Calendar)
      args: In_DayList=Month.DayList, In_IsCalendarOnly=IsCalendarOnly, In_IsLoading=IsLoadingEvents, In_MaximumDate=In_MaximumDate, In_MinimumDate=MinimumDate, In_SelectedDate=SelectedDate
      on DayClicked → Calendar_DayDayClicked(Event_Day=Event_Day)
```

#### Block actions
- **Calendar_DayDayClicked** inputs: Event_Day: UI_MyCalendar_Day (mandatory)
  ```
  trigger event DayClicked(Event_Day=Event_Day)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnReady**
  ```
  javascript IsRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
    | //find me in code
  if (Is Restored From Cache?) IsRestoredFromCache.IsRestoredFromCache
    end
  else
    call GetMonthView(DayInMonth=DayInMonth)
    assign: Month.DayList = GetMonthView.FullMonth.DayList
    [M1] for each Month.DayList
      call ListAppendAll(List=Month.DayList.Current.UI_CalendarDotEventTypes, SourceList=[ { EventSourceId: Entities.Type_MyCalendarEventSource.Orbit, Color: Entities.UBT_Color.Primary }, { EventSourceId: Entities.Type_MyCalendarEventSource.Orbit, Color: Entities.UBT_Color.Primary } ])
      → continues at [M1]
    end for
    assign (Set Month data): Month.Name = GetMonthView.FullMonth.Name; Month.FirstDay = GetMonthView.FullMonth.FirstDay
    if IsCalendarOnly
      end
    else
      assign: IsLoadingEvents = True
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **ScreenEvent_OnParametersChanged**
  ```
  if IsCalendarOnly
    call ListIndexOf(Condition=Date = DayInMonth, List=Month.DayList) as ListIndexOfDayInMonth
    if (Same Month?) ListIndexOfDayInMonth.Position <> -1 and \nGetMonthName(DayInMonth) = Month.Name
      end
    else
      call OnReady()
      [M1] if not In_IsLoading and \nIsLoadingEvents
        [M2] for each Month.DayList
          call ListClear(List=Month.DayList.Current.UI_CalendarDotEventTypes)
          → continues at [M2]
        end for
        assign: IsLoadingEvents = False
        if In_CacheControl_Response.MyCalendarEventSource.Empty
          end
        else
          call AddEventsToDayList(DayList=Month.DayList, MyCalendarEventSourceWithEventsList=In_CacheControl_Response.MyCalendarEventSource)
          assign: Month.DayList = AddEventsToDayList.CompleteDayList
          end
      else
        end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```

## Block CalendarView (flow Calendar)
- public: False
- input parameters: In_BlockRootId: Text (mandatory); In_InitialDate: Date; In_CalendarViewTypeId: CalendarView Identifier (mandatory); In_ListBuffer: Integer (mandatory); In_MinimumDate: Date; In_MyCalendarEventSourceIds: Type_MyCalendarEventSource Identifier List; In_IsInstantScroll: Boolean (mandatory); In_IsSublist: Boolean; In_IsCalendarOnly: Boolean (mandatory); In_MaximumDate: Date
- events: CalendarEventClicked(MyCalendarEventNavigationDataJSON: Text (mandatory)); DateChanged(Date: Date (mandatory)) mandatory
- local variables: SelectedDate: Date; DateList: CacheControl_CalendarEvents, CacheKey, Date, IsLoadingEvents, ListOrder Record List; MinimumListOrder: Integer; MaximumListOrder: Integer; InViewListIndex: Integer; DestroyCallbackList: Object List; LocalMyCalendarEventSourceIds: Type_MyCalendarEventSource Identifier List; CacheKeys: Text List
- lifecycle: OnInitialize → OnInitialize; OnReady → OnReady; OnParametersChanged → OnParametersChanged; OnDestroy → OnDestroy
- used by (UBTConnect): CalendarView_MonthWrapper, CalendarView_WeekWrapper, MyCalendar, Picker_Date

#### Widget tree
```
container #CalendarListRoot
  list source=DateList mode=Default #List_Date  [style="list list-group calendar-list " + \nIf(In_CalendarViewTypeId = Entities.CalendarView.Month, "calendar-list--month",If(…; disable-virtualization=True]
    container  [style="calendar-item"; style="order: " + DateList.Current.ListOrder; data-plus-id=DateList.Current.Date]
      if False  [DEAD BRANCH: condition is a constant]
        icon calendar size=Twotimes  [style="icon"]
      else
        if In_CalendarViewTypeId = Entities.CalendarView.Day #DayView
          container  [style="calendar-item__day"]
            block CalendarDays (UBTConnect.Calendar)
              args: In_CacheControl_Response=DateList.Current.CacheControl_CalendarEvents, In_Day=DateList.Current.Date, In_IsCalendarOnly=In_IsCalendarOnly, In_IsLoading=DateList.Current.IsLoadingEvents, In_IsSublist=In_IsSublist
              on CalendarEventClicked → CalendarEventClicked(MyCalendarEventNavigationDataJSON=MyCalendarEventNavigationDataJSON)
        if In_CalendarViewTypeId = Entities.CalendarView.Week #WeekView
          container  [style="calendar-item__week" + \nIf(AreDatesInSameWeek(SelectedDate,DateList.Current.Date), " calendar-item__week--active","")]
            block CalendarWeeks (UBTConnect.Calendar)
              args: In_CacheControl_Response=DateList.Current.CacheControl_CalendarEvents, In_DayInWeek=DateList.Current.Date, In_IsCalendarOnly=In_IsCalendarOnly, In_IsLoading=DateList.Current.IsLoadingEvents, In_MaximumDate=In_MaximumDate, In_MinimumDate=In_MinimumDate, In_SelectedDate=SelectedDate
              on DateChanged → DateChanged(Date=Date)
        if In_CalendarViewTypeId = Entities.CalendarView.Month #MonthView
          container  [style="calendar-item__month" + \nIf(AreDatesInSameMonth(SelectedDate,DateList.Current.Date), " calendar-item__month--active",…]
            block CalendarMonths (UBTConnect.Calendar)
              args: DayInMonth=DateList.Current.Date, In_CacheControl_Response=DateList.Current.CacheControl_CalendarEvents, In_IsLoading=DateList.Current.IsLoadingEvents, In_MaximumDate=In_MaximumDate, IsCalendarOnly=In_IsCalendarOnly, MinimumDate=In_MinimumDate, SelectedDate=SelectedDate
              on DayClicked → DateChanged(Date=Event_Day.Date)
  block CacheControl_Calendar_Coordinator (UBTConnect.Calendar)
    args: In_CacheKeys=CacheKeys, In_MyCalendarEventSourceIds=LocalMyCalendarEventSourceIds
    on Result → EventHandler_OnCacheResult(CacheControl_CacheKey=CacheControl_CacheKey, CacheControl_Response=CacheControl_Response)
```

#### Block actions
- **AddItemBefore** inputs: NumberOfListItems: Integer (mandatory); locals: Offset: Integer = 1
  ```
  call ListIndexOf(Condition=ListOrder = MinimumListOrder, List=DateList)
  [M1] if Offset <= NumberOfListItems
    call BuildNewDateToAppend(Date=DateList[ListIndexOf.Position].Date, ListOrder=MinimumListOrder - 1, Offset=-1*Offset) as BuildNewDateToAppendBefore
    assign: Offset = Offset+1
    → continues at [M1]
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **AddItemsAfter** inputs: NumberOfListItems: Integer (mandatory); locals: Offset: Integer = 1
  ```
  call ListIndexOf(Condition=ListOrder = MaximumListOrder, List=DateList)
  [M1] if Offset <= NumberOfListItems
    call BuildNewDateToAppend(Date=DateList[ListIndexOf.Position].Date, ListOrder=MaximumListOrder + 1, Offset=Offset)
    assign: Offset = Offset+1
    → continues at [M1]
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **BuildNewDateToAppend** inputs: ListOrder: Integer (mandatory); Offset: Integer (mandatory); Date: Date (mandatory); locals: NewDate: Date
  ```
  switch
    case In_CalendarViewTypeId = Entities.CalendarView.Day
      assign: NewDate = AddDays(Date, Offset)
      [M1] assign (>>): 
      if (AddAfter) Offset > 0
        call ListAppendDateItemAfter(ListOrder=ListOrder, NewDate=NewDate)
        end
      else
        call ListAppendDateItemBefore(ListOrder=ListOrder, NewDate=NewDate)
        end
    case In_CalendarViewTypeId = Entities.CalendarView.Week
      assign: NewDate = AddDays(Date, 7*Offset)
      → continues at [M1]
    case In_CalendarViewTypeId = Entities.CalendarView.Month
      assign: NewDate = AddMonths(Date, Offset)
      → continues at [M1]
    otherwise
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **CreateDateList**
  ```
  call ListClear(List=DateList) as ListClear_DateList
  call ListClear(List=CacheKeys) as ListClear_CacheKeys
  assign: SelectedDate = In_InitialDate
  call GetCalendarItems(Buffer=In_ListBuffer, CalendarViewId=In_CalendarViewTypeId, MaximumDate=In_MaximumDate, MinimumDate=In_MinimumDate, SelectedDate=GetDateListKeyByDate(In_InitialDate,In_CalendarViewTypeId))
  [M1] for each GetCalendarItems.DateList
    call GetMonthCacheKey(DateInMonth=GetCalendarItems.DateList.Current)
    call ListAppend(Element={ CacheKey: GetMonthCacheKey.CacheKey, Date: GetCalendarItems.DateList.Current, IsLoadingEvents: True, ListOrder: GetCalendarItems.DateList.CurrentRowNumber }, List=DateList) as ListAppendDateAndOrder
    → continues at [M1]
  end for
  assign: MinimumListOrder = 0; MaximumListOrder = GetCalendarItems.DateList.Length - 1; InViewListIndex = -1; CacheKeys = ConvertList(DateList,  {Value:"CacheKey"})
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **EventHandler_OnCacheResult** inputs: CacheControl_Response: CacheControl_CalendarEvents (mandatory); CacheControl_CacheKey: Text (mandatory)
  ```
  [M1] for each DateList
    if DateList.Current.CacheKey = CacheControl_CacheKey and\nDateList.Current.IsLoadingEvents
      assign: DateList.Current.IsLoadingEvents = False; DateList.Current.CacheControl_CalendarEvents = CacheControl_Response
      → continues at [M1]
    else
      → continues at [M1]
  end for
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ListAppendDateItemAfter** inputs: ListOrder: Integer (mandatory); NewDate: Date (mandatory)
  ```
  if (Is next item above maximum date) In_MaximumDate <> NullDate() and IsItemAboveMaximumDate(In_CalendarViewTypeId,NewDate,In_MaximumDate)
    end
  else
    call ListAppend(Element={ CacheKey: GetMonthCacheKey(NewDate), Date: NewDate, IsLoadingEvents: True, ListOrder: ListOrder }, List=DateList) as ListAppend_NewDate
    call ListAppend(Element=GetMonthCacheKey(NewDate), List=CacheKeys) as ListAppend_CacheKeys
    assign: MaximumListOrder = MaximumListOrder + 1
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ListAppendDateItemBefore** inputs: ListOrder: Integer (mandatory); NewDate: Date (mandatory)
  ```
  call IsItemBelowMinimumDate(CalendarViewTypeId=In_CalendarViewTypeId, ItemDate=NewDate, MinimumDate=In_MinimumDate) as IsNextItemBelowMinimumDate
  if IsNextItemBelowMinimumDate.IsBelowMinimumDate
    end
  else
    call ListAppend(Element={ CacheKey: GetMonthCacheKey(NewDate), Date: NewDate, IsLoadingEvents: True, ListOrder: ListOrder }, List=DateList) as ListAppend_NewDate
    call ListAppend(Element=GetMonthCacheKey(NewDate), List=CacheKeys) as ListAppend_CacheKey
    assign: MinimumListOrder = MinimumListOrder - 1
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ListOnScrollEnding**
  ```
  call GetVisibleCalendarElement(ListId=List_Date.Id)
  if InViewListIndex <> GetVisibleCalendarElement.PositionInList
    assign: InViewListIndex = GetVisibleCalendarElement.PositionInList
    call ListOnScrollEnding_SetSelectedDate()
    [M1] call MaybeAddBufferItems(ListIndex=GetVisibleCalendarElement.PositionInList)
    if SelectedDate <> In_InitialDate
      trigger event DateChanged(Date=SelectedDate)
      [M2] call ReenableTouchEvents()
      end
    else
      → continues at [M2]
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ListOnScrollEnding_SetSelectedDate**
  ```
  switch (View Type)
    case In_CalendarViewTypeId = Entities.CalendarView.Day (Day)
      assign: SelectedDate = DateList[InViewListIndex].Date
      [M1] if SelectedDate < In_MinimumDate
        assign: SelectedDate = In_MinimumDate
        [M2] if In_MaximumDate <> NullDate() and SelectedDate > In_MaximumDate
          assign: SelectedDate = In_MaximumDate
          end
        else
          end
      else
        → continues at [M2]
    case In_CalendarViewTypeId = Entities.CalendarView.Week (Week)
      assign: SelectedDate = AddDays(AddDays(DateList[InViewListIndex].Date, -1*DayOfWeek(DateList[InViewListIndex].Date)),DayOfWeek(In_InitialDate))
      → continues at [M1]
    case In_CalendarViewTypeId = Entities.CalendarView.Month (Month)
      assign: SelectedDate = NewDate(\n    Year(DateList[InViewListIndex].Date),\n    Month(DateList[InViewListIndex].Date),\n    If(Month(DateList[InViewListIndex].Date) = Month(CurrDate()) and Year(DateList[InViewListIndex].Date) = Year(CurrDate()),Day(CurrDate()),1)\n)
      → continues at [M1]
    otherwise
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **MaybeAddBufferItems** inputs: ListIndex: Integer (mandatory); locals: DistanceFromStart: Integer; DistanceFromEnd: Integer
  ```
  call ListIndexOf(Condition=ListOrder= MinimumListOrder, List=DateList) as ListIndexOf_MinimumDate
  call ListIndexOf(Condition=ListOrder= MaximumListOrder, List=DateList) as ListIndexOf_MaximumDate
  switch (View Type)
    case In_CalendarViewTypeId = Entities.CalendarView.Day (Days)
      assign: DistanceFromStart = DiffDays(DateList[ListIndexOf_MinimumDate.Position].Date, DateList[ListIndex].Date); DistanceFromEnd = DiffDays(DateList[ListIndex].Date, DateList[ListIndexOf_MaximumDate.Position].Date)
      [M1] assign (>>): 
      if (Close to end?) DistanceFromEnd < In_ListBuffer
        call AddItemsAfter(NumberOfListItems=In_ListBuffer - DistanceFromEnd)
        [M2] if (Close to start) DistanceFromStart < In_ListBuffer
          call AddItemBefore(NumberOfListItems=In_ListBuffer - DistanceFromStart)
          end
        else
          end
      else
        → continues at [M2]
    case In_CalendarViewTypeId = Entities.CalendarView.Week (Week)
      assign: DistanceFromStart = DiffDays(GetDateOfFirstDayOfWeek(DateList[ListIndexOf_MinimumDate.Position].Date), GetDateOfFirstDayOfWeek(DateList[ListIndex].Date)); DistanceFromEnd = DiffDays(GetDateOfFirstDayOfWeek(DateList[ListIndex].Date), GetDateOfFirstDayOfWeek(DateList[ListIndexOf_MaximumDate.Position].Date))
      → continues at [M1]
    case In_CalendarViewTypeId = Entities.CalendarView.Month (Month)
      assign: DistanceFromStart = DiffMonths(DateList[ListIndexOf_MinimumDate.Position].Date, DateList[ListIndex].Date); DistanceFromEnd = DiffMonths(DateList[ListIndex].Date, DateList[ListIndexOf_MaximumDate.Position].Date)
      → continues at [M1]
    otherwise
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnDestroy**
  ```
  [M1] for each DestroyCallbackList
    javascript DestroyCallback(DestroyCallback=DestroyCallbackList.Current)
      | $parameters.DestroyCallback()
    → continues at [M1]
  end for
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  if (Has Minimum Date?) In_MinimumDate<>NullDate()
    [M1] javascript IsRestoredFromCache() → IsRestoredFromCache: Boolean
      | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
    if IsRestoredFromCache.IsRestoredFromCache
      if (Day view?) In_CalendarViewTypeId = Entities.CalendarView.Day
        call GetDateListKeyByDate(CalendarViewId=In_CalendarViewTypeId, Date=SelectedDate)
        call ListIndexOf(Condition=Date = GetDateListKeyByDate.DateListDate, List=DateList)
        javascript ScrollToListPosition(Behavior="instant", ListId=List_Date.Id, ListPosition=ListIndexOf.Position)
          | var afterRenderCallback = function(){
          |     var list = document.getElementById($parameters.ListId);
          |     var targetElement = list.childNodes[$parameters.ListPosition];
          |     var scrollTarget = targetElement.offsetLeft;//list.scrollLeft + targetElement.getBoundingClientRect().left;
          |     list.scrollTo({
          |                 left: scrollTarget,
          |                 behavior: $parameters.Behavior});
          | }
          | 
          | $public.View.render().then(afterRenderCallback);
        end
      else
        end
    else
      assign: LocalMyCalendarEventSourceIds = In_MyCalendarEventSourceIds
      call CreateDateList()
      end
  else
    assign: In_MinimumDate = Client.MinimumDate
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **OnParametersChanged**
  ```
  json-serialize JSONSerialize_InputSourceIds = In_MyCalendarEventSourceIds (dates ISO)
  json-serialize JSONSerialize_LocalSourceIds = LocalMyCalendarEventSourceIds (dates ISO)
  if JSONSerialize_InputSourceIds.JSON <> JSONSerialize_LocalSourceIds.JSON
    assign: In_InitialDate = SelectedDate; LocalMyCalendarEventSourceIds = In_MyCalendarEventSourceIds
    call CreateDateList()
    call ScrollToSelectedDate(IsInstant=True) as ScrollToSelectedDate2
    end
  else
    if In_InitialDate <> SelectedDate
      assign: SelectedDate = In_InitialDate
      call ScrollToSelectedDate(IsInstant=In_IsInstantScroll)
      end
    else
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **OnReady**
  ```
  javascript SetWidthVariable(WidgetId=CalendarListRoot.Id)
    | const container = document.getElementById($parameters.WidgetId);
    | 
    | if (container) {
    |     const width = container.offsetWidth; 
    |     container.style.setProperty('--calendar-width', width + 'px');
    | }
  javascript AddScrollListeners(BlockRootId=In_BlockRootId, ListElementId=List_Date.Id) → TouchStartDestroyCallback: Object
    | var blockRoot = document.querySelector('.calendar-root');
    | var list = document.getElementById($parameters.ListElementId);
    | var scrollEndCallback = function(){
    |     window.requestAnimationFrame(function(){$actions.ListOnScrollEnding()});
    | }
    | 
    | var checkScrollPosition = function(frameDelay,previousScrollPosition, listElement){
    |     if (frameDelay > 0){
    |         window.requestAnimationFrame(function(){checkScrollPosition((frameDelay-1),previousScrollPosition, listElement);}) 
    |     } else {
    |         var currentScrollPosition = listElement.scrollLeft;
    |         if(currentScrollPosition == previousScrollPosition) {
    |             window.requestAnimationFrame(scrollEndCallback);
    |         } else {
    |             window.requestAnimationFrame(function(){checkScrollPosition(3,currentScrollPosition, listElement);})
    |         }
    |     }
    | }
    | 
    | var touchEndCallback = function(e){
    |     var elWrapper = document.getElementById($parameters.BlockRootId);
    |     var calendarList = document.getElementById($parameters.ListElementId);
    |     if (calendarList.wasDragged) {
    |         elWrapper.classList.add("no-pointer-events");
    |         window.requestAnimationFrame(function(){checkScrollPosition(3,calendarList.scrollLeft, calendarList);})
    |     }
    | }
    | 
    | var touchStartCallback = function(e){
    |     var elWrapper = document.getElementById($parameters.BlockRootId);
    |     var calendarList = document.getElementById($parameters.ListElementId);
    |     calendarList.wasDragged = false;
    |     if (elWrapper.classList.contains('no-pointer-events')) {
    |         e.preventDefault();
    |     }
    | }
    | 
    | var touchMoveCallback = function(){
    |     var calendarList = document.getElementById($parameters.ListElementId);
    |     calendarList.wasDragged = true;
    | }
    |  
    | list.addEventListener('touchend', touchEndCallback);
    | blockRoot.addEventListener('touchstart', touchStartCallback);
    | list.addEventListener('touchmove', touchMoveCallback);
    | $parameters.TouchStartDestroyCallback = ()=>blockRoot.removeEventListener('touchstart', touchStartCallback);
  call ListAppend(Element=AddScrollListeners.TouchStartDestroyCallback, List=DestroyCallbackList)
  call ScrollToSelectedDate(IsInstant=True)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ReenableTouchEvents**
  ```
  javascript ReenableTouchEvents(BlockRootId=In_BlockRootId)
    | window.requestAnimationFrame(function(){document.getElementById($parameters.BlockRootId).classList.remove('no-pointer-events');})
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScrollToSelectedDate** inputs: IsInstant: Boolean (mandatory)
  ```
  call GetDateListKeyByDate(CalendarViewId=In_CalendarViewTypeId, Date=SelectedDate)
  call ListIndexOf(Condition=Date = GetDateListKeyByDate.DateListDate, List=DateList)
  if ListIndexOf.Position <> -1
    if ListIndexOf.Position <> InViewListIndex
      call MaybeAddBufferItems(ListIndex=ListIndexOf.Position)
      javascript ScrollToListPosition(Behavior=If(IsInstant,"instant","smooth"), ListId=List_Date.Id, ListPosition=ListIndexOf.Position)
        | var afterRenderCallback = function(){
        |     var list = document.getElementById($parameters.ListId);
        |     var targetElement = list.childNodes[$parameters.ListPosition];
        |     var scrollTarget = targetElement.offsetLeft;//list.scrollLeft + targetElement.getBoundingClientRect().left;
        |     list.scrollTo({
        |                     left: scrollTarget,
        |                 behavior: $parameters.Behavior});
        | }
        | 
        | $public.View.render().then(afterRenderCallback);
      assign: InViewListIndex = ListIndexOf.Position
      end
    else
      end
  else
    call CreateDateList()
    javascript ScrollToSelectedDateAfterRender(IsInstant=IsInstant)
      | window.requestAnimationFrame(function(){$actions.ScrollToSelectedDate($parameters.IsInstant)})
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```

## Block CalendarView_MonthWrapper (flow Calendar)
- public: False
- input parameters: In_RootId: Text (mandatory); In_InitialDate: Date (mandatory); In_EventSourceIds: Type_MyCalendarEventSource Identifier List (mandatory); In_IsInstantScroll: Boolean (mandatory); In_IsCalendarOnly: Boolean (mandatory)
- events: CalendarEventClicked(MyCalendarEventNavigationDataJSON: Text (mandatory)); DateChanged(Date: Date (mandatory)) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): MyCalendar

#### Widget tree
```
block EventList_CacheWrapper (UBTConnect.Calendar)
  args: CalendarViewIdentifier=Entities.CalendarView.Day, In_IsCalendarOnly=In_IsCalendarOnly, In_IsSublist=False, IsFixedHeight=False, MyCalendarEventSourceIds=In_EventSourceIds, SelectedDate=In_InitialDate
  on CalendarEventClicked → CalendarEventClicked(MyCalendarEventNavigationDataJSON=MyCalendarEventNavigationDataJSON)
  placeholder CalendarHeader:
    placeholder-def CalendarHeader
  placeholder Calendar:
    block CalendarView (UBTConnect.Calendar)
      args: In_BlockRootId=In_RootId, In_CalendarViewTypeId=Entities.CalendarView.Month, In_InitialDate=In_InitialDate, In_IsCalendarOnly=In_IsCalendarOnly, In_IsInstantScroll=In_IsInstantScroll, In_ListBuffer=Client.MonthsBuffer, In_MyCalendarEventSourceIds=In_EventSourceIds
      on CalendarEventClicked → CalendarEventClicked(MyCalendarEventNavigationDataJSON=MyCalendarEventNavigationDataJSON)
      on DateChanged → DateChanged(Date=Date)
```

## Block CalendarView_WeekWrapper (flow Calendar)
- public: False
- input parameters: In_RootId: Text (mandatory); In_InitialDate: Date (mandatory); In_EventSourceIds: Type_MyCalendarEventSource Identifier List (mandatory); In_IsInstantScroll: Boolean (mandatory); In_IsCalendarOnly: Boolean (mandatory)
- events: CalendarEventClicked(MyCalendarEventNavigationDataJSON: Text (mandatory)); DateChanged(Date: Date (mandatory)) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): MyCalendar

#### Widget tree
```
block CalendarView (UBTConnect.Calendar)
  args: In_BlockRootId=In_RootId, In_CalendarViewTypeId=Entities.CalendarView.Week, In_InitialDate=In_InitialDate, In_IsCalendarOnly=In_IsCalendarOnly, In_IsInstantScroll=In_IsInstantScroll, In_ListBuffer=Client.WeeksBuffer , In_MyCalendarEventSourceIds=In_EventSourceIds
  on DateChanged → DateChanged(Date=Date)
  on CalendarEventClicked → CalendarEventClicked(MyCalendarEventNavigationDataJSON=MyCalendarEventNavigationDataJSON)
block CalendarView (UBTConnect.Calendar)
  args: In_BlockRootId=In_RootId, In_CalendarViewTypeId=Entities.CalendarView.Day, In_InitialDate=In_InitialDate, In_IsCalendarOnly=In_IsCalendarOnly, In_IsInstantScroll=In_IsInstantScroll, In_IsSublist=True, In_ListBuffer=7*Client.WeeksBuffer, In_MyCalendarEventSourceIds=In_EventSourceIds
  on CalendarEventClicked → CalendarEventClicked(MyCalendarEventNavigationDataJSON=MyCalendarEventNavigationDataJSON)
  on DateChanged → DateChanged(Date=Date)
```

## Block CalendarWeeks (flow Calendar)
- public: False
- input parameters: In_DayInWeek: Date (mandatory); In_SelectedDate: Date (mandatory); In_MinimumDate: Date (mandatory); In_IsLoading: Boolean (mandatory); In_CacheControl_Response: CacheControl_CalendarEvents (mandatory); In_IsCalendarOnly: Boolean (mandatory); In_MaximumDate: Date
- events: DateChanged(Date: Date (mandatory)) mandatory
- local variables: Week: UI_MyCalendar_Week; IsLoadingEvents: Boolean
- lifecycle: OnReady → OnReady; OnParametersChanged → ScreenEvent_OnParametersChanged
- used by (UBTConnect): CalendarView

#### Widget tree
```
block DayList (UBTConnect.Calendar)
  args: In_DayList=Week.DayList, In_IsCalendarOnly=In_IsCalendarOnly, In_IsLoading=IsLoadingEvents, In_MaximumDate=In_MaximumDate, In_MinimumDate=In_MinimumDate, In_SelectedDate=In_SelectedDate, In_ShowWeekday=True
  on DayClicked → DateChanged(Date=Event_Day.Date)
```

#### Block actions
- **OnReady**
  ```
  javascript IsRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
    | //find me in code
  if (Is Restored From Cache?) IsRestoredFromCache.IsRestoredFromCache
    end
  else
    call GetWeekView(DayInWeek=In_DayInWeek)
    assign (Set Week data): Week.MonthName = GetWeekView.WeekView.MonthName; Week.FirstDayOfWeek = GetWeekView.WeekView.FirstDayOfWeek; Week.DayList = GetWeekView.WeekView.DayList
    [M1] for each Week.DayList
      call ListAppendAll(List=Week.DayList.Current.UI_CalendarDotEventTypes, SourceList=[ { EventSourceId: Entities.Type_MyCalendarEventSource.Orbit, Color: Entities.UBT_Color.Primary }, { EventSourceId: Entities.Type_MyCalendarEventSource.Orbit, Color: Entities.UBT_Color.Primary } ])
      → continues at [M1]
    end for
    assign: IsLoadingEvents = True
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **ScreenEvent_OnParametersChanged**
  ```
  if not In_IsLoading and \nIsLoadingEvents
    [M1] for each Week.DayList
      call ListClear(List=Week.DayList.Current.UI_CalendarDotEventTypes)
      → continues at [M1]
    end for
    assign: IsLoadingEvents = False
    if In_CacheControl_Response.MyCalendarEventSource.Empty
      end
    else
      call AddEventsToDayList(DayList=Week.DayList, MyCalendarEventSourceWithEventsList=In_CacheControl_Response.MyCalendarEventSource)
      assign: Week.DayList = AddEventsToDayList.CompleteDayList
      end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block DayList (flow Calendar)
- public: False
- input parameters: In_DayList: UI_MyCalendar_Day List (mandatory); In_IsLoading: Boolean (mandatory); In_SelectedDate: Date (mandatory); In_MinimumDate: Date (mandatory); In_ShowWeekday: Boolean; In_IsCalendarOnly: Boolean (mandatory); In_MaximumDate: Date
- events: DayClicked(Event_Day: UI_MyCalendar_Day (mandatory)) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): CalendarMonths, CalendarWeeks

#### Widget tree
```
container
  block Gallery (OutSystemsUI_2_23.Adaptive)
    args: ExtendedClass="calendar-day-gallery", ItemsGap=Entities.Space.ExtraSmall, RowItemsDesktop=Client.ColumnsPerView, RowItemsPhone=Client.ColumnsPerView, RowItemsTablet=Client.ColumnsPerView
    placeholder Content:
      list source=In_DayList mode=Default  [style="list list-group"; disable-virtualization=True]
        container  [style="calendar-day-container" + If(In_DayList.Current.Date = In_SelectedDate," calendar-day-container--selected",""); on onclick → OnClick_Day(ClickedDay=In_DayList.Current)]
          container  [visible=In_ShowWeekday]
            block Weekday (UBTConnect.Calendar)
              args: Label=GetConnectWeekdayLabel_ByDate(In_Date:In_DayList.Current.Date).ShortLabel
          container  [style="calendar-day-item"]
            container  [style=If(In_DayList.Current.IsCurrentDay, "calendar-day-item-bg-current", "") + If(In_DayList.Current.Date = In_SelectedDate,…; visible=In_DayList.Current.Date = In_SelectedDate or In_DayList.Current.IsCurrentDay]
            expr: In_DayList.Current.Number  (example: 1)  [style="calendar-day-item-number" +\nIf(In_DayList.Current.IsCurrentDay," calendar-day-item-number-current","") +\nIf(In_DayLi…]
            container  [style="calendar-day-dots-wrapper"; visible=not In_IsCalendarOnly]
              block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
                args: In_IsLoading=In_IsLoading
                placeholder Placeholder_LoadingSection:
                  if In_DayList.Current.UI_CalendarDotEventTypes.Empty
                    block HorizontalDot_List (UBTConnectLibrary.ConnectPatterns) #Placeholder
                      args: In_UbtColorIds=[ Entities.UBT_Color.Transparent ]
                  else
                    block HorizontalDot_List (UBTConnectLibrary.ConnectPatterns)
                      args: In_UbtColorIds=ConvertList(In_DayList.Current.UI_CalendarDotEventTypes,  {Value:"Color"})
```

#### Block actions
- **OnClick_Day** inputs: ClickedDay: UI_MyCalendar_Day (mandatory)
  ```
  if In_DayList.Current.Date < In_MinimumDate or \n(In_MaximumDate <> NullDate() and In_DayList.Current.Date > In_MaximumDate)
    end
  else
    trigger event DayClicked(Event_Day=ClickedDay)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block EventList (flow Calendar)
- public: False
- input parameters: SelectedDate: Date (mandatory); CalendarViewIdentifier: CalendarView Identifier (mandatory); IsFixedHeigh: Boolean; In_CacheControl_Response: CacheControl_CalendarEvents (mandatory); In_IsLoading: Boolean (mandatory); HideHeader: Boolean; In_IsSublist: Boolean (mandatory); In_IsCalendarOnly: Boolean (mandatory)
- events: CalendarEventClicked(MyCalendarEventNavigationDataJSON: Text (mandatory)) mandatory
- local variables: MyCalendarEventCardList: UI_MyCalendarEventCard List
- lifecycle: OnReady → OnReady; OnParametersChanged → OnParametersChanged
- used by (UBTConnect): CalendarDays, EventList_CacheWrapper

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: ExtendedClasses=If(IsFixedHeigh,"event-list--fixed-height-content",""), Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 } }
  placeholder Content:
    container #DIV_Sticky  [style="event-list__header full-height"]
      placeholder-def CalendarHeader
      container #DIV_Calendar  [style="background-neutral-0"]
        placeholder-def Calendar
      block SectionSeparator (UBTConnect.App_Common_Blocks)
      container #DIV_ListHeader  [visible=not HideHeader]
        block CustomContainer (UBTConnectLibrary.BasePatterns) #Block_ListHeader
          args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base }, TextOptions: { Color: Entities.UBT_…
          placeholder Content:
            expr: GetConnectWeekdayLabel_ByDate(SelectedDate).LongLabel + ", " + FormatDateTime(SelectedDate,"d MMMM yyyy")  (example: 03 August 2023)
            block CustomContainer (UBTConnectLibrary.BasePatterns)
              args: Options={ MarginSize: { LeftSizeId: Entities.UBT_Size.Small }, TextOptions: { Color: Entities.UBT_Color.Neutral7 }, DisplayOptions: { Display: Entities.UBT_Display.Inline } }
              placeholder Content:
                expr: If(In_IsCalendarOnly or In_IsLoading,\n    "(0 events)",\n    "(" + MyCalendarEventCardList.Length + If(MyCalendarEventCardList.Length = 1," event"," events") + ")"\n)
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base, TopSizeId: Entities.UBT_Size.Small } }
      placeholder Content:
        container #DIV_Events  [style="event-list__list " + If(CalendarViewIdentifier= Entities.CalendarView.Week," padding-top-s","")]
          container #DIV_EventList
            if In_IsLoading
            else
              if MyCalendarEventCardList.Empty or In_IsCalendarOnly #EmptyEventList
                block Calendar_NoEvents (UBTConnect.Calendar_Events)
              else
                list source=MyCalendarEventCardList mode=Default  [style="list list-group"; disable-virtualization=True]
                  container  [style="padding-bottom-s"; on onclick → OnClick]
                    block Calendar_EventCard (UBTConnect.Calendar_Events)
                      args: MyCalendarEventCard=MyCalendarEventCardList.Current
```

#### Block actions
- **OnClick**
  ```
  trigger event CalendarEventClicked(MyCalendarEventNavigationDataJSON=MyCalendarEventCardList.Current.NavigationDataJSON)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnParametersChanged**; locals: MyCalendarAllDayEvents: UI_MyCalendarEventCard List; MyCalendarEvents: UI_MyCalendarEventCard List; MyCalendarAllDayMultiDayEvents: UI_MyCalendarEventCard List
  ```
  call ListClear(List=MyCalendarEventCardList)
  javascript ScrollPageToTop()
    | document.querySelector(".content").scrollTop = 0;
  [M1] for each In_CacheControl_Response.MyCalendarEventSource
    [M2] for each In_CacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList
      if IsEventOnDay(SelectedDate, In_CacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Current.Start, In_CacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Current.End,In_CacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Current.IsAllDay)
        call ListAppend(Element=In_CacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Current, List=If(In_CacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Current.IsAllDay,\n   If(DateTimeToDate(In_CacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Curren…)
        → continues at [M2]
      else
        → continues at [M2]
    end for
    → continues at [M1]
  end for
  call ListSort(Ascending=True, By=EventTitle, List=MyCalendarAllDayEvents) as ListSort_AllDayEvents
  call ListSort(Ascending=True, By=EventTitle, List=MyCalendarAllDayMultiDayEvents) as ListSort_AllDayMultiDayEvents
  call ListSort(Ascending=True, By=FormatDateTime(Start,"yyyyMMddHHmmss")+EventTitle, List=MyCalendarEvents) as ListSort_Events
  call ListAppendAll(List=MyCalendarEventCardList, SourceList=MyCalendarAllDayEvents)
  call ListAppendAll(List=MyCalendarEventCardList, SourceList=MyCalendarAllDayMultiDayEvents) as ListAppendAll_MultiDayEvents
  call ListAppendAll(List=MyCalendarEventCardList, SourceList=MyCalendarEvents) as ListAppendAll_Events
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnReady**
  ```
  javascript IsRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
    | //find me in code
  if (Is Restored From Cache?) IsRestoredFromCache.IsRestoredFromCache
    end
  else
    if IsFixedHeigh
      javascript RecalculateHeight(ElementId=DIV_Events.Id, IsWaitHeaderRender=In_IsSublist)
        | let calculateHeight = () => {
        |     let calendarDIV = null;
        |     if ($parameters.IsWaitHeaderRender) {
        |         calendarDIV = document.querySelector(".active-screen .calendar-day-container");
        |     }
        |     if (!$parameters.IsWaitHeaderRender || calendarDIV) {
        |         var targetElement = document.getElementById($parameters.ElementId);
        |         var targetElementHeight = window.innerHeight - targetElement.getBoundingClientRect().top - /*document.querySelector('.bottom-bar-wrapper').offsetHeight -*/ 10;
        |         targetElement.style.height = targetElementHeight + "px";
        |     } else {
        |         window.requestAnimationFrame(() => calculateHeight()) 
        |     }
        | }
        | 
        | calculateHeight();
      end
    else
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block EventList_CacheWrapper (flow Calendar)
- public: False
- input parameters: SelectedDate: Date (mandatory); MyCalendarEventSourceIds: Type_MyCalendarEventSource Identifier List (mandatory); CalendarViewIdentifier: CalendarView Identifier (mandatory); HideHeader: Boolean; IsFixedHeight: Boolean (mandatory); In_IsSublist: Boolean (mandatory); In_IsCalendarOnly: Boolean (mandatory)
- events: CalendarEventClicked(MyCalendarEventNavigationDataJSON: Text (mandatory)) mandatory
- local variables: MyCalendarEventCardList: UI_MyCalendarEventCard List; IsLoading: Boolean; CurrentCachekey: Text; LocalCacheControl_Response: CacheControl_CalendarEvents; LocalMyCalendarEventSourceIds: Type_MyCalendarEventSource Identifier List
- lifecycle: OnReady → OnReady; OnParametersChanged → OnParametersChanged
- used by (UBTConnect): CalendarView_MonthWrapper

#### Widget tree
```
block EventList (UBTConnect.Calendar)
  args: CalendarViewIdentifier=CalendarViewIdentifier, HideHeader=HideHeader, In_CacheControl_Response=LocalCacheControl_Response, In_IsCalendarOnly=In_IsCalendarOnly, In_IsLoading=IsLoading, In_IsSublist=In_IsSublist, IsFixedHeigh=IsFixedHeight, SelectedDate=SelectedDate
  on CalendarEventClicked → CalendarEventClicked(MyCalendarEventNavigationDataJSON=MyCalendarEventNavigationDataJSON)
  placeholder CalendarHeader:
    placeholder-def CalendarHeader
  placeholder Calendar:
    placeholder-def Calendar
if IsLoading
  block CacheControl_CalendarEvents (UBTConnect.Calendar_Events)
    args: CacheKey=CurrentCachekey, MyCalendarEventSourceIds=LocalMyCalendarEventSourceIds
    on Result → CacheControl_CalendarEventsResult(Event_CacheControl_Response=CacheControl_Response)
```

#### Block actions
- **CacheControl_CalendarEventsResult** inputs: Event_CacheControl_Response: CacheControl_CalendarEvents (mandatory); locals: MyCalendarAllDayEvents: UI_MyCalendarEventCard List; MyCalendarEvents: UI_MyCalendarEventCard List; MyCalendarAllDayMultiDayEvents: UI_MyCalendarEventCard List
  ```
  assign: LocalCacheControl_Response = Event_CacheControl_Response
  call ListClear(List=MyCalendarEventCardList)
  javascript ScrollPageToTop()
    | document.querySelector(".content").scrollTop = 0;
  [M1] for each LocalCacheControl_Response.MyCalendarEventSource
    [M2] for each LocalCacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList
      if IsEventOnDay(SelectedDate, LocalCacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Current.Start, LocalCacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Current.End,LocalCacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Current.IsAllDay)
        call Get_CalendarEventSourceConfiguration(In_EventSourceId=LocalCacheControl_Response.MyCalendarEventSource.Current.MyCalendar_EventSource.Id)
        call ListAppend(Element=LocalCacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Current, List=If(LocalCacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Current.IsAllDay,\n   If(DateTimeToDate(LocalCacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Cu…)
        → continues at [M2]
      else
        → continues at [M2]
    end for
    → continues at [M1]
  end for
  call ListSort(Ascending=True, By=EventTitle, List=MyCalendarAllDayEvents) as ListSort_AllDayEvents
  call ListSort(Ascending=True, By=EventTitle, List=MyCalendarAllDayMultiDayEvents) as ListSort_AllDayMultiDayEvents
  call ListSort(Ascending=True, By=FormatDateTime(Start,"yyyyMMddHHmmss")+EventTitle, List=MyCalendarEvents) as ListSort_Events
  call ListAppendAll(List=MyCalendarEventCardList, SourceList=MyCalendarAllDayEvents)
  call ListAppendAll(List=MyCalendarEventCardList, SourceList=MyCalendarAllDayMultiDayEvents) as ListAppendAll_MultiDayEvents
  call ListAppendAll(List=MyCalendarEventCardList, SourceList=MyCalendarEvents) as ListAppendAll_Events
  assign: IsLoading = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnParametersChanged**
  ```
  json-serialize JSONSerialize_InputSourceIds = MyCalendarEventSourceIds (dates ISO)
  json-serialize JSONSerialize_LocalSourceIds = LocalMyCalendarEventSourceIds (dates ISO)
  if JSONSerialize_InputSourceIds.JSON <> JSONSerialize_LocalSourceIds.JSON or\nGetMonthCacheKey(SelectedDate) <> CurrentCachekey
    call SetLocalControlVariables()
    end
  else
    if IsLoading
      end
    else
      call CacheControl_CalendarEventsResult(Event_CacheControl_Response=LocalCacheControl_Response)
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **OnReady**
  ```
  javascript IsRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
    | //find me in code
  if (Is Restored From Cache?) IsRestoredFromCache.IsRestoredFromCache
    end
  else
    call SetLocalControlVariables()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **SetLocalControlVariables**
  ```
  assign: CurrentCachekey = GetMonthCacheKey(SelectedDate); IsLoading = True; LocalMyCalendarEventSourceIds = MyCalendarEventSourceIds
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block MonthPicker (flow Calendar)
- public: False
- input parameters: In_InitialDate: Date (mandatory); In_IsOpened: Boolean (mandatory); In_MinimumDate: Date (mandatory); In_MaximumDate: Date
- events: Close() mandatory; PreventedBackNavigation(NavigationObject: Object (mandatory)) mandatory; SelectedMonth(MonthStartDate: Date (mandatory)) mandatory
- local variables: MonthNameList: MonthLabel Record List; SelectedDate: Date; YearList: Date List; DestroyCallback: Object
- lifecycle: OnInitialize → OnInitialize; OnReady → OnReady; OnParametersChanged → OnParametersChanged; OnDestroy → OnDestroy
- used by (UBTConnect): MyCalendar, Picker_Date

#### Widget tree
```
container #Root  [style="mycalendar-month-selector-popup my-calendar-content"]
  popup #MonthSelector show=In_IsOpened  [style="popup-dialog"; on componentDidUpdate → ComponentDidUpdate]
    container  [style="mycalendar-month-selector font-semi-bo font-size-s"]
      container  [style="display-flex align-items-center justify-content-space-between margin-bottom-l"]
        block Icon (UBTConnectLibrary.ConnectPatterns)
          args: In_ExtendedClasses=If(In_MinimumDate <> NullDate() and Year(SelectedDate) <= Year(In_MinimumDate)," visibility-hidden",""), In_IconId=Entities.UBT_Icons2.ChevronLeft, In_SizeId=Entities.UBT_IconsSize.Base_24
          on Click → ChangeYearOnClick(IsNextYear=False)
        expr: Year(SelectedDate)  (example: 2024)  [style="text-primary font-size-h5 font-semi-bold"]
        block Icon (UBTConnectLibrary.ConnectPatterns)
          args: In_ExtendedClasses=If(In_MaximumDate <> NullDate() and Year(SelectedDate) >=  Year(In_MaximumDate)," visibility-hidden",""), In_IconId=Entities.UBT_Icons2.ChevronRight, In_SizeId=Entities.UBT_IconsSize.Base_24
          on Click → ChangeYearOnClick(IsNextYear=True)
      container
        block Gallery (OutSystemsUI_2_23.Adaptive)
          args: RowItemsDesktop=4, RowItemsPhone=4, RowItemsTablet=4
          placeholder Content:
            list source=MonthNameList mode=Default  [style="list list-group padding-x-m padding-bottom-m"; disable-virtualization=True]
              container  [style="display-flex center mycalendar-month-selector__month" + \nIf(MonthNameList.Current.MonthLabel.Index = Month(In_Initial…; on onclick → MonthOnClick]
                expr: MonthNameList.Current.MonthLabel.Label  [style="font-regular"]
    block PreventBackNavigation (NavigationHandler.NavigationHandler)
      on BackNavigationPrevented → PreventedBackNavigation(NavigationObject=BackNavigationEvent)
```

#### Block actions
- **ChangeYearOnClick** inputs: IsNextYear: Boolean (mandatory)
  ```
  assign: SelectedDate = AddYears(SelectedDate,If(IsNextYear,1,-1))
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CloseMonthPicker**
  ```
  call OnReady()
  trigger event Close()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ComponentDidUpdate**
  ```
  if In_IsOpened
    if DestroyCallback = NullObject()
      javascript AddClickHandler() → DestroyCallback: Object
        | onClick = function(e) {
        |     if (!e.target.closest('.mycalendar-month-selector-popup .popup-dialog'))
        |         $actions.CloseMonthPicker();
        | }
        | 
        | document.addEventListener('click', onClick);
        | $parameters.DestroyCallback = () => document.removeEventListener('click', onClick);
      assign: DestroyCallback = AddClickHandler.DestroyCallback
      [M1] call CopyClassesAcrossPortal(PopupWidgetId=MonthSelector.Id, RootWidgetId=Root.Id)
      end
    else
      → continues at [M1]
  else
    call OnDestroy()
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **MonthOnClick**
  ```
  call Get_MonthSelector_IsMonthValid(In_MaximumDate=In_MaximumDate, In_MinimumDate=In_MinimumDate, In_MonthIndex=MonthNameList.Current.MonthLabel.Index, In_SelectedDate=SelectedDate)
  if Get_MonthSelector_IsMonthValid.Out_IsMonthValid
    trigger event SelectedMonth(MonthStartDate=TextToDate(Year(SelectedDate)+"-"+MonthNameList.Current.MonthLabel.Index+"-01"))
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnDestroy**
  ```
  if DestroyCallback <> NullObject()
    javascript RunDestroyCallback(DestroyCallback=DestroyCallback)
      | $parameters.DestroyCallback()
    assign: DestroyCallback = NullObject()
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  call GetAbbreviatedMonthNameList()
  assign: MonthNameList = GetAbbreviatedMonthNameList.MonthNameList
  call ListAppendAll(List=YearList, SourceList=[ NewDate(Year(AddYears(In_InitialDate,-1)),1,1), NewDate(Year(In_InitialDate),1,1), NewDate(Year(AddYears(In_InitialDate,1)),1,1) ])
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnParametersChanged**
  ```
  assign: SelectedDate = In_InitialDate
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnReady**
  ```
  assign: SelectedDate = In_InitialDate
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block MyEntertaining_Embedded (flow Calendar)
- public: False
- input parameters: In_InitialEventSouceId: Text (mandatory)
- events: OnNavBack() mandatory
- local variables: PreloadedSource: Text
- lifecycle: OnInitialize → OnInitialize
- used by (UBTConnect): MyEntertaining

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  args: In_IsHideTitle=True, In_IsPrimaryColor=True
  placeholder Content:
    block Embedded_MyEntertaining (UBTConnect_EmbedMyEntertaining.Blocks2)
      args: B2CTenant=Client.Embedd_B2CTenant, Sources=PreloadedSource
      on OnError → Handle_Error(Message=Message)
      on OnNavBack → Handle_NavBack
      on OnOpenMap → Handle_OpenMap(None=Label, Lat=Lat, Lng=Lng)
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Block actions
- **Handle_Error** inputs: Message: Text (mandatory)
  ```
  call FeedbackMessage_AutoClose(Message=Message, MessageType=Entities.UBT_MessageType.Info)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handle_NavBack**
  ```
  trigger event OnNavBack()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handle_OpenMap** inputs: Lat: Text (mandatory); Lng: Text (mandatory)
  ```
  call OpenInApp_OpenExternalLink(InNewTab=True, Url="https://www.google.com/maps/search/?api=1&query=" + Lat + "," + Lng)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  switch
    case In_InitialEventSouceId = Entities.Type_MyCalendarEventSource.Orbit
      assign: PreloadedSource = "orbit"
      end
    case In_InitialEventSouceId = Entities.Type_MyCalendarEventSource.LDM
      assign: PreloadedSource = "ldm"
      end
    case In_InitialEventSouceId = Entities.Type_MyCalendarEventSource.Assemble
      assign: PreloadedSource = "assemble"
      end
    case In_InitialEventSouceId = Entities.Type_MyCalendarEventSource.UserCreated
      assign: PreloadedSource = "personal"
      end
    otherwise
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block Weekday (flow Calendar)
- public: False
- input parameters: Label: Text (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): CalendarHeaderWeekdays, DayList

#### Widget tree
```
container  [style="text-align-center"]
  block CustomContainer (UBTConnectLibrary.BasePatterns)
    args: Options={ TextOptions: { Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold } }
    placeholder Content:
      expr: Label
```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| Block_PINUnlock | App_PIN | `../../App_PIN/pack/blocks.md` | In_ForceVisible: Boolean; In_IsCommonBlock: Boolean | Unlock |
| Block_PINUnlock_ContentWrapper | App_PIN | `../../App_PIN/pack/blocks.md` | UseOverlay: Boolean = True; In_ForceVisible: Boolean; UnlockText: Text = "Enter your PIN code"; ShowNeedHelp: Boolean; isFromMenu: Boolean; ShowForgotPIN: Boolean; ShowPolicy: Boolean (mandatory) | NavigateTo_PINRegister; Unlock |
| CacheControl_CalendarEvents | Calendar_Events | `../../_shared/pack/blocks.md` | CacheKey: Text (mandatory); TimeToLiveSeconds: Integer = 7200; MyCalendarEventSourceIds: Type_MyCalendarEventSource Identifier List (mandatory) | Result |
| Calendar_EventCard | Calendar_Events | `../../_shared/pack/blocks.md` | MyCalendarEventCard: UI_MyCalendarEventCard (mandatory) | - |
| Calendar_NoEvents | Calendar_Events | `../../_shared/pack/blocks.md` | - | - |
| CommonUI_InsideLayout | App_Common | `../../App_Common/pack/blocks.md` | In_ShowLockScreen: Boolean; In_IgnorePolicy: Boolean; In_IgnoreLockScreen: Boolean | Event_OnScreenLocked; Event_OnScreenUnlocked |
| HandleOnResumeOpenLink | Legacy_Share | `../../Legacy_Share/pack/blocks.md` | - | - |
| OfflineDataSyncEvents | App_Common | `../../App_Common/pack/blocks.md` | - | OnSyncComplete; OnSyncError; OnSyncStart |
| Policy_Checker | App_Policies | `../../App_Policies/pack/blocks.md` | - | - |
| SectionSeparator | App_Common_Blocks | `../../_shared/pack/blocks.md` | - | - |
| SubLayout_DirectoryCalendar | SubLayout | `../../_shared/pack/blocks.md` | - | - |
| UnsupportedVersion | App_Common | `../../App_Common/pack/blocks.md` | In_ExtendedClass: Text; In_HideButton: Boolean | Event_NavigateToPlaystore |
| UnsupportedVersion_Browser | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Native | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_WebView | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Wrapper | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| WelcomeToConnect | App_Common | `../../App_Common/pack/blocks.md` | - | - |
