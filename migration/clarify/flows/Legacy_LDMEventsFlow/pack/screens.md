# Pack of UI flow Legacy_LDMEventsFlow (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: EmailTarget, LDM_Email, LDM_EventDetail, LDM_MyEvents

## Screen EmailTarget (flow Legacy_LDMEventsFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_HouseholdFirstName: Text (mandatory); In_HouseholdFullName: Text (mandatory); EmailTo: Email (mandatory); ContactBusinessType: CommunityBusinessType2 Identifier; InitialEmailSubject: Text; EmailHost: Boolean; IsFromLDM: Boolean; EventDate: Date; EventLocality: Text
- local variables: -
- lifecycle: none

#### Widget tree
```
block ScreenBlock_Household_Email (Connect2_LegacyShared.Email)
  args: ContactBusinessType=ContactBusinessType, EmailTo=EmailTo, In_HouseholdFirstName=In_HouseholdFirstName, In_HouseholdFullName=In_HouseholdFullName, InitialEmailSubject=InitialEmailSubject
  on EmailSubmitted → OnEmailLDMEventParticipant_Handler
  placeholder BottomBar:
    block BottomBarMenu (UBTConnect.App_Common)
block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **OnEmailLDMEventParticipant_Handler**
  ```
  if IsFromLDM
    call AddAuditEventDetailEvent(EventDate=EventDate, EventLocality=EventLocality, EventTypeId=If(EmailHost,Entities.ApplicationEvents_LDM.MyTimelineHostEmailed, Entities.ApplicationEvents_LDM.MyTimelineGuessEmailed))
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Screen LDM_Email (flow Legacy_LDMEventsFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: EventHostId: Long Integer; In_EventId: Long Integer; In_IsMessageGuest: Boolean; In_IsContactOrganiser: Boolean; EventDate: Date; EventLocality: Text
- local variables: -
- lifecycle: none

#### Widget tree
```
block ScreenBlock_Event_Email (Connect2_OrbitMobile_MUI.LDM_ScreenBlocks)
  args: EventDate=EventDate, EventLocality=EventLocality, In_EventHostId=EventHostId, In_EventId=In_EventId, In_IsContactOrganiser=In_IsContactOrganiser, In_IsMessageGuest=In_IsMessageGuest
  placeholder BottomBar:
    block BottomBarMenu (UBTConnect.App_Common)
block CommonUI_InsideLayout (UBTConnect.App_Common)
```

## Screen LDM_EventDetail (flow Legacy_LDMEventsFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: EventHostId: Long Integer (mandatory); EventId: Long Integer
- local variables: -
- lifecycle: none

#### Widget tree
```
block ScreenBlock_EventDetail (Connect2_OrbitMobile_MUI+Connect2_OrbitMobile_MUI.LDM_ScreenBlocks)
  args: EventHostId=EventHostId, EventId=EventId
  on NavigateTo_HouseholdDetail → Handler_EventDetailNavigateTo_HouseholdDetail(Event_HouseholdId=Event_HouseholdId)
  on NavigateTo_WebMaps → Handler_NavigateTo_WebMaps(api=api, query=query)
  on NavigateTo_HouseholdCarousel → Handler_NavigateTo_HouseholdCarousel(HouseholdIdList=HouseholdIdList, SelectedHouseholdId=Household_Id)
  on NavigateTo_AndroidMaps → Handler_NavigateTo_AndroidMaps(q=q)
  on NavigateTo_ContactByEmail → Handler_NavigateTo_ContactByEmail(Event_AvatarURL=Event_AvatarURL, Event_ContactCountry=Event_ContactCountry, Event_ContactLocality=Event_ContactLocality, Event_ContactName=Event_ContactName, Event_ContactSurname=Event_ContactSurname, Event_Date=Event_Date, Event_EmailTo=Event_EmailTo, Event_IsContactCoordinator=Event_IsCoordinator, Event_Locality=Event_Locality, Event_Subject=Event_Subject)
  placeholder BottomBar:
    block BottomBarMenu (UBTConnect.App_Common)
block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **Handler_EventDetailNavigateTo_HouseholdDetail** inputs: Event_HouseholdId: Long Integer (mandatory)
  ```
  navigate → HouseholdDetails(HouseholdId=Event_HouseholdId) transition=Inherited
  ```
- **Handler_NavigateTo_AndroidMaps** inputs: q: Text (mandatory)
  ```
  navigate → AndroidMaps(q=q) transition=Inherited
  ```
- **Handler_NavigateTo_ContactByEmail** inputs: Event_AvatarURL: Text (mandatory); Event_ContactName: Text (mandatory); Event_ContactSurname: Text (mandatory); Event_ContactLocality: Text (mandatory); Event_ContactCountry: Text (mandatory); Event_EmailTo: Text (mandatory); Event_IsContactCoordinator: Boolean (mandatory); Event_Subject: Text (mandatory); Event_Date: Date (mandatory); Event_Locality: Text (mandatory)
  ```
  if Event_IsContactCoordinator
    navigate → ContactByEmailLDMCoordinator(In_AvatarURL=Event_AvatarURL, In_ContactName=Event_ContactName, In_EmailTo=Event_EmailTo, In_EventDate=Event_Date, In_EventLocality=Event_Locality, In_Subject=Event_Subject) transition=Inherited
  else
    call GetNameAndSurname_ByFullName(In_FullName=Event_ContactName)
    navigate → ContactByEmailMember(In_AvatarURL=Event_AvatarURL, In_ContactCountry=Event_ContactCountry, In_ContactLocality=Event_ContactLocality, In_ContactName=GetNameAndSurname_ByFullName.Out_Name, In_ContactSurname=GetNameAndSurname_ByFullName.Out_Surname, In_EmailTo=Event_EmailTo, In_HouseholdHeaderName=GetNameAndSurname_ByFullName.Out_Surname, In_IsHousehold=True, In_LDMEventDate=Event_Date, In_LDMEventLocality=Event_Locality) transition=Inherited
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] javascript GetSurnameFromName(In_Name=Event_ContactName) → Out_Surname: Text
      | $parameters.Out_Surname = $parameters.In_Name.split(" ").at(-1);
    [DISABLED] navigate → ContactByEmailMember(In_AvatarURL=Event_AvatarURL, In_ContactCountry=Event_ContactCountry, In_ContactLocality=Event_ContactLocality, In_ContactName=Trim(Replace(Event_ContactName,GetSurnameFromName.Out_Surname,"")), In_ContactSurname=Event_ContactSurname, In_EmailTo=Event_EmailTo, In_HouseholdHeaderName=GetSurnameFromName.Out_Surname, In_IsHousehold=True, In_LDMEventDate=Event_Date, In_LDMEventLocality=Event_Locality) transition=Inherited
  ```
- **Handler_NavigateTo_HouseholdCarousel** inputs: SelectedHouseholdId: Long Integer (mandatory); HouseholdIdList: Long Integer List (mandatory); locals: PreloadedHouseholdIds: CarouselPreloadedHouseholds
  ```
  call GetHasCarouselEnabled()
  if GetHasCarouselEnabled.HasCarouselEnabled
    [M1] for each HouseholdIdList
      call ListAppend(Element={ Household: HouseholdIdList.Current }, List=PreloadedHouseholdIds.CarouselHouseholdItem)
      → continues at [M1]
    end for
    call SetPreloadObject(Preload=ToObject(PreloadedHouseholdIds))
    navigate → HouseholdCarousel(In_StartingHouseholdId=SelectedHouseholdId) transition=Inherited
  else
    navigate → HouseholdDetails(HouseholdId=SelectedHouseholdId) transition=Inherited
  ```
- **Handler_NavigateTo_WebMaps** inputs: api: Integer (mandatory); query: Text (mandatory)
  ```
  navigate → WebMaps(api=api, query=query) transition=Inherited
  ```

## Screen LDM_MyEvents (flow Legacy_LDMEventsFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: -
- lifecycle: none

#### Widget tree
```
block ScreenBlock_MyEvents (Connect2_OrbitMobile_MUI.LDM_ScreenBlocks)
  on NavigateTo_HouseholdCarousel → Handler_NavigateTo_HouseholdCarousel(HouseholdIdList=In_HouseholdIdList, In_HouseholdId=In_HouseholdId)
  on NavigateToMyCalendar → ScreenBlock_MyEventsNavigateToMyCalendar
  on NavigateTo_ContactByEmail → Handler_NavigateTo_ContactByEmail(In_AvatarURL=In_AvatarURL, In_ContactCountry=In_ContactCountry, In_ContactLocality=In_ContactLocality, In_ContactName=In_ContactName, In_EmailTo=In_EmailTo)
  on NavigateTo_EventDetail → Handler_NavigateTo_EventDetail(In_EventHostId=EventHostId, In_EventId=EventId)
  placeholder BottomBar:
    block BottomBarMenu (UBTConnect.App_Common)
