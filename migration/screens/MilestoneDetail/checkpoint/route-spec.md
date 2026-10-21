# Screen spec: MilestoneDetail

Sources: `S` = analysis/sources/pretty/UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.mvc.js, `MW` = …Connect2_OrbitMobile_MUI.
Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.mvc.js, `SB` = …ScreenBlock_AccommodationHost.mvc.js, `C` =
migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js, `LS` = migration/runtime-sources/Connect2_LegacyShared.controller.js,
`DOM` = analysis/dom/default.html.

## 0. Summary
Orbit milestone detail. The screen hosts ScreenBlock_MilestoneWrapper, which picks the block of the milestone type
(MW :257-1010). Captured once (state `default`, phone 390x844, full-permission account) via OrbitLanding → EventDetail →
Accommodation card: type `accommodation-host` → ScreenBlock_AccommodationHost: header (event name, "Accommodation (Host)"),
"Accommodation Allocation" with the date, an accordion of six rooms (floor, type, beds, guests with member cards), the
Contact Orbit Helpdesk footer (DOM :1-990). Loading and offline states could not be captured (states.json). Built:
the wrapper, ScreenBlock_AccommodationHost (all its branches), the screen's navigations; other types → `<NotCaptured>` (Q5).

## 1. Entry and routing
`/UBTConnect/MilestoneDetail`, inputs In_FromNotification (Boolean), In_MilestoneId (Text), In_EventId, In_HostId (Long
Integer), In_OrbitMilestoneTypeId, In_MilestoneName, In_EventName (Text) (pack.md; S :187-210). Opened by EventDetail
(`app/src/screens/EventDetail/index.tsx` onNavigateToMilestoneDetail). Parity needs the cloneQuery of Q6.

## 2. Component tree
- MilestoneDetail (index.tsx) → ScreenBlock_MilestoneWrapper `$b1` (placeholders Menu_* empty, CommonUI_Elements_* =
  CommonUI_InsideLayout, S :264-366) + CommonUI_InsideLayout `$b6` (S :367-380).
- ScreenBlock_MilestoneWrapper → ScreenBlock_AccommodationHost `b1-$b5` (MW :472-598) | `<NotCaptured>` (other types, from
  a notification).
- ScreenBlock_AccommodationHost → Layout_Orbit `b1-b5-$b1` [shared] (MenuIcon__UpdatedOSUI `$b2`, MilestoneHeader `$b3`,
  Accordion_Orbit `$b4`/`$b7`/`$b11` + DEPRECATED_AccordionItem, Card_MemberInformation, NoInformation_Orbit `$b14`/`$b15`,
  Skeleton_Loading `$b16`, ContactHelpdesk_Footer `$b17`), Dialog_AccessRestrictedAction_Legacy `b1-b5-FreeSubscriptionAlert`,
  FileTransfer.HandleDownload `$b19` (no markup), ContactPopup_ByPhone `$b20` (SB :262-1760; DOM :1-1000).

## 2a. Architecture diagram
```
index.tsx ── ScreenBlock_MilestoneWrapper ── ScreenBlock_AccommodationHost ── api.ts ── callAction ── MSW mocks.ts
   │                                              │                                     (orbit.ts world)
   └── CommonUI_InsideLayout ×2                   └── shared Orbit blocks / Layout_Orbit / ContactPopup_ByPhone
```

## 3. DOM and markup contract
As DOM: classes, nesting, `data-block` wrappers and ids (`b1-b5-l5-142864_<room>-$b8`, card ids with the guest / member
list counters). Room item ExtendedClass `orbit-accordion-item` + ` margin-top-s` after the first (SB :772-776); rooms
accordion In_MultipleItems True and ` orbit-accordion-no-margin` without special needs and helpers (SB :748-760).

## 4. Visual specification
Original CSS only. Icons `fa fa-flag fa-1x` + Orbit icon classes as compiled (SB :800-850). No inline style except the
compiled `line-height: initial;` of the document icon (SB :380-385) and `cursor: pointer` of clickable containers.

