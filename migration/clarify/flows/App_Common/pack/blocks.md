# Pack of UI flow App_Common (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: AppLogo_White, ApplicationTitle, BottomBarContent, BottomBarMenu, CommonUI_InsideLayout, Layout, LayoutBlank, MenuIcon, OfflineDataSyncEvents, SVGBackground_LoginWrapper, UnsupportedVersion, UnsupportedVersion_Browser, UnsupportedVersion_Native, UnsupportedVersion_WebView, UnsupportedVersion_Wrapper, UserInfo, Version, Version_LoginWrapper, WelcomeToConnect
Blocks of other UBTConnect flows that the flow uses (transitive): 6

## Block ApplicationTitle (flow App_Common)
- public: True
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): nothing in this module

#### Widget tree
```
container #ApplicationTitleWrapper  [style="application-name display-flex align-items-center full-height"; role="button"; tabindex="0"; on onclick → OnClick; on onkeypress → OnClick]
  image #AppLogo AppLogo type=Static  [style="app-logo"; alt=""]
  expr: GetEntryEspaceName()  (example: Application Title)
```

#### Block actions
- **OnClick**
  ```
  navigate → RedirectToURL(URL=GetOwnerURLPath()) transition=Fade
  ```

## Block AppLogo_White (flow App_Common)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): HomeFeed

#### Widget tree
```
image ConnectLogoWhite type=Static  [width=155px]
```

## Block BottomBarContent (flow App_Common)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): BottomBarMenu

#### Widget tree
```
container  [style="bottom-bar-wrapper"]
  placeholder-def Placeholder_BottomBarItems
```

## Block BottomBarMenu (flow App_Common)
- public: False
- input parameters: ActiveItem: Connect_BottomBar_Items Identifier; useMapsItems: Boolean; isHouseholder: Boolean; isRootPage: Boolean
- events: BottomBar_Clicked(Item: Connect_BottomBar_Items Identifier)
- local variables: LocalBottomBar_Items: BottomBar_Item List; Retried: Boolean
- lifecycle: OnInitialize → OnInitialize; OnReady → OnReady; OnParametersChanged → OnParametersChanged
- used by (UBTConnect): AssembleDetail, AssembleEvents, Bookmarks, BrowseCountries, BrowseDirectory, CommunityBusinessDetails, CountryDetails, CountryList, EmailContact, EmailTarget, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, InvalidPermissions, LDM_Email, LDM_Email_V2, LDM_EventDetail, LDM_EventDetail_V2, LDM_MyEvents, LDM_MyEvents_V2, Layout, Locality_Details, Map, Menu, MessageDetail, MessageList, Notes, NotificationDetails, Notifications, OneSchoolGlobalCarousel, OneSchoolGlobalDetails, OrbitAdminEventDetail, OrbitAdminLanding, OrbitAdminMilestoneDetail, OrbitAdminMilestones, OrbitLanding, ScreenBlock_Search, Updates_SingleList

#### Widget tree
```
block BottomBarContent (UBTConnect.App_Common)
  placeholder Placeholder_BottomBarItems:
    list source=LocalBottomBar_Items mode=Custom  [style="list list-group"]
      link onclick → Event_BottomBar_Clicked(In_Item=LocalBottomBar_Items.Current.Id)  [style=If(ActiveItem = LocalBottomBar_Items.Current.Id, "active", "")]
        block BottomBarItem (OutSystemsUI_2_23.Navigation)
          placeholder Icon:
            if LocalBottomBar_Items.Current.Id = Entities.Connect_BottomBar_Items.Updates #If_IsUpdates
              block App_IconBadge (UBTConnect.App_Common_Blocks)
                args: BadgeNumber=Client.Directory_Updates_UnreadCount, IconColor=If(ActiveItem = LocalBottomBar_Items.Current.Id,Entities.UBT_Color.Primary,Entities.UBT_Color.Neutral6), IconId=If(ActiveItem = LocalBottomBar_Items.Current.Id,LocalBottomBar_Items.Current.UBTIconActive,LocalBottomBar_Items.Current.UBTIcon), isLoading=False, MaxNotifications=9
                on OnClick → Event_BottomBar_Clicked(In_Item=LocalBottomBar_Items.Current.Id)
            else
              block Icon (UBTConnectLibrary.ConnectPatterns)
                args: In_ColorId=If(ActiveItem = LocalBottomBar_Items.Current.Id,Entities.UBT_Color.Primary,Entities.UBT_Color.Neutral6), In_IconId=If(ActiveItem = LocalBottomBar_Items.Current.Id,LocalBottomBar_Items.Current.UBTIconActive,LocalBottomBar_Items.Current.UBTIcon), In_SizeId=Entities.UBT_IconsSize.Base_24
          placeholder Text:
            block CustomText (UBTConnectLibrary.BasePatterns)
              args: In_Text=LocalBottomBar_Items.Current.Label, In_TextOptions={ Color: If(ActiveItem = LocalBottomBar_Items.Current.Id,Entities.UBT_Color.Primary,Entities.UBT_Color.Neutral6), FontSize: Entities.UBT_FontSize.ExtraSmall }
```

