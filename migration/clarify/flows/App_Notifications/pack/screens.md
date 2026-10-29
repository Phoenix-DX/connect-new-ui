# Pack of UI flow App_Notifications (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: NotificationDetails, Notifications

## Screen NotificationDetails (flow App_Notifications)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: MessageInstanceId: MessageInstance Identifier (mandatory)
- local variables: -
- lifecycle: none

#### Data sources
- data action **FetchMessageInstance** fetch=AtStart; outputs: UI_NotificationDetail: MessageListItem
  ```
  call-server Get_UI_NotificationDetails(MessageInstanceId=MessageInstanceId)
  assign (Set UI_NotificationDetail): UI_NotificationDetail = Get_UI_NotificationDetails.MessageListItem
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block Layout_MainPages_Upgrade (UBTConnectLibrary.Layouts)
  args: isGrayBackground=True
  placeholder Placeholder_Header_Title:
    text: Notifications
  placeholder Content:
    block CustomContainer (UBTConnectLibrary.BasePatterns) #Notification_Title
      args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small } }
      placeholder Content:
        block IconText (UBTConnectLibrary.ConnectPatterns)
          args: Text=FetchMessageInstance.UI_NotificationDetail.Title, TextOptions={ FontWeight: Entities.UBT_FontWeight.SemiBold }
          placeholder Icon:
            block CircleButton (UBTConnectLibrary.ConnectPatterns)
              args: BorderColorId=Entities.UBT_Color.Neutral6
              placeholder Icon:
                block Icon (UBTConnectLibrary.ConnectPatterns)
                  args: In_ColorId=Entities.UBT_Color.Primary, In_IconId=Entities.UBT_Icons2.CalendarBusy
    block SectionSeparator (UBTConnect.App_Common_Blocks)
    block CustomContainer (UBTConnectLibrary.BasePatterns) #Notification_Content
      args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small } }
      placeholder Content:
        block CustomText (UBTConnectLibrary.BasePatterns)
          args: In_Text=FetchMessageInstance.UI_NotificationDetail.Summary, In_TextOptions={ Color: Entities.UBT_Color.Neutral10 }
    block CustomContainer (UBTConnectLibrary.BasePatterns) #Notification_Date
      args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small } }
      placeholder Content:
        block CustomText (UBTConnectLibrary.BasePatterns)
          args: In_Text=FormatDateTime(FetchMessageInstance.UI_NotificationDetail.DateTimeCreated, "ddd dd/MM/yyyy HH:mm tt"), In_TextOptions={ Color: Entities.UBT_Color.Neutral5, FontSize: Entities.UBT_FontSize.Small }
  placeholder Bottom:
    block BottomBarMenu (UBTConnect.App_Common)
      args: ActiveItem=NullTextIdentifier()
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
```

## Screen Notifications (flow App_Notifications)
- roles: Registered, UBTOne_User; URL structure: QueryString; stylesheet: yes
- input parameters: -
- local variables: Filter_BottomSheetId: Text; Filter_Updates: Filter_Updates; HasFiltersApplied: Boolean; ShowMarkAll: Boolean; DateRanges: UI_Updates_DateRange List; isLoading: Boolean; BottomSheetId_IsLoaded: Boolean; BottomSheetId_ShowSubscription: Boolean; Breakpoints: UI_UpdateItem_Breakpoint List; CurrentBreakpoint: UI_UpdateItem_Breakpoint; EventListener: Object; EventListenerTarget: Object; IsHeaderScrolled: Boolean; IsToggleSearch: Boolean; CurrentSearchString: Text; SelectedHistorySearch: Text; DeviceHardwareId: Text; Filter_MessageTypePrivate: Boolean = True; Filter_MessageTypePublic: Boolean = True; OrderByIsAscending: Boolean; MaxRecords: Integer = 2000; ShowWarning: Boolean; SelectedFilter_OrderASC: Boolean; Filter_OrderASC: Boolean; Filter_OrderDESC: Boolean; SelectedFilter_MessageTypePrivate: Boolean = True; SelectedFilter_MessageTypePublic: Boolean = True; MoreAction_BottomSheetId: Text; Local_OnlyShowUnread: Boolean; ReadCount: Long Integer; Screen_NotificationItemList: MessageListItem List
- lifecycle: OnInitialize → ScreenEvent_OnInitialize; OnReady → ScreenEvent_OnReady; OnDestroy → DestroyEventListener

