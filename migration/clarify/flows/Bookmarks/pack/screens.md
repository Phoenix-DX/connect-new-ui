# Pack of UI flow Bookmarks (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: Bookmarks

## Screen Bookmarks (flow Bookmarks)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: HeaderIsScrolled: Boolean; BookmarkPills: Tag List; Bookmarks_Filter: Bookmark_Filter; HasFiltersApplied: Boolean; Filter_BottomSheetId: Text; BottomSheetId_Filter_IsLoaded: Boolean; BottomSheetId_Filter_ShowSubscription: Boolean; Filter_BookmarksDefaultState: Bookmark_Filter; Years: Text List; PageSize: Integer = 20; PageNumber: Integer = 1; MaxRecords: Long Integer; Bookmarks_List: UI_Bookmark_CardItem List; ResetPillsValue: Boolean = True; PillsLoaded: Boolean; Bookmarks_Loading: Boolean
- lifecycle: OnInitialize → ScreenEvent_OnInitialize; OnReady → ScreenEvent_OnReady

#### Data sources
- data action **GetBookmarks** fetch=OnDemand; outputs: Out_Bookmarks: UI_Bookmarks; OnAfterFetch → GetBookmarksOnAfterFetch
  ```
  call-server GetBookmarks(Filter_Bookmarks=Bookmarks_Filter, PageNumber=PageNumber, PageSize=PageSize)
  assign: Out_Bookmarks = GetBookmarks.Out_Bookmarks
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
    text: Bookmarks
  placeholder Placeholder_Header_Right:
    if HeaderIsScrolled
      block Icon (UBTConnectLibrary.ConnectPatterns)
        args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.Search
    block App_NotificationIcon (UBTConnect.App_Common_Blocks)
  placeholder Placeholder_Header_Input:
    block Input (UBTConnectLibrary.ConnectPatterns)
      args: In_Options={ SearchPrompt: "Search", BorderRadius: Entities.Shape.Rounded, EnableAutocompleteHTML: False }
  placeholder HeaderContent:
    block CustomContainer (UBTConnectLibrary.BasePatterns) #FilterPills
      args: ExtendedClasses="background-neutral-0", Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.ExtraSmall, HorizontalSizeId: Entities.UBT_Size.Base }, MarginSize: { TopSizeId: Entities.UBT_Size.Base }, DisplayOptions: {  } }
      placeholder Content:
        block Horizontal_Filter_TagList (UBTConnectLibrary.ConnectPatterns)
          args: In_IsSingleSelection=True, In_TagsLoading=not PillsLoaded and Bookmarks_Loading, In_TagToggleList=BookmarkPills
          on Changed → Handler_OnClickPill(UpdatedTagList=UpdatedTagList)
          placeholder Filter:
            block FilterSheet_Icon_Label (UBTConnect.App_CommonBlocks_Filter)
              args: BottomSheetId=Filter_BottomSheetId, HaveFiltersApplied=HasFiltersApplied, isLoaded=not Bookmarks_Loading, ShowSubscriptionOnClick=BottomSheetId_Filter_ShowSubscription
  placeholder Content:
    block Bookmarks_Card_List (UBTConnect.Bookmarks)
      args: In_Bookmarks=Bookmarks_List, In_IsLoading=Bookmarks_Loading, In_SearchString=Bookmarks_Filter.SearchText
      on OnClick_BookmarkCardItem → Handler_OnClickBookmarkCardItem(ObjectId=ObjectId, ObjectType=ObjectType)
      on Item_Unbookmarked → Handler_ItemUnbookmarked
      on OnLoadMore → Bookmarks_Card_ListOnLoadMore
  placeholder Bottom:
    block BottomBarMenu (UBTConnect.App_Common)
      args: ActiveItem=Entities.Connect_BottomBar_Items.Bookmarks
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
if False #HideInServiceStudio_BottomSheet  [DEAD BRANCH: condition is a constant]
else
  block Bookmarks_FilterSheet (UBTConnect.Bookmarks)
    args: In_FilterBookmarks=Bookmarks_Filter, In_YearsOptions=Years
    on Loaded → Handler_FilterSheetLoaded(ShowSubscriptionOnClick=ShowSubscriptionOnClick)
    on ApplyFilters → Handler_ApplyFilters(Event_Filter_Bookmarks=Event_Filter_Bookmarks, Event_HasFiltersApplied=Event_HasFiltersApplied)
    on SheetInilialized → Handler_FilterSheetSheetInilialized(SheetId=SheetId)
```

