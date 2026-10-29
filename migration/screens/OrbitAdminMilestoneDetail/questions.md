# Questions: OrbitAdminMilestoneDetail

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [fact] server: milestone check-in (answered)
- Question: What does the server action GetScanMilestoneQRCode (ScreenBlock_AdminMilestoneDetail, Connect2_OrbitMobile_MUI; logic in Connect2_OrbitMobile_BL / IS) do: does it record a check-in, and which Status.Success / Status.ErrorMessage and QRCodeErrorTypeId does it return for each check-in status (CheckedIn, AlreadyCheckedInForMilestone, CheckedInForOtherMilestone, NotAllocated, NotInvited, Moved, GenericError)? Also: what does DataActionGet_MilestoneInformation return for a milestone id that is not an admin milestone (HasQRCode, OrbitMilestoneType)?
- Evidence: SB :814-850 (call), :1276-1302 (inputs), :1305-1330 (only Response.Status is read); GetScanMilestoneQRCodeResponseRec in runtime-sources/Connect2_OrbitMobile_IS.model.js; statuses in runtime-sources/moduleinfo.json static entity a87e8dcc-c9dc-42e9-b2e2-c57b238b5e2e; item10-new-screens.md §5 'Unclear'
- OutSystems MCP: getServerAction GetScanMilestoneQRCode (Connect2_OrbitMobile_MUI, Connect2_OrbitMobile_BL), getDataModel of the check-in entity; DataActionGet_MilestoneInformation of ScreenBlock_AdminMilestoneDetail
- Options: a) MCP (DEV) lookup of both actions, mocks take the real texts; b) keep the fictional texts of the mocks (marked) until the backend phase (recommended: a: the texts show in the result popup; the mock stays fictional until the answer)
- Answer (mcp, 2026-10-29T11:19:40): MCP (DEV) Connect2_OrbitMobile_BL GetScanMilestoneQRCode: it writes (external Orbit API Get_ScanMilestoneQRCode; local ScannedQRCodes_Create for CheckedIn, CheckedInForOtherMilestone, Moved). Local duplicate: Success False, 'This QR code has been scanned', QRCodeErrorTypeId AlreadyCheckedInForMilestone. UserMessage: CheckedIn/CheckedInForOtherMilestone 'Has Checked in', GenericError 'An error has occured', Moved/NotAllocated/NotInvited empty. Ids equal TST. Get_MilestoneInformation for an unknown id: not found in BL, unclear (mock kept). mcp-session-2026-10-29.md rows 5, 5b, 6.

## Q2 [fact] server: admin milestone types (answered)
- Question: Which Name and Type do the admin milestone types (meeting-admin, accommodation-admin, break-admin, meal-at-hall-admin, transport-vehicle-admin, meeting-meal) have in Sync_Info_GetMain (OrbitMilestoneType records)? The block shows MilestoneType.Name in its type row and sends MilestoneType.Id as ScannedQRCodeInfo.MilestoneType.
- Evidence: SB :417-450 (type row), :1052-1080 (OnAfterFetch), :1276-1285; static entity 3cdbee62-a275-4b90-8413-7962d4974850 in runtime-sources/moduleinfo.json
- OutSystems MCP: getDataModel / runQuery of the OrbitMilestoneType entity (Connect2_OrbitMobile_BL)
- Options: a) MCP (DEV) lookup, the mock takes the real names; b) keep the fictional names (Meeting, Accommodation, Break, Meal at the Hall, Transport, Meeting Meal) (recommended: a)
- Answer (mcp, 2026-10-29T11:19:40): MCP (DEV) Connect2_OrbitMobile_BL static entity OrbitMilestoneType: Name 'Admin' for all six admin types; Type AdminMeeting (meeting-admin), AdminMeal (meeting-meal), AdminMealAtHall (meal-at-hall-admin), AdminAccommodation (accommodation-admin), AdminTransportVehicle (transport-vehicle-admin), AdminBreak (break-admin); ids equal TST moduleinfo 15682. migration/clarify/review/mcp-session-2026-10-29.md row 7.

## Q3 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: No new decision for the barcode plugin: the ADR-11 adapter and the fictional scanner of OrbitAdminEventDetail Q1 (A); Shared code: OrbitErrorMessage and the Popup widget move to `components/orbit/` (page-template rule "a second page moves; Auto decision, row 10 (O2): the duplicated helpers of the two admin pages move to `lib/orbit/actions.ts` now. They reuse; Auto decision, row 8 (F2, Fable): see "Unclear points".; Row 13 (dedupe): the admin detail view, the QR popup and the scan hook are shared with OrbitAdminEventDetail.; Q1 and Q2 are facts answered by the MCP (2026-10-29): "Server facts". No user decision.
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-29T15:06:56): confirm (auto-confirmed, user instruction 2026-10-29 window 7, Fable review; auto decision rows 21,23 in migration/clarify/auto-decisions-2026-10-29.md; final ci 4686 tests, final sweep 2026-10-29)
