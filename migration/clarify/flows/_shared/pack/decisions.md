# Recorded decisions and facts that name the elements of UI flow _shared

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## app-shell.spec

- `migration/app-shell.spec.md:118` (App_IconBadge): - The badge is `App_IconBadge` (max 9). `isLoading = not Notifications_IsSynched`.
- `migration/app-shell.spec.md:132` (App_IconBadge): | updates | `connect-icon-list_alt` (inside `App_IconBadge`, `.ubt-badge.background-red`) | Updates | `/UBTConnect/Updates_SingleList` (627-630) | client var `Directory_Updates_UnreadCount`; refreshed on bottom-bar OnReady when older than `…CheckFrequency_Minut` → `ServiceAPIGet_UI_UpdateItems_Unrea
- `migration/app-shell.spec.md:111` (App_NotificationIcon): | HomePage | – | `App_Common.AppLogo_White` (`img` 155px wide) | `ConnectPatterns.Icon` + `App_NotificationIcon` | HF dom:16-40 |
- `migration/app-shell.spec.md:115` (App_NotificationIcon): The bell is the block `App_Common_Blocks.App_NotificationIcon` (HF p:UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc.js:139, 176,
- `migration/app-shell.spec.md:310` (CacheControl_UserInfo_Wrapper): | `UBTConnect_Utils/CacheControl/CacheControl_UserInfo/DataActionGetCacheInfo` | `CacheControl_UserInfo_Wrapper` on Menu, CountryList, Profile, ContactUsDetails… | Menu calls:7, 101-107 | recorded, `Directory_UserCurrent` filled from the mock user (knowledge/mock-fixtures.md:25-27) |
- `migration/app-shell.spec.md:192` (Dialog_CustomChoice): - `Dialog_CustomChoice` (Menu).
- `migration/app-shell.spec.md:184` (Dialog_ExitConfirmation): | `Dialog_ExitConfirmation` (HomeFeed, Login) | back navigation with `Force=true` at queue priority −1 (p:UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation.mvc.js:140; p:NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc.js:322, 669-672) | `.connect-dialog-popup > .dx-c
- `migration/app-shell.spec.md:191` (Dialog_Navigation): - `NavigationConfirmationDialog` via `Dialog_Navigation` (email forms).

## change requests

