# Pack of UI flow App_Common (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: InvalidPermissions, Login, Splash

## Screen InvalidPermissions (flow App_Common)
- roles: Anonymous, Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: -
- lifecycle: none

#### Widget tree
```
block Layout (UBTConnect.App_Common)
  placeholder HeaderLeft:
    block MenuIcon (UBTConnect.App_Common)
  placeholder Title:
    text: Invalid Permissions
  placeholder Content:
    block BlankSlate (OutSystemsUI_2_23.Content)
      args: FullHeight=True
      placeholder Icon:
        icon #Icon1 warning size=FontSize  [style="icon"]
      placeholder Content:
        text: You don't have permissions to view the required screen.
      placeholder Actions:
        button onclick → Login  [style="btn"; width=6 col]
          text: Login
  placeholder Bottom:
    block BottomBarMenu (UBTConnect.App_Common)
```

## Screen Login (flow App_Common)
- roles: Anonymous, Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_IsFromInvalidPermissions: Boolean; In_IsFromResetPIN: Boolean; CallbackType: AppManager_JSUtils_CustomEvents Identifier; CallbackGUID: Text
- local variables: IsExecutingLogin: Boolean; IsResettingPassword: Boolean; IsUnsupportedSystem: Boolean
- lifecycle: OnInitialize → OnInitialize; OnReady → OnReady

#### Widget tree
```
block Layout_LoginFlow (UBTConnectLibrary.Layouts)
  args: In_HasOverlay=True
  placeholder Placeholder_Content:
    container  [style="connect-login-screen"]
      container  [style="connect-login-screen__content"]
        block Tile (UBTConnectLibrary.ConnectPatterns)
          args: ExtendedClasses="ubt-zindex-2 connect-login-card"
          placeholder Content:
            container  [style="connect-login-card__content"]
              if IsUnsupportedSystem #IsUnsupported
                block UnsupportedVersion_Wrapper (UBTConnect.App_Common)
              else
                block WelcomeToConnect (UBTConnect.App_Common)
                container
                  block CustomContainer (UBTConnectLibrary.BasePatterns)
                    args: ExtendedClasses="login-button  ", Options={ MarginSize: {  } }
                    placeholder Content:
                      block ButtonLoading (OutSystemsUI_2_23.Utilities2)
                        args: ExtendedClass="full-width", IsLoading=IsExecutingLogin, ShowLabelOnLoading=True
                        placeholder Button:
                          button onclick → Login(isResetPassword=False) validations=ValidateAndContinue  [style="btn btn-primary"; enabled=not IsResettingPassword]
                            container  [style="osui-btn-loading__spinner-animation"]
                            text: Login with UBT One 
                  block CustomContainer (UBTConnectLibrary.BasePatterns)
                    args: ExtendedClasses="login-button", Options={ MarginSize: { TopSizeId: Entities.UBT_Size.Base } }
                    placeholder Content:
                      block ButtonLoading (OutSystemsUI_2_23.Utilities2)
                        args: ExtendedClass="full-width", IsLoading=IsResettingPassword, ShowLabelOnLoading=True
                        placeholder Button:
                          button onclick → Login(isResetPassword=True) validations=ValidateAndContinue  [style="btn"; enabled=not IsExecutingLogin]
                            container  [style="osui-btn-loading__spinner-animation"]
                            text: Forgot Password?
        container  [style="text-align-center"]
          container  [style="need-help-footer"]
            text: Need help? 
            link onclick → ContactUsMenu  [style="font-regular text-underline"]
              text: Contact Us
          block Version_LoginWrapper (UBTConnect.App_Common)
    block Dialog_ExitConfirmation (UBTConnect.App_Common_Blocks_PopupDialogs)
  placeholder Placeholder_CommonUI_Inside_Layout:
    block OfflineDataSyncEvents (UBTConnect.App_Common)
    block AppManager_Events (UBT_AppManager.Layouts2)
      on OnCallback → AppManager_Callback(AppManager_Callback=AppManager_Callback)
    block ActionConfirmationDialog (NavigationHandler.ConfirmationDialogs) #ConfirmationDialog_ResetPassword
      placeholder DialogHeader:
        text: Security Warning
      placeholder DialogBody:
        text: Your Connect account was accessed from a different device or application.\nTo help keep your account secure, please click ‘Continue’ to reset your password.
      placeholder ButtonLabel_Confirm:
        text: Continue
      placeholder ButtonLabel_Dismiss:
        text: Cancel
    block CommonUI_InsideLayout (UBTConnect.App_Common)
      args: In_IgnoreLockScreen=True, In_IgnorePolicy=True
```

