# Flow report: App_Menu

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 3 (built: 3, Menu, PINBiometricsMenu, TermsAndPoliciesMenu; not built: none) |
| Own blocks | Menu_List (ContactUsMenu of App_Menu_ContactUs also uses it) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/…`, KB pages `ui/menu.md`, `ui/pin.md`, `ui/app-shell.md`, `ui/common-blocks.md`, `ui/contact-us.md`, `ui/home-feed.md` and the rules they name, TST compiled code of the 4 elements of the flow and of `UBTConnect.model.js` (`tst_source.py`) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 111 · partial 1 · missing 0 · differs 3 · mock-only 4 · n/a 3 · unclear 0 (same as `checklist.json`).
- **F1** (minor): Menu keeps no screen variable in the view cache. After a Back to Menu, the user header shows the
  skeleton until CacheControl_UserInfo answers. TST restores `isFetched` with the view and shows the header at once.
- **F2** (info): the doc comment of `RouteMeta.lock` says that a screen without CommonUI gets `ignore`.
  PINBiometricsMenu has no CommonUI and gets `enforce`. The code is correct for the app-start PIN check.
- Three rows differ on purpose. Connect_Logout also clears the memory cache and the local entities (ADR-10). The
  subscription link opens in a new tab instead of the InAppBrowser (U18). Biometrics stay hidden on the web (U13).
- One row is unclear: the OnException handler of the UI flow App_Menu is not in the pack or in the TST sources (Q1).
- Status: in React a signed-in user can open the menu and see the user header. The user can open Contact Us, Terms &
  Policies, PIN & Biometrics and the profile. The user can open the subscription link and log out after a
  confirmation. A householder or the spouse of one can request a photo update. On the web, PIN & Biometrics offers
  Change PIN only (U13). No finding blocks the flow.

## 2. Screens

### 2.1 Menu

Route `/UBTConnect/Menu`, screen component `app/src/pages/Menu/MenuPage.tsx`, header in
`app/src/pages/Menu/components/MenuUserHeader.tsx`, flows in `app/src/pages/Menu/hooks/useMenu.ts` and
`app/src/pages/Menu/hooks/menuState.ts`. Board: `build`, built (V3d, user 2026-10-14).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | roles Registered, UBTOne_User | a signed-in user opens the screen (checkRegistered) | MEMBER_ROUTE (member, enforce): Menu is not in ROUTE_META | `match` | app/src/app/routes.ts:40, 43-56; TST UBTConnect.App_Menu.Menu.mvc.js:1131-1132 |
| 002 | input parameters | none | route inputs [] | `match` | app/src/app/routes.generated.ts:21; TST UBTConnect.App_Menu.Menu.mvc.js:62 |
| 003 | lifecycle | OnInitialize → ScreenEvent_OnInitialize; no OnReady, OnDestroy or OnParametersChanged | useReducer(menuReducer, undefined, initialMenuState) runs the OnInitialize part once | `match` | app/src/pages/Menu/hooks/useMenu.ts:35; app/src/pages/Menu/hooks/menuState.ts:111-113; TST UBTConnect.App_Menu.Menu.mvc.js:1106 |
| 004 | local MenuOptionList (UI_ListMenuOption List) | the rows of Menu_List | state.menuOptionList | `match` | app/src/pages/Menu/hooks/menuState.ts:18-20 |
| 005 | local LocalCacheControl_UserInformation (Directory_UserCurrent, isFetched) | default record until the cache answers: MemberID 0 ("0" as text), FullName "", photo "", isFetched False | user null and isFetched false; the header gets "0", "" and "" | `match` | app/src/pages/Menu/hooks/menuState.ts:21-24, 111-113; app/src/pages/Menu/MenuPage.tsx:65-71; TST UBTConnect.App_Menu.Menu.mvc.js:15-16, 307 |
| 006 | view cache (restored view) | the runtime restores the screen variables; OnInitialize rebuilds MenuOptionList only, so isFetched stays True and the header shows at once | no Menu variable is in the view cache: a Back to Menu starts with isFetched false, and the header shows the skeleton until CacheControl_UserInfo answers | `partial` | app/src/pages/Menu/hooks/menuState.ts:17; app/src/pages/Menu/hooks/useMenu.ts:35; app/src/platform/navigation/hooks.ts:45-61; app/src/platform/navigation/viewCache.ts:3-8; U19 (migration/app-shell.spec.md:351, 386); TST UBTConnect.App_Menu.Menu.mvc.js:877-904 (no IsViewRestoredFromCache check); TST UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:418<br>TermsAndPoliciesMenu and PINBiometricsMenu keep their variables with useViewState. Menu does not, and no decision names it.<br>**F1** (minor) |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 007 | Menu_GetList (UBTConnect_Utils), OnInitialize | six items in this order: PIN & Biometrics (Password, 2), Contact Us (Help, 4), Subscription and Payments (ShoppingBasket, 5), Request Photo Update (ImageGallery, 6), Terms & Policies (BookOpen, 6), Log out (Logout, 7); Manage Feed and Manage Wallet are disabled nodes | menu_GetList() returns the same six items, ids, labels, orders and icon classes | `match` | app/src/pages/Menu/hooks/menuState.ts:32-71; app/src/pages/Menu/staticEntities.ts:6-24; BR-C2UTL-177; migration/knowledge/static-entities-tst.json (UBTConnect_Utils.connect_Menu_Items, uBT_Icons)<br>The body of Menu_GetList is not in the TST sources (UBTConnect_Utils.controller.js is missing). The row follows the KB rule and the TST static entity values. |
| 008 | CacheControl_UserInfo_Wrapper (App_Cache), event Result | the block reads the cached user and raises Result(UserInformation) → CacheControl_UserInfo_WrapperResult | UserInfoCache onResult={onUserInformation} | `match` | app/src/pages/Menu/MenuPage.tsx:97; app/src/platform/session/UserInfoCache/UserInfoCache.tsx:18-31; TST UBTConnect.App_Menu.Menu.mvc.js:624-640 |
| 009 | server side of the user information | data action GetCacheInfo of UBTConnect_Utils CacheControl_UserInfo on a cache miss | callAction CacheControl_UserInfo/DataActionGetCacheInfo, answered by the shell mock (scenario householder: pages/Menu/mocks.ts) | `mock-only` | app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:39-46; app/src/pages/Menu/mocks.ts:23-46<br>Production needs the data action GetCacheInfo of UBTConnect_Utils CacheControl_UserInfo. |
| 010 | server action RequestPhotoUpdate (own server action, folder Menu) | no input; the screen does not read Out_IsSuccess | requestPhotoUpdate(): callAction UBTConnect ActionRequestPhotoUpdate with {} | `match` | app/src/api/member/repository.ts:42-48; app/src/pages/Menu/hooks/useMenu.ts:80; TST UBTConnect.App_Menu.Menu.mvc.js:720-735 |
| 011 | server side of RequestPhotoUpdate | Member_RequestPhotoUpdate_Service (Connect_Household_CS), then BackOfficeNotificationUpdateRequest (BackofficeNotifications_CS) with ChangeRequestId, name, country and locality | contract mock answers Out_IsSuccess True (x-mock-source fictional, x-os-writes true) | `mock-only` | app/src/pages/Menu/mocks.ts:49; app/src/api/openapi.yaml:3111-3141; pack/data.md RequestPhotoUpdate; BR-UBTCON-183<br>Production needs both server actions. BR-UBTCON-183: Out_IsSuccess is never assigned, so the real server answers False. The screen does not read it. |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 012 | Layout_DetailPage In_AlignTitleLeft | In_AlignTitleLeft True; other inputs default | DetailLayout alignTitleLeft, other props default | `match` | app/src/pages/Menu/MenuPage.tsx:37-40; TST UBTConnect.App_Menu.Menu.mvc.js:134 |
| 013 | Placeholder_Header_Title: CustomText "Menu" | In_Text "Menu", Color Neutral0, FontSize Heading5, FontWeight SemiBold | CustomText with the same text and options (Heading5 = h5) | `match` | app/src/pages/Menu/MenuPage.tsx:41-51; app/src/pages/Menu/staticEntities.ts:28; TST UBTConnect.App_Menu.Menu.mvc.js:150-165 |
| 014 | Content: CustomContainer full-height | ExtendedClasses "full-height"; Display Flex, JustifyContent SpaceBetween, FlexDirection Column | CustomContainer with the same class and options | `match` | app/src/pages/Menu/MenuPage.tsx:53-63; TST UBTConnect.App_Menu.Menu.mvc.js:186-200 |
| 015 | SkeletonSection of the header | In_IsLoading = not LocalCacheControl_UserInformation.isFetched | Skeleton isLoading={!state.isFetched} | `match` | app/src/pages/Menu/MenuPage.tsx:66; app/src/pages/Menu/components/MenuUserHeader.tsx:34; TST UBTConnect.App_Menu.Menu.mvc.js:229 |
| 016 | CustomContainer #Header | PaddingSize VerticalSizeId Small, HorizontalSizeId Base | CustomContainer id Header with the same padding | `match` | app/src/pages/Menu/components/MenuUserHeader.tsx:35-38; TST UBTConnect.App_Menu.Menu.mvc.js:249-258 |
| 017 | Columns_Two | ColumnBehaviour ReduceFirst, SpacingSize Base | ColumnsTwo with the same options | `match` | app/src/pages/Menu/components/MenuUserHeader.tsx:39-41; TST UBTConnect.App_Menu.Menu.mvc.js:278-288 |
| 018 | UBT_LazyImage (UBTConnect_Utils) of the member | EntityId = LongIntegerToText(MemberID), EntityType Member, ImageSize Small_40 x Square, ImageURL = Member Photo.SignedURL | EntityLazyImage with entityId memberId, Connect_Entity.Member, the same size and photoUrl | `match` | app/src/pages/Menu/components/MenuUserHeader.tsx:43-49; app/src/pages/Menu/MenuPage.tsx:67-68; TST UBTConnect.App_Menu.Menu.mvc.js:305-319<br>The internals of the image block are not checked here (shared component). |
| 019 | CustomText FullName | In_Text FullName; Neutral9, Base, SemiBold | CustomText fullName with the same options | `match` | app/src/pages/Menu/components/MenuUserHeader.tsx:53-63; TST UBTConnect.App_Menu.Menu.mvc.js:345-357 |
| 020 | link "Edit your account" | Link onclick OnClick_EditYourAccount; CustomText Primary, ExtraSmall, SemiBold, IsUnderlined True | OSLink onClick={onEditYourAccount} with CustomText of the same options | `match` | app/src/pages/Menu/components/MenuUserHeader.tsx:64-75; TST UBTConnect.App_Menu.Menu.mvc.js:374-410 |
| 021 | Menu_List In_MenuSection and event | In_MenuSection = { MenuOptions: MenuOptionList } (HasSeparator keeps its default True), a new record when MenuOptionList changes; OnClick_MenuOption passes UI_ListMenuOption.Id | MenuList inMenuSection={ MenuOptions } (MenuList shows the separator when HasSeparator is not set); onMenuOption passes option.Id | `match` | app/src/pages/Menu/MenuPage.tsx:72; app/src/pages/Menu/hooks/useMenu.ts:38, 90-92; app/src/components/menu/MenuList/MenuList.tsx:63; TST UBTConnect.App_Menu.Menu.mvc.js:437-470; TST UBTConnect.model.js:13558-13560 |
| 022 | CustomContainer + Version (App_Common) | MarginSize Vertical Small; TextOptions Neutral7, DoubleExtraSmall; Display Flex, JustifyContent Center; block Version without inputs | CustomContainer with the same options and AppVersion | `match` | app/src/pages/Menu/MenuPage.tsx:74-83; TST UBTConnect.App_Menu.Menu.mvc.js:481-521<br>The Version label (BR-UBTCON-336) is checked in the report of App_Common. |
| 023 | Placeholder Bottom: BottomBarMenu (App_Common) | ActiveItem Menu, isRootPage True | BottomBar activeItem={Connect_BottomBar_Items.Menu} isRootPage | `match` | app/src/pages/Menu/MenuPage.tsx:86; TST UBTConnect.App_Menu.Menu.mvc.js:549-552<br>The bar behaviour (BR-UBTCON-314 to BR-UBTCON-318) is checked in the report of App_Common. |
| 024 | Placeholder_CommonUI_Inside_Layout: CommonUI_InsideLayout | no inputs (defaults) | CommonUiLayout with default props | `match` | app/src/pages/Menu/MenuPage.tsx:87; TST UBTConnect.App_Menu.Menu.mvc.js:572 |
| 025 | Dialog_CustomChoice #PopUp_Logout | texts: header "Logout", body "Are you sure you wish to logout?", confirm "Yes", dismiss "No" | ChoiceDialog id PopUp_Logout with the same four texts | `match` | app/src/pages/Menu/MenuPage.tsx:89-96; TST UBTConnect.App_Menu.Menu.mvc.js:603-620 |
| 026 | Dialog_CustomChoice #Popup_SubmitPhotoRequest | expressions "Photo Request?" and "Are you sure you wish to request a photo update?"; texts "Submit" and "Cancel" | ChoiceDialog id Popup_SubmitPhotoRequest; header and body as data-expression spans; the same labels | `match` | app/src/pages/Menu/MenuPage.tsx:98-105; TST UBTConnect.App_Menu.Menu.mvc.js:665-696 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 027 | ScreenEvent_OnInitialize | Menu_GetList, then MenuOptionList = ConvertList: Id = MenuItemId, IconId = UBTIcon, Label; IconRightText "Dummy" and IconRightLoading True for Subscription and Payments; IsLoading True for Request Photo Update | initialMenuState: toMenuOptionList(menu_GetList()) with the same mapping | `match` | app/src/pages/Menu/hooks/menuState.ts:76-85, 111-113; TST UBTConnect.App_Menu.Menu.mvc.js:877-904 |
| 028 | CacheControl_UserInfo_WrapperResult: Subscription and Payments row | ListIndexOf; when found: IconRight OpenNew, IconRightText = Directory_UserCurrent_Subscription.SubscriptionType, IconRightLoading False | applyUserInformation maps the row with the same three values | `match` | app/src/pages/Menu/hooks/menuState.ts:90-100; TST UBTConnect.App_Menu.Menu.mvc.js:813-826 |
| 029 | CacheControl_UserInfo_WrapperResult: user record | LocalCacheControl_UserInformation.Directory_UserCurrent = UserInformation; isFetched = True (after the If, in both branches) | menuReducer sets user and isFetched true | `match` | app/src/pages/Menu/hooks/menuState.ts:116-122; TST UBTConnect.App_Menu.Menu.mvc.js:829-834<br>The DEV pack draws this as `else → continues at <node@3200,5029>`: the same node. |
| 030 | CacheControl_UserInfo_WrapperResult: Request Photo Update row | ListIndexOf; when found: IsLoading False, then ListRemove unless isHouseholder or SpouseIsHouseholder | applyUserInformation: IsLoading false, then splice unless isHouseholder or SpouseIsHouseholder | `match` | app/src/pages/Menu/hooks/menuState.ts:101-105; TST UBTConnect.App_Menu.Menu.mvc.js:837-848 |
| 031 | OnClick_EditYourAccount | isFetched → Profile (transition Inherited, compiled Default); else End | if (isFetched) navigate('/UBTConnect/Profile') with the default transition | `match` | app/src/pages/Menu/hooks/useMenu.ts:45-47; TST UBTConnect.App_Menu.Menu.mvc.js:915-930 |
| 032 | OnClick_MenuOption, case LogOut | Action_Logout, then End | case LogOut: await logout() | `match` | app/src/pages/Menu/hooks/useMenu.ts:61-63; TST UBTConnect.App_Menu.Menu.mvc.js:964-968 |
| 033 | Action_Logout | ConfirmAction(PopUp_Logout); confirmed → Connect_Logout → HomeFeed (Fade); not confirmed → End | confirmAction('PopUp_Logout'); confirmed → signOut() → navigate HomeFeed with TransitionAnimation.Fade | `match` | app/src/pages/Menu/hooks/useMenu.ts:51-56; TST UBTConnect.App_Menu.Menu.mvc.js:744-775; CR-F18-1<br>HomeFeed then sends the signed-out user to Login: app/src/app/RouteGuard.tsx:36-43. |
| 034 | OnClick_MenuOption, case ContactUs | ContactUsMenu (Default) | navigate('/UBTConnect/ContactUsMenu') | `match` | app/src/pages/Menu/hooks/useMenu.ts:64-66; TST UBTConnect.App_Menu.Menu.mvc.js:972-975 |
| 035 | OnClick_MenuOption, case TermsAndPolicies | TermsAndPoliciesMenu (Default) | navigate('/UBTConnect/TermsAndPoliciesMenu') | `match` | app/src/pages/Menu/hooks/useMenu.ts:67-69; TST UBTConnect.App_Menu.Menu.mvc.js:978-981 |
| 036 | OnClick_MenuOption, case PINAndBiometrics | PINBiometricsMenu (Default) | navigate('/UBTConnect/PINBiometricsMenu') | `match` | app/src/pages/Menu/hooks/useMenu.ts:70-72; TST UBTConnect.App_Menu.Menu.mvc.js:984-987 |
| 037 | OnClick_MenuOption, case SubscriptionAndPayments | isFetched → OpenInApp_OpenExternalLink(Url = SubscriptionManageLink, InNewTab True); else End | isFetched and user → openInApp_OpenExternalLink(SubscriptionManageLink, true); else nothing | `match` | app/src/pages/Menu/hooks/useMenu.ts:73-76; TST UBTConnect.App_Menu.Menu.mvc.js:990-994 |
| 038 | OnClick_MenuOption, case RequestPhotoUpdate | ConfirmAction(Popup_SubmitPhotoRequest); confirmed → RequestPhotoUpdate → Success message "Your update photo request has been submitted."; cancelled → End | confirmAction('Popup_SubmitPhotoRequest'); confirmed → await requestPhotoUpdate() → showFeedbackMessage(same text, success) | `match` | app/src/pages/Menu/hooks/useMenu.ts:77-83; app/src/platform/feedback/feedbackStore.ts:7; TST UBTConnect.App_Menu.Menu.mvc.js:1002-1018 |
| 039 | OnClick_MenuOption, otherwise | Info message "Go to " + Id | showFeedbackMessage(`Go to ${id}`, info) | `match` | app/src/pages/Menu/hooks/useMenu.ts:84-85; TST UBTConnect.App_Menu.Menu.mvc.js:1029<br>Menu_GetList returns no other id, so the branch is a fallback (BR-UBTCON-963). |
| 040 | exception of OnClick_MenuOption and Action_Logout | no handler in the screen actions: an exception (for example of RequestPhotoUpdate) goes to the OnException of the UI flow App_Menu | menuOption(...).catch(raiseToFlowHandler): the App_Common flow handler (exception toast, logout on a security exception) | `unclear` | app/src/pages/Menu/hooks/useMenu.ts:89-92; app/src/legacy/os/exceptions.ts:55-69; U10 (migration/app-shell.spec.md:342, 367)<br>The handler of App_Menu is not in the pack, and UBTConnect.App_Menu.controller.js is not in the TST sources.<br>Q1: what does the OnException of the UI flow App_Menu do? Does it delegate to App_Common, as the fetched flows do? |
| 041 | unreachable end nodes of the five screen actions | not connected | not implemented | `n/a` | pack/screens.md Menu<br>dead in the model |

**Validations**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 042 | validations of the screen | no input widget, no validation | none | `match` | pack/screens.md Menu; TST UBTConnect.App_Menu.Menu.mvc.js:23-31 (no validation widget) |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 043 | BR-UBTCON-959 | Request Photo Update stays only for a householder or the spouse of one; until the user info comes, the row shows a skeleton | IsLoading true at start; removed unless isHouseholder or SpouseIsHouseholder | `match` | app/src/pages/Menu/hooks/menuState.ts:83, 101-105; BR-UBTCON-959 |
| 044 | BR-UBTCON-960 | the request goes only after Submit; the success message shows whenever the server action returns; no output is read | the same order; Out_IsSuccess is not read | `match` | app/src/pages/Menu/hooks/useMenu.ts:77-83; BR-UBTCON-960 |
| 045 | BR-UBTCON-961 | the link opens only when isFetched; the row shows "Dummy" under a skeleton, then the subscription type with OpenNew; an empty link goes through | the same conditions; an empty link goes to openInApp_OpenExternalLink unchanged | `match` | app/src/pages/Menu/hooks/menuState.ts:81-82, 91-100; app/src/pages/Menu/hooks/useMenu.ts:73-76; BR-UBTCON-961 |
| 046 | BR-UBTCON-962 | Logout asks first; Yes → Connect_Logout → HomeFeed; No → End | the same | `match` | app/src/pages/Menu/hooks/useMenu.ts:51-56; BR-UBTCON-962 |
| 047 | BR-UBTCON-963 | rows route by item id; Edit your account opens Profile once loaded; an unknown id shows "Go to " + Id; bottom bar Menu, root page | the same switch on Connect_Menu_Items | `match` | app/src/pages/Menu/hooks/useMenu.ts:45-47, 59-86; app/src/pages/Menu/MenuPage.tsx:86; BR-UBTCON-963 |
| 048 | Connect_Logout (own action of the flow; BR-UBTCON-208) | Cache_InvalidateEverything, then AppManager_Logout | signOut → connectLogout: clearMemoryCache (Cache_InvalidateEverything and the rest of the memory cache), clearAllLocalEntities, then the AppManager_Logout steps | `differs` | app/src/platform/session/auth.ts:60-96; pack/actions.md Connect_Logout; ADR-10 (migration/architecture.md:192)<br>ADR-10 adds the clear of the whole memory cache and of every local entity. The original order stays. |
| 049 | server side of AppManager_Logout (UBT_AppManager) | server logout, Firebase sign-out, telemetry, PIN_Delete, context re-sync | authProvider()?.signOut(): the mock identity provider makes no call; PIN_Delete and the re-sync run locally | `mock-only` | app/src/platform/session/auth.ts:60-66, 86-95; migration/app-shell.spec.md:223<br>Production needs the server logout of UBT_AppManager AppManager_Logout through the identity provider. |
| 050 | OpenInApp_OpenExternalLink (UBTConnect_Utils; BR-C2UTL-160, BR-C2UTL-161) | InAppBrowser available and http(s) URL → Open, Target SYSTEM (InNewTab True); else InNewTab → JSUtils_PageOpenInNewTab | http(s) URL → window.open in a new tab; else InNewTab → jSUtils_PageOpenInNewTab | `differs` | app/src/lib/ubtConnectUtils/actions.ts:154-174; U18 (migration/app-shell.spec.md:350, 385); CR-HomeFeed-1<br>U18 replaces the InAppBrowser plugin with a new tab. On the web the user sees the same result: a new tab. |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 051 | screen strings (13) | "Menu", "Edit your account", "Logout", "Are you sure you wish to logout?", "Yes", "No", "Photo Request?", "Are you sure you wish to request a photo update?", "Submit", "Cancel", "Your update photo request has been submitted.", "Go to ", "Dummy" | the same 13 texts | `match` | app/src/pages/Menu/MenuPage.tsx:44, 92-95, 101-104; app/src/pages/Menu/components/MenuUserHeader.tsx:67; app/src/pages/Menu/hooks/useMenu.ts:81, 85; app/src/pages/Menu/hooks/menuState.ts:81 |
| 052 | row labels (6), Connect_Menu_Items ids | "PIN & Biometrics", "Contact Us", "Subscription and Payments", "Request Photo Update", "Terms & Policies", "Log out" | the same 6 values | `match` | app/src/pages/Menu/staticEntities.ts:6-13; pack/references.md Connect_Menu_Items; migration/knowledge/static-entities-tst.json |

All 13 strings of the screen and the 6 row labels match.

### 2.2 PINBiometricsMenu

Route `/UBTConnect/PINBiometricsMenu`, screen component `app/src/pages/PINBiometricsMenu/PINBiometricsMenuPage.tsx`, flows in
`app/src/pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts` and `hooks/pinBiometricsMenuState.ts`. Board: `build`,
built (V4c, user 2026-10-14). Decision U13 hides biometrics on the web.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 053 | roles Anonymous, Registered, UBTOne_User | a signed-out user can open the screen (empty checkPermissions) | { access: 'anonymous', lock: 'enforce' } | `match` | app/src/app/routes.ts:51; TST UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:407-408; migration/knowledge/shell-facts.md:14 |
| 054 | lock screen | no CommonUI_InsideLayout, so no lock overlay on the screen; the app-start PIN check applies to every screen | useNoCommonUi(): no app lock host; lock 'enforce' gives only the app-start redirect to PINUnlock | `match` | app/src/pages/PINBiometricsMenu/PINBiometricsMenuPage.tsx:12; app/src/platform/navigation/AppLockHost.tsx:4-12; app/src/app/RouteGuard.tsx:36-43; migration/knowledge/shell-observed.md:24-29; TST UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:203<br>The doc comment of RouteMeta.lock says that a screen without CommonUI gets 'ignore'.<br>**F2** (info) |
| 055 | input parameters | none | route inputs [] | `match` | app/src/app/routes.generated.ts:50; TST UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:61 |
| 056 | lifecycle | OnInitialize → ScreenEvent_OnInitialize; nothing else | useState initializer, once before the first render | `match` | app/src/pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts:28-34; TST UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:382 |
| 057 | locals ChangePinName, BiometricLoginName | "Change PIN", "Biometric Login"; never changed | CHANGE_PIN_NAME, BIOMETRIC_LOGIN_NAME | `match` | app/src/pages/PINBiometricsMenu/hooks/pinBiometricsMenuState.ts:8, 11; TST UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:15-20 |
| 058 | local MenuOptionList | a screen variable: the view cache keeps it | useViewState('MenuOptionList') | `match` | app/src/pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts:34 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 059 | data actions and aggregates | none | none | `match` | pack/screens.md PINBiometricsMenu |
| 060 | AppManager_GetPIN_FingerprintReaderAvailable (UBT_AppManager) | Available decides the Biometric Login row | constant false | `differs` | app/src/pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts:12-16; U13 (migration/app-shell.spec.md:345, 380); TST UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:271-274<br>U13 hides biometrics on the web. The body of the getter is not in the TST sources. |
| 061 | Client.App_PIN_BiometricEnabled (read) | SwitchValue of the Biometric Login row; Boolean, default True | clientVar.biometricEnabled.get(); default true | `match` | app/src/pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts:32; app/src/platform/session/session.ts:203-204; app/src/platform/session/clientVars.ts:30; TST UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:283 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 062 | Layout_DetailPage and title | default inputs (title centred, primary colour); title text "PIN & Biometrics" | DetailLayout without alignTitleLeft; headerTitle "PIN & Biometrics" | `match` | app/src/pages/PINBiometricsMenu/PINBiometricsMenuPage.tsx:17-20; app/src/components/layout/DetailLayout/DetailLayout.tsx:45-46; TST UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:136, 152-153 |
| 063 | Menu_List In_MenuSection and event | { HasSeparator: False, MenuOptions: MenuOptionList }; OnClick_MenuOption passes the row record | menuSection { HasSeparator: false, MenuOptions }; onMenuOption(option) | `match` | app/src/pages/PINBiometricsMenu/PINBiometricsMenuPage.tsx:21; app/src/pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts:35-38; TST UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:159-180 |
| 064 | empty placeholders | Header_Right, HeaderContent, Bottom and Placeholder_CommonUI_Inside_Layout are empty | DetailLayout gets no bottom and no commonUI | `match` | app/src/pages/PINBiometricsMenu/PINBiometricsMenuPage.tsx:17-22; TST UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:155-156, 202-203 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 065 | ScreenEvent_OnInitialize: restored view | IsViewRestoredFromCache True → End (the list keeps its cached value) | restored → useViewState returns the cached list | `match` | app/src/pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts:27-34; app/src/platform/navigation/hooks.ts:40-61; TST UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:254-258, 418 |
| 066 | ScreenEvent_OnInitialize: Change PIN row | ListClear, then ListAppend { IconId Password, Label ChangePinName } | first row { IconId connect-icon-password, Label 'Change PIN' } | `match` | app/src/pages/PINBiometricsMenu/hooks/pinBiometricsMenuState.ts:16-20; app/src/pages/PINBiometricsMenu/staticEntities.ts:6; TST UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:261-268 |
| 067 | ScreenEvent_OnInitialize: Biometric Login row | when Available: ListAppend { Fingerprint, BiometricLoginName, LabelDescription, useSwitch True, SwitchValue = Client.App_PIN_BiometricEnabled } | when fingerprintReaderAvailable: the same row | `match` | app/src/pages/PINBiometricsMenu/hooks/pinBiometricsMenuState.ts:21-29; app/src/pages/PINBiometricsMenu/staticEntities.ts:10; TST UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:274-284<br>The row never shows on the web (row of AppManager_GetPIN_FingerprintReaderAvailable, U13). |
| 068 | OnClick_MenuOption, Label = ChangePinName | PINChange (Default) | navigate('/UBTConnect/PINChange') | `match` | app/src/pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts:43-44; TST UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:326-329 |
| 069 | OnClick_MenuOption, Label = BiometricLoginName | Client.App_PIN_BiometricEnabled = not Client.App_PIN_BiometricEnabled | clientVar.biometricEnabled.set(!get()) | `match` | app/src/pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts:45-46; TST UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:331-334 |
| 070 | OnClick_MenuOption, otherwise | End | nothing | `match` | app/src/pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts:42-48 |
| 071 | unreachable end nodes of the two screen actions | not connected | not implemented | `n/a` | pack/screens.md PINBiometricsMenu<br>dead in the model |

**Validations**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 072 | validations of the screen | no input widget of the screen; the switch is in Menu_List | none | `match` | pack/screens.md PINBiometricsMenu |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 073 | BR-UBTCON-957 | Change PIN always; Biometric Login only with a reader; dispatch by label; no rebuild on a restored view | the same; the reader is never available on the web (U13) | `match` | app/src/pages/PINBiometricsMenu/hooks/pinBiometricsMenuState.ts:16-31; app/src/pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts:29-48; BR-UBTCON-957 |
| 074 | BR-UBTCON-958 | each click on the Biometric Login row inverts the flag; no confirmation, no PIN, no server call | the same local toggle | `match` | app/src/pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts:45-46; BR-UBTCON-958 |
| 075 | Client.App_PIN_BiometricEnabled (written) | the lock screen reads the flag (BR-UBTCON-949) | the client variable store keeps it; usePinUnlockContent reads it | `match` | app/src/platform/session/session.ts:203-204; app/src/platform/session/usePinUnlockContent.ts:75; BR-UBTCON-949 |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 076 | screen strings (4) | "PIN & Biometrics", "Change PIN", "Biometric Login", "Sign in with Fingerprint or Face Recognition authentication" | the same 4 texts | `match` | app/src/pages/PINBiometricsMenu/PINBiometricsMenuPage.tsx:20; app/src/pages/PINBiometricsMenu/hooks/pinBiometricsMenuState.ts:8, 11, 25 |

All 4 strings of the screen match.

### 2.3 TermsAndPoliciesMenu

Route `/UBTConnect/TermsAndPoliciesMenu`, screen component `app/src/pages/TermsAndPoliciesMenu/TermsAndPoliciesMenuPage.tsx`,
flows in `app/src/pages/TermsAndPoliciesMenu/hooks/useTermsAndPoliciesMenu.ts`. Board: `build`, built (V4c, user
2026-10-14).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 077 | roles Registered, UBTOne_User | a signed-in user opens the screen (checkRegistered) | MEMBER_ROUTE (member, enforce) | `match` | app/src/app/routes.ts:40, 43-56; TST UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js:528-529 |
| 078 | input parameters | none | route inputs [] | `match` | app/src/app/routes.generated.ts:55; TST UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js:64 |
| 079 | lifecycle | OnInitialize → ScreenEvent_OnInitialize; nothing else | useViewState initial values on the first render | `match` | app/src/pages/TermsAndPoliciesMenu/hooks/useTermsAndPoliciesMenu.ts:50-56; TST UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js:503 |
| 080 | locals TermsAndConditionsName, PrivacyPolicyName | "Terms and Conditions", "Privacy Policy"; never changed | TERMS_AND_CONDITIONS_NAME, PRIVACY_POLICY_NAME | `match` | app/src/pages/TermsAndPoliciesMenu/hooks/useTermsAndPoliciesMenu.ts:15-16; TST UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js:15-20 |
| 081 | local LocalCacheControl_Policies (CacheControl_Policies, isFetched) | default record (every Policy_Url ""), isFetched False; the view cache keeps it | useViewState('LocalCacheControl_Policies', { null, false }) | `match` | app/src/pages/TermsAndPoliciesMenu/hooks/useTermsAndPoliciesMenu.ts:26-34, 53-56 |
| 082 | local MenuOptionList | the view cache keeps it | useViewState('MenuOptionList', MENU_OPTIONS) | `match` | app/src/pages/TermsAndPoliciesMenu/hooks/useTermsAndPoliciesMenu.ts:52 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 083 | CacheControl_Policies (UBTConnect_Utils), no inputs | CacheKey "" → Client.UniqueCacheKey (BR-C2UTL-301); TimeToLiveSeconds 7200; hit → Result with the object; miss → GetCacheInfo, put in the cache, Result (BR-C2UTL-300) | PoliciesCacheControl: cacheKey '' → UniqueCacheKey, TTL 7200; CacheControl hit or miss | `match` | app/src/pages/TermsAndPoliciesMenu/TermsAndPoliciesMenuPage.tsx:32; app/src/legacy/os/cache/PoliciesCacheControl/PoliciesCacheControl.tsx:25-58; app/src/legacy/os/cache/CacheControl/CacheControl.tsx:31-43; TST UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js:253-262 |
| 084 | server side of the policies | data action GetCacheInfo of UBTConnect_Utils CacheControl_Policies on a cache miss | fetchPolicies → CacheControl_Policies/DataActionGetCacheInfo, answered by the shared recorded handler | `mock-only` | app/src/api/app/repository.ts:51-55; app/src/pages/TermsAndPoliciesMenu/mocks.ts:3-7<br>Production needs the data action GetCacheInfo of UBTConnect_Utils CacheControl_Policies. |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 085 | Layout_DetailPage and title | default inputs; title text "Terms & Policies" | DetailLayout without alignTitleLeft; headerTitle "Terms & Policies" | `match` | app/src/pages/TermsAndPoliciesMenu/TermsAndPoliciesMenuPage.tsx:21-24; TST UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js:139, 155-156 |
| 086 | SkeletonSection | In_IsLoading = not LocalCacheControl_Policies.isFetched | Skeleton isLoading = !localPolicies.isFetched | `match` | app/src/pages/TermsAndPoliciesMenu/TermsAndPoliciesMenuPage.tsx:26; app/src/pages/TermsAndPoliciesMenu/hooks/useTermsAndPoliciesMenu.ts:77; TST UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js:163 |
| 087 | Menu_List In_MenuSection and event | { HasSeparator: False, MenuOptions: MenuOptionList }; OnClick_MenuOption passes the row record | menuSection { HasSeparator: false, MenuOptions }; onClickMenuOption(option) | `match` | app/src/pages/TermsAndPoliciesMenu/TermsAndPoliciesMenuPage.tsx:27; app/src/pages/TermsAndPoliciesMenu/hooks/useTermsAndPoliciesMenu.ts:57-60; TST UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js:183-205 |
| 088 | Placeholder_CommonUI_Inside_Layout: CommonUI_InsideLayout | no inputs (defaults); Bottom empty | CommonUiLayout with default props; no bottom | `match` | app/src/pages/TermsAndPoliciesMenu/TermsAndPoliciesMenuPage.tsx:30; TST UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js:230-235 |
| 089 | CacheControl_Policies beside the layout | on Result → CacheControl_PoliciesResult | PoliciesCacheControl onResult={onPoliciesResult} | `match` | app/src/pages/TermsAndPoliciesMenu/TermsAndPoliciesMenuPage.tsx:32; TST UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js:253-262 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 090 | ScreenEvent_OnInitialize | IsViewRestoredFromCache True → End; else ListClear, ListAppend { Contacts, TermsAndConditionsName }, ListAppend2 { BookClosed, PrivacyPolicyName } | useViewState keeps the cached list; else MENU_OPTIONS with the same two rows | `match` | app/src/pages/TermsAndPoliciesMenu/hooks/useTermsAndPoliciesMenu.ts:21-24, 50-52; app/src/pages/TermsAndPoliciesMenu/staticEntities.ts:5; TST UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js:309-351, 540 |
| 091 | CacheControl_PoliciesResult | LocalCacheControl_Policies.CacheControl_Policies = response; isFetched = True | setLocalPolicies({ CacheControl_Policies: policies, isFetched: true }) | `match` | app/src/pages/TermsAndPoliciesMenu/hooks/useTermsAndPoliciesMenu.ts:62-64; TST UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js:436-456 |
| 092 | OnClick_MenuOption, Label = TermsAndConditionsName | OpenPolicy(PolicyInformation_TermsAndConditions, "This policy couldn't be found.") | openPolicy(PolicyInformation_TermsAndConditions, POLICY_NOT_FOUND) | `match` | app/src/pages/TermsAndPoliciesMenu/hooks/useTermsAndPoliciesMenu.ts:70-71; TST UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js:391-395 |
| 093 | OnClick_MenuOption, Label = PrivacyPolicyName | OpenPolicy(PolicyInformation_PrivacyPolicy, "This policy couldn't be found.") | openPolicy(PolicyInformation_PrivacyPolicy, POLICY_NOT_FOUND) | `match` | app/src/pages/TermsAndPoliciesMenu/hooks/useTermsAndPoliciesMenu.ts:72-73; TST UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js:400-404 |
| 094 | OnClick_MenuOption, otherwise | End | nothing | `match` | app/src/pages/TermsAndPoliciesMenu/hooks/useTermsAndPoliciesMenu.ts:68-75 |
| 095 | unreachable end nodes of the three screen actions | not connected | not implemented | `n/a` | pack/screens.md TermsAndPoliciesMenu<br>dead in the model |

**Validations**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 096 | validations of the screen | no input widget, no validation | none | `match` | pack/screens.md TermsAndPoliciesMenu |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 097 | BR-UBTCON-964 | two rows built on initialize, not rebuilt on a restored view; skeleton until fetched; dispatch by label to OpenPolicy | the same | `match` | app/src/pages/TermsAndPoliciesMenu/hooks/useTermsAndPoliciesMenu.ts:21-24, 50-77; BR-UBTCON-964 |
| 098 | OpenPolicy (UBTConnect_Utils; BR-C2UTL-170, BR-C2UTL-171) | Policy_Url "" → error message ErrorMessage; else CanOpenApplicationPolicyDirectlyViaUrl → new tab, otherwise the ApplicationPolicies viewer | url '' → showFeedbackMessage(errorMessage, error); else canOpen (no Cordova on the web) → jSUtils_PageOpenInNewTab | `match` | app/src/lib/ubtConnectUtils/actions.ts:339-360; BR-C2UTL-170; BR-C2UTL-171<br>The native viewer branch runs only with Cordova. The policies are empty before the cache answers, so a click then shows the error, as in the original. |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 099 | screen strings (4) | "Terms & Policies", "Terms and Conditions", "Privacy Policy", "This policy couldn't be found." | the same 4 texts | `match` | app/src/pages/TermsAndPoliciesMenu/TermsAndPoliciesMenuPage.tsx:24; app/src/pages/TermsAndPoliciesMenu/hooks/useTermsAndPoliciesMenu.ts:15-16; app/src/lib/ubtConnectUtils/actions.ts:339 |

All 4 strings of the screen match, with the error text that the screen passes to OpenPolicy.

## 3. Blocks of the flow

### 3.1 Menu_List

Component `app/src/components/menu/MenuList/MenuList.tsx`. Menu, PINBiometricsMenu, TermsAndPoliciesMenu and
ContactUsMenu (flow App_Menu_ContactUs) use the block. The block has no string literal: every text comes from
`In_MenuSection`. The KB page `ui/menu.md` gives the block no rule of its own.

**Inputs, events and locals**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 100 | input In_MenuSection (UI_MenuSection, mandatory) | record defaults: SectionTitle "", HasSeparator True, MenuOptions empty | inMenuSection default {}; HasSeparator ?? true, SectionTitle ?? '', MenuOptions ?? [] | `match` | app/src/components/menu/MenuList/MenuList.tsx:49-50, 63, 70; TST UBTConnect.model.js:13555-13563; TST UBTConnect.App_Menu.Menu_List.mvc.js:11-14 |
| 101 | event OnClick_MenuOption(UI_ListMenuOption), mandatory | the row record as the block holds it | onOnClickMenuOption(option) | `match` | app/src/components/menu/MenuList/MenuList.tsx:30-31, 97 |
| 102 | UI_ListMenuOption record defaults | IconRight ChevronRight; texts ""; Booleans False | IconRight ?? ChevronRight; ?? '' and ?? false | `match` | app/src/components/menu/MenuList/MenuList.tsx:89, 91, 109, 114-115, 121-122; TST UBTConnect.model.js:3177-3212 |
| 103 | lifecycle and locals | none | a local copy of SwitchValue only (see the Switch1 row) | `match` | pack/blocks.md Menu_List; app/src/components/menu/MenuList/MenuList.tsx:51-59 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 104 | If HasSeparator | SectionSeparator | `(HasSeparator ?? true) && <SectionSeparator />` | `match` | app/src/components/menu/MenuList/MenuList.tsx:63; TST UBTConnect.App_Menu.Menu_List.mvc.js:137-141 |
| 105 | outer CustomContainer | Background Neutral0; PaddingSize HorizontalSizeId Base | the same options | `match` | app/src/components/menu/MenuList/MenuList.tsx:64-69; TST UBTConnect.App_Menu.Menu_List.mvc.js:158-175 |
| 106 | If SectionTitle <> "" | title container: padding vertical Small; Neutral8, ExtraSmall, SemiBold; expression SectionTitle | the same container and expression | `match` | app/src/components/menu/MenuList/MenuList.tsx:70-79; TST UBTConnect.App_Menu.Menu_List.mvc.js:193-219 |
| 107 | List of MenuOptions | source In_MenuSection.MenuOptions; style "list list-group"; animateItems | OSList source options, className "list list-group", animateItems | `match` | app/src/components/menu/MenuList/MenuList.tsx:80-86; TST UBTConnect.App_Menu.Menu_List.mvc.js:246-253 |
| 108 | row SkeletonSection | In_IsLoading = Current.IsLoading | Skeleton isLoading={row.IsLoading ?? false} | `match` | app/src/components/menu/MenuList/MenuList.tsx:91; TST UBTConnect.App_Menu.Menu_List.mvc.js:265 |
| 109 | row CustomContainer and click | padding Small; bottom border Neutral3, Small; Clicked → OnClick_MenuOption(Current) | the same options; onClicked raises the event with the current row | `match` | app/src/components/menu/MenuList/MenuList.tsx:92-98; TST UBTConnect.App_Menu.Menu_List.mvc.js:290-319 |
| 110 | Columns_Three | ExpandMiddle, spacing Small, VerticalAlign Center | ColumnsThree with the same options | `match` | app/src/components/menu/MenuList/MenuList.tsx:99-104; TST UBTConnect.App_Menu.Menu_List.mvc.js:338-346 |
| 111 | left Icon | IconId; Neutral9; Base_24 | Icon with the same inputs | `match` | app/src/components/menu/MenuList/MenuList.tsx:105-111; TST UBTConnect.App_Menu.Menu_List.mvc.js:365-371 |
| 112 | middle texts | Label (Neutral9, ExtraSmall, Regular); If LabelDescription <> "": description (Neutral6, ExtraSmall, Regular) | the same two CustomText and condition | `match` | app/src/components/menu/MenuList/MenuList.tsx:112-119; TST UBTConnect.App_Menu.Menu_List.mvc.js:390-445 |
| 113 | right SkeletonSection | In_IsLoading = Current.IconRightLoading | Skeleton isLoading={row.IconRightLoading ?? false} | `match` | app/src/components/menu/MenuList/MenuList.tsx:121; TST UBTConnect.App_Menu.Menu_List.mvc.js:458 |
| 114 | If useSwitch: Switch1 | container "item-switch" and Switch "switch"; the variable is Current.SwitchValue of the block's copy of the input | div.item-switch with input.switch; onChange keeps the value in the block state until a new In_MenuSection comes | `match` | app/src/components/menu/MenuList/MenuList.tsx:51-59, 122-139; TST UBTConnect.App_Menu.Menu_List.mvc.js:477-495 |
| 115 | else If IconRightText <> "" | IconText (IsIconOnRight, spacing Small; Neutral8, ExtraSmall, Regular) with Icon (IconRight, Neutral7, Base_24) | the same IconText and Icon | `match` | app/src/components/menu/MenuList/MenuList.tsx:140-152; TST UBTConnect.App_Menu.Menu_List.mvc.js:505-545 |
| 116 | else Icon | Icon (IconRight, Neutral7, Base_24) | the same Icon | `match` | app/src/components/menu/MenuList/MenuList.tsx:153-155; TST UBTConnect.App_Menu.Menu_List.mvc.js:560-570 |

**Block actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 117 | OnClick_MenuOption (block action) | only triggers the event with the row | the click handler calls onOnClickMenuOption | `match` | app/src/components/menu/MenuList/MenuList.tsx:97; TST UBTConnect.App_Menu.Menu_List.mvc.js:312-319, 640-642 |

**Validations**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 118 | Switch1 | a switch with no Mandatory and no validation node | a checkbox with no validation | `match` | app/src/components/menu/MenuList/MenuList.tsx:125-136; TST UBTConnect.App_Menu.Menu_List.mvc.js:30 |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 119 | rules of the block | none: pure presentation; the callers own the row semantics (KB ui/menu.md) | no logic beyond the switch copy | `match` | app/src/components/menu/MenuList/MenuList.tsx:41-48; KB ui/menu.md Menu_List |

### 3.2 Blocks of other flows

- CacheControl_UserInfo_Wrapper (App_Cache, `../_shared/pack/blocks.md`): Menu uses its Result (row
  008, `match`). GetUserInformation_Wrapper_Assign has its own row in
  §4.
- Dialog_CustomChoice (App_Common_Blocks_PopupDialogs, `../_shared/pack/blocks.md`): Menu has two instances (rows
  025 and 026, `match`). The block itself has a row in §4.
- BottomBarMenu, CommonUI_InsideLayout and Version (App_Common, `../App_Common/pack/blocks.md`): Menu passes the
  arguments of rows 023, 024 and
  022 (`match`). TermsAndPoliciesMenu passes no input to CommonUI_InsideLayout (row
  088, `match`). The report of App_Common checks the
  behaviour.
- SectionSeparator (App_Common_Blocks): Menu_List shows it when `HasSeparator` is True (row
  104, `match`). Not checked here.
- Transitive through CommonUI_InsideLayout and BottomBarMenu: App_IconBadge, Block_PINUnlock and
  Block_PINUnlock_ContentWrapper (App_PIN), BottomBarContent, HandleOnResumeOpenLink (Legacy_Share),
  OfflineDataSyncEvents, Policy_Checker (App_Policies), UnsupportedVersion with its four variants, and
  WelcomeToConnect. Not checked here.

## 4. Shared blocks and actions

The flow-level rows (screen `-` in `checklist.json`):

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 120 | ConfirmAction (NavigationHandler), call sites of the flow | ConfirmAction(ActionConfirmationDialogWidgetId = PopUp_Logout.Id / Popup_SubmitPhotoRequest.Id); IsConfirmed | confirmAction('PopUp_Logout' / 'Popup_SubmitPhotoRequest') resolves true on Yes, false on No | `match` | app/src/pages/Menu/hooks/useMenu.ts:52, 78; app/src/platform/feedback/dialogs/confirmAction.ts:11-20; app/src/platform/feedback/dialogs/useActionConfirmation.ts:22-62<br>The internals of ConfirmAction and ActionConfirmationDialog are shared; this row checks the calls only. |
| 121 | Dialog_CustomChoice (App_Common_Blocks_PopupDialogs) | container "connect-dialog-popup connect-dialog-popup--custom-choice"; ActionConfirmationDialog; header and body CustomContainers; four placeholders | ChoiceDialog: the same classes, containers and placeholders | `match` | app/src/components/ui/Dialog/ChoiceDialog.tsx:25-73; ../_shared/pack/blocks.md Dialog_CustomChoice |
| 122 | GetUserInformation_Wrapper_Assign (App_Cache; BR-UBTCON-530) | the wrapper copies HasPoliciesToAccept to Client.App_Policies_HasPolicyToAccept, then raises Result | UserInfoCache calls getUserInformation_Wrapper_Assign, then onResult | `match` | app/src/platform/session/UserInfoCache/UserInfoCache.tsx:23-26; app/src/lib/ubtConnect/actions.ts:114-117; BR-UBTCON-530 |

Not checked here (shared, in `../_shared/pack/actions.md`): Directory_Updates_RefreshBottomBarCount,
ExitApplicationForWebViewUpdate, GetURLFromEventDataURL, Get_IsUnsupportedSystem, Get_IsUnsupportedVersion,
OfflineDataSync, OfflineDataSyncConfiguration, OpenGooglePlay_Chrome, OpenGooglePlay_UBTConnect,
OpenGooglePlay_WebView, ScrollTop, SetResumeLoginLink, Try_GetIsSupportedVersion, Upgrade_UBTConnect and
Upgrade_WebView. They run inside the transitive blocks of §3.2. The service action
Get_UI_UpdateItems_UnreadCount_All (Connect_Updates_CS) runs through BottomBarMenu. The report of App_Common checks it.

Not checked here (referenced UI blocks of `UBTConnectLibrary` and `UBTConnect_Utils`): the internals of
Layout_DetailPage, CustomContainer, CustomText, Columns_Two, Columns_Three, Icon, IconText, SkeletonSection and
UBT_LazyImage. The rows above check the arguments that the flow passes.

Client variables of `pack/data.md`: the flow reads and writes `App_PIN_BiometricEnabled` (rows
061 and
075). The wrapper row of this section covers
`App_Policies_HasPolicyToAccept`. `App_Policies_RedirectURL`, the three `Directory_Updates_UnreadCount*` variables and
`IsNavigateToHomeOnBack` belong to Policy_Checker, BottomBarMenu and CommonUI_InsideLayout.

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| F1 | minor | Menu / view cache (row 006) | The runtime restores the screen variables of a view from the view cache (U19, P-BACK). TST Menu has no `IsViewRestoredFromCache` check: OnInitialize rebuilds MenuOptionList, and `LocalCacheControl_UserInformation` keeps its restored value. React keeps no Menu variable in the view cache. A Back to Menu starts with `isFetched` false, so the header shows the skeleton until CacheControl_UserInfo answers. TermsAndPoliciesMenu and PINBiometricsMenu use `useViewState`. No decision names the difference. | `app/src/pages/Menu/hooks/menuState.ts:17`; `app/src/pages/Menu/hooks/useMenu.ts:35` | Q2. Keep `user` and `isFetched` with `useViewState`, and rebuild MenuOptionList on every mount, as TST does. |
| F2 | info | PINBiometricsMenu / route meta (row 054) | The doc comment of `RouteMeta.lock` says that a screen without CommonUI gets `ignore`. PINBiometricsMenu has no CommonUI and gets `enforce`. The code is correct: the app-start PIN check of TST applies to every screen, and `useNoCommonUi` removes the lock host. Only the comment is wrong. | `app/src/app/routes.ts:28-29, 51` | Change the comment: `ignore` is for a screen whose CommonUI ignores the lock screen, and for Splash. A screen without CommonUI keeps `enforce` for the app-start check. |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

No difference. The DEV pack and the TST compiled code agree on every checked item of these files:
`UBTConnect.App_Menu.Menu.mvc.js`, `UBTConnect.App_Menu.PINBiometricsMenu.mvc.js`,
`UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js`, `UBTConnect.App_Menu.Menu_List.mvc.js`.

Two notes on how to read the pack:
- The DEV pack writes `transition=Inherited` for the menu navigations. TST compiles them as
  `TransitionAnimation.Default`.
- The DEV pack draws the merge node of CacheControl_UserInfo_WrapperResult as `continues at <node@3200,5029>`. In TST,
  the assign of the user record runs after the If, in both branches (`Menu.mvc.js:817-834`).

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| - | - | - | - | no difference found |

### 6.2 KB pages vs TST (for the KB owner)

The KB pages come from DEV (2026-10-05). In these two places a KB page disagrees with the DEV pack and with TST. React
follows TST in each place.

| Id | KB text | TST (compiled code) | Source |
|---|---|---|---|
| K1 | BR-UBTCON-957, outcomes: the Biometric Login row has "a switch bound to `Client.App_PIN_BiometricEnabled`" | OnInitialize copies the client variable into `SwitchValue` once. The switch writes the copy of the input in Menu_List. The row click inverts the client variable. Nothing binds the switch to the client variable. | `UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:283, 331-334`; `UBTConnect.App_Menu.Menu_List.mvc.js:488-495` |
| K2 | `ui/menu.md`, Menu: "Inputs: `UserInformation` (Directory_UserCurrent, event payload), `Id`" | The screen has no input parameter. `UserInformation` and `Id` are inputs of the screen actions CacheControl_UserInfo_WrapperResult and OnClick_MenuOption. | `UBTConnect.App_Menu.Menu.mvc.js:62, 867-875, 1060-1067` |

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | What does the OnException of the UI flow App_Menu do (row 040)? React sends every unhandled error of the Menu actions to the App_Common flow handler. | A failed RequestPhotoUpdate or logout shows the message of that handler. U10 says that the fetched flows delegate to App_Common, but nobody fetched App_Menu. | (a) The review pass reads the flow handler on DEV with the MCP. (b) Fetch `UBTConnect.App_Menu.controller.js` from TST read-only, as U10 proposes. | (b), then (a) when TST does not serve the file: TST is the source of truth. |
| Q2 | Keep the Menu variables in the view cache (F1)? | U19 (P-BACK) asks that Back restores a screen without a loading state. A code comment says that the Menu variables stay out of the view cache, but no decision names it. | (a) Keep `user` and `isFetched` with `useViewState`. (b) Keep the code and record the reason on the board or in a CR. | (a): the runtime restores the screen variables, and the two other screens of the flow already do it. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 22 | 21 | 1 | 0 | 0 | 0 | 0 | 0 |
| data | 10 | 6 | 0 | 0 | 1 | 3 | 0 | 0 |
| ui | 36 | 36 | 0 | 0 | 0 | 0 | 0 | 0 |
| actions | 29 | 26 | 0 | 0 | 0 | 0 | 3 | 0 |
| validations | 4 | 4 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 17 | 14 | 0 | 0 | 2 | 1 | 0 | 0 |
| strings | 4 | 4 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | **122** | **111** | **1** | **0** | **3** | **4** | **3** | **0** |

## 9. Follow-up pass (2026-10-27)

Rows settled or sharpened after the user answers of 2026-10-27 and the TST files that `tst_source.py` reads. A row that stays `unclear` has a new question that names what settles it. Every row below has `verified: "live"`.

| Row | Old verdict | New verdict | Evidence |
|---|---|---|---|
| App_Menu-040 | `unclear` | `match` | migration/shell/sources/UBTConnect.App_Menu.controller.js:12-16; app/src/pages/Menu/hooks/useMenu.ts:89-92; app/src/legacy/os/exceptions.ts:55-69; U10 (migration/app-shell.spec.md:367) |
