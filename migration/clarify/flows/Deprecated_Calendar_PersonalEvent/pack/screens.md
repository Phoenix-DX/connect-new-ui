# Pack of UI flow Deprecated_Calendar_PersonalEvent (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: PersonalEventDetails, PersonalEventForm, Recurrence, Reminder, ViewEventList

## Screen PersonalEventDetails (flow Deprecated_Calendar_PersonalEvent)
- roles: Registered, UBTOne_User; URL structure: QueryString; stylesheet: yes
- input parameters: In_PersonalEventId: Text (mandatory)
- local variables: -
- lifecycle: OnInitialize → ScreenEvent_OnInitialize

#### Data sources
- data action **GetPersonalEvent** fetch=AtStart; outputs: Out_PersonalEvent: UI_PersonalEvent
  ```
  call-server PersonalEvent_Get(In_PersonalEventId=In_PersonalEventId)
  assign: Out_PersonalEvent = PersonalEvent_Get.Out_PersonalEvent
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  args: In_AlignTitleLeft=True, In_IsPrimaryColor=False
  placeholder Placeholder_Header_Title:
    expr: "Personal Events"
  placeholder Placeholder_Header_Right:
    block Icon (UBTConnectLibrary.ConnectPatterns)
      args: In_IconId=Entities.UBT_Icons2.Edit
  placeholder Content:
    block CustomContainer (UBTConnectLibrary.BasePatterns) #Content
      args: Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base, BottomSizeId: Entities.UBT_Size.Base } }
      placeholder Content:
        block CustomContainer (UBTConnectLibrary.BasePatterns) #Title
          args: Options={ TextOptions: { Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Heading5, FontWeight: Entities.UBT_FontWeight.SemiBold } }
          placeholder Content:
            expr: GetPersonalEvent.Out_PersonalEvent.Title
        block UserEventDetails_IconTextWrapper (UBTConnect.Deprecated_Calendar_PersonalEvent) #EventDate
          args: In_IconId=Entities.UBT_Icons2.EventNote, In_Text=GetConnectWeekdayLabel_ByDate(GetPersonalEvent.Out_PersonalEvent.StartDateTime).LongLabel + ", " + FormatDateTime(GetPersonalEvent.Out_PersonalEvent.StartDateTime,"d MMMM yyyy")
        block UserEventDetails_IconTextWrapper (UBTConnect.Deprecated_Calendar_PersonalEvent)
          args: In_IconId=Entities.UBT_Icons2.Schedule, In_Text=If(GetPersonalEvent.Out_PersonalEvent.IsAllDay,\n    "All day",\n    ToLower(FormatDateTime(GetPersonalEvent.Out_PersonalEvent.StartDateTime,"h:mm tt - ") + FormatDateTime(GetPersonalEvent.Out_Person…
        if GetPersonalEvent.Out_PersonalEvent.Recurrence.Pattern.Type <> NullTextIdentifier() #Recurrence_IsRecurrent
          block UserEventDetails_IconTextWrapper (UBTConnect.Deprecated_Calendar_PersonalEvent)
            args: In_IconId=Entities.UBT_Icons2.Repeat, In_Text=GetRecurrenceDescription(GetPersonalEvent.Out_PersonalEvent.Recurrence,IncludeEndDate:True,IsFromNotification:False,LineTerminator:"")
        block UserEventDetails_IconTextWrapper (UBTConnect.Deprecated_Calendar_PersonalEvent) #Address
          args: In_IconId=Entities.UBT_Icons2.LocationOn, In_IsUnderlined=True, In_Text=GetPersonalEvent.Out_PersonalEvent.Address.Address, In_TextColor=Entities.UBT_Color.Primary
        if GetPersonalEvent.Out_PersonalEvent.ReminderId <> Entities.ReminderOption.DoNotRemind #Reminder_HasReminder
          block UserEventDetails_IconTextWrapper (UBTConnect.Deprecated_Calendar_PersonalEvent) #Reminder
            args: In_IconId=Entities.UBT_Icons2.Notifications, In_Text=GetPersonalEvent.Out_PersonalEvent.ReminderId
        block UserEventDetails_IconTextWrapper (UBTConnect.Deprecated_Calendar_PersonalEvent) #RSVPStatus
          args: In_IconId=Entities.UBT_Icons2.Group, In_Subtext=GetPersonalEvent.Out_PersonalEvent.RSVPStatus, In_Text=GetPersonalEvent.Out_PersonalEvent.InviteeCount + " " +\nIf(GetPersonalEvent.Out_PersonalEvent.InviteeCount  = 1, "attendee","attendees")
        list source=GetPersonalEvent.Out_PersonalEvent.Invitees mode=Default #Attendees  [style="list list-group"]
          block UserEventDetails_InviteeList (UBTConnect.Deprecated_Calendar_PersonalEvent)
            args: In_MemberId=GetPersonalEvent.Out_PersonalEvent.Invitees.Current.MemberId, In_MemberName=GetPersonalEvent.Out_PersonalEvent.Invitees.Current.Name, In_RSVPStatusId=GetPersonalEvent.Out_PersonalEvent.Invitees.Current.RSVPStatus
        block CustomContainer (UBTConnectLibrary.BasePatterns) #ViewAllAttendees
          args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color: Entities.UBT_Color.Neutral3, Size: { BottomSizeId: Entities.UBT_Size.Small } } }
          placeholder Content:
            block Columns_Two (UBTConnectLibrary.BasePatterns)
              args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast }
              placeholder Left:
                block CustomContainer (UBTConnectLibrary.BasePatterns)
                  args: Options={ TextOptions: { Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.ExtraSmall } }
                  placeholder Content:
                    expr: "See all attendees"
              placeholder Right:
                block Icon (UBTConnectLibrary.ConnectPatterns)
                  args: In_ColorId=Entities.UBT_Color.Neutral7, In_IconId=Entities.UBT_Icons2.ChevronRight, In_SizeId=Entities.UBT_IconsSize.Base_24
        block UserEventDetails_IconTextWrapper (UBTConnect.Deprecated_Calendar_PersonalEvent) #Note
          args: In_IconId=Entities.UBT_Icons2.Notes, In_Text=GetPersonalEvent.Out_PersonalEvent.Note
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **ScreenEvent_OnInitialize**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] assign: GetPersonalEvent.Out_PersonalEvent.Title = "Event Title"; GetPersonalEvent.Out_PersonalEvent.IsAllDay = False; GetPersonalEvent.Out_PersonalEvent.StartDateTime = CurrDateTime(); GetPersonalEvent.Out_PersonalEvent.EndDateTime = CurrDateTime(); GetPersonalEvent.Out_PersonalEvent.Address.Address = "This is the address"; GetPersonalEvent.Out_PersonalEvent.ReminderId = Entities.ReminderOption.FifteenMinutes; GetPersonalEvent.Out_PersonalEvent.RSVPStatus = "2 accepted, 11 pending"; GetPersonalEvent.Out_PersonalEvent.InviteeCount = 10; GetPersonalEvent.Out_PersonalEvent.Note = "This is a note for my personal event and my guest"
    [DISABLED] call ListAppendAll(List=GetPersonalEvent.Out_PersonalEvent.Invitees, SourceList=[ { MemberId: 1234, HouseholderId: 1234, SignedURL: Images.SampleFace.URL, Name: "Test Member", RSVPStatus: Entities.Type_RSVPStatus.Host } ])
    end
  ```

