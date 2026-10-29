# MCP fact session, items 9 and 10 (2026-10-29)

User decision (2026-10-29): one MCP session for the open facts; the user opened Connect2_OrbitMobile_BL in Service
Studio. MCP = DEV (reference). TST = the live compiled code (source of truth). A subagent could not get an MCP session
token (the call hung, then the transport dropped), so the orchestrator ran the session with its own token.

| # | Question | Answer | MCP (DEV) | TST | Status |
|---|---|---|---|---|---|
| 1 | U1: the Global Exception Handler property of UBTConnect | Not read. The TST runtime has no reader of the property (finding E6), so it has no effect on TST behaviour. | not checked | E6 (`item9-render-route-errors.md`) | unclear, no impact |
| 2 | U2: flows with their own On Exception handler | Only App_Common. All 37 other UBTConnect flows send their errors to the App_Common flow handler (`_flow_UBTConnect_App_Common`). So AssembleDetail goes Legacy_AssembleFlow → App_Common (T4). | not needed | `handleError` of each `migration/runtime-sources/UBTConnect.<Flow>.controller.js` (37 files); App_Common: `migration/shell/sources/UBTConnect.App_Common.controller.js` | clear |
| 3 | U6: screens that check a role other than Registered | None. All 75 UBTConnect screens call `OS.RolesInfo.checkRegistered()` only. On TST, D6 (a permission check that fails for a signed-in user) cannot occur. | NotificationDetails has UBTOne_User + Registered; it compiles to `checkRegistered()` | live survey, every `UBTConnect.*.mvc.js` | clear |
| 4 | PINUnlock: push or replace | Unclear. Two paths: the FCM deep link calls `ScreenController_NavigateToPage(link, false)` (`UBTConnect.controller.js:2639-2643`); the lock flow sets `Page = "PINUnlock"` in `UBT_AppManager.controller.js:71, 8054`. The navigation mode of the lock flow is not traced. | not checked | as listed | unclear; React keeps the push |
| 5 | GetScanMilestoneQRCode: does it write? statuses | Yes, it writes. It calls the external `Connect2_OrbitMobile_IS.Get_ScanMilestoneQRCode` (the Orbit API, with the user token). For `CheckedIn`, `CheckedInForOtherMilestone` and `Moved` it also creates a local record (`ScannedQRCodes_Create`). A member already recorded locally for the milestone gets `Success = False`, the message of `AlreadyCheckedInForMilestone` and `QRCodeErrorTypeId = AlreadyCheckedInForMilestone`, without the API call. An API answer `AlreadyCheckedInForMilestone` gets `Success = False` and that message. Any other API failure keeps the API response; `QRCodeErrorTypeId` is the `AlreadyCheckedInForMilestone` record id (the outcome lookup always reads that record, so the GenericError fallback does not run). A failed local create gives `GenericError` and the create message. | Connect2_OrbitMobile_BL `GetScanMilestoneQRCode`; static entity `QRCodeScanResult` | ids: `migration/knowledge/static-entities-tst.json` `Connect2_OrbitMobile_MUI.qRCodeScanResult` (7 ids, the same as DEV) | clear (DEV); server code is not visible on TST |
| 5b | `QRCodeScanResult.UserMessage` | `CheckedIn` and `CheckedInForOtherMilestone`: "Has Checked in"; `AlreadyCheckedInForMilestone`: "This QR code has been scanned"; `GenericError`: "An error has occured" (sic); `Moved`, `NotAllocated`, `NotInvited`: empty. | static entity records | not visible on TST (server data) | DEV only |
| 6 | Get_MilestoneInformation for an unknown milestone | Not found in Connect2_OrbitMobile_BL (no action with that name). It is a data action of the MUI block; its server logic was not read. | not found | — | unclear; the mock keeps its answer |
| 7 | The six admin milestone types | `Name` = "Admin" for all six; `Type` = AdminMeeting (`meeting-admin`, order 17), AdminMeal (`meeting-meal`, 18), AdminMealAtHall (`meal-at-hall-admin`, 19), AdminAccommodation (`accommodation-admin`, 20), AdminTransportVehicle (`transport-vehicle-admin`, 21), AdminBreak (`break-admin`, 22). | Connect2_OrbitMobile_BL static entity `OrbitMilestoneType` (22 records) | the same ids in moduleinfo 15682 and `static-entities-tst.json` | clear |
| 8 | CameraPlugin TakePhoto in a PWA | It works in a PWA. `TakePhoto` checks the plugin, then "Is PWA?": a PWA calls `Web_TakePhoto` (the browser camera, `navigator.mediaDevices.getUserMedia` in `CameraPlugin.CameraStream.js`) and returns the image as `MediaResult.Thumbnail`; a native shell calls `Native_TakePhoto`. | not needed | `migration/runtime-sources/CameraPlugin.controller.js` (takePhoto, IsPWA lines 118-162), `CameraPlugin.CameraStream.js` | clear; **changes the premise of PassportScan Q2** |

Consequences:
- Item 9 D6: no UBTConnect screen checks a role (row 3), so the N8 branch is not needed for UBTConnect on TST.
- OrbitAdminMilestoneDetail: the mock texts can use rows 5 and 5b; the mock must not imply that a scan is harmless.
- PassportScan Q2 was answered on the premise that TST has only a native camera. Row 8 shows that TST takes a photo
  with the browser camera in a PWA. The question goes back to the user.

Addendum (2026-10-29, review round 2 of OrbitAdminMilestones): the same MCP answer (static entity `OrbitMilestoneType`,
22 records) gives for the six admin types: `IsTransportMilestone` False, `MainColorVar` Green, `CanHost` False,
`MainIcon` orbit-icon-meeting (AdminMeeting, AdminTransportVehicle), orbit-icon-meal (AdminMeal, AdminMealAtHall),
orbit-icon-accommodation (AdminAccommodation), orbit-icon-date-time (AdminBreak). The mock uses these values.
