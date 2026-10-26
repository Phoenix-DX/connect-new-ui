## Result
status: pass
summary: HouseholdCarousel is now a page with the hook `hooks/useHouseholdCarousel.ts`, the client actions file `hooks/householdCarouselActions.ts` (from `components/logic.ts`) and `inputs.ts`. `api.ts` and `types.ts` are deleted. EntitiesCarousel, EntitiesCarousel_Element and EntitiesCarousel_HouseholdDetails have props only: HouseholdDetails_Block is a slot (`renderHouseholdDetails`), and the page renders `HouseholdDetailsContainer` in it. The 10 baseline rows of this step are deleted (`arch_baseline.py check` exit 0, 77 rows). Typecheck, lint, format and all 2607 tests pass. A temporary old-vs-new check gave the same DOM, calls, request bodies, unread count and back-navigation preload in 7 scenarios. HomeFeed and Login did not grow.

## Files changed
app/docs/refactor/arch-baseline.csv (the 10 rows of owner P6-G4-B-HouseholdCarousel deleted)
app/src/components/directory/CarouselHouseholdDetails/CarouselHouseholdDetails.tsx (rewritten: slot `renderHouseholdDetails`, type `CarouselHouseholdDetailsSlot`, no `@/containers` import, no `// @os-block`)
app/src/components/directory/CarouselHouseholdDetails/CarouselHouseholdDetails.stories.tsx (stand-in of HouseholdDetails_Block, no session or container imports)
app/src/components/directory/CarouselHouseholdDetails/CarouselHouseholdDetails.test.tsx (2 tests added: slot inputs, no slot)
app/src/components/directory/CarouselHouseholdDetails/README.md
app/src/components/directory/EntitiesCarousel/EntitiesCarousel.tsx (prop `renderHouseholdDetails`, passed to each element; `// @os-block` removed)
app/src/components/directory/EntitiesCarousel/EntitiesCarousel.stories.tsx (stand-in, no session or container imports)
app/src/components/directory/EntitiesCarousel/README.md
app/src/components/directory/EntitiesCarouselElement/EntitiesCarouselElement.tsx (prop `renderHouseholdDetails`, passed to CarouselHouseholdDetails; `// @os-block` removed)
app/src/components/directory/EntitiesCarouselElement/EntitiesCarouselElement.stories.tsx (stand-in for V1 and V2; V3 keeps the real supper meeting slide with the query client and router only)
app/src/components/directory/EntitiesCarouselElement/README.md
app/src/pages/HouseholdCarousel/HouseholdCarouselPage.tsx (rewritten)
app/src/pages/HouseholdCarousel/HouseholdCarousel.test.tsx (new)
app/src/pages/HouseholdCarousel/hooks/useHouseholdCarousel.ts (new)
app/src/pages/HouseholdCarousel/hooks/useHouseholdCarousel.test.tsx (new, with the W23 test)
app/src/pages/HouseholdCarousel/components/logic.ts → app/src/pages/HouseholdCarousel/hooks/householdCarouselActions.ts (`git mv`; the types of `types.ts` and `householdCarouselOnInitialize` added, header with `@origin`)
app/src/pages/HouseholdCarousel/components/logic.test.ts → app/src/pages/HouseholdCarousel/hooks/householdCarouselActions.test.ts (`git mv`; import path, 1 test added)
app/src/pages/HouseholdCarousel/types.ts → app/src/pages/HouseholdCarousel/inputs.ts (`git mv`, rewritten: route input type and reader, mock preload seam from `api.ts`)
app/src/pages/HouseholdCarousel/api.ts (deleted, not staged)
app/src/pages/HouseholdCarousel/mocks.ts (import line only: `./api` → `./inputs`)
migration/refactor/handoffs/P6-G4-B-HouseholdCarousel/dev.md (new)

Not changed: CarouselSupperMeetingDetails, DirectoryLegendSheet, `containers/HouseholdDetails/*`, the SupperMeeting_Carousel page (it gives no slot: its slides are supper meetings), `api/update/*`, the other routes of the group.

