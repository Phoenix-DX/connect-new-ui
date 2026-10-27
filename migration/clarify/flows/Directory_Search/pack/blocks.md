# Pack of UI flow Directory_Search (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: ScreenBlock_Search, SearchResult_Section, SearchResults_Recent, Search_BirthdayOptions
Blocks of other UBTConnect flows that the flow uses (transitive): 21

## Block ScreenBlock_Search (flow Directory_Search)
- public: False
- input parameters: In_IsInScreenSearch: Boolean; In_IsEventNavigation: Boolean; In_SearchTargetId: Type_SearchTarget Identifier = Entities.Type_SearchTarget.Global
- events: Event_SearchResultClick(Event_SearchResult: SearchResult (mandatory))
- local variables: SearchKey_Current: Text; SearchKey_LastSearched: Text; HasSearched: Boolean; TagList: Tag List; SelectedCategory: Connect_SearchCategories Identifier = Entities.Connect_SearchCategories.All; SelectedCountryIds: Text List; IsLoading: Boolean; BottomSheetId_Filter: Text; HasFiltersApplied: Boolean; HasPeople: Boolean; HasHouseholds: Boolean; HasPlaces: Boolean; isBirthdayKeyWord: Boolean; isBirthdaySearchEnabled: Boolean; BottomSheetId_Filter_IsLoaded: Boolean; BottomSheetId_Filter_ShowSubscriptionOnClick: Boolean; RecentClickedResults: ConnectSearch_RecentClickedResults List; RecentClickedResults_Skeleton: ConnectSearch_RecentClickedResults List
- lifecycle: OnInitialize → ScreenEvent_OnInitialize; OnReady → ScreenEvent_OnReady
- used by (UBTConnect): Map, Search

