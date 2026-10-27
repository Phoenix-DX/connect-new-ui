# Pack of UI flow ContactFlow (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: ContactByEmailContacts, ContactByEmailLDMCoordinator, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactByEmailOrbitHelpdesk, ContactByEmailOrbitHost

## Screen ContactByEmailContacts (flow ContactFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_AvatarURL: Text (mandatory); In_ContactName: Text (mandatory); In_ContactDescription: Text (mandatory); In_EmailTo: Text (mandatory); In_Subject: Text; In_IsAvatarImageFormat: Boolean = True
- local variables: IsLoading: Boolean; ContactByEmailForm: UI_ContactByEmailForm
- lifecycle: OnInitialize → ScreenEvent_OnInitialize

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  args: In_AlignTitleLeft=True, In_IsPrimaryColor=True
  placeholder Placeholder_Header_Title:
    expr: "Email"
  placeholder Content:
    block ContactByEmailForm (UBTConnect.ContactFlow)
      args: In_MessagePlaceholder="Please provide a description", In_Subject=In_Subject, In_SubjectPlaceholder="Please provide a subject", IsLoading=IsLoading
      on Event_SubmitForm → Handler_SubmitForm(Event_Message=Event_Message, Event_Subject=Event_Subject)
      placeholder Placeholder_ContactCard:
        container  [style="text-align-center"]
          block CustomContainer (UBTConnectLibrary.BasePatterns)
            args: ExtendedClasses="contact-by-email__header", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral2 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.ExtraSmall }, MarginSize: { BottomSizeId: Entities.UBT_Size.Base } }
            placeholder Content:
              if In_IsAvatarImageFormat
                block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                  args: EntityId="", EntityType=Entities.Connect_Entity.Member, ImageSize={ Height: Entities.UBT_ImageSize.Base_52, Width: Entities.UBT_ImageSize.Square }, ImageURL=In_AvatarURL
              else
                container
                  image In_AvatarURL type=External  [style="contact-by-email__header__img"]
              block CustomContainer (UBTConnectLibrary.BasePatterns)
                args: Options={ PaddingSize: { TopSizeId: Entities.UBT_Size.ExtraSmall }, TextOptions: { Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.Bold } }
                placeholder Content:
                  expr: In_ContactName
              block CustomContainer (UBTConnectLibrary.BasePatterns)
                args: Options={ PaddingSize: { TopSizeId: Entities.UBT_Size.ExtraSmall }, TextOptions: { Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall } }
                placeholder Content:
                  expr: In_ContactDescription
