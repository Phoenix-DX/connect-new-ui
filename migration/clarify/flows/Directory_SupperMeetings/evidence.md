# Evidence of flow Directory_SupperMeetings

Reader agent, stage 1. Date 2026-10-27. Verdicts are empty; the judge decides.

## SupperMeeting_Carousel

### identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-001 | identity | Screen route / roles | roles Registered, UBTOne_User; URL structure QueryString | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:18 `export default function SupperMeeting_Carousel()`; route meta app/src/app/routes.ts:83-88 (see next row); member-route check `MEMBER_ROUTE` is the default of ROUTE_META (app/src/app/routes.ts:92 `ROUTE_META[route.screen] ?? MEMBER_ROUTE`) | present (SupperMeeting_Carousel.mvc.js) | Roles: no row-level check done in this pack; board row 'built' (migration/board.md:35) |
| Directory_SupperMeetings-002 | identity | Input In_StartingSupperMeetingId: Long Integer | input parameter, Long Integer | app/src/pages/SupperMeeting_Carousel/inputs.ts:22-25 `In_StartingSupperMeetingId: osLongInput(params.get('In_StartingSupperMeetingId'))` | present (in_StartingSupperMeetingIdIn) | Absent or invalid value gives '0' (OutSystems Long Integer default), inputs.ts:17-20 |
| Directory_SupperMeetings-003 | identity | Flag redirect C2EnableCarousel | (not in the screen model) flag action GetHasCarouselEnabled; migration/flags.md | app/src/app/routes.ts:83-88 `SupperMeeting_Carousel: { flag: 'C2EnableCarousel', when: false, to: 'SupperMeeting_Details', inputs: { In_StartingSupperMeetingId: 'In_SubdivsionId' } }` | - | Flag off redirects to SupperMeeting_Details. Callers of the original (Locality_Subdivisions etc.) choose the screen with GetHasCarouselEnabled; ADR line app/docs/reference/stack.md:237 names flagRedirect on this route |

### data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-004 | data | Local variable SupperMeetingsIdList: PreloadedSupperMeetings | screen variable, record with SupperMeetingIds: Long Integer List | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:37 `useViewState<PreloadedSupperMeetings>('SupperMeetingsIdList', initial.preload)` | present (supperMeetingsIdListVar) |  |
| Directory_SupperMeetings-005 | data | Local variable StartingPosition: Integer | screen variable, default 0 | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:39 `useViewState('StartingPosition', initial.position)` | present (startingPositionVar) |  |
| Directory_SupperMeetings-006 | data | Local variable EntitieslCarousel_Items: EntitiesCarousel_Item List | screen variable, list of EntityId: Text | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:38 `useViewState('EntitieslCarousel_Items', initial.items)` | present (entitieslCarousel_ItemsVar) | React EntityId holds a Long Integer text (supperMeetingCarouselActions.ts:34 `{ EntityId: textToLongInteger(id) }`) |
| Directory_SupperMeetings-007 | data | Preload object (GetPreloadObject) | NavigationHandler.GetPreloadObject; set by the previous screen | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:30-36 `usePreloadObject(); ... preloadObject ?? mockPreload(In_StartingSupperMeetingId)` | present (NavigationHandlerController.getPreloadObject$Action) | Mock phase: when no preload waits, mockPreload from pages/SupperMeeting_Carousel/mocks.ts:13-18 (3 ids). Caller that sets the preload for this screen: searched `SupperMeeting_Carousel` in app/src outside the page: only app/routes.ts and generated css (no setPreloadObject call to this screen found) |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-008 | ui | Layout_DetailPage In_AlignTitleLeft=False | block Layout_DetailPage, In_AlignTitleLeft=False | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:34-36 `<DetailLayoutContainer id="$b1" inAlignTitleLeft={false}` | present (In_AlignTitleLeft: false) |  |
| Directory_SupperMeetings-009 | ui | CustomText Placeholder_Header_Title In_Text="Supper Meeting", In_TextOptions={} | CustomText with default TextOptions | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:37 `<CustomText id="$b2" inText="Supper Meeting" inTextOptions={{}} />` | present (In_Text: "Supper Meeting", TextOptionsRec default) |  |
| Directory_SupperMeetings-010 | ui | EntitiesCarousel (In_ConnectEntityTypeId, In_EntitiesCarousel_Items, In_StartingPosition) | args: SupperMeetings_aka_Subdivisions, EntitieslCarousel_Items, StartingPosition; no events handled | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:39-45 `<EntitiesCarousel id="$b3" inConnectEntityTypeId={Connect_Entity.SupperMeetings_aka_Subdivisions} inStartingPosition={carousel.startingPosition} inEntitiesCarouselItems={carousel.entitiesCarouselItems} renderSupperMeetingDetails={...}` | present (3 inputs; no events object) | Logic of EntitiesCarousel and EntitiesCarouse_lSupperMeetingDetails: flow Directory_Caroussel (pack/blocks.md signature only) |
| Directory_SupperMeetings-011 | ui | Slide content: EntitiesCarouse_lSupperMeetingDetails -> SupperMeeting_DetailsBlock | per slide, In_SubdivisionId -> block (blocks.md: used by EntitiesCarouse_lSupperMeetingDetails) | app/src/components/directory/CarouselSupperMeetingDetails/CarouselSupperMeetingDetails.tsx:40-44 `renderSupperMeetingDetails?.({ id: ..., subdivisionId: inSubdivisionId, carouselTag: <div id="...-Placeholder_CarouselTag">{children}</div> })`; page slot at SupperMeeting_CarouselPage.tsx:24-31 | - | React renders the block through a slot (rule 4: component does not import a container) |
| Directory_SupperMeetings-012 | ui | CommonUI_InsideLayout (Placeholder_CommonUI_Inside_Layout) | block CommonUI_InsideLayout, no args | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:47 `placeholderCommonUIInsideLayout={<CommonUiLayout id="$b4" />}` | present (inputs: {}) | Logic of the block: flow App_Common |
| Directory_SupperMeetings-013 | ui | Placeholders Header_Right, headerContent, bottom | TST passes PlaceholderContent.Empty | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:34-48 (no header-right, header content or bottom prop) | present (Empty) |  |

### actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-014 | actions | ScreenEvent_OnInitialize: condition SupperMeetingsIdList.SupperMeetingIds.Empty | If list empty -> run the init; else end | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:40-44 `const restored = storedPreload.SupperMeetingIds.length > 0; ... restored ? storedItems : initial.items` | present (supperMeetingIdsAttr.isEmpty) | Condition is realised by the view cache: restored (non-empty) keeps the restored variables, else the init result is used |
| Directory_SupperMeetings-015 | actions | OnInitialize true branch: GetPreloadObject | call GetPreloadObject() | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:30 `usePreloadObject()` | present |  |
| Directory_SupperMeetings-016 | actions | OnInitialize: AssignFromObject(Preload -> SupperMeetingsIdList) | call AssignFromObject(ObjectValue=Preload, ToObjectRef=ToObject(SupperMeetingsIdList)) | app/src/pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts:17-21 `if (!isRecord(preload) \|\| !Array.isArray(preload.SupperMeetingIds)) return EMPTY_PRELOAD; ... ids.map((id) => textToLongInteger(text(id)))` | present |  |
| Directory_SupperMeetings-017 | actions | OnInitialize: ListIndexOf(Value = In_StartingSupperMeetingId) | call ListIndexOf | app/src/pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts:25-28 `preload.SupperMeetingIds.findIndex((id) => textToLongInteger(id) === start)` | present (p.equals(in_StartingSupperMeetingIdIn)) |  |
| Directory_SupperMeetings-018 | actions | OnInitialize: If ListIndexOf.Position <> -1 -> StartingPosition = Position | true: assign; false: keep default | app/src/pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts:28 `return index !== -1 ? index : 0;` | present (positionOut !== -1) | False branch keeps the variable default 0 in both |
| Directory_SupperMeetings-019 | actions | OnInitialize: For each SupperMeetingIds -> ListAppend EntitiesCarousel_Item {EntityId=TextToLongInteger(Current)} | [M1] loop runs on both branches of the position If | app/src/pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts:33-34 `preload.SupperMeetingIds.map((id) => ({ EntityId: textToLongInteger(id) }))` | present (listAppend with EntitiesCarousel_ItemRec, longIntegerToText(textToLongInteger(longIntegerToText(Current)))) | Loop runs for position -1 too: React items built unconditionally (supperMeetingCarouselActions.ts:55) |
| Directory_SupperMeetings-020 | actions | OnInitialize false branch (list not empty): end | end, no change | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:40-44 (restored variables) | present |  |
| Directory_SupperMeetings-021 | actions | Unreachable nodes (2 End nodes) | listed as unreachable in the model | n/a: no code expected | - | [DEAD BRANCH] class: unreachable End nodes, no behaviour |
| Directory_SupperMeetings-022 | actions | Lifecycle OnInitialize only (no OnReady, OnParametersChanged, OnDestroy) | lifecycle: OnInitialize -> ScreenEvent_OnInitialize | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:27-45 (hook with no effect) | present (dataFetchActionNames = []) |  |

### logic

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-023 | logic | Data fetch of the screen | none of its own; blocks fetch | app/src/pages/SupperMeeting_Carousel/mocks.ts:20 `export const handlers: RequestHandler[] = [];` | present (dataFetchActionNames = []) |  |
| Directory_SupperMeetings-024 | logic | View cache of screen variables (back navigation) | OutSystems keeps screen variables when a view is restored | app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts:24-26 comment `kept by the view cache with their original names (P-BACK)` | - | Not in the DEV model; React design |

### strings

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-025 | strings | Strings of the screen: "Supper Meeting" | strings.md: Supper Meeting <- SupperMeeting_Carousel.Value | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:37 `inText="Supper Meeting"` | present |  |

## SupperMeeting_Details

### identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-026 | identity | Screen route / roles | roles Registered, UBTOne_User; URL structure QueryString | app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:13 `export default function SupperMeeting_Details()`; route meta `MEMBER_ROUTE (member, enforce)` per migration/clarify/flows/Directory_SupperMeetings/pack/app.md | present (SupperMeeting_Details.mvc.js) | Board row 'built' (migration/board.md:36) |
| Directory_SupperMeetings-027 | identity | Input In_SubdivsionId: Long Integer (mandatory) | mandatory input; typo kept | app/src/pages/SupperMeeting_Details/inputs.ts:18-20 `In_SubdivsionId: osLongInput(params.get('In_SubdivsionId'))` | present (in_SubdivsionIdIn, LongInteger; no explicit Mandatory check in the compiled screen) | Absent value gives '0' (inputs.ts:11-15) |