## Screen PersonalEventForm (flow Deprecated_Calendar_PersonalEvent)
- roles: Registered, UBTOne_User; URL structure: QueryString; stylesheet: yes
- input parameters: In_PersonalEventId: Text
- local variables: PersonalEventForm: UI_PersonalEvent; ShowStartDatePicker: Boolean; ShowStartTimePicker: Boolean; ShowEndDatePicker: Boolean; ShowEndTimePicker: Boolean; TimePickerInterval: Integer = 5; IsSubmitting: Boolean; IsAddingGuests: Boolean
- lifecycle: OnInitialize → ScreenEvent_OnInitialize

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  args: In_IsPrimaryColor=False
  placeholder Placeholder_Header_Title:
    if In_PersonalEventId <> NullTextIdentifier()
    else
      text: Create Event
  placeholder Content:
    container #Content
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: ExtendedClasses="connect-event-form", Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base } }
        placeholder Content:
          block PersonalEventForm_IconContent (UBTConnect.Deprecated_Calendar_PersonalEvent) #Block_Title
            args: In_LeftIconId=Entities.UBT_Icons2.Edit
            placeholder Placeholder_Content:
              block Input_Underlined (UBTConnectLibrary.ConnectPatterns)
                placeholder Placeholder_Input:
                  input #Input_Title var=PersonalEventForm.Title InputType=Text Prompt="Add title" style="form-control"  [style="form-control"]
            placeholder Placeholder_ContentRight:
              if PersonalEventForm.Title <> "" #HasTitle
                block Icon (UBTConnectLibrary.ConnectPatterns) #ClearTitle
                  args: In_ColorId=Entities.UBT_Color.Neutral7, In_IconId=Entities.UBT_Icons2.CancelFill
                  on Click → OnClick_ClearTitle
          block PersonalEventForm_IconContent (UBTConnect.Deprecated_Calendar_PersonalEvent) #Block_AllDay
            args: In_LeftIconId=Entities.UBT_Icons2.Schedule
            placeholder Placeholder_Content:
              expr: "Is all day"
            placeholder Placeholder_ContentRight:
              switchwidget #Switch_IsAllDay var=PersonalEventForm.IsAllDay style="switch" onchange → OnChange_IsAllDay  [style="switch"]
          block UserEventForm_DateTimeWrapper (UBTConnect.Deprecated_Calendar_PersonalEvent) #Block_Start
            args: In_DateTime=PersonalEventForm.StartDateTime, In_HideTime=PersonalEventForm.IsAllDay, In_IsDefaultValue=True, In_Label="Start", In_ShowDatePicker=ShowStartDatePicker, In_ShowTimePicker=ShowStartTimePicker, In_TimePickerMinuteInerval=TimePickerInterval
            on OnClick_DateTag → OnClick_StartDateTag
            on Event_SelectedDate → Handler_SelectedStartDate(Event_SelectedDate=Event_Date)
            on OnClick_TimeTag → OnClick_StartTimeTag
            on Event_SelectedTime → Handler_SelectedStartTime(Event_SelectedTime=Event_Time)
          block UserEventForm_DateTimeWrapper (UBTConnect.Deprecated_Calendar_PersonalEvent) #Block_End
            args: In_DateTime=PersonalEventForm.EndDateTime, In_HideTime=PersonalEventForm.IsAllDay, In_IsDefaultValue=True, In_Label="End", In_MaximumDate=AddYears(PersonalEventForm.StartDateTime,3), In_MinimumDate=PersonalEventForm.StartDateTime, In_MinimumTime=DateTimeToTime(PersonalEventForm.StartDateTime), In_ShowDatePicker=ShowEndDatePicker, In_ShowTimePicker=ShowEndTimePicker, In_TimePickerMinuteInerval=TimePickerInterval
            on OnClick_TimeTag → OnClick_EndTimeTag
            on Event_SelectedTime → Handler_SelectedEndTime(Event_SelectedTime=Event_Time)
            on OnClick_DateTag → OnClick_EndDateTag
            on Event_SelectedDate → Handler_SelectedEndDate(Event_SelectedDate=Event_Date)
          block UserEventForm_Item__Navigate (UBTConnect.Deprecated_Calendar_PersonalEvent) #Block_Attendees
            args: In_LeftIconId=Entities.UBT_Icons2.PersonAdd
            on Event_OnClick_Navigate → OnClick_NavigateToAttendees
            placeholder Placeholder_Content:
              expr: "Add attendees"
          block Indev_AddAttendees (UBTConnect.Deprecated_Calendar_PersonalEvent)
            args: In_IsOpen=IsAddingGuests
            on Event_CloseAddInviteesSheet → Handler_CloseAddInviteesSheet
          block PersonalEventForm_IconContent (UBTConnect.Deprecated_Calendar_PersonalEvent) #Block_LocationAsString
            args: In_LeftIconId=Entities.UBT_Icons2.LocationOn
            placeholder Placeholder_Content:
              block CustomContainer (UBTConnectLibrary.BasePatterns)
                args: Options={ TextOptions: { FontSize: Entities.UBT_FontSize.Small } }
                placeholder Content:
                  block DynamicTextArea (UBTConnectLibrary.ConnectPatterns)
                    args: In_Text=PersonalEventForm.Address.Address
                    placeholder Placeholder_TextArea:
                      textarea #TextArea_Address var=PersonalEventForm.Address.Address MaxLength=100 TextLines=1 Prompt="Add location" style="form-control"  [style="form-control"]
          if False  [DEAD BRANCH: condition is a constant]
            block UserEventForm_Item__Navigate (UBTConnect.Deprecated_Calendar_PersonalEvent) #Block_Location
              args: In_LeftIconId=Entities.UBT_Icons2.LocationOn
              on Event_OnClick_Navigate → OnClick_NavigateToLocation
              placeholder Placeholder_Content:
                expr: "Add location"
          block UserEventForm_Item__Navigate (UBTConnect.Deprecated_Calendar_PersonalEvent) #Block_Repeat
            args: In_LeftIconId=Entities.UBT_Icons2.Repeat
            on Event_OnClick_Navigate → OnClick_NavigateToRecurrence
            placeholder Placeholder_Content:
              block PersonalEventForm_LabelContent (UBTConnect.Deprecated_Calendar_PersonalEvent)
                args: In_IsDefaultContent=False, In_IsDefaultLabel=False
                placeholder Placeholder_Left:
                  expr: "Repeat"
                placeholder Placeholder_Right:
                  expr: GetRecurrenceDescription(PersonalEventForm.Recurrence,IncludeEndDate:True,IsFromNotification:False,LineTerminator:"")
          block UserEventForm_Item__Navigate (UBTConnect.Deprecated_Calendar_PersonalEvent) #Block_Reminder
            args: In_LeftIconId=Entities.UBT_Icons2.Notifications
            on Event_OnClick_Navigate → OnClick_NavigateToReminder
            placeholder Placeholder_Content:
              block PersonalEventForm_LabelContent (UBTConnect.Deprecated_Calendar_PersonalEvent)
                args: In_IsDefaultContent=False, In_IsDefaultLabel=False
                placeholder Placeholder_Left:
                  expr: "Remind"
                placeholder Placeholder_Right:
                  expr: Get_LookupReminderType(PersonalEventForm.ReminderId).Label
          block PersonalEventForm_IconContent (UBTConnect.Deprecated_Calendar_PersonalEvent) #Block_Notes
            args: In_LeftIconId=Entities.UBT_Icons2.Notes
            placeholder Placeholder_Content:
              block CustomContainer (UBTConnectLibrary.BasePatterns)
                args: Options={ TextOptions: { FontSize: Entities.UBT_FontSize.Small } }
                placeholder Content:
                  block DynamicTextArea (UBTConnectLibrary.ConnectPatterns)
                    args: In_Text=PersonalEventForm.Note
                    placeholder Placeholder_TextArea:
                      textarea #TextArea_Note var=PersonalEventForm.Note MaxLength=100 TextLines=1 Prompt="Add notes" style="form-control"  [style="form-control"]
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base }, ShadowId: Entities.UBT_Shadow.ExtraSmallTop }
      placeholder Content:
        block ButtonLoading (OutSystemsUI_2_23.Utilities2)
          args: IsLoading=IsSubmitting
          placeholder Button:
            block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
              args: ButtonText="View Events", IsDisabled=False
              on buttonOnClick → ButtonbuttonOnClick2
    block FixedFooter (UBTConnectLibrary.ConnectPatterns)
      args: ContentContainerId=Content.Id, ExpectedFooterHeight="calc(2 * var(--space-base) + var(--ubt-button-height-m))", useBottomBar=False
      placeholder Content:
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base }, ShadowId: Entities.UBT_Shadow.ExtraSmallTop }
          placeholder Content:
            block ButtonLoading (OutSystemsUI_2_23.Utilities2)
              args: IsLoading=IsSubmitting
              placeholder Button:
                block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
                  args: ButtonText="Send", IsDisabled=False
                  on buttonOnClick → OnClick_CreateEvent
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **Action_CloseAllPickers**
  ```
  assign: ShowStartDatePicker = False; ShowEndDatePicker = False; ShowStartTimePicker = False; ShowEndTimePicker = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_MaybeUpdateEndDateTime**
  ```
  if PersonalEventForm.StartDateTime < PersonalEventForm.EndDateTime
    end
  else
    assign: PersonalEventForm.EndDateTime = AddMinutes(PersonalEventForm.StartDateTime,30)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ButtonbuttonOnClick2**
  ```
  navigate → ViewEventList() transition=Inherited
  ```
