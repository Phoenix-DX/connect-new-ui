# Flow report: Bookmarks

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 1 (built: 0; not built: Bookmarks, board skip). TST screens of the area: 4 (built: MyBookmarks, BookmarksByGroup; not built: New_MyBookmarks, New_BookmarksByGroup, board skip) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `pack/tst-only.md`, TST compiled code (`tst_source.py show`, line numbers `show:N`), `migration/runtime-sources/Connect2_MyBookmarks_MUI.controller.js`, `Connect2_LegacyShared.controller.js`, `OutSystemsReactView.js`, `app/src/pages/MyBookmarks`, `app/src/pages/BookmarksByGroup`, KB pages (`pack/kb.md`, MUI module `landing.md`, `group-page.md`, rules BR-C2LEG-176 to 195) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

The DEV flow `Bookmarks` holds the screen `Bookmarks` and its 3 blocks (the C2NewBookmarks branch). The DEV dump
has no model of the TST flow `Legacy_MyBookmarks`. The rows of the built screens come from the TST compiled code of
the wrappers `MyBookmarks`, `BookmarksByGroup` and of the MUI screen blocks `ScreenBlock_MyBookmarks`,
`ScreenBlock_BookmarkGroup`.

Flag values on TST: `getHasNewBookmarks` true since 2026-10-21, `getHasBookmarNote` false, `getHasCarouselEnabled`
true, `getHasExtendedShare` true (`migration/knowledge/flag-values-tst.json:8-21`). The React app stays on the MyBookmarks branch. The recorded decision says so: "Bookmarks Q1 a (user, 2026-10-22):
keep MyBookmarks (D2) until the PROD value is known" (`flag-values-tst.json:37`).

## 1. Summary

- Counts by verdict: match 100 · partial 3 · missing 2 · differs 1 · mock-only 5 · n/a 12 · unclear 0 (same as `checklist.json`, 123 rows).
- F1 (minor): the Supper Meeting row of BookmarksByGroup does not render the main-hall colours of its title and tag; a NotCaptured marker stands in.
- F2 (minor): neither screen sets the document title ("MyBookmarks", "BookmarksByGroup"); the app shell owns the fix for every route.
- F3 (info): OnClick_BookmarkedItem does not call RememberFocusedScrollAnchor; the view cache restores the scroll offsets instead.
- F4 (info): PreloadListSource_Bookmarks runs in the restore callback, not at the list preload event; same data, same conditions.
- Status: a user opens the My Bookmarks landing and sees the three group cards. The user opens a bookmark (carousel, locality, supper meeting or entity page). The user opens a group, removes a bookmark and shares a row through the share sheet. A return shows the cached list. The note dialogs and the search are not reachable on TST (flag off, no widget) and are not built. All server calls are mocks.

## 2. Screens

### 2.1 MyBookmarks (TST wrapper of ScreenBlock_MyBookmarks)

**Identity**

| Id | Item | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 005 | screen, inputs, structure | no input; block `$b1`, BottomBarMenu in its BottomBar placeholder, then CommonUI_InsideLayout | `MyBookmarks()` renders MyBookmarksBlock and CommonUiLayout | match | TST MyBookmarks.mvc.js show:90,126-128,212-218,240; `MyBookmarksPage.tsx:19-57` |
| 008 | roles | checkRegistered | route meta fallback MEMBER_ROUTE (member, lock enforce) | match | show:624-625; `app/src/app/routes.ts:40,92` |
| 009 | document title | View.title "MyBookmarks"; the runtime writes `document.title` on mount | no `document.title` write in `app/src` | missing | show:106-108; `OutSystemsReactView.js:7`; `routes.generated.ts:23` carries the title. F2 |

**Data**: none on the wrapper (the block fetches).

**UI tree**

| Id | Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 006 | BottomBarMenu | isRootPage True, ActiveItem bookmarks, in the block's BottomBar placeholder | `BottomBar isRootPage activeItem=Bookmarks` as `bottomBar` prop | match | show:212-218; `MyBookmarksPage.tsx:75` |
| 007 | CommonUI_InsideLayout | after the block, no inputs | `CommonUiLayout id="$b3"` | match | show:240; `MyBookmarksPage.tsx:54` |

**Screen actions**

