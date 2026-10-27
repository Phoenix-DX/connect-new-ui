# Pack of UI flow Legacy_OrbitEventsFlow (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: EmailContact, EventBooklet, EventDetail, GuestArrangements, HelpersDetail, HostSurvey, MilestoneDetail, OrbitLanding, PassportScan, TransportDetail, ViewDocuments

## Screen EmailContact (flow Legacy_OrbitEventsFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_IsContactHelpdesk: Boolean (mandatory); In_EventId: Long Integer; In_MilestoneId: Text; In_TargetMemberId: Long Integer; In_Subject: Text; In_MilestoneTitle: Text; In_EventName: Text; In_HostName: Text; In_HostEmail: Text; In_FormattedDateTime: Text
- local variables: -
- lifecycle: none

#### Widget tree
```
block ScreenBlock_ContactForm (Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks)
  args: In_EventId=In_EventId, In_EventName=In_EventName, In_FormattedDateTime=In_FormattedDateTime, In_HostEmail=In_HostEmail, In_HostName=In_HostName, In_IsContactHelpdesk=In_IsContactHelpdesk, In_MilestoneId=In_MilestoneId, In_MilestoneName=In_MilestoneTitle, In_Subject=In_Subject, In_TargetMemberId=In_TargetMemberId
  on Submitted → OnHandle_Submitted
  placeholder BottomBar:
    block BottomBarMenu (UBTConnect.App_Common)
block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **OnHandle_Submitted**
  ```
  call GetHasOrbitAccess()
  if (Has Orbit Access?) GetHasOrbitAccess.HasOrbitAccess
    navigate → (Previous Screen)() transition=UseHistory
  else
    call FeedbackMessageAfterTransition(Message="You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", MessageTypeId=IntegerToIdentifier(3))
    navigate → HomeFeed() transition=Inherited
  ```

## Screen EventBooklet (flow Legacy_OrbitEventsFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_EventId: Long Integer (mandatory); In_EventName: Text (mandatory)
- local variables: -
- lifecycle: none

#### Widget tree
```
block ScreenBlock_EventBooklet (Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet)
  args: In_EventId=In_EventId, In_EventName=In_EventName
  on NavigateTo_HouseholdDetail → OnHandle_NavigateToHouseholdDetail(HouseholdId=Event_HouseholdId)
block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **OnHandle_NavigateToHouseholdDetail** inputs: HouseholdId: Long Integer (mandatory)
  ```
  navigate → HouseholdDetails(HouseholdId=HouseholdId) transition=Inherited
  ```

## Screen EventDetail (flow Legacy_OrbitEventsFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_MemberId: Long Integer (mandatory); In_EventId: Long Integer (mandatory); In_EventName: Text (mandatory); In_FromNotification: Boolean
- local variables: -
- lifecycle: none

