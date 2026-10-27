# Pack of UI flow App_PIN (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: Block_PINRegister_ContentWrapper, Block_PINUnlock, Block_PINUnlock_ContentWrapper
Blocks of other UBTConnect flows that the flow uses (transitive): 10

## Block Block_PINRegister_ContentWrapper (flow App_PIN)
- public: False
- input parameters: UseOverlay: Boolean = True; isFromMenu: Boolean; RegisterText: Text = "Register a PIN code"; ConfirmText: Text = "Confirm PIN code"; EnableName: Boolean
- events: -
- local variables: UserName: Text
- lifecycle: OnInitialize → ScreenEvent_OnInitialize
- used by (UBTConnect): PINChange, PINRegister

#### Widget tree
```
block Pincode_Register (UBT_AppManager.PIN)
  args: In_AllowBackNavigation=isFromMenu, In_ExtendedClasses="connect-pin-screen" + If(UseOverlay," ubt-pin-overlay",""), In_PinLength=4
  on PinRegistrationSuccess → Event_Pincode_RegisterPinRegistrationSuccess
  on PinRegistrationError → Event_Pincode_RegisterPinRegistrationError(ErrorMessage=ErrorMessage)
  placeholder TitlePlaceholder:
    if UseOverlay
      image ConnectLogoWhite type=Static  [style="login-screen__connect-logo"]
    else
      image ConnectLogo type=Static  [style="login-screen__connect-logo"]
  placeholder RegistrationText:
    if EnableName #ShowName
      block CustomText (UBTConnectLibrary.BasePatterns)
        args: In_Text="Welcome "+UserName, In_TextOptions={ Color: Entities.UBT_Color.Inherit, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
    block CustomText (UBTConnectLibrary.BasePatterns)
      args: In_Text=RegisterText, In_TextOptions={ Color: Entities.UBT_Color.Inherit, FontSize: Entities.UBT_FontSize.Base, FontWeight: If(EnableName,Entities.UBT_FontWeight.Regular,Entities.UBT_FontWeight.SemiBold) }
  placeholder ConfirmationText:
    if EnableName #ShowName2
      block CustomText (UBTConnectLibrary.BasePatterns)
        args: In_Text="Welcome "+UserName, In_TextOptions={ Color: Entities.UBT_Color.Inherit, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
    block CustomText (UBTConnectLibrary.BasePatterns)
      args: In_Text=ConfirmText, In_TextOptions={ Color: Entities.UBT_Color.Inherit, FontSize: Entities.UBT_FontSize.Base, FontWeight: If(EnableName,Entities.UBT_FontWeight.Regular,Entities.UBT_FontWeight.SemiBold) }
  placeholder ErasePlaceholder:
    block Icon (UBTConnectLibrary.ConnectPatterns)
      args: In_ColorId=Entities.UBT_Color.Inherit, In_IconId=Entities.UBT_Icons2.Backspace, In_SizeId=Entities.UBT_IconsSize.Display_36
  placeholder ContentPlaceholder:
    if isFromMenu #ShowNeeHelp
    else
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ TextOptions: { Color: Entities.UBT_Color.Neutral10 } }
        placeholder Content:
          text: Need help? 
          link onclick → ContactUsMenu  [style="font-regular text-underline"]
            text: Contact Us
```

#### Block actions
- **Event_Pincode_RegisterPinRegistrationError** inputs: ErrorMessage: Text (mandatory)
  ```
  call FeedbackMessage_AutoClose(Message=ErrorMessage, MessageType=Entities.UBT_MessageType.Error)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_Pincode_RegisterPinRegistrationSuccess**
  ```
  call ReplaceOnUpcomingNavigation()
  if isFromMenu
    call FeedbackMessage_AutoClose(Message="Your PIN has been changed.", MessageType=Entities.UBT_MessageType.Success)
    navigate → Menu() transition=SlideFromRight
  else
    call GetResumeLoginLink()
    assign: Client.IsNavigateToHomeOnBack = True
    if GetResumeLoginLink.URL <> ""
      call ScreenController_NavigateToPage(ReplaceInHistory=True, URL=GetResumeLoginLink.URL) as ScreenController_NavigateToPage2
      end
    else
      if Client.LastURL <> ""
        call ScreenController_NavigateToPage(ReplaceInHistory=True, URL=Client.LastURL)
        end
      else
        assign: Client.IsNavigateToHomeOnBack = False
        navigate → HomeFeed() transition=Inherited
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  if EnableName
    call AppManager_GetCachedUserInfo()
    assign: UserName = AppManager_GetCachedUserInfo.UserInformation.FirstName+" "+AppManager_GetCachedUserInfo.UserInformation.LastName
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Block_PINUnlock (flow App_PIN)
- public: False
- input parameters: In_ForceVisible: Boolean; In_IsCommonBlock: Boolean
- events: Unlock() mandatory
- local variables: UseOverlay: Boolean = True; IsUnsupportedSystem: Boolean
- lifecycle: OnInitialize → ScreenEvent_OnInitialize
- used by (UBTConnect): CommonUI_InsideLayout, PINUnlock

