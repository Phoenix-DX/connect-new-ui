# Pack of UI flow Bookmarks (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: Bookmarks_Card_Item, Bookmarks_Card_List, Bookmarks_FilterSheet
Blocks of other UBTConnect flows that the flow uses (transitive): 23

## Block Bookmarks_Card_Item (flow Bookmarks)
- public: False
- input parameters: Bookmark_CardItem: UI_Bookmark_CardItem (mandatory); In_SearchString: Text (mandatory)
- events: Item_Unbookmarked() mandatory; OnClickCardItem() mandatory
- local variables: IsAddNote: Boolean
- lifecycle: none
- used by (UBTConnect): Bookmarks_Card_List

#### Widget tree
```
block ItemCard_WithNotes (UBTConnectLibrary.ConnectPatterns)
  args: AvatarImage={ URL: Bookmark_CardItem.Bookmark_Card_Content.SourceHeader.ImageURL, FallbackOptions: { Initials: Bookmark_CardItem.Bookmark_Card_Content.SourceHeader.Initials, IconId: Bookmark_CardItem.Bookmark_Ca…, In_ChannelLogo=Bookmark_CardItem.ChannelLogo, In_ChannelName=Bookmark_CardItem.ChannelName, In_Label=Bookmark_CardItem.Bookmark_Card_Content.SourceHeader.Label, In_PublishedAt=Bookmark_CardItem.PublishedAt, In_SearchString=In_SearchString, In_Subtitle=Bookmark_CardItem.Bookmark_Card_Content.Subtitle, In_Title=Bookmark_CardItem.Bookmark_Card_Content.Title, In_TotalNotes=Bookmark_CardItem.Bookmark_Card_Content.Notes.Total
  on OnClickItemCard → OnClickCardItem
  on OnClickTotalNotesIcon → OpenNoteSheet
  placeholder Notes:
    if not Bookmark_CardItem.Bookmark_Card_Content.Notes.Note_Item_List.Empty #HasNotes
      block NoteListActions (UBTConnect_Utils.CW_Notes)
        args: In_ItemId=Bookmark_CardItem.ItemId, In_NoteCategoryId=Get_NoteCategoryId_ByBookmarkCategoryId(Bookmark_CardItem.BookmarkCategoryId)\n, In_ShowPreviewOnly=True, Notes=Bookmark_CardItem.Bookmark_Card_Content.Notes
        on On_NoteDeleted → Handler_OnNoteDeleted(NoteId=NoteId)
        on OnSaveEditNote → Handler_OnNotesChanged(New_Notes=Notes)
        on On_ShowAllNotesRequested → OpenNoteSheet
  placeholder Actions:
    block ItemCardActions (UBTConnect.App_Common_Blocks)
      args: ActionBarOptions={ ShowUnbookmark: True, ShowAddNote: True, ShowShare: False }, BookmarkType=Bookmark_CardItem.BookmarkCategoryId, ObjectId=Bookmark_CardItem.ItemId
      on Event_ItemUnbookmarked → Item_Unbookmarked
      on Event_AddNote → OpenNoteSheet
if False #HideInServiceStudio_BottomSheet  [DEAD BRANCH: condition is a constant]
else
  block NotesSheet (UBTConnect_Utils.CW_Notes)
    args: In_IsOpen=IsAddNote, In_ItemId=Bookmark_CardItem.ItemId, In_NoteCategoryId=Get_NoteCategoryId_ByBookmarkCategoryId(Bookmark_CardItem.BookmarkCategoryId), In_Notes=Bookmark_CardItem.Bookmark_Card_Content.Notes
    on On_NotesChanged → Handler_OnNotesChanged(New_Notes=New_Notes)
    on On_NoteDeleted → Handler_OnNoteDeleted(NoteId=NoteId)
    on On_NoteSheet_Closed → Handler_NoteSheet_Closed
```

