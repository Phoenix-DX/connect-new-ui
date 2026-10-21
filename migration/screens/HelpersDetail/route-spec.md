# Route spec: HelpersDetail

Sources: `S` = analysis/sources/pretty/UBTConnect.Legacy_OrbitEventsFlow.HelpersDetail.mvc.js, `HB` =
analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.mvc.js, `C` =
migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js, `DOM` = analysis/dom/default.html.

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/HelpersDetail` with inputs In_EventId (Long Integer), In_OrbitMilestoneTypeId, In_MilestoneName, In_EventName (Text), In_HostId (Long Integer) [pack.md; S :180-188] |
| Tier | lite |
| Captured | 2026-10-16, viewport 390×844, states: default (no helper), loading (skeleton), offline (skeleton + Service Interruption message) [states.json] |
| Shared/shell components used | Layout_Orbit, MenuIcon__UpdatedOSUI (shared/Connect2_LegacyShared); MilestoneHeader, Accordion_Orbit, Card_MemberInformation, NoInformation_Orbit, Skeleton_Loading, ContactHelpdesk_Footer, lib (checkDirectoryAccess, getLocalOrbitMilestoneTypeById) (shared/Connect2_OrbitMobile_MUI); DEPRECATED_AccordionItem (shared/osui); Dialog_AccessRestrictedAction_Legacy, ContactPopup_ByPhone (shared/UBTConnect_Utils); getCacheableMemberContactList, getCacheableTimezoneInfo (shared/Connect2_LegacyShared/lib); CommonUI_InsideLayout (shell) |
| Screen-specific components | ScreenBlock_HelperDetails (components/), client actions (components/actions.ts) |

## Specification
### Structure
Screen = ScreenBlock_HelperDetails `$b1` (placeholders Menu and CommonUI_Elements empty) + CommonUI_InsideLayout `$b2` [S :180-245].

The block has these parts:
- Layout_Orbit `b1-$b1` with CustomClass "orbit-detail" [HB :244].
- HeaderLeft: MenuIcon__UpdatedOSUI `b1-$b2` with MenuAction Auto [HB :275].
- Title: MilestoneHeader `b1-$b3` with In_PreloadEventName, In_PreloadMilestoneName, In_OrbitMilestoneTypeId [HB :297-301].
- Content (below).
- BottomBar: ContactHelpdesk_Footer `b1-$b9` [HB :585-610].
- After the layout: Dialog_AccessRestrictedAction_Legacy `b1-FreeSubscriptionAlert` and ContactPopup_ByPhone `b1-$b11` [HB :640-690;
  DOM :105-118].

Content [HB :324-580]:
- When IsFetchingData: Skeleton_Loading `b1-$b8` (GetSkeletonLoadingIdFromMilestoneTypeId(In_OrbitMilestoneTypeId), C:4526-4590).
- Else, when helpers are not empty [HB :325-520]:
  - Container "full-width margin-top-m" › Accordion_Orbit `b1-$b4` (In_MultipleItems True, extended class "" inside this branch).
  - › List "list list-group" of DEPRECATED_AccordionItem (ExtendedClass "orbit-accordion-item" + " margin-top-s" after the first, UsePadding False, title GetFormattedStringFromHelperType(Role)).
  - › List "list list-group orbit-household-list" of Container › Card_MemberInformation (Is_ShowPersonalInfo True, In_DisplayDot False, In_HouseholderId = member HouseholderId, placeholders empty).
- Else, when data is fetched: NoInformation_Orbit `b1-$b7` "There is no Helper available." [HB :528-545; DOM :77-83].

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| Connect2_OrbitMobile_MUI `ScreenBlock_HelperDetails/DataActionGetHelperDetails` | data action, on demand | OnReady → RefreshData [HB :871-928, :1309-1342; calls.md #1] | block variables (IsFetchingData, IsFetchingPhoneData, OrbitMilestoneType, In_*) | Response.GetHelperHost_Response (EventDetails, Helpers) → HelperData (OnAfterFetch_GetHelperHost HB :757-785) | not in MCP; scoped to In_EventId / In_HostId | real (event 7301: no helper, as captured), helpers (Q2), empty, loading, error |
| Connect2_OrbitMobile_MUI `ActionGetDirectoryAccess` | server action | member card click → CheckDirectoryAccess [HB :1226-1290] | Id, Type Member | RecordDisabled | shared lib (CR-MilestoneDetail-1) | shared mock |
| Connect2_LegacyShared GetMemberContactByCacheKey / GetTimezoneInformation / GetSignedImagesInBulk | server actions | phone click → BuildMemberCallData; card OnReady photo [HB :963-1100] | as compiled | contact popup data, photo | shared lib / MilestoneDetail mocks | helpers scenario only |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| block | OnReady [HB :871-928] | restored from the view cache → nothing (P-BACK); else OrbitMilestoneType = GetLocalOrbitMilestoneTypeById(In_OrbitMilestoneTypeId), RefreshData: IsFetchingData True, GetHelperDetails, OnAfterFetch: HelperData, IsFetchingData False | #1 | – | – |
| member card | ClickedMember(HouseholdId) [HB :1226-1290] | CheckDirectoryAccess(HouseholdId, Member): access → NavigateTo_HouseholdDetail, then OnApplicationEvent_ViewHousehold (log, ids only); else App_Subscription_ShowUpgradePopUp | GetDirectoryAccess | HouseholdDetails(HouseholdId) [S :330-345] | upgrade popup |
| member card | ClickedPhone [HB :786-830, :963-1100] | phone not "" → BuildMemberCallData (popup with name/photo, member contacts or timezone) | contacts, timezone, photo | – | ContactPopup_ByPhone |
| popup | Call / Cancel [HB :1174-1216, :938-962] | Call: OnApplicationEvent_CallMember (log, ids only), then ShowPopup False; Cancel: ShowPopup False | – | – | – |
| footer | Click [HB :1143-1173] | NavigateTo_ContactHelpdesk(GetContactHelpdeskSubject_Event(In_PreloadEventName, EventDetails.StartDate, EndDate, Location) (C:1961-1990), In_PreloadEventName) → screen OnHandle_ContactHelpdesk: GetHasOrbitAccess (flag mobileOrbitAccess) | – | ContactByEmailOrbitHelpdesk(In_EventName, In_Subject, In_EventId, In_MilestoneId "") [S :290-300]; no access → HomeFeed | no access: "You don't have access to Orbit. …" after the transition (type 3) |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | fetched, Helpers empty → NoInformation [HB :528] | yes | real |
| loading | IsFetchingData [HB :324, :556] | yes | loading |
| offline | IsFetchingData (call never answers) + shell offline message | yes | (route.py offline) |
| helpers list | Helpers not empty [HB :325] | no | helpers (Q2) |

## Patterns used
- P-PARAMS: query inputs with the original names; navigations with the compiled parameter order (index.tsx).
- P-DATA / P-CALLS: api.ts `callAction('Connect2_OrbitMobile_MUI', 'ScreenBlock_HelperDetails/DataActionGetHelperDetails')` on OnReady.
- P-MOCKS: mocks.ts contractHandler from the shared Orbit world (orbit.ts ORBIT_EVENT_HELPERS).
- P-STATES: skeleton while IsFetchingData is True, NoInformation when empty, nothing before the first fetch.
- P-BACK: view cache restore (useWasRestoredFromCache / useViewState), as MilestoneDetail.
- P-LIST: OSList for both lists (virtualization disabled, as IsListVirtualizationDisabled).
- P-DIALOG: ContactPopup_ByPhone, upgrade dialog, feedback message after transition.
- P-FLAGS: useFlagOn('mobileOrbitAccess') for GetHasOrbitAccess.
- P-OSUI: DEPRECATED_AccordionItem from shared/osui.

## Feature flags
- `action:getHasOrbitAccess`: MCP unavailable (tst=on). Decision: default-only, TST value on (user, 2026-10-14). The React app implements it as useFlagOn('mobileOrbitAccess') with both code paths of the handler (no-access branch as compiled).
- `clientVar:App_PIN_BiometricEnabled`: not a flag (user, 2026-10-14); shell only.

## Unclear points
- Direct URL for parity of the click-reached states → Q1 (decision, answered: A [questions.md Q1])
- Helper list branch not captured; mock exposure and fictional role texts → Q2 (decision, answered: A [questions.md Q2])

## Decisions to confirm
- cloneQuery for default/loading/offline: `mocksession=unlocked&In_EventId=7301&In_EventName=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul&In_HostId=42438&In_OrbitMilestoneTypeId=helper-host&In_MilestoneName=Helper` (Q1)
- Mock: event 7301 has no helper allocated (captured); `?mock=helpers` shows Catering and Usher helpers of two Bahia Blanca households (Q2; role texts upper case are fictional, formatted as compiled "Catering/s")
- List item ids of the uncaptured helper branch follow the block aliases (`b1-$b5`, `b1-$b6` + row index), not captured
- OnApplicationEvent_ViewHousehold / CallMember go to the log with ids only (decision U17, as MilestoneDetail)
- Real answer mirrors the captured record: EventDetails with empty name/location and null dates (calls.md); the helpers
  scenario fills them from the event so the helpdesk subject has content (Q2)
- OrbitMilestoneType (GetLocalOrbitMilestoneTypeById in OnReady, HB :900-906) only travels as a block variable. The React app leaves it out with the record variables, as the other Orbit routes do (types.ts).
- Exemptions merged into parity-exemptions.json (draft: migration/screens/HelpersDetail/proposed-exemptions.json): back arrow via clicks, masked title
  wrap, skeleton shimmer phase, pixels. MOCK-LOADING-NO-SYNC-HELPERSDETAIL-HEADER is not merged: CR-HelpersDetail-1 fixes it instead [CR-HelpersDetail-1 status: applied; _merged note in proposed-exemptions.json].

## Change requests
- CR-HelpersDetail-1: shell/mocks: the `loading` scenario also stalls the app start's Sync_Info_GetMain, so
  MilestoneHeader has no LocalOrbitMilestoneType in loading/offline ("Helper ()" without icon) (applied)

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real (Q1 cloneQuery) | 0 | 0 | 0 | 0 | 0 | merged: VIA-BACK-MENUICON, CAPTURE-MASKED-TITLE, pixels |
| loading | loading (Q1 cloneQuery) | 0 | 0 | 0 | 0 | 0 | merged: as default; no MOCK-LOADING-NO-SYNC (CR-HelpersDetail-1 applied) |
| offline | offline (Q1 cloneQuery) | 0 | 0 | 0 | 0 | 0 | merged: + CAPTURE-SKELETON-SHIMMER-PHASE |

## Server-side notes
- GetHelperDetails must scope helpers to an event and host the session user may see (In_EventId / In_HostId come from the URL).
- GetDirectoryAccess decides household access server-side; the client check only hides navigation.
