# Triage notes, reader 2 (2026-11-07)

Method: `git diff 2fe9efaf` of `analysis/dom/default.html` (also with element ids stripped, to remove renumbering noise),
call multiset (action, phase) old vs new from `analysis/calls.json`, parity reports in `migration/screens/<R>/parity/`,
`drift-2026-11-07.json`. The parity reports of 2fe9efaf have empty `counts` for all 10 routes: no class D in this group.
Calls: apart from the lists below, calls.json differences are only `ts` timing values.

## SupperMeeting_Carousel
- Class: C (A not excluded)
- Size: L (456 diffs in default; 3+ blocks)
- TST files changed since the capture: `ConnectPatterns.TagContent`, `CW_Share.ShareSheet`, `Directory_Caroussel.EntitiesCarousel_Element`, `Directory_CommonBlocks.Directory_EntityDetailsActions`, `CW_CTA_PopUps.ContactByMessage_Wrapper`
- DOM diff: 6 files, +3109/-3092 (mostly id renumbering); with ids stripped 53 lines. Several `<div class="">` became `<div class="ubt-skeleton-section">` (still-loading wrappers). Image container is now `hidden` with `img src="/UBTConnect/SupperMeeting_Carousel"` and a new "Sorry, no photo available" placeholder (icon `connect-icon-house_fill`). Masked text lines are replaced by "Subdivision Name Example" and "Subdivision Formatted Address Example"; counts are now "Brethren: 10", "10 Brothers & 10 Sisters", "Households: 10" (old: 29/15+14/7 and 19/10+9/5).
- Parity diffs: default 456 = layout 275, style 143, pseudo 16, text 10, class 8, position 2, structure 1, pixel 1. Layout: BasePatterns.CustomContainer 110, ConnectPatterns.SkeletonSection 96, CW_Image.UBT_LazyImage 24, ConnectPatterns.LazyImage 24. Style: CustomContainer 74, ConnectPatterns.Icon 26. Examples: class `...Placeholder_LoadingSection.ubt-skeleton-section` (skeleton class present only in capture); structure `...b4-b2-$b3[BasePatterns.CustomContainer]` (hidden Content div). offline and loading: no diffs.
- Calls: 19 -> 19, same actions (only order and ts differ). Parity: expected 19, actual 31 (the React count includes more calls on load).
- Data drift signs: "Example" placeholder strings and the 10/10/10 counts look like default or loading values, not captured data.
- Artefact signs: skeleton classes in the final DOM, image hidden with `no photo` fallback, "... Example" texts: the capture was taken before the data aggregate filled.
- React code touched by the diff paths: `app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx`, `app/src/pages/SupperMeeting_Carousel/hooks`
- Shared: `app/src/components/ui/CustomContainer/CustomContainer.tsx`, `app/src/components/ui/Skeleton/Skeleton.tsx`, `app/src/components/ui/TagContent/TagContent.tsx`
- Unsure: whether the TST code change (EntitiesCarousel_Element, TagContent) also changed the markup; the DOM is dominated by the partial-load state, so a re-capture with a longer settle is needed to tell. The 31 vs 19 call count is not explained here.

