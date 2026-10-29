# Questions: OneSchoolGlobalCarousel

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] OneSchoolGlobalDetails drift (answered)
- Question: TST (2026-10-27) moved the OneSchoolGlobalDetails content to OneSchoolGlobalDetails_Block (block wrapper, new widget aliases: the bottom bar is $b4, was $b27). The React screen keeps the captured screen form (container variant 'screen'), so its parity stays clean against the old capture. Re-capture OneSchoolGlobalDetails and switch the page to the block form?
- Evidence: migration/clarify/review/survey-drift-2026-10-28.md:49; sources/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc.js view (aliases 1-5); containers/OneSchoolGlobalDetails/OneSchoolGlobalDetailsContainer.tsx (variant)
- Options: a) re-capture OneSchoolGlobalDetails on TST (read-only), then render variant 'block' on the page and re-run parity; b) keep the old screen form until the full re-capture of item 8 (recommended: a)
- Answer (user, 2026-10-29T10:26:59): (a) (user, 2026-10-29): re-capture OneSchoolGlobalDetails on TST (read-only), render the block form of the container on the page, re-run parity.

## Q2 [decision] Notes mock OSG notes (answered)
- Question: The Notes default mock has no OneSchool Global notes, and its card titles for unknown items are 'Item <id>' (pages/Notes/mocks.ts FICTIONAL_ITEMS). To show the carousel opened from Notes, the user must add a note on a school first. Add fictional OSG notes and card titles to the Notes mock?
- Evidence: app/src/pages/Notes/mocks.ts:33-35, 40; the Notes filter must be OneSchool Global (Notes.mvc.js:1566)
- Options: a) add two fictional OSG notes (schools 1431, 1432, not 1430 so OneSchoolGlobalDetails parity is unchanged) and their card titles to the Notes mock (outside this agent's scope: pages/Notes/mocks.ts); b) keep the mock; the user adds a note on a school to test (recommended: a)
- Answer (user, 2026-10-29T10:26:59): (a) (user, 2026-10-29): add two fictional OSG notes (schools 1431, 1432) and their card titles to the Notes mock, so the demo opens the carousel from Notes.

## Q3 [decision] Carousel track width in state default (answered)
- Question: Parity state default has 3 layout differences: the Splide track, its CarouselItems and its list are 351x0 in the TST capture and 390x0 in React. The TST default capture set --osui-carousel-track-width: 351px (OSUI _setCarouselWidth = carousel offsetWidth at Initialized), while the loading and offline captures of the same route, URL, viewport and browser set 390px, as do HouseholdCarousel and SupperMeeting_Carousel. The carousel itself is 390 wide in both (no difference reported on .osui-carousel). The default capture also has --footer-height 42px (loading/offline 56px): the carousel measured before the layout settled. Height 0, no visible pixel difference (0.02%). React measures the settled width; copying 351px would copy a timing artefact. How to close it?
- Evidence: analysis/dom/default.html (--osui-carousel-track-width: 351px) vs analysis/dom/loading.html and offline.html (390px); capture/capture-OneSchoolGlobalCarousel-*.json meta (same route and viewport); app/src/components/ui/Carousel/provider.ts:213-215 (setCarouselWidth); parity/default.json diffs[0-2]
- Options: a) re-capture state default of OneSchoolGlobalCarousel on TST (read-only, same capture plan) and re-run parity; if 351px comes back, then b; b) add a route-scoped exemption for the track width of state default (capture timing artefact, evidence above); c) accept the 3 differences as known in the build note (recommended: a)
- Answer (user, 2026-10-29T10:26:59): (a) done (user, 2026-10-29): the read-only re-capture of state default wrote --osui-carousel-track-width 390px and --footer-height 56px; parity clean. The user then chose to capture the screen via Bookmarks (the OneSchool Global card; Bookmarks.mvc.js:904-923, navigation only) and re-run parity.

## Q4 [decision] captured carousel: actions menu data (answered)
- Question: State default (scenario captured) and offline: TST shows school 1430 as bookmarked (Unmark, .ubt-image-card__bookmarked) and no Call or Email (FetchContactDetails answered empty). React shows Bookmark, Call and Email. The data comes from the mocks of containers/EntityDetailsActions and the local bookmarks (platform storage), outside this route's files. Who adds the captured answer?
- Evidence: migration/screens/OneSchoolGlobalCarousel/parity/default.json (Unmark→Bookmark, 2 CircleButton_IconPrimary extra); analysis/calls.md DataActionFetchContactDetails (Phone, MobilePhone, Email EMPTY); the slide came from Bookmarks card 3 (states.json via)
- Options: a) the owner of containers/EntityDetailsActions mocks adds a captured-scenario answer: empty contact details and a local bookmark of school 1430 | b) accept these differences as known for the captured state | c) route-scoped exemption (recommended: a)
- Answer (user, 2026-10-29T12:13:33): (a) (user, 2026-10-29): the 'captured' scenario of the EntityDetailsActions mocks answers empty contact details and a local bookmark of school 1430, as the capture.

## Q5 [decision] runtime list key in aria-activedescendant (answered)
- Question: State default and offline: ButtonGroup1 aria-activedescendant is b3-l1-146060_0-b2-b1-b1-ButtonGroupItem1 on TST. 146060 is the OutSystems runtime list key, which React cannot reproduce; React gives its own block prefix. How to treat it?
- Evidence: migration/screens/OneSchoolGlobalCarousel/parity/default.json attr diff; the other ids of the slide match by structure
- Options: a) exemption (parity tool or route) for aria-* values that differ only in an OutSystems list key | b) accept as known | c) give the carousel slides TST-like ids with an index key (still not 146060) (recommended: a)
- Answer (user, 2026-10-29T12:13:33): (a) (user, 2026-10-29): an exemption for aria values that differ only in the OutSystems runtime list key.