```

#### Screen actions
- **Handler_SubmitForm** inputs: Event_Subject: Text (mandatory); Event_Message: Text (mandatory)
  ```
  assign: IsLoading = True
  assign: ContactByEmailForm.Subject = Event_Subject; ContactByEmailForm.Message = Event_Message
  call-server SendContactLDMCoordinatorEmail(In_UI_ContactByEmailForm=ContactByEmailForm)
  javascript ScheduleFeedbackMessageAfterTransition(Message="Your message has been sent.")
    | window.setTimeout(function() {
    |     $public.FeedbackMessage.showFeedbackMessage($parameters.Message, 1);
    | }, 500);
  navigate → (Previous Screen)() transition=UseHistory
  ```
- **ScreenEvent_OnInitialize**
  ```
  assign: ContactByEmailForm.FirstName = In_ContactName; ContactByEmailForm.ContactMember = In_ContactName; ContactByEmailForm.EmailTo = In_EmailTo; ContactByEmailForm.Subject = In_Subject
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Screen ContactByEmailLDMCoordinator (flow ContactFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_AvatarURL: Text (mandatory); In_ContactName: Text (mandatory); In_EmailTo: Text (mandatory); In_Subject: Text; In_EventDate: Date (mandatory); In_EventLocality: Text (mandatory)
- local variables: IsLoading: Boolean; ContactByEmailForm: UI_ContactByEmailForm; EmailEvent: EmailHouseholdEvent
- lifecycle: OnInitialize → ScreenEvent_OnInitialize

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  args: In_AlignTitleLeft=True, In_IsPrimaryColor=True
  placeholder Placeholder_Header_Title:
    expr: "Email"
  placeholder Content:
    block ContactByEmailForm (UBTConnect.ContactFlow)
      args: In_MessagePlaceholder="Add a message", In_Subject=In_Subject, In_SubjectPlaceholder="Add a subject", IsLoading=IsLoading
      on Event_SubmitForm → Handler_SubmitForm(Event_Message=Event_Message, Event_Subject=Event_Subject)
      placeholder Placeholder_ContactCard:
        container  [style="text-align-center"]
          block CustomContainer (UBTConnectLibrary.BasePatterns)
            args: ExtendedClasses="contact-by-email__header", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral2 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.ExtraSmall }, MarginSize: { BottomSizeId: Entities.UBT_Size.Base } }
            placeholder Content:
              if False  [DEAD BRANCH: condition is a constant]
                block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                  args: EntityId="", EntityType=NullTextIdentifier(), ImageSize={ Height: Entities.UBT_ImageSize.Base_52 }, ImageURL=In_AvatarURL
              else
                container
                  image In_AvatarURL type=External  [style="contact-by-email__header__img"]
              block CustomContainer (UBTConnectLibrary.BasePatterns)
                args: Options={ PaddingSize: { TopSizeId: Entities.UBT_Size.ExtraSmall }, TextOptions: { Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.Bold } }
                placeholder Content:
                  expr: In_ContactName
              block CustomContainer (UBTConnectLibrary.BasePatterns)
                args: Options={ PaddingSize: { TopSizeId: Entities.UBT_Size.ExtraSmall }, TextOptions: { Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall } }
                placeholder Content:
                  expr: "LDM Event Coordinator"
