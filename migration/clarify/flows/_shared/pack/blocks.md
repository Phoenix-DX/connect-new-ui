# Shared pack: block-only flows and shared client actions (DEV model, MCP dump 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.

Block-only flows: App_Cache, App_Common_Blocks, App_Common_Blocks_PopupDialogs, App_CommonBlocks_Filter, Calendar_Events, Directory_Caroussel, Directory_CommonBlocks, Directory_Household_Blocks, Directory_Interchange, Directory_OneSchoolGlobal_Blocks, SubLayout

## Block CacheControl_UserInfo_Wrapper (flow App_Cache)
- public: False
- input parameters: -
- events: Result(UserInformation: Directory_UserCurrent) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): ContactUsDetails, CountryList, FilterSheet, Map, Menu, MoreActionSheet, Profile, SortSheet

#### Widget tree
```
block CacheControl_UserInfo (UBTConnect_Utils.CacheControl)
  on Result → CacheControl_UserInfoResult(CacheControl_Response=CacheControl_Response)
```

#### Block actions
- **CacheControl_UserInfoResult** inputs: CacheControl_Response: CacheControl_UserInformation (mandatory)
  ```
  call GetUserInformation_Wrapper_Assign(UserInformation=CacheControl_Response)
  trigger event Result(UserInformation=CacheControl_Response.Directory_UserCurrent)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block App_IconBadge (flow App_Common_Blocks)
- public: False
- input parameters: BadgeNumber: Long Integer (mandatory); MaxNotifications: Integer = 9; IconId: UBT_Icons2 Identifier (mandatory); IconColor: UBT_Color Identifier (mandatory); isLoading: Boolean (mandatory)
- events: OnClick()
- local variables: -
- lifecycle: none
- used by (UBTConnect): App_NotificationIcon, BottomBarMenu

#### Widget tree
```
block SkeletonSection (UBTConnectLibrary.ConnectPatterns) #Skeleton
  args: In_IsLoading=isLoading or BadgeNumber = -1
  placeholder Placeholder_LoadingSection:
    if BadgeNumber <> 0 #HasNumber
      link onclick → IconClick
        block IconBadge (UBTConnectLibrary.OutSystemsUIOverrides) #IconBadge
          args: Color=Entities.UBT_Color.Red, MaxNumber=MaxNotifications, Number=BadgeNumber
          placeholder Icon:
            block Icon (UBTConnectLibrary.ConnectPatterns)
              args: In_ColorId=IconColor, In_ExtendedClasses="ignore-loading", In_IconId=IconId, In_SizeId=Entities.UBT_IconsSize.Base_24
    else
      block Icon (UBTConnectLibrary.ConnectPatterns)
        args: In_ColorId=IconColor, In_ExtendedClasses="ignore-loading", In_IconId=IconId, In_SizeId=Entities.UBT_IconsSize.Base_24
        on Click → IconClick
```

#### Block actions
- **IconClick**
  ```
  trigger event OnClick()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block App_NotificationIcon (flow App_Common_Blocks)
- public: False
- input parameters: -
- events: -
- local variables: LocalNotifications: Long Integer = -1
- lifecycle: OnReady → OnReady
- used by (UBTConnect): Bookmarks, CountryList, HomeFeed, Notes, Updates_SingleList

#### Widget tree
```
block App_IconBadge (UBTConnect.App_Common_Blocks)
  args: BadgeNumber=LocalNotifications, IconColor=Entities.UBT_Color.Neutral0, IconId=Entities.UBT_Icons2.Notifications, isLoading=not Client.Notifications_IsSynched, MaxNotifications=9
  on OnClick → IconClick
block App_NotificationRefresh (UBTConnect.App_Common_Blocks)
  args: Datetime=Client.Notifications_LastChecked
  on Updated → App_NotificationRefreshUpdated
```

#### Block actions
- **App_NotificationRefreshUpdated**
  ```
  call OnReady()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **IconClick**
  ```
  call GetHasNewNotifications()
  if (HasNewNotifications?) GetHasNewNotifications.Out_HasNewNotifications
    navigate → Notifications() transition=Inherited
  else
    navigate → MessageList() transition=Inherited
  ```
- **OnReady**
  ```
  call GetUnreadNotificationNumber()
  assign: LocalNotifications = GetUnreadNotificationNumber.UnreadNotifications
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block App_NotificationRefresh (flow App_Common_Blocks)
- public: False
- input parameters: Datetime: Date Time (mandatory)
- events: Updated() mandatory
- local variables: -
- lifecycle: OnParametersChanged → OnParametersChanged
- used by (UBTConnect): App_NotificationIcon

#### Widget tree
```
```

#### Block actions
- **OnParametersChanged**
  ```
  assign: Datetime = Datetime
  trigger event Updated()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block External_Link (flow App_Common_Blocks)
- public: False
- input parameters: In_Link: BusinessLinkItem (mandatory); IsEnabled: Boolean = True; IconVisible: Boolean = True
- events: -
- local variables: FontSize: UBT_FontSize Identifier = Entities.UBT_FontSize.Small
- lifecycle: none
- used by (UBTConnect): Map_PoIPreview, OneSchoolGlobalDetails_Block, OneSchoolGlobal_DetailCard_Content

#### Widget tree
```
block IconText (UBTConnectLibrary.ConnectPatterns)
  args: SpacingSize=Entities.UBT_Size.ExtraSmall, Text=In_Link.Text, TextOptions={ Color: If(IsEnabled,Entities.UBT_Color.Primary,Entities.UBT_Color.Neutral7), FontSize: FontSize, FontWeight: Entities.UBT_FontWeight.Regular, IsUnderlined: True }
  on Clicked → LinkClicked
  placeholder Icon:
    block Icon (UBTConnectLibrary.ConnectPatterns)
      args: In_ColorId=If(IsEnabled,Entities.UBT_Color.Primary,Entities.UBT_Color.Neutral7), In_IconId=Entities.UBT_Icons2.OpenNew, In_SizeId=Entities.UBT_IconsSize.NonStandard_16, In_Visible=IconVisible
```

#### Block actions
- **LinkClicked**
  ```
  if CheckIOsPlatform()
    navigate → RedirectToURL(URL=In_Link.Link) transition=Inherited
  else
    call OpenInApp_OpenExternalLink(Url=In_Link.Link)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block ItemCardActions (flow App_Common_Blocks)
- public: False
- input parameters: ActionBarOptions: ActionBarOptions (mandatory); ObjectId: Text (mandatory); BookmarkType: BookmarkCategory Identifier
- events: Event_AddNote() mandatory; Event_ItemUnbookmarked()
- local variables: -
- lifecycle: none
- used by (UBTConnect): Bookmarks_Card_Item, NoteCard_Item

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color: Entities.UBT_Color.Neutral2, Size: { TopSizeId: Entities.UBT_Size.Small } } }
  placeholder Content:
    block ItemCard_ActionBar (UBTConnectLibrary.ConnectCorePatterns)
      args: ActionBarOptions=ActionBarOptions
      on OnClickShare → Handler_OnClickShare
      on OnClickUnbookmark → Handler_OnClickUnmark
      on OnClickAddNote → Handler_OnClickAddNote
```

#### Block actions
- **Handler_OnClickAddNote**
  ```
  trigger event Event_AddNote()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnClickShare**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnClickUnmark**
  ```
  call ToggleBookmarkItem_C2(In_BookmarkType=BookmarkType, In_ItemId=ObjectId, IsBookmarked_C2=True)
  trigger event Event_ItemUnbookmarked()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block ListLoading (flow App_Common_Blocks)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): nothing in this module

#### Widget tree
```
container  [style="list-updating"]
```

## Block Section (flow App_Common_Blocks)
- public: False
- input parameters: isTransparentBackground: Boolean; AddHorizontalPadding: Boolean = True; MarginTopSizeId: UBT_Size Identifier
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): Directory_Updates_Section_Wrapper, Section_FeedWrapper

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ Background: { BackgroundColor: If(isTransparentBackground,Entities.UBT_Color.Transparent,Entities.UBT_Color.Neutral0) }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: If…
  placeholder Content:
    placeholder-def Header
    placeholder-def Content
```

## Block SectionSeparator (flow App_Common_Blocks)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): ContactUsDetails, ContactUsMenu, EventList, Map, Menu_List, NotificationDetails, Profile, ScreenBlock_Search, SearchResult_Section, SearchResults_Recent, Services

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral4 }, PaddingSize: { TopSizeId: Entities.UBT_Size.ExtraSmall } }
```

## Block Dialog_CustomChoice (flow App_Common_Blocks_PopupDialogs)
- public: False
- input parameters: StackButtonsVertically: Boolean
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): Menu, Profile

#### Widget tree
```
container  [style="connect-dialog-popup connect-dialog-popup--custom-choice"+If(StackButtonsVertically," connect-dialog-popup--vertical-b…]
  block ActionConfirmationDialog (NavigationHandler.ConfirmationDialogs)
    placeholder DialogHeader:
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Base }, TextOptions: { Color: Entities.UBT_Color.Neutral10, FontWeight: Entities.UBT_FontWeight.SemiBold } }
        placeholder Content:
          container  [style="text-align-center"]
            placeholder-def Placeholder_Header
    placeholder DialogBody:
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Medium }, TextOptions: { Color: Entities.UBT_Color.Neutral10 } }
        placeholder Content:
          placeholder-def Placeholder_Body
    placeholder ButtonLabel_Confirm:
      placeholder-def Placeholder_ButtonLabel
        text: Close
    placeholder ButtonLabel_Dismiss:
      placeholder-def Placeholder_DismissButtonLabe
        text: Cancel
```

## Block Dialog_ExitConfirmation (flow App_Common_Blocks_PopupDialogs)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): HomeFeed, Login

#### Widget tree
```
container  [style="connect-dialog-popup"]
  block ExitConfirmationDialog (NavigationHandler.ConfirmationDialogs)
    args: Force=True
    placeholder DialogHeader:
      container  [style="text-align-center"]
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ TextOptions: { Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Base } }
          placeholder Content:
            text: Leave App
    placeholder DialogBody:
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ TextOptions: { Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Base } }
        placeholder Content:
          text: Are you sure you wish to leave the Connect app?
    placeholder ButtonLabel_Confirm:
      text: Yes
    placeholder ButtonLabel_Dismiss:
      text: No
```

## Block Dialog_Information (flow App_Common_Blocks_PopupDialogs)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): ContactUsDetails

#### Widget tree
```
container  [style="connect-dialog-popup connect-dialog-popup--information"]
  block ActionConfirmationDialog (NavigationHandler.ConfirmationDialogs)
    placeholder DialogHeader:
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Base }, TextOptions: { Color: Entities.UBT_Color.Neutral10, FontWeight: Entities.UBT_FontWeight.SemiBold } }
        placeholder Content:
          container  [style="text-align-center"]
            placeholder-def Placeholder_Header
    placeholder DialogBody:
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Medium }, TextOptions: { Color: Entities.UBT_Color.Neutral10 } }
        placeholder Content:
          placeholder-def Placeholder_Body
    placeholder ButtonLabel_Confirm:
      placeholder-def Placeholder_ButtonLabel
        text: Close
```

## Block Dialog_Information_NonNavigation (flow App_Common_Blocks_PopupDialogs)
- public: False
- input parameters: In_ShowPopup: Boolean (mandatory); In_ButtonLabel: Text = "Close"
- events: OnClick_Button() mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): nothing in this module

#### Widget tree
```
container  [style="connect-dialog-popup"]
  popup show=In_ShowPopup  [style="popup-dialog connect-dialog-popup"]
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Base }, TextOptions: { Color: Entities.UBT_Color.Neutral10, FontWeight: Entities.UBT_FontWeight.SemiBold } }
      placeholder Content:
        container  [style="text-align-center"]
          placeholder-def Placeholder_Header
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Medium }, TextOptions: { Color: Entities.UBT_Color.Neutral10 } }
      placeholder Content:
        placeholder-def Placeholder_Body
    container
      block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
        args: ButtonOptions={ UBT_ButtonSizeId: Entities.UBT_ButtonSize.Small }, ButtonText=In_ButtonLabel
        on buttonOnClick → OnClick_Button
```

## Block Dialog_Navigation (flow App_Common_Blocks_PopupDialogs)
- public: False
- input parameters: ConfirmLabel: Text = "Yes"; DIsmissLabel: Text = "No"
- events: Event_OnBackNavigation(Event_NavigationEvent: Object (mandatory))
- local variables: -
- lifecycle: none
- used by (UBTConnect): ContactByEmailForm, ContactUsDetails, Profile

#### Widget tree
```
container  [style="connect-dialog-popup connect-dialog-popup--navigation"]
  block NavigationConfirmationDialog (NavigationHandler.ConfirmationDialogs)
    on Navigation → Event_OnBackNavigation(Event_NavigationEvent=NavigationEvent)
    placeholder DialogHeader:
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Base }, TextOptions: { Color: Entities.UBT_Color.Neutral10, FontWeight: Entities.UBT_FontWeight.SemiBold } }
        placeholder Content:
          container  [style="text-align-center"]
            placeholder-def Placeholder_Header
    placeholder DialogBody:
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Medium }, TextOptions: { Color: Entities.UBT_Color.Neutral10 } }
        placeholder Content:
          placeholder-def Placeholder_Body
    placeholder ButtonLabel_Confirm:
      expr: ConfirmLabel
    placeholder ButtonLabel_Dismiss:
      expr: DIsmissLabel
```

## Block FilterSheet (flow App_CommonBlocks_Filter)
- public: False
- input parameters: In_StartFilter: Filter_Common (mandatory); In_Options: Filter_Common_Options (mandatory); ExtendedClasses: Text
- events: ApplyFilters(OptionList_Control: Filter_Common_Control_List List (mandatory); OptionChoice_Control: Filter_Common_Control_Choice List (mandatory); OptionFlatList_Control: Filter_Common_Control_List List (mandatory); SubState_Localities: Text; SubState_Countries: Text; SortBy_Title: Text; hasFitlerApplied: Boolean (mandatory)) mandatory; Loaded(ShowSubscriptionOnClick: Boolean (mandatory)) mandatory; SheetInitialized(SheetId: Text (mandatory)) mandatory
- local variables: BottomSheetId: Text; SubState_Selected: Text = ""; SubState_Main: Text = ""; SubState_Localities: Text = "Localities"; SubState_Countries: Text = "Countries"; SortBy_Title: Text = "Sort by"; OptionList_Selected: Filter_Common_Control_List; LocalCacheControl_AllCountries: CacheControl_AllCountries, isFetched Record; LocalCacheControl_AllLocalities: CacheControl_AllLocalities, isFetched Record; LocalCacheControl_UserInfo: Directory_UserCurrent, isFetched Record; OptionControl: OptionChoice_Control, OptionFlatList_Control, OptionList_Control Record; LastSearched_OptionControl: OptionChoice_Control, OptionFlatList_Control, OptionList_Control Record; Empty_OptionControl: OptionChoice_Control, OptionFlatList_Control, OptionList_Control Record; isSingleFilter: Boolean; isOpen_Local: Boolean; SearchInputId: Text; ForceUpdateOptionList: Boolean
- lifecycle: OnInitialize → ScreenEvent_OnInitialize; OnParametersChanged → ScreenEvent_OnParametersChanged
- used by (UBTConnect): Bookmarks_FilterSheet, CountryDetails, Directory_Updates_FilterSheet, Notes_FilterSheet, ScreenBlock_Search

#### Widget tree
```
block BottomSheet (OutSystemsUI_2_23+UBTConnectLibrary.Interaction)
  args: Content_BackgroundColorId=Entities.UBT_Color.Neutral2, Content_Padding={ GeneralSizeId: Entities.UBT_Size.Small }, ExtendedClasses=ExtendedClasses, FooterHeight="72px", Title=If(SubState_Selected = SubState_Main,"Sort & Filter", OptionList_Selected.SheetTitle+" Filter")
  on OnToggle → BottomSheetOnToggle(IsOpen=IsOpen)
  on OnClose → BottomSheetOnClose
  on Initialized → BottomSheetInitialized(Id=Id)
  placeholder Content:
    if SubState_Selected = SubState_Main #Main
      block SkeletonSection (UBTConnectLibrary.ConnectPatterns) #Loading
        args: In_IsLoading=(not (LocalCacheControl_AllLocalities.isFetched or LocalCacheControl_UserInfo.isFetched) and In_Options.HasLocalities.Enable)\n\nand\n\n(not (LocalCacheControl_AllCountries.isFetched  or not LocalCac…
        placeholder Placeholder_LoadingSection:
          list source=OptionControl.OptionList_Control mode=Default #OptionsList  [style="list list-group"]
            block CustomContainer (UBTConnectLibrary.BasePatterns) #OptionList_Item
              args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small }, MarginSize: { BottomSizeId: Entities.UBT_Size.ExtraSmall }, BorderOptions: { C…
              on Clicked → OnClick_SelectionOption(In_Title=OptionControl.OptionList_Control.Current.Title)
              placeholder Content:
                block Columns_Two (UBTConnectLibrary.BasePatterns)
                  args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast }
                  placeholder Left:
                    container
                      block CustomText (UBTConnectLibrary.BasePatterns)
                        args: In_Text="All "+OptionControl.OptionList_Control.Current.Title, In_TextOptions={ FontSize: Entities.UBT_FontSize.Small }
                  placeholder Right:
                    block Icon (UBTConnectLibrary.ConnectPatterns)
                      args: In_ColorId=Entities.UBT_Color.Neutral7, In_IconId=Entities.UBT_Icons2.ChevronRight, In_SizeId=Entities.UBT_IconsSize.Base_24
                if not OptionControl.OptionList_Control.Current.SelectedNames.Empty #HasSelected
                  block CustomText (UBTConnectLibrary.BasePatterns)
                    args: In_Text=OptionControl.OptionList_Control.Current.SelectedNames.Current, In_TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall }, InJustifyText=True
          list source=OptionControl.OptionChoice_Control mode=Default #Options_Choices  [style="list list-group"]
            block FilterSheet_OptionChoice_Item (UBTConnect.App_CommonBlocks_Filter)
              args: Filter_Common_Control_Choice=OptionControl.OptionChoice_Control.Current
              on OnChange → OnChange_ChoiceOption(ChoiceId=ChoiceId, In_Title=Title)
          list source=OptionControl.OptionFlatList_Control mode=Default #Options_FlatList  [style="list list-group"]
            block CustomContainer (UBTConnectLibrary.BasePatterns) #Choice
              args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Base, HorizontalSizeId: Entities.UBT_Size.Small }, MarginSize: { BottomSizeId: Entitie…
              placeholder Content:
                block CustomContainer (UBTConnectLibrary.BasePatterns)
                  args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Small } }
                  placeholder Content:
                    block CustomText (UBTConnectLibrary.BasePatterns)
                      args: ExtendedClasses="text-align-left", In_Text=In_Options.Extra_OptionFlatLists.Current.Title, In_TextOptions={ FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
                block SelectionOption_List (UBTConnectLibrary.ConnectPatterns)
                  args: isMultiselect=True, Item_StyleOptions={ MarginSize: { BottomSizeId: Entities.UBT_Size.Base } }, LastItem_StyleOptions={ MarginSize: { BottomSizeId: Entities.UBT_Size.None } }, SelectionOption_ItemList=OptionControl.OptionFlatList_Control.Current.In_Options
                  on OnSelectionChange → Handler_ListOnSelectionChange(ClickedItemId=ClickedItemId, SelectedItems=SelectedItems)
    else
      block FilterSheet_OptionList_Item (UBTConnect.App_CommonBlocks_Filter)
        args: Filter_Common_Control_List=OptionList_Selected, ForceUpdate=ForceUpdateOptionList, ShowHeader=not isSingleFilter
        on OnChange → OnChange_ListOption(In_SelectedIds=SelectedIds, In_Title=Title)
        on Event_Input_OnReady → Handler_Input_OnReady(Id=Id)
        on OnBack → OnClick_SelectionBack
  placeholder Footer:
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base }, ShadowId: Entities.UBT_Shadow.ExtraSmall }
      placeholder Content:
        block Columns_Two (UBTConnectLibrary.BasePatterns)
          args: ColumnOptions={ SpacingSize: Entities.UBT_Size.Small }
          placeholder Left:
            block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
              args: In_ButtonOptions={ UBT_ButtonSizeId: Entities.UBT_ButtonSize.Small, UBT_ButtonTypeId: Entities.UBT_ButtonType.Scondary, UBT_FlexBehavior: Entities.UBT_FlexBehavior.Grow }, In_IsDisabled=OptionControl = Empty_OptionControl
              on Event_OnClick → OnClick_ClearFilters
              placeholder Content:
                text: Clear filters
          placeholder Right:
            block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
              args: In_ButtonOptions={ UBT_ButtonSizeId: Entities.UBT_ButtonSize.Small, UBT_ButtonTypeId: Entities.UBT_ButtonType.Primary, UBT_FlexBehavior: Entities.UBT_FlexBehavior.Grow }, In_IsDisabled=OptionControl = LastSearched_OptionControl
              on Event_OnClick → OnClick_Apply
              placeholder Content:
                text: Apply filters
if In_Options.HasCountries.Enable #HasCountries
  block CacheControl_AllCountries (UBTConnect_Utils.CacheControl)
    on Result → CacheControl_AllCountriesResult(CacheControl_Response=CacheControl_Response)
if In_Options.HasLocalities.Enable #HasLocalities
  block CacheControl_AllLocalities (UBTConnect_Utils.CacheControl)
    on Result → CacheControl_AllLocalitiesResult(CacheControl_Response=CacheControl_Response)
if In_Options.HasCountries.Enable or In_Options.HasLocalities.Enable #NeedSubscriptionData
  block CacheControl_UserInfo_Wrapper (UBTConnect.App_Cache)
    on Result → CacheControl_UserInfo_WrapperResult(UserInformation=UserInformation)
block BackNavigationHandler (NavigationHandler.NavigationHandler)
  on BackNavigation → Handler_BackNavigation(BackNavigationEvent=BackNavigationEvent)
