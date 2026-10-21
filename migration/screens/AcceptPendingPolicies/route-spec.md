# Route spec: AcceptPendingPolicies

Sources: `capture/survey-UBTConnect.json` → `UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js` ("SCR") and
`UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js` ("BLK"); `UBTConnect.controller.js` TST copy in
`migration/screens/MessageList/analysis/sources/raw/` ("UC"). No capture, no `analysis/` folder, no pack
(`context_pack.py` needs `analysis/facts.json`): the user decided Q7 c (build from the compiled code,
`migration/capture-notes.md`).

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/AcceptPendingPolicies`, no inputs [SCR model `setInputs` is empty] |
| Tier | lite |
| Captured | not captured (Q7 c); every state below is "not captured" |
| Shared/shell components used | `shared/UBTConnectLibrary/Layout_LoginFlow`, `CustomContainer`, `CustomText`, `Columns_Two`, `Icon`, `FixedFooter`; `shared/UBTConnect_Utils/Button` (CW_Common.Button); `shared/osui/Separator`; `shared/NavigationHandler/BackNavigationHandler`; `shared/UBTConnect/CommonUI_InsideLayout`; shell `userInfo`, `memoryCache`, `session`, `navigation`, `feedback` |
| Screen-specific components | `components/Policy_Custom_AcceptPendingPolicies.tsx` (block `App_Policies.Policy_Custom_AcceptPendingPolicies`, catalog "own", 1 user) |

## Specification
### Structure
- `Layout_LoginFlow` id `$b1`, `In_HasOverlay` = `useOverlay` (True), `In_ExtendedClass` "ubt-policies". The header
  placeholder is empty [SCR view].
- Content placeholder: container `Content` (`ubt-policies--content`, style `text-align: center;`) → container
  `ubt-policies--header` → block $b7 `Policy_Custom_AcceptPendingPolicies` (Country = UserCountry, PolicyApplications =
  [Connect, Directory, Orbit], ContentBlockId = MainContainer). Then `BackNavigationHandler` $b8 [SCR view].
  - Content of `ubt-policies--header`:
    - CustomContainer $b2 (padding bottom Small) → CustomText $b3 "Welcome to" (neutral-0/Heading3/SemiBold).
    - Image `img/UBTConnect.ConnectLogoWhite.svg` with class `login-screen__connect-logo` and grid class
      `ThemeGrid_MarginGutter`.
    - CustomContainer $b4 (padding top Base/bottom Medium) → CustomText $b5 "Connect and Directory" and CustomText $b6
      "Terms and Conditions & Privacy Policy" (neutral-0/Base/SemiBold).
- CommonUI placeholder: `CommonUI_InsideLayout` $b9 with `In_IgnorePolicy` True [SCR view].
- Block [BLK view]. The markup depends on three conditions:
  - Not fetched → container `list-updating`.
  - Fetched and empty → container `background-blue-lighter text-align-center padding-x-l padding-y-l` with "You have
    accepted all required policies." `<br>` "No more policies available to accept."
  - Fetched with rows → `Columns_Two` $b1 (ReduceLast, FlexDirection Column, ExtendedClasses `ubt-policies--columns`),
    then `FixedFooter` $b10.
    - Left: List `list list-group ubt-policies--list` + grid `OSFillParent`. Each row is `display-flex margin-y-xl` →
      Icon (checkbox / checkbox_outline_blank, neutral-0, click ToggleCheckBox).
      Then `margin-left-xs white-space-nowrap` → CustomText "I agree to the " + ApplicationName + " - " (neutral-0/Small/Regular, FitContent) + CustomText
      PolicyTypeName (neutral-0/Small/SemiBold/underlined, FitContent, Clicked → OnClickPolicy).
    - Right, only when `Policies.Length > 1`: `ubt-policies--agree-to-all` → Separator → `display-flex padding-top-xl` →
      Icon (IsAllSelected checkbox / outline, click ToggleSelectAllCheckBox) + `margin-left-xs` → CustomText "I agree to
      all".
    - `FixedFooter` $b10: useBottomBar False, ExpectedFooterHeight `calc(2 * var(--space-base) + var(--ubt-button-height-m))`,
      ContentContainerId = ContentBlockId. It contains CustomContainer $b11 (background neutral-0, padding general Base,
      shadow ExtraSmallTop) → CW_Common Button $b12 "Continue", IsDisabled = not IsAllSelected.
- Static entity values that the shared lib does not have are in the screen file `components/staticEntities.ts`. They come
  from the class patterns of the shared lib and the original CSS in `app/public/UBTConnect/css/`:
  - FontSize Heading3 → `h3` (`.font-size-h3`).
  - FlexDirection Column → `flex-direction-column`.
  - Icons2 Checkbox → `connect-icon-checkbox`.
  - CheckboxOutlineBlank → `connect-icon-checkbox_outline_blank`.
  - Shadow ExtraSmallTop → `xs-top` (`.shadow-xs-top`).
- The screen only sends the Connect_Applications identifiers and never renders them. They are opaque constants.

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| `UBTConnect` `Policy_Custom_AcceptPendingPolicies/DataActionGetPendingPolicies` | data action | block load (dataFetchActionNames) and OnParametersChanged (ContentBlockId changes after the layout's OnReady) [BLK controller] | screen variables PolicyApplications, Country, ContentBlockId, IsAllSelected [contract x-os-inputs] | Policies (IsSelected, Url, PolicyInformation.Id/ApplicationName/PolicyTypeName/PolicyContentFilename/PolicyContentType) | never recorded; 2 fictional Connect policies (Q3) with the recorded TST policy Url/file/type of fixture `UBTConnect_Utils` `CacheControl_Policies/DataActionGetCacheInfo`, collection `AcceptPendingPolicies.pending` | real (seed), empty, error, loading |
| `UBTConnect` `ActionAcceptPolicies` | server action, write | Continue click (ContinueOnClick) [BLK controller] | Policies = ids of the selected rows, DeviceDetails {UniqueId, Platform, Manufacturer, Model} from GetDeviceInfo JS (ClientIP default "") | none | mock store: removes the accepted ids (P-MUTATION); never the real server | real, error |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| screen | OnInitialize | UserCountry = AppManager_GetCachedUserInfo.CountryCode [SCR] (shell `appManager_GetCachedUserInfo`, CR-AcceptPendingPolicies-2 applied; mock user `AR`) | – | – | – |
| Layout | OnPathCalculated | DefineHeight: GetSVGMetric (UC GetSVGMetric: `.ubt-header-svg svg path` height × max V / max Q) → `--current-svg-height` on MainContainer [SCR] | – | – | – |
| Layout | OnReady(MainId) | MainContainer = MainId; DefineHeight [SCR] | – | – | – |
| block | OnAfterFetch | Policies empty → Wait 5 s (JS setTimeout) → AcceptedAll [BLK] | – | back | – |
| row icon | Click | ToggleCheckBox: Current.IsSelected = not; IsAllSelected = ListAll(IsSelected) [BLK] | – | – | – |
| agree-to-all icon | Click | IsAllSelected = not; every row IsSelected = IsAllSelected [BLK] | – | – | – |
| policy name | Clicked | OnClickPolicy: CanOpenApplicationPolicyDirectlyViaUrl = IsWeb → JSUtils_PageOpenInNewTab(Current.Url) (`window.open(url, '_blank')`); DetailsOnClick is the native branch, not built [Q1; ApplicationPolicies_CW / UBTJavaScriptUtils TST copies in `migration/shell/sources`] | – | new tab (policy Url) | – |
| Continue | ButtonOnClick | ListFilter selected → AcceptPolicies → AcceptedAll; CommunicationException → NetworkError → ShowCommunicationExceptionMessage [BLK, SCR]; other errors → App_Policies flow → App_Common handler → ShowExceptionMessage(message, False) [Q2] | AcceptPolicies | back | communication message |
| AcceptedAll (screen) | event | Cache_UserInfo_Get; HasPoliciesToAccept = False; PutCacheableObject(DirectoryUser, UniqueKey, user info, 7200); App_Policies_HasPolicyToAccept = False; ReplaceOnUpcomingNavigation; AllowUpcomingNavigation; PreviousScreen [SCR] | – | history back | – |
| BackNavigationHandler | BackNavigation | PreventNavigation (back is blocked on this screen) [SCR] | – | – | – |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| loading | `not GetPendingPolicies.IsDataFetched` → `list-updating` | not captured | `?mock=loading` |
| list (2 rows, agree-to-all) | fetched, `Policies.Length > 1` | not captured | real |
| list all selected | IsAllSelected → Continue enabled | not captured | real + clicks |
| empty | fetched, `Policies.Empty` → accepted message, back after 5 s | not captured | `?mock=empty` |
| error | data action fails → ShowExceptionMessage(message, False), the list stays `list-updating` (Q2) | not captured | `?mock=error` |

## Patterns used
- P-PARAMS: no inputs. The shell's `Policy_Checker` opens the screen (`?mockuser=policies`).
- P-STATES: loading / list / empty follow the block's `$if` conditions. The route has no capture, so the States table above
  lists the states.
- P-DATA: `api.ts` adapters with `callAction`, query key `[AcceptPendingPolicies, DataActionGetPendingPolicies, inputs]`.
- P-CALLS: data action on load and on ContentBlockId change; AcceptPolicies only on Continue.
- P-MOCKS: fictional data with the contract types (`contractHandler`), `mockDelay` via the helper.
- P-MUTATION: collection `AcceptPendingPolicies.pending` in `src/mocks/store.ts`; AcceptPolicies removes rows.
- P-OSUI: Separator from `src/shared/osui/Separator`.
- P-BACK: BackNavigationHandler prevents back; AcceptedAll bypasses it with AllowUpcomingNavigation.
- P-LIST: the shared OS list component does not exist yet. The screen contains the List markup itself, as `PinCode` does.

## Feature flags
- none (no flag read in SCR or BLK).

## Unclear points
- What happens when the user clicks a policy name on the web → Q1 (decision answered by user: new tab with the policy Url)
- What the App_Policies flow exception handler shows → Q2 (decision answered by user: App_Common handler,
  ShowExceptionMessage(message, False); communication errors → communication message)
- Fictional pending policies: count and content → Q3 (decision answered by user: Terms and Conditions + Privacy Policy
  of Connect, recorded policy URLs of CacheControl_Policies)
- Device UniqueId kept in memory instead of localStorage → Q4 (decision answered by user: memory only)
- Country input: shell `appManager_GetCachedUserInfo()` (CR-AcceptPendingPolicies-2, applied 2026-10-14)

## Decisions to confirm
- The whole route comes from the compiled code. The route has no captured state (Q7 c), so parity has no captured state to run.
  There is no parity for this route (no-capture recorded by the user). `route.py spec-done` accepts the spec without a
  pack (coarser inputs). The user reviews the states by hand (`review/*.png`).
- The screen imports `allowUpcomingNavigation` from `src/shell/navigation`. The shell exports it since CR-Splash-2.
- Smoke test (headless Chrome, `?mocksession=unlocked&mockuser=policies`) results:
  - 2 rows render.
  - The screen sends DataActionGetPendingPolicies twice: ContentBlockId "" first, then "b1-Main", as OnParametersChanged
    does.
  - "I agree to all" enables Continue.
  - AcceptPolicies sends ids 7001/7002 and the screen goes back.
- A click on a policy name opens the policy Url in a new tab (Q1). With the Q3 seed, the Url is the recorded TST policy
  URL (`…/ApplicationPoliciesMT/rest/Policy/1343` and `/1344`). The click then opens the real TST document. This is a
  GET and needs a signed-in TST session. Headless Chrome check: the URL of the window that `window.open` opens equals the recorded Url.
- Errors (Q2):
  - A failed DataActionGetPendingPolicies and a non-communication AcceptPolicies error → ShowExceptionMessage
    (message, False).
  - A communication error → communication message.
  - With `?mock=error`, the toast shows the mock text "HTTP 500." and the policy area keeps its spinner
    (`review/error.png`).
- Seed (Q3): "Terms and Conditions" and "Privacy Policy" of Connect; Url, file name and content type from the recorded
  CacheControl_Policies fixture (both recorded file names are "Privacy Policy TST 236 (1).pdf", as recorded).
- UniqueId generated once per page load in memory, not stored (Q4, AGENTS rule 16).
- Country = the cached user's CountryCode (CR-AcceptPendingPolicies-2 applied). The mock sign-in and `?mocksession=`
  store only CountryCode `AR`, the mock user's Directory country. Headless check: both DataActionGetPendingPolicies
  bodies carry `"Country":"AR"`.
- Stylesheets: the screen gets the 10-file set of `src/app/routes.css.generated.ts`. The set comes from the compiled
  `getCssDependencies` of the screen and its blocks (no capture). Check on 2026-10-14 in headless Chrome at 390x844: the
  `<link>`s equal the set and all load.
  - The 3 rules of `UBTConnect.App_Policies.AcceptPendingPolicies.css` match the DOM:
    - Content padding-top is 48px and max-height = `--current-svg-height`.
    - The policy column has max-height 40vh and scrolls.
    - The fixed-footer margin-bottom is 0.
  - `ubt-policies--header/columns/list/agree-to-all` have no rule in any original sheet: they are hooks only.
  - The markup did not need a change.
- The logo keeps the grid class `ThemeGrid_MarginGutter` from the compiled `gridProperties`. With the OSUI CSS, the logo
  gets margin-left ~7px, so the logo sits about 4px right of centre. This follows the compiled code. TST was not
  captured to confirm it.
- Error state (`?mock=error`): exception toast plus the `list-updating` spinner (Q2, see above).
  Review screenshots: `review/default.png`, `review/error.png` (390x844).
- Ids of blocks inside the List rows (`b7-l1-<n>_<i>-$b2`) are runtime counters and are not rendered.
- Image grid class order `login-screen__connect-logo ThemeGrid_MarginGutter` follows the captured List rule (style, then grid class).
- The shell mock user keeps HasPoliciesToAccept True after a reload; only the in-memory user-info cache and the client variable change, as in the original.
- After an accept, a reload of this screen shows the empty state and goes back after 5 s. The store keeps the accepted
  ids for the life of the page.

## Change requests
- CR-AcceptPendingPolicies-1: original screen stylesheet `UBTConnect.App_Policies.AcceptPendingPolicies.css`
  (applied 2026-10-14 by the foundation change to per-screen stylesheets; checked by the route, see Decisions)
- CR-AcceptPendingPolicies-2: shell, `AppManager_GetCachedUserInfo` / `AppManager_UserExtended` (applied 2026-10-14):
  `Country` = the cached user's CountryCode. Nothing visible depends on it.

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| none captured | – | – | – | – | – | – | – |

## Server-side notes
- AcceptPolicies must accept only policy ids pending for the session user and record the device details server-side.
- DataActionGetPendingPolicies must scope the list to the session user (the client sends only applications and country).
