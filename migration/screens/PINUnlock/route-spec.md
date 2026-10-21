# Route spec: PINUnlock

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/PINUnlock` with inputs none [pack.md; routes.generated.ts:81] |
| Tier | lite |
| Captured | 2026-10-14, viewport 390×844, states: default, loading, offline [analysis/states.json] |
| Shared/shell components used | shell `dialogs/BlockPinUnlock` (App_PIN.Block_PINUnlock: Layout_LoginFlow markup, `src/shared/UBTConnect/Block_PINUnlock_ContentWrapper` with PinUnlock_MobileWrapper, Pincode_Unlock, PinCode, CacheControl_Policies inside), `src/shared/UBTConnect/CommonUI_InsideLayout`, `src/shared/UBTJavaScriptUtils/lib` `useScreenController_NavigateToPage`; shell `pin.ts` (through Pincode_Unlock), `resume.ts` `getResumeLoginLink`, `session.ts` `getClientVar`, `navigation` `useOsNavigate`, `replaceOnUpcomingNavigation`, `paths.ts` `PATHS` |
| Screen-specific components | none (the screen instance of `App_PIN.Block_PINUnlock` is the shell's `BlockPinUnlock`, CR-PINUnlock-2 applied) |

## Specification
### Structure
- Screen root: one `App_PIN.Block_PINUnlock` (`$b1`) with `In_ForceVisible: true` and its `Unlock` event; its
  `Placeholder_CommonUI_Inside_Layout` holds `App_Common.CommonUI_InsideLayout` (`$b2`) with `In_IgnoreLockScreen: true`,
  `In_IgnorePolicy: true` [UBTConnect.App_PIN.PINUnlock.mvc.js:128-186; dom/default.html:5, 270-300].
- Block_PINUnlock = `Layouts.Layout_LoginFlow` (`b1-$b1`) with `In_HasOverlay = UseOverlay` (local, default True),
  `In_ExtendedClass "ubt-lock-screen connect-legacy-compatibily-containter"`, `In_IsCommonBlock` (default False → the
  `LayoutRuntime_Top` `b1-b1-$b1` is rendered) [Block_PINUnlock.mvc.js:8-30, 160-170; dom/default.html:6-8]. Content:
  `IsUnsupportedSystem` → unsupported card, else `Block_PINUnlock_ContentWrapper` (`b1-$b4`) with `ShowForgotPIN`,
  `ShowPolicy`, `In_ForceVisible`, `UseOverlay` [Block_PINUnlock.mvc.js:186-300]. Header placeholder empty [:186].
- The shell's `BlockPinUnlock` takes the block inputs (`inForceVisible`, `inIsCommonBlock`, `onUnlock`,
  `placeholderCommonUIInsideLayout`) and the unsupported-system branch [app/src/shell/dialogs/BlockPinUnlock.tsx]; the
  screen renders `<BlockPinUnlock id="$b1" inForceVisible onUnlock placeholderCommonUIInsideLayout>` (CR-PINUnlock-2 applied).
- Everything inside the ContentWrapper (keypad, 4 dots, Forgot PIN, policy links, CacheControl_Policies,
  PreventBackNavigation) is the shared block [dom/default.html:36-268; shared README].

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| SynchAppContext, AfterInitialize, Sync_Info_GetMain, GetUserInformation, GetNumberUnreadMessages, CacheableHouseholds, CacheableMapEntities | server/service | app start (shell `startApp`) [pack Calls #1-7; call-sites.md] | shell | shell | shell mocks | shell |
| `UBTConnect_Utils/CacheControl/CacheControl_Policies/DataActionGetCacheInfo` | data action | CacheControl_Policies fetch at start (inside the shared ContentWrapper) [pack Calls #8] | shared | policy links | shared mocks | real, loading (skeleton), error (offline) [dom/loading.html:215] |

The screen itself makes no call [PINUnlock.mvc.js:210 `dataFetchActionNames = []`].

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| Pincode_Unlock (shared) | initialize | In_ForceVisible True → `PIN_IsLocked = True` (shell `lock()`) [Pincode_Unlock.tsx; UBT_AppManager.PIN.Pincode_Unlock.mvc.js:684-760] | — | — | — |
| Keypad (shared) | 4th digit | shell `verifyPin`; wrong PIN / unknown user → shared ContentWrapper messages | — | unknown user → PINRegister (shared) | shared toasts |
| Block_PINUnlock | `Unlock` (correct PIN) | `GetResumeLoginLink`; `ReplaceOnUpcomingNavigation`; link ≠ "" → navigate to it, else `UBTConnect.LastURL` [PINUnlock.mvc.js:228-249]; `NavigateToPage(…, True)` = replace [knowledge/shell-facts.md:39] | — | resume link, else LastURL; empty LastURL → `/UBTConnect/HomeFeed` (Q1 answered B; the shell redirect writes LastURL, CR-PINUnlock-1) | — |
| Forgot PIN / policy links | click | shared ContentWrapper | — | `/UBTConnect/Login?In_IsFromResetPIN=True` (shared) | — |
| Back | device/browser back | PreventBackNavigation inside PinCode (shared) [dom/default.html:262-266] | — | — | — |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | signed in, local PIN, tab not unlocked; policies loaded | yes | `mocksession=locked`, real |
| loading | CacheControl_Policies data not yet loaded: `ubt-skeleton-section`, no policy links [dom/loading.html:215] | yes | loading |
| offline | same markup as loading [diff loading/offline: none] | yes | error |
| unsupported system | `IsUnsupportedSystem` [Block_PINUnlock.mvc.js:188] | no | `mock=unsupported-browser` (U16; shell BlockPinUnlock, CR-PINUnlock-2 applied) |

## Patterns used
- P-PARAMS: navigation after unlock through `useOsNavigate` with `replace` (no inputs).
- P-STATES: loading/offline from the shared CacheControl_Policies skeleton; unsupported card from the shell block (U16 scenario).
- P-CALLS: the screen adds no call; app-start and CacheControl calls come from shell/shared, as in `calls.json`.
- P-DIALOG: PIN error feedback through the shared ContentWrapper (`feedbackMessageAutoClose`).
- P-BACK: back prevention through the shared PinCode's PreventBackNavigation.

## Feature flags
- `clientVar:App_PIN_BiometricEnabled`:
  - MCP unavailable.
  - Decision: not a flag (false positive, user setting for biometric unlock; user, 2026-10-14).
  - The shared blocks implement it as in the original (no route branch) [pack Feature flags].

## Unclear points
- Where to go after unlock when `UBTConnect.LastURL` is empty in the mock app (only Splash/FCM write it) → Q1 (decision
  answered by user: B, return to the opened screen as TST does; CR-PINUnlock-1 applied)
- Rendering Block_PINUnlock with In_ForceVisible/Unlock/placeholder, which the shell's BlockPinUnlock does not support;
  unsupported-system card → Q2 (decision answered by user: A)
- Parity differences that come from the replayed capture → Q3 (decision answered by user: A, accepted as
  exemptions). The differences are:
  - broken logo image;
  - dropped svg preserveAspectRatio;
  - links without href;
  - transition/device classes of the loading/offline captures;
  - masked digits.

## Decisions to confirm
- Q1 (user: B) applied:
  - The shell's PIN redirect writes `UBTConnect.LastURL` = the opened path (CR-PINUnlock-1 applied).
  - After unlock, the screen goes to the resume link, else `UBTConnect.LastURL`, else HomeFeed.
  - The HomeFeed fallback for an empty LastURL is not in the original code.
  - Example: Profile → PINUnlock → Profile.
- Q2 (user: A) superseded by CR-PINUnlock-2 (applied 2026-10-14):
  - The screen renders the shell's `BlockPinUnlock` (In_ForceVisible, Unlock, CommonUI placeholder,
    LayoutRuntime_Top).
  - The unsupported-system card is the U16 mock scenario `?mock=unsupported-browser`.
- Q3 (user: A) applied: parity exemptions reused (CAPTURE-SVG-PRESERVEASPECTRATIO, CAPTURE-LOGO-REPLAY,
  CAPTURE-LOADING-BODYCLASS, CAPTURE-LOADING-TRANSITION) and two added for the PIN keypad
  (CAPTURE-LOGO-REPLAY-PINCODE: header sizes/offsets after the broken logo; CAPTURE-LINK-HREF-CURSOR-PINCODE: Forgot
  PIN and policy links) [migration/parity-exemptions.json]. Masked keypad digits need no entry (parity masks them).
- `ScreenController_NavigateToPage(URL, True)` is the shared `useScreenController_NavigateToPage` (CR-Splash-2).
  - It is a replace navigation inside the SPA.
  - A same-origin href in LastURL becomes its path + search + hash (Splash stores the href).
- Policy links and Forgot PIN behave as the shared ContentWrapper (policy links do nothing yet; shared README).

## Change requests
- CR-PINUnlock-1: shell PIN redirect also writes `UBTConnect.LastURL` (applied by the foundation owner, Q1)
- CR-PINUnlock-2: `BlockPinUnlock` supports In_ForceVisible, In_IsCommonBlock, Unlock, CommonUI placeholder, unsupported card (applied 2026-10-14)
- CR-PINUnlock-3: `CommonUiHost` mounts no stand-in parts when the screen renders CommonUI_InsideLayout (applied)
- CR-PINUnlock-4: Cacheable call order (resolved in parity: calls that start within 2 ms compare as an unordered set)

## Parity
Run 2026-10-14 after the last change (`route.py parity PINUnlock --app http://localhost:5173`, `mocksession=locked`).

| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real | 0 | 0 | 0 | 0 | 0 (pixel 0.00%, call 0) | ignoreSubtrees×2, CAPTURE-LOGO-REPLAY-PINCODE×7, CAPTURE-LINK-HREF-CURSOR-PINCODE×6 |
| loading | loading | 0 | 0 | 0 | 0 | 0 (pixel 0.00%) | ignoreSubtrees×2, LOADING-TRANSITION×1, LOADING-BODYCLASS×1, LOGO-REPLAY-PINCODE×7, LINK-HREF-CURSOR-PINCODE×2 |
| offline | error | 0 | 0 | 0 | 0 | 0 (pixel 0.00%) | same as loading |

## Server-side notes
- PIN check is device-local in the original (LocalPin) and mocked by the shell; no server action in this route.
- A real backend must not trust the client's unlock state for any data access (session authorization stays server-side).
