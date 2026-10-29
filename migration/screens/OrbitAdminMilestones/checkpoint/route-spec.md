# Route spec: OrbitAdminMilestones

Source: the compiled TST code (live survey, 2026-10-28), in `sources/`. Not captured (user decision I10-3 (a),
2026-10-29, `no-capture.json`): the test account has no admin events. No parity: the user reviews the page by eye.
Short names below: `S` = `sources/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestones.mvc.js`, `B` =
`sources/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones.mvc.js`, `L` =
`sources/UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding.mvc.js`.

## Summary

- The milestones of one Orbit event, for an admin who scans QR codes per milestone. Role: registered users (`S:399`).
- Input: `EventId` (Long Integer, mandatory; `S:9`, `setInputs`).
- Entry: an event card of OrbitAdminLanding. `OnHandle_NavigateToEventDetail` calls the server action
  `GetMilestoneScanFF` (module Connect2_OrbitMobile_BL). True: `/UBTConnect/OrbitAdminMilestones?EventId=…`. False:
  OrbitAdminEventDetail with 6 inputs (`L:218-227, 242-290`). The live value on TST is false (probe 2026-10-28,
  `migration/clarify/review/item10-new-screens.md` §1).
- Exit: a milestone card. `Handler_NavigateToMilestoneDetail` calls `GetMilestoneScanFF` again. True:
  OrbitAdminMilestoneDetail with 7 inputs. False: OrbitAdminLanding (`S:255-302`).

## Specification

### Structure

- Screen (`S:123-200`): `ScreenBlock_AdminMilestones` (inputs `EventId`; event `NavigateTo_MilestoneDetail`;
  placeholders: Menu empty, BottomBar = `BottomBarMenu` with default inputs, CommonUI_Elements empty), then
  `CommonUI_InsideLayout`.
- Block (`B:162-420`): `Layout_Orbit` with
  - menu: Placeholder "Menu"; headerLeft: `MenuIcon__UpdatedOSUI` (MenuAction `menuAction.menu`, `:206`);
  - title: Icon `flag`, style `icon menu-icon-Orbit` (`:227`);
  - headerContent: `orbit-admin-header-cont` > `orbit-admin-header-text-cont` > Expression `orbit-admin-header-text` =
    `UserFirstName` (`:243-261`);
  - content (`:270-380`): `If IsFetchingData` → `Skeleton_Loading` (`In_SkeletonLoadingId` = orbitLanding, `:375`).
    Else `If Get_AdminMilestoneList.IsDataFetched and not IsFetchingData` → `If not Milestones.Empty` → List
    `list list-group orbit-card-list` (`animateItems`, `disable-virtualization` from `IsListVirtualizationDisabled`,
    `:273-300`) of `orbit-card-list-cont` > `Card_Milestone` (`In_MilestoneSummary` = the current row, `:310`);
    else `NoInformation_Orbit` with the message "There are no event milestones available for QR scanning. Only
    milestones from yesterday, today or tomorrow are shown. If you have any questions, please contact your regional
    Orbit helpdesk." (`:350`). Not fetched: nothing.
  - bottomBar: Placeholder "BottomBar"; commonUI_Elements: Placeholder "CommonUI_Elements" (`:401`, `:412`).
- The view is the same layout as `ScreenBlock_AdminLanding` (React `AdminLandingView`), with `Card_Milestone` in
  place of `Card_Event` and another message.

### Data

- Variables (`B:32-44`): `IsFetchingData` (Boolean), `Milestones` (Milestone_Screen list), `UserFirstName`
  (Text), `UserMemberId` (Long Integer), input `EventId`.
- Data action `Get_AdminMilestoneList` (`B:454-473`), on demand (only `Refresh_GetMilestonesByEventId` runs it, `:475`).
  Output `Response`: list of `GetAdminOrbitMilestone_Screen` = `OrbitAdminMilestone` (Connect2_OrbitMobile_IS
  `AdminMilestoneRec`, `migration/runtime-sources/Connect2_OrbitMobile_IS.model.js:3842-3905`) + `OrbitMilestoneType`
  (`Connect2_OrbitMobile_BL.model.js:146-164`). Wire keys = the first `attr` argument (`migration/tools/contract_gen.py:41-42`).
- `OnAfterFetch_Get_AdminMilestoneList` (`B:506-530`): `Milestones` = the Response mapped to `Milestone_Screen`:
  MilestoneId = MilestoneRef, Type = OrbitMilestoneType.Type, Title = MilestoneName, MilestoneDateTime = EventDate,
  SequenceNo, DateForFilter = DateTimeToDate(EventDate), OrbitMilestoneType, MilestoneInfo.MilestoneStartDateTime =
  StartDate, MilestoneEndDateTime = EndDate, Description. Then `IsFetchingData` = False.
- Server action `GetMilestoneScanFF` (screen action of both screens, `S:231-250`, `L:218-237`): no input, output
  `IsScanPerMilestone` (Boolean). The contract has `UBTConnect.ActionGetMilestoneScanFF`.
- The contract has no `ScreenBlock_AdminMilestones/DataActionGet_AdminMilestoneList`: interim form (I10-6 (a)).

### Behaviour

