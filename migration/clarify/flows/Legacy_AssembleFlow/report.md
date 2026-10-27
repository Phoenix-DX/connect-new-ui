# Flow report: Legacy_AssembleFlow

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 3 (built: 3, Assemble_BrowseByCountry, AssembleEvents, AssembleDetail; not built: none) |
| Own blocks | none: the screens wrap blocks of `Connect2_Assemble_MUI` (section 4) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/…`, KB page `ui/legacy-assemble.md` and the `Connect2_Assemble_MUI` UI pages, TST compiled code of the 3 screens and of 16 `Connect2_Assemble_MUI` blocks (`tst_source.py`), `migration/knowledge/flag-values-tst.json` |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in section 6. |

Short names of the TST files in this report: AB = `UBTConnect.Legacy_AssembleFlow.Assemble_BrowseByCountry.mvc.js`,
AE = `UBTConnect.Legacy_AssembleFlow.AssembleEvents.mvc.js`, AD = `UBTConnect.Legacy_AssembleFlow.AssembleDetail.mvc.js`,
and `<Block>` = `Connect2_Assemble_MUI.Assemble.<Block>.mvc.js`. Line numbers are lines of `tst_source.py show`.

## 1. Summary

- Counts by verdict: match 143 · partial 2 · missing 0 · differs 0 · mock-only 8 · n/a 6 · unclear 0 (same as `checklist.json`).
- **F1** (minor): the sticky Cancel / Apply bar of `ScreenBlock_Assemble_Filter` and of `Assemble_FilterSheet` has
  `animate: true` on TST; React renders the bar without the show/hide animation.
- No other finding. The DEV model has meeting-note elements on AssembleDetail (data action `GetAssembleNotes`,
  `NoteListActions`, `NotesSheet`, four handlers) that TST does not have; React follows TST (section 6.1).
- Three handlers are dead on TST and React does not port them: `Handler_EventNotFound` (never raised), the
  `ShareEntity_ByURL` branch (needs the Cordova social-sharing plugin) and `Handler_AssyncException` (its trigger is
  commented out in the compiled list block). KB rule BR-C2LEG-065 describes the dead path as live: K1.
- Status: in React a user can browse the countries and localities and pick a subdivision. The meeting list shows
  the time tags and the type filter drawer, and it pages on scroll. A meeting shows its notes, attendee halls,
  contacts and virtual-meeting link. The user can bookmark or share a household and e-mail a contact. The server
  side is mocked (8 rows).

## 2. Screens

### 2.1 Assemble_BrowseByCountry

Route `/UBTConnect/Assemble_BrowseByCountry`, page `app/src/pages/Assemble_BrowseByCountry/Assemble_BrowseByCountryPage.tsx`,
block flows in `hooks/useAssembleFilter.ts` and `hooks/assembleFilterState.ts`. Board: `build`, built (user, 2026-10-16).
The screen is a wrapper: `CommonUI_InsideLayout` and `ScreenBlock_Assemble_Filter`. The block rows are in section 4.1.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | roles, inputs, lifecycle | Registered, UBTOne_User; no inputs; no local variables; no lifecycle | route with inputs []; MEMBER_ROUTE (member, enforce) | `match` | AB:58 (setInputs empty); pack/app.md |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 030 | client variables of the pack (App_PIN_BiometricEnabled, App_Policies_*, Directory_Updates_*, IsNavigateToHomeOnBack) | read and written by the shell | - | `n/a` | owned by flow App_Common (shell), see its report |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 002 | CommonUI_InsideLayout | no arguments | `<CommonUiLayout id="$b1" />` | `match` | AB:122-141; Assemble_BrowseByCountryPage.tsx:35 |
| 003 | ScreenBlock_Assemble_Filter | no arguments; placeholders Menu, CommonUI_Elements empty | `<AssembleFilterView id={FILTER_BLOCK_ID} …/>` | `match` | AB:143-190; Assemble_BrowseByCountryPage.tsx:36-49 |

**Screen actions**

| Id | Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 004 | Assemble_FilterCancel (event Cancel) | AllowUpcomingNavigation; navigate Previous Screen (UseHistory) | `allowUpcomingNavigation(); navigateBack();` | `match` | AB:272-283; Assemble_BrowseByCountryPage.tsx:21-24 |
| 005 | Assemble_FilterNavigateToLocality (event NavigateToSubdivision) | navigate AssembleEvents(IsUserSubdivision, ShowBackNavigation=True, SubdivisionId) | navigate('/UBTConnect/AssembleEvents', {ShowBackNavigation: true, SubdivisionId, IsUserSubdivision}) | `match` | AB:234-239; Assemble_BrowseByCountryPage.tsx:25-31. TST transition Default, pack says Inherited (section 6.1) |

**Validations**: in the block (section 4.1, row 006). **Business logic**: in the block (section 4.1).

**Strings**: "Browse by Country", "Filter by Locality", "No results found", "Cancel", "Apply" match (rows 150, 026).

### 2.2 AssembleEvents

Route `/UBTConnect/AssembleEvents`, page `app/src/pages/AssembleEvents/AssembleEventsPage.tsx`, inputs in `inputs.ts`.
Board: `build`, built (user, 2026-10-16). Wrapper of `ScreenBlock_AssembleEvents` with a `BottomSheet` that hosts
`Assemble_FilterSheet`. Block rows: sections 4.3 to 4.6.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 031 | roles, inputs | Registered, UBTOne_User; SubdivisionId: Long Integer; ShowBackNavigation: Boolean (False); IsUserSubdivision: Boolean = True | route inputs [SubdivisionId, ShowBackNavigation, IsUserSubdivision]; inputs.ts | `match` | AE:23-35, :82-90; AssembleEventsPage.tsx:79-80 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 032 | local UseNewFilterSheet | Boolean, default False, never assigned | `useState(false)` | `match` | AE:13-15; AssembleEventsPage.tsx:94-95; BR-UBTCON-622 |
| 033 | local AssembleFilterBottomSheet_Id | Text, set by the Initialized event | `useState('')`, `onInitialized={setSheetId}` | `match` | AE:16-18, :463-480; AssembleEventsPage.tsx:93, :121 |
| 034 | inputs SubdivisionId, IsUserSubdivision written by Handler_AssembleFilterSheetOnSelectSubdivision | assign both, then BottomSheetClose | setSubdivisionId; setIsUserSubdivision; bottomSheetClose(sheetId) | `match` | AE:515-525; AssembleEventsPage.tsx:127-131 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 035 | CommonUI_InsideLayout | no arguments | `<CommonUiLayout id="$b1" />` | `match` | AE:160-176; AssembleEventsPage.tsx:99 |
| 036 | ScreenBlock_AssembleEvents | IsUserSubdivision, ShowBackNavigation, SubdivisionId | the three props | `match` | AE:181-185; AssembleEventsPage.tsx:100-103 |
| 037 | placeholder BottomBar: BottomBarMenu | no arguments | `bottomBar={<BottomBar id="$b3" />}` | `match` | AE:245-266; AssembleEventsPage.tsx:59 |
| 038 | BottomSheet #BottomSheet_AssembleFilter | Title="Test", CloseOnClickOutsite=True; event Initialized; footer empty | `<ConnectBottomSheet title="Test" closeOnClickOutsite onInitialized={setSheetId}>` | `match` | AE:267-300, :348 (footer = PlaceholderContent.Empty); AssembleEventsPage.tsx:117-121. DEV names the OutSystemsUI block, TST uses `UBTConnectLibrary.ConnectPatterns.BottomSheet` (section 6.1); React ConnectBottomSheet.tsx:1 has that origin |
| 039 | Assemble_FilterSheet in the sheet Content | events Cancel, NavigateToSubdivision | `<AssembleFilterSheetBlock onCancel onNavigateToSubdivision>` | `match` | AE:302-330; AssembleEventsPage.tsx:122-133 |

**Screen actions**

| Id | Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 040 | Handler_NavigateTo_AssembleDetail | navigate AssembleDetail(EventId, SeriesId, Start) | navigate('/UBTConnect/AssembleDetail', {Start: dateTimeParam(start), EventId, SeriesId}) | `match` | AE:553-577; AssembleEventsPage.tsx:112-115. TST transition Default |
| 041 | Handler_NavigateTo_MyCalendar | navigate MyEntertaining(MyCalendarEventSourceId = Assemble) | navigate with MY_CALENDAR_EVENT_SOURCE_ASSEMBLE = 'event-assemble' | `match` | AE:438-455; AssembleEventsPage.tsx:17, :109-111; pack/references.md (Type_MyCalendarEventSource.Assemble = "event-assemble") |
| 042 | Handler_NavigateTo_AssembleLocationFilters: If UseNewFilterSheet | the condition | `if (useNewFilterSheet)` | `match` | AE:391; AssembleEventsPage.tsx:106 |
| 043 | … true branch | BottomSheetOpen(AssembleFilterBottomSheet_Id) | bottomSheetOpen(sheetId) | `match` | AE:393-394; AssembleEventsPage.tsx:106. Never taken on TST (row 032); BR-UBTCON-622 |
| 044 | … false branch | navigate Assemble_BrowseByCountry | navigate('/UBTConnect/Assemble_BrowseByCountry') | `match` | AE:399-400; AssembleEventsPage.tsx:107 |
| 045 | Handler_AssembleFilterSheetInitialized | AssembleFilterBottomSheet_Id = Id | onInitialized={setSheetId} | `match` | AE:463-482; AssembleEventsPage.tsx:121 |
| 046 | Handler_AssembleFilterSheetOnCancel | BottomSheetClose(id) | bottomSheetClose(sheetId) | `match` | AE:411-436; AssembleEventsPage.tsx:124-126 |
| 047 | Handler_AssembleFilterSheetOnSelectSubdivision | assign SubdivisionId, IsUserSubdivision; BottomSheetClose | the same three steps | `match` | AE:499-545; AssembleEventsPage.tsx:127-131 |

**Validations**: none on the screen. **Business logic**: in the blocks.

**Strings**: "Test" matches (AE:267-300; AssembleEventsPage.tsx:119).

### 2.3 AssembleDetail

Route `/UBTConnect/AssembleDetail`, page `app/src/pages/AssembleDetail/AssembleDetailPage.tsx`, inputs in `inputs.ts`.
Board: `build`, built (user, 2026-10-16; no-capture, built from the compiled code). Wrapper of `ScreenBlock_AssembleDetail`
and a household `ShareSheet`. Block rows: sections 4.7 to 4.10.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 087 | roles, inputs | Registered, UBTOne_User; EventId: Text (mandatory); SeriesId: Text; Start: Date Time; AssembleEventTypeTile: Text | route inputs [EventId, SeriesId, Start, AssembleEventTypeTile]; inputs.ts | `match` | AD:22-45, :87-101; AssembleDetailPage.tsx:46-47. TST does not enforce the mandatory EventId |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 088 | locals IsEventNotFound, IsShareOpen, ShareableObjectId | False, False, "" | useViewState('IsShareOpen', false), useViewState('ShareableObjectId', '') | `match` | AD:13-21; AssembleDetailPage.tsx:54-55. IsEventNotFound: row 108 |
| 089 | local IsAddNote | Boolean; set by OpenNoteSheet | not built | `match` | DEV only; absent on TST (AD:13-21 has three variables); section 6.1 |
| 090 | data action GetAssembleNotes (GetNotesByItemId, AtStart) | ItemId=EventId, NoteCategoryId=AssembleEvent | not built | `match` | DEV only; TST `dataFetchActionNames = []` (AD:370); section 6.1 |
| 104 | flag behind GetHasCarouselEnabled | Permissions_FF_Wrappers; TST value true | useFlagOn('C2EnableCarousel'); registry default true | `match` | AD:493-494; flag-values-tst.json:11; registry.ts:99-106; AssembleDetailPage.tsx:49 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 091 | CommonUI_InsideLayout | no arguments | `<CommonUiLayout id="$b1" />` | `match` | AD:176-192; AssembleDetailPage.tsx:63 |
| 092 | ScreenBlock_AssembleDetail | AssembleEventTypeTile, EventId, SeriesId, Start | the four inputs; key EventId-SeriesId-Start restarts the block | `match` | AD:193-199; AssembleDetailPage.tsx:64-67 |
| 093 | placeholder BottomBar: BottomBarMenu | no arguments | `bottomBar={<BottomBar id="$b3" />}` | `match` | AD:286-308; AssembleDetailPage.tsx:149 |
| 094 | placeholder MeetingNotes: NoteListActions + ItemCard_ActionBar | NoteListActions(EventId, AssembleEvent, ShowPreviewOnly=True, Notes); ItemCard_ActionBar(ShowAddNote, IsAddNoteEnabled) | not built | `match` | DEV only; the TST block instance has no MeetingNotes placeholder (AD:193-285). The meeting note on TST is Section_MeetingNotes of AssembleEventDetail (row 119); section 6.1 |
| 095 | NotesSheet(IsAddNote, EventId, Notes) | events On_NoteSheet_Closed, On_NotesChanged, On_NoteDeleted | not built | `match` | DEV only; section 6.1 |
| 096 | If False #HideInServiceStudio_BottomSheet | [DEAD BRANCH] constant False; else branch renders both sheets | ShareSheetContainer rendered always | `n/a` | dead in the model. TST has no If and renders ShareSheet directly (AD:309-325); AssembleDetailPage.tsx:103-111 |
| 097 | ShareSheet arguments | In_IsOpen=IsShareOpen, In_ShareableObjectId=ShareableObjectId, In_ShareObjectTypeId=Household | the same three props | `match` | AD:309-316; AssembleDetailPage.tsx:103-107 |

**Screen actions**

| Id | Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 098 | Handler_CloseShareSheet | IsShareOpen = False | setIsShareOpen(false) | `match` | AD:372-395; AssembleDetailPage.tsx:108-110 |
| 099 | Handler_NavigateToHousehold | navigate HouseholdDetails(HouseholdId) | navigate('/UBTConnect/HouseholdDetails', {HouseholdId}) | `match` | AD:201-210, :712-740; AssembleDetailPage.tsx:57-59, :69 |
| 100 | Handler_NavigateToHouseholdCarousel: flag off | HasCarouselEnabled false → Handler_NavigateToHousehold | `if (hasCarouselEnabled && …)` else navigateToHousehold | `match` | AD:493-497, :554; AssembleDetailPage.tsx:73, :78; BR-UBTCON-618 |
| 101 | … preload null | GetPreloadObject.Preload = NullObject → Handler_NavigateToHousehold | `ids = Array.isArray(preload) ? … : null` | `match` | AD:498-501, :554; AssembleDetailPage.tsx:71-72, :78 |
| 102 | … id in the preloaded list | CarouselHouseholdItem per id; SetPreloadObject; navigate HouseholdCarousel(In_StartingHouseholdId) | setPreloadObject({CarouselHouseholdItem: ids.map(…)}); navigate('/UBTConnect/HouseholdCarousel', {In_StartingHouseholdId}) | `match` | AD:503-540; AssembleDetailPage.tsx:73-76 |
| 103 | … id not in the list | ListIndexOf = -1 → Handler_NavigateToHousehold | navigateToHousehold(selectedHouseholdId) | `match` | AD:551-554; AssembleDetailPage.tsx:78 |
| 105 | Handler_NavigateTo_EmailContact | GetNameAndSurname_ByFullName(Event_ContactName); navigate ContactByEmailMember(9 parameters, AuditEventId=EmailHousehold, EntityType=Member) | the same split and the 9 parameters | `match` | AD:592-636; AssembleDetailPage.tsx:80-92; BR-UBTCON-259. The TST event also carries Event_ContactSurname; both ignore it (section 6.1) |
| 106 | Handler_NavigateTo_ShareObject: In_IsExternalSharing true | ShareEntity_ByURL(ObjectId, ShareObjectTypeId) | `if (isExternalSharing) return;` | `n/a` | native only: the only source is Handler_OnShareToOthers (AssembleEventDetail_AttendeeSubdivision:495, :1232), raised by the "Share to others..." item of ItemOptionsMenu behind IsShareToOThersAvailable = CheckSocialSharingPlugin (`Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc.js`:373, :522); app/src/components/bookmark/ItemOptionsMenu/README.md:38; BR-UBTCON-621 |
| 107 | … In_IsExternalSharing false | navigate LegacyShareObject(In_ObjectId, In_ShareObjectTypeId) | navigate('/UBTConnect/LegacyShareObject', {…}) | `match` | AD:424-430; AssembleDetailPage.tsx:96-99 |
| 108 | Handler_EventNotFound | IsEventNotFound = True | comment only, no variable | `n/a` | dead on TST: AssembleEventDetail defines eventNotFound$Action (AssembleEventDetail:1100) and never calls it; IsEventNotFound is written (AD:701) and never read (AD:915); AssembleDetailPage.tsx:44 |
| 109 | Handler_OnNoteDeleted, Handler_OnNotesChanged, Handler_NoteSheet_Closed, OpenNoteSheet | edit GetAssembleNotes.Out_Notes and IsAddNote | not built | `match` | DEV only; absent on TST (0 grep hits); section 6.1 |

**Validations**: none on the screen. **Business logic**: rows 100-108 above.

**Strings**: none on the screen itself; the block strings are in rows 149-150.

## 3. Blocks of the flow

The flow has no own block. The three screens wrap blocks of `Connect2_Assemble_MUI` and of the shared libraries: section 4.

## 4. Shared blocks and actions

The pack holds no logic of the referenced blocks. Every row below comes from the TST compiled code of the block
(`references.md` names the files). The React location of each block is in the first line of its sub-section.

### 4.1 ScreenBlock_Assemble_Filter (Assemble_BrowseByCountry)

React: `app/src/pages/Assemble_BrowseByCountry/components/AssembleFilterView.tsx`, `hooks/useAssembleFilter.ts`,
`hooks/assembleFilterState.ts`. KB: `Connect2_Assemble_MUI/ui/browse-by-place.md` (BR-C2LEG-062, 063, 049).

| Id | Area | Item | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|
| 010 | data | block variables CountryDetailList, TempCountryDetailList, ShowLocalitiesList, CountryCode, CountryName, SearchTerm, IsCountriesDataFetched, UserInformation, SubdivisionId | empty lists, False, "", "", "", False, empty record, NullIdentifier | the state of useAssembleFilter | `match` | ScreenBlock_Assemble_Filter:13-45; assembleFilterState.ts:51-53, :104 |
| 009 | data | ScreenTitle | "Browse by Country"; "Filter by Locality" after a country click; reset on back | BROWSE_BY_COUNTRY, FILTER_BY_LOCALITY | `match` | ScreenBlock_Assemble_Filter:13-14, :726, :846; assembleFilterState.ts:9, :11 |
| 011 | data | FetchCountries | IsCountriesDataFetched=False; Cache_UserInfo_Get; GetCacheableRegionSubscribedCountries; both lists; IsCountriesDataFetched=True | fetchCountries | `match` | ScreenBlock_Assemble_Filter:1026-1060; useAssembleFilter.ts:121-125 |
| 029 | data | server side of Cache_UserInfo_Get and GetCacheableRegionSubscribedCountries | service ActionGetCountriesBySubscription | mock contractHandler('Connect2_LegacyShared', 'ActionGetCountriesBySubscription') | `mock-only` | Assemble_BrowseByCountry/mocks.ts:10 (real, empty, error, loading); production needs ActionGetCountriesBySubscription and the user-info call (CR-Assemble_BrowseByCountry-1 for the mock user) |
| 012 | logic | OnReady | from cache: nothing; else GetCacheableUserInfo → UserInformation, then FetchCountries | `if (restored) return; write({userSubdivisionId}); await fetchCountries();` | `match` | ScreenBlock_Assemble_Filter:881-935; useAssembleFilter.ts:128-131; BR-C2LEG-049 |
| 007 | logic | OnChange_SearchTearm, empty term | reload the countries from the cache; CountryDetailList = Temp = result | `if (value === '') { fetchSubscribedCountries(); write({countryDetailList, tempCountryDetailList}) }` | `match` | ScreenBlock_Assemble_Filter:654-675; useAssembleFilter.ts:136-140 |
| 008 | logic | OnChange_SearchTearm, non-empty term | term = RemoveDiacritics(ToLower(Trim(SearchTerm))); Temp = ListFilter(Index(Name, term, 0, false, ignoreCase) <> -1) | removeDiacritics(trim.toLowerCase()); filter Name.toLowerCase().includes(term) | `match` | ScreenBlock_Assemble_Filter:679-690; assembleFilterState.ts:80-81 |
| 013 | logic | Handler_GoToBrowseCountry: InCountryCode = "" | nothing | `if (inCountryCode === '') return;` | `match` | ScreenBlock_Assemble_Filter:815; useAssembleFilter.ts:148 |
| 014 | logic | … no access | HasAccessToRegion(InCountryCode, NullIdentifier) false → ConfirmAction(FreeSubscriptionAlert) | `if (!hasAccess) { await confirmAction(ids.freeSubscriptionAlert); return; }` | `match` | ScreenBlock_Assemble_Filter:817-830; useAssembleFilter.ts:149-153 |
| 015 | logic | … access | ListFilterCountry; CountryCode, CountryName; ScreenTitle "Filter by Locality"; ShowLocalitiesList=True | `write(countryChosen(tempCountryDetailList, inCountryCode))` | `match` | ScreenBlock_Assemble_Filter:834-850; useAssembleFilter.ts:154 |
| 016 | logic | Handler_FreeSubscriptionAlert | App_Subscription_ShowUpgradePopUp | showUpgradePopUp() | `match` | ScreenBlock_Assemble_Filter:762-790; useAssembleFilter.ts:166-168 |
| 017 | logic | Handler_BackNavigation, ShowLocalitiesList true | ShowLocalitiesList=False; title reset; SubdivisionId=NullIdentifier; CountryCode=""; scroll top; PreventNavigation | dispatch(BACK_TO_COUNTRY_LIST); event.preventDefault(); scrollContentToTop() | `match` | ScreenBlock_Assemble_Filter:706-760; useAssembleFilter.ts:184-190 |
| 018 | logic | Handler_BackNavigation, ShowLocalitiesList false | the back navigation goes on | `if (!showLocalitiesList) return;` | `match` | ScreenBlock_Assemble_Filter:721; useAssembleFilter.ts:185 |
| 006 | validations | Input_SearchTearm | MaxLength=50, Mandatory=false, InputType=Search | `maxLength={50} type="search"` | `match` | ScreenBlock_Assemble_Filter:285; AssembleFilterView.tsx:96-109 |
| 026 | ui | If not ShowLocalitiesList → If IsCountriesDataFetched → If Temp not empty: list, else DIV_NoResultsFound; else Spinner | three nested Ifs; "No results found"; Spinner ShowLoader = not IsCountriesDataFetched | the same structure | `match` | ScreenBlock_Assemble_Filter:226-227, :314, :357-361, :366-368; AssembleFilterView.tsx:84-131 |
| 025 | ui | LocalityListDetail(HideHeader=True, CountryDetailList=Temp) | click → Handler_GoToBrowseCountry(CountryCode) | `<LocalityListDetail hideHeader countryDetailList={countries} onOnClickGoToBrowseCountry>` | `match` | ScreenBlock_Assemble_Filter:316-335; AssembleFilterView.tsx:115-122 |
| 024 | ui | Assemble_FilterLocalityByCountry(CountryName, CountryCode) when ShowLocalitiesList | events FreeSubscriptionAlert, Cancel, SelectedSubdivision | `<AssembleLocalityFilter …>` with the three handlers | `match` | ScreenBlock_Assemble_Filter:388-436; AssembleFilterView.tsx:138-145 |
| 027 | ui | BackNavigationHandler | event BackNavigation → Handler_BackNavigation | `<BackNavigationHandler onBackNavigation>` | `match` | ScreenBlock_Assemble_Filter:469-488; Assemble_BrowseByCountryPage.tsx:48 |
| 028 | ui | Dialog_AccessRestrictedAction_Legacy "FreeSubscriptionAlert" | the dialog | `<DialogAccessRestrictedActionLegacy id={freeSubscriptionAlert}>` | `match` | ScreenBlock_Assemble_Filter:452-466; AssembleFilterView.tsx:147 |
| 019 | ui | DIV_StickyBottom visible | CountryCode <> "" | isBottomBarVisible = countryCode !== '' | `match` | ScreenBlock_Assemble_Filter:507; assembleFilterState.ts:109 |
| 151 | ui | DIV_StickyBottom animate | `animate: true` | the bar is rendered or not, no animation (comment at :152) | `partial` | **F1** minor. ScreenBlock_Assemble_Filter:505-510; AssembleFilterView.tsx:152-154 |
| 021 | ui | ButtonApply Enabled | not (SubdivisionId = NullIdentifier()) | isApplyEnabled = subdivisionId !== NULL_ID | `match` | ScreenBlock_Assemble_Filter:562-564; assembleFilterState.ts:112 |
| 020 | actions | ButtonApply → OnClickApply | Trigger NavigateToSubdivision(SubdivisionId, SubdivisionId = UserInformation.Subdivision.Id) | onNavigateToSubdivision(subdivisionId, isUserSubdivision(current)) | `match` | ScreenBlock_Assemble_Filter:570-580, :985-1016; useAssembleFilter.ts:177-180 |
| 022 | actions | DIV_Cancel button → Cancel | Trigger Cancel | onCancel | `match` | ScreenBlock_Assemble_Filter:519-537; useAssembleFilter.ts:171-173 |
| 023 | actions | event SelectedSubdivision of the locality filter | SubdivisionId = In_SubdivisionId | `dispatch({ subdivisionId })` | `match` | ScreenBlock_Assemble_Filter:949-983; useAssembleFilter.ts:167-169 |

### 4.2 Assemble_FilterLocalityByCountry and Assemble_FilterSubdivisionByLocality

React: `app/src/components/assemble/AssembleLocalityFilter/AssembleLocalityFilter.tsx`,
`app/src/components/assemble/AssembleSubdivisionFilter/AssembleSubdivisionFilter.tsx`. KB: BR-C2LEG-063, 035 to 037.

| Id | Area | Item | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|
| 083 | logic | OnReady / FetchLocalities | ScrollToElement(DIV_Title); not from cache: GetCacheableUserInfo, GetCacheableCountryInfo → FullLocalitiesList | getCacheableCountryInfo(countryCode) | `match` | Assemble_FilterLocalityByCountry:564-682; AssembleLocalityFilter.tsx:68 |
| 084 | logic | OnClickLocality | HasAccessToRegion(CountryCode, LocalityId); no access → FreeSubscriptionAlert; same locality again clears the selection; Trigger SelectedSubdivision | `if (!(await hasAccessToRegion(countryCode, localityId)))` … | `match` | Assemble_FilterLocalityByCountry:731-808; AssembleLocalityFilter.tsx:92 |
| 085 | logic | OnChange_SearchTerm | empty: reload; else RemoveDiacritics filter on Name | the same; maxLength 50 | `match` | Assemble_FilterLocalityByCountry:810-870; AssembleLocalityFilter.tsx:85, :136 |
| 086 | logic | FetchSubdivisions / OnChange_SearchTerm / OnReady | GetLocality(LocalityId) → LocalitySubdivisionsList; RemoveDiacritics search | getLocality, listFilterByName | `match` | Assemble_FilterSubdivisionByLocality:417-570; AssembleSubdivisionFilter.tsx:12, :49, :65 |

### 4.3 ScreenBlock_AssembleEvents

React: `app/src/pages/AssembleEvents/components/AssembleEventsView.tsx`, `hooks/useAssembleEvents.ts`.
KB: `Connect2_Assemble_MUI/ui/meeting-list.md`.

| Id | Area | Item | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|
| 048 | data | SubdivisionName; data action GetSubdivisionName(SubdivisionId, ShowBackNavigation, IsUserSubdivision) | output SelectedSubdivisionName | fetchSubdivisionName({…}) | `match` | ScreenBlock_AssembleEvents:33-35, :54-57, :489-517; useAssembleEvents.ts:67-73 |
| 153 | data | server side of GetSubdivisionName | server data action | mock | `mock-only` | AssembleEvents/mocks.ts:48; production needs ScreenBlock_AssembleEvents/DataActionGetSubdivisionName |
| 049 | logic | OnReady, restored from cache | nothing | `if (restored) return;` | `match` | ScreenBlock_AssembleEvents:604-607; useAssembleEvents.ts:65 |
| 050 | logic | OnReady, SubdivisionId = NullIdentifier | GetCacheableUserInfo; SubdivisionName = Subdivision.Name | `isUsersOwnSubdivision(subdivisionId) ? (await fetchUserSubdivision()).name` | `match` | ScreenBlock_AssembleEvents:607-620; useAssembleEvents.ts:67-68 (React treats "0" and "" as the null id, userSubdivision.ts:19); BR-C2LEG-050 |
| 051 | logic | OnReady, other SubdivisionId | Refresh GetSubdivisionName | fetchSubdivisionName | `match` | ScreenBlock_AssembleEvents:624-640; useAssembleEvents.ts:69-73 |
| 052 | logic | GetSubdivisionNameOnAfterFetch | SubdivisionName = SelectedSubdivisionName | `dispatch({ subdivisionName })` | `match` | ScreenBlock_AssembleEvents:520-540; useAssembleEvents.ts:74 |
| 053 | actions | Handler_AssyncException (event AssyncException of AssembleSummary_List) | raise UserException UnknownException; but the list block never triggers the event: its JS error node calls activeScreenController.handleError(ex) and the call `$actions.ThrowAssyncException` is commented out | no handler; the fetch errors go to raiseToFlowHandler | `match` | AssembleSummary_List:1760-1767; ScreenBlock_AssembleEvents:544-577; useAssembleSummaryList.ts:141-193. K1 |
| 057 | ui | MenuIcon | MenuAction Back when ShowBackNavigation, else Menu | `menuAction={showBackNavigation ? Back : Menu}` | `match` | ScreenBlock_AssembleEvents:226; AssembleEventsView.tsx:51 |
| 054 | ui | title: DIV_Assemble, DIV_SMName | DIV_Assemble visible = IsUserSubdivision; class "text-align-center" + (ShowBackNavigation and not IsUserSubdivision ? "" : " font-size-0-75em") | the same condition and class expression | `match` | ScreenBlock_AssembleEvents:253, :272; AssembleEventsView.tsx:55-66 |
| 055 | ui | header right: calendar icon, place link | If IsUserSubdivision: icon menu-icon-my-calendar → NavigateTo_MyCalendarAssemble; link connect-icon-place → NavigateTo_AssembleLocationFilters | `isUserSubdivision ? (…) : null` with the two handlers | `match` | ScreenBlock_AssembleEvents:288-365; AssembleEventsView.tsx:70-92 |
| 056 | ui | AssembleSummary_List(SubdivisionId) | events NavigateTo_AssembleDetail, AssyncException | useAssembleSummaryList({subdivisionId}) and the list view | `match` | ScreenBlock_AssembleEvents:386-420; AssembleEventsPage.tsx:54-57, :67-70 |

### 4.4 AssembleSummary_List, AssembleSummary_List__Header, AssembleSummary_FilterDrawer

React: `app/src/pages/AssembleEvents/components/AssembleSummary_List.tsx`, `AssembleSummary_List__Header.tsx`,
`AssembleSummary_FilterDrawer.tsx`, `AssembleSummary_SkeletonList.tsx`, `HorizontalTags.tsx`, `NC_ErrorScreen.tsx`,
`hooks/useAssembleSummaryList.ts`, `hooks/assembleSummaryListState.ts`. KB: BR-C2LEG-050 to 058, 065.

| Id | Area | Item | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|
| 058 | data | block variables | MaxRecords=10; SkeletonList_Length=3; EventList_PageNumber, HasMoreRecords, IsFiltered, IsShow_FilterDrawer, LocalSubdivisionId, DeviceTimezone, IsHeaderLoading | MAX_RECORDS = 10; pageNumber 1, hasMoreRecords false, localSubdivisionId '0' | `match` | AssembleSummary_List:12-110; assembleSummaryListState.ts:21, :104-107 |
| 059 | data | GetAssembleEventTypes | data action; fetch decided in OnReady | refreshEventTypes | `match` | AssembleSummary_List:648-675; useAssembleSummaryList.ts:114 |
| 154 | data | server side of GetAssembleEventTypes | server data action | mock | `mock-only` | AssembleEvents/mocks.ts:22 |
| 060 | data | GetAssembleMeetingSummaryList | paged by EventList_PageNumber, MaxRecords, range, subdivision | refreshSummaryList({page, local, append}); EventList_RangeFrom, EventsList_RangeTo, MaxRecords | `match` | AssembleSummary_List:676-705; useAssembleSummaryList.ts:94; assembleSummaryListState.ts:186-189 |
| 155 | data | server side of GetAssembleMeetingSummaryList | server data action | mock (real, nomeetings, empty, error, loading) | `mock-only` | AssembleEvents/mocks.ts:25 |
| 062 | logic | OnInitialize | time option default UpcomingMeetings; SetDateRangeByFilterOptionId; BuildHeaderMenu; SetFilterLabel; SetDeviceTimezone | initial state: UpcomingMeetings, filterLabel, deviceTimezone = getIANATimezone() | `match` | AssembleSummary_List:1369-1405; assembleSummaryListState.ts:92-102 |
| 061 | logic | OnReady | from cache and both fetched: no fetch; else fetch what is missing | restored handling, localSubdivisionSet, refreshSummaryList | `match` | AssembleSummary_List:732-760; useAssembleSummaryList.ts:130-143; BR-C2LEG-049 |
| 063 | logic | SetLocalSubdivisonId | SubdivisionId = NullIdentifier: user subdivision; else SubdivisionId | `let local = …; write({type:'localSubdivisionSet', …})` | `match` | AssembleSummary_List:992-1037; useAssembleSummaryList.ts:130-139 |
| 064 | logic | Refresh_EventList | selected types; IsFiltered; SetFilterLabel; clear; page 1; date range; timezone; Refresh | refreshEventList; isFiltered = some(IsSelected); pageNumber 1 | `match` | AssembleSummary_List:1069-1135; useAssembleSummaryList.ts:146-156; assembleSummaryListState.ts:158-161 |
| 065 | logic | OnScrollEnding | fetched and HasMoreRecords: PageNumber+1, refresh | `if (summaryStatus !== 'fetched' || !hasMoreRecords) return; page + 1` | `match` | AssembleSummary_List:1137-1183; useAssembleSummaryList.ts:188-193; BR-C2LEG-052 |
| 066 | logic | GetAssembleMeetingSummaryListOnAfterFetch | DateTime offset per row; append; HasMoreRecords = not empty and Length >= MaxRecords; IsHeaderLoading=False | `hasMoreRecords: rows.length > 0 && !(rows.length < MAX_RECORDS)`; offsetDateTimeByUserUTCOffset | `match` | AssembleSummary_List:1293-1343; assembleSummaryListState.ts:135, :195-196 |
| 073 | logic | SetDateRangeByFilterOptionId | GetAssembleEventListDateRangeFilter + offsets → RangeFrom/To | the same | `match` | AssembleSummary_List:1452-1495; assembleSummaryListState.ts:186-187; useAssembleSummaryList.ts:5; BR-C2LEG-051 |
| 074 | logic | BuildHeaderMenu / SetFilterLabel / GetAssembleEventTypesOnAfterFetch | header menu; label by GeAssembleSummaryListFilterLabel; types with IsCurrentlySelected | filterLabel; HeaderMenu in the header component | `match` | AssembleSummary_List:812-851, :898-949, :951-990; assembleSummaryListState.ts:102, :159; BR-C2LEG-054 |
| 067 | logic | OnClick_AssembleMeetingSummaryCard: IsUnavailable | no navigation | `if (meeting.IsUnavailable) return;` | `match` | AssembleSummary_List:1201; useAssembleSummaryList.ts:198; BR-C2LEG-053 |
| 068 | actions | OnClick_AssembleMeetingSummaryCard: navigate | RememberFocusedScrollAnchor; SetPreloadObject(AssembleEventSummary, PreloadedFromListIndex); Trigger NavigateTo_AssembleDetail | `setPreloadObject({ AssembleEventSummary: meeting, PreloadedFromListIndex: index })` | `match` | AssembleSummary_List:1205-1240; useAssembleSummaryList.ts:199 |
| 069 | actions | HorizontalTags OnClickTag | time option = tag id; Handler_ApplyFilters | onClickTag | `match` | AssembleSummary_List:1408-1450; useAssembleSummaryList.ts:175-177 |
| 070 | actions | Handler_ApplyFilters | EventList_Filter = filter; IsShow_FilterDrawer = False; Refresh_EventList | `{ ...state, filter, isShowFilterDrawer: false }`; applyFilters | `match` | AssembleSummary_List:1245-1291; assembleSummaryListState.ts:166; useAssembleSummaryList.ts:160 |
| 071 | actions | ToggleFilterDrawer | IsShow_FilterDrawer = not IsShow_FilterDrawer | `isShowFilterDrawer: !state.isShowFilterDrawer` | `match` | AssembleSummary_List:1345-1367; assembleSummaryListState.ts:170 |
| 072 | actions | Handler_ClearFilters | every IsSelected = False; Refresh_EventList | onClearFilters; withoutSelectedTypes | `match` | AssembleSummary_List:853-896; useAssembleSummaryList.ts:181-186; assembleSummaryListState.ts:81, :116 |
| 075 | ui | AssembleSummary_List__Header | inputs FilterLabel, ListHeaderLabel, ShowClear, IsLoading; click toggles the drawer | the same props; onClick | `match` | AssembleSummary_List__Header:13-33; AssembleSummary_List__Header.tsx:11-14, :38; BR-C2LEG-056 |
| 144 | ui | AssembleSummary_SkeletonList while not fetched | SkeletonListLength = SkeletonList_Length = 3 | SKELETON_LIST_LENGTH = 3; `!isSummaryFetched &&` | `match` | AssembleSummary_List:80-85; `Connect2_Assemble_MUI.AssembleSkeleton.AssembleSummary_SkeletonList.mvc.js`:15; AssembleSummary_List.tsx:55, :152-153 |
| 145 | ui | NC_ErrorScreen when the fetched list is empty | "We were unable to find any meetings to display." | the same text | `match` | AssembleSummary_List:374; AssembleSummary_List.tsx:115-118 |
| 076 | logic | FilterDrawer ApplySearchFilter | empty key: all types; else ToUpper(Title) contains ToUpper(key) | `types.filter(t => Title.toUpperCase().includes(key.toUpperCase()))` | `match` | AssembleSummary_FilterDrawer:704-769; AssembleSummary_FilterDrawer.tsx:69-74 |
| 079 | logic | FilterDrawer OnParametersChanged | IsLoading = empty types; on open: Original = filter, SearchKey = "", rebuild FilteredEventTypes | wasOpen; on open: original = filter, searchKey '', filtered = all types | `match` | AssembleSummary_FilterDrawer:824-895; AssembleSummary_FilterDrawer.tsx:52-66 |
| 146 | ui | FilterDrawer Apply Enabled | CompareAssembleFilters(filter, Original).IsDifferent | `disabled={!compareAssembleFilters(filter, original)}` | `match` | AssembleSummary_FilterDrawer:494-496; AssembleSummary_FilterDrawer.tsx:209; BR-C2LEG-055 |
| 077 | actions | FilterDrawer Apply | SelectedAssembleMeetingFilters = filter; ScrollToTop; Trigger ApplyFilters | scrollToTop; onClose; onApplyFilters | `match` | AssembleSummary_FilterDrawer:657-702; AssembleSummary_FilterDrawer.tsx:80-81 |
| 078 | actions | FilterDrawer Clear link, checkbox OnChange, search OnChange, OnClear, ActionMenu OnClose | all IsSelected = False then ApplySearchFilter; checkbox updates the filter; SearchKey set; click outside Block_FilterContent closes | the same handlers | `match` | AssembleSummary_FilterDrawer:617-655, :771-796, :897-975, :1002-1055; AssembleSummary_FilterDrawer.tsx:47, :64, :88-94, :103-130 |

### 4.5 AssembleSummaryCard, AssembleCommon_VirtualMeetingURL, AssembleCommon_VirtualMeetingDetails

React: `app/src/components/assemble/AssembleSummaryCard/AssembleSummaryCard.tsx`,
`app/src/containers/AssembleSummaryCard/AssembleSummaryCardContainer.tsx`, `app/src/components/assemble/VirtualMeetingUrl/VirtualMeetingUrl.tsx`,
`app/src/components/assemble/VirtualMeetingDetails/VirtualMeetingDetails.tsx`. KB: BR-C2LEG-057 to 059.

| Id | Area | Item | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|
| 136 | ui | card image, IsListItem layout | IsPBCC: BGTAudioRecording image, else virtual or hall photo; Card_Visual when not IsListItem; round image on the right when IsListItem | virtualOrHallPhoto; the two layouts | `match` | AssembleSummaryCard:181-188, :463-472; AssembleSummaryCard.tsx:71-98, :121-133 |
| 135 | ui | invitee row | IsUnavailable: "Invitee numbers unavailable at the moment", else the counts | the same | `match` | AssembleSummaryCard:441; AssembleSummaryCard.tsx:63-64, :115-120 |
| 134 | ui | Placeholder_Location | visible = not IsUnavailable; IsVirtual: AssembleCommon_VirtualMeetingURL, else the address link | `!s.IsUnavailable && (s.IsVirtual ? <VirtualMeetingUrl/> : <OSLink onClick=onAddressClick>)` | `match` | AssembleSummaryCard:515, :553-561; AssembleSummaryCard.tsx:134-168 |
| 137 | actions | LinkAddressOnClick, web branches | NavigateToMaps; iPhoneBrowser: comgooglemapsurl://?q=; else https://www.google.com/maps/dir/?api=1 with query; error GoogleMapsNotInstalled "Please install and enable Google Maps" | navigateToMaps; pageRedirect of the same URLs; UserException GoogleMapsNotInstalled | `match` | AssembleSummaryCard:649-756; AssembleSummaryCardContainer.tsx:20-35; BR-C2LEG-058 |
| 138 | actions | LinkAddressOnClick, AndroidNative branch | ExternalApp LaunchWithData, package com.google.android.apps.maps | returns | `n/a` | native only (Cordova app launcher). AssembleSummaryCard:694-712; AssembleSummaryCardContainer.tsx:25 |
| 139 | ui | VirtualMeetingURL text and link | URL = "": "Link is not available, refer to local signal chat"; else "Join with <platform>: " and the link "[Tap here]" target _blank | the same | `match` | AssembleCommon_VirtualMeetingURL:226, :239-242, :266; VirtualMeetingUrl.tsx:80-86; BR-C2LEG-059 |
| 140 | ui | VirtualMeetingURL info icon | shown when URL, Id or Password is not empty | the same condition | `match` | AssembleCommon_VirtualMeetingURL:279; VirtualMeetingUrl.tsx:93 |
| 141 | actions | MeetingInfo_Toggle | ConfirmAction(MeetingInfo): dialog with VirtualMeetingDetails and "Close" | onMeetingInfoToggle(dialogId) → confirmAction(dialogId); the dialog slot | `match` | AssembleCommon_VirtualMeetingURL:414-424; VirtualMeetingUrl.tsx:64-65, :106-115; AssembleSummaryCardContainer.tsx:60 |
| 142 | actions | LinkVirtualAddressOnClick | CheckSupportedBrowserVersion; OpenExternalURL(URL, IsApple) | the same two calls | `match` | AssembleCommon_VirtualMeetingURL:448-459; VirtualMeetingUrl.tsx:67-70 |
| 143 | ui | VirtualMeetingDetails rows | Meeting Link, Meeting ID, Passcode: each visible when its value is not empty | the same | `match` | AssembleCommon_VirtualMeetingDetails:190, :201, :222; VirtualMeetingDetails.tsx:31-41 |

### 4.6 Assemble_FilterSheet (AssembleEvents bottom sheet)

React: `app/src/pages/AssembleEvents/components/Assemble_FilterSheet.tsx`, `hooks/useAssembleFilterSheet.ts`,
`hooks/assembleFilterSheetState.ts`. The sheet is never opened on TST (row 032); its logic is built like the block.

| Id | Area | Item | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|
| 080 | logic | block variables, OnChange, GoToBrowseCountry, BackToCountries, FetchCountries, OnClickApply | the same flow as ScreenBlock_Assemble_Filter (Handler_GoBackToCountries, Handler_SelectedSubdivision) | hasAccessToRegion(countryCode, NULL_SUBDIVISION_ID); showUpgradePopUp; onApply(subdivisionId, subdivisionId === userSubdivisionId); removeDiacritics | `match` | Assemble_FilterSheet:569-950; useAssembleFilterSheet.ts:119, :150, :156-158; assembleFilterSheetState.ts:64 |
| 081 | validations | Input_SearchTerm | maxLength 50, enabled | `maxLength={50}` | `match` | Assemble_FilterSheet:262-268; Assemble_FilterSheet.tsx:107-114 |
| 082 | ui | ButtonApply Enabled, Cancel | not (SubdivisionId = NullIdentifier()); Cancel triggers Cancel | `disabled={!isApplyEnabled}`; onCancel | `match` | Assemble_FilterSheet:512-514; Assemble_FilterSheet.tsx:159, :167 |
| 152 | ui | DIV_StickyBottom animate | `animate: true` | rendered when isBottomBarVisible, no animation | `partial` | **F1** minor. Assemble_FilterSheet:455; Assemble_FilterSheet.tsx:152-157 |

### 4.7 ScreenBlock_AssembleDetail

React: `app/src/pages/AssembleDetail/components/AssembleDetailView.tsx`, `hooks/useAssembleDetail.ts`,
`hooks/assembleDetailState.ts`, `components/FocusScrollAnchorOnBack.tsx`. KB: BR-C2LEG-064.

| Id | Area | Item | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|
| 110 | data | block variables | CurrentItemPosition; AssembleDetailsPreloading (AssembleEventSummary.AssembleEventType.Title, PreloadedFromListIndex); inputs EventId, SeriesId, Start, AssembleEventTypeTile | assembleDetailState.ts; state.preloadedFromListIndex | `match` | ScreenBlock_AssembleDetail:13-40; AssembleDetailPage.tsx:128, :146 |
| 111 | logic | OnInitialize | from cache: skip; else OnInitialize_Preload (GetPreloadObject, AssignFromObject); empty preloaded title: Title = AssembleEventTypeTile | useAssembleDetail | `match` | ScreenBlock_AssembleDetail:442-497, :540-592; useAssembleDetail.ts:45; AssembleDetailPage.tsx:128 |
| 112 | actions | AssembleDetailUpdateTitle (event UpdateTitle) | Title = "": skip; else preloaded Title = Title | onUpdateTitle | `match` | ScreenBlock_AssembleDetail:499-538; useAssembleDetail.ts:45 |
| 113 | ui | header: MenuIcon, title expression, FocusScrollAnchorOnBack(ListIndex, ScrollAnchorId) | Title = preloaded AssembleEventType.Title; ScrollAnchorId = PreloadedFromListIndex as text | title={state.title}; scrollAnchorId={String(state.preloadedFromListIndex)} | `match` | ScreenBlock_AssembleDetail:208-240, :368-385; AssembleDetailPage.tsx:130-148 |
| 114 | ui | AssembleEventDetail(SeriesId, EventId, Start) and its events | NavigateTo_Household, Navigateto_EmailContact, NavigateTo_HouseholdCarousel(ItemPosition, SelectedHouseholdId), EventNotFound, NavigateTo_ShareObject, UpdateTitle | `<AssembleEventDetail inputs … {...events}>` | `match` | ScreenBlock_AssembleDetail:260-352; AssembleDetailPage.tsx:134-140. ItemPosition is received (AD:245) and unused on TST; React ignores it (section 6.1) |

### 4.8 AssembleEventDetail

React: `app/src/pages/AssembleDetail/components/AssembleEventDetail.tsx`, `hooks/useAssembleEventDetail.ts`,
`hooks/assembleEventDetailState.ts`. KB: `Connect2_Assemble_MUI/ui/event-detail.md` (BR-C2LEG-047, 048, 061, 049).

| Id | Area | Item | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|
| 115 | data | GetAssembleEvent(EventId, SeriesId, Start, DeviceTimezone) | fetched on ready unless restored and fetched | `write({ getAssembleEvent: result })` | `match` | AssembleEventDetail:901-929, :962-1018; useAssembleEventDetail.ts:78-82; BR-C2LEG-049 |
| 156 | data | server side of GetAssembleEvent | server data action | mock (real, notfound, unavailable, error, loading) | `mock-only` | AssembleDetail/mocks.ts:56 |
| 116 | logic | OnInitialize | DeviceTimezone = GetIANATimezone | initialAssembleEventDetailState(getIANATimezone()) | `match` | AssembleEventDetail:932-960; useAssembleEventDetail.ts:52 |
| 117 | logic | OnAfterFetch: IsUnavailable | ShowUnknownErrorMessage | showUnknownErrorMessage() | `match` | AssembleEventDetail:1036-1046; useAssembleEventDetail.ts:81-84; BR-C2LEG-047 |
| 118 | logic | OnAfterFetch: available | DateTime offset; null DateTime = Start; Trigger UpdateTitle; IsDataFetched = True | withMeetingDateTime(result, Start); onUpdateTitle(Title); isDataFetched true | `match` | AssembleEventDetail:1047-1066; useAssembleEventDetail.ts:87-89; BR-C2LEG-061, 064 |
| 120 | ui | If IsNotFound or IsUnavailable | AssembleEventDetail__Error "Meeting not found", subtitle, icon connect-icon-search-off | isMeetingNotFound(data) → AssembleEventDetail__Error | `match` | AssembleEventDetail:195-199; assembleEventDetailState.ts:47-48; AssembleEventDetail.tsx:34-35, :58-66 |
| 130 | ui | DIV_DetailCard: If not IsDataFetched and EventId = NullTextIdentifier() | skeleton; else AssembleSummaryCard(IsListItem=False) | the same condition; AssembleSummaryCardContainer isListItem={false} | `match` | AssembleEventDetail:252, :403; AssembleEventDetail.tsx:83-108 |
| 119 | ui | Section_MeetingNotes | IsVisible = Notes <> "" or not IsDataFetched; title "Meeting Note"; ShowMoreShowLess | `isVisible={notes !== '' \|\| !isDataFetched}` | `match` | AssembleEventDetail:434-462; AssembleEventDetail.tsx:111-137. The only meeting-note UI on TST (section 6.1) |
| 131 | ui | Section_Attendees | IsVisible = not IsDataFetched or attendee, special or special-guest list not empty; IsLoading | the same four terms | `match` | AssembleEventDetail:551-552, :570; AssembleEventDetail.tsx:138-148; BR-C2LEG-048 |
| 132 | ui | Host Locality / Interchange Meetings lists | each visible when its list is not empty | `attendees.length > 0`, `special.length > 0` | `match` | AssembleEventDetail:627, :683, :690, :746; AssembleEventDetail.tsx:151-170 |
| 133 | ui | Section_GSMContacts | IsVisible = GSMContactList not empty or not IsDataFetched | `contacts.length > 0 \|\| !isDataFetched` | `match` | AssembleEventDetail:757-758, :776; AssembleEventDetail.tsx:174-194 |
| 149 | strings | section titles | "Meeting Note", "Meeting Attendees", "Host Locality", "Interchange Meetings", " GMS Local Contact" | the same, with the leading space | `match` | AssembleEventDetail:462, :570, :683, :746, :776; AssembleEventDetail.tsx:117, :142, :156, :166, :178 |

### 4.9 AssembleEventDetail_AttendeeSubdivision

React: `app/src/pages/AssembleDetail/components/AssembleEventDetail_AttendeeSubdivision.tsx`, `hooks/useAttendeeSubdivision.ts`,
`hooks/attendeeSubdivisionState.ts`, `components/ContextMenu.tsx`. KB: BR-C2LEG-040 to 044.

| Id | Area | Item | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|
| 121 | logic | OnReady | from cache: input; else GetCacheableSubdivision_V2(Id) → households, CountryCode, LocalityId; BuildSkeletonList; Set_SelectedAssembleAttendeeListBookmarks | getLocalBookmarksByObjectType(Contact); getCacheableSubdivision_V2(Id) | `match` | AssembleEventDetail_AttendeeSubdivision:796-901; useAttendeeSubdivision.ts:115-126; BR-C2LEG-044 |
| 157 | data | server side of GetCacheableSubdivision_V2 | ActionGetBulkSubdivisions_V2 | CR-AssembleDetail-1 contract entry | `mock-only` | migration/change-requests/CR-AssembleDetail-1.md |
| 147 | data | flag GetHasExtendedShare | TST true | useFlagOn('C2ExtendedShare'), default true | `match` | flag-values-tst.json:21; registry.ts:141-148; AssembleDetailPage.tsx:52; useAttendeeSubdivision.ts:152 |
| 148 | data | flag GetHasBookmarNote | TST false; read at :575 | useFlagOn('mobileDirectoryBookmarkNote'), default false; BookmarkNoteAddEdit only when on | `match` | flag-values-tst.json:9; AssembleEventDetail_AttendeeSubdivision:575; registry.ts:81-88; AssembleEventDetail_AttendeeSubdivision.tsx:155. Flag off on TST |
| 122 | actions | Handler_OnClickHousehold | MaybeDisplaySubscriptionPopup2; shown: stop; RememberFocusedScrollAnchor; HouseholdIdList = SubdivisionHouseholdList; SetPreloadObject; Trigger NavigateTo_HouseholdCarousel | `if (await maybeDisplaySubscriptionPopup(…)) return; setPreloadObject(rows.map(r => r.Id))` | `match` | AssembleEventDetail_AttendeeSubdivision:718-794; useAttendeeSubdivision.ts:131-132; BR-C2LEG-040 |
| 123 | actions | Handler_OnClickBookmarkButton | popup check; not bookmarked: ConfirmAction(Bookmark_Note) → BookmarkNote = Trim; ToggleBookmarkItem; IsBookmarked = not IsItemBookmarked; BookmarkNote = "" | the same steps | `match` | AssembleEventDetail_AttendeeSubdivision:927-1014; useAttendeeSubdivision.ts:136-148. Known original bug B13 kept (known-original-bugs.md:21); BR-C2LEG-041, 042 |
| 158 | data | server side of ToggleBookmarkItem | AddBookmark / DeleteBookmarkByBookmarkId | CR-AssembleDetail-2 contract entries | `mock-only` | migration/change-requests/CR-AssembleDetail-2.md |
| 124 | actions | Handler_OnClickShareConnect | popup check; GetHasExtendedShare; ShareableObjectId = Id; FlipHouseholdName; IsShareOpen = True; Trigger NavigateTo_ShareObject | maybeDisplaySubscriptionPopup; flipHouseholdName; flags.hasExtendedShare branch | `match` | AssembleEventDetail_AttendeeSubdivision:1016-1108; useAttendeeSubdivision.ts:151-152; attendeeSubdivisionState.ts:120; BR-C2LEG-043 |
| 125 | actions | Handler_OnShareToOthers / Handler_CloseShareSheet / Handler_OnAddBookmarkNote / Handler_OnClickToggleSubsdivisionList | share to others (native only, row 106); close the sheet; set BookmarkNote; toggle IsSelected | useAttendeeSubdivision; ContextMenu.tsx:18-20 | `match` | AssembleEventDetail_AttendeeSubdivision:903-925, :1110-1144, :1205-1275; AssembleDetailPage.tsx:94-100 |

### 4.10 AssembleEventDetail_Contact and AssembleEventDetail_ContactList

React: `app/src/pages/AssembleDetail/components/AssembleEventDetail_Contact.tsx`, `AssembleEventDetail_ContactList.tsx`,
`hooks/useAssembleEventContact.ts`, `hooks/useAssembleEventContactList.ts`, `hooks/assembleEventContacts.ts`. KB: BR-C2LEG-045, 046.

| Id | Area | Item | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|
| 126 | actions | Handler_OnClickHostContact | HasAccessToRegion(CountryCode, LocalityId); no access → App_Subscription_ShowUpgradePopUp; else Trigger NavigateTo_Household | `if (await hasAccessToRegion(…)) onNavigateToHousehold(…); else await showUpgradePopUp();` | `match` | AssembleEventDetail_Contact:614-662; useAssembleEventContact.ts:104-105; BR-C2LEG-046 |
| 127 | actions | Handler_ContactByMessage / ByEmail / OptionsCall / popup cancel | popup data from the contact; signed avatar GetCacheableSignedPhotoURL; e-mail "unavailable" check; Trigger NavigateTo_EmailContact | getCacheableSignedPhotoURL(…); the handlers | `match` | AssembleEventDetail_Contact:467-612, :664-760; useAssembleEventContact.ts:100; BR-C2LEG-045 |
| 128 | logic | ContactList OnReady | not from cache: GetCacheableMemberContactList(ids) → contacts, IsDataFetched = True; loading rows first | getCacheableMemberContactList(memberIds); assembleEventContacts | `match` | AssembleEventDetail_ContactList:240-320; useAssembleEventContactList.ts:18; assembleEventContacts.ts:92-102 |
| 159 | data | server side of GetCacheableMemberContactList | Connect2_LegacyShared member contacts | the member-contact mock | `mock-only` | useAssembleEventContactList.ts:18; notes.md (mock files) |

### 4.11 Other shared blocks and actions

| Block or action | Use in this flow | Where checked |
|---|---|---|
| CommonUI_InsideLayout, BottomBarMenu, BackNavigationHandler, Dialog_AccessRestrictedAction_Legacy, ShareSheet, UBTConnectLibrary BottomSheet, LocalityListDetail, Spinner, StickyHeader, HorizontalTags, ContextMenu / ItemOptionsMenu | instances with the arguments of rows 002, 003, 027, 028, 035, 037, 038, 093, 097, 025, 026, 056, 075, 125 | not checked here (shared); their internals belong to their own flows |
| AllowUpcomingNavigation, PreventNavigation, GetPreloadObject, SetPreloadObject, AssignFromObject, BottomSheetOpen, BottomSheetClose, GetHasCarouselEnabled, GetNameAndSurname_ByFullName, ShareEntity_ByURL, ListIndexOf | called by rows 004, 017, 043, 046, 100-106 | the calls match; the actions are shared (`app/src/platform/navigation`, `app/src/lib/ubtConnect/actions`) |
| HasAccessToRegion, App_Subscription_ShowUpgradePopUp, MaybeDisplaySubscriptionPopup, ToggleBookmarkItem, GetCacheableUserInfo, GetCacheableCountryInfo, GetLocality, GetCacheableSubdivision_V2, GetCacheableMemberContactList, GetCacheableSignedPhotoURL, RemoveDiacritics, OffsetDateTimeByUserUTCOffset, NavigateToMaps, OpenExternalURL, CheckSupportedBrowserVersion | called by the block rows of sections 4.1 to 4.10 | the calls match; the actions are shared (`app/src/lib/legacyShared/actions`, `app/src/lib/assemble/actions`) |

### 4.12 Strings of the flow

| Id | Area | Item | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|---|
| 129 | strings | the 18 literals of `pack/strings.md` | strings of the shared blocks (UnsupportedVersion*, WelcomeToConnect, Block_PINUnlock*) through CommonUI_InsideLayout | - | `n/a` | owned by flows App_Common and App_PIN, see their reports |
| 150 | strings | screen and block strings checked on TST | "Browse by Country", "Filter by Locality", "Test", "No results found", "Apply", "Meeting not found" and its subtitle, "We were unable to find any meetings to display.", "Link is not available, refer to local signal chat", "Join with ", "[Tap here]", "Invitee numbers unavailable at the moment", "Please install and enable Google Maps" | the same texts | `match` | ScreenBlock_Assemble_Filter:13-14, :361, :592; AE:267-300; AssembleEventDetail:195-199; AssembleSummary_List:374; AssembleCommon_VirtualMeetingURL:226, :266; AssembleSummaryCard:441, :756; assembleFilterState.ts:9, :11; AssembleEventsPage.tsx:119; AssembleFilterView.tsx:125; Assemble_FilterSheet.tsx:173; AssembleEventDetail.tsx:34-35, :63; AssembleSummary_List.tsx:118; VirtualMeetingUrl.tsx:80-86; AssembleSummaryCard.tsx:64; AssembleSummaryCardContainer.tsx:34 |

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| F1 | minor | ScreenBlock_Assemble_Filter and Assemble_FilterSheet, DIV_StickyBottom | TST animates the show and hide of the sticky Cancel / Apply bar (`animate: true`); React mounts and unmounts the bar without the animation (rows 151, 152) | app/src/pages/Assemble_BrowseByCountry/components/AssembleFilterView.tsx:152-154; app/src/pages/AssembleEvents/components/Assemble_FilterSheet.tsx:152-157 | Reproduce the OutSystems container animation (the `animate` property of the Container widget) or record the omission as accepted |

Severity levels:
- **blocker**: the user cannot complete the flow
- **major**: a visible behaviour, a rule or data differs
- **minor**: a text, a style class or an edge case
- **info**: no user impact

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| AssembleDetail: data action GetAssembleNotes (GetNotesByItemId, AtStart) | present | absent: `dataFetchActionNames = []` | TST (not built) | AD:370; row 090 |
| AssembleDetail: placeholder MeetingNotes with NoteListActions and ItemCard_ActionBar | present in the ScreenBlock_AssembleDetail instance | absent; the meeting note is Section_MeetingNotes of AssembleEventDetail | TST | AD:193-285; AssembleEventDetail:434-462; rows 094, 119 |
| AssembleDetail: block NotesSheet, local IsAddNote, actions Handler_OnNoteDeleted, Handler_OnNotesChanged, Handler_NoteSheet_Closed, OpenNoteSheet | present | absent (0 grep hits) | TST | AD; rows 089, 095, 109 |
| AssembleDetail: If `#HideInServiceStudio_BottomSheet` (constant False) around ShareSheet and NotesSheet | present, dead branch | absent: ShareSheet rendered directly | TST | AD:309-325; row 096 |
| AssembleEvents: block BottomSheet_AssembleFilter | `OutSystemsUI_2_23.Interaction.BottomSheet` | `UBTConnectLibrary.ConnectPatterns.BottomSheet` (Title "Test", CloseOnClickOutsite true, footer empty) | TST (ConnectBottomSheet) | AE:267-300, :348; row 038 |
| Navigations of the three screens | transition Inherited | `TransitionAnimation.Default` on every navigate | neither: React navigates without a transition argument | AB:234-239; AE:399-400, :553-577; rows 005, 040, 044 |
| AssembleDetail: event NavigateTo_HouseholdCarousel | ItemPosition and SelectedHouseholdId | the handler receives itemPositionIn and never uses it | TST (ignored) | AD:245, :493-554; row 114 |
| AssembleDetail: event NavigateTo_EmailContact | Event_ContactSurname among the 7 parameters | the handler ignores it and splits Event_ContactName | TST (ignored) | AD:287, :592-636; row 105 |

