# Screen spec: HostSurvey

Sources: S = `analysis/sources/pretty/UBTConnect.Legacy_OrbitEventsFlow.HostSurvey.mvc.js`; HS =
`analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.mvc.js`;
block sources `analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Blocks.*.mvc.js`; C =
`migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js`; DOM = `analysis/dom/default.html`.

## 0. Summary
The host survey of an Orbit event for the household that hosts (route `/UBTConnect/HostSurvey`, inputs In_EventId,
In_MemberId, In_EventName, In_EventStartDate, In_EventEndDate; S :180-238).
The only captured state is `default`: a confirmed survey shown read-only as "Summary Review" (header class
`orbit-host-survey-no-steps`, DOM :189-230). It has:
- the top message;
- an Accordion with Accommodation (7 rooms) and Meal Options (2 meals);
- five closed dialogs (DOM :164-701).

Built: load flow, header, summary, skeleton, Unable-to-Host and no-setup branches, back navigation of
a confirmed survey. Not captured (Q2): the answering wizard (data steps, footer, dialogs, PostHostSurvey) and the
helper / vehicle summary sections → `<NotCaptured>`.

## 1. Entry and routing
Reached from EventDetail "View Host Survey" (`app/src/screens/EventDetail/index.tsx:135-146`, OnHandle_NavigateToHostSurvey).
DateTime inputs arrive as ISO texts (shell/navigation/osNavigate.ts:23-33); absent or 1900-01-01 = null.
OnHandle_NavigateTo_Back (S :264-287) → navigateBack.

## 2. Component tree
- CommonUI_InsideLayout `$b1` [shell].
- ScreenBlock_HostSurvey `$b2` (route):
  - Layout_Orbit `b2-$b1` [shared], with:
    - MenuIcon__UpdatedOSUI `b2-$b2` (Auto, HS :430-445).
    - Title (event name / dates, HS :452-510).
    - HeaderContent (summary banner, HS :542-566).
    - Content: HostSurvey_TopMessage `b2-$b19`/`b2-$b20`, and Accordion `b2-$b21` [shared osui].
    - The Accordion has two AccordionItem blocks. `b2-$b22` shows rooms: HostSurvey_Item `$b23` + HostSurvey_AccommodationPills `$b24` + HostSurvey_PillItem [shared]. `b2-$b25` shows meals: HostSurvey_Item `$b26` + HostSurvey_MealPills `$b27`.
  - Orbit_ConfirmationPopUp_New ×5 (HS :2927-3318).
  - BackNavigationHandler `b2-$b43` [shared] (HS :3480-3507).
- Screen-only blocks are in `app/src/screens/HostSurvey/components/HostSurvey_Blocks.tsx`.

## 3. DOM and markup contract
As `pack.md` "Markup" and DOM; list ids `b2-l5-142863_<i>-$b23/$b24` and `b2-l6-142871_<i>-$b26/$b27` as captured.

## 5. Data model
HostSurvey (GetHostSurveyResponse, contract `Connect2_OrbitMobile_IS__GetHostSurveyResponse`), CurrentStep
(LocalHostSurveyStep + row number), IsConfirmedSurvey, HasDataSteps, IsFetchingData (HS model :25-200). Local
entities: LocalSurveyStatus, LocalHostSurveyStep, LocalHouseFloor, LocalGenderPreference and the other host-survey
lists, all from the shell's store (`app/src/shell/localEntities/orbitStaticEntities.ts`; CR-HostSurvey-1 applied, the
Q1 stand-in rows removed).

