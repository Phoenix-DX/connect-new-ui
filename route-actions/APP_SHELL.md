# App shell: server calls and user actions in OutSystems and React

The app shell is the part of the app that the routes share. The route files leave it out.
- OutSystems: `CommonUI_InsideLayout` with its blocks (TST survey), and the chains that start in a module action.
- React: the code that `app/src/main.tsx` loads (router, `AppFrame`, app start, hosts).
The tool `route-actions/tools/check_route.py` merges it from the 45 checked routes on 2026-11-04:

- [AssembleEvents](routes/AssembleEvents.md)
- [Assemble_BrowseByCountry](routes/Assemble_BrowseByCountry.md)
- [Bookmarks](routes/Bookmarks.md)
- [BrowseCountries](routes/BrowseCountries.md)
- [BrowseDirectory](routes/BrowseDirectory.md)
- [ContactByEmailMember](routes/ContactByEmailMember.md)
- [ContactByEmailOneSchoolGlobal](routes/ContactByEmailOneSchoolGlobal.md)
- [ContactByEmailOrbitHelpdesk](routes/ContactByEmailOrbitHelpdesk.md)
- [ContactUsDetails](routes/ContactUsDetails.md)
- [ContactUsMenu](routes/ContactUsMenu.md)
- [CountryDetails](routes/CountryDetails.md)
- [CountryList](routes/CountryList.md)
- [EventDetail](routes/EventDetail.md)
- [HelpersDetail](routes/HelpersDetail.md)
- [HomeFeed](routes/HomeFeed.md)
- [HostSurvey](routes/HostSurvey.md)
- [HouseholdCarousel](routes/HouseholdCarousel.md)
- [HouseholdDetails](routes/HouseholdDetails.md)
- [Household_Relations](routes/Household_Relations.md)
- [LDM_EventDetail_V2](routes/LDM_EventDetail_V2.md)
- [LDM_MyEvents_V2](routes/LDM_MyEvents_V2.md)
- [Locality_Details](routes/Locality_Details.md)
- [Login](routes/Login.md)
- [Menu](routes/Menu.md)
- [MessageDetail](routes/MessageDetail.md)
- [MessageList](routes/MessageList.md)
- [MyEntertaining](routes/MyEntertaining.md)
- [NotificationDetails](routes/NotificationDetails.md)
- [Notifications](routes/Notifications.md)
- [OneSchoolGlobalCarousel](routes/OneSchoolGlobalCarousel.md)
- [OneSchoolGlobalDetails](routes/OneSchoolGlobalDetails.md)
- [OrbitAdminLanding](routes/OrbitAdminLanding.md)
- [PINBiometricsMenu](routes/PINBiometricsMenu.md)
- [PINChange](routes/PINChange.md)
- [PINRegister](routes/PINRegister.md)
- [PINUnlock](routes/PINUnlock.md)
- [Photobook](routes/Photobook.md)
- [Profile](routes/Profile.md)
- [Search](routes/Search.md)
- [Services](routes/Services.md)
- [Splash](routes/Splash.md)
- [SupperMeeting_Carousel](routes/SupperMeeting_Carousel.md)
- [SupperMeeting_Details](routes/SupperMeeting_Details.md)
- [TermsAndPoliciesMenu](routes/TermsAndPoliciesMenu.md)
- [Updates_SingleList](routes/Updates_SingleList.md)

## 1. Result

| Check | Result |
|---|---|
| App shell server calls on TST | 24: React makes 22, **2 missing** |
| App shell event bindings | OutSystems: 11 diagrams. React: 8 diagrams |
| React app shell calls that TST does not make on a route | 7 |

## 2. Diagram

```mermaid
flowchart LR
  subgraph OS["OutSystems (TST compiled)"]
    subgraph OS_shell["App shell"]
      o0["?"]
      o1["Bookmarks"]
      o2["CacheControl_Policies"]
      o3["Connect2_LegacyShared"]
      o4["FeedBlock_Updates"]
      o5["Menu"]
      o6["Notifications"]
      o7["Photobook_Options_Left"]
      o8["ScreenBlock_Search"]
      o9["UBTConnect"]
      o10["UBTConnect_Utils"]
      o11["UBT_AppManager"]
      o12["Updates_SingleList"]
    end
  end
  subgraph EP["Server calls (TST)"]
    e13["ActionAppManager_SynchAppContext"]
    e14["ActionGetUserInformation"]
    e15["ActionGetUserInformation"]
    e16["ActionGetCountriesBySubscription"]
    e17["ActionAppManager_AfterInitialize"]
    e18["ActionSync_Info_GetMain"]
    e19["ActionGetNumberUnreadMessages"]
    e20["ServiceAPIFetchData_CacheableMapEntities"]
    e21["ServiceAPIFetchData_CacheableHouseholds"]
    e22["ActionGetAllApplicationEvents"]
    e23["DataActionGetBookmarks"]
    e24["ActionGet_BookmarkPills_ByBookmarkCategoryIds"]
    e25["ActionGetSignedImagesInBulk"]
    e26["ServiceAPIAction_UI_UpdateItem_MarkAsRead"]
    e27["ActionRequestPhotoUpdate"]
    e28["ActionAppManager_Logout"]
    e29["DataActionFetchNotifications"]
    e30["DataActionGetCacheInfo"]
    e31["DataActionGetHouseholdCaption"]
    e32["DataActionFetchSearchResults"]
    e33["DataActionFetchUpdates"]
    e34["ServiceAPIGet_UI_UpdateItems_UnreadCount_All"]
    e35["ServiceAPIAction_UI_UpdateItem_MarkAsRead"]
    e36["ServiceAPIAction_UI_UpdateItem_MarkAllAsRead"]
  end
  subgraph RE["React actions"]
    subgraph RE_shell["App shell"]
      r37["afterInitialize()"]
      r38["fetchAppContext()"]
      r39["fetchCacheableHouseholds()"]
      r40["fetchCacheableMapEntities()"]
      r41["fetchNumberUnreadMessages()"]
      r42["fetchPolicies()"]
      r43["fetchSyncInfoMain()"]
      r44["fetchUserInformation()"]
    end
    subgraph RE_page["Screen"]
      r45["cache_SignedImageURL_GetCallback()"]
      r46["fetchBookmarkCards()"]
      r47["fetchBookmarkPills()"]
      r48["fetchHouseholdCaption()"]
      r49["fetchNotifications()"]
      r50["fetchRegionSubscribedCountries()"]
      r51["fetchSearchResults()"]
      r52["fetchUnreadUpdateItemsCount()"]
      r53["fetchUpdatesList()"]
      r54["getCacheableUserInfo()"]
      r55["markAllUpdateItemsAsRead()"]
      r56["markUpdateItemAsRead()"]
      r57["requestPhotoUpdate()"]
    end
  end
  subgraph RC["React components"]
    c58["AppFrame"]
    c59["AssembleFilterSheetBlock"]
    c60["AssembleLocalityFilter"]
    c61["Bookmarks"]
    c62["BottomBar"]
    c63["CommonUiLayout"]
    c64["EntityLazyImage"]
    c65["Menu"]
    c66["Notifications"]
    c67["PINUnlock"]
    c68["Photobook_Options_Left"]
    c69["Search"]
    c70["Updates_SingleList"]
  end
  r37 --- c58
  r38 --- c58
  r39 --- c58
  r40 --- c58
  r41 --- c58
  r43 --- c58
  r38 --- c59
  r50 --- c59
  r54 --- c59
  r44 --- c60
  r54 --- c60
  r42 --- c63
  r44 --- c63
  r46 --- c61
  r47 --- c61
  r45 --- c64
  r52 --- c70
  r53 --- c70
  r55 --- c70
  r56 --- c70
  r57 --- c65
  r49 --- c66
  r42 --- c67
  r48 --- c68
  r51 --- c69
  r52 --- c62
  o11 --> e13
  o11 --> e17
  o11 --> e28
  o3 --> e14
  o3 --> e16
  o3 --> e19
  o3 --> e22
  o10 --> e15
  o10 --> e25
  o9 --> e18
  o9 --> e20
  o9 --> e21
  o9 --> e34
  o1 --> e23
  o0 --> e24
  o4 --> e26
  o5 --> e27
  o6 --> e29
  o2 --> e30
  o7 --> e31
  o8 --> e32
  o12 --> e33
  o12 --> e35
  o12 --> e36
  e13 --- r38
  e14 --- r54
  e15 --- r44
  e16 --- r50
  e17 --- r37
  e18 --- r43
  e19 --- r41
  e20 --- r40
  e21 --- r39
  e23 --- r46
  e24 --- r47
  e25 --- r45
  e26 --- r56
  e27 --- r57
  e29 --- r49
  e30 --- r42
  e31 --- r48
  e32 --- r51
  e33 --- r53
  e34 --- r52
  e35 --- r56
  e36 --- r55
  classDef missing fill:#fde2e1,stroke:#c0392b,color:#7b241c
  classDef ok fill:#e3f4e8,stroke:#2e7d4f,color:#1d4d31
  class e22,e28 missing
  class e13,e14,e15,e16,e17,e18,e19,e20,e21,e23,e24,e25,e26,e27,e29,e30,e31,e32,e33,e34,e35,e36 ok
```

