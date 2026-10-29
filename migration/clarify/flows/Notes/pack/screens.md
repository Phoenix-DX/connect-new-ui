# Pack of UI flow Notes (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: Notes

## Screen Notes (flow Notes)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: HeaderIsScrolled: Boolean; Note_Pills: Tag List; Notes_Filter: Notes_Filter; HasFiltersApplied: Boolean; Filter_BottomSheetId: Text; BottomSheetId_Filter_IsLoaded: Boolean; BottomSheetId_Filter_ShowSubscriptionOnClick: Boolean; Years: Text List; PageSize: Integer = 20; PageNumber: Integer = 1; MaxRecords: Long Integer; Notes_List: UI_Note_CardItem List; ResetPillsValue: Boolean = True; PillsLoaded: Boolean; Notes_Loading: Boolean
- lifecycle: OnInitialize → ScreenEvent_OnInitialize; OnReady → ScreenEvent_Ready

#### Data sources
- data action **GetNotes** fetch=OnDemand; outputs: Out_Notes: UI_Notes; OnAfterFetch → GetNotesOnAfterFetch
  ```
  call-server GetNotes(FilterNote=Notes_Filter, PageNumber=PageNumber, PageSize=PageSize)
  assign: Out_Notes = GetNotes.Out_Notes
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
    text: My Notes
  placeholder Placeholder_Header_Right:
    if HeaderIsScrolled
      block Icon (UBTConnectLibrary.ConnectPatterns)
        args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.Search
        on Click → IconClick_SearchIcon
    block App_NotificationIcon (UBTConnect.App_Common_Blocks)
  placeholder Placeholder_Header_Input:
    block Input (UBTConnectLibrary.ConnectPatterns)
      args: In_Options={ MaxLength: 50, SearchPrompt: "Search", Debounce_DelayMS: 200, BorderRadius: Entities.Shape.Rounded, EnableAutocompleteHTML: False }
      on Event_ClearString → Handler_SearchOnClear
      on Event_Submit → Handler_SearchOnSubmit
      on Event_OnChange → Handler_SearchOnChange(CurrentString=Event_CurrentString)
  placeholder HeaderContent:
    block CustomContainer (UBTConnectLibrary.BasePatterns) #Filter_Pills
      args: ExtendedClasses="background-neutral-0", Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.ExtraSmall, HorizontalSizeId: Entities.UBT_Size.Base }, MarginSize: { TopSizeId: Entities.UBT_Size.Base }, DisplayOptions: {  } }
      placeholder Content:
        block Horizontal_Filter_TagList (UBTConnectLibrary.ConnectPatterns)
          args: In_IsSingleSelection=True, In_TagsLoading=not PillsLoaded, In_TagToggleList=Note_Pills
          on Changed → Handler_OnClickPill(UpdatedTagList=UpdatedTagList)
          placeholder Filter:
            block FilterSheet_Icon_Label (UBTConnect.App_CommonBlocks_Filter)
              args: BottomSheetId=Filter_BottomSheetId, HaveFiltersApplied=HasFiltersApplied, isLoaded=True// BottomSheetId_Filter_IsLoaded, ShowSubscriptionOnClick=BottomSheetId_Filter_ShowSubscriptionOnClick
  placeholder Content:
    block NoteCard_List (UBTConnect.Notes)
      args: In_IsLoading=Notes_Loading, In_Notes=Notes_List, In_SearchString=Notes_Filter.SearchTerm
      on OnClick_NoteCardItem → Handler_OnClickNoteCardItem(HasDetailAccess=HasDetailAccess, ObjectId=ObjectId, ObjectId2=ObjectId2, ObjectType=NoteCategoryTypeId)
      on OnLoadMore → Notes_CardListOnLoadMore
  placeholder Bottom:
    block BottomBarMenu (UBTConnect.App_Common)
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
if False #HideInServiceStudio_BottomSheet  [DEAD BRANCH: condition is a constant]
else
  block Notes_FilterSheet (UBTConnect.Notes)
    args: In_FilterNotes=Notes_Filter, In_YearsOptions=Years
    on ApplyFilters → Handler_ApplyFilters(Event_HasFiltersApplied=Event_HasFiltersApplied, Event_Notes_Filter=Event_Filter_Notes)
    on SheetInilialized → Handler_FilterSheetSheetInilialized(SheetId=SheetId)
    on Loaded → Handler_FilterSheetLoaded(ShowSubscriptionOnClick=ShowSubscriptionOnClick)
```

