# Pack of UI flow Legacy_AssembleFlow (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: Assemble_BrowseByCountry, AssembleDetail, AssembleEvents

## Screen Assemble_BrowseByCountry (flow Legacy_AssembleFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: -
- lifecycle: none

#### Widget tree
```
block CommonUI_InsideLayout (UBTConnect.App_Common)
block ScreenBlock_Assemble_Filter (Connect2_Assemble_MUI.Assemble)
  on NavigateToSubdivision → Assemble_FilterNavigateToLocality(InSubdivisionId=SubdivisionId, IsUserSubdivision=IsUserSubdivision)
  on Cancel → Assemble_FilterCancel
```

#### Screen actions
- **Assemble_FilterCancel**
  ```
  call AllowUpcomingNavigation()
  navigate → (Previous Screen)() transition=UseHistory
  ```
- **Assemble_FilterNavigateToLocality** inputs: InSubdivisionId: Long Integer (mandatory); IsUserSubdivision: Boolean (mandatory)
  ```
  navigate → AssembleEvents(IsUserSubdivision=IsUserSubdivision, ShowBackNavigation=True, SubdivisionId=InSubdivisionId) transition=Inherited
  ```

## Screen AssembleDetail (flow Legacy_AssembleFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: EventId: Text (mandatory); SeriesId: Text; Start: Date Time; AssembleEventTypeTile: Text
- local variables: IsEventNotFound: Boolean; IsShareOpen: Boolean; ShareableObjectId: Text; IsAddNote: Boolean
- lifecycle: none

#### Data sources
- data action **GetAssembleNotes** fetch=AtStart; outputs: Out_Notes: Notes
  ```
  call-server GetNotesByItemId(ItemId=EventId, NoteCategoryId=Entities.NoteCategory2.AssembleEvent)
  assign: Out_Notes = GetNotesByItemId.Out_Notes
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block CommonUI_InsideLayout (UBTConnect.App_Common)
block ScreenBlock_AssembleDetail (Connect2_Assemble_MUI.Assemble)
  args: AssembleEventTypeTile=AssembleEventTypeTile, EventId=EventId, SeriesId=SeriesId, Start=Start
  on NavigateTo_Household → Handler_NavigateToHousehold(HouseholdId=HouseholdId)
  on EventNotFound → Handler_EventNotFound
  on NavigateTo_HouseholdCarousel → Handler_NavigateToHouseholdCarousel(SelectedHouseholdId=SelectedHouseholdId)
  on NavigateTo_EmailContact → Handler_NavigateTo_EmailContact(Event_AvatarURL=Event_AvatarURL, Event_ContactCountry=Event_ContactCountry, Event_ContactLocality=Event_ContactLocality, Event_ContactName=Event_ContactName, Event_EmailTo=Event_EmailTo, Event_MemberId=Event_MemberId)
  on NavigateTo_ShareObject → Handler_NavigateTo_ShareObject(In_IsExternalSharing=In_IsExternalSharing, ObjectId=ObjectId, ShareObjectTypeId=ShareObjectTypeId)
  placeholder MeetingNotes:
    block NoteListActions (UBTConnect_Utils.CW_Notes)
      args: In_ItemId=EventId, In_NoteCategoryId=Entities.NoteCategory2.AssembleEvent, In_ShowPreviewOnly=True, Notes=GetAssembleNotes.Out_Notes
      on On_NoteDeleted → Handler_OnNoteDeleted(NoteId=NoteId)
      on OnSaveEditNote → Handler_OnNotesChanged(New_Notes=Notes)
      on On_ShowAllNotesRequested → OpenNoteSheet
    container  [style="margin-top-xs"]
      block ItemCard_ActionBar (UBTConnectLibrary.ConnectCorePatterns)
        args: ActionBarOptions={ ShowAddNote: True, IsAddNoteEnabled: True }
        on OnClickAddNote → OpenNoteSheet
  placeholder BottomBar:
    block BottomBarMenu (UBTConnect.App_Common)
if False #HideInServiceStudio_BottomSheet  [DEAD BRANCH: condition is a constant]
else
  block ShareSheet (UBTConnect_Utils.CW_Share)
    args: In_IsOpen=IsShareOpen, In_ShareableObjectId=ShareableObjectId, In_ShareObjectTypeId=Entities.Type_ShareObject.Household
    on Event_ClosedShareSheet → Handler_CloseShareSheet
  block NotesSheet (UBTConnect_Utils.CW_Notes)
    args: In_IsOpen=IsAddNote, In_ItemId=EventId, In_NoteCategoryId=Entities.NoteCategory2.AssembleEvent, In_Notes=GetAssembleNotes.Out_Notes
    on On_NoteSheet_Closed → Handler_NoteSheet_Closed
    on On_NotesChanged → Handler_OnNotesChanged(New_Notes=New_Notes)
    on On_NoteDeleted → Handler_OnNoteDeleted(NoteId=NoteId)
```

