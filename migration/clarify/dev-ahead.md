# DEV vs TST register

Material for a later comparison, when TST deploys a DEV version. The user asked for it on 2026-10-27: keep a record
of every DEV element that a decision removes from React or leaves out.

Source: the §6.1 tables of the flow reports (DEV model of 2026-10-27 against the TST compiled code). Read the report
row for the detail. React follows TST in each case unless the row says otherwise.

## App_Common (2)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| BottomBarMenu / Event_BottomBar_Clicked, Bookmarks item | navigate to Bookmarks, no flag check | Connect_LaunchDarkly_PermissionCheck(mobileDirectoryBookmarkNote) and GetHasNewBookmarks choose Bookmarks, New_MyBookmarks or MyBookmarks | TST |
| ShowCommunicationExceptionMessage | App_NetworkStatus_IsOnline_IsPersistent and a JavaScript node `navigator.onLine` ("Live check at the moment of the error") | the client variable only | TST |

## App_Policies (1)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| ShowCommunicationExceptionMessage | A JavaScript node `CheckIsOnlineNow` reads `navigator.onLine`. The condition is `Client.App_NetworkStatus_IsOnline_IsPersistent and CheckIsO | No JavaScript node. The condition is `App_NetworkStatus_IsOnline_IsPersistent` only. | TST |

## Home (8)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| HomeFeed / data action GetCommunityStatistics | OnDemand data action that calls Get_UI_CommunityNumbers | no data action | TST (row 005) |
| HomeFeed / ScreenEvent_OnReady | IsScreenInitialized True, JS IsRestoredFromCache, refresh GetCommunityStatistics when not restored | IsScreenInitialized True only | TST (row 027) |
| HomeFeed / Content | If True around Section_CommunityPopulation, else CustomContainer > Directory_CommunityNumbers | Section_CommunityPopulation with no If; no Directory_CommunityNumbers | TST (rows 009, 010) |
| HomeFeed / ShareSheet | inside If True #HideInServiceStudio | no If | TST (row 016) |
| HomeFeed / ButtonOnClick | no such action | screen action ButtonOnClick → UBTConnect_Utils TestDownload; no widget binds it | neither builds it (row 028) |
| FeedBlock_Services / OnClick_Service, ElGusto | in the ExternalApps switch: popup info ("El Gusto", SVG_ElGusto, URL), then ConfirmAction | in the ExternalLinks switch: OpenInApp_OpenExternalLink(ExternalLinks_ElGusto, False) | TST (row 094) |
| FeedBlock_Services / third switch of OnClick_Service | an empty MyNotes case | no MyNotes case | TST (row 097) |
| FeedBlock_Updates / Event_MarkAsRead, Event_MarkAsUnread | Directory_Updates_RefreshBottomBarCount(ForceRefresh True) after the flag | no badge refresh | TST (rows 123, 124) |

## App_Menu_ContactUs (2)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| ContactUsMenu / OnClick_MenuOption, transition | `transition=Inherited` | `TransitionAnimation.Default` | Default: `navigate` without options |
| Line ends in the texts of Get_ContactUsFormDescription and in the Support Team text | `\n` | `\r\n` | `\r\n` |

