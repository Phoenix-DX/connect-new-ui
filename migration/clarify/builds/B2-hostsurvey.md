# B2 HostSurvey wizard: build note

Group B2 built one item on 2026-10-27. No commit was made. Three forks of the B2 agent built the item blocks in
parallel:

- fork A: the room block;
- fork B: the helper blocks;
- fork C: the meal and vehicle blocks.

## Legacy_OrbitEventsFlow F1 (blocker): the HostSurvey wizard

Decision: Legacy_OrbitEventsFlow Q1 (a), user, 2026-10-27 (`migration/clarify/decisions.md:147`).

### TST evidence

HS = `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.mvc.js` (raw lines of
`tst_source.py show`).

- Model: the variables at HS:114-180, the five validation widgets in WidgetsRecord.
- View, header: StepHeader on a data step at HS:503 (step length = steps − 2, row number − 1); summary banner.
- View, steps: navigation HS:564, accommodation HS:723, meal HS:1017, helper HS:1281, vehicle HS:1654, summary HS:1928.
- View, note inputs: Input_HostSurveyNote HS:662, Input_AccommodationNote HS:823, TextArea_MealNote HS:1147,
  Input_HelperNote HS:1381. All have MaxLength 250 and Enabled = not IsConfirmedSurvey.
- View, Switch_HasVehicles: HS:1734.
- View, popups: PopUp_Cancel HS:2980 to PopUp_ReturnBack HS:3300. Footer Orbit_FooterWithActions: HS:3324.
- Server action PostHostSurvey: HS:3561-3580.
- Block actions, first group:
  - OnHandle_EditItem HS:4571, DeleteItem HS:4653, OnReady HS:4742, ToggleSingleResetMealData HS:4837.
  - OnHandle_PopUp_Secondary HS:4874, OnHandle_PopUp_Close HS:4964, OnHandle_DeleteItem HS:5007.
  - OnHandle_SecondaryButton HS:5101, OnHandle_DeleteSearchHelper HS:5202.
  - SaveMultipleMeals_Success HS:5239, Survey_Next HS:5326, OnHandle_SaveFailed HS:5405.
- Block actions, second group:
  - SaveMultipleMeals_Failed HS:5533, RefreshStaticEntities HS:5614, OnHandle_AddHelpers HS:5787.
  - OnAfterFetch_GetHostSurveySteps HS:5834, CancelEdit HS:5891, PostHostSurvey HS:6128.
  - OnHandle_PopUp_Primary HS:6231, NavigateTo_SpecificStep HS:6399, OnAfterFetch_GetLocalHelperRoles HS:6484.
- Block actions, third group:
  - SetStepData HS:6519, OnHandle_PrimaryButton HS:6588, AddNewVehicle HS:6733, OnClick_AddItem HS:6826.
  - AddNewRoom HS:6919, OnHandle_BackNavigation HS:6959, OnHandle_SaveItem HS:7149, ValidateStepEdit HS:7298.
- Module actions (`migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js`):
  - FocusOnFirstInvalidInput :1547-1582, CreateValidationMessage :1236, GetHelperRoleByJSON_Name :3696.
  - GetHelperStatusByJSON_Name :3783, GetMealTypeByJSON_Name :4171, GetPopUpInfo :4361-4480.
  - GetStepProperties :4601-4690, GetSurveyStatusById :4699, GetVehicleOwnerByJSON_Name :4848.
  - GetVehicleTypeByJSON_Name :4935.
- Small blocks (raw view line):
  - HostSurvey_StepHeader :173 (OnInitialize and OnParametersChanged :304).
  - HostSurvey_NavigationItem :145 (OnInitialize only :302).
  - HostSurvey_AdminNotes :123, HostSurvey_Item :165.
  - Orbit_ConfirmationPopUp_New :165, InputWithMaxChar :123.
- Item blocks: the evidence lines are in the fork reports, summarised under "What was built".
- Static entity ids: `migration/knowledge/static-entities-tst.json`:
  - `surveyStatus`: pending 4, sent 3.
  - `helperStatus`: approved 3, pending 4.
  - `uBT_MessageType`: error 4.

### What was built

- State (`hostSurveyState.ts`): the nine variables, `fetchedSurvey` (GetHostSurvey.Response for CancelEdit), and the
  block client actions as pure functions. The reducer has one action per assignment group.
- OnReady resets StepProperties to BlankStepProperties (IsEdit True) before RefreshData.
- OnAfterFetch_GetHostSurveySteps also runs RefreshStaticEntities, SetStepData and ValidateStepEdit.
- RefreshStaticEntities sets FilteredHelperRoles (roles that are not read-only) on the helper step and on a summary
  with a helper section. The six other aggregates are read from the local entities at render, as the floors are.
