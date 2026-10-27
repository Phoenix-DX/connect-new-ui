# Flow report: Legacy_Share

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 2 (built: 2, ConnectShare, LegacyShareObject; not built: none) |
| Own blocks | HandleOnResumeOpenLink |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/…`, KB page `ui/legacy-share.md` and the rules it names, TST compiled code of the two screens, of HandleOnResumeOpenLink and of the `Connect2_LegacyShared` blocks ScreenBlock_ShareDetail, ScreenBlock_ShareObject and ProfileList (`tst_source.py`) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 64 · partial 8 · missing 0 · differs 2 · mock-only 5 · n/a 16 · unclear 0 (same as `checklist.json`).
- **F1** (minor): the four redirects of `Action_Redirect` play the default SlideFromRight transition. TST uses
  `TransitionAnimation.None`.
- **F2** (minor): LegacyShareObject runs its OnInitialize after the OnReady of ScreenBlock_ShareObject. So
  `GetHouseholdDetails` gets `User_AgeVisibility` False, and `GetShareObjectTypeById` is fetched twice, when the
  user's `DisplayAge` is True.
- **F3** (info): ConnectShare does not render the closed `SubscriptionDenied` dialog while `IsRedirect` is True. TST
  renders it outside the If.
- Status: in React a user can open a share link. The screen shows the status message or, after 1 s, the upgrade
  dialog. Or it replaces itself with the household, OneSchool Global, feed item or supper meeting screen. A user can share a
  household, a community business or a feed item with a profile of the list (the write is a mock, V3e). Links that
  arrive in the native app (HandleOnResumeOpenLink) are not built (decision U14). No finding blocks the flow.

## 2. Screens

### 2.1 ConnectShare

Route `/UBTConnect/ConnectShare`, page `app/src/pages/ConnectShare/ConnectSharePage.tsx`, flows in
`app/src/pages/ConnectShare/hooks/useConnectShare.ts`, `connectShareActions.ts` and `connectShareState.ts`. Board:
`build`, built (V6, D10(a), user 2026-10-14, `migration/board.md:48`).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | input ShareId | Text, mandatory, query string | `params.get('ShareId') ?? ''` | `match` | app/src/pages/ConnectShare/inputs.ts:10-12; TST model default "" |
| 002 | roles | Registered, UBTOne_User | MEMBER_ROUTE (member, enforce) | `match` | TST checkPermissions: `checkRegistered()` only; UBTOne_User is DEV only (§6.1) |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 003 | Get_ShareDetails(ShareId, IncludeDeceased False) | server action of Connect2_Sharing_CS | `callAction('UBTConnect','ActionGet_ShareDetails', …)` | `match` | app/src/api/share/repository.ts:11-15 |
| 004 | local variables (5) | StatusMessage, ShowFreeSubscriptionAlert, IsRedirect, two redirect ids | reducer state with the same five | `match` | app/src/pages/ConnectShare/hooks/connectShareState.ts:10-19 |
| 005 | client variables (4) | read and written by shared blocks only | - | `n/a` | owned by App_Common, App_Policies and App_PIN, see their reports |
| 006 | static entity Type_ShareObject | six records used | the six Id values are equal | `match` | app/src/lib/ubtConnect/staticEntities.ts:86-94; pack/references.md:61-67 |
| 043 | server side of Get_ShareDetails | - | mock with nine fictional ShareIds; other ids raise a ServerException | `mock-only` | app/src/pages/ConnectShare/mocks.ts:98-124; production needs Get_ShareDetails of Connect2_Sharing_CS; Q1 deferred to production (knowledge/auto-decisions-2026-10-15.md:17, :75) |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 007 | If `not IsRedirect` | ScreenBlock_ShareDetail when False | `if (!isInitialized \|\| state.isRedirect) return null` | `match` | ConnectSharePage.tsx:17; the runtime creates the view after OnInitialize (runtime-sources/OutSystems.js:17) |
| 008 | ScreenBlock_ShareDetail(StatusMessage) | CommonUI_InsideLayout in CommonUI_Elements | ShareDetailView with CommonUiLayout | `match` | ConnectSharePage.tsx:20 |
| 009 | Dialog_AccessRestrictedAction_Legacy "SubscriptionDenied" | sibling of the If, always rendered | not rendered while IsRedirect is True | `partial` | **F3**; TST ConnectShare.mvc.js:152-208 (the `$if` closes at line 196) |
| 010 | ScreenBlock_ShareDetail content | title "Connect Share", MenuIcon_Back, NavigationLanding, ConnectBlankSlate(StatusMessage) | the same | `match` | ShareDetailView.tsx:35-46; NavigationLanding.tsx:16; TST ScreenBlock_ShareDetail.mvc.js:200 |
| 047 | blocks used through the layout | CommonUI_InsideLayout, PIN blocks, Policy_Checker, UnsupportedVersion*, OfflineDataSyncEvents, WelcomeToConnect | CommonUiLayout | `n/a` | owned by App_Common, App_PIN and App_Policies, see their reports |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 011 | OnInitialize `If False` | navigation to the DEV CountryList | no code | `n/a` | dead in the model; TST ConnectShare.mvc.js:268 `&& false` |
| 012 | WasCurrentViewRestoredFromCache | JavaScript node | `restored` flag of useFlowState | `match` | useConnectShare.ts:63-72 |
| 014 | restored, no message, no alert | navigate back, transition None | `navigateBack(TransitionAnimation.None)` | `match` | useConnectShare.ts:92; TST ConnectShare.mvc.js:294 |
| 015 | not restored | OnInitializeSharingScreen(ShareId) | `onInitializeSharingScreen(ShareId)` | `match` | useConnectShare.ts:95-96 |
| 016 | IsRedirect True | keep IsRedirect and the two redirect ids | reducer `sharingScreenInitialized` | `match` | connectShareState.ts:44-52 |
| 017 | IsRedirect False | setTimeout 1000 ms → Action_SetShowFreeSubscriptionAlert | `window.setTimeout(…, 1000)` | `match` | useConnectShare.ts:97-100; BR-UBTCON-629 |
| 018 | Action_SetShowFreeSubscriptionAlert True | ShowFreeSubscriptionAlert True, App_Subscription_ShowUpgradePopUp | dispatch, `showUpgradePopUp()` | `match` | useConnectShare.ts:82-86; BR-UBTCON-630 |
| 019 | Action_SetShowFreeSubscriptionAlert False | End | `if (!show) return` | `match` | useConnectShare.ts:83 |
| 020 | OnReady, IsRedirect True | Action_Redirect | effect once after the first render | `match` | useConnectShare.ts:113-123; BR-UBTCON-631 |
| 021 | OnReady, IsRedirect False | End | `if (!isRedirect) return` | `match` | useConnectShare.ts:118 |
| 022 | Action_Redirect: ReplaceOnUpcomingNavigation | before the switch | `replaceOnUpcomingNavigation()` | `match` | useConnectShare.ts:119; TST ConnectShare.mvc.js:457 |
| 023 | Household, My Household, Update | HouseholdDetails(HouseholdId), transition None | `navigate(path, params)`, SlideFromRight | `partial` | **F1**; TST ConnectShare.mvc.js:461-464; osNavigate.ts:22-23, 92-96 |
| 024 | OneSchool Global | OneSchoolGlobalDetails(In_OneSchoolGlobalId), None | the same target, SlideFromRight | `partial` | **F1**; TST ConnectShare.mvc.js:468-471 |
| 025 | Feed | FeedItemDetail(FeedItemId), None | the same target, SlideFromRight | `partial` | **F1**; TST ConnectShare.mvc.js:474-478 |
| 026 | Supper Meeting | SupperMeeting_Details(In_SubdivsionId), None | the same target, SlideFromRight | `partial` | **F1**; TST ConnectShare.mvc.js:481-485 |
| 027 | Action_Redirect otherwise | IsRedirect False, the detail shows | `redirectCancelled` | `match` | useConnectShare.ts:120-122; TST ConnectShare.mvc.js:488-489 |

**Validations**

None. The screen has no input widget.

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 013 | restored with a message or the alert | keep the view | return without a call | `match` | useConnectShare.ts:90-94; BR-UBTCON-628 |
| 028 | exceptions of the screen | flow handler Legacy_Share, then App_Common | `.catch(raiseToFlowHandler)` | `match` | useConnectShare.ts:67-69; the handler belongs to App_Common (knowledge/auto-decisions-2026-10-15.md:19) |
| 029 | Get_ShareDetails without deceased | IncludeDeceased False | `IncludeDeceased: false` | `match` | repository.ts:13; BR-UBTCON-251 |
| 030 | IsShareAvailable False | "This shared item is no longer available" | the same | `match` | connectShareActions.ts:61-63; BR-UBTCON-245 |
| 031 | CanAccess | type Feed or ShareItem.CanAccess | the same | `match` | connectShareActions.ts:47; BR-UBTCON-246 |
| 032 | switch: ShareItem.Id = "" | "This shared item is no longer available" | the same, same order | `match` | connectShareActions.ts:48-49; BR-UBTCON-247 |
| 033 | switch: not CanAccess | alert True, "You don't have access to shared item" | the same | `match` | connectShareActions.ts:50-52; BR-UBTCON-248 |
| 034 | switch: otherwise | IsRedirect = type <> NullTextIdentifier(); ids kept | `shareObjectTypeId !== ''` | `match` | connectShareActions.ts:53-56 |
| 035 | type Update | redirect id = HouseholderId | `share.householderId` (text, "0" for null) | `match` | connectShareActions.ts:57-59; api/share/mapper.ts:17; BR-UBTCON-249 |
| 036 | type not Update | End | no else | `match` | connectShareActions.ts:57-59 |
| 037 | All Exceptions | message, then AuditShareViewEvent(ShareId, "Others"); system exceptions go up | the same | `match` | connectShareActions.ts:64-68; TST UBTConnect.controller.js:15691-15710 |
| 091 | All Exceptions, Log Error = Yes | `OS.Logger.error(null, ex)` | no log call; `app/src` has no logger | `differs` | decision U17: no telemetry now, a log.ts sink comes later (migration/app-shell.spec.md:349, :384) |
| 038 | audit on the success path | [DISABLED] | no call | `n/a` | dead in the model; absent on TST (§6.1); BR-UBTCON-250 |
| 039 | GetShareAttributes | [DISABLED] | no call | `n/a` | dead in the model; absent on TST (§6.1) |
| 040 | AuditShareViewEvent, TargetUserId "" | GetUserInformation_Wrapper | `getUserInformation()` | `match` | connectShareActions.ts:23-25; BR-UBTCON-180 |
| 041 | AuditShareViewEvent, TargetUserId set | skip the lookup | - | `n/a` | dead in the model: the only caller passes "" |
| 042 | build and send the audit event | JSON built; the emit is [DISABLED] | nothing built | `n/a` | dead in the model; BR-UBTCON-181; TST UBTConnect.controller.js:782-830 |

**Strings**

The two strings of the screen match (rows 044, 045: connectShareActions.ts:49, 52, 62). The other 17 literals of
`pack/strings.md` belong to blocks of App_Common and App_PIN (row 046, `n/a`).

### 2.2 LegacyShareObject

Route `/UBTConnect/LegacyShareObject`, page `app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx`, flows in
`hooks/useShareObject.ts`, `useProfileList.ts`, `profileListState.ts` and `shareObjectState.ts`. Board: `build`, built
(V3e, ShareObject write mocked, user 2026-10-14, `migration/board.md:49`). ScreenBlock_ShareObject and ProfileList
(`Connect2_LegacyShared`) are not in the DEV pack. The rows check them against their TST files.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 048 | inputs In_ShareObjectTypeId, In_ObjectId, In_CustomTitle | static entity id (text), Text, Text | three query-string values, "" when absent | `match` | app/src/pages/LegacyShareObject/inputs.ts:12-18 |
| 049 | roles | Registered, UBTOne_User | MEMBER_ROUTE | `match` | TST LegacyShareObject.mvc.js:379 `checkRegistered()` only (§6.1) |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 050 | local User_AgeVisibility | Boolean | `useState(false)` | `match` | LegacyShareObjectPage.tsx:39 |
| 057 | GetShareObjectTypeById (block aggregate) | fetched at start; OnParametersChanged refreshes it | query keyed by the block inputs | `partial` | **F2**: a second fetch when DisplayAge is True; useShareObject.ts:25-30; TST ScreenBlock_ShareObject.mvc.js:932-944 |
| 071 | GetAvailableUsers (ProfileList data action) | fetched at start and on Refresh | request state and query | `match` | useProfileList.ts:109-139; api/share/repository.ts:39-41 |
| 081 | server side of GetShareObjectTypeById | aggregate of Connect2_LegacyShared | mock: Household recorded, other types echo the id as Label | `mock-only` | mocks.ts:53-70; Q1 (knowledge/auto-decisions-2026-10-15.md:40) |
| 092 | server side of GetAvailableUsers | data action of Connect2_LegacyShared | mock DataActionGetAvailableUsers | `mock-only` | mocks.ts:72; Q2 deferred to production (auto-decisions :41, :75) |
| 093 | server side of GetHouseholdDetails and Get_UI_CommunityBusinessShareCard | service actions | fictional mocks | `mock-only` | mocks.ts:76, 113; Q4 (auto-decisions :43) |
| 094 | server side of ShareObject (write) | server action of Connect2_LegacyShared | mock collection `LegacyShareObject.shares` | `mock-only` | mocks.ts:125-133; board V3e (`migration/board.md:49`) |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 052 | ScreenBlock_ShareObject arguments | ObjectId, ShareObjectTypeId, In_CustomTitle, User_AgeVisibility | ShareObjectView and useShareObject get the four | `match` | LegacyShareObjectPage.tsx:40-66; TST LegacyShareObject.mvc.js:160-166 |
| 053 | CommonUI_Elements | CommonUI_InsideLayout | CommonUiLayout | `match` | LegacyShareObjectPage.tsx:75 |
| 054 | Dialog_AccessRestrictedAction "SubscriptionDenied" | In_ExtendedClass "connect-legacy-compatibily-containter" | the same | `match` | LegacyShareObjectPage.tsx:77 |
| 056 | block title | "Share " + Label | the same | `match` | ShareObjectView.tsx:189 |
| 064 | household card | Household_List_Item, EntityLazyImage, name, description, tag | the same | `match` | ShareObjectView.tsx:78-115 |
| 065 | community business card | photo SignedPath, else the coming-soon image per type | the same | `match` | ShareObjectView.tsx:46-53, 117-143 |
| 066 | feed card | AvatarImage, In_CustomTitle | the same | `match` | ShareObjectView.tsx:145-174 |
| 067 | ProfileList block | events SubscriptionDenied and Share (Share never raised) | ProfileListBlock | `match` | LegacyShareObjectPage.tsx:20-28 |
| 068 | Input_SearchFilter | MaxLength 50, "Share with...", search, OnChange, OnKeyup | the same | `match` | ProfileList.tsx:143-153 |
| 073 | results area | list, no results, "Error Searching ", "Searching" | the four states | `match` | ProfileList.tsx:62-134; profileListState.ts:112-115 |
| 079 | IsShared icon | check-circle, colour #009706 | NotCaptured wrapper, no inline colour | `differs` | decision Q5 (knowledge/auto-decisions-2026-10-15.md:44; user review :73) |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 051 | OnInitialize | GetUserInformation_Wrapper, then User_AgeVisibility = DisplayAge, before the view | page effect after the block's OnReady | `partial` | **F2**; LegacyShareObjectPage.tsx:47-54; TST `_onInitialize$Action` (async), onInitializeEventHandler line 353 |
| 055 | SubscriptionDenied event | App_Subscription_ShowUpgradePopUp | `onSubscriptionDenied={showUpgradePopUp}` | `match` | LegacyShareObjectPage.tsx:72; TST re-raises from ProfileList (ScreenBlock_ShareObject.mvc.js:632) |
| 069 | Input_SearchFilterOnChange | Refresh if Trim = "" and HasSearched; HasSearched False | the same | `match` | useProfileList.ts:142-146 |
| 070 | Input_SearchFilterOnKeyup | Enter → SearchProfile; blur | `event.key === 'Enter'` | `match` | useProfileList.ts:180-188 |
| 074 | OnClick of the share icon | DeferHandleShare, not awaited | `onShare(profileId)` | `match` | ProfileList.tsx:111-118 |

**Validations**

None. The MaxLength of Input_SearchFilter is row 068.

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 058 | block OnInitialize | IsLoading True | initial state | `match` | shareObjectState.ts:42-46 |
| 059 | OnReady, Household | GetHouseholdDetails(Id, User_AgeVisibility, CheckVisibility False) | the same call, User_AgeVisibility False | `partial` | **F2**; useShareObject.ts:91-97 |
| 060 | household assignments | Name, FamilyNames, "Locality, Country" | the same | `match` | shareObjectState.ts:55-61 |
| 061 | OnReady, Campus&Co or OneSchool Global | Get_UI_CommunityBusinessShareCard | the same | `match` | useShareObject.ts:98-104 |
| 062 | AreasServed | + ", " + CountryName when set | the same | `match` | shareObjectState.ts:65-70 |
| 063 | IsLoading False | at the end; an exception leaves it True | the same | `match` | useShareObject.ts:105 |
| 072 | NoResultsFoundMessage | "No results found for '" + SearchFilter + "'" | the same | `match` | profileListState.ts:80; TST ProfileList.mvc.js:1006-1013 |
| 095 | ShareProfiles build loop | shared ids kept, list rebuilt, IsShared by ListAny, four fields | the same steps and fields | `match` | profileListState.ts:73-90; TST ProfileList.mvc.js:1006-1050 |
| 075 | ShareObject call | type, id, "First Last", target, "", null DateTime | the same six inputs | `match` | useProfileList.ts:148-157; api/share/mapper.ts:62-69; TST ProfileList.mvc.js:797 |
| 076 | IsAllowed and IsSuccess | row IsShared True | `profileShared` | `match` | useProfileList.ts:158-162; TST ProfileList.mvc.js:803-812 |
| 077 | IsAllowed, not IsSuccess | error message, id removed, row reset | the same | `match` | useProfileList.ts:163-166; TST ProfileList.mvc.js:816, 824-845 |
| 078 | not IsAllowed | id removed, row reset, SubscriptionDenied | the same | `match` | useProfileList.ts:165-167; TST ProfileList.mvc.js:856-857 |

**Strings**

All 6 strings of the blocks match (row 080: ProfileList.tsx:130, 151; profileListState.ts:80; ShareDetailView.tsx:37;
ShareObjectView.tsx:189).

## 3. Blocks of the flow

### 3.1 HandleOnResumeOpenLink

The block runs only in the native app: its two plugin blocks raise their events from Cordova. Decision U14 drops the
native link plugins and keeps plain URLs and the resume-link helper (`migration/app-shell.spec.md:346`, answer at
`:381`). React mounts two empty blocks without events (`app/src/platform/navigation/OpenLinkOnResume/OpenLinkOnResume.tsx:15-21`).

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 082 | block tree | AndroidAppLinkOnResumeHandler, DeeplinkHandlerCentral | two empty blocks | `n/a` | native only (U14) |
| 083 | Action_ProcessURL: not signed in, locked or registering | SetResumeLoginLink(URL) | - | `n/a` | native only (U14); BR-UBTCON-632 |
| 084 | Action_ProcessURL: else | RedirectToURL(URL) | - | `n/a` | native only (U14); DEV Inherited, TST Default (§6.1) |
| 085 | ResumeNavigation | GetURLFromEventDataURL, then Action_ProcessURL | - | `n/a` | native only (U14) |
| 086 | OnDeeplinkOpen: MessageDetail or AssembleDetail | skip | - | `n/a` | native only (U14); BR-UBTCON-633 |
| 087 | OnDeeplinkOpen: else | GetURLFromEventDataURL, then Action_ProcessURL | - | `n/a` | native only (U14) |
| 088 | GetURLFromEventDataURL | rewrite ConnectSharing/Details to UBTConnect/ConnectShare | `getColdStartLinkURL` returns "" | `n/a` | native only (U14); BR-UBTCON-515; platform/session/resume.ts:12-17 |

### 3.2 Blocks of other flows

- ScreenBlock_ShareDetail, ScreenBlock_ShareObject and ProfileList (`Connect2_LegacyShared`, referenced): checked in §2
  against their TST files.
- CommonUI_InsideLayout, UnsupportedVersion*, OfflineDataSyncEvents, WelcomeToConnect (App_Common), the PIN blocks
  (App_PIN), Policy_Checker (App_Policies): reached through the layout. Checked in the reports of those flows.
- Dialog_AccessRestrictedAction and Dialog_AccessRestrictedAction_Legacy (`UBTConnect_Utils`): rows 009 and 054 check
  the arguments. The internals are not checked here.

## 4. Shared blocks and actions

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 089 | SetResumeLoginLink (Share_Utils) | park the URL on `window.applinks.resumeLoginLink` | module variable; `getResumeLoginLink` reads and clears it | `match` | platform/session/resume.ts:8-24; U14 keeps the helper; both live for one page load; BR-UBTCON-527 |
| 090 | other shared actions (29 flows) | Get_IsUnsupported*, OfflineDataSync*, OpenGooglePlay_*, Upgrade_*, GetUserInformation_Wrapper | - | `n/a` | Get_IsUnsupported* and OfflineDataSync*: report of App_Common; the calls of GetUserInformation_Wrapper are rows 040 and 051; the others are not checked here (shared) |

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| F1 | minor | ConnectShare / Action_Redirect | TST opens HouseholdDetails, OneSchoolGlobalDetails, FeedItemDetail and SupperMeeting_Details with `TransitionAnimation.None` (ConnectShare.mvc.js:461-485). React calls `navigate(path, params)` without a transition, so the target slides in from the right. CR-F18-1 ports the compiled transitions 1:1, but its call-site list names ConnectShare.mvc.js:293 only. | app/src/pages/ConnectShare/hooks/useConnectShare.ts:122 | Pass `{ transition: TransitionAnimation.None }` to `navigate`. |
| F2 | minor | LegacyShareObject / OnInitialize | TST ends the async OnInitialize before the runtime creates the view (OutSystems.js:17). So ScreenBlock_ShareObject starts with the user's `DisplayAge`. React runs OnInitialize in a page effect after the block's OnReady. When `DisplayAge` is True, `GetHouseholdDetails` gets False, and the late change fetches `GetShareObjectTypeById` a second time. The page comment "as in the old port" is not a decision. | app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx:47-54; hooks/useShareObject.ts:25-30, 60-67 | Render ScreenBlock_ShareObject only after OnInitialize ends (an `isInitialized` flag, as ConnectShare does). |
| F3 | info | ConnectShare / Dialog_AccessRestrictedAction_Legacy | The page returns null while `IsRedirect` is True, so the closed dialog is not in the DOM. TST renders the dialog outside the If (ConnectShare.mvc.js:196-208). No visible effect: the pop-up opens only when `IsRedirect` is False. | app/src/pages/ConnectShare/ConnectSharePage.tsx:17, 21 | Return null for `!isInitialized` only, and put the `isRedirect` test around ShareDetailView. |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| Roles of ConnectShare and LegacyShareObject | Registered, UBTOne_User | `OS.RolesInfo.checkRegistered()` only | TST: MEMBER_ROUTE | ConnectShare.mvc.js checkPermissions; LegacyShareObject.mvc.js:379 |
| OnInitializeSharingScreen: AuditShareViewEvent on the success path | [DISABLED] node | absent | TST: no call | UBTConnect.controller.js:15622-15712 |
| OnInitializeSharingScreen: GetShareAttributes | [DISABLED] node | absent | TST: no call | UBTConnect.controller.js:15622-15712 |
| AuditShareViewEvent: zOnApplicationEvent_Wrapper2 | [DISABLED] node | absent; the JSON is built and serialised only | TST: nothing is sent | UBTConnect.controller.js:782-830 |
| HandleOnResumeOpenLink Action_ProcessURL → RedirectToURL | transition Inherited | `TransitionAnimation.Default` | not built (U14) | HandleOnResumeOpenLink.mvc.js:309 |
| ScreenBlock_ShareDetail, ScreenBlock_ShareObject, ProfileList | signatures only (pack/references.md) | full code: OnParametersChanged, ActionShareObject, HandleShareProfileList, the ProfileList flows | TST | Connect2_LegacyShared.Share_UI.*.mvc.js |

### 6.2 KB pages vs TST (for the KB owner)

The KB page comes from DEV (2026-10-05). In one place it disagrees with the DEV pack and with TST. React follows TST
except where F3 says.

| Id | KB text | TST evidence | File |
|---|---|---|---|
| K1 | ConnectShare, Components: "If `not IsRedirect` → `ScreenBlock_ShareDetail(StatusMessage)` … and `Dialog_AccessRestrictedAction_Legacy`": the dialog reads as part of the If branch | The `$if` closes before the dialog (line 196): the dialog is a sibling of the If. The DEV pack agrees. | `ui/legacy-share.md`; `UBTConnect.Legacy_Share.ConnectShare.mvc.js:152-208` |

## 7. Questions for the user

No question. No row is `unclear`.

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 4 | 4 | 0 | 0 | 0 | 0 | 0 | 0 |
| data | 12 | 5 | 1 | 0 | 0 | 5 | 1 | 0 |
| ui | 17 | 13 | 1 | 0 | 1 | 0 | 2 | 0 |
| actions | 26 | 15 | 5 | 0 | 0 | 0 | 6 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 32 | 24 | 1 | 0 | 1 | 0 | 6 | 0 |
| strings | 4 | 3 | 0 | 0 | 0 | 0 | 1 | 0 |
| **total** | **95** | **64** | **8** | **0** | **2** | **5** | **16** | **0** |
