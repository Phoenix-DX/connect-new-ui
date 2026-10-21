# Route spec: OrbitAdminEventDetail

No-capture route (user decision 2026-10-16, `no-capture.json`: the full-permission TST account has no admin event).
Built from the compiled code; no parity; the user reviews it by hand.
Sources: SCR = `migration/runtime-sources/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail.mvc.js`, SB =
`migration/runtime-sources/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail.mvc.js`,
PQ = `migration/runtime-sources/Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_QRCodeScan.mvc.js` (current TST copy),
OEM = `capture/survey-UBTConnect.json` sources `Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.OrbitErrorMessage.mvc.js`.

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/OrbitAdminEventDetail` with inputs `In_EventId` (Long Integer), `In_EventName`, `In_EventStartDate` (DateTime), `In_EventEndDate` (DateTime), `In_EventLocation`, `In_EventTypeFriendly` [SCR model :9-46, setInputs :88-112; routes.generated.ts] |
| Tier | lite |
| Captured | not captured (no-capture.json, user 2026-10-16); built from SCR / SB / PQ / OEM |
| Shared/shell components used | Layout_Orbit, MenuIcon__UpdatedOSUI (`src/shared/Connect2_LegacyShared/`), NoInformation_Orbit, Skeleton_Loading, lib (`src/shared/Connect2_OrbitMobile_MUI/`), BottomBarMenu, CommonUI_InsideLayout (`src/shared/UBTConnect/`), OSList, usePopupWidget (`src/components/`), memoryCache (`src/shell/`) |
| Screen-specific components | `ScreenBlock_AdminEventDetail.tsx`, `Popup_QRCodeScan.tsx`, `OrbitErrorMessage.tsx` (both "own" blocks, migration/catalog/blocks.md :304, :311), `AdminPopup.tsx` (Popup widget), `actions.ts` (the scanner adapter moved to `src/lib/device/barcodePlugin.ts`, ADR-11, 2026-10-16), `staticEntities.ts` |

## Specification
### Structure
Screen (SCR view :173-256): ScreenBlock_AdminEventDetail `$b1` with the six inputs, BottomBarMenu `$b2` in BottomBar,
empty Menu / CommonUI_Elements; CommonUI_InsideLayout `$b3`. No screen logic (SCR ctrl :258-305).
Block (SB view :252-759): Layout_Orbit `b1-$b1` (CustomClass "orbit-detail", :253-255), MenuIcon `b1-$b2` (MenuAction
"Auto", :285), title = `div > flag icon menu-icon-Orbit` + `div > span In_EventName` (:304-341), HeaderRight /
HeaderContent empty. Content (:345-735): IsFetchingData → Skeleton_Loading `b1-$b5` (AdminEventDetails, :669-688);
else Get_EventInformation fetched → container `font-size-0-9em padding-x-m padding-y-m` with four icon rows (dates
"start - end" by GetFormattedDateTime(…, False, True, False, True, False, False) :378-393; In_EventLocation; EventType
.Type; In_EventTypeFriendly), the spinner `orbit-spinner-cont` "Loading" while IsProcessingData (:483-510), the Scan QR
Code button when HasQRCode and not processing (:511-564), RootPlaceholder_QRCode > Root_QRCode (backwards-compatibility,
CopyClassesAcrossPortal) > Popup_QRCode "popup-dialog" > Popup_QRCodeScan `b1-$b3` (:565-645); else NoInformation_Orbit
`b1-$b4` "The Event is no longer available for you." (:647-666); then `backwards-compatibility` > OrbitErrorMessage
`b1-$b6` (:689-734).
Popup_QRCodeScan (PQ view :163-538): name or "Participant", photo (signed URL with the User.png error placeholder, else
User.png), bold details (event name and today's date on success, Locality, Country, Role, Row(s) joined " & ", GMP
Tag), "Has Checked in" + check-circle or the error message + times cross, Done button.
OrbitErrorMessage (OEM view :149-254): Root `subscription-message` > Popup "popup-dialog onTop padding-x-l padding-y-l"
with "Oops! Something went wrong", DisplayMessage and the Ok link.

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| DataActionGet_EventInformation | data action, on demand (SB :774-776) | OnReady → RefreshData (SB :1321-1354, :1391-1436) | none (screenData.variables: inputs + IsFetchingData, IsProcessingData, QRCodePopupOpened) | HasQRCode, OrbitEventType | must check that the session user administers In_EventId | real, noqrcode, empty, loading, error |
| GetMemberByMemberId | server action | Scan → OnHandle_ScanCode (SB :966-970) | MemberId (from the QR code) | Response (Directory_MemberById) | member data only for an admin of the event | real |
| GetCacheableSignedImageURL → Connect2_LegacyShared GetSignedImagesInBulk | shared action (LS port, as HelpersDetail) | OnHandle_ScanCode (SB :972-976) | MemberId, Member, Small | URL | – | MilestoneDetail/mocks.ts handler |
| GetScanEventQRCode | server action (a check-in write on the server) | OnHandle_ScanCode, same event (SB :994-1033) | ScannedQRCodeInfo (EventId, ScannedUserInformation, ScannerAdminInfo from the cached user) | UserRole, Seats, Tag, GuestRole, Status | records the check-in; must authorize the admin | real (Success) |
| BarcodePlugin CheckBarcodePlugin / ScanBarcode | device plugin | Scan QR Code, Done, error Ok (SB :1192-1296) | "Please center the code in the frame", back camera, portrait | IsAvailable, Success, ScanResult.Text, Error | – | `src/lib/device/barcodePlugin.ts` (ADR-11: production = vendored TST web scanner; dev/demo = fictional scanner (Q1) unless `?scanner=web`): real, scanwrongevent, scanunreadable, scancancel |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| Block | OnReady (SB :1391-1436) | restored from cache → nothing (P-BACK); else RefreshData: IsFetchingData True → fetch → OnAfterFetch (:1446-1474) EventType, IsFetchingData False | Get_EventInformation | – | – |
| Scan QR Code | OnClick_ScanQrCode (SB :1192-1296) | HasQRCode → CheckBarcodePlugin; available → IsProcessingData True, OnApplicationEvent_LaunchQRCodeScanner (log), ScanBarcode → OnHandle_ScanCode; scan failed → IsProcessingData False, unless closed by the user (OS-PLUG-BARC-0006) the scanner's message; unavailable → the plugin's message | BarcodePlugin | – | Info feedback with the plugin's error text (Q2) |
| OnHandle_ScanCode | (SB :927-1173) | lowercase, JSON-deserialize QRCodeInformation; no EventId / MemberId → IsProcessingData False + "This QR Code was unable to be processed. Please try again later." (Info); else member + photo; other event → ScanResult False "Guest is not allocated to this event.", role/seats/tag/guest role cleared, popup; same event → GetScanEventQRCode, ScannedUser role/seats/tag/guest role, ScanResult = Status, popup, IsProcessingData False, success → OnApplicationEvent_QRCodeScanned (log). Errors: system → rethrow; else IsProcessingData False and "Failed to deserialize JSON" → ScanError "Unable to read QR code, please try again.", other → UnknownError | GetMemberByMemberId, GetSignedImagesInBulk, GetScanEventQRCode | – | Info feedback, popups |
| Popup Done | Event_Done → OnHandle_ScanEventDone (SB :871-902) | toggle the popup, then OnClick_ScanQrCode (next scan) | as Scan | – | – |
| Error Ok | ClickedOk → OnHandle_OrbitErrorMessage (SB :1355-1390) | reset ScanError, then OnClick_ScanQrCode | as Scan | – | – |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| loading | IsFetchingData | no | loading |
| event | Get_EventInformation fetched | no | real |
| no QR code | HasQRCode False → no button | no | noqrcode |
| not available | not fetched (also after a failed fetch) | no | error |
| scanning | IsProcessingData → spinner | no | (transient) |
| scan result | QRCodePopupOpened | no | real / scanwrongevent |
| unreadable code | ScanError.IsShowErrorMessage | no | scanunreadable |

## Patterns used
- P-DATA: `api.ts` adapters with contract types (`types.ts`); `readInputs` maps the query string.
- P-CALLS: Get_EventInformation on OnReady; GetMemberByMemberId, signed photo, GetScanEventQRCode only inside the scan flow, in the compiled order.
- P-MOCKS: `mocks.ts` with `contractHandler`; scenarios above; the scanner adapter registered by the mocks (Q1).
- P-STATES: skeleton, NoInformation_Orbit, spinner, popups as compiled.
- P-DIALOG: Popup widget portalled with usePopupWidget (`AdminPopup`, as OrbitLanding's popup); feedback messages through `showFeedbackMessage`.
- P-PARAMS: original input names; DateTimes read as the URL's UTC instant (OrbitAdminLanding writes `toISOString()`).
- P-LIST: OSList for the seat rows.
- P-BACK: `useViewState('Model')` + `useWasRestoredFromCache`.

## Feature flags
- `action:connect_LaunchDarkly_PermissionCheck`, `clientVar:App_PIN_BiometricEnabled`: decided "not a flag" (user, 2026-10-14).
- `action:getHasC1DirectoryView` (on), `action:getHasNewBookmarks` (off), `launchDarkly_FF.mobileDirectoryBookmarkNote` (off): default-only (user, 2026-10-14); read only by the shared BottomBarMenu.

## Unclear points
- Web equivalent of the BarcodePlugin scanner (ADR-1 undecided, no scanner package) → Q1 (decision, open; built with A).
- CheckBarcodePlugin / ScanBarcode error texts on the web (BarcodePlugin.controller.js not local) → Q2 (fact, open; conservative: the branch shows the adapter's message; the app-wide default adapter reports "not available" with an empty message, the mock scanner is available so the branch is not reached).

## Decisions to confirm
- Q1 → A (pending orchestrator answer): `components/barcodePlugin.ts` adapter, unavailable by default; `mocks.ts` installs a fictional scanner that reads the attendees' QR codes of In_EventId in turn (orbitAdmin.ts: Herrera and Ramos families, then the Vitale household), with scenarios scanwrongevent, scanunreadable, scancancel.
- Q2 (fact, open): texts of the plugin's "unavailable" messages; missing static file `/UBTConnect/scripts/BarcodePlugin.controller.js` (and `BarcodePlugin.OSBarcodePlugin.js`).
- Admin milestone types (O-A2 notes, Card_Milestone README): not needed: this screen never renders milestones; ScannedQRCodeInfo.MilestoneId / MilestoneType stay empty as compiled (SB :996-1018). No decision recorded.
- GetScanEventQRCode mock always succeeds (the server's failure texts are unknown); the failure branch (popup with Status.ErrorMessage and the cross) is built as compiled but has no mock scenario.
- GetScanEventQRCode is a server-side check-in (a write); nothing else in the app reads check-ins, so no P-MUTATION collection.
- ScannerAdminInfo is sent from the cached user record, whose names / MemberId are empty in the mock (CR-AcceptPendingPolicies-2; OrbitAdminLanding Q3 / CR-OrbitAdminLanding-1).
- The admin event's OrbitEventType = 'event-admin' (Type "Admin", fictional record by analogy with the captured Host record) — shown in the host-guest row.
- The scanned member's photo uses the existing Connect2_LegacyShared GetSignedImagesInBulk mock (MilestoneDetail/mocks.ts: neutral square placeholder).
- Seat rows: one or two rows per attendee (fictional), GMP tag "Visitor" for the visiting families at the conferences.
- Audit events (LaunchQRCodeScanner, QRCodeScanned) go to the app log, as the other Orbit routes.

## Change requests
- none for this route (CR-OrbitAdminLanding-1 also gives this block the admin's names / MemberId once applied)

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| (none) | not captured: the user reviews by hand (no-capture.json) | – | – | – | – | – | – |
Manual check (Playwright, 2026-10-16): event rows, Scan QR Code → popup "Martín Herrera … Row: 14 & 22, GMP Tag: Visitor, Has Checked in"; Done → next attendee (Laura Herrera); scanwrongevent → "Guest is not allocated to this event."; scanunreadable → "Oops! Something went wrong / Unable to read QR code, please try again.".

## Server-side notes
- Get_EventInformation, GetMemberByMemberId and GetScanEventQRCode must check that the session user is an admin of the event (the client only hides the button); GetMemberByMemberId must not return members outside the admin's events.
- GetScanEventQRCode must take the scanner identity from the session, not from ScannerAdminInfo sent by the client.
