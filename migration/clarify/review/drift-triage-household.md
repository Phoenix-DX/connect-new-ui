# Drift triage: group "household" (2026-10-29)

Brief: `../builds/drift-triage-brief.md`. Routes: HouseholdCarousel, HouseholdDetails, SupperMeeting_Carousel,
SupperMeeting_Details, Locality_Details, OneSchoolGlobalDetails, OneSchoolGlobalCarousel. Source: the parity reports of
2026-10-29 (`migration/screens/<S>/parity/*.json`), the new analysis, the old analysis (scratchpad
`pre-recapture-2026-10-29/`, git 62406f26). Read-only work. No code change.

**Summary: 1004 differences in 11 rows. A: 183 (7 rows, 1 of them with no parity difference). B: 9 (1 row).
C: 812 (3 rows). D: 0.** The loading states of all 7 routes are clean.

| Row | Block / cause | Routes (count) | Class | Size | Risk | User decision |
| --- | --- | --- | --- | --- | --- | --- |
| R1 | Directory_EntityDetailsActions: NotesSheet in a Popup portal, FetchNotes on load | all 7 (42) | A | L | medium | Q1 |
| R2 | Directory_EntityDetailsActions: bookmarks use the C2 store only | HouseholdCarousel, HouseholdDetails, OneSchoolGlobalCarousel (35) | A (+B mock) | M | medium | Q2 |
| R3 | Locality_Households_HouseholdList: flag `getHasNewBookmarks` is true on TST | Locality_Details (2) | A (flag value) | S | low | Q2 |
| R4 | ConnectPatterns.ComingSoon: new inline calendar icon | OneSchoolGlobalDetails, OneSchoolGlobalCarousel (34) | A | S | low | no (Q8 option a) |
| R5 | Header search: maps icon, flag `getHasMapsEnabled` is true on TST | Locality_Details, 5 states (65) | A (flag value) | S | low | Q3 |
| R6 | Locality_Details: new tag "Locality Contacts" | Locality_Details (5) | A | M | low | Q4 |
| R7 | SupperMeeting carousel: one subdivision fixture for all slides | SupperMeeting_Carousel (9) | B | S | low | no |
| R8 | Masked-image exemptions: runtime ids changed | HouseholdCarousel, SupperMeeting_Carousel, SupperMeeting_Details, Locality_Details (448) | C | S | low | Q5 |
| R9 | Off-screen carousel slide and masked tag text exemptions: ids changed | SupperMeeting_Carousel (35) | C | S | low | Q5 |
| R10 | HouseholdCarousel offline: ignore rule id changed | HouseholdCarousel (329) | C | S | low | Q5 |
| R11 | TST changes with no parity difference | HouseholdCarousel, HouseholdDetails, all LazyImage users (0) | A | S each | low | Q6 |

Counts per route: HouseholdCarousel 396, SupperMeeting_Carousel 304, Locality_Details 119, SupperMeeting_Details 113,
OneSchoolGlobalCarousel 35, OneSchoolGlobalDetails 20, HouseholdDetails 17 (same as `drift-table-2026-10-29.md`).

## Root cause of the id changes (R8 to R10)

TST added a OneSchoolGlobal branch to `Directory_Caroussel.EntitiesCarousel_Element` (new `EntitiesCarousel_OneSchoolGlobal`
block before the others). The uuids after it moved by one (`b2-b3` → `b2-b4` in HouseholdCarousel, `b2-b1-b1` → `b2-b2-b1`
in SupperMeeting_Carousel). The list keys (`l1-<n>`) also changed (`1152` → `146307`, `1164` → `146319`, `89` → `88`,
`3598`/`3709` → new values). The exemptions match the old ids, so they no longer apply. Evidence: `exemptionsUsed` in the
old reports (git 62406f26) and the new reports: CAPTURE-MASKED-IMAGE-HOUSEHOLDCAROUSEL 40 → 0, -SMCAROUSEL 240 → 0,
-SUPPERMEETING 120 → 10, TAGS-MASKED-IMAGE-LOCALITYDETAILS 22/20 → 0, CAPTURE-OFFSCREEN-SLIDE-ACTIONS-SKELETON-SMCAROUSEL
54 → 0, CAPTURE-MASKED-TEXT-CAROUSELTAG-SMCAROUSEL 3 → 0, ignoreSubtrees CAPTURE-VIA-USERINFO-HOUSEHOLDCAROUSEL 5 → 1.
React already makes the new ids (the build paths match the new TST paths).

