# Flow report: Directory_OneSchoolGlobal

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 3 (built: 1, OneSchoolGlobalDetails; not built: OneSchoolGlobalCarousel `skip` V8, OneSchoolGlobalEventDetail `skip` V7) |
| Own blocks | OneSchoolGlobalDetails_Block |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/…`, KB pages `ui/supper-meetings-oneschool.md` and `ui/directory-entity-actions.md` with the rules they name, TST compiled code `UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc.js` (`tst_source.py`), `migration/runtime-sources/OutSystemsReactView.js` and `OutSystems.js` |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

In the tables, `TST:<line>` is a line of `tst_source.py show OneSchoolGlobalDetails`. `Page` is
`app/src/pages/OneSchoolGlobalDetails/OneSchoolGlobalDetailsPage.tsx`. `Hook` is
`app/src/pages/OneSchoolGlobalDetails/hooks/useOneSchoolGlobalDetails.ts`. `State` is
`app/src/pages/OneSchoolGlobalDetails/hooks/oneSchoolGlobalDetailsState.ts`.

## 1. Summary

- Counts by verdict: match 46 · partial 0 · missing 1 · differs 0 · mock-only 2 · n/a 6 · unclear 1 (same as `checklist.json`).
- **F1** (minor): React does not set the document title. The TST runtime sets it to the view title
  "OneSchoolGlobalDetails". The gap is app-wide.
- **Q1** (row 056): when the screen is open and a navigation opens it with another id, React fetches again. TST has no
  OnParametersChanged handler. The code read does not show if TST keeps the old data.
- TST differs from the DEV pack in six places (§6.1). React follows TST in each place. The main difference: TST has no
  file for OneSchoolGlobalDetails_Block, and the screen holds its widgets and logic.
- Two KB texts disagree with DEV and TST (§6.2, K1 and K2).
- Status: in React a user can open a OneSchool Global page from any caller. The user sees the campus card, the address
  pop-up, the links and the actions bar. With the flag on, the user also sees the student-information section. The
  button group and the coming-soon panel show as on TST. No finding blocks the flow.

## 2. Screens

### 2.1 OneSchoolGlobalDetails

Route `/UBTConnect/OneSchoolGlobalDetails`, page `Page`, flows in `Hook`. Board: `build`, built (V4a, user
2026-10-14). The block OneSchoolGlobalDetails_Block is inlined in the page (§3.1), as on TST.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | route, input, roles | QueryString; In_OneSchoolGlobalId Long Integer, mandatory; roles Registered, UBTOne_User | inputs.ts gives "0" for a missing id; MEMBER_ROUTE (member, enforce) | `match` | `app/src/pages/OneSchoolGlobalDetails/inputs.ts:11-14`; `app/src/app/routes.ts:40`; TST:92-96 (setInputs, default 0), TST:1446-1447 (checkRegistered only, §6.1) |
| 002 | local IsRestoredFromCache | set in OnInitialize from the JS node, passed to the block | useWasRestoredFromCache() feeds skipFetch | `match` | Hook:39, :47; TST:1458, :1463 (JS node in OnInitialize and OnReady, §6.1) |
| 003 | lifecycle | OnInitialize → ScreenEvent_OnInitialize; the block adds OnReady and OnParametersChanged | one hook: state, then the fetch | `match` | Hook:27-52; TST:1404-1442 (OnInitialize and OnReady; OnParametersChanged null) |
| 004 | Layout_DetailPage, header title | no argument; CustomText "OneSchool Global" | DetailLayout (isPrimaryColor default true), CustomText "OneSchool Global" | `match` | Page:259-262; `pack/references.md:46` (In_IsPrimaryColor = True); TST:170-171 (inputs {}) |
| 054 | document title (runtime) | the runtime sets `document.title` to the view title "OneSchoolGlobalDetails" on mount and on update | no setter; the tab keeps "UBTConnect" | `missing` (F1) | TST:150-153; `migration/runtime-sources/OutSystemsReactView.js:7`; `app/index.html:6`; `app/src/app/routes.generated.ts:48` (title not applied) |

**Data**

The screen has no data source of its own. The data action is in the block (§3.1).

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 005 | SubLayout_DirectoryDetailScreen | placeholders DetailCard, CallToAction, Content | DirectoryDetailLayout with the three placeholders | `match` | Page:264-269 |
| 006 | BottomBarMenu, CommonUI_InsideLayout | placeholders Bottom and Placeholder_CommonUI_Inside_Layout | BottomBar, CommonUiLayout | `match` | Page:271-272 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 007 | ScreenEvent_OnInitialize | JS IsViewRestoredFromCache, assign IsRestoredFromCache | the flag feeds skipFetch | `match` | Hook:39-47; TST:1216-1245 |
| 053 | failed GetOneSchoolGlobalDetails (runtime) | controller.handleError → the Directory_OneSchoolGlobal flow handler | raiseToFlowHandler(error); the skeleton card stays | `match` | Hook:58-61; TST:1443-1444; `migration/knowledge/auto-decisions-2026-10-15.md:56` |

**Validations**

The screen has no input widget. The button group of the block is row 017.

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 048 | BR-UBTCON-905 | a fresh open fetches the details and the time zone; a view restored with its data keeps it; the address pop-up gets no coordinates | fetch unless restored with data; coordinates from the wire, empty | `match` | Hook:47-52; `app/src/api/locality/mapper.ts:391`; TST:1294, :1313 |
| 056 | same-screen navigation with a new In_OneSchoolGlobalId | the runtime fires only OnParametersChanged on an input change of a mounted view; TST has no handler | the query key holds the id; a new id fetches again | `unclear` (Q1) | TST:1442; `OutSystemsReactView.js:7` (UNSAFE_componentWillUpdate → fireAfterInputsChanged); `OutSystems.js:17`; `app/src/api/locality/keys.ts:13-14`; Hook:48-52 |

**Strings**

The one string of the screen, "OneSchool Global", matches (Page:262). The strings of the block are rows 044 and 045.

### 2.2 OneSchoolGlobalCarousel (not built)

Board: `skip`, decision V8 (dev-only: no compiled file on TST, no survey route; revisit when TST deploys it; user,
2026-10-27). On DEV the screen shows Layout_DetailPage with In_IsPrimaryColor False and the title "OneSchool Global".
OnInitialize reads the carousel ids from the navigation preload (GetPreloadObject).

It sets the starting position to
the index of In_StartingObjectId and fills EntitiesCarousel_Items. EntitiesCarousel shows the OneSchool Global slides.
BackNavigationHandler saves the swiped items with SetPreloadObject when the list is not empty.

A build needs
EntitiesCarousel and EntitiesCarousel_OneSchoolGlobal (Directory_Caroussel), BackNavigationHandler and the preload
actions. It needs no server action of its own: each slide fetches through OneSchoolGlobalDetails_Block. Verdict `n/a`
(row 046).

### 2.3 OneSchoolGlobalEventDetail (not built)

Board: `skip`, decision V7 (dead: no way in, input unused; user, 2026-10-14). The screen has a compiled file on TST.
On DEV the data action Get_OneSchoolGlobalEvent (AtStart) assigns one fixed sample event and waits 2 seconds. It
ignores In_OneSchoolGlobalEventId (BR-UBTCON-908). OnInitialize fills skeleton values.

The layout shows "Upcoming
events" as a left-aligned title. A SkeletonSection holds OneSchoolGlobal_Event_Card and a section with the description
or a 6-line skeleton.

A build needs OneSchoolGlobal_Event_Card (Directory_OneSchoolGlobal_Blocks), the SubLayout
blocks, GetSkeleton_OneSchoolGloval_EventDetails and Wait. It needs no server action. React has a route entry
(`app/src/app/routes.generated.ts:80`) but no page folder. Verdict `n/a` (rows 045, 047, 051).

## 3. Blocks of the flow

### 3.1 OneSchoolGlobalDetails_Block

Used by OneSchoolGlobalDetails (built) and EntitiesCarousel_OneSchoolGlobal (only through the carousel, not built).
TST has no file for the block. Its widgets and logic are in the screen file. React inlines it in `Page` and `Hook`.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 008 | inputs In_OneSchoolGlobalId, IsRestoredFromCache; no event | block inputs | no block: inlined in the page | `match` | Page:62-272; TST: no block file (§6.1) |
| 009 | OnInitialize | restored → end; else Selected_OneschoolGlobal_SubsectionId = UpcomingEvents | the initial state sets UpcomingEvents; a restored view starts from its saved variables | `match` | State:40-43; TST:1239-1243 |
| 010 | OnReady If | restored → end | restored and data present → no fetch | `match` | Hook:47; TST:1294 (restored and isDataFetched, §6.1); BR-UBTCON-905 condition |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 018 | data action GetOneSchoolGlobalDetails (OnDemand) | refresh from OnReady; wire DataActionGetOneSchoolGlobalDetails | fetchOneSchoolGlobalDetails calls the same data action | `match` | `app/src/api/locality/repository.ts:178-188`; TST:1189-1212 |
| 019 | server action Get_OneSchoolGlobalDetails (Connect_CommunityBusiness_CS) | server side of the data action | the mock answers the wire data action | `mock-only` | `app/src/api/locality/mapper.ts:376-393`; `app/src/pages/OneSchoolGlobalDetails/mocks.ts:24-38`. Production needs `Connect_CommunityBusiness_CS.Get_OneSchoolGlobalDetails(CommunityBusinessId)` |
| 020 | server action Get_Core_LocalityTimezone, output UI_Timezone | server side of the data action | the mapper drops UI_Timezone | `mock-only` | TST:18-20 (output only, no widget reads it); BR-UBTCON-905. Production needs `Connect_Geography_CS.Get_Core_LocalityTimezone` |
| 021 | HouseholdCoordinates | assigned to itself on the server: always empty | the wire value goes to the address pop-up | `match` | `app/src/api/locality/mapper.ts:391`; Page:71, :128-134; BR-UBTCON-905 |
| 022 | IsDataFetched, SkeletonSection | In_IsLoading = not IsDataFetched (2 live instances) | two Skeleton instances on `details !== null` | `match` | Page:69, :81, :178; TST:238, :645. The third DEV instance is in a dead branch (row 042) |
| 023 | client variables | none in the own nodes | the page and the hook read none | `match` | `pack/screens.md`, `pack/blocks.md`. The listed variables belong to BottomBarMenu and Directory_EntityDetailsActions |
| 024 | server actions of the shared blocks | AddBookmark2, DeleteBookmarkByBookmarkId2, GetNotesByItemId and others | the page and the hook call none of them | `match` | §4. Checked in the reports of Directory_CommonBlocks and App_Common |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 025 | ImageCard_LazyLoading | Detail, In_IsBookmarked = LocalIsBookmarked | ImageCard with the same inputs | `match` | Page:82-85 |
| 026 | UBT_LazyImage | EntityId, EntityType OneSchoolGlobal, HasErrorMessage, MaxWidth_100vw, SignedURL | EntityLazyImage with the same inputs | `match` | Page:87-94 |
| 027 | ImageCard__Content title | Name | inTitle = card.name | `match` | Page:97-99; TST:315 |
| 028 | CustomText "Educating Students From:" | Neutral8, Small, SemiBold | the same text and options | `match` | Page:102-110 |
| 029 | CustomText AreasServed | Neutral7, ExtraSmall, Regular | the same options | `match` | Page:111-119 |
| 030 | CustomContainer of address and links | margin Top ExtraSmall, text CyanDarker | the same options | `match` | Page:120-125 |
| 031 | container style | If(IsDataFetched, "school-address", "margin-top-s margin-bottom-xs") | the same expression | `match` | Page:127; TST:431 |
| 032 | AddressPopup_Wrapper | IconVisible, IsEnabled, Address, Coordinates | the same inputs | `match` | Page:128-134 |
| 033 | list of BusinesLinks | "list list-group"; item "school-link-item" | OSList with the status class list-loading or list-error | `match` | Page:136-148; State:60-63; TST:479 (source_dataFetchStatus), :485 |
| 034 | External_Link | IconVisible, IsEnabled, In_Link = ConvertRecord(Current) | the same inputs | `match` | Page:145 |
| 035 | CustomContainer of the call to action | Neutral0, padding Base | the same options | `match` | Page:159-165 |
| 036 | Directory_EntityDetailsActions | ImageURL, Name = Trim(Name); EnableNotes True; EntityId; OneSchoolGlobal; OnChange_Bookmark | the same arguments and event | `match` | Page:41, :75-78, :166-173; TST:588 (Trim), :599-603 (EnableNotes) |
| 037 | If PermissionCheck(MobileStudentInformation) | the section shows with the flag | useFlag(FLAG_MobileStudentInformation) | `match` | Page:66, :179; `migration/knowledge/flag-values-tst.json:27` (on); `migration/flags.md:116` |
| 038 | ExpandableSection title | StartExpanded False; IconText Singular, Small, SemiBold; Icon CyanDarker, Base_24 | the same arguments | `match` | Page:181-197; TST:690 |
| 039 | If False in the ExpandableSection | [DEAD BRANCH] DW_OneSchoolGlobal_Numbers | not built | `n/a` | dead in the model; TST:815-837 has ComingSoon only |
| 040 | containers of Block_ButtonGroup | MarginSize Top = If(flag, ExtraSmall, empty) | `hasStudentInformation ? ExtraSmall : ''` | `match` | Page:206-219; TST:906-909 |
| 041 | ButtonGroup items | UpcomingEvents, AboutOurCampus; "button-group-item" | the same items | `match` | Page:225-238; `app/src/pages/OneSchoolGlobalDetails/staticEntities.ts:11-14` |
| 042 | outer If False | [DEAD BRANCH] events list, about text, Skeleton_TextBlock | not built | `n/a` | dead in the model; TST:1075-1097 has ComingSoon4 only |
| 043 | ComingSoon text options | Neutral7, Base, SemiBold (both instances) | COMING_SOON_TEXT | `match` | Page:49-53; TST:817, :1077 |
| 055 | live else branches of the two If False | border container + ComingSoon; margin and border container + ComingSoon4 | the same containers | `match` | Page:200-202, :242-254; TST:815-837, :1075-1097 |

**Block actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 015 | Directory_EntityDetailsActionsOnChange_Bookmark | LocalIsBookmarked = isBookmarked | dispatch bookmarkChanged | `match` | Hook:70-72; State:84-85 |
| 016 | ButtonGroup1 change | bound to Selected_OneschoolGlobal_SubsectionId; no OnChange | dispatch subsectionSelected | `match` | Hook:67-69; Page:220-224; TST:943 |

**Validations**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 017 | ButtonGroup1 | ValidationWidget; enabled, not mandatory | no validation element for a group that is not mandatory | `match` | `app/src/pages/OneSchoolGlobalDetails/components/ButtonGroup.tsx:5-12`; TST:67 |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 011 | Get_LookupSection in OnReady | LookupSections = Get_LookupSection.Out_Lookup | the initial state calls get_LookupSection(false) | `match` | State:41; `app/src/lib/ubtConnect/actions.ts:318-332`; TST:1299. The order differs; the value is the same |
| 012 | skeleton detail card | GetSkeleton_UI_OneSchoolGlobal_DetailCard into the data action output | SKELETON_DETAIL_CARD until the answer | `match` | State:49-56; Page:70; TST:1306-1310 |
| 013 | refresh GetOneSchoolGlobalDetails | refresh in OnReady | the query runs when skipFetch is false | `match` | Hook:48-52; TST:1313 |
| 014 | OnParametersChanged | call OnReady() | no handler | `match` | TST:1442 (null, §6.1). The refetch on an id change is row 056 |
| 049 | BR-UBTCON-906 | the section shows only with the flag; inside it the coming-soon content shows | the same | `match` | Page:66, :179-202; TST:664-837 |
| 050 | BR-UBTCON-907 | DEV and TST: the button group renders; the events and about content is dead; ComingSoon4 shows | the same | `match` | Page:206-254; TST:943, :1075-1097. The KB text disagrees (§6.2, K1) |
| 052 | BR-UBTCON-517 | label "Show student numbers" for singular and plural, icon School | the same label and icon | `match` | `app/src/lib/ubtConnect/actions.ts:318-332`; TST:1299 |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 044 | own strings | "OneSchool Global", "Educating Students From:", the skeleton address, "Show student numbers", "Upcoming events", "About our campus" | all 6 found | `match` | Page:109, :262; State:53; `app/src/lib/ubtConnect/actions.ts:327`; `staticEntities.ts:12-13` |
| 045 | strings of the event detail | sample event texts | not built | `n/a` | `migration/board.md:78` (V7) |

### 3.2 Blocks of other flows

- SubLayout_DirectoryDetailScreen (SubLayout, `../_shared/pack/blocks.md`): row 005, `match`.
- BottomBarMenu and CommonUI_InsideLayout (App_Common, `../App_Common/pack/blocks.md`): row 006, `match`. Their
  behaviour is checked in the report of App_Common.
- Directory_EntityDetailsActions (Directory_CommonBlocks, `../_shared/pack/blocks.md`): row 036, `match`. Rules
  BR-UBTCON-833 to BR-UBTCON-840 are checked in the report of Directory_CommonBlocks.
- External_Link (App_Common_Blocks, `../_shared/pack/blocks.md`): row 034, `match`. BR-UBTCON-334 is not checked here.
- DW_OneSchoolGlobal_Numbers and DW_OneSchoolGlobal_EventList (Directory_OneSchoolGlobal_Blocks): dead branches,
  rows 039 and 042, `n/a`.
- EntitiesCarousel, EntitiesCarousel_OneSchoolGlobal (Directory_Caroussel), OneSchoolGlobal_Event_Card,
  UI_OneSchoolGlobalEventDetail_IconTextWrapper (Directory_OneSchoolGlobal_Blocks), SubLayout_DirectoryDetailScreen_Section:
  used only by the screens that are not built or by dead branches. Not checked here.
- The other blocks of `pack/blocks.md` (PIN, UnsupportedVersion, Policy_Checker, household and supper-meeting blocks)
  are transitive. Not checked here.

## 4. Shared blocks and actions

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 011, 052 | Get_LookupSection (UBTConnect) | In_IsLowercase False | get_LookupSection(false) | `match` | `app/src/lib/ubtConnect/actions.ts:318-332` |
| 012 | GetSkeleton_UI_OneSchoolGlobal_DetailCard (UBTConnect) | skeleton card | SKELETON_DETAIL_CARD | `match` | State:49-56 |
| 037, 040 | Connect_LaunchDarkly_PermissionCheck (UBTConnect_Utils) | MobileStudentInformation | useFlag | `match` | Page:66 |

The other actions of `pack/actions.md` belong to blocks of other flows. They are not checked here (shared).

Referenced UI blocks of `UBTConnectLibrary` and `UBTConnect_Utils`: Layout_DetailPage, SkeletonSection,
ImageCard_LazyLoading, ImageCard__Content, UBT_LazyImage, AddressPopup_Wrapper, ExpandableSection, IconText, Icon,
CustomText, CustomContainer and ComingSoon. The rows above check the arguments of the flow. The internals of these
blocks are not checked here.

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| F1 | minor | OneSchoolGlobalDetails / document title | The TST runtime sets `document.title` to the view title "OneSchoolGlobalDetails" on mount and on update (`OutSystemsReactView.js:7`, TST:150-153). No React file sets `document.title`, so the tab shows "UBTConnect". The route table holds the titles but nothing applies them. The gap is app-wide. | `app/index.html:6`; `app/src/app/routes.generated.ts:48` | Set `document.title` from the route `title` in the app shell on each route change. Q2. |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| roles of OneSchoolGlobalDetails | Registered, UBTOne_User | checkRegistered only | TST: MEMBER_ROUTE | TST:1446-1447 |
| OneSchoolGlobalDetails_Block | own block with inputs In_OneSchoolGlobalId and IsRestoredFromCache | no block file; the widgets and the logic are in the screen file | TST: the page inlines the block | `tst_source.py`: no file matches OneSchoolGlobalDetails_Block |
| IsRestoredFromCache | screen variable, set once in OnInitialize, passed to the block | no variable; the JS node runs in OnInitialize and in OnReady | TST: useWasRestoredFromCache | TST:1458, :1463 |
| OnReady If | `IsRestoredFromCache` | `restored and isDataFetched` | TST: `restored && data !== null` | TST:1294; BR-UBTCON-905 has the TST condition |
| OnParametersChanged | the block calls OnReady() | `onParametersChangedEventHandler = null` | TST: no handler (see Q1) | TST:1442 |
| If False branches | DW_OneSchoolGlobal_Numbers, ShowUpcomingEvents, events list, about text, third SkeletonSection | not compiled; only ComingSoon and ComingSoon4 | TST: else branches only | TST:815-837, :1075-1097 |
| OneSchoolGlobalCarousel | screen exists | no compiled file | not built (V8) | `migration/board.md:93` |

OneSchoolGlobalEventDetail exists on DEV and on TST. Board decision V7 keeps it out of scope.

### 6.2 KB pages vs TST (for the KB owner)

The KB pages come from DEV (2026-10-05). In these two places a KB text disagrees with the DEV pack and with TST.

| Id | KB text | TST (compiled code) | Source |
|---|---|---|---|
| K1 | BR-UBTCON-907 and `ui/supper-meetings-oneschool.md`: `If(False)` hides the button group; the about section shows AreasServed, the about text and a 10-line skeleton | ButtonGroup1 renders. The about text and Skeleton_TextBlock are not compiled; ComingSoon4 shows | TST:943, :1075-1097 |
| K2 | BR-UBTCON-905, inputs table: `isBookmarked` is a screen input | The screen has one input, In_OneSchoolGlobalId | TST:92-96 |

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | OneSchoolGlobalDetails is open, and a navigation opens it with another `In_OneSchoolGlobalId`. Keep the React refetch, or follow TST (row 056)? | TST has no OnParametersChanged handler (TST:1442). The runtime fires only that handler when the inputs of a mounted view change (`OutSystemsReactView.js:7`). React fetches the new id (`keys.ts:13-14`). The code read does not show if the TST router keeps the screen mounted. No in-app path from this screen to itself is known. | (a) Keep the refetch, and record the TST behaviour in `app/docs/known-original-bugs.md`. (b) Follow TST: no fetch on an id change. (c) Check on TST first: open a second link while the screen is open. | (c), then (a): a page that shows the data of the old id is an error for the user. |
| Q2 | Set the document title per route, as the TST runtime does (F1)? | The TST tab and the task switcher show the screen name. React shows "UBTConnect" on every route. | (a) Set `document.title` from the route title in the app shell, for all routes. (b) Keep "UBTConnect", and record the decision in `migration/app-shell.spec.md`. | (a): it follows TST in one place for all routes. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 10 | 7 | 0 | 1 | 0 | 0 | 2 | 0 |
| data | 7 | 5 | 0 | 0 | 0 | 2 | 0 | 0 |
| ui | 22 | 20 | 0 | 0 | 0 | 0 | 2 | 0 |
| actions | 4 | 4 | 0 | 0 | 0 | 0 | 0 | 0 |
| validations | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 10 | 8 | 0 | 0 | 0 | 0 | 1 | 1 |
| strings | 2 | 1 | 0 | 0 | 0 | 0 | 1 | 0 |
| **total** | **56** | **46** | **0** | **1** | **0** | **2** | **6** | **1** |

## 9. Follow-up pass (2026-10-27)

Rows settled or sharpened after the user answers of 2026-10-27 and the TST files that `tst_source.py` reads. A row that stays `unclear` has a new question that names what settles it. Every row below has `verified: "live"`.

| Row | Old verdict | New verdict | Evidence |
|---|---|---|---|
| Directory_OneSchoolGlobal-056 | `unclear` | `unclear` | Q1 answered (c), then (a) (user decision 2026-10-27, Directory_OneSchoolGlobal Q1 (c)). Capture that settles it (read-only TST session): with OneSchoolGlobalDetails open for one id, open an in-app link to a second id (a Search result or a Locality link) and record whether the screen re-mounts (OnInitialize and the GetOneSchoolGlobal fetch run again) or stays mounted with the old data. After the capture, (a) applies: React keeps the refetch and known-original-bugs.md records the TST behaviour. |
