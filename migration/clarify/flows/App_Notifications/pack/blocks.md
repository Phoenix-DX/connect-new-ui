# Pack of UI flow App_Notifications (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: MessageListItem, NotificationsList, NotificationsListBreakpoints, Notifications_Action, Notifications_ConfirmDialog, Notifications_Header, Notifications_MoreActionSheet, Notifications_NoItemsFound, Notifications_SortSheet
Blocks of other UBTConnect flows that the flow uses (transitive): 20

## Block MessageListItem (flow App_Notifications)
- public: False; stylesheet: yes
- input parameters: Title: Text (mandatory); IconURL: Text (mandatory); UserId: User Identifier (mandatory); MemberId: Text (mandatory); DateTimeCreated: Date Time (mandatory); IsRead: Boolean (mandatory)
- events: -
- local variables: UserPhotoURL: Text; IsFetchingUserPhoto: Boolean
- lifecycle: OnReady → OnReady
- used by (UBTConnect): nothing in this module

#### Widget tree
```
container #Message_List_Item_Cont  [style="notification-card-container "+If(not IsRead,"notification-unread","")]
  container #Message_List_Item_Image_Cont  [style="width15 display-flex justify-content-center margin-right5"]
    if IconURL <> NullTextIdentifier() #IsIconURLDefined
      image IconURL type=External  [style="notification-list-icon-badge"]
    else
      if IsFetchingUserPhoto #FetchingPhoto
        image #Message_List_Item_Image_Fetching User_rectangle type=Static  [style="notification-list-icon-badge"]
      else
        if UserPhotoURL = "" #HasFetchedAndNotFound
          image #Message_List_Item_Image User_rectangle type=Static  [style="notification-list-icon-badge"]
        else
          image #Sending_User_Photo UserPhotoURL type=External  [style="notification-list-icon-badge"; data-error-placeholder-src=Images.ubtlogo2.URL]
  container #Message_List_Item_Text_Cont  [style="notification-card-titlecontainer"]
    container #Message_List_Item_Title_Cont  [style="bold text-ellipsis"]
      expr #Message_List_Item_Title: Title  [style="notification-card-title"]
    container #Message_List_Item_Info_Cont
      expr #Message_List_Item_Info: DateTimeCreated  (example: 12:20pm Tue 24/08/20)  [style="notification-card-time"]
  if IsRead
  else
    container
      image NotificationDot type=Static
```

