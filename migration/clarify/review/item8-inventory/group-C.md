# W23 inventory, group C (14 hooks)

Scope: side effects after the first `await` that are not plain state writes. TST dumps are in `scratchpad/w23C/`
(`<Block>.js`, `screen_<Screen>.js`; names below are those files). React paths are under `app/src/pages/`.
`†` = rejection raised to the flow handler (`raiseToFlowHandler`, `useFlowState` catch or an explicit `.catch`).
`legacy/os/exceptions.ts:82-104` and `platform/feedback/errorPage.ts:17-22`: a user exception shows the message;
a system exception calls `showErrorPage` with no context check. TST: a failure of an R1 await reaches no handler; a
failure of a module action or R2 path reaches the screen handler, and a system exception cannot open the error page
(out of context). So a `†` row is `same` for a user exception and `react-extra` for a system exception, and
`react-extra` when the await is R1. Verdict `react-extra` is used for both; the cell says which.
Other platform facts used: `useOsNavigate`/`osNavigateTo` (`platform/navigation/osNavigate.ts:102-127`) has no
out-of-context check; `confirmAction` (`platform/feedback/dialogs/confirmAction.ts:11-21`) resolves false when the
dialog element is gone, as TST `NavigationHandler.controller.js:257-279` (ShowDialogJS resolves, Result False).
Event chain for blocks of AssembleDetail: the block event goes up to the screen handler in
`screen_AssembleDetail.js` (`Handler_NavigateToHousehold` :1049, `Handler_NavigateTo_EmailContact` :892,
`Handler_NavigateToHouseholdCarousel` :716, `Handler_NavigateTo_ShareObject` :644), each starts with
`ensureControllerAlive` (R3) and ends in `OS.Navigation.navigateTo` (R4). So an event from a left block does nothing.

### AssembleDetail/hooks/useAssembleDetail.ts
Origin: `Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail`. No post-await side effect (OnReady returns
`Promise.resolve()`, :35-40; UpdateTitle is synchronous, :45-48).

### AssembleDetail/hooks/useAssembleEventContact.ts
Origin: `Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Contact`. Block has no OnReady.

| Flow | Awaited call (TST kind, evidence) | Side effect after await | React (guarded?) | TST after leaving | Verdict |
|---|---|---|---|---|---|
| onClickHostContact | HasAccessToRegion, module action (AssembleEventDetail_Contact.js:632), runs | NavigateTo_Household event (nav) | :104, not guarded | event goes to the screen handler: R3 stop (screen_AssembleDetail.js:1049), also R4 (:1059) | react-extra |
| onClickHostContact | same | App_Subscription_ShowUpgradePopUp (module popup) | :105, not guarded | module action of UBTConnect_Utils, runs (AssembleEventDetail_Contact.js:640) | same |
| onContactByEmail | GetCacheableSignedPhotoURL, module (:567), runs | NavigateTo_EmailContact event (nav) | :119, not guarded | R3 stop at the screen handler (screen_AssembleDetail.js:892), R4 (:913) | react-extra |
| all async handlers | module actions (:508, :567, :632, :747) | raise † | :149, :150, :151, :158 | failure of a module action reaches the screen handler; system exception: no error page | react-extra (system exception only; user exception same) |

onContactByMessage and onOptionsCall: after the await only guarded state writes (:110, :137-141); the two toasts
(:115, :131) are before any await. TST toasts: AssembleEventDetail_Contact.js:561, :709.

### AssembleDetail/hooks/useAssembleEventContactList.ts
Origin: `Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList`.

| Flow | Awaited call | Side effect after await | React | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady | GetCacheableMemberContactList, module action (AssembleEventDetail_ContactList.js:291) | raise † | :41-42 via useFlowState | module failure reaches the screen handler; system exception: no error page | react-extra (system exception only) |

The state write is guarded (:47). No other side effect.

### AssembleDetail/hooks/useAssembleEventDetail.ts
Origin: `Connect2_Assemble_MUI.Assemble.AssembleEventDetail`. OnReady calls `Refresh Query: GetAssembleEvent`
(AssembleEventDetail.js:806, :864-885), data action = R1. `GetAssembleEvent_OnAfterFetch` (:922) holds the toast and UpdateTitle.

