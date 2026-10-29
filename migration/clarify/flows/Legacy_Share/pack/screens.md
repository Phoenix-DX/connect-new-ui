# Pack of UI flow Legacy_Share (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: ConnectShare, LegacyShareObject

## Screen ConnectShare (flow Legacy_Share)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: ShareId: Text (mandatory)
- local variables: StatusMessage: Text; ShowFreeSubscriptionAlert: Boolean; IsRedirect: Boolean; Redirect_ShareObjectTypeId2: Type_ShareObject Identifier; Redirect_Share_AttributesId2: Text
- lifecycle: OnInitialize → ScreenEvent_OnInitialize; OnReady → ScreenEvent_OnReady

#### Widget tree
```
if not IsRedirect
  block ScreenBlock_ShareDetail (Connect2_LegacyShared.Share_UI)
    args: StatusMessage=StatusMessage
    placeholder CommonUI_Elements:
      block CommonUI_InsideLayout (UBTConnect.App_Common)
  block Dialog_AccessRestrictedAction_Legacy (UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs) #SubscriptionDenied
```

#### Screen actions
- **Action_Redirect** inputs: Redirect_ShareObjectTypeId: Type_ShareObject Identifier (mandatory); Redirect_Share_AttributesId: Text (mandatory)
  ```
  call ReplaceOnUpcomingNavigation()
  switch
    case Redirect_ShareObjectTypeId = Entities.Type_ShareObject.Household or\nRedirect_ShareObjectTypeId = Entities.Type_ShareObject.MyHousehold or \nRedirect_ShareObjectTypeId = Entities.Type_ShareObject.Update (Members)
      navigate → HouseholdDetails(HouseholdId=TextToInteger(Redirect_Share_AttributesId)) transition=None
    case Redirect_ShareObjectTypeId = Entities.Type_ShareObject.OneSchoolGlobal (OneSchoolGlobal)
      navigate → OneSchoolGlobalDetails(In_OneSchoolGlobalId=TextToInteger(Redirect_Share_AttributesId)) transition=None
    case Redirect_ShareObjectTypeId = Entities.Type_ShareObject.Feed (FeedItem)
      navigate → FeedItemDetail(FeedItemId=Redirect_Share_AttributesId) transition=None
    case Redirect_ShareObjectTypeId = Entities.Type_ShareObject.SupperMeeting (Supper Meeting)
      navigate → SupperMeeting_Details(In_SubdivsionId=TextToInteger(Redirect_Share_AttributesId)) transition=None
    otherwise
      assign: IsRedirect = False
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_SetShowFreeSubscriptionAlert** inputs: In_ShowFreeSubscriptionAlert: Boolean (mandatory)
  ```
  if In_ShowFreeSubscriptionAlert
    assign: ShowFreeSubscriptionAlert = True
    call App_Subscription_ShowUpgradePopUp()
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  if False
    assign: IsRedirect = False
    call ScreenController_NavigateToPage(ReplaceInHistory=True, URL="https://ubtm-dev.ubtconnectglobal.com/UBTConnect/CountryList")
    end
  else
    javascript WasCurrentViewRestoredFromCache() → FromCache: Boolean
      | $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    if WasCurrentViewRestoredFromCache.FromCache
      if StatusMessage <> "" or ShowFreeSubscriptionAlert
        end
      else
        navigate → (Previous Screen)() transition=None
    else
      call OnInitializeSharingScreen(ShareId=ShareId)
      assign (Set Vars): StatusMessage = OnInitializeSharingScreen.StatusMessage
      if OnInitializeSharingScreen.IsRedirect
        assign: IsRedirect = True; Redirect_ShareObjectTypeId2 = OnInitializeSharingScreen.Redirect_ShareObjectTypeId; Redirect_Share_AttributesId2 = OnInitializeSharingScreen.Redirect_Share_Attributes.Id
        end
      else
        javascript DelayedShowFreeSubscriptionAlert(ShowFreeSubscriptionAlert=OnInitializeSharingScreen.ShowFreeSubscriptionAlert)
          | window.setTimeout(function() {
          |     $actions.Action_SetShowFreeSubscriptionAlert($parameters.ShowFreeSubscriptionAlert)
          | }, 1000)
        end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
    end
  ```
- **ScreenEvent_OnReady**
  ```
  if IsRedirect
    call Action_Redirect(Redirect_Share_AttributesId=Redirect_Share_AttributesId2, Redirect_ShareObjectTypeId=Redirect_ShareObjectTypeId2)
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Screen LegacyShareObject (flow Legacy_Share)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_ShareObjectTypeId: Type_ShareObject Identifier (mandatory); In_ObjectId: Text (mandatory); In_CustomTitle: Text
- local variables: User_AgeVisibility: Boolean
- lifecycle: OnInitialize → OnInitialize

#### Widget tree
```
block ScreenBlock_ShareObject (Connect2_LegacyShared.Share_UI)
  args: In_CustomTitle=In_CustomTitle, ObjectId=In_ObjectId, ShareObjectTypeId=In_ShareObjectTypeId, User_AgeVisibility=User_AgeVisibility
  on SubscriptionDenied → Handler_ShareObject_SubscriptionDenied
  placeholder CommonUI_Elements:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
block Dialog_AccessRestrictedAction (UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs) #SubscriptionDenied
  args: In_ExtendedClass="connect-legacy-compatibily-containter"
```

#### Screen actions
- **Handler_ShareObject_SubscriptionDenied**
  ```
  call App_Subscription_ShowUpgradePopUp()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  call GetUserInformation_Wrapper()
  assign: User_AgeVisibility = GetUserInformation_Wrapper.UserInformation.Directory_UserCurrent_Visibility.DisplayAge
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