#### Data sources
- data action **FetchNotifications** fetch=OnDemand; outputs: UI_NotificationItemList: MessageListItem List; HasUnreadMessages: Boolean; UnreadNotificationsCount: Long Integer; OnAfterFetch → OnAfterFetch_FetchNotifications
  ```
  call-server Get_UI_Notifications(Ascending=OrderByIsAscending, DeviceHardwareId=DeviceHardwareId, MaxRecords=MaxRecords, MessageTypePrivate=Filter_MessageTypePrivate, MessageTypePublic=Filter_MessageTypePublic, SelectedHistorySearch=SelectedHistorySearch)
  if Local_OnlyShowUnread
    call-server ListFilter(Condition=not IsRead, SourceList=Get_UI_Notifications.Messages)
    call-server ListAppendAll(List=UI_NotificationItemList, SourceList=ListFilter.FilteredList)
    end
  else
    assign: UI_NotificationItemList = Get_UI_Notifications.Messages; HasUnreadMessages = Get_UI_Notifications.HasUnreadMessages; UnreadNotificationsCount = Get_UI_Notifications.CountUnreadMessages
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- data action **GetDateRanges** fetch=OnDemand; outputs: DateRangesList: Updates_DateRanges List; OnAfterFetch → OnAfterFetch_GetDateRanges
  ```
  aggregate GetUpdatesDateRanges max=4: sources[Updates_DateRanges] sort[Updates_DateRanges.Order Ascending]
  assign: DateRangesList = ConvertList(GetUpdatesDateRanges.List,  {})
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block Layout_MainPages_Upgrade (UBTConnectLibrary.Layouts)
  args: isGrayBackground=True
  on OnHeaderScrolled → Handler_OnHeaderScrolled(Event_IsHeaderScrolled=Event_IsHeaderScrolled)
  placeholder Placeholder_Header_Title:
    if IsToggleSearch #If_IsSearchToggled_Input
      if IsHeaderScrolled #If_IsHeaderScrolled_Search
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: ExtendedClasses="full-width", Options={ DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_AlignItems.Center, FlexDirection: Entities.UBT_FlexDirection.Row } }
          placeholder Content:
            block Input (UBTConnectLibrary.ConnectPatterns) #Search_PostScroll
              args: In_Options={ InitalString: CurrentSearchString, SearchPrompt: "Search notifications", Debounce_DelayMS: 300, BorderRadius: Entities.Shape.Rounded, EnableAutocompleteHTML: False, IsSyncValueWithInput: True }
              on Event_OnChange → Handler_OnChangeSearchInput(Event_CurrentString=Event_CurrentString)
              on Event_Submit → Handler_FilterSearchText(Text=Event_SubmittedString)
              on Event_ClearString → Handler_FilterSearchText(Text="")
      else
        text: Notifications
        block Badge (UBTConnectLibrary.OutSystemsUIOverrides)
          args: Color=Entities.UBT_Color.RedDark, MaxNumber=9, Number=ReadCount, Size=Entities.UBT_Size.ExtraSmall
    else
      text: Notifications
      block Badge (UBTConnectLibrary.OutSystemsUIOverrides)
        args: Color=Entities.UBT_Color.RedDark, MaxNumber=9, Number=ReadCount, Size=Entities.UBT_Size.ExtraSmall
  placeholder Placeholder_Header_Right:
    if IsHeaderScrolled #If_IsHeaderScrolled_Icons
      if IsToggleSearch #If_IsSearchToggled_Icon
      else
        block Icon (UBTConnectLibrary.ConnectPatterns) #Icon_Search
          args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.Search, In_SizeId=Entities.UBT_IconsSize.Base_24
          on Click → Handler_ToggleSearch
      block Icon (UBTConnectLibrary.ConnectPatterns) #Icon_Kebab
        args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.MoreVertical, In_SizeId=Entities.UBT_IconsSize.Base_24
        on Click → OnClick_KebabButton
    else
      block Icon (UBTConnectLibrary.ConnectPatterns) #Icon_Kebab2
        args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.MoreVertical, In_SizeId=Entities.UBT_IconsSize.Base_24
        on Click → OnClick_KebabButton
  placeholder Placeholder_Header_Input:
    if IsHeaderScrolled
    else
      block Input (UBTConnectLibrary.ConnectPatterns) #Search_PreScroll
        args: In_Options={ InitalString: CurrentSearchString, SearchPrompt: "Search notifications", Debounce_DelayMS: 300, BorderRadius: Entities.Shape.Rounded, EnableAutocompleteHTML: False, IsSyncValueWithInput: True }
        on Event_ClearString → Handler_FilterSearchText(Text="")
        on Event_OnChange → Handler_OnChangeSearchInput(Event_CurrentString=Event_CurrentString, In_IsToggleSearch=True)
        on Event_Submit → Handler_FilterSearchText(Text=Event_SubmittedString)
  placeholder HeaderContent:
    block Notifications_Action (UBTConnect.App_Notifications) #Notifications_Action
      args: BottomSheetId=Filter_BottomSheetId, HaveFiltersApplied=HasFiltersApplied, isLoaded=True, ShowSubscriptionOnClick=BottomSheetId_ShowSubscription
      on OnlyShowUnread → Handler_OnlyShowUnread(OnlyShowUnread=OnlyShowUnread)
    container
      block Notifications_Header (UBTConnect.App_Notifications) #Notifications_ListHeader
        args: BadgeNumber=CurrentBreakpoint.BadgeCount, isLoading=isLoading, Title=CurrentBreakpoint.SectionName
  placeholder Content:
    if not isLoading and FetchNotifications.IsDataFetched and FetchNotifications.UI_NotificationItemList.Empty #If_HasNoNotifications
      if SelectedHistorySearch <> ""
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small } }
          placeholder Content:
            block EmptyList (UBTConnectLibrary.ConnectPatterns)
              args: IconId=Entities.UBT_Icons2.Search
              placeholder TitlePlaceholder:
                expr: "No results found for '" + SelectedHistorySearch + "'"
              placeholder TextPlaceholder:
                expr: "Sorry, we couldn't find any results for your search. Please check your spelling or try different keywords."
      else
        block Notifications_NoItemsFound (UBTConnect.App_Notifications)
    else
      block NotificationsListBreakpoints (UBTConnect.App_Notifications)
        args: Breakpoints=Breakpoints, IsLoading=isLoading, UI_NotificationItemList=FetchNotifications.UI_NotificationItemList
        on NotificationDetail → Handler_NotificationDetail(IsRead=IsRead, MessageInstanceId=MessageInstanceId)
        on UpdateReadCount → Handler_UpdateReadCount(AddToCount=AddToCount, IsDelete=IsDelete, IsRead=IsRead)
      container
        list source=FetchNotifications.UI_NotificationItemList mode=Default #List_Notifications  [style="list list-group background-neutral-0 updates-list"; disable-virtualization=False]
          block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
            args: In_IsLoading=isLoading
            placeholder Placeholder_LoadingSection:
              container  [style="updates-list__list-item"; data-plus-date=FetchNotifications.UI_NotificationItemList.Current.DateTimeCreated]
                block Notification_ListItem (UBTConnectLibrary.ConnectCorePatterns) #NotificationItem
                  args: In_AvatarImage_Left={ URL: FetchNotifications.UI_NotificationItemList.Current.ProfileIconURL }, In_Description=FetchNotifications.UI_NotificationItemList.Current.Title, In_IsDoubleAvatar=False, In_IsRead=FetchNotifications.UI_NotificationItemList.Current.IsRead, In_NotificationDate=FetchNotifications.UI_NotificationItemList.Current.DateTimeCreated
                block ScrollAnchor (NavigationHandler.ScrollAnchors)
                  args: Id=FetchNotifications.UI_NotificationItemList.Current.Id
  placeholder Bottom:
    block BottomBarMenu (UBTConnect.App_Common)
      args: ActiveItem=NullTextIdentifier()
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
if False #HideInServiceStudio_BottomSheet  [DEAD BRANCH: condition is a constant]
else
  block Notifications_SortSheet (UBTConnect.App_Notifications)
    on ApplyFilters → Handler_ApplyFilters(Event_HasFiltersApplied=HasFiltersApplied, IsNewestToOldest=IsNewestToOldest)
    on SheetInitialized → Handler_FilterSheetSheetInitialized(SheetId=SheetId)
    on Loaded → Handler_FilterSheetLoaded(ShowSubscriptionOnClick=ShowSubscriptionOnClick)