## Profile
- Class: A
- Size: L (68 default + 21 offline; blocks CustomContainer, Columns_Two, SkeletonSection, CustomText)
- TST files changed since the capture: `App_Profile.Profile`, `Directory_CommonBlocks.Directory_EntityDetailsActions`, `Directory_Household.HouseholdDetails_Block`, `ConnectPatterns.HorizontalTagList`, `CacheControl.CacheControl_UserInfo`, `CW_Share.ShareSheet`, `CW_CTA_PopUps.ContactByMessage_Wrapper`
- DOM diff: 6 files, +912/-906; ids stripped 264 lines. The "Email" label is now a two-column row (Left: label "Email", Right: switch). The email input is now `disabled`. New switches (`input.switch`) with notes "Display mobile number on your profile." and "Display work number on your profile.". Label wrapper changed from `text-neutral-10 ... padding-bottom-s` to `ubt-custom-container padding-bottom-xs`. One masked text is shorter ("•••••• ••••" vs "•••••• ••••••••").
- Parity diffs: default 68 = layout 42, position 16, structure 9, style 1. By block: CustomContainer layout 14 / position 5, Columns_Two layout 14 / position 5, SkeletonSection layout 5, CustomText layout 4. Structure examples: `div#Email_Container[BasePatterns.CustomContainer]` missing in build, `div#Email[CustomText]`, `div#MobileNumber_Note[CustomText]`, `div#WorkNumber_Note[CustomText]`, `div#b44-Right.ubt-columns--right > span`: all "extra/missing". Example layout: `form#DetailsForm` 390x1078 -> 390x996. offline: 21 = layout 12, position 7, structure 2 (the same Email rows).
- Calls: changed. New capture has 28 calls (old 24): added `DataActionFetchContactDetails` x3 and `DataActionGetHouseHold_Gallery` x1 (load); the old capture had `ActionGetSignedImagesInBulk` and `DataActionGetHousehold`, the new one has `DataActionGetHousehold_Coordinates` (names in the diff of calls.json). Parity: expected 28, actual 23.
- Data drift signs: none beyond one masked-text width.
- Artefact signs: none.
- React code touched by the diff paths: `app/src/pages/Profile/ProfilePage.tsx`, `app/src/pages/Profile/components`, `app/src/pages/Profile/actions.ts`, `app/src/pages/Profile/mocks.ts`
- Shared: `app/src/components/ui/CustomContainer/CustomContainer.tsx`, `app/src/components/ui/ColumnsTwo/ColumnsTwo.tsx`, `app/src/components/ui/Skeleton/Skeleton.tsx`, `app/src/components/ui/HorizontalTagList/HorizontalTagList.tsx`
- Unsure: which of the household/gallery calls belong to Profile itself and which to the shared household block; the reason for the disabled email input (user data or code).

## OneSchoolGlobalDetails
- Class: mixed (A+B)
- Size: L (51 default; blocks CustomContainer, CustomText, SubLayout_DirectoryDetailScreen, ImageCard__Content)
- TST files changed since the capture: `OneSchoolGlobalDetails`, `OneSchoolGlobalDetails_Block`, `Directory_EntityDetailsActions`, `CW_Share.ShareSheet`, `CW_CTA_PopUps.ContactByMessage_Wrapper`
- DOM diff: 6 files, +68/-171; ids stripped 149 lines, mostly removals. Image container is now `hidden` (`img src="/UBTConnect/OneSchoolGlobalDetails"`) with a "Sorry, no photo available" fallback (`connect-icon-school_fill`). Removed: masked title lines, the location row (`connect-icon-location_on_fill`), the link row (`connect-icon-open_new`, underlined masked text), the Call icon button (`connect-icon-call`, text "Call") and an avatar icon button. Net: the detail has fewer content rows than in the old capture.
- Parity diffs: default 51 = layout 24, structure 6, text 5, pseudo 5, position 5, class 3, style 2, pixel 1. By block: CustomContainer layout 11 / structure 3, CustomText text 4 / layout 3, SubLayout_DirectoryDetailScreen layout 3, ConnectPatterns.ImageCard__Content layout 3. Examples: structure `b3-b4-b2-$b3[CustomContainer]`, structure `div#b3-Placeholder_CarouselTag` (also in offline, 1 diff), class `b3-b4-b2-b2-Content...hidden`. offline: 1 structure.
- Calls: 12 -> 12 by (action, phase); `ActionSync_Info_GetMain` appears removed in one diff hunk (position change only). Parity: expected 12, actual 13.
- Data drift signs: no photo, no location, no link and no phone for the entity in the new capture (an entity with less data, or another entity).
- Artefact signs: possible: the "no photo" fallback with an empty `src` also occurs in SupperMeeting_Carousel.
- React code touched by the diff paths: `app/src/pages/OneSchoolGlobalDetails/OneSchoolGlobalDetailsPage.tsx`, `app/src/pages/OneSchoolGlobalDetails/inputs.ts`
- Shared: `app/src/components/ui/CustomContainer/CustomContainer.tsx` (the Directory_EntityDetailsActions block is shared with Profile and the carousels)
- Unsure: whether the removed rows are a TST code change (`OneSchoolGlobalDetails_Block` is 4 KB smaller) or data (the entity has no phone or link). The `Placeholder_CarouselTag` structure diff is not explained.

