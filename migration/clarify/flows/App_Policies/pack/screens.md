# Pack of UI flow App_Policies (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: AcceptPendingPolicies

## Screen AcceptPendingPolicies (flow App_Policies)
- roles: Registered, UBTOne_User; URL structure: QueryString; stylesheet: yes
- input parameters: -
- local variables: useOverlay: Boolean = True; UserCountry: Text; MainContainer: Text
- lifecycle: OnInitialize → OnInitialize

#### Widget tree
```
block Layout_LoginFlow (UBTConnectLibrary.Layouts)
  args: In_ExtendedClass="ubt-policies", In_HasOverlay=useOverlay
  on OnReady → Layout_LoginFlowOnReady(MainContainerId=MainContainerId)
  on OnPathCalculated → DefineHeight
  placeholder Placeholder_Content:
    container #Content  [style="ubt-policies--content"]
      container  [style="ubt-policies--header"]
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ PaddingSize: { BottomSizeId: Entities.UBT_Size.Small } }
          placeholder Content:
            block CustomText (UBTConnectLibrary.BasePatterns)
              args: In_Text="Welcome to", In_TextOptions={ Color: Entities.UBT_Color.Neutral0, FontSize: Entities.UBT_FontSize.Heading3, FontWeight: Entities.UBT_FontWeight.SemiBold }
        image ConnectLogoWhite type=Static  [style="login-screen__connect-logo"]
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ PaddingSize: { TopSizeId: Entities.UBT_Size.Base, BottomSizeId: Entities.UBT_Size.Medium } }
          placeholder Content:
            block CustomText (UBTConnectLibrary.BasePatterns)
              args: In_Text="Connect and Directory"\n, In_TextOptions={ Color: Entities.UBT_Color.Neutral0, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
            block CustomText (UBTConnectLibrary.BasePatterns)
              args: In_Text="Terms and Conditions & Privacy Policy", In_TextOptions={ Color: Entities.UBT_Color.Neutral0, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
      block Policy_Custom_AcceptPendingPolicies (UBTConnect.App_Policies)
        args: ContentBlockId=MainContainer, Country=UserCountry, PolicyApplications=[ TextToIdentifier(Entities.Connect_Applications.Connect), TextToIdentifier(Entities.Connect_Applications.Directory), TextToIdentifier(Entities.Connect_Applications.Orbit) ]
        on NetworkError → AcceptPendingPoliciesNetworkError
        on AcceptedAll → AcceptPendingPoliciesAcceptedAll
    block BackNavigationHandler (NavigationHandler.NavigationHandler)
      on BackNavigation → BackNavigationHandlerBackNavigation(BackNavigationEvent=BackNavigationEvent)
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
      args: In_IgnorePolicy=True
```

#### Screen actions
- **AcceptPendingPoliciesAcceptedAll**
  ```
  call Cache_UserInfo_Get()
  assign: Cache_UserInfo_Get.UserInformation.HasPoliciesToAccept = False
  call Get_MemoryCacheKey_UniqueKey()
  call PutCacheableObject(CacheKey=Get_MemoryCacheKey_UniqueKey.Key, CacheTimeToLiveSeconds=7200, MemoryCacheTypeId=TextToIdentifier(Entities.Connect_CacheType.DirectoryUser), Object=ToObject(Cache_UserInfo_Get.UserInformation))
  assign: Client.App_Policies_HasPolicyToAccept = False
  call ReplaceOnUpcomingNavigation()
  call AllowUpcomingNavigation()
  navigate → (Previous Screen)() transition=UseHistory
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] call None(None=False) as NavigateToDeeplink
    [DISABLED] if (No Deeplink?) NavigateToDeeplink.NavitageToURL = ""
    else
      [DISABLED] navigate → RedirectToURL(URL=NavigateToDeeplink.NavitageToURL) transition=Inherited
    [DISABLED] if Client.App_Policies_RedirectURL <> ""
      [DISABLED] navigate → RedirectToURL(URL=Client.App_Policies_RedirectURL) transition=Inherited
    else
      [DISABLED] navigate → HomeFeed() transition=Fade
  ```
- **AcceptPendingPoliciesNetworkError**
  ```
  call ShowCommunicationExceptionMessage()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **BackNavigationHandlerBackNavigation** inputs: BackNavigationEvent: Object (mandatory)
  ```
  call PreventNavigation(NavigationEvent=BackNavigationEvent)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **DefineHeight**
  ```
  if MainContainer <> ""
    call GetSVGMetric()
    call JSUtils_SetStyleProperty(ObjectId=MainContainer, PropertyName="--current-svg-height", PropertyValue=GetSVGMetric.HeightWithoutCurve+"px")
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Layout_LoginFlowOnReady** inputs: MainContainerId: Text (mandatory)
  ```
  assign: MainContainer = MainContainerId
  call DefineHeight()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  call AppManager_GetCachedUserInfo()
  assign: UserCountry = AppManager_GetCachedUserInfo.UserInformation.CountryCode
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