```

#### Block actions
- **Action_ClearSearchString**
  ```
  if SearchInputId <> ""
    call Input_ClearString(FocusOnInput=False, InputId=SearchInputId)
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_CloseSheet**
  ```
  call BottomSheetClose(WidgetId=BottomSheetId)
  call Action_SetSubState(In_SubState=SubState_Main)
  call Action_ClearSearchString()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_Define_Countries**; locals: LocalFilter_SelectionControls: Filter_Common_Control_List
  ```
  if (HasData) LocalCacheControl_AllCountries.isFetched and LocalCacheControl_UserInfo.isFetched and LocalCacheControl_UserInfo.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionType <> Entities.Connect_Subscription_Plan.Free
    assign: LocalFilter_SelectionControls.Title = SubState_Countries; LocalFilter_SelectionControls.In_Options = ConvertList(LocalCacheControl_AllCountries.CacheControl_AllCountries.CountryList,  {Id:"CountryCode",DisplayText:"CountryName",CountryCode:"CountryCode"}); LocalFilter_SelectionControls.Order = In_Options.HasCountries.Order; LocalFilter_SelectionControls.AddAllOptions = In_Options.HasCountries.AddAllOptions; LocalFilter_SelectionControls.SheetTitle = "Country"
    if In_StartFilter.CountryIds.Empty
      call ListAppend(Element=Entities.Choice.None, List=LocalFilter_SelectionControls.SelectedIds) as AppenAllOption
      [M1] call App_CommonFilter_DefineOptionNames(OptionList_Control=LocalFilter_SelectionControls)
      assign: LocalFilter_SelectionControls = App_CommonFilter_DefineOptionNames.Formatted
      if (Not Global?) LocalCacheControl_UserInfo.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionType <> Entities.Connect_Subscription_Plan.Global
        [M2] for each LocalFilter_SelectionControls.In_Options
          call App_CommonFilter_CheckCountry(CountryCode=LocalFilter_SelectionControls.In_Options.Current.Id, SubscribedCountries=LocalCacheControl_UserInfo.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscribedCountries)
          assign: LocalFilter_SelectionControls.In_Options.Current.isEnabled = App_CommonFilter_CheckCountry.IsEnabled
          → continues at [M2]
        end for
        [M3] call ListIndexOf(Condition=Title = SubState_Countries, List=OptionControl.OptionList_Control) as Position
        call ListSort(By=DisplayText, List=LocalFilter_SelectionControls.In_Options)
        if (AlreadyHasElement) Position.Position >= 0
          assign: OptionControl.OptionList_Control[Position.Position] = LocalFilter_SelectionControls
          [M4] call Action_FilterLocalitiesByCountry()
          call Action_Define_OptionControl_Last()
          call Action_DefineOptionControl_Empty()
          end
        else
          call ListAppend(Element=LocalFilter_SelectionControls, List=OptionControl.OptionList_Control) as ListAppend3
          → continues at [M4]
      else
        → continues at [M3]
    else
      [M5] for each In_StartFilter.CountryIds
        call ListAppend(Element=In_StartFilter.CountryIds.Current, List=LocalFilter_SelectionControls.SelectedIds)
        → continues at [M5]
      end for
      → continues at [M1]
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Action_Define_Localities**; locals: LocalFilter_SelectionControls: Filter_Common_Control_List
  ```
  if (HasData) LocalCacheControl_AllLocalities.isFetched and LocalCacheControl_UserInfo.isFetched and LocalCacheControl_UserInfo.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionType <> Entities.Connect_Subscription_Plan.Free
    assign: LocalFilter_SelectionControls.Title = SubState_Localities; LocalFilter_SelectionControls.In_Options = ConvertList(LocalCacheControl_AllLocalities.CacheControl_AllLocalities.LocalityList,  {Id:"LocalityId",DisplayText:"Name",CountryCode:"CountryCode"}); LocalFilter_SelectionControls.Order = In_Options.HasSorting.Order; LocalFilter_SelectionControls.AddAllOptions = In_Options.HasLocalities.AddAllOptions; LocalFilter_SelectionControls.SheetTitle = "Locality"
    if In_StartFilter.LocalitiesIds.Empty
      call ListAppend(Element=Entities.Choice.None, List=LocalFilter_SelectionControls.SelectedIds) as AppenAllOption
      [M1] call App_CommonFilter_DefineOptionNames(OptionList_Control=LocalFilter_SelectionControls)
      assign: LocalFilter_SelectionControls = App_CommonFilter_DefineOptionNames.Formatted
      call ListIndexOf(Condition=Title = SubState_Localities, List=OptionControl.OptionList_Control) as Position
      if (AlreadyHasElement) Position.Position >= 0
        assign: OptionControl.OptionList_Control[Position.Position] = LocalFilter_SelectionControls
        [M2] call Action_FilterLocalitiesByCountry()
        call Action_Define_OptionControl_Last() as Action_Define_OptionControlVars
        call Action_DefineOptionControl_Empty()
        end
      else
        call ListAppend(Element=LocalFilter_SelectionControls, List=OptionControl.OptionList_Control)
        → continues at [M2]
    else
      [M3] for each In_StartFilter.LocalitiesIds
        call ListAppend(Element=In_StartFilter.CountryIds.Current, List=LocalFilter_SelectionControls.SelectedIds) as ListAppend3
        → continues at [M3]
      end for
      → continues at [M1]
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Action_Define_OptionControl**
  ```
  assign: OptionControl.OptionList_Control = In_Options.Extra_OptionLists; OptionControl.OptionChoice_Control = In_Options.Extra_OptionChoices; OptionControl.OptionFlatList_Control = In_Options.Extra_OptionFlatLists
  if (Countries) In_Options.HasCountries.Enable
    call Action_Define_Countries()
    [M1] if (Localities) In_Options.HasLocalities.Enable
      call Action_Define_Localities()
      [M2] if In_Options.HasSorting.Enable
        call Action_DefineSortBy()
        [M3] call ListSort(By=Order, List=OptionControl.OptionChoice_Control)
        call ListSort(By=Order, List=OptionControl.OptionList_Control) as ListSort2
        call ListSort(By=Order, List=OptionControl.OptionFlatList_Control) as ListSort3
        if (Has Year Flat List Options) not In_Options.Extra_OptionFlatLists.Current.In_Options.Empty
          assign: 
          [M4] call Action_Define_OptionControl_Last() as Action_Define_OptionControlVars
          call Action_DefineOptionControl_Empty()
          end
        else
          → continues at [M4]
      else
        → continues at [M3]
    else
      → continues at [M2]
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_Define_OptionControl_Last** inputs: isFromApply: Boolean
  ```
  assign: LastSearched_OptionControl = OptionControl
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_DefineOptionControl_Empty**
  ```
  assign: Empty_OptionControl = OptionControl
  [M1] for each Empty_OptionControl.OptionList_Control
    call ListClear(List=Empty_OptionControl.OptionList_Control.Current.SelectedIds)
    call ListClear(List=Empty_OptionControl.OptionList_Control.Current.SelectedNames) as ListClear2
    call ListAppend(Element=Entities.Choice.None, List=Empty_OptionControl.OptionList_Control.Current.SelectedIds)
    → continues at [M1]
  end for
  [M2] for each Empty_OptionControl.OptionChoice_Control
    assign: Empty_OptionControl.OptionChoice_Control.Current.SelectedChoiceId = Entities.Choice.None
    → continues at [M2]
  end for
  [M3] for each Empty_OptionControl.OptionFlatList_Control
    call ListClear(List=Empty_OptionControl.OptionFlatList_Control.Current.SelectedIds) as ListClear3
    call ListClear(List=Empty_OptionControl.OptionFlatList_Control.Current.SelectedNames) as ListClear4
    [M4] for each Empty_OptionControl.OptionFlatList_Control.Current.In_Options
      assign: Empty_OptionControl.OptionFlatList_Control.Current.In_Options.Current.isSelected = False
      → continues at [M4]
    end for
    → continues at [M3]
  end for
  call ListIndexOf(Condition=Title = SortBy_Title, List=Empty_OptionControl.OptionChoice_Control)
  if (Has Sort) ListIndexOf.Position >= 0
    assign: Empty_OptionControl.OptionChoice_Control[ListIndexOf.Position].SelectedChoiceId = Entities.Choice.Yes
    [M5] call Action_SetSingleFilter()
    end
  else
    → continues at [M5]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_DefineSortBy**; locals: Local_FilterChoiceItem: Filter_Common_Control_Choice
  ```
  call ListIndexOf(Condition=Title = SortBy_Title, List=OptionControl.OptionChoice_Control)
  if (Has Sorting) In_Options.HasSorting.Enable
    if (Already Has Element) ListIndexOf.Position >= 0
      end
    else
      assign: Local_FilterChoiceItem.Title = SortBy_Title; Local_FilterChoiceItem.SelectedChoiceId = If(In_StartFilter.Sort_ByNewest = NullTextIdentifier(), Entities.Choice.Yes, In_StartFilter.Sort_ByNewest); Local_FilterChoiceItem.YesLabel = In_Options.HasSorting.YesLabel; Local_FilterChoiceItem.NoLabel = In_Options.HasSorting.NoLabel; Local_FilterChoiceItem.NoneLabel = "" //No none; Local_FilterChoiceItem.Order = In_Options.HasSorting.Order
      call ListAppend(Element=Local_FilterChoiceItem, List=OptionControl.OptionChoice_Control)
      end
  else
    if (Already Has Element) ListIndexOf.Position >= 0
      call ListRemove(List=OptionControl.OptionChoice_Control, Position=ListIndexOf.Position)
      end
    else
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **Action_FilterLocalitiesByCountry**
  ```
  if (ShouldFilter) In_Options.HasCountries.Enable and In_Options.HasLocalities.Enable
    if (isFetched) LocalCacheControl_AllCountries.isFetched and LocalCacheControl_AllLocalities.isFetched
      call ListIndexOf(Condition=Title = SubState_Localities, List=OptionControl.OptionList_Control) as ListIndexOfLocalities
      call ListIndexOf(Condition=Title =  SubState_Countries, List=OptionControl.OptionList_Control) as ListIndexOfCountries
      if (HasItems) ListIndexOfLocalities.Position >= 0 and ListIndexOfCountries.Position >= 0
        call ListClear(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].In_Options)
        if (Country Has All Selected) OptionControl.OptionList_Control[ListIndexOfCountries.Position].SelectedIds.Current = Entities.Choice.None
          call ListAppendAll(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].In_Options, SourceList=ConvertList(LocalCacheControl_AllLocalities.CacheControl_AllLocalities.LocalityList,  {Id:"LocalityId",DisplayText:"Name",CountryCode:"CountryCode",isEnabled:"App_CommonFilter_CheckCountry(CountryCod…)
          [M1] call ListSort(By=CountryCode+DisplayText, List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].In_Options)
          if (Locality Has All Selected) OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds.Current = Entities.Choice.None
            end
          else
            call ListDuplicate(SourceList=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds)
            call ListClear(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds) as ListClear2
            call ListClear(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedNames) as ListClear3
            [M2] for each ListDuplicate.DuplicatedList
              call ListAny(Condition=Id = ListDuplicate.DuplicatedList.Current, List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].In_Options)
              if (SelectedOptionStillExist) ListAny.Result
                call ListAppend(Element=ListDuplicate.DuplicatedList.Current, List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds)
                → continues at [M2]
              else
                → continues at [M2]
            end for
            call App_CommonFilter_DefineOptionNames(OptionList_Control=OptionControl.OptionList_Control[ListIndexOfLocalities.Position])
            assign: OptionControl.OptionList_Control[ListIndexOfLocalities.Position] = App_CommonFilter_DefineOptionNames.Formatted
            end
        else
          [M3] for each OptionControl.OptionList_Control[ListIndexOfCountries.Position].SelectedIds (ForEachSelected)
            call ListFilter(Condition=ToUpper(Trim(CountryCode)) = ToUpper(Trim(OptionControl.OptionList_Control[ListIndexOfCountries.Position].SelectedIds.Current)), SourceList=LocalCacheControl_AllLocalities.CacheControl_AllLocalities.LocalityList)
            call ListAppendAll(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].In_Options, SourceList=ConvertList(ListFilter.FilteredList,  {Id:"LocalityId",DisplayText:"Name",CountryCode:"CountryCode",isEnabled:"App_CommonFilter_CheckCountry(CountryCode,LocalCacheControl_UserInfo.Directory_UserCurre…) as ListAppendAll2
            → continues at [M3]
          end for
          → continues at [M1]
      else
        end
    else
      end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
    end
  ```
- **Action_SetSingleFilter**
  ```
  assign: isSingleFilter = OptionControl.OptionChoice_Control.Length + OptionControl.OptionList_Control.Length = 1
  if isSingleFilter
    if (OptionList?) OptionControl.OptionList_Control.Empty
      end
    else
      assign: SubState_Selected = OptionControl.OptionList_Control.Current.Title; OptionList_Selected = OptionControl.OptionList_Control.Current
      end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Action_SetSubState** inputs: In_SubState: Text (mandatory)
  ```
  if In_SubState = SubState_Main and isSingleFilter
    call Action_SetSingleFilter()
    end
  else
    assign: SubState_Selected = In_SubState
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **BottomSheetInitialized** inputs: Id: Text (mandatory)
  ```
  assign: BottomSheetId = Id
  trigger event SheetInitialized(SheetId=Id)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **BottomSheetOnClose**
  ```
  assign: OptionControl = LastSearched_OptionControl
  if isSingleFilter
    assign: ForceUpdateOptionList = not ForceUpdateOptionList
    [M1] call BottomSheetClose(WidgetId=BottomSheetId)
    call Action_SetSubState(In_SubState=SubState_Main)
    end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **BottomSheetOnToggle** inputs: IsOpen: Boolean (mandatory)
  ```
  assign: isOpen_Local = IsOpen
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControl_AllCountriesResult** inputs: CacheControl_Response: CacheControl_AllCountries (mandatory)
  ```
  assign: LocalCacheControl_AllCountries = ConvertRecord(CacheControl_Response,  {"CacheControl_AllCountries.CountryList":"CountryList",isFetched:"True"})
  call Action_Define_Countries()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControl_AllLocalitiesResult** inputs: CacheControl_Response: CacheControl_AllLocalities (mandatory)
  ```
  assign: LocalCacheControl_AllLocalities = ConvertRecord(CacheControl_Response,  {"CacheControl_AllLocalities.LocalityList":"LocalityList",isFetched:"True"})
  call Action_Define_Localities()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControl_UserInfo_WrapperResult** inputs: UserInformation: Directory_UserCurrent (mandatory); locals: HasFiltersOtherThanLocality: Boolean; ShowSubscriptionOnClick: Boolean
  ```
  assign (LocalCacheControl_UserInfo): LocalCacheControl_UserInfo.Directory_UserCurrent = UserInformation; LocalCacheControl_UserInfo.isFetched = True
  call Action_Define_Countries()
  call Action_Define_Localities()
  assign: HasFiltersOtherThanLocality = not In_Options.Extra_OptionLists.Empty or not In_Options.Extra_OptionChoices.Empty or In_Options.HasSorting.Enable
  if HasFiltersOtherThanLocality
    assign: ShowSubscriptionOnClick = False
    [M1] trigger event Loaded(ShowSubscriptionOnClick=ShowSubscriptionOnClick)
    end
  else
    assign: ShowSubscriptionOnClick = UserInformation.Directory_UserCurrent_Subscription.SubscriptionType = Entities.Connect_Subscription_Plan.Free
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_BackNavigation** inputs: BackNavigationEvent: Object (mandatory)
  ```
  if isOpen_Local
    call BottomSheetClose(WidgetId=BottomSheetId)
    call PreventNavigation(NavigationEvent=BackNavigationEvent)
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_Input_OnReady** inputs: Id: Text (mandatory)
  ```
  assign: SearchInputId = Id
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_ListOnSelectionChange** inputs: SelectedItems: SelectionOption_Item List (mandatory); ClickedItemId: Text (mandatory)
  ```
  assign: OptionControl.OptionFlatList_Control.Current.SelectedIds = ConvertList(SelectedItems,  {Value:"Id"}); OptionControl.OptionFlatList_Control.Current.SelectedNames = ConvertList(SelectedItems,  {Value:"DisplayText"})
  call ListIndexOf(Condition=Id = ClickedItemId, List=OptionControl.OptionFlatList_Control.Current.In_Options)
  if ListIndexOf.Position >= 0
    assign: OptionControl.OptionFlatList_Control.Current.In_Options[ListIndexOf.Position].isSelected = not OptionControl.OptionFlatList_Control.Current.In_Options[ListIndexOf.Position].isSelected
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnChange_ChoiceOption** inputs: In_Title: Text (mandatory); ChoiceId: Choice Identifier (mandatory)
  ```
  call ListIndexOf(Condition=Title = In_Title, List=OptionControl.OptionChoice_Control)
  if ListIndexOf.Position >= 0
    assign: OptionControl.OptionChoice_Control[ListIndexOf.Position].SelectedChoiceId = ChoiceId
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnChange_ListOption** inputs: In_SelectedIds: Text List (mandatory); In_Title: Text (mandatory)
  ```
  call ListIndexOf(Condition=Title = In_Title, List=OptionControl.OptionList_Control)
  if ListIndexOf.Position >= 0
    assign: OptionControl.OptionList_Control[ListIndexOf.Position].SelectedIds = In_SelectedIds
    call App_CommonFilter_DefineOptionNames(OptionList_Control=OptionControl.OptionList_Control[ListIndexOf.Position])
    assign: OptionControl.OptionList_Control[ListIndexOf.Position] = App_CommonFilter_DefineOptionNames.Formatted
    [M1] if In_Title = SubState_Countries
      if (IsAllCountries) In_SelectedIds.Current = Entities.Choice.None
        call ListIndexOf(Condition=Title = SubState_Localities, List=OptionControl.OptionList_Control) as ListIndexOfLocalities
        if ListIndexOfLocalities.Position <> -1
          call ListClear(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds)
          call ListClear(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedNames) as ListClear2
          assign: OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds = In_SelectedIds
          [M2] call Action_FilterLocalitiesByCountry()
          end
        else
          → continues at [M2]
      else
        → continues at [M2]
    else
      end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_Apply**
  ```
  call Action_Define_OptionControl_Last(isFromApply=True)
  call Action_CloseSheet()
  trigger event ApplyFilters(hasFitlerApplied=not (OptionControl = Empty_OptionControl), OptionChoice_Control=OptionControl.OptionChoice_Control, OptionFlatList_Control=OptionControl.OptionFlatList_Control, OptionList_Control=OptionControl.OptionList_Control, SortBy_Title=SortBy_Title, SubState_Countries=SubState_Countries, SubState_Localities=SubState_Localities)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_ClearFilters**
  ```
  assign: OptionControl = Empty_OptionControl
  call ListClear(List=OptionList_Selected.SelectedIds)
  call ListClear(List=OptionList_Selected.SelectedNames) as ListClear2
  call OnClick_Apply()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_SelectionBack**
  ```
  if isSingleFilter
    call Action_CloseSheet()
    end
  else
    call Action_SetSubState(In_SubState=SubState_Main)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnClick_SelectionOption** inputs: In_Title: Text (mandatory)
  ```
  call ListIndexOf(Condition=Title = In_Title, List=OptionControl.OptionList_Control)
  if ListIndexOf.Position >= 0
    call Action_SetSubState(In_SubState=OptionControl.OptionList_Control.Current.Title)
    assign: OptionList_Selected = OptionControl.OptionList_Control[ListIndexOf.Position]
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  call Action_Define_OptionControl()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnParametersChanged**
  ```
  call Action_Define_OptionControl()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block FilterSheet_Icon (flow App_CommonBlocks_Filter)
- public: False
- input parameters: HaveFiltersApplied: Boolean (mandatory); BottomSheetId: Text (mandatory); isLoaded: Boolean (mandatory); ShowSubscriptionOnClick: Boolean (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): CountryDetails, ScreenBlock_Search, Updates_SingleList

#### Widget tree
```
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=not isLoaded
  placeholder Placeholder_LoadingSection:
    if HaveFiltersApplied #If_HaveFiltersApplied
      block Icon (UBTConnectLibrary.ConnectPatterns)
        args: In_ColorId=Entities.UBT_Color.Red, In_ExtendedClasses="header-filter-enabled", In_IconId=Entities.UBT_Icons2.ErrorFill, In_SizeId=Entities.UBT_IconsSize.NonStandard_14
    block Icon (UBTConnectLibrary.ConnectPatterns)
      args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.Tune, In_SizeId=Entities.UBT_IconsSize.Base_24
      on Click → IconClick
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

## Block FilterSheet_Icon_Label (flow App_CommonBlocks_Filter)
- public: False
- input parameters: HaveFiltersApplied: Boolean (mandatory); BottomSheetId: Text (mandatory); isLoaded: Boolean (mandatory); ShowSubscriptionOnClick: Boolean (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): Bookmarks, Notes

#### Widget tree
```
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=not isLoaded
  placeholder Placeholder_LoadingSection:
    if HaveFiltersApplied #If_HaveFiltersApplied
      block Icon (UBTConnectLibrary.ConnectPatterns)
        args: In_ColorId=Entities.UBT_Color.Red, In_ExtendedClasses="header-filter-enabled", In_IconId=Entities.UBT_Icons2.ErrorFill, In_SizeId=Entities.UBT_IconsSize.NonStandard_14
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ PaddingSize: { RightSizeId: Entities.UBT_Size.ExtraSmall }, DisplayOptions: { Display: Entities.UBT_Display.InlineFlex, AlignItems: Entities.UBT_AlignItems.Center } }
      on Clicked → IconClick
      placeholder Content:
        block Icon (UBTConnectLibrary.ConnectPatterns)
          args: In_ColorId=Entities.UBT_Color.CyanDark, In_IconId=Entities.UBT_Icons2.Tune, In_SizeId=Entities.UBT_IconsSize.Base_24
          on Click → IconClick
        block CustomText (UBTConnectLibrary.BasePatterns)
          args: In_PaddingOptions={ HorizontalSizeId: Entities.UBT_Size.ExtraSmall }, In_Text="Filter", In_TextOptions={ Color: Entities.UBT_Color.CyanDark, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
        block Icon (UBTConnectLibrary.ConnectPatterns)
          args: In_ColorId=Entities.UBT_Color.CyanDark, In_IconId=Entities.UBT_Icons2.ExpandMore, In_SizeId=Entities.UBT_IconsSize.Medium_20
          on Click → IconClick
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

## Block FilterSheet_OptionChoice_Item (flow App_CommonBlocks_Filter)
- public: False
- input parameters: Filter_Common_Control_Choice: Filter_Common_Control_Choice (mandatory)
- events: OnChange(Title: Text (mandatory); ChoiceId: Choice Identifier (mandatory)) mandatory
- local variables: Options: SelectionOption_Item List
- lifecycle: OnInitialize → OnInitialize; OnParametersChanged → OnParametersChanged
- used by (UBTConnect): FilterSheet, SortSheet

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns) #Choice
  args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Base, HorizontalSizeId: Entities.UBT_Size.Small }, MarginSize: { BottomSizeId: Entitie…
  placeholder Content:
    if Filter_Common_Control_Choice.Title <> ""
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Small } }
        placeholder Content:
          block CustomText (UBTConnectLibrary.BasePatterns)
            args: ExtendedClasses="text-align-left", In_Text=Filter_Common_Control_Choice.Title, In_TextOptions={ FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
    block SelectionOption_List (UBTConnectLibrary.ConnectPatterns)
      args: isMultiselect=False, Item_StyleOptions={ MarginSize: { BottomSizeId: Entities.UBT_Size.Base } }, LastItem_StyleOptions={ MarginSize: { BottomSizeId: Entities.UBT_Size.None } }, SelectionOption_ItemList=Options
      on OnSelectionChange → OnChange_Selection(ClickedItemId=ClickedItemId, SelectedItems=SelectedItems)
```

#### Block actions
- **DefineOptions**
  ```
  call ListClear(List=Options)
  if Filter_Common_Control_Choice.NoneLabel <> ""
    call ListAppend(Element={ Id: Entities.Choice.None, DisplayText: Filter_Common_Control_Choice.NoneLabel, isSelected: Filter_Common_Control_Choice.SelectedChoiceId = Entities.Choice.None }, List=Options) as None
    [M1] call ListAppend(Element={ Id: Entities.Choice.Yes, DisplayText: Filter_Common_Control_Choice.YesLabel, isSelected: Filter_Common_Control_Choice.SelectedChoiceId = Entities.Choice.Yes }, List=Options) as Yes
    call ListAppend(Element={ Id: Entities.Choice.No, DisplayText: Filter_Common_Control_Choice.NoLabel, isSelected: Filter_Common_Control_Choice.SelectedChoiceId = Entities.Choice.No }, List=Options) as No
    end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnChange_Selection** inputs: SelectedItems: SelectionOption_Item List (mandatory); ClickedItemId: Text (mandatory)
  ```
  trigger event OnChange(ChoiceId=TextToIdentifier(ClickedItemId), Title=Filter_Common_Control_Choice.Title)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  call DefineOptions()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnParametersChanged**
  ```
  call DefineOptions()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block FilterSheet_OptionList_Item (flow App_CommonBlocks_Filter)
- public: False
- input parameters: Filter_Common_Control_List: Filter_Common_Control_List (mandatory); ShowHeader: Boolean (mandatory); ForceUpdate: Boolean
- events: Event_Input_OnReady(Id: Text (mandatory)); OnBack() mandatory; OnChange(SelectedIds: Text List; Title: Text (mandatory)) mandatory
- local variables: Search_Selection: Text; Options: SelectionOption_Item List
- lifecycle: OnReady → OnReady; OnParametersChanged → OnParametersChanged
- used by (UBTConnect): FilterSheet

#### Widget tree
```
container
block CustomContainer (UBTConnectLibrary.BasePatterns) #Selections
  args: ExtendedClasses="text-align-left", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small }, BorderOptions: { Radius: { GeneralSizeId: Entities.UBT_Shape.Soft } } }
  placeholder Content:
    if ShowHeader #ShowHeader2
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: ExtendedClasses="ubt-zindex-2", Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color: Entities.UBT_Color.Neutral3, Size: { BottomSizeId: Entities.UBT_Size.Small } } }
        on Clicked → OnClick_SelectionBack
        placeholder Content:
          block IconText (UBTConnectLibrary.ConnectPatterns)
            args: Text="All "+Filter_Common_Control_List.Title
            placeholder Icon:
              block Icon (UBTConnectLibrary.ConnectPatterns)
                args: In_ColorId=Entities.UBT_Color.Neutral7, In_IconId=Entities.UBT_Icons2.ArrowLeftAlt
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small }, MarginSize: { VerticalSizeId: Entities.UBT_Size.Small } }
      placeholder Content:
        block Input (UBTConnectLibrary.ConnectPatterns)
          args: In_Options={ SearchPrompt: "Search", Debounce_DelayMS: 300, BorderRadius: Entities.Shape.Rounded }
          on Event_ClearString → InputEvent_ClearString
          on Event_OnChange → OnChange_SelectionSearch(Event_CurrentString=Event_CurrentString)
          on Event_OnReady → Handler_InputEvent_OnReady(Id=Id)
    if Search_Selection <> "" and Options.Empty #SearchEmpty
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small }, MarginSize: { BottomSizeId: Entities.UBT_Size.Small } }
        placeholder Content:
          block CustomText (UBTConnectLibrary.BasePatterns)
            args: In_Text="No results found for ‘"+\nSearch_Selection\n+"’", In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small }, MarginSize: { BottomSizeId: Entities.UBT_Size.Small } }
        placeholder Content:
          block CustomText (UBTConnectLibrary.BasePatterns)
            args: In_Text="We couldn’t find an item that matches your search. Please check your spelling or try different keywords.", In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }
    else
      block SelectionOption_List (UBTConnectLibrary.ConnectPatterns)
        args: isMultiselect=False, Item_StyleOptions={ Background: {  }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color: Entities.UBT_Color.Neutral3, Size: { BottomSizeId: Entities.UBT_Size.Small } } }, LastItem_StyleOptions={ BorderOptions: { Size: { GeneralSizeId: Entities.UBT_Size.None } } }, SelectionOption_ItemList=Options
        on NotEnabledOnClick → SelectionOption_ListNotEnabledOnClick(ClickedItemId=ClickedItemId)
        on OnSelectionChange → OnChange_Selection(ClickedItemId=ClickedItemId, SelectedItems=SelectedItems)