## App_Notifications (16)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| Screen NotificationDetails | screen with `MessageInstanceId`, `Get_UI_NotificationDetails` | no screen | TST: not built |
| Block Notifications_ConfirmDialog | delete dialog (single and all) | no block | TST |
| Notifications: variables | MaxRecords = 2000; ReadCount; Local_OnlyShowUnread; Screen_NotificationItemList | MaxRecords = 20; BadgeNumber (no writer); none of the other three | TST (maxRecords 20) |
| FetchNotifications | `Local_OnlyShowUnread` → ListFilter(not IsRead) | no such variable, no branch | TST |
| Title Badge | Number = ReadCount, set from UnreadNotificationsCount and by Handler_UpdateReadCount | Number = BadgeNumber, always 0 | TST |
| Search_PostScroll container | Input only | Icon ArrowLeftAlt → Handler_ToggleSearch, then the Input | TST |
| Placeholder_Header_Input | Search_PreScroll hidden when IsHeaderScrolled | Search_PreScroll always | TST |
| Empty state | If `SelectedHistorySearch <> ""` → EmptyList "No results found for '…'" | Notifications_NoItemsFound only | TST (F1 open) |
| Handler_FilterSearchText | also sets SelectedHistorySearch = Text (the server filters) | no SelectedHistorySearch writer (BR-UBTCON-977) | TST |
| Handler_ApplyFilters, Notifications_SortSheet | ApplyFilters(IsNewestToOldest) → OrderByIsAscending; ScrollTop disabled | ApplyFilters() without a value; ScrollTop runs; no order writer (BR-UBTCON-978) | TST |
| Notifications_Action | switch OnChange → event OnlyShowUnread → Handler_OnlyShowUnread | switch without OnChange, no event (BR-UBTCON-984) | TST |
| NotificationsListBreakpoints | events NotificationDetail, UpdateReadCount; Handler_UpdateReadCount | no events, no actions | TST |
| NotificationsList | swipe "Mark as read/unread" → ToggleRead; "Delete" → dialog → Delete_Notifications; item click → NotificationDetail; OnParametersChanged | plain list; OnInitialize only | TST |
| Handler_NotificationDetail | IsRead → NotificationDetails; else MarkAsRead (Comms_CS) | no action | TST |
| Notifications_MoreActionSheet and the screen handlers | MarkAllAsRead → MarkAllAsReadNotifications (Comms_CS) and refresh; DeleteAll → Delete_Notifications and refresh | empty handlers, no events (BR-UBTCON-980) | TST |
| MoreActionSheet (App_CommonBlocks_Filter) | "Delete all notifications" opens Notifications_ConfirmDialog; mark-all closes the sheet | both trigger their event at once; no dialog, no close | TST |

## Directory_Locality (6)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| BrowseDirectory, CountryDetails: LeafletMap MaxBoundsViscosity | 0.5 | type default (0): `maxBoundsViscosity = LongInteger.defaultValue` | TST (0) |
| CountryDetails: Input #Block_SearchInput InitalString | `InitalString: SearchString` | no InitalString in the In_Options record | TST (none) |
| CountryList: GetCommunityStatistics, Get_UI_CommunityNumbers, Action_RefreshData_Community | present | absent (0 hits) | TST (none) |
| Locality_Details: Locality Contacts tab | If Connect_LaunchDarkly_PermissionCheck(MobileDirectoryLocalityContacts) with Locality_LocalityContacts and ComingSoon_V2 | `$if(true, …)` with ComingSoon only; no LaunchDarkly check, no Locality_LocalityContacts | TST (ComingSoon) |
| GetSample_FilterTags: Locality Contacts tag | always appended | appended only when Connect_LaunchDarkly_PermissionCheck(mobileDirectoryLocalityContacts) has access | TST (behind the flag, off by decision Locality_Details Q2) |
| Locality_OneSchoolGlobal: input In_LocalityTimezoneData | not in the block | block input, passed by Locality_Details from Get_LocalityDetails.UI_LocalityTimezone | TST (passed) |

## Directory_Household (5)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| HouseholdDetails_Block, Photos: If #LD_Checks | Connect_LaunchDarkly_PermissionCheck(MobileDirectoryHouseholdGallery) | `$if(false, …)`: the ComingSoon box always shows | TST: ComingSoon always (rows 118-120) |
| HouseholdDetails_Block, Event_NonMemberOnClick | Handler_OnClickNavigateTomarriedChildren_Household(In_HouseholdId = HouseholdId of the block) | the event parameter: the household of the tapped row; the Members block runs HasAccessToRegion first | TST (row 129) |
| HouseholdRelations_Block, Get_MemberDetails output IsMemberDeceased | output from Member_GetContext_Service | no such output | TST: no field (row 188) |
| HouseholdRelations_Block, Notes button IsDisabled | Get_MemberDetails.IsMemberDeceased | false | TST (row 197) |
| HouseholdRelations_Block, Handler_AddNotes | refresh data FetchNotes, then ShowNotesSheet = True | ShowNotesSheet = true only; no call refreshes FetchNotes | TST: no notes fetch (rows 190, 234) |

