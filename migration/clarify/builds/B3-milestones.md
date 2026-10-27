# B3: MilestoneDetail blocks (build of 2026-10-27)

Group B3 builds one item: Legacy_OrbitEventsFlow F2 (blocker), decision Q3 (a) of 2026-10-27. No commit.

## Legacy_OrbitEventsFlow F2: the five other milestone blocks and OnHandle_NavigateToContactByEmail

### TST evidence

- Wrapper dispatch: `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.mvc.js`.
  - Meal group: :256-258 (MealGuest, alias 1), :385-386 (MealHost, alias 2), :499 (MealHelper, alias 3).
  - Accommodation group: :610-612 (AccommodationGuest, alias 4), :739-740 (AccommodationHost, alias 5), :867 (AccommodationHelper, alias 6).
  - The inputs of each block: :260-290. The events of each block: :307-342.
  - MealHelper and AccommodationHelper get empty placeholders: :601-602, :983-984.
- Screen: `UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.mvc.js`.
  - CommonUI_InsideLayout in the placeholders of MealGuest, MealHost and AccommodationGuest ($b2, $b3, $b4): :278-323.
  - OnHandle_NavigateToContactByEmail: :408-451. GetNameAndSurname_ByFullName is at :434, ContactByEmailOrbitHost at :437-451.
- ScreenBlock_MealGuest (`…ScreenBlock_MealGuest.mvc.js`): the model is at :1-200, the view at :258-1146, the controller at :1150-2490.
  - OnInitialize closes both popups: :2233-2263.
  - OnAfterFetch_GetMealMilestoneGuest: :1984-2034. Its JS node RefreshCaptions: :2498-2500.
  - OnAfterFetch_GetCaptions: :1679-1730.
  - ContactHostByMessage: :1238-1309. ClickedEmail: :1463-1485. BuildCallDataHost: :2069-2136.
- ScreenBlock_MealHost: the view is at :228-1375, the controller at :1381-2100. It has no captions and no message popup.
  - NavigateTo_ContactHelpdesk passes In_PreloadEventName: :1503-1505.
- ScreenBlock_MealHelper: the view is at :258-1423, the controller at :1427-2600.
- ScreenBlock_AccommodationGuest: the view is at :261-1118, the controller at :1122-2190.
  - OnReady closes both popups: :2090-2125.
  - BuildCallDataHost signs the photo first: :1897, then gets the timezone: :1903.
- ScreenBlock_AccommodationHelper: the view is at :258-1391, the controller at :1395-2560. OnClick_GuestArrangements: :2158-2182.
- Sub-blocks:
  - `Connect2_OrbitMobile_MUI.Orbit_Blocks.HostInformation.mvc.js`: the view is at :184-546. OnClick_Address: :571-662.
  - `…Orbit_Generic_Blocks.PhotoLazyLoaded.mvc.js`: :175-321.
  - `…Orbit_Generic_Blocks.ContactOptions_Orbit.mvc.js`: :150-336.
  - `Connect2_LegacyShared.Widgets.MultiResolutionImageLoader.mvc.js`: :121-141 and InitializeJS :249-276.
  - ExtractChildrenNamesFromCaptions: `Connect2_OrbitMobile_MUI.controller.js:1303-1340, :1381-1401`.

### Files changed

- `app/src/api/event/milestoneBlocks.ts` (new, 1-400) has the 9 data actions in one file:
  - the five block reads (`fetchMilestoneBlock`, :367);
  - the four DataActionGetCaptions calls (`fetchMilestoneBlockCaptions`, :394);
  - the mappers to one domain record, `MilestoneBlockData`.
  - It is a separate file because another agent edits `api/event/index.ts` and `repository.ts` now.
- `app/src/pages/MilestoneDetail/hooks/milestoneBlockState.ts` (new) has the state, the reducer, `closePopups` and the differences per block (`MILESTONE_BLOCKS`, :199).
- `app/src/pages/MilestoneDetail/hooks/useMilestoneBlock.ts` (new, `useMilestoneBlock` :122) has the flows of the five blocks.
- `app/src/pages/MilestoneDetail/actions.ts` (new) has ExtractChildrenNamesFromCaptions and the OnClick_Address of HostInformation.
- `app/src/pages/MilestoneDetail/components/` has these new views:
  - `MealBlockViews.tsx` (MealGuestView :88, MealHostView :123, MealHelperView :204);
  - `AccommodationBlockViews.tsx` (AccommodationGuestView :27, AccommodationHelperView :112);
  - `milestoneBlockParts.tsx` (the frame, the Helper/s and Special Need/s accordions, the guest lists, RoomInfoRow, BlockHostInformation);
  - `HostInformation.tsx`, `PhotoLazyLoaded.tsx` (with MultiResolutionImageLoader inside) and `ContactOptionsOrbit.tsx`.
- `components/AccommodationHostView.tsx` uses the shared HelpersAccordion and RoomInfoRow now. The markup and the ids did not change, and its tests are green.
- `hooks/milestoneWrapperState.ts`: the `notCaptured` body became `milestoneBlock` with the block and the six child inputs (:103-117).
- `components/MilestoneWrapperView.tsx`: it has the instance alias and the placeholders of each block (:107) and the new prop `renderMilestoneBlock`.
- `MilestoneDetailPage.tsx`:
  - It mounts each block with its hook. It sets CommonUI_InsideLayout $b2, $b3 and $b4.
  - `onNavigateToContactByEmail` (:124) is OnHandle_NavigateToContactByEmail.
