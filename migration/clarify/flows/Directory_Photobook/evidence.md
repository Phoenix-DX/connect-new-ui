# Evidence: Directory_Photobook

Reader pass (stage 1). No verdicts. DEV pack of 2026-10-27; TST checked by name in the compiled files (`tst_source.py show`).

Row counts: Photobook 43, Photobook_Carousel 62, Photobook_Gallery 17, Photobook_Gallery_Item 5, Photobook_Item 11, Photobook_Options_Bottom 6, Photobook_Options_Left 23, Photobook_Options_Player 10, Photobook_Options_Right 18; total 195.

## Photobook

### Photobook / identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-001 | identity | Screen Photobook | roles Registered, UBTOne_User; URL structure QueryString; OnInitialize lifecycle | app/src/pages/Photobook/inputs.ts:1-3 route inputs; app.md: route /UBTConnect/Photobook, meta MEMBER_ROUTE (member, enforce) | present | role list not shown in React files read |
| Directory_Photobook-002 | identity | Input In_HouseholdId (Long Integer, mandatory) | input parameter, mandatory | app/src/pages/Photobook/inputs.ts:17 `In_HouseholdId: osLongInput(params.get('In_HouseholdId'))` (absent or empty -> "0") | present (setInputs LongInteger) |  |
| Directory_Photobook-003 | identity | Input In_LocalityId (Long Integer, mandatory) | input parameter, mandatory | app/src/pages/Photobook/inputs.ts:18 `In_LocalityId: osLongInput(params.get('In_LocalityId'))` | present (setInputs LongInteger) |  |

### Photobook / data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-004 | data | Local variable IsLoading (Boolean) | local variable, default False in TST model | app/src/pages/Photobook/hooks/photobookState.ts:27 `isLoading: true` (initial); :38 `isLoading: false` | present (isLoadingVar default false) | OnInitialize sets True on a new visit |
| Directory_Photobook-005 | data | Local variable SelectedHousehold (Id, Position) | local variable record | app/src/pages/Photobook/hooks/photobookState.ts:27 `selectedHousehold: { id: inputs.In_HouseholdId, position: 0 }` | present (selectedHouseholdVar) |  |
| Directory_Photobook-006 | data | Data action GetLocalityHouseholdIds, fetch AtStart | data action fetch=AtStart; output Out_LocalityHouseholdIds: UI_PhotobookHousehold List | app/src/pages/Photobook/hooks/usePhotobook.ts:40-46 `onReady: ... if (restored && latest.current.households !== null) return Promise.resolve(); return fetchAtStart();` | present | React skips the call when a restored view has its list |
| Directory_Photobook-007 | data | Server action GetPhotobookHouseholds (ref-service, Connect_Household_CS) | call-server GetPhotobookHouseholds(In_LocalityId=In_LocalityId) | app/src/pages/Photobook/hooks/usePhotobook.ts:58-62 `fetchLocalityHouseholdIds({ inHouseholdId: In_HouseholdId, inLocalityId: In_LocalityId, ...})`; app/src/api/household/repository.ts:55-59 `callAction('UBTConnect', 'Photobook/DataActionGetLocalityHouseholdIds', ...)` | absent (name GetPhotobookHouseholds not in Photobook.mvc.js; Out_LocalityHouseholdIds present) | React calls the data action by name, not the service action; pack word match: 0 hits |
| Directory_Photobook-008 | data | Assign Set output: Out_LocalityHouseholdIds = GetPhotobookHouseholds.Out_Households | assign list | app/src/pages/Photobook/hooks/photobookState.ts:36 `households: action.households` | - |  |
| Directory_Photobook-009 | data | Mock handler of GetPhotobookHouseholds | pack app.md: no mock handler found by action name | app/src/pages/Photobook/mocks.ts:59-61 `contractHandler('UBTConnect', 'Photobook/DataActionGetLocalityHouseholdIds', () => ({ Out_LocalityHouseholdIds: wireList(MOCK_HOUSEHOLDS) }))` | - | mock handler exists under the data action name; 23 fictional households; production needs service action GetPhotobookHouseholds (Connect_Household_CS) |
| Directory_Photobook-010 | data | Server action GetImageCaptions_Photobook (ref-service, Connect_Household_CS) | called by data action GetHouseholdCaption of Photobook_Options_Left; In_HouseholdId -> PhotobookCaption | app/src/pages/Photobook/mocks.ts:62-65 `contractHandler('UBTConnect', 'Photobook_Options_Left/DataActionGetHouseholdCaption', ...)`; app/src/api/household/repository.ts:63-70 | absent (name not in Photobook_Options_Left.mvc.js; GetHouseholdCaption present) | mock builds caption from the cast; mock comment says Q3 recommendation A pending |
| Directory_Photobook-011 | data | Client variable PhotobookCarousel_SelectedSpeed (read, write) | Photobook_Speed Identifier; read and written by Photobook_Carousel | app/src/platform/session/session.ts:202 `photobookSpeed: accessorOf('UBTConnect.PhotobookCarousel_SelectedSpeed')`; app/src/pages/Photobook/components/Photobook_Carousel.tsx:79,84,169 get/set | present |  |
| Directory_Photobook-012 | data | Client variable IsNavigateToHomeOnBack (read, write) | shared client variable | app/src/platform/session/session.ts:192 `isNavigateToHomeOnBack: accessorOf('UBTConnect.IsNavigateToHomeOnBack')`; no use in pages/Photobook | - | read and written by shared blocks, not by Photobook files |
| Directory_Photobook-013 | data | Client variable App_Policies_HasPolicyToAccept (read) | shared (Policy_Checker) | app/src/platform/session/session.ts:194 `hasPolicyToAccept: accessorOf('UBTConnect.App_Policies_HasPolicyToAccept')` | - | shared, checked in report of App_Policies |
| Directory_Photobook-014 | data | Client variable App_Policies_RedirectURL (read, write) | shared (Policy_Checker) | not found (searched: App_Policies_RedirectURL in session.ts, clientVarNames.ts) | - | shared block; not located by the exact name |
| Directory_Photobook-015 | data | Client variable App_PIN_BiometricEnabled (read) | shared (PIN unlock blocks) | app/src/platform/session/session.ts:204 `biometricEnabled: accessorOf('UBTConnect.App_PIN_BiometricEnabled')` | - | shared, checked in report of App_PIN |
| Directory_Photobook-016 | data | Static entity Photobook_Speed (Id, Label, Order) | IStaticEntity: FiveSeconds, EightSeconds (default), FifteenSeconds | app/src/lib/ubtConnect/staticEntities.ts:79 `Photobook_Speed = { FiveSeconds: 5000, EightSeconds: 8000, FifteenSeconds: 15000 }` | - | values come from DEV MCP per the code comment (:76-78), not cross-checked on TST; Label and Order not present |
| Directory_Photobook-017 | data | Structure AutoplaySettings (IsEnabled, IsTemporarilyPaused, Speed=EightSeconds) | structure | app/src/pages/Photobook/components/Photobook_Carousel.tsx:23-27 `interface AutoplaySettings { speed; isEnabled; isTemporarilyPaused }` | present (AutoplaySettingsRec) |  |
| Directory_Photobook-018 | data | Structure SelectedHousehold (Id, Position) | structure | app/src/api/household (type SelectedHousehold, used in photobookState.ts:1) | present |  |
| Directory_Photobook-019 | data | Structure CarouselPreloadedHouseholds (CarouselHouseholdItem: Household, SwipeAction list) | structure | app/src/pages/Photobook/PhotobookPage.tsx:58-60 `CarouselHouseholdItem: (households ?? []).map((h) => ({ Household: h.householdId }))` | present (CarouselPreloadedHouseholdsRec) | SwipeAction attribute not set in React |