## 6. API calls
- `DataActionGetHostSurvey` (load; OnReady → RefreshData, HS :4723-4798, :5490-5520; calls.md #1), adapter
  `api.ts getHostSurvey`, mock `mocks.ts` (store collection `HostSurvey.surveys`, P-MUTATION).
- `ActionPostHostSurvey` (write, wizard only, not captured): mocked in `mocks.ts` (stores the sent survey; never a
  real server); no caller built (Q2).

## 7. State and lifecycle
OnReady: when the view is restored from cache, nothing happens (P-BACK). Otherwise:
1. IsFetchingData True, GetHostSurvey.
2. OnAfterFetch_GetHostSurvey (HS :5043-5084): when HasError, stop. Else HostSurvey, RefreshLocalSurveyStatus.
3. GetCurrentLocalSurveyStatus (JSON_Name = HostProfileSurveyStatus, max 1, HS :3758-3800).
4. IsConfirmedSurvey = Id Confirmed (HS :7116-7147).
5. GetLocalHostSurveySteps (HS :4118-4170).
6. CurrentStep = first row, HasDataSteps, IsFetchingData False (HS :5825-5881).

## 8. Render logic
Content (HS view :571-2926):
- While fetching: Skeleton_Loading HostSurvey.
- Status Unable to Host: NoInformation_Orbit "This Survey is no longer available…".
- HasDataSteps or confirmed: the current step (summary built; data steps NotCaptured).
- Else: "There is no setup for this household yet.".

Summary (HS :1937-2861):
- TopMessage: confirmed → no title + "If you require further updates…". Else "Summary Review" + "Please ensure…".
- Host note.
- Accordion items by flags: Accommodation needs AccommodationSurvey+Update, Meals need MealSurvey+Update.
- Edit link only when not confirmed.
- "No room data added." / "No meal data added.".

Pills: AccommodationPills view :173-450, MealPills :158-228 (GetFormattedDate_Survey C:2553-2644).
Footer (HS :3320-3465) only while answering → NotCaptured.

## 9. Interactions and navigation
Edit link (not confirmed): NavigateTo_SpecificStep (HS :6392-6476). Back (HS :6958-7115): Unable to Host →
NavigateTo_Back; confirmed → navigation goes on; data-step dialogs NotCaptured.

## 12. Strings
Literal as compiled (HS view lines cited above).

## 13. Accessibility, platform and security notes
PostHostSurvey is a server write. The real backend needs server-side authorization of GetHostSurvey / PostHostSurvey
(household of the signed-in member).

## 13a. Feature flags
`clientVar:App_PIN_BiometricEnabled`, `registeredCallbackEvents.onToggle`: not flags (user, 2026-10-14); no branch.

## 14. Unclear points
- Q1 (decision): local entity rows until CR-HostSurvey-1 → A, stand-in rows (answered by the user, auto-accepted 2026-10-16) [questions.md Q1].
- Q2 (decision): uncaptured wizard and helper/vehicle summaries → A, NotCaptured (answered by the user, auto-accepted 2026-10-16) [questions.md Q2].
- Q3 (decision): cloneQuery → A (answered by the user, auto-accepted 2026-10-16) [questions.md Q3].
- Q4 (decision): proposed exemption VIA-BACK-MENUICON-HOSTSURVEY → A (answered by the user, auto-accepted 2026-10-16) [questions.md Q4].

## 15. Acceptance criteria
With the Q3 cloneQuery: structure 0, text 0, calls 0; remaining differences = CR-HostSurvey-2 and the Q4 rule.

## 16. Decisions to confirm
- Q1 → A, Q2 → A, Q3 → A, Q4 → A (answered by the user, auto-accepted 2026-10-16) [questions.md Q1-Q4].
- Change requests: CR-HostSurvey-1 (shell: remaining Orbit local entities; applied), CR-HostSurvey-2 (applied: the
  Accordion has MultipleItems True, HS view :2003; the shared Accordion is unchanged).
- Mock data: `app/src/mocks/fictional/orbit.ts` `orbitHostSurveys()` (Vitale household, event 7301; captured
  texts kept, masked texts fictional with captured lengths).

## 17. Patterns used
P-PARAMS, P-DATA, P-CALLS, P-MOCKS, P-MUTATION (PostHostSurvey mock), P-STATES, P-LIST (OSList), P-OSUI
(Accordion/AccordionItem), P-BACK (view cache, BackNavigationHandler), P-DIALOG (dialogs closed; NotCaptured).

## 18. Builder notes
Route files: `app/src/screens/HostSurvey/{index.tsx,types.ts,api.ts,mocks.ts}`, `components/{ScreenBlock_HostSurvey.tsx,
HostSurvey_Blocks.tsx,actions.ts}`.
