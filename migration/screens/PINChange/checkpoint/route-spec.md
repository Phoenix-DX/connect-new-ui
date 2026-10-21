# Route spec: PINChange

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/PINChange` with inputs none [pack.md; mvc.js:61 `setInputs` empty] |
| Tier | lite |
| Captured | 2026-10-15 (capture reused), viewport 390×844, states: default, loading, offline [analysis/states.json] |
| Shared/shell components used | `Layout_LoginFlow` (`src/shared/UBTConnectLibrary/Layout_LoginFlow`), `IconText`, `Icon`, `OSLink`, `Block_PINUnlock_ContentWrapper` and `Block_PINRegister_ContentWrapper` (`src/shared/UBTConnect/`), `useNoCommonUi` (`src/shell/dialogs`), `feedbackMessageAutoClose` (`src/shell/feedback`), `allowUpcomingNavigation` / `useOsNavigate` (`src/shell/navigation`) |
| Screen-specific components | none (`app/src/screens/PINChange/index.tsx` only) |

## Specification
### Structure
- `Layouts.Layout_LoginFlow` `$b1`: In_HasOverlay = UseOverlay (True), In_ExtendedClass = `If(isScreenUnlocked, "", "ubt-lock-screen")` [mvc.js:135-141; dom/default.html:8 `ubt-layout--login ubt-lock-screen`].
- Header: Link → `ConnectPatterns.IconText` `$b2` "Change PIN" (SpacingSize Small; Inherit / Small / SemiBold) with `ConnectPatterns.Icon` `$b3` (ArrowLeftAlt, Inherit, Base_24) [mvc.js:159-238; dom/default.html:33-66].
- Content, locked (captured): `App_PIN.Block_PINUnlock_ContentWrapper` `$b5` with ShowForgotPIN False, In_ForceVisible True, ShowPolicy False, UseOverlay True, UnlockText "Enter your current PIN", ShowNeedHelp False, isFromMenu True [mvc.js:263-320; dom/default.html:71, :119 "Enter your current PIN"].
- Content, unlocked (not captured, Q1): `App_PIN.Block_PINRegister_ContentWrapper` `$b4` with RegisterText "Enter new PIN", ConfirmText "Confirm new PIN", isFromMenu True, UseOverlay True [mvc.js:239-262].
- Placeholder_CommonUI_Inside_Layout is `PlaceholderContent.Empty` [mvc.js:321; dom/default.html `b1-Placeholder_CommonUI_Inside_Layout` empty] → the route calls `useNoCommonUi()` [app/docs/guides/shell.md "Screens without CommonUI"].

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| AppManager_SynchAppContext, AppManager_AfterInitialize, Sync_Info_GetMain, FetchData_CacheableMapEntities, FetchData_CacheableHouseholds | app start (shell) | `onApplicationReady` / AppManager chains [calls.md #1-3, #6-7; pack "Calls"] | shell | none in this route | shell mocks | shell |
| none of its own | — | `dataFetchActionNames = []` [mvc.js:348] | — | — | — | `mocks.ts` exports no handler |

The current-PIN check and the PIN change run in the shared blocks against the shell's mock PIN (`src/shell/pin.ts`, TEST_PIN `1234` with `?mocksession=unlocked`) [shell guide; shared READMEs].

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| Screen | lifecycle | none (OnInitialize/OnReady/OnRender/OnDestroy null) [mvc.js:427-431] | — | — | — |
| Header link | OnClick_BackToLogin | AllowUpcomingNavigation; Destination Menu (Default transition; 4th arg `true` is runtime flow control only: OutSystems.js `function M(e,n,r,i,o){…i\|\|L()…}`) [mvc.js:350-376] | — | `/UBTConnect/Menu` | — |
| Block_PINUnlock_ContentWrapper | Unlock | Block_PINUnlockUnlock: isScreenUnlocked = True; FeedbackMessage_AutoClose("", "Please provide a new PIN", Success, True, "", 0, False) [mvc.js:377-404] | — | — | success toast (shell appends "." as the original) |
| Block_PINUnlock_ContentWrapper | NavigateTo_PINRegister ("User not found") | the same Block_PINUnlockUnlock [mvc.js:279-305] | — | — | as above |
| Block_PINRegister_ContentWrapper | (internal) | PIN registered → "Your PIN has been changed." and Menu (isFromMenu) [shared README] | — | `/UBTConnect/Menu` | success toast |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default (locked) | isScreenUnlocked = False | yes | real |
| loading | same markup during app start | yes | loading |
| offline | same markup, app-start calls fail | yes | error |
| unlocked | isScreenUnlocked = True | no (Q1) | reached by entering TEST_PIN |

## Patterns used
- P-STATES: locked / unlocked branch of `placeholder_Content`; no data loading of its own.
- P-PARAMS: navigation to `/UBTConnect/Menu` through `useOsNavigate` after `allowUpcomingNavigation` (as PINRegister's header link).
- P-DIALOG: success toast through the shell's `feedbackMessageAutoClose`.
- P-CALLS / P-MOCKS: no call of its own; `mocks.ts` exports an empty handler list (as PINUnlock / PINRegister).

## Feature flags
- `clientVar:App_PIN_BiometricEnabled`: MCP unavailable; decision "not a flag (false positive): user setting for biometric unlock" (user, 2026-10-14); implemented inside the shared Block_PINUnlock_ContentWrapper (`ShowFingerprintReader = BiometricEnabled and not isFromMenu`, so always off here because isFromMenu = True); no branch in this route.

## Unclear points
- The unlocked branch (Block_PINRegister_ContentWrapper, Layout without `ubt-lock-screen`, toast) is not captured: entering the real PIN would change the TST PIN → Q1 (decision, recommended A, built with A; pending orchestrator answer).

## Decisions to confirm
- Q1 → A (pending orchestrator answer): the unlocked branch is built from the compiled code with the shared Block_PINRegister_ContentWrapper (mvc.js:239-262, 377-404), not NotCaptured; checked by hand on the dev server (TEST_PIN → "Enter new PIN" → "Confirm new PIN" → Menu with "Your PIN has been changed.").
- `/UBTConnect/Menu` is the destination of the header link and of the shared block's success; the Menu route is not built yet, so the app shows what it shows for an unbuilt route.
- Proposed parity exemption `CAPTURE-LINK-HREF-CURSOR-PINCHANGE` (`migration/screens/PINChange/proposed-exemptions.json`): header link and its IconText cursor auto (replayed capture without href) vs pointer; same artifact as CAPTURE-LINK-HREF-CURSOR-PINREGISTER, whose pathRegex misses `.ubt-lock-screen`. To be merged by the orchestrator.

## Change requests
- none

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real | 0 | 0 | 0 | 2 (cursor, proposed exemption) | 0 | ignoreSubtrees×2 |
| loading | loading | 0 | 0 | 0 | 2 (cursor, proposed exemption) | 0 | ignoreSubtrees×2 |
| offline | error | 0 | 0 | 0 | 2 (cursor, proposed exemption) | 0 | ignoreSubtrees×2 |

Text, pseudo, position, pixel (0.00 %) and call differences: 0 in every state.

## Server-side notes
- The PIN check and change are device-local in the original (PIN plugin, AppManager); the mock keeps a hashed PIN in the shell. A real backend must not trust a client-side "unlocked" state for anything server-side.