```

#### Screen actions
- **Handler_SubmitForm** inputs: Event_Subject: Text (mandatory); Event_Message: Text (mandatory)
  ```
  assign: IsLoading = True
  assign: ContactByEmailForm.Subject = Event_Subject; ContactByEmailForm.Message = Event_Message
  call-server SendContactLDMCoordinatorEmail(In_UI_ContactByEmailForm=ContactByEmailForm)
  call AppManager_GetCachedUserInfo()
  assign: EmailEvent.EmailTo = ContactByEmailForm.EmailTo; EmailEvent.NameOfSender = AppManager_GetCachedUserInfo.UserInformation.LastName + ", "+ AppManager_GetCachedUserInfo.UserInformation.FirstName
  call AddAuditEventDetailEvent(EventDate=In_EventDate, EventLocality=In_EventLocality, EventTypeId=Entities.LDMApplicationEvent.MyTimelineCoordinatorEmailed)
  json-serialize JSONSerialize1 = EmailEvent (dates ISO)
  call zOnApplicationEvent_Wrapper(AttachmentJSON=JSONSerialize1.JSON, EventId=Entities.LDMApplicationEvent.MyTimelineCoordinatorEmailed)
  javascript ScheduleFeedbackMessageAfterTransition(Message="Your message has been sent.")
    | window.setTimeout(function() {
    |     $public.FeedbackMessage.showFeedbackMessage($parameters.Message, 1);
    | }, 500);
  navigate → (Previous Screen)() transition=UseHistory
  ```
- **ScreenEvent_OnInitialize**
  ```
  assign: ContactByEmailForm.FirstName = In_ContactName; ContactByEmailForm.ContactMember = In_ContactName; ContactByEmailForm.EmailTo = In_EmailTo; ContactByEmailForm.Subject = In_Subject
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Screen ContactByEmailMember (flow ContactFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_AvatarURL: Text (mandatory); In_ContactName: Text (mandatory); In_ContactSurname: Text (mandatory); In_ContactLocality: Text (mandatory); In_ContactCountry: Text (mandatory); In_EmailTo: Text (mandatory); In_EntityType: Connect_Entity Identifier; In_EntityId: Long Integer; In_LDMEventDate: Date; In_LDMEventLocality: Text; In_AuditEventId: Text =  Entities.ApplicationEvents_Directory.EmailHousehold; In_OrbitEventTitle: Text; In_OrbitEventId: Long Integer; In_OrbitMilestoneId: Text; In_IsHousehold: Boolean; In_HouseholdHeaderName: Text
- local variables: IsLoading: Boolean; ContactByEmailForm: UI_ContactByEmailForm; EmailEvent: EmailHouseholdEvent
- lifecycle: OnInitialize → ScreenEvent_OnInitialize

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  args: In_AlignTitleLeft=True, In_IsPrimaryColor=False
  placeholder Placeholder_Header_Title:
    expr: If(In_IsHousehold,"Contact the " + In_HouseholdHeaderName + " household","Contact Member")
  placeholder Content:
    block ContactByEmailForm (UBTConnect.ContactFlow)
      args: In_MessagePlaceholder="Add a message", In_SubjectPlaceholder="Add a subject", IsLoading=IsLoading
      on Event_SubmitForm → Handler_SubmitForm(Event_Message=Event_Message, Event_Subject=Event_Subject)
      placeholder Placeholder_ContactCard:
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.ExtraSmall } }
          placeholder Content:
            block Columns_Three (UBTConnectLibrary.BasePatterns)
              args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ExpandMiddle }
              placeholder Left:
                block CustomContainer (UBTConnectLibrary.BasePatterns)
                  args: ExtendedClasses="ubt-object-fit-avatar-img", Options={ PaddingSize: { RightSizeId: Entities.UBT_Size.Base } }
                  placeholder Content:
                    block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                      args: EntityId=In_EntityId, EntityType=If(In_EntityType = NullTextIdentifier(), Entities.Connect_Entity.Member, In_EntityType), ImageSize={ Height: Entities.UBT_ImageSize.Base_52, Width: Entities.UBT_ImageSize.Square }, ImageURL=In_AvatarURL
              placeholder Middle:
                block CustomText (UBTConnectLibrary.BasePatterns)
                  args: In_Text=In_ContactName + " " + In_ContactSurname, In_TextOptions={ FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
                block IconText (UBTConnectLibrary.ConnectPatterns)
                  args: SpacingSize=Entities.UBT_Size.ExtraSmall, Text=In_ContactLocality + If(In_ContactLocality <> "" and  In_ContactCountry <> "",", ","") + In_ContactCountry, TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall }
                  placeholder Icon:
                    block Icon (UBTConnectLibrary.ConnectPatterns)
                      args: In_ColorId=Entities.UBT_Color.Neutral7, In_IconId=Entities.UBT_Icons2.HomePIn, In_SizeId=Entities.UBT_IconsSize.NonStandard_14