#### Widget tree
```
block ScreenBlock_EventDetail (Connect2_OrbitMobile_MUI+Connect2_OrbitMobile_MUI.LDM_ScreenBlocks)
  args: In_EventId=In_EventId, In_EventName=In_EventName, In_FromNotification=In_FromNotification, In_MemberId=In_MemberId
  on NavigateTo_TransportDetail → OnHandle_NavigateToTransportDetail(HeaderClass=Event_HeaderClass, MilestoneId=Event_MilestoneId, MilestoneName=Event_MilestoneName, OrbitMilestoneTypeId=Event_OrbitMilestoneTypeId)
  on NavigateTo_EventBooklet → OnHandle_NavigateTo_EventBooklet
  on NavigateTo_HostSurvey → OnHandle_NavigateToHostSurvey(EventEndDate=Event_EventEndDate, EventStartDate=Event_EventStartDate, HouseholderId=Event_HouseholderId)
  on NavigateTo_MilestoneDetail → OnHandle_NavigateToMilestoneDetail(EventId=In_EventId, EventName=Event_EventName, HostId=Event_HostId, MilestoneId=Event_MilestoneId, MilestoneName=Event_MilestoneName, OrbitMilestoneTypeId=Event_OrbitMilestoneTypeId)
  on NavigateTo_GenerateQRCode → OnHandle_NavigateToGenerateQRCode(Event_EventEndDate=Event_EventEndDate, Event_EventLocation=Event_EventLocation, Event_EventStartDate=Event_EventStartDate)
  on NavigateTo_Helpers → OnHandle_NavigateToHelpers(EventId=Event_EventId, HostId=Event_HostId, PreloadEventName=Event_PreloadEventName, PreloadMilestoneName=Event_PreloadMilestoneName)
  on NavigateTo_ContactHelpdesk → OnHandle_ContactHelpdesk(EventName=Event_EventName, Subject=Event_Subject)
  on NavigateTo_ViewDocuments → OnHandle_NavigateToViewDocuments(Event_EventEndDate=Event_EventEndDate, Event_EventLocation=Event_EventLocation, Event_EventStartDate=Event_EventStartDate)
block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **OnHandle_ContactHelpdesk** inputs: Subject: Text (mandatory); EventName: Text (mandatory)
  ```
  call GetHasOrbitAccess()
  if (Has Orbit Access?) GetHasOrbitAccess.HasOrbitAccess
    navigate → ContactByEmailOrbitHelpdesk(In_EventId=In_EventId, In_EventName=EventName, In_MilestoneId="", In_Subject=Subject) transition=Inherited
  else
    call FeedbackMessageAfterTransition(Message="You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", MessageTypeId=IntegerToIdentifier(3))
    navigate → HomeFeed() transition=Inherited
  ```
- **OnHandle_NavigateTo_EventBooklet**
  ```
  navigate → EventBooklet(In_EventId=In_EventId, In_EventName=In_EventName) transition=Inherited
  ```
- **OnHandle_NavigateToGenerateQRCode** inputs: Event_EventStartDate: Date Time (mandatory); Event_EventEndDate: Date Time (mandatory); Event_EventLocation: Text (mandatory)
  ```
  call GetHasOrbitAccess()
  if (Has Orbit Access?) GetHasOrbitAccess.HasOrbitAccess
    navigate → QRCodeGenerate(In_EventEndDate=Event_EventEndDate, In_EventId=In_EventId, In_EventLocation=Event_EventLocation, In_EventName=In_EventName, In_EventStartDate=Event_EventStartDate, In_MemberId=In_MemberId) transition=Inherited
  else
    call FeedbackMessageAfterTransition(Message="You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", MessageTypeId=IntegerToIdentifier(3))
    navigate → HomeFeed() transition=Inherited
  ```
- **OnHandle_NavigateToHelpers** inputs: EventId: Long Integer (mandatory); HostId: Long Integer (mandatory); PreloadEventName: Text (mandatory); PreloadMilestoneName: Text (mandatory)
  ```
  call GetHasOrbitAccess()
  if (Has Orbit Access?) GetHasOrbitAccess.HasOrbitAccess
    navigate → HelpersDetail(In_EventId=EventId, In_EventName=PreloadEventName, In_HostId=HostId, In_MilestoneName=PreloadMilestoneName, In_OrbitMilestoneTypeId=Entities.OrbitMilestoneType.Helper) transition=Inherited
  else
    call FeedbackMessageAfterTransition(Message="You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", MessageTypeId=IntegerToIdentifier(3))
    navigate → HomeFeed() transition=Inherited
  ```
- **OnHandle_NavigateToHostSurvey** inputs: HouseholderId: Long Integer (mandatory); EventStartDate: Date Time (mandatory); EventEndDate: Date Time (mandatory)
  ```
  call GetHasOrbitAccess()
  if (Has Orbit Access?) GetHasOrbitAccess.HasOrbitAccess
    navigate → HostSurvey(In_EventEndDate=EventEndDate, In_EventId=In_EventId, In_EventName=In_EventName, In_EventStartDate=EventStartDate, In_MemberId=HouseholderId) transition=Inherited
  else
    call FeedbackMessageAfterTransition(Message="You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", MessageTypeId=IntegerToIdentifier(3))
    navigate → HomeFeed() transition=Inherited
  ```
- **OnHandle_NavigateToMilestoneDetail** inputs: MilestoneId: Text (mandatory); EventName: Text (mandatory); MilestoneName: Text (mandatory); OrbitMilestoneTypeId: OrbitMilestoneType Identifier (mandatory); EventId: Long Integer (mandatory); HostId: Long Integer (mandatory)
  ```
  call GetHasOrbitAccess()
  if (Has Orbit Access?) GetHasOrbitAccess.HasOrbitAccess
    navigate → MilestoneDetail(In_EventId=EventId, In_EventName=EventName, In_FromNotification=False, In_HostId=HostId, In_MilestoneId=MilestoneId, In_MilestoneName=MilestoneName, In_OrbitMilestoneTypeId=OrbitMilestoneTypeId) transition=Inherited
  else
    call FeedbackMessageAfterTransition(Message="You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", MessageTypeId=IntegerToIdentifier(3))
    navigate → HomeFeed() transition=Inherited
  ```
- **OnHandle_NavigateToTransportDetail** inputs: MilestoneId: Text (mandatory); OrbitMilestoneTypeId: OrbitMilestoneType Identifier (mandatory); MilestoneName: Text (mandatory); HeaderClass: Text (mandatory)
  ```
  call GetHasOrbitAccess()
  if (Has Orbit Access?) GetHasOrbitAccess.HasOrbitAccess
    navigate → TransportDetail(In_HeaderClass=HeaderClass, In_MilestoneId=MilestoneId, In_MilestoneName=MilestoneName, In_OrbitMilestoneTypeId=OrbitMilestoneTypeId, In_TargetMemberId=In_MemberId) transition=Inherited
  else
    call FeedbackMessageAfterTransition(Message="You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", MessageTypeId=IntegerToIdentifier(3))
    navigate → HomeFeed() transition=Inherited
  ```
- **OnHandle_NavigateToViewDocuments** inputs: Event_EventStartDate: Date Time (mandatory); Event_EventEndDate: Date Time (mandatory); Event_EventLocation: Text (mandatory)
  ```
  call GetHasOrbitAccess()
  if (Has Orbit Access?) GetHasOrbitAccess.HasOrbitAccess
    navigate → ViewDocuments(In_EventEndDate=Event_EventEndDate, In_EventId=In_EventId, In_EventLocation=Event_EventLocation, In_EventName=In_EventName, In_EventStartDate=Event_EventStartDate, In_MemberId=In_MemberId) transition=Inherited
  else
    call FeedbackMessageAfterTransition(Message="You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", MessageTypeId=IntegerToIdentifier(3))
    navigate → HomeFeed() transition=Inherited
  ```

## Screen GuestArrangements (flow Legacy_OrbitEventsFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_MilestoneId: Text (mandatory); In_EventId: Long Integer (mandatory); In_MemberId: Long Integer (mandatory); In_HostId: Long Integer (mandatory); In_OrbitMilestoneTypeId: OrbitMilestoneType Identifier (mandatory); In_MilestoneTitle: Text (mandatory); In_EventName: Text (mandatory)
- local variables: -
- lifecycle: none

#### Widget tree
```
block ScreenBlock_GuestArrangements (Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks)
  args: In_EventId=In_EventId, In_HostId=In_HostId, In_MemberId=In_MemberId, In_MilestoneId=In_MilestoneId, In_OrbitMilestoneTypeId=In_OrbitMilestoneTypeId, In_PreloadEventName=In_EventName, In_PreloadMilestoneName=In_MilestoneTitle
  on NavigateTo_HouseholdDetail → OnHandle_NavigateToHouseholdDetail(HouseholdId=Event_HouseholdId)
  on ContactHelpdesk → OnHandle_ContactHelpdesk(EventName=Event_EventName, Subject=Event_Subject)
