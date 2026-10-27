# Flow report: Directory_Photobook

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 1 (built: 1, Photobook; not built: none) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/pages/Photobook/…`, KB pages (`pack/kb.md`), TST compiled code (`tst_source.py show UBTConnect.Directory_Photobook.<Block>.mvc.js`) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

Path short forms in the tables: `P/` = `app/src/pages/Photobook/`, `C/` = `app/src/pages/Photobook/components/`.
"TST <Block> :n" = line n of `tst_source.py show UBTConnect.Directory_Photobook.<Block>.mvc.js`.

## 1. Summary

- Counts by verdict: match 186 · partial 5 · missing 0 · differs 3 · mock-only 6 · n/a 0 · unclear 3 (same as
  `checklist.json`, 203 rows: 195 of the reader, 8 rule rows added).
- F1 (minor): when the app restores a Photobook view from the cache, React does not refresh
  DataActionGetLocalityHouseholdIds.
  The accepted pattern P-BACK says that the original refreshes the data in the background.
- F2 (minor): the replay check of Carousel_OnSlideMoved does not test `CurrentPosition = 0` (BR-UBTCON-892).
- F3 (info): the OnParametersChanged check of Photobook_Options_Player runs only when In_IsFinalItem changes.
- Q1: the debug log of SplideEvent_Moved and its SetSplideEvent("moved") registration are not ported, and no recorded
  decision covers them.
- Status: in React a user opens the photobook at the requested household and browses it. The user plays, pauses,
  replays, changes the speed, opens the caption, zooms, uses the gallery and closes to the household. The two data
  actions answer from mocks; production needs GetPhotobookHouseholds and GetImageCaptions_Photobook of
  Connect_Household_CS.

## 2. Screens

### 2.1 Photobook

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | roles | Registered, UBTOne_User; TST checks Registered only | MEMBER_ROUTE (member, enforce): not in ROUTE_META | `match` | `app/src/app/routes.ts:40-57`; TST Photobook :623-624; §6.1 |
| 002 | In_HouseholdId (Long Integer, mandatory) | QueryString input | `osLongInput`, absent → "0" | `match` | `P/inputs.ts:17` |
| 003 | In_LocalityId (Long Integer, mandatory) | QueryString input | `osLongInput` | `match` | `P/inputs.ts:18` |

**Data**

| Id | Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 004 | IsLoading | default False; OnInitialize sets True on a new view | initial true; false after the fetch | `match` | `P/hooks/photobookState.ts:27,38` |
| 005 | SelectedHousehold | Id, Position | `{ id: In_HouseholdId, position: 0 }` | `match` | `P/hooks/photobookState.ts:27` |
| 006 | GetLocalityHouseholdIds, fetch AtStart | fetch on open; a restored view refreshes in the background (P-BACK) | fetch on a new view; no fetch when a restored view has its list | `partial` F1 | `P/hooks/usePhotobook.ts:44`; `migration/patterns/P-BACK.md` |
| 007 | GetPhotobookHouseholds (Connect_Household_CS) | server side of the data action | the client calls `Photobook/DataActionGetLocalityHouseholdIds`; a mock answers | `mock-only` | `app/src/api/household/repository.ts:55-59`; `P/mocks.ts:59-61`. Production needs the data action with GetPhotobookHouseholds. |
| 008 | Set output Out_LocalityHouseholdIds | assign on the server | the mock returns the output | `mock-only` | `P/mocks.ts:59-61` |
| 009 | Mock of the data action | - | fictional households | `mock-only` | `P/mocks.ts:59-61` |
| 010 | GetImageCaptions_Photobook (Connect_Household_CS) | server side of GetHouseholdCaption | a mock caption per household | `mock-only` | `P/mocks.ts:62-65`; `app/src/api/household/repository.ts:63-70` |
| 011 | Client.PhotobookCarousel_SelectedSpeed | read and written by Photobook_Carousel | session accessor `photobookSpeed` | `match` | `app/src/platform/session/session.ts:202`; `C/Photobook_Carousel.tsx:79,84,169` |
| 012 | Client.IsNavigateToHomeOnBack | CommonUI_InsideLayout | session accessor | `match` | `session.ts:192`; checked in the report of App_Common |
| 013 | Client.App_Policies_HasPolicyToAccept | Policy_Checker | session accessor | `match` | `session.ts:194`; checked in the report of App_Policies |
| 014 | Client.App_Policies_RedirectURL | DEV: read and written | none | `match` | TST has no read or write (§6.1) |
| 015 | Client.App_PIN_BiometricEnabled | PIN unlock blocks | session accessor | `match` | `session.ts:204`; checked in the report of App_PIN |
| 016 | Static entity Photobook_Speed | 5000, 8000 (default), 15000 ms | the same values | `match` | `app/src/lib/ubtConnect/staticEntities.ts:79`; `CR-Photobook-2.md:10-13`. The flow does not read Label or Order. |
| 017 | Structure AutoplaySettings | IsEnabled, IsTemporarilyPaused, Speed = EightSeconds | interface | `match` | `C/Photobook_Carousel.tsx:23-27` |
| 018 | Structure SelectedHousehold | Id, Position | type | `match` | `P/hooks/photobookState.ts:1` |
| 019 | Structure CarouselPreloadedHouseholds | items with Household and a default SwipeAction | items with Household only | `match` | `P/PhotobookPage.tsx:58-60`; TST Photobook :429; `app/src/pages/HouseholdCarousel/hooks/useHouseholdCarousel.ts:74` reads a missing SwipeAction as ActionId "" |

**UI tree**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 020 | LayoutRuntime_Top | no arguments | `LayoutRuntimeTop` | `match` | `P/PhotobookPage.tsx:70` |
| 021 | CommonUI_InsideLayout | no arguments | `CommonUiLayout` | `match` | `P/PhotobookPage.tsx:71`; checked in the report of App_Common |
| 022 | SkeletonSection | In_IsLoading = IsLoading | `isLoading` | `match` | `P/PhotobookPage.tsx:72` |
| 023 | If_FinishedLoading | not IsLoading and IsDataFetched | `!isLoading && households !== null` | `match` | `P/PhotobookPage.tsx:73` |
| 024 | Photobook_Carousel | In_Households, In_SelectedHousehold; ClosePhotobook → Handler_ClosePhotobook | the same | `match` | `P/PhotobookPage.tsx:74-79` |
| 025 | else: CustomContainer (loading) | CyanLightest, Base, None, CyanDarker text, flex column centred, 100vh × 100vw | `LOADING_OPTIONS` | `match` | `P/PhotobookPage.tsx:20-33,81`; TST Photobook :275-313 |

**Screen actions**

| Id | Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 026 | Handler_ClosePhotobook: has a target? | HouseholdId <> NullIdentifier() | `householdId === '0'` → back | `match` | `P/PhotobookPage.tsx:52` |
| 027 | ReplaceOnUpcomingNavigation | call | the same | `match` | `P/PhotobookPage.tsx:56` |
| 028 | GetHasCarouselEnabled | flag check; TST value True | `useFlagOn('C2EnableCarousel')` | `match` | `P/PhotobookPage.tsx:50,57`; `migration/knowledge/flag-values-tst.json:11`; both branches built |
| 029 | HouseholdIdList = ConvertList(…) | Household = HouseholdId | map to `{ Household }` | `match` | `P/PhotobookPage.tsx:58-60` |
| 030 | SetPreloadObject(ToObject(HouseholdIdList)) | call | `setPreloadObject` | `match` | `P/PhotobookPage.tsx:61` |
| 031 | flag on: HouseholdCarousel(In_StartingHouseholdId), Inherited | navigation | `navigate`, default transition | `match` | `P/PhotobookPage.tsx:62`; `app/src/platform/navigation/screenTransition.ts:40`; `migration/app-shell.spec.md:52-53` |
| 032 | flag off: HouseholdDetails(HouseholdId), Inherited | navigation | `navigate`, default transition | `match` | `P/PhotobookPage.tsx:64` |
| 033 | no target: Previous Screen, UseHistory | navigation | `navigateBack()` | `match` | `P/PhotobookPage.tsx:53` |
| 034 | OnAfterFetch: ListIndexOf(HouseholdId = In_HouseholdId) | call | `findIndex` | `match` | `P/hooks/photobookState.ts:33` |
| 035 | Position = If(index <> -1, index, 0) | assign | the same | `match` | `P/hooks/photobookState.ts:37` |
| 036 | IsLoading = False | assign | the same | `match` | `P/hooks/photobookState.ts:38` |
| 037 | OnInitialize: restored from the cache → end | JS `wasCurrentViewRestoredFromCache` | the state comes back from `useFlowState` | `match` | `P/hooks/usePhotobook.ts:40-44`; the skipped fetch is row 006 |
| 038 | OnInitialize else: Id = In_HouseholdId, IsLoading = True | assign | initial state | `match` | `P/hooks/photobookState.ts:27` |
| 039 | Failure of the data action | runtime calls `handleError` | the error goes to the flow handler | `match` | `P/hooks/usePhotobook.ts:64-67`; `migration/runtime-sources/OutSystems.js:17`; TST Photobook :179-180 |

**Validations**

| Id | Validation | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 040 | Input widgets | none on the screen | none | `match` | `P/PhotobookPage.tsx` |

**Business logic**

| Id | Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 196 | BR-UBTCON-890 | households of the locality; start at the requested household, else at 0 | `findIndex`, else 0; carousel after the fetch | `match` | `P/hooks/photobookState.ts:33,37`; `P/PhotobookPage.tsx:73` |
| 197 | BR-UBTCON-891 | close replaces the photobook in history; carousel (flag on) or details; no target goes back | the same | `match` | `P/PhotobookPage.tsx:50-64` |

**Strings**

| Id | String | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 041 | Strings of the screen | none | none | `match` | `P/PhotobookPage.tsx` |
| 042 | Strings of the blocks of other flows (17) | PIN unlock, UnsupportedVersion*, WelcomeToConnect | 14 found; 3 strings of UnsupportedVersion_Native and UnsupportedVersion_WebView are NotCaptured placeholders | `differs` | `migration/app-shell.spec.md` U16; App_Common report rows 134-135 |
| 043 | User-visible strings of the own blocks | "Speed setting", skeleton caption | the same | `match` | `C/Photobook_Options_Right.tsx:117`; `P/hooks/useHouseholdCaption.ts:13-14`. The console strings are rows 076, 089, 091, 105. |

## 3. Blocks of the flow

### 3.1 Photobook_Carousel

| Id | Area | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|
| 044 | identity | inputs and event | In_Households, In_SelectedHousehold; ClosePhotobook(Event_CurrentHousehold) | props | `match` | `C/Photobook_Carousel.tsx:46-52` |
| 045 | data | StartingPosition | local | `startingPosition` | `match` | `C/Photobook_Carousel.tsx:81` |
| 046 | data | IsZoomedIn | written by Handler_ZoomIn; no reader | not kept | `match` | TST Photobook_Carousel :699 (write), :2035 (debugger only) |
| 047 | data | MainContainerClass = "photobook-carousel" | local | constant | `match` | `C/Photobook_Carousel.tsx:18` |
| 048 | data | AutoplaySettings | local | state | `match` | `C/Photobook_Carousel.tsx:86-90` |
| 049 | data | CarouselConfigs | local | ref | `match` | `C/Photobook_Carousel.tsx:91` |
| 050 | data | CurrentPosition | local | state | `match` | `C/Photobook_Carousel.tsx:92` |
| 051 | data | CurrentHousehold | local | state | `match` | `C/Photobook_Carousel.tsx:93` |
| 052 | data | IsShow = True | local | state | `match` | `C/Photobook_Carousel.tsx:94` |
| 053 | data | TimerDuration = 5000 | local | constant | `match` | `C/Photobook_Carousel.tsx:21` |
| 054 | data | CurrentTimer | local | ref | `match` | `C/Photobook_Carousel.tsx:96` |
| 055 | data | IsReplaying | local | ref | `match` | `C/Photobook_Carousel.tsx:95` |
| 056 | ui | #Carousel_Cont | style MainContainerClass | the same | `match` | `C/Photobook_Carousel.tsx:204` |
| 057 | ui | #Carousel_Touch_Cont | "--touch"; onclick → Handler_ScreenClick | the same | `match` | `C/Photobook_Carousel.tsx:205-213` |
| 058 | ui | Carousel #Carousel_Photobook | "--carousel", Navigation None, AutoPlay, Loop False, StartingPosition | the same | `match` | `C/Photobook_Carousel.tsx:214-221` |
| 059 | ui | Initialized → OnInitialize_Carousel | event | `onInitialized` | `match` | `C/Photobook_Carousel.tsx:220`; steps in rows 074, 075 |
| 060 | ui | OnSlideMoved → Carousel_OnSlideMoved | event | `onOnSlideMoved` | `match` | `C/Photobook_Carousel.tsx:219` |
| 061 | ui | list In_Households | "list list-group …--list", disable-virtualization | `OSList` | `match` | `C/Photobook_Carousel.tsx:222-238` |
| 062 | ui | Photobook_Item | In_Household, In_MainContainerClass; MinZoomReached, ZoomIn | the same | `match` | `C/Photobook_Carousel.tsx:230-236` |
| 063 | ui | Photobook_Options_Left | In_CurrentHousehold, In_IsShow; Closed, SheetIsOpen | the same | `match` | `C/Photobook_Carousel.tsx:241-248` |
| 064 | ui | Photobook_Options_Right | In_CurrentSpeed, In_IsShow; four events | the same | `match` | `C/Photobook_Carousel.tsx:249-258` |
| 065 | ui | Photobook_Options_Player | In_IsFinalItem = (CurrentPosition + 1) = Length; Clicked, Replay | the same | `match` | `C/Photobook_Carousel.tsx:259-266` |
| 066 | ui | Photobook_Gallery | ids, In_SelectedPosition = CurrentPosition; Clicked, touch events | the same | `match` | `C/Photobook_Carousel.tsx:267-277` |
| 067 | ui | lifecycle | OnReady starts the timer; OnDestroy stops it | effect | `match` | `C/Photobook_Carousel.tsx:112-120` |
| 068 | actions | OnInitialize: unset speed → EightSeconds | If + assign | the same | `match` | `C/Photobook_Carousel.tsx:79-85` |
| 069 | actions | OnInitialize: AutoplaySettings | Speed, IsEnabled False, IsTemporarilyPaused False | the same | `match` | `C/Photobook_Carousel.tsx:86-90` |
| 070 | actions | OnInitialize: Splide configs | eleven values | the same | `match` | `C/Photobook_Carousel.tsx:30-42` |
| 071 | actions | OnInitialize: positions and CurrentHousehold | assign | the same | `match` | `C/Photobook_Carousel.tsx:81,92-93` |
| 072 | actions | OnReady: StartInactivityTimer | call | the same | `match` | `C/Photobook_Carousel.tsx:112-115` |
| 073 | actions | OnDestroy: StopInactivityTimer(False) | clear timer | cleanup clears the timer | `match` | `C/Photobook_Carousel.tsx:116-119` |
| 074 | actions | OnInitialize_Carousel: SetSplideEvent("moved", SplideEvent_Moved) | call | none | `unclear` Q1 | TST Photobook_Carousel :1041 |
| 075 | actions | OnInitialize_Carousel: SetCarouselConfigs | call | `setCarouselConfigs` | `match` | `C/Photobook_Carousel.tsx:123-125,220` |
| 076 | actions | SplideEvent_Moved: JSUtils_Console_Log | console log | none | `unclear` Q1 | TST Photobook_Carousel :1422 |
| 077 | actions | Carousel_OnSlideMoved: position and household | assign | the same | `match` | `C/Photobook_Carousel.tsx:143-144` |
| 078 | actions | Carousel_SetCurrentPosition call | call | the same | `match` | `C/Photobook_Carousel.tsx:145` |
| 079 | actions | replay check | IsReplaying and CurrentPosition = 0 | IsReplaying only | `partial` F2 | `C/Photobook_Carousel.tsx:146-148`; TST Photobook_Carousel :1227 |
| 080 | actions | last position and autoplay → ToggleAutoplay(False) | If | the same | `match` | `C/Photobook_Carousel.tsx:149-151` |
| 081 | actions | Carousel_SetCurrentPosition (shared) | sets StartingPosition; logs errors | the same | `match` | `app/src/lib/ubtConnect/actions.ts:538-545`; `CR-Photobook-1.md:34-35` |
| 082 | actions | CheckForAutoplayRestart | If not IsEnabled and IsTemporarilyPaused | the same | `match` | `C/Photobook_Carousel.tsx:136-139` |
| 083 | actions | Handler_ChangeSpeed: StartInactivityTimer | call | the same | `match` | `C/Photobook_Carousel.tsx:167` |
| 084 | actions | Handler_ChangeSpeed: different speed? | interval <> SelectedSpeed | the same | `match` | `C/Photobook_Carousel.tsx:168-174` |
| 085 | actions | SetNewSpeed | client variable, Speed, interval, configs | the same | `match` | `C/Photobook_Carousel.tsx:169-173` |
| 086 | actions | Handler_ClickedGalleryItem | StopInactivityTimer(True); CarouselGoTo | the same | `match` | `C/Photobook_Carousel.tsx:189-192` |
| 087 | actions | Handler_ClosePhotobook | StopInactivityTimer(False); event | the same | `match` | `C/Photobook_Carousel.tsx:177-180` |
| 088 | actions | Handler_MinZoomReached: CarouselToggleDrag(True) | call | the same | `match` | `C/Photobook_Carousel.tsx:198-200` |
| 089 | actions | Handler_MinZoomReached: failure log | JSUtils_Console_Log | none | `differs` | `CR-Photobook-1.md:34-36` (failure logs not ported); TST Photobook_Carousel :1182 |
| 090 | actions | Handler_ZoomIn: CarouselToggleDrag(False) | assign + call | call | `match` | `C/Photobook_Carousel.tsx:195-197`; IsZoomedIn: row 046 |
| 091 | actions | Handler_ZoomIn: failure log | JSUtils_Console_Log | none | `differs` | `CR-Photobook-1.md:34-36`; TST Photobook_Carousel :710 |
| 092 | actions | Handler_PlayerClicked | ToggleAutoplay(Event_IsPlay) | `toggleAutoplay` | `match` | `C/Photobook_Carousel.tsx:264` |
| 093 | actions | Handler_ReplayCarousel | StopInactivityTimer(True); IsReplaying; CarouselGoTo(0) | the same | `match` | `C/Photobook_Carousel.tsx:182-186` |
| 094 | actions | Handler_ScreenClick | StopInactivityTimer(True) | the same | `match` | `C/Photobook_Carousel.tsx:210-212` |
| 095 | actions | Handler_SheetIsClosed | StartInactivityTimer; CheckForAutoplayRestart | the same | `match` | `C/Photobook_Carousel.tsx:161-164` |
| 096 | actions | Handler_SheetIsOpen | stop timer; pause autoplay | the same | `match` | `C/Photobook_Carousel.tsx:155-159` |
| 097 | actions | SetCarouselConfigs | SetSplideConfigs | the same | `match` | `C/Photobook_Carousel.tsx:123-125` |
| 098 | actions | SetShowOptions | IsShow = IsToShow | the same | `match` | `C/Photobook_Carousel.tsx:102,108` |
| 099 | actions | StartInactivityTimer | setTimeout 5000 ms | the same; a running timer is not cleared, as on TST | `match` | `C/Photobook_Carousel.tsx:100-104` |
| 100 | actions | StopInactivityTimer(StartNew) | clear; show; restart when StartNew | the same | `match` | `C/Photobook_Carousel.tsx:105-110` |
| 101 | actions | ToggleAutoplay: settings and configs | assign + call | the same | `match` | `C/Photobook_Carousel.tsx:129-132` |
| 102 | actions | ToggleAutoplay: drag | IsEnabled → drag off, else on | `!isPlay` | `match` | `C/Photobook_Carousel.tsx:132` |
| 103 | actions | ToggleAutoplay: failure branches | none | none | `match` | pack/blocks.md ToggleAutoplay |
| 104 | validations | input widgets | none | none | `match` | `C/Photobook_Carousel.tsx` |
| 105 | strings | console strings | "Carousel Toggle Drag Error - Code:", "\| Message:", "\| Previous:", "\| Destination:" | none | `unclear` Q1 | toggle-drag strings: rows 089, 091; move-log strings: Q1 |
| 198 | logic | BR-UBTCON-892 | autoplay stops at the last household; replay ends at position 0 | replay ends on the next move event | `partial` F2 | `C/Photobook_Carousel.tsx:146-151` |
| 199 | logic | BR-UBTCON-893 | 5, 8 or 15 s; default 8; client variable | the same | `match` | `C/Photobook_Carousel.tsx:79-85,168-174`; `C/Photobook_Options_Right.tsx:68,134-136` |
| 200 | logic | BR-UBTCON-894 | controls hide after 5000 ms | the same | `match` | `C/Photobook_Carousel.tsx:21,100-110` |

### 3.2 Photobook_Gallery

| Id | Area | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|
| 106 | identity | inputs and events | ids, In_SelectedPosition, In_IsShow; Clicked, ListTouchEnd, ListTouchStart | props | `match` | `C/Photobook_Gallery.tsx:138-147` |
| 107 | data | SelectedPosition | local | state | `match` | `C/Photobook_Gallery.tsx:167` |
| 108 | data | MainContainerClass = "photobook-gallery" | local | constant | `match` | `C/Photobook_Gallery.tsx:23` |
| 109 | ui | #Household_Gallery_Cont | margin, flex column, Visibility from In_IsShow | the same | `match` | `C/Photobook_Gallery.tsx:198-210`; TST Photobook_Gallery :192 |
| 110 | ui | Photobook_Options_Bottom | position, IsShow, class, total | the same | `match` | `C/Photobook_Gallery.tsx:211-217` |
| 111 | ui | #Photobook_Gallery_List | disable-virtualization; componentdidmount → instant scroll | the same | `match` | `C/Photobook_Gallery.tsx:187-189,218-224` |
| 112 | ui | Photobook_Gallery_Item | In_IsActive = SelectedPosition = CurrentRowNumber | `selectedPosition === index` | `match` | TST Photobook_Gallery :279; `OutSystems.js:29`: the row number is the 0-based index |
| 113 | ui | TouchEvents | PreventDefaults False; Start, End | the same | `match` | `C/Photobook_Gallery.tsx:239-245` |
| 114 | actions | OnInitialize | SelectedPosition = In_SelectedPosition | initial state | `match` | `C/Photobook_Gallery.tsx:167` |
| 115 | actions | OnParametersChanged | CheckIfScrollIsNeeded(not In_IsShow, In_SelectedPosition) | runs when the two inputs change | `match` | `C/Photobook_Gallery.tsx:180-184` |
| 116 | actions | CheckIfScrollIsNeeded: ForceScroll | set and scroll | the same | `match` | `C/Photobook_Gallery.tsx:173-176` |
| 117 | actions | CheckIfScrollIsNeeded: already selected | end | the same | `match` | `C/Photobook_Gallery.tsx:173` |
| 118 | actions | CheckIfScrollIsNeeded: else | set and smooth scroll | the same | `match` | `C/Photobook_Gallery.tsx:174-175` |
| 119 | actions | Handler_ClickedHousehold | check, then Clicked({ Id, SelectedPosition }) | sends the target position | `match` | `C/Photobook_Gallery.tsx:191-194`; SelectedPosition = TargetPosition after every branch |
| 120 | actions | ScrollSelectedIntoPosition | JS scroll, instant or smooth | the same | `match` | `C/Photobook_Gallery.tsx:27-41` |
| 121 | validations | input widgets | none | none | `match` | `C/Photobook_Gallery.tsx` |
| 122 | strings | strings | none | none | `match` | `C/Photobook_Gallery.tsx` |

### 3.3 Photobook_Gallery_Item

| Id | Area | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|
| 123 | identity | inputs and event | In_HouseholdId, In_IsActive, In_TargetSubClass; Clicked | local component | `match` | `C/Photobook_Gallery.tsx:96-108` |
| 124 | ui | #Household_Gallery_Item | border Neutral0 / Small when active; Radius Soft | the same | `match` | `C/Photobook_Gallery.tsx:112-125`; TST Photobook_Gallery_Item :176-186 |
| 125 | ui | UBT_LazyImage | Household, Small_40, Soft | `EntityLazyImage` | `match` | `C/Photobook_Gallery.tsx:126-132` |
| 126 | actions | Clicked(Event_HouseholdId) | event | the same | `match` | `C/Photobook_Gallery.tsx:122-124` |
| 127 | validations | input widgets | none | none | `match` | `C/Photobook_Gallery.tsx` |

### 3.4 Photobook_Item

| Id | Area | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|
| 128 | identity | inputs and events | In_Household, In_MainContainerClass; MinZoomReached, ZoomIn | props | `match` | `C/Photobook_Item.tsx:20-29` |
| 129 | data | IsZoomedIn | hides Title_Cont while zoomed | the same | `match` | `C/Photobook_Item.tsx:49,95`; TST Photobook_Item :343 |
| 130 | ui | #CarouselItem | "-item", flex centre | the same | `match` | `C/Photobook_Item.tsx:60-64` |
| 131 | ui | #DIV_BackgroundImage, UBT_LazyImage | MaxWidth_100vw, "-background-image" | the same | `match` | `C/Photobook_Item.tsx:65-73` |
| 132 | ui | #DIV_ForegroundImage, PanZoom | ZoomIn, MinZoomReached; MaxHeight_100vh image | vendored PanZoom | `match` | `C/Photobook_Item.tsx:74-89`; ADR-7 (`app/docs/reference/stack.md:118,165`) |
| 133 | ui | #Title_Cont, #Title_Background | Visibility Hidden while IsZoomedIn; Neutral9 0.25 | the same | `match` | `C/Photobook_Item.tsx:90-106`; TST Photobook_Item :343 |
| 134 | ui | #Title_FamilyName | HouseholdName, Neutral0, Heading6, SemiBold | the same | `match` | `C/Photobook_Item.tsx:108-116` |
| 135 | ui | #Title_Locality | Locality, Neutral0, Small | the same | `match` | `C/Photobook_Item.tsx:117-121` |
| 136 | actions | Handler_MinZoomReached | IsZoomedIn = False; event | the same | `match` | `C/Photobook_Item.tsx:54-57` |
| 137 | actions | Handler_ZoomIn | IsZoomedIn = True; event | the same | `match` | `C/Photobook_Item.tsx:50-53` |
| 138 | validations | input widgets | none | none | `match` | `C/Photobook_Item.tsx` |

### 3.5 Photobook_Options_Bottom

| Id | Area | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|
| 139 | identity | inputs | four mandatory inputs | local component | `match` | `C/Photobook_Gallery.tsx:45-57` |
| 140 | ui | If_HasData | In_TotalHouseholds <> NullIdentifier() | `!== 0` | `match` | `C/Photobook_Gallery.tsx:61` |
| 141 | ui | If_HasData false | nothing | nothing | `match` | `C/Photobook_Gallery.tsx:61` |
| 142 | ui | #Photobook_Options_Bottom | "--counter", Neutral9 0.6, Visibility from In_IsShow | the same | `match` | `C/Photobook_Gallery.tsx:62-75`; TST Photobook_Options_Bottom :216 |
| 143 | ui | IconText | (position + 1) + "/" + total; Family icon | the same | `match` | `C/Photobook_Gallery.tsx:76-87` |
| 144 | validations | input widgets | none | none | `match` | `C/Photobook_Gallery.tsx` |
| 203 | logic | BR-UBTCON-897 | counter only when the total is not 0 | the same | `match` | `C/Photobook_Gallery.tsx:61` |

### 3.6 Photobook_Options_Left

| Id | Area | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|
| 145 | identity | inputs and events | In_MainContainerClass, In_IsShow, In_CurrentHousehold; Closed, SheetIsOpen | props | `match` | `C/Photobook_Options_Left.tsx:31-40` |
| 146 | data | InfoSheetId, isLoading, LastFetched | locals | state | `match` | `P/hooks/useHouseholdCaption.ts:54-56` |
| 147 | data | GetHouseholdCaption, OnDemand | refresh from Handler_ClickedInfo | the same | `match` | `P/hooks/useHouseholdCaption.ts:78-85` |
| 148 | data | GetImageCaptions_Photobook | server side of the data action | mock | `mock-only` | `app/src/api/household/repository.ts:63-70`. Production needs GetImageCaptions_Photobook (Connect_Household_CS). |
| 149 | data | Mock of the data action | - | fictional caption per household | `mock-only` | `P/mocks.ts:62-65`; Photobook Q3 (`migration/knowledge/auto-decisions-2026-10-15.md:63`) |
| 150 | ui | #Photobook_Options_Top_Left | "--top-left", round button, Visibility from In_IsShow; Clicked | the same | `match` | `C/Photobook_Options_Left.tsx:68-73`; TST Photobook_Options_Left :234 |
| 151 | ui | Icon Info | Neutral0, Base_24 | the same | `match` | `C/Photobook_Options_Left.tsx:74-79` |
| 152 | ui | If_IsShow | In_IsShow | the same | `match` | `C/Photobook_Options_Left.tsx:81` |
| 153 | ui | BottomSheet #BottomSheet_Info | title = Locality; three events | the same | `match` | `C/Photobook_Options_Left.tsx:82-88` |
| 154 | ui | SkeletonSection, SanitizedHtml | "nobr,sup", ResetWhitelist False | the same | `match` | `C/Photobook_Options_Left.tsx:90-103` |
| 155 | actions | OnInitialize: restored → end | JS + If | no skeleton caption when restored | `match` | `P/hooks/useHouseholdCaption.ts:53,57` |
| 156 | actions | OnInitialize else: skeleton caption | call + assign | the same text | `match` | `P/hooks/useHouseholdCaption.ts:13-14,57` |
| 157 | actions | Handler_ClickedInfo: ToggleInfoSheet(True) | call | the same | `match` | `P/hooks/useHouseholdCaption.ts:75` |
| 158 | actions | Handler_ClickedInfo: already fetched? | LastFetched = In_CurrentHousehold | compares id, name, locality | `match` | `P/hooks/useHouseholdCaption.ts:76`; the record has only these three values set |
| 159 | actions | Handler_ClickedInfo else | isLoading = True; refresh | the same | `match` | `P/hooks/useHouseholdCaption.ts:77-85` |
| 160 | actions | OnAfterFetch_GetHouseholdCaption | isLoading False; LastFetched | the same | `match` | `P/hooks/useHouseholdCaption.ts:86-91` |
| 161 | actions | Failure of the data action | `handleError`; OnAfterFetch does not run | flow handler; isLoading stays true | `match` | `P/hooks/useHouseholdCaption.ts:92-94`; `OutSystems.js:17` |
| 162 | actions | Handler_ToggleInfoSheet | SheetIsOpen or Closed | the same | `match` | `C/Photobook_Options_Left.tsx:61-64` |
| 163 | actions | InfoSheetInitialized | InfoSheetId = Id | the same | `match` | `P/hooks/useHouseholdCaption.ts:101` |
| 164 | actions | ToggleInfoSheet | BottomSheetOpen or BottomSheetClose | the same | `match` | `P/hooks/useHouseholdCaption.ts:69-72` |
| 165 | actions | OnClose → ToggleInfoSheet(False) | event | the same | `match` | `P/hooks/useHouseholdCaption.ts:103-105` |
| 166 | validations | input widgets | none | none | `match` | `C/Photobook_Options_Left.tsx` |
| 167 | strings | skeleton caption | "SURNAME (Name - Local) …" | the same text | `match` | `P/hooks/useHouseholdCaption.ts:13-14` |
| 201 | logic | BR-UBTCON-895 | caption fetched only for a household not fetched yet | the same | `match` | `P/hooks/useHouseholdCaption.ts:57,75-85` |

### 3.7 Photobook_Options_Player

| Id | Area | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|
| 168 | identity | inputs and events | In_MainContainerClass, In_IsShow, In_IsFinalItem; Clicked, Replay | props | `match` | `C/Photobook_Options_Player.tsx:9-18` |
| 169 | data | IsPlay | local | state | `match` | `C/Photobook_Options_Player.tsx:33` |
| 170 | ui | #Photobook_Options_Player | "--player"; Visibility from In_IsShow | the same | `match` | `C/Photobook_Options_Player.tsx:59-63` |
| 171 | ui | If_IsFinalItem → Replay icon | NonStandard_64; Handler_ClickReplay | the same | `match` | `C/Photobook_Options_Player.tsx:64-65` |
| 172 | ui | If_IsPlay → Pause icon | Handler_TogglePlay(False) | the same | `match` | `C/Photobook_Options_Player.tsx:66-69` |
| 173 | ui | else → Play icon | Handler_TogglePlay(True) | the same | `match` | `C/Photobook_Options_Player.tsx:70-72` |
| 174 | actions | Handler_ClickReplay | IsPlay = True; Replay | the same | `match` | `C/Photobook_Options_Player.tsx:44-47` |
| 175 | actions | Handler_TogglePlay | IsPlay = IsPlayState; Clicked | the same | `match` | `C/Photobook_Options_Player.tsx:40-43` |
| 176 | actions | OnParametersChanged | on every input change: final and playing → IsPlay = False | only when In_IsFinalItem changes | `partial` F3 | `C/Photobook_Options_Player.tsx:36-39`; TST Photobook_Options_Player :348-364 |
| 177 | validations | input widgets | none | none | `match` | `C/Photobook_Options_Player.tsx` |
| 202 | logic | BR-UBTCON-896 | last household: replay icon; final and playing: IsPlay = False | the reset runs only on a change of In_IsFinalItem | `partial` F3 | `C/Photobook_Options_Player.tsx:36-39,64-65` |

### 3.8 Photobook_Options_Right

| Id | Area | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|
| 178 | identity | inputs and events | In_MainContainerClass, In_IsShow, In_CurrentSpeed; four events | props | `match` | `C/Photobook_Options_Right.tsx:21-31` |
| 179 | data | SpeedSheetId, SelectedSpeed | locals | state | `match` | `C/Photobook_Options_Right.tsx:51-56` |
| 180 | ui | #Photobook_Options_Top_Right | flex row end; Visibility from In_IsShow | the same | `match` | `C/Photobook_Options_Right.tsx:73-85`; TST Photobook_Options_Right :187 |
| 181 | ui | #Photobook_Options_Top_Speed | Clicked → ToggleSpeedSheet(True); Clock icon | the same | `match` | `C/Photobook_Options_Right.tsx:86-99` |
| 182 | ui | #Photobook_Options_Top_Close | margin left Base; Clicked → ClosePhotobook | the same | `match` | `C/Photobook_Options_Right.tsx:100-111` |
| 183 | ui | If_IsShow | In_IsShow | the same | `match` | `C/Photobook_Options_Right.tsx:113` |
| 184 | ui | BottomSheet #BottomSheet_Speed | CloseOnClickOutsite False, ShowHandlerPreview False, title | the same | `match` | `C/Photobook_Options_Right.tsx:114-124` |
| 185 | ui | radio buttons | 5s, 8s, 15s | the same | `match` | `C/Photobook_Options_Right.tsx:134-136` |
| 186 | actions | OnInitialize | SelectedSpeed = In_CurrentSpeed | the same | `match` | `C/Photobook_Options_Right.tsx:54` |
| 187 | actions | OnParametersChanged | SelectedSpeed = In_CurrentSpeed on every input change | reset on a change of any of the three inputs | `match` | `C/Photobook_Options_Right.tsx:53-56` |
| 188 | actions | Handler_SpeedInitialized | SpeedSheetId = Id | the same | `match` | `C/Photobook_Options_Right.tsx:121` |
| 189 | actions | Handler_ToggleSpeedSheet: open | SheetIsOpen | the same | `match` | `C/Photobook_Options_Right.tsx:67` |
| 190 | actions | Handler_ToggleSpeedSheet: new speed | SetSpeed(SelectedSpeed) | the same | `match` | `C/Photobook_Options_Right.tsx:68` |
| 191 | actions | Handler_ToggleSpeedSheet: else | Closed | the same | `match` | `C/Photobook_Options_Right.tsx:69` |
| 192 | actions | ToggleSpeedSheet | BottomSheetOpen or BottomSheetClose | the same | `match` | `C/Photobook_Options_Right.tsx:62-65` |
| 193 | actions | OnClose → ToggleSpeedSheet(False) | event | the same | `match` | `C/Photobook_Options_Right.tsx:122-124` |
| 194 | validations | RadioGroup_SpeedOptions Mandatory=True | read only by form validation (`isMandatory`) | no mandatory prop | `match` | `OutSystemsReactWidgets.js:1`; `CR-Photobook-2.md`. The block has no Form and no validating button; the group always holds the current speed (KB Validation). |
| 195 | strings | "Speed setting", "5s", "8s", "15s" | literals | the same | `match` | `C/Photobook_Options_Right.tsx:117,134-136` |

Blocks of other flows (signature in `pack/blocks.md`):

- CommonUI_InsideLayout, OfflineDataSyncEvents, UnsupportedVersion, UnsupportedVersion_Browser,
  UnsupportedVersion_Native, UnsupportedVersion_WebView, UnsupportedVersion_Wrapper, WelcomeToConnect: pack of
  App_Common. Use here: row 021 `match`; strings row 042 `differs` (U16).
- Block_PINUnlock, Block_PINUnlock_ContentWrapper: pack of App_PIN. Use here: through CommonUI_InsideLayout; strings
  row 042.
- Policy_Checker: pack of App_Policies. Use here: rows 013, 014 `match`.
- HandleOnResumeOpenLink: pack of Legacy_Share. Use here: through CommonUI_InsideLayout; not checked here (shared).

## 4. Shared blocks and actions

- NavigationHandler: ReplaceOnUpcomingNavigation (row 027), SetPreloadObject (row 030), LayoutRuntime_Top (row 020):
  `match` for the calls. The internals are not checked here (shared).
- UBTConnect_Utils: GetHasCarouselEnabled (row 028, `match`); UBT_LazyImage (rows 125, 131, 132): the rows check the
  arguments. The reports of App_Menu and App_Profile also check only the arguments.
- UBTConnect: Carousel_SetCurrentPosition (row 081, `match`, CR-Photobook-1).
- OutSystems UI Carousel: CarouselGoTo, CarouselToggleDrag, SetSplideConfigs (`app/src/lib/ubtConnect/actions.ts`,
  CR-Photobook-1) `match`; SetSplideEvent: row 074, Q1.
- PanZoom: the vendored TST script (ADR-7). ReactiveHtmlSanitizer SanitizedHtml, TouchEvents, BottomSheet, SkeletonSection,
  CustomContainer, CustomText, Icon, IconText: the rows check the arguments; the internals are not checked here.
- JSUtils_Console_Log: rows 089, 091 (`differs`, CR-Photobook-1); rows 076, 105 (Q1).
- Not checked here (shared, in `../_shared/pack/actions.md`): ExitApplicationForWebViewUpdate, GetURLFromEventDataURL,
  Get_IsUnsupportedSystem, Get_IsUnsupportedVersion, OfflineDataSync, OfflineDataSyncConfiguration,
  OpenGooglePlay_Chrome, OpenGooglePlay_UBTConnect, OpenGooglePlay_WebView, SetResumeLoginLink,
  Try_GetIsSupportedVersion, Upgrade_UBTConnect, Upgrade_WebView.
- Rules of shared elements: the reports of App_Common (BR-UBTCON-310 to 313), App_Policies (940) and App_PIN (948 to
  952) check them. The rules of the shared actions above are not checked here.

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| F1 | minor | Photobook / GetLocalityHouseholdIds (row 006) | A view that is restored from the cache does not call DataActionGetLocalityHouseholdIds. P-BACK says that the original refreshes the data in the background. On TST, OnAfterFetch then sets SelectedHousehold.Position and IsLoading again. | `app/src/pages/Photobook/hooks/usePhotobook.ts:44` | On a restored view, call `fetchAtStart()` without the loading state, as P-BACK says. |
| F2 | minor | Photobook_Carousel / Carousel_OnSlideMoved (rows 079, 198) | The replay check tests only IsReplaying. TST also tests CurrentPosition = 0. When a move event comes at another position during the rewind (a swipe during the 500 ms move), React ends the replay and starts autoplay there. TST keeps IsReplaying and runs the last-position branch. | `app/src/pages/Photobook/components/Photobook_Carousel.tsx:146-148` | Use `isReplayingRef.current && itemIndex === 0`. |
| F3 | info | Photobook_Options_Player / OnParametersChanged (rows 176, 202) | React runs the check only when In_IsFinalItem changes. TST runs it on every input change, also In_IsShow. The state "IsPlay True on the final item without a change of In_IsFinalItem" occurs after Replay on a one-household photobook. The replay icon shows in both cases, so the user sees no difference. | `app/src/pages/Photobook/components/Photobook_Options_Player.tsx:36-39` | Run the check on a change of any input. |

## 6. DEV vs TST differences

### 6.1 DEV (model) vs TST (compiled code)

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| Photobook roles (row 001) | Registered, UBTOne_User | `checkPermissions` calls `OS.RolesInfo.checkRegistered()` only | TST: MEMBER_ROUTE | TST Photobook :623-624 |
| Client.App_Policies_RedirectURL (row 014) | read and written by the flow (pack/data.md) | no read or write in Policy_Checker, AcceptPendingPolicies, Policy_Custom_AcceptPendingPolicies; only the debugger getter table | TST: no such variable | `UBTConnect.controller.js:22591` (`tst_source.py show`) |

Not differences: the names GetPhotobookHouseholds and GetImageCaptions_Photobook are absent from the client files.
The data actions run on the server; the client calls `DataActionGetLocalityHouseholdIds` and
`DataActionGetHouseholdCaption`. TST confirms the pack arguments that the dump cuts at 300 characters (rows 025, 109,
124, 129, 133, 142, 150, 180).

### 6.2 KB pages vs TST

| Id | KB text | DEV and TST evidence | KB file |
|---|---|---|---|
| K1 | "autoplay stops at the last slide; replay; pause on zoom / sheets" | Zoom does not pause autoplay. Handler_ZoomIn sets IsZoomedIn and calls CarouselToggleDrag(False); only Handler_SheetIsOpen pauses (pack/blocks.md; TST Photobook_Carousel :699) | `ubtconnect/modules/UBTConnect/ui/photobook.md`, Conditions and decisions |
| K2 | "`Photobook_Item` tracks `IsZoomedIn` to pause/resume drag" | Photobook_Item reads IsZoomedIn only for the Title_Cont visibility (TST Photobook_Item :343). Photobook_Carousel toggles the drag on the ZoomIn and MinZoomReached events | `ubtconnect/modules/UBTConnect/ui/photobook.md`, Plumbing |

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | Photobook_Carousel registers SplideEvent_Moved on the Splide "moved" event (TST Photobook_Carousel :1041). The handler only writes "New/Current: … \| Previous: … \| Destination: …" to the console (:1422). React has neither. Do you accept that both stay out? | Rows 074, 076 and 105 need a recorded decision. CR-Photobook-1 (:34-36) covers only the toggle-drag failure logs. The NO-CONSOLE rule (`migration/stack.json` rules.forbidden, `migration/architecture.md:117`) is a lint rule for the code, not a decision on the original's debug output. | A: accept; record it (the rows become `differs`). B: port the registration and write the line through the platform logger. | A: the log has no user effect, and the CR already applies the same choice to the failure logs. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 11 | 11 | 0 | 0 | 0 | 0 | 0 | 0 |
| data | 36 | 29 | 1 | 0 | 0 | 6 | 0 | 0 |
| ui | 50 | 50 | 0 | 0 | 0 | 0 | 0 | 0 |
| actions | 82 | 76 | 2 | 0 | 2 | 0 | 0 | 2 |
| validations | 9 | 9 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 8 | 6 | 2 | 0 | 0 | 0 | 0 | 0 |
| strings | 7 | 5 | 0 | 0 | 1 | 0 | 0 | 1 |
| **total** | 203 | 186 | 5 | 0 | 3 | 6 | 0 | 3 |