## 5. Data model
AccommodationData = GetAccommodationHostResponse (types.ts; contract `Connect2_OrbitMobile_IS__GetAccommodationHostResponse`):
MilestoneDateTime, MilestoneTitle, EventDetails, SpecialNeeds (emptiness only), Helpers (Role, MemberInformation), Rooms
(RoomName, RoomInformation Floor/Type/Beds, Guests: HouseholderId, Locality, CountryCode, LocalityId, DisplayDot,
MemberInformation). Block variables IsFetchingData, IsLoadingDocument, HasDocument, ContactByPhoneData (SB model).

## 6. API calls
| # | call | phase | where |
|---|---|---|---|
| 1 | Connect2_OrbitMobile_MUI ScreenBlock_AccommodationHost/DataActionGetAccommodationHost | load | OnReady → RefreshData (SB :2355-2410, :2033) |
| 2 | …/DataActionGet_Document | load, after #1 | OnReady → RefreshDocumentData (SB :2536) |
| 3 | Connect2_LegacyShared ActionGetSignedImagesInBulk | load | Card_MemberInformation OnReady → GetCacheableSignedImageURL (bulk 15, TTL 300, timeout 10; LS :3692-3837, :2816-2890) |
Not called (not in the contract): GetGmpMilestoneHost (MW, only from a notification / missing inputs: Q3, CR-1),
GetDirectoryAccess (member click: Q1, CR-1). Mocks: fictional (orbit.ts ORBIT_HOSTED_ROOMS), captured shapes (calls.md).

## 7. State and lifecycle
Wrapper OnReady (MW :1211-1290): from cache → nothing; not from a notification with every input → nothing; otherwise
GetGmpMilestoneHost (skipped, Q3). AccommodationHost OnReady (SB :2355-2410): from cache → nothing (P-BACK, view state
restored); else IsFetchingData True, #1 (OnAfterFetch: AccommodationData), #2 (HasDocument = DocumentURL <> ""),
IsFetchingData False; a failure goes to the global handler (skeleton stays), as in EventDetail.

## 8. Render logic
Content (SB :416-1560): fetching → Skeleton_Loading(GetSkeletonLoadingIdFromMilestoneTypeId, C :4526-4590); fetched and
HasData: rooms → title + date (GetFormattedDateTimeById, "Friday, 23 Oct 2026") + Helper/s accordion (helpers) + rooms
accordion; no rooms, helpers → title + Helper/s accordion; neither → NoInformation "No guests have been allocated…";
not HasData → NoInformation "This accommodation milestone is still being organised…". Room info row when Floor, Type or
Beds is set (SB :786-795). Card: In_DisplayDot from the guest item, admin tag placeholder OrbitAdminTag (`<NotCaptured>`,
never in the mock), Guest Arrangements link when HasGuestArrangements (SB :1120-1160). Header: event / milestone name from
the data else the preloaded inputs (SB :306-330); document icon when not fetching, HasData, rooms and HasDocument
(SB :367-415). Footer when HasData (SB :1578-1600).

## 9. Interactions and navigation
- Guest photo / name → OnHandle_ClickedMember → (CheckDirectoryAccess, Q1 A) → HouseholdDetails(HouseholdId) (S :618-655)
  + OnApplicationEvent_ViewHousehold (log).
- Phone icon → ContactPopup_ByPhone (Q2 A); Call → OnApplicationEvent_CallMember (log) + close; Cancel → close.
- Guest Arrangements → GetHasOrbitAccess → GuestArrangements(In_EventId, In_EventName, In_MilestoneTitle, In_HostId,
  In_MemberId, In_MilestoneId, In_OrbitMilestoneTypeId) else the no-access message + HomeFeed (S :530-617).
