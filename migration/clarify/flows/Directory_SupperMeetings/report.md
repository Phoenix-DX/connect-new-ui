# Flow report: Directory_SupperMeetings

| | |
|---|---|
| Status | draft (no live MCP check) |
| Date | 2026-10-27 |
| Screens on DEV | 2 (built: 2, SupperMeeting_Carousel and SupperMeeting_Details; not built: none) |
| Own blocks | SupperMeeting_DetailsBlock, SupperMeeting_HouseholdList, SupperMeeting_ImageCard_Content, SupperMeeting_ImageCard_Content_IconText, SupperMeeting_ImageCard_Content_Statistics |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/…`, KB pages (`pack/kb.md`), TST compiled code (`SupperMeeting_DetailsBlock.mvc.js`, `SupperMeeting_HouseholdList.mvc.js`, `UBTConnect.controller.js`), runtime `migration/runtime-sources/OutSystems.js` |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 92 · partial 2 · missing 0 · differs 4 · mock-only 5 · n/a 8 · unclear 0 (same as `checklist.json`).
- F1 (major): a failed refresh of GetSubdivision or GetSubdivisionHouseholds does not reach the flow handler. TST runs each OnReady through `safeExecuteClientAction`, which calls `handleError`. React keeps the skeleton or sets the Error status and shows no message.
- The 4 `differs` rows cite ADR P4-5 (row 003), F40 (rows 062, 076) and the auto-decision of 2026-10-15 (row 106).
- Status: a user opens a supper meeting from a locality and swipes the carousel. The user reads the card, the statistics and the address, and uses the actions bar. A click on a household opens the household carousel or the household details. A failed fetch shows no error message. The mocks answer every server call.

## 2. Screens

### 2.1 SupperMeeting_Carousel

**Identity**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | Screen route / roles | roles Registered, UBTOne_User; URL structure QueryString | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:18 ; route meta app/src/app/routes.ts:83-88 (see next row); member-route check is the default of … | `match` | app/src/app/routes.ts:40, :43-56, :92<br>No ROUTE_META entry, so MEMBER_ROUTE (member, enforce): a signed-out user goes to Login. Lock enforce agrees with CommonUI_InsideLayout without arguments. No React screen checks the role UBTOne_User (0 hits in app/src); same verdict as App_PIN-001. TST: SupperMeeting_Carousel.mvc.js present. |
| 002 | Input In_StartingSupperMeetingId: Long Integer | input parameter, Long Integer | app/src/pages/SupperMeeting_Carousel/inputs.ts:22-25 | `match` | app/src/pages/SupperMeeting_Carousel/inputs.ts:22-25<br>Absent or invalid value gives '0' (OutSystems Long Integer default), inputs.ts:17-20; TST: present (in_StartingSupperMeetingIdIn) |
| 003 | Flag redirect C2EnableCarousel | (not in the screen model) flag action GetHasCarouselEnabled; migration/flags.md | app/src/app/routes.ts:83-88 | `differs` | app/src/app/routes.ts:83-88; app/docs/reference/stack.md:237 (P4-5 meta.flagRedirect)<br>React moves the flag choice of the callers (GetHasCarouselEnabled) into the route meta (ADR P4-5). The flag is on in TST (migration/knowledge/flag-values-tst.json:11), so the redirect does not run with TST values. A URL that is opened directly is not redirected. |

**Data**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 004 | Local variable SupperMeetingsIdList: PreloadedSupperMeetings | screen variable, record with SupperMeetingIds: Long Integer List | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:37 | `match` | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:37<br>TST: present (supperMeetingsIdListVar) |
| 005 | Local variable StartingPosition: Integer | screen variable, default 0 | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:39 | `match` | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:39<br>TST: present (startingPositionVar) |
| 006 | Local variable EntitieslCarousel_Items: EntitiesCarousel_Item List | screen variable, list of EntityId: Text | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:38 | `match` | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:38<br>React EntityId holds a Long Integer text (supperMeetingCarouselActions.ts:34 `{ EntityId: textToLongInteger(id) }`); TST: present (entitieslCarousel_ItemsVar) |
| 007 | Preload object (GetPreloadObject) | NavigationHandler.GetPreloadObject; set by the previous screen | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:30-36 | `match` | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:30-36<br>React reads the waiting preload object as TST does (NavigationHandlerController.getPreloadObject$Action). The mock fallback for a direct open is row 106. |

**UI tree**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 008 | Layout_DetailPage In_AlignTitleLeft=False | block Layout_DetailPage, In_AlignTitleLeft=False | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:34-36 | `match` | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:34-36<br>TST: present (In_AlignTitleLeft: false) |
| 009 | CustomText Placeholder_Header_Title In_Text="Supper Meeting", In_TextOptions={} | CustomText with default TextOptions | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:37 | `match` | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:37<br>TST: present (In_Text: "Supper Meeting", TextOptionsRec default) |
| 010 | EntitiesCarousel (In_ConnectEntityTypeId, In_EntitiesCarousel_Items, In_StartingPosition) | args: SupperMeetings_aka_Subdivisions, EntitieslCarousel_Items, StartingPosition; no events handled | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:39-45 | `match` | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:39-45<br>Logic of EntitiesCarousel and EntitiesCarouse_lSupperMeetingDetails: flow Directory_Caroussel (pack/blocks.md signature only); TST: present (3 inputs; no events object) |
| 011 | Slide content: EntitiesCarouse_lSupperMeetingDetails -> SupperMeeting_DetailsBlock | per slide, In_SubdivisionId -> block (blocks.md: used by EntitiesCarouse_lSupperMeetingDetails) | app/src/components/directory/CarouselSupperMeetingDetails/CarouselSupperMeetingDetails.tsx:40-44 ; page slot at SupperMeeting_CarouselPage.tsx:24-31 | `match` | app/src/components/directory/CarouselSupperMeetingDetails/CarouselSupperMeetingDetails.tsx:40-44<br>React renders the block through a slot (rule 4: component does not import a container) |
| 012 | CommonUI_InsideLayout (Placeholder_CommonUI_Inside_Layout) | block CommonUI_InsideLayout, no args | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:47 | `match` | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:47<br>Logic of the block: flow App_Common; TST: present (inputs: {}) |
| 013 | Placeholders Header_Right, headerContent, bottom | TST passes PlaceholderContent.Empty | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:34-48 (no header-right, header content or bottom prop) | `match` | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:34-48<br>TST: present (Empty) |

**Screen actions**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 014 | ScreenEvent_OnInitialize: condition SupperMeetingsIdList.SupperMeetingIds.Empty | If list empty -> run the init; else end | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:40-44 | `match` | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:40-44<br>Condition is realised by the view cache: restored (non-empty) keeps the restored variables, else the init result is used; TST: present (supperMeetingIdsAttr.isEmpty) |
| 015 | OnInitialize true branch: GetPreloadObject | call GetPreloadObject() | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:30 | `match` | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:30<br>TST: present |
| 016 | OnInitialize: AssignFromObject(Preload -> SupperMeetingsIdList) | call AssignFromObject(ObjectValue=Preload, ToObjectRef=ToObject(SupperMeetingsIdList)) | app/src/pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts:17-21 | `match` | app/src/pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts:17-21<br>TST: present |
| 017 | OnInitialize: ListIndexOf(Value = In_StartingSupperMeetingId) | call ListIndexOf | app/src/pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts:25-28 | `match` | app/src/pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts:25-28<br>TST: present (p.equals(in_StartingSupperMeetingIdIn)) |
| 018 | OnInitialize: If ListIndexOf.Position <> -1 -> StartingPosition = Position | true: assign; false: keep default | app/src/pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts:28 | `match` | app/src/pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts:28<br>False branch keeps the variable default 0 in both; TST: present (positionOut !== -1) |
| 019 | OnInitialize: For each SupperMeetingIds -> ListAppend EntitiesCarousel_Item {EntityId=TextToLongInteger(Current)} | [M1] loop runs on both branches of the position If | app/src/pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts:33-34 | `match` | app/src/pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts:33-34<br>Loop runs for position -1 too: React items built unconditionally (supperMeetingCarouselActions.ts:55); TST: present (listAppend with EntitiesCarousel_ItemRec, longIntegerToText(textToLongInteger(longIntegerToText(Current)))) |
| 020 | OnInitialize false branch (list not empty): end | end, no change | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:40-44 (restored variables) | `match` | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:40-44<br>TST: present |
| 021 | Unreachable nodes (2 End nodes) | listed as unreachable in the model | n/a: no code expected | `n/a` | -<br>dead in the model (unreachable End nodes); React must not implement it. |
| 022 | Lifecycle OnInitialize only (no OnReady, OnParametersChanged, OnDestroy) | lifecycle: OnInitialize -> ScreenEvent_OnInitialize | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:27-45 (hook with no effect) | `match` | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:27-45<br>TST: present (dataFetchActionNames = []) |

**Validations**

No validation: the screen has no input widget.

**Business logic**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 023 | Data fetch of the screen | none of its own; blocks fetch | app/src/pages/SupperMeeting_Carousel/mocks.ts:20 | `match` | app/src/pages/SupperMeeting_Carousel/mocks.ts:20<br>TST: present (dataFetchActionNames = []) |
| 024 | View cache of screen variables (back navigation) | OutSystems keeps screen variables when a view is restored | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:24-26 comment | `match` | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:37-44; app/docs/reference/stack.md:228<br>The runtime restores the screen variables of a cached view; TST OnInitialize tests SupperMeetingIds.Empty for this reason. React keeps the 3 variables with useViewState (ADR line on restored views). |
| 106 | Direct open without a preload (BR-UBTCON-898) | GetPreloadObject gives no object: SupperMeetingIds stays empty and the carousel has no slide | with the mocks on, mockPreload gives 3 fictional ids; without the mock registration mockPreload returns null and the list stays empty | `differs` | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:31-36; app/src/pages/SupperMeeting_Carousel/inputs.ts:40-41; app/src/pages/SupperMeeting_Carousel/mocks.ts:13-18; migration/knowledge/auto-decisions-2026-10-15.md:68<br>Decision SupperMeeting_Carousel Q1 = A (auto-accepted on the user instruction of 2026-10-15): a mock-only fictional preload. The code without the mocks follows TST. |
| 107 | BR-UBTCON-898 | list from the navigation preload; start at the requested meeting, else at the first | supperMeetingCarouselOnInitialize: AssignFromObject, ListIndexOf, one item per id | `match` | app/src/pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts:17-57; KB rules/BR-UBTCON-898.md<br>Rows 014-019. The no-preload outcome in the mock phase is row 106. |

**Strings**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 025 | Strings of the screen: "Supper Meeting" | strings.md: Supper Meeting <- SupperMeeting_Carousel.Value | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:37 | `match` | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:37<br>TST: present |

### 2.2 SupperMeeting_Details

**Identity**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 026 | Screen route / roles | roles Registered, UBTOne_User; URL structure QueryString | app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:13 ; route meta per migration/clarify/flows/Directory_SupperMeetings/pack/app.md | `match` | app/src/app/routes.ts:40, :43-56, :92<br>No ROUTE_META entry, so MEMBER_ROUTE (member, enforce). Lock enforce agrees with CommonUI_InsideLayout without arguments. No React screen checks the role UBTOne_User (0 hits in app/src); same verdict as App_PIN-001. |
| 027 | Input In_SubdivsionId: Long Integer (mandatory) | mandatory input; typo kept | app/src/pages/SupperMeeting_Details/inputs.ts:18-20 | `match` | app/src/pages/SupperMeeting_Details/inputs.ts:18-20<br>Absent value gives '0' (inputs.ts:11-15); TST: present (in_SubdivsionIdIn, LongInteger; no explicit Mandatory check in the compiled screen) |

**Data**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 028 | Local variables | none | no variable in app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx | `match` | -<br>TST: present (none besides the input) |

**UI tree**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 029 | Layout_DetailPage In_AlignTitleLeft=False | block Layout_DetailPage | app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:19-21 | `match` | app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:19-21<br>TST: present (In_AlignTitleLeft: false) |
| 030 | CustomText Placeholder_Header_Title "Supper Meeting" | In_Text="Supper Meeting", In_TextOptions={} | app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:22 | `match` | app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:22<br>TST: present |
| 031 | SupperMeeting_DetailsBlock (In_SubdivsionId=In_SubdivsionId) | content placeholder | app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:24 | `match` | app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:24<br>Placeholder_CarouselTag is empty on this screen (TST SupperMeeting_Details.js:206); TST: present (In_SubdivsionId: in_SubdivsionIdIn; placeholder_CarouselTag: Empty) |
| 032 | CommonUI_InsideLayout | block, no args | app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:26 | `match` | app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:26<br>TST: present |

**Screen actions**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 033 | Screen actions / lifecycle | none (lifecycle: none) | no effect or handler in app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx | `match` | -<br>TST: present (dataFetchActionNames = []) |

**Validations**

No validation: the screen has no input widget.

**Business logic**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 034 | Flag read for the block (GetHasCarouselEnabled) | read inside the block action OnClick_NavigateToHousehold | app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:16 -> app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:31 | `match` | app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:16<br>React reads the flag value at render; TST reads it at the click. The flag is static on TST (flag-values-tst.json:11): no user effect. |

**Strings**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 035 | Strings of the screen: "Supper Meeting" | strings.md: Supper Meeting <- SupperMeeting_Details.Value | app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:22 | `match` | app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:22<br>TST: present |

## 3. Blocks of the flow

### 3.1 SupperMeeting_DetailsBlock

**Identity**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 036 | Block inputs / events | In_SubdivsionId: Long Integer (mandatory); no events; public False | app/src/containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx:7-16 | `match` | app/src/containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx:7-16<br>React container (decision W26) plus view components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx. Used by EntitiesCarouse_lSupperMeetingDetails and SupperMeeting_Details; TST: present (in_SubdivsionIdIn) |
| 037 | Input read once (no OnParametersChanged) | lifecycle: OnReady only | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:62 | `match` | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:62<br>TST: present (onParametersChangedEventHandler = null) |

**Data**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 038 | Data action GetSubdivision (fetch OnDemand) -> GetSubdivisionDetails_BySubdivisionId | call-server GetSubdivisionDetails_BySubdivisionId(In_SubdivisionId=In_SubdivsionId); Subdivision = Out_Screen_SubdivisionDetails | app/src/api/locality/repository.ts:132-138 | `mock-only` | app/src/api/locality/repository.ts:132-138; app/src/containers/SupperMeetingDetails/mocks.ts:26<br>Production needs the server action GetSubdivisionDetails_BySubdivisionId (Connect_Subdivision_CS) behind the screen service DataActionGetSubdivision. The React call (endpoint and input name) equals TST; its fetch moment is row 041. |
| 039 | Server action GetSubdivisionLocation_BySubdivisionId (pack: called by the flow) | listed in actions.md server actions of the flow; not called in the block model of this flow | not found (searched: GetSubdivisionLocation, SubdivisionLocation in app/src/api, containers/SupperMeetingDetails, components/directory) | `mock-only` | migration/clarify/flows/_shared/pack/blocks.md:2722; app/src/containers/EntityDetailsActions/mocks.ts:150<br>The shared block Directory_EntityDetailsActions calls it (contact details of a supper meeting), not an own block. Production needs GetSubdivisionLocation_BySubdivisionId (Connect_Subdivision_CS) behind DataActionFetchContactDetails. The React call is checked in the report of Directory_CommonBlocks. |
| 040 | Server actions GetHouseholdCoordinates, Get_Core_LocalityTimezone, Get_OneSchoolGlobalDetails, GetHouseholdDetails, Member_ContactDetails_Service, GetNotesByItemId, AddBookmark2, DeleteBookmarkByBookmarkId2 | called by shared blocks of the transitive set (actions.md); not by the 5 own blocks | not called by this flow's React files. Mocks elsewhere: containers/EntityDetailsActions/mocks.ts:35 ; :49 ; :150 | `mock-only` | app/src/containers/EntityDetailsActions/mocks.ts:35, :49, :150<br>Server side of the shared blocks (Directory_EntityDetailsActions and the blocks of the carousel slides). Production needs these server and service actions. The React calls are checked in the reports of the owner flows. |
| 041 | Data action fetch moment: refresh in ScreenEvent_OnReady | OnReady -> refresh data GetSubdivision | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:97-106 | `match` | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:97-106<br>TST: present (onReady -> screenEvent_OnReady$Action; dataFetchActionNames = ["getSubdivision$DataActRefresh"]) |
| 042 | GetSubdivision failure | no handler in the model of the data action | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:100-104 | `partial` | TST SupperMeeting_DetailsBlock.mvc.js:720-722 (safeExecuteClientAction), :758-760 (handleError); migration/runtime-sources/OutSystems.js:17 (safeExecuteClientAction calls handleError); app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:100-104<br>Same: IsDataFetched stays False and the skeleton stays. TST runs OnReady through safeExecuteClientAction, so a failed refresh goes to handleError (the flow handler; migration/knowledge/shell-facts.md U10: the fetched flows delegate to App_Common). React catches the error and calls no flow handler.<br>Finding F1 (major). |

**UI tree**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 043 | Root: SubLayout_DirectoryDetailScreen | block with placeholders Placeholder_DetailCard, Placeholder_CallToAction, Placeholder_Content | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:65-100 | `match` | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:65-100<br>TST: present (UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen) |
| 044 | Detail card: SkeletonSection In_IsLoading = not GetSubdivision.IsDataFetched | SkeletonSection around ImageCard_LazyLoading | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:60,67 | `match` | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:60,67<br>TST: present (In_IsLoading: !isDataFetchedAttr) |
| 045 | ImageCard_LazyLoading In_CardTypeId=Detail | args In_CardTypeId=UBT_ImageCardType.Detail | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:68-69 | `match` | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:68-69<br>TST: present (uBT_ImageCardType.detail) |
| 046 | UBT_LazyImage args: EntityId, EntityType, HasErrorMessage, ImageSize | EntityId=Subdivision_Card.SubdivisionId; EntityType=SupperMeetings_aka_Subdivisions; HasErrorMessage=True; ImageSize Width=MaxWidth_100vw | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:71-76 | `match` | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:71-76<br>CR-SupperMeeting_Details-1 (UBT_LazyImage parameter change) named in pack/decisions.md; TST: present (EntityId: longIntegerToText(subdivisionIdAttr); HasErrorMessage: true; LazyImageSizeRec.width=maxWidth_100vw) |
| 047 | Placeholder_ImageTag -> placeholder-def Placeholder_CarouselTag | placeholder defined by the block, filled by caller | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:78 | `match` | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:78<br>TST: present (OSWidgets.Placeholder at line 254; Details screen passes Empty) |
| 048 | Placeholder_Content: SupperMeeting_ImageCard_Content (In_ShowAddress=True, In_Subdivision_CardContent) | args from Subdivision_Card.Subdivision_Card_Content | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:79 | `match` | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:79<br>TST: present (In_ShowAddress: true; In_Subdivision_CardContent) |
| 049 | Call-to-action: SkeletonSection In_IsLoading = not IsDataFetched, then container | SkeletonSection > container > SubLayout_DirectoryDetailScreen_Section | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:84-90 | `match` | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:84-90<br>TST: present (OSWidgets.Container at line 316) |
| 050 | Section In_Title = Get_LookupSection().Actions.Plural | In_Title=Get_LookupSection().Actions.Plural (In_IsLowercase default) | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:86 | `match` | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:86<br>Value 'Actions' (app/src/lib/ubtConnect/actions.ts:324 `Actions: item('Action', 'Actions')`); TST: present (get_LookupSection$Action(false).actions.plural) |
| 051 | Directory_EntityDetailsActions args | ContactPopUp_OverrideOptions={Name: Subdivision_Card_Content.Name}, EnableOptions={EnableNotes: True}, EntityId=In_SubdivsionId, EntityType=SupperMeetings_aka_Subdivisions | app/src/containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx:42-47 | `match` | app/src/containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx:42-47<br>Events of the block (Event_MenuEdit, OnChange_Bookmark, ViewDetails_OnClick) are not handled in the DEV tree. Subdivision_Actions of the data are not passed to the block in either. Logic of the block: flow Directory_CommonBlocks (shared); TST: present (EnableOptions.enableNotesAttr = true; ContactPopUp_OverrideOptions.nameAttr; EntityId in_SubdivsionIdIn) |
| 052 | Content: SupperMeeting_HouseholdList #Block_Household_List (In_SubdivisionId) | block with In_SubdivisionId=In_SubdivsionId | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:93-98 | `match` | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:93-98<br>Alias Block_Household_List: searched `Block_Household_List` in app/src/components/directory/SupperMeetingDetails, containers/SupperMeetingDetails: not found (no widget alias in React); TST: present (In_SubdivisionId: in_SubdivsionIdIn) |

**Block actions**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 053 | Event_OnClick_Household -> OnClick_NavigateToHousehold(HouseholdId, HouseholdIdList) | event handler wired to the action | app/src/containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx:49 | `match` | app/src/containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx:49<br>TST: present (controller.onClick_NavigateToHousehold$Action at line 414) |
| 054 | OnClick_NavigateToHousehold: call GetHasCarouselEnabled | client action (flag) | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:31 , :118 | `match` | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:31<br>Flag C2EnableCarousel; value on TST: see migration/knowledge/flag-values-tst.json (not read by the reader); TST: present (UBTConnect_UtilsController.getHasCarouselEnabled$Action, line 508) |
| 055 | OnClick_NavigateToHousehold true: For each HouseholdIdList -> ListAppend PreloadedHouseholds.CarouselHouseholdItem {Household} | build CarouselPreloadedHouseholds | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:119-121 | `match` | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:119-121<br>TST: present (listAppend at line 518) |
| 056 | OnClick_NavigateToHousehold true: SetPreloadObject(ToObject(PreloadedHouseholds)) | SetPreloadObject | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:122 | `match` | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:122<br>TST: present (setPreloadObject$Action, line 533) |
| 057 | OnClick_NavigateToHousehold true: navigate HouseholdCarousel(In_StartingHouseholdId=Event_HouseholdId), transition Inherited | navigate | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:123 /${APP_ID}/HouseholdCarousel | `match` | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:123<br>Transition Inherited: searched `transition` in useSupperMeetingDetails.ts: not found (navigate default); TST: present (/UBTConnect/HouseholdCarousel, In_StartingHouseholdId) |
| 058 | OnClick_NavigateToHousehold false: navigate HouseholdDetails(HouseholdId=Event_HouseholdId) | navigate | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:125 /${APP_ID}/HouseholdDetails | `match` | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:125<br>The flag is on in TST (flag-values-tst.json:11), so this branch does not run on TST. React builds it as the model says. |
| 059 | Handler_Bookmark | empty action (end); no widget calls it | not found (searched: Handler_Bookmark, handlerBookmark in containers/SupperMeetingDetails, components/directory/SupperMeetingDetails; README.md:38 of the component says … | `n/a` | -<br>dead in the model: no widget or event calls Handler_Bookmark (KB ui/supper-meetings-oneschool.md, "Dead"). React must not implement it. |
| 060 | Handler_Share: ShowComingSoonMessage (+ [DISABLED] ShareEntity_ByURL) | calls ShowComingSoonMessage; the ShareEntity_ByURL node is disabled; no widget calls the handler | not found (searched: ComingSoon, Handler_Share, handlerShare in containers/SupperMeetingDetails, components/directory/SupperMeetingDetails) | `n/a` | -<br>dead in the model: no caller, and the ShareEntity_ByURL node is [DISABLED] (KB ui/supper-meetings-oneschool.md, "Dead"). React must not implement it. |
| 061 | ScreenEvent_OnReady: JavaScript Get_IsViewRestoredFromCache (FromCache, FromHistory) | wasCurrentViewRestoredFromCache | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:72 via useFlowState (app/src/platform/navigation/flowState.ts) | `match` | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:72<br>The TST JavaScript sets only FromCache (Get_IsViewRestoredFromCacheJS); FromHistory stays False. One restored flag in React is equal. |
| 062 | OnReady If restored (FromCache or FromHistory) -> end | no skeleton, no refresh | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:112-113 | `differs` | app/docs/reference/stack.md:228 (F40); app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:112-113<br>Restored with data: no call, as TST. Restored without data (the user left before the answer): React calls again, TST keeps the skeleton. The ADR line names this the intended difference F40. |
| 063 | OnReady else: GetSkeleton_UI_SubdivisionDetails -> GetSubdivision.Subdivision, refresh GetSubdivision | skeleton, then refresh | app/src/containers/SupperMeetingDetails/hooks/supperMeetingDetailsState.ts:37-41 and useSupperMeetingDetails.ts:98-105 | `match` | app/src/containers/SupperMeetingDetails/hooks/supperMeetingDetailsState.ts:37-41<br>React sets the skeleton as the initial state, not in OnReady; TST: present (getSkeleton_UI_SubdivisionDetails$Action line 661) |

**Validations**

No validation: the element has no input widget.

**Business logic**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 064 | Order of the two data refreshes | child block OnReady (HouseholdList) vs block OnReady (DetailsBlock); OutSystems order not stated in the pack | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:109-114 | `match` | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:109-114<br>Both blocks start their refresh in OnReady of the same mount (fireAfterViewReady, OutSystems.js:17); React starts both in one Promise.all. The order of two concurrent calls has no user effect. |
| 065 | GetSubdivision skeleton action GetSkeleton_UI_SubdivisionDetails | GetSkeleton_UI_SubdivisionCard + GetSkeleton_SubdivisionActions -> Subdivision_Card, Subdivision_Actions | app/src/lib/ubtConnect/actions.ts:367-380 | `match` | app/src/lib/ubtConnect/actions.ts:367-380<br>Pack sets only Name/Address/HasBookmark/HasNotes/HasShare in the skeleton actions listed in actions.md (GetSkeleton_SubdivisionActions); counts 10 come from record defaults per parity-exemptions.json:609. GetSkeleton_UI_SubdivisionCard / CardContent bodies are in the shared pack, not read here |
| 066 | Wait server action (own-server) used by [DISABLED] nodes of HouseholdList | Wait(Duration) only in disabled nodes | not called; searched Wait in app/src for this flow: only pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:77 (pack/app.md) | `n/a` | -<br>dead in the model: only [DISABLED] nodes call Wait. |
| 067 | Unreachable nodes after Handler_Bookmark / Handler_Share / OnReady | dead End nodes | n/a: no code expected | `n/a` | -<br>dead in the model (unreachable End nodes). |
| 068 | Skeleton state shown while IsDataFetched is false (error path) | no error branch in the model; failure leaves IsDataFetched false | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:100-104 | `match` | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:100-104<br>The visible state equals TST: no failure branch, IsDataFetched stays False, the skeleton stays. The missing handleError call is row 042 (F1). |
| 108 | BR-UBTCON-899 | details fetched by subdivision id on a fresh open; no client gate | refresh on mount unless restored with data; no subscription or country check | `match` | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:109-114; KB rules/BR-UBTCON-899.md<br>The restored-without-data case is row 062 (F40). |
| 109 | BR-UBTCON-900 | flag on: preload of all households, HouseholdCarousel; off: HouseholdDetails | the same two branches | `match` | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:117-127; KB rules/BR-UBTCON-900.md<br>Rows 054-058. |

**Strings**

The element has no string of its own.

### 3.2 SupperMeeting_HouseholdList

**Identity**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 069 | Block input In_SubdivisionId (mandatory) and event Event_OnClick_Household(HouseholdId, HouseholdIdList) | input and event signature | app/src/components/directory/SupperMeetingHouseholdList/SupperMeetingHouseholdList.tsx:20 | `match` | app/src/components/directory/SupperMeetingHouseholdList/SupperMeetingHouseholdList.tsx:20<br>The id is fetched by the container, not the view: component takes data props only; TST: present (In_SubdivisionId passed by DetailsBlock line 400; event handler at 180-181) |

**Data**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 070 | Data action GetSubdivisionHouseholds (OnDemand) -> GetHouseholdList_BySubdivisionId | call-server GetHouseholdList_BySubdivisionId(In_SubdivisionId); Household_GalleryCard_List = Out_HouseholdList | app/src/api/locality/repository.ts:142-148 | `mock-only` | app/src/api/locality/repository.ts:142-148; app/src/containers/SupperMeetingDetails/mocks.ts:27-35<br>Production needs GetHouseholdList_BySubdivisionId (Connect_Household_CS) behind DataActionGetSubdivisionHouseholds. The React call equals TST; its fetch moment is row 077. |
| 071 | [DISABLED] sample nodes in data action (SubdivisionHousehold sample, ListAppendAll x4, Wait(2)) | disabled nodes in unreachable list | n/a: no code expected | `n/a` | -<br>dead in the model ([DISABLED] sample nodes and Wait(2)). |

**UI tree**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 072 | Household_GalleryCard_List In_Household_GalleryCard_List, In_IsLoading = not IsDataFetched | args from the data action | app/src/components/directory/SupperMeetingHouseholdList/SupperMeetingHouseholdList.tsx:35-37 | `match` | app/src/components/directory/SupperMeetingHouseholdList/SupperMeetingHouseholdList.tsx:35-37<br>TST: present (In_IsLoading: !isDataFetchedAttr; In_Household_GalleryCard_List) |
| 073 | Data fetch status passed to the list | calculateDataFetchStatus(GetSubdivisionHouseholds.DataFetchStatus) | app/src/components/directory/SupperMeetingHouseholdList/SupperMeetingHouseholdList.tsx:38-41 | `match` | app/src/components/directory/SupperMeetingHouseholdList/SupperMeetingHouseholdList.tsx:38-41<br>TST: present (_in_Household_GalleryCard_ListInDataFetchStatus: calculateDataFetchStatus(...)) |

**Block actions**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 074 | Event_OnClick_Household_GalleryCard -> Event_OnClick_Household(HouseholdId, ConvertList(list, HouseholdId)) | raise event with the ids of every row | app/src/components/directory/SupperMeetingHouseholdList/SupperMeetingHouseholdList.tsx:42-47 | `match` | app/src/components/directory/SupperMeetingHouseholdList/SupperMeetingHouseholdList.tsx:42-47<br>Skeleton rows have no HouseholdId: React maps missing to '0'; TST: present (typeConvertRecordList of household_GalleryCard_ListOut, line 181) |
| 075 | OnReady: JavaScript IsViewRestoredFromCache | wasCurrentViewRestoredFromCache | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:109-113 (restored handling shared with the block) | `match` | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:109-113<br>TST: present (line 378) |
| 076 | OnReady restored true -> end | no skeleton, no refresh | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:112 | `differs` | app/docs/reference/stack.md:228 (F40); app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:112<br>Restored with data: no call, as TST. Restored without data: React calls again, TST keeps the skeleton rows. The ADR line names this the intended difference F40. |
| 077 | OnReady else: GetSkeletonList_UI_SubdivisionHousehold -> list; refresh GetSubdivisionHouseholds | skeleton rows (default length 4), then refresh | app/src/containers/SupperMeetingDetails/hooks/supperMeetingDetailsState.ts:40 ; useSupperMeetingDetails.ts:86-95 | `match` | app/src/containers/SupperMeetingDetails/hooks/supperMeetingDetailsState.ts:40<br>Skeleton row: HouseholdName 'John & Jane Smith', ChildrenNames 'Jack' (app/src/lib/ubtConnect/actions.ts:343); TST: present (line 286-294) |

**Validations**

No validation: the element has no input widget.

**Business logic**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 078 | GetSkeletonList_UI_SubdivisionHousehold loop (ListLength > 0, ListAppend, ListLength-1) | loop appending GetSkeleton_UI_SubdivisionHousehold | app/src/lib/ubtConnect/actions.ts:348-350 | `match` | app/src/lib/ubtConnect/actions.ts:348-350 |
| 079 | Household fetch failure | no branch in the model | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:88-92 and state (supperMeetingDetailsState.ts:53-54) | `partial` | TST SupperMeeting_HouseholdList.mvc.js:324 (safeExecuteClientAction of OnReady), :293 (refresh); migration/runtime-sources/OutSystems.js:17; app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:88-93; app/src/containers/SupperMeetingDetails/hooks/supperMeetingDetailsState.ts:53-54<br>Same: the status becomes Error (list-error through calculateDataFetchStatus). TST runs OnReady through safeExecuteClientAction, so a failed refresh goes to handleError (the flow handler; migration/knowledge/shell-facts.md U10: the fetched flows delegate to App_Common). React catches the error and calls no flow handler.<br>Finding F1 (major). |
| 110 | BR-UBTCON-901 | households loaded by subdivision on a fresh open; skeleton list first | skeleton list of 4 as the initial state, then the refresh | `match` | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:86-95, :112; app/src/containers/SupperMeetingDetails/hooks/supperMeetingDetailsState.ts:40; KB rules/BR-UBTCON-901.md<br>Rows 075-077. |

**Strings**

The element has no string of its own.

### 3.3 SupperMeeting_ImageCard_Content

**Identity**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 080 | Block inputs In_Subdivision_CardContent (mandatory), In_ShowAddress | no events; used by Locality_Subdivisions, Map_PoIPreview, SupperMeeting_DetailsBlock | app/src/components/directory/SupperMeetingCardContent/SupperMeetingCardContent.tsx:12-17 | `match` | app/src/components/directory/SupperMeetingCardContent/SupperMeetingCardContent.tsx:12-17<br>Other users: pack/blocks.md line 846; TST: present (in_Subdivision_CardContentIn) |

**Data**

No item.

**UI tree**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 081 | ImageCard__Content In_Title = In_Subdivision_CardContent.Name | title | app/src/components/directory/SupperMeetingCardContent/SupperMeetingCardContent.tsx:32-33 | `match` | app/src/components/directory/SupperMeetingCardContent/SupperMeetingCardContent.tsx:32-33<br>TST: present (In_Title: nameAttr) |
| 082 | Statistics args: BretherenCount, GenderSplit, HouseholdCount | In_BretherenCount, In_GenderSplit=GetDescriptor_Subdivision_GenderSplit(BrothersCount, SistersCount), In_HouseholdCount | app/src/components/directory/SupperMeetingCardContent/SupperMeetingCardContent.tsx:36-43 | `match` | app/src/components/directory/SupperMeetingCardContent/SupperMeetingCardContent.tsx:36-43<br>TST: present (lines 177-191) |
| 083 | If In_ShowAddress (#ShowAddress2) -> CustomContainer(MarginSize Vertical=Small) > AddressPopup_Wrapper(In_Address=Address) | condition true: container and popup; false: nothing | app/src/components/directory/SupperMeetingCardContent/SupperMeetingCardContent.tsx:44-48 | `match` | app/src/components/directory/SupperMeetingCardContent/SupperMeetingCardContent.tsx:44-48<br>Condition true branch, false branch (no render): both present. Logic of AddressPopup_Wrapper: UBTConnect_Utils.CW_CTA_PopUps (references.md TST file present); TST: present (If at the placeholder, lines 210-242) |

**Block actions**

No item.

**Validations**

No validation: the element has no input widget.

**Business logic**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 084 | GetDescriptor_Subdivision_GenderSplit(BrothersCount, SistersCount) | function in UBTConnect (not in pack bodies) | app/src/lib/ubtConnect/actions.ts:336-339 | `match` | TST UBTConnect.controller.js:8745; app/src/lib/ubtConnect/actions.ts:336-339<br>Body checked on TST: In_BrothersCount + " " + Brother.Plural + " & " + In_SistersCount + " " + Sister.Plural. |
| 111 | BR-UBTCON-902 | address and pop-up only when In_ShowAddress; statistics always | the same condition | `match` | app/src/components/directory/SupperMeetingCardContent/SupperMeetingCardContent.tsx:36-48; KB rules/BR-UBTCON-902.md<br>Row 083. |

**Strings**

The element has no string of its own.

### 3.4 SupperMeeting_ImageCard_Content_IconText

**Identity**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 085 | Block inputs In_Text, In_FontSize, In_UBT_IconId, In_UBT_ColorId (all mandatory) | four inputs; used by Statistics | app/src/components/directory/SupperMeetingCardIconText/SupperMeetingCardIconText.tsx:8-18 | `match` | app/src/components/directory/SupperMeetingCardIconText/SupperMeetingCardIconText.tsx:8-18<br>TST: present (in_TextIn, in_FontSizeIn, in_UBT_IconIdIn, in_UBT_ColorIdIn) |

**Data**

No item.

**UI tree**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 086 | IconText SpacingSize=ExtraSmall, Text=In_Text, TextOptions {FontSize=In_FontSize, FontWeight=SemiBold} | block IconText | app/src/components/directory/SupperMeetingCardIconText/SupperMeetingCardIconText.tsx:32-36 | `match` | app/src/components/directory/SupperMeetingCardIconText/SupperMeetingCardIconText.tsx:32-36<br>TST: present (lines 185-192) |
| 087 | Icon In_ColorId, In_IconId, In_SizeId=NonStandard_16 | placeholder Icon | app/src/components/directory/SupperMeetingCardIconText/SupperMeetingCardIconText.tsx:37 | `match` | app/src/components/directory/SupperMeetingCardIconText/SupperMeetingCardIconText.tsx:37<br>TST: present (lines 218-222) |

**Block actions**

No item.

**Validations**

No validation: the element has no input widget.

**Business logic**

No item.

**Strings**

The element has no string of its own.

### 3.5 SupperMeeting_ImageCard_Content_Statistics

**Identity**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 088 | Block inputs In_BretherenCount, In_HouseholdCount, In_GenderSplit (mandatory) | three inputs | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:12-18 | `match` | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:12-18<br>TST: present (in_GenderSplitIn, in_HouseholdCountIn, in_BretherenCountIn) |

**Data**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 089 | Local variable FontSize: UBT_FontSize = ExtraSmall | block variable | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:30 | `match` | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:30<br>TST: present (fontSizeVar) |

**UI tree**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 090 | CustomContainer Options {MarginSize: {}, TextOptions {FontSize ExtraSmall}} | outer container | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:34 | `match` | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:34<br>TST: present (lines 172-183) |
| 091 | Container #DIV_Statistics style 'display-flex gap-s flex-wrap flex-direction-column' | container with style | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:35 | `match` | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:35<br>TST: present (style: "display-flex gap-s flex-wrap flex-direction-column") |
| 092 | #DIV_Bretherens > Columns_Two (ReduceFirst, Small) Left IconText / Right ImageCard__Content__Tag(Content=In_GenderSplit) | two columns | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:37-48 | `match` | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:37-48<br>TST: present (lines 225-231, 292-294) |
| 093 | Left IconText args: Text=GetDescriptor_BretherenCount, Icon/Color=GetLookupConcepts().Brethren | args | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:41-44 | `match` | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:41-44<br>TST: present (lines 254-272) |
| 094 | #DIV_Households > IconText Text=GetDescriptor_Subdivision_HouseholdCount, Icon/Color=GetLookupConcepts().Household | args | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:51-56 | `match` | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:51-56<br>TST: present (lines 325-343) |

**Block actions**

No item.

**Validations**

No validation: the element has no input widget.

**Business logic**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 095 | GetDescriptor_BretherenCount / GetDescriptor_Subdivision_HouseholdCount / GetLookupConcepts | functions of UBTConnect / UBTConnectLibrary (bodies not in pack) | app/src/lib/ubtConnect/actions.ts:144-151 and | `match` | TST UBTConnect.controller.js:8538, :8814; app/src/lib/ubtConnect/actions.ts:144-151<br>Bodies checked on TST: <Plural> + ": " + count. The values of GetLookupConcepts belong to UBTConnectLibrary. |

**Strings**

The element has no string of its own.

### 3.6 Blocks of other flows

- `EntitiesCarousel`, `EntitiesCarouse_lSupperMeetingDetails` (Directory_Caroussel, `_shared/pack/blocks.md`): the arguments match (rows 010, 011). The carousel logic (BR-UBTCON-903, BR-UBTCON-904) belongs to the report of the shared pack.
- `CommonUI_InsideLayout` (App_Common, `App_Common/pack/blocks.md`): no arguments, match (rows 012, 032). Checked in the report of App_Common.
- `Directory_EntityDetailsActions` (Directory_CommonBlocks, `_shared/pack/blocks.md`): the arguments match (row 051). Its logic (BR-UBTCON-833 to 840) is not checked here (shared).
- `Household_GalleryCard_List` (Directory_Household_Blocks, `_shared/pack/blocks.md`): the arguments, the status and the event match (rows 072-074). Its empty state (BR-UBTCON-841) is not checked here (shared).
- `SubLayout_DirectoryDetailScreen`, `SubLayout_DirectoryDetailScreen_Section` (SubLayout, `_shared/pack/blocks.md`): the arguments match (rows 043, 049, 050).
- Library blocks (`Layout_DetailPage`, `CustomText`, `SkeletonSection`, `ImageCard_LazyLoading`, `ImageCard__Content`, `ImageCard__Content__Tag`, `Columns_Two`, `IconText`, `Icon`, `CustomContainer`, `UBT_LazyImage`, `AddressPopup_Wrapper`): the arguments match (rows 008, 009, 044-048, 081-083, 086, 087, 090-094). Their logic belongs to UBTConnectLibrary and UBTConnect_Utils. `UBT_LazyImage` follows CR-SupperMeeting_Details-1 §1 (applied: OnReady runs again when EntityId changes, as on TST).

## 4. Shared blocks and actions

Client variables and flow-level rows (the shared blocks read the variables; the own blocks do not):

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 096 | Client.App_PIN_BiometricEnabled | Boolean, default True, read; read by shared blocks of the transitive set, not by the 5 own blocks | app/src/platform/session/clientVars.ts:30 | `match` | app/src/platform/session/clientVars.ts:30<br>Shared: checked in App_PIN-126 and App_Menu-061 (match). |
| 097 | Client.App_Policies_HasPolicyToAccept | Boolean, read and written; read by shared blocks of the transitive set, not by the 5 own blocks | app/src/platform/session/userInfo.ts:44 | `match` | app/src/platform/session/userInfo.ts:44<br>Shared: checked in App_Policies-034 and App_Common-078 (match). |
| 098 | Client.App_Policies_RedirectURL | Text, read and written; read by shared blocks of the transitive set, not by the 5 own blocks | not found (searched: App_Policies_RedirectURL in app/src excluding tests and mocks) | `n/a` | migration/clarify/flows/App_Policies/checklist.json (App_Policies-083)<br>dead in the model: only disabled nodes read and write it (App_Policies-083). React must not implement it. |
| 099 | Client.Bookmarks_IsSynched | Boolean, read; read by shared blocks of the transitive set, not by the 5 own blocks | app/src/platform/bootstrap/appStartSteps.ts:181 (write); postLogin.ts:42 | `match` | app/src/platform/bootstrap/appStartSteps.ts:181; app/src/platform/bootstrap/postLogin.ts:42; app/src/containers/EntityDetailsActions/useEntityDetailsActions.ts:244<br>The shared block Directory_EntityDetailsActions reads it (BR-UBTCON-840); its branches are checked in the report of Directory_CommonBlocks. |
| 100 | Client.IsNavigateToHomeOnBack | Boolean, read and written; read by shared blocks of the transitive set, not by the 5 own blocks | app/src/platform/bootstrap/appStartSteps.ts:180 | `match` | app/src/platform/bootstrap/appStartSteps.ts:180<br>Shared: checked in App_Common-074, App_Common-082 and App_PIN-076 (match). |
| 101 | Client.Notes_IsSynched | Boolean, read; read by shared blocks of the transitive set, not by the 5 own blocks | app/src/platform/bootstrap/appStartSteps.ts:183 | `match` | app/src/platform/bootstrap/appStartSteps.ts:183; app/src/platform/bootstrap/postLogin.ts:44; app/src/containers/EntityDetailsActions/useEntityDetailsActions.ts:245<br>The shared block Directory_EntityDetailsActions reads it (BR-UBTCON-840); its branches are checked in the report of Directory_CommonBlocks. |
| 102 | Strings in own screens and blocks: 'Supper Meeting' | strings.md | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:37 and pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:22 | `match` | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:37<br>2 of 2 own-screen occurrences found |
| 103 | Strings 'Subdivision Name Example', 'Subdivision Formatted Address Example', 'John & Jane Smith', 'Show student numbers', 'Actions' | skeleton and lookup values | app/src/lib/ubtConnect/actions.ts:343,371,376,327 (literal values) | `match` | app/src/lib/ubtConnect/actions.ts:343,371,376,327<br>Found |
| 104 | Strings of shared blocks (PIN unlock, unsupported version, OneSchoolGlobal, Household, 'Photobook ...', 'Household gallery', 'Supper Meeting:' etc.) | strings.md lines of other flows | not checked here: owned by the flows of those blocks. Seen in React elsewhere: components/household/HouseholdAddress/HouseholdAddress.tsx:98 ; … | `n/a` | -<br>Shared: the strings belong to the own blocks of other flows (pack/strings.md); the reports of those flows check them (template sections 3 and 4). No string of this flow is in the row. |
| 105 | Mock data of the flow | n/a | app/src/containers/SupperMeetingDetails/mocks.ts:25-37 (data actions), app/src/pages/SupperMeeting_Carousel/mocks.ts:13-18 (preload seed), … | `mock-only` | app/src/containers/SupperMeetingDetails/mocks.ts:25-37<br>Production needs GetSubdivisionDetails_BySubdivisionId and GetHouseholdList_BySubdivisionId (rows 038, 070). The shape follows the data-action contract. Mock data is not a finding. |

Shared client actions that the own screens and blocks call:

| Action | Owner | React | Verdict | Evidence / note |
|---|---|---|---|---|
| GetHasCarouselEnabled | UBTConnect_Utils | `useFlag('C2EnableCarousel')` | `match` | `app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:31`; rows 034, 054 |
| GetPreloadObject, SetPreloadObject, AssignFromObject | NavigationHandler | `usePreloadObject`, `setPreloadObject`, `assignFromObject` | `match` | rows 007, 015, 016, 056 |
| GetSkeleton_UI_SubdivisionDetails, GetSkeletonList_UI_SubdivisionHousehold | UBTConnect | `app/src/lib/ubtConnect/actions.ts:343-380` | `match` | rows 063, 065, 077, 078 |
| GetDescriptor_Subdivision_GenderSplit, GetDescriptor_BretherenCount, GetDescriptor_Subdivision_HouseholdCount | UBTConnect | `app/src/lib/ubtConnect/actions.ts:144-151, :336-339` | `match` | rows 084, 095 (bodies checked on TST) |
| Get_LookupSection, GetLookupConcepts | UBTConnectLibrary | `app/src/lib/ubtConnect/actions.ts` | `match` | rows 050, 093-095; values not checked here (shared) |
| ShowComingSoonMessage | UBTConnect_Utils | - | `n/a` | only the dead Handler_Share calls it (row 060) |

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| F1 | major | SupperMeeting_DetailsBlock / GetSubdivision; SupperMeeting_HouseholdList / GetSubdivisionHouseholds | TST runs OnReady through `safeExecuteClientAction` (`SupperMeeting_DetailsBlock.mvc.js:720-722`, `SupperMeeting_HouseholdList.mvc.js:324`). The runtime calls `handleError` when the action fails (`OutSystems.js:17`), and the block passes the error to the flow handler (`SupperMeeting_DetailsBlock.mvc.js:758-760`). The fetched flows delegate to App_Common, which shows the message (`migration/knowledge/shell-facts.md` U10). React catches both errors: the skeleton stays, or the list gets the Error status. No code passes the error to the flow handler, so no message shows. Rows: 042, 079. App_Services F2 has the same gap. | `app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:88-93, :100-104` | Q1. With option (a): pass a failed refresh to `raiseToFlowHandler` once per failure, and keep the skeleton and the Error status. |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| - | - | - | - | The reader and the judge found no difference for the 2 screens and the 5 own blocks. |

### 6.2 KB pages vs TST

No `K` line. The KB page `ui/supper-meetings-oneschool.md` and the rules BR-UBTCON-898 to 902 agree with DEV and TST.

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | Pass a failed GetSubdivision or GetSubdivisionHouseholds refresh to the flow handler, as TST does (F1)? | TST calls `handleError` after a failed OnReady refresh, so the user sees a message. React shows the skeleton or the Error status only. The flow controller `UBTConnect.Directory_SupperMeetings.controller.js` is not in the local sources: the review pass confirms its handler through the MCP. | (a) Shared fix with App_Services Q3: the container passes a failed refresh to `raiseToFlowHandler`. (b) Fix this container only. (c) Record a decision: no message. | (a), with the same answer as App_Services Q3. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 11 | 10 | 0 | 0 | 1 | 0 | 0 | 0 |
| data | 19 | 12 | 1 | 0 | 0 | 4 | 2 | 0 |
| ui | 32 | 32 | 0 | 0 | 0 | 0 | 0 | 0 |
| actions | 25 | 20 | 0 | 0 | 2 | 0 | 3 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 19 | 14 | 1 | 0 | 1 | 1 | 2 | 0 |
| strings | 5 | 4 | 0 | 0 | 0 | 0 | 1 | 0 |
| **total** | **111** | **92** | **2** | **0** | **4** | **5** | **8** | **0** |