- **Handler_CloseAddInviteesSheet**
  ```
  assign: IsAddingGuests = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_SelectedEndDate** inputs: Event_SelectedDate: Date (mandatory)
  ```
  assign: PersonalEventForm.EndDateTime = BuildDateTime(Event_SelectedDate,DateTimeToTime(PersonalEventForm.EndDateTime))
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_SelectedEndTime** inputs: Event_SelectedTime: Time (mandatory)
  ```
  assign: PersonalEventForm.EndDateTime = BuildDateTime(PersonalEventForm.EndDateTime,Event_SelectedTime)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_SelectedStartDate** inputs: Event_SelectedDate: Date (mandatory); locals: OriginalRecurrence: Recurrence
  ```
  assign: PersonalEventForm.StartDateTime = BuildDateTime(Event_SelectedDate,DateTimeToTime(PersonalEventForm.StartDateTime))
  call Action_MaybeUpdateEndDateTime()
  assign: OriginalRecurrence = PersonalEventForm.Recurrence; PersonalEventForm.Recurrence.Range.StartDate = PersonalEventForm.StartDateTime
  if PersonalEventForm.Recurrence.Pattern.Index <> NullTextIdentifier()
    call Get_LookupRecurrencePatternWeekIndeces()
    call Get_RecurrencePatternWeekIndexIdList_ByDate(Date=PersonalEventForm.Recurrence.Range.StartDate, RecurrencePatternWeekIndexList=Get_LookupRecurrencePatternWeekIndeces.Out_RecurrencePatternWeekIndex)
    assign: PersonalEventForm.Recurrence.Pattern.Index = Get_RecurrencePatternWeekIndexIdList_ByDate.RecurrencePatternWeekIndexIdList.Current
    [M1] if PersonalEventForm.Recurrence.Range.StartDate > PersonalEventForm.Recurrence.Range.EndDate
      call Get_RecurrenceDefaultEndDate(In_RecurrenceStartDate=PersonalEventForm.Recurrence.Range.StartDate, In_RecurrenceTypeId=PersonalEventForm.Recurrence.Pattern.Type)
      assign: PersonalEventForm.Recurrence.Range.EndDate = Get_RecurrenceDefaultEndDate.Out_RecurrenceDefaultEndDate
      [M2] call Get_MaybeLimited_RecurrenceEndDate(In_RecurrenceEndDate=PersonalEventForm.Recurrence.Range.EndDate, In_RecurrenceStartDate=PersonalEventForm.Recurrence.Range.StartDate)
      assign: PersonalEventForm.Recurrence.Range.EndDate = Get_MaybeLimited_RecurrenceEndDate.Out_RecurrenceEndDate
      call Get_UpdatedRecurrence_DaysOfWeek(In_RecurrenceDaysOfWeek=PersonalEventForm.Recurrence.Pattern.DaysOfWeek, In_RecurrenceStartDate=PersonalEventForm.Recurrence.Range.StartDate, In_RecurrenceTypeId=PersonalEventForm.Recurrence.Pattern.Type)
      assign: PersonalEventForm.Recurrence.Pattern.DaysOfWeek = Get_UpdatedRecurrence_DaysOfWeek.Out_RecurrenceDaysOfWeek
      if (Monthly or Yearly?) PersonalEventForm.Recurrence.Pattern.Type = Entities.RecurrenceType.monthly or PersonalEventForm.Recurrence.Pattern.Type  = Entities.RecurrenceType.yearly
        if (Has Index?) PersonalEventForm.Recurrence.Pattern.Index <> NullTextIdentifier()
          assign (Set DayOfMonth): PersonalEventForm.Recurrence.Pattern.DayOfMonth = 0
          [M3] if (Yearly?) PersonalEventForm.Recurrence.Pattern.Type = Entities.RecurrenceType.yearly
            assign (Set Month): PersonalEventForm.Recurrence.Pattern.Month = Month(PersonalEventForm.Recurrence.Range.StartDate)
            [M4] assign (<<): 
            [M5] call Get_IsValidRecurrence(Recurrence=PersonalEventForm.Recurrence)
            if Get_IsValidRecurrence.IsWeeklyRecurrenceValid
              end
            else
              assign: PersonalEventForm.Recurrence = OriginalRecurrence
              call FeedbackMessage_AutoClose(Message="Invalid Recurring Meeting. There is an issue with the recurring meeting setup. Please check the recurrence pattern, timing, and conflicts of the meeting.")
              end
          else
            assign (Set Month): PersonalEventForm.Recurrence.Pattern.Month = 0
            → continues at [M4]
        else
          assign (Set DayOfMonth): PersonalEventForm.Recurrence.Pattern.DayOfMonth = Day(PersonalEventForm.Recurrence.Range.StartDate)
          → continues at [M3]
      else
        → continues at [M5]
    else
      → continues at [M2]
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_SelectedStartTime** inputs: Event_SelectedTime: Time (mandatory)
  ```
  assign: PersonalEventForm.StartDateTime = BuildDateTime(PersonalEventForm.StartDateTime,Event_SelectedTime)
  call Action_MaybeUpdateEndDateTime()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnChange_IsAllDay**
  ```
  assign: ShowStartTimePicker = False; ShowEndTimePicker = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_ClearTitle**
  ```
  assign: PersonalEventForm.Title = ""
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_CreateEvent**
  ```
  if PersonalEventForm.StartDateTime <= PersonalEventForm.EndDateTime
    call-server PersonalEvent_Create(In_UI_PersonalEvent=PersonalEventForm)
    call CreateTemp_PersonalEventIds(Source={ Temp_PersonalEventIds: { Id: TextToIdentifier(PersonalEvent_Create.Out_PersonalEventId)\n } })
    message Info: "Created"
    end
  else
    message Error: "Event end date-time must be after event start date-time"
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnClick_EndDateTag**; locals: IsOpen: Boolean
  ```
  assign: IsOpen = not ShowEndDatePicker
  call Action_CloseAllPickers()
  assign: ShowEndDatePicker = IsOpen
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_EndTimeTag**; locals: IsOpen: Boolean
  ```
  assign: IsOpen = not ShowEndTimePicker
  call Action_CloseAllPickers()
  assign: ShowEndTimePicker = IsOpen
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_NavigateToAttendees**
  ```
  assign: IsAddingGuests = True
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_NavigateToLocation**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_NavigateToRecurrence**
  ```
  call SetPreloadObject(Preload=ToObject(PersonalEventForm))
  navigate → Recurrence(None=PersonalEventForm.Recurrence.Range.StartDate) transition=Inherited
  ```
- **OnClick_NavigateToReminder**
  ```
  call SetPreloadObject(Preload=ToObject(PersonalEventForm))
  navigate → Reminder() transition=Inherited
  ```
- **OnClick_StartDateTag**; locals: IsOpen: Boolean
  ```
  assign: IsOpen = not ShowStartDatePicker
  call Action_CloseAllPickers()
  assign: ShowStartDatePicker = IsOpen
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_StartTimeTag**; locals: IsOpen: Boolean
  ```
  assign: IsOpen = not ShowStartTimePicker
  call Action_CloseAllPickers()
  assign: ShowStartTimePicker = IsOpen
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache
    call GetPreloadObject()
    call AssignFromObject(ObjectValue=GetPreloadObject.Preload, ToObjectRef=ToObject(PersonalEventForm))
    end
  else
    call GetClosestSelectableDateTime(In_StartTime=CurrDateTime())
    assign: PersonalEventForm.StartDateTime = GetClosestSelectableDateTime.Out_ClosestSelectableDateTime; PersonalEventForm.EndDateTime = AddMinutes(PersonalEventForm.StartDateTime,30)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Screen Recurrence (flow Deprecated_Calendar_PersonalEvent)
- roles: Registered, UBTOne_User; URL structure: QueryString; stylesheet: yes
- input parameters: -
- local variables: RecurrenceTypes: UI_RecurrenceTypes List; Recurrence: Recurrence; DefaultRecurrence: Recurrence; Lookup_RecurrenceWeekIndeces: Lookup_RecurrencePatternWeekIndex List; RecurrenceWeekIndeces: IsSelected, RecurrencePatternWeekIndexIdentifier Record List; RecurrenceIntervalOptions: CustomScrollListElement List; ShowRecurrenceIntervalSelector: Boolean; ShowEndDatePicker: Boolean; PersonalEventForm: UI_PersonalEvent
- lifecycle: OnInitialize → ScreenEvent_OnInitialize

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  args: In_AlignTitleLeft=True, In_IsPrimaryColor=False
  placeholder Placeholder_Header_Title:
    expr: "Repeat"
  placeholder Content:
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: ExtendedClasses="connect-event-form", Options={ PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base }, TextOptions: { FontSize: Entities.UBT_FontSize.Small } }
      placeholder Content:
        container  [style="connect-event-form__option-list"]
          block SelectionOption_List (UBTConnectLibrary.ConnectPatterns) #Block_RecurrenceTypes
            args: isMultiselect=False, Item_StyleOptions={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small } }, SelectionOption_ItemList=ConvertList(RecurrenceTypes,  {Id:"Id",DisplayText:"Label",isSelected:"Id = Recurrence.Pattern.Type"})
            on OnSelectionChange → OnChange_RecurrenceType(Event_SelectedItems=SelectedItems)
        if Recurrence.Pattern.Type <> NullTextIdentifier() #IsRecurrent
          block ConnectForm_ItemContainer (UBTConnect.Deprecated_Calendar_PersonalEvent) #Block_RecurrenceInterval
            placeholder Placeholder_Content:
              if Recurrence.Pattern.Type <> Entities.RecurrenceType.yearly #NotYearly
                block PersonalEventForm_LabelContent (UBTConnect.Deprecated_Calendar_PersonalEvent)
                  args: In_IsDefaultLabel=False
                  placeholder Placeholder_Left:
                    expr: "Repeat every"
                  placeholder Placeholder_Right:
                    container
                      block PersonalEventForm_TagInput (UBTConnect.Deprecated_Calendar_PersonalEvent) #Block_RepeatInterval
                        args: In_IsActive=ShowRecurrenceIntervalSelector, In_Value=Recurrence.Pattern.Interval + " " + If(Recurrence.Pattern.Interval > 1, Get_LookupRecurrenceType(Recurrence.Pattern.Type).PluralLabel,  Get_LookupRecurrenceType(Recurrence.Pattern.Type).Label)
                        on OnClick → OnClick_RepeatInterval
                  placeholder Placeholder_FullWidthContent:
                    if ShowRecurrenceIntervalSelector
                      block CustomScrollListWrapper (UBTConnect.Deprecated_Calendar_PersonalEvent)
                        args: In_ExtendedClass="connect-event-form__repeat-list", In_IsCircular=False, In_ListElements=RecurrenceIntervalOptions, In_StartElementIndex=(Recurrence.Pattern.Interval - 1)
                        on Event_SelectedItem → Handler_SelectedIntervalValue(Event_ItemId=Event_ItemId)
              if Recurrence.Pattern.Type = Entities.RecurrenceType.yearly or\nRecurrence.Pattern.Type = Entities.RecurrenceType.monthly #YearlyorMonthly
                block CustomContainer (UBTConnectLibrary.BasePatterns)
                  args: ExtendedClasses="connect-event-form__option-list connect-event-form__option-list--border-none", Options={ MarginSize: { TopSizeId: If(Recurrence.Pattern.Type <> Entities.RecurrenceType.yearly, Entities.UBT_Size.Base, NullTextIdentifier()) } }
                  placeholder Content:
                    block CustomContainer (UBTConnectLibrary.BasePatterns)
                      args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Small } }
                    block SelectionOption_List (UBTConnectLibrary.ConnectPatterns) #Block_WeekIndexOptions
                      args: isMultiselect=False, Item_StyleOptions={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small } }, SelectionOption_ItemList=ConvertList(RecurrenceWeekIndeces,  {Id:"RecurrencePatternWeekIndexIdentifier",DisplayText:"Get_WeekIndexOptionLabel(Recurrence.Pattern.Type, RecurrencePatternWeekIndexIdentifier, Recurrence.Range.St…
                      on OnSelectionChange → Handler_WeekIndexOnSelection(SelectedItems=SelectedItems)
          if Recurrence.Pattern.Type = Entities.RecurrenceType.weekly #IsWeekly
            block Recurrence_WeekdaysTagList (UBTConnect.Deprecated_Calendar_PersonalEvent) #Block_RecurrenceWeekdays
              args: In_SelectedDaysOfWeek=Recurrence.Pattern.DaysOfWeek
              on Event_UpdatedSelectedDaysOfWeek → Handler_UpdateDaysOfWeekList(Event_SelectedDaysOfWeekIds=Event_SelectedDaysOfWeekIds)
          block ConnectForm_ItemContainer (UBTConnect.Deprecated_Calendar_PersonalEvent) #Block_RecurrenceEndDate
            placeholder Placeholder_Content:
              block PersonalEventForm_LabelContent (UBTConnect.Deprecated_Calendar_PersonalEvent)
                args: In_IsDefaultLabel=False
                placeholder Placeholder_Left:
                  expr: "End date"
                placeholder Placeholder_Right:
                  container
                    block PersonalEventForm_TagInput (UBTConnect.Deprecated_Calendar_PersonalEvent)
                      args: In_IsActive=ShowEndDatePicker, In_Value=Get_UserEventFormFormattedDate(Recurrence.Range.EndDate)
                      on OnClick → OnClick_EndDate
            placeholder Placenholder_SubContent:
              if ShowEndDatePicker
                block CustomContainer (UBTConnectLibrary.BasePatterns)
                  args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Base }, MarginSize: { TopSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color: Entities.UBT_Color.Neutral5, Size: { GeneralSizeId: Entities.UBT…
                  placeholder Content:
                    block Picker_Date (UBTConnect.Deprecated_Calendar_PersonalEvent)
                      args: In_InitialDate=Recurrence.Range.StartDate, In_MaximumDate=AddMonths(Recurrence.Range.StartDate,36), In_MinimumDate=Recurrence.Range.StartDate
                      on Event_SelectedDate → Handler_UpdateEndDate(Event_SelectedDate=Event_SelectedDate)
                      placeholder Placeholder_Info:
                        block CustomContainer (UBTConnectLibrary.BasePatterns)
                          args: Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base, TopSizeId: Entities.UBT_Size.ExtraSmall }, TextOptions: { Color: Entities.UBT_Color.Neutral8, FontSize: Entities.UBT_FontSize.ExtraSmall } }
                          placeholder Content:
                            block IconText (UBTConnectLibrary.ConnectPatterns)
                              args: SpacingSize=Entities.UBT_Size.Small, Text="The recurring limitation period is 36 months."
                              placeholder Icon:
                                block Icon (UBTConnectLibrary.ConnectPatterns)
                                  args: In_ColorId=Entities.UBT_Color.Inherit, In_IconId=Entities.UBT_Icons2.Info, In_SizeId=Entities.UBT_IconsSize.NonStandard_16
          block CustomContainer (UBTConnectLibrary.BasePatterns)
            args: Options={ MarginSize: { VerticalSizeId: Entities.UBT_Size.Small }, TextOptions: { FontSize: Entities.UBT_FontSize.ExtraSmall } }
            placeholder Content:
              expr: GetRecurrenceDescription(Recurrence,True,False,".")
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
block BackNavigationHandler (NavigationHandler.NavigationHandler)
  on BackNavigation → Handler_OnBackNavigation
```

