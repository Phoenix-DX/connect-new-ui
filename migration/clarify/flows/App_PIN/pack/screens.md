# Pack of UI flow App_PIN (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: PINChange, PINRegister, PINUnlock

## Screen PINChange (flow App_PIN)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: isScreenUnlocked: Boolean; UseOverlay: Boolean = True
- lifecycle: none

#### Widget tree
```
block Layout_LoginFlow (UBTConnectLibrary.Layouts)
  args: In_ExtendedClass=If(isScreenUnlocked,"","ubt-lock-screen"), In_HasOverlay=UseOverlay
  placeholder Placeholder_Header:
    link onclick → OnClick_BackToLogin
      block IconText (UBTConnectLibrary.ConnectPatterns)
        args: SpacingSize=Entities.UBT_Size.Small, Text="Change PIN", TextOptions={ Color: Entities.UBT_Color.Inherit, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
        placeholder Icon:
          block Icon (UBTConnectLibrary.ConnectPatterns)
            args: In_ColorId=Entities.UBT_Color.Inherit, In_IconId=Entities.UBT_Icons2.ArrowLeftAlt, In_SizeId=Entities.UBT_IconsSize.Base_24
  placeholder Placeholder_Content:
    if isScreenUnlocked #isScreenUnlocked2
      block Block_PINRegister_ContentWrapper (UBTConnect.App_PIN)
        args: ConfirmText="Confirm new PIN", isFromMenu=True, RegisterText="Enter new PIN", UseOverlay=UseOverlay
    else
      block Block_PINUnlock_ContentWrapper (UBTConnect.App_PIN)
        args: In_ForceVisible=True, isFromMenu=True, ShowForgotPIN=False, ShowNeedHelp=False, ShowPolicy=False, UnlockText="Enter your current PIN", UseOverlay=UseOverlay
        on NavigateTo_PINRegister → Block_PINUnlockUnlock
        on Unlock → Block_PINUnlockUnlock
```

#### Screen actions
- **Block_PINUnlockUnlock**
  ```
  assign: isScreenUnlocked = True
  call FeedbackMessage_AutoClose(Message="Please provide a new PIN", MessageType=Entities.UBT_MessageType.Success)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_BackToLogin**
  ```
  call AllowUpcomingNavigation()
  navigate → Menu() transition=Inherited
  ```

## Screen PINRegister (flow App_PIN)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: UseOverlay: Boolean = True
- lifecycle: none

#### Widget tree
```
block Layout_LoginFlow (UBTConnectLibrary.Layouts)
  args: In_HasOverlay=UseOverlay
  placeholder Placeholder_Header:
    link onclick → OnClick_BackToLogin
      block IconText (UBTConnectLibrary.ConnectPatterns)
        args: SpacingSize=Entities.UBT_Size.Small, Text="Back to login", TextOptions={ Color: Entities.UBT_Color.Inherit, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
        placeholder Icon:
          block Icon (UBTConnectLibrary.ConnectPatterns)
            args: In_ColorId=Entities.UBT_Color.Inherit, In_IconId=Entities.UBT_Icons2.ArrowLeftAlt, In_SizeId=Entities.UBT_IconsSize.Base_24
  placeholder Placeholder_Content:
    block Block_PINRegister_ContentWrapper (UBTConnect.App_PIN)
      args: EnableName=True, UseOverlay=UseOverlay
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
      args: In_IgnoreLockScreen=True, In_IgnorePolicy=True, In_ShowLockScreen=False
```

#### Screen actions
- **OnClick_BackToLogin**
  ```
  call AllowUpcomingNavigation()
  call AppManager_Logout()
  navigate → Login() transition=Inherited
  ```

## Screen PINUnlock (flow App_PIN)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: -
- lifecycle: none

#### Widget tree
```
block Block_PINUnlock (UBTConnect.App_PIN)
  args: In_ForceVisible=True
  on Unlock → Block_PINUnlockUnlock
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
      args: In_IgnoreLockScreen=True, In_IgnorePolicy=True
```

#### Screen actions
- **Block_PINUnlockUnlock**
  ```
  call GetResumeLoginLink()
  call ReplaceOnUpcomingNavigation()
  if GetResumeLoginLink.URL <> ""
    call ScreenController_NavigateToPage(ReplaceInHistory=True, URL=GetResumeLoginLink.URL) as ScreenController_NavigateToPage_ResumeLink
    end
  else
    call ScreenController_NavigateToPage(ReplaceInHistory=True, URL=Client.LastURL) as ScreenController_NavigateToPage_LastURL
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
