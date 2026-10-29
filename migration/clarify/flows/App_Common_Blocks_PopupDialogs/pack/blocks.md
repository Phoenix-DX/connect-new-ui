# Pack of UI flow App_Common_Blocks_PopupDialogs (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: Dialog_CustomChoice, Dialog_ExitConfirmation, Dialog_Information, Dialog_Information_NonNavigation, Dialog_Navigation
Blocks of other UBTConnect flows that the flow uses (transitive): 0

## Block Dialog_CustomChoice (flow App_Common_Blocks_PopupDialogs)
- public: False
- input parameters: StackButtonsVertically: Boolean
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): Menu, Profile

#### Widget tree
```
container  [style="connect-dialog-popup connect-dialog-popup--custom-choice"+If(StackButtonsVertically," connect-dialog-popup--vertical-b…]
  block ActionConfirmationDialog (NavigationHandler.ConfirmationDialogs)
    placeholder DialogHeader:
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Base }, TextOptions: { Color: Entities.UBT_Color.Neutral10, FontWeight: Entities.UBT_FontWeight.SemiBold } }
        placeholder Content:
          container  [style="text-align-center"]
            placeholder-def Placeholder_Header
    placeholder DialogBody:
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Medium }, TextOptions: { Color: Entities.UBT_Color.Neutral10 } }
        placeholder Content:
          placeholder-def Placeholder_Body
    placeholder ButtonLabel_Confirm:
      placeholder-def Placeholder_ButtonLabel
        text: Close
    placeholder ButtonLabel_Dismiss:
      placeholder-def Placeholder_DismissButtonLabe
        text: Cancel
```

## Block Dialog_ExitConfirmation (flow App_Common_Blocks_PopupDialogs)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): HomeFeed, Login

#### Widget tree
```
container  [style="connect-dialog-popup"]
  block ExitConfirmationDialog (NavigationHandler.ConfirmationDialogs)
    args: Force=True
    placeholder DialogHeader:
      container  [style="text-align-center"]
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ TextOptions: { Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Base } }
          placeholder Content:
            text: Leave App
    placeholder DialogBody:
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ TextOptions: { Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Base } }
        placeholder Content:
          text: Are you sure you wish to leave the Connect app?
    placeholder ButtonLabel_Confirm:
      text: Yes
    placeholder ButtonLabel_Dismiss:
      text: No
```

## Block Dialog_Information (flow App_Common_Blocks_PopupDialogs)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): ContactUsDetails

#### Widget tree
```
container  [style="connect-dialog-popup connect-dialog-popup--information"]
  block ActionConfirmationDialog (NavigationHandler.ConfirmationDialogs)
    placeholder DialogHeader:
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Base }, TextOptions: { Color: Entities.UBT_Color.Neutral10, FontWeight: Entities.UBT_FontWeight.SemiBold } }
        placeholder Content:
          container  [style="text-align-center"]
            placeholder-def Placeholder_Header
    placeholder DialogBody:
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Medium }, TextOptions: { Color: Entities.UBT_Color.Neutral10 } }
        placeholder Content:
          placeholder-def Placeholder_Body
    placeholder ButtonLabel_Confirm:
      placeholder-def Placeholder_ButtonLabel
        text: Close
```

## Block Dialog_Information_NonNavigation (flow App_Common_Blocks_PopupDialogs)
- public: False
- input parameters: In_ShowPopup: Boolean (mandatory); In_ButtonLabel: Text = "Close"
- events: OnClick_Button() mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): nothing in this module

#### Widget tree
```
container  [style="connect-dialog-popup"]
  popup show=In_ShowPopup  [style="popup-dialog connect-dialog-popup"]
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Base }, TextOptions: { Color: Entities.UBT_Color.Neutral10, FontWeight: Entities.UBT_FontWeight.SemiBold } }
      placeholder Content:
        container  [style="text-align-center"]
          placeholder-def Placeholder_Header
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Medium }, TextOptions: { Color: Entities.UBT_Color.Neutral10 } }
      placeholder Content:
        placeholder-def Placeholder_Body
    container
      block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
        args: ButtonOptions={ UBT_ButtonSizeId: Entities.UBT_ButtonSize.Small }, ButtonText=In_ButtonLabel
        on buttonOnClick → OnClick_Button
```

## Block Dialog_Navigation (flow App_Common_Blocks_PopupDialogs)
- public: False
- input parameters: ConfirmLabel: Text = "Yes"; DIsmissLabel: Text = "No"
- events: Event_OnBackNavigation(Event_NavigationEvent: Object (mandatory))
- local variables: -
- lifecycle: none
- used by (UBTConnect): ContactByEmailForm, ContactUsDetails, Profile

#### Widget tree
```
container  [style="connect-dialog-popup connect-dialog-popup--navigation"]
  block NavigationConfirmationDialog (NavigationHandler.ConfirmationDialogs)
    on Navigation → Event_OnBackNavigation(Event_NavigationEvent=NavigationEvent)
    placeholder DialogHeader:
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Base }, TextOptions: { Color: Entities.UBT_Color.Neutral10, FontWeight: Entities.UBT_FontWeight.SemiBold } }
        placeholder Content:
          container  [style="text-align-center"]
            placeholder-def Placeholder_Header
    placeholder DialogBody:
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Medium }, TextOptions: { Color: Entities.UBT_Color.Neutral10 } }
        placeholder Content:
          placeholder-def Placeholder_Body
    placeholder ButtonLabel_Confirm:
      expr: ConfirmLabel
    placeholder ButtonLabel_Dismiss:
      expr: DIsmissLabel
```
