# Flow report: App_PIN

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 3 (built: 3, PINChange, PINRegister, PINUnlock; not built: none) |
| Own blocks | Block_PINRegister_ContentWrapper, Block_PINUnlock, Block_PINUnlock_ContentWrapper |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/…`, KB page `ui/pin.md` and the rules it names, TST compiled code of the 6 elements and of the `UBT_AppManager` PIN blocks (`tst_source.py`) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 117 · partial 4 · missing 0 · differs 3 · mock-only 1 · n/a 6 · unclear 0 (same as `checklist.json`).
- **F1** (minor): the register block reads the user name from `GetUserInformation_Wrapper`, not from
  `AppManager_GetCachedUserInfo` as TST does.
- **F2** (info): "Back to login" on PINRegister runs the full `Connect_Logout` (cache clear, ADR-10 clear). TST runs
  `AppManager_Logout` only.
- **F3** (info): PINUnlock goes to HomeFeed when `LastURL` is empty. TST has no such branch. The decision record is
  not on the board, and two sources name it differently.
- **F4** (info): after a correct PIN, React sets `PIN_HasUnlocked` and `PIN_IsLocked` before it raises
  `PinUnlockSuccess`. TST raises the event first.
- **F5** (info): `AppManager_SetPIN_IsRegistering` of `Pincode_Register` is not ported. Its only reader runs in the
  native app only.
- Status: in React a user can register a first PIN, unlock with the PIN (with Forgot PIN and the policy links), and
  change the PIN from the menu in two steps. Biometric unlock stays hidden on the web by decision U13. No finding
  blocks the flow.

## 2. Screens

### 2.1 PINChange

Route `/UBTConnect/PINChange`, page `app/src/pages/PINChange/PINChangePage.tsx`, flows in
`app/src/pages/PINChange/hooks/usePINChange.ts`. Board: `build`, built (V4c, user 2026-10-14).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | roles Registered, UBTOne_User | A signed-in user opens the screen | MEMBER_ROUTE (member, enforce): the screen is not in ROUTE_META | `match` | app/src/app/routes.ts:40-57 |
| 002 | input parameters | none | route inputs [] | `match` | app/src/app/routes.generated.ts:67 |
| 003 | lifecycle | no OnInitialize, OnReady or OnDestroy | no lifecycle effect in the page or hook | `match` | app/src/pages/PINChange/hooks/usePINChange.ts:17-22 |
| 004 | local isScreenUnlocked (Boolean, False) | False shows the unlock step, True the register step | useState(false) | `match` | app/src/pages/PINChange/hooks/usePINChange.ts:25; BR-UBTCON-956 |
| 005 | local UseOverlay (Boolean, True) | passed to the layout and to both wrappers | const useOverlay = true | `match` | app/src/pages/PINChange/PINChangePage.tsx:31 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 006 | data actions and aggregates | none | none | `match` | pack/screens.md PINChange; app/src/pages/PINChange/hooks/usePINChange.ts:17 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 007 | Layout_LoginFlow In_ExtendedClass, In_HasOverlay | In_ExtendedClass = If(isScreenUnlocked,"","ubt-lock-screen"), In_HasOverlay = UseOverlay | LoginLayout inHasOverlay={useOverlay}, inExtendedClass by isScreenUnlocked | `match` | app/src/pages/PINChange/PINChangePage.tsx:37-40; TST UBTConnect.App_PIN.PINChange.mvc.js:134-140 |
| 008 | Placeholder_Header link + IconText "Change PIN" | link onclick OnClick_BackToLogin; IconText SpacingSize Small, Color Inherit, FontSize Small, SemiBold | OSLink onClick=onClickBackToLogin; IconText with the same options | `match` | app/src/pages/PINChange/PINChangePage.tsx:42-52; TST PINChange.mvc.js:181-192 |
| 009 | Icon in IconText | ArrowLeftAlt, Base_24, Inherit | Icon ArrowLeftAlt, Base_24, Inherit | `match` | app/src/pages/PINChange/PINChangePage.tsx:53-58; TST PINChange.mvc.js:211-215 |
| 010 | If isScreenUnlocked (#isScreenUnlocked2), True branch | Block_PINRegister_ContentWrapper(RegisterText "Enter new PIN", ConfirmText "Confirm new PIN", isFromMenu True, UseOverlay) | PinRegisterContent with the same inputs; usePinRegisterContent({ isFromMenu: true, enabled: isScreenUnlocked }) | `match` | app/src/pages/PINChange/PINChangePage.tsx:34, 63-74; TST PINChange.mvc.js:240-245 |
| 011 | If isScreenUnlocked, False branch | Block_PINUnlock_ContentWrapper(In_ForceVisible True, isFromMenu True, ShowForgotPIN False, ShowNeedHelp False, ShowPolicy False, UnlockText "Enter your current PIN", UseOverlay) | PinUnlockContentContainer with the same inputs | `match` | app/src/pages/PINChange/PINChangePage.tsx:76-87; TST PINChange.mvc.js:264-272 |
| 012 | Placeholder_CommonUI_Inside_Layout | empty: the screen has no CommonUI_InsideLayout | useNoCommonUi(): no CommonUI stand-in and no app lock host on the screen | `match` | app/src/pages/PINChange/PINChangePage.tsx:30; app/src/platform/navigation/AppLockHost.tsx:9-12; TST PINChange.mvc.js:319 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 013 | OnClick_BackToLogin | AllowUpcomingNavigation, then Menu (transition Inherited = Default) | allowUpcomingNavigation(), then navigate(/UBTConnect/Menu) with the default transition | `match` | app/src/pages/PINChange/hooks/usePINChange.ts:27-30; TST PINChange.mvc.js:360-363 |
| 014 | Block_PINUnlockUnlock (event Unlock) | isScreenUnlocked = True, then FeedbackMessage_AutoClose("Please provide a new PIN", Success) | setIsScreenUnlocked(true), then feedbackMessageAutoClose(success, same text and defaults) | `match` | app/src/pages/PINChange/hooks/usePINChange.ts:32-43; TST PINChange.mvc.js:386-389 |
| 015 | event NavigateTo_PINRegister of the unlock wrapper | runs Block_PINUnlockUnlock, as Unlock does | onNavigateToPINRegister={onUnlock} | `match` | app/src/pages/PINChange/PINChangePage.tsx:85-86; TST PINChange.mvc.js:277-300<br>Original behaviour that React keeps: after the error "No matching user. Please Register a PIN", the screen opens the new-PIN step. |
| 016 | unreachable end node of Block_PINUnlockUnlock | not connected | not implemented | `n/a` | pack/screens.md PINChange<br>dead in the model |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 017 | BR-UBTCON-956 | two steps on one screen: unlock with the current PIN, then register the new PIN | isScreenUnlocked chooses the step; a new mount starts at step one | `match` | app/src/pages/PINChange/PINChangePage.tsx:62-88; BR-UBTCON-956 |
| 018 | BR-UBTCON-949 (from the menu) | isFromMenu True: no biometric unlock | showFingerprintReader = App_PIN_BiometricEnabled and not isFromMenu | `match` | app/src/platform/session/usePinUnlockContent.ts:75; BR-UBTCON-949 |
| 019 | BR-UBTCON-950 (from the menu) | ShowForgotPIN False: no Forgot PIN link on the change screen | showForgotPIN={false} | `match` | app/src/pages/PINChange/PINChangePage.tsx:78; BR-UBTCON-950 |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 020 | screen strings (5) | "Change PIN", "Enter new PIN", "Confirm new PIN", "Enter your current PIN", "Please provide a new PIN" | the same 5 texts | `match` | app/src/pages/PINChange/PINChangePage.tsx:45, 66-67, 82; app/src/pages/PINChange/hooks/usePINChange.ts:36 |

All 5 strings of the screen match.

### 2.2 PINRegister

Route `/UBTConnect/PINRegister`, page `app/src/pages/PINRegister/PINRegisterPage.tsx`, flow in
`app/src/pages/PINRegister/hooks/usePINRegister.ts`. Board: `build`, built (V1, D3(a), user 2026-10-14).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 021 | roles Registered, UBTOne_User | A signed-in user opens the screen | { access: 'member', lock: 'ignore' } | `match` | app/src/app/routes.ts:46<br>lock 'ignore' agrees with CommonUI_InsideLayout In_IgnoreLockScreen True. |
| 022 | input parameters | none | route inputs [] | `match` | app/src/app/routes.generated.ts:10 |
| 023 | lifecycle | none | no lifecycle effect in the page or hook | `match` | app/src/pages/PINRegister/hooks/usePINRegister.ts:11-14 |
| 024 | local UseOverlay (Boolean, True) | passed to the layout and to the wrapper | const useOverlay = true | `match` | app/src/pages/PINRegister/PINRegisterPage.tsx:19 |
| 025 | entry to the screen | Splash or Login opens it when PIN_Check.NeedRegister (BR-UBTCON-308); the unlock error "User not found" opens it (BR-UBTCON-948) | signIn returns PATHS.pinRegister when pinCheck().needRegister; BlockPinUnlock navigates to PATHS.pinRegister | `match` | app/src/platform/session/auth.ts:40-43; app/src/platform/feedback/dialogs/BlockPinUnlock.tsx:90-92 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 026 | data actions and aggregates | none | none | `match` | pack/screens.md PINRegister |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 027 | Layout_LoginFlow In_HasOverlay | In_HasOverlay = UseOverlay, no extended class | LoginLayout inHasOverlay={useOverlay} | `match` | app/src/pages/PINRegister/PINRegisterPage.tsx:24-26; TST UBTConnect.App_PIN.PINRegister.mvc.js:137 |
| 028 | Placeholder_Header link + IconText "Back to login" + Icon | link onclick OnClick_BackToLogin; IconText Small spacing, Inherit, Small, SemiBold; Icon ArrowLeftAlt Base_24 Inherit | OSLink + IconText + Icon with the same options | `match` | app/src/pages/PINRegister/PINRegisterPage.tsx:28-50; TST PINRegister.mvc.js:180, 212 |
| 029 | Block_PINRegister_ContentWrapper | EnableName True, UseOverlay = UseOverlay | PinRegisterContent enableName, useOverlay, userName from usePinRegisterContent({ enableName: true }) | `match` | app/src/pages/PINRegister/PINRegisterPage.tsx:21, 53-62; TST PINRegister.mvc.js:239 |
| 030 | CommonUI_InsideLayout | In_ShowLockScreen False, In_IgnorePolicy True, In_IgnoreLockScreen True | CommonUiLayout inShowLockScreen={false} inIgnorePolicy inIgnoreLockScreen | `match` | app/src/pages/PINRegister/PINRegisterPage.tsx:64-66; TST PINRegister.mvc.js:261 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 031 | OnClick_BackToLogin | AllowUpcomingNavigation, AppManager_Logout (awaited), then Login (Default) | allowUpcomingNavigation(), await signOut(), then navigate(PATHS.login). signOut is Connect_Logout: Cache_InvalidateEverything, ADR-10 clears, then the AppManager_Logout steps | `partial` | app/src/pages/PINRegister/hooks/usePINRegister.ts:18-22; app/src/platform/session/auth.ts:67-95; TST PINRegister.mvc.js:323-331<br>**F2** (info) |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 032 | BR-UBTCON-955 | the screen is left only by logging out; it is exempt from the policy and lock-screen gates | Back to login signs out; CommonUiLayout ignores the policy and the lock screen; route lock 'ignore' | `match` | app/src/pages/PINRegister/PINRegisterPage.tsx:64-66; app/src/app/routes.ts:46; BR-UBTCON-955 |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 033 | screen strings (1) | "Back to login" | the same text | `match` | app/src/pages/PINRegister/PINRegisterPage.tsx:35 |

The string of the screen matches.

### 2.3 PINUnlock

Route `/UBTConnect/PINUnlock`, page `app/src/pages/PINUnlock/PINUnlockPage.tsx`, flow in
`app/src/pages/PINUnlock/hooks/usePINUnlock.ts`. Board: `build`, built (V1, D3(a), user 2026-10-14).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 034 | roles Registered, UBTOne_User | A signed-in user opens the screen | { access: 'member', lock: 'ignore' } | `match` | app/src/app/routes.ts:45 |
| 035 | input parameters | none | route inputs [] | `match` | app/src/app/routes.generated.ts:81 |
| 036 | lifecycle | none | no lifecycle effect in the page or hook | `match` | app/src/pages/PINUnlock/hooks/usePINUnlock.ts:12-17 |
| 037 | entry to the screen | the app start sends a signed-in user who has not unlocked here; Splash keeps the opened URL in Client.LastURL | RouteGuard redirects to PATHS.pinUnlock on the first check and writes UBTConnect.LastURL | `match` | app/src/app/RouteGuard.tsx:41, 50-55; CR-PINUnlock-1; migration/knowledge/shell-observed.md:34-37 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 038 | data actions and aggregates | none | none | `match` | pack/screens.md PINUnlock |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 039 | Block_PINUnlock | In_ForceVisible True; on Unlock → Block_PINUnlockUnlock | BlockPinUnlock id $b1 inForceVisible onUnlock={onUnlock} | `match` | app/src/pages/PINUnlock/PINUnlockPage.tsx:11-14; TST UBTConnect.App_PIN.PINUnlock.mvc.js:127-128 |
| 040 | Placeholder_CommonUI_Inside_Layout: CommonUI_InsideLayout | In_IgnoreLockScreen True, In_IgnorePolicy True | CommonUiLayout inIgnoreLockScreen inIgnorePolicy | `match` | app/src/pages/PINUnlock/PINUnlockPage.tsx:15; TST PINUnlock.mvc.js:162-164 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 041 | Block_PINUnlockUnlock: resume link | GetResumeLoginLink, ReplaceOnUpcomingNavigation; URL <> "" → ScreenController_NavigateToPage(URL, True) | getResumeLoginLink(), replaceOnUpcomingNavigation(); link <> '' → screenController_NavigateToPage(link, true) | `match` | app/src/pages/PINUnlock/hooks/usePINUnlock.ts:22-28; TST PINUnlock.mvc.js:226-238 |
| 042 | Block_PINUnlockUnlock: last URL | else ScreenController_NavigateToPage(Client.LastURL, True) | LastURL <> '' → screenController_NavigateToPage(lastUrl, true) | `match` | app/src/pages/PINUnlock/hooks/usePINUnlock.ts:29-30; TST PINUnlock.mvc.js:242-244 |
| 043 | Block_PINUnlockUnlock: empty LastURL | no fallback: ScreenController_NavigateToPage with an empty URL (BR-UBTCON-953 null-sensitivity) | LastURL = '' → navigate(PATHS.home, replace) | `differs` | app/src/pages/PINUnlock/hooks/usePINUnlock.ts:15-16, 31; migration/change-requests/CR-PINUnlock-1.md (Workaround); BR-UBTCON-953<br>**F3** (info) |
| 044 | unreachable end nodes of Block_PINUnlockUnlock (2) | not connected | not implemented | `n/a` | pack/screens.md PINUnlock<br>dead in the model |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 045 | BR-UBTCON-953 | after the unlock: the parked deep link, else the last URL, both replacing the lock screen in history | the same order; replaceOnUpcomingNavigation and replace true | `match` | app/src/pages/PINUnlock/hooks/usePINUnlock.ts:22-32; BR-UBTCON-953<br>The empty-LastURL fallback is a separate row (F3). |
| 046 | Client.LastURL (read) | read by Block_PINUnlockUnlock | clientVar.lastUrl.get(); default '' | `match` | app/src/pages/PINUnlock/hooks/usePINUnlock.ts:29; app/src/platform/session/clientVars.ts:14 |

The screen has no string of its own; its texts come from Block_PINUnlock and Block_PINUnlock_ContentWrapper (§3).

## 3. Blocks of the flow

### 3.1 Block_PINRegister_ContentWrapper

Used by PINRegister (`EnableName` True) and PINChange (`isFromMenu` True). React: the view
`app/src/components/auth/PinRegisterContent/PinRegisterContent.tsx`, the flows
`app/src/platform/session/usePinRegisterContent.ts`, and the nested `Pincode_Register` flows
`app/src/platform/session/usePinCodeRegister.ts`. The rows of `Pincode_Register` and `PinCode` (module
`UBT_AppManager`) use the KB rules `BR-UAM-*` and the TST compiled code.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 047 | input parameters | UseOverlay = True, isFromMenu, RegisterText = "Register a PIN code", ConfirmText = "Confirm PIN code", EnableName | props with the same defaults (isFromMenu and enableName False) | `match` | app/src/components/auth/PinRegisterContent/PinRegisterContent.tsx:46-53; TST UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc.js model |
| 048 | local UserName | Text, set on initialize when EnableName | useState('') in usePinRegisterContent | `match` | app/src/platform/session/usePinRegisterContent.ts:42 |
| 049 | lifecycle OnInitialize → ScreenEvent_OnInitialize | runs when the block mounts | useEffect that waits for enabled (PINChange mounts the block after the unlock) | `match` | app/src/platform/session/usePinRegisterContent.ts:85-95 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 050 | AppManager_GetCachedUserInfo (UBT_AppManager) in OnInitialize | EnableName → UserName = FirstName + " " + LastName of the cached AppManager user record (synchronous, local) | getUserInformation(): GetUserInformation_Wrapper, Directory_UserCurrent FirstName + LastName, asynchronous, a server GetUserInformation on a cache miss | `partial` | app/src/platform/session/usePinRegisterContent.ts:87-95; app/src/platform/session/userInfo.ts:30-46; app/src/platform/session/cachedUserInfo.ts:36; TST Block_PINRegister_ContentWrapper.mvc.js:575-579<br>**F1** (minor) |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 051 | Pincode_Register (UBT_AppManager.PIN) | In_AllowBackNavigation = isFromMenu, In_ExtendedClasses = "connect-pin-screen" + If(UseOverlay," ubt-pin-overlay",""), In_PinLength = 4; events PinRegistrationSuccess, PinRegistrationError | PinCodeRegister with the same inputs; the events come from usePinCodeRegister | `match` | app/src/components/auth/PinRegisterContent/PinRegisterContent.tsx:77-85; TST Block_PINRegister_ContentWrapper.mvc.js:202-206 |
| 052 | TitlePlaceholder: If UseOverlay | ConnectLogoWhite, else ConnectLogo; style login-screen__connect-logo | img with the same class and the logo by useOverlay | `match` | app/src/components/auth/PinRegisterContent/PinRegisterContent.tsx:86-92; TST Block_PINRegister_ContentWrapper.mvc.js:258-260 |
| 053 | RegistrationText: If EnableName (#ShowName) | CustomText "Welcome " + UserName (Inherit, Base, SemiBold) | welcome(2): CustomText with the same text and options | `match` | app/src/components/auth/PinRegisterContent/PinRegisterContent.tsx:61-68, 95; TST Block_PINRegister_ContentWrapper.mvc.js:283-292 |
| 054 | RegistrationText: CustomText RegisterText | FontWeight = If(EnableName, Regular, SemiBold) | textOptions with the same FontWeight rule | `match` | app/src/components/auth/PinRegisterContent/PinRegisterContent.tsx:69-73, 96; TST Block_PINRegister_ContentWrapper.mvc.js:322-329 |
| 055 | ConfirmationText: If EnableName (#ShowName2) + CustomText ConfirmText | the same pair as RegistrationText, with ConfirmText | welcome(4) + CustomText confirmText | `match` | app/src/components/auth/PinRegisterContent/PinRegisterContent.tsx:99-104; TST Block_PINRegister_ContentWrapper.mvc.js:350-396 |
| 056 | ErasePlaceholder Icon | Backspace, Display_36, Inherit | Icon Backspace, Display_36, Inherit | `match` | app/src/components/auth/PinRegisterContent/PinRegisterContent.tsx:105-112 |
| 057 | ContentPlaceholder: If isFromMenu (#ShowNeeHelp) | True: empty; False: CustomContainer (Neutral10) "Need help? " + link "Contact Us" (font-regular text-underline) → ContactUsMenu | !isFromMenu → CustomContainer with the same text and link | `match` | app/src/components/auth/PinRegisterContent/PinRegisterContent.tsx:113-126; TST Block_PINRegister_ContentWrapper.mvc.js:442-482<br>The KB page ui/pin.md says the opposite; see section 6. |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 058 | Event_Pincode_RegisterPinRegistrationError | FeedbackMessage_AutoClose(ErrorMessage, Error) | onPinRegistrationError → feedbackMessageAutoClose(error) | `match` | app/src/platform/session/usePinRegisterContent.ts:73-83; TST Block_PINRegister_ContentWrapper.mvc.js:539 |
| 059 | Event_Pincode_RegisterPinRegistrationSuccess: first step | ReplaceOnUpcomingNavigation on every path | replaceOnUpcomingNavigation() first | `match` | app/src/platform/session/usePinRegisterContent.ts:45; TST Block_PINRegister_ContentWrapper.mvc.js:610 |
| 060 | PinRegistrationSuccess: If isFromMenu | FeedbackMessage_AutoClose("Your PIN has been changed.", Success), then Menu (SlideFromRight) | the same message, then navigate(/UBTConnect/Menu, SlideFromRight) | `match` | app/src/platform/session/usePinRegisterContent.ts:46-57; TST Block_PINRegister_ContentWrapper.mvc.js:615-619 |
| 061 | PinRegistrationSuccess: not from the menu, resume link | GetResumeLoginLink; Client.IsNavigateToHomeOnBack = True; URL <> "" → ScreenController_NavigateToPage(URL, True) | getResumeLoginLink(); setClientVar(IsNavigateToHomeOnBack, true); link → screenController_NavigateToPage(link, true) | `match` | app/src/platform/session/usePinRegisterContent.ts:59-64; TST Block_PINRegister_ContentWrapper.mvc.js:622-631 |
| 062 | PinRegistrationSuccess: last URL | Client.LastURL <> "" → ScreenController_NavigateToPage(LastURL, True) | lastUrl <> '' → screenController_NavigateToPage(lastUrl, true) | `match` | app/src/platform/session/usePinRegisterContent.ts:65-69; TST Block_PINRegister_ContentWrapper.mvc.js:640 |
| 063 | PinRegistrationSuccess: home | else Client.IsNavigateToHomeOnBack = False, then HomeFeed (Default) | setClientVar(IsNavigateToHomeOnBack, false), navigate(PATHS.home); the pending replace applies | `match` | app/src/platform/session/usePinRegisterContent.ts:70-71; app/src/platform/navigation/osNavigate.ts:62-64; TST Block_PINRegister_ContentWrapper.mvc.js:647-651 |
| 064 | unreachable end nodes (3 actions) | not connected | not implemented | `n/a` | pack/blocks.md Block_PINRegister_ContentWrapper<br>dead in the model |

**Validations**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 065 | BR-UBTCON-947 PIN length | In_PinLength = 4 for register and confirm | inPinLength={4} | `match` | app/src/components/auth/PinRegisterContent/PinRegisterContent.tsx:80; BR-UBTCON-947 |
| 066 | Pincode_Register first entry: PIN_ValidateRules (BR-UAM-461, BR-UAM-445, BR-UAM-446, BR-UAM-447) | a calendar year, 3 repeating digits or 3 consecutive digits → PinRegistrationError(rule message); valid → confirm step | pIN_ValidateRules with the same three checks and messages; invalid → onPinRegistrationError(message) | `match` | app/src/platform/session/usePinCodeRegister.ts:59-66; app/src/platform/session/pinRules.ts:18-42 |
| 067 | Pincode_Register confirm step (BR-UAM-462) | another PIN → PinRegistrationError("Confirm PIN does not match Register PIN!"); the block stays on the confirm step | the same message; isFirstUse stays False | `match` | app/src/platform/session/usePinCodeRegister.ts:67-72 |
| 068 | Pincode_Register OnInitialize, signed out (BR-UAM-460) | PinRegistrationError("User not logged in.") | currentUserId() === null → onPinRegistrationError("User not logged in.") | `match` | app/src/platform/session/usePinCodeRegister.ts:45-47; TST UBT_AppManager.PIN.Pincode_Register.mvc.js:436-448 |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 069 | Pincode_Register: AppManager_SetPIN_IsRegistering | True on initialize (signed in), False on destroy | not ported | `partial` | app/src/components/auth/PinCodeRegister/README.md:41-42; TST UBT_AppManager.PIN.Pincode_Register.mvc.js:440-441, 625-626<br>**F5** (info) |
| 070 | Pincode_Register: confirmed PIN (BR-UAM-462) | PIN_Set, PIN_SessionInactivity_Start, AppManager_SetPIN_HasUnlocked(True), then PinRegistrationSuccess | registerPin (store, PIN_HasUnlocked, session event; LockHost restarts the timer), then onPinRegistrationSuccess | `match` | app/src/platform/session/usePinCodeRegister.ts:67-69; app/src/platform/session/pin.ts:25-32 |
| 071 | Pincode_Register: delayed ShowConfirm | DelayChange JavaScript: setTimeout(ShowConfirm, 0); OnDestroy clears it | window.setTimeout(showConfirm, 0); the effect cleanup clears it | `match` | app/src/platform/session/usePinCodeRegister.ts:48-51, 63; TST UBT_AppManager.PIN.Pincode_Register.mvc.js:733-745 |
| 072 | PinCode keypad (BR-UAM-458) | at the fixed length: keep the PIN, reset the input after 500 ms, ReplaceOnUpcomingNavigation, then SetPin | the same steps | `match` | app/src/components/auth/PinCode/PinCode.tsx:131-139, 148 |
| 073 | PinCode In_AllowBackNavigation | False → PreventBackNavigation in the keypad | !inAllowBackNavigation → renderPreventBackNavigation | `match` | app/src/components/auth/PinCode/PinCode.tsx:251; TST UBT_AppManager.PIN.PinCode.mvc.js:951-954 |
| 074 | PIN storage on the device | PIN_Set keeps the PIN in browser localStorage as entered (BR-UAM-455 input ExistingPin) | the PIN is stored hashed with a random salt (SHA-256) | `differs` | app/src/platform/session/pin.ts:5-13, 25-32; decision U5 (user, 2026-10-14), migration/app-shell.spec.md:337, 374-375 |
| 075 | BR-UBTCON-954 | four exits: menu, resume link, last URL, home | the same four exits | `match` | app/src/platform/session/usePinRegisterContent.ts:44-72; BR-UBTCON-954<br>The first outcome of the KB rule names the wrong branch for IsNavigateToHomeOnBack; see section 6. |
| 076 | Client.IsNavigateToHomeOnBack (written) | True before the resume link or last URL; False before HomeFeed | setClientVar('UBTConnect.IsNavigateToHomeOnBack', true/false); default false | `match` | app/src/platform/session/usePinRegisterContent.ts:60, 70; app/src/platform/session/clientVars.ts:15<br>The consumer (BR-UBTCON-312) is CommonUI_InsideLayout, flow App_Common. |
| 077 | Client.LastURL (read) | read in the not-from-menu branch | getClientVar('UBTConnect.LastURL') | `match` | app/src/platform/session/usePinRegisterContent.ts:65 |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 078 | block strings (6) | "Register a PIN code", "Confirm PIN code", "Welcome ", "Your PIN has been changed.", "Need help? ", "Contact Us" | the same 6 texts | `match` | app/src/components/auth/PinRegisterContent/PinRegisterContent.tsx:50-51, 65, 116, 122; app/src/platform/session/usePinRegisterContent.ts:49 |

All 6 strings of the block match.

### 3.2 Block_PINUnlock

Used by PINUnlock (`In_ForceVisible` True) and by CommonUI_InsideLayout as the lock overlay (`In_IsCommonBlock`
True, `app/src/platform/navigation/LockHost.tsx:42`). React: `app/src/platform/feedback/dialogs/BlockPinUnlock.tsx`.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 079 | input parameters and events | In_ForceVisible, In_IsCommonBlock; event Unlock (mandatory) | props inForceVisible, inIsCommonBlock (default False), onUnlock | `match` | app/src/platform/feedback/dialogs/BlockPinUnlock.tsx:28-47 |
| 080 | locals UseOverlay (True), IsUnsupportedSystem | UseOverlay always True; IsUnsupportedSystem set on initialize | const useOverlay = true; useState(get_IsUnsupportedSystem) | `match` | app/src/platform/feedback/dialogs/BlockPinUnlock.tsx:49-50 |
| 081 | lifecycle OnInitialize | Get_IsUnsupportedSystem → IsUnsupportedSystem | useState initializer, once per mount | `match` | app/src/platform/feedback/dialogs/BlockPinUnlock.tsx:49; TST UBTConnect.App_PIN.Block_PINUnlock.mvc.js:374-378 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 082 | Layout_LoginFlow | In_ExtendedClass "ubt-lock-screen connect-legacy-compatibily-containter", In_HasOverlay = UseOverlay, In_IsCommonBlock | the layout markup inline with the same classes; LayoutRuntimeTop only when not inIsCommonBlock | `match` | app/src/platform/feedback/dialogs/BlockPinUnlock.tsx:54-60; TST Block_PINUnlock.mvc.js:162-166 |
| 083 | If IsUnsupportedSystem, True branch | container ubt-layout--login__content__unsupported-card > CustomContainer (Neutral0 background, horizontal padding ExtraLarge, horizontal margin Base, border) > UnsupportedVersion_Wrapper | the same container, CustomContainer options (radius Large) and UnsupportedVersionWrapper | `match` | app/src/platform/feedback/dialogs/BlockPinUnlock.tsx:68-81; TST Block_PINUnlock.mvc.js:185-205 |
| 084 | If IsUnsupportedSystem, False branch | Block_PINUnlock_ContentWrapper(In_ForceVisible, ShowForgotPIN True, ShowPolicy True, UseOverlay) | PinUnlockContentContainer with the same inputs | `match` | app/src/platform/feedback/dialogs/BlockPinUnlock.tsx:82-94; TST Block_PINUnlock.mvc.js:267-275 |
| 085 | Placeholder_CommonUI_Inside_Layout (placeholder-def) | the screen fills it | placeholderCommonUIInsideLayout | `match` | app/src/platform/feedback/dialogs/BlockPinUnlock.tsx:96-98 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 086 | on Unlock of the wrapper → Unlock | the block raises its Unlock event | onUnlock={onUnlock} | `match` | app/src/platform/feedback/dialogs/BlockPinUnlock.tsx:89 |
| 087 | Block_PINUnlock_ContentWrapperNavigateTo_PINRegist | PINRegister (Default) | navigate(PATHS.pinRegister) | `match` | app/src/platform/feedback/dialogs/BlockPinUnlock.tsx:90-92; TST Block_PINUnlock.mvc.js:402 |
| 088 | unreachable end node of ScreenEvent_OnInitialize | not connected | not implemented | `n/a` | pack/blocks.md Block_PINUnlock<br>dead in the model |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 089 | BR-UBTCON-952 | unsupported app or browser version → the upgrade notice | the card replaces the keypad, as in TST | `match` | app/src/platform/feedback/dialogs/BlockPinUnlock.tsx:68-94; TST Block_PINUnlock.mvc.js:185, 267; BR-UBTCON-952<br>The KB rule says the keypad stays; TST and the DEV pack do not render it. See section 6. |
| 090 | Get_IsUnsupportedSystem (BR-UBTCON-232) | Out_IsUnsupportedAppVersion or Out_IsUnsupportedBrowserVersion | the same expression; the browser flag is a mock scenario only (U16) | `match` | app/src/lib/ubtConnect/unsupportedVersion.ts:21-34; BR-UBTCON-232; decision U16, migration/app-shell.spec.md:383 |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 091 | block strings (1) | "ubt-lock-screen connect-legacy-compatibily-containter" | the same class text | `match` | app/src/platform/feedback/dialogs/BlockPinUnlock.tsx:57 |

### 3.3 Block_PINUnlock_ContentWrapper

Used by Block_PINUnlock and PINChange. React: the container
`app/src/platform/feedback/dialogs/PinUnlockContentContainer.tsx`, the view
`app/src/components/auth/PinUnlockContent/PinUnlockContent.tsx`, the flows
`app/src/platform/session/usePinUnlockContent.ts`, and the nested `Pincode_Unlock` flows
`app/src/platform/session/usePinCodeUnlock.ts` with `app/src/platform/session/pin.ts`.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 092 | input parameters | UseOverlay = True, In_ForceVisible, UnlockText = "Enter your PIN code", ShowNeedHelp, isFromMenu, ShowForgotPIN, ShowPolicy (mandatory) | props with the same defaults | `match` | app/src/platform/feedback/dialogs/PinUnlockContentContainer.tsx:32-43; TST UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc.js:32 |
| 093 | events NavigateTo_PINRegister, Unlock | both mandatory | onNavigateToPINRegister, onUnlock | `match` | app/src/platform/feedback/dialogs/PinUnlockContentContainer.tsx:21-24, 41-46 |
| 094 | locals LocalCacheControlPolicies, ShowFingerprintReader | CacheControl_Policies record + isFetched; Boolean | useState { response, isFetched }; useState showFingerprintReader | `match` | app/src/platform/session/usePinUnlockContent.ts:75-79 |
| 095 | lifecycle OnInitialize | ShowFingerprintReader = Client.App_PIN_BiometricEnabled and not isFromMenu | useState initializer with the same expression, once per mount | `match` | app/src/platform/session/usePinUnlockContent.ts:75; TST Block_PINUnlock_ContentWrapper.mvc.js:1014 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 096 | CacheControl_Policies (UBTConnect_Utils.CacheControl) | no inputs (CacheKey "", TimeToLiveSeconds 7200); Result → CacheControl_PoliciesResult; only in the ShowPolicy branch | PoliciesCacheControl (empty cacheKey → UniqueCacheKey, TTL 7200), onResult → onPoliciesResult | `match` | app/src/platform/feedback/dialogs/PinUnlockContentContainer.tsx:62-64; app/src/legacy/os/cache/PoliciesCacheControl/PoliciesCacheControl.tsx:25-58; TST Block_PINUnlock_ContentWrapper.mvc.js:730 |
| 097 | server side of CacheControl_Policies | DataActionGetCacheInfo of UBTConnect_Utils CacheControl_Policies on a cache miss | fetchPolicies → callAction('UBTConnect_Utils', 'CacheControl_Policies/DataActionGetCacheInfo'); the mock answers with a recorded TST response | `mock-only` | app/src/api/app/repository.ts:53-55; app/src/mocks/modules/UBTConnect_Utils/CacheControl_Policies/mocks.ts:6-8<br>Production needs the data action DataActionGetCacheInfo of CacheControl_Policies (module UBTConnect_Utils). |
| 098 | CacheControl_PoliciesResult | LocalCacheControlPolicies.CacheControl_Policies = response; isFetched = True | setPolicies({ response, isFetched: true }) | `match` | app/src/platform/session/usePinUnlockContent.ts:91-93; TST Block_PINUnlock_ContentWrapper.mvc.js:809-812 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 099 | PinUnlock_MobileWrapper (UBT_AppManager_Mobile.Fingerprint) | In_AllowBackNavigation = isFromMenu, In_ExtendedClasses = "connect-pin-screen" + If(UseOverlay," ubt-pin-overlay",""), In_ForceVisible, In_HideFingerprint = not ShowFingerprintReader, In_IsScanFingerprintOnReady = ShowFingerprintReader, In_PinLength = 4 | PinUnlockMobile with the same inputs; In_ForceVisible goes to usePinCodeUnlock (keypad visible, lock) | `match` | app/src/components/auth/PinUnlockContent/PinUnlockContent.tsx:109-122; app/src/platform/feedback/dialogs/PinUnlockContentContainer.tsx:45; TST Block_PINUnlock_ContentWrapper.mvc.js:232-246 |
| 100 | Placeholder_TitlePlaceholder: If UseOverlay | ConnectLogoWhite, else ConnectLogo | the same logo choice | `match` | app/src/components/auth/PinUnlockContent/PinUnlockContent.tsx:123-129 |
| 101 | Placeholder_UnlockText CustomText | UnlockText; Inherit, Base, SemiBold | CustomText with the same options | `match` | app/src/components/auth/PinUnlockContent/PinUnlockContent.tsx:130-140 |
| 102 | Placeholder_FingerprintIcon and Placeholder_EraseButton | Icon Fingerprint (Inherit); Icon Backspace (Display_36, Inherit) | the same two icons | `match` | app/src/components/auth/PinUnlockContent/PinUnlockContent.tsx:141-151 |
| 103 | Placeholder_BottomKeyboard: container visible = ShowForgotPIN | container (border-bottom-s border-color-neutral-0, OSInline) > link OnClick_ForgotPIN > CustomContainer (Neutral0, SemiBold, not underlined) "Forgot PIN?" | showForgotPIN && the same container, link and CustomContainer | `match` | app/src/components/auth/PinUnlockContent/PinUnlockContent.tsx:152-172; TST Block_PINUnlock_ContentWrapper.mvc.js:399-440, 468 |
| 104 | Placeholder_Content: If ShowNeedHelp | container text-align center > CustomContainer (Neutral10) "Need help? " + link "Contact Us" → ContactUsMenu | showNeedHelp → the same container and link | `match` | app/src/components/auth/PinUnlockContent/PinUnlockContent.tsx:174-186; TST Block_PINUnlock_ContentWrapper.mvc.js:481-536 |
| 105 | else If ShowPolicy: SkeletonSection + Columns_Two | SkeletonSection In_IsLoading = not isFetched > Columns_Two | Skeleton isLoading={!isPoliciesFetched} > ColumnsTwo | `match` | app/src/components/auth/PinUnlockContent/PinUnlockContent.tsx:188-196; TST Block_PINUnlock_ContentWrapper.mvc.js:548 |
| 106 | Columns_Two Left: If T&C Policy_Url <> "" | container text-align left > link OnClick_TermsAndCondition > CustomText "Terms & Conditions" (Small, underlined) | policyLink(9, T&C, 'left') | `match` | app/src/components/auth/PinUnlockContent/PinUnlockContent.tsx:94-105, 193; TST Block_PINUnlock_ContentWrapper.mvc.js:588-631 |
| 107 | Columns_Two Right: If Privacy Policy_Url <> "" | container text-align right > link OnClick_PrivacyPolicy > CustomText "Our Privacy Policy" | policyLink(10, Privacy, 'right') | `match` | app/src/components/auth/PinUnlockContent/PinUnlockContent.tsx:94-105, 194; TST Block_PINUnlock_ContentWrapper.mvc.js:693 |
| 108 | fingerprint option of PinUnlock_MobileWrapper | visible when AppManager_GetPIN_FingerprintReaderAvailable and not In_HideFingerprint | the same condition; the reader check returns false in a browser | `differs` | app/src/components/auth/PinUnlockMobile/PinUnlockMobile.tsx:49-51, 99-113; TST UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js:354-362; decision U13 (user, 2026-10-14), migration/app-shell.spec.md:345, 380 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 109 | Event_Pincode_PinUnlockError: "Pin does not match" | FormattedMessage = "Your current PIN is not correct!" → FeedbackMessage_AutoClose(Error) | pinUnlockErrorFeedback → the same text → feedbackMessageAutoClose(error) | `match` | app/src/platform/session/usePinUnlockContent.ts:42-44, 81-83; TST Block_PINUnlock_ContentWrapper.mvc.js:850-856, 880-881 |
| 110 | Event_Pincode_PinUnlockError: "User not found" | "No matching user. Please Register a PIN" (Error), then trigger NavigateTo_PINRegister, end | the same message, then await onNavigateToPINRegister() | `match` | app/src/platform/session/usePinUnlockContent.ts:45-47, 84; TST Block_PINUnlock_ContentWrapper.mvc.js:861-868 |
| 111 | Event_Pincode_PinUnlockError: otherwise | FormattedMessage = ErrorMessage → FeedbackMessage_AutoClose(Error) | the message as received | `match` | app/src/platform/session/usePinUnlockContent.ts:48; TST Block_PINUnlock_ContentWrapper.mvc.js:850, 880-881 |
| 112 | Event_Pincode_PinUnlockSuccess | trigger Unlock | onPinUnlockSuccess: onUnlock | `match` | app/src/platform/feedback/dialogs/PinUnlockContentContainer.tsx:45-47, 69; TST Block_PINUnlock_ContentWrapper.mvc.js:926 |
| 113 | OnClick_ForgotPIN | Login(In_IsFromResetPIN = True), Default | navigate(PATHS.login, { In_IsFromResetPIN: true }) | `match` | app/src/platform/session/usePinUnlockContent.ts:95-97; TST Block_PINUnlock_ContentWrapper.mvc.js:1038 |
| 114 | [DISABLED] AppManager_Logout in OnClick_ForgotPIN | disabled node | not called | `n/a` | pack/blocks.md Block_PINUnlock_ContentWrapper; BR-UBTCON-950<br>dead in the model |
| 115 | OnClick_TermsAndCondition, OnClick_PrivacyPolicy | OpenPolicy(cached policy, "This policy couldn't be found.") | openPolicy(policy, POLICY_NOT_FOUND) | `match` | app/src/platform/session/usePinUnlockContent.ts:98-100; app/src/lib/ubtConnectUtils/actions.ts:350-360; TST Block_PINUnlock_ContentWrapper.mvc.js:955, 985 |
| 116 | unreachable end nodes (6 actions) | not connected | not implemented | `n/a` | pack/blocks.md Block_PINUnlock_ContentWrapper<br>dead in the model |

**Validations**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 117 | BR-UBTCON-947 PIN length (unlock) | In_PinLength = 4 | inPinLength={4} | `match` | app/src/components/auth/PinUnlockContent/PinUnlockContent.tsx:116; BR-UBTCON-947 |
| 118 | Pincode_Unlock PIN check (BR-UAM-455) | no user → "User not logged in."; no stored PIN → "User not found"; blank → "PIN not configured"; mismatch → "Pin does not match"; no attempt counter | verifyPin returns the same four errors; no counter | `match` | app/src/platform/session/pin.ts:34-53 |
| 119 | Pincode_Unlock OnUnlockSuccess order | trigger PinUnlockSuccess first, then PIN_HasUnlocked = True, PIN_IsLocked = False, LastForceVisible = False | verifyPin sets PIN_HasUnlocked and PIN_IsLocked and sends pinVerified, then onPinUnlockSuccess runs | `partial` | app/src/platform/session/pin.ts:49-52; app/src/platform/session/usePinCodeUnlock.ts:61-66; TST UBT_AppManager.PIN.Pincode_Unlock.mvc.js:625-634<br>**F4** (info) |
| 120 | Pincode_Unlock OnInitialize | no user → UserLoggedOut (the wrapper does not handle it); Action_HandleForceVisible: In_ForceVisible → PIN_IsLocked = True | currentUserId() === null → onUserLoggedOut (not passed); inForceVisible → lock() | `match` | app/src/platform/session/usePinCodeUnlock.ts:49-59; TST UBT_AppManager.PIN.Pincode_Unlock.mvc.js:457-461, 704-753 |
| 121 | Pincode_Unlock keypad visibility (BR-UAM-456) | In_ForceVisible, or PIN_SessionInactivity_Use and PIN_IsLocked | isKeypadVisible = inForceVisible or (inactivityUse and isLocked) | `match` | app/src/platform/session/usePinCodeUnlock.ts:76 |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 122 | BR-UBTCON-948 | three error messages; "User not found" sends the user to PIN registration | pinUnlockErrorFeedback and onNavigateToPINRegister | `match` | app/src/platform/session/usePinUnlockContent.ts:41-49, 81-85; BR-UBTCON-948 |
| 123 | BR-UBTCON-949 | biometric unlock only when App_PIN_BiometricEnabled and not isFromMenu | showFingerprintReader with the same expression | `match` | app/src/platform/session/usePinUnlockContent.ts:75; BR-UBTCON-949<br>On the web no reader is available, so the option stays hidden (row of the fingerprint option, U13). |
| 124 | BR-UBTCON-950 | Forgot PIN → Login flagged as a PIN reset; no logout on this path | onForgotPin navigates with In_IsFromResetPIN true; no signOut | `match` | app/src/platform/session/usePinUnlockContent.ts:95-97; BR-UBTCON-950 |
| 125 | BR-UBTCON-951 | ShowPolicy: T&C and Privacy links, each only with its cached URL; skeleton until fetched | the same conditions | `match` | app/src/components/auth/PinUnlockContent/PinUnlockContent.tsx:62, 94-105, 188-197; BR-UBTCON-951 |
| 126 | Client.App_PIN_BiometricEnabled (read) | Boolean, default True | default true | `match` | app/src/platform/session/clientVars.ts:30; pack/data.md |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 127 | block strings (9) | "Enter your PIN code", "Pin does not match", "User not found", "Your current PIN is not correct!", "No matching user. Please Register a PIN", "Forgot PIN?", "Terms & Conditions", "Our Privacy Policy", "border-bottom-s border-color-neutral-0" | the same 9 texts | `match` | app/src/platform/session/usePinUnlockContent.ts:42-46; app/src/components/auth/PinUnlockContent/PinUnlockContent.tsx:73, 154-167, 193-194 |

All 9 strings of the block match, and the error text of OpenPolicy ("This policy couldn't be found.") matches.

### 3.4 Blocks of other flows

- CommonUI_InsideLayout (App_Common, `../App_Common/pack/blocks.md`): PINRegister and PINUnlock pass the arguments
  of rows 030 and 040 (`match`). The behaviour (BR-UBTCON-310 to BR-UBTCON-313) is checked in
  the report of App_Common.
- UnsupportedVersion_Wrapper and UnsupportedVersion, UnsupportedVersion_Browser, UnsupportedVersion_Native,
  UnsupportedVersion_WebView (App_Common): Block_PINUnlock shows the wrapper (row 083, `match`). The cards
  are checked in the report of App_Common.
- HandleOnResumeOpenLink (Legacy_Share): the only reader of `PIN_IsRegistering` (F5). It runs in the native app only
  (decision U14). Checked in the report of Legacy_Share.
- Policy_Checker (App_Policies), OfflineDataSyncEvents and WelcomeToConnect (App_Common): transitive through
  CommonUI_InsideLayout. Not checked here.

## 4. Shared blocks and actions

The flow-level rows (screen `-` in `checklist.json`):

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 128 | GetResumeLoginLink (Share_Utils, own action of the flow; BR-UBTCON-230) | reads window.applinks.resumeLoginLink, then SetResumeLoginLink(""): read once, then cleared | getResumeLoginLink returns the parked link and clears it; setResumeLoginLink parks it (module variable, not window.applinks) | `match` | app/src/platform/session/resume.ts:5-10, 19-24; pack/actions.md GetResumeLoginLink; BR-UBTCON-230 |
| 129 | ScreenController_NavigateToPage (UBTJavaScriptUtils) | internal URL → router goTo with the replace flag; another URL → location.href | useScreenController_NavigateToPage: app path → navigate(path, replace); else changeWindowLocation | `match` | app/src/lib/jsUtils.ts:24-51; migration/knowledge/shell-facts.md:124-131 |
| 130 | AllowUpcomingNavigation, ReplaceOnUpcomingNavigation (NavigationHandler) | skip the navigation handlers once; replace the history entry on the next navigation away | allowUpcomingNavigation; replaceOnUpcomingNavigation (isReplacePending in goTo) | `match` | app/src/platform/navigation/navigationGate.ts:30-32; app/src/platform/navigation/osNavigate.ts:59-71, 92-94 |
| 131 | FeedbackMessage_AutoClose call arguments (UBTJavaScriptUtils) | ("", Message, Type, True, "", 0, False) at every call site of the flow | title '', encodedHtml true, extendedClass '', delayMs 0, useDebounce false at every call site | `match` | app/src/pages/PINChange/hooks/usePINChange.ts:34-42; app/src/platform/session/usePinRegisterContent.ts:47-55, 74-82; app/src/platform/session/usePinUnlockContent.ts:51-61<br>The internals of the action are shared; this row checks the call only. |

Not checked here (shared, in `../_shared/pack/actions.md`): ExitApplicationForWebViewUpdate, GetURLFromEventDataURL,
Get_IsUnsupportedVersion, OfflineDataSync, OfflineDataSyncConfiguration, OpenGooglePlay_Chrome,
OpenGooglePlay_UBTConnect, OpenGooglePlay_WebView, Try_GetIsSupportedVersion, Upgrade_UBTConnect, Upgrade_WebView.
SetResumeLoginLink is part of the GetResumeLoginLink row. Get_IsUnsupportedSystem has its own row in §3.2.

Not checked here (referenced UI blocks of `UBTConnectLibrary`): the internals of Layout_LoginFlow, IconText, Icon,
CustomText, CustomContainer, SkeletonSection and Columns_Two. The rows above check the arguments that the flow passes.
The client variables `App_Policies_HasPolicyToAccept` and `App_Policies_RedirectURL` belong to Policy_Checker
(App_Policies).

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix | Status |
|---|---|---|---|---|---|---|
| F1 | minor | Block_PINRegister_ContentWrapper / ScreenEvent_OnInitialize | TST sets `UserName` from `AppManager_GetCachedUserInfo` (a synchronous, local AppManager record). React reads `getUserInformation()`: the `Directory_UserCurrent` record of the user-info cache. That read is asynchronous, and on a cache miss it calls the server action GetUserInformation. The name can come from another source in production, and the first render shows "Welcome " without the name. The README says the action has no counterpart, but `appManager_GetCachedUserInfo` now exists. | `app/src/platform/session/usePinRegisterContent.ts:87-95`; `app/src/components/auth/PinRegisterContent/README.md:49-51` | Set the name from `appManager_GetCachedUserInfo()` (`app/src/platform/session/cachedUserInfo.ts:36`) on initialize, and update the README. | fixed 2026-10-27 (`fixes/D-forms.md`) |
| F2 | info | PINRegister / OnClick_BackToLogin | TST calls `AppManager_Logout`. React calls `signOut` (`Connect_Logout`): it also runs `Cache_InvalidateEverything` and the ADR-10 clear of the memory cache and the local entities. The user sees no difference. | `app/src/pages/PINRegister/hooks/usePINRegister.ts:18-22`; `app/src/platform/session/auth.ts:67-95` | Q1. | |
| F3 | info | PINUnlock / Block_PINUnlockUnlock | React adds a HomeFeed branch when `LastURL` is empty. TST navigates to the empty URL (BR-UBTCON-953). The code cites "Q1 answered by the user: B"; CR-PINUnlock-1 calls the same branch "Q1 option A, pending". The board row of PINUnlock does not name the decision. | `app/src/pages/PINUnlock/hooks/usePINUnlock.ts:15-16, 31` | Q3. | |
| F4 | info | Block_PINUnlock_ContentWrapper / Pincode_Unlock OnUnlockSuccess | TST raises `PinUnlockSuccess`, then sets `PIN_HasUnlocked` True and `PIN_IsLocked` False. React sets the two flags in `verifyPin`, then raises the event. This report found no visible effect. | `app/src/platform/session/pin.ts:49-52`; `app/src/platform/session/usePinCodeUnlock.ts:61-66` | Write the reason for the order in `pin.ts`, or move the flag writes after the event. | |
| F5 | info | Block_PINRegister_ContentWrapper / Pincode_Register | `AppManager_SetPIN_IsRegistering` (True on initialize, False on destroy) is not ported. The only reader is HandleOnResumeOpenLink, which runs in the native app only (U14). | `app/src/components/auth/PinCodeRegister/README.md:41-42` | Q2. | |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

No difference. The DEV pack and the TST compiled code agree on every checked item of these files:
`UBTConnect.App_PIN.PINChange.mvc.js`, `UBTConnect.App_PIN.PINRegister.mvc.js`, `UBTConnect.App_PIN.PINUnlock.mvc.js`,
`UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc.js`, `UBTConnect.App_PIN.Block_PINUnlock.mvc.js`,
`UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc.js`.

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| - | - | - | - | no difference found |

### 6.2 KB pages vs TST (for the KB owner)

The KB pages come from DEV (2026-10-05). In these four places a KB page disagrees with the DEV pack and with TST. React
follows TST in each place.

| Id | KB text | TST (compiled code) | Source |
|---|---|---|---|
| K1 | `ui/pin.md`, Block_PINRegister_ContentWrapper: "Need help?" → ContactUsMenu only when `isFromMenu` | The link shows only when `isFromMenu` is False | `UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc.js:442-482` |
| K2 | BR-UBTCON-954, first outcome: the menu branch sets `Client.IsNavigateToHomeOnBack = True` | The menu branch sets no flag. The not-from-menu branch sets True, and the home branch sets False | `UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc.js:615-651` |
| K3 | BR-UBTCON-952 and BR-UBTCON-232 (provenance): the notice shows above the keypad and does not block the unlock | When `IsUnsupportedSystem` is True, the card replaces Block_PINUnlock_ContentWrapper | `UBTConnect.App_PIN.Block_PINUnlock.mvc.js:185, 267` |
| K4 | BR-UBTCON-232, title: "the browser (WebView) version" | The condition uses `Out_IsUnsupportedBrowserVersion`; the WebView flag is not used | BR-UBTCON-232 condition |

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | On PINRegister, "Back to login" runs the full `Connect_Logout` in React, but TST runs `AppManager_Logout` only (F2). Do you accept the extra cache clear on this path? | TST is the source of truth for logic. ADR-10 asks to clear all local entities on logout. | (a) Accept, and record that the ADR-10 sign-out also covers this path. (b) Add a sign-out without `Cache_InvalidateEverything` for this path. | (a): the user sees no difference, and ADR-10 already asks for the clear. |
| Q2 | Port `AppManager_SetPIN_IsRegistering` of `Pincode_Register` (F5)? | HandleOnResumeOpenLink reads the flag to park a deep link during the PIN registration (BR-UBTCON-632). | (a) Record it as not needed on the web now; port it with the native link plugins (U14). (b) Port the client variable now. | (a): no reader runs on the web. |
| Q3 | PINUnlock goes to HomeFeed when `LastURL` is empty, but TST has no such branch (F3). Is this the decided behaviour? | The code cites "Q1 answered by the user: B", CR-PINUnlock-1 calls it "option A, pending", and the board does not name it. | (a) Confirm the HomeFeed branch and record it on the PINUnlock row of the board. (b) Follow TST and navigate to the empty URL. | (a): an empty URL gives no defined screen in a single-page app. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 24 | 24 | 0 | 0 | 0 | 0 | 0 | 0 |
| data | 7 | 5 | 1 | 0 | 0 | 1 | 0 | 0 |
| ui | 33 | 32 | 0 | 0 | 1 | 0 | 0 | 0 |
| actions | 27 | 19 | 1 | 0 | 1 | 0 | 6 | 0 |
| validations | 9 | 8 | 1 | 0 | 0 | 0 | 0 | 0 |
| logic | 26 | 24 | 1 | 0 | 1 | 0 | 0 | 0 |
| strings | 5 | 5 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | **131** | **117** | **4** | **0** | **3** | **1** | **6** | **0** |