## Rows

### R1. Directory_EntityDetailsActions: NotesSheet popup and FetchNotes (A, 42)

- Differences: CW_Notes.NotesSheet "extra in build" (30), html "missing .popup-disable-scroll" (5), screen attr
  `aria-hidden: true → ∅` (1, Locality_Details tag-interchange), call "DataActionFetchNotes not called" (6).
  HouseholdCarousel 14, HouseholdDetails 5, SupperMeeting_Carousel 7, SupperMeeting_Details 3, Locality_Details 5
  (tag-interchange, tag-oneschoolglobal), OneSchoolGlobalDetails 3, OneSchoolGlobalCarousel 5.
- Evidence (new compiled code, `migration/screens/HouseholdDetails/analysis/sources/pretty/UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js`):
  - :927-934: the NotesSheet is now inside `OSWidgets.Popup` (showPopup True, style `popup-dialog connect-share-portal`).
    The old code rendered NotesSheet with no Popup (old copy :935-940).
  - TST DOM (`analysis/dom/default.html`): one body portal per block instance
    (`portal-class > popup-backdrop > popup-dialog connect-share-portal > popup-content > CW_Notes.NotesSheet`). The old
    DOM had only the ShareSheet portal.
  - `migration/runtime-sources/OutSystemsReactWidgets.js:3`: the Popup sets `popup-disable-scroll` on html in
    `UNSAFE_componentWillUpdate` (on an update, not on mount) and sets aria-hidden on the main container.
  - :1864-1887: OnReady runs GetBookmarkCategoryId_ByEntityTypeId, GetLocalBookmarkByObjectId_C2, OnChange_Bookmark, then
    Action_RefreshFetchNotes when HasBookmark or HasUnbookmark is true. :1084-1093: FetchNotes has OnAfterFetch
    (EntityNotes = FetchNotes.Notes). :2149-2178: FetchNoteId = Notes_InterchangeId_ComposeId(In_LocalityId, EntityId)
    for interchange, else EntityId. New input `In_LocalityId` replaces `EntityExtraDataJSON`.
  - NotesSheet also changed (`UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js`, 348 lines): In_ItemId is Text, NoteText and
    IsSubmittingNote, a `notes-sheet-footer` CustomContainer around AddNote, BottomSheet onToggle, CommunicationError
    raise, its own stylesheet `css/UBTConnect_Utils.CW_Notes.NotesSheet.css`.
- React now: `app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:147-189` has the share portal
  and `OSPopupWidget`; :190-207 renders NotesSheet inline. `useEntityDetailsActions.ts:168-180` calls FetchNotes only in
  the `getHasNewBookmarks()` branch, which is off in React.
- Fix: put NotesSheet in the same body portal as the share sheet, with an `OSPopupWidget showPopup` for it (html class
  and aria-hidden). Run the C2 lookup and Action_RefreshFetchNotes in OnReady with no flag (see R2). Keep the notes in
  an EntityNotes state set by OnAfterFetch. Add the `inLocalityId` prop and the interchange note id. Port the NotesSheet
  changes in `app/src/components/note/NotesSheet`. Other routes: every user of the container (Profile and the other
  directory routes; `grep -rl EntityDetailsActionsContainer app/src/pages`).
- Risk: the html class and aria-hidden are on every detail page. Check that page scroll still works on the dev server.

### R2. Directory_EntityDetailsActions: bookmarks from the C2 store only (A + B, 35)

- Differences: "Bookmark" ↔ "Unmark" text, `.connect-icon-bookmark` ↔ `.connect-icon-check`, `.ubt-image-card__bookmarked`
  and its `::before`, label widths 51 ↔ 39, avatar offset 1 ↔ 7, 2 pixel reports (bookmark button and ribbon hotspots).
  HouseholdCarousel default 10, HouseholdDetails default 12, OneSchoolGlobalCarousel offline 13.