#### Screen actions
- **AppManager_Callback** inputs: AppManager_Callback: AppManager_Callback (mandatory)
  ```
  if AppManager_Callback.isSucess
    call Connect_SetLoggedContext(isFromLogin=True)
    call TriggerOfflineDataSync()
    call ReplaceOnUpcomingNavigation()
    assign: IsExecutingLogin = False; IsResettingPassword = False
    switch
      case AppManager_Callback.CallbackType = Entities.AppManager_JSUtils_CustomEvents.IdP_OnLogin (Login)
        navigate → HomeFeed() transition=Inherited
      case AppManager_Callback.CallbackType = Entities.AppManager_JSUtils_CustomEvents.IdP_OnResetPassword (Password)
        call FeedbackMessage_AutoClose(Message=AppManager_Callback.Message, MessageType=Entities.UBT_MessageType.Success, Title=AppManager_Callback.MessageTitle) as FeedbackMessage_AutoClose2
        end
      case AppManager_Callback.CallbackType = Entities.AppManager_JSUtils_CustomEvents.PIN_NeedRegistration (PIN_NeedRegistration)
        navigate → PINRegister() transition=Inherited
      otherwise
        end
  else
    call FeedbackMessage_AutoClose(Message=AppManager_Callback.Message, MessageType=AppManager_Callback.MessageType, Title=AppManager_Callback.MessageTitle)
    assign: IsExecutingLogin = False; IsResettingPassword = False
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **Login** inputs: isResetPassword: Boolean (mandatory)
  ```
  if isResetPassword
    assign: IsResettingPassword = True
    [M1] call AppManager_Login(ConfirmationDialog_ResetPasswordId=ConfirmationDialog_ResetPassword.Id, isResetPassword=isResetPassword)
    end
  else
    assign: IsExecutingLogin = True
    → continues at [M1]
  on exception All Exceptions (log=True)
  assign: IsExecutingLogin = False; IsResettingPassword = False
  call ShowExceptionMessage(ExceptionMessage=AllExceptions.ExceptionMessage)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnInitialize**
  ```
  call Get_IsUnsupportedSystem()
  assign: IsUnsupportedSystem = Get_IsUnsupportedSystem.Out_IsUnsupportedSystem
  if IsUnsupportedSystem
    end
  else
    if In_IsFromInvalidPermissions
      [M1] assign: IsExecutingLogin = False
      if In_IsFromResetPIN
        javascript IsRestoredFromCache() → IsRestoredFromCache: Boolean
          | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
        if IsRestoredFromCache.IsRestoredFromCache
          end
        else
          call Login(isResetPassword=False)
          call AppManager_Logout()
          end
      else
        end
    else
      call AppManager_SetAppCallback(OutSystems_OriginalAppCallback="")
      → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
    end
  ```