#### Screen actions
- **Handler_CloseShareSheet**
  ```
  assign: IsShareOpen = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_EventNotFound**
  ```
  assign: IsEventNotFound = True
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_NavigateTo_EmailContact** inputs: Event_AvatarURL: Text (mandatory); Event_ContactName: Text (mandatory); Event_ContactLocality: Text (mandatory); Event_ContactCountry: Text (mandatory); Event_EmailTo: Text (mandatory); Event_MemberId: Long Integer (mandatory)
  ```
  call GetNameAndSurname_ByFullName(In_FullName=Event_ContactName)
  navigate → ContactByEmailMember(In_AuditEventId=Entities.ApplicationEvents_Directory.EmailHousehold, In_AvatarURL=Event_AvatarURL, In_ContactCountry=Event_ContactCountry, In_ContactLocality=Event_ContactLocality, In_ContactName=GetNameAndSurname_ByFullName.Out_Name, In_ContactSurname=GetNameAndSurname_ByFullName.Out_Surname, In_EmailTo=Event_EmailTo, In_EntityId=Event_MemberId, In_EntityType=Entities.Connect_Entity.Member) transition=Inherited
  ```
- **Handler_NavigateTo_ShareObject** inputs: ShareObjectTypeId: Type_ShareObject Identifier (mandatory); ObjectId: Long Integer (mandatory); In_IsExternalSharing: Boolean (mandatory)
  ```
  if In_IsExternalSharing
    call ShareEntity_ByURL(In_ShareableObjectId=ObjectId, In_ShareTypeId=ShareObjectTypeId)
    end
  else
    navigate → LegacyShareObject(In_ObjectId=ObjectId, In_ShareObjectTypeId=ShareObjectTypeId) transition=Inherited
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_NavigateToHousehold** inputs: HouseholdId: Long Integer (mandatory)
  ```
  navigate → HouseholdDetails(HouseholdId=HouseholdId) transition=Inherited
  ```
- **Handler_NavigateToHouseholdCarousel** inputs: SelectedHouseholdId: Long Integer (mandatory); locals: PreloadedHouseholdIdList: Long Integer List; PreloadedHouseholds: CarouselPreloadedHouseholds
  ```
  call GetHasCarouselEnabled()
  if GetHasCarouselEnabled.HasCarouselEnabled
    call GetPreloadObject()
    if GetPreloadObject.Preload <> NullObject()
      call AssignFromObject(ObjectValue=GetPreloadObject.Preload, ToObjectRef=ToObject(PreloadedHouseholdIdList))
      call ListIndexOf(Condition=Value = SelectedHouseholdId, List=PreloadedHouseholdIdList) as ListIndexOf_HouseholdId
      if ListIndexOf_HouseholdId.Position <> -1
        [M1] for each PreloadedHouseholdIdList
          call ListAppend(Element={ Household: PreloadedHouseholdIdList.Current }, List=PreloadedHouseholds.CarouselHouseholdItem)
          → continues at [M1]
        end for
        call SetPreloadObject(Preload=ToObject(PreloadedHouseholds))
        navigate → HouseholdCarousel(In_StartingHouseholdId=SelectedHouseholdId) transition=Inherited
      else
        [M2] call Handler_NavigateToHousehold(HouseholdId=SelectedHouseholdId)
        end
    else
      [M3] assign (<<): 
      → continues at [M2]
  else
    → continues at [M3]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_NoteSheet_Closed**
  ```
  assign: IsAddNote = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnNoteDeleted** inputs: NoteId: Long Integer (mandatory)
  ```
  call ListIndexOf(Condition=Id = NoteId, List=GetAssembleNotes.Out_Notes.Note_Item_List)
  if ListIndexOf.Position <> -1
    call ListRemove(List=GetAssembleNotes.Out_Notes.Note_Item_List, Position=ListIndexOf.Position)
    assign: GetAssembleNotes.Out_Notes.Total = GetAssembleNotes.Out_Notes.Total-1
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_OnNotesChanged** inputs: New_Notes: Notes (mandatory)
  ```
  assign: GetAssembleNotes.Out_Notes = New_Notes
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

## Screen AssembleEvents (flow Legacy_AssembleFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: SubdivisionId: Long Integer; ShowBackNavigation: Boolean; IsUserSubdivision: Boolean = True
- local variables: UseNewFilterSheet: Boolean; AssembleFilterBottomSheet_Id: Text
- lifecycle: none

#### Widget tree
```
block CommonUI_InsideLayout (UBTConnect.App_Common)
block ScreenBlock_AssembleEvents (Connect2_Assemble_MUI.Assemble)
  args: IsUserSubdivision=IsUserSubdivision, ShowBackNavigation=ShowBackNavigation, SubdivisionId=SubdivisionId
  on NavigateTo_AssembleDetail → Handler_NavigateTo_AssembleDetail(AssembleEventId=AssembleEventId, AssembleParentEventId=AssembleParentEventId, Start=Start)
  on NavigateTo_MyCalendarAssemble → Handler_NavigateTo_MyCalendar
  on NavigateTo_AssembleLocationFilters → Handler_NavigateTo_AssembleLocationFilters
  placeholder BottomBar:
    block BottomBarMenu (UBTConnect.App_Common)
