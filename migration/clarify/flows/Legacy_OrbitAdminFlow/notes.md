# Legacy_OrbitAdminFlow: reader notes (stage 1, 2026-10-27)

Rows: draft.json (verdicts empty). Source of the logic: TST compiled files (list in "TST files").

## TST files read
- Screens: UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding.mvc.js (409 lines), ...OrbitAdminEventDetail.mvc.js (371), Legacy_OrbitAdminFlow.controller.js.
- Blocks: Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc.js (896 lines), ...ScreenBlock_AdminEventDetail.mvc.js (about 1570 lines).
- Module controller: Connect2_OrbitMobile_MUI.controller.js:5537 (OnApplicationEvent_ClickEvent) only.
- Line numbers in rows are lines of `tst_source.py show <file>`. Some view ranges are marked with "~" (approximate).

## TST presence check
Pack elements absent on TST:
- GetMilestoneScanFF call and the If "Has Scan Milestone?" in OnHandle_NavigateToEventDetail of OrbitAdminLanding. The TST action only navigates to OrbitAdminEventDetail (OrbitAdminLanding.mvc.js:244-253). grep GetMilestoneScanFF|MilestoneScan|OrbitAdminMilestone: no hit in the Landing and EventDetail wrappers, both blocks, UBTConnect.controller.js.
- Screens OrbitAdminMilestones and OrbitAdminMilestoneDetail and their blocks ScreenBlock_AdminMilestones / ScreenBlock_AdminMilestoneDetail: no compiled file (tst_source.py list AdminFlow shows only EventDetail and Landing blocks).
- Role UBTOne_User: the compiled checkPermissions has only checkRegistered (Landing :336, EventDetail :298).
- Transition: pack says Inherited; TST uses TransitionAnimation.Default.
TST elements absent in the pack:
- Block-internal logic of both screen blocks (pack has only signatures): OnReady with WasCurrentViewRestoredFromCache, Get_AdminEventsList / Get_EventInformation data actions, OnHandle_EventCardClicked with OnApplicationEvent_ClickEvent, the whole scan flow (OnClick_ScanQrCode, OnHandle_ScanCode, OnToggle_PopupQRCode, OnHandle_ScanEventDone, OnHandle_OrbitErrorMessage, ComponentDidUpdate_QRCode). Rows were built from TST.
- Block variables and widget tree of both blocks.

## Pack gaps
- Pack strings.md and data.md list items of shared blocks (App_Common, App_PIN, BottomBar) and not of this flow's own screens and blocks. Own strings were taken from TST.
- Client variables in data.md (App_PIN_*, App_Policies_*, Directory_Updates_*, IsNavigateToHomeOnBack) are read by CommonUI_InsideLayout / BottomBarMenu, not by these screens; no row.
- The pack screens.md describes Landing OnHandle_NavigateToEventDetail as in DEV. TST differs (see above).
- Not read: Popup_QRCodeScan block, Card_Event block, NoInformation_Orbit, OrbitErrorMessage, Layout_Orbit (referenced blocks; React files app/src/components/orbit/*, pages/OrbitAdminEventDetail/components/*), pages/OrbitAdminLanding/hooks/adminLandingState.ts (eventDetailTargetOf, clickEventPayloadOf), hooks/applicationEvents.ts, adminEventDetailActions.ts beyond the toLowerCase line, the server side of the three block data/server actions.
- Get_UI_UpdateItems_UnreadCount_All: app.md says no mock handler found; called by BottomBarMenu, not by these screens.

## Mock files per screen
- OrbitAdminLanding: app/src/pages/OrbitAdminLanding/mocks.ts (Get_AdminEventsList, GetMilestoneScanFF); app/src/mocks/fictional/orbitAdmin.ts. Scenarios real, noadminevents, scanpermilestone, empty, loading, error.
- OrbitAdminEventDetail: app/src/pages/OrbitAdminEventDetail/mocks.ts (DataActionGet_EventInformation :84, ActionGetMemberByMemberId :91, ActionGetScanEventQRCode :97); app/src/mocks/fictional/orbitAdmin.ts.

## Board lines (screens not built)
- migration/board.md:94 OrbitAdminMilestoneDetail: skip, V8 skip:dev-only, exists on DEV only, no compiled file on TST, no survey route; revisit when TST deploys it (user, 2026-10-27).
- migration/board.md:95 OrbitAdminMilestones: same decision.
- React still navigates to /OrbitAdminMilestones when IsScanPerMilestone is true (useNavigateToEventDetail.ts:16-18); that route does not exist in the app.
