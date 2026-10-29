# Build B10 (Orbit removals, Notes, upgrade links, telemetry payload), 2026-10-27

Group B10 builds five items:

- two DEV-only removals in the Orbit flows;
- the Notes year filter;
- two subscription upgrade links;
- the full payload of the Orbit contact events.

All code is in `app/`. No commit.

## 1. Legacy_OrbitEventsFlow F3: remove "View Passport details" (decision Q2 (a))

- TST evidence:
  - `UBTConnect.Legacy_OrbitEventsFlow.OrbitLanding.mvc.js:131, 145, 159`: the wrapper has three block events only
    (EventDetail, TransportDetail, MyCalendarOrbit).
  - `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.mvc.js:300-337`: Household_Members_Selection,
    then the container `orbit-landing-filters-cont`. No passport control. `grep "assport"`: no match in both files.
- Files changed:
  - `app/src/pages/OrbitLanding/OrbitLandingPage.tsx:16-22, 26-30, 33-66, 85`
  - `app/src/pages/OrbitLanding/hooks/useOrbitLanding.ts:11, 28, 48, 178`
  - `app/src/pages/OrbitLanding/hooks/orbitLandingState.ts:139`
  - `app/src/pages/OrbitLanding/components/OrbitLandingView.tsx:53, 69, 89, 159`
  - Tests: `OrbitLanding.test.tsx:24, 124-128`, `components/OrbitLandingView.test.tsx:58, 79-83, 118, 128`,
    `hooks/orbitLandingState.test.ts:6, 160`, `hooks/useOrbitLanding.test.tsx:111, 336-358`
- What was built:
  - The control `orbit-landing-passport-cont`, the prop `onViewPassportDetails`, the event `onNavigateToPassportScan`,
    its handler and `canViewPassportDetails` are removed.
  - The no-access branch of the page now always shows the message (the passport branch was the only one without it).
  - The app registers no PassportScan route (`app/src/app/routes*.ts`: no match), so no route was removed.
- Note for later comparison: the control and the screen PassportScan exist on DEV (`migration/clarify/dev-ahead.md:184-185`).
- Tests: `npx vitest run src/pages/OrbitLanding`: 4 files, 45 tests pass.
- Proposed verdict: Legacy_OrbitEventsFlow-A003, A004, A005, A006 and A054 `match` (absent on TST and in React).

## 2. Legacy_OrbitAdminFlow F1: remove the milestone branch (decision Q1 (a))

- TST evidence: `UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding.mvc.js:244-252`. OnHandle_NavigateToEventDetail
  only navigates to OrbitAdminEventDetail with six inputs. It has no server call.
- Files changed:
  - `app/src/pages/OrbitAdminLanding/hooks/useNavigateToEventDetail.ts:1, 6-17` (synchronous, no GetMilestoneScanFF)
  - `app/src/pages/OrbitAdminLanding/OrbitAdminLandingPage.tsx:11`
  - `app/src/pages/OrbitAdminLanding/mocks.ts:4, 16-24, 48` (handler and scenario `scanpermilestone` removed)
  - `app/src/mocks/fictional/orbitAdmin.ts:112` (constant `ORBIT_ADMIN_SCAN_PER_MILESTONE` removed)
  - Tests: `OrbitAdminLanding.test.tsx:26, 111-112, 137, 158`, `hooks/useNavigateToEventDetail.test.tsx:3-58`
- What was built:
  - A card click opens OrbitAdminEventDetail at once. The page test checks that `ActionGetMilestoneScanFF` is not
    called.
  - The page-level W23 test of the delayed server answer is removed: the navigation has no await now. The hook test
    keeps W23 (the handler navigates after the unmount).
- Note for later comparison: the DEV branch (GetMilestoneScanFF, then OrbitAdminMilestones when IsScanPerMilestone)
  and the screens OrbitAdminMilestones / OrbitAdminMilestoneDetail are in `migration/clarify/dev-ahead.md:194-195`.
- Tests: `npx vitest run src/pages/OrbitAdminLanding`: 5 files, 31 tests pass.
- Proposed verdict: Legacy_OrbitAdminFlow-007, 008 and 036 `match` (no call, no branch, no mock on TST and in React).

## 3. Notes F2: Apply sends the selected years