```

#### Screen actions
- **Handler_SubmitForm** inputs: Event_Subject: Text (mandatory); Event_Message: Text (mandatory); locals: EventJSON: Text
  ```
  assign: IsLoading = True
  assign: ContactByEmailForm.Subject = Event_Subject; ContactByEmailForm.Message = Event_Message
  call-server SendContactMemberEmail(In_UI_ContactByEmailForm=ContactByEmailForm)
  call AppManager_GetCachedUserInfo()
  assign: EmailEvent.EmailTo = ContactByEmailForm.EmailTo; EmailEvent.NameOfSender = AppManager_GetCachedUserInfo.UserInformation.LastName + ", "+ AppManager_GetCachedUserInfo.UserInformation.FirstName
  if In_AuditEventId =  Entities.OrbitApplicationEvent.EmailHost
    call OnApplicationEvent_EmailHost(AuditPayload={ MilestoneId: In_OrbitMilestoneId, EventId: In_OrbitEventId, EventTitle: In_OrbitEventTitle, HostName: In_ContactName, Subject: Event_Subject, Message: Event_Message })
    end
  else
    if In_LDMEventDate <> NullDate() or\nIn_LDMEventLocality <> ""
      call AddAuditEventDetailEvent(EventDate=In_LDMEventDate, EventLocality=In_LDMEventLocality, EventTypeId= Entities.ApplicationEvents_Directory.EmailHousehold)
      json-serialize JSONSerialize1 = EmailEvent (dates ISO)
      assign: EventJSON = JSONSerialize1.JSON
      [M1] call zOnApplicationEvent_Wrapper(AttachmentJSON=EventJSON, EventId= Entities.ApplicationEvents_Directory.EmailHousehold)
      javascript ScheduleFeedbackMessageAfterTransition(Message="Your message has been sent.")
        | window.setTimeout(function() {
        |     $public.FeedbackMessage.showFeedbackMessage($parameters.Message, 1);
        | }, 500);
      navigate → (Previous Screen)() transition=UseHistory
    else
      → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  assign: ContactByEmailForm.FirstName = In_ContactName; ContactByEmailForm.ContactMember = In_ContactName; ContactByEmailForm.EmailTo = In_EmailTo
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Screen ContactByEmailOneSchoolGlobal (flow ContactFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_EmailTo: Text (mandatory); In_ContactName: Text (mandatory)
- local variables: IsLoading: Boolean; ContactByEmailForm: UI_ContactByEmailForm
- lifecycle: OnInitialize → ScreenEvent_OnInitialize

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  args: In_AlignTitleLeft=True, In_IsPrimaryColor=True
  placeholder Placeholder_Header_Title:
    expr: "Email"
  placeholder Content:
    block ContactByEmailForm (UBTConnect.ContactFlow)
      args: In_MessagePlaceholder="Add a message", In_Subject="", In_SubjectPlaceholder="Add a subject", In_UseDynamicTextAreaSubject=True, IsLoading=IsLoading
      on Event_SubmitForm → Handler_SubmitForm(Event_Message=Event_Message, Event_Subject=Event_Subject)
      placeholder Placeholder_ContactCard:
        container  [style="text-align-center"]
          block CustomContainer (UBTConnectLibrary.BasePatterns)
            args: ExtendedClasses="contact-by-email__header", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral2 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.ExtraSmall }, MarginSize: { BottomSizeId: Entities.UBT_Size.Base } }
            placeholder Content:
              container
                image Images.OneSchoolGlobal.URL type=External  [style="contact-by-email__header__img"]
              block CustomContainer (UBTConnectLibrary.BasePatterns)
                args: Options={ PaddingSize: { TopSizeId: Entities.UBT_Size.ExtraSmall }, TextOptions: { Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.Bold } }
                placeholder Content:
                  expr: In_ContactName
              block CustomContainer (UBTConnectLibrary.BasePatterns)
                args: Options={ PaddingSize: { TopSizeId: Entities.UBT_Size.ExtraSmall }, TextOptions: { Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall } }
                placeholder Content:
                  expr: " "