block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **Handler_NavigateTo_ContactByEmail** inputs: In_AvatarURL: Text (mandatory); In_ContactName: Text (mandatory); In_ContactLocality: Text (mandatory); In_ContactCountry: Text (mandatory); In_EmailTo: Text (mandatory)
  ```
  call GetNameAndSurname_ByFullName(In_FullName=In_ContactName)
  navigate → ContactByEmailMember(In_AvatarURL=In_AvatarURL, In_ContactCountry=In_ContactCountry, In_ContactLocality=In_ContactLocality, In_ContactName=GetNameAndSurname_ByFullName.Out_Name, In_ContactSurname=GetNameAndSurname_ByFullName.Out_Surname, In_EmailTo=In_EmailTo, In_HouseholdHeaderName=GetNameAndSurname_ByFullName.Out_Surname, In_IsHousehold=True) transition=Inherited
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] javascript GetSurnameFromName(In_Name=In_ContactName) → Out_Surname: Text
      | $parameters.Out_Surname = $parameters.In_Name.split(" ").at(-1);
    [DISABLED] navigate → ContactByEmailMember(In_AvatarURL=In_AvatarURL, In_ContactCountry=In_ContactCountry, In_ContactLocality=In_ContactLocality, In_ContactName=Trim(Replace(In_ContactName,GetSurnameFromName.Out_Surname,"")), In_ContactSurname=In_ContactSurname, In_EmailTo=In_EmailTo, In_HouseholdHeaderName=GetSurnameFromName.Out_Surname, In_IsHousehold=True) transition=Inherited
  ```
