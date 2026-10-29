# Item 10: finish of the approved items (2026-10-29)

User decisions of 2026-10-29: Bookmarks Q4 (a), OneSchoolGlobalCarousel Q4 (a) and Q5 (a), the OrbitAdminMilestoneDetail
mock texts (MCP rows 5 and 5b), and the Notes API tests. No commit, no `git add`. Tests were written first and were red
before each code change.

## 1. Bookmarks Q4 (a): `search-placeholder-ellipsis` on Input and StaticInput

- Source: live TST code, extracted 2026-10-29 (`migration/screens/Bookmarks/sources/`):
  `UBTConnectLibrary.ConnectPatterns.Input.mvc.js:342` (`Input_Search.Style` = `"search-placeholder-ellipsis form-control " + In_ExtendedClasses` + border radius) and
  `UBTConnectLibrary.ConnectPatterns.StaticInput.mvc.js:173` (`"search-placeholder-ellipsis ubt-static-input " + In_ExtendedClasses`).
- Code: `app/src/components/ui/Input/Input.tsx`, `app/src/components/ui/StaticInput/StaticInput.tsx`.
- Tests: `Input.test.tsx` (new test: the exact class string), `StaticInput.test.tsx` (exact class string).
- Block fixtures updated to the live markup (the class only): `components/ui/Input/__captures__/v2.html`, `v3.html`;
  `components/ui/StaticInput/__captures__/v1-v3.html`; `components/directory/StatisticsList/__captures__/v2.html`, `v3.html`;
  `components/layout/HomeSearchSection/__captures__/v2.html`. The route re-captures of today have the class
  (for example `migration/screens/BrowseCountries/analysis/dom/default.html`).
- Result: no parity difference names the class on the 15 routes (0 diff details in their `parity/*.json`; the class
  shows only in the paths, as an expected class that the build now has).

## 2. OneSchoolGlobalCarousel Q4 (a): scenario `captured` of the EntityDetailsActions mocks

- Code: `app/src/containers/EntityDetailsActions/mocks.ts`. Only scenario `captured`, only school 1430:
  `contactChannels` answers no phone, mobile or email (no Call, no Email); `seedCapturedBookmark()` adds one legacy
  bookmark of the school (group Entities, object type OneSchoolGlobal, as `getBookmarkType_FromEntity` maps it) to the
  legacy bookmarks collection when the mocks load, so the device copy synced at app start has it ("Unmark";
  C2NewBookmarks is off on TST, so the block reads `Get_LocalBookmarkByObjectId`). Other scenarios do not change.
- Test: `app/src/containers/EntityDetailsActions/mocks.test.ts` (new, 2 tests).
- Result: the default state of the carousel has no Call/Email/Unmark difference any more.
- Open, decision for the user (not decided here): the **offline** state still differs ("Unmark" → "Bookmark", check
  icon → bookmark icon, `ubt-image-card__bookmarked` missing), because `migration/capture-plan.json` sets only
  `scenarios.default = captured` for this route, so offline runs with mock `real`. Options: a) add
  `"offline": "captured"` (and `"loading"`) to the route's scenarios; b) keep the difference; c) give the bookmark to
  scenario `real` too. Recommendation: a (the offline capture was taken from the same Bookmarks card).

## 3. OneSchoolGlobalCarousel Q5 (a): exemption of the runtime list key in `aria-activedescendant`

- `migration/parity-exemptions.json`: rule `OSGCAROUSEL-ACTIVEDESCENDANT-LIST-KEY`. Kinds `attr`; route
  `^/UBTConnect/OneSchoolGlobalCarousel(\?|$)`; states default and offline; path: the `ButtonGroup1.button-group` of
  the slide (`div#b<n>-l<n>-<n>_<n>-…ButtonGroup1`); detail: `aria-activedescendant: b<n>-l<n>-<n>_<n>-…-(ButtonGroupItem<n>) → …-\1`
  (the same item name on both sides, back-reference). Reason cites "user decision OneSchoolGlobalCarousel Q5 (a),
  2026-10-29". The file keeps its own JSON format (indent 1; it was not Prettier-formatted at HEAD either).