- Evidence: new mvc.js :375-376: the menu reads `Local_isBookmarked` only. The old code (:378-384) chose the store by
  `getHasNewBookmarks`. The old ToggleBookmarkItem branch and `Local_isBookmarked_C2`, `Local_BookmarkType`,
  `Local_BookmarkGroup` are gone (old :1413-1455). TST DOM: household 42438 was bookmarked in the old capture (legacy
  store, flag off on 2026-10-14) and is not bookmarked now (C2 store). OneSchoolGlobalCarousel: TST "Unmark" in default
  and offline; React "Unmark" in default and "Bookmark" in offline.
- Fix: remove the flag branch in `useEntityDetailsActions.ts` (:82-87, :153-180, :286, :319-327): C2 lookup and
  ToggleBookmarkItem_C2(LongIntegerToText(EntityId), Local_BookmarkTypeId, Local_isBookmarked) only. Mock (B): seed the
  C2 local bookmarks (`platform/storage/localEntities`) to the captured state: household 42438 and the carousel
  households not bookmarked, the OneSchoolGlobal entity bookmarked. Then check why React offline differs from default
  on OneSchoolGlobalCarousel (possible D after the port). Other routes: as R1, plus the Bookmarks screen that reads the
  same store.

### R3. Locality_Households_HouseholdList: flag value (A, 2)

- Differences: Locality_Details default, `.ubt-image-card__bookmarked` and `::before` extra in build (1 household card).
- Evidence: `migration/flags.json` action:getHasNewBookmarks (decision 2026-10-29: React keeps off until this wave);
  `migration/knowledge/flag-values-tst.json` changes[0]: TST true since 2026-10-21. The block code did not change (not
  in the changed-file list of Locality_Details). Old TST DOM: 1 bookmarked card; new: 0.
- Fix: set the React default of C2NewBookmarks to on (`app/src/lib/ubtConnectUtils/actions.ts`,
  `app/src/legacy/os/flagNames.ts`). After R2 this block is the only reader. Seed the C2 mock as in R2.

### R4. ComingSoon inline icon (A, 34)

- Differences: IconInline_Internal 24×18 → 0×18, Icon "missing in build" (2 per state), text offset 123 → 111,
  2 pixel reports (hotspots y 680-720). OneSchoolGlobalDetails 17, OneSchoolGlobalCarousel 17.
- Evidence: OneSchoolGlobalDetails Q7/Q8 (`migration/screens/OneSchoolGlobalDetails/questions.md`);
  `UBTConnectLibrary.ConnectPatterns.ComingSoon.mvc.js:192-203` (InlineIcon calendar, medium_20, neutral0).
- Fix: add the inline icon (`connect-icon-calendar text-neutral-0 icon-medium padding-right-xs inline-block`) in
  `app/src/components/ui/ComingSoon`. Other routes: all ComingSoon users (re-run their parity).

### R5. Maps icon in the header search (A, flag value, 65)

- Differences, per state (default, offline, 3 tags): Columns2 318×37 → 342×37 (6), StaticInput and TextEllipsis widths
  (4), Column2 offset (1), Icon "missing in build" (1), pixel hotspot 320,80 (1).
- Evidence: `UBTConnect.Directory_Locality.Locality_Details.mvc.js` placeholder_Header_Input_Icon: If
  `getHasMapsEnabled` → Icon explore, neutral0, OnClick_Maps. Same code old and new. New raw DOM has
  `connect-icon-explore text-neutral-0` (1), the old has 0. `flag-values-tst.json`: getHasMapsEnabled false (probe
  2026-10-14); flags.json C2EnableMaps: "default-only: TST value off (user, 2026-10-14)". So the TST value is now on.
- Fix: set the C2EnableMaps default to on and render the icon. Other routes: the Columns2 row of the drift table
  (HomeFeed, Notifications, Profile, Updates_SingleList); check each. The Maps screen is not built: the click needs a
  decision (Q3).

