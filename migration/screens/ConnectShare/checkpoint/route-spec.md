# Route spec: ConnectShare

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/ConnectShare` with inputs `ShareId` (Text) [pack.md; ConnectShare.mvc.js model] |
| Tier | lite |
| Captured | 2026-10-14, viewport 390×844, states: default, loading, offline [states.json] |
| Shared/shell components used | `shared/Connect2_LegacyShared/Layout`, `MenuIcon_Back`, `ConnectBlankSlate`; `shared/UBTConnect/CommonUI_InsideLayout` (shell blocks inside); `shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy`; `shell/dialogs` showUpgradePopUp; `shell/navigation` (useOsNavigate, useNavigateBack, replaceOnUpcomingNavigation, useViewState, useWasRestoredFromCache); `shell/userInfo` getUserInformation; `shell/exceptions` [pack.md block plan] |
| Screen-specific components | `components/ScreenBlock_ShareDetail.tsx` (Share_UI.ScreenBlock_ShareDetail), `components/NavigationLanding.tsx` (Reusable.NavigationLanding), `components/actions.ts` (OnInitializeSharingScreen, AuditShareViewEvent) |

Entry of external share links (D10 a, user 2026-10-14: ConnectSharing/Details → UBTConnect/ConnectShare): reads the
share and redirects to the built detail screen, or shows a blank slate with a status message [notes.md].

## Specification
### Structure
`$if(not IsRedirect)`: ScreenBlock_ShareDetail ($b1: Layout with Menu placeholder, MenuIcon_Back, title "Connect Share",
NavigationLanding, ConnectBlankSlate with `img/Connect2_LegacyShared.share_unavailable_icon.png` and the StatusMessage
expression, empty subtitle, BottomBar and CommonUI_Elements placeholders) with CommonUI_InsideLayout ($b2) in
CommonUI_Elements, then Dialog_AccessRestrictedAction_Legacy "SubscriptionDenied" (alias b3) [ConnectShare.mvc.js:142-222;
ScreenBlock_ShareDetail.mvc.js:131-260; dom/default.html]. NavigationLanding: Link to GetOwnerURLPath() "/UBTConnect/"
with icon fa-home 2x; IsEnabled default True never set [NavigationLanding.mvc.js:13-15, 131-160]. The screen renders only
after OnInitialize ends: the runtime awaits the controller's fireInitialize before creating the view [OutSystems.js:2].

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| `UBTConnect/ActionGet_ShareDetails` | server action | ConnectShare.OnInitialize → OnInitializeSharingScreen [call-sites.md] | ShareId, IncludeDeceased = False [UC:18425-18430, :15623] | IsShareAvailable, ShareObjectType.Id, ShareDetails.ObjectId, Details.ShareItem.Id / CanAccess / HouseholderId [UC:15625-15671] | not recorded (share data is person data, mock-fixtures.md); real exception message unknown (Q1) | real: unknown ShareId raises ServerException (captured branch), fictional ShareIds …0001-…0009 for the other branches (Q2 → A); error: CommunicationException |
| `UBTConnect_Utils/ActionGetUserInformation` | server action (shell cache) | OnInitializeSharingScreen AllExceptions → AuditShareViewEvent → GetUserInformation_Wrapper [UC:764-793] | none | none (TargetUserId is serialized and dropped) [UC:797-822] | shell user-info cache: one call per app start [shell/userInfo.ts] | shell mocks |
App-start calls (SynchAppContext, AfterInitialize, Sync_Info_GetMain, GetNumberUnreadMessages, Cacheable*) are the shell's [calls.md #2-8].

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| Screen | OnInitialize [CS:254-360] | first branch `… && false` (DEV CountryList) never runs; restored from cache: keep the view if StatusMessage <> "" or ShowFreeSubscriptionAlert, else navigateBack (None); otherwise OnInitializeSharingScreen(ShareId) → StatusMessage; IsRedirect → keep type + id; else after 1000 ms Action_SetShowFreeSubscriptionAlert [CS:613-619] | Get_ShareDetails | back (restored, no status) | — |
| OnInitializeSharingScreen [UC:15603-15700] | — | not available or ShareItem.Id = "" → "This shared item is no longer available"; CanAccess = Type = Feed or CanAccess; not CanAccess → ShowFreeSubscriptionAlert, "You don't have access to shared item"; else IsRedirect = Type <> "", Id = ObjectId (Update: HouseholderId). AllExceptions (non-system): StatusMessage = message, AuditShareViewEvent(ShareId, "", "", "Others", "", ""); its exception goes up | Get_ShareDetails, GetUserInformation (cache) | — | — |
| Action_SetShowFreeSubscriptionAlert [CS:362-412] | timer | True → ShowFreeSubscriptionAlert = True, App_Subscription_ShowUpgradePopUp | — | — | Access Restricted dialog "SubscriptionDenied" |
| Screen | OnReady [CS:414-442] | IsRedirect → Action_Redirect | — | — | — |
| Action_Redirect [CS:444-511] | — | ReplaceOnUpcomingNavigation; Household / My Household / Update → HouseholdDetails(HouseholdId = TextToInteger(id)); OneSchool Global → OneSchoolGlobalDetails(In_OneSchoolGlobalId); Feed → FeedItemDetail(FeedItemId = id); Supper Meeting → SupperMeeting_Details(In_SubdivsionId); other → IsRedirect = False | — | listed, transition None, replaces the ConnectShare entry | — |
| MenuIcon_Back / NavigationLanding | click | shared back; link to `/UBTConnect/` | — | previous / default screen | — |
| Exceptions | OnInitialize | screen handleError → Legacy_Share flow handler, not local (Q3): shell raiseToFlowHandler | — | — | communication / exception message |
Type_ShareObject values: TST static entities [static-entities-tst.json "UBTConnect.type_ShareObject"; shared/UBTConnect/lib/staticEntities.ts].

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | Get_ShareDetails raised → StatusMessage = exception message (masked) | yes | real (ShareId 0…0) |
| loading | OnInitialize waiting → nothing rendered | yes | loading |
| offline | Get_ShareDetails and the audit's GetUserInformation fail → OnInitialize raises, StatusMessage stays "" [dom/offline.html: empty title] | yes | error |
| redirect / no access / unavailable | branches above | no (mock ShareIds, Q2) | real |

## Patterns used
- P-PARAMS: `readInputs` (ShareId) and the Action_Redirect navigations with the targets' original input names.
- P-STATES: render nothing until OnInitialize ends; blank slate states from the original conditions.
- P-DATA / P-CALLS: `api.ts` get_ShareDetails via callAction in the load phase (OnInitialize).
- P-MOCKS: `mocks.ts` contractHandler, fictional shares, captured exception branch.
- P-BACK: useViewState for StatusMessage, ShowFreeSubscriptionAlert, IsRedirect and the redirect target; useWasRestoredFromCache.
- P-DIALOG: showUpgradePopUp opens Dialog_AccessRestrictedAction_Legacy "SubscriptionDenied".

## Feature flags
- `clientVar:App_PIN_BiometricEnabled`: not a flag (user, 2026-10-14); handled by the shell's PIN blocks, nothing in this route.

## Unclear points
- Exception class and message of Get_ShareDetails for an unknown ShareId (masked in the capture) → Q1 (fact, open; mock ServerException "Share not found (mock message)", one line like the captured title)
- Mock data for the branches the capture did not reach → Q2 (decision, open; built with A)
- Legacy_Share flow exception handler (UBTConnect.Legacy_Share.controller.js not local) → Q3 (fact, open; shell raiseToFlowHandler as LegacyShareObject)
- Loading state: shell frame present while OnInitialize waits → Q4 (decision, open; built with A, exemption proposed)

## Decisions to confirm
- Q1 → fictional exception message "Share not found (mock message)" (pending orchestrator answer)
- Q2 → A: ShareIds 00000000-0000-0000-0000-000000000001…009 = unavailable, empty item, no access (popup after 1 s), Household → HouseholdId 42438, Update → householder 42438, OneSchool Global → 1430, Feed → mock-feed-item-1, Supper Meeting → 1210, Locality (not routed → blank slate, empty status) (pending orchestrator answer)
- Q3 → shell raiseToFlowHandler for OnInitialize exceptions (pending orchestrator answer)
- Q4 → A: narrow exemption LOADING-FRAME-CONNECTSHARE (pending orchestrator answer)
- AuditShareViewEvent sends nothing (its JSON is built and dropped, UC:797-822): only its GetUserInformation_Wrapper read is kept.
- The DelayedShowFreeSubscriptionAlert timer is cleared when the screen unmounts (the original's ensureControllerAlive stops a destroyed screen's action).
- Proposed exemptions (capture/timing artifacts): CAPTURE-LINK-HREF-CURSOR-NAVIGATIONLANDING, CAPTURE-MASKED-TEXT-CONNECTSHARE-STATUS, CALL-ORDER-APPSTART-SHAREDETAILS in `migration/screens/ConnectShare/proposed-exemptions.json`.

## Change requests
- none

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real | 0 | 0 | 0 | 2 cursor (proposed) | 0 | MENUICON-BACK cursor ×2, ignoreSubtrees ×1; pending: position 1 (masked text), call order 1 |
| loading | loading | 1 (Q4) | 0 | 0 | 0 | 0 | CAPTURE-LOADING-BODYCLASS ×1 |
| offline | error | 0 | 0 | 0 | 2 cursor (proposed) | 0 | MENUICON-BACK cursor ×2, ignoreSubtrees ×1 |

## Server-side notes
- Get_ShareDetails must check server-side that the session user may see the shared item (CanAccess comes from the server; the client only hides the redirect).
- External share links carry only ShareId: the server must not leak share details for an unauthenticated or unauthorized caller.