block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **OnHandle_ContactHelpdesk** inputs: Subject: Text (mandatory); EventName: Text (mandatory)
  ```
  call GetHasOrbitAccess()
  if (Has Orbit Access?) GetHasOrbitAccess.HasOrbitAccess
    navigate → ContactByEmailOrbitHelpdesk(In_EventId=In_EventId, In_EventName=EventName, In_MilestoneId="", In_Subject=Subject) transition=Inherited
  else
    call FeedbackMessageAfterTransition(Message="You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", MessageTypeId=IntegerToIdentifier(3))
    navigate → HomeFeed() transition=Inherited
  ```
- **OnHandle_NavigateToHouseholdDetail** inputs: HouseholdId: Long Integer (mandatory)
  ```
  navigate → HouseholdDetails(HouseholdId=HouseholdId) transition=Inherited
  ```

## Screen HelpersDetail (flow Legacy_OrbitEventsFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_EventId: Long Integer (mandatory); In_OrbitMilestoneTypeId: OrbitMilestoneType Identifier (mandatory); In_MilestoneName: Text (mandatory); In_EventName: Text (mandatory); In_HostId: Long Integer (mandatory)
- local variables: -
- lifecycle: none

#### Widget tree
```
block ScreenBlock_HelperDetails (Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks)
  args: In_EventId=In_EventId, In_HostId=In_HostId, In_OrbitMilestoneTypeId=In_OrbitMilestoneTypeId, In_PreloadEventName=In_EventName, In_PreloadMilestoneName=In_MilestoneName
  on NavigateTo_HouseholdDetail → OnHandle_NavigateToHouseholdDetail(HouseholdId=Event_HouseholdId)
  on NavigateTo_ContactHelpdesk → OnHandle_ContactHelpdesk(EventName=Event_EventName, Subject=Event_Subject)
block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **OnHandle_ContactHelpdesk** inputs: Subject: Text (mandatory); EventName: Text (mandatory)
  ```
  call GetHasOrbitAccess()
  if (Has Orbit Access?) GetHasOrbitAccess.HasOrbitAccess
    navigate → ContactByEmailOrbitHelpdesk(In_EventId=In_EventId, In_EventName=EventName, In_MilestoneId="", In_Subject=Subject) transition=Inherited
  else
    call FeedbackMessageAfterTransition(Message="You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", MessageTypeId=IntegerToIdentifier(3))
    navigate → HomeFeed() transition=Inherited
  ```
- **OnHandle_NavigateToHouseholdDetail** inputs: HouseholdId: Long Integer (mandatory)
  ```
  navigate → HouseholdDetails(HouseholdId=HouseholdId) transition=Inherited
  ```

## Screen HostSurvey (flow Legacy_OrbitEventsFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_EventId: Long Integer (mandatory); In_MemberId: Long Integer (mandatory); In_EventName: Text (mandatory); In_EventStartDate: Date Time (mandatory); In_EventEndDate: Date Time (mandatory)
- local variables: -
- lifecycle: none

#### Widget tree
```
block CommonUI_InsideLayout (UBTConnect.App_Common)
block ScreenBlock_HostSurvey (Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey)
  args: In_EventEndDate=In_EventEndDate, In_EventId=In_EventId, In_EventName=In_EventName, In_EventStartDate=In_EventStartDate, In_MemberId=In_MemberId
  on NavigateTo_Back → OnHandle_NavigateTo_Back