```

#### Block actions
- **Action_DefineOptions**
  ```
  assign: ForceUpdate = ForceUpdate
  call ListClear(List=Options)
  if Search_Selection <> ""
    call ListFilter(Condition=Index(JSUtils_String_RemoveAccents(DisplayText),JSUtils_String_RemoveAccents(Search_Selection),startIndex:,searchFromEnd:,ignoreCase:True) <> -1, SourceList=Filter_Common_Control_List.In_Options)
    call ListAppendAll(List=Options, SourceList=ListFilter.FilteredList) as ListAppendAll2
    [M1] for each Options
      call ListAny(Condition=Value = Options.Current.Id, List=Filter_Common_Control_List.SelectedIds)
      assign: Options.Current.isSelected = ListAny.Result
      → continues at [M1]
    end for
    end
  else
    if Filter_Common_Control_List.AddAllOptions
      call ListAppend(Element={ Id: Entities.Choice.None, DisplayText: "All "+Filter_Common_Control_List.Title, isSelected: Filter_Common_Control_List.SelectedIds.Current = TextToIdentifier(Entities.Choice.None) }, List=Options)
      [M2] call ListAppendAll(List=Options, SourceList=Filter_Common_Control_List.In_Options)
      → continues at [M1]
    else
      → continues at [M2]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_InputEvent_OnReady** inputs: Id: Text (mandatory)
  ```
  trigger event Event_Input_OnReady(Id=Id)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **InputEvent_ClearString**
  ```
  call OnChange_SelectionSearch(Event_CurrentString="")
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnChange_Selection** inputs: SelectedItems: SelectionOption_Item List (mandatory); ClickedItemId: Text (mandatory)
  ```
  call ListClear(List=Filter_Common_Control_List.SelectedIds)
  call ListAppendAll(List=Filter_Common_Control_List.SelectedIds, SourceList=ConvertList(SelectedItems,  {Value:"Id"}))
  trigger event OnChange(SelectedIds=Filter_Common_Control_List.SelectedIds, Title=Filter_Common_Control_List.Title)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnChange_SelectionSearch** inputs: Event_CurrentString: Text (mandatory)
  ```
  assign: Search_Selection = Event_CurrentString
  call Action_DefineOptions()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_SelectionBack**
  ```
  trigger event OnBack()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnParametersChanged**
  ```
  call Action_DefineOptions()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnReady**
  ```
  call Action_DefineOptions()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **SelectionOption_ListNotEnabledOnClick** inputs: ClickedItemId: Text (mandatory)
  ```
  call App_Subscription_ShowUpgradePopUp()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block MoreActionSheet (flow App_CommonBlocks_Filter)
- public: False
- input parameters: In_StartFilter: Filter_Common (mandatory); In_Filter_Common_Options_Choice: Filter_Common_Options (mandatory); ExtendedClasses: Text
- events: ApplySort(SortBy_Title: Text) mandatory; DeleteAllNotification() mandatory; Loaded(ShowSubscriptionOnClick: Boolean (mandatory)) mandatory; MarkAllAsRead() mandatory; SheetInitialized(SheetId: Text (mandatory)) mandatory
- local variables: BottomSheetId: Text; SubState_Selected: Text = ""; SubState_Main: Text = ""; SubState_Localities: Text = "Localities"; SubState_Countries: Text = "Countries"; SortBy_Title: Text = "Sort by"; OptionList_Selected: Filter_Common_Control_List; LocalCacheControl_AllCountries: CacheControl_AllCountries, isFetched Record; LocalCacheControl_AllLocalities: CacheControl_AllLocalities, isFetched Record; LocalCacheControl_UserInfo: Directory_UserCurrent, isFetched Record; OptionControl: OptionChoice_Control, OptionFlatList_Control, OptionList_Control Record; LastSearched_OptionControl: OptionChoice_Control, OptionFlatList_Control, OptionList_Control Record; Empty_OptionControl: OptionChoice_Control, OptionFlatList_Control, OptionList_Control Record; isSingleFilter: Boolean; isOpen_Local: Boolean; SearchInputId: Text; ForceUpdateOptionList: Boolean; ShowConfirmDeleteAllPopup: Boolean
- lifecycle: OnInitialize → ScreenEvent_OnInitialize; OnParametersChanged → ScreenEvent_OnParametersChanged
- used by (UBTConnect): Notifications_MoreActionSheet

#### Widget tree
```
container  [style="moreActionContainer"]
  block BottomSheet (OutSystemsUI_2_23+UBTConnectLibrary.Interaction)
    args: Content_BackgroundColorId=Entities.UBT_Color.Neutral2, Content_Padding={ GeneralSizeId: Entities.UBT_Size.Small }, ExtendedClasses=ExtendedClasses, FooterHeight="72px", ShowHeader=False, Title="Sort"
    on OnClose → BottomSheetOnClose
    on OnToggle → BottomSheetOnToggle(IsOpen=IsOpen)
    on Initialized → BottomSheetInitialized(Id=Id)
    placeholder Content:
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base }, BorderOptions: { Color: Entities.UBT_Color.Neutral0, Radius: { GeneralSizeId: E…
        placeholder Content:
          block CustomContainer (UBTConnectLibrary.BasePatterns)
            args: Options={ PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small } }
            placeholder Content:
              block IconText (UBTConnectLibrary.ConnectPatterns)
                args: Text="Mark all as read", TextOptions={ Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
                on Clicked → MarkAllAsReadClicked
                placeholder Icon:
                  block Icon (UBTConnectLibrary.ConnectPatterns)
                    args: In_ColorId=Entities.UBT_Color.Primary, In_IconId=Entities.UBT_Icons2.Mail, In_SizeId=Entities.UBT_IconsSize.Medium_20
          block CustomContainer (UBTConnectLibrary.BasePatterns)
            args: Options={ PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small } }
            placeholder Content:
              block IconText (UBTConnectLibrary.ConnectPatterns)
                args: Text="Delete all notifications", TextOptions={ Color: Entities.UBT_Color.Error, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
                on Clicked → Toggle_DeleteAllPopup
                placeholder Icon:
                  block Icon (UBTConnectLibrary.ConnectPatterns)
                    args: In_ColorId=Entities.UBT_Color.Error, In_IconId=Entities.UBT_Icons2.Delete, In_SizeId=Entities.UBT_IconsSize.Medium_20
    placeholder Footer:
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base, HorizontalSizeId: Entities.UBT_Size.None, TopSizeId: Entities.UBT_Size.Small, Bot…
        placeholder Content:
          block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
            args: In_ButtonOptions={ UBT_ButtonSizeId: Entities.UBT_ButtonSize.Medium, UBT_ButtonTypeId: Entities.UBT_ButtonType.Tertiary, UBT_FlexBehavior: Entities.UBT_FlexBehavior.Grow }, In_IsDisabled=False
            on Event_OnClick → OnClick_Clear
            placeholder Content:
              text: Cancel
if In_Filter_Common_Options_Choice.HasCountries.Enable or In_Filter_Common_Options_Choice.HasLocalities.Enable #NeedSubscriptionData
  block CacheControl_UserInfo_Wrapper (UBTConnect.App_Cache)
    on Result → CacheControl_UserInfo_WrapperResult(UserInformation=UserInformation)
popup show=ShowConfirmDeleteAllPopup  [style="popup-dialog"]
  block Notifications_ConfirmDialog (UBTConnect.App_Notifications)
    args: IsSingle=False
    on Confirm → DeleteAllNotificationClicked
    on Cancel → Toggle_DeleteAllPopup
block BackNavigationHandler (NavigationHandler.NavigationHandler)
  on BackNavigation → Handler_BackNavigation(BackNavigationEvent=BackNavigationEvent)
```

#### Block actions
- **Action_ClearSearchString**
  ```
  if SearchInputId <> ""
    call Input_ClearString(FocusOnInput=False, InputId=SearchInputId)
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_CloseSheet**
  ```
  call BottomSheetClose(WidgetId=BottomSheetId)
  call Action_SetSubState(In_SubState=SubState_Main)
  call Action_ClearSearchString()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_Define_Countries**; locals: LocalFilter_SelectionControls: Filter_Common_Control_List
  ```
  if (HasData) LocalCacheControl_AllCountries.isFetched and LocalCacheControl_UserInfo.isFetched and LocalCacheControl_UserInfo.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionType <> Entities.Connect_Subscription_Plan.Free
    assign: LocalFilter_SelectionControls.Title = SubState_Countries; LocalFilter_SelectionControls.In_Options = ConvertList(LocalCacheControl_AllCountries.CacheControl_AllCountries.CountryList,  {Id:"CountryCode",DisplayText:"CountryName",CountryCode:"CountryCode"}); LocalFilter_SelectionControls.Order = In_Filter_Common_Options_Choice.HasCountries.Order; LocalFilter_SelectionControls.AddAllOptions = In_Filter_Common_Options_Choice.HasCountries.AddAllOptions; LocalFilter_SelectionControls.SheetTitle = "Country"
    if In_StartFilter.CountryIds.Empty
      call ListAppend(Element=Entities.Choice.None, List=LocalFilter_SelectionControls.SelectedIds) as AppenAllOption
      [M1] call App_CommonFilter_DefineOptionNames(OptionList_Control=LocalFilter_SelectionControls)
      assign: LocalFilter_SelectionControls = App_CommonFilter_DefineOptionNames.Formatted
      if (Not Global?) LocalCacheControl_UserInfo.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionType <> Entities.Connect_Subscription_Plan.Global
        [M2] for each LocalFilter_SelectionControls.In_Options
          call App_CommonFilter_CheckCountry(CountryCode=LocalFilter_SelectionControls.In_Options.Current.Id, SubscribedCountries=LocalCacheControl_UserInfo.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscribedCountries)
          assign: LocalFilter_SelectionControls.In_Options.Current.isEnabled = App_CommonFilter_CheckCountry.IsEnabled
          → continues at [M2]
        end for
        [M3] call ListIndexOf(Condition=Title = SubState_Countries, List=OptionControl.OptionList_Control) as Position
        call ListSort(By=DisplayText, List=LocalFilter_SelectionControls.In_Options)
        if (AlreadyHasElement) Position.Position >= 0
          assign: OptionControl.OptionList_Control[Position.Position] = LocalFilter_SelectionControls
          [M4] call Action_FilterLocalitiesByCountry()
          call Action_Define_OptionControl_Last()
          call Action_DefineOptionControl_Empty()
          end
        else
          call ListAppend(Element=LocalFilter_SelectionControls, List=OptionControl.OptionList_Control) as ListAppend3
          → continues at [M4]
      else
        → continues at [M3]
    else
      [M5] for each In_StartFilter.CountryIds
        call ListAppend(Element=In_StartFilter.CountryIds.Current, List=LocalFilter_SelectionControls.SelectedIds)
        → continues at [M5]
      end for
      → continues at [M1]
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Action_Define_Localities**; locals: LocalFilter_SelectionControls: Filter_Common_Control_List
  ```
  if (HasData) LocalCacheControl_AllLocalities.isFetched and LocalCacheControl_UserInfo.isFetched and LocalCacheControl_UserInfo.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionType <> Entities.Connect_Subscription_Plan.Free
    assign: LocalFilter_SelectionControls.Title = SubState_Localities; LocalFilter_SelectionControls.In_Options = ConvertList(LocalCacheControl_AllLocalities.CacheControl_AllLocalities.LocalityList,  {Id:"LocalityId",DisplayText:"Name",CountryCode:"CountryCode"}); LocalFilter_SelectionControls.Order = In_Filter_Common_Options_Choice.HasSorting.Order; LocalFilter_SelectionControls.AddAllOptions = In_Filter_Common_Options_Choice.HasLocalities.AddAllOptions; LocalFilter_SelectionControls.SheetTitle = "Locality"
    if In_StartFilter.LocalitiesIds.Empty
      call ListAppend(Element=Entities.Choice.None, List=LocalFilter_SelectionControls.SelectedIds) as AppenAllOption
      [M1] call App_CommonFilter_DefineOptionNames(OptionList_Control=LocalFilter_SelectionControls)
      assign: LocalFilter_SelectionControls = App_CommonFilter_DefineOptionNames.Formatted
      call ListIndexOf(Condition=Title = SubState_Localities, List=OptionControl.OptionList_Control) as Position
      if (AlreadyHasElement) Position.Position >= 0
        assign: OptionControl.OptionList_Control[Position.Position] = LocalFilter_SelectionControls
        [M2] call Action_FilterLocalitiesByCountry()
        call Action_Define_OptionControl_Last() as Action_Define_OptionControlVars
        call Action_DefineOptionControl_Empty()
        end
      else
        call ListAppend(Element=LocalFilter_SelectionControls, List=OptionControl.OptionList_Control)
        → continues at [M2]
    else
      [M3] for each In_StartFilter.LocalitiesIds
        call ListAppend(Element=In_StartFilter.CountryIds.Current, List=LocalFilter_SelectionControls.SelectedIds) as ListAppend3
        → continues at [M3]
      end for
      → continues at [M1]
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Action_Define_OptionControl**
  ```
  assign: OptionControl.OptionList_Control = In_Filter_Common_Options_Choice.Extra_OptionLists; OptionControl.OptionChoice_Control = In_Filter_Common_Options_Choice.Extra_OptionChoices; OptionControl.OptionFlatList_Control = In_Filter_Common_Options_Choice.Extra_OptionFlatLists
  if (Countries) In_Filter_Common_Options_Choice.HasCountries.Enable
    call Action_Define_Countries()
    [M1] if (Localities) In_Filter_Common_Options_Choice.HasLocalities.Enable
      call Action_Define_Localities()
      [M2] if In_Filter_Common_Options_Choice.HasSorting.Enable
        call Action_DefineSortBy()
        [M3] call ListSort(By=Order, List=OptionControl.OptionChoice_Control)
        call ListSort(By=Order, List=OptionControl.OptionList_Control) as ListSort2
        call ListSort(By=Order, List=OptionControl.OptionFlatList_Control) as ListSort3
        if (Has Year Flat List Options) not In_Filter_Common_Options_Choice.Extra_OptionFlatLists.Current.In_Options.Empty
          assign: 
          [M4] call Action_Define_OptionControl_Last() as Action_Define_OptionControlVars
          call Action_DefineOptionControl_Empty()
          end
        else
          → continues at [M4]
      else
        → continues at [M3]
    else
      → continues at [M2]
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_Define_OptionControl_Last** inputs: isFromApply: Boolean
  ```
  assign: LastSearched_OptionControl = OptionControl
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_DefineOptionControl_Empty**
  ```
  assign: Empty_OptionControl = OptionControl
  [M1] for each Empty_OptionControl.OptionList_Control
    call ListClear(List=Empty_OptionControl.OptionList_Control.Current.SelectedIds)
    call ListClear(List=Empty_OptionControl.OptionList_Control.Current.SelectedNames) as ListClear2
    call ListAppend(Element=Entities.Choice.None, List=Empty_OptionControl.OptionList_Control.Current.SelectedIds)
    → continues at [M1]
  end for
  [M2] for each Empty_OptionControl.OptionChoice_Control
    assign: Empty_OptionControl.OptionChoice_Control.Current.SelectedChoiceId = Entities.Choice.None
    → continues at [M2]
  end for
  call ListIndexOf(Condition=Title = SortBy_Title, List=Empty_OptionControl.OptionChoice_Control)
  if (Has Sort) ListIndexOf.Position >= 0
    assign: Empty_OptionControl.OptionChoice_Control[ListIndexOf.Position].SelectedChoiceId = Entities.Choice.Yes
    [M3] call Action_SetSingleFilter()
    end
  else
    → continues at [M3]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_DefineSortBy**; locals: Local_FilterChoiceItem: Filter_Common_Control_Choice
  ```
  call ListIndexOf(Condition=Title = SortBy_Title, List=OptionControl.OptionChoice_Control)
  if (Has Sorting) In_Filter_Common_Options_Choice.HasSorting.Enable
    if (Already Has Element) ListIndexOf.Position >= 0
      end
    else
      assign: Local_FilterChoiceItem.Title = SortBy_Title; Local_FilterChoiceItem.SelectedChoiceId = If(In_StartFilter.Sort_ByNewest = NullTextIdentifier(), Entities.Choice.Yes, In_StartFilter.Sort_ByNewest); Local_FilterChoiceItem.YesLabel = In_Filter_Common_Options_Choice.HasSorting.YesLabel; Local_FilterChoiceItem.NoLabel = In_Filter_Common_Options_Choice.HasSorting.NoLabel; Local_FilterChoiceItem.NoneLabel = "" //No none; Local_FilterChoiceItem.Order = In_Filter_Common_Options_Choice.HasSorting.Order
      call ListAppend(Element=Local_FilterChoiceItem, List=OptionControl.OptionChoice_Control)
      end
  else
    if (Already Has Element) ListIndexOf.Position >= 0
      call ListRemove(List=OptionControl.OptionChoice_Control, Position=ListIndexOf.Position)
      end
    else
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **Action_FilterLocalitiesByCountry**
  ```
  if (ShouldFilter) In_Filter_Common_Options_Choice.HasCountries.Enable and In_Filter_Common_Options_Choice.HasLocalities.Enable
    if (isFetched) LocalCacheControl_AllCountries.isFetched and LocalCacheControl_AllLocalities.isFetched
      call ListIndexOf(Condition=Title = SubState_Localities, List=OptionControl.OptionList_Control) as ListIndexOfLocalities
      call ListIndexOf(Condition=Title =  SubState_Countries, List=OptionControl.OptionList_Control) as ListIndexOfCountries
      if (HasItems) ListIndexOfLocalities.Position >= 0 and ListIndexOfCountries.Position >= 0
        call ListClear(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].In_Options)
        if (Country Has All Selected) OptionControl.OptionList_Control[ListIndexOfCountries.Position].SelectedIds.Current = Entities.Choice.None
          call ListAppendAll(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].In_Options, SourceList=ConvertList(LocalCacheControl_AllLocalities.CacheControl_AllLocalities.LocalityList,  {Id:"LocalityId",DisplayText:"Name",CountryCode:"CountryCode",isEnabled:"App_CommonFilter_CheckCountry(CountryCod…)
          [M1] call ListSort(By=CountryCode+DisplayText, List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].In_Options)
          if (Locality Has All Selected) OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds.Current = Entities.Choice.None
            end
          else
            call ListDuplicate(SourceList=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds)
            call ListClear(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds) as ListClear2
            call ListClear(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedNames) as ListClear3
            [M2] for each ListDuplicate.DuplicatedList
              call ListAny(Condition=Id = ListDuplicate.DuplicatedList.Current, List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].In_Options)
              if (SelectedOptionStillExist) ListAny.Result
                call ListAppend(Element=ListDuplicate.DuplicatedList.Current, List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds)
                → continues at [M2]
              else
                → continues at [M2]
            end for
            call App_CommonFilter_DefineOptionNames(OptionList_Control=OptionControl.OptionList_Control[ListIndexOfLocalities.Position])
            assign: OptionControl.OptionList_Control[ListIndexOfLocalities.Position] = App_CommonFilter_DefineOptionNames.Formatted
            end
        else
          [M3] for each OptionControl.OptionList_Control[ListIndexOfCountries.Position].SelectedIds (ForEachSelected)
            call ListFilter(Condition=ToUpper(Trim(CountryCode)) = ToUpper(Trim(OptionControl.OptionList_Control[ListIndexOfCountries.Position].SelectedIds.Current)), SourceList=LocalCacheControl_AllLocalities.CacheControl_AllLocalities.LocalityList)
            call ListAppendAll(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].In_Options, SourceList=ConvertList(ListFilter.FilteredList,  {Id:"LocalityId",DisplayText:"Name",CountryCode:"CountryCode",isEnabled:"App_CommonFilter_CheckCountry(CountryCode,LocalCacheControl_UserInfo.Directory_UserCurre…) as ListAppendAll2
            → continues at [M3]
          end for
          → continues at [M1]
      else
        end
    else
      end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
    end
  ```