#### Block actions
- **Event_BottomBar_Clicked** inputs: In_Item: Connect_BottomBar_Items Identifier (mandatory)
  ```
  if In_Item = ActiveItem and\nisRootPage
    if In_Item = Entities.Connect_BottomBar_Items.Bookmarks
      call ScrollTop(In_ScrollContainer=".layout .content") as ScrollTop2
      end
    else
      call ScrollTop()
      end
  else
    switch
      case In_Item = Entities.Connect_BottomBar_Items.Home (Home)
        navigate → HomeFeed() transition=Inherited
      case In_Item = Entities.Connect_BottomBar_Items.Directory (Directory)
        if GetHasC1DirectoryView()
          navigate → CountryList() transition=Inherited
        else
          navigate → Locality_Details() transition=Inherited
      case In_Item = Entities.Connect_BottomBar_Items.Updates (Updates)
        navigate → Updates_SingleList() transition=Inherited
      case In_Item = Entities.Connect_BottomBar_Items.Bookmarks (Bookmarks)
        navigate → Bookmarks() transition=Inherited
      case In_Item = Entities.Connect_BottomBar_Items.Menu (Menu)
        navigate → Menu() transition=Inherited
      otherwise
        trigger event BottomBar_Clicked(Item=In_Item)
        end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **OnInitialize**
  ```
  call BottomBar_GetList(isHouseholder=isHouseholder, useMapsItems=useMapsItems)
  assign: LocalBottomBar_Items = BottomBar_GetList.BottomBar_ItemsList
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnParametersChanged**
  ```
  call ListIndexOf(Condition=Id = ActiveItem, List=LocalBottomBar_Items) as ListIndexOf_ActiveIcon
  if isHouseholder and not Retried
    assign: Retried = True
    call OnInitialize()
    [M1] javascript Delayed_BottomBarSlider_ForceRefresh(ActiveItemIndex=ListIndexOf_ActiveIcon.Position)
      | $public.View.render().then(
      |     () => {
      |         if (!document.querySelector(".bottom-bar .list > a.active")) {
      |             let bottomBarItems = document.querySelectorAll(".bottom-bar .list > a");
      |             if ($parameters.ActiveItemIndex != -1 && bottomBarItems[$parameters.ActiveItemIndex]) {
      |                 bottomBarItems[$parameters.ActiveItemIndex].classList.add("active");
      |             }
      |         }
      |         $actions.BottomBarSlider_ForceRefresh();
      |         let currentActiveElement = document.querySelector(".bottom-bar .list > a.active");
      |         if (currentActiveElement) {currentActiveElement.classList.remove("active");} // This is an ad-hoc fix for first initialization of the map menu
      |     } 
      | )
    end
  else
    call BottomBarSlider_ForceRefresh()
    if useMapsItems
      → continues at [M1]
    else
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnReady**
  ```
  call Directory_Updates_RefreshBottomBarCount()
  call SetBottomBarActiveElement()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block CommonUI_InsideLayout (flow App_Common)
