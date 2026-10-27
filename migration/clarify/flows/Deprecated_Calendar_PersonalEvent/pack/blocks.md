# Pack of UI flow Deprecated_Calendar_PersonalEvent (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: ConnectForm_ItemContainer, CustomScrollListWrapper, Indev_AddAttendees, PersonalEventForm_IconContent, PersonalEventForm_LabelContent, PersonalEventForm_TagInput, Picker_Date, Picker_Time, Recurrence_WeekdaysTagList, UserEventDetails_IconTextWrapper, UserEventDetails_InviteeList, UserEventForm_DateTime, UserEventForm_DateTimeWrapper, UserEventForm_Item__Navigate
Blocks of other UBTConnect flows that the flow uses (transitive): 28

## Block ConnectForm_ItemContainer (flow Deprecated_Calendar_PersonalEvent)
- public: False
- input parameters: In_ExtendedClass: Text; In_VerticalPaddingSizeId: UBT_Size Identifier = Entities.UBT_Size.Small
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): PersonalEventForm_IconContent, Recurrence, Recurrence_WeekdaysTagList

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: ExtendedClasses="connect-event-form__item-container " + In_ExtendedClass, Options={ PaddingSize: { VerticalSizeId: In_VerticalPaddingSizeId } }
  placeholder Content:
    placeholder-def Placeholder_Content
    placeholder-def Placenholder_SubContent
```

## Block CustomScrollListWrapper (flow Deprecated_Calendar_PersonalEvent)
- public: False
- input parameters: In_ListElements: CustomScrollListElement List (mandatory); In_ExtendedClass: Text; In_VisibleItemCount: Integer = 3; In_IsCircular: Boolean = True; In_StartElementIndex: Integer
- events: Event_SelectedItem(Event_ItemId: Text (mandatory)) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): Picker_Time, Recurrence

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: ExtendedClasses="connect-custom-scroll-list", Options={ TextOptions: { FontSize: Entities.UBT_FontSize.Heading5, FontWeight: Entities.UBT_FontWeight.SemiBold }, DisplayOptions: { Display: Entities.UBT_Display.Flex, JustifyContent: Entities.UBT_JustifyCo…
  placeholder Content:
    container  [style="text-align-center"]
      block CustomScrollList (UBTConnectLibrary.ConnectPatterns)
        args: In_ExtendedClass=In_ExtendedClass, In_IsCircular=In_IsCircular, In_ListElements=In_ListElements, In_StartElementIndex=In_StartElementIndex, In_VisibleItemCount=In_VisibleItemCount
        on Event_SelectedItem → Event_SelectedItem(Event_ItemId=Event_SelectedItemId)
    placeholder-def Separator
```

## Block Indev_AddAttendees (flow Deprecated_Calendar_PersonalEvent)
- public: False
- input parameters: In_IsOpen: Boolean (mandatory)
- events: Event_CloseAddInviteesSheet() mandatory
- local variables: SearchKey: Text; InviteeHouseholds: SearchResult List; SearchResults: SearchResult List
- lifecycle: OnParametersChanged → ScreenEvent_OnParametersChanged
- used by (UBTConnect): PersonalEventForm

#### Data sources
- data action **GetSearchHouseholds** fetch=AtStart; outputs: Out_Households: SearchResult List; OnAfterFetch → OnAfterFetch_GetSearchHouseholds
  ```
  if SearchKey <> ""
    call-server Connect_Search(Category=Entities.Connect_SearchCategories.Households, CountryCode="", SearchKey=SearchKey)
    assign: Out_Households = Connect_Search.Households
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

#### Widget tree
```
list source=InviteeHouseholds mode=Default  [style="list list-group"]
  block SearchResult_Item (UBTConnect_Utils.CW_Search)
    args: In_SearchResult=InviteeHouseholds.Current, In_SearchTerm=""
    on OnClick → Handler_OnClickInvitee(SearchResult=SearchResult)
    placeholder Placeholder_Actions:
      block Icon (UBTConnectLibrary.ConnectPatterns)
        args: In_ColorId=Entities.UBT_Color.Neutral7, In_IconId=Entities.UBT_Icons2.CancelFill, In_SizeId=Entities.UBT_IconsSize.Base_24
        on Click → Handler_RemoveAttendee
