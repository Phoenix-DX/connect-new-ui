# Pack of UI flow ContactFlow (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Referenced blocks (other modules) used by the flow

Logic of these blocks is not in the dump. 'TST file' is the compiled code on TST (`python3 migration/clarify/tools/tst_source.py show <file>`), when the survey has it.

| Block | Module | Flow | Inputs | Events | TST file |
|---|---|---|---|---|---|
| Button | UBTConnect_Utils | CW_Common | ButtonExtendedClass: Text; IsDisabled: Boolean; IsIconOnRight: Boolean; ButtonText: Text (mandatory); IconText_SpacingSize: UBT_Size Identifier = xs; TextExtendedClasses: Text; ButtonOptions: ButtonOptions; IconId: UBT_Icons2 Identifier; HideIcon: Boolean | buttonOnClick() | `UBTConnect_Utils.CW_Common.Button.mvc.js` |
| Button | UBTConnectLibrary | ConnectPatterns | In_ButtonOptions: ButtonOptions; In_ExtendedClass: Text; In_IsDisabled: Boolean | Event_OnClick() | `UBTConnectLibrary.ConnectPatterns.Button.mvc.js` |
| ButtonLoading | OutSystemsUI_2_23 | Utilities2 | IsLoading: Boolean (mandatory); ShowLabelOnLoading: Boolean; ExtendedClass: Text | Initialized(ButtonLoadingId: Text (mandatory)) | `OutSystemsUI_2_23.Utilities.ButtonLoading.mvc.js` |
| Columns_Three | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; ColumnOptions: ColumnOptions | - | `UBTConnectLibrary.BasePatterns.Columns_Three.mvc.js` |
| CustomContainer | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; Options: ContainerOptions | Clicked() | `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` |
| CustomText | UBTConnectLibrary | BasePatterns | In_Text: Text (mandatory); In_TextOptions: TextOptions (mandatory); In_PaddingOptions: SpacingOptions; In_HighlightWords: Text; In_HighlightOptions: TextOptions; ExtendedClasses: Text; FitContent: Boolean; InJustifyText: Boolean; NoWrap: Boolean; InlineIcon: InlineIcon | Clicked() | `UBTConnectLibrary.BasePatterns.CustomText.mvc.js` |
| DynamicTextArea | UBTConnectLibrary | ConnectPatterns | In_Text: Text (mandatory); In_IsBounded: Boolean | - | `UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc.js` |
| FixedFooter | UBTConnectLibrary | ConnectPatterns | useBottomBar: Boolean (mandatory); ExpectedFooterHeight: Text (mandatory); ContentContainerId: Text (mandatory) | - | `UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc.js` |
| Icon | UBTConnectLibrary | ConnectPatterns | In_IconId: UBT_Icons2 Identifier (mandatory); In_ColorId: UBT_Color Identifier = neutral-9; In_SizeId: UBT_IconsSize Identifier; In_Visible: Boolean = True; In_ExtendedClasses: Text = "" | Click() | `UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` |
| IconText | UBTConnectLibrary | ConnectPatterns | IsIconOnRight: Boolean; Text: Text (mandatory); TextOptions: TextOptions; SpacingSize: UBT_Size Identifier = xs; ExtendedClasses: Text; SubtextOptions: TextOptions; In_Subtext: Text; In_JustifyText: Boolean | Clicked() | `UBTConnectLibrary.ConnectPatterns.IconText.mvc.js` |
| InputCounter | Connect2_LegacyShared | Reusable2 | InputId: Text (mandatory); NoteInitialLength: Integer | - | `Connect2_LegacyShared.Reusable.InputCounter.mvc.js` |
| InputCounter | UBTConnectLibrary | ConnectPatterns | In_InputId: Text (mandatory); In_InitialLength: Integer | - | `UBTConnectLibrary.ConnectPatterns.InputCounter.mvc.js` |
| Layout_DetailPage | UBTConnectLibrary | Layouts | In_AlignTitleLeft: Boolean; In_IsPrimaryColor: Boolean = True; In_ExtendedClass: Text; In_EnableAccessibilityFeatures: Boolean; In_InitializeNavigationHandler: Boolean = True; In_IsHideTitle: Boolean | OnReadyEvent(WrapperContainerId: Text (mandatory)) | `UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js` |
| NavigationConfirmationDialog | NavigationHandler | ConfirmationDialogs | - | Navigation(NavigationEvent: Object (mandatory)) | `NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc.js` |
| TextArea_WithCounter | UBTConnectLibrary | ConnectPatterns | In_InitialLength: Integer (mandatory) | - | `UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc.js` |
| UBT_LazyImage | UBTConnect_Utils | CW_Image | ImageURL: Text; EntityId: Text (mandatory); EntityType: Connect_Entity Identifier (mandatory); ImageSize: LazyImageSize; ExtendedClass: Text; In_BorderRadius: UBT_Shape Identifier; In_HighRes: Boolean; HasErrorMessage: Boolean; In_ForceLoadingState: Boolean | - | `UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc.js` |