- public: False
- input parameters: In_ShowLockScreen: Boolean; In_IgnorePolicy: Boolean; In_IgnoreLockScreen: Boolean
- events: Event_OnScreenLocked(); Event_OnScreenUnlocked()
- local variables: HideLockScreen: Boolean; IsNavigateToHomeOnBack: Boolean
- lifecycle: OnInitialize → ScreenEvent_OnInitialize
- used by (UBTConnect): AcceptPendingPolicies, AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, Bookmarks, BrowseCountries, BrowseDirectory, CommunityBusinessDetails, ConnectShare, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, EmailContact, EmailTarget, EventBooklet, EventDetail, FeedItemDetail, GuestArrangements, HelpersDetail, HomeFeed, HostSurvey, HouseholdCarousel, HouseholdDetails, Household_Relations, LDM_Email, LDM_Email_V2, LDM_EventDetail, LDM_EventDetail_V2, LDM_MyEvents, LDM_MyEvents_V2, LegacyShareObject, Locality_Details, Login, Map, Menu, MessageDetail, MessageList, MilestoneDetail, MyCalendar, MyEntertaining, MyEntertaining_Embedded, Notes, NotificationDetails, Notifications, OneSchoolGlobalCarousel, OneSchoolGlobalDetails, OrbitAdminEventDetail, OrbitAdminLanding, OrbitAdminMilestoneDetail, OrbitAdminMilestones, OrbitLanding, PINRegister, PINUnlock, PassportScan, PersonalEventDetails, PersonalEventForm, Photobook, Profile, QRCodeGenerate, Recurrence, Reminder, ScreenBlock_Search, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, TransportDetail, Updates_SingleList, ViewDocuments

#### Widget tree
```
if False  [DEAD BRANCH: condition is a constant]
else
  block OfflineDataSyncEvents (UBTConnect.App_Common)
  if HideLockScreen or\nIn_IgnoreLockScreen #HideLockScreen2
  else
    block Block_PINUnlock (UBTConnect.App_PIN)
      args: In_ForceVisible=In_ShowLockScreen, In_IsCommonBlock=True
      on Unlock → OnPinUnlock_HideLockScreen
  if not In_IgnorePolicy and Client.App_Policies_HasPolicyToAccept #CheckPolicies
    block Policy_Checker (UBTConnect.App_Policies)
  block Dialog_AccessRestrictedAction (UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs)
  block HandleOnResumeOpenLink (UBTConnect.Legacy_Share)
  block HandleImageLoadError (Connect2_LegacyShared.Utility)
  if IsNavigateToHomeOnBack #If_IsNavigateToHomeOnBack
    block PreventBackNavigation (NavigationHandler.NavigationHandler)
      on BackNavigationPrevented → OnBackNavigation_RedirectHome(BackNavigationEvent=BackNavigationEvent)
  else
    block BackNavigationHandler (NavigationHandler.NavigationHandler)
      args: Priority=-10000
      on BackNavigation → OnBackNavigation_MaybeRedirectHome(BackNavigationEvent=BackNavigationEvent)
```

#### Block actions
- **Action_RedirectHome**
  ```
  navigate → HomeFeed() transition=Inherited
  ```