block SearchSheet_Entity_UnderDev (UBTConnect_Utils.CW_ShearchSheet)
  args: In_ActionLabel="Add Invitees", In_EntityTypeId=Entities.Connect_Entity.Household, In_IsLegacy=False, In_IsLoading=not GetSearchHouseholds.IsDataFetched, In_IsOpen=In_IsOpen, In_SearchResults=ConvertList(SearchResults,  {"SearchResult.Score":"Score","SearchResult.Id":"Id","SearchResult.HouseholderId":"HouseholderId","SearchResult.Name":"Name","SearchResult.AdditionalInformation":"Addition…, In_SelectedLabel="Inviting"
  on Event_ActionTriggered → Handler_AddInvitees(Event_SelectedResults=Event_SelectedResults)
  on Event_SubmitSearchString → Handler_SubmitSearchString(Event_SearchString=Event_SearchString)
  on Event_ClosedShareSheet → Handler_ClosedShareSheet
```

#### Block actions
- **Handler_AddInvitees** inputs: Event_SelectedResults: SelectableSearchResultList List (mandatory)
  ```
  call ListAppendAll(List=InviteeHouseholds, SourceList=ConvertList(Event_SelectedResults,  {Value:"SearchResult"}))
  trigger event Event_CloseAddInviteesSheet()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_ClosedShareSheet**
  ```
  trigger event Event_CloseAddInviteesSheet()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnClickInvitee** inputs: SearchResult: SearchResult (mandatory)
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_RemoveAttendee**
  ```
  call ListRemove(List=InviteeHouseholds, Position=InviteeHouseholds.CurrentRowNumber)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_SubmitSearchString** inputs: Event_SearchString: Text (mandatory)
  ```
  call ListClear(List=SearchResults)
  assign: SearchKey = Event_SearchString
  refresh data GetSearchHouseholds
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch_GetSearchHouseholds**
  ```
  [M1] for each GetSearchHouseholds.Out_Households
    call ListIndexOf(Condition=Id = GetSearchHouseholds.Out_Households.Current.Id, List=InviteeHouseholds)
    if ListIndexOf.Position <> -1
      → continues at [M1]
    else
      call ListAppend(Element=GetSearchHouseholds.Out_Households.Current, List=SearchResults)
      → continues at [M1]
  end for
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnParametersChanged**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] if In_IsOpen
      [DISABLED] call BottomSheetOpen(WidgetId=BottomSheetId)
    else
    end
  ```

## Block PersonalEventForm_IconContent (flow Deprecated_Calendar_PersonalEvent)
- public: False
- input parameters: In_LeftIconId: UBT_Icons2 Identifier
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): PersonalEventForm, UserEventForm_DateTimeWrapper, UserEventForm_Item__Navigate

#### Widget tree
```
block ConnectForm_ItemContainer (UBTConnect.Deprecated_Calendar_PersonalEvent)
  args: In_ExtendedClass="connect-event-form__item"
  placeholder Placeholder_Content:
    block Columns_Three (UBTConnectLibrary.BasePatterns)
      args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ExpandMiddle, SpacingSize: Entities.UBT_Size.Base, VerticalAlign: Entities.UBT_VerticalAlign.Center, ColumnSizes: { Left: 24 } }
      placeholder Left:
        if In_LeftIconId <> NullTextIdentifier()
          block Icon (UBTConnectLibrary.ConnectPatterns)
            args: In_ColorId=Entities.UBT_Color.Neutral10, In_IconId=In_LeftIconId
      placeholder Middle:
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ TextOptions: { Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small } }
          placeholder Content:
            placeholder-def Placeholder_Content
      placeholder Right:
        placeholder-def Placeholder_ContentRight
  placeholder Placenholder_SubContent:
    placeholder-def Placeholder_FullWidthContent
```

## Block PersonalEventForm_LabelContent (flow Deprecated_Calendar_PersonalEvent)
- public: False
- input parameters: In_IsDefaultLabel: Boolean (mandatory); In_IsDefaultContent: Boolean
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): PersonalEventForm, Recurrence, UserEventForm_DateTime

#### Widget tree
```
block Columns_Two (UBTConnectLibrary.BasePatterns)
  args: ColumnOptions={ SpacingSize: Entities.UBT_Size.None, VerticalAlign: Entities.UBT_VerticalAlign.Center }
  placeholder Left:
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ TextOptions: { Color: If(In_IsDefaultLabel,\n    Entities.UBT_Color.Neutral7,\n    Entities.UBT_Color.Neutral10\n)\n } }
      placeholder Content:
        placeholder-def Placeholder_Left
  placeholder Right:
    container  [style="text-align-right"]
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ TextOptions: { Color: If(In_IsDefaultContent,\n    Entities.UBT_Color.Neutral7,\n    Entities.UBT_Color.Neutral10\n)\n } }
        placeholder Content:
          placeholder-def Placeholder_Right
