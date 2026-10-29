# Pack of UI flow Legacy_OrbitAdminFlow (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: OrbitAdminEventDetail, OrbitAdminLanding, OrbitAdminMilestoneDetail, OrbitAdminMilestones

## Screen OrbitAdminEventDetail (flow Legacy_OrbitAdminFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_EventId: Long Integer (mandatory); In_EventName: Text (mandatory); In_EventStartDate: Date Time (mandatory); In_EventEndDate: Date Time (mandatory); In_EventLocation: Text (mandatory); In_EventTypeFriendly: Text (mandatory)
- local variables: -
- lifecycle: none

#### Widget tree
```
block ScreenBlock_AdminEventDetail (Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow)
  args: In_EventEndDate=In_EventEndDate, In_EventId=In_EventId, In_EventLocation=In_EventLocation, In_EventName=In_EventName, In_EventStartDate=In_EventStartDate, In_EventTypeFriendly=In_EventTypeFriendly
  placeholder BottomBar:
    block BottomBarMenu (UBTConnect.App_Common)
block CommonUI_InsideLayout (UBTConnect.App_Common)
```

## Screen OrbitAdminLanding (flow Legacy_OrbitAdminFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: -
- lifecycle: none

#### Widget tree
```
block ScreenBlock_AdminLanding (Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow)
  on NavigateTo_EventDetail → OnHandle_NavigateToEventDetail(EventEndDate=Event_EventEndDate, EventId=Event_EventId, EventLocation=Event_EventLocation, EventName=Event_EventName, EventStartDate=Event_EventStartDate, EventTypeFriendly=Event_EventTypeFriendly)
  placeholder BottomBar:
    block BottomBarMenu (UBTConnect.App_Common)
block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **OnHandle_NavigateToEventDetail** inputs: EventId: Long Integer (mandatory); EventName: Text (mandatory); EventStartDate: Date Time (mandatory); EventEndDate: Date Time (mandatory); EventLocation: Text (mandatory); EventTypeFriendly: Text (mandatory)
  ```
  call-server GetMilestoneScanFF()
  if (Has Scan Milestone?) GetMilestoneScanFF.IsScanPerMilestone
    navigate → OrbitAdminMilestones(EventId=EventId) transition=Inherited
  else
    navigate → OrbitAdminEventDetail(In_EventEndDate=EventEndDate, In_EventId=EventId, In_EventLocation=EventLocation, In_EventName=EventName, In_EventStartDate=EventStartDate, In_EventTypeFriendly=EventTypeFriendly) transition=Inherited
  ```

## Screen OrbitAdminMilestoneDetail (flow Legacy_OrbitAdminFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_EventId: Long Integer (mandatory); In_MilestoneId: Text (mandatory); In_MilestoneName: Text (mandatory); In_MilestoneDate: Date Time (mandatory); In_MilestoneDescription: Text (mandatory); In_MilestoneStartDate: Date Time (mandatory); In_MilestoneEndDate: Date Time (mandatory)
- local variables: -
- lifecycle: none

#### Widget tree
```
block ScreenBlock_AdminMilestoneDetail (Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow)
  args: In_EventId=In_EventId, In_MilestoneDate=In_MilestoneDate, In_MilestoneDescription=In_MilestoneDescription, In_MilestoneEndDate=In_MilestoneEndDate, In_MilestoneId=In_MilestoneId, In_MilestoneName=In_MilestoneName, In_MilestoneStartDate=In_MilestoneStartDate
  placeholder BottomBar:
    block BottomBarMenu (UBTConnect.App_Common)
block CommonUI_InsideLayout (UBTConnect.App_Common)
```

## Screen OrbitAdminMilestones (flow Legacy_OrbitAdminFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: EventId: Long Integer (mandatory)
- local variables: -
- lifecycle: none

#### Widget tree
```
block ScreenBlock_AdminMilestones (Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow)
  args: EventId=EventId
  on NavigateTo_MilestoneDetail → Handler_NavigateToMilestoneDetail(Event_EventId=Event_EventId, Event_MilestoneDate=Event_MilestoneDate, Event_MilestoneDescription=Event_MilestoneDescription, Event_MilestoneEndDate=Event_MilestoneEndDate, Event_MilestoneId=Event_MilestoneId, Event_MilestoneName=Event_MilestoneName, Event_MilestoneStartDate=Event_MilestoneStartDate)
  placeholder BottomBar:
    block BottomBarMenu (UBTConnect.App_Common)
block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **Handler_NavigateToMilestoneDetail** inputs: Event_EventId: Long Integer (mandatory); Event_MilestoneId: Text (mandatory); Event_MilestoneName: Text (mandatory); Event_MilestoneDate: Date Time (mandatory); Event_MilestoneDescription: Text (mandatory); Event_MilestoneStartDate: Date Time (mandatory); Event_MilestoneEndDate: Date Time (mandatory)
  ```
  call-server GetMilestoneScanFF()
  if (Has Scan Milestone?) GetMilestoneScanFF.IsScanPerMilestone
    navigate → OrbitAdminMilestoneDetail(In_EventId=Event_EventId, In_MilestoneDate=Event_MilestoneDate, In_MilestoneDescription=Event_MilestoneDescription, In_MilestoneEndDate=Event_MilestoneEndDate, In_MilestoneId=Event_MilestoneId, In_MilestoneName=Event_MilestoneName, In_MilestoneStartDate=Event_MilestoneStartDate) transition=Inherited
  else
    navigate → OrbitAdminLanding() transition=Inherited
  ```