| Flow | Awaited call (TST kind) | Side effect after await | React (guarded?) | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady | GetAssembleEvent, data action R1 (:806) | ShowUnknownErrorMessage (toast, IsUnavailable meeting) | :84, not guarded (comment :34-35 says it still shows) | OnAfterFetch does not run (R1), no toast; the toast node is inside OnAfterFetch (:933-934) | react-extra |
| OnReady | same | UpdateTitle event to the parent | :88, guarded (`newestReadyRun`) | not run (R1) | same |
| OnReady | same | raise † | :56-60 via useFlowState | nothing (R1) | react-extra |

### AssembleDetail/hooks/useAttendeeSubdivision.ts
Origin: `Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision`.

| Flow | Awaited call (TST kind) | Side effect after await | React (guarded?) | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady (new visit) | GetCacheableSubdivision_V2, module action (AssembleEventDetail_AttendeeSubdivision.js:846), runs | local read GetLocalBookmarksByObjectType | :126, not guarded (only the write is) | `_set_SelectedAssembleAttendeeListBookmarks$Action` (:879) is a call to a client action of the left block: `ensureControllerAlive` (:1153), R3 stop | react-extra (local read only, no visible effect) |
| OnReady | module action | raise † | :102 via useFlowState | module failure reaches the screen handler | react-extra (system exception only) |
| onClickHousehold | MaybeDisplaySubscriptionPopup, module (:738) | SetPreloadObject (global store) | :132, not guarded | NavigationHandler module action, runs (:756) | same |
| onClickHousehold | same | NavigateTo_HouseholdCarousel (nav) | :133, not guarded | event to the screen handler: R3 (screen_AssembleDetail.js:716), R4 (:779) | react-extra |
| onClickHousehold | same | RememberFocusedScrollAnchor (TST module action, :747) | none in the hook | module action, runs | unclear (React has no call here; `rememberFocusedScrollAnchor` exists in `platform/navigation/scrollAnchors.ts` but only Updates_SingleList uses it; not a W23 point, a port gap; needs a model check) |
| onClickBookmarkButton | MaybeDisplaySubscriptionPopup, module (:952) | ConfirmAction | :138 | module action, runs; dialog element gone: resolves false (NavigationHandler.js:257-279) | same |
| onClickBookmarkButton | ConfirmAction, module (:964) | ToggleBookmarkItem (bookmark write, module) | :139-145, not guarded | module action, runs (:980) | same |
| onClickBookmarkButton | module actions | raise † | :169 | module failure reaches the screen handler | react-extra (system exception only) |
| onClickShareConnect | MaybeDisplaySubscriptionPopup, module (:1038) | NavigateTo_ShareObject (nav) when no extended share | :158, not guarded | event to the screen handler: R3 (screen_AssembleDetail.js:644), R4 (:666) | react-extra |

onParametersChanged (:114-117): the awaited local read is the first await, the write is guarded: no side effect
after it. TST: `onParametersChangedEventHandler` (:1411-1421) calls the action while alive.

### AssembleEvents/hooks/useAssembleEvents.ts
Origin: `Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents`.

| Flow | Awaited call (TST kind) | Side effect after await | React | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady | SubdivisionId <> 0: GetSubdivisionName data action R1 (ScreenBlock_AssembleEvents.js:625, :499); SubdivisionId 0: GetCacheableUserInfo module (:614) | raise † | :55-60 via useFlowState; write guarded :74 | R1: nothing; module: handler | react-extra (R1 path; system exception only on the module path) |

### AssembleEvents/hooks/useAssembleFilterSheet.ts
Origin: `Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet`.