- **Action_SetSingleFilter**
  ```
  assign: isSingleFilter = OptionControl.OptionChoice_Control.Length + OptionControl.OptionList_Control.Length = 1
  if isSingleFilter
    if (OptionList?) OptionControl.OptionList_Control.Empty
      end
    else
      assign: SubState_Selected = OptionControl.OptionList_Control.Current.Title; OptionList_Selected = OptionControl.OptionList_Control.Current
      end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Action_SetSubState** inputs: In_SubState: Text (mandatory)
  ```
  if In_SubState = SubState_Main and isSingleFilter
    call Action_SetSingleFilter()
    end
  else
    assign: SubState_Selected = In_SubState
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **BottomSheetInitialized** inputs: Id: Text (mandatory)
  ```
  assign: BottomSheetId = Id
  trigger event SheetInitialized(SheetId=Id)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **BottomSheetOnClose**
  ```
  assign: OptionControl = LastSearched_OptionControl
  if isSingleFilter
    assign: ForceUpdateOptionList = not ForceUpdateOptionList
    [M1] call BottomSheetClose(WidgetId=BottomSheetId)
    call Action_SetSubState(In_SubState=SubState_Main)
    end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **BottomSheetOnToggle** inputs: IsOpen: Boolean (mandatory)
  ```
  assign: isOpen_Local = IsOpen
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControl_UserInfo_WrapperResult** inputs: UserInformation: Directory_UserCurrent (mandatory); locals: HasFiltersOtherThanLocality: Boolean; ShowSubscriptionOnClick: Boolean
  ```
  assign (LocalCacheControl_UserInfo): LocalCacheControl_UserInfo.Directory_UserCurrent = UserInformation; LocalCacheControl_UserInfo.isFetched = True
  call Action_Define_Countries()
  call Action_Define_Localities()
  assign: HasFiltersOtherThanLocality = not In_Filter_Common_Options_Choice.Extra_OptionLists.Empty or not In_Filter_Common_Options_Choice.Extra_OptionChoices.Empty or In_Filter_Common_Options_Choice.HasSorting.Enable
  if HasFiltersOtherThanLocality
    assign: ShowSubscriptionOnClick = False
    [M1] trigger event Loaded(ShowSubscriptionOnClick=ShowSubscriptionOnClick)
    end
  else
    assign: ShowSubscriptionOnClick = UserInformation.Directory_UserCurrent_Subscription.SubscriptionType = Entities.Connect_Subscription_Plan.Free
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **DeleteAllNotificationClicked**
  ```
  trigger event DeleteAllNotification()
  call Toggle_DeleteAllPopup()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_BackNavigation** inputs: BackNavigationEvent: Object (mandatory)
  ```
  if isOpen_Local
    call BottomSheetClose(WidgetId=BottomSheetId)
    call PreventNavigation(NavigationEvent=BackNavigationEvent)
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_Input_OnReady** inputs: Id: Text (mandatory)
  ```
  assign: SearchInputId = Id
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_ListOnSelectionChange** inputs: SelectedItems: SelectionOption_Item List (mandatory); ClickedItemId: Text (mandatory)
  ```
  assign: OptionControl.OptionFlatList_Control.Current.SelectedIds = ConvertList(SelectedItems,  {Value:"Id"}); OptionControl.OptionFlatList_Control.Current.SelectedNames = ConvertList(SelectedItems,  {Value:"DisplayText"})
  call ListIndexOf(Condition=Id = ClickedItemId, List=OptionControl.OptionFlatList_Control.Current.In_Options)
  if ListIndexOf.Position >= 0
    assign: OptionControl.OptionFlatList_Control.Current.In_Options[ListIndexOf.Position].isSelected = not OptionControl.OptionFlatList_Control.Current.In_Options[ListIndexOf.Position].isSelected
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **MarkAllAsReadClicked**
  ```
  trigger event MarkAllAsRead()
  call BottomSheetOnClose()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnChange_ChoiceOption** inputs: In_Title: Text (mandatory); ChoiceId: Choice Identifier (mandatory)
  ```
  call ListIndexOf(Condition=Title = In_Title, List=OptionControl.OptionChoice_Control)
  if ListIndexOf.Position >= 0
    assign: OptionControl.OptionChoice_Control[ListIndexOf.Position].SelectedChoiceId = ChoiceId
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnChange_ListOption** inputs: In_SelectedIds: Text List (mandatory); In_Title: Text (mandatory)
  ```
  call ListIndexOf(Condition=Title = In_Title, List=OptionControl.OptionList_Control)
  if ListIndexOf.Position >= 0
    assign: OptionControl.OptionList_Control[ListIndexOf.Position].SelectedIds = In_SelectedIds
    call App_CommonFilter_DefineOptionNames(OptionList_Control=OptionControl.OptionList_Control[ListIndexOf.Position])
    assign: OptionControl.OptionList_Control[ListIndexOf.Position] = App_CommonFilter_DefineOptionNames.Formatted
    [M1] if In_Title = SubState_Countries
      if (IsAllCountries) In_SelectedIds.Current = Entities.Choice.None
        call ListIndexOf(Condition=Title = SubState_Localities, List=OptionControl.OptionList_Control) as ListIndexOfLocalities
        if ListIndexOfLocalities.Position <> -1
          call ListClear(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds)
          call ListClear(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedNames) as ListClear2
          assign: OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds = In_SelectedIds
          [M2] call Action_FilterLocalitiesByCountry()
          end
        else
          → continues at [M2]
      else
        → continues at [M2]
    else
      end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_Apply**
  ```
  call Action_Define_OptionControl_Last(isFromApply=True)
  call Action_CloseSheet()
  trigger event ApplySort(SortBy_Title=SortBy_Title)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_Clear**
  ```
  assign: OptionControl = Empty_OptionControl
  call ListClear(List=OptionList_Selected.SelectedIds)
  call ListClear(List=OptionList_Selected.SelectedNames) as ListClear2
  call OnClick_Apply()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_SelectionBack**
  ```
  if isSingleFilter
    call Action_CloseSheet()
    end
  else
    call Action_SetSubState(In_SubState=SubState_Main)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnClick_SelectionOption** inputs: In_Title: Text (mandatory)
  ```
  call ListIndexOf(Condition=Title = In_Title, List=OptionControl.OptionList_Control)
  if ListIndexOf.Position >= 0
    call Action_SetSubState(In_SubState=OptionControl.OptionList_Control.Current.Title)
    assign: OptionList_Selected = OptionControl.OptionList_Control[ListIndexOf.Position]
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  call Action_Define_OptionControl()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnParametersChanged**
  ```
  call Action_Define_OptionControl()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Toggle_DeleteAllPopup**
  ```
  assign: ShowConfirmDeleteAllPopup = not ShowConfirmDeleteAllPopup
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block SortSheet (flow App_CommonBlocks_Filter)
- public: False
- input parameters: In_StartFilter: Filter_Common (mandatory); In_Filter_Common_Options_Choice: Filter_Common_Options (mandatory); ExtendedClasses: Text
- events: ApplySort(SortBy_Title: Text; OptionControl: OptionChoice_Control, OptionFlatList_Control, OptionList_Control Record (mandatory)) mandatory; Loaded(ShowSubscriptionOnClick: Boolean (mandatory)) mandatory; SheetInitialized(SheetId: Text (mandatory)) mandatory
- local variables: BottomSheetId: Text; SubState_Selected: Text = ""; SubState_Main: Text = ""; SubState_Localities: Text = "Localities"; SubState_Countries: Text = "Countries"; SortBy_Title: Text; OptionList_Selected: Filter_Common_Control_List; LocalCacheControl_AllCountries: CacheControl_AllCountries, isFetched Record; LocalCacheControl_AllLocalities: CacheControl_AllLocalities, isFetched Record; LocalCacheControl_UserInfo: Directory_UserCurrent, isFetched Record; OptionControl: OptionChoice_Control, OptionFlatList_Control, OptionList_Control Record; LastSearched_OptionControl: OptionChoice_Control, OptionFlatList_Control, OptionList_Control Record; Empty_OptionControl: OptionChoice_Control, OptionFlatList_Control, OptionList_Control Record; isSingleFilter: Boolean; isOpen_Local: Boolean; SearchInputId: Text; ForceUpdateOptionList: Boolean
- lifecycle: OnInitialize → ScreenEvent_OnInitialize; OnParametersChanged → ScreenEvent_OnParametersChanged
- used by (UBTConnect): Notifications_SortSheet

#### Widget tree
```
block BottomSheet (OutSystemsUI_2_23+UBTConnectLibrary.Interaction)
  args: Content_BackgroundColorId=Entities.UBT_Color.Neutral2, Content_Padding={ GeneralSizeId: Entities.UBT_Size.Small }, ExtendedClasses=ExtendedClasses, FooterHeight="72px", Title="Sort"
  on Initialized → BottomSheetInitialized(Id=Id)
  on OnClose → BottomSheetOnClose
  on OnToggle → BottomSheetOnToggle(IsOpen=IsOpen)
  placeholder Content:
    list source=OptionControl.OptionChoice_Control mode=Default #Options_Choices  [style="list list-group"]
      block FilterSheet_OptionChoice_Item (UBTConnect.App_CommonBlocks_Filter)
        args: Filter_Common_Control_Choice=OptionControl.OptionChoice_Control.Current
        on OnChange → OnChange_ChoiceOption(ChoiceId=ChoiceId, In_Title=Title)
  placeholder Footer:
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base }, ShadowId: Entities.UBT_Shadow.ExtraSmall }
      placeholder Content:
        block Columns_Two (UBTConnectLibrary.BasePatterns)
          args: ColumnOptions={ SpacingSize: Entities.UBT_Size.Small }
          placeholder Left:
            block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
              args: In_ButtonOptions={ UBT_ButtonSizeId: Entities.UBT_ButtonSize.Small, UBT_ButtonTypeId: Entities.UBT_ButtonType.Scondary, UBT_FlexBehavior: Entities.UBT_FlexBehavior.Grow }, In_IsDisabled=OptionControl = Empty_OptionControl
              on Event_OnClick → OnClick_Clear
              placeholder Content:
                text: Clear
          placeholder Right:
            block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
              args: In_ButtonOptions={ UBT_ButtonSizeId: Entities.UBT_ButtonSize.Small, UBT_ButtonTypeId: Entities.UBT_ButtonType.Primary, UBT_FlexBehavior: Entities.UBT_FlexBehavior.Grow }, In_IsDisabled=OptionControl = LastSearched_OptionControl
              on Event_OnClick → OnClick_Apply
              placeholder Content:
                text: Apply
if In_Filter_Common_Options_Choice.HasCountries.Enable or In_Filter_Common_Options_Choice.HasLocalities.Enable #NeedSubscriptionData
  block CacheControl_UserInfo_Wrapper (UBTConnect.App_Cache)
    on Result → CacheControl_UserInfo_WrapperResult(UserInformation=UserInformation)
block BackNavigationHandler (NavigationHandler.NavigationHandler)
  on BackNavigation → Handler_BackNavigation(BackNavigationEvent=BackNavigationEvent)