### R6. Locality_Details: tag "Locality Contacts" (A, 5)

- Differences: TagToggle "missing in build" (default, offline, tag-suppermeetings) and margin-right 4px → 0px on the
  4th tag (default, tag-suppermeetings).
- Evidence: TST DOM tags old 4 (Households, Supper Meetings, Interchange, OneSchoolGlobal), new 5 (+ "Locality Contacts").
  New mvc.js :986-1001: the section shows when the selected tag is `GetLocalityMenu().LocalityMenuOptions.LocalityContacts`;
  then an LD check `mobileDirectoryLocalityContacts` gives a hidden Container (Visible False) with
  `Locality_LocalityContacts` plus `ComingSoon_V2`, else `ComingSoon_V2` only. The old section was `If(True)` ComingSoon.
- Fix: in `app/src/pages/Locality_Details`, add the 5th tag and its section with ComingSoon_V2 (port the block if it
  is missing). The hidden LocalityContacts block is Q4. No other route.

### R7. SupperMeeting_Carousel: per-slide subdivision data (B, 9)

- Differences: slides 2 and 3: "Brethren: 29/19", "Households: 7/5", "15 Brothers & 14 Sisters", "10 Brothers & 9
  Sisters" in TST; React shows the slide 1 values (39, 11, 24 & 15) on every slide. Text widths follow (3).
- Evidence: the old capture had slides 2 and 3 in skeleton ("Brethren: 10"), exempted by
  CAPTURE-OFFSCREEN-SLIDE-SKELETON-SMCAROUSEL. The new capture has them loaded. `app/src/mocks/fixtures/UBTConnect/DataActionGetSubdivision/`
  has 1 fixture, so every subdivision id gets the same record.
- Fix: add fictional records for the slide 2 and 3 subdivision ids with the captured shapes (29 = 15 + 14, 7
  households; 19 = 10 + 9, 5 households). Do not restore the old off-screen skeleton exemption.

### R8. Masked-image exemptions, ids changed (C, 448)

- Differences: LazyImage, UBT_LazyImage, SkeletonSection, CustomContainer and img boxes 390×26 → 390×260 and
  195×24 → 195×130. HouseholdCarousel default 43, SupperMeeting_Carousel default 253, SupperMeeting_Details default 110,
  Locality_Details tag-oneschoolglobal 22 and tag-suppermeetings 20.
- Evidence: the capture masks the photos (`data-masked-src="user-image"`, src removed, `data-rendered-size` 390x259,
  390x260, 195x130); the replayed reference shows a broken image. The TST LazyImage change (new input
  In_ForceLoadingState, default False) has no caller in these routes, so the sizes are not a code change.
- Fix: in `migration/parity-exemptions.json`, change the ids in CAPTURE-MASKED-IMAGE-HOUSEHOLDCAROUSEL,
  CAPTURE-MASKED-IMAGE-SMCAROUSEL, CAPTURE-MASKED-IMAGE-SUPPERMEETING and TAGS-MASKED-IMAGE-LOCALITYDETAILS to `\d+`
  for the list keys and to the new block indexes. Keep the routeRegex and states. No app code.

### R9. SupperMeeting_Carousel off-screen slide and tag text (C, 35)

- Differences: slide 3 actions still in skeleton on TST (Icon and label styles, `ubt-skeleton-section`, `.hidden`,
  max-height 0px, 1 structure), CarouselTag left 337.688px → 337.344px / 336px (masked "• • •" text).
- Evidence: rules CAPTURE-OFFSCREEN-SLIDE-ACTIONS-SKELETON-SMCAROUSEL (54 → 0) and
  CAPTURE-MASKED-TEXT-CAROUSELTAG-SMCAROUSEL (3 → 0) match `b3-l1-1164_\d-b2-b1-b1`; the new path is
  `b3-l1-146319_\d-b2-b2-b1`.
- Fix: same id change as R8 for these two rules.

### R10. HouseholdCarousel offline, ignore rule (C, 329)