placeholder-def Placeholder_FullWidthContent
```

## Block PersonalEventForm_TagInput (flow Deprecated_Calendar_PersonalEvent)
- public: False
- input parameters: In_Value: Text (mandatory); In_IsActive: Boolean; In_IsError: Boolean
- events: OnClick()
- local variables: -
- lifecycle: none
- used by (UBTConnect): Recurrence, UserEventForm_DateTime

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral3 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small }, MarginSize: { LeftSizeId: Entities.UBT_Size.Small }, BorderOptions: { Radius: …
  on Clicked → OnClick
  placeholder Content:
    expr: In_Value
```

## Block Picker_Date (flow Deprecated_Calendar_PersonalEvent)
- public: False
- input parameters: In_InitialDate: Date (mandatory); In_MinimumDate: Date (mandatory); In_MaximumDate: Date
- events: Event_SelectedDate(Event_SelectedDate: Date (mandatory))
- local variables: SelectedDate: Date; IsInstantScroll: Boolean; IsMonthSelectorOpened: Boolean
- lifecycle: OnInitialize → ScreenEvent_OnInitialize
- used by (UBTConnect): Recurrence, UserEventForm_DateTimeWrapper

#### Widget tree
```
container #Root  [style="calendar-root calendar-datepicker"]
  block CustomContainer (UBTConnectLibrary.BasePatterns)
    args: Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base, BottomSizeId: Entities.UBT_Size.ExtraSmall } }
    placeholder Content:
      block Columns_Two (UBTConnectLibrary.BasePatterns)
        args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast, VerticalAlign: Entities.UBT_VerticalAlign.Center }
        placeholder Left:
          container  [on onclick → Handler_ToggleMonthSelector]
            block Calendar_Header_SelectedDate (UBTConnect.Calendar)
              args: SelectedDate=SelectedDate
              placeholder Placeholder_Icon:
                block CustomContainer (UBTConnectLibrary.BasePatterns)
                  args: Options={ MarginSize: { RightSizeId: Entities.UBT_Size.ExtraSmall } }
                  placeholder Content:
                    block Icon (UBTConnectLibrary.ConnectPatterns)
                      args: In_ColorId=Entities.UBT_Color.Primary, In_IconId=Entities.UBT_Icons2.CalendarFill, In_SizeId=Entities.UBT_IconsSize.Medium_20
        placeholder Right:
          block Columns_Two (UBTConnectLibrary.BasePatterns) #Block_UpdateMonth
            args: ColumnOptions={ SpacingSize: Entities.UBT_Size.Small, VerticalAlign: Entities.UBT_VerticalAlign.Center }
            placeholder Left:
              block Icon (UBTConnectLibrary.ConnectPatterns)
                args: In_ColorId=Entities.UBT_Color.Neutral7, In_ExtendedClasses=If(In_MinimumDate <> NullDate() and GetDateOfLastDayOfMonth(AddMonths(SelectedDate,-1)) < In_MinimumDate,\n    "visibility-hidden",\n    ""), In_IconId=Entities.UBT_Icons2.ChevronLeft, In_SizeId=Entities.UBT_IconsSize.Base_24
                on Click → OnClick_HeaderUpdateMonth(IsForward=False)
            placeholder Right:
              block Icon (UBTConnectLibrary.ConnectPatterns)
                args: In_ColorId=Entities.UBT_Color.Neutral7, In_ExtendedClasses=If(In_MaximumDate <> NullDate() and GetDateOfFirstDayOfMonth(AddMonths(SelectedDate,1)) > In_MaximumDate,\n    "visibility-hidden",\n    ""), In_IconId=Entities.UBT_Icons2.ChevronRight, In_SizeId=Entities.UBT_IconsSize.Base_24
                on Click → OnClick_HeaderUpdateMonth(IsForward=True)
  block CalendarView (UBTConnect.Calendar)
    args: In_BlockRootId=Root.Id, In_CalendarViewTypeId=Entities.CalendarView.Month, In_InitialDate=SelectedDate, In_IsCalendarOnly=True, In_IsInstantScroll=IsInstantScroll, In_ListBuffer=Client.MonthsBuffer, In_MaximumDate=In_MaximumDate, In_MinimumDate=In_MinimumDate
    on DateChanged → Handler_DateSelected(Date=Date)
  placeholder-def Placeholder_Info
  container #DIV_MonthPicker  [style="hidden"]
    container  [style="my-calendar-theme"]
      block MonthPicker (UBTConnect.Calendar)
        args: In_InitialDate=SelectedDate, In_IsOpened=IsMonthSelectorOpened, In_MaximumDate=In_MaximumDate, In_MinimumDate=In_MinimumDate
        on Close → Handler_ToggleMonthSelector
        on SelectedMonth → Handler_MonthSelectorMonthSelected(SelectedMonthStartDate=MonthStartDate)
        on PreventedBackNavigation → Handler_ToggleMonthSelector
```