```

#### Screen actions
- **OnHandle_NavigateTo_Back**
  ```
  navigate → (Previous Screen)() transition=UseHistory
  ```

## Screen MilestoneDetail (flow Legacy_OrbitEventsFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_FromNotification: Boolean (mandatory); In_MilestoneId: Text (mandatory); In_EventId: Long Integer (mandatory); In_HostId: Long Integer; In_OrbitMilestoneTypeId: OrbitMilestoneType Identifier; In_MilestoneName: Text; In_EventName: Text (mandatory)
- local variables: -
- lifecycle: none

#### Widget tree
```
block ScreenBlock_MilestoneWrapper (Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks)
  args: In_EventId=In_EventId, In_EventName=In_EventName, In_FromNotification=In_FromNotification, In_HostId=In_HostId, In_MilestoneId=In_MilestoneId, In_MilestoneName=In_MilestoneName, In_OrbitMilestoneTypeId=In_OrbitMilestoneTypeId
  on NavigateTo_GuestArrangements → OnHandle_NavigateTo_GuestArrangements(HostId=Event_HostId, MemberId=Event_MemberId, MilestoneTitle=Event_MilestoneTitle, MilestoneTypeId=Event_MilestoneTypeId)
  on NavigateTo_HouseholdDetail → OnHandle_NavigateToHouseholdDetail(HouseholdId=Event_HouseholdId)
  on NavigateTo_ContactHelpdesk → OnHandle_ContactHelpdesk(EventName=Event_EventName, Subject=Event_Subject)
  on NavigateTo_ContactHostByEmail → OnHandle_NavigateToContactByEmail(In_AvatarURL=In_AvatarURL, In_ContactCountry=In_ContactCountry, In_ContactLocality=In_ContactLocality, In_ContactName=In_ContactName, In_EmailTo=In_EmailTo, In_FormattedDateTime=In_FormattedDateTime, In_MilestoneTitle=In_MilestoneTitle, In_Subject=In_Subject)
  placeholder CommonUI_Elements_MealGuest:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
  placeholder CommonUI_Elements_MealHost:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
  placeholder CommonUI_Elements_AccommodationGuest:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
  placeholder CommonUI_Elements_AccomodationHost:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **OnHandle_ContactHelpdesk** inputs: Subject: Text (mandatory); EventName: Text (mandatory)
  ```
  call GetHasOrbitAccess()
  if (Has Orbit Access?) GetHasOrbitAccess.HasOrbitAccess
    navigate → ContactByEmailOrbitHelpdesk(In_EventId=In_EventId, In_EventName=EventName, In_MilestoneId="", In_Subject=Subject) transition=Inherited
  else
    call FeedbackMessageAfterTransition(Message="You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", MessageTypeId=IntegerToIdentifier(3))
    navigate → HomeFeed() transition=Inherited
  ```