#### Data sources
- data action **FetchSearchResults** fetch=OnDemand; outputs: Households: SearchResult List; People: SearchResult List; Places: SearchResult List; OnAfterFetch → OnAfterFetch_FetchSearchResults
  ```
  call-server Connect_Search(Category=SelectedCategory, CountryCode=If(SelectedCountryIds.Current = Entities.Choice.None, "", SelectedCountryIds.Current), SearchKey=SearchKey_Current)
  if (From Maps?) In_SearchTargetId = Entities.Type_SearchTarget.Map
    call-server ListFilter(Condition=DisplayHouseholdName and DisplayAddress, SourceList=Connect_Search.Households) as ListFilter_Households
    assign: Households = ListFilter_Households.FilteredList; People = Connect_Search.Members; Places = Connect_Search.Places
    end
  else
    assign: Households = Connect_Search.Households; People = Connect_Search.Members; Places = Connect_Search.Places
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- data action **Get_FilteredRecentClickedResults** fetch=OnDemand; outputs: Out_RecentClickedResults: ConnectSearch_RecentClickedResults List; Out_IdsToRemove: ConnectSearch_RecentClickedResults Identifier List
  ```
  [M1] for each RecentClickedResults
    if Out_RecentClickedResults.Length >= 5
      → continues at [M1]
    else
      if (Is household or member?) RecentClickedResults.Current.EntityType = Entities.Connect_Entity.Member or \nRecentClickedResults.Current.EntityType  = Entities.Connect_Entity.Household
        call-server Get_SearchResultsVisibilityStatus(In_MemberId=RecentClickedResults.Current.EntityId)
        if Get_SearchResultsVisibilityStatus.Out_IsHouseholdVisible
          call-server ListAppend(Element=RecentClickedResults.Current, List=Out_RecentClickedResults) as ListAppend2
          [M2] assign (<<): 
          [M3] assign (<<): 
          → continues at [M1]
        else
          call-server ListAppend(Element=RecentClickedResults.Current.Id, List=Out_IdsToRemove) as ListAppend3
          → continues at [M2]
      else
        call-server ListAppend(Element=RecentClickedResults.Current, List=Out_RecentClickedResults)
        → continues at [M3]
  end for
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- aggregate **Get_RecentClickedResults** fetch=AtStart max=100: sources[ConnectSearch_RecentClickedResults] filter[ConnectSearch_RecentClickedResults.UserId = GetUserId() and SelectedCategory = Entities.Connect_SearchCategories.All or \n\n(SelectedCategory = Entities.Connect_SearchCategories.Households and ConnectSearch_RecentClickedResults.EntityType = Entities.Connect_Entity.Household) or \n\n(SelectedCategory = Entities.Connect_SearchCategories.People and ConnectSear… and SearchKey_Current = "" or \nConnectSearch_RecentClickedResults.Name like "%"+SearchKey_Current+"%" or\nConnectSearch_RecentClickedResults.AdditionalInformation like "%"+SearchKey_Current+"%" or\nConnectSearch_RecentClickedResults.Location like "%"+SearchKey_Current+"%" and ConnectSearch_RecentClickedResults.SearchTargetId = In_SearchTargetId or\n(\n    ConnectSearch_RecentClickedResults.SearchTargetId = Entities.Type_SearchTarget.Global and\n    ConnectSearch_RecentClickedResults.SearchTargetId = NullTextIdentifier()\n)] sort[ConnectSearch_RecentClickedResults.SearchedOn Descending]; OnAfterFetch → Get_RecentClickedResultsOnAfterFetch
- aggregate **Get_RecentSearchTerms** fetch=AtStart max=10: sources[ConnectSearch_RecentSearchTerm] filter[ConnectSearch_RecentSearchTerm.UserId = GetUserId() and SearchKey_Current = "" or \nConnectSearch_RecentSearchTerm.SearchedTerm like "%"+SearchKey_Current+"%"\n and ConnectSearch_RecentSearchTerm.SearchedTerm <> SearchKey_LastSearched and ConnectSearch_RecentSearchTerm.SearchTargetId = In_SearchTargetId or\n(\n    ConnectSearch_RecentSearchTerm.SearchTargetId = Entities.Type_SearchTarget.Global and\n    ConnectSearch_RecentSearchTerm.SearchTargetId = NullTextIdentifier()\n)] sort[ConnectSearch_RecentSearchTerm.SearchedOn Descending]
- aggregate **Get_SearchBirthdayOptions** fetch=OnDemand max=50: 

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  args: In_InitializeNavigationHandler=not In_IsInScreenSearch
  placeholder Placeholder_Header_Title:
    block Input (UBTConnectLibrary.ConnectPatterns)
      args: In_Options={ InitalString: SearchKey_Current, SearchPrompt: "Search for households, members or places.", Debounce_DelayMS: 300, BorderRadius: Entities.Shape.Rounded, FocusOnReady: True }
      on Event_ClearString → InputEvent_ClearString
      on Event_Submit → InputEvent_Submit(Event_SubmittedString=Event_SubmittedString)
      on Event_OnChange → InputEvent_OnChange(Event_CurrentString=Event_CurrentString)
  placeholder Placeholder_Header_Right:
    block FilterSheet_Icon (UBTConnect.App_CommonBlocks_Filter)
      args: BottomSheetId=BottomSheetId_Filter, HaveFiltersApplied=HasFiltersApplied, isLoaded=BottomSheetId_Filter_IsLoaded, ShowSubscriptionOnClick=BottomSheetId_Filter_ShowSubscriptionOnClick
  placeholder HeaderContent:
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small } }
      placeholder Content:
        block HorizontalTagList (UBTConnectLibrary.ConnectPatterns)
          args: In_HorizontalPadding=Entities.UBT_Size.Base, In_IsMandatorySelection=True, In_IsSingleSelection=True, In_TagToggleList=TagList
          on Changed → Event_HorizontalTagListChanged(UpdatedTagList=UpdatedTagList)
  placeholder Content:
    if not HasSearched or \n//Also show recent search in case user is changing the search key and we have results\n(SearchKey_Current <> SearchKey_LastSearched) #ShowRecentSearches
      block SectionSeparator (UBTConnect.App_Common_Blocks)
      if (not Get_FilteredRecentClickedResults.Out_RecentClickedResults.Empty or not Get_RecentSearchTerms.List.Empty) and not (isBirthdaySearchEnabled and isBirthdayKeyWord) #HasResultsAndNotBirthday
        block CustomContainer (UBTConnectLibrary.BasePatterns) #RecentSearch
          args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base } }
          placeholder Content:
            if not Get_FilteredRecentClickedResults.Out_RecentClickedResults.Empty or\nnot Get_RecentSearchTerms.List.Empty #HasRecentItems
              block CustomContainer (UBTConnectLibrary.BasePatterns)
                args: Options={ PaddingSize: { BottomSizeId: Entities.UBT_Size.Small } }
                placeholder Content:
                  block Columns_Two (UBTConnectLibrary.BasePatterns)
                    placeholder Left:
                      block CustomText (UBTConnectLibrary.BasePatterns)
                        args: In_Text="Recent search", In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
                    placeholder Right:
                      if not Get_FilteredRecentClickedResults.Out_RecentClickedResults.Empty or not Get_RecentSearchTerms.List.Empty
                        container
                          block CustomText (UBTConnectLibrary.BasePatterns)
                            args: In_Text="Clear all", In_TextOptions={ Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
                            on Clicked → OnClick_RecentSearch_RemoveAll
              block CustomContainer (UBTConnectLibrary.BasePatterns) #Recent_SearchResults
                args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small } }
                placeholder Content:
                  block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
                    args: In_IsLoading=not Get_FilteredRecentClickedResults.IsDataFetched
                    placeholder Placeholder_LoadingSection:
                      list source=RecentClickedResults mode=Default  [style="list list-group recent-search-list"; disable-virtualization=True]
                        container  [style="recent-search-item overflow-wrap-anywhere"; on onclick → Event_SectionOnItemClick(IsRecentResult=True, SearchResult=ConvertRecord(RecentClickedResults.Current,  {Id:"EntityId",HouseholderId:"HouseholderId",Name:"Name",AdditionalInformation:"AdditionalInformation",Location:"Location",Type:"EntityType",Latitude:"Lat…)]
                          block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                            args: EntityId=RecentClickedResults.Current.EntityId, EntityType=RecentClickedResults.Current.EntityType, ImageSize={ Height: Entities.UBT_ImageSize.ExtraSmall_32, Width: If(RecentClickedResults.Current.EntityType = Entities.Connect_Entity.Member,Entities.UBT_ImageSize.Square, NullTextIdentifier()) }, In_BorderRadius=Entities.UBT_Shape.Soft, In_ForceLoadingState=not Get_FilteredRecentClickedResults.IsDataFetched
                          block CustomText (UBTConnectLibrary.BasePatterns)
                            args: In_Text=RecentClickedResults.Current.Name, In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
              list source=Get_RecentSearchTerms.List mode=Default #Recent_SearchTerms  [style="list list-group"]
                block CustomContainer (UBTConnectLibrary.BasePatterns)
                  args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color: Entities.UBT_Color.Neutral3, Size: { BottomSizeId: Entities.UBT_Size.Small } } }
                  placeholder Content:
                    block Columns_Two (UBTConnectLibrary.BasePatterns)
                      args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast, VerticalAlign: Entities.UBT_VerticalAlign.Center }
                      placeholder Left:
                        block IconText (UBTConnectLibrary.ConnectPatterns)
                          args: SpacingSize=Entities.UBT_Size.Small, Text=Get_RecentSearchTerms.List.Current.ConnectSearch_RecentSearchTerm.SearchedTerm, TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular, IsOverflowEllipsis: True }
                          on Clicked → OnClick_RecentSearchTerm(Term=Get_RecentSearchTerms.List.Current.ConnectSearch_RecentSearchTerm.SearchedTerm)
                          placeholder Icon:
                            block Icon (UBTConnectLibrary.ConnectPatterns)
                              args: In_ColorId=Entities.UBT_Color.Neutral9, In_IconId=Entities.UBT_Icons2.History, In_SizeId=Entities.UBT_IconsSize.Base_24
                      placeholder Right:
                        block Icon (UBTConnectLibrary.ConnectPatterns)
                          args: In_ColorId=Entities.UBT_Color.Neutral7, In_IconId=Entities.UBT_Icons2.Close, In_SizeId=Entities.UBT_IconsSize.Base_24
                          on Click → OnClick_RecentSearchTerm_Remove
            else
              block CustomText (UBTConnectLibrary.BasePatterns)
                args: In_PaddingOptions={ VerticalSizeId: Entities.UBT_Size.Base }, In_Text=If(HasSearched,"No recent results to show","Please search for a Household, Member or a Place to get started."), In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.ExtraSmall }
      if isBirthdaySearchEnabled and isBirthdayKeyWord #isBirthday
        block CustomContainer (UBTConnectLibrary.BasePatterns) #Padding
          args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base } }
          placeholder Content:
            block Search_BirthdayOptions (UBTConnect.Directory_Search)
              args: BirthdayOptions=ConvertList(Get_SearchBirthdayOptions.List,  {})
              on Selected → OnClick_RecentSearchTerm(Term=KeyWord)
    if HasSearched #HasSubmittedSearched
      if SearchKey_Current <> SearchKey_LastSearched #StartedDifferentSearch
        block SectionSeparator (UBTConnect.App_Common_Blocks)
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base } }
          placeholder Content:
            block CustomText (UBTConnectLibrary.BasePatterns)
              args: FitContent=True, In_PaddingOptions={ VerticalSizeId: Entities.UBT_Size.Base }, In_Text="Showing results for ", In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.ExtraSmall }
            block CustomText (UBTConnectLibrary.BasePatterns)
              args: FitContent=True, In_PaddingOptions={ VerticalSizeId: Entities.UBT_Size.Base }, In_Text="'"+SearchKey_LastSearched+"':", In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
      block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
        args: In_IsLoading=IsLoading
        placeholder Placeholder_LoadingSection:
          if HasPlaces or IsLoading\nand (SelectedCategory = NullTextIdentifier() or SelectedCategory = Entities.Connect_SearchCategories.All or SelectedCategory = Entities.Connect_SearchCategories.Places) #HasPlaces_
            block SearchResult_Section (UBTConnect.Directory_Search) #PlacesSection
              args: HideSeparator=SearchKey_Current <> SearchKey_LastSearched, Items=FetchSearchResults.Places, SearchTerm=SearchKey_Current, Type=Entities.Connect_SearchCategories.Places
              on OnItemClick → Event_SectionOnItemClick(SearchResult=SearchResult)
          if HasHouseholds or IsLoading #HasHouseholds_
            block SearchResult_Section (UBTConnect.Directory_Search) #HouseholdsSection
              args: HideSeparator=SearchKey_Current <> SearchKey_LastSearched and FetchSearchResults.Places.Empty, Items=FetchSearchResults.Households, SearchTerm=SearchKey_Current, Type=Entities.Connect_SearchCategories.Households
              on OnItemClick → Event_SectionOnItemClick(SearchResult=SearchResult)
          if HasPeople or IsLoading #HasPeople_
            block SearchResult_Section (UBTConnect.Directory_Search) #MembersSection
              args: HideSeparator=SearchKey_Current <> SearchKey_LastSearched and FetchSearchResults.Places.Empty and FetchSearchResults.Households.Empty, Items=FetchSearchResults.People, SearchTerm=SearchKey_Current, Type=Entities.Connect_SearchCategories.People
              on OnItemClick → Event_SectionOnItemClick(SearchResult=SearchResult)
          if not HasPeople and not HasHouseholds and not HasPlaces and not IsLoading #EmptyState
            if SearchKey_Current = SearchKey_LastSearched #ShowSeparator
              block SectionSeparator (UBTConnect.App_Common_Blocks)
            block CustomContainer (UBTConnectLibrary.BasePatterns) #NoResults
              args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base } }
              placeholder Content:
                block CustomContainer (UBTConnectLibrary.BasePatterns)
                  args: Options={ PaddingSize: { TopSizeId: Entities.UBT_Size.Base, BottomSizeId: Entities.UBT_Size.Small } }
                  placeholder Content:
                    container
                      block CustomText (UBTConnectLibrary.BasePatterns)
                        args: FitContent=True, In_Text="We’re sorry. We were not able to find a match.\nTry another search?", In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
                block CustomText (UBTConnectLibrary.BasePatterns)
                  args: In_PaddingOptions={ VerticalSizeId: Entities.UBT_Size.Base }, In_Text="• Check for typos and spelling errors.\n• Try more general keywords.\n• Try different keywords.", In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }
  placeholder Bottom:
    if In_IsInScreenSearch
    else
      block BottomBarMenu (UBTConnect.App_Common)
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
if False #HideInServiceStudio_BottomSheets  [DEAD BRANCH: condition is a constant]
else
  block FilterSheet (UBTConnect.App_CommonBlocks_Filter)
    args: In_Options={ HasSorting: { Enable: False }, HasCountries: { Enable: True }, HasLocalities: { Enable: False } }, In_StartFilter={  }
    on ApplyFilters → Event_ApplyFilters(hasFilterApplied=hasFitlerApplied, OptionChoice_Control=OptionChoice_Control, OptionList_Control=OptionList_Control, SortBy_Title=SortBy_Title, SubState_Countries=SubState_Countries, SubState_Localities=SubState_Localities)
    on SheetInitialized → Event_FilterBottomSheet_tInitialized(SheetId=SheetId)
    on Loaded → Handler_FilterSheetLoaded(ShowSubscriptionOnClick=ShowSubscriptionOnClick)