- **OnBackNavigation_MaybeRedirectHome** inputs: BackNavigationEvent: Object (mandatory)
  ```
  javascript GetIsInitialLocation(NavigationObject=BackNavigationEvent) → IsInitialLocation: Boolean
    | $parameters.IsInitialLocation = $parameters.NavigationObject.detail.isInitialLocation()
  if GetIsInitialLocation.IsInitialLocation
    call PreventNavigation(NavigationEvent=BackNavigationEvent)
    javascript JavaScript1()
      | window.setTimeout($actions.Action_RedirectHome,0)
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnBackNavigation_RedirectHome** inputs: BackNavigationEvent: Object (mandatory)
  ```
  navigate → HomeFeed() transition=SlideFromLeft
  ```
- **OnPinUnlock_HideLockScreen**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  javascript IsRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if IsRestoredFromCache.IsRestoredFromCache
    [M1] call PIN_Check()
    assign: HideLockScreen = GetUserId() = NullIdentifier() or\nIn_IgnoreLockScreen or\nPIN_Check.NeedRegister
    end
  else
    assign: IsNavigateToHomeOnBack = Client.IsNavigateToHomeOnBack; Client.IsNavigateToHomeOnBack = False
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Layout (flow App_Common)
- public: False
- input parameters: UsePullToRefresh: Boolean; HideHeaderOnScroll: Boolean; MenuBehavior: SideMenuBehavior Identifier; ExtendedClass: Text; EnableAccessibilityFeatures: Boolean
- events: OnPullToRefresh(); OnSyncComplete(SyncUnit: Text (mandatory)); OnSyncError(SyncUnit: Text (mandatory); ErrorMessage: Text (mandatory)); OnSyncStart(SyncUnit: Text (mandatory))
- local variables: -
- lifecycle: OnReady → OnReady; OnDestroy → OnDestroy
- used by (UBTConnect): InvalidPermissions

#### Widget tree
```
container #LayoutWrapper  [style="layout layout-side layout-native ios-bounce " + If(not HideHeaderOnScroll, "", "hide-header-on-scroll ") + MenuBehavio…]
  link onclick → SkipToContentOnClick transition=None  [style="skip-nav"; aria-label="Skip to Content (Press Enter)"; data-showskipcontent=If(EnableAccessibilityFeatures, "true", "false")]
    text: Skip to Content (Press Enter)
  html <aside>  [role="complementary"; class="aside-navigation"]
    placeholder-def Navigation
      block None (?.?)
  container  [style="main"]
    if HideHeaderOnScroll
      container  [style="sticky-observer"; aria-hidden="true"]
    html <header> #Header  [role="banner"; class="header"]
      container  [style="header-top"]
        container  [style="header-content display-flex"]
          container  [style="display-flex align-items-center full-width"]
            placeholder-def HeaderLeft
              block MenuIcon (UBTConnect.App_Common)
            html <h1>  [class="header-title"]
              placeholder-def Title
            placeholder-def HeaderRight
      placeholder-def HeaderContent
    if UsePullToRefresh #PullToRefresh
      block PullToRefresh (OutSystemsUI_2_23.Private)
        on OnContentPull → ActionHandler_OnPullToRefreshTrigger
    container #ContentWrapper  [style="content"]
      container #MainContentWrapper  [style="main-content ThemeGrid_Container"; role="main"]
        placeholder-def Content
    html <footer>  [role="contentinfo"; class="content-bottom"]
      placeholder-def Bottom
        block BottomBarMenu (UBTConnect.App_Common)
  container  [style="offline-data-sync"]
    block OfflineDataSyncEvents (UBTConnect.App_Common)
      on OnSyncStart → ActionHandler_OnSyncStartTrigger(SyncUnit=SyncUnit)
      on OnSyncError → ActionHandler_OnSyncErrorTrigger(ErrorMessage=ErrorMessage, SyncUnit=SyncUnit)
      on OnSyncComplete → ActionHandler_OnSyncCompleteTrigger(SyncUnit=SyncUnit)
```

#### Block actions
- **ActionHandler_OnPullToRefreshTrigger**
  ```
  trigger event OnPullToRefresh()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ActionHandler_OnSyncCompleteTrigger** inputs: SyncUnit: Text (mandatory)
  ```
  trigger event OnSyncComplete(SyncUnit=SyncUnit)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ActionHandler_OnSyncErrorTrigger** inputs: SyncUnit: Text (mandatory); ErrorMessage: Text (mandatory)
  ```
  trigger event OnSyncError(ErrorMessage=ErrorMessage, SyncUnit=SyncUnit)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ActionHandler_OnSyncStartTrigger** inputs: SyncUnit: Text (mandatory)
  ```
  trigger event OnSyncStart(SyncUnit=SyncUnit)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnDestroy**
  ```
  call LayoutDestroy()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnReady**
  ```
  call LayoutReady()
  call SetLang()
  call AddFavicon(URL="favicon.png")
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **SkipToContentOnClick**
  ```
  call SkipToContent(TargetId=MainContentWrapper.Id)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block LayoutBlank (flow App_Common)