### Photobook / ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-020 | ui | Block LayoutRuntime_Top | block instance, no args | app/src/pages/Photobook/PhotobookPage.tsx:70 `<LayoutRuntimeTop id="$b1" />` | present |  |
| Directory_Photobook-021 | ui | Block CommonUI_InsideLayout | block instance, no args | app/src/pages/Photobook/PhotobookPage.tsx:71 `<CommonUiLayout id="$b2" />` | present | shared, checked in report of App_Common |
| Directory_Photobook-022 | ui | Block SkeletonSection args In_IsLoading=IsLoading | block with placeholder Placeholder_LoadingSection | app/src/pages/Photobook/PhotobookPage.tsx:72 `<Skeleton id="$b3" isLoading={isLoading}>` | present |  |
| Directory_Photobook-023 | ui | If_FinishedLoading condition | not IsLoading and GetLocalityHouseholdIds.IsDataFetched | app/src/pages/Photobook/PhotobookPage.tsx:73 `{!isLoading && households !== null ? (` | present | React uses households !== null for IsDataFetched |
| Directory_Photobook-024 | ui | If_FinishedLoading true branch: block Photobook_Carousel | args In_Households=Out_LocalityHouseholdIds, In_SelectedHousehold=SelectedHousehold; on ClosePhotobook -> Handler_ClosePhotobook(TargetHousehold=Event_CurrentHousehold) | app/src/pages/Photobook/PhotobookPage.tsx:74-79 `<Photobook_Carousel id="$b4" inHouseholds={households} inSelectedHousehold={selectedHousehold} onClosePhotobook={handlerClosePhotobook} />` | present |  |
| Directory_Photobook-025 | ui | If_FinishedLoading else branch: block CustomContainer (loading) | Options: Background CyanLightest, Padding Base, Border None, TextOpt... (dump cut) | app/src/pages/Photobook/PhotobookPage.tsx:81 `<CustomContainer id="$b5" options={LOADING_OPTIONS} />`; :20-33 LOADING_OPTIONS (CyanLightest, Base, None, CyanDarker Display, flex column centred, 100vh x 100vw) | present | pack args are cut at 300 chars; React values come from dom/loading.html per comment :18-19 |

### Photobook / actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-026 | actions | Handler_ClosePhotobook: If (Has Target?) TargetHousehold.HouseholdId <> NullIdentifier() | condition | app/src/pages/Photobook/PhotobookPage.tsx:52 `if (target.householdId === '0') {` | present | React tests the false case first |
| Directory_Photobook-027 | actions | Handler_ClosePhotobook true: call ReplaceOnUpcomingNavigation | call | app/src/pages/Photobook/PhotobookPage.tsx:56 `replaceOnUpcomingNavigation();` | present |  |
| Directory_Photobook-028 | actions | Handler_ClosePhotobook true: call GetHasCarouselEnabled; If HasCarouselEnabled | flag check | app/src/pages/Photobook/PhotobookPage.tsx:50,57 `const hasCarouselEnabled = useFlagOn('C2EnableCarousel')`; `if (hasCarouselEnabled) {` | present | flag C2EnableCarousel (default-only, on per code comment :50); TST flag file not read |
| Directory_Photobook-029 | actions | Handler_ClosePhotobook flag on: assign HouseholdIdList = ConvertList(Out_LocalityHouseholdIds, {Household:"HouseholdId"}) | assign | app/src/pages/Photobook/PhotobookPage.tsx:58-60 `CarouselHouseholdItem: (households ?? []).map((h) => ({ Household: h.householdId }))` | present |  |
| Directory_Photobook-030 | actions | Handler_ClosePhotobook flag on: call SetPreloadObject(ToObject(HouseholdIdList)) | call | app/src/pages/Photobook/PhotobookPage.tsx:61 `setPreloadObject(preloaded);` | present |  |
| Directory_Photobook-031 | actions | Handler_ClosePhotobook flag on: navigate HouseholdCarousel(In_StartingHouseholdId=TargetHousehold.HouseholdId), transition Inherited | navigation | app/src/pages/Photobook/PhotobookPage.tsx:62 `navigate(`/${APP_ID}/HouseholdCarousel`, { In_StartingHouseholdId: target.householdId });` | present | transition not passed in React call |
| Directory_Photobook-032 | actions | Handler_ClosePhotobook flag off: navigate HouseholdDetails(HouseholdId=TargetHousehold.HouseholdId), transition Inherited | navigation | app/src/pages/Photobook/PhotobookPage.tsx:64 `navigate(`/${APP_ID}/HouseholdDetails`, { HouseholdId: target.householdId });` | present |  |
| Directory_Photobook-033 | actions | Handler_ClosePhotobook no target: navigate Previous Screen, transition UseHistory | navigation | app/src/pages/Photobook/PhotobookPage.tsx:53 `navigateBack();` | present (PreviousScreen destination) |  |
| Directory_Photobook-034 | actions | OnAfterFetch_GetLocalityHouseholdIds: ListIndexOf(HouseholdId = In_HouseholdId) | call ListIndexOf | app/src/pages/Photobook/hooks/photobookState.ts:33 `action.households.findIndex((h) => h.householdId === action.householdId)` | present |  |
| Directory_Photobook-035 | actions | OnAfterFetch: SelectedHousehold.Position = If(Position <> -1, Position, 0) | assign | app/src/pages/Photobook/hooks/photobookState.ts:37 `position: index !== -1 ? index : 0` | present |  |
| Directory_Photobook-036 | actions | OnAfterFetch: IsLoading = False | assign | app/src/pages/Photobook/hooks/photobookState.ts:38 `isLoading: false,` | present |  |
| Directory_Photobook-037 | actions | OnInitialize: javascript IsViewRestoredFromCache; If restored -> end | JS node wasCurrentViewRestoredFromCache | app/src/pages/Photobook/hooks/usePhotobook.ts:40-44 `onReady: (isAlive, restored) => ... if (restored && latest.current.households !== null) return Promise.resolve();` | present (IsViewRestoredFromCacheJS) | React restores the saved state from useFlowState; the list check is an addition |
| Directory_Photobook-038 | actions | OnInitialize else: SelectedHousehold.Id = In_HouseholdId; IsLoading = True | assign | app/src/pages/Photobook/hooks/photobookState.ts:27 `{ selectedHousehold: { id: inputs.In_HouseholdId, position: 0 }, isLoading: true, households: null }` | present |  |
| Directory_Photobook-039 | actions | Flow-level: failure of the data action | not in pack | app/src/pages/Photobook/hooks/usePhotobook.ts:64-67 `catch (error) { if (isAlive()) throw error; return; }` | - | useFlowState sends it to the flow handler |

### Photobook / validations

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-040 | validations | Inputs and validation widgets on Photobook | no input widget on the screen; Photobook.mvc$model has no validation widgets of its own | not found (searched: Input, form, validation in pages/Photobook/PhotobookPage.tsx) | present (hasValidationWidgets from child blocks only) |  |