if False #HideInServiceStudio_BottomSheet2  [DEAD BRANCH: condition is a constant]
else
  block Notifications_MoreActionSheet (UBTConnect.App_Notifications)
    on DeleteAll → Handler_MoreActionSheetDeleteAll
    on SheetInitialized → Handler_MoreActionSheetSheetInitialized(SheetId=SheetId)
    on Loaded → Handler_MoreActionSheetLoaded(ShowSubscriptionOnClick=ShowSubscriptionOnClick)
    on ApplyFilters → Handler_ApplyFilters(Event_HasFiltersApplied=HasFiltersApplied)
    on MarkAllAsRead → Handler_MoreActionSheetMarkAllAsRead
```

#### Screen actions
- **DestroyEventListener**
  ```
  javascript DestroyEventListener(In_EventListener=EventListener, In_EventListenerTarget=EventListenerTarget)
    | if($parameters.In_EventListener && $parameters.In_EventListenerTarget){
    |     $parameters.In_EventListenerTarget.removeEventListener('scroll',$parameters.In_EventListener);
    | }
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_ApplyFilters** inputs: Event_HasFiltersApplied: Boolean (mandatory); IsNewestToOldest: Boolean = True
  ```
  assign (Setup Variables): HasFiltersApplied = Event_HasFiltersApplied
  assign: ShowMarkAll = False
  assign (isLoading): isLoading = True
  assign: OrderByIsAscending = not IsNewestToOldest
  call RefreshNotifications() as RefreshUpdates
  end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] call ScrollTop()
    end
  ```