#### Screen actions
- **Action_InitializeRecurrenceRange**
  ```
  call Get_RecurrenceDefaultEndDate(In_RecurrenceStartDate=Recurrence.Range.StartDate, In_RecurrenceTypeId=Recurrence.Pattern.Type)
  assign: Recurrence.Range.StartDate = PersonalEventForm.StartDateTime; Recurrence.Range.EndDate = Get_RecurrenceDefaultEndDate.Out_RecurrenceDefaultEndDate; Recurrence.Range.Type = Entities.RecurrenceRangeType.endDate
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_InitializeRecurrenceType_Daily**
  ```
  assign (Pattern): Recurrence.Pattern.Type = Entities.RecurrenceType.daily; Recurrence.Pattern.Interval = 1
  call Action_InitializeRecurrenceRange()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_InitializeRecurrenceType_Monthly**
  ```
  assign (Pattern): Recurrence.Pattern.DayOfMonth = Day(PersonalEventForm.StartDateTime); Recurrence.Pattern.Interval = 1; Recurrence.Pattern.Type = Entities.RecurrenceType.monthly
  call Action_InitializeRecurrenceRange()
  call Action_UpdateRecurrenceWeekIndeces()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_InitializeRecurrenceType_Weekly**
  ```
  assign (Pattern): Recurrence.Pattern.Type = Entities.RecurrenceType.weekly; Recurrence.Pattern.Interval = 1
  call Get_LookupDayOfWeek_ByNumber(In_Number=DayOfWeek(PersonalEventForm.StartDateTime))
  call ListAppend(Element=Get_LookupDayOfWeek_ByNumber.Out_LookupDayOfWeek.Type_DayOfWeekId, List=Recurrence.Pattern.DaysOfWeek) as ListAppend_PatternDaysOfWeek
  call Action_InitializeRecurrenceRange()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_InitializeRecurrenceType_Yearly**
  ```
  assign: Recurrence.Pattern.Interval = 1; Recurrence.Pattern.Type = Entities.RecurrenceType.yearly; Recurrence.Pattern.Month = Month(PersonalEventForm.StartDateTime)
  call Action_InitializeRecurrenceRange()
  call Action_UpdateRecurrenceWeekIndeces()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_ResetRecurrencePattern**
  ```
  assign: Recurrence = DefaultRecurrence; Recurrence.Range.StartDate = PersonalEventForm.StartDateTime
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_UpdateRecurrenceWeekIndeces**
  ```
  call Get_RecurrencePatternWeekIndexIdList_ByDate(Date=Recurrence.Range.StartDate, RecurrencePatternWeekIndexList=Lookup_RecurrenceWeekIndeces)
  call ListClear(List=RecurrenceWeekIndeces)
  call ListAppend(Element={ IsSelected: True, RecurrencePatternWeekIndexIdentifier: NullTextIdentifier() }, List=RecurrenceWeekIndeces) as ListAppend_NullRecord
  [M1] for each Get_RecurrencePatternWeekIndexIdList_ByDate.RecurrencePatternWeekIndexIdList
    call ListAppend(Element={ IsSelected: False, RecurrencePatternWeekIndexIdentifier: Get_RecurrencePatternWeekIndexIdList_ByDate.RecurrencePatternWeekIndexIdList.Current }, List=RecurrenceWeekIndeces)
    → continues at [M1]
  end for
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnBackNavigation**
  ```
  assign: PersonalEventForm.Recurrence = Recurrence
  call SetPreloadObject(Preload=ToObject(PersonalEventForm))
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_SelectedIntervalValue** inputs: Event_ItemId: Text (mandatory)
  ```
  if Event_ItemId <> "0" and Event_ItemId <> ""
    assign: Recurrence.Pattern.Interval = TextToInteger(Event_ItemId)
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_UpdateDaysOfWeekList** inputs: Event_SelectedDaysOfWeekIds: DayOfWeek Identifier List (mandatory)
  ```
  if Event_SelectedDaysOfWeekIds.Length = 7
    call OnChange_RecurrenceType(Event_SelectedItems=[ { Id: Entities.RecurrenceType.daily } ])
    end
  else
    call ListClear(List=Recurrence.Pattern.DaysOfWeek)
    [M1] for each Event_SelectedDaysOfWeekIds
      call ListAppend(Element=Event_SelectedDaysOfWeekIds.Current, List=Recurrence.Pattern.DaysOfWeek)
      → continues at [M1]
    end for
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_UpdateEndDate** inputs: Event_SelectedDate: Date (mandatory)
  ```
  assign: Recurrence.Range.EndDate = Event_SelectedDate
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_WeekIndexOnSelection** inputs: SelectedItems: SelectionOption_Item List (mandatory)
  ```
  assign: Recurrence.Pattern.Index = SelectedItems.Current.Id
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnChange_RecurrenceType** inputs: Event_SelectedItems: SelectionOption_Item List (mandatory)
  ```
  call Action_ResetRecurrencePattern()
  assign: ShowRecurrenceIntervalSelector = False; ShowEndDatePicker = False
  if (Daily) Event_SelectedItems.Current.Id = Entities.RecurrenceType.daily
    call Action_InitializeRecurrenceType_Daily()
    end
  else
    if (Weekly) Event_SelectedItems.Current.Id = Entities.RecurrenceType.weekly
      call Action_InitializeRecurrenceType_Weekly()
      end
    else
      if (Monthly) Event_SelectedItems.Current.Id = Entities.RecurrenceType.monthly
        call Action_InitializeRecurrenceType_Monthly()
        end
      else
        if (Yearly) Event_SelectedItems.Current.Id = Entities.RecurrenceType.yearly
          call Action_InitializeRecurrenceType_Yearly()
          end
        else
          end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
    end
    end
  ```
