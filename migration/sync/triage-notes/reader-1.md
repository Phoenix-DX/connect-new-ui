# Triage notes, reader 1 (2026-11-07)

Group: Updates_SingleList, Locality_Details, Notifications, LDM_MyEvents_V2, MessageList, Household_Relations, Menu,
MessageDetail, CountryDetails, ConnectShare. DOM comparisons below were made after removing `id` attributes (ids shift
with the block numbering and make the raw git diff 4000+ lines) and comparing the `data-block` counts and the texts of
the old (2fe9efaf) and new `default.html`.

## Updates_SingleList
- Class: A
- Size: L (default 305 layout, 162 style, 83 class, 51 position, 50 text, 6 structure; one header area, several blocks)
- TST files changed since the capture: UBTConnect.App_CommonBlocks_Filter.FilterSheet, UBTConnect_Utils.CacheControl.CacheControl_UserInfo, UBTConnectLibrary.ConnectPatterns.TagContent, UBTConnect_Utils.CW_Share.ShareSheet, UBTConnectLibrary.ConnectPatterns.HorizontalTagList, UBTConnect.Directory_Updates.UpdateItem_Header, UBTConnect.Directory_Updates.Updates_SingleList (all `.mvc.js`)
- DOM diff: raw diff 4788+/4767- lines (default), 103+/68- (loading), 669+/634- (offline). Block counts old→new: `App_CommonBlocks_Filter.FilterSheet_Icon` 1→0 and `FilterSheet_Icon_Label` 0→1; `ConnectPatterns.HorizontalTagList` 1→0 and `Horizontal_Filter_TagList` 0→1; `OutSystemsUIOverrides.Badge` 4→2; `BasePatterns.CustomContainer` 195→199. New text "Filter" (the label beside the icon). The icon class changed `connect-icon-tune text-neutral-0` → `text-cyan-dark`. Loading/offline: the filter sheet buttons read "Clear" / "Apply" (old "Clear filters" / "Apply filters").
- Parity diffs: default {layout 305, style 162, class 83, position 51, text 50, structure 6, pixel 1 (3.4% pixels)}; offline {layout 13, style 2, structure 3, class 1, text 2, pixel 1}. Most diffs sit under `BasePatterns.CustomContainer` (layout 144, style 116, class 68), `Adaptive.Columns2` (layout 102, position 49) and `ConnectPatterns.TagContent` (layout 48). Examples: layout `div.ubt-search-input` 342×39 → 318×39 (search input is narrower in build because the filter icon now has a label); the same width chain from `columns2` down to `Search_PreScroll` (ConnectPatterns.Input); structure `FilterSheet_Icon` missing/extra (offline).
- Calls: calls.json changed by 14+/14- lines (timestamps only; the action counts are equal, 12→12). Parity calls ok (12 expected, 12 actual).
- Data drift signs: none (masked texts only change width; item rows equal in kind).
- Artefact signs: none besides masked-text width differences in the list rows.
- React code touched by the diff paths: app/src/pages/Updates_SingleList/Updates_SingleListPage.tsx and its components/; the header uses the filter icon and tag list.
- Shared: app/src/components/filter/FilterSheetIcon (`@origin …FilterSheet_Icon`), app/src/components/filter/FilterSheetIconLabel/FilterSheet_Icon_Label.tsx and app/src/components/filter/HorizontalFilterTagList/Horizontal_Filter_TagList.tsx already exist (not yet used by this page; checked by name only), app/src/components/ui/HorizontalTagList, app/src/components/filter/FilterSheet (+ app/src/containers/FilterSheet)
- Unsure: whether the "Clear"/"Apply" label change belongs to the FilterSheet (also seen in CountryDetails, so it is a shared change; see there). Whether Badge 4→2 is a code change or data (unread count) was not checked.