### data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-028 | data | Local variables | none | no variable in app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx | present (none besides the input) |  |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-029 | ui | Layout_DetailPage In_AlignTitleLeft=False | block Layout_DetailPage | app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:19-21 `<DetailLayoutContainer id="$b1" inAlignTitleLeft={false}` | present (In_AlignTitleLeft: false) |  |
| Directory_SupperMeetings-030 | ui | CustomText Placeholder_Header_Title "Supper Meeting" | In_Text="Supper Meeting", In_TextOptions={} | app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:22 `<CustomText id="$b2" inText="Supper Meeting" inTextOptions={{}} />` | present |  |
| Directory_SupperMeetings-031 | ui | SupperMeeting_DetailsBlock (In_SubdivsionId=In_SubdivsionId) | content placeholder | app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:24 `<SupperMeetingDetailsContainer id="$b3" subdivisionId={In_SubdivsionId} flags={supperMeetingDetailsFlags} />` | present (In_SubdivsionId: in_SubdivsionIdIn; placeholder_CarouselTag: Empty) | Placeholder_CarouselTag is empty on this screen (TST SupperMeeting_Details.js:206) |
| Directory_SupperMeetings-032 | ui | CommonUI_InsideLayout | block, no args | app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:26 `placeholderCommonUIInsideLayout={<CommonUiLayout id="$b4" />}` | present |  |

### actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-033 | actions | Screen actions / lifecycle | none (lifecycle: none) | no effect or handler in app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx | present (dataFetchActionNames = []) |  |

### logic

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-034 | logic | Flag read for the block (GetHasCarouselEnabled) | read inside the block action OnClick_NavigateToHousehold | app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:16 `useSupperMeetingDetailsFlags()` -> app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:31 `useFlag('C2EnableCarousel')` | - | React reads the flag at screen level and passes it down |

### strings

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-035 | strings | Strings of the screen: "Supper Meeting" | strings.md: Supper Meeting <- SupperMeeting_Details.Value | app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:22 `inText="Supper Meeting"` | present |  |

## SupperMeeting_DetailsBlock

### identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-036 | identity | Block inputs / events | In_SubdivsionId: Long Integer (mandatory); no events; public False | app/src/containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx:7-16 `subdivisionId?: string; ... flags: SupperMeetingDetailsFlags; carouselTag?: ReactNode` | present (in_SubdivsionIdIn) | React container (decision W26) plus view components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx. Used by EntitiesCarouse_lSupperMeetingDetails and SupperMeeting_Details |
| Directory_SupperMeetings-037 | identity | Input read once (no OnParametersChanged) | lifecycle: OnReady only | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:62 `const [subdivisionId] = useState(inSubdivsionId);` | present (onParametersChangedEventHandler = null) |  |