#### Screen actions
- **GetNotesOnAfterFetch**
  ```
  if PageNumber = 1
    assign: MaxRecords = GetNotes.Out_Notes.Total
    assign: Notes_List = GetNotes.Out_Notes.NoteCardItem_List
    if ResetPillsValue
      call ResetPillsVallues()
      [M1] assign: PillsLoaded = True; ResetPillsValue = False
      [M2] assign: Notes_Loading = False
      end
    else
      → continues at [M1]
  else
    call ListAppendAll(List=Notes_List, SourceList=GetNotes.Out_Notes.NoteCardItem_List)
    → continues at [M2]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_ApplyFilters** inputs: Event_Notes_Filter: Notes_Filter; Event_HasFiltersApplied: Boolean (mandatory)
  ```
  assign: Notes_Filter.SortByNewest = Event_Notes_Filter.SortByNewest; Notes_Filter.Years = Event_Notes_Filter.Years
  assign: HasFiltersApplied = Event_HasFiltersApplied
  call Refresh_GetNotes()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_FilterSheetLoaded** inputs: ShowSubscriptionOnClick: Boolean (mandatory)
  ```
  assign: BottomSheetId_Filter_IsLoaded = True
  assign: BottomSheetId_Filter_ShowSubscriptionOnClick = ShowSubscriptionOnClick
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
- **Handler_OnClickNoteCardItem** inputs: ObjectId: Text (mandatory); ObjectId2: Text (mandatory); ObjectType: NoteCategory2 Identifier (mandatory); HasDetailAccess: Boolean (mandatory); locals: HouseholdIdList: CarouselPreloadedHouseholds; PreloadedCarousel: PreloadedCarousel
  ```
  switch
    case ObjectType = Entities.NoteCategory2.Household (Household)
      if Notes_Filter.NoteCategoryId = Entities.NoteCategory2.Household
        assign: HouseholdIdList.CarouselHouseholdItem = ConvertList(Notes_List,  {Household:"TextToLongInteger(ItemId)"})
        call SetPreloadObject(Preload=ToObject(HouseholdIdList))
        navigate → HouseholdCarousel(In_StartingHouseholdId=TextToLongInteger(ObjectId)) transition=Inherited
      else
        navigate → HouseholdDetails(HouseholdId=TextToLongInteger(ObjectId)) transition=Inherited
    case ObjectType = Entities.NoteCategory2.FeedItem (FeedItem)
      navigate → FeedItemDetail(FeedItemId=ObjectId) transition=Inherited
    case ObjectType = Entities.NoteCategory2.AssembleEvent (Assemble)
      end
    case ObjectType = Entities.NoteCategory2.Interchange (Interchange)
      end
    case ObjectType = Entities.NoteCategory2.LDMEvent (LDM)
      end
    case ObjectType = Entities.NoteCategory2.Locality (Locality)
      end
    case ObjectType = Entities.NoteCategory2.LocalityContact (Locality Contact)
      end
    case ObjectType = Entities.NoteCategory2.Member (Member)
      if HasDetailAccess
        navigate → Household_Relations(HouseholdId=TextToLongInteger(ObjectId2), MemberId=TextToLongInteger(ObjectId)) transition=Inherited
      else
        call FeedbackMessage_AutoClose(Message="This member is no longer available", MessageType=Entities.UBT_MessageType.Info)
        end
    case ObjectType = Entities.NoteCategory2.OneSchoolGlobal (OneSchoool Global)
      if Notes_Filter.NoteCategoryId = Entities.NoteCategory2.OneSchoolGlobal
        assign: PreloadedCarousel.CarouselItemIds = ConvertList(Notes_List,  {Value:"TextToLongInteger(ItemId)"})
        call SetPreloadObject(Preload=ToObject(PreloadedCarousel)) as SetPreloadObject3
        navigate → OneSchoolGlobalCarousel(In_StartingObjectId=TextToLongInteger(ObjectId)) transition=Inherited
      else
        navigate → OneSchoolGlobalDetails(In_OneSchoolGlobalId=TextToLongInteger(ObjectId)) transition=Inherited
    case ObjectType = Entities.NoteCategory2.OrbitEvent (Orbit)
      end
    case ObjectType = Entities.NoteCategory2.PersonalEvent (Personal Event)
      end
    case ObjectType = Entities.NoteCategory2.SupperMeeting (Suppermeeting)
      navigate → SupperMeeting_Details(In_SubdivsionId=TextToLongInteger(ObjectId)) transition=Inherited
    case ObjectType = Entities.NoteCategory2.Update (Update)
      end
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
  ```
- **Handler_OnClickPill** inputs: UpdatedTagList: Tag List (mandatory)
  ```
  call ListFilter(Condition=IsSelected, SourceList=UpdatedTagList) as ListFilterPillsBySelected
  assign: Notes_Filter.NoteCategoryId = TextToIdentifier(ListFilterPillsBySelected.FilteredList.Current.Identifier)
  assign: PageNumber = 1
  assign: ResetPillsValue = False
  call Refresh_GetNotes()
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
- **Handler_SearchOnChange** inputs: CurrentString: Text (mandatory)
  ```
  assign: Notes_Filter.SearchTerm = CurrentString
  end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] call Refresh_GetNotes()
    end
  ```