- **OnReady**
  ```
  if (DeviceAwarenesCallback?) CallbackType = Entities.AppManager_JSUtils_CustomEvents.DeviceAwareness_InvalidDevice
    call AppManager_HandleDeviceAwarenessPopUp(LoginOperationGUID=CallbackGUID, ResetPasswordPopupId=ConfirmationDialog_ResetPassword.Id)
    end
  else
    call DelayedMessage_Show()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Screen Splash (flow App_Common)
- roles: Anonymous, Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: Percentage: Integer; TriggerAnimation: Boolean; NavigationObject: Object
- lifecycle: none

#### Widget tree
```
block LayoutBlank (UBTConnect.App_Common)
  placeholder Content:
    block LoadingDots (UBTConnectLibrary.ConnectPatterns)
      args: In_FinalCurvaturePercentage=Client.App_PIN_Header_FinalHeightPercentage, In_Header_FinalHeightPercentage=Client.App_PIN_Header_FinalHeightPercentage, isTriggerAnimation=TriggerAnimation
      on AnimationComplete → LoadingDotsAnimationComplete
    if False  [DEAD BRANCH: condition is a constant]
      container #SplashContent  [style="background-neutral-0 full-height display-flex center flex-direction-column"]
        block Animate (OutSystemsUI_2_23.Interaction) #Image
          args: AnimationType=Entities.AnimationType.TopToBottom, Speed=Entities.Speed.Slow
          placeholder Content:
            image AppLogo type=Static  [style="border-radius-soft shadow-s"; width=96px; alt=""]
        block Animate (OutSystemsUI_2_23.Interaction) #Title
          args: AnimationType=Entities.AnimationType.TopToBottom, Speed=Entities.Speed.Slow
          placeholder Content:
            html <h1>  [class="margin-top-m heading5 text-neutral-8"]
              expr: GetEntryEspaceName()  (example: Application Title)
        block Animate (OutSystemsUI_2_23.Interaction) #Progress
          args: AnimationType=Entities.AnimationType.BottomToTop, Speed=Entities.Speed.Slow
          placeholder Content:
            container  [style="margin-top-xxl"; width=200px]
              block ProgressBar (OutSystemsUI_2_23.Numbers)
                args: OptionalConfigs={ AnimateInitialProgress: False }, Progress=Percentage, ProgressColor=Entities.Color.Primary, Thickness=2
    block ApplicationLoadEvents (OutSystemsUI_2_23.Private)
      args: MinimumDisplayTimeMs=1500
      on OnUpgradeProgress → OnUpgradeProgress(Completed=Completed, Total=Total)
      on OnLoadComplete → OnLoadComplete(In_RedirectURL=RedirectURL)
    if False  [DEAD BRANCH: condition is a constant]
      block CommonUI_InsideLayout (UBTConnect.App_Common)
        args: In_IgnorePolicy=True
    else
      block HandleOnResumeOpenLink (UBTConnect.Legacy_Share)
block NavigationHandler (NavigationHandler.NavigationHandler)
  on Navigation → Handler_OnNavigation(NavigationEvent=NavigationEvent)
```

#### Screen actions
- **Handler_OnNavigation** inputs: NavigationEvent: Object (mandatory)
  ```
  call PreventNavigation(NavigationEvent=NavigationEvent)
  assign: NavigationObject = NavigationEvent
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **LoadingDotsAnimationComplete**
  ```
  call Set_InitialClientVariables()
  call PIN_Check()
  call GetColdStartLinkURL()
  call AllowUpcomingNavigation()
  if GetColdStartLinkURL.URL <> "" and\n(PIN_Check.NeedRegister or PIN_Check.NeedUnlock or GetUserId() = NullIdentifier())
    call SetResumeLoginLink(URL=GetColdStartLinkURL.URL)
    [M1] if GetUserId() <> NullIdentifier()
      if PIN_Check.NeedRegister
        navigate → PINRegister() transition=Inherited
      else
        if PIN_Check.NeedUnlock
          navigate → PINUnlock() transition=Inherited
        else
          [M2] if GetColdStartLinkURL.URL <> ""
            call ScreenController_NavigateToPage(ReplaceInHistory=True, URL=GetColdStartLinkURL.URL) as ScreenController_NavigateToPage_LastURL2
            end
          else
            call ScreenController_NavigateToPage(ReplaceInHistory=True, URL=Client.LastURL) as ScreenController_NavigateToPage_LastURL
            end
    else
      → continues at [M2]
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnLoadComplete** inputs: In_RedirectURL: Text (mandatory)
  ```
  assign: TriggerAnimation = True
  if NavigationObject <> NullObject() and\nClient.LastURL <> ""
    end
  else
    assign: Client.LastURL = In_RedirectURL
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnUpgradeProgress** inputs: Completed: Integer (mandatory); Total: Integer (mandatory)
  ```
  assign: Percentage = (Completed / Total) * 150
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## External site RedirectToURL (flow App_Common)
- URL: ; inputs: URL: Text (mandatory)