- `migration/change-requests/CR-HomeFeed-3.md:6` (App_IconBadge): `BottomBarContent`, `app/src/shared/osui/BottomBarItem`), `App_Common_Blocks.App_IconBadge` / `App_NotificationRefresh`
- `migration/change-requests/CR-HomeFeed-3.md:7` (App_IconBadge): (`app/src/shared/UBTConnect/App_IconBadge`, `App_NotificationRefresh`)
- `migration/change-requests/CR-HomeFeed-3.md:14` (App_IconBadge): - [structure] bottom bar item 3 (`b12-l1-67_2-$b2`, Updates with App_IconBadge): captured as a `div` directly in the list,
- `migration/change-requests/CR-HomeFeed-3.md:21` (App_NotificationIcon): `App_NotificationIcon id="$b3"`), as the Layout_HomePage story V1 does.
- `migration/change-requests/CR-HomeFeed-3.md:41` (App_NotificationIcon): App_NotificationIcon.mvc.js:12-13, OnReady :281-286): fixed by the seeding, block unchanged. (4) item wrappers/widths:
- `migration/change-requests/CR-HomeFeed-3.md:6` (App_NotificationRefresh): `BottomBarContent`, `app/src/shared/osui/BottomBarItem`), `App_Common_Blocks.App_IconBadge` / `App_NotificationRefresh`
- `migration/change-requests/CR-HomeFeed-3.md:7` (App_NotificationRefresh): (`app/src/shared/UBTConnect/App_IconBadge`, `App_NotificationRefresh`)
- `migration/change-requests/CR-Search-3.md:5` (CacheControl_UserInfo_Wrapper): - Block: shell `app/src/shell/userInfo.ts` (`getUserInformation`) or the shared block that calls it on Search (FilterSheet / CacheControl_UserInfo_Wrapper / CommonUI_InsideLayout / BottomBarMenu)
- `migration/change-requests/CR-W4B-1.md:3` (Directory_EmptyState): - **From:** wave 4, batch B (Directory_EmptyState). **Owner:** shared module `app/src/shared/UBTConnect_Utils/lib/staticEntities.ts`.
- `migration/change-requests/CR-W4B-1.md:7` (Directory_EmptyState): - **Why:** Directory_EmptyState renders the UBTConnect Connect_Entity Id ("No Supper Meetings found nearby"), so
- `migration/change-requests/CR-W4A-1.md:1` (Directory_EntityDetailsActions): # CR-W4A-1: local bookmarks for Directory_EntityDetailsActions
- `migration/change-requests/CR-W4A-1.md:3` (Directory_EntityDetailsActions): - Raised by: wave 4 batch A (Directory_EntityDetailsActions), 2026-10-15.
- `migration/change-requests/CR-W4A-1.md:38` (Directory_EntityDetailsActions): - **Block** (`Directory_EntityDetailsActions.tsx`): OnReady bookmark step (both flag branches, OnChange_Bookmark raised,
- `migration/change-requests/CR-W4A-1.md:44` (Directory_EntityDetailsActions): `Directory_EntityDetailsActions/bookmarks.test.tsx` (details under "Contract").
- `migration/change-requests/CR-W4A-1.md:58` (Directory_EntityDetailsActions): has Directory_EntityDetailsActions, `migration/survey/screens.json`; evidence UC:18251-18286, :18312-18336, call sites
- `migration/change-requests/CR-W4A-1.md:63` (Directory_EntityDetailsActions): - **Mocks** (`app/src/shared/UBTConnect/Directory_EntityDetailsActions/mocks.ts`, `contractHandler`, fictional): an
- `migration/change-requests/CR-W4A-1.md:70` (Directory_EntityDetailsActions): - **Tests**: `Directory_EntityDetailsActions/bookmarks.test.tsx`: toggle on / off through the mocks (collection, local
- `migration/change-requests/CR-HouseholdCarousel-2.md:1` (Directory_EntityDetailsActions): # CR-HouseholdCarousel-2: HouseholdDetails_Block / Directory_EntityDetailsActions mocks — the carousel's four households
- `migration/change-requests/CR-HouseholdDetails-2.md:35` (EntitiesCarousel): - §3 `HouseholdDetails_Block/mockData.ts`: household 9001 country "Exampland" (title 5/7/9) and an address with the captured word lengths and line breaks; three EntitiesCarousel tests updated.
- `migration/change-requests/CR-HomeFeed-1.md:7` (External_Link): - Other routes using it (survey sources): OpenExternalLink in App_Common_Blocks.External_Link, App_Menu.Menu,
- `migration/change-requests/CR-Search-3.md:5` (FilterSheet): - Block: shell `app/src/shell/userInfo.ts` (`getUserInformation`) or the shared block that calls it on Search (FilterSheet / CacheControl_UserInfo_Wrapper / CommonUI_InsideLayout / BottomBarMenu)
- `migration/change-requests/CR-Search-3.md:6` (FilterSheet): - Other routes using it (catalog/blocks.md): every route that renders FilterSheet or CommonUI_InsideLayout
- `migration/change-requests/CR-HouseholdDetails-1.md:6` (HouseholdDetails_Members_Block): (`getSkeleton_UI_HouseholdMember`) or `HouseholdDetails_Members_Block`, `src/components/OSList` +
- `migration/change-requests/CR-HouseholdDetails-1.md:7` (HouseholdDetails_Members_Block): `HouseholdDetails_Members_Block` + `HouseholdDetails_Block`, the ShareSheet popup (`src/shared/UBTConnect_Utils/ShareSheet`)
- `migration/change-requests/CR-HouseholdDetails-1.md:26` (HouseholdDetails_Members_Block): (`HouseholdDetails_Members_Block.tsx:126,178`), but the structure default of HasNavigation is True
- `migration/change-requests/CR-HouseholdDetails-1.md:60` (HouseholdDetails_Members_Block): - §3 `components/OSList`: `sourceDataFetchStatus` (+ `DataFetchStatus` 0/1/2, OutSystems.js Model.DataFetchStatus): ` list-loading` / ` list-error` before `OSFillParent`, storeListLength skips Fetching (OutSystemsReactWidgets.js pretty :1263-1267, :1325-1334). HouseholdDetails_Members_Block takes `i
- `migration/change-requests/CR-Profile-1.md:13` (HouseholdDetails_Members_Block): CTAs (HouseholdDetails_Members_Block, `HasCTAs`).
- `migration/change-requests/CR-SupperMeeting_Carousel-1.md:16` (Household_GalleryCard): (`migration/screens/SupperMeeting_Carousel/analysis/dom/default.html`: `Household_GalleryCard` under
- `migration/change-requests/CR-SupperMeeting_Details-1.md:6` (Household_GalleryCard_List): `src/shared/UBTConnect/Household_GalleryCard_List/mockData.ts` / `SupperMeeting_HouseholdList/mocks.ts`;
- `migration/change-requests/CR-SupperMeeting_Details-1.md:41` (Household_GalleryCard_List): household "Child One, Child Two" (`Household_GalleryCard_List/mockData.ts:9`). Expected: ChildrenNames `""` at those
- `migration/change-requests/CR-SupperMeeting_Carousel-1.md:6` (Household_GalleryCard_List): `src/shared/UBTConnect/Household_GalleryCard_List/mockData.ts` — foundation owner

## ADRs (stack.md)

- `app/docs/reference/stack.md:261` (CacheControl_UserInfo_Wrapper): - The memoryCache readers (`CacheControl`, `CacheControl_*`, `CacheControl_UserInfo_Wrapper`) are rewritten in P5-4, where they are; P6 only moves the files.
- `app/docs/reference/stack.md:260` (FilterSheet): - Plan v2 §2.2 example "containers/ (ShareSheet, FilterSheet, BottomBar)" needs a text update: FilterSheet and BottomBar are not containers (no data action; `component` and `hook+component`).

## known original bugs

- `app/docs/known-original-bugs.md:12` (Directory_EntityDetailsActions): | B4  | `UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions`, Handle_Bookmark with C2NewBookmarks off | Always takes the C2 path (`If True`): AddBookmark2 is sent with an empty category (Local_BookmarkTypeId_C2 is never set) and the menu label never changes                             

## knowledge

- `migration/knowledge/feature-flag-helpers.md:16` (App_NotificationIcon): | GetHasNewNotifications | outSystems_FF.C2NewNotifications | false | App_NotificationIcon, MessageDetail | yes: bell → Notifications / MessageList (D11) |
- `migration/knowledge/audit-a1-empty-handlers.md:36` (CacheControl_UserInfo_Wrapper): | `app/src/screens/Notifications/components/MoreActionSheet.tsx:154-155` | `onMarkAllAsRead`, `onDeleteAllNotification` | Notifications_MoreActionSheet.mvc.js Handler_MarkAllAsRead :346-358 and Handler_DeleteAllNotification :254-265: breakpoints only. The suspected "DeleteAllNotification triggers Lo
- `migration/knowledge/shell-facts.md:75` (Directory_EntityDetailsActions): - Screen level: data-action handlers raise `BubbleCommunicationException` / `BubbleGenericException` (a user exception, which falls to AllExceptions) and re-raise NotRegistered (survey:…CountryList.mvc.js:1376-1423). `Directory_EntityDetailsActions` uses the `ScreenController_Raise*` helpers (survey
- `migration/knowledge/auto-decisions-2026-10-15.md:69` (EntitiesCarousel_Element): | SupperMeeting_Carousel | Q2 | fact | by code | Capture timing artifact. EntitiesCarousel_Element.mvc.js:240-307 passes In_IsSkeletonOnly only to the HouseholdDetails branch, never to EntitiesCarouse_lSupperMeetingDeta |
- `migration/knowledge/audit-a1-empty-handlers.md:36` (MoreActionSheet): | `app/src/screens/Notifications/components/MoreActionSheet.tsx:154-155` | `onMarkAllAsRead`, `onDeleteAllNotification` | Notifications_MoreActionSheet.mvc.js Handler_MarkAllAsRead :346-358 and Handler_DeleteAllNotification :254-265: breakpoints only. The suspected "DeleteAllNotification triggers Lo
- `migration/knowledge/audit-a1-empty-handlers.md:62` (OneSchoolGlobal_List): | `screens/Locality_Details/index.tsx:228` | Event_OnClick_Bookmark | OneSchoolGlobal_List never raises it (0 triggers); Handler_OnClick_Bookmark has no node |
- `migration/knowledge/audit-a1-empty-handlers.md:37` (SubLayout_DirectoryDetailScreen_Section): | `app/src/shared/UBTConnectLibrary/SubLayout_Section/SubLayout_Section.tsx:22` | CustomContainer Clicked | the click raises the block's event Clicked; its only compiled parent (SubLayout_DirectoryDetailScreen_Section) binds no event | stays; the old note "controller clicked$Action resolves" (an eve
- `migration/knowledge/audit-a1-empty-handlers.md:90` (SubLayout_DirectoryDetailScreen_Section): MilestoneDetail, GuestArrangements) and SubLayout_Section (via SubLayout_DirectoryDetailScreen_Section:

## flags

- `migration/flags.md:146` (App_NotificationIcon): - `action:getHasNewNotifications`: `UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc.js`, `UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc.js`
- `migration/flags.md:141` (Directory_EntityDetailsActions): - `action:getHasExtendedShare`: `Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc.js`, `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js`, `Connect2_LegacyShared.Share_UI.ShareObjectDetail.mvc.js`, `Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc.js`
- `migration/flags.md:144` (Directory_EntityDetailsActions): - `action:getHasNewBookmarks`: `UBTConnect.App_Common.BottomBarMenu.mvc.js`, `UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js`, `UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc.js`
- `migration/flags.md:183` (Directory_EntityDetailsActions): - `action:toggleBookmarkItem`: `Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc.js`, `UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js`, `UBTConnect.Directory_Locality.Locality_LocalityContacts.mvc.js`
- `migration/flags.md:184` (Directory_EntityDetailsActions): - `action:toggleBookmarkItem_C2`: `UBTConnect.App_Common_Blocks.ItemCardActions.mvc.js`, `UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js`
- `migration/flags.md:124` (FilterSheet): - `action:bottomSheetOnToggle`: `UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc.js`, `UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.mvc.js`, `UBTConnect.App_CommonBlocks_Filter.SortSheet.mvc.js`, `UBTConnect.Directory_Locality.Directory_LegendBottomSheet.mvc.js`
- `migration/flags.md:184` (ItemCardActions): - `action:toggleBookmarkItem_C2`: `UBTConnect.App_Common_Blocks.ItemCardActions.mvc.js`, `UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js`
- `migration/flags.md:124` (MoreActionSheet): - `action:bottomSheetOnToggle`: `UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc.js`, `UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.mvc.js`, `UBTConnect.App_CommonBlocks_Filter.SortSheet.mvc.js`, `UBTConnect.Directory_Locality.Directory_LegendBottomSheet.mvc.js`
- `migration/flags.md:124` (SortSheet): - `action:bottomSheetOnToggle`: `UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc.js`, `UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.mvc.js`, `UBTConnect.App_CommonBlocks_Filter.SortSheet.mvc.js`, `UBTConnect.Directory_Locality.Directory_LegendBottomSheet.mvc.js`

## parity exemptions

- `migration/parity-exemptions.json:593` (CarouselTag): "reason": "The CarouselTag text was masked by the capture ('• • •' for '1 / 3'), so the right-aligned tag placeholder of the reference is a third of a pixel wider than the clone's (left 337.688px → 337.344px). auto-accepted in the user's auto mode 2026-10-15",
- `migration/parity-exemptions.json:88` (Directory_EntityDetailsActions): "reason": "The loading capture held the TST requests until the OutSystems request timeout, so Directory_EntityDetailsActions' FetchContactDetails had failed: every action disabled (background-neutral-3, text-neutral-7) and the skeleton off; the mock loading scenario never answers, so the clone keeps
- `migration/parity-exemptions.json:125` (Directory_EntityDetailsActions): "reason": "The loading and offline states were captured via Locality_Details (states.json `via`), so on TST the app start had finished and the user-info cache was filled: HouseholdDetails_Block's OnReady passed GetUserInformation_Wrapper (mvc.js:2700-2710), set the skeleton household ('Example & Exa
- `migration/parity-exemptions.json:544` (Directory_EntityDetailsActions): "pathRegex": "\\[Directory_CommonBlocks\\.Directory_EntityDetailsActions\\] > div#b3-b8-\\$b1\\.OSBlockWidget\\[ConnectPatterns\\.SkeletonSection\\] > div#b3-b8-b1-Placeholder_LoadingSection(\\.ubt-skeleton-section)?$|div#b3-b8-b2-b6-b1-b1-b1-Content\\.[^ >]*border-radius-circle[^ >]*$|div#b3-b8-b2-
- `migration/parity-exemptions.json:546` (Directory_EntityDetailsActions): "evidence": "migration/screens/SupperMeeting_Details/analysis/dom/loading.html (b3-b8-b1-Placeholder_LoadingSection without ubt-skeleton-section, list-error); parity/loading.json; Directory_EntityDetailsActions.tsx:348-350 (skeleton off on fetch error)"
- `migration/parity-exemptions.json:665` (Directory_EntityDetailsActions): "reason": "Same capture artifact as CAPTURE-LOADING-FETCH-TIMEOUT-SUPPERMEETING (which already covers the Notes button b6): the loading capture held the TST requests until the OutSystems request timeout, so FetchContactDetails failed and HandleFetchError set EnableBookmark / EnableShare False (Bookm
- `migration/parity-exemptions.json:666` (Directory_EntityDetailsActions): "evidence": "migration/screens/SupperMeeting_Details/parity/loading.json (4 class diffs b2/b8); Directory_EntityDetailsActions.mvc.js:1134-1150 (HandleFetchError); SupperMeeting_DetailsBlock mvc.js:370-371 (literal EnableNotes True); UBTConnectLibrary.model.js:4135-4156 (record defaults)"
- `migration/parity-exemptions.json:676` (Directory_EntityDetailsActions): "reason": "Follows from SupperMeeting_Carousel Q2 (answered by code: the default capture caught off-screen slides 2-3 mid-load). Their Directory_EntityDetailsActions (b8) was still in its loading look (grey circles, hidden icons) while its own FetchContactDetails answers were arriving; slide 1, load
- `migration/parity-exemptions.json:609` (EntitiesCarousel_Element): "reason": "Off-screen slides 2 and 3 were snapshotted while SupperMeeting_DetailsBlock still showed GetSkeleton_UI_SubdivisionDetails (ubt-skeleton-section, 'Subdivision Name Example', counts 10) although their household lists had loaded; the clone shows the loaded card. Limited to the card and acti
- `migration/parity-exemptions.json:441` (SubLayout_Browse_Section): "pathRegex": "(div#b1-ContentWrapper\\.content|div#b1-MainContentWrapper\\.ThemeGrid_Container\\.main-content|div#b1-Content\\.content-middle|div#\\$b2\\.OSBlockWidget\\[SubLayout\\.SubLayout_Browse_Section\\]|div\\.directory-detail-screen|div#b2-Placeholder_BottomSection|div#\\$b10\\.OSBlockWidget\