#### Block actions
- **Handler_NoteSheet_Closed**
  ```
  assign: IsAddNote = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnNoteDeleted** inputs: NoteId: Long Integer (mandatory)
  ```
  call ListIndexOf(Condition=Id = NoteId, List=Bookmark_CardItem.Bookmark_Card_Content.Notes.Note_Item_List)
  if ListIndexOf.Position <> -1
    call ListRemove(List=Bookmark_CardItem.Bookmark_Card_Content.Notes.Note_Item_List, Position=ListIndexOf.Position)
    assign: Bookmark_CardItem.Bookmark_Card_Content.Notes.Total = Bookmark_CardItem.Bookmark_Card_Content.Notes.Note_Item_List.Length
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_OnNotesChanged** inputs: New_Notes: Notes (mandatory)
  ```
  assign: Bookmark_CardItem.Bookmark_Card_Content.Notes = New_Notes
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OpenNoteSheet**
  ```
  assign: IsAddNote = True
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Bookmarks_Card_List (flow Bookmarks)
- public: False
- input parameters: In_Bookmarks: UI_Bookmark_CardItem List; In_IsLoading: Boolean; In_SearchString: Text (mandatory)
- events: Item_Unbookmarked() mandatory; OnClick_BookmarkCardItem(ObjectId: Text (mandatory); ObjectType: BookmarkCategory Identifier (mandatory)) mandatory; OnLoadMore() mandatory
- local variables: -
- lifecycle: OnInitialize → OnInitialize; OnReady → OnReady
- used by (UBTConnect): Bookmarks

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base, TopSizeId: Entities.UBT_Size.Base } }
  placeholder Content:
    block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
      args: In_IsLoading=In_IsLoading
      placeholder Placeholder_LoadingSection:
        if In_Bookmarks.Empty #Empty
          block EmptyList (UBTConnectLibrary.ConnectPatterns)
            args: IconId=Entities.UBT_Icons2.Bookmark
            placeholder TitlePlaceholder:
              block CustomText (UBTConnectLibrary.BasePatterns)
                args: In_Text="No Bookmarks found", In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
            placeholder TextPlaceholder:
              block CustomText (UBTConnectLibrary.BasePatterns)
                args: In_Text="We were unable to find any Bookmarks to", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small }
              block CustomText (UBTConnectLibrary.BasePatterns)
                args: In_Text="display.", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small }
        else
          list source=In_Bookmarks mode=Default on scroll-ending → BookmarksCardList_OnScrollEnding  [style="list list-group list--gap-s"]
            block Bookmarks_Card_Item (UBTConnect.Bookmarks)
              args: Bookmark_CardItem=In_Bookmarks.Current, In_SearchString=In_SearchString
              on Item_Unbookmarked → Item_Unbookmarked
              on OnClickCardItem → OnClick_BookmarkCardItem(ObjectId=In_Bookmarks.Current.ItemId, ObjectType=In_Bookmarks.Current.BookmarkCategoryId)
```

#### Block actions
- **BookmarksCardList_OnScrollEnding**
  ```
  trigger event OnLoadMore()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  assign: 
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnReady**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Bookmarks_FilterSheet (flow Bookmarks)
- public: False
- input parameters: In_FilterBookmarks: Bookmark_Filter (mandatory); In_YearsOptions: Text List
- events: ApplyFilters(Event_Filter_Bookmarks: Bookmark_Filter (mandatory); Event_HasFiltersApplied: Boolean (mandatory)) mandatory; Loaded(ShowSubscriptionOnClick: Boolean (mandatory)) mandatory; SheetInilialized(SheetId: Text (mandatory)) mandatory
- local variables: Years_Extra_Option_FlatList: Filter_Common_Control_List List; FilterByYear_Title: Text = "Filter by year"
- lifecycle: OnInitialize → OnInitialize; OnParametersChanged → OnParametersChanged
- used by (UBTConnect): Bookmarks

#### Widget tree
```
block FilterSheet (UBTConnect.App_CommonBlocks_Filter)
  args: In_Options={ HasSorting: { Enable: True, YesLabel: "Newest to Oldest", NoLabel: "Oldest to Newest", Order: 1 }, Extra_OptionFlatLists: Years_Extra_Option_FlatList }, In_StartFilter={ Sort_ByNewest: In_FilterBookmarks.SortByNewest }
  on Loaded → Loaded(ShowSubscriptionOnClick=ShowSubscriptionOnClick)
  on SheetInitialized → SheetInilialized(SheetId=SheetId)
  on ApplyFilters → Handler_FilterSheetApplyFilters(hasFitlerApplied=hasFitlerApplied, OptionChoice_Control=OptionChoice_Control, OptionFlatList_Control=OptionFlatList_Control, SortBy_Title=SortBy_Title)
```

