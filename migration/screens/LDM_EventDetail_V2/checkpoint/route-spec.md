# Screen spec: LDM_EventDetail_V2

Sources: `analysis/sources/pretty/` (= `p/`; SB = `p/Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.mvc.js`),
`analysis/dom/{default,loading,offline}.html`, `analysis/calls.md`, `pack.md`, `capture/survey-UBTConnect.json`
(EventDetail_SpecialNeeds_ListItem), `migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js` (= C).
LDM = Lord's Day Meal; the UI lives in the Orbit module `Connect2_OrbitMobile_MUI` (only V2 is built, user 2026-10-16).

## 0. Summary
Detail of one Lord's Day meal, opened from a My Timeline card (LDM_MyEvents_V2). Header: back icon and the meal's date
("13th July 2026"). Content: a banner (hall photo, "Host"/"Guest", locality, date, "Contact Coordinator"), the host
card for a guest (photo, name or "Host Allocation Pending", call / email links, arrow; address and "Directions" once
the allocation is published), and for a published allocation the guest households; a host also sees the special
needs (Dietary, Mobility, Other). Captured on TST with a full-permission account: the guest view with the allocation
pending (`dom/default.html`:66-148), the loader (`dom/loading.html`:63-64) and the fetch-error ErrorScreen
(`dom/offline.html`:81-88).

## 1. Entry and routing
`/UBTConnect/LDM_EventDetail_V2?EventHostId=&EventId=` (Long Integer, `p/UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.mvc.js`
model :60-75, SB model :141-158). Entry: LDM_MyEvents_V2 NavigateTo_EventDetail(EventId, EventHostId). Capture reached
by a click (`analysis/states.json` via); parity needs a cloneQuery (Q2).

## 2. Component tree
Screen > `ScreenBlock_EventDetail_V2` (route) > `Layout` [shared] (HeaderLeft `MenuIcon__UpdatedOSUI` [shared], Title,
Content) > `EventsDetail_Content` > `EventDetail_Banner`, `EventDetail_HostCard` > `Person_Contact_Options` [shared];
`EventDetail_Section` > `EventDetail_SubSection` [shared] > `EventDetail_SpecialNeeds_ListItem`; `EventDetail_Section` >
`EventDetail_ListItem` > `Person_Contact_Options`; `ErrorScreen` [shared]; `ContactPopup_ByPhone`,
`ContactByMessage_Wrapper` [shared]; after the Layout `Dialog_AccessRestrictedAction_Legacy` [shared]; BottomBar
`BottomBarMenu` [shared]; then `CommonUI_InsideLayout` [shared]. Route blocks in `components/`.

## 2a. Architecture diagram
```
index.tsx ──► ScreenBlock_EventDetail_V2 ──► api.getCoordinatorDetails / getEventByEventId / getHouseholdCoordinates
   │                                            └─► callAction(Connect2_OrbitMobile_MUI, ScreenBlock_EventDetail_V2/DataAction… | ActionGetHouseholdCoordinates)
   └─ navigation (useOsNavigate, pageRedirect)   mocks.ts ──► contractHandler ◄── src/mocks/fictional/ldm.ts (shared LDM world)
```

## 3. DOM and markup contract
As captured (pack "Markup"). Instance ids: `b1-$b1` Layout, `b1-$b2` MenuIcon, `b1-$b3` EventsDetail_Content (placeholders
`b1-b3-Banner_Placeholder` / `GuestView_Placeholder` / `Content_Placeholder`), `b1-$b4` Banner, `b1-$b5` HostCard
(`b1-b5-$b1` contact options), `b1-MarkReadLoading`, `b1-$b15` / `b1-$b16` ErrorScreen, `b1-$b17` / `b1-$b18` popups,
`b1-FreeSubscriptionAlert` (scope `b1-b19`), `$b2` BottomBarMenu, `$b3` CommonUI_InsideLayout. Uncaptured branches use
the compiled names (`b1-Detail_SpecialNeeds`, `b1-SubSection_Dietary`, `b1-List_Guests`, `b1-ListItem_Guests`…); list
row ids are approximated.

