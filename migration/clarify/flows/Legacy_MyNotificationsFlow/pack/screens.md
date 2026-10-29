# Pack of UI flow Legacy_MyNotificationsFlow (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: MessageDetail, MessageList

## Screen MessageDetail (flow Legacy_MyNotificationsFlow)
- roles: Anonymous, Registered, UBTOne_User; URL structure: QueryString
- input parameters: MessageInstanceId: MessageInstance Identifier (mandatory); isOriginPushNotification: Boolean; MessageTemplateId: MessageTemplate Identifier; HardwareId: Text
- local variables: FeedItemId: Text
- lifecycle: none

#### Widget tree
```
block ScreenBlock_MessageDetail (Connect2_LegacyShared.MyNotifications)
  args: HardwareId=HardwareId, isOriginPushNotification=isOriginPushNotification, MessageInstanceId=MessageInstanceId, MessageTemplateId=MessageTemplateId
  on NavigateTo_OrbitEvent → Handler_NavigateTo_OrbitEventDetails(EventId=Event_EventId, EventName=Event_EventName, MemberId=Event_MemberId)
  on NavigateTo_OrbitMilestone → Handler_NavigateTo_OrbitMilestone(EventId=Event_EventId, EventName=Event_EventName, MilestoneId=Event_MilestoneId)
  on NavigateTo_OrbitHostSurvey → Handler_NavigateTo_OrbitHostSurvey(EventEndDate=Event_EndDate, EventId=Event_EventId, EventName=Event_EventName, EventStartDate=Event_StartDate, MemberId=Event_MemberId)
  on NavigateTo_Login → Handler_NavigateTo_Login
  on AddAuditAndNavigateTo_EventEmail → Handler_AddAuditAndNavigateTo_EventEmail(In_EventHostId=EventHostId, In_EventId=Event_EventId)
  on SetFeedItemId → Handler_SetFeedItemId(Event_FeedItemId=Event_FeedItemId)
  on SubscriptionDenied → Handler_SubscriptionDenied
  on NavigateTo_AssembleEvent → Handler_NavigateTo_AssembleDetail(AssembleEventTypeTile=EventTypeTitle, EventInstanceId=EventInstanceId, EventParentId=EventParentId)
  on NavigateTo_ObjectDetail → Handler_NavigateTo_ShareObjectDetail(ObjectId=ObjectId, ShareObjectTypeId=ShareObjectTypeId)
  on NavigateTo_MessageList → Handler_NavigateTo_MessageList
  on AddAuditAndNavigateTo_EventDetail → Handler_AddAuditAndNavigateTo_EventDetail(In_EventHostId=EventHostId, In_EventId=EventId)
  placeholder Placeholder_FeedItem:
    block Feed_Embeded (UBTConnect.Home)
      args: FeedItemId=FeedItemId
  placeholder BottomBar:
    if GetUserId() <> NullIdentifier()
      block BottomBarMenu (UBTConnect.App_Common)
  placeholder CommonUI_Elements:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
    block BackNavigationHandler (NavigationHandler.NavigationHandler)
      on BackNavigation → Handler_BackNavigationHandlerBackNavigation(BackNavigationEvent=BackNavigationEvent)
```

#### Screen actions
- **Handler_AddAuditAndNavigateTo_EventDetail** inputs: In_EventHostId: Long Integer (mandatory); In_EventId: Long Integer (mandatory)
  ```
  call AddAuditClickedEvent(In_AuditEventId=TextToIdentifier(Entities.ApplicationEvents_LDM.NotificationViewEvent), In_EventHostId=If(In_EventHostId = NullTextIdentifier(), In_EventId, In_EventHostId))
  call GetHasNewLDM()
  if GetHasNewLDM.Out_HasNewLDM
    navigate → LDM_EventDetail_V2(EventHostId=In_EventHostId, EventId=In_EventId) transition=Inherited
  else
    navigate → LDM_EventDetail(EventHostId=In_EventHostId, EventId=In_EventId) transition=Inherited
  ```
- **Handler_AddAuditAndNavigateTo_EventEmail** inputs: In_EventId: Long Integer (mandatory); In_EventHostId: Long Integer (mandatory)
  ```
  call AddAuditEventDetailEvent(EventTypeId=Entities.ApplicationEvents_LDM.NotificationContactOrganiser) as AddAuditEventDetailEvent2_Contact
  call GetHasNewLDM()
  if GetHasNewLDM.Out_HasNewLDM
    navigate → LDM_Email_V2(EventHostId=In_EventHostId, In_EventId=In_EventId, In_IsContactOrganiser=False, In_IsMessageGuest=True) transition=Inherited
  else
    navigate → LDM_Email(EventHostId=In_EventHostId, In_EventId=In_EventId, In_IsContactOrganiser=False, In_IsMessageGuest=True) transition=Inherited
  ```