- **OnHandle_NavigateTo_GuestArrangements** inputs: MemberId: Long Integer (mandatory); MilestoneTypeId: OrbitMilestoneType Identifier (mandatory); MilestoneTitle: Text (mandatory); HostId: Long Integer (mandatory)
  ```
  call GetHasOrbitAccess()
  if (Has Orbit Access?) GetHasOrbitAccess.HasOrbitAccess
    navigate → GuestArrangements(In_EventId=In_EventId, In_EventName=In_EventName, In_HostId=HostId, In_MemberId=MemberId, In_MilestoneId=In_MilestoneId, In_MilestoneTitle=MilestoneTitle, In_OrbitMilestoneTypeId=MilestoneTypeId) transition=Inherited
  else
    call FeedbackMessageAfterTransition(Message="You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", MessageTypeId=IntegerToIdentifier(3))
    navigate → HomeFeed() transition=Inherited
  ```
- **OnHandle_NavigateToContactByEmail** inputs: In_AvatarURL: Text (mandatory); In_ContactName: Text (mandatory); In_ContactLocality: Text (mandatory); In_ContactCountry: Text (mandatory); In_EmailTo: Text (mandatory); In_Subject: Text (mandatory); In_MilestoneTitle: Text (mandatory); In_FormattedDateTime: Text (mandatory)
  ```
  call GetNameAndSurname_ByFullName(In_FullName=In_ContactName)
  navigate → ContactByEmailOrbitHost(In_AvatarURL=In_AvatarURL, In_ContactCountry=In_ContactCountry, In_ContactLocality=In_ContactLocality, In_EntityId=In_HostId, In_EntityType=Entities.Connect_Entity.Member, In_EventName=In_EventName, In_FormattedDateTime=In_FormattedDateTime, In_HostEmail=In_EmailTo, In_HostName=In_ContactName, In_MilestoneTitle=In_MilestoneTitle, In_Subject=In_Subject, In_Surname=GetNameAndSurname_ByFullName.Out_Surname) transition=Inherited
  ```
