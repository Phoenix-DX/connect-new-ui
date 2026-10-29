# Pack of UI flow Directory_Updates (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: Updates_SingleList

## Screen Updates_SingleList (flow Directory_Updates)
- roles: Registered, UBTOne_User; URL structure: QueryString; stylesheet: yes
- input parameters: -
- local variables: Filter_UpdateTypeOptions: Tag List; Filter_BottomSheetId: Text; Filter_Updates: Filter_Updates; Filter_DefaultState: Filter_Updates; HasFiltersApplied: Boolean; ShowMarkAll: Boolean; DateRanges: UI_Updates_DateRange List; isLoading: Boolean; BottomSheetId_IsLoaded: Boolean; BottomSheetId_ShowSubscription: Boolean; Breakpoints: UI_UpdateItem_Breakpoint List; CurrentBreakpoint: UI_UpdateItem_Breakpoint; EventListener: Object; EventListenerTarget: Object; IsHeaderScrolled: Boolean; ShareableUpdateItem: UI_UpdateItem; IsShareOpen: Boolean; ShareableObjectId: Text; IsToggleSearch: Boolean; FocusedScrollAnchorId: Text; CurrentSearchString: Text
- lifecycle: OnInitialize → ScreenEvent_OnInitialize; OnReady → ScreenEvent_OnReady; OnDestroy → DestroyEventListener