## Referenced client actions called

| Action | Module | Folder | Inputs | Outputs |
|---|---|---|---|---|
| AddAuditEventDetailEvent | Connect2_OrbitMobile_MUI | LDM_AuditEvents | EventTypeId: ApplicationEvents_LDM Identifier (mandatory); ClickedHouseholdId: Long Integer; ClickedHouseholdName: Text; EventDate: Date; EventLocality: Text | - |
| AllowUpcomingNavigation | NavigationHandler | NavigationHandler | - | - |
| AppManager_GetCachedUserInfo | UBT_AppManager | AppManager_CachedVariables_Gettters | - | UserInformation: AppManager_CachedUserInfo |
| OnApplicationEvent_ContactHelpdesk | Connect2_OrbitMobile_MUI | Orbit_AuditEvents | AuditPayload: AuditPayload_ContactHelpdesk (mandatory) | - |
| OnApplicationEvent_EmailHost | Connect2_OrbitMobile_MUI | Orbit_AuditEvents | AuditPayload: AuditPayload_EmailHost (mandatory) | - |
| PreventNavigation | NavigationHandler | NavigationHandler | NavigationEvent: Object (mandatory) | - |
| zOnApplicationEvent_Wrapper | Connect2_LegacyShared | Audit | EventId: Text (mandatory); AttachmentJSON: Text | - |

## Static entity records named by the flow (Entities.<Entity>.<Record>)

- **ApplicationEvents_Directory** (Connect2_LegacyShared): records used: EmailHousehold
  - EmailHousehold: Id="f3fa3922-32a5-4eeb-bfb6-939a4e8697bd", Is_Active=True, Label="Directory-Functional-EmailHousehold", Order=25
- **Connect_Entity** (Connect_CommonEntities_DB): records used: Member
  - Member: APIKey="Member", Id="Member", Is_Active=True, Label="Member", Order=6
- **LDMApplicationEvent** (Connect2_OrbitMobile_BL): records used: MyTimelineCoordinatorEmailed
  - MyTimelineCoordinatorEmailed: Id="aab084a9-812f-400d-86a1-98e14932344f", Is_Active=True, Label="Connect-Functional-MyTimelineCoordinatorEmailed", Order=26
- **OrbitApplicationEvent** (Connect2_OrbitMobile_BL): records used: EmailHost
  - EmailHost: Id="0611724f-1ac3-4f3d-ac7c-d5ac93195142", Is_Active=True, Label="Orbit Event Detail - Email Host", Order=7
- **UBT_Color** (UBTConnectLibrary): records used: Neutral0, Neutral10, Neutral2, Neutral7
  - Neutral0: Color="neutral-0", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=19
  - Neutral10: Color="neutral-10", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=29
  - Neutral2: Color="neutral-2", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=21
  - Neutral7: Color="neutral-7", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=26
- **UBT_ColumnBehaviour** (UBTConnectLibrary): records used: ExpandMiddle
  - ExpandMiddle: Id="expand-middle", Order=4
- **UBT_FontSize** (UBTConnectLibrary): records used: Base, ExtraSmall, Small
  - Base: Id="base", Order=5
  - ExtraSmall: Id="xs", Order=3
  - Small: Id="s", Order=4
- **UBT_FontWeight** (UBTConnectLibrary): records used: Bold, SemiBold
  - Bold: Id="bold", Order=5
  - SemiBold: Id="semi-bold", Order=4
- **UBT_Icons2** (UBTConnectLibrary): records used: HomePIn
  - HomePIn: Id="connect-icon-home_pin", Is_Active=True, Label="Home PIn"
- **UBT_IconsSize** (UBTConnectLibrary): records used: NonStandard_14
  - NonStandard_14: Label="icon-non-standard-14", Order=6
- **UBT_ImageSize** (UBTConnectLibrary): records used: Base_52, Square
  - Base_52: Id="base", Order=3
  - Square: Id="square", Order=14
- **UBT_Shadow** (UBTConnectLibrary): records used: ExtraSmallTop
  - ExtraSmallTop: Id="xs-top", Order=10
- **UBT_Size** (UBTConnectLibrary): records used: Base, ExtraSmall, Medium, Small
  - Base: Id="base", Order=7
  - ExtraSmall: Id="xs", Order=2
  - Medium: Id="m", Order=8
  - Small: Id="s", Order=4
