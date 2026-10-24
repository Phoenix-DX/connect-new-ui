# Dev · F22-26 · Restored views as OutSystems (F22, F24, F26)

## Result
status: pass
summary: The 3 places restore their view on a back navigation and make no call, with the existing view cache
(`useFlowState` saved state and `restored`). When a block has no saved data (no saved state, or the user left before
the answer), OnReady runs as on a new visit. Quick checks pass. The full vitest suite passes (3950 tests).

### What changed

1. **F22** `containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts`: removed `restore: restartRestoredView`.
   A restored view now starts from its saved state. In OnReady, each data action is skipped when the view is restored
   and its part of the saved state has the data (`households.isDataFetched`, `isDataFetched`). Both routes
   (SupperMeeting_Details, SupperMeeting_Carousel) use the container.
2. **F24** `pages/MilestoneDetail/hooks/useAccommodationHost.ts`: removed `restore: () => INITIAL_...`. OnReady gets
   `restored` and returns at once when `restored && hasAccommodationHostData(saved)`. The new pure helper
   `hasAccommodationHostData` is in `accommodationHostState.ts`: GetAccommodationHost answered and IsFetchingData is
   False again, that is, OnReady ended. The block view name is its own since P6-G5, so the restored state is always
   this block's state. The 2 former crash paths (optional input missing; a visit from a notification, then a member,
   then back) now restore the view and make no call, with no crash. A restored entry without a saved state for the
   block fetches as on a forward visit.
3. **F26** `pages/AssembleDetail`:
   - ContactList (`useAssembleEventContactList`): contacts and IsDataFetched moved to `useFlowState` (view name
     `Assemble.AssembleEventDetail_ContactList#<id>`). The call is skipped when the view is restored with
     IsDataFetched.
   - Contact (`useAssembleEventContact`): ContactPopupData and CallPopup moved to `useFlowState` (view name
     `...AssembleEventDetail_Contact#<id>`). The block has no OnReady, so there is no call to skip.
   - Hall (`useAttendeeSubdivision`): the whole block record (IsSelected, rows, CountryCode, LocalityId, share sheet)
     moved to `useFlowState` (view name `...AssembleEventDetail_AttendeeSubdivision#<id>`). GetCacheableSubdivision_V2
     is skipped when the view is restored with the hall's data (`hasHallHouseholds`: LocalityId is set). The local
     bookmarks read (Set_SelectedAssembleAttendeeListBookmarks) still runs on a restored view, as in OutSystems.
   - Locality (`AssembleEventDetail_LocalitySubdivisionList`): IsSelected moved to `useFlowState` through the new
     hook `hooks/useLocalitySubdivisionList.ts` (view name `...AssembleEventDetail_LocalitySubdivisionList#<id>`).
   - `hooks/blockLifecycle.ts`: `useReadyOnce` is now a once-guard for the `onReady` option of `useFlowState`.
     `useIsAlive` is unchanged.
   - The hooks take the block instance id (`blockId`) for the view name. The 3 components pass their `id`.
     `useAttendeeSubdivision` makes the Bookmark_Note id from it, as the component did before.
   - `initialAttendeeSubdivisionState(subdivision)` lost its `restored` argument: a restored view starts from its
     saved state.

### Refresh paths per block (item 4)

I found no OnParametersChanged, timer, pull-to-refresh or child event that refreshes the skipped calls. The one
OnParametersChanged I found (hall) is a local read, and the port never had it.

