# Pack of UI flow Calendar (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: MyCalendar, MyEntertaining

## Screen MyCalendar (flow Calendar)
- roles: Registered, UBTOne_User; URL structure: QueryString; stylesheet: yes
- input parameters: MyCalendarEventSourceId: Type_MyCalendarEventSource Identifier
- local variables: SelectedDate: Date; SelectedCalendarViewId: CalendarView Identifier; IsInstantScroll: Boolean; IsCalendarMenuOpened: Boolean; IsMonthSelectorOpened: Boolean; MyCalendarEventSourceIds: Type_MyCalendarEventSource Identifier List; IsAllEventSources: Boolean; IsCalendarOnly: Boolean
- lifecycle: OnInitialize → OnInitialize; OnReady → OnReady

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  args: In_ExtendedClass="connect-calendar-layout"
  placeholder Placeholder_Header_Title:
    expr: "My Calendar"\n//If(MyCalendarEventSourceIds = Entities.MyCalendar_EventSource.Assemble,"My ", "") +  GetCalendarScreenTitlePrefix(MyCalendarEventSourceIds) + " Calendar"
  placeholder Placeholder_Header_Right:
    if False  [DEAD BRANCH: condition is a constant]
      link #Icon_Search onclick → IconSearchOnClick
        icon search size=FontSize  [style="icon padding-y-s padding-x-s"]
  placeholder Content:
    if SelectedCalendarViewId <> Entities.CalendarView.Month
      block Calendar_Header (UBTConnect.Calendar)
        args: CalendarViewId=SelectedCalendarViewId, HeaderSourceCount=If(IsAllEventSources,0,\n    If(IsCalendarOnly, -1, MyCalendarEventSourceIds.Length)), SelectedDate=SelectedDate
        on MonthSelectorOnClick → ToggleMonthSelector
        on CalendarViewSelectorOnClick → Toggle_Calendar_MenuOptions
    block SubLayout_DirectoryCalendar (UBTConnect.SubLayout)
      placeholder Placeholder_CalendarContent:
        container  [style="my-calendar-theme"]
          container #Root  [style="calendar-root"]
            if False  [DEAD BRANCH: condition is a constant]
            else
              if SelectedCalendarViewId = Entities.CalendarView.Week or\nSelectedCalendarViewId = Entities.CalendarView.Day #IsWeekOrDayView
                if SelectedCalendarViewId= Entities.CalendarView.Week #ViewIsWeek
                  block CalendarView_WeekWrapper (UBTConnect.Calendar) #Week
                    args: In_EventSourceIds=MyCalendarEventSourceIds, In_InitialDate=SelectedDate, In_IsCalendarOnly=IsCalendarOnly, In_IsInstantScroll=IsInstantScroll, In_RootId=Root.Id
                    on CalendarEventClicked → EventClicked(MyCalendarEventNavigationDataJSON=MyCalendarEventNavigationDataJSON)
                    on DateChanged → UpdateSelectedDate(Date=Date)
                else
                  block CalendarView (UBTConnect.Calendar)
                    args: In_BlockRootId=Root.Id, In_CalendarViewTypeId=Entities.CalendarView.Day, In_InitialDate=SelectedDate, In_IsCalendarOnly=IsCalendarOnly, In_IsInstantScroll=IsInstantScroll, In_ListBuffer=Client.DaysBuffer, In_MyCalendarEventSourceIds=MyCalendarEventSourceIds
                    on CalendarEventClicked → EventClicked(MyCalendarEventNavigationDataJSON=MyCalendarEventNavigationDataJSON)
                    on DateChanged → UpdateSelectedDate(Date=Date)
              else
                block CalendarView_MonthWrapper (UBTConnect.Calendar) #Month
                  args: In_EventSourceIds=MyCalendarEventSourceIds, In_InitialDate=SelectedDate, In_IsCalendarOnly=IsCalendarOnly, In_IsInstantScroll=IsInstantScroll, In_RootId=Root.Id
                  on CalendarEventClicked → EventClicked(MyCalendarEventNavigationDataJSON=MyCalendarEventNavigationDataJSON)
                  on DateChanged → UpdateSelectedDate(Date=Date)
                  placeholder CalendarHeader:
                    block Calendar_Header (UBTConnect.Calendar)
                      args: CalendarViewId=SelectedCalendarViewId, HeaderSourceCount=If(IsAllEventSources,0,\n    If(IsCalendarOnly, -1, MyCalendarEventSourceIds.Length)), SelectedDate=SelectedDate
                      on CalendarViewSelectorOnClick → Toggle_Calendar_MenuOptions
                      on MonthSelectorOnClick → ToggleMonthSelector
    if False  [DEAD BRANCH: condition is a constant]
    else
      container #ViewOptions
        block Calendar_ViewActionMenu (UBTConnect.Calendar)
          args: In_InitialEventSourceId=MyCalendarEventSourceId, IsOpen=IsCalendarMenuOpened
          on ToggleCalendarMenu → Toggle_Calendar_MenuOptions
          on UpdateCalendarView → Calendar_ViewActionMenuUpdateCalendarView(Event_IsAllEventSources=IsAllEventSources, Selected_EventSourceIds=Selected_EventSourceIds, Selected_ViewId=Selected_ViewId)
    container #DIV_MonthPicker  [style="hidden"]
      container  [style="my-calendar-theme"]
        block MonthPicker (UBTConnect.Calendar)
          args: In_InitialDate=SelectedDate, In_IsOpened=IsMonthSelectorOpened, In_MinimumDate=Client.MinimumDate
          on PreventedBackNavigation → ToggleMonthSelector
          on Close → ToggleMonthSelector
          on SelectedMonth → MonthSelectorSelectedMonth(SelectedMonthStartDate=MonthStartDate)
  placeholder Bottom:
    if GetHasPersonalEvents()
      container  [style="text-align-right  footer--auto-height"]
        container
          block CustomContainer (UBTConnectLibrary.BasePatterns)
            args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Primary }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small }, MarginSize: { GeneralSizeId: Entities.UBT_Size.Base }, BorderOptions: { Radius:…
            on Clicked → Handler_CreatePersonalEvent
            placeholder Content:
              block CustomContainer (UBTConnectLibrary.BasePatterns)
                args: Options={ PaddingSize: { GeneralSizeId: Entities.UBT_Size.ExtraSmall } }
                placeholder Content:
                  block Icon (UBTConnectLibrary.ConnectPatterns)
                    args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.Add, In_SizeId=Entities.UBT_IconsSize.Base_24
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **Calendar_ViewActionMenuUpdateCalendarView** inputs: Selected_EventSourceIds: Type_MyCalendarEventSource Identifier List (mandatory); Selected_ViewId: CalendarView Identifier (mandatory); Event_IsAllEventSources: Boolean (mandatory)
  ```
  assign: SelectedCalendarViewId = Selected_ViewId
  assign: MyCalendarEventSourceIds = Selected_EventSourceIds
  assign: IsAllEventSources = Event_IsAllEventSources
  assign: IsCalendarOnly = Selected_EventSourceIds.Empty
  call Toggle_Calendar_MenuOptions()
  end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] if SelectedCalendarViewId = Entities.CalendarView.Month and\nSelected_ViewId = Entities.CalendarView.Month and \n(GetDateOfFirstDayOfMonth(SelectedDate)<>GetDateOfFirstDayOfMonth(CurrDate()))
      [DISABLED] assign: SelectedDate = CurrDate()
    else
    [DISABLED] assign: MyCalendarEventSourceIds = Selected_EventSourceIds
    end
  ```
- **EventClicked** inputs: MyCalendarEventNavigationDataJSON: Text (mandatory)
  ```
  json-deserialize MyCalendarEventNavigationData: MyCalendarEventNavigationDataJSON as MyCalendarEventNavigationData
  if MyCalendarEventNavigationData.Data.SourceId = Entities.Type_MyCalendarEventSource.Orbit
    if MyCalendarEventNavigationData.Data.TypeId = Entities.OrbitMilestoneType.Boat or\nMyCalendarEventNavigationData.Data.TypeId = Entities.OrbitMilestoneType.Train or\nMyCalendarEventNavigationData.Data.TypeId = Entities.OrbitMilestoneType.Vehicle or\nMyCalendarEventNavigationData.Data.TypeId = Entities.OrbitMilestoneType.Flight
      navigate → TransportDetail(In_HeaderClass=MyCalendarEventNavigationData.Data.TransportHeaderClass, In_MilestoneId=MyCalendarEventNavigationData.Data.Id, In_MilestoneName=MyCalendarEventNavigationData.Data.Title, In_OrbitMilestoneTypeId=TextToIdentifier(MyCalendarEventNavigationData.Data.TypeId), In_TargetMemberId=TextToLongInteger(MyCalendarEventNavigationData.Data.MemberId)) transition=Inherited
    else
      navigate → EventDetail(In_EventId=TextToLongInteger(MyCalendarEventNavigationData.Data.Id), In_EventName=MyCalendarEventNavigationData.Data.Title, In_MemberId=TextToLongInteger(MyCalendarEventNavigationData.Data.MemberId)) transition=Inherited
  else
    if MyCalendarEventNavigationData.Data.SourceId = Entities.Type_MyCalendarEventSource.LDM
      call GetHasNewLDM()
      if GetHasNewLDM.Out_HasNewLDM
        navigate → LDM_EventDetail_V2(EventHostId=TextToLongInteger(MyCalendarEventNavigationData.Data.HostId), EventId=LongIntegerToIdentifier(TextToLongInteger(MyCalendarEventNavigationData.Data.Id))) transition=Inherited
      else
        navigate → LDM_EventDetail(EventHostId=TextToLongInteger(MyCalendarEventNavigationData.Data.HostId), EventId=LongIntegerToIdentifier(TextToLongInteger(MyCalendarEventNavigationData.Data.Id))) transition=Inherited
    else
      if MyCalendarEventNavigationData.Data.SourceId = Entities.Type_MyCalendarEventSource.Assemble
        navigate → AssembleDetail(EventId=MyCalendarEventNavigationData.Data.Id, SeriesId=MyCalendarEventNavigationData.Data.ParentId, Start=MyCalendarEventNavigationData.Data.Start) transition=Inherited
      else
        if MyCalendarEventNavigationData.Data.SourceId = Entities.Type_MyCalendarEventSource.UserCreated
          end
        else
          end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] navigate → None(None=MyCalendarEventNavigationData.Id) transition=Inherited
    end
    end
  ```
- **Handler_CreatePersonalEvent**
  ```
  navigate → PersonalEventForm() transition=Inherited
  ```
- **IconSearchOnClick**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **MonthSelectorSelectedMonth** inputs: SelectedMonthStartDate: Date (mandatory)
  ```
  assign: IsInstantScroll = True
  if (Selected current month?) Month(SelectedMonthStartDate) = Month(CurrDate()) and\nYear(SelectedMonthStartDate) = Year(CurrDate())
    assign: SelectedDate = CurrDate()
    [M1] call ToggleMonthSelector()
    end
  else
    assign: SelectedDate = SelectedMonthStartDate
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  javascript IsRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
    | //find me in code
  if (Is Restored From Cache?) IsRestoredFromCache.IsRestoredFromCache
    end
  else
    call RemoveCacheableObject_ByType(MemoryCacheTypeId=TextToIdentifier(Entities.Connect_CacheType.MyCalendarEvents))
    if MyCalendarEventSourceId <> NullTextIdentifier()
      call ListAppend(Element=MyCalendarEventSourceId, List=MyCalendarEventSourceIds)
      [M1] assign: SelectedDate = CurrDate(); SelectedCalendarViewId = Entities.CalendarView.Month
      end
    else
      → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
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
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Toggle_Calendar_MenuOptions**
  ```
  assign: IsCalendarMenuOpened = not IsCalendarMenuOpened
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ToggleMonthSelector**
  ```
  assign: IsMonthSelectorOpened = not IsMonthSelectorOpened
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **UpdateSelectedDate** inputs: Date: Date (mandatory)
  ```
  assign: IsInstantScroll = False
  assign: SelectedDate = Date
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Screen MyEntertaining (flow Calendar)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: MyCalendarEventSourceId: Type_MyCalendarEventSource Identifier
- local variables: -
- lifecycle: none

#### Widget tree
```
block CommonUI_InsideLayout (UBTConnect.App_Common)
block MyEntertaining_Embedded (UBTConnect.Calendar)
  args: In_InitialEventSouceId=MyCalendarEventSourceId
  on OnNavBack → Handle_NavBack
```

#### Screen actions
- **Handle_NavBack**
  ```
  navigate → (Previous Screen)() transition=UseHistory
  ```