#### Block actions
- **OnReady**
  ```
  if IconURL = "" and UserId <> NullIdentifier() and UserPhotoURL =""
    assign: IsFetchingUserPhoto = True
    call Cache_SignedImageURL_Get(EntityId=TextToInteger(MemberId), Size=Entities.ImageSize.Small, Type=Entities.Connect_Entity.Member)
    assign: UserPhotoURL = Cache_SignedImageURL_Get.URL
    assign: IsFetchingUserPhoto = False
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Notifications_Action (flow App_Notifications)
- public: False
- input parameters: HaveFiltersApplied: Boolean (mandatory); BottomSheetId: Text (mandatory); isLoaded: Boolean (mandatory); ShowSubscriptionOnClick: Boolean (mandatory)
- events: OnlyShowUnread(OnlyShowUnread: Boolean (mandatory)) mandatory
- local variables: IsOnlyShowUnRead: Boolean
- lifecycle: none
- used by (UBTConnect): Notifications

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base, TopSizeId: Entities.UBT_Size.Small }, MarginSize: { TopSizeId: Entities.UBT_Si…
  placeholder Content:
    block Columns_Two (UBTConnectLibrary.BasePatterns)
      args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast }
      placeholder Left:
        block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
          args: In_IsLoading=not isLoaded
          placeholder Placeholder_LoadingSection:
            if HaveFiltersApplied #If_HaveFiltersApplied
              block Icon (UBTConnectLibrary.ConnectPatterns)
                args: In_ColorId=Entities.UBT_Color.Red, In_ExtendedClasses="header-filter-enabled", In_IconId=Entities.UBT_Icons2.ErrorFill, In_SizeId=Entities.UBT_IconsSize.NonStandard_14
            container  [style="display-flex"]
              block IconText (UBTConnectLibrary.ConnectPatterns)
                args: Text="Sort", TextOptions={ Color: Entities.UBT_Color.Primary }
                on Clicked → IconClick
                placeholder Icon:
                  block Icon (UBTConnectLibrary.ConnectPatterns)
                    args: In_ColorId=Entities.UBT_Color.Primary, In_IconId=Entities.UBT_Icons2.Tune, In_SizeId=Entities.UBT_IconsSize.Base_24, In_Visible=True
                    on Click → IconClick
              block Icon (UBTConnectLibrary.ConnectPatterns)
                args: In_ColorId=Entities.UBT_Color.Primary, In_IconId=Entities.UBT_Icons2.ExpandMore, In_SizeId=Entities.UBT_IconsSize.Base_24, In_Visible=True
                on Click → IconClick
      placeholder Right:
        block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
          args: In_IsLoading=not isLoaded
          placeholder Placeholder_LoadingSection:
            if HaveFiltersApplied #If_HaveFiltersApplied2
              block Icon (UBTConnectLibrary.ConnectPatterns)
                args: In_ColorId=Entities.UBT_Color.Red, In_ExtendedClasses="header-filter-enabled", In_IconId=Entities.UBT_Icons2.ErrorFill, In_SizeId=Entities.UBT_IconsSize.NonStandard_14
            container  [style="display-flex"]
              label for=Switch_IsOnlyShowUnRead  [style="margin-right-s"]
                text: Only show unread
              switchwidget #Switch_IsOnlyShowUnRead var=IsOnlyShowUnRead style="switch" onchange → Switch_IsOnlyShowUnReadOnChange  [style="switch"]
```

#### Block actions
- **IconClick**
  ```
  if isLoaded
    if ShowSubscriptionOnClick
      call App_Subscription_ShowUpgradePopUp()
      end
    else
      call BottomSheetOpen(WidgetId=BottomSheetId)
      end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **Switch_IsOnlyShowUnReadOnChange**
  ```
  trigger event OnlyShowUnread(OnlyShowUnread=IsOnlyShowUnRead)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Notifications_ConfirmDialog (flow App_Notifications)
- public: False
- input parameters: IsSingle: Boolean (mandatory)
- events: Cancel() mandatory; Confirm() mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): MoreActionSheet, NotificationsList

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: ExtendedClasses="center-content", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base }, BorderOptions: { Radius: { GeneralSizeId: Entities.UBT_Shape.Large } }, Display…
  placeholder Content:
    block CircleButton (UBTConnectLibrary.ConnectPatterns)
      args: BackgroundColorId=Entities.UBT_Color.CyanLightest
      placeholder Icon:
        block Icon (UBTConnectLibrary.ConnectPatterns)
          args: In_ColorId=Entities.UBT_Color.Primary, In_IconId=Entities.UBT_Icons2.Delete
    block CustomText (UBTConnectLibrary.BasePatterns)
      args: In_PaddingOptions={ TopSizeId: Entities.UBT_Size.Medium }, In_Text=If(IsSingle, "Delete notification", "Delete all notifications?"), In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
    block CustomText (UBTConnectLibrary.BasePatterns)
      args: In_PaddingOptions={ TopSizeId: Entities.UBT_Size.Small, BottomSizeId: Entities.UBT_Size.Medium }, In_Text=If(IsSingle, "Are you sure you want to delete this notification? This action can't be undone.", "Are you sure you want to delete all notifications? This action can't be undone."), In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.Regular }
block Columns_Two (UBTConnectLibrary.BasePatterns)
  args: ColumnOptions={  }
  placeholder Left:
    button onclick → Cancel  [style="btn notifications-cancel_BTN"; width=11 col]
      text: Cancel  [classes="text-cyan-dark"]
  placeholder Right:
    button onclick → Confirm  [style="btn notifications-delete_BTN"; width=11 col]
      text: Delete
