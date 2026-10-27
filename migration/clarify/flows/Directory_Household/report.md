# Flow report: Directory_Household

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 3 (built: 3, Household_Relations, HouseholdCarousel, HouseholdDetails; not built: none) |
| Own blocks | HouseholdDetails_Block, HouseholdRelations_Block |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/…`, KB page `ui/directory-household.md` and the rules it names, the other KB pages of `pack/kb.md` (lines that name the flow), TST compiled code of HouseholdDetails_Block, HouseholdRelations_Block and Household_Relations (`tst_source.py`) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 230 · partial 0 · missing 0 · differs 1 · mock-only 5 · n/a 5 · unclear 0 (same as `checklist.json`).
- No finding. This report found no difference that a user can see, and no rule that React breaks.
- The one `differs` row (057) is the mock-phase preload seed of HouseholdCarousel. The decision
  `migration/knowledge/auto-decisions-2026-10-15.md:35` names it. A real build keeps the empty carousel of TST.
- Five elements differ between DEV and TST. React follows TST in each of them (§6.1). Three KB texts disagree with
  DEV and TST (K1 to K3, §6.2).
- The judge read the TST code for every value that the dump cuts (rows 101, 106, 112, 115, 116, 123, 132, 151). TST
  agrees with React in each row.
- Status: in React a user can open a household directly or through the carousel, and switch between About and
  Photos. The user can open the address, the locality, the supper meeting and the photobook. The user can open the
  relations of a member, and open the household of a relative or a married child after the region check. The user
  can open the notes sheet. Production needs four server or service actions behind the mocks (rows 054, 092, 093,
  191).

## 2. Screens

### 2.1 Household_Relations

Route `/UBTConnect/Household_Relations`, page `app/src/pages/Household_Relations/Household_RelationsPage.tsx`.
Board: `build`, built (V4a, user 2026-10-14).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | roles Registered, UBTOne_User; URL QueryString | a signed-in member opens the screen | MEMBER_ROUTE (member, enforce) | `match` | pack/app.md meta; Household_RelationsPage.tsx:30-32 |
| 002, 003 | inputs HouseholdId, MemberId (Long Integer, mandatory) | passed to HouseholdRelations_Block | osLongInput, default '0' | `match` | app/src/pages/Household_Relations/inputs.ts:13-17; TST Household_Relations.mvc.js:16-25 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 004 | local PageTitle (Text) | set by the block event | useViewState('PageTitle', '') | `match` | Household_RelationsPage.tsx:34 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 005 | Layout_DetailPage In_IsPrimaryColor False | detail layout, not primary | DetailLayoutContainer inIsPrimaryColor false | `match` | Household_RelationsPage.tsx:37-39 |
| 006 | header CustomText In_Text = PageTitle | Neutral10, Small, SemiBold | CustomText with the same options | `match` | Household_RelationsPage.tsx:41-49 |
| 007 | HouseholdRelations_Block(HouseholdId, MemberId), RelationsDetails_Fetched | block with the two inputs and the event | HouseholdRelations householdId, memberId, onRelationsDetailsFetched | `match` | Household_RelationsPage.tsx:52 |
| 008, 009 | BottomBarMenu, CommonUI_InsideLayout | App_Common blocks | BottomBar, CommonUiLayout | `match` | Household_RelationsPage.tsx:54-55; behaviour in the report of App_Common |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 011 | Handler_OnRelationsDetailsFetched(RelationsTitle) | PageTitle = RelationsTitle | the state setter is the handler | `match` | Household_RelationsPage.tsx:52; TST Household_Relations.mvc.js:306-323 |

**Validations**: the screen has no input widget.

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 010 | lifecycle | none | no effect, no call of its own | `match` | Household_RelationsPage.tsx:25-29 |

**Strings**: the screen has no string of its own.

### 2.2 HouseholdCarousel

Route `/UBTConnect/HouseholdCarousel`, page `app/src/pages/HouseholdCarousel/HouseholdCarouselPage.tsx`, flows in
`app/src/pages/HouseholdCarousel/hooks/useHouseholdCarousel.ts` and `householdCarouselActions.ts`. Board: `build`,
built (V3b, user 2026-10-14).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 012 | roles Registered, UBTOne_User; flag C2EnableCarousel | the callers open the screen only with the flag on | MEMBER_ROUTE; meta.flagRedirect; a direct URL is not redirected | `match` | app/docs/reference/stack.md:237; flag-values-tst.json:11 (true) |
| 013 | input In_StartingHouseholdId (Long Integer) | the household of the first active slide | osLongInput, default '0' | `match` | app/src/pages/HouseholdCarousel/inputs.ts:15-17 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 014-018 | locals HouseholdHeader, HouseholdPreload, StartingPosition, SwippedItems, EntitiesCarousel_Items | screen variables | useViewState of each | `match` | useHouseholdCarousel.ts:53-57 |
| 054 | server action UpdateItem_MarkAsRead (swipe branch) | marks the update read | mock handler | `mock-only` | app/src/mocks/modules/UBTConnect/Directory_Updates/mocks.ts:61. Production needs UpdateItem_MarkAsRead (calls Action_UI_UpdateItem_MarkAsRead). The React call is row 046. |
| 055 | Client.Directory_Updates_UnreadCount | minus 1 after a swipe | clientVar.updatesUnreadCount minus 1 | `match` | householdCarouselActions.ts:94; BR-UBTCON-173 |
| 056 | Client.IsNavigateToHomeOnBack | read and written by CommonUI_InsideLayout, not by the screen | commonUiBack.ts owns it | `match` | app/src/platform/feedback/dialogs/commonUiBack.ts:27-28; report of App_Common, row 074 |
| 057 | preload when the screen opens by URL | no preload: empty carousel | the mock phase registers a fictional preload; a real build registers none | `differs` | auto-decisions-2026-10-15.md:35 (Q1 A); app/src/pages/HouseholdCarousel/inputs.ts:21-40 |
| 058 | server calls of the slides | the screen has no data action | the screen calls nothing; slides call through HouseholdDetails_Block | `match` | app/src/pages/HouseholdCarousel/mocks.ts:5-7, 24; rows 089-093 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 019 | Layout_DetailPage In_IsPrimaryColor False | detail layout | DetailLayoutContainer inIsPrimaryColor false | `match` | HouseholdCarouselPage.tsx:37-39 |
| 020-023 | header: SkeletonSection(HouseholdHeader = ""), If HouseholdHeader <> "" | header, or "Unavailable, Unavailable" | Skeleton and the same ternary | `match` | HouseholdCarouselPage.tsx:42-44; TST js:203 |
| 024 | EntitiesCarousel(Household, items, starting position) | carousel of household slides | EntitiesCarousel with the three arguments | `match` | HouseholdCarouselPage.tsx:50-57 |
| 025, 026 | events Event_Moved, Event_SetHeader | Handler_EventMoved, Handler_SetHeader | onEventMoved, onEventSetHeader | `match` | HouseholdCarouselPage.tsx:55-56 |
| 027 | slide content | EntitiesCarousel_HouseholdDetails hosts HouseholdDetails_Block | renderHouseholdDetails → HouseholdDetailsContainer | `match` | HouseholdCarouselPage.tsx:25-34; the slide arguments are checked in the report of Directory_Caroussel |
| 028-030 | If SwippedItems.Empty, else BackNavigationHandler | handler only when an item was swiped | hasSwippedItems && BackNavigationHandler | `match` | HouseholdCarouselPage.tsx:59; TST js:269 |
| 031, 032 | BottomBarMenu, CommonUI_InsideLayout | App_Common blocks | BottomBar, CommonUiLayout | `match` | HouseholdCarouselPage.tsx:62-63 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 033-036 | ScreenEvent_OnInitialize: if the preload is empty, GetPreloadObject, AssignFromObject, ConvertList(EntityId) | items from the preload | householdCarouselOnInitialize, assignFromObject, map to EntityId; a restored non-empty preload keeps its values | `match` | useHouseholdCarousel.ts:49-60; householdCarouselActions.ts:33-51; TST js:455-490; BR-UBTCON-831 |
| 037-039 | ListIndexOf(Household = In_StartingHouseholdId) | StartingPosition = position, else 0 | findIndex, else 0 | `match` | householdCarouselActions.ts:55-59; BR-UBTCON-831 |
| 040 | OnInitialize, preload not empty | end | the stored values stay | `match` | useHouseholdCarousel.ts:58-60 |
| 041 | Handler_SetHeader | HouseholdHeader = Event_Header | onSetHeader = setHouseholdHeader | `match` | useHouseholdCarousel.ts:91 |
| 042-045 | Handler_EventMoved: has a swipe action, ActionId = UpdatesCarousel_SetIsRead | other items: end | the same two checks, return | `match` | useHouseholdCarousel.ts:73-76; TST js:529; BR-UBTCON-832 |
| 046, 047 | call Directory_Updates_CarouselSwipeAction, then clear ActionId | the action fires once per item | await the swipe action, then clearSwipeAction | `match` | useHouseholdCarousel.ts:77-82; TST js:531-540 |
| 048-051 | SwippedItemId <> "": ListIndexOf, else ListAppend | the item is added once | some(), else append { EntityItemId, ListPosition } | `match` | householdCarouselActions.ts:112-113; useHouseholdCarousel.ts:83 |
| 052 | Handler_BackNavigation | SetPreloadObject(ToObject(SwippedItems)) | setPreloadObject(swippedItems) | `match` | useHouseholdCarousel.ts:93-95; TST js:380-390; BR-UBTCON-832 |
| 053 | Directory_Updates_CarouselSwipeAction (own action) | JSONDeserialize, UpdateItem_MarkAsRead, Out_ItemId, unread count minus 1 | JSON.parse, markAsRead, the same count update | `match` | householdCarouselActions.ts:87-96; BR-UBTCON-173 |

**Validations**: the screen has no input widget.

**Strings**: the one string "Unavailable, Unavailable" matches (row 059).

### 2.3 HouseholdDetails

Route `/UBTConnect/HouseholdDetails`, page `app/src/pages/HouseholdDetails/HouseholdDetailsPage.tsx`. Board:
`build`, built (V3b, user 2026-10-14).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 060 | roles Registered, UBTOne_User | a signed-in member opens the screen | MEMBER_ROUTE (member, enforce) | `match` | pack/app.md meta; HouseholdDetailsPage.tsx:13 |
| 061 | input HouseholdId (Long Integer, mandatory) | passed to the block | osLongInput | `match` | app/src/pages/HouseholdDetails/inputs.ts:12-13 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 062-064 | locals LocalityName, CountryName, DeceasedOrAncestry_View | set by the block event | useViewState of each; DeceasedOrAncestry_View is written only, as in TST | `match` | HouseholdDetailsPage.tsx:19-21 |
| 074 | flags | the screen reads none; the block reads two | useHouseholdDetailsFlags passes them to the block | `match` | HouseholdDetailsPage.tsx:16; row 096 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 065 | Layout_DetailPage In_IsPrimaryColor False | detail layout | DetailLayout isPrimaryColor false; onBack = navigateBack, the same default back as DetailLayoutContainer | `match` | HouseholdDetailsPage.tsx:34-37; app/src/containers/DetailLayout/DetailLayoutContainer.tsx:51, 66 |
| 066-068 | header expression | "Locality, Country", or the country alone; the deceased or ancestry wrap is removed (NC2-1241) | the same expression and style | `match` | HouseholdDetailsPage.tsx:24, 39; BR-UBTCON-822 |
| 069 | HouseholdDetails_Block(HouseholdId), HouseholdDataFetched | block with defaults | HouseholdDetailsContainer source server, flags, onHouseholdDataFetched | `match` | HouseholdDetailsPage.tsx:44-49; TST js:195-205 |
| 070, 071 | BottomBarMenu, CommonUI_InsideLayout | App_Common blocks | BottomBar, CommonUiLayout | `match` | HouseholdDetailsPage.tsx:51-52 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 073 | Handler_HouseholdDetails_DataFetched | assigns the three locals | the three setters | `match` | HouseholdDetailsPage.tsx:27-31; TST js:290-315 |

**Validations**: the screen has no input widget.

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 072 | lifecycle | none | no effect, no call of its own | `match` | HouseholdDetailsPage.tsx:9-12 |

**Strings**: the screen has no string of its own (row 075).

## 3. Blocks of the flow

### 3.1 HouseholdDetails_Block

React: `app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx`, hooks
`app/src/containers/HouseholdDetails/hooks/useHouseholdDetails.ts` and `householdDetailsState.ts`, views in
`app/src/components/household/`. TST file: `UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js` (cited as
"TST js").

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 076 | inputs HouseholdId, isEnabled (True), Preview, In_ShowKebabMenu, In_CheckVisibility, In_IsSkeletonOnly, In_HideActions | seven inputs | props source, flags, isEnabled (true), showKebabMenu, checkVisibility, isSkeletonOnly, hideActions | `match` | HouseholdDetailsContainer.tsx:20-40, 52-56, 64 |
| 077 | event HouseholdDataFetched(LocalityName, CountryName, DeceasedOrAncestry_View) | raised after the fetch | onHouseholdDataFetched with the same three values | `match` | useHouseholdDetails.ts:115-119 |
| 078 | used by | EntitiesCarousel_HouseholdDetails, HouseholdDetails, Locality_Details, Profile_HouseholdPreview | the container serves HouseholdDetails and the carousel | `match` | HouseholdDetailsPage.tsx:44; HouseholdCarouselPage.tsx:26; the other hosts are checked in their flows |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 079-088 | locals TagsList, TagsList_SelectedTag, TagsList_Id_About, TagsList_Id_Photos, TEMP_TimelineImages, LocalIsBookmarked, UserAge_Visibility, IsSkeletonOnly, HideActions_PhotoBook, IsShareOpen | block variables | state fields and constants | `match` | householdDetailsState.ts:19-33; app/src/components/household/householdCard.ts:7-8 |
| 089, 090 | data action GetHousehold (OnDemand) with CheckVisibility, HouseholdId, User_AgeVisibility | GetHouseholdDetails | fetchHousehold on the wire HouseholdDetails_Block/DataActionGetHousehold | `match` | app/src/api/household/repository.ts:42-44; useHouseholdDetails.ts:86-106 |
| 091 | data action GetHousehold_Coordinates (OnDemand) | GetHouseholdCoordinates | fetchHouseholdCoordinates | `match` | repository.ts:47-51; useHouseholdDetails.ts:123 |
| 092 | service action GetHouseholdCoordinates (Connect_Household_CS) | server | mock | `mock-only` | app/src/containers/HouseholdDetails/mocks.ts:38-40. Production needs GetHouseholdCoordinates(In_HouseholdId). |
| 093 | service action GetHouseholdDetails (Connect_Household_CS) | server | mock | `mock-only` | mocks.ts:27-37. Production needs GetHouseholdDetails(HouseholdId, User_AgeVisibility, CheckVisibility). |
| 094 | GetSkeleton_UI_HouseholdDetails | skeleton household | getSkeleton_UI_HouseholdDetails | `match` | app/src/lib/ubtConnect/actions.ts:448; useHouseholdDetails.ts:143 |
| 095 | GetUserInformation_Wrapper | called in ScreenEvent_OnReady | getUserInformation | `match` | useHouseholdDetails.ts:134 |
| 096 | GetHasExtendedShare, GetHasPhotobookAccess | flag helpers, both true on TST | useFlagOn('C2ExtendedShare'), useFlagOn('mobilePhotobook'), default true | `match` | useHouseholdDetails.ts:48; migration/knowledge/feature-flag-helpers.md:20, 27; app/src/platform/flags/registry.ts:141-145, 234-239; flag-values-tst.json:14, 21 |
| 097 | client variables of the transitive list | shared blocks read and write them | shared code | `match` | the own elements write only Directory_Updates_UnreadCount (row 055) |
| 180 | mock fixtures | - | sampleHouseholds; scenarios real, loading, error | `mock-only` | app/src/containers/HouseholdDetails/mocks.ts:18-37; the server side of rows 092 and 093; mock data is not a finding |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 098 | SubLayout_DirectoryDetailScreen HideActions = In_HideActions and About | actions hidden on About only | hideActions && isAbout | `match` | HouseholdDetailsView.tsx:236; TST js:307 |
| 099, 100 | SkeletonSection(not IsDataFetched), ImageCard_LazyLoading(Detail, LocalIsBookmarked) | card skeleton and bookmark mark | Skeleton, ImageCard | `match` | HouseholdDetailsView.tsx:135-141; TST js:1735 |
| 101 | UBT_LazyImage EntityId | If(not hidden, deceased or ancestry, HouseholdId, "") | isShownHousehold ? householdId : '' | `match` | HouseholdDetailsView.tsx:143-148; TST js:379; BR-UBTCON-813 |
| 102 | Placeholder_CarouselTag | the carousel tag | placeholderImageTag = carouselTag | `match` | HouseholdDetailsView.tsx:150 |
| 103-105 | ImageCard__Content title, subtitle, In_ShowSubtitle | Name or "Household gallery"; FamilyNames on About | the same three expressions | `match` | HouseholdDetailsView.tsx:153-155 |
| 106 | top CustomContainer flex, center, space-between, row | the dump cuts FlexDirection | FlexDirection Row | `match` | HouseholdTags.tsx:53-61; TST js:472 (row) |
| 107 | HorizontalTagList: mandatory, single, TagsList, isEnabled | About and Photos tags | HorizontalTagList with the same arguments | `match` | HouseholdTags.tsx:64-70 |
| 108 | kebab container visible = In_ShowKebabMenu; KebabButtonMenu Edit, Share | kebab on own household and preview | showKebabMenu && KebabButtonMenu | `match` | HouseholdTags.tsx:72-76 |
| 109, 110 | If not isVisible: private-profile line | "Your profile is private and only visible to you" | !isVisible && IconText | `match` | HouseholdTags.tsx:78-95; BR-UBTCON-812 |
| 111 | If About: address and SeeMoreSection | bottom section on About | isAbout && HouseholdAddress | `match` | HouseholdDetailsView.tsx:169-177 |
| 112 | AddressSection visible | not hidden, deceased or ancestry, and Address <> "" | the same four terms | `match` | HouseholdAddress.tsx:54-55; TST js:704; BR-UBTCON-813 |
| 113 | AddressPopup_Wrapper(IconVisible, Address, Coordinates, IsEnabled) | address pop-up | AddressPopupWrapper with the same four arguments | `match` | HouseholdAddress.tsx:57-62; the block itself: §4 |
| 114 | SeeMoreSection(isEnabled, StartExpanded False) | collapsed section | SeeMoreSection startExpanded false | `match` | HouseholdAddress.tsx:66-67 |
| 115 | locality row: label, link, ExtendedClasses | "link-disabled-view" for deceased or ancestry, else "" | linkClasses, the same condition | `match` | HouseholdAddress.tsx:44, 72-92; TST js:989; BR-UBTCON-815 |
| 116 | supper-meeting row: label, link, ExtendedClasses | the same rule as the locality row | linkClasses on the link text | `match` | HouseholdAddress.tsx:94-112; TST js:1206; BR-UBTCON-815 |
| 117 | If Photos: HouseholdDetails_TimelinePhoto_List(TEMP_TimelineImages) | timeline gallery | HouseholdTimelinePhotos images = timelineImages | `match` | HouseholdDetailsView.tsx:178-180; TST js:1255 |
| 118-120 | If LaunchDarkly check, else ComingSoon box | DEV: LD check; TST: constant false, so ComingSoon always shows | ComingSoon always shows | `match` | HouseholdTimelinePhotos.tsx:23-39; TST js:1291; BR-UBTCON-816; §6.1 |
| 121, 122 | If HideActions_PhotoBook; header "Actions" or "Photobook" | the call-to-action area | hidePhotobookActions ? null; the same texts | `match` | HouseholdDetailsView.tsx:189-203 |
| 123 | If About: Directory_EntityDetailsActions | Name override; EnableNotes and EnableShare = not IsDeceased | the same arguments | `match` | HouseholdDetailsContainer.tsx:73-85; TST js:1505-1509; BR-UBTCON-817 (see K1) |
| 124 | Photos: Photobook row | Handler_OnClickPhotobook; BookClosed and ChevronRight icons | onPhotobookClick; the same icons | `match` | HouseholdDetailsView.tsx:211-227 |
| 125, 126 | If IsSkeletonOnly; VisibleAboutTab style "" or "hidden" | members only when not skeleton-only | isSkeletonOnly ? null; the same class | `match` | HouseholdDetailsView.tsx:240-241 |
| 127, 128 | HouseholdDetails_Members_Block(members, loading, non-members, isEnabled); Event_MemberOnClick | members list | HouseholdMemberList; onMemberClick | `match` | HouseholdDetailsView.tsx:242-251; TST js:1757 |
| 129 | Event_NonMemberOnClick | TST passes the household of the tapped row | the row's HouseholdId after the region check | `match` | useHouseholdDetails.ts:216-229; TST js:1743-1755; BR-UBTCON-819, BR-UBTCON-824; §6.1 |
| 130 | If False #HideInServiceStudio | dead branch | not implemented | `n/a` | pack/blocks.md:177 [DEAD BRANCH]; dead in the model |
| 131 | If In_ShowKebabMenu: ShareSheet(IsShareOpen, HouseholdId, MyHousehold) | share sheet on own household and preview | showKebabMenu && ShareSheetContainer | `match` | HouseholdDetailsContainer.tsx:97-103; BR-UBTCON-817 |
| 132 | ShareableObject_Generic | five fields: type, Id, Title, Subtitle, Location "Locality, Country" | the same five fields | `match` | HouseholdDetailsContainer.tsx:104-112; TST js:1831-1836 |
| 133 | member actions | inside the Members block | EnableCall, EnableEmail = not deceased | `match` | HouseholdDetailsContainer.tsx:86-96; BR-UBTCON-825; checked in the report of Directory_Household_Blocks |

**Block actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 134-137 | ScreenEvent_OnInitialize: OnReady, then the tags About (selected) and Photos when TagsList is empty | tags once | onInitialize; dispatch tagsInitialized when the tags are empty | `match` | useHouseholdDetails.ts:133-149; householdDetailsState.ts:130-135 |
| 138-140 | ScreenEvent_OnReady: CheckRestored; restored and age setting unchanged: end; else skeleton, IsSkeletonOnly, Refreshes | refetch on a fresh view or a changed setting | the same condition in negated form | `match` | useHouseholdDetails.ts:138-146; BR-UBTCON-821 |
| 141 | If False//IsSkeletonOnly | the true branch is dead; the refresh always runs | refreshes always | `match` | useHouseholdDetails.ts:146; BR-UBTCON-821 |
| 142-146 | ScreenEvent_OnParametersChanged | preview: age setting and refetch; then end of skeleton-only: Refreshes | the same two checks | `match` | useHouseholdDetails.ts:152-165 |
| 147-149 | OnAfterFetch_GetHouseholdDetail: HandlePreviewData, Photos tag Enabled, event | Photos off for hidden, deceased, ancestry | handlePreviewData, householdFetched, the event | `match` | useHouseholdDetails.ts:112-119; householdDetailsState.ts:145-149; BR-UBTCON-814 |
| 150 | [DISABLED] IsHouseholdDetails_InAncestryModeView | disabled node | not implemented | `n/a` | pack/blocks.md:352; BR-UBTCON-518; dead in the model |
| 151-154 | Action_HandlePreviewData | address, age display, phones by their toggles, Email, HomePhone for a householder | handlePreviewData with the same fields | `match` | householdDetailsState.ts:154-181; pack/blocks.md:195; TST js:2166; BR-UBTCON-820 |
| 155 | Action_SetHideActionsPhotobook | Photos and no photobook access | the same expression | `match` | householdDetailsState.ts:117; BR-UBTCON-816 |
| 156 | OnChangeTag | the selected tag, then SetHideActionsPhotobook | tagsChanged | `match` | useHouseholdDetails.ts:171-173; mandatory selection (row 107) keeps one tag selected |
| 157 | Handler_OnMenuEdit | Profile() | navigate Profile | `match` | useHouseholdDetails.ts:175-177 |
| 158-160 | Handler_OnShare | share sheet with extended share, else ShowComingSoonMessage | the same two branches | `match` | useHouseholdDetails.ts:179-182; BR-UBTCON-817 |
| 161 | Handler_CloseShareSheet | IsShareOpen = False | shareSheetSet false | `match` | useHouseholdDetails.ts:184-186 |
| 162-164 | Handler_OnClickPhotobook | Photobook with a locality, else the Info message | the same two branches and message | `match` | useHouseholdDetails.ts:202-209; BR-UBTCON-816 |
| 165, 166 | Handler_OnClickMember | Household_Relations when isEnabled | the same | `match` | useHouseholdDetails.ts:213-215; TST js:1980-2000; BR-UBTCON-818 |
| 167 | [DISABLED] away-parent logic | disabled nodes | not implemented | `n/a` | pack/blocks.md:258-288; BR-UBTCON-818; dead in the model |
| 168 | CheckUserAccessToHousehold, ChecUserAwayHouseholdAccess | empty actions; only disabled nodes call them | not implemented | `n/a` | pack/blocks.md:216-227, 266, 268; dead in the model |
| 169, 170 | Handler_OnClickNavigateTomarriedChildren_Household | HouseholdDetails when isEnabled | the same | `match` | useHouseholdDetails.ts:217-219; BR-UBTCON-819 |
| 171 | Handler_TimelinePhotoSelected | IsCurrent per image; the second loop is disabled | the live loop only | `match` | householdDetailsState.ts:184-189 |
| 172 | Directory_EntityDetailsActionsOnChange_Bookmark | LocalIsBookmarked = isBookmarked | bookmarkChanged | `match` | useHouseholdDetails.ts:230-232 |
| 173-176 | OnClick_NavigateToLocality, OnClick_NavigateToSupperMeeting | no link for deceased or ancestry; else Locality_Details or SupperMeeting_Details | the same checks and parameters | `match` | useHouseholdDetails.ts:187-198; BR-UBTCON-815 |
| 177 | Refresh_GetHouseholdDetail, Refresh_GetHouseholdCoordinates | refresh the two data actions | refreshHousehold, refreshCoordinates | `match` | useHouseholdDetails.ts:100-130 |

**Validations**: the block has no input widget (row 178, `match`).

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 179 | view-cache restore | wasCurrentViewRestoredFromCache | useFlowState onReady(isAlive, restored), keyed per household | `match` | useHouseholdDetails.ts:68-83 |

**Strings**: the 5 strings of the block match (row 181).

### 3.2 HouseholdRelations_Block

React: `app/src/pages/Household_Relations/hooks/useHouseholdRelations.ts`, `householdRelationsState.ts` and
`components/HouseholdRelationsView.tsx`. TST file: `UBTConnect.Directory_Household.HouseholdRelations_Block.mvc.js`
(cited as "TST js").

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 182 | inputs HouseholdId, MemberId (mandatory) | two inputs | householdId, memberId | `match` | useHouseholdRelations.ts:32-37 |
| 183 | event RelationsDetails_Fetched(RelationsTitle) | raised with FamilyName | onRelationsDetailsFetched(details.FamilyName) | `match` | useHouseholdRelations.ts:153; TST js:218 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 184-186 | locals UserAge_Visibility, isLoading (True), ShowNotesSheet | block variables | state fields, isLoading true | `match` | householdRelationsState.ts:32-44 |
| 187 | data action Get_MemberDetails (OnDemand) | Member_GetContext_Service | fetchMemberRelations on the wire HouseholdRelations_Block/DataActionGet_MemberDetails | `match` | app/src/api/household/repository.ts:77-80; server side: row 191 |
| 188 | output IsMemberDeceased | DEV only; TST has no such output | no field | `match` | TST js: 0 hits; §6.1 |
| 189 | data action Get_ParentHouseholdDetails (OnDemand) | Household_GetMemberSiblings | fetchSiblingRelations | `match` | repository.ts:84-87; server side: row 191 |
| 190 | data action FetchNotes (OnDemand) | TST never refreshes it, so GetNotesByItemId never runs | no call; NotesSheet gets the empty Notes record | `match` | householdRelationsState.ts:37, 55; TST js:1595-1599, 1921-1928; §6.1 |
| 191 | service actions Member_GetContext_Service, Household_GetMemberSiblings (Connect_Household_CS) | server | mock | `mock-only` | app/src/pages/Household_Relations/mocks.ts:75-90. Production needs both service actions. |
| 192, 193 | Actions_DefineLoading, Action_Refresh_Get_MemberDetails; GetUserInformation_Wrapper, HasAccessToRegion, App_Subscription_ShowUpgradePopUp | client actions | reducer actions; getUserInformation, hasAccessToRegion, showUpgradePopUp | `match` | householdRelationsState.ts:118-126; useHouseholdRelations.ts:161-181 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 194 | SkeletonSection 1: not IsDataFetched and not HasFetchError | header skeleton | isNotFetched: not Fetched and not Error | `match` | HouseholdRelationsView.tsx:142; householdRelationsState.ts:85-86 |
| 195, 196 | member photo, member name | UBT_LazyImage ExtraLarge_100; CustomText Base SemiBold | the same | `match` | HouseholdRelationsView.tsx:144-169 |
| 197 | Notes button IsDisabled | DEV: IsMemberDeceased; TST: false | isDisabled false | `match` | HouseholdRelationsView.tsx:181-188; TST js:504-505; §6.1 |
| 198, 199 | Bookmark button (disabled); #Buttons container and Columns_Two | layout of the two buttons | the same | `match` | HouseholdRelationsView.tsx:171-197; TST js:551-552 |
| 200, 201 | SkeletonSection 2(isLoading); If Relations2 | relations when any relative or loading | hasRelations; NullIdentifier is '0' | `match` | HouseholdRelationsView.tsx:111-113, 203; BR-UBTCON-828 |
| 202, 203 | section "Relations"; else "No relation or household information avaialble." | section or text (the typo is in TST) | the same | `match` | HouseholdRelationsView.tsx:206-211, 296-300 |
| 204-208 | If HasFather, If HasMother (HouseholdId <> 0); photo; chevron if HasNavigation | parent rows; the row tap ignores HasNavigation | parentRow; onOnClickPerson; chevron when HasNavigation | `match` | HouseholdRelationsView.tsx:115-137, 213-218; BR-UBTCON-828 |
| 209-211 | previous spouses list; item; chevron if HasNavigation and HouseholdId <> 0 | list of former spouses | OSList with the same class and fetch status | `match` | HouseholdRelationsView.tsx:219-239; BR-UBTCON-828 |
| 212-214 | If siblings: section "Household", NonMember_ListItem, chevron | siblings section | the same | `match` | HouseholdRelationsView.tsx:246-287; BR-UBTCON-828 |
| 215 | If False #HideInServiceStudio_BottomSheet | dead branch | not implemented | `n/a` | pack/blocks.md:607 [DEAD BRANCH]; dead in the model |
| 216 | NotesSheet(ShowNotesSheet, MemberId, Member, FetchNotes.Notes) and three events | notes sheet | NotesSheet with the same arguments and events | `match` | HouseholdRelationsView.tsx:302-310; the block itself: §4 |

**Block actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 217 | ScreenEvent_OnInitialize: restored from cache: end | keep the cached view | the initial state when restored | `match` | householdRelationsState.ts:80-82; TST js:1814; BR-UBTCON-829 |
| 218 | OnInitialize: either data action already fetched: end | always false for a view that is not restored | no check | `match` | pack/blocks.md:474-489 (all OnDemand); TST js:1595-1599; BR-UBTCON-829. Only OnReady and OnAfterFetch refresh the data actions, so nothing is fetched at OnInitialize. |
| 219 | OnInitialize: "Loading" parents and two "Loading" siblings | placeholders | skeletonParent, skeletonSibling x2 | `match` | householdRelationsState.ts:61-76; TST js:1822-1843; BR-UBTCON-829 |
| 220-223 | ScreenEvent_OnReady: restored and age setting unchanged: end; else set it and refresh | refetch on a fresh view or a changed setting | the same condition | `match` | useHouseholdRelations.ts:161-169; BR-UBTCON-829 |
| 224-226 | Action_Refresh_Get_MemberDetails, Actions_DefineLoading | isLoading True on refresh; else from the two fetch states | loadingDefined with the same rule | `match` | householdRelationsState.ts:118-126 |
| 227 | OnAfterFetch_Get_MemberDetails | event, refresh siblings, DefineLoading() | the same order | `match` | useHouseholdRelations.ts:151-155 |
| 228-233 | OnClick_Member | stop for deceased (never fed), no household, no country; else region check: HouseholdDetails or upgrade pop-up | the same chain | `match` | householdRelationsState.ts:174; useHouseholdRelations.ts:175-181; BR-UBTCON-827 |
| 234 | Handler_AddNotes | DEV: refresh FetchNotes, open; TST: open only | notesSheetOpened | `match` | useHouseholdRelations.ts:201-203; TST js:1921-1928; §6.1 |
| 235-238 | Handler_OnNotesSheetClosed, Handler_OnNotesChanged, Handler_OnNoteDeleted | close; replace Notes; remove a note and set Total | the same reducer cases | `match` | householdRelationsState.ts:150-164; TST js:1893, 2197-2207 |
| 239 | OnClick_Bookmark | empty action; the button is disabled | empty handler | `match` | HouseholdRelationsView.tsx:84; migration/knowledge/audit-a1-empty-handlers.md:45 |

**Validations**: the block has no input widget (row 240, `match`).

**Strings**: the 9 strings of the block match (row 241).

### 3.3 Blocks of other flows

- EntitiesCarousel (Directory_Caroussel, `../_shared/pack/blocks.md`): rows 024-027 pass its arguments and events
  (`match`). Its behaviour (BR-UBTCON-903, BR-UBTCON-904) and the slide block EntitiesCarousel_HouseholdDetails are
  checked in the report of Directory_Caroussel.
- HouseholdDetails_Members_Block and HouseholdDetails_TimelinePhoto_List (Directory_Household_Blocks,
  `../_shared/pack/blocks.md`): rows 117, 127-129 and 133 (`match`). On TST the Members block runs HasAccessToRegion
  and the upgrade pop-up of a non-member tap; React runs them in useHouseholdDetails. The behaviour
  (BR-UBTCON-823 to BR-UBTCON-825, BR-UBTCON-843) is checked in the report of Directory_Household_Blocks.
- Directory_EntityDetailsActions (Directory_CommonBlocks): row 123 (`match`). Its behaviour (BR-UBTCON-833 to
  BR-UBTCON-840) is checked in the report of Directory_CommonBlocks.
- SubLayout_DirectoryDetailScreen and SubLayout_DirectoryDetailScreen_Section (SubLayout): rows 098, 202 and 212
  (`match`).
- BottomBarMenu and CommonUI_InsideLayout (App_Common): rows 008-009, 031-032 and 070-071 (`match`). The behaviour
  (BR-UBTCON-310 to BR-UBTCON-318) is checked in the report of App_Common.
- The other blocks of the pack list come through these blocks: Block_PINUnlock and its wrapper (App_PIN),
  Policy_Checker (App_Policies), OfflineDataSyncEvents, UnsupportedVersion blocks and WelcomeToConnect (App_Common),
  HandleOnResumeOpenLink (Legacy_Share), the supper-meeting, OneSchool Global and gallery blocks. Not checked here.

## 4. Shared blocks and actions

| Item | Rows | React | Verdict | Note |
|---|---|---|---|---|
| GetUserInformation_Wrapper (App_Common) | 095, 137, 193, 220 | getUserInformation | `match` (call) | the action is checked in the report of App_Common |
| HasAccessToRegion | 129, 193, 231 | app/src/lib/ubtConnect/actions.ts:395-398 | `match` (call) | the rules BR-UBTCON-252 to BR-UBTCON-255: not checked here (shared) |
| App_Subscription_ShowUpgradePopUp | 129, 193, 233 | showUpgradePopUp | `match` (call) | not checked here (shared) |
| ShowComingSoonMessage (UBTConnect_Utils) | 160 | showComingSoonMessage | `match` (call) | not checked here (shared) |
| GetPreloadObject, SetPreloadObject (NavigationHandler) | 035, 052 | usePreloadObject, setPreloadObject | `match` (call) | not checked here (shared) |
| GetSkeleton_UI_HouseholdDetails | 094 | app/src/lib/ubtConnect/actions.ts:448 | `match` (call) | not checked here (shared) |
| Directory_Updates_CarouselSwipeAction (own action, folder Directory_Updates) | 053 | householdCarouselActions.ts:87-96 | `match` | BR-UBTCON-173 |
| GetHasExtendedShare, GetHasPhotobookAccess (UBTConnect_Utils) | 096 | useFlagOn | `match` | feature-flag-helpers.md:20, 27 |

Not checked here (referenced UI blocks): AddressPopup_Wrapper, NotesSheet, ShareSheet, ShareableObject_Generic and
UBT_LazyImage (UBTConnect_Utils); BackNavigationHandler (NavigationHandler); the patterns of UBTConnectLibrary
(Layout_DetailPage, SkeletonSection, ImageCard_LazyLoading, ImageCard__Content, HorizontalTagList, KebabButtonMenu,
SeeMoreSection, IconText, Icon, CustomText, CustomContainer, Columns_Two, ComingSoon, MemberRelation_ListItem,
NonMember_ListItem, Button). The rows above check the arguments that the flow passes.

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| - | - | - | No finding | - | - |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| HouseholdDetails_Block, Photos: If #LD_Checks | Connect_LaunchDarkly_PermissionCheck(MobileDirectoryHouseholdGallery) | `$if(false, …)`: the ComingSoon box always shows | TST: ComingSoon always (rows 118-120) | HouseholdDetails_Block.mvc.js:1291 |
| HouseholdDetails_Block, Event_NonMemberOnClick | Handler_OnClickNavigateTomarriedChildren_Household(In_HouseholdId = HouseholdId of the block) | the event parameter: the household of the tapped row; the Members block runs HasAccessToRegion first | TST (row 129) | HouseholdDetails_Block.mvc.js:1743-1755 |
| HouseholdRelations_Block, Get_MemberDetails output IsMemberDeceased | output from Member_GetContext_Service | no such output | TST: no field (row 188) | HouseholdRelations_Block.mvc.js (0 hits) |
| HouseholdRelations_Block, Notes button IsDisabled | Get_MemberDetails.IsMemberDeceased | false | TST (row 197) | HouseholdRelations_Block.mvc.js:504-505 |
| HouseholdRelations_Block, Handler_AddNotes | refresh data FetchNotes, then ShowNotesSheet = True | ShowNotesSheet = true only; no call refreshes FetchNotes | TST: no notes fetch (rows 190, 234) | HouseholdRelations_Block.mvc.js:1595-1599, 1921-1928 |

### 6.2 KB pages vs TST (for the KB owner)

The KB pages come from DEV (2026-10-05). In these three places a KB text disagrees with the DEV pack and with TST.
React follows TST in each place.

| Id | KB text | TST (compiled code) | Source |
|---|---|---|---|
| K1 | BR-UBTCON-817: the actions bar gets `EnableNotes: GetHasNewBookmarks()`; "notes enabled only with new bookmarks" | `enableNotesAttr = !isDeceased`; the DEV pack has the same expression | `UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:1507` |
| K2 | `ui/directory-household.md`: "`Household_Relations(HouseholdId, MemberId, RelationsTitle)`" | the screen has two inputs, HouseholdId and MemberId; RelationsTitle is the event parameter | `UBTConnect.Directory_Household.Household_Relations.mvc.js:16-25, 306-323` |
| K3 | `ui/directory-household.md`: "`OnClick_Bookmark` and `OnClick_Notes` are wired with no logic beyond the event" | the Notes button calls Handler_AddNotes, which sets ShowNotesSheet = true and opens the notes sheet | `UBTConnect.Directory_Household.HouseholdRelations_Block.mvc.js:1921-1928` |

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| - | No question | - | - | - |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 12 | 12 | 0 | 0 | 0 | 0 | 0 | 0 |
| data | 45 | 39 | 0 | 0 | 1 | 5 | 0 | 0 |
| ui | 85 | 83 | 0 | 0 | 0 | 0 | 2 | 0 |
| actions | 90 | 87 | 0 | 0 | 0 | 0 | 3 | 0 |
| validations | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 3 | 3 | 0 | 0 | 0 | 0 | 0 | 0 |
| strings | 4 | 4 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | **241** | **230** | **0** | **0** | **1** | **5** | **5** | **0** |