## 4. Visual specification
Original CSS only. Banner heights: MinBannerHeight 210 (SB model :57), the banner measures `.event-detail-banner-text`
(CorrectHeightJS, `p/…EventDetail_Banner.mvc.js`:865-869) and raises SetContainerHeight (captured 212px). Host photo
box 100×55 (MaxPhotoWidth/Height), special-needs photo 45 (SquarePhotoPx). Compiled inline styles: `cursor: pointer`
on clickable containers, `padding: 0px 5px 2px` on the envelope icon, `min-height: 51px` on the guest's button.

## 5. Data model
`types.ts`: EventDetail (Host_V2, Guests DetailGuestItem_V2[], SpecialNeeds Diet/Mobility/Other), CoordinatorDetails
(GetCoordinatorDetailsResponse inside HostDetails), HouseholdCoordinates. Block variables in the ScreenBlock Model (SB
model :46-100). Host.EventDate is Text (TextToDate in the view, SB :299).

## 6. API calls
| Call | Phase | Owner | Mock |
|---|---|---|---|
| DataActionGetCoordinatorDetails | load (fetch at start, SB :1364-1387) | ScreenBlock_EventDetail_V2 | contractHandler, the LDM coordinator of the host's locality |
| DataActionGetEventByEventId | load (fetch at start + OnReady refresh, SB :1388-1417, :1989-2066; one call captured) | ScreenBlock_EventDetail_V2 | contractHandler, `eventCalendarDetail(e)` by EventId; unknown → Out_HasContent False |
| ActionGetHouseholdCoordinates | Directions click (OnHandle_HostCardAddress) | Connect2_OrbitMobile_MUI | contractHandler, coordinates of the household's locality |
Inputs sent: EventHostId, EventId (the other screen variables are sent automatically by OutSystems, calls.md).

## 7. State and lifecycle
OnInitialize (SB :1418-1445): popups closed. OnReady: restored from the view cache → nothing; else IsFetching True,
both data actions, OnAfterFetch (HasInformation = Out_HasContent, IsFetching False), AddAuditRequestAPIEvent
(RequestAPI_EventDetail → log, decision U17). A fetch error of GetEventByEventId keeps IsFetching True (empty title,
`dom/offline.html`) and goes to the flow handler (Service Interruption). OnParametersChanged (SB :1665-1701): a new
block per inputs (key). P-BACK: useViewState / useWasRestoredFromCache.

## 8. Render logic
Title: empty while fetching; "No Event Available" when no information or fetch error; else FormatDateForEventBanner
(C:1638-1660: "d" + ordinal + " MMMM yyyy"). Content (SB :319-1100): fetch error → ErrorScreen b16; fetching →
loader; no information → ErrorScreen b15; else EventsDetail_Content. GuestView: HostCard only when not hosting.
Content_Placeholder: Special Needs when hosting and any list non-empty (sub-sections per non-empty list); Guest
Households when IsPublished and guests non-empty. Banner: Adults/Children only for a host; button enabled =
GetCoordinatorDetails.Out_HasContent (default True). HostCard (`p/…EventDetail_HostCard.mvc.js` view): content hidden
for a host without allocation; name "Your Host" when empty, "Host Allocation Pending" when not assigned.

## 9. Interactions and navigation
- Contact Coordinator → AddAuditEventDetailEvent(ContactEventOrganiser), message popup with the coordinator (combined
  email/phone, LDM logo, "Contact"); Email → ContactByEmailLDMCoordinator(In_EmailTo, In_ContactName, In_EventDate,
  In_AvatarURL, In_Subject = LDMEventName + " - " + date, In_EventLocality) (not built yet: original path).
- Host email → message popup (flipped name); Email → ContactByEmailMember(… In_IsHousehold True, In_LDMEventDate,
  In_LDMEventLocality, In_HouseholdHeaderName) via GetNameAndSurname_ByFullName.
- Host call → ContactPopup_ByPhone (Phone = Host.Phone only when mobile/home/work are all empty, SB :2327-2409).
- Host row / arrow → HostInformation: displayed → disabled record → upgrade popup, else HouseholdDetails(HouseholdId).
- Address / Directions → GetHouseholdCoordinates, web maps `https://www.google.com/maps/dir/?api=1?api=1&query=&origin=…`
  (generateScreenURL as the original); "Map is not available" / network message (Info). Android branches out of scope.
