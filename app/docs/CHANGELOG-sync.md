# Changelog of the TST syncs

One entry per route: the route, the date and the change (3 lines or less).

## Menu, 2026-11-07

TST changed `Menu.mvc.js` and `CacheControl_UserInfo.mvc.js`. The fresh capture shows "Request Photo Update" again (householder account).
The default scenario of the mocks is `householder` again; `member` is review-only. No markup change.

## ContactByEmailMember, 2026-11-07

TST changed `ContactByEmailMember.mvc.js`: Layout_DetailPage now has In_AlignTitleLeft False and In_IsPrimaryColor True.
The page now shows the primary header colour and a centred title. No call change.

## BrowseCountries, 2026-11-07

TST changed `AvatarImage.mvc.js`. The fresh capture shows statistic counts one lower (Saint Vincent 73/36, Trinidad 73/37, United States 28).
The page mock patches these counts on the recorded fixture. The member API uses DataActionGetCommunityStatistics; this page does not call it.

## Profile, 2026-11-07

TST changed `Profile.mvc.js` and six shared blocks. The fresh capture shows the Email row as a two-column label row with a disabled input.
React renders the new markup; the locality lists are read with `osList`. No call change.

## Assemble_BrowseByCountry, 2026-11-07

No TST file changed. The fresh capture shows 73 members (Saint Vincent, Trinidad) and 28 localities (United States).
The page mocks now override these three counts. The shared Assemble mock data is unchanged. No call change.

## AssembleEvents, 2026-11-07

No TST file changed. The fresh capture shows country counts one lower: 73 members (Saint Vincent, Trinidad) and 28 localities (United States).
The page mock answers these counts; the shared fictional world is not changed. No markup or call change.

## Household_Relations, 2026-11-07

TST changed `HouseholdRelations_Block` and `MemberRelation_ListItem`. The sibling call is now DataActionGet_SibllingsRelations, and it runs only when ParentHouseholdId is not "0".
The view adds the away-parents row, the NoDisplaySiblings list and the parent relation text from Description; an empty Relation line is hidden.

## OrbitAdminLanding, 2026-11-07

TST changed `ScreenBlock_AdminLanding.mvc.js`: new header filters ("Upcoming Events", "Sort By"), two popup roots, and a new load flow.
The call of Get_AdminEventsList sends new inputs and returns YearFilter; the list is filtered after the fetch. Open popups stay `<NotCaptured>`.

## NotificationDetails, 2026-11-07

TST changed `NotificationDetails.mvc.js`: new title block, separator and border; the card buttons now run a submit flow with two audits.
The call of ActionStoreAdaptiveCardResponses is new, and the page does not call DataActionFetchMessageInstance at load. ActionButtonGroup stays `<NotCaptured>`.

## HomeFeed, 2026-11-07

TST changed `HomeFeed.mvc.js`, `TagContent.mvc.js` and `ShareSheet.mvc.js`. The "Community Population" section is now the block Directory_CommunityNumbers ("COMMUNITY BY THE NUMBERS").
The page calls `HomeFeed/DataActionGetCommunityStatistics` in OnReady; `DataActionFetchCount` is gone. Four `SVG_Community*` icons are new in the shared IconSvg.

## SupperMeeting_Carousel, 2026-11-07

TST changed `EntitiesCarousel_Element.mvc.js`: the slide ids moved (`b2-b2-b1` to `b2-b3-b1`). No code change.
The master renumbered two exemption paths (masked image, masked CarouselTag text). Parity is clean.

## CountryDetails, 2026-11-07

TST changed `FilterSheet.mvc.js` and `CacheControl_UserInfo.mvc.js`. The fresh capture shows the filter sheet buttons "Clear" and "Apply" (before: "Clear filters", "Apply filters").
The shared FilterSheet now uses these labels for all filter routes. No call change.

## OneSchoolGlobalDetails, 2026-11-07

TST changed `OneSchoolGlobalDetails_Block` (new empty `Placeholder_CarouselTag` in the image tag). The plan route now uses school 132.
School 1430 answers empty data on TST. EntityDetailsActions logic changes stay with its owner; OneSchoolGlobalCarousel needs a re-capture.

## Search, 2026-11-07

TST changed `FilterSheet`, `FilterSheet_Icon_Label`, `ScreenBlock_Search` and `HorizontalTagList`. The fresh capture differs only in the filter button labels.
The shared FilterSheet label fix of the CountryDetails item removes both text diffs. No code change. Parity is clean.

## Locality_Details, 2026-11-07

TST changed `Locality_Details.mvc.js` and `HorizontalTagList.mvc.js`: OnInitialize now runs SetTags, so Households is selected at start.
React sends one GetMembers per card (23, before 46), and the OneSchool Global mock card has the id 132.
The masked-image exemptions use the path `l1-\d+_` (user accepts).

## CountryList, 2026-11-07

TST changed `CountryList.mvc.js`: Directory_CommunityNumbers replaces FeedBlock_CommunityPopulation (DataActionFetchCount and the click to Updates_SingleList are gone).
The page shows GetCommunityStatistics('CountryList'); the mock patches the five counts of the fresh capture on the recorded fixture.