block BottomSheet (OutSystemsUI_2_23+UBTConnectLibrary.Interaction) #BottomSheet_AssembleFilter
  args: CloseOnClickOutsite=True, Title="Test"
  on Initialized → Handler_AssembleFilterSheetInitialized(Id=Id)
  placeholder Content:
    block Assemble_FilterSheet (Connect2_Assemble_MUI.Assemble) #Assemble_FilterSheet_Instance
      on Cancel → Handler_AssembleFilterSheetOnCancel
      on NavigateToSubdivision → Handler_AssembleFilterSheetOnSelectSubdivision(NewIsUserSubdivision=IsUserSubdivision, NewSubdivisionId=SubdivisionId)
```

#### Screen actions
- **Handler_AssembleFilterSheetInitialized** inputs: Id: Text (mandatory)
  ```
  assign: AssembleFilterBottomSheet_Id = Id
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_AssembleFilterSheetOnCancel**
  ```
  call BottomSheetClose(WidgetId=AssembleFilterBottomSheet_Id)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_AssembleFilterSheetOnSelectSubdivision** inputs: NewSubdivisionId: Long Integer (mandatory); NewIsUserSubdivision: Boolean (mandatory)
  ```
  assign: SubdivisionId = NewSubdivisionId; IsUserSubdivision = NewIsUserSubdivision
  call BottomSheetClose(WidgetId=AssembleFilterBottomSheet_Id)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_NavigateTo_AssembleDetail** inputs: AssembleParentEventId: Text (mandatory); AssembleEventId: Text (mandatory); Start: Date Time (mandatory)
  ```
  navigate → AssembleDetail(EventId=AssembleEventId, SeriesId=AssembleParentEventId, Start=Start) transition=Inherited
  ```
- **Handler_NavigateTo_AssembleLocationFilters**
  ```
  if UseNewFilterSheet
    call BottomSheetOpen(WidgetId=AssembleFilterBottomSheet_Id)
    end
  else
    navigate → Assemble_BrowseByCountry() transition=Inherited
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_NavigateTo_MyCalendar**
  ```
  navigate → MyEntertaining(MyCalendarEventSourceId=Entities.Type_MyCalendarEventSource.Assemble) transition=Inherited
  ```