## Commands run
All commands ran in the worktree with Node 24 on PATH.
Bundle before the change: `npx vite build` + `node app/build/bundle-report.mjs HomeFeed Login HouseholdCarousel SupperMeeting_Carousel HouseholdDetails Profile` → exit 0. HomeFeed 750.71 / 244.19 kB gzip (40 chunks), Login 600.64 / 184.16 (12), HouseholdCarousel 805.80 / 264.34 (55), SupperMeeting_Carousel 800.34 / 262.00 (54), HouseholdDetails 745.55 / 239.63, Profile 770.37 / 249.09
`npm --prefix app run typecheck` → exit 0
`cd app && npx vitest run src/components/directory/EntitiesCarousel src/components/directory/EntitiesCarouselElement src/components/directory/CarouselHouseholdDetails src/pages/HouseholdCarousel` → exit 0, 7 files (the path filter also takes EntitiesCarouselHeader), 36 tests, no warning in the output
`cd app && npx vitest run` (full suite) → exit 0, 479 files, 2607 tests
`cd app && npx eslint src/pages/HouseholdCarousel src/components/directory/EntitiesCarousel src/components/directory/EntitiesCarouselElement src/components/directory/CarouselHouseholdDetails` → exit 0, 0 problems
`npm --prefix app run format:check` → exit 0 (`prettier --write` was run on `HouseholdCarouselPage.tsx`: 1 JSX line joined)
`npm --prefix app run lint` → exit 0, 0 errors, 78 warnings (77 baseline rows plus the duplicate `CommonUiLayout.tsx → platform/feedback/dialogs` line that was there before)
`npm --prefix app run lint:arch` → depcruise 0 errors, 212 warnings; eslint 78 warnings. No warning in `pages/HouseholdCarousel`, `components/directory/EntitiesCarousel`, `EntitiesCarouselElement` or `CarouselHouseholdDetails` (the depcruise warning `CarouselHouseholdDetails.tsx → containers` of the base is gone)
`python3 migration/tools/refactor/arch_baseline.py check` → exit 0, "77 warnings, 77 baseline rows, 0 new, 0 gone". `list` → CountryList 2, SupperMeeting_Carousel 1, SupperMeeting_Details 7, P7 66, pre-existing 1; no row of this step
`npx knip` → no unused file in the changed folders; the new exported types `HouseholdCarouselView` and `HouseholdCarouselInitialVariables` are listed as unused exported types, like the return types of the other page hooks (`FeedItemDetailShare`, `NotificationsFlows`)
W23 guard check: with the `unmounted` guard removed, the W23 test fails (the view state setter is called 2 times); with the guard, it passes
Temporary old-vs-new test (`pages/HouseholdCarousel_old/`: the base page, `api.ts`, `types.ts`, `components/logic.ts` and the base EntitiesCarousel, Element and CarouselHouseholdDetails, plus `compare.test.tsx`; deleted after the run) → 7 scenarios, all equal. Each scenario compared the normalised DOM after each step (wait until stable), the calls (as a multiset; the position of `ActionGetSignedImagesInBulk` also changes between two runs of the old page), the MarkAsRead request bodies, the unread count and the preload object after a back navigation:
  - mock preload, start 42438
  - mock preload, start 91010, moves 10, 11, 3
  - no input
  - preload with swipe actions, moves 1, 1, 2, 3, 0, back (2 MarkAsRead, unread −2, 2 swiped items handed back)
  - the same in StrictMode, start 91002, moves 2, 1, back
  - preload with swipe actions, move 1, away and back (view cache restore), moves 2, 1, back
  - a preload object that is not a carousel object
Bundle after the change: `npm --prefix app run build` → exit 0. A scratch script compared the static chunk lists of the routes; a scratch copy of the app with the base files gave the same hashes as the first base build:
  - HomeFeed: 750.69 / 244.11 kB gzip, 40 chunks, the same chunk list (−0.08, hash noise). Login: 600.62 / 184.16, 12 chunks. W21 holds.
  - HouseholdCarousel: 806.42 / 264.41 (+0.07), 55 chunks (the `api` chunk is now `inputs`).
  - SupperMeeting_Carousel: 774.07 / 252.57 (−9.43), 48 chunks. It no longer loads HouseholdDetailsContainer, ComingSoon, HorizontalTagList, NonMemberListItem, TagToggle and flowState, because EntitiesCarousel no longer imports the container. Its slides are supper meetings, so the DOM does not change.
  - HouseholdDetails 745.53 / 239.53, Profile 770.35 / 248.94.
I did not run the parity, the e2e suite or the dev server: the tester runs them.