- public: False
- input parameters: ExtendedClass: Text; EnableAccessibilityFeatures: Boolean
- events: OnSyncComplete(SyncUnit: Text (mandatory)); OnSyncError(SyncUnit: Text (mandatory); ErrorMessage: Text (mandatory)); OnSyncStart(SyncUnit: Text (mandatory))
- local variables: -
- lifecycle: OnReady → OnReady; OnDestroy → OnDestroy
- used by (UBTConnect): Splash, ViewEventList

#### Widget tree
```
block LayoutRuntime_Top (NavigationHandler.LayoutRuntime_NavigationHandler)
container  [style="layout layout-native blank" + If(ExtendedClass = "", "", " " + ExtendedClass) + If(not EnableAccessibilityFeatures, ""…]
  container  [style="content"]
    placeholder-def Content
  container  [style="offline-data-sync"]
    block OfflineDataSyncEvents (UBTConnect.App_Common)
      on OnSyncStart → ActionHandler_OnSyncStartTrigger(SyncUnit=SyncUnit)
      on OnSyncError → ActionHandler_OnSyncErrorTrigger(ErrorMessage=ErrorMessage, SyncUnit=SyncUnit)
      on OnSyncComplete → ActionHandler_OnSyncCompleteTrigger(SyncUnit=SyncUnit)
```

#### Block actions
- **ActionHandler_OnSyncCompleteTrigger** inputs: SyncUnit: Text (mandatory)
  ```
  trigger event OnSyncComplete(SyncUnit=SyncUnit)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ActionHandler_OnSyncErrorTrigger** inputs: SyncUnit: Text (mandatory); ErrorMessage: Text (mandatory)
  ```
  trigger event OnSyncError(ErrorMessage=ErrorMessage, SyncUnit=SyncUnit)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ActionHandler_OnSyncStartTrigger** inputs: SyncUnit: Text (mandatory)
  ```
  trigger event OnSyncStart(SyncUnit=SyncUnit)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnDestroy**
  ```
  call LayoutDestroy()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnReady**
  ```
  call LayoutReady()
  call SetLang()
  call AddFavicon(URL="favicon.png")
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block MenuIcon (flow App_Common)
- public: False
- input parameters: MenuAction: MenuAction Identifier
- events: -
- local variables: IsRTL: Boolean
- lifecycle: OnReady → OnReady; OnParametersChanged → OnReady
- used by (UBTConnect): InvalidPermissions, Layout

#### Widget tree
```
container #MenuIcon  [style="app-menu-icon" + If(MenuAction <> Entities.MenuAction.Back, "", " back"); visible=MenuAction <> Entities.MenuAction.Hidden]
  container  [style="menu-icon"; aria-label="Toggle the Menu"; role="button"; tabindex="0"; aria-haspopup="true"; on onclick → OnToggleMenu]
    container  [style="menu-icon-line"; aria-hidden="true"]
    container  [style="menu-icon-line"; aria-hidden="true"]
    container  [style="menu-icon-line"; aria-hidden="true"]
  container  [style="menu-back"; aria-label="Back to previous screen"; role="button"; tabindex="0"; on onclick → OnBack]
    if IsRTL
      icon #ArrowReverse angle-right size=Twotimes  [style="icon"]
    else
      icon #ArrowBack angle-left size=Twotimes  [style="icon"]
