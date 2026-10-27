# Pack of UI flow Directory_Interchange (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Referenced blocks (other modules) used by the flow

Logic of these blocks is not in the dump. 'TST file' is the compiled code on TST (`python3 migration/clarify/tools/tst_source.py show <file>`), when the survey has it.

| Block | Module | Flow | Inputs | Events | TST file |
|---|---|---|---|---|---|
| ActionsMenu | UBTConnectLibrary | ConnectCorePatterns | In_ActionsMenuOptions: ActionsMenuOptions (mandatory); In_ActionsEnableOptions: ActionsMenuEnableOptions; IsEnabled: Boolean = True; InShowLabels: Boolean = True | Event_Click_Bookmark(); Event_Click_Call(); Event_Click_Email(); Event_Click_Gift(); Event_Click_Notes(); Event_Click_Share(); Event_Click_Unbookmark(); Event_Click_ViewDetails() | `UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc.js` |
| ContactByMessage_Wrapper | UBTConnect_Utils | CW_CTA_PopUps | In_ContactPopupData: UI_ContactByMessage_WrapperData (mandatory) | Event_Call(); Event_Cancel(); Event_Email(); Event_MessageChannel(Event_ChannelId: Type_MessageChannel Identifier (mandatory)) | `UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js` |
| ContactPopup_ByPhone | UBTConnect_Utils | CW_CTA_PopUps | In_CallPopupData: ContactByPhonePopupData (mandatory); In_ImageSizeId: UBT_ImageSize Identifier = xl | Event_Call(Event_Number: Text (mandatory)); Event_Cancel() | `UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js` |
| CustomContainer | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; Options: ContainerOptions | Clicked() | `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` |
| EmptyList | UBTConnectLibrary | ConnectPatterns | IconId: UBT_Icons2 Identifier (mandatory) | - | `UBTConnectLibrary.ConnectPatterns.EmptyList.mvc.js` |
| NotesSheet | UBTConnect_Utils | CW_Notes | In_IsOpen: Boolean (mandatory); ExtendedClasses: Text; In_ItemId: Text (mandatory); In_NoteCategoryId: NoteCategory2 Identifier (mandatory); In_Notes: Notes (mandatory) | On_NoteDeleted(NoteId: Long Integer (mandatory); WasLastNote: Boolean (mandatory)); On_NotesChanged(New_Notes: Notes (mandatory)); On_NoteSheet_Closed() | `UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js` |
| SharePopup | UBTConnect_Utils | CW_CTA_PopUps | In_ContactPopupData: ContactPopupData (mandatory); In_ImageSizeId: UBT_ImageSize Identifier = xl | Event_Cancel(); Event_ShareToConnect(); Event_ShareToOthers() | `UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc.js` |
| ShareSheet | UBTConnect_Utils | CW_Share | In_IsOpen: Boolean (mandatory); In_ShareObjectTypeId: Type_ShareObject Identifier (mandatory); In_ShareableObjectId: Text (mandatory); In_IsLegacy: Boolean; In_UpdateType: Text; In_UpdateDate: Date | Event_ClosedShareSheet() | `UBTConnect_Utils.CW_Share.ShareSheet.mvc.js` |
| ShareableObject_Generic | UBTConnect_Utils | CW_Share | In_ShareableObject: UI_ShareableObject_Generic (mandatory) | Event_OnClick() | `UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc.js` |
| SkeletonSection | UBTConnectLibrary | ConnectPatterns | In_IsLoading: Boolean (mandatory); In_ExtendedClass: Text; In_IsActiveWhileLoading: Boolean | - | `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` |
| Statistics_ListItem | UBTConnectLibrary | ConnectCorePatterns | In_StatisticsOptions: StatisticsOptions (mandatory); In_ExtendedClasses: Text; In_HighlightWords: Text; In_ShowSubtitle: Boolean; In_HasActionsMenu: Boolean; In_HideBorder: Boolean | Event_Clicked() | `UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc.js` |

## Referenced client actions called

