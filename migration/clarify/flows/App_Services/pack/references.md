# Pack of UI flow App_Services (DEV model, MCP dump of flows 2026-10-27)

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
| Columns_Two | UBTConnectLibrary | BasePatterns | ColumnOptions: ColumnOptions; ExtendedClasses: Text | - | `UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js` |
| CustomContainer | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; Options: ContainerOptions | Clicked() | `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` |
| CustomText | UBTConnectLibrary | BasePatterns | In_Text: Text (mandatory); In_TextOptions: TextOptions (mandatory); In_PaddingOptions: SpacingOptions; In_HighlightWords: Text; In_HighlightOptions: TextOptions; ExtendedClasses: Text; FitContent: Boolean; InJustifyText: Boolean; NoWrap: Boolean; InlineIcon: InlineIcon | Clicked() | `UBTConnectLibrary.BasePatterns.CustomText.mvc.js` |
| FixedFooter | UBTConnectLibrary | ConnectPatterns | useBottomBar: Boolean (mandatory); ExpectedFooterHeight: Text (mandatory); ContentContainerId: Text (mandatory) | - | `UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc.js` |
| Icon | UBTConnectLibrary | ConnectPatterns | In_IconId: UBT_Icons2 Identifier (mandatory); In_ColorId: UBT_Color Identifier = neutral-9; In_SizeId: UBT_IconsSize Identifier; In_Visible: Boolean = True; In_ExtendedClasses: Text = "" | Click() | `UBTConnectLibrary.ConnectPatterns.Icon.mvc.js` |
| IconText | UBTConnectLibrary | ConnectPatterns | IsIconOnRight: Boolean; Text: Text (mandatory); TextOptions: TextOptions; SpacingSize: UBT_Size Identifier = xs; ExtendedClasses: Text; SubtextOptions: TextOptions; In_Subtext: Text; In_JustifyText: Boolean | Clicked() | `UBTConnectLibrary.ConnectPatterns.IconText.mvc.js` |
| Layout_DetailPage | UBTConnectLibrary | Layouts | In_AlignTitleLeft: Boolean; In_IsPrimaryColor: Boolean = True; In_ExtendedClass: Text; In_EnableAccessibilityFeatures: Boolean; In_InitializeNavigationHandler: Boolean = True; In_IsHideTitle: Boolean | OnReadyEvent(WrapperContainerId: Text (mandatory)) | `UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js` |
| SkeletonSection | UBTConnectLibrary | ConnectPatterns | In_IsLoading: Boolean (mandatory); In_ExtendedClass: Text; In_IsActiveWhileLoading: Boolean | - | `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js` |
| SortableList | SortableJS | Sortable | Group: Text (mandatory); DenyLists: Text List; PreventDomMove: Boolean = True | OnDragEnd(FromId: Text (mandatory); ToId: Text (mandatory); OldIndex: Integer (mandatory); NewIndex: Integer (mandatory); ItemId: Text (mandatory)) | `SortableJS.Sortable.SortableList.mvc.js` |
| SortableList_Draggable | SortableJS | Sortable | Id: Text (mandatory); UseCustomDragHandle: Boolean | - | `SortableJS.Sortable.SortableList_Draggable.mvc.js` |

## Referenced client actions called

| Action | Module | Folder | Inputs | Outputs |
|---|---|---|---|---|
| FeedbackMessage_AutoClose | UBTJavaScriptUtils | JSUtils_FeedbackMessage | Title: Text; Message: Text (mandatory); MessageType: UBT_MessageType Identifier = Entities.UBT_MessageType.Error; EncodedHTML: Boolean = True; ExtendedClass: Text; DelayMs: Integer = 0; useDebounce: Boolean | - |
| ListAppendAll | (System) | - | List: Generic Record List (mandatory); SourceList: Generic Record List (mandatory) | - |
| ListFilter | (System) | - | SourceList: Generic Record List (mandatory); Condition: Boolean (mandatory) | FilteredList: Generic Record List |
| ListIndexOf | (System) | - | List: Generic Record List (mandatory); Condition: Boolean (mandatory) | Position: Integer |
| ListInsert | (System) | - | List: Generic Record List (mandatory); Element: Generic Record (mandatory); Position: Integer (mandatory) | - |
| ListRemove | (System) | - | List: Generic Record List (mandatory); Position: Integer (mandatory) | - |

## Static entity records named by the flow (Entities.<Entity>.<Record>)

- **UBT_Color** (UBTConnectLibrary): records used: Neutral0, Neutral1, Neutral10, Neutral4, Neutral6, Neutral7, Primary
  - Neutral0: Color="neutral-0", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=19
  - Neutral1: Color="neutral-1", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=20
  - Neutral10: Color="neutral-10", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=29
  - Neutral4: Color="neutral-4", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=23
  - Neutral6: Color="neutral-6", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=25
  - Neutral7: Color="neutral-7", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=26
  - Primary: Color="primary", IsActive=True, IsBrand=True, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=1
- **UBT_ColumnBehaviour** (UBTConnectLibrary): records used: ExpandMiddle, ReduceFirst, ReduceLast
  - ExpandMiddle: Id="expand-middle", Order=4
  - ReduceFirst: Id="reduce-first", Order=1
  - ReduceLast: Id="reduce-last", Order=3
- **UBT_FontSize** (UBTConnectLibrary): records used: Base, Heading6
  - Base: Id="base", Order=5
  - Heading6: Id="h6", Order=6
- **UBT_FontWeight** (UBTConnectLibrary): records used: SemiBold
  - SemiBold: Id="semi-bold", Order=4
- **UBT_Icons2** (UBTConnectLibrary): records used: AddCircle, CancelFill, DragIndicator
  - AddCircle: Id="connect-icon-add_circle", Is_Active=True, Label="Add Circle"
  - CancelFill: Id="connect-icon-cancel_fill", Is_Active=True, Label="Cancel Fill"
  - DragIndicator: Id="connect-icon-drag_indicator", Is_Active=True, Label="Drag Indicator"
- **UBT_IconsSize** (UBTConnectLibrary): records used: Base_24, NonStandard_14
  - Base_24: Label="icon-base", Order=3
  - NonStandard_14: Label="icon-non-standard-14", Order=6
- **UBT_MessageType** (UBTJavaScriptUtils): records used: Success
  - Success: Id=2, Label="Success"
- **UBT_Shadow** (UBTConnectLibrary): records used: ExtraSmallTop
  - ExtraSmallTop: Id="xs-top", Order=10
- **UBT_Shape** (UBTConnectLibrary): records used: Rounded
  - Rounded: Id="rounded", Order=5
- **UBT_Size** (UBTConnectLibrary): records used: Base, ExtraSmall, Small
  - Base: Id="base", Order=7
  - ExtraSmall: Id="xs", Order=2
  - Small: Id="s", Order=4
- **UBT_VerticalAlign** (UBTConnectLibrary): records used: Center
  - Center: Id="center", Order=2