- OnReady (`B:546-603`; the cache check `:572`): when the view was restored from the cache, nothing. Else `IsFetchingData` = True;
  `AppManager_GetCachedUserInfo`; `UserFirstName` = FirstName; `UserMemberId` = TextToLongInteger(MemberId) when valid,
  else the null identifier; `Refresh_GetMilestonesByEventId` (`B:475`). React: as `useAdminLanding` (restored
  without data calls again, F40).
- `Handler_ClickedMilestone` (`B:618-651`), on `Card_Milestone.ClickedMilestone` with the current row: an empty
  MilestoneId sets ErrorMessage "Identifier" (`:635`). ErrorMessage "" → event `NavigateTo_MilestoneDetail(EventId,
  MilestoneId, Title, MilestoneDateTime, Description, MilestoneStartDateTime, MilestoneEndDateTime)` (`:643-646`).
  Else the Info message "Cannot proceed to scan because there is missing data.\r\nMissing data: " + ErrorMessage
  (`:651`). Card_Milestone itself skips a click without MilestoneId, so the message is not reachable from a card.
- `Handler_NavigateToMilestoneDetail` (`S:255-302`): `GetMilestoneScanFF`, then true → `/UBTConnect/OrbitAdminMilestoneDetail`
  with the parameters in this order: In_MilestoneDate, In_MilestoneEndDate, In_MilestoneName, In_MilestoneId,
  In_MilestoneDescription, In_EventId, In_MilestoneStartDate (DateTimes by `ServerDataConverter.asString`); false →
  `/UBTConnect/OrbitAdminLanding`.
- Entry change (N1): `OnHandle_NavigateToEventDetail` of OrbitAdminLanding gets the same `GetMilestoneScanFF` call and
  the two branches (`L:266-288`).
- Mock scenarios (Q1 (a), user 2026-10-29):
  - The default mock answers `GetMilestoneScanFF` false, as TST. An event card opens OrbitAdminEventDetail. A milestone
    card opens OrbitAdminLanding.
  - The scenario `?mock=scanpermilestone` answers true on both screens.
  - Review path: OrbitAdminLanding, an event card, the milestones, a milestone card, OrbitAdminMilestoneDetail.

### States

- loading (`IsFetchingData`): skeleton; list of milestones; empty (NoInformation_Orbit); error: the flow handler (the
  skeleton stays, as OrbitAdminLanding).

## Patterns used

- P-PARAMS (`inputs.ts`, `useOsNavigate`), P-MOCKS (fictional milestones, `src/mocks/fictional/orbitAdminMilestones.ts`),
  P-OSUI (`OSList`, `OSBlock`), flow scope (`useFlowState`). Existing blocks: `OrbitLayout`, `MenuIcon`,
  `MilestoneCard`, `OrbitNoInformation`, `OrbitSkeleton`, `BottomBar`, `CommonUiLayout`.

## Unclear points


- The block variables that `Get_AdminMilestoneList` sends: React sends IsFetchingData, UserFirstName, UserMemberId and
  EventId, without the list `Milestones`, as the captured `Get_AdminEventsList` call of the same flow
  (`app/src/pages/OrbitAdminLanding/OrbitAdminLanding.test.tsx:79`). The backend spec decides which ones matter.
- Settled and moved out: the Admin* OrbitMilestoneType Ids (Q2 (a)). The live moduleinfo (version 15682) has all six and
  `app/src/lib/orbit/staticEntities.ts:70-75` now holds them: AdminMeeting `meeting-admin`, AdminMeal `meeting-meal`,
  AdminMealAtHall `meal-at-hall-admin`, AdminAccommodation `accommodation-admin`, AdminTransportVehicle
  `transport-vehicle-admin`, AdminBreak `break-admin`. MCP (DEV) gives the same ids, with Name "Admin" for all six
  (`migration/clarify/review/mcp-session-2026-10-29.md` row 7). The admin branch of `Card_Milestone` (description, date,
  start and end times) renders as TST.

## Decisions to confirm


- Q1 (a), user 2026-10-29: the default mock answers `GetMilestoneScanFF` false, as TST. The scenario
  `?mock=scanpermilestone` answers true on both screens. The user reviews the page with this scenario.
- Q2 (a), user 2026-10-29: the six Admin* ids of `lib/orbit/staticEntities.ts` are the live TST values (decision (c) of
  2026-10-28: the live TST code wins). No other milestone type has these ids.
- Auto decisions of window 7 (`migration/clarify/auto-decisions-2026-10-29.md`): none concerns this route directly. Row 10 (O2) moves the helpers that
  both admin detail pages share to `lib/orbit/`.

## Change requests


- Q2 (a), done: `app/src/lib/orbit/staticEntities.ts` `OrbitMilestoneType.Admin*` = the live TST ids (lines 70-75).

## Parity


- None (not captured, I10-3 (a)). The scenario for the review is `?mock=scanpermilestone`. The OrbitAdminLanding parity
  was clean after the entry change (`migration/clarify/builds/item10-OrbitAdminMilestones.md`).

## Server-side notes

- `GetMilestoneScanFF` reads a feature flag on the server (module Connect2_OrbitMobile_BL). It is false on TST.