```

#### Block actions
- **Action_ClearResults**
  ```
  refresh data Get_RecentClickedResults max=5
  refresh data Get_RecentSearchTerms max=10
  call ListClear(List=FetchSearchResults.Places) as ListClear_Places
  call ListClear(List=FetchSearchResults.Households) as ListClear_Households
  call ListClear(List=FetchSearchResults.People) as ListClear_People
  assign: HasSearched = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_RefreshSearch**; locals: LoadingList: SearchResult List
  ```
  if (Has Search Term) Trim(SearchKey_Current) <> ""
    aggregate CheckIfSearchtermAlreadyExist max=1: sources[ConnectSearch_RecentSearchTerm] filter[ConnectSearch_RecentSearchTerm.UserId = GetUserId() and Trim(ConnectSearch_RecentSearchTerm.SearchedTerm) = Trim(SearchKey_Current)  and ConnectSearch_RecentSearchTerm.SearchTargetId = In_SearchTargetId or\n(\n    ConnectSearch_RecentSearchTerm.SearchTargetId = Entities.Type_SearchTarget.Global and\n    ConnectSearch_RecentSearchTerm.SearchTargetId = NullTextIdentifier()\n)] sort[ConnectSearch_RecentSearchTerm.SearchedTerm Ascending]
    assign: CheckIfSearchtermAlreadyExist.List.Current.ConnectSearch_RecentSearchTerm.UserId = GetUserId(); CheckIfSearchtermAlreadyExist.List.Current.ConnectSearch_RecentSearchTerm.SearchedTerm = Trim(SearchKey_Current) ; CheckIfSearchtermAlreadyExist.List.Current.ConnectSearch_RecentSearchTerm.SearchedOn = CurrDateTime(); CheckIfSearchtermAlreadyExist.List.Current.ConnectSearch_RecentSearchTerm.SearchTargetId = In_SearchTargetId
    call CreateOrUpdateConnectSearch_RecentSearchTerm(Source=CheckIfSearchtermAlreadyExist.List.Current)
    call Action_ClearResults()
    assign: HasSearched = True; SearchKey_LastSearched = SearchKey_Current
    assign: IsLoading = True
    call ListAppend(Element={ Name: "Loading Name", AdditionalInformation: "Name", Location: "Loading Location", Type: Entities.Connect_Entity.Household }, List=LoadingList)
    call ListAppend(Element={ Name: "Loading Name", AdditionalInformation: "Name", Location: "Loading Location", Type: Entities.Connect_Entity.Household }, List=LoadingList) as ListAppend2
    call ListAppend(Element={ Name: "Loading Name", AdditionalInformation: "Name", Location: "Loading Location", Type: Entities.Connect_Entity.Household }, List=LoadingList) as ListAppend3
    if (Places) SelectedCategory = Entities.Connect_SearchCategories.All or SelectedCategory = Entities.Connect_SearchCategories.Places
      call ListAppendAll(List=FetchSearchResults.Places, SourceList=LoadingList) as LoadingPlaces
      [M1] if (Households) SelectedCategory = Entities.Connect_SearchCategories.All or SelectedCategory = Entities.Connect_SearchCategories.Households
        call ListAppendAll(List=FetchSearchResults.Households, SourceList=LoadingList) as LoadingHouseholds
        [M2] if (People) SelectedCategory = Entities.Connect_SearchCategories.All or SelectedCategory = Entities.Connect_SearchCategories.People
          [M3] for each LoadingList
            assign: LoadingList.Current.Type = Entities.Connect_Entity.Member
            → continues at [M3]
          end for
          call ListAppendAll(List=FetchSearchResults.People, SourceList=LoadingList) as LoadingPeople
          [M4] refresh data FetchSearchResults
          end
        else
          → continues at [M4]
      else
        → continues at [M2]
    else
      → continues at [M1]
  else
    end
  on exception All Exceptions (log=True)
  call Action_ClearResults() as Action_ClearResults2
  assign: IsLoading = False
  raise BubbleGenericException: AllExceptions.ExceptionMessage
  on exception BubbleCommunicationException (log=True)
  call Action_ClearResults() as Action_ClearResults3
  assign: IsLoading = False
  raise BubbleCommunicationException: BubbleCommunicationException.ExceptionMessage
  on exception Not Registered (log=True)
  raise Not Registered: NotRegistered.ExceptionMessage
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Event_ApplyFilters** inputs: OptionList_Control: Filter_Common_Control_List List (mandatory); OptionChoice_Control: Filter_Common_Control_Choice List (mandatory); SubState_Localities: Text (mandatory); SubState_Countries: Text (mandatory); SortBy_Title: Text (mandatory); hasFilterApplied: Boolean (mandatory)
  ```
  call ListFilter(Condition=Title = SubState_Countries, SourceList=OptionList_Control) as Countries
  assign: SelectedCountryIds = Countries.FilteredList.Current.SelectedIds; HasFiltersApplied = hasFilterApplied
  call Action_RefreshSearch()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_FilterBottomSheet_tInitialized** inputs: SheetId: Text (mandatory)
  ```
  assign: BottomSheetId_Filter = SheetId
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_HorizontalTagListChanged** inputs: UpdatedTagList: Tag List (mandatory)
  ```
  call ListFilter(Condition=IsSelected, SourceList=UpdatedTagList)
  assign: SelectedCategory = TextToIdentifier(ListFilter.FilteredList.Current.Identifier); TagList = UpdatedTagList
  refresh data Get_RecentClickedResults max=5
  call Action_RefreshSearch()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_SectionOnItemClick** inputs: SearchResult: SearchResult (mandatory); IsRecentResult: Boolean; locals: SourceListList: HouseholdId, RecordDisabled Record List; HouseholdIdList: CarouselPreloadedHouseholds
  ```
  if SearchResult.RecordDisabled
    call App_Subscription_ShowUpgradePopUp()
    end
  else
    aggregate GetConnectSearchRecentClickedResultsByUserId max=1: sources[ConnectSearch_RecentClickedResults] filter[ConnectSearch_RecentClickedResults.UserId = GetUserId() and ConnectSearch_RecentClickedResults.EntityId = SearchResult.Id and ConnectSearch_RecentClickedResults.EntityType = SearchResult.Type and ConnectSearch_RecentClickedResults.SearchTargetId = In_SearchTargetId or\n(\n    ConnectSearch_RecentClickedResults.SearchTargetId = Entities.Type_SearchTarget.Global and\n    ConnectSearch_RecentClickedResults.SearchTargetId = NullTextIdentifier()\n)] sort[ConnectSearch_RecentClickedResults.Name Ascending]
    assign: GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.UserId = GetUserId(); GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.EntityId = SearchResult.Id; GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.EntityType = SearchResult.Type; GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.HouseholderId = SearchResult.HouseholderId; GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.Name = SearchResult.Name; GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.AdditionalInformation = SearchResult.AdditionalInformation; GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.Location = SearchResult.Location; GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.SearchedOn = CurrDateTime(); GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.Latitude = SearchResult.Latitude; GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.Longitude = SearchResult.Longitude; GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.SearchTargetId = In_SearchTargetId
    call CreateOrUpdateConnectSearch_RecentClickedResults(Source=GetConnectSearchRecentClickedResultsByUserId.List.Current)
    aggregate AllRecenctClickedResults max=None: sources[ConnectSearch_RecentClickedResults] filter[ConnectSearch_RecentClickedResults.UserId = GetUserId() and ConnectSearch_RecentClickedResults.EntityType = SearchResult.Type and ConnectSearch_RecentClickedResults.SearchTargetId = In_SearchTargetId or\n(\n    ConnectSearch_RecentClickedResults.SearchTargetId = Entities.Type_SearchTarget.Global and\n    ConnectSearch_RecentClickedResults.SearchTargetId = NullTextIdentifier()\n)] sort[ConnectSearch_RecentClickedResults.SearchedOn Descending]
    if AllRecenctClickedResults.List.Length > Client.Search_RecenctClickedResultsLimit
      [M1] for each AllRecenctClickedResults.List StartIndex=Client.Search_RecenctClickedResultsLimit 
        call DeleteConnectSearch_RecentClickedResults(Id=AllRecenctClickedResults.List.Current.ConnectSearch_RecentClickedResults.Id)
        → continues at [M1]
      end for
      [M2] if In_IsEventNavigation
        trigger event Event_SearchResultClick(Event_SearchResult=SearchResult)
        end
      else
        if SearchResult.Type = Entities.Connect_Entity.Locality
          navigate → Locality_Details(LocalityId=TextToInteger(SearchResult.Id)) transition=Inherited
        else
          if IsRecentResult
            aggregate GetAllSearchRecentClickedResultsByUserId max=None: sources[ConnectSearch_RecentClickedResults] filter[ConnectSearch_RecentClickedResults.UserId = GetUserId() and ConnectSearch_RecentClickedResults.EntityType = SearchResult.Type and ConnectSearch_RecentClickedResults.SearchTargetId = In_SearchTargetId or\n(\n    ConnectSearch_RecentClickedResults.SearchTargetId = Entities.Type_SearchTarget.Global and\n    ConnectSearch_RecentClickedResults.SearchTargetId = NullTextIdentifier()\n)] sort[ConnectSearch_RecentClickedResults.SearchedOn Descending]
            assign: SourceListList = ConvertList(GetAllSearchRecentClickedResultsByUserId.List,  {HouseholdId:"TextToLongInteger(ConnectSearch_RecentClickedResults.HouseholderId)",RecordDisabled:"False"})
            [M3] call GetHasCarouselEnabled()
            if GetHasCarouselEnabled.HasCarouselEnabled
              call ListFilter(Condition=not RecordDisabled, SourceList=SourceListList) as ListFilter_AvailableHouseholds
              assign: HouseholdIdList.CarouselHouseholdItem = ConvertList(ListFilter_AvailableHouseholds.FilteredList,  {Household:"HouseholdId"})
              call ListDistinct(SourceList=HouseholdIdList.CarouselHouseholdItem)
              assign: HouseholdIdList.CarouselHouseholdItem = ListDistinct.DistinctList
              call SetPreloadObject(Preload=ToObject(HouseholdIdList))
              navigate → HouseholdCarousel(In_StartingHouseholdId=TextToInteger(SearchResult.HouseholderId)) transition=Inherited
            else
              navigate → HouseholdDetails(HouseholdId=TextToInteger(SearchResult.HouseholderId)) transition=Inherited
          else
            switch
              case SearchResult.Type = Entities.Connect_Entity.Member (Member?)
                assign: SourceListList = ConvertList(FetchSearchResults.People,  {HouseholdId:"TextToLongInteger(HouseholderId)",RecordDisabled:"RecordDisabled"})
                [M4] assign: 
                → continues at [M3]
              case SearchResult.Type = Entities.Connect_Entity.Household (Household?)
                assign (SourceListList): SourceListList = ConvertList(FetchSearchResults.Households,  {HouseholdId:"TextToLongInteger(Id)",RecordDisabled:"RecordDisabled"})
                → continues at [M4]
              case SearchResult.Type = Entities.Connect_Entity.Locality
              otherwise
                end
    else
      → continues at [M2]
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **Get_RecentClickedResultsOnAfterFetch**
  ```
  assign: RecentClickedResults = ConvertList(Get_RecentClickedResults.List,  {})
  if Get_FilteredRecentClickedResults.IsDataFetched
    end
  else
    refresh data Get_FilteredRecentClickedResults
    [M1] for each Get_FilteredRecentClickedResults.Out_IdsToRemove
      call DeleteConnectSearch_RecentClickedResults(Id=RecentClickedResults.Current.Id)
      → continues at [M1]
    end for
    assign: RecentClickedResults = Get_FilteredRecentClickedResults.Out_RecentClickedResults
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_FilterSheetLoaded** inputs: ShowSubscriptionOnClick: Boolean (mandatory)
  ```
  assign: BottomSheetId_Filter_IsLoaded = True; BottomSheetId_Filter_ShowSubscriptionOnClick = ShowSubscriptionOnClick
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **InputEvent_ClearString**
  ```
  assign: SearchKey_Current = ""; SearchKey_LastSearched = ""
  call Action_ClearResults()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **InputEvent_OnChange** inputs: Event_CurrentString: Text (mandatory)
  ```
  assign: SearchKey_Current = Event_CurrentString; isBirthdayKeyWord = Index(SearchKey_Current,"birthday",startIndex:,searchFromEnd:,ignoreCase:True) <> -1
  refresh data Get_RecentClickedResults max=5
  refresh data Get_RecentSearchTerms max=10
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **InputEvent_Submit** inputs: Event_SubmittedString: Text (mandatory)
  ```
  assign: SearchKey_Current = Event_SubmittedString
  call ValidateSearchPhoneNumber(Search=SearchKey_Current)
  if ValidateSearchPhoneNumber.IsValid
    call Action_RefreshSearch()
    end
  else
    call FeedbackMessage_AutoClose(Message=ValidateSearchPhoneNumber.ErrorMessage, MessageType=Entities.UBT_MessageType.Error)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnAfterFetch_FetchSearchResults**
  ```
  assign: IsLoading = False; HasPeople = not FetchSearchResults.People.Empty\nand (SelectedCategory = NullTextIdentifier() or SelectedCategory = Entities.Connect_SearchCategories.All or SelectedCategory = Entities.Connect_SearchCategories.People); HasHouseholds = not FetchSearchResults.Households.Empty\nand (SelectedCategory = NullTextIdentifier() or SelectedCategory = Entities.Connect_SearchCategories.All or SelectedCategory = Entities.Connect_SearchCategories.Households); HasPlaces = not FetchSearchResults.Places.Empty\nand (SelectedCategory = NullTextIdentifier() or SelectedCategory = Entities.Connect_SearchCategories.All or SelectedCategory = Entities.Connect_SearchCategories.Places)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_RecentSearch_RemoveAll**
  ```
  aggregate GetConnectSearchRecentSearchTermsByUserId max=None: sources[ConnectSearch_RecentSearchTerm] filter[ConnectSearch_RecentSearchTerm.UserId = GetUserId() and ConnectSearch_RecentSearchTerm.SearchTargetId = In_SearchTargetId or\n(\n    ConnectSearch_RecentSearchTerm.SearchTargetId = Entities.Type_SearchTarget.Global and\n    ConnectSearch_RecentSearchTerm.SearchTargetId = NullTextIdentifier()\n)]
  [M1] for each GetConnectSearchRecentSearchTermsByUserId.List
    call DeleteConnectSearch_RecentSearchTerm(Id=GetConnectSearchRecentSearchTermsByUserId.List.Current.ConnectSearch_RecentSearchTerm.Id)
    → continues at [M1]
  end for
  aggregate GetConnectSearchRecentClickedResultsByUserId max=None: sources[ConnectSearch_RecentClickedResults] filter[ConnectSearch_RecentClickedResults.UserId = GetUserId() and ConnectSearch_RecentClickedResults.SearchTargetId = In_SearchTargetId or\n(\n    ConnectSearch_RecentClickedResults.SearchTargetId = Entities.Type_SearchTarget.Global and\n    ConnectSearch_RecentClickedResults.SearchTargetId = NullTextIdentifier()\n)]
  [M2] for each GetConnectSearchRecentClickedResultsByUserId.List
    call DeleteConnectSearch_RecentClickedResults(Id=GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.Id)
    → continues at [M2]
  end for
  refresh data Get_RecentSearchTerms max=10
  refresh data Get_RecentClickedResults max=5
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_RecentSearchTerm** inputs: Term: Text (mandatory)
  ```
  assign: SearchKey_Current = Term
  call Action_RefreshSearch()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_RecentSearchTerm_Remove**
  ```
  call DeleteConnectSearch_RecentSearchTerm(Id=Get_RecentSearchTerms.List.Current.ConnectSearch_RecentSearchTerm.Id)
  refresh data Get_RecentSearchTerms max=10
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  if TagList.Empty
    call SearchCategory_GetList()
    assign: TagList = ConvertList(SearchCategory_GetList.SearchCategoryItemsList,  {Text:"Label",Identifier:"SearchCategoryId",IconId:"UBTIcon",IsSelected:"SearchCategoryId = SelectedCategory"})
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnReady**
  ```
  assign: isBirthdaySearchEnabled = Connect_OutSystems_PermissionCheck(Entities.OutSystems_FF.C2EnableSearchByBirthday)
  if isBirthdaySearchEnabled
    refresh data Get_SearchBirthdayOptions max=50
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Search_BirthdayOptions (flow Directory_Search)
- public: False
- input parameters: BirthdayOptions: Connect_SearchBirthdayOptions List (mandatory)
- events: Selected(KeyWord: Text (mandatory)) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): ScreenBlock_Search

#### Widget tree
```
list source=BirthdayOptions mode=Default  [style="list list-group"]
  block CustomContainer (UBTConnectLibrary.BasePatterns)
    args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color: Entities.UBT_Color.Neutral3, Size: { BottomSizeId: Entities.UBT_Size.Small } } }
    placeholder Content:
      block IconText (UBTConnectLibrary.ConnectPatterns)
        args: SpacingSize=Entities.UBT_Size.Base, Text=BirthdayOptions.Current.SearchName
        on Clicked → Selected(KeyWord=BirthdayOptions.Current.SearchName)
        placeholder Icon:
          block Icon (UBTConnectLibrary.ConnectPatterns)
            args: In_IconId=Entities.UBT_Icons2.Calendar