```

#### Screen actions
- **Handler_SubmitForm** inputs: Event_Subject: Text (mandatory); Event_Message: Text (mandatory)
  ```
  assign: IsLoading = True
  assign: ContactByEmailForm.Subject = Event_Subject; ContactByEmailForm.Message = Event_Message
  call-server SendContactMemberEmail(In_UI_ContactByEmailForm=ContactByEmailForm)
  call zOnApplicationEvent_Wrapper(EventId=Entities.ApplicationEvents_Directory.EmailHousehold)
  javascript ScheduleFeedbackMessageAfterTransition(Message="Your message has been sent.")
    | window.setTimeout(function() {
    |     $public.FeedbackMessage.showFeedbackMessage($parameters.Message, 1);
    | }, 500);
  navigate → (Previous Screen)() transition=UseHistory
  ```
- **ScreenEvent_OnInitialize**
  ```
  assign: ContactByEmailForm.ContactMember = In_ContactName; ContactByEmailForm.EmailTo = In_EmailTo; ContactByEmailForm.FirstName = In_ContactName
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Screen ContactByEmailOrbitHelpdesk (flow ContactFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_EventId: Long Integer; In_MilestoneId: Text; In_TargetMemberId: Long Integer; In_Subject: Text; In_MilestoneTitle: Text; In_EventName: Text; In_HostName: Text; In_HostEmail: Text; In_FormattedDateTime: Text
- local variables: IsLoading: Boolean; ContactByEmailForm: UI_ContactByEmailForm
- lifecycle: OnInitialize → ScreenEvent_OnInitialize

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  args: In_AlignTitleLeft=True, In_IsPrimaryColor=True
  placeholder Placeholder_Header_Title:
    expr: "Email"
  placeholder Content:
    block ContactByEmailForm (UBTConnect.ContactFlow)
      args: In_MessagePlaceholder="Add a message", In_Subject=In_Subject, In_SubjectPlaceholder="Add a subject", In_UseDynamicTextAreaSubject=True, IsLoading=IsLoading
      on Event_SubmitForm → Handler_SubmitForm(Event_Message=Event_Message, Event_Subject=Event_Subject)
      placeholder Placeholder_ContactCard:
        container  [style="text-align-center"]
          block CustomContainer (UBTConnectLibrary.BasePatterns)
            args: ExtendedClasses="contact-by-email__header", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral2 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.ExtraSmall }, MarginSize: { BottomSizeId: Entities.UBT_Size.Base } }
            placeholder Content:
              container
                image Images.Orbit_Logo.URL type=External  [style="contact-by-email__header__img"]
              block CustomContainer (UBTConnectLibrary.BasePatterns)
                args: Options={ PaddingSize: { TopSizeId: Entities.UBT_Size.ExtraSmall }, TextOptions: { Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.Bold } }
                placeholder Content:
                  expr: "Orbit Helpdesk"