- **OnHandle_NavigateToHouseholdDetail** inputs: HouseholdId: Long Integer (mandatory)
  ```
  navigate → HouseholdDetails(HouseholdId=HouseholdId) transition=Inherited
  ```

## Screen OrbitLanding (flow Legacy_OrbitEventsFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: -
- lifecycle: none

#### Widget tree
```
block ScreenBlock_OrbitLanding (Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks)
  on NavigateTo_EventDetail → OnHandle_NavigateToEventDetail(EventId=Event_EventId, EventName=Event_EventName, MemberId=Event_MemberId)
  on NavigateTo_PassportScan → OnHandle_NavigateToPassportScan(LoginMemberId=LoginMemberId, TargetMemberId=TargetId)
  on NavigateTo_TransportDetail → OnHandle_NavigateToTransportDetail(HeaderClass=Event_HeaderClass, MilestoneId=Event_MilestoneId, MilestoneName=Event_MilestoneName, OrbitMilestoneTypeId=Event_OrbitMilestoneTypeId, TargetMemberId=Event_MemberId)
  on NavigateTo_MyCalendarOrbit → OnHandle_NavigateToMyCalendarOrbit(MemberId=MemberId)
  placeholder BottomBar:
    block BottomBarMenu (UBTConnect.App_Common)
block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **OnHandle_NavigateToEventDetail** inputs: EventId: Long Integer (mandatory); EventName: Text (mandatory); MemberId: Long Integer (mandatory)
  ```
  call GetHasOrbitAccess()
  if (Has Orbit Access?) GetHasOrbitAccess.HasOrbitAccess
    navigate → EventDetail(In_EventId=EventId, In_EventName=EventName, In_FromNotification=False, In_MemberId=MemberId) transition=Inherited
  else
    call FeedbackMessageAfterTransition(Message="You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", MessageTypeId=IntegerToIdentifier(3))
    navigate → HomeFeed() transition=Inherited
  ```
- **OnHandle_NavigateToMyCalendarOrbit** inputs: MemberId: Long Integer (mandatory)
  ```
  navigate → MyEntertaining(MyCalendarEventSourceId=Entities.Type_MyCalendarEventSource.Orbit) transition=Inherited
  ```
- **OnHandle_NavigateToPassportScan** inputs: TargetMemberId: Long Integer (mandatory); LoginMemberId: Long Integer (mandatory)
  ```
  call GetHasOrbitAccess()
  if (Has Orbit Access?) GetHasOrbitAccess.HasOrbitAccess
    navigate → PassportScan(LoginMemberId=LoginMemberId, TargetId=TargetMemberId) transition=Inherited
  else
    navigate → HomeFeed() transition=Inherited
  ```
- **OnHandle_NavigateToTransportDetail** inputs: MilestoneId: Text (mandatory); OrbitMilestoneTypeId: OrbitMilestoneType Identifier (mandatory); MilestoneName: Text (mandatory); HeaderClass: Text (mandatory); TargetMemberId: Long Integer (mandatory)
  ```
  call GetHasOrbitAccess()
  if (Has Orbit Access?) GetHasOrbitAccess.HasOrbitAccess
    navigate → TransportDetail(In_HeaderClass=HeaderClass, In_MilestoneId=MilestoneId, In_MilestoneName=MilestoneName, In_OrbitMilestoneTypeId=OrbitMilestoneTypeId, In_TargetMemberId=TargetMemberId) transition=Inherited
  else
    call FeedbackMessageAfterTransition(Message="You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", MessageTypeId=IntegerToIdentifier(3))
    navigate → HomeFeed() transition=Inherited
  ```

## Screen PassportScan (flow Legacy_OrbitEventsFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: TargetId: Long Integer (mandatory); LoginMemberId: Long Integer (mandatory)
- local variables: -
- lifecycle: none

#### Widget tree
```
block ScreenBlock_PassportScan (OrbitPassportScanC2.PassportScan)
  args: LoginMemberId=LoginMemberId, TargetMemberId=TargetId
  on Close → Handler_OnClose
  placeholder CommonUI_Elements:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **Handler_OnClose**
  ```
  navigate → (Previous Screen)() transition=UseHistory
  ```