- **OnClick_EndDate**
  ```
  assign: ShowEndDatePicker = not ShowEndDatePicker
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_RepeatInterval**; locals: RecurrenceIntervalMaxValue: Integer = 100; Index: Integer
  ```
  assign: ShowRecurrenceIntervalSelector = not ShowRecurrenceIntervalSelector
  if RecurrenceIntervalOptions.Empty and ShowRecurrenceIntervalSelector
    [M1] if Index < (RecurrenceIntervalMaxValue -1)
      assign: Index = Index + 1
      call ListAppend(Element={ Id: Index, Label: Index }, List=RecurrenceIntervalOptions)
      → continues at [M1]
    else
      end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  call GetPreloadObject()
  call AssignFromObject(ObjectValue=GetPreloadObject.Preload, ToObjectRef=ToObject(PersonalEventForm))
  assign: Recurrence = PersonalEventForm.Recurrence; Recurrence.Range.StartDate = PersonalEventForm.StartDateTime
  call Get_LookupRecurrenceTypes()
  call ListAppend(Element={ Id: NullTextIdentifier(), Label: "Don't repeat" }, List=RecurrenceTypes) as ListAppend_DontRepeat
  [M1] for each Get_LookupRecurrenceTypes.Out_Lookup_RecurrenceTypes
    call ListAppend(Element={ Id: Get_LookupRecurrenceTypes.Out_Lookup_RecurrenceTypes.Current.Id, Label: "Every " + Get_LookupRecurrenceTypes.Out_Lookup_RecurrenceTypes.Current.Label }, List=RecurrenceTypes)
    → continues at [M1]
  end for
  call Get_LookupRecurrencePatternWeekIndeces()
  assign: Lookup_RecurrenceWeekIndeces = Get_LookupRecurrencePatternWeekIndeces.Out_RecurrencePatternWeekIndex
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Screen Reminder (flow Deprecated_Calendar_PersonalEvent)
- roles: Registered, UBTOne_User; URL structure: QueryString; stylesheet: yes
- input parameters: -
- local variables: PersonalEventForm: UI_PersonalEvent; ReminderTypes: Lookup_ReminderType List
- lifecycle: OnInitialize → ScreenEvent_OnInitialize

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  args: In_AlignTitleLeft=True, In_IsPrimaryColor=False
  placeholder Placeholder_Header_Title:
    expr: "Repeat"
  placeholder Content:
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: ExtendedClasses="connect-event-form", Options={ PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base }, TextOptions: { FontSize: Entities.UBT_FontSize.Small } }
      placeholder Content:
        container  [style="connect-event-form__option-list"]
          block SelectionOption_List (UBTConnectLibrary.ConnectPatterns) #Block_ReminderTypes
            args: isMultiselect=False, Item_StyleOptions={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small } }, SelectionOption_ItemList=ConvertList(ReminderTypes,  {Id:"Id",DisplayText:"Label",isSelected:"Id = PersonalEventForm.ReminderId"})
            on OnSelectionChange → OnChange_ReminderTypes(SelectedItems=SelectedItems)
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
block BackNavigationHandler (NavigationHandler.NavigationHandler)
  on BackNavigation → Handler_OnBackNavigation