- Guest row → GoToHousehold: displayed → disabled → upgrade popup, else audit and HouseholdCarousel(In_StartingHouseholdId)
  with the preload list (flag C2EnableCarousel on) / HouseholdDetails(HouseholdId).
- Guest call / email → the two popups (email offline: network message).

## 10. Sequence diagrams
```
mount ─► GetCoordinatorDetails ─► coordinator
     └─► GetEventByEventId ─► HasInformation, IsFetching False ─► Banner OnReady ─► SetContainerHeight(212)
```

## 11. Error handling and feedback
Fetch error → ErrorScreen "No event information." + flow handler message. Directions: "Map is not available",
"Please check your network connection and try again" (Info); errors → GoogleMapsNotInstalled / UnknownError.

## 12. Strings
As compiled: "No Event Available", "No event information.", "Host", "Guest", "Adult(s)", "Child(ren)", "Contact
Coordinator", "Host Allocation Pending", "Your Host", "Directions", "Special Needs", "Dietary", "Mobility", "Other",
"Guest Households", "Including: ", "Not Attending: ".

## 13. Accessibility, platform and security notes
Web branch only (GetOperatingSystem Other; LaunchWithData / geo: not used). Server side must authorize
GetEventByEventId / GetCoordinatorDetails for the signed-in household (guest or host of the meal).

## 13a. Feature flags
C2EnableCarousel (default-only on, user 2026-10-14) via `useFlagOn` in index.tsx. The other pack flags are read by
shared blocks only (connect_LaunchDarkly_PermissionCheck, App_PIN_BiometricEnabled: not flags).

## 14. Unclear points
- Q1 (decision): uncaptured host / published branches → built from the compiled code (recommended A).
- Q2 (decision): parity cloneQuery `mocksession=unlocked&EventHostId=88231&EventId=70415` (recommended A).
- Q3 (decision): mock of the captured event (pending allocation, as TST) and published allocations for the others (A).
- The captured texts are masked; the locality / date wording of the mock follows the compiled formats.

## 15. Acceptance criteria
default, loading and offline parity clean apart from the proposed exemptions (`proposed-exemptions.json`); same calls
in the same phase as `analysis/calls.json`.

## 16. Decisions to confirm
- Q1 → A (pending orchestrator answer): uncaptured branches built from the compiled code.
- Q2 → A (pending orchestrator answer): cloneQuery `mocksession=unlocked&EventHostId=88231&EventId=70415`.
- Q3 → A (pending orchestrator answer): 70415 pending as captured; the other four meals published.
- Fictional data for the three unrecorded calls (shared `src/mocks/fictional/ldm.ts`).
- MenuIcon: the Orbit `MenuAction.Auto` is passed as Back, as captured (`app-menu-icon back`, dom/default.html).
- CR-LDM_EventDetail_V2-1: move flipHouseholdName / getLocalityName / addAuditEvent_LDM / generateScreenURL to shared.
- Proposed exemptions (not applied, `proposed-exemptions.json`): Person_Contact_Options link cursor (capture href
  artifact), banner locality/date column offset (masked text). With the Q2 cloneQuery the diagnostic parity is
  default style 6 + position 1 (both covered), loading and offline clean; without it, default shows "No event
  information." (EventId 0).

## 17. Patterns used
P-PARAMS, P-STATES, P-DATA, P-MOCKS, P-CALLS, P-BACK, P-LIST, P-FLAGS, P-DIALOG.

## 18. Builder notes
Route files: `app/src/screens/LDM_EventDetail_V2/{index.tsx,types.ts,api.ts,mocks.ts}`, `components/`
(ScreenBlock_EventDetail_V2, EventsDetail_Content, EventDetail_Banner, EventDetail_HostCard, EventDetail_Section,
EventDetail_ListItem, EventDetail_SpecialNeeds_ListItem, actions.ts). Shared mock module extended:
`app/src/mocks/fictional/ldm.ts` (eventCalendarDetail, coordinatorDetails, householdCoordinates, ldmEventById).