| Action | Module | Folder | Inputs | Outputs |
|---|---|---|---|---|
| Bookmark_SendFeedbackMessage | UBTConnect_Utils | CommonMessages | IsCreate: Boolean; isError: Boolean | - |
| Create_LocalBookmark_C2 | UBTConnect_Bookmarks_MCS | Bookmarks_LocalStorage | In_ItemId: Text (mandatory); In_BookmarkCategoryId: BookmarkCategory Identifier (mandatory); In_BookmarkId: Long Integer (mandatory); In_DateCreatedUtc: Date Time | LocalBookmarkId: LocalBookmark2 Identifier |
| Delete_LocalBookmarkByBookmarkId_C2 | UBTConnect_Bookmarks_MCS | Bookmarks_LocalStorage | BookmarkId: Long Integer (mandatory) | - |
| GetLocalBookmarkByObjectId_C2 | UBTConnect_Bookmarks_MCS | Bookmarks_LocalStorage | ItemId: Text (mandatory) | LocalBookmark: LocalBookmark2 |
| JSUtils_String_Split | UBTJavaScriptUtils | JSUtils_StringManipulation | String: Text (mandatory); Char: Text (mandatory) | List: Text List |
| ListAppend | (System) | - | List: Generic Record List (mandatory); Element: Generic Record (mandatory) | - |
| LogMessage | (System) | - | Message: Text (mandatory); ModuleName: Text (mandatory) | - |
| ScreenController_RaiseCommunicationError | UBTJavaScriptUtils | JSUtils_ScreenController | Message: Text (mandatory) | - |
| ScreenController_RaiseError | UBTJavaScriptUtils | JSUtils_ScreenController | Message: Text (mandatory) | - |
| ScreenController_RaiseTypedException | UBTJavaScriptUtils | JSUtils_ScreenController | Message: Text (mandatory); ExceptionId: UBT_SystemExceptionTypes Identifier (mandatory); SpecificType: Text; ExtraStack: Text | - |
| ShareEntity_ByURL | UBTConnect_Utils | Share | In_ShareTypeId: Type_ShareObject Identifier (mandatory); In_ShareableObjectId: Text (mandatory); In_UpdateType: Text; In_UpdateDate: Date | - |

## Static entity records named by the flow (Entities.<Entity>.<Record>)

- **BookmarkCategory** (UBTConnect_Bookmarks_MCS): records used: Household, Interchange, Locality, Member, OneSchoolGlobal2, SupperMeeting
  - Household: Id="Household", Initials="H", Label="Households"
  - Interchange: Id="Interchange", Initials="I", Label="Interchange"
  - Locality: Id="Locality", IsActive=False, Label="Localities"
  - Member: Id="Member", Label="Members"
  - OneSchoolGlobal2: Id="OneSchoolGlobal", Label="OneSchool Global"
  - SupperMeeting: Id="Supper Meeting", Label="Supper Meetings"
- **Connect_Entity** (Connect_CommonEntities_DB): records used: FeedItem, Household, Interchange, Locality, Member, OneSchoolGlobal, SupperMeetings_aka_Subdivisions
  - FeedItem: APIKey="FeedItem", Id="Feed Item", Is_Active=True, Label="Feed Item", Order=7
  - Household: APIKey="Household", Id="Household", Is_Active=True, Label="Household", Order=1
  - Interchange: APIKey="", Id="Interchange", Is_Active=True, Label="Interchange", Order=4
  - Locality: APIKey="Locality", Id="Locality", Is_Active=True, Label="Locality", Order=5
  - Member: APIKey="Member", Id="Member", Is_Active=True, Label="Member", Order=6
  - OneSchoolGlobal: APIKey="", Id="OneSchool Global", Is_Active=True, Label="OneSchool Global", Order=2
  - SupperMeetings_aka_Subdivisions: APIKey="Subdivision", Id="Supper Meetings", Is_Active=True, Label="Supper Meetings", Order=3
- **Type_ShareObject** (Connect2_Sharing_CS): records used: Feed, Household, Locality, MyHousehold, OneSchoolGlobal, SupperMeeting
  - Feed: APIKey="FeedItem", Id="Feed", Is_Active=True, Label="Feed", NotificationTitle="shared a Feed", Order=7
  - Household: APIKey="Members", Id="Household", Is_Active=True, Label="Household", NotificationTitle="shared a Household", Order=3
  - Locality: Id="Locality", Is_Active=True, Label="Locality", Order=5
  - MyHousehold: APIKey="My Profile", Id="My Household", Is_Active=True, Label="Household", LabelPrefix="my", NotificationTitle="shared a Household", Order=3
  - OneSchoolGlobal: APIKey="OneSchool Global", Id="OneSchool Global", Is_Active=True, Label="OneSchool Global", NotificationTitle="shared a OneSchool Global", Order=4
  - SupperMeeting: APIKey="Supper Meeting", Id="Supper Meeting", Is_Active=True, Label="Supper Meeting", NotificationTitle="shared a Supper Meeting", Order=2
- **UBT_Color** (UBTConnectLibrary): records used: Neutral0
  - Neutral0: Color="neutral-0", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=19
- **UBT_Size** (UBTConnectLibrary): records used: Base, Small
  - Base: Id="base", Order=7
  - Small: Id="s", Order=4
- **UBT_SystemExceptionTypes** (UBTJavaScriptUtils): records used: NotRegisteredException
  - NotRegisteredException: Id="NotRegisteredException"