#### Block actions
- **Action_UpdateMonth** inputs: DateInMonth: Date (mandatory)
  ```
  if (Selected current month?) Month(DateInMonth) = Month(CurrDate()) and\nYear(DateInMonth) = Year(CurrDate())
    assign: SelectedDate = CurrDate()
    end
  else
    assign: SelectedDate = GetDateOfFirstDayOfMonth(DateInMonth)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_DateSelected** inputs: Date: Date (mandatory)
  ```
  assign: IsInstantScroll = False
  assign: SelectedDate = Date
  trigger event Event_SelectedDate(Event_SelectedDate=SelectedDate)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_MonthSelectorMonthSelected** inputs: SelectedMonthStartDate: Date (mandatory)
  ```
  assign: IsInstantScroll = True
  call Action_UpdateMonth(DateInMonth=SelectedMonthStartDate)
  call Handler_ToggleMonthSelector()
  trigger event Event_SelectedDate(Event_SelectedDate=SelectedDate)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_ToggleMonthSelector**
  ```
  assign: IsMonthSelectorOpened = not IsMonthSelectorOpened
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_HeaderUpdateMonth** inputs: IsForward: Boolean (mandatory)
  ```
  assign: IsInstantScroll = True
  if IsForward
    call Action_UpdateMonth(DateInMonth=AddMonths(SelectedDate,1)) as Action_UpdateMonth_Next
    end
  else
    call Action_UpdateMonth(DateInMonth=AddMonths(SelectedDate,-1)) as Action_UpdateMonth_Prev
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  assign: SelectedDate = In_InitialDate
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Picker_Time (flow Deprecated_Calendar_PersonalEvent)
- public: False
- input parameters: In_ExtendedClass: Text; In_StartTime: Time (mandatory); In_MinutesInterval: Integer = 5
- events: Event_SelectedTime(Event_Time: Time (mandatory))
- local variables: HoursOptions: CustomScrollListElement List; MinutesOptions: CustomScrollListElement List; MeridiemOptions: CustomScrollListElement List; MeridiemStartIndex: Integer; SelectedHours: Text; SelectedMinutes: Text; SelectedMeridiem: Text
- lifecycle: OnInitialize → ScreenEvent_OnInitialize
- used by (UBTConnect): UserEventForm_DateTimeWrapper

#### Widget tree
```
container  [style="text-align-center connect-time-picker " + In_ExtendedClass]
  container
    block CustomScrollListWrapper (UBTConnect.Deprecated_Calendar_PersonalEvent)
      args: In_ListElements=HoursOptions
      on Event_SelectedItem → Handler_SelectedHours(Event_ItemId=Event_ItemId)
      placeholder Separator:
        expr: ":"
  container
    block CustomScrollListWrapper (UBTConnect.Deprecated_Calendar_PersonalEvent)
      args: In_ListElements=MinutesOptions
      on Event_SelectedItem → Handler_SelectedMinutes(Event_ItemId=Event_ItemId)
  container
    block CustomScrollListWrapper (UBTConnect.Deprecated_Calendar_PersonalEvent)
      args: In_IsCircular=False, In_ListElements=MeridiemOptions, In_StartElementIndex=MeridiemStartIndex
      on Event_SelectedItem → Handler_SelectedMeridiem(Event_ItemId=Event_ItemId)