#### Data sources
- data action **FetchUpdates** fetch=OnDemand; outputs: UI_UpdateItemList: UI_UpdateItem List; UnreadCount: Integer; OnAfterFetch → OnAfterFetch_FetchUpdates
  locals: index: Integer
  ```
  call-server Get_UI_UpdateItems(Filter_Updates=Filter_Updates)
  assign: UI_UpdateItemList = Get_UI_UpdateItems.UI_UpdateItemList; UnreadCount = Get_UI_UpdateItems.UnreadCount
  end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] for each UI_UpdateItemList
      [DISABLED] assign: UI_UpdateItemList.Current.Date = AddDays(CurrDate(), -1*index); index = index + 1
      → continues at <node@4571,6171>
    end for
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
block Layout_MainPages_FixedTitle (UBTConnectLibrary.Layouts)
  args: isGrayBackground=True
  on OnHeaderScrolled → Handler_OnHeaderScrolled(Event_IsHeaderScrolled=Event_IsHeaderScrolled)
  placeholder Placeholder_Header_Title:
    if IsToggleSearch #If_IsSearchToggled_Input
      if IsHeaderScrolled #If_IsHeaderScrolled_Search
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: ExtendedClasses="full-width", Options={ DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_AlignItems.Center, FlexDirection: Entities.UBT_FlexDirection.Row } }
          placeholder Content:
            block Icon (UBTConnectLibrary.ConnectPatterns)
              args: In_ColorId=Entities.UBT_Color.Neutral0, In_ExtendedClasses="margin-right-s", In_IconId=Entities.UBT_Icons2.ArrowLeftAlt, In_SizeId=Entities.UBT_IconsSize.Base_24
              on Click → Handler_ToggleSearch
            block Input (UBTConnectLibrary.ConnectPatterns) #Search_PostScroll
              args: In_Options={ InitalString: CurrentSearchString, SearchPrompt: "Search updates", Debounce_DelayMS: 300, BorderRadius: Entities.Shape.Rounded, EnableAutocompleteHTML: False, IsSyncValueWithInput: True }
              on Event_ClearString → Handler_FilterSearchText(Text="")
              on Event_OnChange → Handler_OnChangeSearchInput(Event_CurrentString=Event_CurrentString)
              on Event_Submit → Handler_FilterSearchText(Text=Event_SubmittedString)
      else
        text: Updates
    else
      text: Updates
  placeholder Placeholder_Header_Right:
    if IsHeaderScrolled #If_IsHeaderScrolled_Icons
      if IsToggleSearch #If_IsSearchToggled_Icon
      else
        block Icon (UBTConnectLibrary.ConnectPatterns) #Icon_Search
          args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.Search, In_SizeId=Entities.UBT_IconsSize.Base_24
          on Click → Handler_ToggleSearch
      block FilterSheet_Icon (UBTConnect.App_CommonBlocks_Filter) #Icon_FilterSheet_PostScroll
        args: BottomSheetId=Filter_BottomSheetId, HaveFiltersApplied=HasFiltersApplied, isLoaded=BottomSheetId_IsLoaded, ShowSubscriptionOnClick=BottomSheetId_ShowSubscription
    block App_NotificationIcon (UBTConnect.App_Common_Blocks)
  placeholder Placeholder_Header_Input:
    block Input (UBTConnectLibrary.ConnectPatterns) #Search_PreScroll
      args: In_Options={ InitalString: CurrentSearchString, SearchPrompt: "Search updates", Debounce_DelayMS: 300, BorderRadius: Entities.Shape.Rounded, EnableAutocompleteHTML: False, IsSyncValueWithInput: True }
      on Event_OnChange → Handler_OnChangeSearchInput(Event_CurrentString=Event_CurrentString, In_IsToggleSearch=True)
      on Event_ClearString → Handler_FilterSearchText(Text="")
      on Event_Submit → Handler_FilterSearchText(Text=Event_SubmittedString)
  placeholder Placeholder_Header_Input_Icon:
    block FilterSheet_Icon (UBTConnect.App_CommonBlocks_Filter) #Icon_FilterSheet_PreScroll
      args: BottomSheetId=Filter_BottomSheetId, HaveFiltersApplied=HasFiltersApplied, isLoaded=BottomSheetId_IsLoaded, ShowSubscriptionOnClick=BottomSheetId_ShowSubscription
  placeholder HeaderContent:
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base }, MarginSize: { TopSizeId: Entities.U…
      placeholder Content:
        block HorizontalTagList (UBTConnectLibrary.ConnectPatterns)
          args: In_IsSingleSelection=True, In_TagToggleList=Filter_UpdateTypeOptions
          on Changed → OnChange_FilterType(UpdatedTagList=UpdatedTagList)
    block UpdateItem_Header (UBTConnect.Directory_Updates) #ListHeader
      args: BadgeNumber=CurrentBreakpoint.BadgeCount, isLoading=isLoading, ShowMarkAll=ShowMarkAll, Title=CurrentBreakpoint.SectionName
      on Click_MarkAll → Handler_MarkAllAsRead
  placeholder Content:
    if not isLoading and FetchUpdates.IsDataFetched and FetchUpdates.UI_UpdateItemList.Empty #If_HasNoUpdates
      block Updates_NoItemsFound (UBTConnect.Directory_Updates)
    else
      list source=FetchUpdates.UI_UpdateItemList mode=Default #List_Updates  [style="list list-group background-neutral-0 updates-list"; disable-virtualization=False]
        block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
          args: In_IsLoading=isLoading
          placeholder Placeholder_LoadingSection:
            container  [style="updates-list__list-item"; data-plus-date=FetchUpdates.UI_UpdateItemList.Current.Date]
              if FetchUpdates.UI_UpdateItemList.CurrentRowNumber <> 0
                block SectionHeader (UBTConnect.Directory_Updates)
                  args: In_Breakpoints=Breakpoints, In_CurrentUpdateDate=FetchUpdates.UI_UpdateItemList.Current.Date, In_IsAscending=Filter_Updates.Sort_ByNewest <> Entities.Choice.Yes, In_IsLoading=isLoading, In_PreviousUpdateDate=FetchUpdates.UI_UpdateItemList[FetchUpdates.UI_UpdateItemList.CurrentRowNumber - 1].Date, In_SiblingId=UpdateItem.Id
                  on Event_UpdateListHeader → SectionHeaderEvent_UpdateListHeader(Event_Breakpoint=Event_Breakpoint)
              block Update_ListItem (UBTConnectLibrary.ConnectCorePatterns) #UpdateItem
                args: In_BirthType=FetchUpdates.UI_UpdateItemList.Current.BirthType, In_Date=FetchUpdates.UI_UpdateItemList.Current.Date, In_HasShare=FetchUpdates.UI_UpdateItemList.Current.HasShare, In_InitialsList=[ { Gender: FetchUpdates.UI_UpdateItemList.Current.GenderId } ], In_IsRead=FetchUpdates.UI_UpdateItemList.Current.IsRead, In_Location=FetchUpdates.UI_UpdateItemList.Current.LocationString, In_Name=FetchUpdates.UI_UpdateItemList.Current.Name, In_ParentsNames=FetchUpdates.UI_UpdateItemList.Current.ParentsNames, In_Type_UpdateFeedItem=FetchUpdates.UI_UpdateItemList.Current.UpdateItemTypeId, PaddingSizeId={ GeneralSizeId: Entities.UBT_Size.Base }, ShowImage=False
                on Event_Share → Handler_OnShare(UpdateItemId=FetchUpdates.UI_UpdateItemList.Current.UpdateItemId)
                on Event_MarkAsRead → Handler_MarkAsRead(CurrentPosition=FetchUpdates.UI_UpdateItemList.CurrentRowNumber, UpdateItemId=FetchUpdates.UI_UpdateItemList.Current.UpdateItemId)
                on Event_MarkAsUnread → Handler_MarkAsUnread(CurrentPosition=FetchUpdates.UI_UpdateItemList.CurrentRowNumber, UpdateItemId=FetchUpdates.UI_UpdateItemList.Current.UpdateItemId)
                on OnClick → Handler_OnClickUpdateItem(In_CurrentItemIndex=FetchUpdates.UI_UpdateItemList.CurrentRowNumber)
              block ScrollAnchor (NavigationHandler.ScrollAnchors)
                args: Id=FetchUpdates.UI_UpdateItemList.Current.UpdateItemId
  placeholder Bottom:
    block BottomBarMenu (UBTConnect.App_Common)
      args: ActiveItem=Entities.Connect_BottomBar_Items.Updates, isRootPage=True
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
if False #HideInServiceStudio_BottomSheet  [DEAD BRANCH: condition is a constant]
else
  block Directory_Updates_FilterSheet (UBTConnect.Directory_Updates)
    args: In_FilterUpdates=Filter_Updates
    on ApplyFilters → Handler_ApplyFilters(Event_Filter_Updates=Filter_Updates, Event_HasFiltersApplied=HasFiltersApplied)
    on SheetInitialized → Handler_FilterSheetSheetInitialized(SheetId=SheetId)
    on Loaded → Handler_FilterSheetLoaded(ShowSubscriptionOnClick=ShowSubscriptionOnClick)
if False #HideInServiceStudio_ShareSheet  [DEAD BRANCH: condition is a constant]
else
  block ShareSheet (UBTConnect_Utils.CW_Share)
    args: In_IsOpen=IsShareOpen, In_ShareableObjectId=ShareableObjectId, In_ShareObjectTypeId=Entities.Type_ShareObject.Update, In_UpdateDate=ShareableUpdateItem.Date, In_UpdateType=ShareableUpdateItem.UpdateItemTypeId
    on Event_ClosedShareSheet → Handler_CloseShareSheet
    placeholder Placeholder_ShareableObject:
      block Update_ListItem (UBTConnectLibrary.ConnectCorePatterns)
        args: HasBorderBottom=False, IgnoreReadBackground=True, In_BirthType=ShareableUpdateItem.BirthType, In_Date=ShareableUpdateItem.Date, In_InitialsList=[ { Gender: ShareableUpdateItem.GenderId } ], In_IsRead=False, In_Location=ShareableUpdateItem.LocationString, In_Name=ShareableUpdateItem.Name, In_ParentsNames=ShareableUpdateItem.ParentsNames, In_Type_UpdateFeedItem=ShareableUpdateItem.UpdateItemTypeId, IsEnabled=False, ShowImage=False
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
- **Handler_ApplyFilters** inputs: Event_Filter_Updates: Filter_Updates (mandatory); Event_HasFiltersApplied: Boolean (mandatory)
  ```
  if (No changes?) Event_Filter_Updates = Filter_Updates
    end
  else
    assign (Setup Variables): Filter_Updates = Event_Filter_Updates; HasFiltersApplied = Event_HasFiltersApplied
    assign: ShowMarkAll = False
    call ScrollTop()
    assign (isLoading): isLoading = True
    call RefreshUpdates()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_CloseShareSheet**
  ```
  assign: IsShareOpen = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_FilterSearchText** inputs: Text: Text (mandatory)
  ```
  assign: CurrentSearchString = Text
  if Text = Filter_Updates.Filter_SearchText
    end
  else
    assign (Set Text Filter): Filter_Updates.Filter_SearchText = Text
    assign: ShowMarkAll = False
    call ScrollTop()
    assign (isLoading): isLoading = True
    call RefreshUpdates()
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
  call Directory_Updates_MarkAllAsRead(In_UI_UpdateItemList=FetchUpdates.UI_UpdateItemList)
  assign (Set Read List): FetchUpdates.UI_UpdateItemList = Directory_Updates_MarkAllAsRead.Out_UI_UpdateItemList
  call SetBadgeCountsToZero()
  assign: isLoading = False
  call Directory_Updates_RefreshBottomBarCount(ForceRefresh=True)
  call RefreshUpdates()
  end
  on exception All Exceptions (log=True)
  assign: isLoading = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_MarkAsRead** inputs: UpdateItemId: UpdateItem Identifier (mandatory); CurrentPosition: Integer (mandatory)
  ```
  call-server Action_UI_UpdateItem_MarkAsRead(UpdateItemId=UpdateItemId)
  assign (Set IsRead to True): FetchUpdates.UI_UpdateItemList[CurrentPosition].IsRead = True
  call RefreshUpdatesAndFlags(CurrentPosition=CurrentPosition)
  call Directory_Updates_RefreshBottomBarCount(ForceRefresh=True)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_MarkAsUnread** inputs: UpdateItemId: UpdateItem Identifier (mandatory); CurrentPosition: Integer (mandatory)
  ```
  call-server Action_UI_UpdateItem_MarkAsUnread(UpdateItemId=UpdateItemId)
  assign (Set IsRead to False ): FetchUpdates.UI_UpdateItemList[CurrentPosition].IsRead = False
  call RefreshUpdatesAndFlags(CurrentPosition=CurrentPosition)
  call Directory_Updates_RefreshBottomBarCount(ForceRefresh=True)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
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
- **Handler_OnClickUpdateItem** inputs: In_CurrentItemIndex: Integer (mandatory); locals: CarouselPreloadedHouseholds: CarouselPreloadedHouseholds; TargetHouseholdId: Long Integer
  ```
  call Handler_MarkAsRead(CurrentPosition=In_CurrentItemIndex, UpdateItemId=FetchUpdates.UI_UpdateItemList[In_CurrentItemIndex].UpdateItemId)
  javascript CaptureScrollPosition(In_AnchorId=FetchUpdates.UI_UpdateItemList[In_CurrentItemIndex].UpdateItemId)
    | (function (anchorId) {
    |   var container = document.querySelector('.active-screen.screen-container');
    |   if (!container) return;
    | 
    |   var el = container.querySelector('[data-dx-scroll-anchor-id="' + anchorId + '"]');
    |   if (!el) return;
    | 
    |   var delta = el.getBoundingClientRect().top - container.getBoundingClientRect().top;
    | 
    |   localStorage.setItem('scrollAnchorId', anchorId);
    |   localStorage.setItem('scrollAnchorDelta', delta.toString());
    | })($parameters.In_AnchorId);
  call RememberFocusedScrollAnchor(ListIndex=In_CurrentItemIndex, ListWidgetId=List_Updates.Id, ScrollAnchorId=FetchUpdates.UI_UpdateItemList[In_CurrentItemIndex].UpdateItemId)
  assign: FocusedScrollAnchorId = FetchUpdates.UI_UpdateItemList[In_CurrentItemIndex].UpdateItemId
  assign (Set Local IsRead): FetchUpdates.UI_UpdateItemList[In_CurrentItemIndex].IsRead = True
  call ScreenModel_Flush()
  call GetHasCarouselEnabled()
  if GetHasCarouselEnabled.HasCarouselEnabled
    assign: TargetHouseholdId = FetchUpdates.UI_UpdateItemList[In_CurrentItemIndex].HouseholdId
    call ListFilter(Condition=HasAccess, SourceList=FetchUpdates.UI_UpdateItemList) as ListFilter_HasAccess
    call Directory_Updates_GetCarouselPreloadedHouseholds(In_ParametersList=ConvertList(ListFilter_HasAccess.FilteredList,  {HouseholdId:"HouseholdId",IsRead:"IsRead","Updates_CarouselSwipeCallbackParameters.UpdateItemId":"UpdateItemId"}))
    assign (Set Carousel Preload): CarouselPreloadedHouseholds.CarouselHouseholdItem = Directory_Updates_GetCarouselPreloadedHouseholds.Out_CarouselPreloadedHouseholds.CarouselHouseholdItem
    call SetPreloadObject(Preload=ToObject(CarouselPreloadedHouseholds))
    navigate → HouseholdCarousel(In_StartingHouseholdId=TargetHouseholdId) transition=Inherited
  else
    navigate → HouseholdDetails(HouseholdId=FetchUpdates.UI_UpdateItemList[In_CurrentItemIndex].HouseholdId) transition=Inherited
  ```