## Deviations from the brief
1. Branch: this worktree is on `rf/prefetch-P6-G4-B-HouseholdCarousel-6be34914`, not on `refactor/architecture`. The master set up this prefetch branch and told me to work in it.
2. Shape: page + hook, no container (criterion of plan §2.3 not met: one view state record, no second data hook). The flags of the household details are read by the page (`useHouseholdDetailsFlags`), once, and given to the container in the slot. Before, each slide read them.
3. The slot: `CarouselHouseholdDetails` takes `renderHouseholdDetails(slot)`. The slot has the instance id `<prefix>-$b1`, the household id, In_IsSkeletonOnly, the Placeholder_CarouselTag widget (`carouselTag`) and `onHouseholdDataFetched`. Handler_HouseholdDetails_DataFetched ("Locality, Country") stays in the block. EntitiesCarousel and EntitiesCarousel_Element only pass the slot on. The prop is optional, so the call site of SupperMeeting_Carousel does not change. The React tree is the same as before (the slot returns the same container element at the same place), and the old-vs-new test confirms it.
4. Supper meeting slide: EntitiesCarousel_Element still renders CarouselSupperMeetingDetails itself, because that block belongs to the SupperMeeting_Carousel step. When that step makes it props-only, it can add a `renderSupperMeetingDetails` slot in the same way. Effect on the stories: V3 of EntitiesCarousel_Element renders the real supper meeting slide with the query client and router only. The stories cannot set `Bookmarks_IsSynched` / `Notes_IsSynched` (no `platform/` import), so in Storybook its call-to-action section stays loading until another story sets them. The capture compares only the wrapper of that nested block, and the test passes. The README of the element says this.
5. Stories stand-in: the three stories files have a small `HouseholdDetailsStandIn` (the HouseholdDetails_Block wrapper with the carousel tag; it raises HouseholdDataFetched once, after a timer, with the fictional household of `@/mocks/fictional/directory`). Stories are outside jscpd. The tests that checked the real fetch ("Bahia Blanca, Argentina") now get it from the stand-in. The new page test `HouseholdCarousel.test.tsx` covers the slot with the real container: 23 slides, the household details in the 4 slides near the start, "1 / 23", and the title after the fetch.
6. W23: Handler_EventMoved is an event handler, not an OnReady flow, so the hook keeps `useViewState` with the five original names (as HouseholdDetails and FeedItemDetail) and not `useFlowState`. An `unmounted` ref (layout effect, as in useNotifications) guards the two state writes after the swipe action. The swipe action itself (UpdateItem_MarkAsRead, unread count − 1) still runs after an unmount. StrictMode does not run event handlers twice, so no once-guard is needed; the W23 test runs in StrictMode and checks that MarkAsRead runs once, the count drops once and no view state is written. React also dropped these writes before, so the visible behaviour is the same.
7. Kept as is (no behaviour change): a failed MarkAsRead in the swipe action is still not sent to the flow handler (`void` on the promise, as in the base). Sending it to `raiseToFlowHandler` would show an error message where the base shows none.
8. R4: the rewritten files have no compiled-line references. The moved functions of `householdCarouselActions.ts` and the unchanged parts of EntitiesCarousel and EntitiesCarousel_Element keep their comments. `mocks.ts` changed only its import line.
9. Edits: two edits used an inline Python string replacement with a check that each match occurs once (the header, types and OnInitialize of `householdCarouselActions.ts`; the prop threading in `EntitiesCarousel.tsx` and `EntitiesCarouselElement.tsx`), not the Edit tool (rule 6). No `sed -i` was used. `git mv` staged the 3 renames; `api.ts` was deleted with `rm` (not staged).
10. For the documenter:
    - `move-map.csv`: row 297 (HouseholdCarousel: shape `page + hook`, useHouseholdCarousel), rows 168, 169 and 171 (the slot `renderHouseholdDetails`; the page renders the container; baseline rows gone).
    - `calls-by-domain.md`: `pages/HouseholdCarousel/api.ts` is deleted; the hook calls `markCarouselUpdateItemAsRead` of `api/update` directly.
    - `containers/HouseholdDetails/README.md` (line 4) says the container is used by EntitiesCarousel_HouseholdDetails; it is now rendered by the HouseholdCarousel page in that block's slot. I did not change the container folder (F19 is separate).

## Questions for the user
none