```

#### Block actions
- **Action_ClearSearchString**
  ```
  if SearchInputId <> ""
    call Input_ClearString(FocusOnInput=False, InputId=SearchInputId)
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_CloseSheet**
  ```
  call BottomSheetClose(WidgetId=BottomSheetId)
  call Action_SetSubState(In_SubState=SubState_Main)
  call Action_ClearSearchString()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_Define_Countries**; locals: LocalFilter_SelectionControls: Filter_Common_Control_List
  ```
  if (HasData) LocalCacheControl_AllCountries.isFetched and LocalCacheControl_UserInfo.isFetched and LocalCacheControl_UserInfo.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionType <> Entities.Connect_Subscription_Plan.Free
    assign: LocalFilter_SelectionControls.Title = SubState_Countries; LocalFilter_SelectionControls.In_Options = ConvertList(LocalCacheControl_AllCountries.CacheControl_AllCountries.CountryList,  {Id:"CountryCode",DisplayText:"CountryName",CountryCode:"CountryCode"}); LocalFilter_SelectionControls.Order = In_Filter_Common_Options_Choice.HasCountries.Order; LocalFilter_SelectionControls.AddAllOptions = In_Filter_Common_Options_Choice.HasCountries.AddAllOptions; LocalFilter_SelectionControls.SheetTitle = "Country"
    if In_StartFilter.CountryIds.Empty
      call ListAppend(Element=Entities.Choice.None, List=LocalFilter_SelectionControls.SelectedIds) as AppenAllOption
      [M1] call App_CommonFilter_DefineOptionNames(OptionList_Control=LocalFilter_SelectionControls)
      assign: LocalFilter_SelectionControls = App_CommonFilter_DefineOptionNames.Formatted
      if (Not Global?) LocalCacheControl_UserInfo.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionType <> Entities.Connect_Subscription_Plan.Global
        [M2] for each LocalFilter_SelectionControls.In_Options
          call App_CommonFilter_CheckCountry(CountryCode=LocalFilter_SelectionControls.In_Options.Current.Id, SubscribedCountries=LocalCacheControl_UserInfo.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscribedCountries)
          assign: LocalFilter_SelectionControls.In_Options.Current.isEnabled = App_CommonFilter_CheckCountry.IsEnabled
          → continues at [M2]
        end for
        [M3] call ListIndexOf(Condition=Title = SubState_Countries, List=OptionControl.OptionList_Control) as Position
        call ListSort(By=DisplayText, List=LocalFilter_SelectionControls.In_Options)
        if (AlreadyHasElement) Position.Position >= 0
          assign: OptionControl.OptionList_Control[Position.Position] = LocalFilter_SelectionControls
          [M4] call Action_FilterLocalitiesByCountry()
          call Action_Define_OptionControl_Last()
          call Action_DefineOptionControl_Empty()
          end
        else
          call ListAppend(Element=LocalFilter_SelectionControls, List=OptionControl.OptionList_Control) as ListAppend3
          → continues at [M4]
      else
        → continues at [M3]
    else
      [M5] for each In_StartFilter.CountryIds
        call ListAppend(Element=In_StartFilter.CountryIds.Current, List=LocalFilter_SelectionControls.SelectedIds)
        → continues at [M5]
      end for
      → continues at [M1]
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Action_Define_Localities**; locals: LocalFilter_SelectionControls: Filter_Common_Control_List
  ```
  if (HasData) LocalCacheControl_AllLocalities.isFetched and LocalCacheControl_UserInfo.isFetched and LocalCacheControl_UserInfo.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionType <> Entities.Connect_Subscription_Plan.Free
    assign: LocalFilter_SelectionControls.Title = SubState_Localities; LocalFilter_SelectionControls.In_Options = ConvertList(LocalCacheControl_AllLocalities.CacheControl_AllLocalities.LocalityList,  {Id:"LocalityId",DisplayText:"Name",CountryCode:"CountryCode"}); LocalFilter_SelectionControls.Order = In_Filter_Common_Options_Choice.HasSorting.Order; LocalFilter_SelectionControls.AddAllOptions = In_Filter_Common_Options_Choice.HasLocalities.AddAllOptions; LocalFilter_SelectionControls.SheetTitle = "Locality"
    if In_StartFilter.LocalitiesIds.Empty
      call ListAppend(Element=Entities.Choice.None, List=LocalFilter_SelectionControls.SelectedIds) as AppenAllOption
      [M1] call App_CommonFilter_DefineOptionNames(OptionList_Control=LocalFilter_SelectionControls)
      assign: LocalFilter_SelectionControls = App_CommonFilter_DefineOptionNames.Formatted
      call ListIndexOf(Condition=Title = SubState_Localities, List=OptionControl.OptionList_Control) as Position
      if (AlreadyHasElement) Position.Position >= 0
        assign: OptionControl.OptionList_Control[Position.Position] = LocalFilter_SelectionControls
        [M2] call Action_FilterLocalitiesByCountry()
        call Action_Define_OptionControl_Last() as Action_Define_OptionControlVars
        call Action_DefineOptionControl_Empty()
        end
      else
        call ListAppend(Element=LocalFilter_SelectionControls, List=OptionControl.OptionList_Control)
        → continues at [M2]
    else
      [M3] for each In_StartFilter.LocalitiesIds
        call ListAppend(Element=In_StartFilter.CountryIds.Current, List=LocalFilter_SelectionControls.SelectedIds) as ListAppend3
        → continues at [M3]
      end for
      → continues at [M1]
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Action_Define_OptionControl**
  ```
  assign: OptionControl.OptionList_Control = In_Filter_Common_Options_Choice.Extra_OptionLists; OptionControl.OptionChoice_Control = In_Filter_Common_Options_Choice.Extra_OptionChoices; OptionControl.OptionFlatList_Control = In_Filter_Common_Options_Choice.Extra_OptionFlatLists
  if (Countries) In_Filter_Common_Options_Choice.HasCountries.Enable
    call Action_Define_Countries()
    [M1] if (Localities) In_Filter_Common_Options_Choice.HasLocalities.Enable
      call Action_Define_Localities()
      [M2] if In_Filter_Common_Options_Choice.HasSorting.Enable
        call Action_DefineSortBy()
        [M3] call ListSort(By=Order, List=OptionControl.OptionChoice_Control)
        call ListSort(By=Order, List=OptionControl.OptionList_Control) as ListSort2
        call ListSort(By=Order, List=OptionControl.OptionFlatList_Control) as ListSort3
        if (Has Year Flat List Options) not In_Filter_Common_Options_Choice.Extra_OptionFlatLists.Current.In_Options.Empty
          assign: 
          [M4] call Action_Define_OptionControl_Last() as Action_Define_OptionControlVars
          call Action_DefineOptionControl_Empty()
          end
        else
          → continues at [M4]
      else
        → continues at [M3]
    else
      → continues at [M2]
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_Define_OptionControl_Last** inputs: isFromApply: Boolean
  ```
  assign: LastSearched_OptionControl = OptionControl
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_DefineOptionControl_Empty**
  ```
  assign: Empty_OptionControl = OptionControl
  [M1] for each Empty_OptionControl.OptionList_Control
    call ListClear(List=Empty_OptionControl.OptionList_Control.Current.SelectedIds)
    call ListClear(List=Empty_OptionControl.OptionList_Control.Current.SelectedNames) as ListClear2
    call ListAppend(Element=Entities.Choice.None, List=Empty_OptionControl.OptionList_Control.Current.SelectedIds)
    → continues at [M1]
  end for
  [M2] for each Empty_OptionControl.OptionChoice_Control
    assign: Empty_OptionControl.OptionChoice_Control.Current.SelectedChoiceId = Entities.Choice.None
    → continues at [M2]
  end for
  call ListIndexOf(Condition=Title = SortBy_Title, List=Empty_OptionControl.OptionChoice_Control)
  if (Has Sort) ListIndexOf.Position >= 0
    assign: Empty_OptionControl.OptionChoice_Control[ListIndexOf.Position].SelectedChoiceId = Entities.Choice.Yes
    [M3] call Action_SetSingleFilter()
    end
  else
    → continues at [M3]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_DefineSortBy**; locals: Local_FilterChoiceItem: Filter_Common_Control_Choice
  ```
  call ListIndexOf(Condition=Title = SortBy_Title, List=OptionControl.OptionChoice_Control)
  if (Has Sorting) In_Filter_Common_Options_Choice.HasSorting.Enable
    if (Already Has Element) ListIndexOf.Position >= 0
      end
    else
      assign: Local_FilterChoiceItem.Title = SortBy_Title; Local_FilterChoiceItem.SelectedChoiceId = If(In_StartFilter.Sort_ByNewest = NullTextIdentifier(), Entities.Choice.Yes, In_StartFilter.Sort_ByNewest); Local_FilterChoiceItem.YesLabel = In_Filter_Common_Options_Choice.HasSorting.YesLabel; Local_FilterChoiceItem.NoLabel = In_Filter_Common_Options_Choice.HasSorting.NoLabel; Local_FilterChoiceItem.NoneLabel = "" //No none; Local_FilterChoiceItem.Order = In_Filter_Common_Options_Choice.HasSorting.Order
      call ListAppend(Element=Local_FilterChoiceItem, List=OptionControl.OptionChoice_Control)
      end
  else
    if (Already Has Element) ListIndexOf.Position >= 0
      call ListRemove(List=OptionControl.OptionChoice_Control, Position=ListIndexOf.Position)
      end
    else
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **Action_FilterLocalitiesByCountry**
  ```
  if (ShouldFilter) In_Filter_Common_Options_Choice.HasCountries.Enable and In_Filter_Common_Options_Choice.HasLocalities.Enable
    if (isFetched) LocalCacheControl_AllCountries.isFetched and LocalCacheControl_AllLocalities.isFetched
      call ListIndexOf(Condition=Title = SubState_Localities, List=OptionControl.OptionList_Control) as ListIndexOfLocalities
      call ListIndexOf(Condition=Title =  SubState_Countries, List=OptionControl.OptionList_Control) as ListIndexOfCountries
      if (HasItems) ListIndexOfLocalities.Position >= 0 and ListIndexOfCountries.Position >= 0
        call ListClear(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].In_Options)
        if (Country Has All Selected) OptionControl.OptionList_Control[ListIndexOfCountries.Position].SelectedIds.Current = Entities.Choice.None
          call ListAppendAll(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].In_Options, SourceList=ConvertList(LocalCacheControl_AllLocalities.CacheControl_AllLocalities.LocalityList,  {Id:"LocalityId",DisplayText:"Name",CountryCode:"CountryCode",isEnabled:"App_CommonFilter_CheckCountry(CountryCod…)
          [M1] call ListSort(By=CountryCode+DisplayText, List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].In_Options)
          if (Locality Has All Selected) OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds.Current = Entities.Choice.None
            end
          else
            call ListDuplicate(SourceList=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds)
            call ListClear(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds) as ListClear2
            call ListClear(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedNames) as ListClear3
            [M2] for each ListDuplicate.DuplicatedList
              call ListAny(Condition=Id = ListDuplicate.DuplicatedList.Current, List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].In_Options)
              if (SelectedOptionStillExist) ListAny.Result
                call ListAppend(Element=ListDuplicate.DuplicatedList.Current, List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds)
                → continues at [M2]
              else
                → continues at [M2]
            end for
            call App_CommonFilter_DefineOptionNames(OptionList_Control=OptionControl.OptionList_Control[ListIndexOfLocalities.Position])
            assign: OptionControl.OptionList_Control[ListIndexOfLocalities.Position] = App_CommonFilter_DefineOptionNames.Formatted
            end
        else
          [M3] for each OptionControl.OptionList_Control[ListIndexOfCountries.Position].SelectedIds (ForEachSelected)
            call ListFilter(Condition=ToUpper(Trim(CountryCode)) = ToUpper(Trim(OptionControl.OptionList_Control[ListIndexOfCountries.Position].SelectedIds.Current)), SourceList=LocalCacheControl_AllLocalities.CacheControl_AllLocalities.LocalityList)
            call ListAppendAll(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].In_Options, SourceList=ConvertList(ListFilter.FilteredList,  {Id:"LocalityId",DisplayText:"Name",CountryCode:"CountryCode",isEnabled:"App_CommonFilter_CheckCountry(CountryCode,LocalCacheControl_UserInfo.Directory_UserCurre…) as ListAppendAll2
            → continues at [M3]
          end for
          → continues at [M1]
      else
        end
    else
      end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
    end
  ```
- **Action_SetSingleFilter**
  ```
  assign: isSingleFilter = OptionControl.OptionChoice_Control.Length + OptionControl.OptionList_Control.Length = 1
  if isSingleFilter
    if (OptionList?) OptionControl.OptionList_Control.Empty
      end
    else
      assign: SubState_Selected = OptionControl.OptionList_Control.Current.Title; OptionList_Selected = OptionControl.OptionList_Control.Current
      end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Action_SetSubState** inputs: In_SubState: Text (mandatory)
  ```
  if In_SubState = SubState_Main and isSingleFilter
    call Action_SetSingleFilter()
    end
  else
    assign: SubState_Selected = In_SubState
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **BottomSheetInitialized** inputs: Id: Text (mandatory)
  ```
  assign: BottomSheetId = Id
  trigger event SheetInitialized(SheetId=Id)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **BottomSheetOnClose**
  ```
  assign: OptionControl = LastSearched_OptionControl
  if isSingleFilter
    assign: ForceUpdateOptionList = not ForceUpdateOptionList
    [M1] call BottomSheetClose(WidgetId=BottomSheetId)
    call Action_SetSubState(In_SubState=SubState_Main)
    end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **BottomSheetOnToggle** inputs: IsOpen: Boolean (mandatory)
  ```
  assign: isOpen_Local = IsOpen
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControl_UserInfo_WrapperResult** inputs: UserInformation: Directory_UserCurrent (mandatory); locals: HasFiltersOtherThanLocality: Boolean; ShowSubscriptionOnClick: Boolean
  ```
  assign (LocalCacheControl_UserInfo): LocalCacheControl_UserInfo.Directory_UserCurrent = UserInformation; LocalCacheControl_UserInfo.isFetched = True
  call Action_Define_Countries()
  call Action_Define_Localities()
  assign: HasFiltersOtherThanLocality = not In_Filter_Common_Options_Choice.Extra_OptionLists.Empty or not In_Filter_Common_Options_Choice.Extra_OptionChoices.Empty or In_Filter_Common_Options_Choice.HasSorting.Enable
  if HasFiltersOtherThanLocality
    assign: ShowSubscriptionOnClick = False
    [M1] trigger event Loaded(ShowSubscriptionOnClick=ShowSubscriptionOnClick)
    end
  else
    assign: ShowSubscriptionOnClick = UserInformation.Directory_UserCurrent_Subscription.SubscriptionType = Entities.Connect_Subscription_Plan.Free
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_BackNavigation** inputs: BackNavigationEvent: Object (mandatory)
  ```
  if isOpen_Local
    call BottomSheetClose(WidgetId=BottomSheetId)
    call PreventNavigation(NavigationEvent=BackNavigationEvent)
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_Input_OnReady** inputs: Id: Text (mandatory)
  ```
  assign: SearchInputId = Id
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_ListOnSelectionChange** inputs: SelectedItems: SelectionOption_Item List (mandatory); ClickedItemId: Text (mandatory)
  ```
  assign: OptionControl.OptionFlatList_Control.Current.SelectedIds = ConvertList(SelectedItems,  {Value:"Id"}); OptionControl.OptionFlatList_Control.Current.SelectedNames = ConvertList(SelectedItems,  {Value:"DisplayText"})
  call ListIndexOf(Condition=Id = ClickedItemId, List=OptionControl.OptionFlatList_Control.Current.In_Options)
  if ListIndexOf.Position >= 0
    assign: OptionControl.OptionFlatList_Control.Current.In_Options[ListIndexOf.Position].isSelected = not OptionControl.OptionFlatList_Control.Current.In_Options[ListIndexOf.Position].isSelected
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnChange_ChoiceOption** inputs: In_Title: Text (mandatory); ChoiceId: Choice Identifier (mandatory)
  ```
  call ListIndexOf(Condition=Title = In_Title, List=OptionControl.OptionChoice_Control)
  if ListIndexOf.Position >= 0
    assign: OptionControl.OptionChoice_Control[ListIndexOf.Position].SelectedChoiceId = ChoiceId
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnChange_ListOption** inputs: In_SelectedIds: Text List (mandatory); In_Title: Text (mandatory)
  ```
  call ListIndexOf(Condition=Title = In_Title, List=OptionControl.OptionList_Control)
  if ListIndexOf.Position >= 0
    assign: OptionControl.OptionList_Control[ListIndexOf.Position].SelectedIds = In_SelectedIds
    call App_CommonFilter_DefineOptionNames(OptionList_Control=OptionControl.OptionList_Control[ListIndexOf.Position])
    assign: OptionControl.OptionList_Control[ListIndexOf.Position] = App_CommonFilter_DefineOptionNames.Formatted
    [M1] if In_Title = SubState_Countries
      if (IsAllCountries) In_SelectedIds.Current = Entities.Choice.None
        call ListIndexOf(Condition=Title = SubState_Localities, List=OptionControl.OptionList_Control) as ListIndexOfLocalities
        if ListIndexOfLocalities.Position <> -1
          call ListClear(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds)
          call ListClear(List=OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedNames) as ListClear2
          assign: OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds = In_SelectedIds
          [M2] call Action_FilterLocalitiesByCountry()
          end
        else
          → continues at [M2]
      else
        → continues at [M2]
    else
      end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_Apply**
  ```
  call Action_Define_OptionControl_Last(isFromApply=True)
  call Action_CloseSheet()
  trigger event ApplySort(OptionControl=OptionControl, SortBy_Title=SortBy_Title)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_Clear**
  ```
  assign: OptionControl = Empty_OptionControl
  call ListClear(List=OptionList_Selected.SelectedIds)
  call ListClear(List=OptionList_Selected.SelectedNames) as ListClear2
  call OnClick_Apply()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_SelectionBack**
  ```
  if isSingleFilter
    call Action_CloseSheet()
    end
  else
    call Action_SetSubState(In_SubState=SubState_Main)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnClick_SelectionOption** inputs: In_Title: Text (mandatory)
  ```
  call ListIndexOf(Condition=Title = In_Title, List=OptionControl.OptionList_Control)
  if ListIndexOf.Position >= 0
    call Action_SetSubState(In_SubState=OptionControl.OptionList_Control.Current.Title)
    assign: OptionList_Selected = OptionControl.OptionList_Control[ListIndexOf.Position]
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  call Action_Define_OptionControl()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnParametersChanged**
  ```
  call Action_Define_OptionControl()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block CacheControl_CalendarEvents (flow Calendar_Events)
- public: True
- input parameters: CacheKey: Text (mandatory); TimeToLiveSeconds: Integer = 7200; MyCalendarEventSourceIds: Type_MyCalendarEventSource Identifier List (mandatory)
- events: Result(CacheControl_Response: CacheControl_CalendarEvents) mandatory
- local variables: CacheTypeId: Connect_CacheType Identifier = Entities.Connect_CacheType.MyCalendarEvents; TimezoneName: Text; FilteredCacheKey: Text
- lifecycle: OnInitialize → OnInitialize
- used by (UBTConnect): CacheControl_Calendar_Coordinator, EventList_CacheWrapper

#### Data sources
- data action **GetCacheInfo** fetch=OnDemand; outputs: CacheControl_Response: CacheControl_CalendarEvents; CacheControl_FilteredKey: Text; OnAfterFetch → OnAfterFetch
  ```
  assign: CacheControl_FilteredKey = FilteredCacheKey
  call-server GetEventsByCacheKeys(KeyList=[ CacheKey ], MyCalendarEventSourceIds=MyCalendarEventSourceIds, TimeZone=TimezoneName)
  assign (CacheControl_Response): CacheControl_Response.MyCalendarEventSource = GetEventsByCacheKeys.CacheableCalendarEvents.Current.Value
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block CacheControl (UBTConnect_Utils.CacheControl)
  args: CacheKey=FilteredCacheKey, CacheTypeId=CacheTypeId, TimeToLiveSeconds=TimeToLiveSeconds
  on OnCacheHit → CacheControlOnCacheHit(Object=Object)
  on OnNonCacheHit → CacheControlOnNonCacheHit
```

#### Block actions
- **CacheControlOnCacheHit** inputs: Object: Object (mandatory)
  ```
  call AssignFromObject(ObjectValue=Object, ToObjectRef=ToObject(GetCacheInfo.CacheControl_Response))
  trigger event Result(CacheControl_Response=GetCacheInfo.CacheControl_Response)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControlOnNonCacheHit**
  ```
  javascript GetTimezoneName() → IANATimezone: Text
    | $parameters.IANATimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  assign: TimezoneName = GetTimezoneName.IANATimezone
  refresh data GetCacheInfo
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch**
  ```
  [M1] for each GetCacheInfo.CacheControl_Response.MyCalendarEventSource (CacheableCalendarEvents)
    [M2] for each GetCacheInfo.CacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList (MyCalendarEventList)
      if GetCacheInfo.CacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Current.DisplayInLocalTime
        → continues at [M2]
      else
        javascript MapStartDateTime(End_ServerDateTime=GetCacheInfo.CacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Current.End, Start_ServerDateTime=GetCacheInfo.CacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Current.Start) → Start_MappedDateTime: Date Time; End_MappedDateTime: Date Time
          | $parameters.Start_MappedDateTime = new Date($parameters.Start_ServerDateTime.getTime() + ($parameters.Start_ServerDateTime.getTimezoneOffset() * 60 * 1000));
          | $parameters.End_MappedDateTime = new Date($parameters.End_ServerDateTime.getTime() + ($parameters.End_ServerDateTime.getTimezoneOffset() * 60 * 1000))
        assign: GetCacheInfo.CacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Current.Start = MapStartDateTime.Start_MappedDateTime; GetCacheInfo.CacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Current.End = MapStartDateTime.End_MappedDateTime
        → continues at [M2]
    end for
    → continues at [M1]
  end for
  call PutCacheableObject(CacheKey=FilteredCacheKey, CacheTimeToLiveSeconds=TimeToLiveSeconds, MemoryCacheTypeId=TextToIdentifier(CacheTypeId), Object=ToObject(GetCacheInfo.CacheControl_Response))
  trigger event Result(CacheControl_Response=GetCacheInfo.CacheControl_Response)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  call Get_FilteredCacheKeyByDateAndEventSources(In_CacheKey=CacheKey, In_MyCalendarEventSourceIds=MyCalendarEventSourceIds)
  assign: FilteredCacheKey = Get_FilteredCacheKeyByDateAndEventSources.Out_FilteredCacheKey
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Calendar_EventCard (flow Calendar_Events)
- public: False
- input parameters: MyCalendarEventCard: UI_MyCalendarEventCard (mandatory)
- events: -
- local variables: CalendarEventSourceConfiguration: UI_CalendarEventSourceConfiguration
- lifecycle: OnInitialize → OnInitialize
- used by (UBTConnect): EventList

#### Widget tree
```
block EventCard (Connect2_OrbitMobile_MUI+UBTConnectLibrary.LDM_Blocks)
  args: In_HeaderBackgroundColorId=CalendarEventSourceConfiguration.HeaderBackgroundColor, In_HeaderIconId=CalendarEventSourceConfiguration.IconId, In_HeaderLabel=CalendarEventSourceConfiguration.LongLabel, In_HeaderTextColorId=CalendarEventSourceConfiguration.HeaderTextColor, InDate=MyCalendarEventCard.Start
  on OnClickEvent → Handler_OnClickEvent
  placeholder EventTitle:
    expr: MyCalendarEventCard.EventTitle  (example: Hosted by John & Nicole McKissock)
  placeholder Time:
    expr: FormatEventDescriptionTime(\n    MyCalendarEventCard.Start,\n    MyCalendarEventCard.End,\n    MyCalendarEventCard.IsAllDay,\n    True/*MyCalendarEventCard.MyCalendarEventSourceId <> Entities.Type_MyCalendarEventSource.Assemble*/)
  placeholder Location:
    expr: MyCalendarEventCard.Location
```

#### Block actions
- **Handler_OnClickEvent**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  call Get_CalendarEventSourceConfiguration(In_EventSourceId=MyCalendarEventCard.MyCalendarEventSourceId)
  assign: CalendarEventSourceConfiguration = Get_CalendarEventSourceConfiguration.Out_CalendarEventSourceConfiguration
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Calendar_NoEvents (flow Calendar_Events)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): EventList

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color: Entities.UBT_Color.Neutral3, Size: { GeneralSizeId: Entities.UBT_Size.Small }, Radius: { GeneralSizeId: Entities.UBT…
  placeholder Content:
    expr: "Nothing in your calendar."  [style="text-neutral-8 font-semi-bold font-size-s"]
```

## Block EventListItem (flow Calendar_Events)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): nothing in this module

#### Widget tree
```
```

## Block EventListNew (flow Calendar_Events)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): nothing in this module

#### Widget tree
```
```

## Block CarouselTag (flow Directory_Caroussel)
- public: False
- input parameters: In_IndexCurrentItem: Integer (mandatory); In_TotalItems: Integer (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): EntitiesCarousel_Element

#### Widget tree
```
block TagContent (UBTConnectLibrary.ConnectPatterns)
  args: BackgroundColorId=Entities.UBT_Color.Neutral0, Text=(In_IndexCurrentItem + 1) + " / " + In_TotalItems
```

## Block EntitiesCarouse_lSupperMeetingDetails (flow Directory_Caroussel)
- public: False
- input parameters: In_SubdivisionId: Long Integer (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): EntitiesCarousel_Element

#### Widget tree
```
block SupperMeeting_DetailsBlock (UBTConnect.Directory_SupperMeetings)
  args: In_SubdivsionId=In_SubdivisionId
  placeholder Placeholder_CarouselTag:
    placeholder-def Placeholder_CarouselTag
```

## Block EntitiesCarousel (flow Directory_Caroussel)
- public: False; stylesheet: yes
- input parameters: In_EntitiesCarousel_Items: EntitiesCarousel_Item List (mandatory); In_StartingPosition: Integer; In_ConnectEntityTypeId: Connect_Entity Identifier (mandatory)
- events: Event_Moved(Event_Index: Integer (mandatory)); Event_SetHeader(Event_Header: Text (mandatory))
- local variables: Index_Initial: Integer; Index_ActiveElement: Integer = -1; Index_NextActiveElement: Integer = -1; HeaderList: HeaderList List; RenderBuffer: Integer = 3; UseMoveHandler: Boolean
- lifecycle: OnInitialize → ScreenEvent_OnInitialize
- used by (UBTConnect): HouseholdCarousel, OneSchoolGlobalCarousel, SupperMeeting_Carousel

#### Widget tree
```
block Carousel (OutSystemsUI_2_23.Interaction) #EntitiesCarousel
  args: ExtendedClass="ubt-entities-carousel", Navigation=Entities.CarouselNavigation.None, OptionalConfigs={ AutoPlay: False, Loop: False, StartingPosition: Index_Initial }
  on Initialized → Handler_EntitiesCarousel_Initialized
  placeholder CarouselItems:
    list source=In_EntitiesCarousel_Items mode=Default  [style="list list-group"; disable-virtualization=True]
      container
        block EntitiesCarousel_Element (UBTConnect.Directory_Caroussel)
          args: In_CarouselLength=In_EntitiesCarousel_Items.Length, In_ConnectEntityTypeId=In_ConnectEntityTypeId, In_EntityId=TextToLongInteger(In_EntitiesCarousel_Items.Current.EntityId), In_Index_ActiveElement=Index_ActiveElement, In_Index_CurrentElement=In_EntitiesCarousel_Items.CurrentRowNumber, In_Index_NextActiveElement=Index_NextActiveElement, In_RenderBuffer=RenderBuffer
          on Event_SetHeader → Handler_SetHeaderList(Event_Header=Event_Header, Event_Index=In_EntitiesCarousel_Items.CurrentRowNumber)
block EntitiesCarousel_HeaderGenerator (UBTConnect.Directory_Caroussel)
  args: In_CurrentIndex=Index_ActiveElement, In_HouseholdCarouselHeaderList=HeaderList
  on Event_SetHeader → Event_SetHeader(Event_Header=Event_Header)
```

#### Block actions
- **Action_UpdateCarouselInternalPosition**
  ```
  javascript SetInternalPosition(CarouselWidgetId=EntitiesCarousel.Id, InternalPosition=Index_ActiveElement)
    | const carousel = OutSystems.OSUI.Patterns.CarouselAPI.GetCarouselItemById($parameters.CarouselWidgetId);
    | if (carousel && carousel.provider) {
    |     carousel.configs.StartingPosition = $parameters.InternalPosition;//carousel.provider.index;
    | }
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_EntitiesCarousel_Initialized**
  ```
  call CarouselDisableOnRender(WidgetId=EntitiesCarousel.Id)
  call SetSplideConfigs(ProviderConfigs={ speed: 0, fixedHeight: "var(--carousel-slide-custom-height)", perMove: 1, flickPower: 100, flickMaxPages: 1, waitForTransition: If(UseMoveHandler, Entities.BooleanTypes.False, Entities.BooleanTypes…, WidgetId=EntitiesCarousel.Id)
  javascript GetSplideCallbacks() → Moved: Object; Move: Object; Resize: Object
    | $parameters.Moved = $actions.Handler_EntitiesCarousel_Moved;
    | $parameters.Move = $actions.Handler_EntitiesCarousel_Move;
  call UnsetSplideEvent(SplideEventId="resize", WidgetId=EntitiesCarousel.Id)
  call UnsetSplideEvent(SplideEventId="resized", WidgetId=EntitiesCarousel.Id) as UnsetSplideEvent2
  call SetSplideEvent(EventName="moved", Handler=GetSplideCallbacks.Moved, WidgetId=EntitiesCarousel.Id) as Moved
  if UseMoveHandler
    call SetSplideEvent(EventName="move", Handler=GetSplideCallbacks.Move, WidgetId=EntitiesCarousel.Id) as Move
    [M1] javascript RemoveCarouselOnResizeHandler(CarouselId=EntitiesCarousel.Id)
      | var c = OutSystems.OSUI.Patterns.CarouselAPI.GetCarouselItemById($parameters.CarouselId);
      | if (c && c._eventOnResize) {
      |     OSFramework.OSUI.Event.DOMEvents.Listeners.GlobalListenerManager.Instance.removeHandler(
      |         OSFramework.OSUI.Event.DOMEvents.Listeners.Type.WindowResize,
      |         c._eventOnResize
      |     );
      | }
    end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] call SetSplideConfigs(ProviderConfigs={ perMove: 1, flickMaxPages: 1 }, WidgetId=EntitiesCarousel.Id) as SetSplideConfigs2
    end
  ```
- **Handler_EntitiesCarousel_Move** inputs: newIndex: Integer (mandatory); previousIndex: Integer (mandatory); destinationIndex: Integer (mandatory)
  ```
  assign: Index_NextActiveElement = newIndex
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_EntitiesCarousel_Moved** inputs: newIndex: Integer (mandatory); previousIndex: Integer (mandatory); destinationIndex: Integer (mandatory)
  ```
  assign: Index_ActiveElement = newIndex; Index_NextActiveElement = newIndex
  trigger event Event_Moved(Event_Index=newIndex)
  end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] call Action_UpdateCarouselInternalPosition()
    end
  ```
- **Handler_SetHeaderList** inputs: Event_Header: Text (mandatory); Event_Index: Integer (mandatory)
  ```
  call ListIndexOf(Condition=Index = Event_Index, List=HeaderList)
  if ListIndexOf.Position <> -1
    end
  else
    call ListAppend(Element={ Label: Event_Header, Index: Event_Index }, List=HeaderList)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  if Index_ActiveElement <> -1
    [M1] assign: Index_Initial = Index_ActiveElement
    end
  else
    assign: Index_ActiveElement = In_StartingPosition
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block EntitiesCarousel_Element (flow Directory_Caroussel)
- public: False
- input parameters: In_ConnectEntityTypeId: Connect_Entity Identifier (mandatory); In_EntityId: Long Integer (mandatory); In_CarouselLength: Integer (mandatory); In_Index_ActiveElement: Integer (mandatory); In_Index_NextActiveElement: Integer (mandatory); In_Index_CurrentElement: Integer (mandatory); In_RenderBuffer: Integer (mandatory)
- events: Event_SetHeader(Event_Header: Text (mandatory))
- local variables: IsInsideRenderBuffer: Boolean; IsSinglePassRender: Boolean = True; IsRenderCurrentElement: Boolean; IsSkeletonOnly: Boolean
- lifecycle: OnReady → ScreenEvent_OnReady; OnParametersChanged → ScreenEvent_OnParametersChanged
- used by (UBTConnect): EntitiesCarousel

#### Widget tree
```
if IsRenderCurrentElement
  container  [style=""//If(IsInsideRenderBuffer,"","hidden")]
    if In_ConnectEntityTypeId = Entities.Connect_Entity.OneSchoolGlobal #IsOneSchoolGlobal
      block EntitiesCarousel_OneSchoolGlobal (UBTConnect.Directory_Caroussel)
        args: In_EntityId=In_EntityId
        placeholder None:
          block CarouselTag (UBTConnect.Directory_Caroussel)
            args: In_IndexCurrentItem=In_Index_CurrentElement, In_TotalItems=In_CarouselLength
    if In_ConnectEntityTypeId = Entities.Connect_Entity.SupperMeetings_aka_Subdivisions #IsSubdivisions
      block EntitiesCarouse_lSupperMeetingDetails (UBTConnect.Directory_Caroussel)
        args: In_SubdivisionId=In_EntityId
        placeholder Placeholder_CarouselTag:
          block CarouselTag (UBTConnect.Directory_Caroussel)
            args: In_IndexCurrentItem=In_Index_CurrentElement, In_TotalItems=In_CarouselLength
    if In_ConnectEntityTypeId = Entities.Connect_Entity.Household #IsHousehold
      block EntitiesCarousel_HouseholdDetails (UBTConnect.Directory_Caroussel)
        args: In_HouseholdId=In_EntityId, In_IsSkeletonOnly=IsSkeletonOnly
        on Event_SetHeader → Event_SetHeader(Event_Header=Event_Header)
        placeholder None:
          block CarouselTag (UBTConnect.Directory_Caroussel)
            args: In_IndexCurrentItem=In_Index_CurrentElement, In_TotalItems=In_CarouselLength
        placeholder None:
          block CarouselTag (UBTConnect.Directory_Caroussel)
            args: In_IndexCurrentItem=In_Index_CurrentElement, In_TotalItems=In_CarouselLength
        placeholder Placeholder_CarouselTag:
          block CarouselTag (UBTConnect.Directory_Caroussel)
            args: In_IndexCurrentItem=In_Index_CurrentElement, In_TotalItems=In_CarouselLength
```

#### Block actions
- **ScreenEvent_OnParametersChanged**
  ```
  call Get_IsInsideRenderBuffer(In_Index_ActiveElement=In_Index_ActiveElement, In_Index_CurrentElement=In_Index_CurrentElement, In_RenderBuffer=In_RenderBuffer) as Get_IsInsideRenderBuffer_ActiveElement
  call Get_IsInsideRenderBuffer(In_Index_ActiveElement=In_Index_NextActiveElement, In_Index_CurrentElement=In_Index_CurrentElement, In_RenderBuffer=In_RenderBuffer) as Get_IsInsideRenderBuffer_NextActiveElement
  assign: IsInsideRenderBuffer = Get_IsInsideRenderBuffer_ActiveElement.IsInsideRenderBuffer or Get_IsInsideRenderBuffer_NextActiveElement.IsInsideRenderBuffer; IsSkeletonOnly = not Get_IsInsideRenderBuffer_ActiveElement.IsInsideRenderBuffer
  if IsSinglePassRender
    assign: IsRenderCurrentElement = IsRenderCurrentElement or IsInsideRenderBuffer
    end
  else
    assign: IsRenderCurrentElement = IsInsideRenderBuffer
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnReady**
  ```
  call ScreenEvent_OnParametersChanged()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block EntitiesCarousel_HeaderGenerator (flow Directory_Caroussel)
- public: False
- input parameters: In_HouseholdCarouselHeaderList: HeaderList List; In_CurrentIndex: Integer (mandatory)
- events: Event_SetHeader(Event_Header: Text (mandatory)) mandatory
- local variables: -
- lifecycle: OnParametersChanged → ScreenEvent_OnParametersChanged
- used by (UBTConnect): EntitiesCarousel

#### Widget tree
```
```

#### Block actions
- **ScreenEvent_OnParametersChanged**
  ```
  call Get_CurrentEntityHeader(In_CurrentHouseholdIndex=In_CurrentIndex, In_HouseholdCarouselHeaderList=In_HouseholdCarouselHeaderList, In_IsSingleHeader=False)
  trigger event Event_SetHeader(Event_Header=Get_CurrentEntityHeader.Out_HouseholdHeader)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block EntitiesCarousel_HouseholdDetails (flow Directory_Caroussel)
- public: False
- input parameters: In_HouseholdId: Long Integer (mandatory); In_IsSkeletonOnly: Boolean
- events: Event_SetHeader(Event_Header: Text (mandatory))
- local variables: LocalityName: Text; CountryName: Text; DeceasedOrAncestry_View: Boolean
- lifecycle: none
- used by (UBTConnect): EntitiesCarousel_Element

#### Widget tree
```
block HouseholdDetails_Block (UBTConnect.Directory_Household)
  args: HouseholdId=In_HouseholdId, In_IsSkeletonOnly=In_IsSkeletonOnly
  on HouseholdDataFetched → Handler_HouseholdDetails_DataFetched(Evt_CountryName=CountryName, Evt_DeceasedOrAncestry_View=DeceasedOrAncestry_View, Evt_LocalityName=LocalityName)
  placeholder Placeholder_CarouselTag:
    placeholder-def Placeholder_CarouselTag
```

#### Block actions
- **Handler_HouseholdDetails_DataFetched** inputs: Evt_LocalityName: Text (mandatory); Evt_CountryName: Text (mandatory); Evt_DeceasedOrAncestry_View: Boolean (mandatory)
  ```
  assign: LocalityName = Evt_LocalityName; CountryName = Evt_CountryName; DeceasedOrAncestry_View = Evt_DeceasedOrAncestry_View
  trigger event Event_SetHeader(Event_Header=Evt_LocalityName + ", " + Evt_CountryName)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block EntitiesCarousel_OneSchoolGlobal (flow Directory_Caroussel)
- public: False
- input parameters: In_EntityId: Long Integer (mandatory); In_IsSkeletonOnly: Boolean
- events: Event_SetHeader(Event_Header: Text (mandatory))
- local variables: LocalityName: Text; CountryName: Text; DeceasedOrAncestry_View: Boolean
- lifecycle: none
- used by (UBTConnect): EntitiesCarousel_Element

#### Widget tree
```
block OneSchoolGlobalDetails_Block (UBTConnect.Directory_OneSchoolGlobal)
  args: In_OneSchoolGlobalId=In_EntityId, IsRestoredFromCache=False
```

#### Block actions
- **Handler_HouseholdDetails_DataFetched** inputs: Evt_LocalityName: Text (mandatory); Evt_CountryName: Text (mandatory); Evt_DeceasedOrAncestry_View: Boolean (mandatory)
  ```
  assign: LocalityName = Evt_LocalityName; CountryName = Evt_CountryName; DeceasedOrAncestry_View = Evt_DeceasedOrAncestry_View
  trigger event Event_SetHeader(Event_Header=Evt_LocalityName + ", " + Evt_CountryName)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Directory_CommunityNumbers (flow Directory_CommonBlocks)
- public: False; stylesheet: yes
- input parameters: In_IsLoading: Boolean (mandatory); In_CommunityStatistics: UI_CommunityStatistics (mandatory)
- events: -
- local variables: Local_CommunityStatistics: UI_CommunityStatistics
- lifecycle: OnReady → OnReady; OnParametersChanged → OnParametersChanged
- used by (UBTConnect): CountryList, HomeFeed

#### Widget tree
```
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=In_IsLoading
  placeholder Placeholder_LoadingSection:
    container  [style="directory-numbers-card"]
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ TextOptions: { Color: Entities.UBT_Color.PeachDark, FontSize: Entities.UBT_FontSize.ExtraSmall } }
        placeholder Content:
          text: COMMUNITY BY THE NUMBERS
      container  [style="directory-numbers-card__content"]
        container  [style="directory-numbers-card__left"]
          block Icon (UBTConnectLibrary.ConnectPatterns)
            args: In_IconId=Entities.UBT_Icons2.SVG_CommunityMembers, In_SizeId=Entities.UBT_IconsSize.NonStandard_40
          container
            block CustomContainer (UBTConnectLibrary.BasePatterns)
              args: Options={ TextOptions: { Color: Entities.UBT_Color.CyanDarker, FontSize: Entities.UBT_FontSize.Heading1, FontWeight: Entities.UBT_FontWeight.SemiBold } }
              placeholder Content:
                expr: FormatCurrency(Local_CommunityStatistics.In_MembersCount,"",0,"",",")
            container  [style="directory-numbers-card__variation"]
              if Local_CommunityStatistics.In_Change <> 0
                if Local_CommunityStatistics.In_Change > 0
                  block Icon (UBTConnectLibrary.ConnectPatterns)
                    args: In_ColorId=Entities.UBT_Color.GreenDark, In_IconId=Entities.UBT_Icons2.ArrowUp, In_SizeId=Entities.UBT_IconsSize.ExtraSmall_10
                else
                  block Icon (UBTConnectLibrary.ConnectPatterns)
                    args: In_ColorId=Entities.UBT_Color.RedDark, In_IconId=Entities.UBT_Icons2.ArrowDown, In_SizeId=Entities.UBT_IconsSize.ExtraSmall_10
                block CustomContainer (UBTConnectLibrary.BasePatterns)
                  args: Options={ TextOptions: { Color: If(Local_CommunityStatistics.In_Change > 0,\n    Entities.UBT_Color.GreenDark,\n    Entities.UBT_Color.RedDark), FontSize: Entities.UBT_FontSize.DoubleExtraSmall } }
                  placeholder Content:
                    expr: If(Local_CommunityStatistics.In_Change > 0, "+", "-") + FormatCurrency(Local_CommunityStatistics.In_Change,"",0,"",",")
              block CustomContainer (UBTConnectLibrary.BasePatterns)
                args: Options={ TextOptions: { Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.DoubleExtraSmall } }
                placeholder Content:
                  expr: If(Local_CommunityStatistics.In_Change <> 0, "Today", "No change today")
        container  [style="directory-numbers-card__right"]
          block Directory_CommunityNumbers__Number (UBTConnect.Directory_CommonBlocks)
            args: In_HideBorder=True, In_Icon=Entities.UBT_Icons2.SVG_CommunityHouseholds, In_Label="Households", In_Number=Local_CommunityStatistics.In_HouseholdCount
          block Directory_CommunityNumbers__Number (UBTConnect.Directory_CommonBlocks)
            args: In_Icon=Entities.UBT_Icons2.SVG_CommunityLocalities, In_Label="Localities", In_Number=Local_CommunityStatistics.In_LocalitiesCount
          block Directory_CommunityNumbers__Number (UBTConnect.Directory_CommonBlocks)
            args: In_Icon=Entities.UBT_Icons2.SVG_CommunityCountries, In_Label="Countries", In_Number=Local_CommunityStatistics.In_CountriesCount