### Photobook / strings

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-041 | strings | Strings of the screen | none visible in the screen widgets | not found (searched: text literals in PhotobookPage.tsx) | - |  |
| Directory_Photobook-042 | strings | Strings of other blocks in the pack list (PIN unlock, UnsupportedVersion*, WelcomeToConnect: 17 strings) | strings from used blocks, not own blocks | Found in app/src: platform/feedback/dialogs/PinUnlockContentContainer.tsx, platform/session/usePinUnlockContent.ts, components/auth/PinUnlockContent/PinUnlockContent.tsx, components/version/*, components/auth/WelcomeToConnect/WelcomeToConnect.tsx (grep of the exact text). 3 strings had no exact match: "We have noticed you are using an old version of Connect.", "If you have any issues upgrading the Connect app, please uninstall and reinstall it.", "We have noticed you are using an unsupported version of Android System Webview." | - | shared blocks, checked in reports of App_Common and App_PIN; 14 strings found, 3 not found by exact text |
| Directory_Photobook-043 | strings | Strings of own screen and blocks: "Speed setting", skeleton caption | 2 user-visible strings | 2 strings found (Photobook_Options_Right.tsx:117, useHouseholdCaption.ts:13-14); 4 console-log strings not found | - |  |

## Photobook_Carousel

### Photobook_Carousel / identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-044 | identity | Block Photobook_Carousel inputs and event | In_Households (list, mandatory), In_SelectedHousehold (mandatory); event ClosePhotobook(Event_CurrentHousehold) | app/src/pages/Photobook/components/Photobook_Carousel.tsx:46-52 `inHouseholds; inSelectedHousehold; onClosePhotobook?: (currentHousehold) => void` | present |  |

### Photobook_Carousel / data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-045 | data | Local variable StartingPosition (Integer) | local variable | app/src/pages/Photobook/components/Photobook_Carousel.tsx:81 `startingPosition: inSelectedHousehold.position` | present |  |
| Directory_Photobook-046 | data | Local variable IsZoomedIn (Boolean) | local variable | app/src/pages/Photobook/components/Photobook_Carousel.tsx:193-194 comment: "IsZoomedIn = True (read by nothing but the debugger, :2058: not kept)" | present |  |
| Directory_Photobook-047 | data | Local variable MainContainerClass = "photobook-carousel" | local variable | app/src/pages/Photobook/components/Photobook_Carousel.tsx:18 `const MAIN_CONTAINER_CLASS = 'photobook-carousel';` | present |  |
| Directory_Photobook-048 | data | Local variable AutoplaySettings | local variable | app/src/pages/Photobook/components/Photobook_Carousel.tsx:86-90 `useState<AutoplaySettings>({ speed: initial.speed, isEnabled: false, isTemporarilyPaused: false })` | present |  |
| Directory_Photobook-049 | data | Local variable CarouselConfigs (SplideConfigs) | local variable | app/src/pages/Photobook/components/Photobook_Carousel.tsx:91 `const configsRef = useRef<SplideConfigs>(carouselConfigs(initial.speed));` | present |  |
| Directory_Photobook-050 | data | Local variable CurrentPosition (Integer) | local variable | app/src/pages/Photobook/components/Photobook_Carousel.tsx:92 `useState(initial.startingPosition)` | present |  |
| Directory_Photobook-051 | data | Local variable CurrentHousehold | local variable | app/src/pages/Photobook/components/Photobook_Carousel.tsx:93 `useState(() => householdAt(initial.startingPosition))` | present |  |
| Directory_Photobook-052 | data | Local variable IsShow = True | local variable | app/src/pages/Photobook/components/Photobook_Carousel.tsx:94 `const [isShow, setIsShow] = useState(true);` | present |  |
| Directory_Photobook-053 | data | Local variable TimerDuration = 5000 | local variable | app/src/pages/Photobook/components/Photobook_Carousel.tsx:21 `const TIMER_DURATION = 5000;` | present |  |
| Directory_Photobook-054 | data | Local variable CurrentTimer (Object) | local variable | app/src/pages/Photobook/components/Photobook_Carousel.tsx:96 `const currentTimer = useRef<number \| null>(null);` | present |  |
| Directory_Photobook-055 | data | Local variable IsReplaying (Boolean) | local variable | app/src/pages/Photobook/components/Photobook_Carousel.tsx:95 `const isReplayingRef = useRef(false);` | present |  |

### Photobook_Carousel / ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-056 | ui | container #Carousel_Cont [style=MainContainerClass] | container | app/src/pages/Photobook/components/Photobook_Carousel.tsx:204 `<div className={MAIN_CONTAINER_CLASS} data-container="" id={`${prefix}-Carousel_Cont`}>` | present |  |
| Directory_Photobook-057 | ui | container #Carousel_Touch_Cont [style=MainContainerClass + "--touch"]; onclick -> Handler_ScreenClick | container with click handler | app/src/pages/Photobook/components/Photobook_Carousel.tsx:205-213 `className={`${MAIN_CONTAINER_CLASS}--touch` ... onClick={() => { stopInactivityTimer(true); }}` | present |  |
| Directory_Photobook-058 | ui | block Carousel #Carousel_Photobook args | ExtendedClass=MainContainerClass+"--carousel", Navigation=None, OptionalConfigs {AutoPlay: AutoplaySettings.IsEnabled, Loop: False, StartingPosition} | app/src/pages/Photobook/components/Photobook_Carousel.tsx:214-221 `navigation={CarouselNavigation.None} optionalConfigs={{ AutoPlay: autoplay.isEnabled, Loop: false, StartingPosition: initial.startingPosition }}` | present |  |
| Directory_Photobook-059 | ui | Carousel event Initialized -> OnInitialize_Carousel(CarouselId) | event | app/src/pages/Photobook/components/Photobook_Carousel.tsx:220 `onInitialized={setCarouselConfigs}` | present | React passes SetCarouselConfigs only; no SetSplideEvent("moved") |
| Directory_Photobook-060 | ui | Carousel event OnSlideMoved -> Carousel_OnSlideMoved(CarouselId, ItemIndex) | event | app/src/pages/Photobook/components/Photobook_Carousel.tsx:219 `onOnSlideMoved={onSlideMoved}` | present |  |
| Directory_Photobook-061 | ui | list source=In_Households [style list list-group + "--list"; disable-virtualization=True] with Photobook_Item per row | list | app/src/pages/Photobook/components/Photobook_Carousel.tsx:222-238 `<OSList className={`list list-group ${MAIN_CONTAINER_CLASS}--list`} animateItems={false} disableVirtualization source={inHouseholds}` | present (disable-virtualization True) |  |
| Directory_Photobook-062 | ui | block Photobook_Item args In_Household=Current, In_MainContainerClass; on MinZoomReached, ZoomIn | block instance | app/src/pages/Photobook/components/Photobook_Carousel.tsx:230-236 `<Photobook_Item ... inMainContainerClass={MAIN_CONTAINER_CLASS} inHousehold={household} onZoomIn={handlerZoomIn} onMinZoomReached={handlerMinZoomReached} />` | present |  |
| Directory_Photobook-063 | ui | block Photobook_Options_Left args In_CurrentHousehold, In_IsShow, In_MainContainerClass; on Closed, SheetIsOpen | block instance | app/src/pages/Photobook/components/Photobook_Carousel.tsx:241-248 `<Photobook_Options_Left ... inIsShow={isShow} inCurrentHousehold={currentHousehold} onSheetIsOpen={handlerSheetIsOpen} onClosed={handlerSheetIsClosed} />` | present |  |
| Directory_Photobook-064 | ui | block Photobook_Options_Right args In_CurrentSpeed=AutoplaySettings.Speed, In_IsShow, In_MainContainerClass; on SheetIsOpen, Closed, ClosePhotobook, SetSpeed | block instance | app/src/pages/Photobook/components/Photobook_Carousel.tsx:249-258 `inCurrentSpeed={autoplay.speed} ... onSetSpeed={handlerChangeSpeed}` | present |  |
| Directory_Photobook-065 | ui | block Photobook_Options_Player args In_IsFinalItem=(CurrentPosition + 1) = In_Households.Length, In_IsShow; on Clicked, Replay | block instance | app/src/pages/Photobook/components/Photobook_Carousel.tsx:259-266 `inIsFinalItem={currentPosition + 1 === inHouseholds.length} onClicked={toggleAutoplay} onReplay={handlerReplayCarousel}` | present | React Clicked handler is ToggleAutoplay directly; pack Handler_PlayerClicked just calls ToggleAutoplay(Event_IsPlay) |
| Directory_Photobook-066 | ui | block Photobook_Gallery args In_IsShow, In_LocalityHouseholdIds=ConvertList(...HouseholdId), In_SelectedPosition=CurrentPosition; on Clicked, ListTouchEnd, ListTouchStart | block instance | app/src/pages/Photobook/components/Photobook_Carousel.tsx:267-277 `inLocalityHouseholdIds={inHouseholds.map((h) => h.householdId)} ... onListTouchStart={() => { stopInactivityTimer(false); }} onListTouchEnd={startInactivityTimer}` | present |  |
| Directory_Photobook-067 | ui | Lifecycle OnInitialize, OnReady, OnParametersChanged (empty), OnDestroy -> StopInactivityTimer(False) | lifecycle | app/src/pages/Photobook/components/Photobook_Carousel.tsx:112-120 effect: starts timer on mount, `clearTimeout` in cleanup | present (OnInitialize, OnReady, OnParametersChanged; OnDestroy as onDestroyEventHandler) | OnParametersChanged is empty in the pack |

### Photobook_Carousel / actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-068 | actions | OnInitialize: If Client.PhotobookCarousel_SelectedSpeed = NullIdentifier(): set EightSeconds | condition + assign | app/src/pages/Photobook/components/Photobook_Carousel.tsx:79-85 `const speed = stored === 0 ? Photobook_Speed.EightSeconds : stored;` and effect `if (initial.storedSpeed === 0) clientVar.photobookSpeed.set(...)` | present |  |
| Directory_Photobook-069 | actions | OnInitialize: AutoplaySettings.Speed = Client speed; IsEnabled False; IsTemporarilyPaused False | assign | app/src/pages/Photobook/components/Photobook_Carousel.tsx:86-90 | present |  |
| Directory_Photobook-070 | actions | OnInitialize: Set Splide Configs (speed 500, ltr, waitForTransition Unset, interval, wheel False, flickPower 400, flickMaxPages 1, resetProgress False, updateOnMove True, pauseOnFocus False, pauseOnHover False) | assign | app/src/pages/Photobook/components/Photobook_Carousel.tsx:30-42 `speed: 500, paginationDirection: 'ltr', waitForTransition: BooleanTypes.Unset, interval: speed, wheel: ... flickPower: 400, flickMaxPages: 1, ...` | present |  |
| Directory_Photobook-071 | actions | OnInitialize: StartingPosition = CurrentPosition = In_SelectedHousehold.Position; CurrentHousehold from In_Households[CurrentPosition] | assign | app/src/pages/Photobook/components/Photobook_Carousel.tsx:81,92-93 | present |  |
| Directory_Photobook-072 | actions | OnReady: StartInactivityTimer | call | app/src/pages/Photobook/components/Photobook_Carousel.tsx:112-115 `currentTimer.current = window.setTimeout(() => { setIsShow(false); }, TIMER_DURATION);` | present |  |
| Directory_Photobook-073 | actions | OnDestroy: StopInactivityTimer(StartNew=False) | call | app/src/pages/Photobook/components/Photobook_Carousel.tsx:116-119 cleanup `window.clearTimeout(currentTimer.current)` | present | React cleanup does not call SetShowOptions(True) |
| Directory_Photobook-074 | actions | OnInitialize_Carousel: javascript GetSplideCallbacks; SetSplideEvent("moved", SplideEvent_Moved) | call SetSplideEvent | not found (searched: setSplideEvent, SplideEvent_Moved, "moved" in Photobook_Carousel.tsx) | present (SplideEvent_Moved: 7 hits) | code comment :61-62 says handler only logs to console, not ported (NO-CONSOLE) |
| Directory_Photobook-075 | actions | OnInitialize_Carousel: call SetCarouselConfigs | call | app/src/pages/Photobook/components/Photobook_Carousel.tsx:220 `onInitialized={setCarouselConfigs}`; :123-125 `setSplideConfigs(CAROUSEL_WIDGET_ID, configsRef.current)` | present |  |
| Directory_Photobook-076 | actions | SplideEvent_Moved: JSUtils_Console_Log("New/Current: " + newIndex + " \| Previous:" ...) | console log | not found (searched: Console_Log, "New/Current", console.log in Photobook_Carousel.tsx) | present (JSUtils_Console_Log: 6 hits) | NO-CONSOLE per code comment :65-66 |
| Directory_Photobook-077 | actions | Carousel_OnSlideMoved: CurrentPosition = ItemIndex; CurrentHousehold from In_Households[CurrentPosition] | assign | app/src/pages/Photobook/components/Photobook_Carousel.tsx:143-144 `setCurrentPosition(itemIndex); setCurrentHousehold(householdAt(itemIndex));` | present |  |
| Directory_Photobook-078 | actions | Carousel_OnSlideMoved: call Carousel_SetCurrentPosition(Carousel_Photobook.Id, CurrentPosition) | call | app/src/pages/Photobook/components/Photobook_Carousel.tsx:145 `carousel_SetCurrentPosition(CAROUSEL_WIDGET_ID, itemIndex);` | present |  |
| Directory_Photobook-079 | actions | Carousel_OnSlideMoved: If IsReplaying and CurrentPosition = 0 -> IsReplaying False; ToggleAutoplay(True) | condition + calls | app/src/pages/Photobook/components/Photobook_Carousel.tsx:146-148 `if (isReplayingRef.current) { isReplayingRef.current = false; toggleAutoplay(true); }` | present | React tests only isReplaying, not CurrentPosition = 0 |
| Directory_Photobook-080 | actions | Carousel_OnSlideMoved: else If last position ((CurrentPosition + 1) = Length) and AutoplaySettings.IsEnabled -> ToggleAutoplay(False) | condition + call | app/src/pages/Photobook/components/Photobook_Carousel.tsx:149-151 `} else if (itemIndex + 1 === inHouseholds.length && autoplay.isEnabled) { toggleAutoplay(false); }` | present |  |
| Directory_Photobook-081 | actions | Carousel_SetCurrentPosition (shared client action, JS SetCurrentPosition) | sets carouselObject._configs.StartingPosition; errors logged | app/src/lib/ubtConnect/actions.ts:535; app/src/components/ui/lib/actions.ts:188 (per pack app.md word match) | present | body not read here; CR-Photobook-1 (decisions.md) names the call sites |
| Directory_Photobook-082 | actions | CheckForAutoplayRestart: If not IsEnabled and IsTemporarilyPaused -> IsEnabled True, IsTemporarilyPaused False | condition + assign | app/src/pages/Photobook/components/Photobook_Carousel.tsx:136-139 `if (!a.isEnabled && a.isTemporarilyPaused) setAutoplay({ ...a, isEnabled: true, isTemporarilyPaused: false });` | present |  |
| Directory_Photobook-083 | actions | Handler_ChangeSpeed: StartInactivityTimer | call | app/src/pages/Photobook/components/Photobook_Carousel.tsx:167 `startInactivityTimer();` | present |  |
| Directory_Photobook-084 | actions | Handler_ChangeSpeed: If IntegerToIdentifier(CarouselConfigs.interval) <> SelectedSpeed -> SetNewSpeed, CheckForAutoplayRestart | condition + calls | app/src/pages/Photobook/components/Photobook_Carousel.tsx:168-174 `if (configsRef.current.interval === selectedSpeed) return; clientVar.photobookSpeed.set(selectedSpeed); ... checkForAutoplayRestart();` | present |  |
| Directory_Photobook-085 | actions | SetNewSpeed: Client speed = SelectedSpeed; AutoplaySettings.Speed; CarouselConfigs.interval; SetCarouselConfigs | assign + call | app/src/pages/Photobook/components/Photobook_Carousel.tsx:169-173 | present |  |
| Directory_Photobook-086 | actions | Handler_ClickedGalleryItem: StopInactivityTimer(True); CarouselGoTo(Position, Carousel_Photobook.Id) | calls | app/src/pages/Photobook/components/Photobook_Carousel.tsx:189-192 `stopInactivityTimer(true); carouselGoTo(CAROUSEL_WIDGET_ID, selected.position);` | present |  |
| Directory_Photobook-087 | actions | Handler_ClosePhotobook: StopInactivityTimer(False); trigger ClosePhotobook(CurrentHousehold) | calls | app/src/pages/Photobook/components/Photobook_Carousel.tsx:177-180 `stopInactivityTimer(false); onClosePhotobook?.(currentHousehold);` | present |  |
| Directory_Photobook-088 | actions | Handler_MinZoomReached: CarouselToggleDrag(HasDrag=True) | call | app/src/pages/Photobook/components/Photobook_Carousel.tsx:198-200 `carouselToggleDrag(CAROUSEL_WIDGET_ID, true);` | present |  |
| Directory_Photobook-089 | actions | Handler_MinZoomReached: If CarouselToggleDrag.Success false -> JSUtils_Console_Log(error) | error branch | not found (searched: Console_Log, success branch, ErrorMessage in Photobook_Carousel.tsx) | present (JSUtils_Console_Log) | NO-CONSOLE per code comment :65-66; carouselToggleDrag returns boolean (components/ui/lib/actions.ts:181) |
| Directory_Photobook-090 | actions | Handler_ZoomIn: IsZoomedIn = True; CarouselToggleDrag(HasDrag=False) | assign + call | app/src/pages/Photobook/components/Photobook_Carousel.tsx:195-197 `carouselToggleDrag(CAROUSEL_WIDGET_ID, false);` | present | IsZoomedIn not kept in React (comment :193) |
| Directory_Photobook-091 | actions | Handler_ZoomIn: Success false -> JSUtils_Console_Log | error branch | not found (searched: Console_Log in Photobook_Carousel.tsx) | present | NO-CONSOLE |
| Directory_Photobook-092 | actions | Handler_PlayerClicked(Event_IsPlay): ToggleAutoplay(In_IsPlay=Event_IsPlay) | call | app/src/pages/Photobook/components/Photobook_Carousel.tsx:264 `onClicked={toggleAutoplay}` | present |  |
| Directory_Photobook-093 | actions | Handler_ReplayCarousel: StopInactivityTimer(True); IsReplaying = True; CarouselGoTo(0) | calls | app/src/pages/Photobook/components/Photobook_Carousel.tsx:182-186 `stopInactivityTimer(true); isReplayingRef.current = true; carouselGoTo(CAROUSEL_WIDGET_ID, 0);` | present |  |
| Directory_Photobook-094 | actions | Handler_ScreenClick: StopInactivityTimer(True) | call | app/src/pages/Photobook/components/Photobook_Carousel.tsx:210-212 `onClick={() => { stopInactivityTimer(true); }}` | present |  |
| Directory_Photobook-095 | actions | Handler_SheetIsClosed: StartInactivityTimer; CheckForAutoplayRestart | calls | app/src/pages/Photobook/components/Photobook_Carousel.tsx:161-164 | present |  |
| Directory_Photobook-096 | actions | Handler_SheetIsOpen: StopInactivityTimer(False); If IsEnabled -> IsEnabled False, IsTemporarilyPaused True | calls + assign | app/src/pages/Photobook/components/Photobook_Carousel.tsx:155-159 `stopInactivityTimer(false); ... if (a.isEnabled) setAutoplay({ ...a, isEnabled: false, isTemporarilyPaused: true });` | present |  |
| Directory_Photobook-097 | actions | SetCarouselConfigs: SetSplideConfigs(CarouselConfigs, Carousel_Photobook.Id) | call | app/src/pages/Photobook/components/Photobook_Carousel.tsx:123-125 `setSplideConfigs(CAROUSEL_WIDGET_ID, configsRef.current);` | present |  |
| Directory_Photobook-098 | actions | SetShowOptions(IsToShow): IsShow = IsToShow | assign | app/src/pages/Photobook/components/Photobook_Carousel.tsx:102,108 `setIsShow(false)` / `setIsShow(true)` | present |  |
| Directory_Photobook-099 | actions | StartInactivityTimer: javascript window.setTimeout -> SetShowOptions(false) after TimerDuration; CurrentTimer = TimerObj | JS + assign | app/src/pages/Photobook/components/Photobook_Carousel.tsx:100-104 `currentTimer.current = window.setTimeout(() => { setIsShow(false); }, TIMER_DURATION);` | present (setTimeout: 1 hit) | comment :98-99 says a running timer is not cleared on start, as compiled |
| Directory_Photobook-100 | actions | StopInactivityTimer(StartNew): clearTimeout; CurrentTimer = Null; SetShowOptions(True); If StartNew -> StartInactivityTimer | JS + assign + If | app/src/pages/Photobook/components/Photobook_Carousel.tsx:105-110 `if (currentTimer.current !== null) window.clearTimeout(...); currentTimer.current = null; setIsShow(true); if (startNew) startInactivityTimer();` | present |  |
| Directory_Photobook-101 | actions | ToggleAutoplay(In_IsPlay): IsEnabled = In_IsPlay; IsTemporarilyPaused False; SetCarouselConfigs | assign + call | app/src/pages/Photobook/components/Photobook_Carousel.tsx:129-132 `setAutoplay((a) => ({ ...a, isEnabled: isPlay, isTemporarilyPaused: false })); setCarouselConfigs();` | present |  |
| Directory_Photobook-102 | actions | ToggleAutoplay: If IsEnabled -> CarouselToggleDrag(False) else CarouselToggleDrag(True) | If with two branches | app/src/pages/Photobook/components/Photobook_Carousel.tsx:132 `carouselToggleDrag(CAROUSEL_WIDGET_ID, !isPlay);` | present | React uses In_IsPlay, pack tests AutoplaySettings.IsEnabled after the assign (same value) |
| Directory_Photobook-103 | actions | CarouselToggleDrag error branches (Success false) in ToggleAutoplay | none in pack (no Success check) | - | - |  |

### Photobook_Carousel / validations

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-104 | validations | Inputs and forms in Photobook_Carousel | no input widget | not found (searched: input, form in Photobook_Carousel.tsx) | - |  |

### Photobook_Carousel / strings

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-105 | strings | Strings "Carousel Toggle Drag Error - Code:", "\| Message:", "\| Previous:", "\| Destination:" (JSUtils_Console_Log) | console log text | not found (searched: Carousel Toggle Drag Error, \| Previous:, \| Destination: in app/src) | - | console only; NO-CONSOLE |

## Photobook_Gallery

### Photobook_Gallery / identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-106 | identity | Block Photobook_Gallery inputs and events | In_LocalityHouseholdIds (Long Integer List), In_SelectedPosition (mandatory), In_IsShow (mandatory); events Clicked(Event_SelectedHousehold), ListTouchEnd, ListTouchStart | app/src/pages/Photobook/components/Photobook_Gallery.tsx:138-147 `inIsShow; inSelectedPosition; inLocalityHouseholdIds; onClicked; onListTouchStart; onListTouchEnd` | present |  |

### Photobook_Gallery / data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-107 | data | Local variable SelectedPosition (Integer) | local variable | app/src/pages/Photobook/components/Photobook_Gallery.tsx:167 `const [selectedPosition, setSelectedPosition] = useState(inSelectedPosition);` | present |  |
| Directory_Photobook-108 | data | Local variable MainContainerClass = "photobook-gallery" | local variable | app/src/pages/Photobook/components/Photobook_Gallery.tsx:23 `const MAIN_CONTAINER_CLASS = 'photobook-gallery';` | present |  |

### Photobook_Gallery / ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-109 | ui | block CustomContainer #Household_Gallery_Cont (ExtendedClasses, Margin Bottom Base, Flex, AlignItems Center, FlexDirection Col...) | block instance, args cut in dump | app/src/pages/Photobook/components/Photobook_Gallery.tsx:198-210 `extendedClasses={MAIN_CONTAINER_CLASS} options={{ MarginSize: { BottomSizeId: UBT_Size.Base }, DisplayOptions: { ... Center, Column }, Visibility: ...}}` | present | React adds Visibility from In_IsShow; the pack args are cut at 300 chars, so the Visibility option is not visible in the pack |
| Directory_Photobook-110 | ui | block Photobook_Options_Bottom args In_CurrentPosition=SelectedPosition, In_IsShow, In_MainContainerClass, In_TotalHouseholds=Length | block instance | app/src/pages/Photobook/components/Photobook_Gallery.tsx:211-217 | present |  |
| Directory_Photobook-111 | ui | list #Photobook_Gallery_List source=In_LocalityHouseholdIds [list list-group + "--list"; disable-virtualization]; on componentdidmount -> ScrollSelectedIntoPosition(IsInstantScroll=True) | list | app/src/pages/Photobook/components/Photobook_Gallery.tsx:218-224 `<OSList id={listId} ... animateItems disableVirtualization source={inLocalityHouseholdIds}`; :187-189 effect scroll instant on mount | present (disable-virtualization True; componentdidmount) |  |
| Directory_Photobook-112 | ui | block Photobook_Gallery_Item args In_HouseholdId=Current, In_IsActive=SelectedPosition = CurrentRowNumber, In_TargetSubClass=MainContainerClass+"--item"; on Clicked -> Handler_ClickedHousehold({Id, Position}) | block instance | app/src/pages/Photobook/components/Photobook_Gallery.tsx:227-235 `inIsActive={selectedPosition === index} inTargetSubClass={`${MAIN_CONTAINER_CLASS}--item`}` | present | pack compares with CurrentRowNumber; React compares with the 0-based index (same value assumed by the code; not verified) |
| Directory_Photobook-113 | ui | block TouchEvents PreventDefaults=False, WidgetId=Photobook_Gallery_List.Id; Start -> ListTouchStart; End -> ListTouchEnd | block instance | app/src/pages/Photobook/components/Photobook_Gallery.tsx:239-245 `<TouchEvents ... widgetId={listId} preventDefaults={false} onStart={() => onListTouchStart?.()} onEnd={() => onListTouchEnd?.()} />` | present (TouchEvents: 7 hits) |  |

### Photobook_Gallery / actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-114 | actions | OnInitialize: SelectedPosition = In_SelectedPosition | assign | app/src/pages/Photobook/components/Photobook_Gallery.tsx:167 | present |  |
| Directory_Photobook-115 | actions | OnParametersChanged: CheckIfScrollIsNeeded(ForceScroll = not In_IsShow, TargetPosition = In_SelectedPosition) | call | app/src/pages/Photobook/components/Photobook_Gallery.tsx:180-184 `if (previousInputs.inSelectedPosition !== inSelectedPosition \|\| previousInputs.inIsShow !== inIsShow) { ... checkIfScrollIsNeeded(inSelectedPosition, !inIsShow); }` | present |  |
| Directory_Photobook-116 | actions | CheckIfScrollIsNeeded: If ForceScroll -> SelectedPosition = TargetPosition; ScrollSelectedIntoPosition | If branch 1 | app/src/pages/Photobook/components/Photobook_Gallery.tsx:173-176 `if (!forceScroll && targetPosition === selectedPosition) return targetPosition; setSelectedPosition(targetPosition); setScrollRequest({ instant: false });` | present |  |
| Directory_Photobook-117 | actions | CheckIfScrollIsNeeded: else If TargetPosition = SelectedPosition -> end | If branch 2 (no change) | app/src/pages/Photobook/components/Photobook_Gallery.tsx:173 | present |  |
| Directory_Photobook-118 | actions | CheckIfScrollIsNeeded: else -> SelectedPosition = TargetPosition; ScrollSelectedIntoPosition | If branch 3 | app/src/pages/Photobook/components/Photobook_Gallery.tsx:174-175 | present | ScrollSelectedIntoPosition called with IsInstantScroll empty (smooth) in pack; React sets instant false |
| Directory_Photobook-119 | actions | Handler_ClickedHousehold: CheckIfScrollIsNeeded(Position); trigger Clicked({Id, Position: SelectedPosition}) | calls | app/src/pages/Photobook/components/Photobook_Gallery.tsx:191-194 `const selected = checkIfScrollIsNeeded(position, false); onClicked?.({ id: householdId, position: selected });` | present | React sends the target position; pack sends SelectedPosition read after the call (state update timing) |
| Directory_Photobook-120 | actions | ScrollSelectedIntoPosition: javascript ScrollIntoPositionJS (querySelectorAll, margins, scroll left, instant or smooth) | JS node | app/src/pages/Photobook/components/Photobook_Gallery.tsx:27-41 `scrollableList.scroll({ left: scrollAmount, behavior: isInstantScroll ? 'instant' : 'smooth' })` | present (scroll( : 1 hit) |  |

### Photobook_Gallery / validations

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-121 | validations | Inputs and forms in Photobook_Gallery | no input widget | not found (searched: input, form in Photobook_Gallery.tsx) | - |  |

### Photobook_Gallery / strings

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-122 | strings | Strings of Photobook_Gallery | none | not found (searched: text literals) | - |  |

## Photobook_Gallery_Item

### Photobook_Gallery_Item / identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-123 | identity | Block Photobook_Gallery_Item inputs and event | In_HouseholdId (mandatory), In_IsActive (mandatory), In_TargetSubClass (mandatory); event Clicked(Event_HouseholdId) | app/src/pages/Photobook/components/Photobook_Gallery.tsx:96-108 local function Photobook_Gallery_Item `{ id, inIsActive, inTargetSubClass, inHouseholdId, onClicked }` | present | own file absent; the block is defined inside Photobook_Gallery.tsx |

### Photobook_Gallery_Item / ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-124 | ui | block CustomContainer #Household_Gallery_Item args ExtendedClasses=In_TargetSubClass, Border Color/Size If(In_IsActive, Neutral0/Small, Null), Radius ...; on Clicked -> Clicked(Event_HouseholdId=In_HouseholdId) | block instance | app/src/pages/Photobook/components/Photobook_Gallery.tsx:112-125 `Color: inIsActive ? UBT_Color.Neutral0 : '', Size: { GeneralSizeId: inIsActive ? UBT_Size.Small : '' }, Radius: { GeneralSizeId: UBT_Shape.Soft }` and `onClicked={() => { onClicked(inHouseholdId); }}` | present | pack Radius value is cut; React uses UBT_Shape.Soft; inactive value is NullTextIdentifier in pack, empty string in React |
| Directory_Photobook-125 | ui | block UBT_LazyImage EntityId=In_HouseholdId, EntityType=Household, ImageSize {Height: Small_40}, In_BorderRadius=Soft | block instance | app/src/pages/Photobook/components/Photobook_Gallery.tsx:126-132 `<EntityLazyImage ... entityType={Connect_Entity.Household} inBorderRadius={UBT_Shape.Soft} imageSize={{ Height: UBT_ImageSize.Small_40 }} entityId={inHouseholdId} />` | present | UBT_LazyImage mapped to EntityLazyImage; TST file UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc.js named in references.md, not read |

### Photobook_Gallery_Item / actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-126 | actions | Event Clicked(Event_HouseholdId) raised from CustomContainer.Clicked | event | app/src/pages/Photobook/components/Photobook_Gallery.tsx:122-124 | present |  |

### Photobook_Gallery_Item / validations

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-127 | validations | Inputs and forms | none | not found (searched: input) | - |  |

## Photobook_Item

### Photobook_Item / identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-128 | identity | Block Photobook_Item inputs and events | In_Household (mandatory), In_MainContainerClass (mandatory); events MinZoomReached(), ZoomIn() | app/src/pages/Photobook/components/Photobook_Item.tsx:20-29 | present |  |

### Photobook_Item / data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-129 | data | Local variable IsZoomedIn (Boolean) | local variable | app/src/pages/Photobook/components/Photobook_Item.tsx:49 `const [isZoomedIn, setIsZoomedIn] = useState(false);` | present | pack widget tree shows no read of IsZoomedIn; React hides Title_Cont while zoomed (Photobook_Item.tsx:95) |

### Photobook_Item / ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-130 | ui | block CustomContainer #CarouselItem ExtendedClasses=In_MainContainerClass+"-item", Flex, AlignItems Center, JustifyContent Center, HeightOptions {} | block instance | app/src/pages/Photobook/components/Photobook_Item.tsx:60-64 `extendedClasses={`${inMainContainerClass}-item`} options={{ DisplayOptions: CENTER }}` | present |  |
| Directory_Photobook-131 | ui | container #DIV_BackgroundImage [style=In_MainContainerClass+"-item-cont"] with UBT_LazyImage #Background_Image (Width MaxWidth_100vw, ExtendedClass "-background-image") | container + block | app/src/pages/Photobook/components/Photobook_Item.tsx:65-73 | present |  |
| Directory_Photobook-132 | ui | container #DIV_ForegroundImage with block PanZoom; placeholder Image: UBT_LazyImage #Foreground_Image (Height MaxHeight_100vh) | container + block | app/src/pages/Photobook/components/Photobook_Item.tsx:74-89 `<PanZoom id={`${prefix}-$b3`} onZoomIn={handlerZoomIn} onMinZoomReached={handlerMinZoomReached} image={<EntityLazyImage ...>}` | present (PanZoom: 7 hits) | PanZoom vendored per ADR-7 (decisions.md) |
| Directory_Photobook-133 | ui | block CustomContainer #Title_Cont and #Title_Background (Neutral9 opacity 0.25, padding XS / 2XL, border...) | block instance | app/src/pages/Photobook/components/Photobook_Item.tsx:90-106 | present | React adds Visibility Hidden while isZoomedIn; pack args are cut at 300 chars |
| Directory_Photobook-134 | ui | block CustomText #Title_FamilyName In_Text=HouseholdName (Neutral0, Heading6, SemiBold) | block instance | app/src/pages/Photobook/components/Photobook_Item.tsx:108-116 | present |  |
| Directory_Photobook-135 | ui | block CustomText #Title_Locality In_Text=Locality (Neutral0, Small) | block instance | app/src/pages/Photobook/components/Photobook_Item.tsx:117-121 | present |  |

### Photobook_Item / actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-136 | actions | Handler_MinZoomReached: IsZoomedIn = False; trigger MinZoomReached | assign + event | app/src/pages/Photobook/components/Photobook_Item.tsx:54-57 `setIsZoomedIn(false); onMinZoomReached?.();` | present |  |
| Directory_Photobook-137 | actions | Handler_ZoomIn: IsZoomedIn = True; trigger ZoomIn | assign + event | app/src/pages/Photobook/components/Photobook_Item.tsx:50-53 `setIsZoomedIn(true); onZoomIn?.();` | present |  |

### Photobook_Item / validations

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-138 | validations | Inputs and forms | none | not found (searched: input) | - |  |

## Photobook_Options_Bottom

### Photobook_Options_Bottom / identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-139 | identity | Block Photobook_Options_Bottom inputs | In_MainContainerClass, In_IsShow, In_CurrentPosition, In_TotalHouseholds (all mandatory) | app/src/pages/Photobook/components/Photobook_Gallery.tsx:45-57 | present | own file absent; block defined inside Photobook_Gallery.tsx |

### Photobook_Options_Bottom / ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-140 | ui | If_HasData: In_TotalHouseholds <> NullIdentifier() | condition | app/src/pages/Photobook/components/Photobook_Gallery.tsx:61 `{inTotalHouseholds !== 0 && (` | present |  |
| Directory_Photobook-141 | ui | if false branch | no else content | app/src/pages/Photobook/components/Photobook_Gallery.tsx:61 (nothing rendered) | present |  |
| Directory_Photobook-142 | ui | block CustomContainer #Photobook_Options_Bottom (ExtendedClasses "--counter", Neutral9 opacity 0.6, padding Small/Base, border...) | block instance | app/src/pages/Photobook/components/Photobook_Gallery.tsx:62-75 | present | React adds Visibility from In_IsShow; pack args are cut |
| Directory_Photobook-143 | ui | block IconText Text=(In_CurrentPosition + 1) + "/" + In_TotalHouseholds (Neutral0, Small, Bold) with Icon Family Base_24 | block instance | app/src/pages/Photobook/components/Photobook_Gallery.tsx:76-87 `text={`${String(inCurrentPosition + 1)}/${String(inTotalHouseholds)}`}` and `inIconId={UBT_Icons2.Family}` | present |  |

### Photobook_Options_Bottom / validations

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-144 | validations | Inputs and forms | none | not found (searched: input) | - |  |

## Photobook_Options_Left

### Photobook_Options_Left / identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-145 | identity | Block Photobook_Options_Left inputs and events | In_MainContainerClass, In_IsShow, In_CurrentHousehold (mandatory); events Closed(), SheetIsOpen() | app/src/pages/Photobook/components/Photobook_Options_Left.tsx:31-40 | present |  |

### Photobook_Options_Left / data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-146 | data | Local variables InfoSheetId, isLoading, LastFetched | local variables | app/src/pages/Photobook/hooks/useHouseholdCaption.ts:54-56 `useState('')`, `useState(false)`, `useState<PhotobookHousehold>(EMPTY_HOUSEHOLD)` | present |  |
| Directory_Photobook-147 | data | Data action GetHouseholdCaption, fetch OnDemand; outputs HouseholdCaption, LastFetchedHousehold | data action | app/src/pages/Photobook/hooks/useHouseholdCaption.ts:78-85 `fetchHouseholdCaption({...}).then(`; app/src/api/household/repository.ts:63-70 | present (GetHouseholdCaption: 22 hits) | React calls only from Handler_ClickedInfo; no fetch at start |
| Directory_Photobook-148 | data | Server action GetImageCaptions_Photobook(In_HouseholdId=In_CurrentHousehold.HouseholdId) | call-server | app/src/pages/Photobook/hooks/useHouseholdCaption.ts:78 `inCurrentHousehold` is sent whole to DataActionGetHouseholdCaption | absent by name (see Photobook row) |  |
| Directory_Photobook-149 | data | Mock handler of GetImageCaptions_Photobook | no handler by action name | app/src/pages/Photobook/mocks.ts:62-65 | - | mock under the data action name; production needs GetImageCaptions_Photobook (Connect_Household_CS) |

### Photobook_Options_Left / ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-150 | ui | block CustomContainer #Photobook_Options_Top_Left (ExtendedClasses "--top-left", Neutral9 0.6, Small padding, border...); on Clicked -> Handler_ClickedInfo | block instance | app/src/pages/Photobook/components/Photobook_Options_Left.tsx:68-73 `extendedClasses={`${inMainContainerClass}--top-left`} options={{ ...ROUND_BUTTON, Visibility: ... }} onClicked={onClickedInfo}` | present | pack args cut; React adds Visibility from In_IsShow |
| Directory_Photobook-151 | ui | block Icon #Photobook_Options_Top_Info (Neutral0, Info, Base_24) | block instance | app/src/pages/Photobook/components/Photobook_Options_Left.tsx:74-79 | present |  |
| Directory_Photobook-152 | ui | If_IsShow: In_IsShow | condition | app/src/pages/Photobook/components/Photobook_Options_Left.tsx:81 `{inIsShow && (` | present |  |
| Directory_Photobook-153 | ui | block BottomSheet #BottomSheet_Info ExtendedClasses, Title=In_CurrentHousehold.Locality; on OnToggle, OnClose, Initialized | block instance | app/src/pages/Photobook/components/Photobook_Options_Left.tsx:82-88 `title={inCurrentHousehold.locality} onOnToggle={handlerToggleInfoSheet} onOnClose={onCloseSheet} onInitialized={onSheetInitialized}` | present (BottomSheet_Info: 2 hits) | BottomSheet is UBTConnectLibrary.ConnectPatterns (references.md) |
| Directory_Photobook-154 | ui | block SkeletonSection In_IsLoading=isLoading; CustomContainer (Flex, FlexStart, Center, Col...); SanitizedHtml AllowedTags="nobr,sup", ResetWhitelist=False, Value=HouseholdCaption | block tree | app/src/pages/Photobook/components/Photobook_Options_Left.tsx:90-103 `<SanitizedHtml value={caption} resetWhitelist={false} allowedTags="nobr,sup" />` | present (AllowedTags: "nobr,sup" at line 425) |  |

### Photobook_Options_Left / actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-155 | actions | OnInitialize: javascript IsViewRestoredFromCache; If restored -> end | JS + If | app/src/pages/Photobook/hooks/useHouseholdCaption.ts:53,57 `const restored = useWasRestoredFromCache(); ... useState(restored ? '' : SKELETON_CAPTION)` | present |  |
| Directory_Photobook-156 | actions | OnInitialize else: GetSkeleton_UI_PhotobookCaption; GetHouseholdCaption.HouseholdCaption = Caption | call + assign | app/src/pages/Photobook/hooks/useHouseholdCaption.ts:13-14 `SKELETON_CAPTION = 'SURNAME (Name - Local) Name & Name ...'`; :57 | present |  |
| Directory_Photobook-157 | actions | Handler_ClickedInfo: ToggleInfoSheet(True) | call | app/src/pages/Photobook/hooks/useHouseholdCaption.ts:75 `toggleInfoSheet(true);` | present |  |
| Directory_Photobook-158 | actions | Handler_ClickedInfo: If LastFetched = In_CurrentHousehold -> end | condition true | app/src/pages/Photobook/hooks/useHouseholdCaption.ts:76 `if (sameHousehold(lastFetched, inCurrentHousehold)) return;` | present | React compares id, name and locality; pack compares the record |
| Directory_Photobook-159 | actions | Handler_ClickedInfo else: isLoading = True; refresh data GetHouseholdCaption | condition false | app/src/pages/Photobook/hooks/useHouseholdCaption.ts:77-85 `setIsLoading(true); fetchHouseholdCaption({...})` | present |  |
| Directory_Photobook-160 | actions | OnAfterFetch_GetHouseholdCaption: isLoading = False; LastFetched = LastFetchedHousehold | assign | app/src/pages/Photobook/hooks/useHouseholdCaption.ts:86-91 `setCaption(out.householdCaption); setIsLoading(false); setLastFetched(out.lastFetchedHousehold);` | present |  |
| Directory_Photobook-161 | actions | Data action failure | not in pack | app/src/pages/Photobook/hooks/useHouseholdCaption.ts:92-94 `raiseToFlowHandler(error)` | - | isLoading stays true after a failure in React |
| Directory_Photobook-162 | actions | Handler_ToggleInfoSheet(IsOpen): If IsOpen -> trigger SheetIsOpen; else -> trigger Closed | If with two branches | app/src/pages/Photobook/components/Photobook_Options_Left.tsx:61-64 `if (isOpen) onSheetIsOpen?.(); else onClosed?.();` | present |  |
| Directory_Photobook-163 | actions | InfoSheetInitialized(Id): InfoSheetId = Id | assign | app/src/pages/Photobook/hooks/useHouseholdCaption.ts:101 `onSheetInitialized: setInfoSheetId,` | present |  |
| Directory_Photobook-164 | actions | ToggleInfoSheet(IsOpen): If IsOpen -> BottomSheetOpen(InfoSheetId); else BottomSheetClose(InfoSheetId) | If with two branches | app/src/pages/Photobook/hooks/useHouseholdCaption.ts:69-72 `if (isOpen) bottomSheetOpen(infoSheetId); else bottomSheetClose(infoSheetId);` | present |  |
| Directory_Photobook-165 | actions | BottomSheet OnClose -> ToggleInfoSheet(IsOpen=False) | event | app/src/pages/Photobook/hooks/useHouseholdCaption.ts:103-105 | present |  |

### Photobook_Options_Left / validations

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-166 | validations | Inputs and forms | none | not found (searched: input) | - |  |

### Photobook_Options_Left / strings

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-167 | strings | String "SURNAME (Name - Local) Name & Name (Name Name* - Locality, AA) First name m, Name m, Name m (Locality) Name 00/00, Name" (skeleton caption) | assign text | app/src/pages/Photobook/hooks/useHouseholdCaption.ts:13-14 same text | present |  |

## Photobook_Options_Player

### Photobook_Options_Player / identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-168 | identity | Block Photobook_Options_Player inputs and events | In_MainContainerClass, In_IsShow, In_IsFinalItem (mandatory); events Clicked(Event_IsPlay), Replay() | app/src/pages/Photobook/components/Photobook_Options_Player.tsx:9-18 | present |  |

### Photobook_Options_Player / data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-169 | data | Local variable IsPlay (Boolean) | local variable | app/src/pages/Photobook/components/Photobook_Options_Player.tsx:33 `const [isPlay, setIsPlay] = useState(false);` | present |  |

### Photobook_Options_Player / ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-170 | ui | block CustomContainer #Photobook_Options_Player ExtendedClasses "--player"; Visibility If(In_IsShow, Visible, Hidden) | block instance | app/src/pages/Photobook/components/Photobook_Options_Player.tsx:59-63 `options={{ Visibility: inIsShow ? UBT_Visibility.Visible : UBT_Visibility.Hidden }}` | present |  |
| Directory_Photobook-171 | ui | If_IsFinalItem: In_IsFinalItem -> Icon #Photobook_Options_Replay (Replay, NonStandard_64); Click -> Handler_ClickReplay | If true branch | app/src/pages/Photobook/components/Photobook_Options_Player.tsx:64-65 `{inIsFinalItem ? icon('Photobook_Options_Replay', UBT_Icons2.Replay, clickReplay)` | present | Replay icon value is a TST value not rendered in a captured state (staticEntities.ts:4-6) |
| Directory_Photobook-172 | ui | If_IsPlay: IsPlay -> Icon #Photobook_Options_Pause; Click -> Handler_TogglePlay(IsPlayState=False) | If true branch | app/src/pages/Photobook/components/Photobook_Options_Player.tsx:66-69 `isPlay ? icon('Photobook_Options_Pause', UBT_Icons2.Pause, () => { togglePlay(false); })` | present |  |
| Directory_Photobook-173 | ui | If_IsPlay else -> Icon #Photobook_Options_Play; Click -> Handler_TogglePlay(IsPlayState=True) | If false branch | app/src/pages/Photobook/components/Photobook_Options_Player.tsx:70-72 `icon('Photobook_Options_Play', UBT_Icons2.PlayArrow, () => { togglePlay(true); })` | present |  |

### Photobook_Options_Player / actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-174 | actions | Handler_ClickReplay: IsPlay = True; trigger Replay | assign + event | app/src/pages/Photobook/components/Photobook_Options_Player.tsx:44-47 `setIsPlay(true); onReplay?.();` | present |  |
| Directory_Photobook-175 | actions | Handler_TogglePlay(IsPlayState): IsPlay = IsPlayState; trigger Clicked(IsPlay) | assign + event | app/src/pages/Photobook/components/Photobook_Options_Player.tsx:40-43 `setIsPlay(isPlayState); onClicked?.(isPlayState);` | present |  |
| Directory_Photobook-176 | actions | OnParametersChanged: If In_IsFinalItem and IsPlay -> IsPlay = False; else end | If with two branches | app/src/pages/Photobook/components/Photobook_Options_Player.tsx:36-39 `if (previousFinal !== inIsFinalItem) { ... if (inIsFinalItem && isPlay) setIsPlay(false); }` | present | React runs the check only when In_IsFinalItem changes; pack runs it on every parameter change |

### Photobook_Options_Player / validations

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-177 | validations | Inputs and forms | none | not found (searched: input) | - |  |

## Photobook_Options_Right

### Photobook_Options_Right / identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-178 | identity | Block Photobook_Options_Right inputs and events | In_MainContainerClass, In_IsShow, In_CurrentSpeed (mandatory); events Closed, ClosePhotobook, SetSpeed(Event_SelectedSpeed), SheetIsOpen | app/src/pages/Photobook/components/Photobook_Options_Right.tsx:21-31 | present |  |

### Photobook_Options_Right / data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-179 | data | Local variables SpeedSheetId, SelectedSpeed | local variables | app/src/pages/Photobook/components/Photobook_Options_Right.tsx:51-56 `const [speedSheetId, setSpeedSheetId] = useState(''); ... selectedSpeed` | present |  |

### Photobook_Options_Right / ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-180 | ui | block CustomContainer #Photobook_Options_Top_Right (Flex, Center, FlexEnd, Row...) | block instance | app/src/pages/Photobook/components/Photobook_Options_Right.tsx:73-85 | present | React adds Visibility from In_IsShow; pack args cut |
| Directory_Photobook-181 | ui | block CustomContainer #Photobook_Options_Top_Speed; Clicked -> ToggleSpeedSheet(True); Icon Clock Base_24 | block instance | app/src/pages/Photobook/components/Photobook_Options_Right.tsx:86-99 `onClicked={() => { toggleSpeedSheet(true); }}` | present |  |
| Directory_Photobook-182 | ui | block CustomContainer #Photobook_Options_Top_Close (Margin Left Base); Clicked -> ClosePhotobook; Icon Close Base_24 | block instance | app/src/pages/Photobook/components/Photobook_Options_Right.tsx:100-111 `options={{ ...ROUND_BUTTON, MarginSize: { LeftSizeId: UBT_Size.Base } }} onClicked={onClosePhotobook}` | present |  |
| Directory_Photobook-183 | ui | If_IsShow: In_IsShow | condition | app/src/pages/Photobook/components/Photobook_Options_Right.tsx:113 `{inIsShow && (` | present |  |
| Directory_Photobook-184 | ui | block BottomSheet #BottomSheet_Speed CloseOnClickOutsite=False, ShowHandlerPreview=False, Title="Speed setting"; on OnClose, Initialized, OnToggle | block instance | app/src/pages/Photobook/components/Photobook_Options_Right.tsx:114-124 `title="Speed setting" closeOnClickOutsite={false} showHandlerPreview={false} onOnToggle={handlerToggleSpeedSheet} ...` | present |  |
| Directory_Photobook-185 | ui | radiobuttons Five (FiveSeconds, "5s"), Eight (EightSeconds, "8s"), Fifteen (FifteenSeconds, "15s") | radio options | app/src/pages/Photobook/components/Photobook_Options_Right.tsx:134-136 `speedOption('Five', Photobook_Speed.FiveSeconds, '5s')` ... `'15s'` | present ("5s": 2 hits) |  |

### Photobook_Options_Right / actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-186 | actions | OnInitialize: SelectedSpeed = In_CurrentSpeed | assign | app/src/pages/Photobook/components/Photobook_Options_Right.tsx:54 | present |  |
| Directory_Photobook-187 | actions | OnParametersChanged: SelectedSpeed = In_CurrentSpeed | assign | app/src/pages/Photobook/components/Photobook_Options_Right.tsx:53-56 inputsKey of In_CurrentSpeed, In_MainContainerClass, In_IsShow | present | React resets on any of three inputs |
| Directory_Photobook-188 | actions | Handler_SpeedInitialized(Id): SpeedSheetId = Id | assign | app/src/pages/Photobook/components/Photobook_Options_Right.tsx:121 `onInitialized={setSpeedSheetId}` | present |  |
| Directory_Photobook-189 | actions | Handler_ToggleSpeedSheet: If IsOpen -> trigger SheetIsOpen | If true | app/src/pages/Photobook/components/Photobook_Options_Right.tsx:67 `if (isOpen) onSheetIsOpen?.();` | present |  |
| Directory_Photobook-190 | actions | Handler_ToggleSpeedSheet: else If SelectedSpeed <> In_CurrentSpeed -> trigger SetSpeed(SelectedSpeed) | If branch | app/src/pages/Photobook/components/Photobook_Options_Right.tsx:68 `else if (selectedSpeed !== inCurrentSpeed) onSetSpeed?.(selectedSpeed);` | present |  |
| Directory_Photobook-191 | actions | Handler_ToggleSpeedSheet: else -> trigger Closed | If branch | app/src/pages/Photobook/components/Photobook_Options_Right.tsx:69 `else onClosed?.();` | present |  |
| Directory_Photobook-192 | actions | ToggleSpeedSheet(IsOpen): BottomSheetOpen / BottomSheetClose(SpeedSheetId) | If with two branches | app/src/pages/Photobook/components/Photobook_Options_Right.tsx:62-65 | present |  |
| Directory_Photobook-193 | actions | BottomSheet OnClose -> ToggleSpeedSheet(False) | event | app/src/pages/Photobook/components/Photobook_Options_Right.tsx:122-124 | present |  |

### Photobook_Options_Right / validations

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-194 | validations | RadioGroup_SpeedOptions var=SelectedSpeed Mandatory=True | input constraint | app/src/pages/Photobook/components/Photobook_Options_Right.tsx:126-133 `<RadioGroup id=... value={selectedSpeed} onValueChange=...>` (no mandatory attribute) | present (TST mandatory: true at lines 484, 649, 686, 736 are event/param entries; widget constraint not isolated) | no OnChange handler in the pack for the group; no Mandatory prop found in React |

### Photobook_Options_Right / strings

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Photobook-195 | strings | Strings "Speed setting", "5s", "8s", "15s" | literals | app/src/pages/Photobook/components/Photobook_Options_Right.tsx:117,134-136 | present |  |

