# Pack of UI flow App_Menu (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: Menu_List
Blocks of other UBTConnect flows that the flow uses (transitive): 19

## Block Menu_List (flow App_Menu)
- public: False
- input parameters: In_MenuSection: UI_MenuSection (mandatory)
- events: OnClick_MenuOption(UI_ListMenuOption: UI_ListMenuOption (mandatory)) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): ContactUsMenu, Menu, PINBiometricsMenu, TermsAndPoliciesMenu

#### Widget tree
```
if In_MenuSection.HasSeparator
  block SectionSeparator (UBTConnect.App_Common_Blocks)
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base } }
  placeholder Content:
    if In_MenuSection.SectionTitle <> ""
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small }, TextOptions: { Color: Entities.UBT_Color.Neutral8, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold…
        placeholder Content:
          expr: In_MenuSection.SectionTitle
    list source=In_MenuSection.MenuOptions mode=Default  [style="list list-group"]
      block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
        args: In_IsLoading=In_MenuSection.MenuOptions.Current.IsLoading
        placeholder Placeholder_LoadingSection:
          block CustomContainer (UBTConnectLibrary.BasePatterns)
            args: Options={ PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color: Entities.UBT_Color.Neutral3, Size: { BottomSizeId: Entities.UBT_Size.Small } } }
            on Clicked → OnClick_MenuOption(UI_ListMenuOption=In_MenuSection.MenuOptions.Current)
            placeholder Content:
              block Columns_Three (UBTConnectLibrary.BasePatterns)
                args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ExpandMiddle, SpacingSize: Entities.UBT_Size.Small, VerticalAlign: Entities.UBT_VerticalAlign.Center }
                placeholder Left:
                  block Icon (UBTConnectLibrary.ConnectPatterns)
                    args: In_ColorId=Entities.UBT_Color.Neutral9, In_IconId=In_MenuSection.MenuOptions.Current.IconId, In_SizeId=Entities.UBT_IconsSize.Base_24
                placeholder Middle:
                  block CustomText (UBTConnectLibrary.BasePatterns)
                    args: In_Text=In_MenuSection.MenuOptions.Current.Label, In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular }
                  if In_MenuSection.MenuOptions.Current.LabelDescription <> ""
                    block CustomText (UBTConnectLibrary.BasePatterns)
                      args: In_Text=In_MenuSection.MenuOptions.Current.LabelDescription, In_TextOptions={ Color: Entities.UBT_Color.Neutral6, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular }
                placeholder Right:
                  block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
                    args: In_IsLoading=In_MenuSection.MenuOptions.Current.IconRightLoading
                    placeholder Placeholder_LoadingSection:
                      if In_MenuSection.MenuOptions.Current.useSwitch #useSwitch
                        container  [style="item-switch"]
                          switchwidget #Switch1 var=In_MenuSection.MenuOptions.Current.SwitchValue style="switch"  [style="switch"]
                      else
                        if In_MenuSection.MenuOptions.Current.IconRightText <> "" #HasRightText
                          block IconText (UBTConnectLibrary.ConnectPatterns)
                            args: IsIconOnRight=True, SpacingSize=Entities.UBT_Size.Small, Text=In_MenuSection.MenuOptions.Current.IconRightText, TextOptions={ Color: Entities.UBT_Color.Neutral8, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular }
                            placeholder Icon:
                              block Icon (UBTConnectLibrary.ConnectPatterns)
                                args: In_ColorId=Entities.UBT_Color.Neutral7, In_IconId=In_MenuSection.MenuOptions.Current.IconRight, In_SizeId=Entities.UBT_IconsSize.Base_24
                        else
                          block Icon (UBTConnectLibrary.ConnectPatterns)
                            args: In_ColorId=Entities.UBT_Color.Neutral7, In_IconId=In_MenuSection.MenuOptions.Current.IconRight, In_SizeId=Entities.UBT_IconsSize.Base_24
```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| App_IconBadge | App_Common_Blocks | `../../_shared/pack/blocks.md` | BadgeNumber: Long Integer (mandatory); MaxNotifications: Integer = 9; IconId: UBT_Icons2 Identifier (mandatory); IconColor: UBT_Color Identifier (mandatory); isLoading: Boolean (mandatory) | OnClick |
| Block_PINUnlock | App_PIN | `../../App_PIN/pack/blocks.md` | In_ForceVisible: Boolean; In_IsCommonBlock: Boolean | Unlock |
| Block_PINUnlock_ContentWrapper | App_PIN | `../../App_PIN/pack/blocks.md` | UseOverlay: Boolean = True; In_ForceVisible: Boolean; UnlockText: Text = "Enter your PIN code"; ShowNeedHelp: Boolean; isFromMenu: Boolean; ShowForgotPIN: Boolean; ShowPolicy: Boolean (mandatory) | NavigateTo_PINRegister; Unlock |
| BottomBarContent | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| BottomBarMenu | App_Common | `../../App_Common/pack/blocks.md` | ActiveItem: Connect_BottomBar_Items Identifier; useMapsItems: Boolean; isHouseholder: Boolean; isRootPage: Boolean | BottomBar_Clicked |
| CacheControl_UserInfo_Wrapper | App_Cache | `../../_shared/pack/blocks.md` | - | Result |
| CommonUI_InsideLayout | App_Common | `../../App_Common/pack/blocks.md` | In_ShowLockScreen: Boolean; In_IgnorePolicy: Boolean; In_IgnoreLockScreen: Boolean | Event_OnScreenLocked; Event_OnScreenUnlocked |
| Dialog_CustomChoice | App_Common_Blocks_PopupDialogs | `../../_shared/pack/blocks.md` | StackButtonsVertically: Boolean | - |
| HandleOnResumeOpenLink | Legacy_Share | `../../Legacy_Share/pack/blocks.md` | - | - |
| OfflineDataSyncEvents | App_Common | `../../App_Common/pack/blocks.md` | - | OnSyncComplete; OnSyncError; OnSyncStart |
| Policy_Checker | App_Policies | `../../App_Policies/pack/blocks.md` | - | - |
| SectionSeparator | App_Common_Blocks | `../../_shared/pack/blocks.md` | - | - |
| UnsupportedVersion | App_Common | `../../App_Common/pack/blocks.md` | In_ExtendedClass: Text; In_HideButton: Boolean | Event_NavigateToPlaystore |
| UnsupportedVersion_Browser | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Native | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_WebView | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Wrapper | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| Version | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| WelcomeToConnect | App_Common | `../../App_Common/pack/blocks.md` | - | - |