```

#### Block actions
- **Action_SelectedTime**; locals: SelectedTime: Time
  ```
  assign: SelectedTime = NewTime(TextToInteger(SelectedHours),TextToInteger(SelectedMinutes),0)
  if (ToLower(SelectedMeridiem) = "pm" and SelectedHours <> "12") or\n(ToLower(SelectedMeridiem) = "am"  and SelectedHours = "12")
    assign: SelectedTime = AddHours(SelectedTime,12)
    [M1] trigger event Event_SelectedTime(Event_Time=SelectedTime)
    end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_SelectedHours** inputs: Event_ItemId: Text (mandatory)
  ```
  assign: SelectedHours = Event_ItemId
  call Action_SelectedTime()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_SelectedMeridiem** inputs: Event_ItemId: Text (mandatory)
  ```
  assign: SelectedMeridiem = Event_ItemId
  call Action_SelectedTime()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_SelectedMinutes** inputs: Event_ItemId: Text (mandatory)
  ```
  assign: SelectedMinutes = Event_ItemId
  call Action_SelectedTime()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**; locals: Index: Integer
  ```
  [M1] if Index < 12
    call ListAppend(Element={ Id: FormatDateTime(AddHours(In_StartTime,Index),"hh"), Label: FormatDateTime(AddHours(In_StartTime,Index),"hh") }, List=HoursOptions) as ListAppend_HoursList
    assign: Index = Index + 1
    → continues at [M1]
  else
    assign: Index = 0
    [M2] if Index < (60/In_MinutesInterval)
      call ListAppend(Element={ Id: FormatDateTime(AddMinutes(In_StartTime,Index*In_MinutesInterval),"mm"), Label: FormatDateTime(AddMinutes(In_StartTime,Index*In_MinutesInterval),"mm") }, List=MinutesOptions) as ListAppend_Minutes
      assign: Index = Index + 1
      → continues at [M2]
    else
      call ListAppendAll(List=MeridiemOptions, SourceList=[ { Id: "AM", Label: "AM" }, { Id: "PM", Label: "PM" } ])
      if Hour(In_StartTime) >= 12
        assign: MeridiemStartIndex = 1; SelectedMeridiem = "PM"
        [M3] assign: SelectedHours = HoursOptions.Current.Id; SelectedMinutes = MinutesOptions.Current.Id
        end
      else
        assign: SelectedMeridiem = MeridiemOptions.Current.Id
        → continues at [M3]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Recurrence_WeekdaysTagList (flow Deprecated_Calendar_PersonalEvent)
- public: False
- input parameters: In_SelectedDaysOfWeek: Text List (mandatory)
- events: Event_UpdatedSelectedDaysOfWeek(Event_SelectedDaysOfWeekIds: DayOfWeek Identifier List (mandatory)) mandatory
- local variables: DaysOfWeek: DayOfWeek, IsSelected Record List
- lifecycle: OnInitialize → ScreenEvent_OnInitialize
- used by (UBTConnect): Recurrence

#### Widget tree
```
block ConnectForm_ItemContainer (UBTConnect.Deprecated_Calendar_PersonalEvent)
  placeholder Placeholder_Content:
    block HorizontalTagList (UBTConnectLibrary.ConnectPatterns)
      args: ExtendedClasses="connect-weekdays-tag-list", In_IsMandatorySelection=True, In_TagToggleList=ConvertList(DaysOfWeek,  {Text:"DayOfWeek.WeekdayLabel.Initials",Identifier:"DayOfWeek.Type_DayOfWeekId",IsSelected:"IsSelected"})
      on Changed → EventHandler_UpdateDaysOfWeekList(Event_UpdatedTagList=UpdatedTagList)
```

#### Block actions
- **EventHandler_UpdateDaysOfWeekList** inputs: Event_UpdatedTagList: Tag List (mandatory)
  ```
  call ListFilter(Condition=IsSelected, SourceList=Event_UpdatedTagList)
  trigger event Event_UpdatedSelectedDaysOfWeek(Event_SelectedDaysOfWeekIds=ConvertList(ListFilter.FilteredList,  {Value:"TextToIdentifier(Identifier)"}))
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**; locals: DayOfWeekIds: DayOfWeek Identifier List
  ```
  call ListAppendAll(List=DayOfWeekIds, SourceList=[ Entities.DayOfWeek.Sunday, Entities.DayOfWeek.Monday, Entities.DayOfWeek.Tuesday, Entities.DayOfWeek.Wednesday, Entities.DayOfWeek.Thursday, Entities.DayOfWeek.Friday, Entities.DayOfWeek.Saturday ])
  [M1] for each DayOfWeekIds
    call Get_LookupRecurrenceDayOfWeek(In_TypeDayOfWeekId=DayOfWeekIds.Current) as Get_LookupDayOfWeek
    call ListIndexOf(Condition=Value = DayOfWeekIds.Current, List=In_SelectedDaysOfWeek)
    call ListAppend(Element={ DayOfWeek: Get_LookupDayOfWeek.Out_LookupRecurrenceDayOfWeek, IsSelected: ListIndexOf.Position <> -1 }, List=DaysOfWeek)
    → continues at [M1]
  end for
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block UserEventDetails_IconTextWrapper (flow Deprecated_Calendar_PersonalEvent)
- public: False
- input parameters: In_Text: Text (mandatory); In_Subtext: Text; In_IconId: UBT_Icons2 Identifier (mandatory); In_TextColor: UBT_Color Identifier = Entities.UBT_Color.Neutral10; In_IsUnderlined: Boolean
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): PersonalEventDetails

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small } }
  placeholder Content:
    block IconText (UBTConnectLibrary.ConnectPatterns)
      args: In_Subtext=In_Subtext, SpacingSize=Entities.UBT_Size.Small, SubtextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.DoubleExtraSmall }, Text=In_Text, TextOptions={ Color: In_TextColor, FontSize: Entities.UBT_FontSize.ExtraSmall, IsUnderlined: In_IsUnderlined }
      placeholder Icon:
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Small } }
          placeholder Content:
            block Icon (UBTConnectLibrary.ConnectPatterns)
              args: In_ColorId=Entities.UBT_Color.Neutral10, In_IconId=In_IconId, In_SizeId=Entities.UBT_IconsSize.Base_24