- Footer → subject GetContactHelpdeskSubject_Milestone (C :2052-2132) → GetHasOrbitAccess → ContactByEmailOrbitHelpdesk(
  In_Subject, In_MilestoneId "", In_EventName = In_PreloadMilestoneName as compiled, In_EventId) (SB :2420-2450, S :656-723).
- Document icon → not ported (Q4, CR-3). Back arrow: MenuIcon Auto (shared).

## 10. Sequence diagrams
```
mount → Wrapper(no call) → AccommodationHost.OnReady → GetAccommodationHost → Get_Document → render rooms
      → Card_MemberInformation ×10 OnReady → GetCacheableSignedImageURL → one GetSignedImagesInBulk
```

## 11. Error handling and feedback
Data action errors → raiseToFlowHandler (global message). Feedback "You don't have access to Orbit…" after transition
(FeedbackMessageAfterTransition, 500 ms) on the no-access branches. HandleDownload messages not ported (CR-3).

## 12. Strings
"Accommodation Allocation", "Room: " + RoomName, "Guest/s", "Helper/s", "Guest Arrangements", "Midday Meal: ", "Evening
Meal: ", the two NoInformation messages, the no-access message (SB, S as cited).

## 13. Accessibility, platform and security notes
Web branch only (FileTransfer / InAppBrowser plugins not ported). GetDirectoryAccess is the server-side authorization of
the member click (CR-1); the mock treats access as granted (Q1). Audit events go to the log with ids only.

## 13a. Feature flags
`mobileOrbitAccess` (GetHasOrbitAccess; default-only, on) via `useFlagOn` in index.tsx. `App_PIN_BiometricEnabled`: not a
flag (shell).

## 14. Unclear points
- Q1–Q5 (decisions, recommended A, built with A); Q6 cloneQuery. Masked texts (room 2/3 titles, floors, types, beds,
  names, localities) are fictional with the captured lengths (orbit.ts).

## 15. Acceptance criteria
Default state matches with the cloneQuery (diagnostic: structure / text / call 0; remaining diffs = proposed exemptions);
calls #1-#3 in the load phase; navigations with the compiled parameter names.

## 16. Decisions to confirm
- Q1 → A (pending orchestrator answer): member click navigates to HouseholdDetails (GetDirectoryAccess missing, CR-MilestoneDetail-1).
- Q2 → A: phone popup with phone, name, photo, no timezone (CR-MilestoneDetail-2).
- Q3 → A: from a notification `<NotCaptured>`, GetGmpMilestoneHost skipped (CR-MilestoneDetail-1).
- Q4 → A: no document in the mock; document click not ported (CR-MilestoneDetail-3).
- Q5 → A: only ScreenBlock_AccommodationHost built; other types `<NotCaptured>`.
- Q6 → A: cloneQuery (see proposed-exemptions.json `_comment`).
- CR-MilestoneDetail-4: MilestoneHeader remounted (React key) once LocalOrbitMilestoneType is synced (shell timing).
- Mock world: ORBIT_HOSTED_ROOMS in `app/src/mocks/fictional/orbit.ts` (two visiting families, six rooms, both nights).
- Proposed exemptions: VIA-BACK-MENUICON-MILESTONEDETAIL, CAPTURE-MASKED-ROOM-INFO-MILESTONEDETAIL, CAPTURE-VIA-MASK-SHIFT-MILESTONEDETAIL-PIXELS.

## 17. Patterns used
P-PARAMS, P-STATES, P-DATA, P-CALLS, P-MOCKS, P-LIST, P-OSUI, P-DIALOG, P-BACK, P-FLAGS (reference: EventDetail).

## 18. Builder notes
Files: `app/src/screens/MilestoneDetail/{index.tsx,types.ts,api.ts,mocks.ts,components/{ScreenBlock_MilestoneWrapper,
ScreenBlock_AccommodationHost}.tsx,components/actions.ts}`; mock world `app/src/mocks/fictional/orbit.ts`.