#### Block actions
- **Handler_FilterSheetApplyFilters** inputs: OptionChoice_Control: Filter_Common_Control_Choice List (mandatory); SortBy_Title: Text (mandatory); hasFitlerApplied: Boolean (mandatory); OptionFlatList_Control: Filter_Common_Control_List List (mandatory); locals: Filter_Bookmarks: Bookmark_Filter
  ```
  assign: Filter_Bookmarks = In_FilterBookmarks
  call ListFilter(Condition=Title = FilterByYear_Title, SourceList=OptionFlatList_Control) as Years
  assign: Filter_Bookmarks.Years = OptionFlatList_Control.Current.SelectedIds
  call ListFilter(Condition=Title = SortBy_Title, SourceList=OptionChoice_Control) as SortBy
  assign: Filter_Bookmarks.SortByNewest = TextToIdentifier(SortBy.FilteredList.Current.SelectedChoiceId)
  trigger event ApplyFilters(Event_Filter_Bookmarks=Filter_Bookmarks, Event_HasFiltersApplied=hasFitlerApplied)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Initialize_FilterYearOptions**; locals: Filter_year_list: Filter_Common_Control_List; SelectedYears: Text List; IsYearSelected: Boolean
  ```
  assign: SelectedYears = In_FilterBookmarks.Years
  call ListClear(List=Filter_year_list.In_Options) as ListClearYear_Extra_Option_FlatList
  [M1] for each In_YearsOptions
    assign: IsYearSelected = False
    [M2] for each SelectedYears
      if SelectedYears.Current = In_YearsOptions.Current
        assign: IsYearSelected = True
        → continues at [M2]
      else
        → continues at [M2]
    end for
    call ListAppend(Element={ Id: In_YearsOptions.Current, DisplayText: In_YearsOptions.Current, isSelected: IsYearSelected, isEnabled: True }, List=Filter_year_list.In_Options) as ListAppend_YearsOptions
    → continues at [M1]
  end for
  assign: Filter_year_list.Title = FilterByYear_Title; Filter_year_list.Order = 1; Filter_year_list.SelectedIds = In_FilterBookmarks.Years; Filter_year_list.SelectedNames = In_FilterBookmarks.Years
  call ListClear(List=Years_Extra_Option_FlatList) as ListClearYears
  call ListAppend(Element=Filter_year_list, List=Years_Extra_Option_FlatList)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  call Initialize_FilterYearOptions()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnParametersChanged**
  ```
  call Initialize_FilterYearOptions()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| App_IconBadge | App_Common_Blocks | `../../_shared/pack/blocks.md` | BadgeNumber: Long Integer (mandatory); MaxNotifications: Integer = 9; IconId: UBT_Icons2 Identifier (mandatory); IconColor: UBT_Color Identifier (mandatory); isLoading: Boolean (mandatory) | OnClick |
| App_NotificationIcon | App_Common_Blocks | `../../_shared/pack/blocks.md` | - | - |
| App_NotificationRefresh | App_Common_Blocks | `../../_shared/pack/blocks.md` | Datetime: Date Time (mandatory) | Updated |
| Block_PINUnlock | App_PIN | `../../App_PIN/pack/blocks.md` | In_ForceVisible: Boolean; In_IsCommonBlock: Boolean | Unlock |
| Block_PINUnlock_ContentWrapper | App_PIN | `../../App_PIN/pack/blocks.md` | UseOverlay: Boolean = True; In_ForceVisible: Boolean; UnlockText: Text = "Enter your PIN code"; ShowNeedHelp: Boolean; isFromMenu: Boolean; ShowForgotPIN: Boolean; ShowPolicy: Boolean (mandatory) | NavigateTo_PINRegister; Unlock |
| BottomBarContent | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| BottomBarMenu | App_Common | `../../App_Common/pack/blocks.md` | ActiveItem: Connect_BottomBar_Items Identifier; useMapsItems: Boolean; isHouseholder: Boolean; isRootPage: Boolean | BottomBar_Clicked |
| CacheControl_UserInfo_Wrapper | App_Cache | `../../_shared/pack/blocks.md` | - | Result |
| CommonUI_InsideLayout | App_Common | `../../App_Common/pack/blocks.md` | In_ShowLockScreen: Boolean; In_IgnorePolicy: Boolean; In_IgnoreLockScreen: Boolean | Event_OnScreenLocked; Event_OnScreenUnlocked |
| FilterSheet | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | In_StartFilter: Filter_Common (mandatory); In_Options: Filter_Common_Options (mandatory); ExtendedClasses: Text | ApplyFilters; Loaded; SheetInitialized |
| FilterSheet_Icon_Label | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | HaveFiltersApplied: Boolean (mandatory); BottomSheetId: Text (mandatory); isLoaded: Boolean (mandatory); ShowSubscriptionOnClick: Boolean (mandatory) | - |
| FilterSheet_OptionChoice_Item | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | Filter_Common_Control_Choice: Filter_Common_Control_Choice (mandatory) | OnChange |
| FilterSheet_OptionList_Item | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | Filter_Common_Control_List: Filter_Common_Control_List (mandatory); ShowHeader: Boolean (mandatory); ForceUpdate: Boolean | Event_Input_OnReady; OnBack; OnChange |
| HandleOnResumeOpenLink | Legacy_Share | `../../Legacy_Share/pack/blocks.md` | - | - |
| ItemCardActions | App_Common_Blocks | `../../_shared/pack/blocks.md` | ActionBarOptions: ActionBarOptions (mandatory); ObjectId: Text (mandatory); BookmarkType: BookmarkCategory Identifier | Event_AddNote; Event_ItemUnbookmarked |
| OfflineDataSyncEvents | App_Common | `../../App_Common/pack/blocks.md` | - | OnSyncComplete; OnSyncError; OnSyncStart |
| Policy_Checker | App_Policies | `../../App_Policies/pack/blocks.md` | - | - |
| UnsupportedVersion | App_Common | `../../App_Common/pack/blocks.md` | In_ExtendedClass: Text; In_HideButton: Boolean | Event_NavigateToPlaystore |
| UnsupportedVersion_Browser | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Native | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_WebView | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Wrapper | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| WelcomeToConnect | App_Common | `../../App_Common/pack/blocks.md` | - | - |