```

#### Block actions
- **OnParametersChanged**
  ```
  if In_IsLoading
    end
  else
    assign: Local_CommunityStatistics = In_CommunityStatistics
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnReady**
  ```
  if In_IsLoading
    assign: Local_CommunityStatistics.In_HouseholdCount = 1000; Local_CommunityStatistics.In_LocalitiesCount = 1000; Local_CommunityStatistics.In_CountriesCount = 1000; Local_CommunityStatistics.In_MembersCount = 1000; Local_CommunityStatistics.In_Change = 1000
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Directory_CommunityNumbers__Number (flow Directory_CommonBlocks)
- public: False
- input parameters: In_Number: Integer (mandatory); In_Label: Text (mandatory); In_Icon: UBT_Icons2 Identifier (mandatory); In_HideBorder: Boolean
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): Directory_CommunityNumbers

#### Widget tree
```
container  [style="directory-numbers-card__number " + If(In_HideBorder, " ", "directory-numbers-card__number--border-top")]
  container
    block Icon (UBTConnectLibrary.ConnectPatterns)
      args: In_IconId=In_Icon, In_SizeId=Entities.UBT_IconsSize.Base_24
  container
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ TextOptions: { Color: Entities.UBT_Color.CyanDarker, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold } }
      placeholder Content:
        expr: FormatCurrency(In_Number,"",0,"",",")
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ TextOptions: { Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall } }
      placeholder Content:
        expr: In_Label
```

## Block Directory_EmptyState (flow Directory_CommonBlocks)
- public: False
- input parameters: EntityTypeId: Connect_Entity Identifier (mandatory); Location: Text = "found nearby"
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): Directory_Interchange_StatisticsList, Household_GalleryCard_List, Locality_Households_HouseholdList, Locality_OneSchoolGlobal, Locality_Subdivisions

#### Widget tree
```
block EmptyList (UBTConnectLibrary.ConnectPatterns)
  args: IconId=GetEntityType_Icon(EntityTypeId)
  placeholder TitlePlaceholder:
    expr: "No " + If(EntityTypeId=Entities.Connect_Entity.Interchange,ToLower(EntityTypeId) + "s",EntityTypeId) + " " + Location
  placeholder TextPlaceholder:
    expr: "There doesn't seem to be any "+ToLower(EntityTypeId) + If(EntityTypeId=Entities.Connect_Entity.Interchange,"s","") +" in" 
    container
      expr: "this locality."
```

## Block Directory_EntityDetailsActions (flow Directory_CommonBlocks)
- public: False
- input parameters: IsEnabled: Boolean = True; EntityType: Connect_Entity Identifier (mandatory); EntityId: Long Integer (mandatory); ContactPopUp_OverrideOptions: ContactPopUp_OverrideOptions; EnableOptions: ActionsMenuEnableOptions; useViewDetails: Boolean
- events: Event_MenuEdit(); OnChange_Bookmark(isBookmarked: Boolean (mandatory)); ViewDetails_OnClick()
- local variables: Local_isBookmarked: Boolean; Local_BookmarkTypeId: BookmarkCategory Identifier; Local_In_ActionsMenuOptions: ActionsMenuOptions; isLoaded: Boolean; Local_ShareType: Type_ShareObject Identifier; ShowCallPopUp: Boolean; ShowEmailPopUp: Boolean; ShowSharePopup: Boolean; ShowNotesSheet: Boolean; isFetchContacts: Boolean; ShowIconLabels: Boolean = True; ShareSheet_OverwriteImageURL: Text; NoteCategoryId: NoteCategory2 Identifier; EntityNotes: Notes
- lifecycle: OnReady → OnReady; OnParametersChanged → OnParametersChanged
- used by (UBTConnect): CommunityBusinessCard_Content_Block, Directory_Interchange_StatisticsList, HouseholdDetails_Block, HouseholdDetails_Members_Block, Map_PoIPreview, OneSchoolGlobalDetails_Block, OneSchoolGlobal_List, SupperMeeting_DetailsBlock

#### Data sources
- data action **FetchContactDetails** fetch=OnDemand; outputs: ContactPopupData: ContactPopupData; Phone: Text; MobilePhone: Text; HomePhone: Text; WorkPhone: Text; Email: Email; CountryName: Text; LocalityId: Long Integer; LocalityName: Text; EntitySubtitle: Text; EntityName: Text; OnAfterFetch → OnAfterFetch_FetchContactDetails
  ```
  switch
    case EntityType = Entities.Connect_Entity.Member (Member)
      call-server Member_ContactDetails_Service(MemberId=EntityId)
      assign: ContactPopupData.EntityTypeId = Entities.Connect_Entity.Member; ContactPopupData.EntityId = EntityId; ContactPopupData.Name = Member_ContactDetails_Service.UI_MemberContactDetails.Name; ContactPopupData.Locality = Member_ContactDetails_Service.UI_MemberContactDetails.LocalityName; ContactPopupData.ShowPopup = False; MobilePhone = Member_ContactDetails_Service.UI_MemberContactDetails.MobilePhone; HomePhone = Member_ContactDetails_Service.UI_MemberContactDetails.HomePhone; WorkPhone = Member_ContactDetails_Service.UI_MemberContactDetails.WorkPhone; Phone = ""; Email = Member_ContactDetails_Service.UI_MemberContactDetails.Email; CountryName = Member_ContactDetails_Service.UI_MemberContactDetails.CountryName; LocalityId = Member_ContactDetails_Service.UI_MemberContactDetails.LocalityId; ContactPopupData.CountryName = Member_ContactDetails_Service.UI_MemberContactDetails.CountryName; EntityName = Member_ContactDetails_Service.UI_MemberContactDetails.Name
      [M1] call-server Get_Core_LocalityTimezone(In_LocalityId=LocalityId)
      assign: ContactPopupData.TimezoneName = Get_Core_LocalityTimezone.Out_Timezone.Abbreviation; ContactPopupData.TimezoneOffset = LongIntegerToInteger(Get_Core_LocalityTimezone.Out_Timezone.OffsetSeconds)
      end
    case EntityType = Entities.Connect_Entity.OneSchoolGlobal (OneSchoolGlobal)
      call-server Get_OneSchoolGlobalDetails(CommunityBusinessId=EntityId)
      assign: ContactPopupData.EntityTypeId = Entities.Connect_Entity.OneSchoolGlobal; ContactPopupData.EntityId = EntityId; ContactPopupData.Name = Trim(Get_OneSchoolGlobalDetails.Out_OneSchoolGlobalDetails.UI_OneSchool_Card_Content.Name); ContactPopupData.Locality = Get_OneSchoolGlobalDetails.Out_OneSchoolGlobalDetails.UI_OneSchool_Card_Content.LocalityName; ContactPopupData.ShowPopup = False; MobilePhone = ""; HomePhone = ""; WorkPhone = ""; Phone = Get_OneSchoolGlobalDetails.Out_OneSchoolGlobalDetails.UI_OneSchool_Card_Content.Phone; Email = Get_OneSchoolGlobalDetails.Out_OneSchoolGlobalDetails.UI_OneSchool_Card_Content.Email; CountryName = Get_OneSchoolGlobalDetails.Out_OneSchoolGlobalDetails.UI_OneSchool_Card_Content.CountryName; LocalityId = Get_OneSchoolGlobalDetails.Out_OneSchoolGlobalDetails.UI_OneSchool_Card_Content.LocalityId; ContactPopupData.DisplayContactNumber = Get_OneSchoolGlobalDetails.Out_OneSchoolGlobalDetails.UI_OneSchool_Card_Content.Phone; ContactPopupData.CountryName = Get_OneSchoolGlobalDetails.Out_OneSchoolGlobalDetails.UI_OneSchool_Card_Content.CountryName; ContactPopupData.TitleTerminator = "?"; LocalityName = Get_OneSchoolGlobalDetails.Out_OneSchoolGlobalDetails.UI_OneSchool_Card_Content.LocalityName; EntityName = Trim(Get_OneSchoolGlobalDetails.Out_OneSchoolGlobalDetails.UI_OneSchool_Card_Content.Name)
      → continues at [M1]
    case EntityType = Entities.Connect_Entity.SupperMeetings_aka_Subdivisions (Supper Meeting)
      call-server GetSubdivisionLocation_BySubdivisionId(In_SubdivisionId=EntityId)
      assign: CountryName = GetSubdivisionLocation_BySubdivisionId.Out_UI_SubdivisionLocation.CountryName; LocalityName = GetSubdivisionLocation_BySubdivisionId.Out_UI_SubdivisionLocation.LocalityName; EntityName = GetSubdivisionLocation_BySubdivisionId.Out_UI_SubdivisionLocation.SubdivisionName
      → continues at [M1]
    case EntityType = Entities.Connect_Entity.Household (Household)
      call-server GetHouseholdDetails(HouseholdId=TextToInteger(EntityId), User_AgeVisibility=False)
      assign: ContactPopupData.EntityTypeId = Entities.Connect_Entity.Household; ContactPopupData.EntityId = EntityId; ContactPopupData.Name = GetHouseholdDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.Name; ContactPopupData.Locality = GetHouseholdDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.LocalityName; ContactPopupData.ShowPopup = False; MobilePhone = ""; HomePhone = ""; WorkPhone = ""; Phone = ""; Email = ""; CountryName = GetHouseholdDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.CountryName; LocalityId = GetHouseholdDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.LocalityId; ContactPopupData.CountryName = GetHouseholdDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.CountryName; EntitySubtitle = GetHouseholdDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.FamilyNames; LocalityName = GetHouseholdDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.LocalityName; EntityName = GetHouseholdDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.Name
      → continues at [M1]
    otherwise
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- data action **FetchNotes** fetch=OnDemand; outputs: Notes: Notes; OnAfterFetch → OnAfterFetch_FetchNotes
  ```
  call-server GetNotesByItemId(ItemId=EntityId, NoteCategoryId=NoteCategoryId)
  assign: Notes = GetNotesByItemId.Out_Notes
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=(not isLoaded or not Client.Bookmarks_IsSynched or not Client.Notes_IsSynched) and not FetchContactDetails.HasFetchError
  placeholder Placeholder_LoadingSection:
    block ActionsMenu (UBTConnectLibrary.ConnectCorePatterns)
      args: In_ActionsEnableOptions=EnableOptions, In_ActionsMenuOptions={ HasBookmark: Local_In_ActionsMenuOptions.HasBookmark and not Local_isBookmarked, HasUnbookmark: Local_In_ActionsMenuOptions.HasBookmark and Local_isBookmarked, HasNotes: Local_In_ActionsMenuOptions…, InShowLabels=ShowIconLabels, IsEnabled=IsEnabled
      on Event_Click_Call → Handle_Call(isOpen=True)
      on Event_Click_ViewDetails → ViewDetails_OnClick
      on Event_Click_Share → Handle_Share(isOpen=True)
      on Event_Click_Email → Handle_Mail(isOpen=True)
      on Event_Click_Notes → Handler_AddNotesOnClick
      on Event_Click_Unbookmark → Handle_Bookmark
      on Event_Click_Bookmark → Handle_Bookmark
block ContactByMessage_Wrapper (UBTConnect_Utils.CW_CTA_PopUps)
  args: In_ContactPopupData={ Email: FetchContactDetails.Email, Phone: FetchContactDetails.MobilePhone, ContactPopupData: { ImageURL: ContactPopUp_OverrideOptions.ImageURL, EntityTypeId: EntityType, EntityId: EntityId, IsAvatar…
  on Event_Cancel → Handle_Mail(isOpen=False)
  on Event_Email → Handle_Mail_Page
block ContactPopup_ByPhone (UBTConnect_Utils.CW_CTA_PopUps)
  args: In_CallPopupData={ ContactPopupData: { ImageURL: ContactPopUp_OverrideOptions.ImageURL, EntityTypeId: EntityType, EntityId: EntityId, IsAvatarImage: FetchContactDetails.ContactPopupData.IsAvatarImage, ActionName: Fet…
  on Event_Cancel → Handle_Call(isOpen=False)
block SharePopup (UBTConnect_Utils.CW_CTA_PopUps)
  args: In_ContactPopupData={ ImageURL: ContactPopUp_OverrideOptions.ImageURL, EntityTypeId: EntityType, EntityId: EntityId, ActionName: "Share", Name: FetchContactDetails.ContactPopupData.Name, Locality: "", TimezoneName: "", …
  on Event_Cancel → Handle_Share(isOpen=False)
  on Event_ShareToConnect → Handle_Share_Connect
  on Event_ShareToOthers → Handle_Share_Others
if GetHasExtendedShare() and Local_In_ActionsMenuOptions.HasShare
  popup show=True  [style="popup-dialog connect-share-portal"]
    block ShareSheet (UBTConnect_Utils.CW_Share)
      args: In_IsOpen=GetHasExtendedShare() and ShowSharePopup, In_ShareableObjectId=EntityId, In_ShareObjectTypeId=Local_ShareType
      on Event_ClosedShareSheet → Handle_ClosedShareSheet
      placeholder Placeholder_ShareableObject:
        block ShareableObject_Generic (UBTConnect_Utils.CW_Share)
          args: In_ShareableObject={ ConnectEntityTypeId: EntityType, Id: EntityId, SignedURL: ShareSheet_OverwriteImageURL, Title: FetchContactDetails.EntityName, Subtitle: FetchContactDetails.EntitySubtitle, Location: FetchContactDe…
if False #HideInServiceStudio_BottomSheet  [DEAD BRANCH: condition is a constant]
else
  popup show=True  [style="popup-dialog connect-share-portal"]
    block NotesSheet (UBTConnect_Utils.CW_Notes)
      args: In_IsOpen=ShowNotesSheet, In_ItemId=EntityId, In_NoteCategoryId=NoteCategoryId, In_Notes=EntityNotes
      on On_NoteSheet_Closed → Handler_OnNotesSheetClosed
      on On_NoteDeleted → Handler_OnNoteDeleted(NoteId=NoteId)
      on On_NotesChanged → Handler_OnSheetNotesChanged(New_Notes=New_Notes)
```

#### Block actions
- **Action_ApplyPopUpOverrides**
  ```
  if EntityType = Entities.Connect_Entity.OneSchoolGlobal
    assign: ShareSheet_OverwriteImageURL = ContactPopUp_OverrideOptions.ImageURL; ContactPopUp_OverrideOptions.ImageURL = Images.OneSchoolGlobal.URL
    [M1] assign: FetchContactDetails.ContactPopupData.ImageURL = ContactPopUp_OverrideOptions.ImageURL
    if ContactPopUp_OverrideOptions.Name <> ""
      assign: FetchContactDetails.ContactPopupData.Name = ContactPopUp_OverrideOptions.Name; FetchContactDetails.EntityName = ContactPopUp_OverrideOptions.Name
      end
    else
      end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_AsyncRefresh_ContactDetails**
  ```
  refresh data FetchContactDetails
  end
  on exception All Exceptions (log=True)
  call HandleFetchError()
  call ScreenController_RaiseError(Message=AllExceptions.ExceptionMessage)
  end
  on exception Communication Exception (log=True)
  call HandleFetchError() as HandleFetchError2
  call ScreenController_RaiseCommunicationError(Message=CommunicationException.ExceptionMessage)
  end
  on exception Not Registered (log=True)
  call ScreenController_RaiseTypedException(ExceptionId=Entities.UBT_SystemExceptionTypes.NotRegisteredException, Message=NotRegistered.ExceptionMessage) as ScreenController_RaiseTypedException2
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
    end
    [DISABLED] raise BubbleGenericException: AllExceptions.ExceptionMessage
    [DISABLED] raise BubbleCommunicationException: 
    [DISABLED] raise Not Registered: 
  ```
- **Action_RefreshFetchNotes**
  ```
  if EntityId = NullIdentifier()
    end
  else
    refresh data FetchNotes
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Action_UpdateContactDetails**
  ```
  if EntityId = NullIdentifier()
    end
  else
    if isFetchContacts
      javascript AsynRefresh()
        | $actions.Action_AsyncRefresh_ContactDetails();
      end
    else
      call Action_ApplyPopUpOverrides()
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handle_Bookmark**
  ```
  assign: isLoaded = False
  call ToggleBookmarkItem_C2(In_BookmarkType=Local_BookmarkTypeId, In_ItemId=EntityId, IsBookmarked_C2=Local_isBookmarked)
  assign: Local_isBookmarked = not Local_isBookmarked; isLoaded = True
  trigger event OnChange_Bookmark(isBookmarked=Local_isBookmarked)
  end
  on exception All Exceptions (log=True)
  assign: isLoaded = True
  raise BubbleGenericException: AllExceptions.ExceptionMessage
  on exception Communication Exception (log=True)
  assign: isLoaded = True
  raise BubbleCommunicationException: CommunicationException.ExceptionMessage
  on exception Not Registered (log=True)
  raise Not Registered: NotRegistered.ExceptionMessage
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handle_Call** inputs: isOpen: Boolean (mandatory)
  ```
  assign: ShowCallPopUp = isOpen
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handle_ClosedShareSheet**
  ```
  assign: ShowSharePopup = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handle_Mail** inputs: isOpen: Boolean (mandatory)
  ```
  if EntityType = Entities.Connect_Entity.OneSchoolGlobal
    navigate → ContactByEmailOneSchoolGlobal(In_ContactName=FetchContactDetails.ContactPopupData.Name, In_EmailTo=FetchContactDetails.Email) transition=Inherited
  else
    assign: ShowEmailPopUp = isOpen
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handle_Mail_Page**
  ```
  call GetNameAndSurname_ByFullName(In_FullName=FetchContactDetails.ContactPopupData.Name)
  javascript Yield()
    | Promise.resolve().then($resolve);
  navigate → ContactByEmailMember(In_AvatarURL=FetchContactDetails.ContactPopupData.ImageURL, In_ContactCountry=FetchContactDetails.CountryName, In_ContactLocality=FetchContactDetails.ContactPopupData.Locality, In_ContactName=GetNameAndSurname_ByFullName.Out_Name, In_ContactSurname=GetNameAndSurname_ByFullName.Out_Surname, In_EmailTo=FetchContactDetails.Email, In_EntityId=FetchContactDetails.ContactPopupData.EntityId, In_EntityType=FetchContactDetails.ContactPopupData.EntityTypeId) transition=Inherited
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] assign: ShowEmailPopUp = False
  ```
- **Handle_Share** inputs: isOpen: Boolean (mandatory)
  ```
  assign: ShowSharePopup = isOpen
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handle_Share_Connect**
  ```
  call Handle_Share(isOpen=False)
  javascript Yield()
    | Promise.resolve().then($resolve);
  navigate → LegacyShareObject(In_ObjectId=EntityId, In_ShareObjectTypeId=Local_ShareType) transition=Inherited
  ```
- **Handle_Share_Others**
  ```
  call Handle_Share(isOpen=False)
  call ShareEntity_ByURL(In_ShareableObjectId=EntityId, In_ShareTypeId=Local_ShareType)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **HandleFetchError**
  ```
  assign: EnableOptions.EnableBookmark = False; EnableOptions.EnableNotes = False; EnableOptions.EnableGift = False; EnableOptions.EnableShare = False; EnableOptions.EnableCall = False; EnableOptions.EnableEmail = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_AddNotesOnClick**
  ```
  call Action_RefreshFetchNotes()
  assign: ShowNotesSheet = True
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnNoteDeleted** inputs: NoteId: Long Integer (mandatory); locals: UpdatedNotes: Notes
  ```
  [M1] for each EntityNotes.Note_Item_List
    if EntityNotes.Note_Item_List.Current.Id <> NoteId
      call ListAppend(Element=EntityNotes.Note_Item_List.Current, List=UpdatedNotes.Note_Item_List)
      → continues at [M1]
    else
      → continues at [M1]
  end for
  assign: UpdatedNotes.Total = UpdatedNotes.Note_Item_List.Length; EntityNotes = UpdatedNotes
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnNotesSheetClosed**
  ```
  assign: ShowNotesSheet = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnSheetNotesChanged** inputs: New_Notes: Notes (mandatory)
  ```
  assign: EntityNotes = New_Notes
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch_FetchContactDetails**
  ```
  call Action_ApplyPopUpOverrides()
  assign: Local_In_ActionsMenuOptions.HasCall = FetchContactDetails.Phone <> "" or\nFetchContactDetails.MobilePhone <> "" or\nFetchContactDetails.HomePhone <> "" or \nFetchContactDetails.WorkPhone <> ""; Local_In_ActionsMenuOptions.HasEmail = FetchContactDetails.MobilePhone <> "" or\nFetchContactDetails.Email <> ""; isLoaded = True
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch_FetchNotes**
  ```
  assign: EntityNotes = FetchNotes.Notes
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnParametersChanged**
  ```
  call Action_UpdateContactDetails()
  end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] assign: EnableOptions.EnableShare = True
    end
  ```
