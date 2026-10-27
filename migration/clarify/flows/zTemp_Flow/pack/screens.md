# Pack of UI flow zTemp_Flow (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: ShareObject, TestOpenShare

## Screen ShareObject (flow zTemp_Flow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_ShareObjectTypeId: Type_ShareObject Identifier (mandatory); In_ObjectId: Long Integer (mandatory)
- local variables: -
- lifecycle: none

#### Widget tree
```
block Layout_MainPages (UBTConnectLibrary.Layouts)
  placeholder Placeholder_Header_Input:
    block StaticInput (UBTConnectLibrary.ConnectPatterns)
  placeholder Content:
    block BlankSlate (OutSystemsUI_2_23.Content)
      placeholder Icon:
        icon ellipsis-h size=Twotimes  [style="icon"]
      placeholder Content:
        text: Comming soon
```

## Screen TestOpenShare (flow zTemp_Flow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: -
- lifecycle: none

#### Widget tree
```
block Layout_MainPages (UBTConnectLibrary.Layouts)
  placeholder Placeholder_Header_Input:
    block StaticInput (UBTConnectLibrary.ConnectPatterns)
  placeholder Content:
    button onclick → ButtonOnClick  [style="btn btn-primary"]
      text: Button
```

#### Screen actions
- **ButtonOnClick**
  ```
  call LaunchWithData(Data={ packageName: "com.microsoft.office.outlook", actionName: "android.intent.action.SEND", dataType: "text/plain", extras: [ { name: "android.intent.extra.SUBJECT", dataType: "String", value: [ "Check …)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