- **Handler_BackNavigationHandlerBackNavigation** inputs: BackNavigationEvent: Object (mandatory)
  ```
  javascript CheckIfInvalidLocation(BackNavigationEvent=BackNavigationEvent, EspaceName="/"+GetEntryEspaceName()+"/" // This means there is no page to return.) → IsEmpty: Boolean
    | if ($parameters.BackNavigationEvent.detail && $parameters.BackNavigationEvent.detail.location && $parameters.BackNavigationEvent.detail.location.pathname) {
    |     $parameters.IsEmpty = $parameters.BackNavigationEvent.detail.location.pathname == $parameters.EspaceName;
    | }
  if CheckIfInvalidLocation.IsEmpty
    call PreventNavigation(NavigationEvent=BackNavigationEvent)
    navigate → HomeFeed() transition=Inherited
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_NavigateTo_AssembleDetail** inputs: EventParentId: Text (mandatory); EventInstanceId: Text (mandatory); AssembleEventTypeTile: Text (mandatory)
  ```
  navigate → AssembleDetail(AssembleEventTypeTile=AssembleEventTypeTile, EventId=EventInstanceId, SeriesId=EventParentId) transition=Inherited
  ```
- **Handler_NavigateTo_Login**
  ```
  navigate → Login() transition=Inherited
  ```
- **Handler_NavigateTo_MessageList**
  ```
  call GetHasNewNotifications()
  if (HasNewNotifications?) GetHasNewNotifications.Out_HasNewNotifications
    navigate → Notifications() transition=Inherited
  else
    navigate → MessageList() transition=Inherited
  ```
- **Handler_NavigateTo_OrbitEventDetails** inputs: EventId: Long Integer (mandatory); MemberId: Long Integer (mandatory); EventName: Text (mandatory)
  ```
  navigate → EventDetail(In_EventId=EventId, In_EventName=EventName, In_FromNotification=True, In_MemberId=MemberId) transition=Inherited
  ```
- **Handler_NavigateTo_OrbitHostSurvey** inputs: EventId: Long Integer (mandatory); MemberId: Long Integer (mandatory); EventName: Text (mandatory); EventStartDate: Date Time (mandatory); EventEndDate: Date Time (mandatory)
  ```
  navigate → HostSurvey(In_EventEndDate=EventEndDate, In_EventId=EventId, In_EventName=EventName, In_EventStartDate=EventStartDate, In_MemberId=MemberId) transition=Inherited
  ```
- **Handler_NavigateTo_OrbitMilestone** inputs: MilestoneId: Text (mandatory); EventId: Long Integer (mandatory); EventName: Text (mandatory)
  ```
  navigate → MilestoneDetail(In_EventId=EventId, In_EventName=EventName, In_FromNotification=True, In_MilestoneId=MilestoneId) transition=Inherited
  ```
- **Handler_NavigateTo_ShareObjectDetail** inputs: ObjectId: Text (mandatory); ShareObjectTypeId: Type_ShareObject Identifier (mandatory)
  ```
  switch (ObjectShareType)
    case ShareObjectTypeId = Entities.Type_ShareObject.Household or\nShareObjectTypeId = Entities.Type_ShareObject.Update or\nShareObjectTypeId = Entities.Type_ShareObject.MyHousehold (Member)
      navigate → HouseholdDetails(HouseholdId=TextToLongInteger(ObjectId)) transition=Inherited
    case ShareObjectTypeId = Entities.Type_ShareObject.OneSchoolGlobal (OneSchoolGlobal)
      navigate → OneSchoolGlobalDetails(In_OneSchoolGlobalId=TextToLongInteger(ObjectId)) transition=Inherited
    case ShareObjectTypeId = Entities.Type_ShareObject.SupperMeeting
      navigate → SupperMeeting_Details(In_SubdivsionId=TextToLongInteger(ObjectId)) transition=Inherited
    case ShareObjectTypeId = Entities.Type_ShareObject.Feed
      navigate → FeedItemDetail(FeedItemId=ObjectId) transition=Inherited
    otherwise
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_SetFeedItemId** inputs: Event_FeedItemId: Text (mandatory)
  ```
  assign: FeedItemId = Event_FeedItemId
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_SubscriptionDenied**
  ```
  call App_Subscription_ShowUpgradePopUp()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Screen MessageList (flow Legacy_MyNotificationsFlow)
- roles: Anonymous, Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: Trigger_PullToRefresh: Boolean
- lifecycle: OnReady → OnReady

#### Widget tree
```
block ScreenBlock_MessageList (Connect2_LegacyShared.MyNotifications)
  args: Trigger_PullToRefresh=Trigger_PullToRefresh
  on NavigateTo_B2CCallback → Handler_NavigateTo_B2CCallback(RedirectTo=RedirectTo)
  on NavigateTo_B2CLanding → Handler_NavigateTo_B2CLanding
  on PullToRefreshTriggered → Handler_PullToRefreshTriggered
  on NavigateTo_MessageDetail → Handler_NavigateTo_MessageDetail(MessageInstanceId=MessageInstanceId)
  placeholder BottomBar:
    if GetUserId() <> NullIdentifier()
      container
        block BottomBarMenu (UBTConnect.App_Common)
  placeholder CommonUI_Elements:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **Handler_NavigateTo_B2CCallback** inputs: RedirectTo: Text (mandatory)
  ```
  navigate → RedirectToURL(URL=RedirectTo) transition=None
  ```
- **Handler_NavigateTo_B2CLanding**
  ```
  navigate → Login() transition=None
  ```
- **Handler_NavigateTo_MessageDetail** inputs: MessageInstanceId: MessageInstance Identifier (mandatory)
  ```
  navigate → MessageDetail(MessageInstanceId=MessageInstanceId) transition=Inherited
  ```
- **Handler_PullToRefreshTriggered**
  ```
  assign: Trigger_PullToRefresh = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Layout_OnEventNotificationReceived**
  ```
  assign: Trigger_PullToRefresh = True
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnReady**
  ```
  call ClearAllNotifications()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