- **OnReady**
  ```
  javascript CheckRestored() → FromCache: Boolean; FromHistory: Boolean
    | $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    | //$parameters.FromHistory = $public.Navigation.navigatedFromHistory();
  if CheckRestored.FromCache or CheckRestored.FromHistory
    end
  else
    assign: NoteCategoryId = Get_NoteCategoryId_ByEntityTypeId(EntityType)
    switch (Type)
      case EntityType = Entities.Connect_Entity.Member (Member)
        assign (Member): Local_In_ActionsMenuOptions.HasBookmark = False; Local_In_ActionsMenuOptions.HasUnbookmark = False; Local_In_ActionsMenuOptions.HasNotes = False; Local_In_ActionsMenuOptions.HasGift = False; Local_In_ActionsMenuOptions.HasShare = False; Local_In_ActionsMenuOptions.HasCall = True; Local_In_ActionsMenuOptions.HasEmail = True; ShowIconLabels = False
        [M1] assign: isFetchContacts = Local_In_ActionsMenuOptions.HasCall or Local_In_ActionsMenuOptions.HasEmail or Local_In_ActionsMenuOptions.HasShare
        call Action_UpdateContactDetails()
        if Local_In_ActionsMenuOptions.HasShare
          call GetShareType_FromEntity(EntityType=EntityType, IsMyHousehold=False)
          assign: Local_ShareType = GetShareType_FromEntity.ShareType
          [M2] if Local_In_ActionsMenuOptions.HasBookmark or Local_In_ActionsMenuOptions.HasUnbookmark
            call GetBookmarkCategoryId_ByEntityTypeId(EntityType=EntityType)
            assign: Local_BookmarkTypeId = GetBookmarkCategoryId_ByEntityTypeId.BookmarkType
            call GetLocalBookmarkByObjectId_C2(ItemId=EntityId)
            assign: Local_isBookmarked = GetLocalBookmarkByObjectId_C2.LocalBookmark.Id <> NullIdentifier()
            trigger event OnChange_Bookmark(isBookmarked=Local_isBookmarked)
            call Action_RefreshFetchNotes()
            [M3] assign: isLoaded = not isFetchContacts or FetchContactDetails.IsDataFetched or FetchContactDetails.HasFetchError
            end
          else
            → continues at [M3]
        else
          → continues at [M2]
      case EntityType = Entities.Connect_Entity.Locality (Locality)
        raise InvalidAction: "Invalid option"
      case EntityType = Entities.Connect_Entity.Household (Household)
        assign (Household): Local_In_ActionsMenuOptions.HasBookmark = True; Local_In_ActionsMenuOptions.HasUnbookmark = True; Local_In_ActionsMenuOptions.HasNotes = True; Local_In_ActionsMenuOptions.HasGift = True; Local_In_ActionsMenuOptions.HasShare = True; Local_In_ActionsMenuOptions.HasCall = False; Local_In_ActionsMenuOptions.HasEmail = False; Local_In_ActionsMenuOptions.HasViewDetails = useViewDetails
        → continues at [M1]
      case EntityType = Entities.Connect_Entity.Interchange (Interchange)
        assign (Interchange): Local_In_ActionsMenuOptions.HasBookmark = True; Local_In_ActionsMenuOptions.HasUnbookmark = True; Local_In_ActionsMenuOptions.HasNotes = True; Local_In_ActionsMenuOptions.HasGift = False; Local_In_ActionsMenuOptions.HasShare = False; Local_In_ActionsMenuOptions.HasCall = False; Local_In_ActionsMenuOptions.HasEmail = False
        → continues at [M1]
      case EntityType = Entities.Connect_Entity.SupperMeetings_aka_Subdivisions (SupperMeetings_aka_Subdivisions)
        assign (SupperMeetings): Local_In_ActionsMenuOptions.HasBookmark = True; Local_In_ActionsMenuOptions.HasUnbookmark = True; Local_In_ActionsMenuOptions.HasNotes = True; Local_In_ActionsMenuOptions.HasGift = False; Local_In_ActionsMenuOptions.HasShare = True; Local_In_ActionsMenuOptions.HasCall = False; Local_In_ActionsMenuOptions.HasEmail = False; Local_In_ActionsMenuOptions.HasViewDetails = useViewDetails
        → continues at [M1]
      case EntityType = Entities.Connect_Entity.OneSchoolGlobal (OneSchoolGlobal)
        assign (OneSchool): Local_In_ActionsMenuOptions.HasBookmark = True; Local_In_ActionsMenuOptions.HasUnbookmark = True; Local_In_ActionsMenuOptions.HasNotes = True; Local_In_ActionsMenuOptions.HasGift = False; Local_In_ActionsMenuOptions.HasShare = True; Local_In_ActionsMenuOptions.HasCall = True; Local_In_ActionsMenuOptions.HasEmail = True; Local_In_ActionsMenuOptions.HasViewDetails = useViewDetails
        → continues at [M1]
      otherwise
        raise InvalidAction: "Bookmarks not available"
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block Household_Card (flow Directory_Household_Blocks)
- public: False
- input parameters: Household: UI_LocalityHousehold (mandatory)
- events: Event_OnClickHousehold(HouseholdId: Long Integer (mandatory))
- local variables: -
- lifecycle: OnReady → OnReady; OnParametersChanged → OnParametersChanged
- used by (UBTConnect): Locality_Households_HouseholdList

#### Data sources
- data action **GetMembers** fetch=OnDemand; outputs: HouseholdMembers: LazyImage List; VisibleAvatars: Integer
  ```
  call-server Household_GetMembers_Service(HouseholdId=Household.HouseholdId, User_AgeVisibility=False)
  assign: HouseholdMembers = ConvertList(Household_GetMembers_Service.Out_HouseholdMembers,  {EntityId:"Id",EntityType:"Entities.Connect_Entity.Member"}); VisibleAvatars = Household_GetMembers_Service.VisibleAvatars
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block ImageCard_LazyLoading (UBTConnectLibrary.ConnectCorePatterns)
  args: In_BookmarkModifier="bookmark--rounded", In_CardTypeId=Entities.UBT_ImageCardType.List, In_ExtendedClass="padding-bottom-s", In_IsBookmarked=Household.IsBookmarked, In_ShowAvatarList=True
  on Event_Click → Event_OnClickHousehold(HouseholdId=Household.HouseholdId)
  placeholder LazyImage_Placeholder:
    block UBT_LazyImage (UBTConnect_Utils.CW_Image)
      args: EntityId=Household.HouseholdId, EntityType=Entities.Connect_Entity.Household, HasErrorMessage=True, ImageSize={ Width: Entities.UBT_ImageSize.MaxWidth_100vw }
  placeholder AvatarList:
    block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
      args: In_IsLoading=not GetMembers.IsDataFetched
      placeholder Placeholder_LoadingSection:
        block UBT_LazyImage_List (UBTConnect_Utils.CW_Image)
          args: ImageSize={ Height: Entities.UBT_ImageSize.Small_40 }, InvertOrder=True, Items=GetMembers.HouseholdMembers, MaxLimit=GetMembers.VisibleAvatars
  placeholder Placeholder_Content:
    block ImageCard__Content (UBTConnectLibrary.ConnectPatterns)
      args: In_ShowSubtitle=Household.ChildrenNames <> "", In_Subtitle=Household.ChildrenNames, In_Title=Household.HouseholdName
      placeholder Placeholder_BottomSectionContent:
        block IconText (UBTConnectLibrary.ConnectPatterns)
          args: SpacingSize=Entities.UBT_Size.ExtraSmall, Text=Household.LocalityName + ", " + Household.CountryName, TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
          placeholder Icon:
            block Icon (UBTConnectLibrary.ConnectPatterns)
              args: In_ColorId=Entities.UBT_Color.Neutral7, In_IconId=Entities.UBT_Icons2.HomePinFill, In_SizeId=Entities.UBT_IconsSize.Small_12
```

#### Block actions
- **OnParametersChanged**
  ```
  call OnReady()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnReady**
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache = True
    end
  else
    call ListClear(List=GetMembers.HouseholdMembers)
    call ListAppend(Element={ EntityId: "", EntityType: Entities.Connect_Entity.Member }, List=GetMembers.HouseholdMembers)
    call ListAppend(Element={ EntityId: "", EntityType: Entities.Connect_Entity.Member }, List=GetMembers.HouseholdMembers) as ListAppend2
    if Household.HouseholdId = NullIdentifier()
      end
    else
      refresh data GetMembers
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```

## Block Household_GalleryCard (flow Directory_Household_Blocks)
- public: False
- input parameters: SubdivisionHousehold_GalleryCard: UI_SubdivisionHousehold (mandatory); ItemsPerRow: Integer = 2
- events: Event_OnClick()
- local variables: -
- lifecycle: none
- used by (UBTConnect): Household_GalleryCard_List

#### Widget tree
```
block ImageCard_LazyLoading (UBTConnectLibrary.ConnectCorePatterns) #Subdivision_Household
  args: In_CardTypeId=Entities.UBT_ImageCardType.Gallery, In_ExtendedClass="gallery-card", In_ItemsPerRow=ItemsPerRow
  on Event_Click → Event_OnClick
  placeholder LazyImage_Placeholder:
    block UBT_LazyImage (UBTConnect_Utils.CW_Image)
      args: EntityId=SubdivisionHousehold_GalleryCard.HouseholdId, EntityType=Entities.Connect_Entity.Household, ImageSize={ Width: Entities.UBT_ImageSize.HalfWidth_50vw }
  placeholder Placeholder_Content:
    block ImageCard__Content (UBTConnectLibrary.ConnectPatterns)
      args: In_ShowSubtitle=True, In_Subtitle=SubdivisionHousehold_GalleryCard.ChildrenNames, In_Title=SubdivisionHousehold_GalleryCard.HouseholdName
```

## Block Household_GalleryCard_List (flow Directory_Household_Blocks)
- public: False
- input parameters: In_Household_GalleryCard_List: UI_SubdivisionHousehold List (mandatory); In_IsLoading: Boolean (mandatory)
- events: Event_OnClick_Household_GalleryCard(Event_HouseholdId: Long Integer (mandatory))
- local variables: ItemsPerRow: Integer = 2
- lifecycle: none
- used by (UBTConnect): SupperMeeting_HouseholdList

#### Widget tree
```
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=In_IsLoading
  placeholder Placeholder_LoadingSection:
    block SubLayout_DirectoryDetailScreen_Section (UBTConnect.SubLayout)
      args: In_Title=Get_LookupSection().Households.Plural
      placeholder Placeholder_SectionContent:
        if In_Household_GalleryCard_List.Empty #Empty
          block Directory_EmptyState (UBTConnect.Directory_CommonBlocks)
            args: EntityTypeId=Entities.Connect_Entity.Household
        else
          block Gallery (OutSystemsUI_2_23.Adaptive)
            args: RowItemsDesktop=ItemsPerRow, RowItemsPhone=ItemsPerRow, RowItemsTablet=ItemsPerRow
            placeholder Content:
              list source=In_Household_GalleryCard_List mode=Default  [style="list list-group"; disable-virtualization=True]
                block Household_GalleryCard (UBTConnect.Directory_Household_Blocks)
                  args: ItemsPerRow=ItemsPerRow, SubdivisionHousehold_GalleryCard=In_Household_GalleryCard_List.Current
                  on Event_OnClick → Event_OnClick_Household_GalleryCard(Event_HouseholdId=In_Household_GalleryCard_List.Current.HouseholdId)