```

## Block UserEventDetails_InviteeList (flow Deprecated_Calendar_PersonalEvent)
- public: False
- input parameters: In_MemberName: Text (mandatory); In_RSVPStatusId: Type_RSVPStatus Identifier (mandatory); In_MemberId: Text (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): PersonalEventDetails

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color: Entities.UBT_Color.Neutral3, Size: { BottomSizeId: Entities.UBT_Size.Small } } }
  placeholder Content:
    block Columns_Three (UBTConnectLibrary.BasePatterns)
      args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ExpandMiddle, SpacingSize: Entities.UBT_Size.Small, VerticalAlign: Entities.UBT_VerticalAlign.Center }
      placeholder Left:
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ DisplayOptions: { Display: Entities.UBT_Display.Flex } }
          placeholder Content:
            block UBT_LazyImage (UBTConnect_Utils.CW_Image)
              args: EntityId=In_MemberId, EntityType=Entities.Connect_Entity.Member, ImageSize={ Height: Entities.UBT_ImageSize.Small_40, Width: Entities.UBT_ImageSize.Square }
      placeholder Middle:
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ TextOptions: { Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.ExtraSmall } }
          placeholder Content:
            expr: In_MemberName
      placeholder Right:
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ TextOptions: { Color: Get_LookupRSVPStatus(In_RSVPStatusId).Color, FontSize: Entities.UBT_FontSize.Small } }
          placeholder Content:
            expr: In_RSVPStatusId
```

## Block UserEventForm_DateTime (flow Deprecated_Calendar_PersonalEvent)
- public: False
- input parameters: In_HideDate: Boolean; In_HideTime: Boolean; In_DateTime: Date Time (mandatory); In_Label: Text (mandatory); In_IsDefaultValue: Boolean (mandatory); In_IsDateActive: Boolean (mandatory); In_IsTimeActive: Boolean (mandatory); In_IsInvalidDate: Boolean; In_IsInvalidTime: Boolean
- events: OnClick_DateTag() mandatory; OnClick_TimeTag() mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): UserEventForm_DateTimeWrapper

#### Widget tree
```
block PersonalEventForm_LabelContent (UBTConnect.Deprecated_Calendar_PersonalEvent)
  args: In_IsDefaultContent=In_IsDefaultValue, In_IsDefaultLabel=False
  placeholder Placeholder_Left:
    expr: In_Label
  placeholder Placeholder_Right:
    container  [visible=not In_HideDate]
      block PersonalEventForm_TagInput (UBTConnect.Deprecated_Calendar_PersonalEvent)
        args: In_IsActive=In_IsDateActive, In_IsError=In_IsInvalidDate, In_Value=FormatDateTime(In_DateTime, "dd MMM, yyyy")
        on OnClick → OnClick_DateTag
    container  [visible=not In_HideTime]
      block PersonalEventForm_TagInput (UBTConnect.Deprecated_Calendar_PersonalEvent)
        args: In_IsActive=In_IsTimeActive, In_IsError=In_IsInvalidTime, In_Value=FormatDateTime(In_DateTime, "hh:mm ") + ToLower(FormatDateTime(In_DateTime, "tt"))
        on OnClick → OnClick_TimeTag
```

## Block UserEventForm_DateTimeWrapper (flow Deprecated_Calendar_PersonalEvent)
- public: False
- input parameters: In_HideDate: Boolean; In_HideTime: Boolean; In_DateTime: Date Time (mandatory); In_Label: Text (mandatory); In_IsDefaultValue: Boolean (mandatory); In_MinimumDate: Date; In_MaximumDate: Date; In_ShowDatePicker: Boolean; In_ShowTimePicker: Boolean; In_TimePickerMinuteInerval: Integer (mandatory); In_MinimumTime: Time
- events: Event_SelectedDate(Event_Date: Date (mandatory)) mandatory; Event_SelectedTime(Event_Time: Time (mandatory)) mandatory; OnClick_DateTag() mandatory; OnClick_TimeTag() mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): PersonalEventForm

