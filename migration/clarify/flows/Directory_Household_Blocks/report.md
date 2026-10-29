# Flow report: Directory_Household_Blocks

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 0 (block-only flow) |
| Own blocks | 6, all used by built screens: HouseholdDetails_Members_Block, HouseholdDetails_TimelinePhoto, HouseholdDetails_TimelinePhoto_List (HouseholdDetails, board:30); Household_Card (Locality_Details, board:32); Household_GalleryCard, Household_GalleryCard_List (SupperMeeting_Details board:36, SupperMeeting_Carousel board:35) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/…`, KB pages `ui/directory-household.md`, `ui/directory-entity-actions.md`, `ui/supper-meetings-oneschool.md`, TST compiled code of the 6 blocks (`tst_source.py`), `migration/runtime-sources/OutSystems.js` |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 78 · partial 1 · missing 0 · differs 0 · mock-only 2 · n/a 3 · unclear 0 (same as `checklist.json`).
- **F1** (minor): `Household_Card` calls `DataActionGetMembers` again after a back navigation and shows two skeleton
  avatars. TST skips OnReady when the view comes from the cache. Decision U19 asks for a restore without a spinner.
- The React call of `DataActionGetMembers` sends the `Household` record. This is the TST wire format: the runtime sends
  the block variables. `HouseholdId` and `User_AgeVisibility=False` are inputs of the server side, which is a mock.
- Status: in React a user sees the household members with their CTAs and chevrons. The user opens a member or a
  married child's household (with the plan check) and picks a timeline photo. The household cards and the
  supper-meeting gallery show as on TST. No finding blocks a flow.

## 2. Blocks

### 2.1 HouseholdDetails_Members_Block

Used by `HouseholdDetails_Block` (screen HouseholdDetails). React: `app/src/components/household/HouseholdMemberList/HouseholdMemberList.tsx` (HML below).

**Identity**

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block instance (-001) | used by HouseholdDetails_Block | `HouseholdMemberList`, OSBlock name of the block | match | HML:85; `HouseholdDetailsView.tsx:242-253` |

**Data**

| Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| isEnabled (-002) | default True | `isEnabled = true` | match | HML:58 |
| In_HouseholdMembers (-003) | mandatory list | prop, default empty | match | HML:59; the caller passes the list (`HouseholdDetailsView.tsx:246`) |
| In_NonHouseholdMembers (-004) | married children | prop | match | HML:60 |
| In_IsLoading (-005) | skeleton and OnReady | prop | match | HML:61 |
| DataFetchStatus of the lists (-034) | `_in_*DataFetchStatus` | `sourceDataFetchStatus` of OSList | match | HML:95,149; `CR-HouseholdDetails-1.md:60` |
| member contact details (-084) | `Member_ContactDetails_Service` through Directory_EntityDetailsActions | `DataActionFetchContactDetails` call, server side mocked | mock-only | `app/src/api/message/repository.ts:220-224`; BR-UBTCON-834; the React call belongs to Directory_CommonBlocks |

**UI tree**

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| SkeletonSection (-011) | In_IsLoading | `<Skeleton isLoading>` | match | HML:86 |
| #Household_Members (-012) | margin bottom ExtraSmall | same option | match | HML:87 |
| list of members (-014) | 'list list-group list--gap-s', no virtualization | same class, `animateItems` | match | HML:89-96; TST :254 `animateItems: true` |
| HouseholdMember_ListItem args (-015) | isEnabled, LifeCycleText, italic, Title | same props | match | HML:98-102 |
| member image (-017) | UBT_LazyImage Member, Base_52, Square | `EntityLazyImage` | match | HML:25,106-112 |
| Actions container (-018) | Flex, SpaceBetween | same | match | HML:114-118 |
| If HasCTAs (-019) | Directory_EntityDetailsActions, EnableCall/EnableEmail = not IsDeceased | `renderMemberActions` with the same options | match | `HouseholdDetailsContainer.tsx:86-95`; TST :379-386; BR-UBTCON-825 |
| If HasCTAs, false (-020) | nothing | nothing | match | HML:119 |
| If HasNavigation, member (-021) | chevron container, Min=100 | same | match | HML:120-133 |
| #Members_MarriedChildren (-024) | padding Base/Small, empty title | same props | match | HML:142 |
| list of married children (-025) | same list style | same | match | HML:143-150; TST :550 |
| NonMember_ListItem args (-026) | 7 args | same props | match | HML:152-160; BR-UBTCON-825 |
| non-member image (-028) | as member row | same | match | HML:161-167 |
| If HasNavigation, non-member (-029) | chevron container | same | match | HML:168-190 |

**Block actions**

| Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| member row tap (-016) | MemberId = If(MemberRole <> Child, Id, 0) | same expression | match | HML:103-105; BR-UBTCON-823 |
| member chevron (-022) | MemberId = Id | `memberOnClick(member.Id)` | match | HML:128-130; BR-UBTCON-823 |
| non-member row tap (-027) | Handler_NonMemberOnClick | `onNonMemberClick(member)` | match | HML:80-82,160; BR-UBTCON-824 |
| non-member chevron (-030) | Handler_NonMemberOnClick | same | match | HML:185 |

**Validations**: none (the block has no input widget).

**Business logic**

| Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| Event_MemberOnClick (-006) | raised by the handler | `onMemberClick(memberId)` | match | HML:47; navigation checked in the report of Directory_Household |
| Event_NonMemberOnClick (-007) | raised after HasAccessToRegion | parent runs the check | match | `useHouseholdDetails.ts:220-226`; same steps as TST :867-905; cross-reference Directory_Household-129 |
| OnReady skeleton (-008) | 5 skeleton members when loading and empty | `useState` initial value | match | HML:69-73; BR-UBTCON-823 |
| OnReady, false branch (-009) | no change | members as passed | match | HML:71-73 |
| GetSkeletonList_UI_HouseholdMembers (-010) | ListLength=5 | same call | match | `lib/ubtConnect/actions.ts:352-362`; body checked in `_shared` |
| Handler_MemberOnClick guard (-023) | MemberId = 0 or not isEnabled: end | same guard | match | HML:76-79 |
| HasAccessToRegion call (-031) | (Target_LocalityName, Target_CountryName) | (localityName, countryName) | match | TST :890; cross-reference Directory_Household-129, -193 |
| HasAccess true (-032) | Event_NonMemberOnClick(HouseholdId) | navigate when isEnabled | match | `useHouseholdDetails.ts:215-223` |
| HasAccess false (-033) | App_Subscription_ShowUpgradePopUp | `showUpgradePopUp()` | match | TST :903-905; `useHouseholdDetails.ts:223` |
| HasNavigation default (-035) | structure default True | skeleton member has true | match | `CR-HouseholdDetails-1.md:26` |

**Strings**: 'Household members' matches (-013, TST :236).

### 2.2 HouseholdDetails_TimelinePhoto

React: `app/src/components/household/HouseholdTimelinePhoto/HouseholdTimelinePhoto.tsx` (HTP below).

| Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block instance (-036) | public, used by the list | `HouseholdTimelinePhoto` | match | HTP:51 |
| 5 inputs (-037) | mandatory | props with defaults | match | HTP:21-49 |
| MainContainerClass (-038) | 'ubt-household-image-card' | constant | match | HTP:19 |
| #Block_Image border (-039) | Primary when selected, else Neutral3 | same | match | HTP:54-58 |
| background classes (-040) | FormatClasses(…, GetClasses_BackgroundImageSize(In_CardTypeId, 0)) | same call | match | HTP:66-69; TST :236 has two arguments; the pack text is cut |
| container click (-041) | Selected(Date) | `onSelected(date)` | match | HTP:70 |
| UBT_LazyImage (-042) | Household, Large_65, Auto, Soft radius | same | match | HTP:72-78 |
| label (-043) | visible when In_BackgroundURL <> "" | same condition | match | HTP:79-83; BR-UBTCON-843 |

### 2.3 HouseholdDetails_TimelinePhoto_List

React: `app/src/components/household/HouseholdTimelinePhotoList/HouseholdTimelinePhotoList.tsx` (HTPL below).

| Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block instance (-044) | used by HouseholdDetails_Block | used by `HouseholdTimelinePhotos.tsx:21` | match | HTPL:29 |
| In_HouseholdTimelineImages (-045) | mandatory list | prop | match | HTPL:25 |
| list (-046) | horizontal gallery class, no virtualization | same, `animateItems` | match | HTPL:30-36; TST :141 |
| item args (-047) | Date, SignedURL, Gallery, IsCurrent, Label | same | match | HTPL:38-44 |
| Selected → Event_DateSelected (-048) | event | parent dispatches `timelinePhotoSelected` | match | `useHouseholdDetails.ts:233-235` |

### 2.4 Household_Card

Used by `Locality_Households_HouseholdList` (screen Locality_Details). React: `app/src/pages/Locality_Details/components/Household_Card.tsx` (HC below) and `hooks/useHouseholdCardMembers.ts` (UHCM below).

**Identity and data**

| Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block instance (-049) | used by the household list | `Household_Card` | match | HC:41 |
| input Household (-050) | UI_LocalityHousehold | prop `household` | match | HC:25 |
| GetMembers, React call (-057) | OnDemand data action, refreshed by OnReady | `fetchHouseholdCardMembers(household)` | match | `api/household/repository.ts:104-110`; TST :406-420; `OutSystems.js:17` sends `screenData.variables` |
| GetMembers, server side (-083) | Household_GetMembers_Service(HouseholdId, User_AgeVisibility=False) | contract mock | mock-only | `pages/Locality_Details/mocks.ts:124-127`; BR-UBTCON-808 |

**UI tree**

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| ImageCard_LazyLoading (-052) | bookmark--rounded, List, padding-bottom-s, IsBookmarked, avatar list | same | match | HC:42-49 |
| UBT_LazyImage (-053) | Household, HasErrorMessage, MaxWidth_100vw | same | match | HC:50-58; TST :202 |
| avatars (-054) | SkeletonSection(not IsDataFetched) > UBT_LazyImage_List | same | match | HC:59-69 |
| ImageCard__Content (-055) | subtitle when ChildrenNames <> "" | same | match | HC:70-75 |
| IconText (-056) | "Locality, Country", HomePinFill | same | match | HC:76-94 |

**Block actions and logic**

| Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| Event_OnClickHousehold (-051) | ImageCard Event_Click | `onEventOnClickHousehold(householdId)` | match | HC:49 |
| OnReady cache check (-058) | restored from cache: end | always skeleton and call | partial (F1) | UHCM:33-45; TST :478-490, :622-624; U19; F40 |
| OnReady skeleton (-059) | ListClear and 2 skeleton members | `SKELETON_MEMBERS` | match | UHCM:21-25,50 |
| HouseholdId = NullIdentifier (-060) | no call | `householdId === '0'` returns | match | UHCM:35; BR-UBTCON-808 |
| OnParametersChanged (-061) | runs OnReady | effect on the Household value | match | UHCM:43-45 |
| IsDataFetched (-062) | true after the first answer | `fetched !== null` | match | UHCM:49 |

### 2.5 Household_GalleryCard

React: `app/src/components/household/HouseholdGalleryCard/HouseholdGalleryCard.tsx` (HGC below).

| Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block instance (-063) | used by the gallery list | `HouseholdGalleryCard` | match | HGC:32 |
| inputs (-064) | record, ItemsPerRow = 2 | defaults `{}` and 2 | match | HGC:27-28 |
| ImageCard_LazyLoading (-065) | Gallery, 'gallery-card', ItemsPerRow | same | match | HGC:33-37 |
| Event_Click → Event_OnClick (-066) | event | `onEventOnClick()` | match | HGC:37 |
| UBT_LazyImage (-067) | Household, HalfWidth_50vw, no HasErrorMessage | same | match | HGC:38-44; TST has no HasErrorMessage |
| ImageCard__Content (-068) | subtitle ChildrenNames, title HouseholdName | same | match | HGC:45-51 |

### 2.6 Household_GalleryCard_List

Used by `SupperMeeting_HouseholdList`. React: `app/src/components/household/HouseholdGalleryCardList/HouseholdGalleryCardList.tsx` (HGCL below).

| Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block instance (-069) | used by SupperMeeting_HouseholdList | used by `SupperMeetingHouseholdList.tsx:35` | match | HGCL:46 |
| inputs, ItemsPerRow = 2 (-070) | list, In_IsLoading | props, constant 2 | match | HGCL:15,40-42 |
| DataFetchStatus (-078) | status of the list input | `sourceDataFetchStatus` | match | HGCL:27,57 |
| SkeletonSection (-071) | In_IsLoading | `<Skeleton>` | match | HGCL:47 |
| section title (-072) | Get_LookupSection(False).Households.Plural | same call | match | HGCL:48; TST :182 |
| If Empty (-073) | Directory_EmptyState(Household) | `DirectoryEmptyState` | match | HGCL:49-50; BR-UBTCON-841 |
| else: Gallery (-074) | rows = ItemsPerRow | same | match | HGCL:51-52 |
| list (-075) | 'list list-group', no animation | `animateItems={false}` | match | HGCL:53-60; TST :247 |
| item args (-076) | ItemsPerRow, Current | same | match | HGCL:62-64 |
| Event_OnClick_Household_GalleryCard (-077) | HouseholdId of the item | same | match | HGCL:65 |

### 2.7 Flow-level items

| Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| server actions of data.md (-079) | called by blocks of other flows | - | n/a | owned by Directory_CommonBlocks and Directory_Household, see their reports; own calls in -057, -083, -084 |
| shared client actions (-080) | signature only | `lib/ubtConnect/actions.ts` | n/a | shared, checked in the report of `_shared` |
| Client.Bookmarks_IsSynched, Client.Notes_IsSynched (-081) | read by shared actions | `platform/session/clientVars.ts:17` | n/a | owned by `_shared`; no own block reads them |
| strings (-082) | 7 literals | 'Household members' found | match | the other 6 belong to Directory_CommonBlocks and `_shared` |

## 3. Blocks of the flow

The own blocks are in §2. Blocks of other flows:
- `Directory_EntityDetailsActions`, `Directory_EmptyState` (flow Directory_CommonBlocks): arguments checked in rows -019 and -073; internals in the report of Directory_CommonBlocks.
- `SubLayout_DirectoryDetailScreen_Section` (flow SubLayout): arguments checked in rows -013, -024, -072; internals in the report of SubLayout.
- Library blocks (`_libraries`): `HouseholdMember_ListItem`, `NonMember_ListItem`, `ImageCard_LazyLoading` (UBTConnectLibrary.ConnectCorePatterns), `ImageCard__Content`, `IconText`, `SkeletonSection` (ConnectPatterns), `UBT_LazyImage`, `UBT_LazyImage_List` (UBTConnect_Utils.CW_Image). The arguments match; the internals are not checked here.

## 4. Shared blocks and actions

| Unit | React location | Verdict | Note |
|---|---|---|---|
| GetSkeletonList_UI_HouseholdMembers | `app/src/lib/ubtConnect/actions.ts:352-362` | match (call) | body checked in the report of `_shared` |
| HasAccessToRegion | `app/src/lib/ubtConnect/actions.ts:390` | match (call) | rules BR-UBTCON-252 to 255 checked in the report of `_shared` |
| App_Subscription_ShowUpgradePopUp | `useHouseholdDetails.ts:223` | match (call) | checked in the report of `_shared` |
| GetBookmarkCategoryId_ByEntityTypeId, GetNameAndSurname_ByFullName, GetShareType_FromEntity, ToggleBookmarkItem_C2 | `app/src/lib/ubtConnect/actions.ts` | n/a | called by Directory_EntityDetailsActions, not by an own block |

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix | Status |
|---|---|---|---|---|---|---|
| F1 | minor | Household_Card / OnReady | TST ends OnReady when `wasCurrentViewRestoredFromCache()` is true (`Household_Card.mvc.js:478-490`, `:622-624`). React keeps the members in `useState`, outside the view cache. After Back, each card shows two skeleton avatars and calls `DataActionGetMembers` again. Decision U19 (`app-shell.spec.md:351,386`) asks for a restore without a spinner. F40 (`stack.md:228`) allows a new call only when the saved state has no data. | `app/src/pages/Locality_Details/hooks/useHouseholdCardMembers.ts:33-45` | Keep the fetched members in the view cache (a query, or `useViewState`). On a restored view with data, skip the skeleton and the call. Follow the recipe of `app/docs/guides/page-template.md:96-101`. | fixed 2026-10-27 (`fixes/E-directory.md`) |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| none | - | - | - | The reader found no pack element absent on TST. The one-argument call of GetClasses_BackgroundImageSize in the pack is a cut text, not a difference (TST :236 has two arguments). |

### 6.2 KB pages vs TST (for the KB owner)

None.

## 7. Questions for the user

None.

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 6 | 6 | 0 | 0 | 0 | 0 | 0 | 0 |
| data | 18 | 13 | 0 | 0 | 0 | 2 | 3 | 0 |
| ui | 32 | 32 | 0 | 0 | 0 | 0 | 0 | 0 |
| actions | 8 | 8 | 0 | 0 | 0 | 0 | 0 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 18 | 17 | 1 | 0 | 0 | 0 | 0 | 0 |
| strings | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | **84** | **78** | **1** | **0** | **0** | **2** | **3** | **0** |