| Flow | Awaited call (TST kind) | Side effect after await | React (guarded?) | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady | GetCacheableUserInfo, module (Assemble_FilterSheet.js:628) | FetchCountries: Cache_UserInfo_Get + GetCacheableRegionSubscribedCountries (reads) | :101 -> :94, not guarded | `_fetchCountries$Action` (:636) is a client action of the left block: `ensureControllerAlive("FetchCountries")` (:800), R3 stop | react-extra |
| OnReady | same | raise † from FetchCountries | :78-83 via useFlowState | stop (R3), no handler | react-extra |
| onChangeSearchTerm (empty) | Cache_UserInfo_Get + GetCacheableRegionSubscribedCountries, module (:677, :683) | none but the guarded write (:109) | :108-109 | module actions, run | same |
| onChangeSearchTerm | same | raise † | :138 | module failure reaches the screen handler | react-extra (system exception only) |
| goToBrowseCountry | HasAccessToRegion, module (:875) | ConfirmAction (FreeSubscriptionAlert) | :120, not guarded | module action, runs (:883); dialog gone: resolves false | same |
| goToBrowseCountry | same | raise † | :141 | module failure reaches the screen handler | react-extra (system exception only) |

onFreeSubscriptionAlert (:150): one await, no side effect after it. onApply/onCancel: synchronous.

### AssembleEvents/hooks/useAssembleSummaryList.ts
Origin: `Connect2_Assemble_MUI.Assemble.AssembleSummary_List`. Data actions R1: GetAssembleEventTypes (AssembleSummary_List.js:658), GetAssembleMeetingSummaryList (:686).

| Flow | Awaited call (TST kind) | Side effect after await | React (guarded?) | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady (SubdivisionId 0, new visit) | SetLocalSubdivisonId -> GetCacheableUserInfo, module (:752, :1012) | GetAssembleEventTypes call (read) | :141, not guarded | FetchData JS calls `Refresh_GetAssembleEventTypes` (:1776), a client action of the left block: `ensureControllerAlive` (:1565), R3 stop (error ignorable) | react-extra |
| same | same | GetAssembleMeetingSummaryList call (read) | :143, not guarded | `Refresh_GetAssembleMeetingSummaryList` (:1772) R3 (:1504) | react-extra |
| OnReady, refresh on filter, Clear, tag, paging | data action R1 (:686, :1121, :1159) | raise † (refreshSummaryList/refreshEventTypes rethrow, :107-110, :119-122) | :141, :143, :162, :184, :193 | R1: nothing | react-extra |
| same | same | `summaryFailed`/`eventTypesFailed` state writes | :108, :120 guarded | n/a | same |

OnReady with SubdivisionId <> 0 or a restored view: the calls start while alive (read, same); only the raise differs.
`scrollContentToTop` (:155) and `getIANATimezone` are before the await. onClickMeeting (:197-201): synchronous.

### Assemble_BrowseByCountry/hooks/useAssembleFilter.ts
Origin: `Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter` (ScreenBlock_Assemble_Filter.js).

| Flow | Awaited call (TST kind) | Side effect after await | React (guarded?) | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady (new visit) | GetCacheableUserInfo, module (:914) | FetchCountries reads (Cache_UserInfo_Get, GetCacheableRegionSubscribedCountries) | :130 -> :123, not guarded | `_fetchCountries$Action` (:922) R3 (`ensureControllerAlive("FetchCountries")` :1033) | react-extra |
| OnReady | same | raise † | :107-112 via useFlowState | stop (R3) | react-extra |
| onChangeSearchTerm (empty) | module actions (:658, :664) | guarded write only | :138-139 | run | same |
| onChangeSearchTerm | same | raise † | :161 | module failure reaches the screen handler | react-extra (system exception only) |
| goToBrowseCountry | HasAccessToRegion, module (:819) | ConfirmAction | :151 | module action runs (:827); dialog gone: resolves false | same |
| goToBrowseCountry | same | raise † | :164 | as above | react-extra (system exception only) |

onFreeSubscriptionAlert (:168) and onBackNavigation (:184-189): no post-await side effect.

### OrbitAdminEventDetail/hooks/useAdminEventDetail.ts
Origin: `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail`.

