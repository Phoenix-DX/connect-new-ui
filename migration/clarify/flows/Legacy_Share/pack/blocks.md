# Pack of UI flow Legacy_Share (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: HandleOnResumeOpenLink
Blocks of other UBTConnect flows that the flow uses (transitive): 11

## Block HandleOnResumeOpenLink (flow Legacy_Share)
- public: True
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): CommonUI_InsideLayout, Splash

#### Widget tree
```
block AndroidAppLinkOnResumeHandler (Connect2_AndroidAppLinksPlugin.AndroidAppLinks)
  on ResumeNavigation → AndroidAppLinkOnResumeHandlerResumeNavigation(EventData=EventData)
block DeeplinkHandlerCentral (EventfulDeeplinksPlugin.EventfulDeeplinksPlugin)
  on OnDeeplinkOpen → DeeplinkHandlerCentralOnDeeplinkOpen(URL=URL)
```

#### Block actions
- **Action_ProcessURL** inputs: In_URL: Text (mandatory)
  ```
  call PIN_Check()
  call AppManager_GetPIN_HasUnlocked()
  call AppManager_GetPIN_IsLocked()
  call AppManager_OnReadyChecker()
  call AppManager_GetPIN_IsRegistering()
  if GetUserId()= NullIdentifier() or\nPIN_Check.NeedUnlock and (not AppManager_GetPIN_HasUnlocked.HasUnlocked or AppManager_GetPIN_IsLocked.IsLocked or not AppManager_OnReadyChecker.isReady) or\nAppManager_GetPIN_IsRegistering.IsRegistering
    call SetResumeLoginLink(URL=In_URL)
    end
  else
    navigate → RedirectToURL(URL=In_URL) transition=Inherited
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **AndroidAppLinkOnResumeHandlerResumeNavigation** inputs: EventData: EventData (mandatory)
  ```
  call GetURLFromEventDataURL(EventDataURL=EventData.URL)
  call Action_ProcessURL(In_URL=GetURLFromEventDataURL.URL)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **DeeplinkHandlerCentralOnDeeplinkOpen** inputs: URL: Text (mandatory)
  ```
  call GetURLFromEventDataURL(EventDataURL=URL)
  assign: URL = GetURLFromEventDataURL.URL
  if Index(URL,"MessageDetail") >= 0 or\nIndex(URL,"AssembleDetail") >= 0
    end
  else
    call Action_ProcessURL(In_URL=URL)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| Block_PINUnlock | App_PIN | `../../App_PIN/pack/blocks.md` | In_ForceVisible: Boolean; In_IsCommonBlock: Boolean | Unlock |
| Block_PINUnlock_ContentWrapper | App_PIN | `../../App_PIN/pack/blocks.md` | UseOverlay: Boolean = True; In_ForceVisible: Boolean; UnlockText: Text = "Enter your PIN code"; ShowNeedHelp: Boolean; isFromMenu: Boolean; ShowForgotPIN: Boolean; ShowPolicy: Boolean (mandatory) | NavigateTo_PINRegister; Unlock |
| CommonUI_InsideLayout | App_Common | `../../App_Common/pack/blocks.md` | In_ShowLockScreen: Boolean; In_IgnorePolicy: Boolean; In_IgnoreLockScreen: Boolean | Event_OnScreenLocked; Event_OnScreenUnlocked |
| OfflineDataSyncEvents | App_Common | `../../App_Common/pack/blocks.md` | - | OnSyncComplete; OnSyncError; OnSyncStart |
| Policy_Checker | App_Policies | `../../App_Policies/pack/blocks.md` | - | - |
| UnsupportedVersion | App_Common | `../../App_Common/pack/blocks.md` | In_ExtendedClass: Text; In_HideButton: Boolean | Event_NavigateToPlaystore |
| UnsupportedVersion_Browser | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Native | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_WebView | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Wrapper | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| WelcomeToConnect | App_Common | `../../App_Common/pack/blocks.md` | - | - |