```

#### Block actions
- **OnBack**
  ```
  navigate → (Previous Screen)() transition=UseHistory
  ```
- **OnReady**
  ```
  call SetMenuIcon(MenuAction=MenuAction)
  call SetMenuIconListeners()
  call IsRTL() as CheckIsRTL
  assign (Set IsRTL): IsRTL = CheckIsRTL.IsRTL
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnToggleMenu**
  ```
  call ToggleSideMenu()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block OfflineDataSyncEvents (flow App_Common)
- public: False
- input parameters: -
- events: OnSyncComplete(SyncUnit: Text (mandatory)); OnSyncError(SyncUnit: Text (mandatory); ErrorMessage: Text (mandatory)); OnSyncStart(SyncUnit: Text (mandatory))
- local variables: -
- lifecycle: none
- used by (UBTConnect): CommonUI_InsideLayout, Layout, LayoutBlank, Login

#### Widget tree
```
if False  [DEAD BRANCH: condition is a constant]
else
  block OfflineDataSyncCore (OutSystemsUI_2_23.Private)
    on OnSync → OnSync(SyncUnit=SyncUnit)
    on OnSyncStart → ActionHandler_OnSyncStartTrigger(SyncUnit=SyncUnit)
    on OnSyncComplete → ActionHandler_OnSyncCompleteTrigger(SyncUnit=SyncUnit)
    on OnConfigure → OnConfigure
    on OnSyncError → ActionHandler_OnSyncErrorTrigger(ErrorMessage=ErrorMessage, SyncUnit=SyncUnit)
```

#### Block actions
- **ActionHandler_OnSyncCompleteTrigger** inputs: SyncUnit: Text (mandatory)
  ```
  trigger event OnSyncComplete(SyncUnit=SyncUnit)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ActionHandler_OnSyncErrorTrigger** inputs: ErrorMessage: Text (mandatory); SyncUnit: Text (mandatory)
  ```
  trigger event OnSyncError(ErrorMessage=ErrorMessage, SyncUnit=SyncUnit)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ActionHandler_OnSyncStartTrigger** inputs: SyncUnit: Text (mandatory)
  ```
  trigger event OnSyncStart(SyncUnit=SyncUnit)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnConfigure**
  ```
  call OfflineDataSyncConfiguration()
  call ConfigureOfflineDataSync(RetryIntervalInSeconds=OfflineDataSyncConfiguration.RetryIntervalInSeconds, RetryOnError=OfflineDataSyncConfiguration.RetryOnError, SyncOnOnline=OfflineDataSyncConfiguration.SyncOnOnline, SyncOnResume=OfflineDataSyncConfiguration.SyncOnResume)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnSync** inputs: SyncUnit: Text (mandatory)
  ```
  call OfflineDataSync(SyncUnit=SyncUnit) as DoOfflineDataSync
  call EndOfflineDataSync(HasError=False) as EndWithSuccess
  end
  on exception All Exceptions (log=True)
  call EndOfflineDataSync(AllowRetry=True, ErrorMessage=AllExceptions.ExceptionMessage, HasError=True) as EndWithError
  end
  on exception Security Exception (log=True)
  call EndOfflineDataSync(AllowRetry=False, ErrorMessage=SecurityException.ExceptionMessage, HasError=True) as EndWithSecurityError
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```

## Block SVGBackground_LoginWrapper (flow App_Common)
- public: False
- input parameters: In_ExtendedClass: Text
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): nothing in this module

#### Widget tree
```
block SVG_Background_Custom (UBTConnectLibrary.Layouts)
  args: In_CurvaturePercentage=Client.App_PIN_Header_FinalCurvaturePercentage, In_ExtendedClass=In_ExtendedClass, In_HeightPercentage=Client.App_PIN_Header_FinalHeightPercentage
```

## Block UnsupportedVersion (flow App_Common)
- public: False
- input parameters: In_ExtendedClass: Text; In_HideButton: Boolean
- events: Event_NavigateToPlaystore()
- local variables: -
- lifecycle: none
- used by (UBTConnect): UnsupportedVersion_Browser, UnsupportedVersion_Native, UnsupportedVersion_WebView

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: ExtendedClasses="unsupported-card " + In_ExtendedClass, Options={ PaddingSize: {  } }
  placeholder Content:
    block WelcomeToConnect (UBTConnect.App_Common)
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ MarginSize: { VerticalSizeId: Entities.UBT_Size.Medium }, TextOptions: { Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small } }
      placeholder Content:
        placeholder-def Placeholder_Content
    if In_HideButton
    else
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ DisplayOptions: { Display: Entities.UBT_Display.Flex, JustifyContent: Entities.UBT_JustifyContent.Center } }
        placeholder Content:
          container
            block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
              args: ButtonText="Upgrade From Google Play", IconId=Entities.UBT_Icons2.OpenNew, IsIconOnRight=True
              on buttonOnClick → Event_NavigateToPlaystore
```