| Flow | Awaited call (TST kind) | Side effect after await | React (guarded?) | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady/RefreshData | Get_EventInformation, data action R1 (ScreenBlock_AdminEventDetail.js:851, refresh :1339) | raise † | :70-75 via useFlowState; writes guarded :91-92 | nothing (R1); OnAfterFetch (:859) dropped | react-extra |
| onClickScanQrCode | CheckBarcodePlugin, module (:1216) | toast "plugin not available" | :188 | R5: shows (:1276) | same |
| onClickScanQrCode | same | LaunchQRCodeScanner audit event | :193-200, not guarded | module action, runs (:1229) | same |
| onClickScanQrCode | audit (module) | ScanBarcode (opens the scanner) | :203-216 | module plugin action, runs (:1242) | same |
| onClickScanQrCode | ScanBarcode (module plugin) | toast of a failed scan (not closed by the user) | :223 | R5: shows (:1265) | same |
| onClickScanQrCode -> OnHandle_ScanCode | ScanBarcode, then call `_onHandle_ScanCode$Action` | toast UNPROCESSABLE_QR_CODE | :116 | call to a client action of the left block: `ensureControllerAlive("OnHandle_ScanCode")` (:935), R3 stop; toast node (:1126) not reached | react-extra |
| same | same | GetMemberByMemberId (R2 server read) + signed image URL | :119-124 | not reached (R3 at :935) | react-extra |
| same | same | GetScanEventQRCode check-in (server write) | :137-144 | not reached (R3 at :935). If the user leaves during GetMemberByMemberId (flow already inside OnHandle_ScanCode), TST still sends the check-in (R2, :995) | react-extra (flow entered after leaving); same (flow started alive) |
| same | same | QRCodeScanned audit event | :160-167 | not reached after leaving: `_onToggle_PopupQRCode$Action` (:1048) is R3 and comes before the audit (:1056) | react-extra |
| onClickScanQrCode / OnHandle_ScanCode | module actions and R2 server actions | raise † | :242, :245, :248; inner catch rethrows :169-180 | failure of a module action or R2 reaches the screen handler; system exception: no error page | react-extra (system exception only) |

onScanEventDone/onErrorMessageOk: the awaited call is onClickScanQrCode (same rows). Writes after awaits are guarded.

### OrbitAdminLanding/hooks/useAdminLanding.ts
Origin: `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding`.

| Flow | Awaited call (TST kind) | Side effect after await | React (guarded?) | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady | Refresh_GetEventsByMemberId -> Get_AdminEventsList, data action R1 (ScreenBlock_AdminLanding.js:452, :550) | raise † | :61-66 via useFlowState; write guarded :77 | nothing (R1); OnAfterFetch (:460) dropped | react-extra |
| eventCardClicked | NavigateTo_EventDetail event (screen handler navigates) | OnApplicationEvent_ClickEvent audit | :96, not guarded | module action, runs after the event (ScreenBlock_AdminLanding.js:595-599). The click happens while alive, so the order is as React | same |

### OrbitAdminLanding/hooks/useNavigateToEventDetail.ts
Origin: `UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding`. React: no await; one synchronous `navigate` (:14-16): no post-await side effect.
TST (live survey of 2026-10-28, OrbitAdminLanding.js:244-290): the handler has `ensureControllerAlive` (:250), then awaits
`getMilestoneScanFF$ServerAction` (R2, :269) and navigates (R4 blocked after leaving) to OrbitAdminMilestones (:275) or
OrbitAdminEventDetail (:282). The hook comment (:8-9) says TST has no such call; the current dump has it.

| Flow | Awaited call (TST kind) | Side effect after await | React | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnHandle_NavigateToEventDetail | GetMilestoneScanFF, R2 server action (OrbitAdminLanding.js:269) | navigation | :14-16, no await, no call | navigation blocked (R4) | unclear (the live TST dump has a call and a branch that React lacks; DEV or TST must be checked by the orchestrator with the MCP; if ported, the navigation after the await must be guarded) |

### OrbitLanding/hooks/useOrbitLanding.ts
Origin: `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding`. Both data actions R1 (ScreenBlock_OrbitLanding.js:961, :989); the chain continues in OnAfterFetch (:1653-1675, :1208-1218).