```

## Block SearchResult_Section (flow Directory_Search)
- public: False
- input parameters: Type: Text (mandatory); Items: SearchResult List; HideSeparator: Boolean; SearchTerm: Text (mandatory)
- events: OnItemClick(SearchResult: SearchResult (mandatory)) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): ScreenBlock_Search

#### Widget tree
```
if HideSeparator #HideSeparator_
else
  block SectionSeparator (UBTConnect.App_Common_Blocks)
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base, TopSizeId: If(HideSeparator, NullTextIdentifier(),Entities.UBT_Size.Base), BottomSizeId: Entities.UBT_Size.Base } }
  placeholder Content:
    block Columns_Two (UBTConnectLibrary.BasePatterns)
      args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast, VerticalAlign: Entities.UBT_VerticalAlign.Center }
      placeholder Left:
        block CustomText (UBTConnectLibrary.BasePatterns)
          args: In_PaddingOptions={ BottomSizeId: Entities.UBT_Size.Small }, In_Text=Type, In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Bold }
      placeholder Right:
        container
          block CustomText (UBTConnectLibrary.BasePatterns)
            args: In_PaddingOptions={ BottomSizeId: Entities.UBT_Size.Small }, In_Text=Items.Length+" Results", In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular }
    list source=Items mode=Default  [style="list list-group"]
      block SearchResult_Item (UBTConnect_Utils.CW_Search)
        args: In_SearchResult=Items.Current, In_SearchTerm=SearchTerm
        on OnClick → OnItemClick(SearchResult=SearchResult)
