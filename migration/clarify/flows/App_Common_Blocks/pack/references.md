# Pack of UI flow App_Common_Blocks (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Referenced blocks (other modules) used by the flow

Logic of these blocks is not in the dump. 'TST file' is the compiled code on TST (`python3 migration/clarify/tools/tst_source.py show <file>`), when the survey has it.

| Block | Module | Flow | Inputs | Events | TST file |
|---|---|---|---|---|---|
| CustomContainer | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; Options: ContainerOptions | Clicked() | `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` |
| Icon | UBTConnectLibrary | ConnectPatterns | In_IconId: UBT_Icons2 Identifier (mandatory); In_ColorId: UBT_Color Identifier = neutral-9; In_SizeId: UBT_IconsSize Identifier; In_Visible: Boolean = True; In_ExtendedClasses: Text = "" | Click() | `UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` |
| IconBadge | UBTConnectLibrary | OutSystemsUIOverrides | Number: Long Integer (mandatory); Color: UBT_Color Identifier = Entities.UBT_Color.Primary; IsLight: Boolean; ExtendedClass: Text; MaxNumber: Integer = 9 | - | `UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc.js` |
| IconText | UBTConnectLibrary | ConnectPatterns | IsIconOnRight: Boolean; Text: Text (mandatory); TextOptions: TextOptions; SpacingSize: UBT_Size Identifier = xs; ExtendedClasses: Text; SubtextOptions: TextOptions; In_Subtext: Text; In_JustifyText: Boolean | Clicked() | `UBTConnectLibrary.ConnectPatterns.IconText.mvc.js` |
| ItemCard_ActionBar | UBTConnectLibrary | ConnectCorePatterns | ActionBarOptions: ActionBarOptions (mandatory) | OnClickAddNote(); OnClickShare(); OnClickUnbookmark() | `UBTConnectLibrary.ConnectCorePatterns.ItemCard_ActionBar.mvc.js` |
| SkeletonSection | UBTConnectLibrary | ConnectPatterns | In_IsLoading: Boolean (mandatory); In_ExtendedClass: Text; In_IsActiveWhileLoading: Boolean | - | `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` |

## Referenced client actions called

| Action | Module | Folder | Inputs | Outputs |
|---|---|---|---|---|
| Bookmark_SendFeedbackMessage | UBTConnect_Utils | CommonMessages | IsCreate: Boolean; isError: Boolean | - |
| Create_LocalBookmark_C2 | UBTConnect_Bookmarks_MCS | Bookmarks_LocalStorage | In_ItemId: Text (mandatory); In_BookmarkCategoryId: BookmarkCategory Identifier (mandatory); In_BookmarkId: Long Integer (mandatory); In_DateCreatedUtc: Date Time | LocalBookmarkId: LocalBookmark2 Identifier |
| Delete_LocalBookmarkByBookmarkId_C2 | UBTConnect_Bookmarks_MCS | Bookmarks_LocalStorage | BookmarkId: Long Integer (mandatory) | - |
| GetHasNewNotifications | UBTConnect_Utils | Permissions_FF_Wrappers_OutSystems | - | Out_HasNewNotifications: Boolean |
| GetLocalBookmarkByObjectId_C2 | UBTConnect_Bookmarks_MCS | Bookmarks_LocalStorage | ItemId: Text (mandatory) | LocalBookmark: LocalBookmark2 |
| GetUnreadNotificationNumber | Connect2_LegacyShared | Comms | - | UnreadNotifications: Long Integer |
| LogMessage | (System) | - | Message: Text (mandatory); ModuleName: Text (mandatory) | - |
| OpenInApp_OpenExternalLink | UBTConnect_Utils | OpenInApp_Utils | Url: Text (mandatory); InNewTab: Boolean | - |

## Static entity records named by the flow (Entities.<Entity>.<Record>)

- **UBT_Color** (UBTConnectLibrary): records used: Neutral0, Neutral2, Neutral4, Neutral7, Primary, Red, Transparent
  - Neutral0: Color="neutral-0", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=19
  - Neutral2: Color="neutral-2", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=21
  - Neutral4: Color="neutral-4", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=23
  - Neutral7: Color="neutral-7", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=26
  - Primary: Color="primary", IsActive=True, IsBrand=True, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=1
  - Red: Color="red", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=10
  - Transparent: Color="transparent", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=18
- **UBT_FontSize** (UBTConnectLibrary): records used: Small
  - Small: Id="s", Order=4
- **UBT_FontWeight** (UBTConnectLibrary): records used: Regular
  - Regular: Id="regular", Order=2
- **UBT_Icons2** (UBTConnectLibrary): records used: Notifications, OpenNew
  - Notifications: Id="connect-icon-notifications", Is_Active=True, Label="Notifications"
  - OpenNew: Id="connect-icon-open_new", Is_Active=True, Label="Open New"
- **UBT_IconsSize** (UBTConnectLibrary): records used: Base_24, NonStandard_16
  - Base_24: Label="icon-base", Order=3
  - NonStandard_16: Label="icon-non-standard-16", Order=5
- **UBT_Size** (UBTConnectLibrary): records used: Base, ExtraSmall, Small
  - Base: Id="base", Order=7
  - ExtraSmall: Id="xs", Order=2
  - Small: Id="s", Order=4