- Result: fired once in default and once in offline (`exemptionsUsed` of `parity/default.json`, `offline.json`).

## 4. OrbitAdminMilestoneDetail mock texts (MCP rows 5 and 5b)

- Code: `app/src/pages/OrbitAdminMilestoneDetail/mocks.ts`. `QRCodeScanResultUserMessage` (row 5b: "Has Checked in"
  for CheckedIn and CheckedInForOtherMilestone, "This QR code has been scanned", "An error has occured" (spelling
  kept), empty for Moved, NotAllocated, NotInvited) and `scanOutcome` (row 5) per case:

  | Case of the mock | Success | ErrorMessage | QRCodeErrorTypeId |
  |---|---|---|---|
  | first scan of an attendee (API check-in; local record written) | true | "" (API response kept) | AlreadyCheckedInForMilestone |
  | same attendee again (local duplicate, no API call) | false | "This QR code has been scanned" | AlreadyCheckedInForMilestone |
  | not an attendee / scenario `notallocated` (other API failure) | false | the API text (FICTIONAL "Guest is not allocated to this milestone.") | AlreadyCheckedInForMilestone |

  The header comment now says that a scan writes on TST (Orbit API check-in, local ScannedQRCodes record); the mock
  writes only its in-memory collection.
- Reading to confirm: row 5 says "the outcome lookup always reads that record"; the mock applies it to the check-in
  too (the block reads only `Response.Status`, so no UI effect). The NotAllocated API text is not known (the BL keeps
  the API response; the record's UserMessage is empty), so the fictional text stays.
- Shared fictional data (`mocks/fictional/orbitAdmin*.ts`): no scan texts there; no change.
- Tests: `app/src/pages/OrbitAdminMilestoneDetail/mocks.test.ts` (new, 4 tests); `OrbitAdminMilestoneDetail.test.tsx`
  (the second scan expects "This QR code has been scanned").

## 5. Notes API tests

- `app/src/api/note/hooks.test.tsx`: total '3'. `app/src/api/note/repository.test.ts`: total '3', 3 items, the two
  OneSchool Global cards are items 1431 and 1432, the Fenwick household card is found by its category (no index).
  Mock data unchanged. Result: 21/21 pass.

## Checks (from `app/`)

- `npx tsc --noEmit`: 0 errors. `npx eslint` (11 changed TS files): clean. `npx prettier --check`: clean.
- `npx vitest run` on the changed folders and `src/api/note`: 15 files, 86 tests pass. Folders whose fixtures hold the
  inputs: 28 files, 176 tests (3 failed until the StatisticsList and HomeSearchSection fixtures got the class; now pass).
- `npm run arch`: no violations (140 known ignored).
- Full suite, for information: 20 failures in 5 files outside this work, also failing in isolation:
  `src/api/bookmark/hooks.test.tsx`, `repository.test.ts` (4; CommunicationException for
  DataActionGetAllBookmarksByGroup / GetGroupSummaries, whose page mocks went with the deleted MyBookmarks and
  BookmarksByGroup pages), `pages/MilestoneDetail/hooks/useMilestoneBlock.test.tsx` (9),
  `pages/QRCodeGenerate/hooks/useGenerateQrCode.test.tsx` (6, and 1 unhandled rejection),
  `pages/AssembleEvents/AssembleEvents.test.tsx` (1, R3 flow scope). Not changed by this work.

## Parity (`parity_sweep.py --app http://localhost:5174`, 12:24-12:28, after the last code change)

The dev server on 5174 runs this checkout (`app/`). States not listed are clean.

| Route | Result |
|---|---|
| AssembleEvents | default: text 1, style 35, layout 20, position 34 |
| BrowseCountries | default: text 3, layout 1 |
| BrowseDirectory | clean |
| CommunityBusinessDetails_CoomingSoon | default and offline: text 1, pixel 1 (0.16 %) |
| CountryDetails | clean |
| CountryList | default: text 3, call 1 |
| HomeFeed | default: class 3, text 2, style 6, layout 8, position 1, pixel 1 (0.53 %), call 1; offline: text 1, layout 2 |
| Locality_Details | default: structure 2, class 1, style 1, pseudo 1, layout 10, position 1, pixel 1; offline: structure 2, layout 10, position 1, pixel 1; tag-interchange: structure 2, class 1, attr 1, layout 10, position 1, pixel 1; tag-oneschoolglobal: structure 3, layout 32, position 1, pixel 1; tag-suppermeetings: structure 2, style 1, layout 30, position 1, pixel 1 |
| Notifications | default: structure 27, text 2, layout 18, position 6, pixel 1; offline: structure 2 |
| Search | default: call 1 |
| Updates_SingleList | default: structure 2, class 81, text 39, style 148, layout 228, position 39, pixel 1 |
| Notes | default: pixel 1 (0.58 %) |
| Bookmarks | clean |
| OneSchoolGlobalCarousel | default: structure 3, class 1, layout 2, position 4, pixel 1 (0.28 %), call 1; loading: class 1; offline: structure 3, class 3, text 1, pseudo 2, layout 8, position 5, pixel 1 (0.34 %) |
| OneSchoolGlobalDetails | default: structure 3, layout 2, position 4, pixel 1 (0.42 %), call 1; offline: structure 3, layout 2, position 4 |

## Drift list (input of the drift wave, decision I10-12; not fixed here)

Each row: what differs (kinds, counts), best guess of the cause, evidence looked at.

| Route / state | Difference | Guess | Evidence |
|---|---|---|---|
| CommunityBusinessDetails_CoomingSoon, HomeFeed, Locality_Details (all states) | text 1 + layout of the StaticInput prompt: "Search for households, members or places." (TST) vs "Search for households. entities, news" (build); pixel 0.16 % on CBD | TST code change: new default `In_Prompt` of ConnectPatterns.StaticInput | the live StaticInput.mvc.js of today's re-captures has the new text (`analysis/sources/raw/UBTConnectLibrary.ConnectPatterns.StaticInput.mvc.js` of CBD, CountryList, HomeFeed, Locality_Details); `StaticInput.tsx` default is the old text |
| HomeFeed default, CountryList default | call 1: `DataActionGetCommunityStatistics` not called by the build | TST code change: new data action | present in the re-captured `UBTConnect.Home.HomeFeed.mvc.js` and `UBTConnect.Directory_Locality.CountryList.mvc.js`; no match in `app/src` |
| Search default | call 1: `DataActionGet_FilteredRecentClickedResults` not called | TST code change: new data action of ScreenBlock_Search | re-captured `UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js`; no match in `app/src` |
| BrowseCountries default (text 3, layout 1), CountryList default (text 3), AssembleEvents default (text 1) | counts "34"→"33", "61"→"58", "52"→"51" | mock data: the TST statistics moved since the fixtures were recorded (capture timing) | `parity/default.json` of the three routes (the same numbers) |
| AssembleEvents default | style 35 (icon margin-left, sub-pixel), layout 20, position 34 in the LocalityListDetail rows of the filter sheet (column widths 90→115, 129→157, …) | mock data: the row widths follow the row texts (names and counts), which differ from the re-captured rows; low confidence (could be a TST CSS change) | `parity/default.json` (widths vary per row, not by one factor; pixel 0) |
| HomeFeed default (class 3, style 6, layout 8, position 1, text 1, pixel 0.53 %), Updates_SingleList default (class 81, text 39, style 148, layout 228, position 39, structure 2, pixel) | update type tags: "Birth"/"Taken"/"Marriage" swapped, pink↔blue and neutral↔yellow tag colours, italic missing | mock data: the order and kinds of the fictional updates differ from today's TST feed (the colours and italic follow the update type) | `parity/default.json` (each text diff comes with the matching colour diff) |
| Notifications default | text 2 ("Last 7 Days"→"Last 30 Days", "Last 30 Days"→"Older"), structure 27 (4 ListItemContainer missing, 19 SkeletonSection extra, 1 Badge extra), layout 18, position 6, pixel | mock data: the fictional notification dates and groups differ from today's TST list (capture timing) | `parity/default.json`; `app/src/mocks/fictional/notifications.ts` |
| Notifications offline | structure 2: `moreActionContainer` missing, a `ConnectPatterns.BottomSheet` extra in Notifications_MoreActionSheet | TST code change of App_CommonBlocks_Filter.MoreActionSheet (not checked in the code) | `parity/offline.json` |
| Locality_Details (all states) | structure 1: a `ConnectPatterns.Icon` in `Placeholder_Header_Input_Icon` (header right, 24×24) missing in build; the StaticInput is 318 px on TST, 342 px in build (layout, position) | TST code change: new header icon next to the search input | `parity/default.json`, `tag-*.json` (the same 2 diffs in every state) |
| Locality_Details default | structure 1: 5th TagToggle (`b16-l1-79_4`) missing; style 1 (its margin) | TST code or data change: one more tag in the HorizontalTagList | `parity/default.json` |
| Locality_Details default | class 1 + pseudo 1: `ubt-image-card__bookmarked` extra in build | mock data: the mock bookmarks this card (decision A, 2026-10-16); the TST test user no longer has it | `parity/default.json` |
| Locality_Details tag-oneschoolglobal, tag-suppermeetings | layout 30-32: lazy images 390×26 (TST) vs 390×260 | capture timing (images not loaded in the capture) or a TST change; not checked | `parity/tag-*.json` |
| Locality_Details tag-interchange | attr 1: `#reactContainer aria-hidden` | capture timing (a popup was open on TST) | `parity/tag-interchange.json` |
| OneSchoolGlobalDetails, OneSchoolGlobalCarousel, Locality_Details tag-* | structure 1 per block: `CW_Notes.NotesSheet` extra in build inside Directory_EntityDetailsActions; class 1: `html.popup-disable-scroll` missing (carousel) | shared block: TST renders NotesSheet on demand; the React block renders it always. Not a new TST change as far as seen: both TST copies have NotesSheet in the view | `parity/default.json`; both copies of `UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js` (analysis/sources/raw, 147,015 chars; live extract `migration/screens/OneSchoolGlobalDetails/sources/`, 144,528 chars) |
| OneSchoolGlobalDetails default, OneSchoolGlobalCarousel default | call 1: `DataActionFetchNotes` not called by the build | React gap in the shared block: on TST FetchNotes is an automatic data action (`dataFetchActionNames = ["fetchContactDetails$DataActRefresh", "fetchNotes$DataActRefresh"]` in both copies); the React block calls it only with C2NewBookmarks on (`useEntityDetailsActions.ts:168-182`) | as stated |
| OneSchoolGlobalDetails, OneSchoolGlobalCarousel (default, offline) | structure 2: the `ConnectPatterns.Icon` inside two IconInline_Internal (`b19`, `b24`) missing in build (0×18 vs 24×18), positions 4, layout 2, pixel | React gap, not drift: the same diffs on the older OSGD capture and today's carousel capture; ComingSoon is unchanged between the two TST copies (only a BOM differs) | `parity/default.json` of both routes; diff of `UBTConnectLibrary.ConnectPatterns.ComingSoon.mvc.js` copies |
| Directory_EntityDetailsActions (both copies) | the two TST copies differ: one has `In_LocalityId` and `FetchNoteId` (Interchange item id "locality:entity") | TST code change between the copies; which copy is newer is not checked | `diff` of the two copies (58 changed lines) |
| OneSchoolGlobalCarousel loading | class 1: `html.popup-disable-scroll` extra in build | capture timing | `parity/loading.json` |
| OneSchoolGlobalCarousel offline | text 1, class 2, pseudo 2, layout, position: "Unmark"→"Bookmark", bookmark icon, `ubt-image-card__bookmarked` missing | mock scenario scope (item 2): offline runs with mock `real`; decision for the user above | `parity/offline.json`; `capture-plan.json` route scenarios |
| Notes default | pixel 1 (0.58 %), hotspots along y≈760 | unclear (bottom of the screen); DOM, styles and calls are equal | `parity/default.json`, `default.diff.png` (not opened) |

Tool calls: 56.