### 6.2 KB pages vs TST

| Id | KB text | TST evidence | File |
|---|---|---|---|
| K1 | BR-C2LEG-065: "data-action exceptions are re-raised by the screen block as `UnknownException`" (meeting-list.md:47) | The JS error node of AssembleSummary_List calls `activeScreenController.handleError(ex)`; the call `$actions.ThrowAssyncException(ex.message)` is commented out, so the event AssyncException and Handler_AssyncException of ScreenBlock_AssembleEvents never run | AssembleSummary_List:1760-1767; ScreenBlock_AssembleEvents:544-577; row 053 |

## 7. Questions for the user

None. Every row has a verdict with evidence.

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 3 | 3 | 0 | 0 | 0 | 0 | 0 | 0 |
| data | 27 | 18 | 0 | 0 | 0 | 8 | 1 | 0 |
| ui | 46 | 43 | 2 | 0 | 0 | 0 | 1 | 0 |
| actions | 43 | 40 | 0 | 0 | 0 | 0 | 3 | 0 |
| validations | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 35 | 35 | 0 | 0 | 0 | 0 | 0 | 0 |
| strings | 3 | 2 | 0 | 0 | 0 | 0 | 1 | 0 |
| **total** | 159 | 143 | 2 | 0 | 0 | 8 | 6 | 0 |