#### Widget tree
```
block Layout_LoginFlow (UBTConnectLibrary.Layouts)
  args: In_ExtendedClass="ubt-lock-screen connect-legacy-compatibily-containter", In_HasOverlay=UseOverlay, In_IsCommonBlock=In_IsCommonBlock
  placeholder Placeholder_Content:
    if IsUnsupportedSystem
      container  [style="ubt-layout--login__content__unsupported-card"]
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { HorizontalSizeId: Entities.UBT_Size.ExtraLarge }, MarginSize: { HorizontalSizeId: Entities.UBT_Size.Base }, BorderOption…
          placeholder Content:
            block UnsupportedVersion_Wrapper (UBTConnect.App_Common)
    else
      block Block_PINUnlock_ContentWrapper (UBTConnect.App_PIN)
        args: In_ForceVisible=In_ForceVisible, ShowForgotPIN=True, ShowPolicy=True, UseOverlay=UseOverlay
        on Unlock → Unlock
        on NavigateTo_PINRegister → Block_PINUnlock_ContentWrapperNavigateTo_PINRegist
  placeholder Placeholder_CommonUI_Inside_Layout:
    placeholder-def Placeholder_CommonUI_Inside_Layout
```

#### Block actions
- **Block_PINUnlock_ContentWrapperNavigateTo_PINRegist**
  ```
  navigate → PINRegister() transition=Inherited
  ```
- **ScreenEvent_OnInitialize**
  ```
  call Get_IsUnsupportedSystem()
  assign: IsUnsupportedSystem = Get_IsUnsupportedSystem.Out_IsUnsupportedSystem
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Block_PINUnlock_ContentWrapper (flow App_PIN)
- public: False
- input parameters: UseOverlay: Boolean = True; In_ForceVisible: Boolean; UnlockText: Text = "Enter your PIN code"; ShowNeedHelp: Boolean; isFromMenu: Boolean; ShowForgotPIN: Boolean; ShowPolicy: Boolean (mandatory)
- events: NavigateTo_PINRegister() mandatory; Unlock() mandatory
- local variables: LocalCacheControlPolicies: CacheControl_Policies, isFetched Record; ShowFingerprintReader: Boolean
- lifecycle: OnInitialize → ScreenEvent_OnInitialize
- used by (UBTConnect): Block_PINUnlock, PINChange

#### Widget tree
```
block PinUnlock_MobileWrapper (UBT_AppManager_Mobile.Fingerprint)
  args: In_AllowBackNavigation=isFromMenu, In_ExtendedClasses="connect-pin-screen" + If(UseOverlay," ubt-pin-overlay",""), In_ForceVisible=In_ForceVisible, In_HideFingerprint=not ShowFingerprintReader, In_IsScanFingerprintOnReady=ShowFingerprintReader, In_PinLength=4
  on PinUnlockSuccess → Event_Pincode_PinUnlockSuccess
  on PinUnlockError → Event_Pincode_PinUnlockError(ErrorMessage=ErrorMessage)
  placeholder Placeholder_TitlePlaceholder:
    if UseOverlay
      image ConnectLogoWhite type=Static  [style="login-screen__connect-logo"]
    else
      image ConnectLogo type=Static  [style="login-screen__connect-logo"]
  placeholder Placeholder_UnlockText:
    block CustomText (UBTConnectLibrary.BasePatterns)
      args: In_Text=UnlockText, In_TextOptions={ Color: Entities.UBT_Color.Inherit, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
  placeholder Placeholder_FingerprintIcon:
    block Icon (UBTConnectLibrary.ConnectPatterns)
      args: In_ColorId=Entities.UBT_Color.Inherit, In_IconId=Entities.UBT_Icons2.Fingerprint
  placeholder Placeholder_EraseButton:
    block Icon (UBTConnectLibrary.ConnectPatterns)
      args: In_ColorId=Entities.UBT_Color.Inherit, In_IconId=Entities.UBT_Icons2.Backspace, In_SizeId=Entities.UBT_IconsSize.Display_36
  placeholder Placeholder_BottomKeyboard:
    container  [style="border-bottom-s border-color-neutral-0"; visible=ShowForgotPIN]
      link onclick → OnClick_ForgotPIN
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: ExtendedClasses="border-bottom-s border-color-neutral-0", Options={ TextOptions: { Color: Entities.UBT_Color.Neutral0, FontWeight: Entities.UBT_FontWeight.SemiBold, IsUnderlined: False } }
          placeholder Content:
            expr: "Forgot PIN?"
  placeholder Placeholder_Content:
    if ShowNeedHelp
      container
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ TextOptions: { Color: Entities.UBT_Color.Neutral10 } }
          placeholder Content:
            text: Need help? 
            link onclick → ContactUsMenu  [style="font-regular text-underline"]
              text: Contact Us
    else
      if ShowPolicy
        block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
          args: In_IsLoading=not LocalCacheControlPolicies.isFetched
          placeholder Placeholder_LoadingSection:
            block Columns_Two (UBTConnectLibrary.BasePatterns)
              placeholder Left:
                if LocalCacheControlPolicies.CacheControl_Policies.PolicyInformation_TermsAndConditions.Policy_Url <> ""
                  container
                    link onclick → OnClick_TermsAndCondition
                      block CustomText (UBTConnectLibrary.BasePatterns)
                        args: In_Text="Terms & Conditions", In_TextOptions={ FontSize: Entities.UBT_FontSize.Small, IsUnderlined: True }
              placeholder Right:
                if LocalCacheControlPolicies.CacheControl_Policies.PolicyInformation_PrivacyPolicy.Policy_Url <> ""
                  container
                    link onclick → OnClick_PrivacyPolicy
                      block CustomText (UBTConnectLibrary.BasePatterns)
                        args: In_Text="Our Privacy Policy", In_TextOptions={ FontSize: Entities.UBT_FontSize.Small, IsUnderlined: True }
        block CacheControl_Policies (UBTConnect_Utils.CacheControl)
          on Result → CacheControl_PoliciesResult(CacheControl_Response=CacheControl_Response)
