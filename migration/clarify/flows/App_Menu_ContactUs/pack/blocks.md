# Pack of UI flow App_Menu_ContactUs (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: ContactUs_Rate, ContactUs_RateItem
Blocks of other UBTConnect flows that the flow uses (transitive): 18

## Block ContactUs_Rate (flow App_Menu_ContactUs)
- public: False; stylesheet: yes
- input parameters: SelectedRate: Integer (mandatory); isEnabled: Boolean (mandatory)
- events: RateSelected(Rate: Integer (mandatory)) mandatory
- local variables: PoorRate: Integer = 2; BadRate: Integer = 4; OkayRate: Integer = 6; GoodRate: Integer = 8; VeryGoodRate: Integer = 10; CurrentRate: Integer = 0
- lifecycle: none
- used by (UBTConnect): ContactUsDetails

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Small }, TextOptions: { FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold } }
  placeholder Content:
    expr: "How would you rate your current experience with Connect?"
if False #UseEmoctions  [DEAD BRANCH: condition is a constant]
  block CustomContainer (UBTConnectLibrary.BasePatterns)
    args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Base } }
    placeholder Content:
      container
        container  [style=If(SelectedRate = PoorRate, "selected-rate", ""); width=20%; on onclick → OnClick(InRate=PoorRate)]
          block ContactUs_RateItem (UBTConnect.App_Menu_ContactUs)
            args: Content="😔", isSelected=SelectedRate = PoorRate, Label="Poor"
        container  [style=If(SelectedRate = BadRate, "selected-rate", ""); width=20%; on onclick → OnClick(InRate=BadRate)]
          block ContactUs_RateItem (UBTConnect.App_Menu_ContactUs)
            args: Content="😕", isSelected=SelectedRate = BadRate, Label="Bad"
        container  [style=If(SelectedRate = OkayRate, "selected-rate", ""); width=20%; on onclick → OnClick(InRate=OkayRate)]
          block ContactUs_RateItem (UBTConnect.App_Menu_ContactUs)
            args: Content="😐", isSelected=SelectedRate = OkayRate, Label="Okay"
        container  [style=If(SelectedRate = GoodRate, "selected-rate", ""); width=20%; on onclick → OnClick(InRate=GoodRate)]
          block ContactUs_RateItem (UBTConnect.App_Menu_ContactUs)
            args: Content="🙂", isSelected=SelectedRate = GoodRate, Label="Good"
        container  [style=If(SelectedRate = VeryGoodRate, "selected-rate", ""); width=20%; on onclick → OnClick(InRate=VeryGoodRate)]
          block ContactUs_RateItem (UBTConnect.App_Menu_ContactUs)
            args: Content="☺️", isSelected=SelectedRate = VeryGoodRate, Label="Very good"
else
  block RangeSlider (OutSystemsUI_2_23.Interaction)
    args: ExtendedClass=If(CurrentRate = 0,"ubt-rating-slider--no-rate ","")+"ubt-rating-slider", MaxValue=10, MinValue=1, OptionalConfigs={ ShowTickMarks: True, TickMarksInterval: 1 }, StartingValue=0
    on OnValueChange → RangeSliderOnValueChange(RangeSliderId=RangeSliderId, Value=Value)
  block CustomContainer (UBTConnectLibrary.BasePatterns)
    args: Options={ PaddingSize: { BottomSizeId: Entities.UBT_Size.Base } }
    placeholder Content:
      block Columns_Two (UBTConnectLibrary.BasePatterns)
        placeholder Left:
          block CustomText (UBTConnectLibrary.BasePatterns)
            args: In_Text="Poor", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular }
        placeholder Right:
          container
            block CustomText (UBTConnectLibrary.BasePatterns)
              args: In_Text="Excellent", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular }
```

#### Block actions
- **OnClick** inputs: InRate: Integer (mandatory)
  ```
  if isEnabled
    trigger event RateSelected(Rate=InRate)
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **RangeSliderOnValueChange** inputs: RangeSliderId: Text (mandatory); Value: Decimal (mandatory)
  ```
  assign: CurrentRate = Value
  trigger event RateSelected(Rate=Value)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block ContactUs_RateItem (flow App_Menu_ContactUs)
- public: False
- input parameters: Content: Text (mandatory); Label: Text (mandatory); isSelected: Boolean (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): ContactUs_Rate

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ Background: { BackgroundColor: If(isSelected,Entities.UBT_Color.Neutral1,Entities.UBT_Color.Transparent) }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.ExtraSmall }, MarginSize: { HorizontalSiz…
  placeholder Content:
    block CustomText (UBTConnectLibrary.BasePatterns)
      args: In_Text=Content, In_TextOptions={ FontSize: Entities.UBT_FontSize.Heading1 }
    block CustomText (UBTConnectLibrary.BasePatterns)
      args: In_Text=Label, In_TextOptions={ FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: If(isSelected,Entities.UBT_FontWeight.Bold,Entities.UBT_FontWeight.Regular) }
```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| Block_PINUnlock | App_PIN | `../../App_PIN/pack/blocks.md` | In_ForceVisible: Boolean; In_IsCommonBlock: Boolean | Unlock |
| Block_PINUnlock_ContentWrapper | App_PIN | `../../App_PIN/pack/blocks.md` | UseOverlay: Boolean = True; In_ForceVisible: Boolean; UnlockText: Text = "Enter your PIN code"; ShowNeedHelp: Boolean; isFromMenu: Boolean; ShowForgotPIN: Boolean; ShowPolicy: Boolean (mandatory) | NavigateTo_PINRegister; Unlock |
| CacheControl_UserInfo_Wrapper | App_Cache | `../../_shared/pack/blocks.md` | - | Result |
| CommonUI_InsideLayout | App_Common | `../../App_Common/pack/blocks.md` | In_ShowLockScreen: Boolean; In_IgnorePolicy: Boolean; In_IgnoreLockScreen: Boolean | Event_OnScreenLocked; Event_OnScreenUnlocked |
| Dialog_Information | App_Common_Blocks_PopupDialogs | `../../_shared/pack/blocks.md` | - | - |
| Dialog_Navigation | App_Common_Blocks_PopupDialogs | `../../_shared/pack/blocks.md` | ConfirmLabel: Text = "Yes"; DIsmissLabel: Text = "No" | Event_OnBackNavigation |
| HandleOnResumeOpenLink | Legacy_Share | `../../Legacy_Share/pack/blocks.md` | - | - |
| Menu_List | App_Menu | `../../App_Menu/pack/blocks.md` | In_MenuSection: UI_MenuSection (mandatory) | OnClick_MenuOption |
| OfflineDataSyncEvents | App_Common | `../../App_Common/pack/blocks.md` | - | OnSyncComplete; OnSyncError; OnSyncStart |
| Policy_Checker | App_Policies | `../../App_Policies/pack/blocks.md` | - | - |
| SectionSeparator | App_Common_Blocks | `../../_shared/pack/blocks.md` | - | - |
| SubLayout_DirectoryDetailScreen_Section | SubLayout | `../../_shared/pack/blocks.md` | In_Title: Text (mandatory); In_PaddingTop: UBT_Size Identifier = Entities.UBT_Size.Small; In_PaddingBottom: UBT_Size Identifier = Entities.UBT_Size.Small | - |
| UnsupportedVersion | App_Common | `../../App_Common/pack/blocks.md` | In_ExtendedClass: Text; In_HideButton: Boolean | Event_NavigateToPlaystore |
| UnsupportedVersion_Browser | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Native | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_WebView | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Wrapper | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| WelcomeToConnect | App_Common | `../../App_Common/pack/blocks.md` | - | - |
