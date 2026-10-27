# Pack of UI flow zTemp_Flow (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Referenced blocks (other modules) used by the flow

Logic of these blocks is not in the dump. 'TST file' is the compiled code on TST (`python3 migration/clarify/tools/tst_source.py show <file>`), when the survey has it.

| Block | Module | Flow | Inputs | Events | TST file |
|---|---|---|---|---|---|
| BlankSlate | OutSystemsUI_2_23 | Content | FullHeight: Boolean = True; ExtendedClass: Text | - | `OutSystemsUI_2_23.Content.BlankSlate.mvc.js` |
| Layout_MainPages | UBTConnectLibrary | Layouts | UsePullToRefresh: Boolean; ExtendedClass: Text; EnableAccessibilityFeatures: Boolean; isGrayBackground: Boolean; AddHeaderGap: Boolean = True | OnHeaderScrolled(Event_IsHeaderScrolled: Boolean (mandatory)); OnPullToRefresh() | `UBTConnectLibrary.Layouts.Layout_MainPages.mvc.js` |
| StaticInput | UBTConnectLibrary | ConnectPatterns | In_Prompt: Text = "Search for households, members or places."; In_ExtendedClasses: Text = "" | Click_Input() | `UBTConnectLibrary.ConnectPatterns.StaticInput.mvc.js` |

## Referenced client actions called

| Action | Module | Folder | Inputs | Outputs |
|---|---|---|---|---|
| LaunchWithData | Connect2_AppLauncherPlugin | - | Data: LauncherParameters (mandatory) | ReturnData: LauncherReturn |

## Static entity records named by the flow (Entities.<Entity>.<Record>)