## Block UnsupportedVersion_Browser (flow App_Common)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): UnsupportedVersion_Wrapper

#### Widget tree
```
block UnsupportedVersion (UBTConnect.App_Common)
  args: In_ExtendedClass="unsupported-card--webview", In_HideButton=True
  placeholder Placeholder_Content:
    expr: "We have noticed you are using an unsupported browser version." +\nNewLine() +\nNewLine() +\n"We recommend you upgrade to the latest version."
```

## Block UnsupportedVersion_Native (flow App_Common)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): UnsupportedVersion_Wrapper

#### Widget tree
```
block UnsupportedVersion (UBTConnect.App_Common)
  args: In_ExtendedClass="unsupported-card--native", In_HideButton=AppManager_GetPackageName() = ""
  on Event_NavigateToPlaystore → Handler_NavigateToPlaystore
  placeholder Placeholder_Content:
    expr: "We have noticed you are using an old version of Connect." +\nNewLine() +\nNewLine() +\n"We recommend you upgrade to the latest version." +\nNewLine() +\nNewLine() +\n"If you have any issues upgrading the Connect app, please uninstall and reinstall it."
```

#### Block actions
- **Handler_NavigateToPlaystore**
  ```
  call Upgrade_UBTConnect()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block UnsupportedVersion_WebView (flow App_Common)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): UnsupportedVersion_Wrapper

#### Widget tree
```
block UnsupportedVersion (UBTConnect.App_Common)
  args: In_ExtendedClass="unsupported-card--webview"
  on Event_NavigateToPlaystore → Handler_NavigateToPlaystore
  placeholder Placeholder_Content:
    expr: "We have noticed you are using an unsupported version of Android System Webview." +\nNewLine() +\nNewLine() +\n"We recommend you upgrade to the latest version."
```

#### Block actions
- **Handler_NavigateToPlaystore**
  ```
  call Upgrade_WebView()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block UnsupportedVersion_Wrapper (flow App_Common)
- public: False
- input parameters: -
- events: -
- local variables: In_IsUnsupportedWebViewVersion: Boolean; In_IsUnsupportedAppVersion: Boolean; In_IsUnsupportedBrowserVersion: Boolean
- lifecycle: OnInitialize → ScreenEvent_OnInitialize
- used by (UBTConnect): Block_PINUnlock, Login

#### Widget tree
```
if In_IsUnsupportedAppVersion or In_IsUnsupportedBrowserVersion #IsUnsupported
  block CustomContainer (UBTConnectLibrary.BasePatterns)
    args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.ExtraLarge } }
    placeholder Content:
      if In_IsUnsupportedAppVersion #IsUnsupportedApp
        block UnsupportedVersion_Native (UBTConnect.App_Common)
      else
        if In_IsUnsupportedWebViewVersion
          block UnsupportedVersion_WebView (UBTConnect.App_Common)
        else
          block UnsupportedVersion_Browser (UBTConnect.App_Common)
  block PreventBackNavigation (NavigationHandler.NavigationHandler)
```

#### Block actions
- **ScreenEvent_OnInitialize**
  ```
  call Get_IsUnsupportedVersion()
  assign: In_IsUnsupportedWebViewVersion = Get_IsUnsupportedVersion.Out_IsUnsupportedWebViewVersion; In_IsUnsupportedAppVersion = Get_IsUnsupportedVersion.Out_IsUnsupportedAppVersion; In_IsUnsupportedBrowserVersion = Get_IsUnsupportedVersion.Out_IsUnsupportedBrowserVersion
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block UserInfo (flow App_Common)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: OnInitialize → OnInitialize
- used by (UBTConnect): nothing in this module

#### Data sources
- data action **GetUserNameFromServer** fetch=OnDemand; outputs: UserName: Text
  ```
  call-server User_GetName()
  assign (Out1): UserName = User_GetName.Name
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
container  [style="user-info"]
  if GetUserId() <> NullIdentifier()
    container
      image User type=Static  [style="img-circle"; width=24px; alt=""]
      container  [style="margin-left-s"]
        expr: Client.Username  (example: Username)
    container  [style="margin-left-s"]
      link onclick → ClientLogout transition=Fade
        icon #Icon3 sign-out size=FontSize  [style="icon"]
        text: Log out  [classes="margin-left-s wcag-hide-text"]
  else
    link onclick → Login transition=Fade
      icon #Icon4 sign-in size=FontSize  [style="icon"]
      text: Login  [classes="margin-left-s"]
