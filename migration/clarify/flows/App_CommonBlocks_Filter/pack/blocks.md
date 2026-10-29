# Pack of UI flow App_CommonBlocks_Filter (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: FilterSheet, FilterSheet_Icon, FilterSheet_Icon_Label, FilterSheet_OptionChoice_Item, FilterSheet_OptionList_Item, MoreActionSheet, SortSheet
Blocks of other UBTConnect flows that the flow uses (transitive): 2

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

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| CacheControl_UserInfo_Wrapper | App_Cache | `../../_shared/pack/blocks.md` | - | Result |
| Notifications_ConfirmDialog | App_Notifications | `../../App_Notifications/pack/blocks.md` | IsSingle: Boolean (mandatory) | Cancel; Confirm |