- Flows (`useHostSurvey.ts`) built from the TST flows:
  - the buttons: OnHandle_PrimaryButton, OnHandle_SecondaryButton;
  - the popups: OnHandle_PopUp_Primary, OnHandle_PopUp_Secondary, OnHandle_PopUp_Close;
  - the item events: OnHandle_EditItem, OnHandle_DeleteItem, OnHandle_SaveItem, OnHandle_SaveFailed (message and
    FocusOnFirstInvalidInput), OnHandle_AddHelpers, OnHandle_DeleteSearchHelper, ToggleSingleResetMealData;
  - OnClick_AddItem, PostHostSurvey and every branch of OnHandle_BackNavigation (PreventNavigation = `preventDefault`).
- PostHostSurvey ends the flow normally on an exception that is not a system exception (AllExceptions); a system
  exception goes on.
- View (`HostSurveyView.tsx`):
  - the five steps, the StepHeader and the four note inputs with InputWithMaxChar "Max Characters: 250";
  - the vehicle switch, "+ Add <step>" with its grey state, the footer labels (Close / Back / Cancel; Save / Next /
    Submit, the greyed Submit);
  - the five popups with their secondary texts, and the summary helper and vehicle sections.
- New small blocks: HostSurvey_StepHeader, HostSurvey_NavigationItem, HostSurvey_AdminNotes, InputWithMaxChar.
- Completed blocks: HostSurvey_Item (Edit, Delete) and Orbit_ConfirmationPopUp_New (popup markup in `<body>`).
- Shared block: `components/orbit/FooterWithActions` (Orbit_FooterWithActions, the code of the EventBooklet copy).
- Item blocks by the forks:
  - HostSurvey_AccommodationItem with the bed list, the duplicate room name check, the 500 ms tooltip and TrySave
    handling;
  - HostSurvey_MealItem, HostSurvey_VehicleItem and HostSurvey_VehiclePills;
  - HostSurvey_HelperItem, HostSurvey_AddHelper (search, paging, BottomSheet, roles), HostSurvey_HelperPills,
    Card_MemberInformation_Survey and Orbit_NoResults;
  - the Custom Dropdown widget `OSDropdownCustom` (port of OSWidgets.Dropdown, Custom mode).
- API: `postHostSurvey` (ActionPostHostSurvey, `callAction`) and `toPostHostSurveyInputs` (lists wrapped, null dates
  back); `fetchSurveyHelpers` (HostSurvey_AddHelper/DataActionGetSurveyHelpers) by fork B.
- Mocks:
  - a pending survey of the fictional Okafor household in Tandil, event 7303, with rooms, meals, a helper and a car;
    open it with `/UBTConnect/HostSurvey?In_EventId=7303`;
  - the GetSurveyHelpers handler answers the householders of `mocks/fictional/directory.ts`.
- List keys of the room, helper and vehicle lists include the list length, so a deleted row remounts the rows after it.

### Files changed

- `app/src/pages/HostSurvey/hooks/hostSurveyState.ts:1-857`: types, variables, client actions (:282-690), reducer (:691).
- `app/src/pages/HostSurvey/hooks/useHostSurvey.ts:1-466`: PostHostSurvey :230, the buttons :247 and :283, the popups
  :305 and :339, OnHandle_SaveFailed :359, OnHandle_BackNavigation :380.
- `app/src/pages/HostSurvey/components/HostSurveyView.tsx:1-888`:
  - steps :205-536, summary :537, header :778, footer :815, popups :840.
- `app/src/pages/HostSurvey/actions.ts` (new): FeedbackMessageAfterTransition, FocusOnFirstInvalidInput.
- `app/src/pages/HostSurvey/components/` new files:
  - HostSurvey_StepHeader, HostSurvey_NavigationItem, HostSurvey_AdminNotes, InputWithMaxChar (B2);
  - HostSurvey_AccommodationItem, hostSurveyAccommodationItem, OSDropdownCustom (fork A);
  - HostSurvey_MealItem, HostSurvey_VehicleItem, HostSurvey_VehiclePills, hostSurveyMealItem, hostSurveyVehicleItem
    (fork C);
  - HostSurvey_HelperItem, HostSurvey_AddHelper, HostSurvey_HelperPills, Card_MemberInformation_Survey,
    Orbit_NoResults, hostSurveyHelpers (fork B).
- Changed: `HostSurvey_Item.tsx`, `Orbit_ConfirmationPopUp_New.tsx`, `components/actions.ts` (+ test), `mocks.ts`.
- `app/src/components/orbit/FooterWithActions/` (new): component, index, README.
- `app/src/api/event/`: `mapper.ts` (toPostHostSurveyInputs, NULL_DATE), `repository.ts` (postHostSurvey),
  `index.ts`, `repository.test.ts` (one case, one input test, count 31), `types.ts` (fork B).
