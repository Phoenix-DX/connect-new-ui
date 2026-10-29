# Pack of UI flow Legacy_OrbitQRCodeFlow (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: QRCodeGenerate

## Screen QRCodeGenerate (flow Legacy_OrbitQRCodeFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_MemberId: Long Integer (mandatory); In_EventId: Long Integer (mandatory); In_EventName: Text (mandatory); In_EventStartDate: Date Time (mandatory); In_EventEndDate: Date Time (mandatory); In_EventLocation: Text (mandatory)
- local variables: -
- lifecycle: none

#### Widget tree
```
block ScreenBlock_GenerateQRCode (Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode)
  args: In_EventEndDate=In_EventEndDate, In_EventId=In_EventId, In_EventLocation=In_EventLocation, In_EventName=In_EventName, In_EventStartDate=In_EventStartDate, In_MemberId=In_MemberId
  on NavigateTo_ContactHelpdesk → OnHandle_ContactHelpdesk(EventName=Event_EventName, Subject=Event_Subject)
block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **OnHandle_ContactHelpdesk** inputs: Subject: Text (mandatory); EventName: Text (mandatory)
  ```
  navigate → ContactByEmailOrbitHelpdesk(In_EventId=In_EventId, In_EventName=EventName, In_MilestoneId="", In_Subject=Subject) transition=Inherited
  ```