## NotificationDetails
- Class: A
- Size: L by block count (14 default, 18 offline; blocks CustomContainer, Layout_MainPages_Upgrade, CustomText, SectionSeparator)
- TST files changed since the capture: `App_Notifications.NotificationDetails`
- DOM diff: 6 files, +355/-365; ids stripped 96 lines. The header title "Meal Allocation" is now wrapped in `BasePatterns.CustomText` (id Notifications, class `font-semi-bold`, with an inline icon block). The `Notification_Title` container is now a plain div with `padding-left-m padding-right-m` around a new `Notification_Title_Block` container; the card has `border-bottom-neutral`; the icon button has `margin-right-s`. The text "Your Host on Wednesday" moved inside a new wrapper.
- Parity diffs: default 14 = structure 8, style 3, position 1, class 1, pixel 1; offline 18 = the same plus layout 2, position 2, pseudo 1. Examples: structure `div#Notifications[BasePatterns.CustomText]` missing in build, structure `div#Notification_Title.padding-left-m.padding-right-m`, structure `div#$b6[App_Common_Blocks.SectionSeparator]`, structure `div#Notification_Date[CustomContainer]`.
- Calls: not changed (8 -> 8).
- Data drift signs: none.
- Artefact signs: none.
- React code touched by the diff paths: `app/src/pages/NotificationDetails/NotificationDetailsPage.tsx`
- Shared: `app/src/components/layout/MainPagesUpgradeLayout/MainPagesUpgradeLayout.tsx`, `app/src/components/ui/CustomContainer/CustomContainer.tsx`
- Unsure: none.

## HomeFeed
- Class: A
- Size: M (12 default, 11 offline; one region, the community numbers section; block names CustomContainer, Section_FeedWrapper, FeedBlock_Updates)
- TST files changed since the capture: `Home.HomeFeed`, `ConnectPatterns.TagContent`, `CW_Share.ShareSheet`
- DOM diff: 6 files, +701/-389; ids stripped 178 lines. The old "Community Population" card (gradient radial background, white text) is replaced by a "COMMUNITY BY THE NUMBERS" section with SVG icons (`SVG_CommunityMembers`, `SVG_CommunityHouseholds`), a big number, a green up-arrow with a delta, "Today", and a "Households" row. The wrapper class changed from `padding-x-base padding-y-s` to `margin-x-base margin-top-s margin-bottom-base`.
- Parity diffs: default 12 = structure 5, position 2, class 1, style 1, layout 1, call 1, pixel 1. Examples: structure `div#$b6[CustomContainer]` missing in build, structure `div#Section_Updates[Home.Section_FeedWrapper]` extra in build, class `b8-b1-b1-Content` missing `.background-neutral-0 .margin-top-s` extra `.background-transparent`, structure `b8-$b2[CustomContainer]` / `$b9[Home.FeedBlock_Updates]`. offline: same 11 diffs.
- Calls: changed. `DataActionFetchCount` removed (12 -> 11). Parity: expected 11, actual 13 (React still makes 2 more).
- Data drift signs: masked numbers, a "••" delta.
- Artefact signs: none.
- React code touched by the diff paths: `app/src/pages/HomeFeed/HomeFeedPage.tsx`, `app/src/pages/HomeFeed/components`, `app/src/pages/HomeFeed/mocks.ts`
- Shared: `app/src/components/ui/CustomContainer/CustomContainer.tsx`, `app/src/components/ui/TagContent/TagContent.tsx`
- Unsure: the `Section_Updates` / `Section_FeedWrapper` extra/missing pair may be a wrapper move rather than a content change; DOM was not compared further.