```

## Block Notifications_Header (flow App_Notifications)
- public: False
- input parameters: Title: Text; BadgeNumber: Integer (mandatory); isLoading: Boolean (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): Notifications, NotificationsListBreakpoints

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: ExtendedClasses="updates-list__header", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.ExtraSmall, HorizontalSizeId: Entities.UBT_Size.Base }, MarginSize: {  }, BorderOption…
  placeholder Content:
    block Columns_Two (UBTConnectLibrary.BasePatterns)
      placeholder Left:
        block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
          args: In_IsLoading=isLoading
          placeholder Placeholder_LoadingSection:
            block IconText (UBTConnectLibrary.ConnectPatterns)
              args: IsIconOnRight=True, SpacingSize=Entities.UBT_Size.ExtraSmall, Text=Title, TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
              placeholder Icon:
                if BadgeNumber > 0 #If_HasBadge
                  block Badge (UBTConnectLibrary.OutSystemsUIOverrides)
                    args: Color=Entities.UBT_Color.RedDark, MaxNumber=9, Number=BadgeNumber, Size=Entities.UBT_Size.ExtraSmall
```

## Block Notifications_MoreActionSheet (flow App_Notifications)
- public: False
- input parameters: -
- events: ApplyFilters() mandatory; DeleteAll() mandatory; Loaded(ShowSubscriptionOnClick: Boolean (mandatory)) mandatory; MarkAllAsRead() mandatory; SheetInitialized(SheetId: Text (mandatory)) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): Notifications

#### Widget tree
```
block MoreActionSheet (UBTConnect.App_CommonBlocks_Filter)
  args: In_Filter_Common_Options_Choice={  }, In_StartFilter={  }
  on ApplySort → FilterSheetApplyFilters
  on DeleteAllNotification → Handler_DeleteAllNotification
  on SheetInitialized → SheetInitialized(SheetId=SheetId)
  on Loaded → Handler_FilterSheetLoaded(ShowSubscriptionOnClick=ShowSubscriptionOnClick)
  on MarkAllAsRead → Handler_MarkAllAsRead
```

#### Block actions
- **FilterSheetApplyFilters**
  ```
  trigger event ApplyFilters()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_DeleteAllNotification**
  ```
  trigger event DeleteAll()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_FilterSheetLoaded** inputs: ShowSubscriptionOnClick: Boolean (mandatory)
  ```
  trigger event Loaded(ShowSubscriptionOnClick=ShowSubscriptionOnClick)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_MarkAllAsRead**
  ```
  trigger event MarkAllAsRead()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Notifications_NoItemsFound (flow App_Notifications)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): Notifications

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: ExtendedClasses="full-width full-height", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base }, DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_…
  placeholder Content:
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: ExtendedClasses="full-width", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color: Entities.UBT_Color.Neutral3, Size: { GeneralSizeId: En…
      placeholder Content:
        block CircleButton (UBTConnectLibrary.ConnectPatterns)
          args: BackgroundColorId=Entities.UBT_Color.Primary, SizeId=Entities.UBT_AvatarSize.Small_40
          placeholder Icon:
            block Icon (UBTConnectLibrary.ConnectPatterns)
              args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.CalendarBusyFill, In_SizeId=Entities.UBT_IconsSize.Base_24
        block CustomText (UBTConnectLibrary.BasePatterns)
          args: ExtendedClasses="margin-top-base", In_Text="No Notifications Found", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
        block CustomText (UBTConnectLibrary.BasePatterns)
          args: In_Text="We were unable to find any Notifications to display.", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }
```

## Block Notifications_SortSheet (flow App_Notifications)
- public: False
- input parameters: -
- events: ApplyFilters(IsNewestToOldest: Boolean (mandatory)) mandatory; Loaded(ShowSubscriptionOnClick: Boolean (mandatory)) mandatory; SheetInitialized(SheetId: Text (mandatory)) mandatory
- local variables: Extra_OptionChoices: Filter_Common_Control_Choice List
- lifecycle: none
- used by (UBTConnect): Notifications

#### Widget tree
```
block SortSheet (UBTConnect.App_CommonBlocks_Filter)
  args: In_Filter_Common_Options_Choice={ HasSorting: { Enable: True, YesLabel: "Newest to Oldest", NoLabel: "Oldest to Newest", Order: 1 }, Extra_OptionChoices: Extra_OptionChoices }, In_StartFilter={  }
  on SheetInitialized → SheetInitialized(SheetId=SheetId)
  on ApplySort → FilterSheetApplyFilters(None=Extra_OptionChoices, OptionChoice_Control_OptionFlatList_Control_Option=OptionControl)
  on Loaded → Handler_FilterSheetLoaded(ShowSubscriptionOnClick=ShowSubscriptionOnClick)
```

#### Block actions
- **FilterSheetApplyFilters** inputs: OptionChoice_Control_OptionFlatList_Control_Option: OptionChoice_Control, OptionFlatList_Control, OptionList_Control Record (mandatory)
  ```
  trigger event ApplyFilters(IsNewestToOldest=OptionChoice_Control_OptionFlatList_Control_Option.OptionChoice_Control.Current.SelectedChoiceId = Entities.Choice.Yes)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_FilterSheetLoaded** inputs: ShowSubscriptionOnClick: Boolean (mandatory)
  ```
  trigger event Loaded(ShowSubscriptionOnClick=ShowSubscriptionOnClick)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block NotificationsList (flow App_Notifications)
- public: False; stylesheet: yes
- input parameters: CurrentBreakpoint: UI_UpdateItem_Breakpoint; IN_NotificationItemList: MessageListItem List (mandatory); IsLoading: Boolean (mandatory)
- events: NotificationDetail(MessageInstanceId: MessageInstance Identifier (mandatory); IsRead: Boolean (mandatory)) mandatory; UpdateReadCount(AddToCount: Boolean (mandatory); Breakpoint: Text (mandatory); MessageInstanceId: MessageInstance Identifier (mandatory); IsDelete: Boolean (mandatory); IsRead: Boolean (mandatory)) mandatory
- local variables: UI_NotificationItemList: MessageListItem List; ShowDeleteNotificationPopup: Boolean; SelectedNotification: MessageInstance Identifier; SelectedMessageListItem: MessageListItem
- lifecycle: OnInitialize → OnInitialize; OnParametersChanged → OnParametersChanged
- used by (UBTConnect): NotificationsListBreakpoints

#### Widget tree
```
list source=UI_NotificationItemList mode=Default #List_Notifications  [style="list list-group background-neutral-0 updates-list"; disable-virtualization=False]
  container #ListItemContainer  [style="ListItemContainer"]
    list-item #ListItemNotification swipeLeft=True swipeRight=True  [style="list-item list-itemNotifications-action-primary"]
      leftActions:
        listitemaction onclick → Handler_ToggleRead(IN_SelectedNotification=UI_NotificationItemList.Current.Id)  [style="list-item-action list-itemNotifications-Read-action-primary"]
          container
            block Icon (UBTConnectLibrary.ConnectPatterns)
              args: In_ColorId=Entities.UBT_Color.CyanDarkest, In_IconId=Entities.UBT_Icons2.Mail, In_SizeId=Entities.UBT_IconsSize.Medium_20
            block CustomText (UBTConnectLibrary.BasePatterns)
              args: In_Text=If(UI_NotificationItemList.Current.IsRead, "Mark as unread", "Mark as read"), In_TextOptions={ Color: Entities.UBT_Color.CyanDarkest, FontSize: Entities.UBT_FontSize.DoubleExtraSmall }
      rightActions:
        listitemaction onclick → ToggleDeleteNotification(MessageListItem=UI_NotificationItemList.Current)  [style="list-item-action list-itemNotifications-Delete-action-primary"]
          container
            block Icon (UBTConnectLibrary.ConnectPatterns)
              args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.Delete, In_SizeId=Entities.UBT_IconsSize.Medium_20
            block CustomText (UBTConnectLibrary.BasePatterns)
              args: In_Text="Delete", In_TextOptions={ Color: Entities.UBT_Color.Neutral0, FontSize: Entities.UBT_FontSize.DoubleExtraSmall }
      block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
        args: In_IsLoading=IsLoading
        placeholder Placeholder_LoadingSection:
          container  [style="updates-list__list-item"; data-plus-date=UI_NotificationItemList.Current.DateTimeCreated; on onclick → OnClick_NotificationDetail(IsRead=UI_NotificationItemList.Current.IsRead, MessageInstanceId=UI_NotificationItemList.Current.Id)]
            block Notification_ListItem (UBTConnectLibrary.ConnectCorePatterns) #NotificationItem
              args: In_AvatarImage_Left={ URL: UI_NotificationItemList.Current.ProfileIconURL }, In_Description=UI_NotificationItemList.Current.Title, In_IsDoubleAvatar=False, In_IsRead=UI_NotificationItemList.Current.IsRead, In_NotificationDate=UI_NotificationItemList.Current.DateTimeCreated
            block ScrollAnchor (NavigationHandler.ScrollAnchors)
              args: Id=UI_NotificationItemList.Current.Id