| Id | Action | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 010 | OnHandle_NavigateTo_HouseholdCarousel: GetHasCarouselEnabled | If HasCarouselEnabledOut | `useFlagOn('C2EnableCarousel')` (TST true, React default true) | match | show:302-305; `MyBookmarksPage.tsx:21,24`; `flag-values-tst.json:12`; `registry.ts:99-105` |
| 011 | true branch | ListAppend CarouselHouseholdItem per id, SetPreloadObject, HouseholdCarousel(In_StartingHouseholdId) | same | match | show:314-332; `MyBookmarksPage.tsx:25-26` |
| 012 | false branch | HouseholdDetails(HouseholdId) | same | match | show:336-338; `MyBookmarksPage.tsx:28`. Not taken on TST |
| 013 | OnHandle_NavigateTo_BookmarkGroup | BookmarksByGroup(BookmarkGroup) | same | match | show:401-403; `MyBookmarksPage.tsx:50-52` |
| 014 | OnHandle_NavigateTo_Subdivision | SupperMeeting_Details(In_SubdivsionId) | same | match | show:438-440; `MyBookmarksPage.tsx:34-36` |
| 015 | OnHandle_NavigateTo_CommunityBusinessCarousel: condition | If In_ObjectType = Connect_Entity.oneSchoolGlobal | same | match | show:476-477; `MyBookmarksPage.tsx:38` |
| 016 | true branch | OneSchoolGlobalDetails(In_OneSchoolGlobalId) | same | match | show:479-481; `MyBookmarksPage.tsx:39` |
| 017 | false branch | CommunityBusinessDetails_CoomingSoon(In_CommunityBusinessId) | same | match | show:485-487; `MyBookmarksPage.tsx:41-43` |
| 018 | OnHandle_NavigateTo_Locality | Locality_Details(LocalityId); LocalityName, InitialTab dropped | same | match | show:542-544; `MyBookmarksPage.tsx:31-33` |
| 019 | event wiring of the block | 5 events to OnHandle_*; the wrapper drops ItemsLength and SearchString | same signatures | match | show:132-195; `MyBookmarksPage.tsx:22-45` |

**Validations**: none. **Business logic**: none on the wrapper. **Strings**: none.

### 2.2 ScreenBlock_MyBookmarks (Connect2_MyBookmarks_MUI, the logic of MyBookmarks)

**Data**

| Id | Data source | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 020 | local variables | HasBookmarks, IsFetchingBookmarks, CountSize, Contacts, Locations, CommunityBusinesses, All* lists, IsNavigationFromHistory, HasNetworkError | `INITIAL_MY_BOOKMARKS_STATE` (countSize 4) | match | show:43-73; `myBookmarksState.ts:26-38` |
| 021 | data action GetGroupSummaries | callDataAction, on demand, OnAfterFetch | `fetchBookmarkGroupSummaries(latest.current)` | match | show:677-706; `useMyBookmarks.ts:120-122`; `repository.ts:40-50` |
| 022 | server side of DataActionGetGroupSummaries | screenservices …/ScreenBlock_MyBookmarks/DataActionGetGroupSummaries | msw handler on the shared collection; error scenario = network failure | mock-only | show:687; `pages/MyBookmarks/mocks.ts:62-86`. Production needs the data action |
| 023 | server side of GetBookmarkById / New_GetBookmarkById | ActionGetBookmarkById, ActionNew_GetBookmarkById | msw contract handlers | mock-only | `Connect2_MyBookmarks_MUI.controller.js:195-240`; `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:214-215`; CR-MyBookmarks-1 applied |

**UI tree**

| Id | Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 052 | Layout: MenuIcon menu, title "My Bookmarks" | MenuAction.menu, centered container | `LegacyLayout` with `MenuIcon menuAction=Menu` | match | show:224,257; `MyBookmarksView.tsx:159-167` |
| 045 | If not IsFetchingBookmarks or IsNavigationFromHistory, else Spinner | ShowLoader = IsFetchingBookmarks | same ternary | match | show:262,606; `MyBookmarksView.tsx:102-103,154` |
| 046 | If not HasNetworkError, else NetworkWarning | TryAgain -> RefreshBookmarkData | same | match | show:263,571; `MyBookmarksView.tsx:104,151` |
| 047 | If HasBookmarks, else NoBookmarks(IsToDisplay = not HasBookmarks) | | same | match | show:264,521-523; `MyBookmarksView.tsx:105,132-134`. BR-C2LEG-180 |
| 048 | group card Contacts | If not Contacts.Bookmarks.Empty: MyBookmarks_Card(ShowViewAll = TotalCount >= 1) + MyBookmarks_Album | `groups.map` with the same conditions | match | show:265-268,302-319; `MyBookmarksView.tsx:74-82,107-128` |
| 049 | group card Locations | same pattern | same | match | show:344-347,381-398; `MyBookmarksView.tsx:83-90` |
| 050 | group card Entities | same pattern | same; list number 59 not captured | match | show:423-426,460-477; `MyBookmarksView.tsx:91-99` |
| 051 | FreeSubscriptionAlert | Dialog_AccessRestrictedAction_Legacy inside the HasBookmarks branch | `DialogAccessRestrictedActionLegacy` | match | show:514; `MyBookmarksView.tsx:129` |

**Screen actions**