#### Screen actions
- **Bookmarks_Card_ListOnLoadMore**
  ```
  if not GetBookmarks.Out_Bookmarks.BookmarkCardItemList.Empty and \n(Bookmarks_List.Length < MaxRecords)
    assign: PageNumber = PageNumber + 1
    call Refresh_GetBookmarksData()
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **GetBookmarksOnAfterFetch**
  ```
  if PageNumber = 1
    assign: MaxRecords = GetBookmarks.Out_Bookmarks.Total
    assign: Bookmarks_List = GetBookmarks.Out_Bookmarks.BookmarkCardItemList
    if ResetPillsValue
      call Reset_PillsValues()
      [M1] assign: PillsLoaded = True; ResetPillsValue = False
      [M2] assign: Bookmarks_Loading = False
      end
    else
      → continues at [M1]
  else
    call ListAppendAll(List=Bookmarks_List, SourceList=GetBookmarks.Out_Bookmarks.BookmarkCardItemList) as ListAppendBookmarks
    → continues at [M2]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_ApplyFilters** inputs: Event_Filter_Bookmarks: Bookmark_Filter (mandatory); Event_HasFiltersApplied: Boolean (mandatory)
  ```
  assign: Bookmarks_Filter.SortByNewest = Event_Filter_Bookmarks.SortByNewest; Bookmarks_Filter.Years = Event_Filter_Bookmarks.Years
  assign: HasFiltersApplied = Event_HasFiltersApplied
  call Refresh_GetBookmarksData()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_FilterSheetLoaded** inputs: ShowSubscriptionOnClick: Boolean (mandatory)
  ```
  assign: BottomSheetId_Filter_IsLoaded = True
  assign: BottomSheetId_Filter_ShowSubscription = ShowSubscriptionOnClick
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_FilterSheetSheetInilialized** inputs: SheetId: Text (mandatory)
  ```
  assign: Filter_BottomSheetId = SheetId
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_ItemUnbookmarked**
  ```
  call Refresh_GetBookmarksData()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnClickBookmarkCardItem** inputs: ObjectId: Text (mandatory); ObjectType: BookmarkCategory Identifier (mandatory); locals: HouseholdIdList: CarouselPreloadedHouseholds; PreloadedCarousel: PreloadedCarousel
  ```
  switch
    case ObjectType = Entities.BookmarkCategory.FeedItem (FeedItem)
      end
    case ObjectType = Entities.BookmarkCategory.AssembleEvent (Assemble)
      end
    case ObjectType = Entities.BookmarkCategory.Interchange (Interchange)
      end
    case ObjectType = Entities.BookmarkCategory.LDMEvent (LDM)
      end
    case ObjectType = Entities.BookmarkCategory.Locality (Locality)
      end
    case ObjectType = Entities.BookmarkCategory.LocalityContact (Locality Contact)
      end
    case ObjectType = Entities.BookmarkCategory.Member (Member)
      end
    case ObjectType = Entities.BookmarkCategory.OneSchoolGlobal2 (OneSchoool Global)
      if ObjectType = Entities.BookmarkCategory.OneSchoolGlobal2
        assign: PreloadedCarousel.CarouselItemIds = ConvertList(Bookmarks_List,  {Value:"ItemId"})
        call SetPreloadObject(Preload=ToObject(PreloadedCarousel)) as SetPreloadObject3
        navigate → OneSchoolGlobalCarousel(In_StartingObjectId=TextToLongInteger(ObjectId)) transition=Inherited
      else
        navigate → OneSchoolGlobalDetails(In_OneSchoolGlobalId=TextToLongInteger(ObjectId)) transition=Inherited
    case ObjectType = Entities.BookmarkCategory.OrbitEvent (Orbit)
      end
    case ObjectType = Entities.BookmarkCategory.PersonalEvent (Personal Event)
      end
    case ObjectType = Entities.BookmarkCategory.SupperMeeting (Suppermeeting)
      navigate → SupperMeeting_Details(In_SubdivsionId=TextToLongInteger(ObjectId)) transition=Inherited
    case ObjectType = Entities.BookmarkCategory.Update (Update)
      end
    case ObjectType = Entities.BookmarkCategory.Household
      if Bookmarks_Filter.BookmarkCategoryId = Entities.BookmarkCategory.Household
        assign: HouseholdIdList.CarouselHouseholdItem = ConvertList(Bookmarks_List,  {Household:"ItemId"})
        call SetPreloadObject(Preload=ToObject(HouseholdIdList))
        navigate → HouseholdCarousel(In_StartingHouseholdId=TextToLongInteger(ObjectId)) transition=Inherited
      else
        navigate → HouseholdDetails(HouseholdId=TextToLongInteger(ObjectId)) transition=Inherited
    otherwise
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
    end
    end
    end
    end
    end
    end
    end
    end
  ```