## Notes
- Class: A
- Size: S (6 default, 12 offline; one block)
- TST files changed since the capture: `App_CommonBlocks_Filter.FilterSheet`, `App_CommonBlocks_Filter.FilterSheet_Icon_Label`, `ConnectPatterns.Horizontal_Filter_TagList`, `Notes.NoteCard_List`, `Notes.Notes`
- DOM diff: 6 files, +1579/-1579 (id renumbering); with ids stripped 6 lines: the filter-tag container loses `padding-x-base`; filter sheet button texts "Clear filters" -> "Clear" and "Apply filters" -> "Apply".
- Parity diffs: default 6 = text 2, class 1, style 1, position 1, pixel 1; offline 12 adds layout 6 (SkeletonSection 3, CustomContainer 2). Examples: class `div#b8-Content` extra `.padding-x-base`; style padding-left/right 0px -> 16px (capture 0, React 16); text `b14-b1-b16-Content` and `b17-Content` (Clear/Apply); position Horizontal_Filter_TagList offset 0,4 -> 16,4.
- Calls: not changed (10 -> 10).
- Data drift signs: none.
- Artefact signs: none.
- React code touched by the diff paths: `app/src/pages/Notes/NotesPage.tsx`, `app/src/pages/Notes/components`
- Shared: `app/src/components/filter/FilterSheet/FilterSheet.tsx`, `app/src/components/filter/HorizontalFilterTagList/Horizontal_Filter_TagList.tsx`, `app/src/components/filter/FilterSheetIconLabel/FilterSheet_Icon_Label.tsx`
- Unsure: none.

## OrbitAdminLanding
- Class: A
- Size: S (6 default, 5 offline; one block, `Layout.BaseLayout_UpdatedOSUI` header and content)
- TST files changed since the capture: `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding`
- DOM diff: 6 files, +189/-117. New in the header: `div.orbit-landing-filters-cont` with two filter buttons ("Upcoming Events" with caret-down, left; "Sort By" with caret-down, right, classes `bold color-orbit-primary-7`) and two popup placeholders `RootPlaceholder_Filters` / `RootPlaceholder_Sort` (`orbit-landing-filters__popup-backdrop`). Header size variable 32.875px -> 85.75px.
- Parity diffs: default 6 = structure 3, layout 2, pixel 1; offline 5. Examples: structure `div#b1-b1-HeaderContent > div.orbit-landing-filters-cont` missing in build; structure `RootPlaceholder_Filters` / `RootPlaceholder_Sort` missing; layout `ContentWrapper` 390x637 -> 390x690.
- Calls: not changed (8 -> 8).
- Data drift signs: none.
- Artefact signs: none.
- React code touched by the diff paths: `app/src/pages/OrbitAdminLanding/OrbitAdminLandingPage.tsx`, `app/src/pages/OrbitAdminLanding/components`
- Shared: `app/src/components/layout/BaseLayout/BaseLayout.tsx` (only as the layout host; the new elements belong to the screen block)
- Unsure: behaviour of the two filter popups is not in the captured DOM (closed state only).

## BrowseCountries
- Class: B
- Size: S (5 diffs, one block)
- TST files changed since the capture: `ConnectPatterns.AvatarImage` (the DOM diff shows no markup change from it)
- DOM diff: 4 files, +403/-403; the only change after id stripping is 10 numbers lower by 1 (74->73, 37->36, 38->37, 29->28).
- Parity diffs: default 5 = text 5, all `BasePatterns.CustomText > div.font-semi-bold.font-size-base > span`: "73" (capture) vs "74" (React), "36" vs "37", and so on. offline and loading: none.
- Calls: not changed (8 -> 8).
- Data drift signs: the displayed counts are 1 lower in the capture, at several rows (all inspected rows).
- Artefact signs: none.
- React code touched by the diff paths: `app/src/pages/BrowseCountries/BrowseCountriesPage.tsx`, `app/src/pages/BrowseCountries/mocks.ts`
- Shared: `app/src/components/ui/AvatarImage/AvatarImage.tsx` (not touched by the diff paths)
- Unsure: why all counts fell by 1 (data, or a count that now excludes the viewer). Capture row says "DOM changed: -" for the raw file.