| Id | Action | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 028 | RefreshBookmarkData: start | IsFetchingBookmarks True; Refresh Query | `write({isFetchingBookmarks: true})`, refresh | match | show:818-842; `useMyBookmarks.ts:126-128` |
| 029 | CommunicationException: condition | IsFetchingBookmarks False, HasNetworkError True; If IsRequestFailedExceptionMessage | same | match | show:849-863; `useMyBookmarks.ts:131-138`. BR-C2LEG-179 |
| 030 | true branch | "No internet connection. Please check your network setting and try again…" Error | same text | match | show:866; `useMyBookmarks.ts:135` |
| 031 | false branch | the exception message, Error | same | match | show:872; `useMyBookmarks.ts:136` |
| 032 | NotRegistered | raise NotRegistered | rethrow NotRegisteredException | match | show:881-890; `useMyBookmarks.ts:141` |
| 033 | AllExceptions: "distributed transaction" | IsFetchingBookmarks False; raise UserException1 | same | match | show:898-907; `useMyBookmarks.ts:142-145` |
| 034 | AllExceptions: timeout or request failed | HasNetworkError True; message Error (else message only) | same; helper texts equal | match | show:910-924; `Connect2_LegacyShared.controller.js:5876,5931`; `myBookmarksState.ts:75-79` |
| 035 | NavigateTo_BookmarkedItem: GetBookmarkById, Contact index | client action (GetHasBookmarNote: New_GetBookmarkById else GetBookmarkById); ListIndexOf AllContacts when Contact | `fetchBookmarkById(id, LD check)`; `findIndex` | match | show:1005-1019; `controller.js:23-51`; `useMyBookmarks.ts:163-169`; `repository.ts:55-61` |
| 036 | IsBookmarkFound false | "That bookmark isn’t available" Error; Refresh Query | same | match | show:1023,1134-1137; `useMyBookmarks.ts:170-174`. BR-C2LEG-176 |
| 037 | RecordNotAvailable | SendBookmarkedHiddenFeedbackMessage(ObjectType), Info | same text builder | match | show:1026-1032; `controller.js:164`; `useMyBookmarks.ts:175-179` |
| 038 | RecordDisabled | App_Subscription_ShowUpgradePopUp | `showUpgradePopUp()` | match | show:1037,1121-1123; `useMyBookmarks.ts:180-183` |
| 039 | ObjectType Contact | preload (Id, Name, IsDeceased, Image of AllContacts), SetPreloadObject_Households, NavigateTo_Households(…, Contacts.TotalCount, position, "", ids) | same | match | show:1040-1059; `useMyBookmarks.ts:185-193`. BR-C2LEG-182 |
| 040 | ObjectType Locality | NavigateTo_Locality(id, Title, InitialTab = oneSchoolGlobal ? 3 : campusCo ? 4 : 0) | `initialTab()` same values | match | show:1067-1070 (full line); `myBookmarksState.ts:98-99` |
| 041 | ObjectType Subdivision | NavigateTo_Subdivision(id) | same | match | show:1075-1078; `useMyBookmarks.ts:196-197` |
| 042 | ObjectType CampusCo or OneSchoolGlobal | preload (Id, Name, SignedURL, CommunityBusinessTypeId), SetPreloadObject_Entities, event with CommunityBusinesses.TotalCount | same | match | show:1083-1102; `useMyBookmarks.ts:198-208` |
| 043 | HandleNavigateToViewAll | NavigateTo_ViewAll of a card -> trigger NavigateTo_BookmarkGroup | `onNavigateToViewAll={onNavigateToBookmarkGroup}` | match | show:275-282,1208-1226; `MyBookmarksView.tsx:116` |
| 044 | TryAgain of NetworkWarning | RefreshBookmarkData | `onTryAgain` | match | show:571-585; `useMyBookmarks.ts:217-219` |

**Validations**: none.

**Business logic**

| Id | Logic | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 024 | OnInitialize | JS WasCurrentViewRestoredFromCache -> IsNavigationFromHistory | `restoreMyBookmarks` sets it on a restored view | match | show:1249-1273,1405-1407; `myBookmarksState.ts:49-50` |
| 025 | OnReady | If not IsNavigationFromHistory: ClearLocalLists; then RefreshBookmarkData | same | match | show:960-968; `useMyBookmarks.ts:156-159`. BR-C2LEG-181 |
| 026 | ClearLocalLists | the 3 summaries and the 3 lists cleared | `clearedLocalLists()` | match | show:758-807; `myBookmarksState.ts:65-72` |
| 027 | OnAfterFetch_GetGroupSummaries | 6 outputs copied; IsFetchingBookmarks False; HasBookmarks = any group not empty; HasNetworkError False | `groupSummariesFetched()` | match | show:708-737; `myBookmarksState.ts:54-62` |

**Strings**: all strings of the block match (053: the two NoBookmarks texts show:551,564; 054: "My Bookmarks", "That bookmark isn’t available", "No internet connection…").

### 2.3 BookmarksByGroup (TST wrapper of ScreenBlock_BookmarkGroup)

**Identity**

| Id | Item | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 058 | screen, input, structure | input BookmarkGroup (Text) from the URL, passed to the block; BottomBarMenu; CommonUI_InsideLayout; checkRegistered | `readBookmarksByGroupInputs`, `BookmarkGroupView`, `CommonUiLayout`; route meta MEMBER_ROUTE | match | TST BookmarksByGroup.mvc.js show:13,60-61,137-139,226-231,253,672-673; `inputs.ts:10`; `BookmarksByGroupPage.tsx:25-37,71-101`; `routes.ts:40,92` |
| 061 | document title | View.title "BookmarksByGroup" | not set | missing | show:117-119; `OutSystemsReactView.js:7`. F2 |

**UI tree**

| Id | Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 059 | BottomBarMenu | ActiveItem bookmarks, no isRootPage | `BottomBar activeItem=Bookmarks` | match | show:229-231; `BookmarksByGroupPage.tsx:82` |
| 060 | CommonUI_InsideLayout | after the block | `CommonUiLayout id="$b3"` | match | show:253; `BookmarksByGroupPage.tsx:101` |
| 066 | ShareSheet of the block | In_ShareObjectTypeId, In_IsOpen, In_ShareableObjectId, In_IsLegacy True; ShareableObject when ConnectEntityTypeId <> null | `ShareSheetContainer` with `ShareableObject` under the same condition | match | ScreenBlock_BookmarkGroup show:1764-1769,1775-1782,1801-1804; `BookmarksByGroupPage.tsx:86-98` |