popup show=ShowDeleteNotificationPopup  [style="popup-dialog"]
  block Notifications_ConfirmDialog (UBTConnect.App_Notifications)
    args: IsSingle=True
    on Cancel → ToggleDeleteNotification(MessageListItem=SelectedMessageListItem)
    on Confirm → Handler_DeleteNotification
```

#### Block actions
- **Handler_DeleteNotification**
  ```
  call ListIndexOf(Condition=Id = SelectedMessageListItem.Id, List=UI_NotificationItemList)
  call ListFilter(Condition=Id = SelectedMessageListItem.Id, SourceList=UI_NotificationItemList)
  call ListRemove(List=UI_NotificationItemList, Position=ListIndexOf.Position)
  call-server Delete_Notifications(Messages=[ ListFilter.FilteredList.Current ])
  call ToggleDeleteNotification(MessageListItem=SelectedMessageListItem)
  trigger event UpdateReadCount(AddToCount=False, Breakpoint=CurrentBreakpoint.SectionName, IsDelete=True, IsRead=SelectedMessageListItem.IsRead, MessageInstanceId=SelectedMessageListItem.Id)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_ToggleRead** inputs: IN_SelectedNotification: MessageInstance Identifier (mandatory); locals: Local_MessageListItem: MessageListItem
  ```
  call ListFilter(Condition=Id = IN_SelectedNotification, SourceList=UI_NotificationItemList)
  call-server ToggleRead(IsRead=not ListFilter.FilteredList.Current.IsRead, MessageInstanceId=IN_SelectedNotification)
  assign: Local_MessageListItem = ListFilter.FilteredList.Current
  assign: Local_MessageListItem.IsRead = not Local_MessageListItem.IsRead
  call ListIndexOf(Condition=Id = IN_SelectedNotification, List=UI_NotificationItemList)
  call ListRemove(List=UI_NotificationItemList, Position=ListIndexOf.Position)
  call ListInsert(Element=Local_MessageListItem, List=UI_NotificationItemList, Position=ListIndexOf.Position)
  trigger event UpdateReadCount(AddToCount=not Local_MessageListItem.IsRead, Breakpoint=CurrentBreakpoint.SectionName, IsDelete=False, IsRead=ListFilter.FilteredList.Current.IsRead, MessageInstanceId=IN_SelectedNotification)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_NotificationDetail** inputs: MessageInstanceId: MessageInstance Identifier (mandatory); IsRead: Boolean (mandatory)
  ```
  trigger event NotificationDetail(IsRead=IsRead, MessageInstanceId=MessageInstanceId)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  call ListFilter(Condition=(DateTimeToDate(DateTimeCreated) >= CurrentBreakpoint.DateRange.From)\nand \n(DateTimeToDate(DateTimeCreated) <= CurrentBreakpoint.DateRange.To), SourceList=IN_NotificationItemList) as ListFilter_GetRange
  call ListAppendAll(List=UI_NotificationItemList, SourceList=ListFilter_GetRange.FilteredList)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnParametersChanged**
  ```
  call ListClear(List=UI_NotificationItemList)
  call ListFilter(Condition=(DateTimeToDate(DateTimeCreated) >= CurrentBreakpoint.DateRange.From)\nand \n(DateTimeToDate(DateTimeCreated) <= CurrentBreakpoint.DateRange.To), SourceList=IN_NotificationItemList) as ListFilter_GetRange
  call ListAppendAll(List=UI_NotificationItemList, SourceList=ListFilter_GetRange.FilteredList)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ToggleDeleteNotification** inputs: MessageListItem: MessageListItem (mandatory)
  ```
  assign: SelectedNotification = MessageListItem.Id; SelectedMessageListItem = MessageListItem
  assign: ShowDeleteNotificationPopup = not ShowDeleteNotificationPopup
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block NotificationsListBreakpoints (flow App_Notifications)
- public: False
- input parameters: Breakpoints: UI_UpdateItem_Breakpoint List; IsLoading: Boolean (mandatory); UI_NotificationItemList: MessageListItem List (mandatory)
- events: NotificationDetail(MessageInstanceId: MessageInstance Identifier (mandatory); IsRead: Boolean (mandatory)) mandatory; UpdateReadCount(AddToCount: Boolean (mandatory); IsDelete: Boolean (mandatory); IsRead: Boolean (mandatory)) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): Notifications