## Locality_Details
- Class: mixed (A+B+C)
- Size: L (default 240 layout, 25 style, 2 structure; 4 states with diffs; calls 39 vs 61)
- TST files changed since the capture: UBTConnectLibrary.ConnectPatterns.HorizontalTagList, UBTConnect.Directory_Locality.Locality_Details
- DOM diff: default 1524+/1470- (id shifts); block counts: `CW_Image.UBT_LazyImage` 67→69, `ConnectPatterns.LazyImage` 67→69, `SkeletonSection` 162→166, `Icon` 34→36. The time label changed "Thursday, 01:27 AM (UTC - 3)" → "Friday, 03:38 PM (UTC - 3)". loading/offline: 663+/56- (new capture contains Household_Card ×3, ImageCard_LazyLoading ×3, texts "0 Brethren", "0 Households", "Sorry, no photo available"). tag-oneschoolglobal: 172+/492-, `ImageCard_LazyLoading` 2→1, `CW_Share.ShareSheet` 2→1 (one list item less). tag-interchange: text "Argentina" added.
- Parity diffs: default {layout 240, style 25, structure 2}: `SkeletonSection` layout 96, `CustomContainer` layout 94, `UBT_LazyImage` 23, `LazyImage` 23, style 23; example layout `LazyImage_Placeholder` 390×26 → 390×260 (capture has the placeholder collapsed, build 260 high). offline {layout 3, structure 1, pixel 1}: `Layout_MainPages` content 390×1112 → 390×578 and `Directory_Locality.Locality_Households` missing in build. tag-interchange {text 1, pseudo 1, layout 1, pixel 1}: `span` "Argentina" → "" (47×12 → 0×12). tag-oneschoolglobal {structure 1, pixel 1 (27.1%)}: `ImageCard_LazyLoading` extra in build.
- Calls: calls.json changed 82+/104-; action count changes `DataActionFetchContactDetails` 2→1, `DataActionFetchNotes` 3→2 (48→46). Parity calls: default expected 39, actual 61; tag-oneschoolglobal expected 40, actual 74 (build calls more than the capture).
- Data drift signs: tag-oneschoolglobal has one list item fewer in the capture than the build/old capture.
- Artefact signs: time-dependent label (day and time changed); lazy-image placeholder heights (26 vs 260) and skeleton phase in the capture; the offline capture contains a Locality_Households skeleton with 0 counts.
- React code touched by the diff paths: app/src/pages/Locality_Details/Locality_DetailsPage.tsx, components/, hooks/
- Shared: app/src/components/ui/HorizontalTagList (TST HorizontalTagList changed); lazy image / skeleton components not located by `@origin` grep (CW_Image.UBT_LazyImage, ConnectPatterns.SkeletonSection have no `@origin` match in components/containers/pages)
- Unsure: which part of Locality_Details.mvc.js changed (calls 2→1 for contact details and notes suggests a call change); the 39 vs 61 call count and whether the build over-calls.

## Notifications
- Class: mixed (A+B)
- Size: L (default 41 diffs: structure 31, position 8, pixel 1, call 1; 5 TST blocks; 4.9% pixels)
- TST files changed since the capture: UBTConnectLibrary.ConnectPatterns.AvatarImage, UBTConnect.App_Notifications.Notifications, .NotificationsList, .NotificationsListBreakpoints, .Notifications_Header, UBTConnectLibrary.ConnectCorePatterns.Notification_ListItem
- DOM diff: default 1594+/5324- lines. `Notification_ListItem` 68→22, `ConnectPatterns.AvatarImage` 68→10, `Columns3` 69→23, `CustomContainer` 284→99, `SkeletonSection` 74→51, `NotificationsList` 3→2, `Notifications_Header` 3→2. Text: the "Last 7 Days" section title is gone, ages changed ("6d", "1w", "4w" … → "2w", "6w", "7w", "13w"). loading/offline: `Notification_ListItem` 0→10, `MessageImage` 0→10, `SanitizedHtml` 0→10, new texts "Today", "0s".
- Parity diffs: default {structure 31, position 8, pixel 1, call 1}: `SkeletonSection` structure 24 (missing in build), `Interaction.BottomSheet` position 8, `NotificationsList` structure 4. Examples: structure `Notifications_Header > $b1 ConnectPattern…` missing in build; `Notifications_Header > b1-$b1 BasePatterns.C…` extra in build; `List_Notifications > $b1 SkeletonSection` missing in build (x several). offline {structure 1, position 8, pixel 1}: `list-group > div` missing in build; BottomSheet `focus-trap-top` offset in parent -1,-1079 → -1,-845 (and 3 more elements, all about 234 px).
- Calls: calls.json changed 37+/24-; `ActionGetSignedImagesInBulk` 0→1 (10→11). Parity calls: expected 11, actual 10 (the bulk signed-images call is missing in build).
- Data drift signs: number of notifications 22 (was 68), section "Last 7 Days" absent, other ages. Skeleton rows are present in the capture list.
- Artefact signs: skeleton rows kept in the captured list (24 SkeletonSection structure diffs); BottomSheet offset in parent shifts by one sheet height (234) in the offline state.
- React code touched by the diff paths: app/src/pages/Notifications/NotificationsPage.tsx, components/Notifications_Header.tsx, NotificationsList.tsx, NotificationsListBreakpoints.tsx, Notification_ListItem.tsx, MoreActionSheet.tsx, mocks.ts (section titles "Last 7 Days", "Last 30 Days", "Older" asserted in Notifications.test.tsx)
- Shared: none by `@origin` (the Notifications blocks live in the page folder); `ConnectPatterns.AvatarImage` has no `@origin` hit in components/containers
- Unsure: how much of the 41 structure diffs is the skeleton list that the capture kept (artefact C) against a real header change in `Notifications_Header` (3→2 blocks, drift lists it).