**Screen actions**

| Id | Action | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 062 | OnHandle_NavigateTo_HouseholdCarousel | GetHasCarouselEnabled: preload + HouseholdCarousel, else HouseholdDetails | same | match | show:544-580; `BookmarksByGroupPage.tsx:29,39-48`. BR-UBTCON-617 |
| 063 | OnHandle_NavigateTo_CommunityBusinessCarousel | oneSchoolGlobal: OneSchoolGlobalDetails, else CommunityBusinessDetails_CoomingSoon | same (TST values of the static entities) | match | show:349-360; `BookmarksByGroupPage.tsx:49-58`; `staticEntities.ts:19-23`. BR-UBTCON-619 |
| 064 | OnHandle_NavigateTo_Locality / _Subdivision | Locality_Details(LocalityId); SupperMeeting_Details(In_SubdivsionId) | same | match | show:415-417,311-313; `BookmarksByGroupPage.tsx:59-64` |
| 065 | OnHandle_NavigateTo_ShareObject | If In_IsShareToOthers: ShareEntity_ByURL else LegacyShareObject | not wired | n/a | show:452-481; raised only when GetHasExtendedShare is false (block show:2238-2275); flag on on TST (`flag-values-tst.json:21`). BR-UBTCON-620 |

**Validations**: none. **Business logic**: none on the wrapper. **Strings**: none.

### 2.4 ScreenBlock_BookmarkGroup (Connect2_MyBookmarks_MUI, the logic of BookmarksByGroup)

**Data**

| Id | Data source | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 067 | local variables and input | 14 variables and BookmarkGroup | `BookmarkGroupState`; the 5 search variables are constants (no search widget on TST) | match | show:31-73; `bookmarkGroupState.ts:19-55,130-146` |
| 068 | data action GetAllBookmarksByGroup | callDataAction, OnAfterFetch | `fetchBookmarkGroup(bookmarkGroupCallInputs(…))` | match | show:1917-1935; `useBookmarkGroup.ts:166-170`; `repository.ts:32-36` |
| 069 | server side of DataActionGetAllBookmarksByGroup | screenservices path | msw handler on the shared collection; scenarios real, empty, error, loading | mock-only | show:1927; `pages/BookmarksByGroup/mocks.ts:17-36` |
| 070 | server action DeleteBookmarkByBookmarkId (call) | callServerAction -> Success | `deleteBookmark()` | match | show:1870-1880; `repository.ts:65-70` |
| 071 | its server side | ActionDeleteBookmarkByBookmarkId | msw handler removes the row | mock-only | `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:216-222` |
| 072 | server action New_UpdateBookmarkNote (call) | callServerAction(BookmarkId, Note) -> Success | `updateBookmarkNote()` | match | show:1892-1903; `repository.ts:74-80` |
| 073 | its server side | ActionNew_UpdateBookmarkNote | msw handler sets the Note | mock-only | `mocks.ts:223-229` |

**UI tree**

| Id | Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 107 | header | MenuIcon back; title If true: "My " + BookmarkGroup; headerRight If true: empty | same | match | show:235,255-267,280-284; `BookmarkGroupView.tsx:174-179` |
| 108 | If not IsFetchingBookmarks or IsFromNavigationHistory, else Spinner | | same | match | show:288,1688-1690; `BookmarkGroupView.tsx:112,163` |
| 109 | If not BookmarkedItems.Empty; else If not WasSearched: NoBookmarks(IsToDisplay = Empty and not fetching) else MessageList_NoResults | two hint texts | same | match | show:289-293,1608-1611,1639,1652,1676-1679; `BookmarkGroupView.tsx:113,136-160` |
| 110 | list Contacts: Household_List_Item | List_Contacts "list list-group", row margin, Result_Item_Image args, title fallback, description, tag, ItemOptionsMenu (IsShareImplemented = not deceased and available), click, toggle, share | `contactRow` | match | show:300-528; `bookmarkGroupRows.tsx:44-45,65-128`. BR-C2LEG-192, 193 |
| 111 | ScrollAnchor per row (Id = ObjectId) | in the three lists | `ScrollAnchor idIn={item.objectId}` | match | show:357-360,692-695,1252-1255; `bookmarkGroupRows.tsx:70,157,249` |
| 112 | ItemOptionsMenu event OnShareToOthers (Household, Entity rows) | OnHandle_ShareItem(True, …); the flag matters only in the NavigateTo_ShareObject branch | "Share to others..." is offered only without extended share and with the native sharing plugin | n/a | show:486-513,1368-1405; `ItemOptionsMenu.tsx:23-29,65-70`. Flag on on TST; native only |
| 113 | list Locations, Locality row (Result_Item_Badge) | badge = first letter of LocalityName on #36c9c5, diameter 40, 55px, title LocalityName, tag CountryName, menu without share | `locationRow`, `LegacyResultItemBadge` | match | show:646-817; `bookmarkGroupRows.tsx:132-187`. BR-C2LEG-193 (never on localities) |
| 114 | list Locations, Supper Meeting row: title and tag colours by IsMainHall | title color primary / neutral-10; tag background primary / neutral-2, color neutral-2 / neutral-6 | NotCaptured marker; styles not rendered; args, title, "N Household(s)" tag and click match | partial | show:930-1025; `bookmarkGroupRows.tsx:188-222`. F1. BR-C2LEG-192 |
| 115 | Supper Meeting row: ItemOptionsMenu | IsShareImplemented = GetHasExtendedShare; share(False, Type_ShareObject.supperMeeting, Id, False, supperMeetings_aka_Subdivisions) | `menu(true)` with the same arguments | match | show:1039-1046,1058,1073; `bookmarkGroupRows.tsx:135-154,219` |
| 116 | list Entities: Entity_List_Item | In_SignedURL = Image else CampusCo / OneSchool ComingSoon or Unavailable by Title; title fallback; tag AreasServed, CountryName; share when available | `entityRow` | match | show:1195-1405; `bookmarkGroupRows.tsx:228-296`. BR-C2LEG-192, 193, 195 |
| 117 | popups | BookmarkNoteAddEdit and BookmarkNoteDelete inside bookmark-list-cont; FreeSubscriptionAlert after it, in the not-empty branch | same placement | match | show:1523-1601; `BookmarkGroupView.tsx:115-134` |