## Search
- Class: A
- Size: S (2 default, 2 offline; one block)
- TST files changed since the capture: `App_CommonBlocks_Filter.FilterSheet`, `App_CommonBlocks_Filter.FilterSheet_Icon_Label`, `ConnectPatterns.HorizontalTagList`, `Directory_Search.ScreenBlock_Search`
- DOM diff: 6 files, +466/-466 (id renumbering and the body header variables); with ids stripped 4 lines: filter sheet buttons "Clear filters" -> "Clear", "Apply filters" -> "Apply".
- Parity diffs: default 2 and offline 2, both text on `ConnectPatterns.Button` (`b1-b42-b16-Content`, `b17-Content`).
- Calls: not changed (10 -> 10).
- Data drift signs: none.
- Artefact signs: none.
- React code touched by the diff paths: `app/src/pages/Search/SearchPage.tsx`, `app/src/pages/Search/components`
- Shared: `app/src/components/filter/FilterSheet/FilterSheet.tsx`, `app/src/components/filter/FilterSheetIconLabel/FilterSheet_Icon_Label.tsx`, `app/src/components/ui/HorizontalTagList/HorizontalTagList.tsx` (same fix as Notes)
- Unsure: none.

## PINUnlock
- Class: B
- Size: S (2 diffs, one block)
- TST files changed since the capture: none (no entry for this route in the drift json)
- DOM diff: 2 files, +1/-14: the "Terms & Conditions" link (underlined `CustomText` with an inline icon) in the left column of the footer row is gone.
- Parity diffs: default 2 = layout 1, structure 1 (`BasePatterns.Columns_Two`): `div#b1-b4-b8-Left.ubt-columns--left` height 21 (React) vs 0 (capture), and the child `div` "extra in build". offline and loading: none.
- Calls: not changed (8 -> 8).
- Data drift signs: the link renders only if the cached policy's T&C URL is not empty (`migration/sources/pretty/UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc.js` line 584: `policy_UrlAttr !== ""`); in the new capture the policy URL was empty or not cached. The old capture had a URL.
- Artefact signs: possible: the cached-policy client variable depends on the earlier visit order of the capture account.
- React code touched by the diff paths: `app/src/pages/PINUnlock/PINUnlockPage.tsx`, `app/src/platform/feedback/dialogs/BlockPinUnlock.tsx`
- Shared: `app/src/platform/feedback/dialogs/BlockPinUnlock.tsx` (also used by LockHost)
- Unsure: whether React must render the link conditionally on the same policy URL (not checked in React code).

## Summary
SupperMeeting_Carousel | C (A not excluded) | L | yes (CustomContainer, Skeleton, TagContent)
Profile | A | L | yes (CustomContainer, ColumnsTwo, Skeleton, HorizontalTagList)
OneSchoolGlobalDetails | mixed (A+B) | L | yes (CustomContainer)
NotificationDetails | A | L (4 blocks, 14 diffs) | yes (MainPagesUpgradeLayout, CustomContainer)
HomeFeed | A | M | yes (CustomContainer, TagContent)
Notes | A | S | yes (FilterSheet, FilterSheet_Icon_Label, Horizontal_Filter_TagList)
OrbitAdminLanding | A | S | no (BaseLayout host only)
BrowseCountries | B | S | no
Search | A | S | yes (FilterSheet, FilterSheet_Icon_Label, HorizontalTagList)
PINUnlock | B | S | yes (BlockPinUnlock)
