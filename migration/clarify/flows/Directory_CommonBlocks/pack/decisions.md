# Recorded decisions and facts that name the elements of UI flow Directory_CommonBlocks

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## change requests

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

## known original bugs

- `app/docs/known-original-bugs.md:12` (Directory_EntityDetailsActions): | B4  | `UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions`, Handle_Bookmark with C2NewBookmarks off | Always takes the C2 path (`If True`): AddBookmark2 is sent with an empty category (Local_BookmarkTypeId_C2 is never set) and the menu label never changes                             

## knowledge

- `migration/knowledge/shell-facts.md:75` (Directory_EntityDetailsActions): - Screen level: data-action handlers raise `BubbleCommunicationException` / `BubbleGenericException` (a user exception, which falls to AllExceptions) and re-raise NotRegistered (survey:…CountryList.mvc.js:1376-1423). `Directory_EntityDetailsActions` uses the `ScreenController_Raise*` helpers (survey

## flags

- `migration/flags.md:141` (Directory_EntityDetailsActions): - `action:getHasExtendedShare`: `Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc.js`, `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js`, `Connect2_LegacyShared.Share_UI.ShareObjectDetail.mvc.js`, `Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc.js`
- `migration/flags.md:144` (Directory_EntityDetailsActions): - `action:getHasNewBookmarks`: `UBTConnect.App_Common.BottomBarMenu.mvc.js`, `UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js`, `UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc.js`
- `migration/flags.md:183` (Directory_EntityDetailsActions): - `action:toggleBookmarkItem`: `Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc.js`, `UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js`, `UBTConnect.Directory_Locality.Locality_LocalityContacts.mvc.js`
- `migration/flags.md:184` (Directory_EntityDetailsActions): - `action:toggleBookmarkItem_C2`: `UBTConnect.App_Common_Blocks.ItemCardActions.mvc.js`, `UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js`

## parity exemptions

- `migration/parity-exemptions.json:88` (Directory_EntityDetailsActions): "reason": "The loading capture held the TST requests until the OutSystems request timeout, so Directory_EntityDetailsActions' FetchContactDetails had failed: every action disabled (background-neutral-3, text-neutral-7) and the skeleton off; the mock loading scenario never answers, so the clone keeps
- `migration/parity-exemptions.json:125` (Directory_EntityDetailsActions): "reason": "The loading and offline states were captured via Locality_Details (states.json `via`), so on TST the app start had finished and the user-info cache was filled: HouseholdDetails_Block's OnReady passed GetUserInformation_Wrapper (mvc.js:2700-2710), set the skeleton household ('Example & Exa
- `migration/parity-exemptions.json:544` (Directory_EntityDetailsActions): "pathRegex": "\\[Directory_CommonBlocks\\.Directory_EntityDetailsActions\\] > div#b3-b8-\\$b1\\.OSBlockWidget\\[ConnectPatterns\\.SkeletonSection\\] > div#b3-b8-b1-Placeholder_LoadingSection(\\.ubt-skeleton-section)?$|div#b3-b8-b2-b6-b1-b1-b1-Content\\.[^ >]*border-radius-circle[^ >]*$|div#b3-b8-b2-
- `migration/parity-exemptions.json:546` (Directory_EntityDetailsActions): "evidence": "migration/screens/SupperMeeting_Details/analysis/dom/loading.html (b3-b8-b1-Placeholder_LoadingSection without ubt-skeleton-section, list-error); parity/loading.json; Directory_EntityDetailsActions.tsx:348-350 (skeleton off on fetch error)"
- `migration/parity-exemptions.json:665` (Directory_EntityDetailsActions): "reason": "Same capture artifact as CAPTURE-LOADING-FETCH-TIMEOUT-SUPPERMEETING (which already covers the Notes button b6): the loading capture held the TST requests until the OutSystems request timeout, so FetchContactDetails failed and HandleFetchError set EnableBookmark / EnableShare False (Bookm
- `migration/parity-exemptions.json:666` (Directory_EntityDetailsActions): "evidence": "migration/screens/SupperMeeting_Details/parity/loading.json (4 class diffs b2/b8); Directory_EntityDetailsActions.mvc.js:1134-1150 (HandleFetchError); SupperMeeting_DetailsBlock mvc.js:370-371 (literal EnableNotes True); UBTConnectLibrary.model.js:4135-4156 (record defaults)"
- `migration/parity-exemptions.json:676` (Directory_EntityDetailsActions): "reason": "Follows from SupperMeeting_Carousel Q2 (answered by code: the default capture caught off-screen slides 2-3 mid-load). Their Directory_EntityDetailsActions (b8) was still in its loading look (grey circles, hidden icons) while its own FetchContactDetails answers were arriving; slide 1, load