**Screen actions**

| Id | Action | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 082 | OnReady | If IsFromNavigationHistory: end; else RefreshBookmarkData(False) | same | match | show:2450-2456; `useBookmarkGroup.ts:188-191` |
| 083 | RefreshBookmarkData: start | IsFetchingBookmarks True; Refresh Query | same | match | show:1966-1973; `useBookmarkGroup.ts:174-177` |
| 084 | IsScrollToTop | JS SetScrollToTop after the refresh | `setScrollToTop()` | match | show:1974-1977,3776-3790; `useBookmarkGroup.ts:104-107,178` |
| 085 | AllExceptions | IsFetchingBookmarks False; SearchString ""; message Error | same, without the constant SearchString | match | show:1987-2001; `useBookmarkGroup.ts:179-183` |
| 087 | OnClick_BookmarkedItem: found / not found | GetBookmarkById; else "That bookmark isn’t available" + Refresh Query | same | match | show:2776-2782,2865-2869; `useBookmarkGroup.ts:277-282`. BR-C2LEG-176 |
| 088 | RecordNotAvailable / RecordDisabled | hidden message; upgrade pop-up | same | match | show:2785-2796,2852-2854; `useBookmarkGroup.ts:284-291` |
| 089 | PutCachedMyBookmarks before the navigation | after RememberFocusedScrollAnchor | `putCachedBookmarkedItems(rows)` | match | show:2801-2802; `useBookmarkGroup.ts:292-293`. The anchor: row 077 |
| 090 | group Contacts | NavigateTo_HouseholdsCarousel: preload of BookmarkedItems, event with the ids | same | match | show:2805-2808,2028-2068; `useBookmarkGroup.ts:294-310`. BR-C2LEG-178 |
| 091 | group Entities | NavigateTo_CommunityBusinessDetail: preload, event (Id, UpdatedTotal, position, ObjectType) | same | match | show:2813-2816,2547-2583; `useBookmarkGroup.ts:311-327` |
| 092 | group Locations | Locality: NavigateTo_Locality(DetailsJson.LocalityID, Title, 0); else NavigateTo_Subdivision(id) | same | match | show:2821-2834,2497-2516,2985-3003; `useBookmarkGroup.ts:328-334` |
| 093 | OnHandle_BookmarkToggle: success | ListRemove, "Removed from your Bookmarks", UpdatedTotal - 1, Delete_LocalBookmarkByBookmarkId, PutCachedMyBookmarks | same | match | show:3176-3199; `controller.js:122`; `useBookmarkGroup.ts:210-217`. BR-C2LEG-184 |
| 094 | failure | "Bookmark could not be removed. Please try again later." Info | same | match | show:3204; `useBookmarkGroup.ts:219` |
| 095 | OnHandle_ShareItem: no share type | "Coming soon" Info | same | match | show:2224-2226; `useBookmarkGroup.ts:233-236`. BR-C2LEG-190 |
| 096 | IsRecordDisabled | UpgradeSubscription(ObjectId) | same | match | show:2230-2233; `useBookmarkGroup.ts:237-240` |
| 097 | GetHasExtendedShare true | ShareableObject_Generic from the row (Location by entity type, SignedURL for OneSchool), ids, IsShareOpen True | `shareOpened` | match | show:2238-2267; `useBookmarkGroup.ts:241-256` |
| 098 | GetHasExtendedShare false | trigger NavigateTo_ShareObject | returns | n/a | show:2272-2275. Flag on on TST (`flag-values-tst.json:21`) |
| 099 | Handler_CloseShareSheet | IsShareOpen False; ConnectEntityTypeId null | `shareClosed` | match | show:3300-3317; `useBookmarkGroup.ts:349-351` |
| 100 | UpgradeSubscription | AuditBookmarkSubscriptionEvent(id in the slot of the group), ConfirmAction FreeSubscriptionAlert | same | match | show:3488-3513 (full line); `useBookmarkGroup.ts:195-205`. BR-C2LEG-191 |
| 101 | Handler_OnSaveBookmarkNote | JS UpdateNote (not awaited); Note = Trim on the row; PutCachedMyBookmarks | same | match | show:2357-2375; `useBookmarkGroup.ts:261-270`. BR-C2LEG-189 |
| 102 | UpdateNote: failure | "There was an error, please try again." Error | same | match | show:3258-3267; `useBookmarkGroup.ts:262-264` |
| 103 | Handler_ConfirmDeleteNote | Handler_OnSaveBookmarkNote({BookmarkId, ""}) | `onDeleteNoteConfirm` | match | show:1556-1565,2395-2411; `BookmarkGroupView.tsx:125-132` |
| 104 | Handler_AddNote / EditNote / DeleteNote and the BookmarkNote block | rendered and reachable only with GetHasBookmarNote | not built; NotCaptured when the flag is on | n/a | show:564-567,853-856,1109-1112,1441-1444,2630,3026,3327; `bookmarkGroupRows.tsx:56-63`. Flag off on TST (`flag-values-tst.json:9`). BR-C2LEG-188 |
| 105 | BackNavigationHandler | search open: ResetSearch + PreventNavigation; else Contacts: SetPreloadObject(BookmarkedItems) | the Contacts branch; the search branch cannot run on TST | match | show:3119-3130; `useBookmarkGroup.ts:352-358` |
| 106 | search actions (5) | defined; no caller in the compiled view | none | n/a | show:2472,3539,2694,2123,3450; view show:136-1835 has no Input widget, header Ifs constant true. Dead on TST; §6.1 |