```

#### Block actions
- **ClientLogout**
  ```
  call AppManager_Logout()
  navigate → Login() transition=Inherited
  ```
- **GetUsername**
  ```
  if (No Username?) Client.Username = "" and GetUserId() <> NullIdentifier()
    refresh data GetUserNameFromServer
    assign: Client.Username = GetUserNameFromServer.UserName
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnInitialize**
  ```
  javascript GetUsername()
    | $actions.GetUsername();
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Version (flow App_Common)
- public: False
- input parameters: -
- events: -
- local variables: Version: Text
- lifecycle: OnReady → ScreenEvent_OnReady
- used by (UBTConnect): Menu, Version_LoginWrapper

#### Widget tree
```
block CustomText (UBTConnectLibrary.BasePatterns)
  args: In_Text=Version, In_TextOptions={ Color: Entities.UBT_Color.Inherit }
```

#### Block actions
- **ScreenEvent_OnReady**
  ```
  call Get_ConnectVersionDetails()
  assign: Version = "App version"
  if Get_ConnectVersionDetails.Out_Environment <> ""
    assign: Version = Version + " " + ToUpper(Get_ConnectVersionDetails.Out_Environment) 
    [M1] if Get_ConnectVersionDetails.Out_NativeVersion <> ""
      assign: Version = Version + " " + Get_ConnectVersionDetails.Out_NativeVersion
      [M2] if Get_ConnectVersionDetails.Out_RuntimeVersion <> 0
        assign: Version = Version + " (" + Get_ConnectVersionDetails.Out_RuntimeVersion + ")"
        end
      else
        end
    else
      → continues at [M2]
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Version_LoginWrapper (flow App_Common)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): Login

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ MarginSize: { TopSizeId: Entities.UBT_Size.Base }, TextOptions: { Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.DoubleExtraSmall } }
  placeholder Content:
    block Version (UBTConnect.App_Common)
```

## Block WelcomeToConnect (flow App_Common)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): Login, UnsupportedVersion

#### Widget tree
```
container  [width=auto]
  block CustomContainer (UBTConnectLibrary.BasePatterns)
    args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Base }, TextOptions: { Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold } }
    placeholder Content:
      expr: "Welcome to"
  container
    image ConnectLogo type=Static  [style="login-screen__connect-logo"]
```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| App_IconBadge | App_Common_Blocks | `../../_shared/pack/blocks.md` | BadgeNumber: Long Integer (mandatory); MaxNotifications: Integer = 9; IconId: UBT_Icons2 Identifier (mandatory); IconColor: UBT_Color Identifier (mandatory); isLoading: Boolean (mandatory) | OnClick |
| Block_PINUnlock | App_PIN | `../../App_PIN/pack/blocks.md` | In_ForceVisible: Boolean; In_IsCommonBlock: Boolean | Unlock |
| Block_PINUnlock_ContentWrapper | App_PIN | `../../App_PIN/pack/blocks.md` | UseOverlay: Boolean = True; In_ForceVisible: Boolean; UnlockText: Text = "Enter your PIN code"; ShowNeedHelp: Boolean; isFromMenu: Boolean; ShowForgotPIN: Boolean; ShowPolicy: Boolean (mandatory) | NavigateTo_PINRegister; Unlock |
| Dialog_ExitConfirmation | App_Common_Blocks_PopupDialogs | `../../_shared/pack/blocks.md` | - | - |
| HandleOnResumeOpenLink | Legacy_Share | `../../Legacy_Share/pack/blocks.md` | - | - |
| Policy_Checker | App_Policies | `../../App_Policies/pack/blocks.md` | - | - |