## OrbitLanding, 2026-11-07

No TST file changed. The re-capture with account global#2 shows one event card; global#1 has no event in the 8-day window.
No code change. The user must accept the capture of global#2 as the reference.

## HouseholdCarousel, 2026-11-07

TST added a widget to `EntitiesCarousel_Element`: the household slide block moved from `$b4` to `$b5`.
No code change. The master renumbered two exemption paths (`-b2-b4-` to `-b2-b5-`); parity is 0 in all states.

## Notes, 2026-11-07

TST removed `padding-x-base` from the filter-tag container; FilterSheet labels are "Clear" and "Apply".
React: `NotesPage.tsx` drops `HorizontalSizeId`; the test clicks "Apply". Parity is 0 in all states.

## Bookmarks, 2026-11-07

TST changed 9 files (Bookmarks page and cards, FilterSheet, TagList, ItemCard_WithNotes). The re-capture (account global#5) shows the cards Household, Household, Supper Meeting and a new pill order.
React: only the mock `captured` of `Bookmarks/mocks.ts` changed (cards and pill order). Parity is 0 in all states.

## LegacyShareObject, 2026-11-07

No TST change. The fresh capture had an empty share list (data of the capture account), so the analysis of commit 2fe9efaf was restored (user, Q4-old b).
No code change; parity is clean in all states.

## PINUnlock, 2026-11-07

No TST change. The fresh capture lacked the Terms & Conditions link (account data, `Block_PINUnlock_ContentWrapper.mvc.js:584`).
User decision: the analysis of 2026-10-14 is restored (commit 2fe9efaf). No code change.

## Updates_SingleList, 2026-11-07

TST moved the filter to a "Filter" label in the tag row (Horizontal_Filter_TagList). The header filter icons and the list-header badge are gone.
The mock has 88 rows from the fresh capture. The scroll anchor keys go through the shell storage wrapper.

## MessageDetail, 2026-11-07

No TST file changed. The capture plan uses message id 5981096 (the old id redirected to Notifications); the message text is "test".
The page mock has a fictional seed for this id. No markup or call change.

## LDM_EventDetail_V2, 2026-11-07

No TST file changed. The captured event 88271 is now a published guest meal (host photo, address, four guest households).
The page mocks answer it with fictional data of the captured lengths; the markup was already correct.
Three exemptions: guest photo style, its pixel side, and the masked host name width.

## MessageList, 2026-11-07

No TST file changed. The fresh capture shows 8 unread rows (rows 1-3 and 15-19); the mock had 2 and now has 8.
No markup or call change. Two inline styles of the urgent-message branch are recorded as consistency exclusions.

## Notifications, 2026-11-07

TST changed the header, list and AvatarImage blocks. The fresh capture shows 22 rows, skeleton rows and sender photos fetched in bulk.
React maps `createdByUserId`, adds MessageImage and uses the OutSystems elapsed-time rules. Two masked-image exemptions apply (user).

## LDM_MyEvents_V2, 2026-11-07

TST changed `ContactByMessage_Wrapper.mvc.js`; the fresh capture shows one more past-event group (19 guest photos) and two `ActionGetAllApplicationEvents` calls from the shell image-error chain.
The page mocks give four month groups with the captured guest counts; two exemptions apply (user). Two literal dates use `OS_NULL_DATE`.

## AssembleDetail, 2026-11-07

The fresh capture shows an in-person event (contact and photo calls now run). The page mock answers the plan's EventId with it.
The contact block nests its three popup blocks as captured. The offline title exemption is extended (user, Q9 a).

## Foundation: stylesheets of the fresh captures, 2026-11-07

The user's review of HomeFeed found the COMMUNITY BY THE NUMBERS block without its CSS. Cause: the re-capture brought stylesheets that the app did not have, and the route CSS sets were not regenerated. The parity reference uses the app's own stylesheets, so parity did not show it. Five live stylesheets were fetched read-only (two new, three refreshed) and `css_sets.py` re-run (8 route sets gain a stylesheet). The `SanitizedHtml` span carries its captured id, so the new NotificationDetails rule applies. `css_sets.py --check` is now in the sync preflight and the tester gate.

## Close of the wave, 2026-11-07

- The user confirmed the 29 routes ("1. confirm ok"). Each route was re-stamped (`restamp.py`, parity of every state) and committed.
- `FilterSheetIcon` deleted: dead since Updates_SingleList follows the capture with `FilterSheet_Icon_Label`. No captured DOM renders the block.
- knip: 9 unused exports and 7 stale rows removed. The Notifications helper is renamed for the flow-fetch check.
- Two api tests follow the captured read states (MessageList 8 unread, Updates 88 unread). Eight files formatted.
- Exemptions 146 → 100 (Q9 a, Q10 b; `migration/sync/exemptions-review-2026-11-07.md`).
- Full sweep of 68 routes: clean, except the known OneSchoolGlobalCarousel structure difference (old capture). CI green.