- **Handler_FilterSearchText** inputs: Text: Text (mandatory)
  ```
  assign: CurrentSearchString = Text
  if Text = Filter_Updates.Filter_SearchText
    end
  else
    assign (Set Text Filter): Filter_Updates.Filter_SearchText = Text; SelectedHistorySearch = Text
    assign: ShowMarkAll = False
    call ScrollTop()
    assign (isLoading): isLoading = True
    call RefreshNotifications()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_FilterSheetLoaded** inputs: ShowSubscriptionOnClick: Boolean (mandatory)
  ```
  assign (Setup Bottom Sheet Info): BottomSheetId_IsLoaded = True; BottomSheetId_ShowSubscription = ShowSubscriptionOnClick
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_FilterSheetSheetInitialized** inputs: SheetId: Text (mandatory)
  ```
  assign: Filter_BottomSheetId = SheetId
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_MarkAllAsRead**
  ```
  assign: ShowMarkAll = False
  assign: isLoading = True
  call-server Action_UI_UpdateItem_MarkAllAsRead(Filter_Updates=Filter_Updates)
  call SetBadgeCountsToZero()
  assign: isLoading = False
  call Directory_Updates_RefreshBottomBarCount(ForceRefresh=True)
  end
  on exception All Exceptions (log=True)
  assign: isLoading = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
    [DISABLED] call Directory_Updates_MarkAllAsRead(In_UI_UpdateItemList=ConvertList(FetchNotifications.UI_NotificationItemList,  {IsRead:"IsRead"}))
    [DISABLED] assign (Set Read List): FetchNotifications.UI_NotificationItemList = Directory_Updates_MarkAllAsRead.Out_UI_UpdateItemList
    end
  ```
- **Handler_MarkAsRead** inputs: UpdateItemId: UpdateItem Identifier (mandatory); CurrentPosition: Integer (mandatory)
  ```
  call RefreshUpdatesAndFlags(CurrentPosition=CurrentPosition)
  call Directory_Updates_RefreshBottomBarCount(ForceRefresh=True)
  end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] call-server Action_UI_UpdateItem_MarkAsRead(UpdateItemId=UpdateItemId)
    [DISABLED] assign (Set IsRead to True): FetchNotifications.UI_NotificationItemList[CurrentPosition].IsRead = True
    end
  ```
- **Handler_MarkAsUnread** inputs: UpdateItemId: UpdateItem Identifier (mandatory); CurrentPosition: Integer (mandatory)
  ```
  call RefreshUpdatesAndFlags(CurrentPosition=CurrentPosition)
  call Directory_Updates_RefreshBottomBarCount(ForceRefresh=True)
  end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] call-server Action_UI_UpdateItem_MarkAsUnread(UpdateItemId=UpdateItemId)
    [DISABLED] assign (Set IsRead to False ): FetchNotifications.UI_NotificationItemList[CurrentPosition].IsRead = False
    end
  ```
- **Handler_MoreActionSheetDeleteAll**
  ```
  assign: isLoading = True
  call-server Delete_Notifications(Messages=FetchNotifications.UI_NotificationItemList)
  assign: isLoading = False
  call RefreshNotifications()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_MoreActionSheetLoaded** inputs: ShowSubscriptionOnClick: Boolean (mandatory)
  ```
  assign (Setup Bottom Sheet Info): BottomSheetId_IsLoaded = True; BottomSheetId_ShowSubscription = ShowSubscriptionOnClick
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_MoreActionSheetMarkAllAsRead**
  ```
  assign: isLoading = True
  call-server MarkAllAsReadNotifications(DeviceHardwareId=DeviceHardwareId, IsPrivate=Filter_MessageTypePrivate, IsPublic=Filter_MessageTypePublic, SearchTerm=CurrentSearchString)
  call SetBadgeCountsToZero()
  assign: isLoading = False
  call Directory_Updates_RefreshBottomBarCount(ForceRefresh=True)
  call RefreshNotifications()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_MoreActionSheetSheetInitialized** inputs: SheetId: Text (mandatory)
  ```
  assign: MoreAction_BottomSheetId = SheetId
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_NotificationDetail** inputs: MessageInstanceId: MessageInstance Identifier (mandatory); IsRead: Boolean (mandatory)
  ```
  if IsRead
    [M1] navigate → NotificationDetails(MessageInstanceId=MessageInstanceId) transition=Inherited
  else
    call-server MarkAsRead(MessageInstanceId=MessageInstanceId)
    → continues at [M1]
  ```
- **Handler_OnChangeSearchInput** inputs: Event_CurrentString: Text (mandatory); In_IsToggleSearch: Boolean
  ```
  assign: CurrentSearchString = Event_CurrentString
  if In_IsToggleSearch
    assign: IsToggleSearch = True
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnHeaderScrolled** inputs: Event_IsHeaderScrolled: Boolean (mandatory)
  ```
  assign: IsHeaderScrolled = Event_IsHeaderScrolled
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnlyShowUnread** inputs: OnlyShowUnread: Boolean (mandatory)
  ```
  assign: Local_OnlyShowUnread = OnlyShowUnread
  refresh data FetchNotifications
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_ScrollEnding_UpdateBreakpoint** inputs: In_Date: Text (mandatory)
  ```
  call Directory_Updates_GetListBreakpoint(In_Breakpoints=Breakpoints, In_CurrentUpdateDate=TextToDate(In_Date), In_PreviousUpdateDate=CurrDate())
  assign: CurrentBreakpoint = Directory_Updates_GetListBreakpoint.Out_ListBreakpoint
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_ToggleSearch**
  ```
  assign: IsToggleSearch = not IsToggleSearch
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_UpdateReadCount** inputs: AddToCount: Boolean (mandatory); IsDelete: Boolean (mandatory); IsRead: Boolean (mandatory)
  ```
  if AddToCount
    assign: ReadCount = ReadCount + 1
    end
  else
    if IsRead
      end
    else
      assign: ReadCount = ReadCount - 1
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **InitializeSetting**
  ```
  if (Is User Logged?) GetUserId() <> NullIdentifier()
    assign (Set True): ShowWarning = True; Filter_MessageTypePrivate = SelectedFilter_MessageTypePrivate; Filter_MessageTypePublic = SelectedFilter_MessageTypePublic
    [M1] assign: Filter_OrderASC = SelectedFilter_OrderASC; Filter_OrderDESC = not SelectedFilter_OrderASC
    end
  else
    assign (Set False): ShowWarning = False; Filter_MessageTypePrivate = False; Filter_MessageTypePublic = True
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] assign: WarningMessage = "To access your Private Messages," + NewLine() +  "please login to the " + If(IsConnectMobile(), "Connect App.", "CommunityHub App.")
    end
  ```
- **OnAfterFetch_FetchNotifications**; locals: EmptyBreakpoint: UI_UpdateItem_Breakpoint
  ```
  call App_Notifications_GetBreakpoints(DateRanges=DateRanges, UI_NotificationItemList=FetchNotifications.UI_NotificationItemList)
  assign (Set Breakpoints): Breakpoints = App_Notifications_GetBreakpoints.Breakpoints
  if (Has Breakpoints?) not App_Notifications_GetBreakpoints.Breakpoints.Empty
    assign: CurrentBreakpoint = Breakpoints[0]
    [M1] assign: ShowMarkAll = FetchNotifications.UnreadNotificationsCount > 0
    assign: 
    assign: ReadCount = FetchNotifications.UnreadNotificationsCount
    assign (isLoading): isLoading = False
    call DestroyEventListener()
    call SetupScrollListener()
    call Directory_Updates_RefreshBottomBarCount(ForceRefresh=True)
    end
  else
    assign: CurrentBreakpoint = EmptyBreakpoint
    → continues at [M1]
  on exception All Exceptions (log=True)
  assign: isLoading = False
  raise BubbleGenericException: AllExceptions.ExceptionMessage
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch_GetDateRanges**
  ```
  call App_Notifications_AugmentDateRanges(DateRangeList=GetDateRanges.DateRangesList)
  assign: DateRanges = App_Notifications_AugmentDateRanges.DateRanges
  call SetDefaultFilters()
  call RefreshNotifications()
  end
  on exception All Exceptions (log=True)
  assign: isLoading = False
  raise BubbleGenericException: AllExceptions.ExceptionMessage
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_KebabButton**
  ```
  call BottomSheetOpen(WidgetId=MoreAction_BottomSheetId)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **RefreshNotifications**
  ```
  refresh data FetchNotifications
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **RefreshUpdatesAndFlags** inputs: CurrentPosition: Integer
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] call Directory_Updates_GetUpdatedBreakpoints(Breakpoints=Breakpoints, DateRanges=DateRanges, SelectedPosition=CurrentPosition, UI_UpdateItemList=ConvertList(FetchNotifications.UI_NotificationItemList,  {IsRead:"IsRead"}))
    [DISABLED] assign (Update Breakpoints): Breakpoints = Directory_Updates_GetUpdatedBreakpoints.UpdatedBreakpoints
    [DISABLED] if (Updating Current?) CurrentBreakpoint.SectionName = Directory_Updates_GetUpdatedBreakpoints.ChangedBreakpoint.SectionName
      [DISABLED] call UpdateCurrentBreakpoint(Breakpoint=Directory_Updates_GetUpdatedBreakpoints.ChangedBreakpoint.SectionName)
      [M1] [DISABLED] call SetMarkAllTag()
    else
      → continues at [M1]
    end
  ```