| Block | OnReady on a restored view (OutSystems) | Other refresh paths | Kept in the port |
|---|---|---|---|
| SupperMeeting_DetailsBlock | Get_IsViewRestoredFromCache → nothing (`SupperMeeting_DetailsBlock.mvc.js` 636-694, check at 665, JS 778-781); else skeleton + Refresh GetSubdivision (676) | GetSubdivision on demand only (455-457); onInitialize null (745), onDestroy null (765), onParametersChanged null (766). Screen SupperMeeting_Details: every handler null (`SupperMeeting_Details.mvc.js` 275-279). Carousel screen: OnInitialize only (`SupperMeeting_Carousel.mvc.js` 362), no data action; EntitiesCarousel_Element OnParametersChanged (519) computes the render buffer only | nothing to keep |
| SupperMeeting_HouseholdList | IsViewRestoredFromCache → nothing (`SupperMeeting_HouseholdList.mvc.js` 260-316, check at 287, JS 382); else skeleton + Refresh GetSubdivisionHouseholds (298) | on demand only (223); onParametersChanged null (368) | nothing to keep |
| ScreenBlock_AccommodationHost | WasCurrentViewRestoredFromCache → nothing (`ScreenBlock_AccommodationHost.mvc.js` 2355-2409, check at 2379, JS 2911-2913) | RefreshData and RefreshDocumentData are called only from OnReady (2387, 2390); both data actions on demand (1768-1771); onDestroy null (2898), onParametersChanged null (2899); no pull-to-refresh handler (Layout_Orbit's OnPullToRefresh is not bound); screen MilestoneDetail: every handler null (`MilestoneDetail.mvc.js` 755-759) | nothing to keep |
| AssembleEventDetail_ContactList | WasCurrentViewRestoredFromCache → nothing (`AssembleEventDetail_ContactList.mvc.js` 452-650, check at 525, JS 764-766); else ListAppend loop + GetCacheableMemberContactList + IsDataFetched (532-625) | onDestroy null (748), onParametersChanged null (749) | nothing to keep |
| AssembleEventDetail_Contact | no OnReady (1684) | onParametersChanged null (1687); no call at all | n/a |
| AssembleEventDetail_AttendeeSubdivision | restored → nothing (`AssembleEventDetail_AttendeeSubdivision.mvc.js` 1635-1830, check at 1701); else local copy, BuildSkeletonList, GetCacheableSubdivision_V2 (1718-1805); then always Set_SelectedAssembleAttendeeListBookmarks (1812-1814, action 2368) | **OnParametersChanged → Set_SelectedAssembleAttendeeListBookmarks (2899-2917)**: the port never had it (before and after this step). It is a local read and runs only when the hall input changes. The input does not change on a back navigation because the parent meeting is restored. | the local bookmarks read on a restored view (kept); OnParametersChanged not added (out of scope, see Deviations) |
| AssembleEventDetail_LocalitySubdivisionList | restored → nothing (`AssembleEventDetail_LocalitySubdivisionList.mvc.js` 702-790, check at 765); else local copy = input, IsSelected False (776) | onDestroy null (885), onParametersChanged null (886) | nothing to keep |
| Screen AssembleDetail / AssembleEventDetail | screen handlers null (`AssembleDetail.mvc.js` 1545-1549); AssembleEventDetail already restored before this step | none | unchanged |

### A child screen changes what a restored parent shows (item 5)

- AssembleDetail → HouseholdDetails or HouseholdCarousel: the user can bookmark a household. OutSystems reads the
  local bookmarks again in OnReady on a restored view, so the hall rows show the new IsBookmarked. The port does the
  same (kept; covered by `useAttendeeSubdivision.test.tsx`). OutSystems does not refresh the other variables, and
  neither does the port.
- MilestoneDetail → GuestArrangements, HouseholdDetails, ContactByEmailOrbitHelpdesk: GuestArrangements is
  read-only, and the other two do not change the accommodation data. No case found.
- SupperMeeting → HouseholdDetails or HouseholdCarousel: the supper meeting card and the household cards show no data
  that these screens change. No case found. The bookmark and notes actions of the supper meeting are in
  EntityDetailsActionsContainer, which this step does not change.

### Tests

Updated (they asserted the old reload or the empty state on a back navigation):
- `pages/SupperMeeting_Details/SupperMeeting_Details.test.tsx`: "a back navigation shows the skeletons again and
  refreshes…" → "a back navigation restores the supper meeting and its households with no call (no skeleton)". Added
  "a new visit after the back navigation calls both data actions again".
- `pages/MilestoneDetail/MilestoneDetail.test.tsx`: "…back, the accommodation is fetched again" → "…back, the
  accommodation is restored with no call". Added the 2 former crash paths (`it.each`): restored view, no call, no
  crash.
- `pages/MilestoneDetail/hooks/useAccommodationHost.test.tsx`: "fetches again on a view that the view cache restored…
  (W27)" → 3 tests: restored with a saved state (no call, saved state, no skeleton); restored without a saved state
  (fetch, no crash); saved before OnReady ended (OnReady again).
- `pages/AssembleDetail/hooks/attendeeSubdivisionState.test.ts`: the `restored` argument is gone. Added a test for
  `hasHallHouseholds`.

Added:
- `containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.test.tsx`: 3 tests (restored: no call and saved
  state; no saved state: both calls; saved before the households answered: households only).
- `pages/SupperMeeting_Carousel/SupperMeeting_Carousel.test.tsx`: back restores each slide with no call.
- `pages/MilestoneDetail/hooks/accommodationHostState.test.ts`: `hasAccommodationHostData`.
- `pages/AssembleDetail/hooks/useAssembleEventContactList.test.tsx` (new): forward, StrictMode, restored (no call),
  no saved state (call), saved before the answer (call).
- `pages/AssembleDetail/hooks/useAttendeeSubdivision.test.tsx` (new): forward, StrictMode, restored (open hall, no
  call, bookmarks read again), no saved state (call).
- `pages/AssembleDetail/hooks/assembleEventContacts.test.ts`: the reducers of the contact list and the contact.
- `pages/AssembleDetail/AssembleDetail.test.tsx`: back restores the contacts, the open locality and the open hall
  (no loading rows, no server call). A locality that was closed when the user left: after the back navigation, its
  halls load as on a new visit.

The hook tests restore a view with the real view cache (`saveView`, `enterView` on the entry key of the memory
router).

### For the documenter (not changed here, per "Not in this step")

- `app/src/containers/SupperMeetingDetails/README.md`: the "Flows" and "Not settled" sections describe the old
  reload on back.
- `app/docs/guides/page-template.md` lines 94-96: they give `useAccommodationHost.ts` as an example of
  `restore: () => INITIAL_STATE`. It no longer uses that option (`pages/Notes/hooks/useNotes.ts` still does).
- W27 in the step report of P6-G5-B-MilestoneDetail: the 2 paths were "old: crash, new: reload". They are now "restored,
  no call".
- `migration/refactor/followups.md` rows F22, F24, F26.

## Files changed
app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts
app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.test.tsx
app/src/pages/SupperMeeting_Details/SupperMeeting_Details.test.tsx
app/src/pages/SupperMeeting_Carousel/SupperMeeting_Carousel.test.tsx
app/src/pages/MilestoneDetail/hooks/useAccommodationHost.ts
app/src/pages/MilestoneDetail/hooks/useAccommodationHost.test.tsx
app/src/pages/MilestoneDetail/hooks/accommodationHostState.ts
app/src/pages/MilestoneDetail/hooks/accommodationHostState.test.ts
app/src/pages/MilestoneDetail/MilestoneDetail.test.tsx
app/src/pages/AssembleDetail/hooks/assembleEventContacts.ts
app/src/pages/AssembleDetail/hooks/assembleEventContacts.test.ts
app/src/pages/AssembleDetail/hooks/attendeeSubdivisionState.ts
app/src/pages/AssembleDetail/hooks/attendeeSubdivisionState.test.ts
app/src/pages/AssembleDetail/hooks/blockLifecycle.ts
app/src/pages/AssembleDetail/hooks/useAssembleEventContact.ts
app/src/pages/AssembleDetail/hooks/useAssembleEventContactList.ts
app/src/pages/AssembleDetail/hooks/useAssembleEventContactList.test.tsx (added)
app/src/pages/AssembleDetail/hooks/useAttendeeSubdivision.ts
app/src/pages/AssembleDetail/hooks/useAttendeeSubdivision.test.tsx (added)
app/src/pages/AssembleDetail/hooks/useLocalitySubdivisionList.ts (added)
app/src/pages/AssembleDetail/components/AssembleEventDetail_Contact.tsx
app/src/pages/AssembleDetail/components/AssembleEventDetail_ContactList.tsx
app/src/pages/AssembleDetail/components/AssembleEventDetail_AttendeeSubdivision.tsx
app/src/pages/AssembleDetail/components/AssembleEventDetail_LocalitySubdivisionList.tsx
migration/refactor/handoffs/F22-26/dev.md (added)

No file in `app/src/platform/navigation/` changed.

## Commands run
npx vitest run (affected folders, before the change) → exit 0; 20 files, 133 tests
npm --prefix app run typecheck → exit 0
npx eslint <the 25 changed app files> → exit 0, 0 problems
npx prettier --check <the 25 changed app files> → exit 0
npx vitest run src/containers/SupperMeetingDetails src/pages/SupperMeeting_Details src/pages/SupperMeeting_Carousel src/pages/MilestoneDetail src/pages/AssembleDetail → exit 0; 22 files, 157 tests
npx vitest run (full suite) → exit 0; 639 files, 3950 tests
npm run arch → exit 0; 0 errors, 222 warnings (none in a changed file)
python3 migration/tools/refactor/arch_baseline.py check → 72 warnings, 72 baseline rows, 0 new, 0 gone
npx jscpd --config .jscpd.json → 36 clones, 0.53 %; no clone in a changed range (the MilestoneDetail clones are in unchanged code)

## Deviations from the brief
- The skip condition is "restored, and the saved state has the block's data". It is not "restored" alone. This
  applies the brief's rule for F24 ("when no state was saved for the entry, fetch as on a forward visit") to every
  block, and it follows the convention of the Locality_Details hooks (`restored && isDataFetched`). It also matches the
  OutSystems runtime: a block is "restored" only when its own cached state exists
  (`OutSystemsReactView.js`: `viewWasRestoredFromCache = true` only for a component with a non-empty cached state). In
  the port, `restored` is screen-wide.
  - One edge case differs from OutSystems: the user leaves before a block's answer (the saved state is still loading).
    OutSystems restores the skeleton and makes no call, so the skeleton stays. The port calls again.
  - The same check also covers a block that mounts later on a restored screen, for example a locality that was
    closed when the user left and is opened after the back navigation. Before this step, the halls of that locality
    never loaded.
- AttendeeSubdivision has OnParametersChanged (Set_SelectedAssembleAttendeeListBookmarks) in OutSystems, and the port
  never had it. I did not add it: it is not a restored-view refresh path, it is a local read, and adding it would be a
  new behavior outside the brief. It could be a follow-up item.
- The Contact popups (ContactPopupData, CallPopup) are restored as saved, as in OutSystems. HelpersDetail closes its
  call popup on restore (an old-port choice). In AssembleDetail, every flow that leaves the screen closes its popup
  first, so an open popup is not expected in a saved view.
- New file `hooks/useLocalitySubdivisionList.ts`: one hook per block with state (page template). The block had a
  `useState` in its component before.

## Loop 1

status: pass (test only; no app code changed). Work done in the main tree, on top of F25.

Failure (`test.md`): `SupperMeeting_Details.test.tsx` "a new visit after the back navigation calls both data actions
again" asserted the skeleton right after the forward `router.navigate`. Under full-suite load, the mock answers
sometimes arrived inside that `act`, and the skeleton was already gone.

Fix:
- That test (renamed "a new visit (forward) to the same supper meeting starts from the skeletons and calls both data
  actions"): both data actions never answer from the forward navigation on (`neverAnswer`, MSW `delay('infinite')`).
  The test waits (`waitFor`) for the 2 new calls, then asserts the skeleton and the 4 skeleton rows. These cannot
  change afterwards.
- The same pattern in the other new restore tests of the step. No fixed timer is left in them. Each positive check
  waits for its state with `waitFor`. Each "no call" check runs after an effects flush with no timer
  (`act(async () => { await Promise.resolve(); })`):
  - `SupperMeeting_Details.test.tsx` (back test): `setTimeout(0)` → flush; also asserts that the skeleton stays off.
  - `SupperMeeting_Carousel.test.tsx` (back test): `setTimeout(0)` → flush.
  - `MilestoneDetail.test.tsx` (`backToMilestone`): `wait(0)` → flush.
  - `AssembleDetail.test.tsx`, back test:
    - Before leaving, it waits for the meeting, contacts and hall calls (1, 1, 3).
    - The no-call check counts these 3 actions instead of every call (an image call could land late).
    - It compares the household ids instead of the list text (the bookmark write could land late).
    - `setTimeout(0)` → flush.
  - `AssembleDetail.test.tsx`, closed-locality test: the hall call count is now inside the `waitFor`.
  - `useSupperMeetingDetails.test.tsx`: the 3 restore tests use `waitFor` (`waitForData`) and the flush instead of
    `settle()`.
  - `useAccommodationHost.test.tsx`: the 3 restore tests use `waitFor` instead of `flush()` for the states they
    assert. `afterEach` sets `useWasRestoredFromCache` back to false, so a failed restore test cannot leak into the
    next test.
  - `useAssembleEventContactList.test.tsx`, `useAttendeeSubdivision.test.tsx`: `settle()` (`setTimeout(0)`) is
    replaced by `waitFor` helpers (`waitForContacts`, `waitForHall`) and the flush.

Files changed (tests only):
app/src/pages/SupperMeeting_Details/SupperMeeting_Details.test.tsx
app/src/pages/SupperMeeting_Carousel/SupperMeeting_Carousel.test.tsx
app/src/pages/MilestoneDetail/MilestoneDetail.test.tsx
app/src/pages/MilestoneDetail/hooks/useAccommodationHost.test.tsx
app/src/pages/AssembleDetail/AssembleDetail.test.tsx
app/src/pages/AssembleDetail/hooks/useAssembleEventContactList.test.tsx
app/src/pages/AssembleDetail/hooks/useAttendeeSubdivision.test.tsx
app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.test.tsx
migration/refactor/handoffs/F22-26/dev.md

Commands run:
npm --prefix app run typecheck → exit 0
npx eslint <the 8 test files> → exit 0, 0 problems
npx prettier --check <the 8 test files> → exit 0
npx vitest run <the 8 test files>, 5 times in a row → 5 × (8 files, 64 tests passed)
npx vitest run (full suite) → exit 0; 639 files, 3963 tests passed

Process note: I made one edit of `useSupperMeetingDetails.test.tsx` with a short inline Python script, not with the
Edit tool (rule 6 asks for a kept script). The result is a normal text replacement of the 3 restore tests. The diff
shows it.

## Questions for the user
none