#### Widget tree
```
block PersonalEventForm_IconContent (UBTConnect.Deprecated_Calendar_PersonalEvent) #Block_Start
  placeholder Placeholder_Content:
    block UserEventForm_DateTime (UBTConnect.Deprecated_Calendar_PersonalEvent)
      args: In_DateTime=In_DateTime, In_HideDate=In_HideDate, In_HideTime=In_HideTime, In_IsDateActive=In_ShowDatePicker, In_IsDefaultValue=In_IsDefaultValue, In_IsInvalidDate=DateTimeToDate(In_DateTime) < In_MinimumDate, In_IsInvalidTime=DateTimeToDate(In_DateTime) <= In_MinimumDate and\nDateTimeToTime(In_DateTime) <= In_MinimumTime, In_IsTimeActive=In_ShowTimePicker, In_Label=In_Label
      on OnClick_TimeTag → OnClick_TimeTag
      on OnClick_DateTag → OnClick_DateTag
  placeholder Placeholder_FullWidthContent:
    if In_ShowDatePicker #IsShowDatePicker
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ PaddingSize: { TopSizeId: Entities.UBT_Size.Base, BottomSizeId: Entities.UBT_Size.Small }, MarginSize: { TopSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color: Entities.UBT_Color.Neutral5, S…
        placeholder Content:
          block Picker_Date (UBTConnect.Deprecated_Calendar_PersonalEvent)
            args: In_InitialDate=In_DateTime, In_MaximumDate=In_MaximumDate, In_MinimumDate=In_MinimumDate
            on Event_SelectedDate → Event_SelectedDate(Event_Date=Event_SelectedDate)
    if In_ShowTimePicker #IsShowTimePicker
      block Picker_Time (UBTConnect.Deprecated_Calendar_PersonalEvent)
        args: In_MinutesInterval=In_TimePickerMinuteInerval, In_StartTime=In_DateTime
        on Event_SelectedTime → Event_SelectedTime(Event_Time=Event_Time)
```

## Block UserEventForm_Item__Navigate (flow Deprecated_Calendar_PersonalEvent)
- public: False
- input parameters: In_LeftIconId: UBT_Icons2 Identifier
- events: Event_OnClick_Navigate() mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): PersonalEventForm