### data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-038 | data | Data action GetSubdivision (fetch OnDemand) -> GetSubdivisionDetails_BySubdivisionId | call-server GetSubdivisionDetails_BySubdivisionId(In_SubdivisionId=In_SubdivsionId); Subdivision = Out_Screen_SubdivisionDetails | app/src/api/locality/repository.ts:132-138 `callAction('UBTConnect', 'SupperMeeting_DetailsBlock/DataActionGetSubdivision', { In_SubdivsionId: subdivisionId })` | present (screenservices/UBTConnect/Directory_SupperMeetings/SupperMeeting_DetailsBlock/DataActionGetSubdivision) | The server action GetSubdivisionDetails_BySubdivisionId (Connect_Subdivision_CS) is behind the data action endpoint; the mock answers the data action: app/src/containers/SupperMeetingDetails/mocks.ts:26 `recordedHandler('UBTConnect', 'SupperMeeting_DetailsBlock/DataActionGetSubdivision', { matchInputs: false })`. Pack app.md lists 'no mock handler found' for the server-action name: the handler sits on the data-action path |
| Directory_SupperMeetings-039 | data | Server action GetSubdivisionLocation_BySubdivisionId (pack: called by the flow) | listed in actions.md server actions of the flow; not called in the block model of this flow | not found (searched: GetSubdivisionLocation, SubdivisionLocation in app/src/api, containers/SupperMeetingDetails, components/directory) | - | Not wired to any node of the 5 own blocks in the pack; likely used by a shared block (EntitiesCarousel_* / Directory_*) |
| Directory_SupperMeetings-040 | data | Server actions GetHouseholdCoordinates, Get_Core_LocalityTimezone, Get_OneSchoolGlobalDetails, GetHouseholdDetails, Member_ContactDetails_Service, GetNotesByItemId, AddBookmark2, DeleteBookmarkByBookmarkId2 | called by shared blocks of the transitive set (actions.md); not by the 5 own blocks | not called by this flow's React files. Mocks elsewhere: containers/EntityDetailsActions/mocks.ts:35 `contractHandler('UBTConnect', 'ServiceAPIAddBookmark2'`; :49 `'ServiceAPIDeleteBookmarkByBookmarkId2'`; :150 `'Directory_EntityDetailsActions/DataActionFetchContactDetails'` | - | Judge: these belong to the flows of the shared blocks |
| Directory_SupperMeetings-041 | data | Data action fetch moment: refresh in ScreenEvent_OnReady | OnReady -> refresh data GetSubdivision | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:97-106 `const refreshSubdivision = async () => { ... subdivision = await fetchSubdivisionDetails(subdivisionId); ... write({ type: 'subdivisionFetched', subdivision })` | present (onReady -> screenEvent_OnReady$Action; dataFetchActionNames = ["getSubdivision$DataActRefresh"]) |  |
| Directory_SupperMeetings-042 | data | GetSubdivision failure | no handler in the model of the data action | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:100-104 `} catch { return; // IsDataFetched stays False: the skeleton stays.` | - | Model has no failure branch; React keeps the skeleton |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-043 | ui | Root: SubLayout_DirectoryDetailScreen | block with placeholders Placeholder_DetailCard, Placeholder_CallToAction, Placeholder_Content | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:65-100 `<DirectoryDetailLayout placeholderDetailCard={...} placeholderCallToAction={...} placeholderContent={...} />` | present (UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen) |  |
| Directory_SupperMeetings-044 | ui | Detail card: SkeletonSection In_IsLoading = not GetSubdivision.IsDataFetched | SkeletonSection around ImageCard_LazyLoading | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:60,67 `const isLoading = !isDataFetched; <Skeleton isLoading={isLoading}>` | present (In_IsLoading: !isDataFetchedAttr) |  |
| Directory_SupperMeetings-045 | ui | ImageCard_LazyLoading In_CardTypeId=Detail | args In_CardTypeId=UBT_ImageCardType.Detail | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:68-69 `<ImageCard inCardTypeId={UBT_ImageCardType.Detail}` | present (uBT_ImageCardType.detail) |  |
| Directory_SupperMeetings-046 | ui | UBT_LazyImage args: EntityId, EntityType, HasErrorMessage, ImageSize | EntityId=Subdivision_Card.SubdivisionId; EntityType=SupperMeetings_aka_Subdivisions; HasErrorMessage=True; ImageSize Width=MaxWidth_100vw | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:71-76 `<EntityLazyImage entityType={Connect_Entity.SupperMeetings_aka_Subdivisions} hasErrorMessage entityId={card.SubdivisionId ?? '0'} imageSize={{ Width: UBT_ImageSize.MaxWidth_100vw }} />` | present (EntityId: longIntegerToText(subdivisionIdAttr); HasErrorMessage: true; LazyImageSizeRec.width=maxWidth_100vw) | CR-SupperMeeting_Details-1 (UBT_LazyImage parameter change) named in pack/decisions.md |
| Directory_SupperMeetings-047 | ui | Placeholder_ImageTag -> placeholder-def Placeholder_CarouselTag | placeholder defined by the block, filled by caller | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:78 `placeholderImageTag={<div>{placeholderCarouselTag}</div>}` | present (OSWidgets.Placeholder at line 254; Details screen passes Empty) |  |
| Directory_SupperMeetings-048 | ui | Placeholder_Content: SupperMeeting_ImageCard_Content (In_ShowAddress=True, In_Subdivision_CardContent) | args from Subdivision_Card.Subdivision_Card_Content | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:79 `<SupperMeetingCardContent inShowAddress inSubdivisionCardContent={content} />` | present (In_ShowAddress: true; In_Subdivision_CardContent) |  |
| Directory_SupperMeetings-049 | ui | Call-to-action: SkeletonSection In_IsLoading = not IsDataFetched, then container | SkeletonSection > container > SubLayout_DirectoryDetailScreen_Section | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:84-90 `<Skeleton isLoading={isLoading}><div data-container=""><DirectoryDetailSection inTitle={get_LookupSection(false).Actions.Plural}>` | present (OSWidgets.Container at line 316) |  |
| Directory_SupperMeetings-050 | ui | Section In_Title = Get_LookupSection().Actions.Plural | In_Title=Get_LookupSection().Actions.Plural (In_IsLowercase default) | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:86 `inTitle={get_LookupSection(false).Actions.Plural}` | present (get_LookupSection$Action(false).actions.plural) | Value 'Actions' (app/src/lib/ubtConnect/actions.ts:324 `Actions: item('Action', 'Actions')`) |
| Directory_SupperMeetings-051 | ui | Directory_EntityDetailsActions args | ContactPopUp_OverrideOptions={Name: Subdivision_Card_Content.Name}, EnableOptions={EnableNotes: True}, EntityId=In_SubdivsionId, EntityType=SupperMeetings_aka_Subdivisions | app/src/containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx:42-47 `<EntityDetailsActionsContainer entityType={Connect_Entity.SupperMeetings_aka_Subdivisions} contactPopUpOverrideOptions={{ Name: content.Name ?? '' }} entityId={details.subdivisionId} enableOptions={{ EnableNotes: true }} />` | present (EnableOptions.enableNotesAttr = true; ContactPopUp_OverrideOptions.nameAttr; EntityId in_SubdivsionIdIn) | Events of the block (Event_MenuEdit, OnChange_Bookmark, ViewDetails_OnClick) are not handled in the DEV tree. Subdivision_Actions of the data are not passed to the block in either. Logic of the block: flow Directory_CommonBlocks (shared) |
| Directory_SupperMeetings-052 | ui | Content: SupperMeeting_HouseholdList #Block_Household_List (In_SubdivisionId) | block with In_SubdivisionId=In_SubdivsionId | app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx:93-98 `<SupperMeetingHouseholdList isDataFetched={households.isDataFetched} isError={households.isError} households={households.list} onEventOnClickHousehold={onHouseholdClick} />` | present (In_SubdivisionId: in_SubdivsionIdIn) | Alias Block_Household_List: searched `Block_Household_List` in app/src/components/directory/SupperMeetingDetails, containers/SupperMeetingDetails: not found (no widget alias in React) |

### actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-053 | actions | Event_OnClick_Household -> OnClick_NavigateToHousehold(HouseholdId, HouseholdIdList) | event handler wired to the action | app/src/containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx:49 `onHouseholdClick={details.onClickNavigateToHousehold}` | present (controller.onClick_NavigateToHousehold$Action at line 414) |  |
| Directory_SupperMeetings-054 | actions | OnClick_NavigateToHousehold: call GetHasCarouselEnabled | client action (flag) | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:31 `useFlag('C2EnableCarousel')`, :118 `if (flags.hasCarouselEnabled) {` | present (UBTConnect_UtilsController.getHasCarouselEnabled$Action, line 508) | Flag C2EnableCarousel; value on TST: see migration/knowledge/flag-values-tst.json (not read by the reader) |
| Directory_SupperMeetings-055 | actions | OnClick_NavigateToHousehold true: For each HouseholdIdList -> ListAppend PreloadedHouseholds.CarouselHouseholdItem {Household} | build CarouselPreloadedHouseholds | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:119-121 `CarouselHouseholdItem: householdIdList.map((household) => ({ Household: household }))` | present (listAppend at line 518) |  |
| Directory_SupperMeetings-056 | actions | OnClick_NavigateToHousehold true: SetPreloadObject(ToObject(PreloadedHouseholds)) | SetPreloadObject | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:122 `setPreloadObject(preloaded);` | present (setPreloadObject$Action, line 533) |  |
| Directory_SupperMeetings-057 | actions | OnClick_NavigateToHousehold true: navigate HouseholdCarousel(In_StartingHouseholdId=Event_HouseholdId), transition Inherited | navigate | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:123 `navigate(`/${APP_ID}/HouseholdCarousel`, { In_StartingHouseholdId: householdId });` | present (/UBTConnect/HouseholdCarousel, In_StartingHouseholdId) | Transition Inherited: searched `transition` in useSupperMeetingDetails.ts: not found (navigate default) |
| Directory_SupperMeetings-058 | actions | OnClick_NavigateToHousehold false: navigate HouseholdDetails(HouseholdId=Event_HouseholdId) | navigate | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:125 `navigate(`/${APP_ID}/HouseholdDetails`, { HouseholdId: householdId });` | present (/UBTConnect/HouseholdDetails, line 542) |  |
| Directory_SupperMeetings-059 | actions | Handler_Bookmark | empty action (end); no widget calls it | not found (searched: Handler_Bookmark, handlerBookmark in containers/SupperMeetingDetails, components/directory/SupperMeetingDetails; README.md:38 of the component says it is declared and not called) | present (handler_Bookmark$Action, line 582) | [DEAD BRANCH] unused handler; empty body |
| Directory_SupperMeetings-060 | actions | Handler_Share: ShowComingSoonMessage (+ [DISABLED] ShareEntity_ByURL) | calls ShowComingSoonMessage; the ShareEntity_ByURL node is disabled; no widget calls the handler | not found (searched: ComingSoon, Handler_Share, handlerShare in containers/SupperMeetingDetails, components/directory/SupperMeetingDetails) | present (handler_Share$Action calls showComingSoonMessage$Action, line 617) | [DISABLED] ShareEntity_ByURL node; unused handler; README.md:38 of components/directory/SupperMeetingDetails names it |
| Directory_SupperMeetings-061 | actions | ScreenEvent_OnReady: JavaScript Get_IsViewRestoredFromCache (FromCache, FromHistory) | wasCurrentViewRestoredFromCache | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:72 `onReady: (isAlive, restored) => {` via useFlowState (app/src/platform/navigation/flowState.ts) | present (line 772 `$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache()`) | React has one restored flag; FromCache or FromHistory are not separate |
| Directory_SupperMeetings-062 | actions | OnReady If restored (FromCache or FromHistory) -> end | no skeleton, no refresh | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:112-113 `restored && saved.households.isDataFetched ? undefined : refreshHouseholds(), restored && saved.isDataFetched ? undefined : refreshSubdivision()` | present | React also refreshes when the restored state had no data (comment lines 50-52) |
| Directory_SupperMeetings-063 | actions | OnReady else: GetSkeleton_UI_SubdivisionDetails -> GetSubdivision.Subdivision, refresh GetSubdivision | skeleton, then refresh | app/src/containers/SupperMeetingDetails/hooks/supperMeetingDetailsState.ts:37-41 `subdivision: getSkeleton_UI_SubdivisionDetails(), ...` and useSupperMeetingDetails.ts:98-105 | present (getSkeleton_UI_SubdivisionDetails$Action line 661) | React sets the skeleton as the initial state, not in OnReady |

### logic

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-064 | logic | Order of the two data refreshes | child block OnReady (HouseholdList) vs block OnReady (DetailsBlock); OutSystems order not stated in the pack | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:109-114 `await Promise.all([ ... refreshHouseholds(), ... refreshSubdivision() ])` | - | Comment lines 46-48: both started at once, households first |
| Directory_SupperMeetings-065 | logic | GetSubdivision skeleton action GetSkeleton_UI_SubdivisionDetails | GetSkeleton_UI_SubdivisionCard + GetSkeleton_SubdivisionActions -> Subdivision_Card, Subdivision_Actions | app/src/lib/ubtConnect/actions.ts:367-380 `Name: 'Subdivision Name Example', BretherenCount: 10, HouseholdCount: 10, BrothersCount: 10, SistersCount: 10, Address: 'Subdivision Formatted Address Example' ... Subdivision_Actions: { HasBookmark: true, HasNotes: true, HasShare: true }` | - | Pack sets only Name/Address/HasBookmark/HasNotes/HasShare in the skeleton actions listed in actions.md (GetSkeleton_SubdivisionActions); counts 10 come from record defaults per parity-exemptions.json:609. GetSkeleton_UI_SubdivisionCard / CardContent bodies are in the shared pack, not read here |
| Directory_SupperMeetings-066 | logic | Wait server action (own-server) used by [DISABLED] nodes of HouseholdList | Wait(Duration) only in disabled nodes | not called; searched Wait in app/src for this flow: only pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:77 (pack/app.md) | - | [DISABLED] use; n/a for React |
| Directory_SupperMeetings-067 | logic | Unreachable nodes after Handler_Bookmark / Handler_Share / OnReady | dead End nodes | n/a: no code expected | - | [DEAD BRANCH] class |
| Directory_SupperMeetings-068 | logic | Skeleton state shown while IsDataFetched is false (error path) | no error branch in the model; failure leaves IsDataFetched false | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:100-104 | - | Mock scenario `error`: calls fail, skeletons stay (containers/SupperMeetingDetails/mocks.ts:7-9) |