## Screen TransportDetail (flow Legacy_OrbitEventsFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_MilestoneId: Text (mandatory); In_OrbitMilestoneTypeId: OrbitMilestoneType Identifier (mandatory); In_MilestoneName: Text (mandatory); In_HeaderClass: Text (mandatory); In_TargetMemberId: Long Integer (mandatory)
- local variables: -
- lifecycle: none

#### Widget tree
```
block ScreenBlock_TransportDetail (Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks)
  args: In_HeaderClass=In_HeaderClass, In_MilestoneId=In_MilestoneId, In_OrbitMilestoneTypeId=In_OrbitMilestoneTypeId, In_PreloadMilestoneName=In_MilestoneName
  on NavigateTo_ContactHelpdesk → OnHandle_ContactHelpdesk(EventName=Event_EventName, Subject=Event_Subject)
block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **OnHandle_ContactHelpdesk** inputs: Subject: Text (mandatory); EventName: Text (mandatory)
  ```
  call GetHasOrbitAccess()
  if (Has Orbit Access?) GetHasOrbitAccess.HasOrbitAccess
    navigate → ContactByEmailOrbitHelpdesk(In_EventId=NullIdentifier(), In_EventName=EventName, In_MilestoneId=In_MilestoneId, In_Subject=Subject, In_TargetMemberId=In_TargetMemberId) transition=Inherited
  else
    call FeedbackMessageAfterTransition(Message="You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", MessageTypeId=IntegerToIdentifier(3))
    navigate → HomeFeed() transition=Inherited
  ```

## Screen ViewDocuments (flow Legacy_OrbitEventsFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_MemberId: Long Integer (mandatory); In_EventId: Long Integer (mandatory); In_EventName: Text (mandatory); In_EventStartDate: Date Time (mandatory); In_EventEndDate: Date Time (mandatory); In_EventLocation: Text (mandatory)
- local variables: -
- lifecycle: none

#### Widget tree
```
block ScreenBlock_ViewDocuments (Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents)
  args: In_EventEndDate=In_EventEndDate, In_EventId=In_EventId, In_EventLocation=In_EventLocation, In_EventName=In_EventName, In_EventStartDate=In_EventStartDate, In_MemberId=In_MemberId
  on ContactHelpdesk → OnHandle_ContactHelpdesk(EventName=Event_EventName, Subject=Event_Subject)
block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **OnHandle_ContactHelpdesk** inputs: Subject: Text (mandatory); EventName: Text (mandatory)
  ```
  call GetHasOrbitAccess()
  if (Has Orbit Access?) GetHasOrbitAccess.HasOrbitAccess
    navigate → ContactByEmailOrbitHelpdesk(In_EventId=In_EventId, In_EventName=EventName, In_MilestoneId="", In_Subject=Subject) transition=Inherited
  else
    call FeedbackMessageAfterTransition(Message="You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", MessageTypeId=IntegerToIdentifier(3))
    navigate → HomeFeed() transition=Inherited
  ```
