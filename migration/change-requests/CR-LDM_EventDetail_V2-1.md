# CR-LDM_EventDetail_V2-1: shared Orbit / LDM client actions used by two LDM routes

- Status: applied
- Raised by: LDM_EventDetail_V2, 2026-10-16
- Block: `app/src/shared/Connect2_OrbitMobile_MUI/lib/actions.ts` (and `app/src/shared/Connect2_LegacyShared/lib/actions.ts`
  for FlipHouseholdName; `app/src/shell/navigation` or `shared/lib` for generateScreenURL)
- Other routes using it: LDM_MyEvents_V2 (`components/actions.ts`), LDM_Email_V2 (not built), the Assemble
  AssembleSummaryCard (private generateScreenURL)
- Related question: none (facts from the compiled code)

## Evidence
- `FlipHouseholdName` (Connect2_LegacyShared.controller.js:2089-2186) is called by EventDetail_HostCard,
  EventDetail_ListItem and ScreenBlock_EventDetail_V2 (OnHandle_ContactHost_Message / _Call), and by the LDM_MyEvents_V2
  blocks: both routes keep an identical copy (`screens/LDM_MyEvents_V2/components/actions.ts:39`,
  `screens/LDM_EventDetail_V2/components/actions.ts`).
- `GetLocalityNameJS` (`.replace(/\s*\([^)]*\)/, "")`) is the same JS node in EventCard_Guests, EventDetail_ListItem and
  ScreenBlock_EventDetail_V2 (`p/…ScreenBlock_EventDetail_V2.mvc.js`:2707-2720).
- `AddAuditEventDetailEvent` / `AddAuditRequestAPIEvent` / `GetCurrentTimeInMill` (Connect2_OrbitMobile_MUI.controller.js
  :119-514) are Orbit module client actions used by both LDM screen blocks.
- `OS.Navigation.generateScreenURL` for external URLs (Google Maps) is private in AssembleSummaryCard and copied in
  `screens/LDM_EventDetail_V2/index.tsx`.

## Expected change
Export `flipHouseholdName`, `getLocalityName`, `addAuditEvent_LDM` (with the union of the ApplicationEvents_LDM records
of both routes), `getCurrentTimeInMill` and `generateScreenURL` from the shared libraries; the two LDM routes then import
them and drop their copies.

## Workaround in the route until applied
Local copies in `app/src/screens/LDM_EventDetail_V2/components/actions.ts` and `index.tsx` (same code as the shared
candidates); no `<NotCaptured>` needed (no visible part).

## Resolution (foundation owner, F11, 2026-10-16)
- `flipHouseholdName` → `app/src/shared/Connect2_LegacyShared/lib/actions.ts` (LS:2089-2186); `getLocalityName`,
  `addAuditEvent_LDM` with `ApplicationEvent_LDM` (union of both routes' records), `getCurrentTimeInMill` →
  `app/src/shared/Connect2_OrbitMobile_MUI/lib/actions.ts`; `generateScreenURL` → `app/src/shell/navigation/osNavigate.ts`
  (exported from `shell/navigation`), the OutSystems.js function G (no "?" without pairs). AssembleSummaryCard uses it too.
- LDM_EventDetail_V2 (EventDetail_ListItem, EventDetail_HostCard, ScreenBlock_EventDetail_V2, index.tsx) and LDM_MyEvents_V2
  (EventCard_Guests, MyEvents_MyTimelineFilterButton, ScreenBlock_MyEvents_V2) import them; the local copies are deleted.
- Tests in the shared libs (flip, locality, generateScreenURL). Parity: LDM_EventDetail_V2 0, LDM_MyEvents_V2 0.