## LDM_MyEvents_V2
- Class: B
- Size: M (default 36 diffs: layout 12, structure 7, position 7, text 3, style 3, pixel 1, call 1; blocks EventCard_Guests and OverlappingImages)
- TST files changed since the capture: UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper (not a block of this screen's diff paths)
- DOM diff: default 145+/48-. `EventCard_Box`, `EventCard_Guests`, `EventCard_Info_V2`, `EventCard_V2`, `OverlappingImages` each 3→4 (one more event card); `past-event-cont` 3→4. Text: "4 Guests" → "13 Guests", "Allocation Pending" removed. loading/offline: 36+/36- (ids only).
- Parity diffs: default {layout 12, structure 7, position 7, text 3, style 3, pixel 1, call 1}: `EventCard_Guests` layout 8 / position 4 / text 3, `OverlappingImages` structure 6 / layout 4 / position 3 / style 3. Examples: structure `List_PastEvents > div.past-event-cont` missing in build; text "13 Guests" → "4 Guests"; layout guest label 101×24 → 92×24.
- Calls: calls.json changed 30+/19-; `DataActionGetEventLocalitiesForFilter` 2→1, `ActionGetAllApplicationEvents` 0→2. Parity calls: expected 11, actual 9.
- Data drift signs: one more past-event month group (3→4), a guest count 13 (was 4), status text changed. React test asserts 3 `.past-event-cont` (LDM_MyEvents_V2.test.tsx:73).
- Artefact signs: none.
- React code touched by the diff paths: app/src/pages/LDM_MyEvents_V2/components/EventCard_Guests.tsx, OverlappingImages.tsx, MyTimeline_V2.tsx, mocks.ts
- Shared: -
- Unsure: why `ActionGetAllApplicationEvents` is now called twice (new calls, no TST file of this screen changed; could be an account effect or the capture settle). Not checked.

## MessageList
- Class: B
- Size: S (12 diffs: 6 class + 6 style, one block, MyNotifications.MessageListBlock; 2 states)
- TST files changed since the capture: none
- DOM diff: default 7+/7- : the same lines `list-item` → `list-item background-blue-lightest` (6 rows now unread) and body `--footer-height: 42px` → `56px`; search 7+/7-, filter 1+/1-, offline 36+/36- (ids).
- Parity diffs: default {class 6, style 6, pixel ok}; search {class 6, style 6}. Examples: class `div.list-item` missing `.background-blue-lightest`; style background-color rgb(232, 242, 250) → rgb(255, 255, 255) (x6).
- Calls: calls.json changed 9+/9- (timestamps only). Parity calls ok (9 and 9).
- Data drift signs: unread state: capture has 6 unread rows; the React mock marks only 2 unread (app/src/pages/MessageList/mocks.ts:9, test MessageList.test.tsx:62 expects 2 `.background-blue-lightest`).
- Artefact signs: none.
- React code touched by the diff paths: app/src/pages/MessageList/mocks.ts, components/MessageListItem.tsx, MessageListBlock.tsx, MessageList.test.tsx
- Shared: -
- Unsure: none.

## Household_Relations
- Class: mixed (A+C)
- Size: S default (2 call diffs); offline 18 diffs (layout 8, structure 6, class 2, text 1, position 1)
- TST files changed since the capture: UBTConnect.Directory_Household.HouseholdRelations_Block, UBTConnectLibrary.ConnectCorePatterns.MemberRelation_ListItem
- DOM diff: default 244+/244- (ids only, block counts equal). loading 106+/313-, offline 70+/277-: `MemberRelation_ListItem` 2→0, `SubLayout_DirectoryDetailScreen_Section` 2→1, `SkeletonSection` 13→9; texts "Relations", "Loading", "Father", "Mother" gone from the skeleton state.
- Parity diffs: default {call 2}: "data action DataActionGet_SibllingsRelations not called" and "extra call UBTConnect/DataActionGet_ParentHouseholdDetails". offline {layout 8, structure 6, class 2, text 1, position 1}: `HouseholdRelations_Block` layout 390×376 → 390×556, `SkeletonSection` 390×172 → 390×352, structure `MemberRelation_ListItem` ×2 and `NonMember_ListItem` ×2 extra in build, `SubLayout_DirectoryDetailScreen_Section` extra in build.
- Calls: calls.json changed 22+/22-; `DataActionGet_ParentHouseholdDetails` 1→0, `DataActionGet_SibllingsRelations` 0→1 (the data action for the siblings relations was renamed or split). Parity calls: expected 12, actual 11.
- Data drift signs: none.
- Artefact signs: the offline capture shows a smaller skeleton (one section, no member rows); the build shows member rows.
- React code touched by the diff paths: app/src/pages/Household_Relations/mocks.ts:103 (handler `HouseholdRelations_Block/DataActionGet_ParentHouseholdDetails`), inputs.ts:3, Household_Relations.test.tsx:25 (SIBLINGS constant), components/HouseholdRelationsView.tsx, MemberRelation_ListItem.tsx
- Shared: -
- Unsure: whether the offline-state difference is a TST code change (the block and MemberRelation_ListItem are both in the drift list) or the skeleton phase of the capture.

## Menu
- Class: mixed (B+C, A possible)
- Size: S (13 diffs: layout 6, class 2, pseudo 2, text 2, structure 1; one block, App_Menu.Menu_List)
- TST files changed since the capture: UBTConnect.App_Menu.Menu, UBTConnect_Utils.CacheControl.CacheControl_UserInfo
- DOM diff: default 48+/1-: the capture now has a menu row "Request Photo Update" (icon `connect-icon-image_gallery`, wrapped in a `SkeletonSection`, 41 px, after Terms & Policies or before) that the old capture did not have; one masked text changed length ('•••••• ••••••••' → '•••••• ••••'). loading identical; offline 36+/36- (ids).
- Parity diffs: default {layout 6, class 2, pseudo 2, text 2, structure 1}. Examples: layout `Menu_List` 390×250 → 390×209 (one row less in build); structure `SkeletonSection` missing in build; text "Request Photo Update" → "Terms & Policies"; text "Terms & Policies" → "Log out"; class `connect-icon-image_gallery` missing / extra `connect-icon-book_open` (rows shifted by one).
- Calls: calls.json changed 8+/8- (timestamps only). Parity calls ok (8 and 8).
- Data drift signs: the capture account is a householder (or a spouse of one), so the row stays; React removes the row when the user is not a householder (menuState.ts:96, menuState.test.ts:19 already knows the row).
- Artefact signs: masked-text width (CAPTURE-MASKED-TEXT-VERSION-MENU, CAPTURE-MASKED-AVATAR-MENU-SHIFT in the sweep exemption list), skeleton rows.
- React code touched by the diff paths: app/src/pages/Menu/hooks/menuState.ts, MenuPage.tsx, mocks.ts, components/MenuUserHeader.tsx
- Shared: app/src/components/menu/MenuList/MenuList.tsx (`@origin UBTConnect.App_Menu.Menu_List`)
- Unsure: whether the Menu.mvc.js / CacheControl_UserInfo change has other effects; the row difference may only come from the account used for the capture (see migration/sync/capture-2026-11-07.md for the group of this route).

## MessageDetail
- Class: C
- Size: L (default 4 structure, 3 call, 1 pixel = 12.2% pixels; whole screen different)
- TST files changed since the capture: none
- DOM diff: default 2673+/245-: the new `default.html` is a different screen. Old root `MyNotifications.ScreenBlock_MessageDetail` in `Layout.Layout`; new root `Layouts.Layout_MainPages_Upgrade` with the Notifications list (`MyNotifications.MessageImage` ×12, `App_Notifications.NotificationsList`, `Notifications_Header`, `MoreActionSheet`); capture file env: path `/UBTConnect/Notifications`, title "Notifications", while meta.route is `/UBTConnect/MessageDetail?MessageInstanceId=5982748`. offline 36+/36-, loading 1+/1-.
- Parity diffs: default {structure 4, pixel 1, call 3}: structure `Layout_MainPages_Upgrade` missing in build, `Notifications_SortSheet` and `Notifications_MoreActionSheet` missing in build, `ScreenBlock_MessageDetail` extra in build; pixel 12.24%. loading and offline have no diffs.
- Calls: calls.json changed 55+/22-: new `DataActionFetchNotifications`, `ServiceAPIGet_UI_UpdateItems_UnreadCount_All`, `DataActionGetDateRanges` (Notifications screen actions) and `ActionGetSignedImagesInBulk` moved. Parity calls: expected 11, actual 9.
- Data drift signs: the message instance (MessageInstanceId=5982748) probably no longer opens, so TST redirected to the Notifications list.
- Artefact signs: capture of the wrong screen (a redirect after the route URL).
- React code touched by the diff paths: app/src/pages/MessageDetail/MessageDetailPage.tsx, inputs.ts, actions.ts (not touched by the fix if the capture is repeated)
- Shared: app/src/containers/MessageInstance (messageInstanceAfterFetch.ts, messageDetailState.ts; `@origin …ScreenBlock_MessageDetail`)
- Unsure: whether TST redirects a missing or foreign message to /Notifications as a real behavior (then A in the route logic) or the session/account of the capture group could not read that message. The capture URL is in migration/screens/MessageDetail/capture/capture-MessageDetail-default.json (meta.route vs env.path).

## CountryDetails
- Class: A
- Size: S (2 text diffs per state, one block ConnectPatterns.Button inside the filter sheet)
- TST files changed since the capture: UBTConnect.App_CommonBlocks_Filter.FilterSheet, UBTConnect_Utils.CacheControl.CacheControl_UserInfo
- DOM diff: default 275+/275- (ids); the only text change: "Clear filters" → "Clear", "Apply filters" → "Apply" (default, loading and offline). No block count changes.
- Parity diffs: default {text 2}, offline {text 2}: `button.btn.flex-grow.ubt-button > div#b28-b16-Content` "Clear" → "Clear filters"; `div#b28-b17-Content` "Apply" → "Apply filters" (expected is the new capture, actual is React).
- Calls: calls.json changed 16+/16- (timestamps only). Parity calls ok (10 and 10).
- Data drift signs: none.
- Artefact signs: none.
- React code touched by the diff paths: app/src/components/filter/FilterSheet/FilterSheet.tsx (the "Clear filters" / "Apply filters" strings; the same strings also appear in other files, grep not narrowed), app/src/pages/CountryDetails/CountryDetailsPage.tsx
- Shared: app/src/components/filter/FilterSheet/FilterSheet.tsx, app/src/containers/FilterSheet/FilterSheetContainer.tsx (every route with the filter sheet: Updates_SingleList, Bookmarks, CountryList, BrowseCountries and others)
- Unsure: whether the label change is a default parameter or a per-screen input of FilterSheet (the sweep only shows it on CountryDetails and in the loading/offline captures of Updates_SingleList); the grep for the string location did not complete (shell glob error), so the exact file is not confirmed.

## ConnectShare
- Class: C
- Size: S (offline only: structure 1, pixel 1 at 11.1%)
- TST files changed since the capture: none
- DOM diff: default and loading no change; offline 1+/215-: the new `offline.html` is an empty page (`<body class="phone portrait"><div id="reactContainer"></div></body>`); the old one had the full screen with the "Service Interruption" feedback message.
- Parity diffs: offline {structure 1, pixel 1}: `div#reactContainer > div#transitionContainer` extra in build; pixel 11.15% (worst tile 100%). default and loading: no diffs. The previous offline parity report had counts `{}` (no diffs).
- Calls: calls.json changed 8+/8- (timestamps only); no call diffs.
- Data drift signs: none.
- Artefact signs: blank offline capture (the page did not render in the offline run), the old offline run showed the content.
- React code touched by the diff paths: none (app/src/pages/ConnectShare/ConnectSharePage.tsx unchanged by the diff)
- Shared: -
- Unsure: none (a re-capture of the offline state would settle it).

## Summary
- Updates_SingleList | A | L | yes (filter/FilterSheet_Icon_Label, Horizontal_Filter_TagList, FilterSheet)
- Locality_Details | A+B+C | L | yes (ui/HorizontalTagList)
- Notifications | A+B | L | no
- LDM_MyEvents_V2 | B | M | no
- MessageList | B | S | no
- Household_Relations | A+C | S (default) / M (offline) | no
- Menu | B+C (A possible) | S | yes (menu/MenuList)
- MessageDetail | C | L | yes (containers/MessageInstance)
- CountryDetails | A | S | yes (filter/FilterSheet)
- ConnectShare | C | S | no