- **Handler_SearchOnClear**
  ```
  assign: Notes_Filter.SearchTerm = ""
  call Refresh_GetNotes()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_SearchOnSubmit**
  ```
  call Refresh_GetNotes()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **IconClick_SearchIcon**
  ```
  call ScrollTop()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Notes_CardListOnLoadMore**
  ```
  if not GetNotes.Out_Notes.NoteCardItem_List.Empty and (GetNotes.Out_Notes.NoteCardItem_List.Length < MaxRecords)
    assign: PageNumber = PageNumber + 1
    call Refresh_GetNotes()
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Refresh_GetNotes**
  ```
  assign: Notes_Loading = True
  refresh data GetNotes
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ResetPillsVallues**
  ```
  call GetNotes_Pills(In_SelectedPillId=Notes_Filter.NoteCategoryId)
  call ListClear(List=Note_Pills)
  call ListAppendAll(List=Note_Pills, SourceList=GetNotes_Pills.Out_Pills)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  javascript CheckRestored() → FromCache: Boolean; FromHistory: Boolean
    | $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    | //$parameters.FromHistory = $public.Navigation.navigatedFromHistory();
  if CheckRestored.FromCache or CheckRestored.FromHistory
    assign: PageNumber = 1
    end
  else
    if Note_Pills.Empty
      call SkeletonLoader_Pills()
      [M1] if Notes_List.Empty
        call SkeletonLoader_Notes()
        [M2] call GetNotes_FilterYear()
        call ListClear(List=Years) as ListClearYears
        assign: Years = GetNotes_FilterYear.Years
        end
      else
        → continues at [M2]
    else
      → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **ScreenEvent_Ready**
  ```
  call ResetPillsVallues()
  call Refresh_GetNotes()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **SkeletonLoader_Notes**
  ```
  call ListAppend(Element={ NoteCardContent: { Title: "Dumyy Dummy Dummy Dummy", Subtitle: "Dummy Dummy" } }, List=Notes_List)
  call ListAppend(Element={ NoteCardContent: { Title: "Dumyy size", Subtitle: "Dumyy size" } }, List=Notes_List) as ListAppend2
  call ListAppend(Element={ NoteCardContent: { Title: "Dumyy size", Subtitle: "Dumyy size" } }, List=Notes_List) as ListAppend3
  call ListAppend(Element={ NoteCardContent: { Title: "Dumyy size", Subtitle: "Dumyy size" } }, List=Notes_List) as ListAppend4
  call ListAppend(Element={ NoteCardContent: { Title: "Dumyy size", Subtitle: "Dumyy size" } }, List=Notes_List) as ListAppend5
  call ListAppend(Element={ NoteCardContent: { Title: "Dumyy size", Subtitle: "Dumyy size" } }, List=Notes_List) as ListAppend6
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **SkeletonLoader_Pills**
  ```
  call ListAppend(Element={ Text: "All", Identifier: "All", IsSelected: False }, List=Note_Pills)
  call ListAppend(Element={ Text: "Dumyy size", Identifier: "Dumyy size", IsSelected: False }, List=Note_Pills) as ListAppend2
  call ListAppend(Element={ Text: "Dumyy size", Identifier: "Dumyy size", IsSelected: False }, List=Note_Pills) as ListAppend3
  call ListAppend(Element={ Text: "Dumyy size", Identifier: "Dumyy size", IsSelected: False }, List=Note_Pills) as ListAppend4
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