- Tests:
  - new `hooks/hostSurveyWizard.test.ts` (17 tests);
  - updated `hostSurveyState.test.ts`, `useHostSurvey.test.tsx` (4 new flow tests), `HostSurveyView.test.tsx`
    (3 new view tests), `HostSurvey.test.tsx` (1 new page test: event 7303, navigation, accommodation, Next);
  - the item block tests of the forks.

### Tests run

- `npx vitest run src/pages/HostSurvey src/components/orbit src/api/event`: 351 passed, 2 failed.
- The 2 failures are `fetchMilestoneScanFF`. They come from another group's work in progress (no MSW handler for
  `ActionGetMilestoneScanFF`).
- `npx eslint` and `npx prettier --check` on `src/pages/HostSurvey`, `src/components/orbit/FooterWithActions`,
  `src/api/event`: clean.
- `npm run typecheck`: 4 errors, all in `Profile/actions.test.ts` (another group).
- `npm run arch`: no dependency violation.
- `npm run dup` fails at 0.63 % (threshold 0.57 %). The B2 clones are FooterWithActions (82 lines) and Orbit_NoResults
  (12 lines) against the EventBooklet copies. See "Follow-ups".

### Proposed verdicts

- `match`: B150-B156, B159, B160 (variables), B162, B164-B166, B168, B169 (aggregates), B172 (PostHostSurvey, mock).
- `match`: B173, B177-B204 (block actions), B206 (back navigation branches).
- `match`: B207-B211 (note inputs, switch), B213 (message), B219 (footer, popups), B221-B233 (strings).
- `match`: B212 and J014 (item blocks).
- Open within those rows: the decisions below (dropdown list position, tooltip, image loader). They do not change the
  flows.
- Mock-only: PostHostSurvey answers from the mock store; no capture of the wizard exists (the test survey is
  confirmed).

### Follow-ups (other areas, for the orchestrator)

- EventBooklet: import `FooterWithActions` from `@/components/orbit/FooterWithActions` and delete
  `pages/EventBooklet/components/FooterWithActions/` (removes the 82-line clone).
- EventBooklet and HostSurvey: move NoResults to `components/orbit/` (one copy for `OrbitNoResults` and
  `Orbit_NoResults`).
- Fork C kept a local `DropdownCustom` in `HostSurvey_VehicleItem.tsx:61`. Replace it with `OSDropdownCustom` after
  decision 1 (the props and the markup differ a little).
- `repository.test.ts` of `api/event` is also changed by another group (fetchMilestoneScanFF). The count is 31 with both
  cases; check it after the merge.
- Fork B changed one line of `repository.test.ts` with `sed -i`, and B2 one line of `useHostSurvey.test.tsx`. Both lines
  were checked after the change.

### Decisions needed

1. Shared Custom Dropdown (`OSDropdownCustom`).
   - Evidence: OSWidgets.Dropdown Custom mode (`migration/runtime-sources/OutSystemsReactWidgets.js`). Four item blocks
     use it; no React port existed.
   - Options: (a) move it to `components/ui/os/` and port `updateState` (list position, up or down) and the keyboard
     navigation; (b) keep the page copy as it is.
   - Recommendation: (a). No capture shows an open dropdown.
2. Tooltip of the duplicate room name.
   - Evidence: AccommodationItem uses the OutSystems UI Tooltip; no React port and no source in the survey.
   - Options: (a) keep the minimal `osui-tooltip` markup; (b) fetch OutSystems UI 2.23 Tooltip and port it as a shared
     component.
   - Recommendation: (b).
3. MultiResolutionImageLoader of Card_MemberInformation_Survey.
   - Evidence: Connect2_LegacyShared block, no port. The card renders both images, as `MemberInformationCard` does.
   - Options: (a) port the loader as a shared component; (b) accept.
   - Recommendation: (a), later.
4. Variables that DataActionGetSurveyHelpers sends.
   - Evidence: all optional in the contract; the server logic is not visible.
   - Options: (a) the simple variables, In_EventId and In_AlreadyAddedHelpers (built); (b) also the list variables.
   - Recommendation: (a).
5. Instance ids inside the data-step lists.
   - Evidence: TST adds a runtime counter (`l5-142863_0` in the captured summary); no capture of the data steps.
   - Options: (a) `l<list>_<row>` without the counter (built); (b) another pattern.
   - Recommendation: (a).
6. TST defects kept as compiled.
   - "Total seats are required." is set when the seats are valid (VehicleItem OnChange_Inputs).
   - Typos: "Any addtional details", "Confortable Capacity".
   - Options: keep TST, or fix.
   - Recommendation: keep, and record them as TST defects.