## Directory_Search (6)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| Get_FilteredRecentClickedResults, Get_SearchResultsVisibilityStatus, Get_RecentClickedResu | the recent results are filtered by household visibility (at most 5); hidden entries are deleted | absent; the list and If HasResultsAndNotBirthday read get_RecentClickedResultsAggr.listOut (`ScreenBlock_Search.mvc.js`:499, 741) | TST |
| SkeletonSection around the recent list; UBT_LazyImage In_ForceLoadingState | In_IsLoading = not Get_FilteredRecentClickedResults.IsDataFetched | absent (`ScreenBlock_Search.mvc.js`:690-713, 796-812) | TST |
| Recent clicked list | plain list, class "list list-group recent-search-list", item class "recent-search-item overflow-wrap-anywhere" | Gallery 5/5/5, list "list list-group", item "overflow-wrap-anywhere" with text-align center (`ScreenBlock_Search.mvc.js`:709-713, 741-742, 7 | TST |
| IconText of a recent term | TextOptions IsOverflowEllipsis True | no IsOverflowEllipsis (`ScreenBlock_Search.mvc.js`:953-962) | TST |
| Get_RecentClickedResults at start | max 100 | default maxRecords 5 (`ScreenBlock_Search.mvc.js`:1971-1972) | TST |
| FetchSearchResults, branch "From Maps?" | ListFilter(DisplayHouseholdName and DisplayAddress) on the households | server data action; the client file has no displayHouseholdName; the fields came to TST after the survey | not adopted (user, 2026-10-17) |

## Directory_Photobook (2)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| Photobook roles (row 001) | Registered, UBTOne_User | `checkPermissions` calls `OS.RolesInfo.checkRegistered()` only | TST: MEMBER_ROUTE |
| Client.App_Policies_RedirectURL (row 014) | read and written by the flow (pack/data.md) | no read or write in Policy_Checker, AcceptPendingPolicies, Policy_Custom_AcceptPendingPolicies; only the debugger getter table | TST: no such variable |

## Directory_OneSchoolGlobal (7)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| roles of OneSchoolGlobalDetails | Registered, UBTOne_User | checkRegistered only | TST: MEMBER_ROUTE |
| OneSchoolGlobalDetails_Block | own block with inputs In_OneSchoolGlobalId and IsRestoredFromCache | no block file; the widgets and the logic are in the screen file | TST: the page inlines the block |
| IsRestoredFromCache | screen variable, set once in OnInitialize, passed to the block | no variable; the JS node runs in OnInitialize and in OnReady | TST: useWasRestoredFromCache |
| OnReady If | `IsRestoredFromCache` | `restored and isDataFetched` | TST: `restored && data !== null` |
| OnParametersChanged | the block calls OnReady() | `onParametersChangedEventHandler = null` | TST: no handler (see Q1) |
| If False branches | DW_OneSchoolGlobal_Numbers, ShowUpcomingEvents, events list, about text, third SkeletonSection | not compiled; only ComingSoon and ComingSoon4 | TST: else branches only |
| OneSchoolGlobalCarousel | screen exists | no compiled file | not built (V8) |

## Bookmarks (2)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| ScreenBlock_BookmarkGroup header search | the KB (DEV extract) describes a search input enabled when ShowSearch or SearchString <> "", a search icon when not ShowSearch, and the sear | no Input widget and no icon in the view (show:136-1835); both header Ifs are constant true (show:255, 280-284); the 5 search actions have no | TST: no search (rows 067, 085, 105, 106) |
| Screen Bookmarks | the DEV flow Bookmarks | the same screen exists on TST (`UBTConnect.Bookmarks.Bookmarks.mvc.js`) and the tab opens it since C2NewBookmarks turned true (2026-10-21) | MyBookmarks, by the decision Bookmarks Q1 a (user, 2026-10-2 |

## Notes (15)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| OnInitialize restore check | `CheckRestored`, PageNumber = 1 | absent | TST |
| `GetNotes_FilterYear` | `Get_RecentYears(3)` | `Get_Note_DynamicFilter_YearOptions` | TST |
| `ResetPillsVallues` | `GetNotes_Pills(Notes_Filter.NoteCategoryId)` | no argument | TST |
| `Handler_ApplyFilters` | also copies `Years` | `SortByNewest`, `HasFiltersApplied` only | TST |
| `Handler_OnClickNoteCardItem` | carousels, `FeedItemDetail`, `Household_Relations`, member message | three detail screens; other branches empty | TST |
| `OnClick_NoteCardItem` arguments | 4 (with `ObjectId2`, `HasDetailAccess`) | 2 | TST |
| search `Input` `IsEnabled` | not in the dump | list length > 1 | TST |
| `Event_Submit` | `Handler_SearchOnSubmit` | `Refresh_GetNotes` directly | TST (same effect) |
| `ItemCard_WithNotes` arguments | also `In_ChannelLogo`, `In_ChannelName`, `In_PublishedAt` | absent | TST |
| `NoteCard_List` `HeightOptions` | `If(In_Notes.Empty,…)` | absent | TST |
| `NoteCard_List` empty state | `BorderColor`, "No note added yet" | bookmark, "No Notes found" | TST |
| `Notes_FilterSheet` `In_StartFilter` | `Sort_ByNewest` | empty `Filter_Common` | TST |
| year option fields | `isSelected`, `SelectedIds`, `SelectedNames` | `Id`, `DisplayText`, `isEnabled`, `Title`, `Order` | TST |
| `Notes_FilterSheet` OnParametersChanged | calls `Initialize_FilterYearOptions` | null | TST |
| `Get_RecentYears` | client action | absent | TST |

## Calendar (7)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| MyEntertaining roles | Registered, UBTOne_User | `checkRegistered()` only | TST: a member route |
| MyEntertaining `Handle_NavBack` on `OnNavBack` | present | absent: the screen passes only the inputs and `_handleError` | TST: no handler; the back arrow of the layout |
| MyEntertaining_Embedded event `OnNavBack` and `Handle_NavBack` | present | absent | TST: no event |
| MyEntertaining_Embedded `Layout_DetailPage.In_IsHideTitle` | True | absent (default): the title shows | TST: title "My Entertaining" |
| Embedded_MyEntertaining event `OnNavBack` | in the signature | absent | TST: no event prop |
| title text "My Entertaining" | not in `strings.md` | `placeholder_Header_Title` | TST |
| data actions of UBTConnect_EmbedMyEntertaining | not in `data.md` | `DataActionGetEntertainingConfig`, `AppManager_Get_UserIdToken` | TST |

## ContactFlow (5)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| ContactByEmailOrbitHost / Handler_SubmitForm | a [DISABLED] call of OnApplicationEvent_ContactHelpdesk | no call | TST: no audit call (row 125) |
| ContactByEmailLDMCoordinator / header | If False with UBT_LazyImage, else an External image | only the External image with In_AvatarURL | TST: one image (rows 038, 131) |
| ContactByEmailOrbitHelpdesk / SendContactEmail | an extra argument "None=TextToInteger(MemberId)" in the pack text | 8 arguments, no MemberId argument | TST: 8 arguments (row 104) |
| ContactByEmailForm / subject counter | Connect2_LegacyShared.Reusable2.InputCounter (InputId, NoteInitialLength) | UBTConnectLibrary.ConnectPatterns.InputCounter (In_InputId, In_InitialLength) | TST: `components/ui/InputCounter/InputCounter.tsx` (row 015) |
| ContactByEmailContacts / screen | a screen with a link from Locality_LocalityContacts | the screen and the block are compiled; no compiled file references Locality_LocalityContacts (only the service worker list) | board `skip` stays; React has the route in routes.generated. |

## Legacy_Share (6)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| Roles of ConnectShare and LegacyShareObject | Registered, UBTOne_User | `OS.RolesInfo.checkRegistered()` only | TST: MEMBER_ROUTE |
| OnInitializeSharingScreen: AuditShareViewEvent on the success path | [DISABLED] node | absent | TST: no call |
| OnInitializeSharingScreen: GetShareAttributes | [DISABLED] node | absent | TST: no call |
| AuditShareViewEvent: zOnApplicationEvent_Wrapper2 | [DISABLED] node | absent; the JSON is built and serialised only | TST: nothing is sent |
| HandleOnResumeOpenLink Action_ProcessURL → RedirectToURL | transition Inherited | `TransitionAnimation.Default` | not built (U14) |
| ScreenBlock_ShareDetail, ScreenBlock_ShareObject, ProfileList | signatures only (pack/references.md) | full code: OnParametersChanged, ActionShareObject, HandleShareProfileList, the ProfileList flows | TST |

## Legacy_MyNotificationsFlow (1)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| none |  |  |  |

## Legacy_OrbitEventsFlow (5)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| OrbitLanding: NavigateTo_PassportScan, OnHandle_NavigateToPassportScan, "View Passport det | present (dump 2026-10-27) | absent: 3 block events only (`OrbitLanding.mvc.js` :131, :145, :159); no match for "assport" in the wrapper or the block | DEV (F3) |
| Screen PassportScan | present | no compiled file | neither: board `skip` V8 |
| EventDetail: block of the wrapper | pack label "Connect2_OrbitMobile_MUI + LDM_ScreenBlocks" (two blocks of the same name in `references.md`) | `Orbit_ScreenBlocks.ScreenBlock_EventDetail` (`EventDetail.mvc.js:167` show) | TST |
| OrbitLanding FilterEvents lists | names "Last8DaysAndFuture" / "MoreThan8DaysAgo" | AddDays(CurrDate(), -22) (`:1733-1744`) | TST (22 days) |
| MilestoneWrapper sub-blocks | none named (dump gap: the block is in another module) | 6 sub-blocks (`:255-258`, `:386`, `:500`, `:611`, `:739`, `:868`) | one of six (F2) |

## Legacy_OrbitAdminFlow (5)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| OnHandle_NavigateToEventDetail | GetMilestoneScanFF, then If IsScanPerMilestone → OrbitAdminMilestones | navigate to OrbitAdminEventDetail only | DEV (F1) |
| OrbitAdminMilestones, OrbitAdminMilestoneDetail and their blocks | present | no compiled file | not built (board V8) |
| screen roles | Registered, UBTOne_User | `checkRegistered` only | member route |
| navigation transition | Inherited | TransitionAnimation.Default | not compared |
| block internals | signatures only | full logic | TST |

## Legacy_OrbitQRCodeFlow (3)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| QRCodeGenerate roles | Registered, UBTOne_User | `checkRegistered` only | TST: route meta `member` |
| OnHandle_ContactHelpdesk transition | Inherited | `TransitionAnimation.Default` | TST: `DEFAULT_TRANSITION` |
| six screen inputs | mandatory | defaults, no check | TST: defaults, no check |

## Legacy_LDMEventsFlow_V2 (1)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| LDM_EventDetail_V2.Handler_NavigateTo_WebMaps | the pack reads the destination as a screen `WebMaps(api, query)`; the KB says `WebMaps` is an external site of `Legacy_LDMEventsFlow` | navigates to `https://www.google.com/maps/dir/?api=1` with `api` and `query` (W :433-462, :450-451) | TST (`LDM_EventDetail_V2Page.tsx:44-46`) |

## Legacy_AssembleFlow (8)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| AssembleDetail: data action GetAssembleNotes (GetNotesByItemId, AtStart) | present | absent: `dataFetchActionNames = []` | TST (not built) |
| AssembleDetail: placeholder MeetingNotes with NoteListActions and ItemCard_ActionBar | present in the ScreenBlock_AssembleDetail instance | absent; the meeting note is Section_MeetingNotes of AssembleEventDetail | TST |
| AssembleDetail: block NotesSheet, local IsAddNote, actions Handler_OnNoteDeleted, Handler_ | present | absent (0 grep hits) | TST |
| AssembleDetail: If `#HideInServiceStudio_BottomSheet` (constant False) around ShareSheet a | present, dead branch | absent: ShareSheet rendered directly | TST |
| AssembleEvents: block BottomSheet_AssembleFilter | `OutSystemsUI_2_23.Interaction.BottomSheet` | `UBTConnectLibrary.ConnectPatterns.BottomSheet` (Title "Test", CloseOnClickOutsite true, footer empty) | TST (ConnectBottomSheet) |
| Navigations of the three screens | transition Inherited | `TransitionAnimation.Default` on every navigate | neither: React navigates without a transition argument |
| AssembleDetail: event NavigateTo_HouseholdCarousel | ItemPosition and SelectedHouseholdId | the handler receives itemPositionIn and never uses it | TST (ignored) |
| AssembleDetail: event NavigateTo_EmailContact | Event_ContactSurname among the 7 parameters | the handler ignores it and splits Event_ContactName | TST (ignored) |

## Map (2)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| Screen Map | present | present (`UBTConnect.Map.Map.mvc.js`, with the four Map_* block files) | not built |
| `C2EnableMaps` | not read in the pack | false (`getHasMapsEnabled`) | false |

## Deprecated_Calendar_PersonalEvent (6)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| PersonalEventDetails | present | present (`UBTConnect.Deprecated_Calendar_PersonalEvent.PersonalEventDetails.mvc.js`) | not built |
| PersonalEventForm | present | present (with IconContent, LabelContent, TagInput files) | not built |
| Recurrence | present | present (with WeekdaysTagList file) | not built |
| Reminder | present | present | not built |
| ViewEventList | present | present | not built |
| `C2EnablePersonalEvents` | not read in the pack | false (`getHasPersonalEvents`) | false |

## zTemp_Flow (3)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| ShareObject | present | present (`UBTConnect.zTemp_Flow.ShareObject.mvc.js`) | not built |
| TestOpenShare | present | present (`UBTConnect.zTemp_Flow.TestOpenShare.mvc.js`) | not built |
| `getHasBookmarNote` / `getHasNewBookmarks` | not read in the pack | false / true | LegacyShareObject path |

## zDEV_Directory_CommunityBusinessBlocks (2)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| CoomingSoon roles | Registered, UBTOne_User | `checkPermissions` calls `checkRegistered()` only | TST (access `member`) |
| Host of CommunityBusinessCard_Content_Block | Locality Contacts tab behind a LaunchDarkly check | the tab shows `ComingSoon` only | TST (block not built) |

## App_Common_Blocks (3)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| App_NotificationIcon IconClick | navigate with transition Inherited | transition Default | `navigate(path)` without a transition argument |
| External_Link LinkClicked (iOS) | navigate RedirectToURL, transition Inherited | `navigateTo(generateScreenURL(link))`, transition Default | `navigateToPage(link, false)` |
| Section Options | the dump cuts the args at "If…" | horizontal Base or null; margin top = MarginTopSizeId | TST |

## App_Common_Blocks_PopupDialogs (1)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| Dialog_CustomChoice root class | the dump cuts the class at "vertical-b…" | " connect-dialog-popup--vertical-buttons" | TST |

## SubLayout (1)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| SubLayout_DirectoryDetailScreen, call-to-action container | the dump shows a plain placeholder, no style | style `display-none` when HideActions, else "" | TST |

## App_CommonBlocks_Filter (4)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| MoreActionSheet delete popup (rows 152-153, 210-213) | Notifications_ConfirmDialog, ShowConfirmDeleteAllPopup, Toggle_DeleteAllPopup, 4 strings | no popup; the row raises DeleteAllNotification at once | TST |
| MarkAllAsReadClicked (row 151) | triggers MarkAllAsRead, then BottomSheetOnClose | triggers MarkAllAsRead only | TST |
| moreActionContainer wrapper (row 149) | container around the BottomSheet | no such style | TST |
| Action_DefineOptionControl_Empty (row 071) | third loop clears the flat lists | clears OptionList_Control only | TST |

## Directory_CommonBlocks (5)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| Directory_CommunityNumbers, __Number (rows 001-016) | 2 blocks | no file | TST (no card) |
| input EntityExtraDataJSON (row 034) | absent | input, sent to the data action | TST |
| legacy bookmark path (rows 049, 150-151) | C2 only | If GetHasNewBookmarks with a legacy branch; C2 variables | TST (both branches) |
| notes list (rows 048, 128) | EntityNotes and a for-each copy on delete | FetchNotes.Notes, ListIndexOf and ListRemove | TST (one notes state) |
| NotesSheet wrapper (row 145) | popup-dialog connect-share-portal | no wrapper | TST |

## Directory_Caroussel (3)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| EntitiesCarousel_OneSchoolGlobal and its If (rows 058, 073-075) | block and branch | no file, no branch | TST (board skip) |
| RemoveCarouselOnResizeHandler (rows 034-035) | JS node at merge [M1] | handler ends after the UseMoveHandler If | TST |
| CarouselTag instances (row 061) | 3 under Household, 2 in unnamed placeholders | one per branch in Placeholder_CarouselTag | TST |

## Directory_Household_Blocks (1)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| none | - | - | - |

## _shared (5)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| D1 | GetBookmarkCategoryId_ByEntityTypeId, Member | BookmarkType = BookmarkCategory.Member | raises InvalidAction "Bookmarks not available" (first branch |
| D2 | same, OneSchoolGlobal | BookmarkCategory.OneSchoolGlobal2 | `bookmarkCategory.oneSchoolGlobal`; a second Interchange tes |
| D3 | ToggleBookmarkItem_C2 | LogMessage("In_BookmarkType …") before AddBookmark2 | no LogMessage |
| D4 | IsHouseholdDetails_InAncestryModeView | referenced by 5 flows | no compiled caller; `window.ancestryViewHouseholds` is only  |
| D5 | Get_FormattedDistance | defined (folder Directory_Map) | no `define("UBTConnect.controller$Get_FormattedDistance")` |

## _libraries (1)

| Element | DEV | TST | What React follows |
|---|---|---|---|
| all blocks of this unit | no DEV model in the dump (`pack/blocks.md` holds names only) | the compiled files named in `pack/blocks.md` | TST |

Rows: 150. The DEV-only screens have `skip` rows V8 on `migration/board.md`. Decisions that remove a DEV-only element: `decisions.md` (OrbitEvents Q2, OrbitAdmin Q1).