```

## Block SearchResults_Recent (flow Directory_Search)
- public: False
- input parameters: In_RecentSearchTerms: ConnectSearch_RecentSearchTerm List (mandatory); In_RecentClickedResults: ConnectSearch_RecentClickedResults List (mandatory); In_HasSearched: Boolean (mandatory)
- events: Event_RecentSearchResult_Clicked(Event_RecentClickedResult: ConnectSearch_RecentClickedResults (mandatory)) mandatory; Event_RecentSearchTerm_Clicked(Event_RecentSearchTerm: ConnectSearch_RecentSearchTerm (mandatory)) mandatory; Event_RecentSearchTerm_Remove(Event_RecentSearchTerm: ConnectSearch_RecentSearchTerm (mandatory)) mandatory; Event_RecentSearchTermRemoveAll() mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): nothing in this module

#### Widget tree
```
block SectionSeparator (UBTConnect.App_Common_Blocks)
block CustomContainer (UBTConnectLibrary.BasePatterns) #RecentSearch
  args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base } }
  placeholder Content:
    if not (In_RecentClickedResults.Empty and In_RecentSearchTerms.Empty) #HasRecentItems
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ PaddingSize: { BottomSizeId: Entities.UBT_Size.Small } }
        placeholder Content:
          block Columns_Two (UBTConnectLibrary.BasePatterns)
            placeholder Left:
              block CustomText (UBTConnectLibrary.BasePatterns)
                args: In_Text="Recent search", In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
            placeholder Right:
              if not In_RecentClickedResults.Empty or not In_RecentSearchTerms.Empty
                container
                  block CustomText (UBTConnectLibrary.BasePatterns)
                    args: In_Text="Clear all", In_TextOptions={ Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
                    on Clicked → Event_RecentSearchTermRemoveAll
      block CustomContainer (UBTConnectLibrary.BasePatterns) #Recent_SearchResults
        args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small } }
        placeholder Content:
          block Gallery (OutSystemsUI_2_23.Adaptive)
            args: ItemsGap=Entities.Space.ExtraSmall, RowItemsDesktop=5, RowItemsPhone=5, RowItemsTablet=5
            placeholder Content:
              list source=In_RecentClickedResults mode=Default  [style="list list-group"; disable-virtualization=True]
                container  [on onclick → Event_RecentSearchResult_Clicked(Event_RecentClickedResult=In_RecentClickedResults.Current)]
                  block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                    args: EntityId=In_RecentClickedResults.Current.EntityId, EntityType=In_RecentClickedResults.Current.EntityType, ImageSize={ Height: Entities.UBT_ImageSize.ExtraSmall_32, Width: If(In_RecentClickedResults.Current.EntityType = Entities.Connect_Entity.Member,Entities.UBT_ImageSize.Square, NullTextIdentifier()) }, In_BorderRadius=Entities.UBT_Shape.Soft
                  block CustomText (UBTConnectLibrary.BasePatterns)
                    args: In_Text=In_RecentClickedResults.Current.Name, In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
      list source=In_RecentSearchTerms mode=Default #Recent_SearchTerms  [style="list list-group"]
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color: Entities.UBT_Color.Neutral3, Size: { BottomSizeId: Entities.UBT_Size.Small } } }
          placeholder Content:
            block Columns_Two (UBTConnectLibrary.BasePatterns)
              args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast, VerticalAlign: Entities.UBT_VerticalAlign.Center }
              placeholder Left:
                block IconText (UBTConnectLibrary.ConnectPatterns)
                  args: SpacingSize=Entities.UBT_Size.Small, Text=In_RecentSearchTerms.Current.SearchedTerm, TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular, IsOverflowEllipsis: True }
                  on Clicked → Event_RecentSearchTerm_Clicked(Event_RecentSearchTerm=In_RecentSearchTerms.Current)
                  placeholder Icon:
                    block Icon (UBTConnectLibrary.ConnectPatterns)
                      args: In_ColorId=Entities.UBT_Color.Neutral9, In_IconId=Entities.UBT_Icons2.History, In_SizeId=Entities.UBT_IconsSize.Base_24
              placeholder Right:
                block Icon (UBTConnectLibrary.ConnectPatterns)
                  args: In_ColorId=Entities.UBT_Color.Neutral7, In_IconId=Entities.UBT_Icons2.Close, In_SizeId=Entities.UBT_IconsSize.Base_24
    else
      block CustomText (UBTConnectLibrary.BasePatterns)
        args: In_PaddingOptions={ VerticalSizeId: Entities.UBT_Size.Base }, In_Text=If(In_HasSearched,"No recent results to show","Please search for a Household, Member or a Place to get started."), In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.ExtraSmall }
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
| FilterSheet | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | In_StartFilter: Filter_Common (mandatory); In_Options: Filter_Common_Options (mandatory); ExtendedClasses: Text | ApplyFilters; Loaded; SheetInitialized |
| FilterSheet_Icon | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | HaveFiltersApplied: Boolean (mandatory); BottomSheetId: Text (mandatory); isLoaded: Boolean (mandatory); ShowSubscriptionOnClick: Boolean (mandatory) | - |
| FilterSheet_OptionChoice_Item | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | Filter_Common_Control_Choice: Filter_Common_Control_Choice (mandatory) | OnChange |
| FilterSheet_OptionList_Item | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | Filter_Common_Control_List: Filter_Common_Control_List (mandatory); ShowHeader: Boolean (mandatory); ForceUpdate: Boolean | Event_Input_OnReady; OnBack; OnChange |
| HandleOnResumeOpenLink | Legacy_Share | `../../Legacy_Share/pack/blocks.md` | - | - |
| OfflineDataSyncEvents | App_Common | `../../App_Common/pack/blocks.md` | - | OnSyncComplete; OnSyncError; OnSyncStart |
| Policy_Checker | App_Policies | `../../App_Policies/pack/blocks.md` | - | - |
| SectionSeparator | App_Common_Blocks | `../../_shared/pack/blocks.md` | - | - |
| UnsupportedVersion | App_Common | `../../App_Common/pack/blocks.md` | In_ExtendedClass: Text; In_HideButton: Boolean | Event_NavigateToPlaystore |
| UnsupportedVersion_Browser | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Native | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_WebView | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Wrapper | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| WelcomeToConnect | App_Common | `../../App_Common/pack/blocks.md` | - | - |