- **Handler_OnClickPill** inputs: UpdatedTagList: Tag List (mandatory)
  ```
  call ListFilter(Condition=IsSelected, SourceList=UpdatedTagList) as ListFilterPillsBySelected
  assign: Bookmarks_Filter.BookmarkCategoryId = TextToIdentifier(ListFilterPillsBySelected.FilteredList.Current.Identifier)
  assign: PageNumber = 1
  assign: ResetPillsValue = False
  call Refresh_GetBookmarksData()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnHeaderScrolled** inputs: Event_IsHeaderScrolled: Boolean (mandatory)
  ```
  assign: HeaderIsScrolled = Event_IsHeaderScrolled
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Refresh_GetBookmarksData**
  ```
  assign: Bookmarks_Loading = True
  refresh data GetBookmarks
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Reset_PillsValues**
  ```
  call GetBookmarks_Pills(In_SelectedPillId=Bookmarks_Filter.BookmarkCategoryId)
  call ListClear(List=BookmarkPills)
  call ListAppendAll(List=BookmarkPills, SourceList=GetBookmarks_Pills.Out_Pills)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  javascript CheckRestored() → FromCache2: Boolean; FromHistory2: Boolean; FromCache: Boolean; FromHistory: Boolean
    | $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    | //$parameters.FromHistory = $public.Navigation.navigatedFromHistory();
  if CheckRestored.FromCache2 or CheckRestored.FromHistory2
    assign: PageNumber = 1
    end
  else
    if BookmarkPills.Empty
      call SkeletonLoader_Pills()
      [M1] if Bookmarks_List.Empty
        call SkeletonLoader_Bookmarks()
        [M2] call GetBookmarks_FilterYear()
        call ListClear(List=Years)
        assign: Years = GetBookmarks_FilterYear.Out_Years
        end
      else
        → continues at [M2]
    else
      → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **ScreenEvent_OnReady**
  ```
  call Reset_PillsValues()
  call Refresh_GetBookmarksData()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **SkeletonLoader_Bookmarks**
  ```
  call ListAppend(Element={ Bookmark_Card_Content: { Title: "Dumyy Dummy Dummy Dummy", Subtitle: "Dummy Dummy" } }, List=Bookmarks_List)
  call ListAppend(Element={ Bookmark_Card_Content: { Title: "Dumyy size", Subtitle: "Dumyy size" } }, List=Bookmarks_List) as ListAppend2
  call ListAppend(Element={ Bookmark_Card_Content: { Title: "Dumyy size", Subtitle: "Dumyy size" } }, List=Bookmarks_List) as ListAppend3
  call ListAppend(Element={ Bookmark_Card_Content: { Title: "Dumyy size", Subtitle: "Dumyy size" } }, List=Bookmarks_List) as ListAppend4
  call ListAppend(Element={ Bookmark_Card_Content: { Title: "Dumyy size", Subtitle: "Dumyy size" } }, List=Bookmarks_List) as ListAppend5
  call ListAppend(Element={ Bookmark_Card_Content: { Title: "Dumyy size", Subtitle: "Dumyy size" } }, List=Bookmarks_List) as ListAppend6
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **SkeletonLoader_Pills**
  ```
  call ListAppend(Element={ Text: "All", Identifier: "All", IsSelected: False }, List=BookmarkPills)
  call ListAppend(Element={ Text: "Dumyy size", Identifier: "Dumyy size", IsSelected: False }, List=BookmarkPills) as ListAppend2
  call ListAppend(Element={ Text: "Dumyy size", Identifier: "Dumyy size", IsSelected: False }, List=BookmarkPills) as ListAppend3
  call ListAppend(Element={ Text: "Dumyy size", Identifier: "Dumyy size", IsSelected: False }, List=BookmarkPills) as ListAppend4
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
