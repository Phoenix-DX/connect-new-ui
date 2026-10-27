# Notes of reader: Legacy_OrbitQRCodeFlow

## TST presence check
Pack elements absent on TST: none for the screen and the block widget tree, actions, variables and messages.
Differences pack vs TST:
- Roles: the pack lists Registered and UBTOne_User; TST `checkPermissions` calls only `OS.RolesInfo.checkRegistered()`
  (UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate.mvc.js, show line 346).
- Transition of the navigation in OnHandle_ContactHelpdesk: the pack says Inherited; TST has
  `TransitionAnimation.Default` (same file, show line 294).
- Mandatory inputs: the pack marks all six inputs mandatory; the TST model sets defaults and has no check.
TST elements absent in the pack: none found. TST shows the Image widgets, containers and style names that the pack
tree omits (pack screens.md lists only the screen; the block widget tree is in the TST file only).

## Files read (TST, `tst_source.py show`)
- QRCodeGenerate: UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate.mvc.js (model 1-118, view 119-270, controller 270-350).
- Block: Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode.mvc.js (model 2-180, view 181-612,
  controller 613-906). Line numbers in rows are of `show` output; those with "~" are approximate (+-5 lines).
- Module controller: migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js:1961-2040 (GetContactHelpdeskSubject_Event).
- Flow controller: UBTConnect.Legacy_OrbitQRCodeFlow.controller.js (handleError -> App_Common.handleError).

## Pack gaps
- actions.md "Actions of this flow (full)" is empty: the flow has only the screen action OnHandle_ContactHelpdesk
  (in screens.md). The 13 shared client actions are signatures only.
- The pack has no dump of the block ScreenBlock_GenerateQRCode (referenced module). Its logic comes from TST.
- data.md lists no server/service action: Get_EventQRCode (data action of the referenced block) and
  GetCacheableSignedImageURL (Connect2_LegacyShared) are not in it.
- The inputs on the wire of DataActionGet_EventQRCode are not visible in the compiled JS read here
  (callDataAction with a hash only). The React input list is React-side.
- strings.md has only strings of layout blocks (UnsupportedVersion*, PIN). The screen strings are in the TST block.
- Not read: Popup_QRCodeScan, MenuIcon, Layout_Orbit, NoInformation, Skeleton_Loading, ContactHelpdesk_Footer sources
  (blocks of other flows or LegacyShared); GetFormattedDateTime and AppManager_GetCachedUserInfo implementations.
- Mock handler for GetCacheableSignedImageURL not located (grep of app/src found only the repository and a type).

## Mock files
- QRCodeGenerate: app/src/pages/QRCodeGenerate/mocks.ts (handler for ScreenBlock_GenerateQRCode/DataActionGet_EventQRCode;
  data in app/src/mocks/fictional/orbit.ts ORBIT_EVENT_PASSES, line 1038; no capture, mocks.ts:6).

## Board
Row (board.md:84): QRCodeGenerate, /UBTConnect/QRCodeGenerate, 61, lite, build, status built, route-orbit-lite-2.
Decision text: "Orbit is not an embedded/separate app ... build (user, 2026-10-16)".

## Other facts for the judge
- React comments cite "decision W23", "decision W28" and "QRCodeGenerate Q1"; code comments, not decision sources.
- refreshData (useGenerateQrCode.ts:57-78) has no try/finally; TST has none either (rethrow in catch).
- MemberId for the photo comes from the cached user (AppManager_GetCachedUserInfo), not from In_MemberId.
- Related change request: migration/change-requests/CR-QRCodeGenerate-1.md (decisions.md of the pack).