## 3. User actions

The two lists are independent: the OutSystems list comes from the TST compiled code, the React list from the React code. The tool does not map one list to the other.

- **OutSystems:** each event binding of the compiled views (`<event>$Action: function` of a child block or widget, `on<Event>: function` of an HTML element) with its handler.
- **React:** each JSX attribute `on<Event>={handler}` with its handler.
- Both lists keep only the bindings whose handler has an effect: a server call, a navigation, an external link, a message or a confirm dialog. The tool follows the called functions 3 levels deep.
- When the handler has branches in the code (`switch` case, `if` with `===`), each branch has its own diagram. The branch name is the constant of the condition. `other` is the last `else` or `default`.
- An arrow to the server gives the inputs of the call, the return arrow its outputs (contract `app/src/api/openapi.yaml`).

### 3.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| [1](#311-commonui_insidelayout-onbacknavigation_redirecthome) | `CommonUI_InsideLayout` | `backNavigationPrevented of PreventBackNavigation` | `onBackNavigation_RedirectHome` | – | goes to HomeFeed |
| [2](#312-commonui_insidelayout-onbacknavigation_mayberedirecthome) | `CommonUI_InsideLayout` | `backNavigation of BackNavigationHandler` | `onBackNavigation_MaybeRedirectHome` | – | goes to HomeFeed |
| [3](#313-block_pinunlock-block_pinunlock_contentwrappernavigateto_pinregist) | `Block_PINUnlock` | `navigateTo_PINRegister of ContentWrapper` | `block_PINUnlock_ContentWrapperNavigateTo_PINRegist` | – | goes to PINRegister |
| [4](#314-block_pinunlock_contentwrapper-event_pincode_pinunlockerror) | `Block_PINUnlock_ContentWrapper` | `pinUnlockError of MobileWrapper` | `event_Pincode_PinUnlockError` | – | shows a message |
| [5](#315-block_pinunlock_contentwrapper-onclick_forgotpin) | `Block_PINUnlock_ContentWrapper` | `onClick (HTML element)` | `onClick_ForgotPIN` | – | goes to Login |
| [6](#316-block_pinunlock_contentwrapper-onclick_termsandcondition) | `Block_PINUnlock_ContentWrapper` | `onClick (HTML element)` | `onClick_TermsAndCondition` | – | opens an external link; shows a message |
| [7](#317-block_pinunlock_contentwrapper-onclick_privacypolicy) | `Block_PINUnlock_ContentWrapper` | `onClick (HTML element)` | `onClick_PrivacyPolicy` | – | opens an external link; shows a message |
| [8](#318-handleonresumeopenlink-androidapplinkonresumehandlerresumenavigation) | `HandleOnResumeOpenLink` | `resumeNavigation of AndroidAppLinkOnResumeHandler` | `androidAppLinkOnResumeHandlerResumeNavigation` | – | goes to URL in_URL |
| [9](#319-handleonresumeopenlink-deeplinkhandlercentralondeeplinkopen) | `HandleOnResumeOpenLink` | `onDeeplinkOpen of DeeplinkHandlerCentral` | `deeplinkHandlerCentralOnDeeplinkOpen` | – | goes to URL in_URL |
| [10](#3110-dialog_accessrestrictedaction-upgrade) | `Dialog_AccessRestrictedAction` | `confirmed of ActionConfirmationDialog` | `upgrade` | – | opens an external link |
| [11](#3111-cachecontrol_policies-cachecontrolonnoncachehit) | `CacheControl_Policies` | `onNonCacheHit of CacheControl` | `cacheControlOnNonCacheHit` | – | calls GetCacheInfo |

#### 3.1.1 CommonUI_InsideLayout: onBackNavigation_RedirectHome

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as CommonUI_InsideLayout
  participant N as Navigation
  U->>B: backNavigationPrevented of PreventBackNavigation → onBackNavigation_RedirectHome
  B->>N: go to HomeFeed
```

#### 3.1.2 CommonUI_InsideLayout: onBackNavigation_MaybeRedirectHome

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as CommonUI_InsideLayout
  participant N as Navigation
  U->>B: backNavigation of BackNavigationHandler → onBackNavigation_MaybeRedirectHome
  B->>N: go to HomeFeed
```

#### 3.1.3 Block_PINUnlock: block_PINUnlock_ContentWrapperNavigateTo_PINRegist

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Block_PINUnlock
  participant N as Navigation
  U->>B: navigateTo_PINRegister of ContentWrapper → block_PINUnlock_ContentWrapperNavigateTo_PINRegist
  B->>N: go to PINRegister
```

#### 3.1.4 Block_PINUnlock_ContentWrapper: event_Pincode_PinUnlockError

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Block_PINUnlock_ContentWrapper
  U->>B: pinUnlockError of MobileWrapper → event_Pincode_PinUnlockError
  Note over B: message FeedbackMessage_AutoClose2
  Note over B: message FeedbackMessage_AutoClose
```

#### 3.1.5 Block_PINUnlock_ContentWrapper: onClick_ForgotPIN

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Block_PINUnlock_ContentWrapper
  participant N as Navigation
  U->>B: onClick (HTML element) → onClick_ForgotPIN
  B->>N: go to Login
```

#### 3.1.6 Block_PINUnlock_ContentWrapper: onClick_TermsAndCondition

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Block_PINUnlock_ContentWrapper
  participant X as External link
  U->>B: onClick (HTML element) → onClick_TermsAndCondition
  Note over B: via UBTConnect_Utils.openPolicy
  B->>X: JSUtils_PageOpenInNewTab
  Note over B: message errorMessage
```

#### 3.1.7 Block_PINUnlock_ContentWrapper: onClick_PrivacyPolicy

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Block_PINUnlock_ContentWrapper
  participant X as External link
  U->>B: onClick (HTML element) → onClick_PrivacyPolicy
  Note over B: via UBTConnect_Utils.openPolicy
  B->>X: JSUtils_PageOpenInNewTab
  Note over B: message errorMessage
```

#### 3.1.8 HandleOnResumeOpenLink: androidAppLinkOnResumeHandlerResumeNavigation

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as HandleOnResumeOpenLink
  participant N as Navigation
  U->>B: resumeNavigation of AndroidAppLinkOnResumeHandler → androidAppLinkOnResumeHandlerResumeNavigation
  B->>N: go to URL in_URL
```

#### 3.1.9 HandleOnResumeOpenLink: deeplinkHandlerCentralOnDeeplinkOpen

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as HandleOnResumeOpenLink
  participant N as Navigation
  U->>B: onDeeplinkOpen of DeeplinkHandlerCentral → deeplinkHandlerCentralOnDeeplinkOpen
  B->>N: go to URL in_URL
```

#### 3.1.10 Dialog_AccessRestrictedAction: upgrade

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Dialog_AccessRestrictedAction
  participant X as External link
  U->>B: confirmed of ActionConfirmationDialog → upgrade
  Note over B: via UBTConnect_Utils.app_Subscription_NavigateToUpgrade
  B->>X: OpenInApp_OpenExternalLink
```

#### 3.1.11 CacheControl_Policies: cacheControlOnNonCacheHit

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as CacheControl_Policies
  participant S as Server (TST calls)
  U->>B: onNonCacheHit of CacheControl → cacheControlOnNonCacheHit
  B->>S: GetCacheInfo(CacheKey, CacheTypeId, TimeToLiveSeconds)
  S-->>B: CacheControl_Response
```

### 3.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| [1](#321-confirmdialogview-onconfirmed) | [`platform/feedback/dialogs/DialogAccessRestrictedAction.tsx:74`](../app/src/platform/feedback/dialogs/DialogAccessRestrictedAction.tsx#L74) | `<ConfirmDialogView>` | `onConfirmed` | `navigateToUpgrade` | – | opens an external link |
| [2](#322-pinunlockcontentcontainer-onnavigatetopinregister) | [`platform/feedback/dialogs/BlockPinUnlock.tsx:90`](../app/src/platform/feedback/dialogs/BlockPinUnlock.tsx#L90) | `<PinUnlockContentContainer>` | `onNavigateToPINRegister` | `inline` | – | goes to PINRegister |
| [3](#323-pinunlockcontent-onsetpin-unlocked) | [`platform/feedback/dialogs/PinUnlockContentContainer.tsx:67`](../app/src/platform/feedback/dialogs/PinUnlockContentContainer.tsx#L67) | `<PinUnlockContent>` | `onSetPin` | `unlock.onSetPin` | `unlocked` | calls the prop onPinUnlockSuccess() |
| [4](#324-pinunlockcontent-onsetpin-other) | [`platform/feedback/dialogs/PinUnlockContentContainer.tsx:67`](../app/src/platform/feedback/dialogs/PinUnlockContentContainer.tsx#L67) | `<PinUnlockContent>` | `onSetPin` | `unlock.onSetPin` | `other` | shows a message; calls the prop onNavigateToPINRegister() |
| [5](#325-pinunlockcontent-onpinunlockerror) | [`platform/feedback/dialogs/PinUnlockContentContainer.tsx:70`](../app/src/platform/feedback/dialogs/PinUnlockContentContainer.tsx#L70) | `<PinUnlockContent>` | `onPinUnlockError` | `content.onPinUnlockError` | – | shows a message; calls the prop onNavigateToPINRegister() |
| [6](#326-pinunlockcontent-onforgotpin) | [`platform/feedback/dialogs/PinUnlockContentContainer.tsx:71`](../app/src/platform/feedback/dialogs/PinUnlockContentContainer.tsx#L71) | `<PinUnlockContent>` | `onForgotPin` | `content.onForgotPin` | – | goes to Login |
| [7](#327-pinunlockcontent-onclickpolicy) | [`platform/feedback/dialogs/PinUnlockContentContainer.tsx:72`](../app/src/platform/feedback/dialogs/PinUnlockContentContainer.tsx#L72) | `<PinUnlockContent>` | `onClickPolicy` | `content.onClickPolicy` | – | opens an external link; shows a message |
| [8](#328-cachecontrol-onnoncachehit) | [`legacy/os/cache/PoliciesCacheControl/PoliciesCacheControl.tsx:55`](../app/src/legacy/os/cache/PoliciesCacheControl/PoliciesCacheControl.tsx#L55) | `<CacheControl>` | `onNonCacheHit` | `onNonCacheHit` | – | calls DataActionGetCacheInfo |

#### 3.2.1 ConfirmDialogView: onConfirmed

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ConfirmDialogView · DialogAccessRestrictedAction.tsx
  participant X as External link
  U->>H: onConfirmed → navigateToUpgrade
  H->>X: openInApp_OpenExternalLink
```

#### 3.2.2 PinUnlockContentContainer: onNavigateToPINRegister

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PinUnlockContentContainer · BlockPinUnlock.tsx
  participant N as Navigation
  U->>H: onNavigateToPINRegister → inline
  H->>N: go to PINRegister
```

#### 3.2.3 PinUnlockContent: onSetPin (unlocked)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PinUnlockContent · PinUnlockContentContainer.tsx
  U->>H: onSetPin → unlock.onSetPin (unlocked)
  Note over H: calls the prop onPinUnlockSuccess()
```

#### 3.2.4 PinUnlockContent: onSetPin (other)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PinUnlockContent · PinUnlockContentContainer.tsx
  U->>H: onSetPin → unlock.onSetPin (other)
  Note over H: via onPinUnlockError()
  Note over H: via showError()
  Note over H: message { title: '', message, messageType: 'error', encodedHtml: true, extendedClass: '', delayMs:
  Note over H: calls the prop onNavigateToPINRegister()
```

#### 3.2.5 PinUnlockContent: onPinUnlockError

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PinUnlockContent · PinUnlockContentContainer.tsx
  U->>H: onPinUnlockError → content.onPinUnlockError
  Note over H: via showError()
  Note over H: message { title: '', message, messageType: 'error', encodedHtml: true, extendedClass: '', delayMs:
  Note over H: calls the prop onNavigateToPINRegister()
```

#### 3.2.6 PinUnlockContent: onForgotPin

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PinUnlockContent · PinUnlockContentContainer.tsx
  participant N as Navigation
  U->>H: onForgotPin → content.onForgotPin
  H->>N: go to Login
```

#### 3.2.7 PinUnlockContent: onClickPolicy

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PinUnlockContent · PinUnlockContentContainer.tsx
  participant X as External link
  U->>H: onClickPolicy → content.onClickPolicy
  Note over H: via openPolicy()
  Note over H: message errorMessage
  H->>X: jSUtils_PageOpenInNewTab
```

#### 3.2.8 CacheControl: onNonCacheHit

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as CacheControl · PoliciesCacheControl.tsx
  participant A as Server (React api)
  U->>H: onNonCacheHit → onNonCacheHit
  Note over H: via fetchPolicies()
  H->>A: DataActionGetCacheInfo(CacheKey, CacheTypeId, TimeToLiveSeconds)
  A-->>H: CacheControl_Response
```

## 4. Server calls

The column **Routes** gives the checked routes where the app shell makes the call.

All columns come from the code, without interpretation:

- **Direct caller (TST):** the block or module of the action that calls the server (the step before the server call in the chain).
- **Chain (TST):** the chains of client actions in the TST compiled code, from their start to the call.
  A long chain shows its first 2 steps, …, and its last 2 steps.
- **Seen on TST:** `yes` when TST made the call in the capture.
- **React action:** the React function with the `callAction` of the same call (`file:line`), and the code that loads it: `shell` (from `main.tsx`), `page` (from the screen), or both.
- **Used by (React references):** the functions and components that reference the React action, up to the nearest component. A reference is not always a call.
- **Status:** `implemented` when the contract path of the React call gives the same TST URL. It does not prove the same behaviour.

| # | Call (TST) | Kind | Direct caller (TST) | Chain (TST) | Seen on TST | React action | Used by (React references) | Status | Routes |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `UBTConnect/Bookmarks/Bookmarks/DataActionGetBookmarks` | data action | `Bookmarks` | onClick in CustomContainer → event clicked of CustomContainer → … → Bookmarks.refresh_GetBookmarksData → Bookmarks.DataActionGetBookmarks<br>onClick in Icon → event click of Icon → … → Bookmarks.refresh_GetBookmarksData → Bookmarks.DataActionGetBookmarks | yes | `fetchBookmarkCards()` [`api/bookmark/bookmarkCards.ts:114`](../app/src/api/bookmark/bookmarkCards.ts#L114) (page) | `Bookmarks → useBookmarks → fetchBookmarkCards`<br>[`pages/Bookmarks/BookmarksPage.tsx`](../app/src/pages/Bookmarks/BookmarksPage.tsx) | implemented | [Bookmarks](routes/Bookmarks.md) |
| 2 | `UBTConnect_Utils/CacheControl/CacheControl_Policies/DataActionGetCacheInfo` | data action | `CacheControl_Policies` | CacheControl.OnInitialize → CacheControl.onInitialize → event onNonCacheHit of CacheControl → CacheControl_Policies.cacheControlOnNonCacheHit → CacheControl_Policies.DataActionGetCacheInfo<br>CacheControl_Policies fetch at start → CacheControl_Policies.DataActionGetCacheInfo | yes | `fetchPolicies()` [`api/app/repository.ts:54`](../app/src/api/app/repository.ts#L54) (shell + page) | `PINUnlock → BlockPinUnlock → … → fetchPolicies`<br>[`pages/PINUnlock/PINUnlockPage.tsx`](../app/src/pages/PINUnlock/PINUnlockPage.tsx)<br>`CommonUiLayout → LockHost → … → fetchPolicies`<br>[`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | implemented | [PINUnlock](routes/PINUnlock.md), [TermsAndPoliciesMenu](routes/TermsAndPoliciesMenu.md) |
| 3 | `Connect2_LegacyShared/ActionGetAllApplicationEvents` | server action | `Connect2_LegacyShared` | HandleImageLoadError.applicationEvent_ImageError → Connect2_LegacyShared.zOnApplicationEvent_Wrapper → Connect2_LegacyShared.getAppEventName → Connect2_LegacyShared.cacheLocalApplicationEvents → server GetAllApplicationEvents | yes | – | – | **missing** | [AssembleEvents](routes/AssembleEvents.md), [Assemble_BrowseByCountry](routes/Assemble_BrowseByCountry.md), [Bookmarks](routes/Bookmarks.md), [BrowseCountries](routes/BrowseCountries.md), [BrowseDirectory](routes/BrowseDirectory.md), [ContactUsDetails](routes/ContactUsDetails.md), [ContactUsMenu](routes/ContactUsMenu.md), [CountryDetails](routes/CountryDetails.md), [CountryList](routes/CountryList.md), [EventDetail](routes/EventDetail.md), [HelpersDetail](routes/HelpersDetail.md), [HomeFeed](routes/HomeFeed.md), [HostSurvey](routes/HostSurvey.md), [HouseholdCarousel](routes/HouseholdCarousel.md), [HouseholdDetails](routes/HouseholdDetails.md), [Household_Relations](routes/Household_Relations.md), [LDM_EventDetail_V2](routes/LDM_EventDetail_V2.md), [LDM_MyEvents_V2](routes/LDM_MyEvents_V2.md), [Locality_Details](routes/Locality_Details.md), [Login](routes/Login.md), [Menu](routes/Menu.md), [MessageDetail](routes/MessageDetail.md), [MessageList](routes/MessageList.md), [MyEntertaining](routes/MyEntertaining.md), [NotificationDetails](routes/NotificationDetails.md), [Notifications](routes/Notifications.md), [OneSchoolGlobalCarousel](routes/OneSchoolGlobalCarousel.md), [OneSchoolGlobalDetails](routes/OneSchoolGlobalDetails.md), [OrbitAdminLanding](routes/OrbitAdminLanding.md), [PINRegister](routes/PINRegister.md), [PINUnlock](routes/PINUnlock.md), [Photobook](routes/Photobook.md), [Profile](routes/Profile.md), [Search](routes/Search.md), [SupperMeeting_Carousel](routes/SupperMeeting_Carousel.md), [SupperMeeting_Details](routes/SupperMeeting_Details.md), [TermsAndPoliciesMenu](routes/TermsAndPoliciesMenu.md), [Updates_SingleList](routes/Updates_SingleList.md) |
| 4 | `Connect2_LegacyShared/ActionGetCountriesBySubscription` | server action | `Connect2_LegacyShared` | Connect2_LegacyShared.getRegionSubscribedCountries → server GetCountriesBySubscription | yes | `fetchRegionSubscribedCountries()` [`api/country/repository.ts:84`](../app/src/api/country/repository.ts#L84) (page) | `AssembleFilterSheetBlock → useAssembleFilterSheet → … → fetchRegionSubscribedCountries`<br>[`pages/AssembleEvents/AssembleEventsPage.tsx`](../app/src/pages/AssembleEvents/AssembleEventsPage.tsx) | implemented | [AssembleEvents](routes/AssembleEvents.md), [Assemble_BrowseByCountry](routes/Assemble_BrowseByCountry.md) |
| 5 | `Connect2_LegacyShared/ActionGetNumberUnreadMessages` | server action | `Connect2_LegacyShared` | UBTConnect.onApplicationReady → UBTConnect.connect_SetLoggedContext → Connect2_LegacyShared.synchronizeNumberUnreadMessages → server GetNumberUnreadMessages<br>UBTConnect.fCM_NotificationCallback → Connect2_LegacyShared.synchronizeNumberUnreadMessages → server GetNumberUnreadMessages | yes | `fetchNumberUnreadMessages()` [`api/message/unreadMessages.ts:22`](../app/src/api/message/unreadMessages.ts#L22) (shell) | `AppFrame → AppStart → … → fetchNumberUnreadMessages`<br>[`app/AppFrame.tsx`](../app/src/app/AppFrame.tsx) | implemented | [AssembleEvents](routes/AssembleEvents.md), [Assemble_BrowseByCountry](routes/Assemble_BrowseByCountry.md), [Bookmarks](routes/Bookmarks.md), [BrowseCountries](routes/BrowseCountries.md), [BrowseDirectory](routes/BrowseDirectory.md), [ContactByEmailMember](routes/ContactByEmailMember.md), [ContactByEmailOneSchoolGlobal](routes/ContactByEmailOneSchoolGlobal.md), [ContactUsDetails](routes/ContactUsDetails.md), [ContactUsMenu](routes/ContactUsMenu.md), [CountryDetails](routes/CountryDetails.md), [CountryList](routes/CountryList.md), [HomeFeed](routes/HomeFeed.md), [HouseholdDetails](routes/HouseholdDetails.md), [Household_Relations](routes/Household_Relations.md), [LDM_MyEvents_V2](routes/LDM_MyEvents_V2.md), [Locality_Details](routes/Locality_Details.md), [Menu](routes/Menu.md), [MessageDetail](routes/MessageDetail.md), [MyEntertaining](routes/MyEntertaining.md), [NotificationDetails](routes/NotificationDetails.md), [Notifications](routes/Notifications.md), [OneSchoolGlobalDetails](routes/OneSchoolGlobalDetails.md), [OrbitAdminLanding](routes/OrbitAdminLanding.md), [PINBiometricsMenu](routes/PINBiometricsMenu.md), [PINChange](routes/PINChange.md), [PINRegister](routes/PINRegister.md), [PINUnlock](routes/PINUnlock.md), [Photobook](routes/Photobook.md), [Profile](routes/Profile.md), [Search](routes/Search.md), [Services](routes/Services.md), [Splash](routes/Splash.md), [SupperMeeting_Details](routes/SupperMeeting_Details.md), [TermsAndPoliciesMenu](routes/TermsAndPoliciesMenu.md), [Updates_SingleList](routes/Updates_SingleList.md) |
| 6 | `Connect2_LegacyShared/ActionGetUserInformation` | server action | `Connect2_LegacyShared` | Connect2_LegacyShared.getUserInformation → server GetUserInformation | yes | `getCacheableUserInfo()` [`lib/legacyShared/actions.ts:302`](../app/src/lib/legacyShared/actions.ts#L302) (page) | `AssembleLocalityFilter → getCacheableUserInfo`<br>[`components/assemble/AssembleLocalityFilter/AssembleLocalityFilter.tsx`](../app/src/components/assemble/AssembleLocalityFilter/AssembleLocalityFilter.tsx)<br>`AssembleFilterSheetBlock → useAssembleFilterSheet → hasAccessToRegion → getCacheableUserInfo`<br>[`pages/AssembleEvents/AssembleEventsPage.tsx`](../app/src/pages/AssembleEvents/AssembleEventsPage.tsx) | implemented | [AssembleEvents](routes/AssembleEvents.md), [Assemble_BrowseByCountry](routes/Assemble_BrowseByCountry.md) |
| 7 | `UBTConnect/Home/FeedBlock_Updates/ServiceAPIAction_UI_UpdateItem_MarkAsRead` | service action | `FeedBlock_Updates` | onClick in CustomContainer → event clicked of CustomContainer → event onClick of Update_ListItem → FeedBlock_Updates.event_ListItemOnClick → server Action_UI_UpdateItem_MarkAsRead | no | `markUpdateItemAsRead()` [`api/update/repository.ts:47`](../app/src/api/update/repository.ts#L47) (page) | `FeedUpdates → useFeedUpdates → markUpdateItemAsRead`<br>[`pages/HomeFeed/HomeFeedPage.tsx`](../app/src/pages/HomeFeed/HomeFeedPage.tsx) | implemented | [HomeFeed](routes/HomeFeed.md) |
| 8 | `UBTConnect/App_Menu/Menu/ActionRequestPhotoUpdate` | server action | `Menu` | onClick in CustomContainer → event clicked of CustomContainer → event onClick_MenuOption of Menu_List → Menu.onClick_MenuOption → server RequestPhotoUpdate | no | `requestPhotoUpdate()` [`api/member/repository.ts:46`](../app/src/api/member/repository.ts#L46) (page) | `Menu → useMenu → requestPhotoUpdate`<br>[`pages/Menu/MenuPage.tsx`](../app/src/pages/Menu/MenuPage.tsx) | implemented | [Menu](routes/Menu.md) |
| 9 | `UBTConnect/App_Notifications/Notifications/DataActionFetchNotifications` | data action | `Notifications` | onClick in Icon → event click of Icon → … → Notifications.refreshNotifications → Notifications.DataActionFetchNotifications | yes | `fetchNotifications()` [`api/notification/repository.ts:40`](../app/src/api/notification/repository.ts#L40) (page) | `Notifications → useNotifications → fetchNotifications`<br>[`pages/Notifications/NotificationsPage.tsx`](../app/src/pages/Notifications/NotificationsPage.tsx) | implemented | [Notifications](routes/Notifications.md) |
| 10 | `UBTConnect/Directory_Photobook/Photobook_Options_Left/DataActionGetHouseholdCaption` | data action | `Photobook_Options_Left` | onClick in CustomContainer → event clicked of CustomContainer → Photobook_Options_Left.handler_ClickedInfo → Photobook_Options_Left.DataActionGetHouseholdCaption | no | `fetchHouseholdCaption()` [`api/household/repository.ts:65`](../app/src/api/household/repository.ts#L65) (page) | `Photobook_Options_Left → useHouseholdCaption → fetchHouseholdCaption`<br>[`pages/Photobook/components/Photobook_Options_Left.tsx`](../app/src/pages/Photobook/components/Photobook_Options_Left.tsx) | implemented | [Photobook](routes/Photobook.md) |
| 11 | `UBTConnect/Directory_Search/ScreenBlock_Search/DataActionFetchSearchResults` | data action | `ScreenBlock_Search` | onClick in CustomContainer → event clicked of CustomContainer → … → ScreenBlock_Search.action_RefreshSearch → ScreenBlock_Search.DataActionFetchSearchResults | no | `fetchSearchResults()` [`api/search/repository.ts:30`](../app/src/api/search/repository.ts#L30) (page) | `Search → useSearch → fetchSearchResults`<br>[`pages/Search/SearchPage.tsx`](../app/src/pages/Search/SearchPage.tsx) | implemented | [Search](routes/Search.md) |
| 12 | `UBTConnect/ActionSync_Info_GetMain` | server action | `UBTConnect` | UBTConnect.onApplicationReady → UBTConnect.connect_SetLoggedContext → UBTConnect.sync_Info_Main → server Sync_Info_GetMain<br>UBTConnect.onApplicationReady → UBTConnect.sync_Info_Main → server Sync_Info_GetMain | yes | `fetchSyncInfoMain()` [`api/app/repository.ts:36`](../app/src/api/app/repository.ts#L36) (shell) | `AppFrame → AppStart → … → fetchSyncInfoMain`<br>[`app/AppFrame.tsx`](../app/src/app/AppFrame.tsx) | implemented | [AssembleEvents](routes/AssembleEvents.md), [Assemble_BrowseByCountry](routes/Assemble_BrowseByCountry.md), [Bookmarks](routes/Bookmarks.md), [BrowseCountries](routes/BrowseCountries.md), [BrowseDirectory](routes/BrowseDirectory.md), [ContactByEmailMember](routes/ContactByEmailMember.md), [ContactByEmailOneSchoolGlobal](routes/ContactByEmailOneSchoolGlobal.md), [ContactUsDetails](routes/ContactUsDetails.md), [ContactUsMenu](routes/ContactUsMenu.md), [CountryDetails](routes/CountryDetails.md), [CountryList](routes/CountryList.md), [HomeFeed](routes/HomeFeed.md), [HouseholdDetails](routes/HouseholdDetails.md), [Household_Relations](routes/Household_Relations.md), [LDM_MyEvents_V2](routes/LDM_MyEvents_V2.md), [Locality_Details](routes/Locality_Details.md), [Menu](routes/Menu.md), [MessageDetail](routes/MessageDetail.md), [MessageList](routes/MessageList.md), [MyEntertaining](routes/MyEntertaining.md), [NotificationDetails](routes/NotificationDetails.md), [Notifications](routes/Notifications.md), [OneSchoolGlobalDetails](routes/OneSchoolGlobalDetails.md), [OrbitAdminLanding](routes/OrbitAdminLanding.md), [PINBiometricsMenu](routes/PINBiometricsMenu.md), [PINChange](routes/PINChange.md), [PINRegister](routes/PINRegister.md), [PINUnlock](routes/PINUnlock.md), [Photobook](routes/Photobook.md), [Profile](routes/Profile.md), [Search](routes/Search.md), [Services](routes/Services.md), [Splash](routes/Splash.md), [SupperMeeting_Details](routes/SupperMeeting_Details.md), [TermsAndPoliciesMenu](routes/TermsAndPoliciesMenu.md), [Updates_SingleList](routes/Updates_SingleList.md) |
| 13 | `UBTConnect/ServiceAPIFetchData_CacheableHouseholds` | service action | `UBTConnect` | UBTConnect.get_Cacheable_MapHouseholds → server FetchData_CacheableHouseholds | yes | `fetchCacheableHouseholds()` [`api/app/repository.ts:48`](../app/src/api/app/repository.ts#L48) (shell) | `AppFrame → AppStart → … → fetchCacheableHouseholds`<br>[`app/AppFrame.tsx`](../app/src/app/AppFrame.tsx) | implemented | [AssembleEvents](routes/AssembleEvents.md), [Assemble_BrowseByCountry](routes/Assemble_BrowseByCountry.md), [Bookmarks](routes/Bookmarks.md), [BrowseCountries](routes/BrowseCountries.md), [BrowseDirectory](routes/BrowseDirectory.md), [ContactByEmailMember](routes/ContactByEmailMember.md), [ContactByEmailOneSchoolGlobal](routes/ContactByEmailOneSchoolGlobal.md), [ContactUsDetails](routes/ContactUsDetails.md), [ContactUsMenu](routes/ContactUsMenu.md), [CountryDetails](routes/CountryDetails.md), [CountryList](routes/CountryList.md), [HomeFeed](routes/HomeFeed.md), [HouseholdDetails](routes/HouseholdDetails.md), [Household_Relations](routes/Household_Relations.md), [LDM_MyEvents_V2](routes/LDM_MyEvents_V2.md), [Locality_Details](routes/Locality_Details.md), [Menu](routes/Menu.md), [MessageDetail](routes/MessageDetail.md), [MessageList](routes/MessageList.md), [MyEntertaining](routes/MyEntertaining.md), [NotificationDetails](routes/NotificationDetails.md), [Notifications](routes/Notifications.md), [OneSchoolGlobalDetails](routes/OneSchoolGlobalDetails.md), [OrbitAdminLanding](routes/OrbitAdminLanding.md), [PINBiometricsMenu](routes/PINBiometricsMenu.md), [PINChange](routes/PINChange.md), [PINRegister](routes/PINRegister.md), [PINUnlock](routes/PINUnlock.md), [Photobook](routes/Photobook.md), [Profile](routes/Profile.md), [Search](routes/Search.md), [Services](routes/Services.md), [Splash](routes/Splash.md), [SupperMeeting_Details](routes/SupperMeeting_Details.md), [TermsAndPoliciesMenu](routes/TermsAndPoliciesMenu.md), [Updates_SingleList](routes/Updates_SingleList.md) |
| 14 | `UBTConnect/ServiceAPIFetchData_CacheableMapEntities` | service action | `UBTConnect` | UBTConnect.get_Cacheable_MapEntities → server FetchData_CacheableMapEntities | yes | `fetchCacheableMapEntities()` [`api/app/repository.ts:42`](../app/src/api/app/repository.ts#L42) (shell) | `AppFrame → AppStart → … → fetchCacheableMapEntities`<br>[`app/AppFrame.tsx`](../app/src/app/AppFrame.tsx) | implemented | [AssembleEvents](routes/AssembleEvents.md), [Assemble_BrowseByCountry](routes/Assemble_BrowseByCountry.md), [Bookmarks](routes/Bookmarks.md), [BrowseCountries](routes/BrowseCountries.md), [BrowseDirectory](routes/BrowseDirectory.md), [ContactByEmailMember](routes/ContactByEmailMember.md), [ContactByEmailOneSchoolGlobal](routes/ContactByEmailOneSchoolGlobal.md), [ContactUsDetails](routes/ContactUsDetails.md), [ContactUsMenu](routes/ContactUsMenu.md), [CountryDetails](routes/CountryDetails.md), [CountryList](routes/CountryList.md), [HomeFeed](routes/HomeFeed.md), [HouseholdDetails](routes/HouseholdDetails.md), [Household_Relations](routes/Household_Relations.md), [LDM_MyEvents_V2](routes/LDM_MyEvents_V2.md), [Locality_Details](routes/Locality_Details.md), [Menu](routes/Menu.md), [MessageDetail](routes/MessageDetail.md), [MessageList](routes/MessageList.md), [MyEntertaining](routes/MyEntertaining.md), [NotificationDetails](routes/NotificationDetails.md), [Notifications](routes/Notifications.md), [OneSchoolGlobalDetails](routes/OneSchoolGlobalDetails.md), [OrbitAdminLanding](routes/OrbitAdminLanding.md), [PINBiometricsMenu](routes/PINBiometricsMenu.md), [PINChange](routes/PINChange.md), [PINRegister](routes/PINRegister.md), [PINUnlock](routes/PINUnlock.md), [Photobook](routes/Photobook.md), [Profile](routes/Profile.md), [Search](routes/Search.md), [Services](routes/Services.md), [Splash](routes/Splash.md), [SupperMeeting_Details](routes/SupperMeeting_Details.md), [TermsAndPoliciesMenu](routes/TermsAndPoliciesMenu.md), [Updates_SingleList](routes/Updates_SingleList.md) |
| 15 | `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | service action | `UBTConnect` | onClick in CustomText → event clicked of CustomText → … → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All<br>onClick in CustomContainer → event clicked of CustomContainer → … → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All | yes | `fetchUnreadUpdateItemsCount()` [`api/update/repository.ts:73`](../app/src/api/update/repository.ts#L73) (page) | `BottomBar → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`components/layout/BottomBar/BottomBar.tsx`](../app/src/components/layout/BottomBar/BottomBar.tsx)<br>`Updates_SingleList → useUpdatesSingleList → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`pages/Updates_SingleList/Updates_SingleListPage.tsx`](../app/src/pages/Updates_SingleList/Updates_SingleListPage.tsx) | implemented | [Updates_SingleList](routes/Updates_SingleList.md) |
| 16 | `UBTConnect_Bookmarks_MCS/ActionGet_BookmarkPills_ByBookmarkCategoryIds` | server action | `UBTConnect_Bookmarks_MCS` | no chain in the TST code; TST made the call in the capture | yes | `fetchBookmarkPills()` [`api/bookmark/bookmarkCards.ts:122`](../app/src/api/bookmark/bookmarkCards.ts#L122) (page) | `Bookmarks → useBookmarks → get_LocalDynamicBookmarkPills → fetchBookmarkPills`<br>[`pages/Bookmarks/BookmarksPage.tsx`](../app/src/pages/Bookmarks/BookmarksPage.tsx) | implemented | [Bookmarks](routes/Bookmarks.md) |
| 17 | `UBTConnect_Utils/ActionGetSignedImagesInBulk` | server action | `UBTConnect_Utils` | UBTConnect_Utils.cache_SignedImageURL_GetCallback → server GetSignedImagesInBulk | yes | `cache_SignedImageURL_GetCallback()` [`lib/ubtConnectUtils/actions.ts:124`](../app/src/lib/ubtConnectUtils/actions.ts#L124) (page) | `EntityLazyImage → cache_SignedImageURL_Get → cache_SignedImageURL_GetCallback`<br>[`components/ui/EntityLazyImage/EntityLazyImage.tsx`](../app/src/components/ui/EntityLazyImage/EntityLazyImage.tsx) | implemented | [CountryDetails](routes/CountryDetails.md), [HouseholdCarousel](routes/HouseholdCarousel.md), [HouseholdDetails](routes/HouseholdDetails.md), [Household_Relations](routes/Household_Relations.md), [Locality_Details](routes/Locality_Details.md), [MessageDetail](routes/MessageDetail.md), [MessageList](routes/MessageList.md), [Photobook](routes/Photobook.md), [Profile](routes/Profile.md), [SupperMeeting_Carousel](routes/SupperMeeting_Carousel.md), [SupperMeeting_Details](routes/SupperMeeting_Details.md) |
| 18 | `UBTConnect_Utils/ActionGetUserInformation` | server action | `UBTConnect_Utils` | UBTConnect_Utils.cache_UserInfo_GetCallback → server GetUserInformation | yes | `fetchUserInformation()` [`api/member/userInformation.ts:6`](../app/src/api/member/userInformation.ts#L6) (shell + page) | `AssembleLocalityFilter → hasAccessToRegion → … → fetchUserInformation`<br>[`components/assemble/AssembleLocalityFilter/AssembleLocalityFilter.tsx`](../app/src/components/assemble/AssembleLocalityFilter/AssembleLocalityFilter.tsx)<br>`CommonUiLayout → DialogAccessRestrictedAction → … → fetchUserInformation`<br>[`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | implemented | [AssembleEvents](routes/AssembleEvents.md), [Assemble_BrowseByCountry](routes/Assemble_BrowseByCountry.md), [Bookmarks](routes/Bookmarks.md), [BrowseCountries](routes/BrowseCountries.md), [BrowseDirectory](routes/BrowseDirectory.md), [ContactByEmailMember](routes/ContactByEmailMember.md), [ContactByEmailOneSchoolGlobal](routes/ContactByEmailOneSchoolGlobal.md), [ContactUsMenu](routes/ContactUsMenu.md), [HomeFeed](routes/HomeFeed.md), [HouseholdDetails](routes/HouseholdDetails.md), [Household_Relations](routes/Household_Relations.md), [LDM_MyEvents_V2](routes/LDM_MyEvents_V2.md), [Locality_Details](routes/Locality_Details.md), [MessageDetail](routes/MessageDetail.md), [MessageList](routes/MessageList.md), [MyEntertaining](routes/MyEntertaining.md), [NotificationDetails](routes/NotificationDetails.md), [Notifications](routes/Notifications.md), [OneSchoolGlobalDetails](routes/OneSchoolGlobalDetails.md), [OrbitAdminLanding](routes/OrbitAdminLanding.md), [PINBiometricsMenu](routes/PINBiometricsMenu.md), [PINChange](routes/PINChange.md), [PINRegister](routes/PINRegister.md), [PINUnlock](routes/PINUnlock.md), [Photobook](routes/Photobook.md), [Services](routes/Services.md), [Splash](routes/Splash.md), [SupperMeeting_Details](routes/SupperMeeting_Details.md), [TermsAndPoliciesMenu](routes/TermsAndPoliciesMenu.md) |
| 19 | `UBT_AppManager/ActionAppManager_AfterInitialize` | server action | `UBT_AppManager` | UBT_AppManager.appManager_OnAppReady_Web → UBT_AppManager.appManager_InitializeWebComponents → UBT_AppManager.appManager_AfterInitialize → server AppManager_AfterInitialize<br>UBTConnect.onApplicationReady → UBT_AppManager_Mobile.appManager_Mobile_OnAppReady → UBT_AppManager.appManager_InitializeWebComponents → UBT_AppManager.appManager_AfterInitialize → server AppManager_AfterInitialize | yes | `afterInitialize()` [`api/app/repository.ts:30`](../app/src/api/app/repository.ts#L30) (shell) | `AppFrame → AppStart → … → afterInitialize`<br>[`app/AppFrame.tsx`](../app/src/app/AppFrame.tsx) | implemented | [AssembleEvents](routes/AssembleEvents.md), [Assemble_BrowseByCountry](routes/Assemble_BrowseByCountry.md), [Bookmarks](routes/Bookmarks.md), [BrowseCountries](routes/BrowseCountries.md), [BrowseDirectory](routes/BrowseDirectory.md), [ContactByEmailMember](routes/ContactByEmailMember.md), [ContactByEmailOneSchoolGlobal](routes/ContactByEmailOneSchoolGlobal.md), [ContactUsDetails](routes/ContactUsDetails.md), [ContactUsMenu](routes/ContactUsMenu.md), [CountryDetails](routes/CountryDetails.md), [CountryList](routes/CountryList.md), [HomeFeed](routes/HomeFeed.md), [HouseholdDetails](routes/HouseholdDetails.md), [Household_Relations](routes/Household_Relations.md), [LDM_MyEvents_V2](routes/LDM_MyEvents_V2.md), [Locality_Details](routes/Locality_Details.md), [Menu](routes/Menu.md), [MessageDetail](routes/MessageDetail.md), [MessageList](routes/MessageList.md), [MyEntertaining](routes/MyEntertaining.md), [NotificationDetails](routes/NotificationDetails.md), [Notifications](routes/Notifications.md), [OneSchoolGlobalDetails](routes/OneSchoolGlobalDetails.md), [OrbitAdminLanding](routes/OrbitAdminLanding.md), [PINBiometricsMenu](routes/PINBiometricsMenu.md), [PINChange](routes/PINChange.md), [PINRegister](routes/PINRegister.md), [PINUnlock](routes/PINUnlock.md), [Photobook](routes/Photobook.md), [Profile](routes/Profile.md), [Search](routes/Search.md), [Services](routes/Services.md), [Splash](routes/Splash.md), [SupperMeeting_Details](routes/SupperMeeting_Details.md), [TermsAndPoliciesMenu](routes/TermsAndPoliciesMenu.md), [Updates_SingleList](routes/Updates_SingleList.md) |
| 20 | `UBT_AppManager/ActionAppManager_Logout` | server action | `UBT_AppManager` | onClick in CustomContainer → event clicked of CustomContainer → … → UBT_AppManager.appManager_Logout → server AppManager_Logout | no | – | – | **missing** | [Menu](routes/Menu.md) |
| 21 | `UBT_AppManager/ActionAppManager_SynchAppContext` | server action | `UBT_AppManager` | HandleImageLoadError.applicationEvent_ImageError → Connect2_LegacyShared.zOnApplicationEvent_Wrapper → … → UBT_AppManager.appManager_SynchAppContextInternal → server AppManager_SynchAppContext<br>UBT_AppManager.inAppBrowser_BeforeLoadCallback → UBT_AppManager.appManager_HandleCallback → … → UBT_AppManager.appManager_SynchAppContextInternal → server AppManager_SynchAppContext<br>UBT_AppManager.inAppBrowser_BeforeLoadCallback → UBT_AppManager.appManager_HandleCallback → … → UBT_AppManager.appManager_SynchAppContextInternal → server AppManager_SynchAppContext<br>(+4 more chains) | yes | `fetchAppContext()` [`api/app/repository.ts:23`](../app/src/api/app/repository.ts#L23) (shell + page) | `AppFrame → AppStart → … → fetchAppContext`<br>[`app/AppFrame.tsx`](../app/src/app/AppFrame.tsx)<br>`AssembleFilterSheetBlock → useAssembleFilterSheet → … → fetchAppContext`<br>[`pages/AssembleEvents/AssembleEventsPage.tsx`](../app/src/pages/AssembleEvents/AssembleEventsPage.tsx) | implemented | [AssembleEvents](routes/AssembleEvents.md), [Assemble_BrowseByCountry](routes/Assemble_BrowseByCountry.md), [Bookmarks](routes/Bookmarks.md), [BrowseCountries](routes/BrowseCountries.md), [BrowseDirectory](routes/BrowseDirectory.md), [ContactByEmailMember](routes/ContactByEmailMember.md), [ContactByEmailOneSchoolGlobal](routes/ContactByEmailOneSchoolGlobal.md), [ContactUsDetails](routes/ContactUsDetails.md), [ContactUsMenu](routes/ContactUsMenu.md), [CountryDetails](routes/CountryDetails.md), [CountryList](routes/CountryList.md), [EventDetail](routes/EventDetail.md), [HelpersDetail](routes/HelpersDetail.md), [HomeFeed](routes/HomeFeed.md), [HostSurvey](routes/HostSurvey.md), [HouseholdCarousel](routes/HouseholdCarousel.md), [HouseholdDetails](routes/HouseholdDetails.md), [Household_Relations](routes/Household_Relations.md), [LDM_EventDetail_V2](routes/LDM_EventDetail_V2.md), [LDM_MyEvents_V2](routes/LDM_MyEvents_V2.md), [Locality_Details](routes/Locality_Details.md), [Login](routes/Login.md), [Menu](routes/Menu.md), [MessageDetail](routes/MessageDetail.md), [MessageList](routes/MessageList.md), [MyEntertaining](routes/MyEntertaining.md), [NotificationDetails](routes/NotificationDetails.md), [Notifications](routes/Notifications.md), [OneSchoolGlobalCarousel](routes/OneSchoolGlobalCarousel.md), [OneSchoolGlobalDetails](routes/OneSchoolGlobalDetails.md), [OrbitAdminLanding](routes/OrbitAdminLanding.md), [PINBiometricsMenu](routes/PINBiometricsMenu.md), [PINChange](routes/PINChange.md), [PINRegister](routes/PINRegister.md), [PINUnlock](routes/PINUnlock.md), [Photobook](routes/Photobook.md), [Profile](routes/Profile.md), [Search](routes/Search.md), [Services](routes/Services.md), [Splash](routes/Splash.md), [SupperMeeting_Carousel](routes/SupperMeeting_Carousel.md), [SupperMeeting_Details](routes/SupperMeeting_Details.md), [TermsAndPoliciesMenu](routes/TermsAndPoliciesMenu.md), [Updates_SingleList](routes/Updates_SingleList.md) |
| 22 | `UBTConnect/Directory_Updates/Updates_SingleList/DataActionFetchUpdates` | data action | `Updates_SingleList` | onClick in Icon → event click of Icon → … → Updates_SingleList.refreshUpdates → Updates_SingleList.DataActionFetchUpdates<br>onClick in CustomText → event clicked of CustomText → … → Updates_SingleList.refreshUpdates → Updates_SingleList.DataActionFetchUpdates | yes | `fetchUpdatesList()` [`api/update/repository.ts:32`](../app/src/api/update/repository.ts#L32) (page) | `Updates_SingleList → useUpdatesSingleList → fetchUpdatesList`<br>[`pages/Updates_SingleList/Updates_SingleListPage.tsx`](../app/src/pages/Updates_SingleList/Updates_SingleListPage.tsx) | implemented | [Updates_SingleList](routes/Updates_SingleList.md) |
| 23 | `UBTConnect/Directory_Updates/Updates_SingleList/ServiceAPIAction_UI_UpdateItem_MarkAllAsRead` | service action | `Updates_SingleList` | onClick in CustomText → event clicked of CustomText → event click_MarkAll of UpdateItem_Header → Updates_SingleList.handler_MarkAllAsRead → server Action_UI_UpdateItem_MarkAllAsRead | no | `markAllUpdateItemsAsRead()` [`api/update/repository.ts:58`](../app/src/api/update/repository.ts#L58) (page) | `Updates_SingleList → useUpdatesSingleList → markAllUpdateItemsAsRead`<br>[`pages/Updates_SingleList/Updates_SingleListPage.tsx`](../app/src/pages/Updates_SingleList/Updates_SingleListPage.tsx) | implemented | [Updates_SingleList](routes/Updates_SingleList.md) |
| 24 | `UBTConnect/Directory_Updates/Updates_SingleList/ServiceAPIAction_UI_UpdateItem_MarkAsRead` | service action | `Updates_SingleList` | onClick in CustomContainer → event clicked of CustomContainer → … → Updates_SingleList.handler_MarkAsRead → server Action_UI_UpdateItem_MarkAsRead | no | `markUpdateItemAsRead()` [`api/update/repository.ts:47`](../app/src/api/update/repository.ts#L47) (page) | `Updates_SingleList → useUpdatesSingleList → markUpdateItemAsRead`<br>[`pages/Updates_SingleList/Updates_SingleListPage.tsx`](../app/src/pages/Updates_SingleList/Updates_SingleListPage.tsx) | implemented | [Updates_SingleList](routes/Updates_SingleList.md) |

## 5. Missing in React

- Call `Connect2_LegacyShared/ActionGetAllApplicationEvents`. Chain on TST: HandleImageLoadError.applicationEvent_ImageError → Connect2_LegacyShared.zOnApplicationEvent_Wrapper → Connect2_LegacyShared.getAppEventName → Connect2_LegacyShared.cacheLocalApplicationEvents → server GetAllApplicationEvents.
  - No React code makes this call.
- Call `UBT_AppManager/ActionAppManager_Logout`. Chain on TST: onClick in CustomContainer → event clicked of CustomContainer → … → UBT_AppManager.appManager_Logout → server AppManager_Logout.
  - No React code makes this call.
  - Note in [`platform/auth/mockAuth.ts:24`](../app/src/platform/auth/mockAuth.ts#L24): "/** The server logout of AppManager_Logout: no call (app-shell spec 10). */"
  - Note in [`platform/session/auth.ts:84`](../app/src/platform/session/auth.ts#L84): "/** Connect_Logout (UC:1062-1066): Cache_InvalidateEverything, then AppManager_Logout (AM:3649-3720): server logout"
  - Note in [`platform/session/pin.ts:66`](../app/src/platform/session/pin.ts#L66): "/** PIN_Delete(UserId, AppName), part of AppManager_Logout (AM:3712). */"

## 6. Questions

1. React calls `/api/UBTConnect_Utils/CacheControl_Policies/DataActionGetCacheInfo` from `fetchPolicies()` [`api/app/repository.ts:54`](../app/src/api/app/repository.ts#L54) in the app shell. TST has no chain to this call on ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactByEmailOrbitHelpdesk, PINBiometricsMenu, Services. Does the app shell make this call on these routes?
2. React calls `/api/UBTConnect_Utils/ActionGetUserInformation` from `fetchUserInformation()` [`api/member/userInformation.ts:6`](../app/src/api/member/userInformation.ts#L6) in the app shell. TST has no chain to this call on ContactByEmailOrbitHelpdesk. Does the app shell make this call on these routes?
3. React calls `/api/UBTConnect/ServiceAPIFetchData_CacheableHouseholds` from `fetchCacheableHouseholds()` [`api/app/repository.ts:48`](../app/src/api/app/repository.ts#L48) in the app shell. TST has no chain to this call on ContactByEmailOrbitHelpdesk, EventDetail, HelpersDetail, HostSurvey, HouseholdCarousel, LDM_EventDetail_V2, Login, OneSchoolGlobalCarousel, SupperMeeting_Carousel. Does the app shell make this call on these routes?
4. React calls `/api/UBTConnect/ServiceAPIFetchData_CacheableMapEntities` from `fetchCacheableMapEntities()` [`api/app/repository.ts:42`](../app/src/api/app/repository.ts#L42) in the app shell. TST has no chain to this call on ContactByEmailOrbitHelpdesk, EventDetail, HelpersDetail, HostSurvey, HouseholdCarousel, LDM_EventDetail_V2, Login, OneSchoolGlobalCarousel, SupperMeeting_Carousel. Does the app shell make this call on these routes?
5. React calls `/api/Connect2_LegacyShared/ActionGetNumberUnreadMessages` from `fetchNumberUnreadMessages()` [`api/message/unreadMessages.ts:22`](../app/src/api/message/unreadMessages.ts#L22) in the app shell. TST has no chain to this call on ContactByEmailOrbitHelpdesk, EventDetail, HelpersDetail, HostSurvey, HouseholdCarousel, LDM_EventDetail_V2, OneSchoolGlobalCarousel, SupperMeeting_Carousel. Does the app shell make this call on these routes?
6. React calls `/api/UBTConnect/ActionSync_Info_GetMain` from `fetchSyncInfoMain()` [`api/app/repository.ts:36`](../app/src/api/app/repository.ts#L36) in the app shell. TST has no chain to this call on ContactByEmailOrbitHelpdesk, EventDetail, HelpersDetail, HostSurvey, HouseholdCarousel, LDM_EventDetail_V2, OneSchoolGlobalCarousel, SupperMeeting_Carousel. Does the app shell make this call on these routes?
7. React calls `/api/UBT_AppManager/ActionAppManager_AfterInitialize` from `afterInitialize()` [`api/app/repository.ts:30`](../app/src/api/app/repository.ts#L30) in the app shell. TST has no chain to this call on ContactByEmailOrbitHelpdesk, EventDetail, HelpersDetail, HostSurvey, HouseholdCarousel, LDM_EventDetail_V2, Login, OneSchoolGlobalCarousel, SupperMeeting_Carousel. Does the app shell make this call on these routes?