| Flow | Awaited call (TST kind) | Side effect after await | React (guarded?) | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady | Refresh_GetHouseholdMembers, data action R1 (:1729) | Get_EventsByMemberId call (read, the flow's own copy of the variables) | :130, not guarded | OnAfterFetch_Get_HouseholdMembers dropped (:1653), so Refresh_GetEventsByMemberId (:1674) never starts | react-extra |
| OnReady / member click | R1 | `scrollContentToTop` DOM write on `.content` (after a sort) | :123 via :132 | not run (SortEvents :1587 is in the dropped OnAfterFetch chain) | react-extra |
| OnReady | R1 (`.then` after the refresh, :1729) | GetPopupMeasurements and AppManager_GetCachedUserInfo (local reads into the flow copy) | :153-154 | `.then` never runs (:1731-1735) | react-extra (no visible effect) |
| clickedHouseholdMember | Refresh_GetEventsByMemberId, R1 (:1139) | OnApplicationEvent_SwitchMember audit | :165, not guarded | `.then` after the refresh never runs (:1139), audit (:1153) not run | react-extra |
| OnReady / member click | R1 | raise † | :98-107 via useFlowState, :182 | nothing (R1) | react-extra |

Other handlers (:176-229) have no await. The `afterUnmount` copy (:86, :111-116) keeps the flow's variables; it is the reason the later calls go out.

### QRCodeGenerate/hooks/useGenerateQrCode.ts
Origin: `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode`.

| Flow | Awaited call (TST kind) | Side effect after await | React (guarded?) | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady/RefreshData | GetCacheableSignedImageURL, module (ScreenBlock_GenerateQRCode.js:784), runs | Get_EventQRCode call (read, own copy of the variables) | :75, not guarded | `Refresh Query: Get_EventQRCode` (:792) follows in RefreshData with no client-action check; the call goes out, answer dropped (R1 :643) | same |
| OnReady/RefreshData | Get_EventQRCode, data action R1 (:643) | raise † | :52 via useFlowState | nothing (R1); a failure of the signed URL (module) reaches the handler | react-extra (R1 failure; the module failure is same except for a system exception) |

onContactHelpdesk (:89-103): no await.

## Summary

| Hook | Side effects | same | react-extra | react-missing | unclear |
|---|---|---|---|---|---|
| useAssembleDetail | 0 | 0 | 0 | 0 | 0 |
| useAssembleEventContact | 4 | 1 | 3 | 0 | 0 |
| useAssembleEventContactList | 1 | 0 | 1 | 0 | 0 |
| useAssembleEventDetail | 3 | 1 | 2 | 0 | 0 |
| useAttendeeSubdivision | 9 | 3 | 5 | 0 | 1 |
| useAssembleEvents | 1 | 0 | 1 | 0 | 0 |
| useAssembleFilterSheet | 6 | 2 | 4 | 0 | 0 |
| useAssembleSummaryList | 4 | 1 | 3 | 0 | 0 |
| useAssembleFilter | 6 | 2 | 4 | 0 | 0 |
| useAdminEventDetail | 10 | 4 | 6 | 0 | 0 |
| useAdminLanding | 2 | 1 | 1 | 0 | 0 |
| useNavigateToEventDetail | 1 | 0 | 0 | 0 | 1 |
| useOrbitLanding | 5 | 0 | 5 | 0 | 0 |
| useGenerateQrCode | 2 | 1 | 1 | 0 | 0 |
| Total | 54 | 16 | 36 | 0 | 2 |

Notes for the orchestrator:
- Rows marked "system exception only" are `same` for a user exception; they are `react-extra` because `showErrorPage` has no context check.
- Hardest findings: AdminEventDetail check-in write, audit and member reads after leaving (TST R3 at OnHandle_ScanCode); EventDetail toast (TST OnAfterFetch dropped, hook comment says it still shows); OrbitLanding chain (second fetch, scroll, audit); SummaryList and FilterSheet/Filter OnReady extra reads.
- One TST code point to confirm with the MCP: OrbitAdminLanding GetMilestoneScanFF (live TST has it, React and its comment say no).
- Not checked: the TST code of the module actions themselves (Connect2_LegacySharedController, Connect2_Assemble_MUIController, BarcodePluginController); the brief says module client actions run after leaving.
