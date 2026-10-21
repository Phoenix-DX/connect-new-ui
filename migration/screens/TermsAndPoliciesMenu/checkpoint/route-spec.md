# Route spec: TermsAndPoliciesMenu

Sources: `SCR` = `analysis/sources/pretty/UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js`; `UTL` =
`analysis/sources/raw/UBTConnect_Utils.controller.js` (OpenPolicy); `APC` = `migration/shell/sources/ApplicationPolicies_CW.controller.js`.

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/TermsAndPoliciesMenu` with inputs none [SCR model `setInputs = function(inputs) {}`] |
| Tier | lite |
| Captured | 2026-10-14, viewport 390×844, states: default, loading, offline [analysis/states.json] |
| Shared/shell components used | `shared/UBTConnectLibrary/Layout_DetailPage`, `shared/UBTConnectLibrary/SkeletonSection`, `shared/UBTConnect/Menu_List`, `shared/UBTConnect/CommonUI_InsideLayout`, `shared/UBTConnect_Utils/CacheControl_Policies`, `shared/UBTJavaScriptUtils/lib/actions` (JSUtils_PageOpenInNewTab), `shell/feedback` (FeedbackMessageShow), `shell/navigation` (view cache) |
| Screen-specific components | `components/actions.ts` (OpenPolicy web branch), `components/staticEntities.ts` (UBT_Icons2.Contacts) |

## Specification
### Structure
- Layout_DetailPage `$b1`, default inputs (centred title, primary header) [dom/default.html:6-17, SCR view `inputs: {}`];
  title placeholder is the literal text "Terms & Policies" [SCR view `placeholder_Header_Title`; dom/default.html:21-23];
  header right, header content and bottom empty [SCR view `PlaceholderContent.Empty`].
- Content: SkeletonSection `$b2` (In_IsLoading = not LocalCacheControl_Policies.isFetched) [SCR view `In_IsLoading`]
  holding Menu_List `$b3` with In_MenuSection = {HasSeparator False, MenuOptions = MenuOptionList} (SectionTitle
  default "") [SCR view `rec.hasSeparatorAttr = false`; dom/default.html:35-150: no separator, no title, 2 rows].
- CommonUI_InsideLayout `$b4` with default inputs in the layout's CommonUI placeholder [SCR view; dom:161-226].
- CacheControl_Policies `$b5` (default inputs) as a sibling of the layout [SCR view; dom/default.html:231-234].

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| `UBTConnect_Utils/CacheControl_Policies/DataActionGetCacheInfo` | data | `CacheControl_Policies fetch at start` (memory-cache miss) [call-sites.md] | CacheKey, CacheTypeId, TimeToLiveSeconds (shared block) | CacheControl_Response → LocalCacheControl_Policies [SCR `_cacheControl_PoliciesResult$Action`] | read only; policy URLs per user/app | shared recorded handler in `shell/mocks.ts` (real / loading / error) |
| App-start calls (#1, #3-#8) | server | shell (app start, CommonUI) [calls.md] | as shell | — | shell | shell mocks |

No call of the screen's own: `dataFetchActionNames = []`, no server action [SCR controller].

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| Screen | OnInitialize | IsViewRestoredFromCache (`$public.View.wasCurrentViewRestoredFromCache()`): restored → nothing (variables keep their cached values); else ListClear(MenuOptionList), append {IconId UBT_Icons2.Contacts, Label TermsAndConditionsName}, append {IconId UBT_Icons2.BookClosed, Label PrivacyPolicyName} [SCR `_screenEvent_OnInitialize$Action`] | — | — | — |
| CacheControl_Policies | Result(CacheControl_Response) | LocalCacheControl_Policies.CacheControl_Policies = response; isFetched = True [SCR `_cacheControl_PoliciesResult$Action`] | — | — | — |
| Menu_List row | OnClick_MenuOption(row) | Label = "Terms and Conditions" → OpenPolicy(PolicyInformation_TermsAndConditions, "This policy couldn't be found."); Label = "Privacy Policy" → OpenPolicy(PolicyInformation_PrivacyPolicy, same text); else nothing [SCR `_onClick_MenuOption$Action`; defaults SCR model `TermsAndConditionsName`, `PrivacyPolicyName`] | — | — | — |
| OpenPolicy (UBTConnect_Utils) | — | Policy_Url ≠ "" → CanOpenApplicationPolicyDirectlyViaUrl (= IsWeb, `!window.cordova` [APC IsWebJS]) → web: JSUtils_PageOpenInNewTab(Policy_Url); native: OpenApplicationPolicy (not built, AGENTS rule 14). Policy_Url = "" → FeedbackMessageShow(ErrorMessage, Error) [UTL `openPolicy$Action`] | — | external policy URL in a new tab | error "This policy couldn't be found." when the URL is empty (e.g. before the policies are fetched) |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | LocalCacheControl_Policies.isFetched = True: SkeletonSection class "" [dom/default.html:36] | yes | real |
| loading | GetCacheInfo pending: isFetched False → `ubt-skeleton-section` around the 2 rows [dom/loading.html:36] | yes | loading |
| offline | GetCacheInfo fails: isFetched stays False, same skeleton as loading [dom/offline.html:36] | yes | error |

## Patterns used
- P-STATES: skeleton driven by `isFetched` (loading and offline keep the skeleton).
- P-BACK: MenuOptionList and LocalCacheControl_Policies as view-cached screen variables (`useViewState`); OnInitialize
  rebuilds the rows only when the view was not restored (`useWasRestoredFromCache`).
- P-CALLS / P-DATA / P-MOCKS: the only data call is made by the shared CacheControl_Policies block with its shared
  recorded handler; the route's `mocks.ts` has no handler of its own (scenarios real / loading / error documented there).
- P-PARAMS: no inputs; navigation is only the external policy URL (new tab) and the layout's back arrow (shared).
- P-DIALOG: the not-found branch uses the shell feedback message (FeedbackMessageShow, Error).
- P-LIST: through the shared Menu_List (OSList inside).

## Feature flags
- `clientVar:App_PIN_BiometricEnabled`: MCP unavailable; decision not a flag (false positive, user setting for
  biometric unlock, user 2026-10-14); implemented as in the original inside the shell's Block_PINUnlock (no branch in this
  route).

## Unclear points
- none: every behaviour above is in the compiled code; the native OpenApplicationPolicy branch is out of scope (AGENTS
  rule 14), not unclear.

## Decisions to confirm
- Policy links open the recorded TST policy URL (fixture `UBTConnect_Utils/CacheControl_Policies/DataActionGetCacheInfo`,
  user-reviewed) in a new tab, as the original web branch does (orchestrator rule: external links stay external).
- Click on a row while the policies are not fetched (loading / offline) shows the error feedback "This policy couldn't
  be found." (compiled code; not captured).

## Change requests
- none

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real | 0 | 0 | 0 | 0 | 0 | CAPTURE-LINK-HREF-CURSOR-HOMEFEED×1, ignoreSubtrees×1 |
| loading | loading | 0 | 0 | 0 | 0 | 0 | CAPTURE-LINK-HREF-CURSOR-HOMEFEED×1, CAPTURE-SKELETON-SHIMMER-PHASE×6, ignoreSubtrees×1 |
| offline | error | 0 | 0 | 0 | 0 | 0 | CAPTURE-LINK-HREF-CURSOR-HOMEFEED×1, CAPTURE-SKELETON-SHIMMER-PHASE×6, ignoreSubtrees×1 |

Two runs after the last code change (2026-10-15), text / pseudo / position / pixel / call 0 in every state; existing
exemptions only, none proposed by this route.

## Server-side notes
- GetCacheInfo (CacheControl_Policies) returns the policy documents of the current application; read only, no
  authorization beyond a signed-in user is visible in the client code.
