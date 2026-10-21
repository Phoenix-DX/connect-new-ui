# Route spec: PINRegister

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/PINRegister` with inputs none [pack.md; PINRegister.mvc.js: no input attributes, :13 only local `UseOverlay`] |
| Tier | lite |
| Captured | 2026-10-14, viewport 390×844, states: default, loading, offline [analysis/states.json] |
| Shared/shell components used | `src/shared/UBTConnectLibrary/Layout_LoginFlow`, `src/shared/UBTConnectLibrary/IconText`, `src/shared/UBTConnectLibrary/Icon`, `src/shared/lib/OSLink`, `src/shared/UBTConnect/Block_PINRegister_ContentWrapper` (→ `Pincode_Register` → `PinCode`), `src/shared/UBTConnect/CommonUI_InsideLayout`; shell `signOut` (`src/shell/auth.ts`), `allowUpcomingNavigation` (`src/shell/navigation/navigationGate.ts`), `useOsNavigate`, `PATHS` |
| Screen-specific components | `components/staticEntities.ts` (two static entity identifiers the shared list lacks) |

## Specification
### Structure
Screen `UBTConnect.App_PIN.PINRegister` [PINRegister.mvc.js view :137-286]:
- `Layout_LoginFlow` (`$b1`) with `In_HasOverlay = UseOverlay` (local variable, default True, :13-15) [dom/default.html:5-8].
- `Placeholder_Header`: OutSystems Link (uuid 1, enabled, no URL → `<a data-link href="#">`, :155-178). The Link
  wraps:
  - `ConnectPatterns.IconText` (`$b2`) with Text "Back to login", SpacingSize `UBT_Size.Small`, TextOptions
    (Color Inherit, FontSize Small, FontWeight SemiBold) (:179-200).
  - In the Icon placeholder of the IconText: `ConnectPatterns.Icon` (`$b3`) with In_ColorId Inherit, In_SizeId
    `UBT_IconsSize.Base_24`, In_IconId `UBT_Icons2.ArrowLeftAlt` (:209-215).
  - Captured classes: `gutter-s`, `text-inherit font-semi-bold font-size-s`, `ubt-icon connect-icon-arrow_left_alt
    text-inherit icon-base` [dom/default.html:34-70].
  - The two identifiers missing from the shared static entities are kept in `components/staticEntities.ts` with the
    captured class text (as Login does).
- `Placeholder_Content`: `Block_PINRegister_ContentWrapper` (`$b4`) with UseOverlay = UseOverlay, EnableName True
  (:237-241) [shared; dom/default.html:71+].
- `Placeholder_CommonUI_Inside_Layout`: `CommonUI_InsideLayout` (`$b5`) with In_ShowLockScreen False,
  In_IgnorePolicy True, In_IgnoreLockScreen True (:260-265) [shared; dom/default.html:257-285].
- The shared CommonUI_InsideLayout renders the collapsed shell blocks (OfflineDataSyncEvents →
  OfflineDataSyncCore/NetworkStatusChanged, HandleOnResumeOpenLink →
  AndroidAppLinkOnResumeHandler/DeeplinkHandlerCentral). This screen builds nothing for them [pack.md "Block plan"].

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| SynchAppContext, AfterInitialize, Sync_Info_GetMain, GetUserInformation, GetNumberUnreadMessages, CacheableHouseholds, CacheableMapEntities | server / service API | shell app start (`onApplicationReady`, `cache_UserInfo_GetCallback`, …) [call-sites.md] | as recorded by the shell | none in this screen | shell mocks (`src/shell/mocks.ts`) | shell |
| AppManager_Logout | server (via client action) | header Link OnClick → `OnClick_BackToLogin` [call-sites.md "Declared … not observed"; PINRegister.mvc.js:311-345] | — | none | not observed in the capture; the shell's mock `signOut()` makes no server call (shell spec 10) | — |

The screen has no data action of its own (`dataFetchActionNames = []`, :309), so `api.ts`/`mocks.ts` are empty.
GetUserInformation on load also feeds EnableName (shared wrapper, `getUserInformation()`).

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| Screen | OnInitialize / OnReady | none (`onInitializeEventHandler = null`, `onReadyEventHandler = null`, :363-364) | — | — | — |
| Header Link "Back to login" | OnClick | `OnClick_BackToLogin` (:311-345): AllowUpcomingNavigation; AppManager_Logout; Destination `/UBTConnect/Login` (no inputs) | AppManager_Logout (mock: `signOut()`) | `/UBTConnect/Login` | — |
| PIN keypad, register/confirm, errors, success | — | shared Block_PINRegister_ContentWrapper / Pincode_Register (knowledge/auth.md "PINRegister") | — | resume link, LastURL or HomeFeed | error toast |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | signed in, no local PIN (`mocksession=nopin`), first PIN entry | yes | real |
| loading | same markup while the app-start calls are pending | yes | loading |
| offline | same markup, calls fail | yes | error |
| confirmation step, errors, success | second entry / rule error / mismatch | no (shared blocks, tested there) | — |

## Patterns used
- P-PARAMS: no inputs; navigation to Login through `useOsNavigate` with the original path (`PATHS.login`).
- P-STATES: one markup for default/loading/offline as captured; no NotCaptured part in this screen.
- P-CALLS: no call of its own; app-start calls stay with the shell; the logout call is the shell's `signOut()`.
- P-DATA / P-MOCKS: no adapter or handler needed (`dataFetchActionNames = []`); `api.ts`/`mocks.ts` say so.
- P-DIALOG: feedback toasts come from the shared wrapper (`feedbackMessageAutoClose`), nothing in the screen.

## Feature flags
- `clientVar:App_PIN_BiometricEnabled`: MCP unavailable.
  - Decision: not a flag (false positive). It is a user setting for biometric unlock, kept in a client variable. The
    behavior is built as in the original (user, 2026-10-14).
  - Implemented as: nothing in this screen reads it. The shared PIN blocks read it, and the fingerprint is hidden on
    the web, U13.

## Unclear points
- The handler of the header Link is in the compiled view (:155-178 → `onClick_BackToLogin$Action`). This settles the
  note of knowledge/auth.md that says "trigger not identified".
- Every other behaviour lives in shared/shell blocks (no question).
- The default capture lacks body `osx` and `slide-from-right-enter-done` (capture timing, as loading/offline).
  - Q1 answered (user, 2026-10-14): a generic class exemption for animation-state classes on every route, and a
    read-only recapture.
  - The recapture still has body `phone portrait is-ltr` with no OS class.
  - The user then chose to exempt the OS classes and port GetOS (user, 2026-10-14).
  - In migration/parity-exemptions.json, the exemption is `ignoreClasses`. The OS class
    comes from the user agent in `src/lib/device.ts` (`osToken`).

## Decisions to confirm
- "Back to login" runs the shell's `signOut()` for `AppManager_Logout`, as the Login route does (Login Q2).
  - `signOut()` also runs Cache_InvalidateEverything (Connect_Logout). The AppManager_Logout of the original app does
    not run it alone.
  - The mock sends no `ActionAppManager_Logout` request (shell spec 10).
  - Not observed in the capture (no click).
  - [PINRegister.mvc.js:325-333; src/shell/auth.ts:37-50]
- `AllowUpcomingNavigation` is `allowUpcomingNavigation` of `src/shell/navigation` (exported since CR-Splash-2); the
  navigation to Login is a push (plain Destination, no ReplaceOnUpcomingNavigation). [PINRegister.mvc.js:325-336]
  After registration the shared ContentWrapper goes to the resume link or LastURL through
  `useScreenController_NavigateToPage(…, True)` (CR-Splash-2; Block_PINRegister_ContentWrapper.mvc.js:636-649).
- Static entity identifiers `UBT_Icons2.ArrowLeftAlt` = `connect-icon-arrow_left_alt` and
  `UBT_IconsSize.Base_24` = `icon-base` are read from the captured classes [dom/default.html:47].
- `migration/parity-exemptions.json` has the parity exemption `CAPTURE-LINK-HREF-CURSOR-PINREGISTER` (style, header link
  and its IconText: cursor auto in the replayed reference, pointer in the app). It is the same capture-replay artifact that the user
  accepted for Login (Q6) and PINUnlock (Q3). [migration/parity-exemptions.json; dom/default.html:35]
- On any route, parity does not compare these classes (Q1 and the follow-up, user 2026-10-14):
  - the body OS class (`osx`, `windows`, `ios`…)
  - the screen transition classes (`slide-from-*`, `*-enter/exit(-active|-done)`)

  The React app sets the OS class from the user agent, like GetOS. [src/lib/device.ts; migration/parity-exemptions.json ignoreClasses]

## Change requests
- none

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real | 0 | 0 | 0 | 0 | 0 | ignoreSubtrees, ignoreClasses, CAPTURE-LOGO-REPLAY-PINCODE, CAPTURE-LINK-HREF-CURSOR-PINREGISTER |
| loading | loading | 0 | 0 | 0 | 0 | 0 | ignoreSubtrees, ignoreClasses, CAPTURE-LOGO-REPLAY-PINCODE, CAPTURE-LINK-HREF-CURSOR-PINREGISTER |
| offline | error | 0 | 0 | 0 | 0 | 0 | ignoreSubtrees, ignoreClasses, CAPTURE-LOGO-REPLAY-PINCODE, CAPTURE-LINK-HREF-CURSOR-PINREGISTER |

Pixels 0.00% and calls 0 differences in every state (parity/<state>.json), with the per-screen original stylesheets.