- **ScreenEvent_OnInitialize**; locals: EntitiesCarousel_SwippedItems: EntitiesCarousel_SwippedItem List
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache
    javascript FocusCursor(InputWidgetID=Search_PreScroll.Id)
      | setTimeout(function() {
      |     var input = document.getElementById($parameters.InputWidgetID);
      |     if(input){
      |         input.focus();
      |     }
      | }, 200)
    call GetPreloadObject()
    if GetPreloadObject.Preload <> NullObject()
      call AssignFromObject(ObjectValue=GetPreloadObject.Preload, ToObjectRef=ToObject(EntitiesCarousel_SwippedItems))
      [M1] for each EntitiesCarousel_SwippedItems
        if EntitiesCarousel_SwippedItems.Current.ListPosition < FetchNotifications.UI_NotificationItemList.Length and\nEntitiesCarousel_SwippedItems.Current.EntityItemId = FetchNotifications.UI_NotificationItemList[EntitiesCarousel_SwippedItems.Current.ListPosition].Id
          assign: FetchNotifications.UnreadNotificationsCount = FetchNotifications.UnreadNotificationsCount - 1; FetchNotifications.UI_NotificationItemList[EntitiesCarousel_SwippedItems.Current.ListPosition].IsRead = True
          call ListIndexOf(Condition=(DateTimeToDate(FetchNotifications.UI_NotificationItemList[EntitiesCarousel_SwippedItems.Current.ListPosition].DateTimeCreated) >= DateRange.From) \nand \n(DateTimeToDate(FetchNotifications.UI_Notifi…, List=Breakpoints)
          if ListIndexOf.Position <> -1
            assign: Breakpoints[ListIndexOf.Position].BadgeCount = Breakpoints[ListIndexOf.Position].BadgeCount - 1
            [M2] assign (<<): 
            → continues at [M1]
          else
            → continues at [M2]
        else
          → continues at [M1]
      end for
      end
    else
      end
  else
    assign: SelectedFilter_MessageTypePrivate = True; SelectedFilter_MessageTypePublic = True; SelectedFilter_OrderASC = False
    call InitializeSetting()
    assign (Set Initial Breakpoint): CurrentBreakpoint.Position = 0; CurrentBreakpoint.SectionName = Entities.Updates_DateRanges.Today; CurrentBreakpoint.BadgeCount = 0
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    [DISABLED] call None() as GetThisDeviceId
    [DISABLED] assign: DeviceHardwareId = GetThisDeviceId.DeviceHardwareId
    end
    end
  ```
- **ScreenEvent_OnReady**
  ```
  javascript SetStickyHeaderHeight()
    | function setStickyTopOffsetVariable() {
    |   const headerEl = document.querySelector('.header');
    |   const updatesHeaderEl = document.querySelector('.updates-list__header');
    |   const scrollContainer = document.querySelector('.active-screen.screen-container');
    | 
    |   if (!headerEl || !updatesHeaderEl || !scrollContainer) {
    |     console.warn('Could not find element(s) for offset calculation:', { headerEl, updatesHeaderEl, scrollContainer });
    |     return;
    |   }
    | 
    |   const headerHeight = headerEl.getBoundingClientRect().height;
    |   const updatesHeaderHeight = updatesHeaderEl.getBoundingClientRect().height;
    |   const topOffsetPx = headerHeight + updatesHeaderHeight + 9;
    | 
    |   scrollContainer.style.setProperty('--sticky-top-offset', `${topOffsetPx}px`);
    | 
    |   if (window._stickyDebug) {
    |     console.log('Set --sticky-top-offset:', { headerHeight, updatesHeaderHeight, topOffsetPx });
    |   }
    | }
    | 
    | setStickyTopOffsetVariable();
  assign (isLoading): isLoading = True
  call GetSkeletonList_UI_Notification(ListLength=10)
  assign (Setup Skeleton Data): FetchNotifications.UI_NotificationItemList = GetSkeletonList_UI_Notification.UI_NotificationItems
  refresh data GetDateRanges
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **SectionHeaderEvent_UpdateListHeader** inputs: Event_Breakpoint: UI_UpdateItem_Breakpoint (mandatory)
  ```
  assign: CurrentBreakpoint = Event_Breakpoint
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **SetBadgeCountsToZero**
  ```
  [M1] for each Breakpoints
    assign (Set BadgeCount to 0): Breakpoints.Current.BadgeCount = 0
    → continues at [M1]
  end for
  assign (Set Current Breakpoint): CurrentBreakpoint.BadgeCount = 0
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **SetDefaultFilters**
  ```
  if (Needs Dates?) Filter_Updates.Filter_Date.Date_From = NullDate() or Filter_Updates.Filter_Date.Date_To = NullDate()
    call ListFilter(Condition=Range = Entities.Updates_DateRanges.Older, SourceList=DateRanges) as ListFilter_Older
    call ListFilter(Condition=Range = Entities.Updates_DateRanges.Today, SourceList=DateRanges) as ListFilter_Today
    assign (Set Dates): Filter_Updates.Filter_Date.Date_From = ListFilter_Older.FilteredList.Current.From; Filter_Updates.Filter_Date.Date_To = ListFilter_Today.FilteredList.Current.To
    [M1] if (Needs Status?) Filter_Updates.Filter_ReadOnly = NullTextIdentifier()
      assign (Set Status): Filter_Updates.Filter_ReadOnly = Entities.Choice.None
      [M2] if (Needs Sort?) Filter_Updates.Sort_ByNewest = NullTextIdentifier()
        assign (Set Sort): Filter_Updates.Sort_ByNewest = Entities.Choice.Yes
        end
      else
        end
    else
      → continues at [M2]
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **SetMarkAllTag**
  ```
  call ListFilter(Condition=not IsRead, SourceList=FetchNotifications.UI_NotificationItemList) as ListFilter_GetUnread
  assign: ShowMarkAll = not ListFilter_GetUnread.FilteredList.Empty
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **SetupScrollListener**
  ```
  javascript SetupScrollEndListener(In_TopElementId=Notifications_ListHeader.Id)
    | function setupScrollEndCorrection(scrollContainerSelector, stickyHeaderId, listItemSelector) {
    |   if (typeof window._stickyDebug === 'undefined') {
    |     window._stickyDebug = false;
    |   }
    | 
    |   const scrollContainer = document.querySelector(scrollContainerSelector);
    |   const stickyHeaderEl = document.getElementById(stickyHeaderId);
    | 
    |   if (!scrollContainer || !stickyHeaderEl) {
    |     console.warn('Missing element(s):', { scrollContainer, stickyHeaderEl });
    |     return;
    |   }
    | 
    |   function resolveCurrentDate(retriesLeft = 3) {
    |     const headerRect = stickyHeaderEl.getBoundingClientRect();
    |     const boundaryY = headerRect.bottom; // the line we're checking against
    | 
    |     // grab all currently rendered list items
    |     const allItems = [...document.querySelectorAll(listItemSelector)];
    | 
    |     // find the item whose bounds straddle the boundary line
    |     // i.e. top is above (or at) the line, and bottom is below (or at) the line
    |     let currentItem = null;
    |     for (const item of allItems) {
    |       const rect = item.getBoundingClientRect();
    |       if (rect.top <= boundaryY && rect.bottom >= boundaryY) {
    |         currentItem = item;
    |         break; // there should only be one true match at a time
    |       }
    |     }
    | 
    |     if (!currentItem) {
    |       // virtualized list may not have committed the correct render window yet —
    |       // retry on the next frame(s) instead of giving up immediately
    |       if (retriesLeft > 0) {
    |         if (window._stickyDebug) {
    |           console.warn(`No list item currently intersects the sticky header boundary — retrying (${retriesLeft} left)`);
    |         }
    |         requestAnimationFrame(() => resolveCurrentDate(retriesLeft - 1));
    |       } else {
    |         if (window._stickyDebug) {
    |           console.warn('No list item currently intersects the sticky header boundary after retries — giving up.');
    |         }
    |       }
    |       return;
    |     }
    | 
    |     const plusDate = currentItem.getAttribute('data-plus-date');
    | 
    |     if (window._stickyDebug) {
    |       console.log('%c SCROLLEND CORRECTION', 'color: white; background: darkorange; padding: 2px 6px; border-radius: 3px;');
    |       console.log('Resolved item:', currentItem, '| data-plus-date:', plusDate);
    |     }
    | 
    |     $actions.Handler_ScrollEnding_UpdateBreakpoint(plusDate);
    | 
    |     if (window._stickyDebug) {
    |       console.log(plusDate);
    |     }
    |   }
    | 
    |   scrollContainer.addEventListener('scrollend', () => resolveCurrentDate(), { passive: true });
    |   resolveCurrentDate(); // run once on load to establish correct initial state
    | 
    |   return resolveCurrentDate;
    | }
    | 
    | window.setTimeout(() => setupScrollEndCorrection(
    |   '.active-screen.screen-container',
    |   $parameters.In_TopElementId,
    |   '.updates-list__list-item' // adjust to whatever the actual list item selector is
    | ), 0);
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **SetupScrollThreshold**
  ```
  json-serialize JSONSerialize_Breakpoints = Breakpoints (dates ISO)
  javascript SetupScrollThresholds(In_Breakpoints=JSONSerialize_Breakpoints.JSON, In_HeaderSearchClass=".header-top-search", In_ListId=List_Notifications.Id, In_ScrollContainer=".active-screen.screen-container:has(.layout)", In_UpdateItemClass=".ubt-update-item") → Out_DestroyListener: Object; Out_DestroyListenerTarget: Object
    | const scrollCont = document.querySelector($parameters.In_ScrollContainer);
    | const headerSearch = document.querySelector($parameters.In_HeaderSearchClass);
    | const updateItem = document.getElementById($parameters.In_ListId).querySelector($parameters.In_UpdateItemClass);
    | const breakpoints = JSON.parse($parameters.In_Breakpoints);
    | 
    | if(scrollCont && headerSearch && updateItem && (Array.isArray(breakpoints) && breakpoints.length !== 0)){
    |     const itemHeight = updateItem.offsetHeight;
    |     let previousBreakpoint = -1;
    |     let isDebouncing = { value: false };
    | 
    |     function getIndex(scrollTop) {
    |         const index = Math.floor((scrollTop - headerSearch.offsetHeight) / itemHeight);
    |         if (!Number.isFinite(index)) {
    |             return 0;
    |         }
    |         return Math.max(0, index);
    |     }
    | 
    |     function getCurrentBreakpoint(index) {
    |         for (let i = breakpoints.length - 1; i >= 0; i--) {
    |             if (index >= breakpoints[i].position) {
    |                 return breakpoints[i];
    |             }
    |         }
    |         return breakpoints[0];
    |     }
    | 
    |     function onScrollThreshold(){
    | 
    |         const currentScroll = scrollCont.scrollTop;
    |         const currentBreakpoint = getCurrentBreakpoint(getIndex(currentScroll));
    | 
    |         if(currentBreakpoint !== previousBreakpoint){
    |             previousBreakpoint = currentBreakpoint;
    |             $actions.UpdateCurrentBreakpoint(currentBreakpoint.sectionName);
    |         }
    |     }
    | 
    |     const processScroll = () => {
    |         ScrollEvent.debounceScroll(onScrollThreshold, isDebouncing);
    |     }
    | 
    |     scrollCont.addEventListener('scroll', processScroll, { passive: true });
    |     
    |     $parameters.Out_DestroyListener = processScroll;
    |     $parameters.Out_DestroyListenerTarget = scrollCont;
    | }
  assign (Setup Scroll Objects): EventListener = SetupScrollThresholds.Out_DestroyListener; EventListenerTarget = SetupScrollThresholds.Out_DestroyListenerTarget
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **UpdateCurrentBreakpoint** inputs: Breakpoint: Text (mandatory)
  ```
  call ListFilter(Condition=SectionName = TextToIdentifier(Breakpoint), SourceList=Breakpoints) as ListFilterBreakpoints
  assign: CurrentBreakpoint = If(not ListFilterBreakpoints.FilteredList.Empty, ListFilterBreakpoints.FilteredList.Current, CurrentBreakpoint)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
