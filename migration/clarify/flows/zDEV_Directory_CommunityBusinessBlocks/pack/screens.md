# Pack of UI flow zDEV_Directory_CommunityBusinessBlocks (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: CommunityBusinessDetails, CommunityBusinessDetails_CoomingSoon

## Screen CommunityBusinessDetails (flow zDEV_Directory_CommunityBusinessBlocks)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: CommunityBusinessId: Long Integer
- local variables: CommunityBusinessName: Text
- lifecycle: none

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts) #LayoutDetailPage
  args: In_IsPrimaryColor=False
  placeholder Placeholder_Header_Title:
    expr: CommunityBusinessName
  placeholder Bottom:
    block BottomBarMenu (UBTConnect.App_Common)
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **Handler_CommunityBusinessFetched** inputs: BusinessName: Text (mandatory)
  ```
  assign: CommunityBusinessName = BusinessName
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Screen CommunityBusinessDetails_CoomingSoon (flow zDEV_Directory_CommunityBusinessBlocks)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_CommunityBusinessId: Long Integer (mandatory)
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