**Validations**: none (no input widget on TST).

**Business logic**

| Id | Logic | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 080 | OnInitialize | JS WasCurrentViewRestoredFromCache -> IsFromNavigationHistory | `restoredBookmarkGroupState` | match | show:3407-3431; `bookmarkGroupState.ts:60-65` |
| 081 | PreloadListSource_Bookmarks | list preload event: FromCache, GetCachedMyBookmarks, If CacheHit: BookmarkedItems, UpdatedTotal | the restore callback at OnInitialize time, same data | partial | show:2921-2958; `useBookmarkGroup.ts:137-138`. F4. BR-C2LEG-187 |
| 086 | OnAfterFetch_GetAllBookmarksByGroup | BookmarkedItems, UpdatedTotal, IsFetchingBookmarks False, PutCachedMyBookmarks | `fetched` + `putCachedBookmarkedItems` | match | show:2168-2193; `useBookmarkGroup.ts:166-170` |
| 074 | GetCachedMyBookmarks / PutCachedMyBookmarks | Connect2_LegacyShared cache by group | `lib/legacyShared/actions.ts:425-433` with `toCacheRecord` | match | `Connect2_LegacyShared.controller.js:4531-4557`; `bookmarkGroupActions.ts:25-59` |
| 075 | Delete_LocalBookmarkByBookmarkId | legacy local copy | `legacyDelete_LocalBookmarkByBookmarkId` | match | `localBookmarks.ts:290`; CR-BookmarksByGroup-2 applied |
| 076 | AuditBookmarkSubscriptionEvent | AzureInsights custom event | `log.info('ApplicationEvent', …)` | differs | `bookmarkGroupActions.ts:82-99`; `app-shell.spec.md:349,384` (U17: no telemetry in the mock phase) |
| 077 | RememberFocusedScrollAnchor | anchor of the clicked row for the return | not called; the view cache restores the scroll offsets | partial | show:2798-2799; `useBookmarkGroup.ts:272-276,292-293`; `viewCache.ts:88-98`. F3 |
| 078 | GetHasBookmarNote / GetHasExtendedShare | flag reads | `useFlagOn` on the page, passed to the block | match | show:565,1042,2239; `BookmarksByGroupPage.tsx:30-33`; `flag-values-tst.json:9,21` |
| 079 | App_Subscription_ShowUpgradePopUp | pop-up | `showUpgradePopUp()` | match | show:2852-2854; `useBookmarkGroup.ts:289`. Internals not checked here (shared) |

**Strings**: all strings of the block match (121: show:267,433,1025,1324,1639,1652,1676-1679,2226,2865,3204,3267 and `controller.js:122,164`).

### 2.5 Bookmarks (not built)

Board: `skip` — "V3d · D2 · skip:variant · branch 1, revisit if C2NewBookmarks=true (needs bottom bar routing:
foundation CR)" (user, 2026-10-14; `migration/board.md:53`). On TST the flag `C2NewBookmarks` is true since
2026-10-21, so the Bookmarks tab opens this screen (`flag-values-tst.json:31-37`). React keeps `MyBookmarks`
(`app/src/app/routes.ts:72` redirects) by the recorded decision Bookmarks Q1 a (user, 2026-10-22).

What the DEV screen does: the Connect 2 bookmarks list with category pills and a filter sheet by year and sort.
It pages ten at a time. Each card offers unbookmark and notes (KB `ui/bookmarks.md`, rules BR-UBTCON-020 to 027).