#### Widget tree
```
list source=Breakpoints mode=Default  [style="list list-group"]
  container
    block Notifications_Header (UBTConnect.App_Notifications) #Notifications_ListHeader
      args: BadgeNumber=Breakpoints.Current.BadgeCount, isLoading=IsLoading, Title=Breakpoints.Current.SectionName
    block NotificationsList (UBTConnect.App_Notifications)
      args: CurrentBreakpoint=Breakpoints.Current, IN_NotificationItemList=UI_NotificationItemList, IsLoading=IsLoading
      on NotificationDetail → NotificationDetail(IsRead=IsRead, MessageInstanceId=MessageInstanceId)
      on UpdateReadCount → Handler_UpdateReadCount(AddToCount=AddToCount, Breakpoint=Breakpoint, IsDelete=IsDelete, IsRead=IsRead, MessageInstanceId=MessageInstanceId)
```

#### Block actions
- **Handler_UpdateReadCount** inputs: AddToCount: Boolean (mandatory); Breakpoint: Text (mandatory); MessageInstanceId: MessageInstance Identifier (mandatory); IsDelete: Boolean (mandatory); IsRead: Boolean (mandatory); locals: Local_MessageListItem: MessageListItem; Local_Breakpoint: UI_UpdateItem_Breakpoint
  ```
  call ListIndexOf(Condition=IdentifierToText(SectionName) = Breakpoint, List=Breakpoints) as ListIndexOf2
  call ListFilter(Condition=IdentifierToText(SectionName) = Breakpoint, SourceList=Breakpoints) as ListFilter2
  call ListRemove(List=Breakpoints, Position=ListIndexOf2.Position) as ListRemove2
  assign: Local_Breakpoint = ListFilter2.FilteredList.Current
  assign: Local_Breakpoint.BadgeCount = If(AddToCount, Local_Breakpoint.BadgeCount + 1, Local_Breakpoint.BadgeCount - 1)
  call ListInsert(Element=Local_Breakpoint, List=Breakpoints, Position=ListIndexOf2.Position) as ListInsert2
  call ListFilter(Condition=Id = MessageInstanceId, SourceList=UI_NotificationItemList)
  assign: Local_MessageListItem = ListFilter.FilteredList.Current
  assign: Local_MessageListItem.IsRead = not AddToCount
  call ListIndexOf(Condition=Id = MessageInstanceId, List=UI_NotificationItemList)
  call ListRemove(List=UI_NotificationItemList, Position=ListIndexOf.Position)
  if IsDelete
    [M1] trigger event UpdateReadCount(AddToCount=AddToCount, IsDelete=IsDelete, IsRead=IsRead)
    end
  else
    call ListInsert(Element=Local_MessageListItem, List=UI_NotificationItemList, Position=ListIndexOf.Position)
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] assign: Breakpoints[Breakpoint].BadgeCount = If(AddToCount, Breakpoints[Breakpoint].BadgeCount + 1, Breakpoints[Breakpoint].BadgeCount - 1)
    end
  ```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| App_IconBadge | App_Common_Blocks | `../../_shared/pack/blocks.md` | BadgeNumber: Long Integer (mandatory); MaxNotifications: Integer = 9; IconId: UBT_Icons2 Identifier (mandatory); IconColor: UBT_Color Identifier (mandatory); isLoading: Boolean (mandatory) | OnClick |