#### Widget tree
```
block PersonalEventForm_IconContent (UBTConnect.Deprecated_Calendar_PersonalEvent)
  args: In_LeftIconId=In_LeftIconId
  placeholder Placeholder_Content:
    placeholder-def Placeholder_Content
  placeholder Placeholder_ContentRight:
    block Icon (UBTConnectLibrary.ConnectPatterns) #IconNavigate
      args: In_ColorId=Entities.UBT_Color.Neutral7, In_IconId=Entities.UBT_Icons2.ChevronRight
      on Click → Event_OnClick_Navigate
  placeholder Placeholder_FullWidthContent:
    placeholder-def Placeholder_FullContent
```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| Block_PINUnlock | App_PIN | `../../App_PIN/pack/blocks.md` | In_ForceVisible: Boolean; In_IsCommonBlock: Boolean | Unlock |
| Block_PINUnlock_ContentWrapper | App_PIN | `../../App_PIN/pack/blocks.md` | UseOverlay: Boolean = True; In_ForceVisible: Boolean; UnlockText: Text = "Enter your PIN code"; ShowNeedHelp: Boolean; isFromMenu: Boolean; ShowForgotPIN: Boolean; ShowPolicy: Boolean (mandatory) | NavigateTo_PINRegister; Unlock |
| CacheControl_CalendarEvents | Calendar_Events | `../../_shared/pack/blocks.md` | CacheKey: Text (mandatory); TimeToLiveSeconds: Integer = 7200; MyCalendarEventSourceIds: Type_MyCalendarEventSource Identifier List (mandatory) | Result |
| CacheControl_Calendar_Coordinator | Calendar | `../../Calendar/pack/blocks.md` | In_CacheKeys: Text List (mandatory); In_MyCalendarEventSourceIds: Type_MyCalendarEventSource Identifier List (mandatory) | Result |
| CalendarDays | Calendar | `../../Calendar/pack/blocks.md` | In_Day: Date (mandatory); In_IsLoading: Boolean (mandatory); In_CacheControl_Response: CacheControl_CalendarEvents (mandatory); In_IsSublist: Boolean (mandatory); In_IsCalendarOnly: Boolean (mandatory) | CalendarEventClicked |
| CalendarHeaderWeekdays | Calendar | `../../Calendar/pack/blocks.md` | - | - |
| CalendarMonths | Calendar | `../../Calendar/pack/blocks.md` | DayInMonth: Date (mandatory); SelectedDate: Date (mandatory); MinimumDate: Date (mandatory); IsCalendarOnly: Boolean (mandatory); In_CacheControl_Response: CacheControl_CalendarEvents (mandatory); In_IsLoading: Boolean (mandatory); In_MaximumDate: Date | DayClicked |
| CalendarView | Calendar | `../../Calendar/pack/blocks.md` | In_BlockRootId: Text (mandatory); In_InitialDate: Date; In_CalendarViewTypeId: CalendarView Identifier (mandatory); In_ListBuffer: Integer (mandatory); In_MinimumDate: Date; In_MyCalendarEventSourceIds: Type_MyCalendarEventSource Identifier List; In_IsInstantScroll: Boolean (mandatory); In_IsSublist: Boolean; In_IsCalendarOnly: Boolean (mandatory); In_MaximumDate: Date | CalendarEventClicked; DateChanged |
| CalendarWeeks | Calendar | `../../Calendar/pack/blocks.md` | In_DayInWeek: Date (mandatory); In_SelectedDate: Date (mandatory); In_MinimumDate: Date (mandatory); In_IsLoading: Boolean (mandatory); In_CacheControl_Response: CacheControl_CalendarEvents (mandatory); In_IsCalendarOnly: Boolean (mandatory); In_MaximumDate: Date | DateChanged |
| Calendar_EventCard | Calendar_Events | `../../_shared/pack/blocks.md` | MyCalendarEventCard: UI_MyCalendarEventCard (mandatory) | - |
| Calendar_Header_SelectedDate | Calendar | `../../Calendar/pack/blocks.md` | SelectedDate: Date (mandatory) | - |
| Calendar_NoEvents | Calendar_Events | `../../_shared/pack/blocks.md` | - | - |
| CommonUI_InsideLayout | App_Common | `../../App_Common/pack/blocks.md` | In_ShowLockScreen: Boolean; In_IgnorePolicy: Boolean; In_IgnoreLockScreen: Boolean | Event_OnScreenLocked; Event_OnScreenUnlocked |
| DayList | Calendar | `../../Calendar/pack/blocks.md` | In_DayList: UI_MyCalendar_Day List (mandatory); In_IsLoading: Boolean (mandatory); In_SelectedDate: Date (mandatory); In_MinimumDate: Date (mandatory); In_ShowWeekday: Boolean; In_IsCalendarOnly: Boolean (mandatory); In_MaximumDate: Date | DayClicked |
| EventList | Calendar | `../../Calendar/pack/blocks.md` | SelectedDate: Date (mandatory); CalendarViewIdentifier: CalendarView Identifier (mandatory); IsFixedHeigh: Boolean; In_CacheControl_Response: CacheControl_CalendarEvents (mandatory); In_IsLoading: Boolean (mandatory); HideHeader: Boolean; In_IsSublist: Boolean (mandatory); In_IsCalendarOnly: Boolean (mandatory) | CalendarEventClicked |
| HandleOnResumeOpenLink | Legacy_Share | `../../Legacy_Share/pack/blocks.md` | - | - |
| LayoutBlank | App_Common | `../../App_Common/pack/blocks.md` | ExtendedClass: Text; EnableAccessibilityFeatures: Boolean | OnSyncComplete; OnSyncError; OnSyncStart |
| MonthPicker | Calendar | `../../Calendar/pack/blocks.md` | In_InitialDate: Date (mandatory); In_IsOpened: Boolean (mandatory); In_MinimumDate: Date (mandatory); In_MaximumDate: Date | Close; PreventedBackNavigation; SelectedMonth |
| OfflineDataSyncEvents | App_Common | `../../App_Common/pack/blocks.md` | - | OnSyncComplete; OnSyncError; OnSyncStart |
| Policy_Checker | App_Policies | `../../App_Policies/pack/blocks.md` | - | - |
| SectionSeparator | App_Common_Blocks | `../../_shared/pack/blocks.md` | - | - |
| UnsupportedVersion | App_Common | `../../App_Common/pack/blocks.md` | In_ExtendedClass: Text; In_HideButton: Boolean | Event_NavigateToPlaystore |
| UnsupportedVersion_Browser | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Native | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_WebView | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Wrapper | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| Weekday | Calendar | `../../Calendar/pack/blocks.md` | Label: Text (mandatory) | - |
| WelcomeToConnect | App_Common | `../../App_Common/pack/blocks.md` | - | - |