A build needs the blocks `Bookmarks_Card_List`, `Bookmarks_Card_Item`, `Bookmarks_FilterSheet` and the
`UBTConnect_Utils` note blocks. It also needs the client actions `GetBookmarks_Pills`, `GetBookmarks_FilterYear`,
the `Connect_Bookmarks_CS` services `GetBookmarks`, `AddBookmark2`, `DeleteBookmarkByBookmarkId2`, and the bottom
bar routing of the foundation CR. Verdict `n/a` (rows 001 to 004: the screen and its 3 blocks).

### 2.6 New_MyBookmarks, New_BookmarksByGroup (not built)

Board: `skip` — "branch 2, revisit if LD mobileDirectoryBookmarkNote=true and C2NewBookmarks=false" (user,
2026-10-14; `migration/board.md:76-77`). The flag `mobileDirectoryBookmarkNote` is false on TST
(`flag-values-tst.json:9`). The TST files exist (`UBTConnect.Legacy_MyBookmarks.New_*.mvc.js`); the DEV dump has no
model of them. Verdict `n/a` (rows 122, 123).

## 3. Blocks of the flow

Own blocks of the DEV flow: `Bookmarks_Card_Item`, `Bookmarks_Card_List`, `Bookmarks_FilterSheet`. Used only by the
skipped screen `Bookmarks`: one `n/a` row each (002 to 004), not detailed.

Blocks of the MUI flow `MyBookmarksFlow` that the built screens use (TST compiled code, no DEV model):

| Block | Rows | Result |
|---|---|---|
| ScreenBlock_MyBookmarks | 020 to 054 | §2.2 |
| ScreenBlock_BookmarkGroup | 067 to 117, 121 | §2.4 |
| MyBookmarks_Card | 055 | match: title, "View All" when ShowViewAll, "Recent", NavigateTo_ViewAll (`MyBookmarks_Card.tsx:30-62`) |
| MyBookmarks_Album | 056 | match: columns 1 to 3 else 2, placeholder images by group and type, title fallback, OnHandle_BookmarkedItem (`MyBookmarks_Album.tsx:28-53,69,79-114`). BR-C2LEG-194, 195 |
| NoBookmarks | 057 | match: If IsToDisplay, ConnectBlankSlate with `bookmark_unavailable_icon.svg` and the two placeholders (`NoBookmarks.tsx:22-38`) |
| BookmarkNoteAddEdit | 118, 119 | match: header, 50-character TextArea, SAVE / CANCEL, SaveNote and DiscardNote (`BookmarkNoteAddEdit.tsx:25-77`); InputCounter n/a (the dialog never opens on TST) |
| BookmarkNoteDelete | 120 | match: texts and DeleteNoteConfirm (`BookmarkNoteDelete.tsx:19-36`) |
| BookmarkNote | 104 | n/a: flag off on TST, not built |

## 4. Shared blocks and actions