- **Handler_NavigateTo_EventDetail** inputs: In_EventHostId: Long Integer (mandatory); In_EventId: Long Integer (mandatory)
  ```
  call GetHasNewLDM()
  if GetHasNewLDM.Out_HasNewLDM
    navigate → LDM_EventDetail_V2(EventHostId=In_EventHostId, EventId=In_EventId) transition=Inherited
  else
    navigate → LDM_EventDetail(EventHostId=In_EventHostId, EventId=In_EventId) transition=Inherited
  ```
- **Handler_NavigateTo_HouseholdCarousel** inputs: In_HouseholdId: Long Integer (mandatory); HouseholdIdList: Long Integer List (mandatory); locals: PreloadedHouseholdIds: CarouselPreloadedHouseholds
  ```
  call GetHasCarouselEnabled()
  if GetHasCarouselEnabled.HasCarouselEnabled
    [M1] for each HouseholdIdList
      call ListAppend(Element={ Household: HouseholdIdList.Current }, List=PreloadedHouseholdIds.CarouselHouseholdItem)
      → continues at [M1]
    end for
    call SetPreloadObject(Preload=ToObject(PreloadedHouseholdIds))
    navigate → HouseholdCarousel(In_StartingHouseholdId=In_HouseholdId) transition=Inherited
  else
    navigate → HouseholdDetails(HouseholdId=In_HouseholdId) transition=Inherited
  ```
- **ScreenBlock_MyEventsNavigateToMyCalendar**
  ```
  navigate → MyEntertaining(MyCalendarEventSourceId=Entities.Type_MyCalendarEventSource.LDM) transition=Inherited
  ```

## External site AndroidMaps (flow Legacy_LDMEventsFlow)
- URL: geo:0,0; inputs: q: Text (mandatory)

## External site WebMaps (flow Legacy_LDMEventsFlow)
- URL: https://www.google.com/maps/dir/?api=1; inputs: api: Integer (mandatory); query: Text (mandatory)