- Differences: the whole offline slide content (layout 204, structure 56, position 40, class 16, text 8, style 4,
  pixel 1): TST shows the cached household ("Example & Example", tags, address, Actions); React shows its offline form.
- Evidence: the old and new TST offline DOM have the same content. ignoreSubtrees CAPTURE-VIA-USERINFO-HOUSEHOLDCAROUSEL
  has idRegex `^b3-l1-115[24]_\d-b2-b3-\$b1$`; the new id is `b3-l1-146307_\d-b2-b4-$b1`.
- Fix: idRegex `^b3-l1-\d+_\d-b2-b4-\$b1$`. No app code.

### R11. TST changes with no parity difference (A, 0)

- HouseholdDetails_Block (`HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:560`):
  KebabButtonMenu gets `In_DisableShare = not GetHousehold.IsVisible`. React has no DisableShare.
- HouseholdDetails_Block: `If(False)` became an LD check `mobileDirectoryHouseholdGallery` (widget LD_Checks). The TST
  value is not known.
- EntitiesCarousel: a JS node RemoveCarouselOnResizeHandler on initialize. React has none.
- LazyImage and UBT_LazyImage: new input In_ForceLoadingState (default False); no caller in this group.

## Notes for other groups

- The TST HouseholdCarousel offline DOM has a new "Service Interruption" banner ("We're currently experiencing unusually
  high traffic …"). The parity did not report it in this group. The layout group should check it.
- Layout_DetailPage (261 changed lines), ShareSheet (124), BottomBarMenu (70) and UBTConnect_Utils.controller (299)
  changed. No difference in this group points to them; not triaged here.

## Questions for the user

**Q1 (R1): NotesSheet in a popup portal.** TST now puts each block's NotesSheet in an always-shown Popup. This adds
`popup-disable-scroll` on html and aria-hidden on the main container on every detail page.
a) Port 1:1: body portal, OSPopupWidget (html class, aria-hidden), FetchNotes in OnReady, NotesSheet changes.
b) Port the portal and FetchNotes, but not the html class and aria-hidden; add an exemption for them.
Recommendation: a (TST is the source of truth), with a check on the dev server that page scroll still works. If it
breaks scroll, use b.

**Q2 (R2, R3): bookmark store.** TST removed the flag branch in EntityDetailsActions; the flag is still read by
Locality_Households_HouseholdList and is true on TST.
a) Port the C2-only code in EntityDetailsActions, set the C2NewBookmarks default to on, seed the C2 mock to the
captured states.
b) Keep the flag off and exempt the bookmark differences.
Recommendation: a.

**Q3 (R5): maps icon.** The TST value of getHasMapsEnabled is now true (header icon in the new capture). The Maps
screen is not built.
a) Set C2EnableMaps to on; the icon click does nothing (same as other not-built targets) until Maps is in scope.
b) Keep off and add an exemption (TST flag value differs).
Recommendation: a. This also touches HomeFeed, Notifications, Profile and Updates_SingleList.

**Q4 (R6): Locality Contacts section.** Both branches show ComingSoon_V2. The LocalityContacts block is in a hidden
container, so it shows nothing, but it can make data calls. The value of the LD flag mobileDirectoryLocalityContacts is
not known.
a) Port the tag and the ComingSoon_V2 section; do not port the hidden LocalityContacts block.
b) Also port the hidden block and its calls (needs the LD flag value and a capture of that tag).
Recommendation: a.

**Q5 (R8, R9, R10): exemption ids.** The differences are the same capture artefacts as before, at new runtime ids.
a) Change the ids in the 6 rules and 1 ignore rule (list keys as `\d+`, new block indexes); keep route and state scope.
b) A generic tool rule for any masked LazyImage placeholder (reads `data-rendered-size`); broader, can hide real
differences.
Recommendation: a.

**Q6 (R11): TST changes with no difference.**
a) Port In_DisableShare, RemoveCarouselOnResizeHandler and In_ForceLoadingState in this wave (S each); ask the TST
value of mobileDirectoryHouseholdGallery before the gallery check.
b) Record them as debt rows only.
Recommendation: a.
