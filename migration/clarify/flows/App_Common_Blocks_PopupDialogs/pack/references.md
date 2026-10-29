# Pack of UI flow App_Common_Blocks_PopupDialogs (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Referenced blocks (other modules) used by the flow

Logic of these blocks is not in the dump. 'TST file' is the compiled code on TST (`python3 migration/clarify/tools/tst_source.py show <file>`), when the survey has it.

| Block | Module | Flow | Inputs | Events | TST file |
|---|---|---|---|---|---|
| ActionConfirmationDialog | NavigationHandler | ConfirmationDialogs | - | Confirmed() | `NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc.js` |
| Button | UBTConnect_Utils | CW_Common | ButtonExtendedClass: Text; IsDisabled: Boolean; IsIconOnRight: Boolean; ButtonText: Text (mandatory); IconText_SpacingSize: UBT_Size Identifier = xs; TextExtendedClasses: Text; ButtonOptions: ButtonOptions; IconId: UBT_Icons2 Identifier; HideIcon: Boolean | buttonOnClick() | `UBTConnect_Utils.CW_Common.Button.mvc.js` |
| Button | UBTConnectLibrary | ConnectPatterns | In_ButtonOptions: ButtonOptions; In_ExtendedClass: Text; In_IsDisabled: Boolean | Event_OnClick() | `UBTConnectLibrary.ConnectPatterns.Button.mvc.js` |
| CustomContainer | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; Options: ContainerOptions | Clicked() | `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` |
| ExitConfirmationDialog | NavigationHandler | ConfirmationDialogs | Force: Boolean | - | `NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc.js` |
| NavigationConfirmationDialog | NavigationHandler | ConfirmationDialogs | - | Navigation(NavigationEvent: Object (mandatory)) | `NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc.js` |

## Referenced client actions called

| Action | Module | Folder | Inputs | Outputs |
|---|---|---|---|---|

## Static entity records named by the flow (Entities.<Entity>.<Record>)

- **UBT_ButtonSize** (UBTConnectLibrary): records used: Small
  - Small: Id="s", Order=3
- **UBT_Color** (UBTConnectLibrary): records used: Neutral10
  - Neutral10: Color="neutral-10", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=29
- **UBT_FontSize** (UBTConnectLibrary): records used: Base
  - Base: Id="base", Order=5
- **UBT_FontWeight** (UBTConnectLibrary): records used: SemiBold
  - SemiBold: Id="semi-bold", Order=4
- **UBT_Size** (UBTConnectLibrary): records used: Base, Medium
  - Base: Id="base", Order=7
  - Medium: Id="m", Order=8