| Block_PINUnlock | App_PIN | `../../App_PIN/pack/blocks.md` | In_ForceVisible: Boolean; In_IsCommonBlock: Boolean | Unlock |
| Block_PINUnlock_ContentWrapper | App_PIN | `../../App_PIN/pack/blocks.md` | UseOverlay: Boolean = True; In_ForceVisible: Boolean; UnlockText: Text = "Enter your PIN code"; ShowNeedHelp: Boolean; isFromMenu: Boolean; ShowForgotPIN: Boolean; ShowPolicy: Boolean (mandatory) | NavigateTo_PINRegister; Unlock |
| BottomBarContent | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| BottomBarMenu | App_Common | `../../App_Common/pack/blocks.md` | ActiveItem: Connect_BottomBar_Items Identifier; useMapsItems: Boolean; isHouseholder: Boolean; isRootPage: Boolean | BottomBar_Clicked |
| CacheControl_UserInfo_Wrapper | App_Cache | `../../_shared/pack/blocks.md` | - | Result |
| CommonUI_InsideLayout | App_Common | `../../App_Common/pack/blocks.md` | In_ShowLockScreen: Boolean; In_IgnorePolicy: Boolean; In_IgnoreLockScreen: Boolean | Event_OnScreenLocked; Event_OnScreenUnlocked |
| FilterSheet_OptionChoice_Item | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | Filter_Common_Control_Choice: Filter_Common_Control_Choice (mandatory) | OnChange |
| HandleOnResumeOpenLink | Legacy_Share | `../../Legacy_Share/pack/blocks.md` | - | - |
| MoreActionSheet | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | In_StartFilter: Filter_Common (mandatory); In_Filter_Common_Options_Choice: Filter_Common_Options (mandatory); ExtendedClasses: Text | ApplySort; DeleteAllNotification; Loaded; MarkAllAsRead; SheetInitialized |
| OfflineDataSyncEvents | App_Common | `../../App_Common/pack/blocks.md` | - | OnSyncComplete; OnSyncError; OnSyncStart |
| Policy_Checker | App_Policies | `../../App_Policies/pack/blocks.md` | - | - |
| SectionSeparator | App_Common_Blocks | `../../_shared/pack/blocks.md` | - | - |
| SortSheet | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | In_StartFilter: Filter_Common (mandatory); In_Filter_Common_Options_Choice: Filter_Common_Options (mandatory); ExtendedClasses: Text | ApplySort; Loaded; SheetInitialized |
| UnsupportedVersion | App_Common | `../../App_Common/pack/blocks.md` | In_ExtendedClass: Text; In_HideButton: Boolean | Event_NavigateToPlaystore |
| UnsupportedVersion_Browser | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Native | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_WebView | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Wrapper | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| WelcomeToConnect | App_Common | `../../App_Common/pack/blocks.md` | - | - |
