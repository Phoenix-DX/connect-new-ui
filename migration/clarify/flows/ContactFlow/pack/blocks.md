# Pack of UI flow ContactFlow (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: ContactByEmailForm
Blocks of other UBTConnect flows that the flow uses (transitive): 1

## Block ContactByEmailForm (flow ContactFlow)
- public: False
- input parameters: IsLoading: Boolean; In_SubjectPlaceholder: Text (mandatory); In_MessagePlaceholder: Text (mandatory); In_Subject: Text; In_UseDynamicTextAreaSubject: Boolean; In_MessageLabel: Text = "Message"
- events: Event_SubmitForm(Event_Subject: Text (mandatory); Event_Message: Text (mandatory)) mandatory
- local variables: Subject: Text; Message: Text
- lifecycle: OnInitialize → OnInitialize
- used by (UBTConnect): ContactByEmailContacts, ContactByEmailLDMCoordinator, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactByEmailOrbitHelpdesk, ContactByEmailOrbitHost

#### Widget tree
```
container #Div_Content
  block CustomContainer (UBTConnectLibrary.BasePatterns)
    args: Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base, TopSizeId: Entities.UBT_Size.Small, BottomSizeId: Entities.UBT_Size.Base } }
    placeholder Content:
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Base } }
        placeholder Content:
          placeholder-def Placeholder_ContactCard
      form #Form1  [style="form"]
        container
          label for=Input_Subject
            text: Subject
          if In_UseDynamicTextAreaSubject
            block CustomContainer (UBTConnectLibrary.BasePatterns)
              args: Options={ TextOptions: { FontSize: Entities.UBT_FontSize.Small } }
              placeholder Content:
                block DynamicTextArea (UBTConnectLibrary.ConnectPatterns)
                  args: In_IsBounded=True, In_Text=Subject
                  placeholder Placeholder_TextArea:
                    textarea #TextArea_Subject var=Subject MaxLength=100 TextLines=1 Enabled=In_Subject = "" and not IsLoading style="form-control"  [style="form-control"; enabled=In_Subject = "" and not IsLoading]
                if In_Subject <> "" #HasSubject
                else
                  block InputCounter (Connect2_LegacyShared+UBTConnectLibrary.Reusable2)
                    args: In_InitialLength=0, In_InputId=TextArea_Subject.Id
          else
            input #Input_Subject var=Subject InputType=Text MaxLength=100 Prompt=In_SubjectPlaceholder Enabled=In_Subject = "" and not IsLoading style="form-control"  [style="form-control"; enabled=In_Subject = "" and not IsLoading]
            if In_Subject <> "" #HasSubject2
            else
              block InputCounter (Connect2_LegacyShared+UBTConnectLibrary.Reusable2)
                args: In_InitialLength=0, In_InputId=Input_Subject.Id
        container
          block TextArea_WithCounter (UBTConnectLibrary.ConnectPatterns)
            args: In_InitialLength=0
            placeholder Placeholder_Input:
              label for=TextArea_Message
                expr: In_MessageLabel
              textarea #TextArea_Message var=Message MaxLength=1000 TextLines=3 Prompt=In_MessagePlaceholder Enabled=not IsLoading style="form-control"  [style="form-control"; enabled=not IsLoading]
block FixedFooter (UBTConnectLibrary.ConnectPatterns)
  args: ContentContainerId=Div_Content.Id, ExpectedFooterHeight="calc(2 * var(--space-base) + var(--ubt-button-height-m))", useBottomBar=False
  placeholder Content:
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base }, ShadowId: Entities.UBT_Shadow.ExtraSmallTop }
      placeholder Content:
        block ButtonLoading (OutSystemsUI_2_23.Utilities2)
          args: IsLoading=IsLoading
          placeholder Button:
            block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
              args: ButtonText="Send", IsDisabled=not (Subject <> "" and Message <> "")
              on buttonOnClick → OnClick_SubmitForm
if Subject <> In_Subject or\nTrim(Message) <> ""
  block Dialog_Navigation (UBTConnect.App_Common_Blocks_PopupDialogs)
    on Event_OnBackNavigation → OnBackNavigation_PreventNavigation(Event_NavigationEvent=Event_NavigationEvent)
    placeholder Placeholder_Header:
      expr: "Delete message?"
    placeholder Placeholder_Body:
      expr: "Are you sure you want to delete this message?"
```

#### Block actions
- **OnBackNavigation_PreventNavigation** inputs: Event_NavigationEvent: Object (mandatory)
  ```
  call PreventNavigation(NavigationEvent=Event_NavigationEvent)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_SubmitForm**
  ```
  call AllowUpcomingNavigation()
  trigger event Event_SubmitForm(Event_Message=Message, Event_Subject=Subject)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  assign: Subject = In_Subject
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| Dialog_Navigation | App_Common_Blocks_PopupDialogs | `../../_shared/pack/blocks.md` | ConfirmLabel: Text = "Yes"; DIsmissLabel: Text = "No" | Event_OnBackNavigation |