- TST evidence:
  - `UBTConnect.Notes.Notes.mvc.js:581`: the screen gives `notes_FilterVar` as In_FilterNotes (the same record).
  - `UBTConnect.Notes.Notes_FilterSheet.mvc.js:384-401`: `Filter_Notes = In_FilterNotes` (no copy), then
    `Filter_Notes.Years = SelectedIds` and `Filter_Notes.SortByNewest = ...`. These writes change the screen record.
  - `UBTConnect.Notes.Notes.mvc.js:1415-1421`: Handler_ApplyFilters sets SortByNewest and HasFiltersApplied, then
    Refresh_GetNotes.
  - Capture 2026-10-27 (`migration/clarify/review/captures.md:21`): after Apply, `Notes_Filter.Years` holds 1 item.
- Files changed:
  - `app/src/pages/Notes/hooks/useNotes.ts:192-201`
  - Tests: `hooks/useNotes.test.tsx:271-288`, `Notes.test.tsx:3, 85-109`
- What was built:
  - `onApplyFilters` keeps the years and the sort of the sheet in `notesFilter`. Refresh_GetNotes sends
    `Notes_Filter.Years`. The category and the search term stay.
  - The mock already applied `Notes_Filter.Years` (`app/src/pages/Notes/mocks.ts:83-87`). No change was necessary.
  - A page test opens the sheet, selects 2025 and applies. The body sends `Years: { List: ['2025'] }`, and the page
    shows "No Notes found" (the fictional notes are of 2026).
- Tests: `npx vitest run src/pages/Notes`: 4 files, 31 tests pass.
- Proposed verdict: Notes-110 `match` for Years. See "Decisions needed" 1 for the SortByNewest value.

## 4. _libraries F1: the two upgrade call sites (decision Q3 (a))

- TST evidence:
  - `UBTConnect_Utils.CW_Search.SearchResult_Item.mvc.js:440-466, 702-735`: the Clicked event of IconText
    "Subscription upgrade needed" runs OnClick_UpgradeSubscription, which runs App_Subscription_NavigateToUpgrade.
  - `UBTConnect_Utils.CW_Share.ShareSheet.mvc.js:2575-2629`: Handler_OnClickRecentMember runs
    App_Subscription_ShowUpgradePopUp for a disabled record, else it shares.
  - `UBTConnect_Utils.controller.js:1-45`: NavigateToUpgrade has no ConfirmAction. The confirmation is in
    Dialog_AccessRestrictedAction.
- Files changed:
  - `app/src/components/search/SearchResultItem/SearchResultItem.tsx:41-44, 74, 122-126` (new prop
    `onClickUpgradeSubscription`)
  - `app/src/containers/ShareSheet/useShareSheet.ts:10, 143-151, 154-159, 210`
  - `app/src/containers/ShareSheet/ShareSheetContainer.tsx:50, 129` and
    `components/ShareSheetSearchStep.tsx:40-41, 58, 161` (pass-through of the handler)
  - READMEs: `components/search/SearchResultItem/README.md:18-21, 34`, `containers/ShareSheet/README.md:68-74, 82, 92`
  - Tests: `SearchResultItem.test.tsx:40-52`, `ShareSheetContainer.test.tsx:12-15, 20-52, 166-192`
- What was built:
  - A component does not import `platform/` (ESLint rule 4). So SearchResult_Item raises `onClickUpgradeSubscription`.
    The ShareSheet (its only caller) gives `navigateToUpgrade` of `platform/feedback/dialogs`.
  - A disabled recent member runs `showUpgradePopUp`. It opens the Access Restricted dialog that the screen stored,
    else nothing, as TST.
  - Both client actions run in safeExecuteClientAction on TST. An error goes to `raiseToFlowHandler`.
- Tests: `npx vitest run src/components/search/SearchResultItem src/containers/ShareSheet`: 3 files, 17 tests pass.
- Proposed verdict: _libraries-111 and _libraries-193 `match`. The body of `navigateToUpgrade` still leaves out
  Cache_UserInfo_Invalidate (`platform/feedback/dialogs/subscription.ts:15-20`, an open point of that file).

## 5. ContactFlow Q1 (a): the full payload of the Orbit app events