## SupperMeeting_HouseholdList

### identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-069 | identity | Block input In_SubdivisionId (mandatory) and event Event_OnClick_Household(HouseholdId, HouseholdIdList) | input and event signature | app/src/components/directory/SupperMeetingHouseholdList/SupperMeetingHouseholdList.tsx:20 `onEventOnClickHousehold?: (householdId: string, householdIdList: string[]) => void;` | present (In_SubdivisionId passed by DetailsBlock line 400; event handler at 180-181) | The id is fetched by the container, not the view: component takes data props only |

### data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-070 | data | Data action GetSubdivisionHouseholds (OnDemand) -> GetHouseholdList_BySubdivisionId | call-server GetHouseholdList_BySubdivisionId(In_SubdivisionId); Household_GalleryCard_List = Out_HouseholdList | app/src/api/locality/repository.ts:142-148 `callAction('UBTConnect', 'SupperMeeting_HouseholdList/DataActionGetSubdivisionHouseholds', { In_SubdivisionId: subdivisionId })` | present (screenservices/UBTConnect/Directory_SupperMeetings/SupperMeeting_HouseholdList/DataActionGetSubdivisionHouseholds, line 238) | Mock: app/src/containers/SupperMeetingDetails/mocks.ts:27-35 `contractHandler('UBTConnect', 'SupperMeeting_HouseholdList/DataActionGetSubdivisionHouseholds', ...)` fictional households by id (9202, 9203, else 1210). Pack lists 'no mock handler found' for the server-action name GetHouseholdList_BySubdivisionId |
| Directory_SupperMeetings-071 | data | [DISABLED] sample nodes in data action (SubdivisionHousehold sample, ListAppendAll x4, Wait(2)) | disabled nodes in unreachable list | n/a: no code expected | - | [DISABLED] dead in the model |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-072 | ui | Household_GalleryCard_List In_Household_GalleryCard_List, In_IsLoading = not IsDataFetched | args from the data action | app/src/components/directory/SupperMeetingHouseholdList/SupperMeetingHouseholdList.tsx:35-37 `<HouseholdGalleryCardList inIsLoading={!isDataFetched} inHouseholdGalleryCardList={households}` | present (In_IsLoading: !isDataFetchedAttr; In_Household_GalleryCard_List) |  |
| Directory_SupperMeetings-073 | ui | Data fetch status passed to the list | calculateDataFetchStatus(GetSubdivisionHouseholds.DataFetchStatus) | app/src/components/directory/SupperMeetingHouseholdList/SupperMeetingHouseholdList.tsx:38-41 `isError ? DataFetchStatus.Error : isDataFetched ? DataFetchStatus.Fetched : DataFetchStatus.Fetching` | present (_in_Household_GalleryCard_ListInDataFetchStatus: calculateDataFetchStatus(...)) |  |

### actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-074 | actions | Event_OnClick_Household_GalleryCard -> Event_OnClick_Household(HouseholdId, ConvertList(list, HouseholdId)) | raise event with the ids of every row | app/src/components/directory/SupperMeetingHouseholdList/SupperMeetingHouseholdList.tsx:42-47 `onEventOnClickHouseholdGalleryCard={(householdId) => onEventOnClickHousehold?.(householdId, households.map((household) => household.HouseholdId ?? '0'))}` | present (typeConvertRecordList of household_GalleryCard_ListOut, line 181) | Skeleton rows have no HouseholdId: React maps missing to '0' |
| Directory_SupperMeetings-075 | actions | OnReady: JavaScript IsViewRestoredFromCache | wasCurrentViewRestoredFromCache | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:109-113 (restored handling shared with the block) | present (line 378) |  |
| Directory_SupperMeetings-076 | actions | OnReady restored true -> end | no skeleton, no refresh | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:112 `restored && saved.households.isDataFetched ? undefined : refreshHouseholds()` | present | React refreshes also when restored without data |
| Directory_SupperMeetings-077 | actions | OnReady else: GetSkeletonList_UI_SubdivisionHousehold -> list; refresh GetSubdivisionHouseholds | skeleton rows (default length 4), then refresh | app/src/containers/SupperMeetingDetails/hooks/supperMeetingDetailsState.ts:40 `households: { isDataFetched: false, isError: false, list: getSkeletonList_UI_SubdivisionHousehold(4) }`; useSupperMeetingDetails.ts:86-95 | present (line 286-294) | Skeleton row: HouseholdName 'John & Jane Smith', ChildrenNames 'Jack' (app/src/lib/ubtConnect/actions.ts:343) |

### logic

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-078 | logic | GetSkeletonList_UI_SubdivisionHousehold loop (ListLength > 0, ListAppend, ListLength-1) | loop appending GetSkeleton_UI_SubdivisionHousehold | app/src/lib/ubtConnect/actions.ts:348-350 `Array.from({ length: Math.max(0, in_ListLength) }, getSkeleton_UI_SubdivisionHousehold)` | - |  |
| Directory_SupperMeetings-079 | logic | Household fetch failure | no branch in the model | app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts:88-92 `catch { write({ type: 'householdsFetchFailed' }); return; }` and state `{ ...state.households, isError: true }` (supperMeetingDetailsState.ts:53-54) | - | Status Error with skeleton rows; model has no failure node |

## SupperMeeting_ImageCard_Content

### identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-080 | identity | Block inputs In_Subdivision_CardContent (mandatory), In_ShowAddress | no events; used by Locality_Subdivisions, Map_PoIPreview, SupperMeeting_DetailsBlock | app/src/components/directory/SupperMeetingCardContent/SupperMeetingCardContent.tsx:12-17 `inSubdivisionCardContent?: UI_Subdivision_Card_Content; inShowAddress?: boolean;` | present (in_Subdivision_CardContentIn) | Other users: pack/blocks.md line 846 |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-081 | ui | ImageCard__Content In_Title = In_Subdivision_CardContent.Name | title | app/src/components/directory/SupperMeetingCardContent/SupperMeetingCardContent.tsx:32-33 `<ImageCardContent inTitle={content.Name ?? ''}` | present (In_Title: nameAttr) |  |
| Directory_SupperMeetings-082 | ui | Statistics args: BretherenCount, GenderSplit, HouseholdCount | In_BretherenCount, In_GenderSplit=GetDescriptor_Subdivision_GenderSplit(BrothersCount, SistersCount), In_HouseholdCount | app/src/components/directory/SupperMeetingCardContent/SupperMeetingCardContent.tsx:36-43 `inBretherenCount={content.BretherenCount ?? 0} inGenderSplit={getDescriptor_Subdivision_GenderSplit(content.BrothersCount ?? 0, content.SistersCount ?? 0)} inHouseholdCount={content.HouseholdCount ?? 0}` | present (lines 177-191) |  |
| Directory_SupperMeetings-083 | ui | If In_ShowAddress (#ShowAddress2) -> CustomContainer(MarginSize Vertical=Small) > AddressPopup_Wrapper(In_Address=Address) | condition true: container and popup; false: nothing | app/src/components/directory/SupperMeetingCardContent/SupperMeetingCardContent.tsx:44-48 `{inShowAddress && (<CustomContainer options={{ MarginSize: { VerticalSizeId: UBT_Size.Small } }}><AddressPopupWrapper inAddress={content.Address ?? ''} />` | present (If at the placeholder, lines 210-242) | Condition true branch, false branch (no render): both present. Logic of AddressPopup_Wrapper: UBTConnect_Utils.CW_CTA_PopUps (references.md TST file present) |

### logic

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-084 | logic | GetDescriptor_Subdivision_GenderSplit(BrothersCount, SistersCount) | function in UBTConnect (not in pack bodies) | app/src/lib/ubtConnect/actions.ts:336-339 `${String(in_BrothersCount)} ${lookup.Brother.Plural} & ${String(in_SistersCount)} ${lookup.Sister.Plural}` | present (getDescriptor_Subdivision_GenderSplit$Action, line 183) | Body of the function not in the pack; React comment cites UBTConnect.controller.js |

## SupperMeeting_ImageCard_Content_IconText

### identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-085 | identity | Block inputs In_Text, In_FontSize, In_UBT_IconId, In_UBT_ColorId (all mandatory) | four inputs; used by Statistics | app/src/components/directory/SupperMeetingCardIconText/SupperMeetingCardIconText.tsx:8-18 `inText?: string; inFontSize?: string; inUBTIconId?: string; inUBTColorId?: string;` | present (in_TextIn, in_FontSizeIn, in_UBT_IconIdIn, in_UBT_ColorIdIn) |  |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-086 | ui | IconText SpacingSize=ExtraSmall, Text=In_Text, TextOptions {FontSize=In_FontSize, FontWeight=SemiBold} | block IconText | app/src/components/directory/SupperMeetingCardIconText/SupperMeetingCardIconText.tsx:32-36 `<IconText spacingSize={UBT_Size.ExtraSmall} text={inText} textOptions={{ FontSize: inFontSize, FontWeight: UBT_FontWeight.SemiBold }}>` | present (lines 185-192) |  |
| Directory_SupperMeetings-087 | ui | Icon In_ColorId, In_IconId, In_SizeId=NonStandard_16 | placeholder Icon | app/src/components/directory/SupperMeetingCardIconText/SupperMeetingCardIconText.tsx:37 `<Icon inColorId={inUBTColorId} inIconId={inUBTIconId} inSizeId={UBT_IconsSize.NonStandard_16} />` | present (lines 218-222) |  |

## SupperMeeting_ImageCard_Content_Statistics

### identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-088 | identity | Block inputs In_BretherenCount, In_HouseholdCount, In_GenderSplit (mandatory) | three inputs | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:12-18 `inBretherenCount?: number; inHouseholdCount?: number; inGenderSplit?: string;` | present (in_GenderSplitIn, in_HouseholdCountIn, in_BretherenCountIn) |  |

### data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-089 | data | Local variable FontSize: UBT_FontSize = ExtraSmall | block variable | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:30 `const fontSize = UBT_FontSize.ExtraSmall;` | present (fontSizeVar) |  |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-090 | ui | CustomContainer Options {MarginSize: {}, TextOptions {FontSize ExtraSmall}} | outer container | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:34 `<CustomContainer options={{ MarginSize: {}, TextOptions: { FontSize: UBT_FontSize.ExtraSmall } }}>` | present (lines 172-183) |  |
| Directory_SupperMeetings-091 | ui | Container #DIV_Statistics style 'display-flex gap-s flex-wrap flex-direction-column' | container with style | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:35 `<div className="display-flex gap-s flex-wrap flex-direction-column" data-container="">` | present (style: "display-flex gap-s flex-wrap flex-direction-column") |  |
| Directory_SupperMeetings-092 | ui | #DIV_Bretherens > Columns_Two (ReduceFirst, Small) Left IconText / Right ImageCard__Content__Tag(Content=In_GenderSplit) | two columns | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:37-48 `<ColumnsTwo columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceFirst, SpacingSize: UBT_Size.Small }} left={...} right={<ImageCardTag content={inGenderSplit} />}` | present (lines 225-231, 292-294) |  |
| Directory_SupperMeetings-093 | ui | Left IconText args: Text=GetDescriptor_BretherenCount, Icon/Color=GetLookupConcepts().Brethren | args | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:41-44 `inText={getDescriptor_BretherenCount(inBretherenCount)} inUBTIconId={lookup.Brethren.Icon} inUBTColorId={lookup.Brethren.Icon_Color}` | present (lines 254-272) |  |
| Directory_SupperMeetings-094 | ui | #DIV_Households > IconText Text=GetDescriptor_Subdivision_HouseholdCount, Icon/Color=GetLookupConcepts().Household | args | app/src/components/directory/SupperMeetingCardStatistics/SupperMeetingCardStatistics.tsx:51-56 `inText={getDescriptor_Subdivision_HouseholdCount(inHouseholdCount)} ... lookup.Household.Icon ... lookup.Household.Icon_Color` | present (lines 325-343) |  |

### logic

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-095 | logic | GetDescriptor_BretherenCount / GetDescriptor_Subdivision_HouseholdCount / GetLookupConcepts | functions of UBTConnect / UBTConnectLibrary (bodies not in pack) | app/src/lib/ubtConnect/actions.ts:144-151 `${getLookupConcepts(false).Brethren.Plural}: ${String(in_BretherenCount)}` and `${getLookupConcepts(false).Household.Plural}: ${String(in_HouseholdCount)}` | present (getDescriptor_*$Action, getLookupConcepts$Action(false)) | Bodies: references.md lists the library action; not compared line by line by the reader |

## Flow-level rows

### data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-096 | data | Client.App_PIN_BiometricEnabled | Boolean, default True, read; read by shared blocks of the transitive set, not by the 5 own blocks | app/src/platform/session/clientVars.ts:30 `'UBTConnect.App_PIN_BiometricEnabled': true,` | - | Owned by platform/bootstrap and shared blocks (CommonUI_InsideLayout, Policy_Checker, EntityDetailsActions) |
| Directory_SupperMeetings-097 | data | Client.App_Policies_HasPolicyToAccept | Boolean, read and written; read by shared blocks of the transitive set, not by the 5 own blocks | app/src/platform/session/userInfo.ts:44 `setClientVar('UBTConnect.App_Policies_HasPolicyToAccept', info.HasPoliciesToAccept);` | - | Owned by platform/bootstrap and shared blocks (CommonUI_InsideLayout, Policy_Checker, EntityDetailsActions) |
| Directory_SupperMeetings-098 | data | Client.App_Policies_RedirectURL | Text, read and written; read by shared blocks of the transitive set, not by the 5 own blocks | not found (searched: App_Policies_RedirectURL in app/src excluding tests and mocks) | - | Owned by platform/bootstrap and shared blocks (CommonUI_InsideLayout, Policy_Checker, EntityDetailsActions) |
| Directory_SupperMeetings-099 | data | Client.Bookmarks_IsSynched | Boolean, read; read by shared blocks of the transitive set, not by the 5 own blocks | app/src/platform/bootstrap/appStartSteps.ts:181 `setClientVar('UBTConnect.Bookmarks_IsSynched', false);` (write); postLogin.ts:42 `true` | - | Owned by platform/bootstrap and shared blocks (CommonUI_InsideLayout, Policy_Checker, EntityDetailsActions) |
| Directory_SupperMeetings-100 | data | Client.IsNavigateToHomeOnBack | Boolean, read and written; read by shared blocks of the transitive set, not by the 5 own blocks | app/src/platform/bootstrap/appStartSteps.ts:180 `setClientVar('UBTConnect.IsNavigateToHomeOnBack', false);` | - | Owned by platform/bootstrap and shared blocks (CommonUI_InsideLayout, Policy_Checker, EntityDetailsActions) |
| Directory_SupperMeetings-101 | data | Client.Notes_IsSynched | Boolean, read; read by shared blocks of the transitive set, not by the 5 own blocks | app/src/platform/bootstrap/appStartSteps.ts:183 `setClientVar('UBTConnect.Notes_IsSynched', false);` | - | Owned by platform/bootstrap and shared blocks (CommonUI_InsideLayout, Policy_Checker, EntityDetailsActions) |

### logic

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-105 | logic | Mock data of the flow | n/a | app/src/containers/SupperMeetingDetails/mocks.ts:25-37 (data actions), app/src/pages/SupperMeeting_Carousel/mocks.ts:13-18 (preload seed), pages/SupperMeeting_Details/mocks.ts:8 (empty handlers) | - | Mock data is not a finding (AGENT.md); shape: contractHandler returns { Household_GalleryCard_List: { List: [...] } } |

### strings

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_SupperMeetings-102 | strings | Strings in own screens and blocks: 'Supper Meeting' | strings.md | app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:37 and pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx:22 | - | 2 of 2 own-screen occurrences found |
| Directory_SupperMeetings-103 | strings | Strings 'Subdivision Name Example', 'Subdivision Formatted Address Example', 'John & Jane Smith', 'Show student numbers', 'Actions' | skeleton and lookup values | app/src/lib/ubtConnect/actions.ts:343,371,376,327 (literal values) | - | Found |
| Directory_SupperMeetings-104 | strings | Strings of shared blocks (PIN unlock, unsupported version, OneSchoolGlobal, Household, 'Photobook ...', 'Household gallery', 'Supper Meeting:' etc.) | strings.md lines of other flows | not checked here: owned by the flows of those blocks. Seen in React elsewhere: components/household/HouseholdAddress/HouseholdAddress.tsx:98 `"Supper Meeting: "`; containers/HouseholdDetails/hooks/useHouseholdDetails.ts:207 'Photobook is currently unavailable ...'; components/directory/DirectoryEmptyState/DirectoryEmptyState.tsx:19 ('found nearby') | - | Strings tied to other flows' blocks; the judge decides if they belong to this flow |