```

#### Screen actions
- **Handler_SubmitForm** inputs: Event_Subject: Text (mandatory); Event_Message: Text (mandatory)
  ```
  assign: IsLoading = True
  assign: ContactByEmailForm.Subject = Event_Subject; ContactByEmailForm.Message = Event_Message
  call AppManager_GetCachedUserInfo()
  call-server SendContactEmail(EmailInfo={ EventName: In_EventName, SenderFullName: AppManager_GetCachedUserInfo.UserInformation.FirstName + " " + AppManager_GetCachedUserInfo.UserInformation.LastName, HostName: In_HostName, HostEmail: In_H…, EventId=In_EventId, IsContactHelpdesk=True, Message=ContactByEmailForm.Message, MilestoneId=In_MilestoneId, Subject=ContactByEmailForm.Subject, TargetMemberId=In_TargetMemberId, None=TextToInteger(AppManager_GetCachedUserInfo.UserInformation.MemberId), UserSubject="")
  call OnApplicationEvent_ContactHelpdesk(AuditPayload={ EventId: In_EventId, EventTitle: In_EventName, Subject: ContactByEmailForm.Subject, Message: ContactByEmailForm.Message })
  javascript ScheduleFeedbackMessageAfterTransition(Message="Your message has been sent.")
    | window.setTimeout(function() {
    |     $public.FeedbackMessage.showFeedbackMessage($parameters.Message, 1);
    | }, 500);
  navigate → (Previous Screen)() transition=UseHistory
  ```
- **ScreenEvent_OnInitialize**
  ```
  assign: ContactByEmailForm.FirstName = ""; ContactByEmailForm.ContactMember = ""; ContactByEmailForm.EmailTo = ""; ContactByEmailForm.Subject = In_Subject
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Screen ContactByEmailOrbitHost (flow ContactFlow)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_Subject: Text (mandatory); In_MilestoneTitle: Text (mandatory); In_EventName: Text (mandatory); In_HostName: Text (mandatory); In_HostEmail: Text (mandatory); In_FormattedDateTime: Text (mandatory); In_ContactLocality: Text (mandatory); In_ContactCountry: Text (mandatory); In_AvatarURL: Text (mandatory); In_EntityType: Connect_Entity Identifier (mandatory); In_EntityId: Long Integer (mandatory); In_Surname: Text (mandatory)
- local variables: IsLoading: Boolean; ContactByEmailForm: UI_ContactByEmailForm
- lifecycle: OnInitialize → ScreenEvent_OnInitialize

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  args: In_AlignTitleLeft=True, In_IsPrimaryColor=False
  placeholder Placeholder_Header_Title:
    expr: "Contact the " + In_Surname + " household"
  placeholder Content:
    block ContactByEmailForm (UBTConnect.ContactFlow)
      args: In_MessagePlaceholder="Add a message", In_SubjectPlaceholder="Add a subject", In_UseDynamicTextAreaSubject=True, IsLoading=IsLoading
      on Event_SubmitForm → Handler_SubmitForm(Event_Message=Event_Message, Event_Subject=Event_Subject)
      placeholder Placeholder_ContactCard:
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.ExtraSmall } }
          placeholder Content:
            block Columns_Three (UBTConnectLibrary.BasePatterns)
              args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ExpandMiddle }
              placeholder Left:
                block CustomContainer (UBTConnectLibrary.BasePatterns)
                  args: ExtendedClasses="ubt-object-fit-avatar-img", Options={ PaddingSize: { RightSizeId: Entities.UBT_Size.Base } }
                  placeholder Content:
                    block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                      args: EntityId=In_EntityId, EntityType=If(In_EntityType = NullTextIdentifier(), Entities.Connect_Entity.Member, In_EntityType), ImageSize={ Height: Entities.UBT_ImageSize.Base_52, Width: Entities.UBT_ImageSize.Square }, ImageURL=In_AvatarURL
              placeholder Middle:
                block CustomText (UBTConnectLibrary.BasePatterns)
                  args: In_Text=In_HostName, In_TextOptions={ FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
                block IconText (UBTConnectLibrary.ConnectPatterns)
                  args: SpacingSize=Entities.UBT_Size.ExtraSmall, Text=In_ContactLocality + If(In_ContactLocality <> "" and  In_ContactCountry <> "",", ","") + In_ContactCountry, TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall }
                  placeholder Icon:
                    block Icon (UBTConnectLibrary.ConnectPatterns)
                      args: In_ColorId=Entities.UBT_Color.Neutral7, In_IconId=Entities.UBT_Icons2.HomePIn, In_SizeId=Entities.UBT_IconsSize.NonStandard_14
```

#### Screen actions
- **Handler_SubmitForm** inputs: Event_Subject: Text (mandatory); Event_Message: Text (mandatory)
  ```
  assign: IsLoading = True
  assign: ContactByEmailForm.Subject = Event_Subject; ContactByEmailForm.Message = Event_Message
  call-server SendContactEmail(EmailInfo={ EventName: In_EventName, SenderFullName: ""//"Fetched Server Side", SenderEmail: ""//"Fetched Server Side", HostName: In_HostName, HostEmail: In_HostEmail, MilestoneName: In_MilestoneTitle, Formatt…, IsContactHelpdesk=False, Message=ContactByEmailForm.Message, Subject=In_Subject, TargetMemberId=NullIdentifier(), UserSubject=ContactByEmailForm.Subject)
  javascript ScheduleFeedbackMessageAfterTransition(Message="Your message has been sent.")
    | window.setTimeout(function() {
    |     $public.FeedbackMessage.showFeedbackMessage($parameters.Message, 1);
    | }, 500);
  navigate → (Previous Screen)() transition=UseHistory
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] call OnApplicationEvent_ContactHelpdesk(AuditPayload={ EventId: In_EventId, EventTitle: In_EventName, Subject: ContactByEmailForm.Subject, Message: ContactByEmailForm.Message })
  ```
- **ScreenEvent_OnInitialize**
  ```
  assign: ContactByEmailForm.EmailTo = In_HostEmail
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