```

#### Screen actions
- **Handler_OnBackNavigation**
  ```
  call SetPreloadObject(Preload=ToObject(PersonalEventForm))
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnChange_ReminderTypes** inputs: SelectedItems: SelectionOption_Item List (mandatory)
  ```
  assign: PersonalEventForm.ReminderId = TextToIdentifier(SelectedItems.Current.Id)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  call GetPreloadObject()
  call AssignFromObject(ObjectValue=GetPreloadObject.Preload, ToObjectRef=ToObject(PersonalEventForm))
  call Get_LookupReminderTypes()
  if PersonalEventForm.IsAllDay
    call ListFilter(Condition=IsAllDay or Id = Entities.ReminderOption.DoNotRemind, SourceList=Get_LookupReminderTypes.Out_Lookup_ReminderTypes) as ListFilter_AllDay
    assign: Get_LookupReminderTypes.Out_Lookup_ReminderTypes = ListFilter_AllDay.FilteredList
    assign (<<): 
    [M1] assign: ReminderTypes = Get_LookupReminderTypes.Out_Lookup_ReminderTypes
    end
  else
    call ListFilter(Condition=(not IsAllDay) or Id = Entities.ReminderOption.DoNotRemind, SourceList=Get_LookupReminderTypes.Out_Lookup_ReminderTypes) as ListFilter_SingleDay
    assign: Get_LookupReminderTypes.Out_Lookup_ReminderTypes = ListFilter_SingleDay.FilteredList
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Screen ViewEventList (flow Deprecated_Calendar_PersonalEvent)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: -
- lifecycle: none

#### Data sources
- aggregate **GetTempPersonalEventIds** fetch=AtStart max=50: 

#### Widget tree
```
block LayoutBlank (UBTConnect.App_Common)
  placeholder Content:
    list source=GetTempPersonalEventIds.List mode=Default  [style="list list-group"]
      container  [style="padding-base"; on onclick → OnClick]
        expr: GetTempPersonalEventIds.List.Current.Temp_PersonalEventIds.Id
```

#### Screen actions
- **OnClick**
  ```
  navigate → PersonalEventDetails(In_PersonalEventId=GetTempPersonalEventIds.List.Current.Temp_PersonalEventIds.Id) transition=Inherited
  ```