- `BottomBarMenu`, `CommonUI_InsideLayout` (App_Common): arguments checked here (rows 006, 007, 059, 060); internals not checked here (shared). BR-UBTCON-314 to 318, 310 to 313.
- `Connect2_LegacyShared` blocks `Layout`, `MenuIcon__UpdatedOSUI`, `NetworkWarning`, `Spinner`, `ConnectBlankSlate`, `MessageList_NoResults`, `Result_Item_Image`, `Result_Item_Badge`, `ItemOptionsMenu`: arguments and events checked here (rows 045, 046, 052, 107 to 116). Internals not checked here (shared, another module). `Result_Item_Badge` lives in the page folder as `LegacyResultItemBadge.tsx`; not checked line by line against its TST file.
- `UBTConnect_Utils` blocks `ShareSheet`, `ShareableObject`, `Dialog_AccessRestrictedAction_Legacy`: arguments checked (rows 051, 066, 117); internals not checked here (shared).
- `NavigationHandler` blocks `ScrollAnchor`, `BackNavigationHandler` and actions `SetPreloadObject`, `PreventNavigation`, `ConfirmAction`, `RememberFocusedScrollAnchor`: rows 077, 105, 111; the platform is not checked here.
- `UBTConnect_Utils` client actions `GetHasCarouselEnabled`, `GetHasBookmarNote`, `GetHasExtendedShare`, `App_Subscription_ShowUpgradePopUp`, `ShareEntity_ByURL`: rows 010, 062, 078, 079, 065. BR-C2UTL-113.
- `Connect2_LegacyShared` client actions `GetCachedMyBookmarks`, `PutCachedMyBookmarks`, `Delete_LocalBookmarkByBookmarkId`, `AuditBookmarkSubscriptionEvent`, `IsRequestFailedExceptionMessage`, `IsTimeoutExceptionMessage`: rows 074 to 076, 034 (texts read in `Connect2_LegacyShared.controller.js`).
- `Connect2_MyBookmarks_MUI` client actions `GetBookmarkById`, `SendBookmarkedFeedbackMessage`, `SendBookmarkedHiddenFeedbackMessage`: rows 035, 037, 093 (read in `Connect2_MyBookmarks_MUI.controller.js`).

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix | Status |
|---|---|---|---|---|---|---|
| F1 | minor | BookmarksByGroup, Supper Meeting row (row 114) | The title and tag of a Supper Meeting row do not get the IsMainHall colours (title primary / neutral-10; tag background primary / neutral-2 and colour neutral-2 / neutral-6). A NotCaptured marker is rendered. BR-C2LEG-192 names the highlighted main hall. | `app/src/pages/BookmarksByGroup/components/bookmarkGroupRows.tsx:188-222` | Render the two inline styles from the compiled expressions (ScreenBlock_BookmarkGroup show:996-999, 1016-1020) and drop the marker; Q2 decides whether to wait for a capture. | fixed 2026-10-27 (`fixes/G1-content.md`) |
| F2 | minor | MyBookmarks, BookmarksByGroup (rows 009, 061) | The document title stays unset; TST sets "MyBookmarks" and "BookmarksByGroup" (`OutSystemsReactView.js:7` writes `document.title = this.title` on mount). | no `document.title` write in `app/src`; `app/src/app/routes.generated.ts:23,35` hold the titles | Apply the route title to `document.title` in the app shell (NavigationHost or ScreenFrame) for every route. Cross-cutting; one fix for all flows. | fixed 2026-10-27 (`fixes/A-shell.md`) |
| F3 | info | BookmarksByGroup, OnClick_BookmarkedItem (row 077) | RememberFocusedScrollAnchor(CurrentListWidgetId, CurrentRowNumber, ObjectId) is not called. The view cache saves the scroll offsets on leave and restores them on return, so the clicked row stays in view. No recorded decision names the substitution. | `app/src/pages/BookmarksByGroup/hooks/useBookmarkGroup.ts:272-276,292-293`; `app/src/platform/navigation/viewCache.ts:88-98` | Record the substitution in the architecture docs (ADR or `navigation.md`), or call the NavigationHandler anchor when the platform offers it. | |
| F4 | info | BookmarksByGroup, PreloadListSource_Bookmarks (row 081) | The cache preload runs in the restore callback (OnInitialize time), not at the list's `dx-preload-list-source` event. Same conditions, same data, no user impact. | `app/src/pages/BookmarksByGroup/hooks/useBookmarkGroup.ts:137-138` | None needed; note it with F3. | |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| ScreenBlock_BookmarkGroup header search | the KB (DEV extract) describes a search input enabled when ShowSearch or SearchString <> "", a search icon when not ShowSearch, and the search actions | no Input widget and no icon in the view (show:136-1835); both header Ifs are constant true (show:255, 280-284); the 5 search actions have no caller | TST: no search (rows 067, 085, 105, 106) | KB `Connect2_MyBookmarks_MUI/ui/group-page.md` ("Presentation not made into rules"); BR-C2LEG-183 |
| Screen Bookmarks | the DEV flow Bookmarks | the same screen exists on TST (`UBTConnect.Bookmarks.Bookmarks.mvc.js`) and the tab opens it since C2NewBookmarks turned true (2026-10-21) | MyBookmarks, by the decision Bookmarks Q1 a (user, 2026-10-22) | `flag-values-tst.json:31-37`; `board.md:53` |

### 6.2 KB pages vs TST

| Id | KB text | TST evidence | File |
|---|---|---|---|
| K1 | "NoBookmarks: ConnectBlankSlate with "You have no bookmarks" when IsToDisplay" | the block has no text of its own: title and text come from the caller's placeholders (NoBookmarks.mvc.js show:173-190); the screen blocks pass "You'll find your / bookmarks here" and "You can get back to a page that's / important to you by adding a bookmark " (ScreenBlock_MyBookmarks show:551,564; ScreenBlock_BookmarkGroup show:1639,1652). React follows TST. | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/ui/landing.md` |

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | Is the PROD value of `C2NewBookmarks` known now? The decision Bookmarks Q1 a (2026-10-22) keeps MyBookmarks "until the PROD value is known"; TST has opened the DEV screen Bookmarks since 2026-10-21. | The bottom bar of the clone opens a screen that TST no longer opens; the DEV screen Bookmarks and its 3 blocks are not built. | (a) PROD unknown or false: keep MyBookmarks (no change); (b) PROD true: lift the board skip of Bookmarks and plan its build (3 blocks, pills, filter sheet, services). | (a) until the PROD value is confirmed; the report stays valid for the MyBookmarks branch. |
| Q2 | Supper Meeting rows of BookmarksByGroup (F1): build the IsMainHall colours from the compiled expressions now, or keep the NotCaptured marker until the Locations group is captured on TST? | The colours are a visible rule (BR-C2LEG-192); the Locations group was never captured (no supper-meeting bookmark on the test account). | (a) build from the compiled expressions (show:996-1020) now; (b) wait for a capture of a supper-meeting bookmark. | (a): the expressions are complete and the tokens exist in the theme. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 11 | 3 | 0 | 2 | 0 | 0 | 6 | 0 |
| data | 11 | 6 | 0 | 0 | 0 | 5 | 0 | 0 |
| ui | 30 | 27 | 1 | 0 | 0 | 0 | 2 | 0 |
| actions | 55 | 51 | 0 | 0 | 0 | 0 | 4 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 13 | 10 | 2 | 0 | 1 | 0 | 0 | 0 |
| strings | 3 | 3 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | 123 | 100 | 3 | 2 | 1 | 5 | 12 | 0 |