```

#### Block actions
- **CacheControl_PoliciesResult** inputs: CacheControl_Response: CacheControl_Policies (mandatory)
  ```
  assign: LocalCacheControlPolicies.CacheControl_Policies = CacheControl_Response; LocalCacheControlPolicies.isFetched = True
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_Pincode_PinUnlockError** inputs: ErrorMessage: Text (mandatory); locals: FormattedMessage: Text
  ```
  assign: FormattedMessage = ErrorMessage
  switch
    case ErrorMessage = "Pin does not match" (Wrong pin)
      assign: FormattedMessage = "Your current PIN is not correct!"
      [M1] call FeedbackMessage_AutoClose(Message=FormattedMessage, MessageType=Entities.UBT_MessageType.Error)
      end
    case ErrorMessage = "User not found"
      assign: FormattedMessage = "No matching user. Please Register a PIN"
      call FeedbackMessage_AutoClose(Message=FormattedMessage, MessageType=Entities.UBT_MessageType.Error) as FeedbackMessage_AutoClose2
      trigger event NavigateTo_PINRegister()
      end
    otherwise
      → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Event_Pincode_PinUnlockSuccess**
  ```
  trigger event Unlock()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_ForgotPIN**
  ```
  navigate → Login(In_IsFromResetPIN=True) transition=Inherited
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] call AppManager_Logout()
  ```
- **OnClick_PrivacyPolicy**
  ```
  call OpenPolicy(PolicyInformation=LocalCacheControlPolicies.CacheControl_Policies.PolicyInformation_PrivacyPolicy)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_TermsAndCondition**
  ```
  call OpenPolicy(PolicyInformation=LocalCacheControlPolicies.CacheControl_Policies.PolicyInformation_TermsAndConditions)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  assign: ShowFingerprintReader = Client.App_PIN_BiometricEnabled and not isFromMenu
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| CommonUI_InsideLayout | App_Common | `../../App_Common/pack/blocks.md` | In_ShowLockScreen: Boolean; In_IgnorePolicy: Boolean; In_IgnoreLockScreen: Boolean | Event_OnScreenLocked; Event_OnScreenUnlocked |
| HandleOnResumeOpenLink | Legacy_Share | `../../Legacy_Share/pack/blocks.md` | - | - |
| OfflineDataSyncEvents | App_Common | `../../App_Common/pack/blocks.md` | - | OnSyncComplete; OnSyncError; OnSyncStart |
| Policy_Checker | App_Policies | `../../App_Policies/pack/blocks.md` | - | - |
| UnsupportedVersion | App_Common | `../../App_Common/pack/blocks.md` | In_ExtendedClass: Text; In_HideButton: Boolean | Event_NavigateToPlaystore |
| UnsupportedVersion_Browser | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Native | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_WebView | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Wrapper | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| WelcomeToConnect | App_Common | `../../App_Common/pack/blocks.md` | - | - |