```

## Block HouseholdDetails_Members_Block (flow Directory_Household_Blocks)
- public: False
- input parameters: isEnabled: Boolean = True; In_HouseholdMembers: UI_HouseholdMember List (mandatory); In_NonHouseholdMembers: UI_HouseholdMember List (mandatory); In_IsLoading: Boolean (mandatory)
- events: Event_MemberOnClick(MemberId: Long Integer (mandatory)) mandatory; Event_NonMemberOnClick(HouseholdId: Long Integer (mandatory)) mandatory
- local variables: -
- lifecycle: OnReady → ScreenEvent_OnReady
- used by (UBTConnect): HouseholdDetails_Block

#### Widget tree
```
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=In_IsLoading
  placeholder Placeholder_LoadingSection:
    block CustomContainer (UBTConnectLibrary.BasePatterns) #Household_Members
      args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.ExtraSmall } }
      placeholder Content:
        block SubLayout_DirectoryDetailScreen_Section (UBTConnect.SubLayout) #Members
          args: In_Title="Household members"
          placeholder Placeholder_SectionContent:
            list source=In_HouseholdMembers mode=Default  [style="list list-group list--gap-s"; disable-virtualization=True]
              block HouseholdMember_ListItem (UBTConnectLibrary.ConnectCorePatterns) #ParentsAndChildren
                args: isEnabled=isEnabled, LifeCycleText=In_HouseholdMembers.Current.LifeCycleText, LifeCycleText_Italic=In_HouseholdMembers.Current.LifeCycleText_IsItallic, Title=In_HouseholdMembers.Current.Title
                on OnClickPerson → Handler_MemberOnClick(MemberId=If(In_HouseholdMembers.Current.MemberRole <> Entities.Connect_HouseholdMemberRole.Child,In_HouseholdMembers.Current.Id, 0))
                placeholder Placeholder_Left:
                  block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                    args: EntityId=In_HouseholdMembers.Current.Id, EntityType=Entities.Connect_Entity.Member, ImageSize={ Height: Entities.UBT_ImageSize.Base_52, Width: Entities.UBT_ImageSize.Square }
                placeholder Actions:
                  block CustomContainer (UBTConnectLibrary.BasePatterns)
                    args: Options={ DisplayOptions: { Display: Entities.UBT_Display.Flex, JustifyContent: Entities.UBT_JustifyContent.SpaceBetween } }
                    placeholder Content:
                      if In_HouseholdMembers.Current.HasCTAs #HasCTAs
                        block Directory_EntityDetailsActions (UBTConnect.Directory_CommonBlocks)
                          args: EnableOptions={ EnableCall: not In_HouseholdMembers.Current.IsDeceased, EnableEmail: not In_HouseholdMembers.Current.IsDeceased }, EntityId=In_HouseholdMembers.Current.Id, EntityType=Entities.Connect_Entity.Member, IsEnabled=isEnabled
                      if In_HouseholdMembers.Current.HasNavigation
                        container  [style="display-flex flex-direction-column justify-content-center"]
                          block CustomContainer (UBTConnectLibrary.BasePatterns)
                            args: Options={ DisplayOptions: {  }, HeightOptions: {  }, WidthOptions: { Min: 100 } }
                            placeholder Content:
                              block Icon (UBTConnectLibrary.ConnectPatterns)
                                args: In_ColorId=Entities.UBT_Color.Neutral4, In_IconId=Entities.UBT_Icons2.ChevronRight
                                on Click → Handler_MemberOnClick(MemberId=In_HouseholdMembers.Current.Id)
    block SubLayout_DirectoryDetailScreen_Section (UBTConnect.SubLayout) #Members_MarriedChildren
      args: In_PaddingBottom=Entities.UBT_Size.Base, In_PaddingTop=Entities.UBT_Size.Small, In_Title=""
      placeholder Placeholder_SectionContent:
        list source=In_NonHouseholdMembers mode=Default  [style="list list-group list--gap-s"; disable-virtualization=True]
          block NonMember_ListItem (UBTConnectLibrary.ConnectCorePatterns)
            args: DeceasedCaption=In_NonHouseholdMembers.Current.LifeCycleText, isEnabled=isEnabled, LifeCycleText_Italic=In_NonHouseholdMembers.Current.LifeCycleText_IsItallic, MarriageHighlightText=In_NonHouseholdMembers.Current.MarriageHighlightText, MarriedCaption=In_NonHouseholdMembers.Current.MarriageText, MarriedPartnerTakenText=In_NonHouseholdMembers.Current.MarriagePartnerTakenText, Title=In_NonHouseholdMembers.Current.Title
            on OnClickPerson → Handler_NonMemberOnClick(Target_CountryName=In_NonHouseholdMembers.Current.CountryName, Target_HouseholdId=In_NonHouseholdMembers.Current.HouseholdId, Target_LocalityName=In_NonHouseholdMembers.Current.LocalityName)
            placeholder Placeholder_Left:
              block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                args: EntityId=In_NonHouseholdMembers.Current.Id, EntityType=Entities.Connect_Entity.Member, ImageSize={ Height: Entities.UBT_ImageSize.Base_52, Width: Entities.UBT_ImageSize.Square }
            placeholder Actions:
              if In_NonHouseholdMembers.Current.HasNavigation
                container  [style="display-flex flex-direction-column justify-content-center"]
                  block CustomContainer (UBTConnectLibrary.BasePatterns)
                    args: Options={ DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_AlignItems.Center, JustifyContent: Entities.UBT_JustifyContent.Center }, HeightOptions: {  }, WidthOptions: { Min: 100…
                    placeholder Content:
                      block Icon (UBTConnectLibrary.ConnectPatterns)
                        args: In_ColorId=Entities.UBT_Color.Neutral4, In_IconId=Entities.UBT_Icons2.ChevronRight
                        on Click → Handler_NonMemberOnClick(Target_CountryName=In_NonHouseholdMembers.Current.CountryName, Target_HouseholdId=In_NonHouseholdMembers.Current.HouseholdId, Target_LocalityName=In_NonHouseholdMembers.Current.LocalityName)
```

#### Block actions
- **Handler_MemberOnClick** inputs: MemberId: Long Integer (mandatory)
  ```
  if MemberId = 0 or not isEnabled
    end
  else
    trigger event Event_MemberOnClick(MemberId=MemberId)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_NonMemberOnClick** inputs: Target_LocalityName: Text (mandatory); Target_CountryName: Text (mandatory); Target_HouseholdId: Long Integer (mandatory)
  ```
  call HasAccessToRegion(Target_CountryNameOrCode=Target_CountryName, Target_LocalityNameOrId=Target_LocalityName)
  if HasAccessToRegion.HasAccess
    trigger event Event_NonMemberOnClick(HouseholdId=Target_HouseholdId)
    end
  else
    call App_Subscription_ShowUpgradePopUp()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **ScreenEvent_OnReady**
  ```
  if In_IsLoading and In_HouseholdMembers.Empty
    call GetSkeletonList_UI_HouseholdMembers(ListLength=5)
    assign: In_HouseholdMembers = GetSkeletonList_UI_HouseholdMembers.UI_HouseholdMember
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block HouseholdDetails_TimelinePhoto (flow Directory_Household_Blocks)
- public: True
- input parameters: In_BackgroundURL: Text (mandatory); Label: Text (mandatory); Date: Date Time (mandatory); In_CardTypeId: UBT_ImageCardType Identifier (mandatory); IsSelected: Boolean (mandatory)
- events: Selected(Date: Date Time (mandatory)) mandatory
- local variables: MainContainerClass: Text = "ubt-household-image-card"
- lifecycle: none
- used by (UBTConnect): HouseholdDetails_TimelinePhoto_List

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns) #Block_Image
  args: ExtendedClasses=FormatClasses(\n    MainContainerClass + "__background-image",\n    GetClasses_BackgroundImageSize(In_CardTypeId)\n)\n       \n    , Options={ BorderOptions: { Color: If(IsSelected, Entities.UBT_Color.Primary,Entities.UBT_Color.Neutral3), Size: { GeneralSizeId: Entities.UBT_Size.Small }, Radius: { GeneralSizeId: Entities.UBT_Shape.Soft } …
  on Clicked → Selected(Date=Date)
  placeholder Content:
    block UBT_LazyImage (UBTConnect_Utils.CW_Image)
      args: EntityId=NullIdentifier(), EntityType=Entities.Connect_Entity.Household, ImageSize={ Height: Entities.UBT_ImageSize.Large_65, Width: Entities.UBT_ImageSize.Auto }, ImageURL=In_BackgroundURL, In_BorderRadius=Entities.UBT_Shape.Soft
    container  [style="householdImage_horizontalCard-label"; visible=In_BackgroundURL <> ""]
      expr: Label
```

## Block HouseholdDetails_TimelinePhoto_List (flow Directory_Household_Blocks)
- public: False
- input parameters: In_HouseholdTimelineImages: UI_HouseholdTimelineImages List (mandatory)
- events: Event_DateSelected(Date: Date Time (mandatory)) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): HouseholdDetails_Block

#### Widget tree
```
list source=In_HouseholdTimelineImages mode=Default  [style="Household_GalleryCard-list list list-group list-horizontal--gap-xs"; disable-virtualization=True]
  block HouseholdDetails_TimelinePhoto (UBTConnect.Directory_Household_Blocks)
    args: Date=In_HouseholdTimelineImages.Current.Date, In_BackgroundURL=In_HouseholdTimelineImages.Current.SignedURL, In_CardTypeId=Entities.UBT_ImageCardType.Gallery, IsSelected=In_HouseholdTimelineImages.Current.IsCurrent, Label=In_HouseholdTimelineImages.Current.Label
    on Selected → Event_DateSelected(Date=Date)
```

## Block Directory_Interchange_StatisticsList (flow Directory_Interchange)
- public: False
- input parameters: In_IsLoading: Boolean; In_ShowSubtitle: Boolean; In_HighlightWords: Text; In_InterchangeList: UI_Interchange List
- events: Event_NavigateToLocality(LocalityId: Long Integer (mandatory); CountryName: Text (mandatory)) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): Locality_Interchange

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base } }
  placeholder Content:
    block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
      args: In_IsLoading=In_IsLoading
      placeholder Placeholder_LoadingSection:
        list source=In_InterchangeList mode=Default  [style="list list-group list--gap-s"]
          block Statistics_ListItem (UBTConnectLibrary.ConnectCorePatterns)
            args: In_ExtendedClasses=If(In_InterchangeList.Current.IsBookmarked,"ubt-statistics-item__bookmarked",""), In_HasActionsMenu=True, In_HighlightWords=In_HighlightWords, In_ShowSubtitle=In_ShowSubtitle, In_StatisticsOptions=In_InterchangeList.Current.InterchangeStatistics
            on Event_Clicked → Handler_Clicked(InterchangeCountryName=In_InterchangeList.Current.InterchangeCountryName, InterchangeLocalityId=In_InterchangeList.Current.InterchangeLocalityId)
            placeholder ActionsMenu:
              block Directory_EntityDetailsActions (UBTConnect.Directory_CommonBlocks)
                args: ContactPopUp_OverrideOptions={ Name: In_InterchangeList.Current.InterchangeStatistics.Title }, EnableOptions={ EnableBookmark: True, EnableNotes: True }, EntityId=In_InterchangeList.Current.InterchangeLocalityId, EntityType=Entities.Connect_Entity.Interchange, IsEnabled=True
    if In_InterchangeList.Empty and not In_IsLoading
      block Directory_EmptyState (UBTConnect.Directory_CommonBlocks)
        args: EntityTypeId=Entities.Connect_Entity.Interchange, Location="in this locality"
```

#### Block actions
- **Handler_Clicked** inputs: InterchangeLocalityId: Long Integer (mandatory); InterchangeCountryName: Text (mandatory)
  ```
  if In_IsLoading
    end
  else
    trigger event Event_NavigateToLocality(CountryName=InterchangeCountryName, LocalityId=InterchangeLocalityId)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block DW_OneSchoolGlobal_EventList (flow Directory_OneSchoolGlobal_Blocks)
- public: False
- input parameters: -
- events: Event_OnClick(Event_OneSchoolGlobaEventId: Long Integer (mandatory))
- local variables: OneSchoolGlobal_EventCard_List: UI_OneSchoolGlobal_Event_Card List; GetOneSchoolGlobal_EventList_StartIndex: Integer; GetOneSchoolGlobal_EventList_Offset: Integer = 20; GetOneSchoolGlobal_EventList_IsLoading: Boolean = True
- lifecycle: OnReady → ScreenEvent_OnReady
- used by (UBTConnect): OneSchoolGlobalDetails_Block

#### Data sources
- data action **Get_OneSchoolGlobal_EventList** fetch=OnDemand; outputs: Out_OneSchoolGlobal_EventCard_List: UI_OneSchoolGlobal_Event_Card List; OnAfterFetch → OnAfterFetch_Get_OneSchoolGlobal_EventList
  locals: UI_OneSchoolGlobal_Event_Card: UI_OneSchoolGlobal_Event_Card
  ```
  assign: UI_OneSchoolGlobal_Event_Card.SignedURL.LowResolution = "img/UBTConnect.SampleOneSchoolGlobalEvent.png"; UI_OneSchoolGlobal_Event_Card.SignedURL.MediumResolution = "img/UBTConnect.SampleOneSchoolGlobalEvent.png"; UI_OneSchoolGlobal_Event_Card.SignedURL.HighResolution = "img/UBTConnect.SampleOneSchoolGlobalEvent.png"; UI_OneSchoolGlobal_Event_Card.EventId = 1; UI_OneSchoolGlobal_Event_Card.UI_OneSchoolGlobal_Event_Card_Content.Name = "Sports Day Extravaganza: Igniting the Team Spirit"
  call-server ListAppendAll(List=UI_OneSchoolGlobal_Event_Card.UI_OneSchoolGlobal_Event_Card_Content.ParticipantYear_List, SourceList=[ 1, 2, 5 ])
  call-server ListAppend(Element=UI_OneSchoolGlobal_Event_Card, List=Out_OneSchoolGlobal_EventCard_List)
  assign: UI_OneSchoolGlobal_Event_Card.UI_OneSchoolGlobal_Event_Card_Content.Name = "School gathering"
  call-server ListAppendAll(List=UI_OneSchoolGlobal_Event_Card.UI_OneSchoolGlobal_Event_Card_Content.ParticipantYear_List, SourceList=[ 4, 5, 6 ]) as ListAppendAll2
  call-server ListAppend(Element=UI_OneSchoolGlobal_Event_Card, List=Out_OneSchoolGlobal_EventCard_List) as ListAppend2
  call-server Wait(Duration=2)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block OneSchoolGlobal_Event_ListCard_List (UBTConnect.Directory_OneSchoolGlobal_Blocks)
  args: In_IsLoading=GetOneSchoolGlobal_EventList_IsLoading, In_IsUpdating=Get_OneSchoolGlobal_EventList.IsDataFetched and not Get_OneSchoolGlobal_EventList.HasFetchError and not GetOneSchoolGlobal_EventList_IsLoading, In_OneSchoolGlobal_EventCard_List=OneSchoolGlobal_EventCard_List
  on Event_ScrollEnding → Handler_OnScrollEnding
  on Event_OnClick → Event_OnClick(Event_OneSchoolGlobaEventId=Event_OneSchoolGlobaEventlId)
```

#### Block actions
- **Handler_OnScrollEnding**
  ```
  if Get_OneSchoolGlobal_EventList.IsDataFetched
    if Get_OneSchoolGlobal_EventList.Out_OneSchoolGlobal_EventCard_List.Length >= GetOneSchoolGlobal_EventList_Offset
      assign (MaxRecords += IncrementRecords): GetOneSchoolGlobal_EventList_StartIndex = GetOneSchoolGlobal_EventList_StartIndex + GetOneSchoolGlobal_EventList_Offset
      refresh data Get_OneSchoolGlobal_EventList
      end
    else
      end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **OnAfterFetch_Get_OneSchoolGlobal_EventList**
  ```
  if GetOneSchoolGlobal_EventList_IsLoading
    call ListClear(List=OneSchoolGlobal_EventCard_List)
    assign: GetOneSchoolGlobal_EventList_IsLoading = False
    [M1] call ListAppendAll(List=OneSchoolGlobal_EventCard_List, SourceList=Get_OneSchoolGlobal_EventList.Out_OneSchoolGlobal_EventCard_List)
    end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnReady**
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache = True
    end
  else
    call GetSekeletonList_UI_OneSchoolGlobal_EventCard()
    assign: OneSchoolGlobal_EventCard_List = GetSekeletonList_UI_OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_List
    refresh data Get_OneSchoolGlobal_EventList
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block DW_OneSchoolGlobal_Numbers (flow Directory_OneSchoolGlobal_Blocks)
- public: False
- input parameters: In_OneSchoolGlobal_LocalitiesList: LocalityId, LocalityName Record List (mandatory)
- events: -
- local variables: Filter_CalendarYear: Text; Filter_LocalityId: Long Integer; Filter_AvailableCalendarYears: Text List; Filter_LocalitiesList: Tag List
- lifecycle: OnReady → ScreenEvent_OnReady; OnParametersChanged → ScreenEvent_OnParametersChanged
- used by (UBTConnect): OneSchoolGlobalDetails_Block

#### Data sources
- data action **Get_OneSchoolGlobal_StudentNumbers** fetch=AtStart; outputs: Out_OneSchoolGlobal_StudentNumbers: UI_OneSchoolGlobal_StudentNumbers; OnAfterFetch → OnAfterFetch_Get_OneSchoolGlobal_StudentNumbers
  ```
  call-server ListAppendAll(List=Out_OneSchoolGlobal_StudentNumbers.StudentsPerYear, SourceList=[ { SchoolYear: 1, StudentCount: 20 }, { SchoolYear: 2, StudentCount: 40 }, { SchoolYear: 3, StudentCount: 50 }, { SchoolYear: 4, StudentCount: 60 } ])
  call-server ListAppendAll(List=Out_OneSchoolGlobal_StudentNumbers.AvailableCalendarYears, SourceList=[ "2025", "2024", "2023", "2022", "2021" ]) as ListAppendAll3
  call-server Wait(Duration=2)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block OneSchoolGlobal_Numbers (UBTConnect.Directory_OneSchoolGlobal_Blocks)
  args: In_IsLoading=(Filter_AvailableCalendarYears.Empty and not Get_OneSchoolGlobal_StudentNumbers.IsDataFetched), In_IsLoadingStudentNumbers=not Get_OneSchoolGlobal_StudentNumbers.IsDataFetched, In_LocalitiesList=Filter_LocalitiesList, In_Selected_CalendarYear=Filter_CalendarYear, In_StudentNumbers={ StudentsPerYear: Get_OneSchoolGlobal_StudentNumbers.Out_OneSchoolGlobal_StudentNumbers.StudentsPerYear, AvailableCalendarYears: Filter_AvailableCalendarYears }
  on Event_ClickCalendarYear → OnCick_OneSchoolGlobal_Numbers_CalendarYear(Event_CalendarYear=Event_CalendarYear)
  on Event_ClickLocality → OnCick_OneSchoolGlobal_Numbers_Locality(Event_LocalityId=Event_LocalityId)
```

#### Block actions
- **OnAfterFetch_Get_OneSchoolGlobal_StudentNumbers**
  ```
  if Filter_AvailableCalendarYears.Empty
    assign: Filter_CalendarYear = Get_OneSchoolGlobal_StudentNumbers.Out_OneSchoolGlobal_StudentNumbers.AvailableCalendarYears.Current; Filter_AvailableCalendarYears = Get_OneSchoolGlobal_StudentNumbers.Out_OneSchoolGlobal_StudentNumbers.AvailableCalendarYears
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnCick_OneSchoolGlobal_Numbers_CalendarYear** inputs: Event_CalendarYear: Text (mandatory)
  ```
  assign: Filter_CalendarYear = Event_CalendarYear
  call GetSkeleton_UI_OneSchoolGlobal_StudentNumbers()
  assign: Get_OneSchoolGlobal_StudentNumbers.Out_OneSchoolGlobal_StudentNumbers.StudentsPerYear = GetSkeleton_UI_OneSchoolGlobal_StudentNumbers.UI_OneSchoolGlobal_StudentNumbers.StudentsPerYear
  refresh data Get_OneSchoolGlobal_StudentNumbers
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnCick_OneSchoolGlobal_Numbers_Locality** inputs: Event_LocalityId: Long Integer (mandatory)
  ```
  [M1] for each Filter_LocalitiesList
    assign: Filter_LocalitiesList.Current.IsSelected = TextToLongInteger(Filter_LocalitiesList.Current.Identifier) = Event_LocalityId
    → continues at [M1]
  end for
  assign: Filter_LocalityId = Event_LocalityId; Filter_CalendarYear = "2025" //Skeleton Span
  call ListClear(List=Filter_AvailableCalendarYears)
  call GetSkeleton_UI_OneSchoolGlobal_StudentNumbers()
  assign: Get_OneSchoolGlobal_StudentNumbers.Out_OneSchoolGlobal_StudentNumbers = GetSkeleton_UI_OneSchoolGlobal_StudentNumbers.UI_OneSchoolGlobal_StudentNumbers
  refresh data Get_OneSchoolGlobal_StudentNumbers
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnParametersChanged**
  ```
  if In_OneSchoolGlobal_LocalitiesList.Length > 1
    call ListInsert(Element={ LocalityId: NullIdentifier(), LocalityName: "All" }, List=In_OneSchoolGlobal_LocalitiesList, Position=0)
    assign: Filter_LocalityId = NullIdentifier()
    [M1] assign: Filter_LocalitiesList = ConvertList(In_OneSchoolGlobal_LocalitiesList,  {Text:"LocalityName",Identifier:"LocalityId",IsSelected:"LocalityId = Filter_LocalityId"})
    end
  else
    assign: Filter_LocalityId = In_OneSchoolGlobal_LocalitiesList.Current.LocalityId
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnReady**
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache = True
    end
  else
    call GetSkeleton_UI_OneSchoolGlobal_StudentNumbers()
    assign: Get_OneSchoolGlobal_StudentNumbers.Out_OneSchoolGlobal_StudentNumbers = GetSkeleton_UI_OneSchoolGlobal_StudentNumbers.UI_OneSchoolGlobal_StudentNumbers
    refresh data Get_OneSchoolGlobal_StudentNumbers
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block OneSchoolGlobal_DetailCard_Content (flow Directory_OneSchoolGlobal_Blocks)
- public: False
- input parameters: In_OneSchoolGlobal_DetailCardContent: UI_OneSchoolGlobal_DetailCard_Content (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): nothing in this module

#### Widget tree
```
block ImageCard__Content (UBTConnectLibrary.ConnectPatterns)
  args: In_Title=In_OneSchoolGlobal_DetailCardContent.Name
  placeholder Placeholder_BottomSectionContent:
    block CustomText (UBTConnectLibrary.BasePatterns)
      args: In_Text="Educating Students From:", In_TextOptions={ Color: Entities.UBT_Color.Neutral8, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
    block CustomText (UBTConnectLibrary.BasePatterns)
      args: In_Text=ListJoin(In_OneSchoolGlobal_DetailCardContent.LocalityNames_List), In_TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular }
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ MarginSize: { TopSizeId: Entities.UBT_Size.ExtraSmall } }
      placeholder Content:
        block AddressPopup_Wrapper (UBTConnect_Utils.CW_CTA_PopUps)
          args: In_Address=In_OneSchoolGlobal_DetailCardContent.Address
        list source=In_OneSchoolGlobal_DetailCardContent.BusinesLinks mode=Default  [style="list list-group"]
          block External_Link (UBTConnect.App_Common_Blocks)
            args: IconVisible=True, In_Link=In_OneSchoolGlobal_DetailCardContent.BusinesLinks.Current, IsEnabled=True
```

## Block OneSchoolGlobal_Event_Card (flow Directory_OneSchoolGlobal_Blocks)
- public: False
- input parameters: OneSchoolGlobal_EventCard: UI_OneSchoolGlobal_Event_Card (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): OneSchoolGlobalEventDetail

#### Widget tree
```
block ImageCard (UBTConnectLibrary.ConnectCorePatterns)
  args: In_BackgroundURL=OneSchoolGlobal_EventCard.SignedURL.LowResolution, In_CardTypeId=Entities.UBT_ImageCardType.Detail
  placeholder Placeholder_Content:
    block ImageCard__Content (UBTConnectLibrary.ConnectPatterns)
      args: In_Title=OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.Name
      placeholder Placeholder_BottomSectionContent:
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: ExtendedClasses="gap-s", Options={ PaddingSize: {  }, MarginSize: { BottomSizeId: Entities.UBT_Size.Base }, DisplayOptions: { Display: Entities.UBT_Display.Flex, FlexDirection: Entities.UBT_FlexDirection.Column } }
          placeholder Content:
            block UI_OneSchoolGlobalEventDetail_IconTextWrapper (UBTConnect.Directory_OneSchoolGlobal_Blocks)
              args: IconId=Entities.UBT_Icons2.Event, Text=FormatConnectDate_WithYear(OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.DateTimeStart).ShortLabel
            block UI_OneSchoolGlobalEventDetail_IconTextWrapper (UBTConnect.Directory_OneSchoolGlobal_Blocks)
              args: IconId=Entities.UBT_Icons2.Schedule, Text=Get_Descriptor_OneSchool_Event_TimeRange(OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.DateTimeStart,OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.DateTimeEnd,OneS…
            block UI_OneSchoolGlobalEventDetail_IconTextWrapper (UBTConnect.Directory_OneSchoolGlobal_Blocks)
              args: IconId=Entities.UBT_Icons2.School, Text=GetDescriptor_OneSchool_Event_Years(OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.ParticipantYear_List)
        block AddressPopup_Wrapper (UBTConnect_Utils.CW_CTA_PopUps)
          args: In_Address=OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.Address
```

## Block OneSchoolGlobal_Event_ListCard (flow Directory_OneSchoolGlobal_Blocks)
- public: False
- input parameters: OneSchoolGlobal_EventCard: UI_OneSchoolGlobal_Event_Card (mandatory)
- events: Event_OnClick(Event_OneSchoolGlobaEventlId: Long Integer (mandatory))
- local variables: -
- lifecycle: none
- used by (UBTConnect): OneSchoolGlobal_Event_ListCard_List

#### Widget tree
```
block ImageCard (UBTConnectLibrary.ConnectCorePatterns)
  args: In_BackgroundURL=OneSchoolGlobal_EventCard.SignedURL.LowResolution, In_CardTypeId=Entities.UBT_ImageCardType.Sublist
  on Event_Click → Event_OnClick(Event_OneSchoolGlobaEventlId=OneSchoolGlobal_EventCard.EventId)
  placeholder Placeholder_Content:
    block ImageCard__Content (UBTConnectLibrary.ConnectPatterns)
      args: In_Title=OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.Name
      placeholder Placeholder_TopSectionContent:
        block CustomText (UBTConnectLibrary.BasePatterns)
          args: In_Text=FormatConnectDateTime(OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.DateTimeStart).ShortLabel, In_TextOptions={ Color: Entities.UBT_Color.Neutral8, FontSize: Entities.UBT_FontSize.DoubleExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
      placeholder Placeholder_BottomSectionContent:
        block CustomText (UBTConnectLibrary.BasePatterns)
          args: In_Text=GetDescriptor_OneSchool_Event_Years(OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.ParticipantYear_List), In_TextOptions={ Color: Entities.UBT_Color.Neutral5, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
```

## Block OneSchoolGlobal_Event_ListCard_List (flow Directory_OneSchoolGlobal_Blocks)
- public: False
- input parameters: In_OneSchoolGlobal_EventCard_List: UI_OneSchoolGlobal_Event_Card List (mandatory); In_IsLoading: Boolean (mandatory); In_IsUpdating: Boolean (mandatory)
- events: Event_OnClick(Event_OneSchoolGlobaEventlId: Long Integer (mandatory)); Event_ScrollEnding() mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): DW_OneSchoolGlobal_EventList

#### Widget tree
```
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=In_IsLoading
  placeholder Placeholder_LoadingSection:
    list source=In_OneSchoolGlobal_EventCard_List mode=Default on scroll-ending → Event_ScrollEnding  [style="list list-group list--gap-s"]
      container
        block OneSchoolGlobal_Event_ListCard (UBTConnect.Directory_OneSchoolGlobal_Blocks) #Block_OneSchoolGlobal_ImageCard
          args: OneSchoolGlobal_EventCard=In_OneSchoolGlobal_EventCard_List.Current
          on Event_OnClick → Event_OnClick(Event_OneSchoolGlobaEventlId=Event_OneSchoolGlobaEventlId)
    if In_IsUpdating
    else
      container  [style="list-updating"]
```

## Block OneSchoolGlobal_List (flow Directory_OneSchoolGlobal_Blocks)
- public: False
- input parameters: In_IsLoading: Boolean (mandatory); OneSchoolList: UI_OneSchool_Card List (mandatory)
- events: Event_OnClick(Event_OneSchoolGlobalId: Long Integer (mandatory)); Event_OnClick_Bookmark(IsBookmarked: Boolean (mandatory)) mandatory; Event_ScrollEnding() mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): Locality_OneSchoolGlobal

#### Widget tree
```
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=In_IsLoading
  placeholder Placeholder_LoadingSection:
    list source=OneSchoolList mode=Default on scroll-ending → Event_ScrollEnding  [style="list list-group list--gap-s"]
      block ImageCard_LazyLoading (UBTConnectLibrary.ConnectCorePatterns)
        args: In_BookmarkModifier="bookmark--rounded", In_CardTypeId=Entities.UBT_ImageCardType.List, In_ExtendedClass="padding-bottom-s", In_ShowAvatarList=False
        on Event_Click → Event_OnClick(Event_OneSchoolGlobalId=OneSchoolList.Current.CommunityBusinessId)
        placeholder LazyImage_Placeholder:
          container
            block UBT_LazyImage (UBTConnect_Utils.CW_Image)
              args: EntityId=OneSchoolList.Current.CommunityBusinessId, EntityType=Entities.Connect_Entity.OneSchoolGlobal, HasErrorMessage=True, ImageSize={ Width: Entities.UBT_ImageSize.MaxWidth_100vw }, ImageURL=OneSchoolList.Current.SignedURL
        placeholder Placeholder_Content:
          block ImageCard__Content (UBTConnectLibrary.ConnectPatterns)
            args: In_ShowSubtitle=True, In_Subtitle=OneSchoolList.Current.OneSchool_Card_Content.LocalityName, In_Title=OneSchoolList.Current.OneSchool_Card_Content.Name
            placeholder Placeholder_BottomSectionContent:
              block StopPropagationHelper (UBTConnectLibrary.ConnectPatterns)
                placeholder Content:
                  block Directory_EntityDetailsActions (UBTConnect.Directory_CommonBlocks)
                    args: ContactPopUp_OverrideOptions={ ImageURL: OneSchoolList.Current.SignedURL, Name: Trim(OneSchoolList.Current.OneSchool_Card_Content.Name) }, EnableOptions={ EnableNotes: True }, EntityId=OneSchoolList.Current.CommunityBusinessId, EntityType=Entities.Connect_Entity.OneSchoolGlobal
```

## Block OneSchoolGlobal_Numbers (flow Directory_OneSchoolGlobal_Blocks)
- public: False
- input parameters: In_StudentNumbers: UI_OneSchoolGlobal_StudentNumbers (mandatory); In_Selected_CalendarYear: Text (mandatory); In_IsLoading: Boolean (mandatory); In_IsLoadingStudentNumbers: Boolean (mandatory); In_LocalitiesList: Tag List (mandatory)
- events: Event_ClickCalendarYear(Event_CalendarYear: Text (mandatory)) mandatory; Event_ClickLocality(Event_LocalityId: Long Integer (mandatory)) mandatory
- local variables: -
- lifecycle: OnParametersChanged → OnParametersChanged
- used by (UBTConnect): DW_OneSchoolGlobal_Numbers

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns) #Block_LocalityFilter
  args: Options={ PaddingSize: { BottomSizeId: Entities.UBT_Size.Base }, MarginSize: { BottomSizeId: Entities.UBT_Size.Base } }
  placeholder Content:
    block HorizontalTagList (UBTConnectLibrary.ConnectPatterns)
      args: In_IsMandatorySelection=True, In_IsSingleSelection=True, In_TagToggleList=In_LocalitiesList
      on Changed → OnClick_LocalityFilter(Event_UpdatedTagList=UpdatedTagList)
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=In_IsLoading
  placeholder Placeholder_LoadingSection:
    block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
      args: In_IsLoading=In_IsLoading
      placeholder Placeholder_LoadingSection:
        block CustomContainer (UBTConnectLibrary.BasePatterns) #Block_CalendarYearFilter
          args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Base } }
          placeholder Content:
            block Columns_Three (UBTConnectLibrary.BasePatterns)
              args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ExpandMiddle, ColumnSizes: { Left: 119, Right: 119 } }
              placeholder Left:
                block CustomText (UBTConnectLibrary.BasePatterns) #Block_CalendarYears_Label
                  args: In_Text="Select calendar year", In_TextOptions={ FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
                block PopupMenu (Connect2_LegacyShared+UBTConnectLibrary.Widgets)
                  args: Position=Entities.Position.Bottom
                  placeholder Anchor:
                    if False  [DEAD BRANCH: condition is a constant]
                      block CustomText (UBTConnectLibrary.BasePatterns) #Block_CalendarYear
                        args: In_Text=In_Selected_CalendarYear, In_TextOptions={ Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.Heading6, FontWeight: Entities.UBT_FontWeight.SemiBold }
                    block CustomContainer (UBTConnectLibrary.BasePatterns)
                      args: Options={ TextOptions: { Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.Heading6, FontWeight: Entities.UBT_FontWeight.SemiBold }, DisplayOptions: { Display: Entities.UBT_Display.Flex, Ali…
                      placeholder Content:
                        expr: In_Selected_CalendarYear
                        block CustomContainer (UBTConnectLibrary.BasePatterns)
                          args: Options={ MarginSize: { LeftSizeId: Entities.UBT_Size.Small } }
                          placeholder Content:
                            block Icon (UBTConnectLibrary.ConnectPatterns)
                              args: In_ColorId=Entities.UBT_Color.Primary, In_IconId=Entities.UBT_Icons2.ArrowDropDown, In_SizeId=Entities.UBT_IconsSize.Base_24
                  placeholder PopupMenu:
                    block CustomContainer (UBTConnectLibrary.BasePatterns)
                      args: ExtendedClasses="dx-popup-menu-container--year-list", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, BorderOptions: { Color: Entities.UBT_Color.Neutral7, Size: { GeneralSizeId: Entities.UBT_Size.Small }, Radius: { GeneralSizeId: Entitie…
                      placeholder Content:
                        list source=In_StudentNumbers.AvailableCalendarYears mode=Default  [style="list list-group"; disable-virtualization=True]
                          block CustomContainer (UBTConnectLibrary.BasePatterns)
                            args: ExtendedClasses="dx-popup-menu-container--years-list__element", Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base }, MarginSize: {  }, BorderOptions: {  }, DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_AlignItems.Center } }
                            on Clicked → OnClick_CalendarYear(Event_CalendarYear=In_StudentNumbers.AvailableCalendarYears.Current)
                            placeholder Content:
                              expr: In_StudentNumbers.AvailableCalendarYears.Current
              placeholder Right:
                block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
                  args: In_IsLoading=In_IsLoadingStudentNumbers
                  placeholder Placeholder_LoadingSection:
                    block CustomText (UBTConnectLibrary.BasePatterns)
                      args: In_Text="Total students", In_TextOptions={ FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
                    block CustomText (UBTConnectLibrary.BasePatterns)
                      args: In_Text=800, In_TextOptions={ FontSize: Entities.UBT_FontSize.Heading6, FontWeight: Entities.UBT_FontWeight.SemiBold }
        block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
          args: In_IsLoading=In_IsLoadingStudentNumbers
          placeholder Placeholder_LoadingSection:
            block CustomContainer (UBTConnectLibrary.BasePatterns)
              args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Small }, TextOptions: { FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold } }
              placeholder Content:
                expr: "Total per year"
            list source=In_StudentNumbers.StudentsPerYear mode=Default #List_SchoolYears  [style="list list-group list--gap-s"]
              container  [style=""]
                block CustomContainer (UBTConnectLibrary.BasePatterns)
                  args: ExtendedClasses="ubt-skeleton-section__element", Options={ BorderOptions: { Color: Entities.UBT_Color.Neutral3, Size: { GeneralSizeId: Entities.UBT_Size.Small }, Radius: { GeneralSizeId: Entities.UBT_Shape.Soft } }, TextOptions: { FontSize: Entities.UBT_Fo…
                  placeholder Content:
                    block Columns_Two (UBTConnectLibrary.BasePatterns)
                      args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceFirst, VerticalAlign: Entities.UBT_VerticalAlign.Center, ColumnSizes: { Left: 96 } }
                      placeholder Left:
                        block CustomContainer (UBTConnectLibrary.BasePatterns)
                          args: ExtendedClasses="text-align-center", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral4 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Base }, TextOptions: {  } }
                          placeholder Content:
                            block CustomText (UBTConnectLibrary.BasePatterns)
                              args: In_Text=In_StudentNumbers.StudentsPerYear.Current.SchoolYear, In_TextOptions={  }
                      placeholder Right:
                        container  [style="text-align-center"]
                          expr: In_StudentNumbers.StudentsPerYear.Current.StudentCount + " Students"  [style="text-align-center"]
```

#### Block actions
- **OnClick_CalendarYear** inputs: Event_CalendarYear: Text (mandatory)
  ```
  if Event_CalendarYear = In_Selected_CalendarYear
    end
  else
    trigger event Event_ClickCalendarYear(Event_CalendarYear=Event_CalendarYear)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnClick_LocalityFilter** inputs: Event_UpdatedTagList: Tag List (mandatory)
  ```
  call ListIndexOf(Condition=IsSelected, List=Event_UpdatedTagList)
  javascript Yield()
    | Promise.resolve().then($resolve);
  trigger event Event_ClickLocality(Event_LocalityId=TextToLongInteger(Event_UpdatedTagList[ListIndexOf.Position].Identifier))
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnParametersChanged**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block UI_OneSchoolGlobalEventDetail_IconTextWrapper (flow Directory_OneSchoolGlobal_Blocks)
- public: False
- input parameters: IconId: UBT_Icons2 Identifier (mandatory); Text: Text (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): OneSchoolGlobal_Event_Card

#### Widget tree
```
block IconText (UBTConnectLibrary.ConnectPatterns)
  args: Text=Text, TextOptions={ FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular }
  placeholder Icon:
    block Icon (UBTConnectLibrary.ConnectPatterns)
      args: In_IconId=IconId, In_SizeId=Entities.UBT_IconsSize.NonStandard_16
```

## Block SubLayout_Browse_Section (flow SubLayout)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): BrowseDirectory, CountryDetails

#### Widget tree
```
container  [style="directory-detail-screen"]
  placeholder-def Placeholder_TopSection
  placeholder-def Placeholder_BottomSection
```

## Block SubLayout_DirectoryCalendar (flow SubLayout)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): MyCalendar

#### Widget tree
```
container  [style="calendar-full-content"]
  placeholder-def Placeholder_CalendarContent
```

## Block SubLayout_DirectoryDetailScreen (flow SubLayout)
- public: False
- input parameters: HideActions: Boolean
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): ComunityBusinessDetails_Block, HouseholdDetails_Block, OneSchoolGlobalDetails_Block, OneSchoolGlobalEventDetail, SupperMeeting_DetailsBlock

#### Widget tree
```
container  [style="directory-detail-screen"]
  placeholder-def Placeholder_DetailCard
  placeholder-def Placeholder_CallToAction
  placeholder-def Placeholder_Content
```

## Block SubLayout_DirectoryDetailScreen_Section (flow SubLayout)
- public: False
- input parameters: In_Title: Text (mandatory); In_PaddingTop: UBT_Size Identifier = Entities.UBT_Size.Small; In_PaddingBottom: UBT_Size Identifier = Entities.UBT_Size.Small
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): ContactUsDetails, HouseholdDetails_Members_Block, HouseholdRelations_Block, Household_GalleryCard_List, OneSchoolGlobalDetails_Block, OneSchoolGlobalEventDetail, SupperMeeting_DetailsBlock

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base, TopSizeId: In_PaddingTop, BottomSizeId: In_PaddingBottom } }
  placeholder Content:
    block SubLayout_Section (UBTConnectLibrary.Layouts)
      placeholder Title:
        if In_Title <> ""
          block CustomText (UBTConnectLibrary.BasePatterns)
            args: In_Text=In_Title, In_TextOptions={ FontWeight: Entities.UBT_FontWeight.SemiBold }
      placeholder Content:
        placeholder-def Placeholder_SectionContent
```