- **Handler_OnHeaderScrolled** inputs: Event_IsHeaderScrolled: Boolean (mandatory)
  ```
  assign: IsHeaderScrolled = Event_IsHeaderScrolled
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnShare** inputs: UpdateItemId: UpdateItem Identifier (mandatory)
  ```
  if (Has extended share?) GetHasExtendedShare()
    assign: ShareableUpdateItem = FetchUpdates.UI_UpdateItemList.Current; IsShareOpen = True; ShareableObjectId = FetchUpdates.UI_UpdateItemList.Current.MemberId
    end
  else
    call ShowComingSoonMessage()
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
- **OnAfterFetch_FetchUpdates**; locals: EmptyBreakpoint: UI_UpdateItem_Breakpoint
  ```
  call Directory_Updates_GetBreakpoints(DateRanges=DateRanges, UI_UpdateItemList=FetchUpdates.UI_UpdateItemList)
  assign (Set Breakpoints): Breakpoints = Directory_Updates_GetBreakpoints.Breakpoints
  if (Has Breakpoints?) not Directory_Updates_GetBreakpoints.Breakpoints.Empty
    assign: CurrentBreakpoint = Breakpoints[0]
    [M1] assign: ShowMarkAll = FetchUpdates.UnreadCount > 0
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
  call Directory_Updates_AugmentDateRanges(DateRangeList=GetDateRanges.DateRangesList)
  assign: DateRanges = Directory_Updates_AugmentDateRanges.DateRanges
  call SetDefaultFilters()
  call RefreshUpdates()
  end
  on exception All Exceptions (log=True)
  assign: isLoading = False
  raise BubbleGenericException: AllExceptions.ExceptionMessage
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnChange_FilterType** inputs: UpdatedTagList: Tag List (mandatory)
  ```
  call ListFilter(Condition=IsSelected, SourceList=UpdatedTagList) as ListFilter_GetSelected
  if (Already Selected?) ListFilter_GetSelected.FilteredList.Current.Identifier = Filter_Updates.Filter_UpdateTypeId
    end
  else
    assign: ShowMarkAll = False
    assign (Set  new Filter): Filter_Updates.Filter_UpdateTypeId = TextToIdentifier(ListFilter_GetSelected.FilteredList.Current.Identifier)
    [M1] for each Filter_UpdateTypeOptions
      assign: Filter_UpdateTypeOptions.Current.IsSelected = Filter_UpdateTypeOptions.Current.Identifier = ListFilter_GetSelected.FilteredList.Current.Identifier
      → continues at [M1]
    end for
    call ScrollTop()
    assign (isLoading): isLoading = True
    call RefreshUpdates()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **RefreshUpdates**
  ```
  refresh data FetchUpdates
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **RefreshUpdatesAndFlags** inputs: CurrentPosition: Integer
  ```
  call Directory_Updates_GetUpdatedBreakpoints(Breakpoints=Breakpoints, DateRanges=DateRanges, SelectedPosition=CurrentPosition, UI_UpdateItemList=FetchUpdates.UI_UpdateItemList)
  assign (Update Breakpoints): Breakpoints = Directory_Updates_GetUpdatedBreakpoints.UpdatedBreakpoints
  if (Updating Current?) CurrentBreakpoint.SectionName = Directory_Updates_GetUpdatedBreakpoints.ChangedBreakpoint.SectionName
    call UpdateCurrentBreakpoint(Breakpoint=Directory_Updates_GetUpdatedBreakpoints.ChangedBreakpoint.SectionName)
    [M1] call SetMarkAllTag()
    end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**; locals: EntitiesCarousel_SwippedItems: EntitiesCarousel_SwippedItem List
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache
    call GetPreloadObject()
    if GetPreloadObject.Preload <> NullObject()
      call AssignFromObject(ObjectValue=GetPreloadObject.Preload, ToObjectRef=ToObject(EntitiesCarousel_SwippedItems))
      [M1] for each EntitiesCarousel_SwippedItems
        if EntitiesCarousel_SwippedItems.Current.ListPosition < FetchUpdates.UI_UpdateItemList.Length and\nEntitiesCarousel_SwippedItems.Current.EntityItemId = FetchUpdates.UI_UpdateItemList[EntitiesCarousel_SwippedItems.Current.ListPosition].UpdateItemId
          assign: FetchUpdates.UnreadCount = FetchUpdates.UnreadCount - 1; FetchUpdates.UI_UpdateItemList[EntitiesCarousel_SwippedItems.Current.ListPosition].IsRead = True
          call ListIndexOf(Condition=(FetchUpdates.UI_UpdateItemList[EntitiesCarousel_SwippedItems.Current.ListPosition].Date >= DateRange.From) and (FetchUpdates.UI_UpdateItemList[EntitiesCarousel_SwippedItems.Current.ListPosition].Dat…, List=Breakpoints)
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
    assign (Set Initial Breakpoint): CurrentBreakpoint.Position = 0; CurrentBreakpoint.SectionName = Entities.Updates_DateRanges.Today; CurrentBreakpoint.BadgeCount = 0
    call UpdateFilterTypesOptions()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **ScreenEvent_OnReady**
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
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
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache
    call JSUtils_Element_Operations_GetElementById(Id=List_Updates.Id)
    call ReactiveInstance_ForceUpdate(Element=JSUtils_Element_Operations_GetElementById.Element)
    call SetupScrollListener()
    call GetFocusedScrollAnchorOnBack()
    assign: FocusedScrollAnchorId = If(GetFocusedScrollAnchorOnBack.ScrollAnchorId <> "", FetchUpdates.UI_UpdateItemList.Current.UpdateItemId, FocusedScrollAnchorId)
    if FocusedScrollAnchorId <> ""
      javascript ScrollFix(In_AnchorId=FocusedScrollAnchorId)
        | (function (newAnchorId) {
        |   var anchorId = newAnchorId || localStorage.getItem('scrollAnchorId');
        |   var delta = parseFloat(localStorage.getItem('scrollAnchorDelta') || '0');
        |   if (!anchorId) return;
        | 
        |   var container = document.querySelector('.active-screen.screen-container');
        |   if (!container) return;
        | 
        |   var frames = 0, maxFrames = 180;
        | 
        |   function tryRestore() {
        |     var el = document.querySelector('[data-dx-scroll-anchor-id="' + anchorId + '"]');
        |     if (el) {
        |       var relativeTop = el.getBoundingClientRect().top - container.getBoundingClientRect().top;
        |       container.scrollTop = container.scrollTop + relativeTop - delta;
        |       localStorage.removeItem('scrollAnchorId');
        |       localStorage.removeItem('scrollAnchorDelta');
        |       return;
        |     }
        |     if (++frames < maxFrames) window.requestAnimationFrame(tryRestore);
        |   }
        |   window.requestAnimationFrame(tryRestore);
        | })($parameters.In_AnchorId);
      [M1] assign: FocusedScrollAnchorId = ""
      end
    else
      → continues at [M1]
  else
    assign (isLoading): isLoading = True
    call GetSkeletonList_UI_Updates(ListLength=10)
    assign (Setup Skeleton Data): FetchUpdates.UI_UpdateItemList = GetSkeletonList_UI_Updates.UI_UpdateItems
    refresh data GetDateRanges
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
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
        [M3] if (Needs Country Id?) Filter_Updates.CountryIds.Empty
          call ListAppend(Element=TextToIdentifier(Entities.Choice.None), List=Filter_Updates.CountryIds) as ListAppend_CountryId
          [M4] if (Needs Locality Id?) Filter_Updates.LocalitiesIds.Empty
            call ListAppend(Element=TextToIdentifier(Entities.Choice.None), List=Filter_Updates.LocalitiesIds) as ListAppend_LocalityId
            [M5] if (Needs Default State?) Filter_DefaultState.CountryIds.Empty
              assign (Set Default State): Filter_DefaultState = Filter_Updates
              end
            else
              end
          else
            → continues at [M5]
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
- **SetMarkAllTag**
  ```
  call ListFilter(Condition=not IsRead, SourceList=FetchUpdates.UI_UpdateItemList) as ListFilter_GetUnread
  assign: ShowMarkAll = not ListFilter_GetUnread.FilteredList.Empty
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **SetupScrollListener**
  ```
  if (delete this remove this) True
    javascript SetupScrollEndListener(In_TopElementId=ListHeader.Id)
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
  else
    json-serialize JSONSerialize_Breakpoints = Breakpoints (dates ISO)
    javascript SetupScrollListener(In_Breakpoints=JSONSerialize_Breakpoints.JSON, In_ListId=List_Updates.Id, In_UpdateItemClass=".ubt-update-item")
      | let attempt = 0;
      | const maxAttempts = 360;
      | 
      | function waitForList() {
      |     attempt++;
      | 
      |     const updateItem = document.getElementById($parameters.In_ListId)?.querySelector($parameters.In_UpdateItemClass);
      |     const breakpoints = JSON.parse($parameters.In_Breakpoints);
      | 
      |     if(updateItem && updateItem.offsetHeight !== 0 && Array.isArray(breakpoints) && breakpoints.length !== 0){
      |         $actions.SetupScrollThreshold();
      |     }else if(attempt < maxAttempts){
      |         requestAnimationFrame(waitForList);
      |         return;
      |     }
      | }
      | 
      | waitForList();
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **SetupScrollThreshold**
  ```
  json-serialize JSONSerialize_Breakpoints = Breakpoints (dates ISO)
  javascript SetupScrollThresholds(In_Breakpoints=JSONSerialize_Breakpoints.JSON, In_HeaderSearchClass=".header-top-search", In_ListId=List_Updates.Id, In_ScrollContainer=".active-screen.screen-container:has(.layout)", In_UpdateItemClass=".ubt-update-item") → Out_DestroyListener: Object; Out_DestroyListenerTarget: Object
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
- **UpdateFilterTypesOptions**
  ```
  if (Needs options?) Filter_UpdateTypeOptions.Empty
    call ListAppend(Element={ Text: "All", Identifier: NullTextIdentifier(), IsSelected: True }, List=Filter_UpdateTypeOptions) as ListAppend_All
    call ListAppend(Element={ Text: "Birth", Identifier: Entities.Connect_UpdateTypeId.Birth, IsSelected: False }, List=Filter_UpdateTypeOptions) as ListAppend_Birth
    call ListAppend(Element={ Text: "Marriage", Identifier: Entities.Connect_UpdateTypeId.Marriage, IsSelected: False }, List=Filter_UpdateTypeOptions) as ListAppend_Marriage
    call ListAppend(Element={ Text: "Taken", Identifier: Entities.Connect_UpdateTypeId.Taken, IsSelected: False }, List=Filter_UpdateTypeOptions) as ListAppend_Taken
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