- `mocks.ts`: it has 9 contract handlers (:454) with fictional data. The data is around event 7301.
  - The Fernández household of Azul hosts the lunch, the dinner and the night.
  - The guests are the Herrera and Ramos households. Two local helpers and two special needs are in the data.
  - An event that is not in the world gives HasData False.
- `ContactByEmailOrbitHost/`: no change, because the screen already reads all 12 inputs.

### What was built

- The wrapper mounts the block of each milestone type, with the TST instance ids (`b1-$b1`…`b1-$b6`) and placeholders.
- One hook drives the five blocks, with the TST differences per block:
  - MealHost has no captions and no message popup.
  - Only the meal blocks sign the photo of a member contact and set IsFetchingTimezone in the message popup.
  - AccommodationGuest signs the host photo first.
  - The helpdesk EventName argument of MealHost is In_PreloadEventName.
- OnReady runs RefreshData, then RefreshCaptionsData without a wait.
  - An UnknownError of GetCaptions ends IsFetchingCaptionData. Any other error goes to the flow handler.
  - A failed data action keeps the skeleton and goes to the flow handler, as in the wrapper.
- Decision W34: a restored view with its data makes no call. A restored view without its data reads again.
  - OnInitialize or OnReady close both popups on a restored view (`restore`). MealHost has neither step.
- The views follow the compiled trees: the conditions, the classes, the texts, the order of the popups and the instance aliases.
- OnHandle_NavigateToContactByEmail:
  - It gets the surname with GetNameAndSurname_ByFullName(In_ContactName).
  - It goes to ContactByEmailOrbitHost with In_EntityType Member, In_EntityId In_HostId and In_EventName of the screen.
  - The event's In_ContactSurname is dropped, as compiled. There is no Orbit access check.

### Tests

- `npx vitest run src/pages/MilestoneDetail`: 9 files, 96 tests pass.
  - New: `hooks/useMilestoneBlock.test.tsx` (15 tests) and `actions.test.ts` (5 tests).
  - New in `MilestoneDetail.test.tsx`: 5 page tests, one of them for the e-mail path to ContactByEmailOrbitHost.
  - Updated: `MilestoneWrapperView.test.tsx` and `milestoneWrapperState.test.ts`.
- `npx eslint` and `npx prettier --check` on the changed files: clean.
- `npm run typecheck`: no error in the changed files. There are errors in `src/pages/Profile/actions.test.ts` (another area).
- `npm run arch`: no violation. jscpd on the page: no clone. knip: no unused export in the changed files.
- `src/api/event/repository.test.ts` has 2 failures for `fetchMilestoneScanFF`. They come from the parallel change of OrbitAdminFlow Q1, not from B3.

### Proposed verdicts

| Row | Proposed verdict | Note |
|---|---|---|
| A182 | match | The six types dispatch to six blocks. |
| J001 MealGuest | match | See the open details below. |
| J002 MealHost | match | See the open details below. |
| J003 MealHelper | match | See the open details below. |
| J004 AccommodationGuest | match | See the open details below. |
| J005 AccommodationHelper | match | See the open details below. |
| A175 | match | OnHandle_NavigateToContactByEmail is built. |

Open details that do not block the verdicts:

- Orbit_Blocks.OrbitAdminTag is not built. It renders `NotCaptured`, as in AccommodationHost. It shows only for a member with HasOrbitAdminRole, and the mock data has none.
- The ids inside the lists are not captured. The views use `l<alias>-…_<row>` ids. The ids outside the lists are the TST ids.
- The class of the ContactOptions_Orbit icons (extendedProperties className and style) is not captured.

## Decisions needed

1. TimezoneOffset of the host message popup.
   - Evidence: all four blocks assign `GetCacheableTimezoneInfo.CacheResult.Milliseconds` (for example MealGuest.mvc.js:1299-1300). This is the time of the cache read in ms, not the offset. It is a TST defect.
   - Options: (a) 0, the cache-hit value (built now); (b) add the cache timing to `getCacheableTimezoneInfo` (a shared change); (c) use OffsetSeconds (a fix of the defect).
   - Recommendation: (a). Record the defect in `app/docs/known-original-bugs.md` (another area).
2. The "Accommodation:" link of a helper card in MealHost and MealHelper.
   - Evidence: MealHost.mvc.js:861 and MealHelper.mvc.js:881 read `MealData.Guests.Current.MemberInformation.Current` outside the guests list. That is the first guest's first member, not the helper.
   - Options: (a) keep it as compiled (built now); (b) use the helper's own Accommodation.HouseholderId.
   - Recommendation: (a). Record it in `app/docs/known-original-bugs.md`.

## Notes for the orchestrator (files of other areas)

- `app/src/api/event/index.ts`: add the barrel exports of `milestoneBlocks.ts` (`fetchMilestoneBlock`, `fetchMilestoneBlockCaptions` and the types). Then change the deep imports of the page (`@/api/event/milestoneBlocks`) to `@/api/event`. The README rule asks for the barrel. I did not edit the file, because another agent edits it now.
- `app/docs/reference/api.md` already lists the 9 data actions as `fictional`. The mocks now exist in `pages/MilestoneDetail/mocks.ts`.
- Shared SanitizedHtml: HouseholdCaptions always starts with `<nobr>`. The port matches the tag names exactly, and HTML tag names are in upper case. So AllowedTags "nobr,sup" does not keep `<nobr>`, and with KEEP_CONTENT false the caption renders empty (seen in the page test). Check this on TST before a change.
- Shared `generateScreenURL`: a destination that has a `?` (`https://www.google.com/maps/dir/?api=1`) gets a second `?`. The same happens in AssembleSummaryCard.