- TST evidence:
  - `UBTConnect.ContactFlow.ContactByEmailMember.mvc.js:689-697`: AuditPayload_EmailHost (MilestoneId, EventId,
    EventTitle, HostName = In_ContactName, Subject and Message of the event).
  - `UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:538-541, 564-570`: AuditPayload_ContactHelpdesk
    (EventId, EventTitle = In_EventName, Subject and Message of the form).
  - `Connect2_OrbitMobile_MUI.controller.js:5645-5742`: both actions JSON-serialize the payload, then call
    zOnApplicationEvent_Wrapper with applicationEvents_Orbit.contactHelpdesk or emailHost.
  - `Connect2_OrbitMobile_MUI.model.js:1761-1776, 7107-7116`: the attribute order of the two records.
  - `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm.mvc.js:1286-1295, 1309-1333`: the block
    builds both payloads after "Empty Vars". So its Subject and Message are empty on TST.
- Files changed:
  - `app/src/pages/ContactByEmailMember/actions.ts:3, 12-30`, `staticEntities.ts:7-10`,
    `hooks/useContactByEmailMemberSubmit.ts:53-61`, test `ContactByEmailMember.test.tsx:8-15, 40-43, 136-157`
  - `app/src/pages/ContactByEmailOrbitHelpdesk/actions.ts:11-28`, `hooks/useContactByEmailOrbitHelpdeskSubmit.ts:54-61`,
    test `ContactByEmailOrbitHelpdesk.test.tsx:8, 35-38, 138-144`
  - `app/src/pages/EmailContact/actions.ts:32-67`, `hooks/useOrbitContactForm.ts:130-148`, test
    `EmailContact.test.tsx:7, 18-26, 93-99, 134-142`
- What was built:
  - Each page has typed records `AuditPayload_EmailHost` and `AuditPayload_ContactHelpdesk` (local copies). The call
    sites pass all fields, with the subject and the message.
  - ContactByEmailMember: OnApplicationEvent_EmailHost serializes the payload in the TST attribute order. Then it calls
    the existing `zOnApplicationEvent_Wrapper` with the new constant `ApplicationEvents_Orbit_EmailHost`. The old
    "not ported, Q2" log entry and comment are gone.
  - The log sinks stay without personal text: EventId and HasAttachment (Member), EventId and OrbitEventId (Helpdesk),
    the ids (EmailContact). The tests check that the message text is not in the log.
  - EmailContact (ScreenBlock_ContactForm): the payloads have an empty Subject and Message, as TST builds them after
    it clears the form.
- Tests: `npx vitest run src/pages/ContactByEmailMember src/pages/ContactByEmailOrbitHelpdesk src/pages/EmailContact`:
  5 files, 29 tests pass.
- Proposed verdict: ContactFlow-068 and ContactFlow-105 `match` at the call site. The App Insights sink stays U17.

## Checks

- `npx vitest run` on all touched folders (OrbitLanding, OrbitAdminLanding, Notes, the three contact pages,
  components/search, components/note, containers/ShareSheet, mocks): 31 files, 191 tests pass.
- `npx eslint` and `npx prettier --check` on the same folders: no problem.
- `npm run arch`: no dependency violation.
- `npm run typecheck`: no error in a B10 file. Other errors come from files of other groups that are in progress
  (MessageDetail, HostSurvey, MilestoneDetail, AdaptiveCardViewer, RangeSlider, LDM V2).

## Follow-ups outside the B10 areas

- `fetchMilestoneScanFF` has no caller now: `app/src/api/event/repository.ts:252-255`, `mapper.ts:91, 663-664`,
  `index.ts:61`, `repository.test.ts:493-496`. Also `app/src/api/README.md:113` names its old caller. Recommendation:
  remove them in the api area. Keep `openapi.yaml` and `schema.d.ts`, which come from the survey.
- `app/src/containers/ShareSheet/ShareSheetContainer.tsx` and `components/ShareSheetSearchStep.tsx` got a one-line
  pass-through. They are in the same container as `useShareSheet.ts`.

## Decisions needed

1. **The identifiers of the static entity Choice (Notes-110, SortByNewest).**
   - Evidence: the capture of 2026-10-27 shows `Notes_Filter.SortByNewest` = "Yes" after Apply
     (`migration/clarify/review/captures.md:21`). React sends `Choice.Yes` = 'Choice.Yes'
     (`app/src/lib/ubtConnect/staticEntities.ts:103`). `static-entities-tst.json` has no Choice entry.
   - Options: (a) set the shared constants to the TST identifiers ("Yes", "No"; "None" to confirm) and check all
     FilterSheet callers; (b) keep the opaque values in the mock phase and map them in the BFF.
   - Recommendation: (a), after one read-only check of the "No" and "None" values. The file is shared, so the
     orchestrator or the lib owner makes the change.
