# Pack of UI flow Directory_CommonBlocks (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: Directory_CommunityNumbers, Directory_CommunityNumbers__Number, Directory_EmptyState, Directory_EntityDetailsActions
Blocks of other UBTConnect flows that the flow uses (transitive): 0

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
