## Result
status: pass
summary: SupperMeeting_Carousel is now a page with the hook `hooks/useSupperMeetingCarousel.ts`, the client logic file `hooks/supperMeetingCarouselActions.ts` (from `components/logic.ts`) and `inputs.ts`. `api.ts` is deleted and `types.ts` is folded into `inputs.ts`. EntitiesCarouse_lSupperMeetingDetails is props-only: its stories no longer import `@/platform/session/session`. The one baseline row of this step is deleted (`arch_baseline.py check` exit 0, 76 rows). Typecheck, lint, format and all 2620 tests pass. A temporary old-vs-new test gave the same DOM and calls in 10 scenarios. HomeFeed and Login did not grow.

## Files changed
app/docs/refactor/arch-baseline.csv (the 1 row of owner P6-G4-B-SupperMeeting_Carousel deleted)
app/src/components/directory/CarouselSupperMeetingDetails/CarouselSupperMeetingDetails.stories.tsx (no `setClientVar`, no `@/platform/` import; the decorator gives the query client and the router only)
app/src/components/directory/CarouselSupperMeetingDetails/CarouselSupperMeetingDetails.tsx (the redundant `// @os-block` line removed; `@origin` stays; no other change)
app/src/components/directory/CarouselSupperMeetingDetails/README.md (props only; the Storybook note)
app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx (rewritten: reads the inputs, calls the hook, renders the layout)
app/src/pages/SupperMeeting_Carousel/SupperMeeting_Carousel.test.tsx (new: page test, 2 tests, with the view cache restore on a back navigation)
app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.ts (new)
app/src/pages/SupperMeeting_Carousel/hooks/useSupperMeetingCarousel.test.tsx (new, 4 tests)
app/src/pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.test.ts (new, 7 tests; the base had no test of `components/logic.ts`)
app/src/pages/SupperMeeting_Carousel/components/logic.ts → app/src/pages/SupperMeeting_Carousel/hooks/supperMeetingCarouselActions.ts (`git mv`; header with `@origin`, import path of the type, `supperMeetingCarouselOnInitialize` and its result type added; the three functions are unchanged)
app/src/pages/SupperMeeting_Carousel/types.ts → app/src/pages/SupperMeeting_Carousel/inputs.ts (`git mv`, rewritten: the route input type, PreloadedSupperMeetings, the input reader and the mock preload seam from `api.ts`)
app/src/pages/SupperMeeting_Carousel/api.ts (deleted, not staged)
app/src/pages/SupperMeeting_Carousel/mocks.ts (import line only: `./api` → `./inputs`)
migration/refactor/handoffs/P6-G4-B-SupperMeeting_Carousel/dev.md (new)

Not changed: EntitiesCarousel, EntitiesCarousel_Element, EntitiesCarousel_HouseholdDetails (step HouseholdCarousel), SupperMeetingDetails and SupperMeetingHouseholdList (step SupperMeeting_Details), the CarouselSupperMeetingDetails test and capture, the other routes of the group.

## Commands run
All commands ran in the worktree with Node 24 on PATH.
Bundle before the change: `npx vite build` + `node app/build/bundle-report.mjs HomeFeed Login SupperMeeting_Carousel HouseholdCarousel` → exit 0. HomeFeed 750.69 / 244.11 kB gzip (40 chunks), Login 600.62 / 184.16 (12), SupperMeeting_Carousel 774.07 / 252.57 (48), HouseholdCarousel 806.42 / 264.41 (55)
`npm --prefix app run typecheck` → exit 0
`cd app && npx vitest run src/pages/SupperMeeting_Carousel src/components/directory/CarouselSupperMeetingDetails src/components/directory/EntitiesCarouselElement src/components/directory/EntitiesCarousel/` → exit 0, 6 files, 30 tests, no warning in the output
`cd app && npx vitest run` (full suite) → exit 0, 482 files, 2620 tests (base 479 / 2607; +3 files, +13 tests)
`cd app && npx eslint src/pages/SupperMeeting_Carousel src/components/directory/CarouselSupperMeetingDetails` → exit 0, 0 problems
`cd app && npx prettier --check src/pages/SupperMeeting_Carousel src/components/directory/CarouselSupperMeetingDetails` → exit 0
`npm --prefix app run format:check` → exit 0
`npm --prefix app run lint` → exit 0, 0 errors, 77 warnings (76 baseline rows plus the duplicate `CommonUiLayout.tsx → platform/feedback/dialogs` line that was there before)
`npm --prefix app run arch` → depcruise 0 errors, 212 warnings (same as the base); none in `pages/SupperMeeting_Carousel` or `components/directory/CarouselSupperMeetingDetails`
`python3 migration/tools/refactor/arch_baseline.py check` → exit 0, "76 warnings, 76 baseline rows, 0 new, 0 gone". `list` → CountryList 2, SupperMeeting_Details 7, P7 66, pre-existing 1; no row of this step
`cd app && npx knip` → exit 1 as on the base (whole app). No unused file or export in the changed folders. The new exported types `SupperMeetingCarouselView` and `SupperMeetingCarouselInitialVariables` are listed as unused exported types, like the return types of the other page hooks (`HouseholdCarouselView`)
Restore test check: with the restore condition of the hook turned off, the back navigation test of `SupperMeeting_Carousel.test.tsx` fails (active slide 0, expected 1); with the hook as written, it passes
Temporary old-vs-new test (`pages/SupperMeeting_Carousel_old/`: the base page, `api.ts`, `types.ts`, `components/logic.ts` and `compare.test.tsx`; deleted after the run) → 10 scenarios, all equal. Each scenario compared the normalised DOM after each step (wait until stable; Splide's generated ids normalised) and the calls (as a multiset):
  - mock preload, start 9202 (3 slides, active 0, 12 calls); start 2820 (the same)
  - no input; invalid input `abc` (3 slides, active 0, 11 calls)
  - preload 9202, 9203 (number), 9204, start 9203 (active 1)
  - preload 9202, 9203, start 1 (2 slides, active 0)
  - a preload object that is not a supper meeting object (no slide, no call)
  - StrictMode, preload, start 9204 (active 2)
  - preload, start 9203, away and back (view cache restore: active 1 again, 21 calls)
  - mock preload, start 9204, away and back
Bundle after the change: `npm --prefix app run build` → exit 0. `node app/build/bundle-report.mjs HomeFeed Login SupperMeeting_Carousel HouseholdCarousel`:
  - HomeFeed: 750.69 / 244.12 kB gzip, 40 chunks (+0.01 gzip: every chunk hash changed with the entry, hash noise). Login: 600.62 / 184.16, 12 chunks, no change. W21 holds.
  - SupperMeeting_Carousel: 774.21 / 252.60 (+0.14 / +0.03), 48 chunks. HouseholdCarousel: 806.42 / 264.41, no change.
I did not run the parity, the e2e suite or the dev server: the tester runs them.

## Deviations from the brief
1. Branch: this worktree is on `rf/prefetch-P6-G4-B-SupperMeeting_Carousel-6be34914`, not on `refactor/architecture`. The master set up this prefetch branch and told me to work in it. The index holds the diff of P6-G4-B-HouseholdCarousel as the base; I staged only my 2 `git mv` renames.
2. Shape: page + hook, no container (criterion of plan §2.3 not met: no data hook, no handler). `api.ts` had no server call: its input reader and its mock preload seam went to `inputs.ts` (page-template.md). PreloadedSupperMeetings is the preload object, an input of the screen, so it is in `inputs.ts` too.
3. W23 does not apply: the screen has no flow with a side effect. OnInitialize is synchronous, there is no OnReady, no handler and no server call. So the hook does not use `useFlowState` and there is no W23 unit test. The hook keeps `useViewState` with the three original names (SupperMeetingsIdList, EntitieslCarousel_Items, StartingPosition), as HouseholdCarousel does; `useFlowState` would save one record under one view name. The page test covers the view cache restore.
4. CarouselSupperMeetingDetails (W13/W15 row): its only rule-4 import was `setClientVar` of `@/platform/session/session` in the stories. The component file imports only `components/` and has no logic, so there was nothing to move to a hook. I removed the import and the two `setClientVar` calls from the stories. Effect, in Storybook only: the call-to-action section of V1 (in the real SupperMeeting_DetailsBlock) stays loading until another story sets the synched bookmarks and notes. This is the same effect that the HouseholdCarousel step accepted for V3 of EntitiesCarousel_Element. The test and the capture check use a stand-in of SupperMeeting_DetailsBlock, so they do not change. The README says this.
5. No `renderSupperMeetingDetails` slot: the HouseholdCarousel dev.md proposed one, but a slot needs changes in EntitiesCarousel and EntitiesCarousel_Element, and the master said not to change those blocks. The block still renders SupperMeeting_DetailsBlock directly (component to component, allowed by rule 4). SupperMeeting_DetailsBlock itself is not props-only; the step SupperMeeting_Details owns it (7 baseline rows, move-map row 195: data per carousel element in the page hook). That step can add the slot when it needs it.
6. R4: the rewritten files (page, `inputs.ts`, the hook) have no compiled-line references. The three moved functions of `supperMeetingCarouselActions.ts` keep their comments (one `NavigationHandler.controller.js:154-172` reference). `mocks.ts` changed only its import line. I removed the `// @os-block` line of CarouselSupperMeetingDetails.tsx (checklist item 1), as the HouseholdCarousel step did for the EntitiesCarousel blocks.
7. Edits: two edits used an inline Python string replacement with a check that the match occurs once (the import line of `mocks.ts`, the baseline row), not the Edit tool. No `sed -i` was used. `api.ts` was deleted with `rm` (not staged).
8. For the documenter:
    - `move-map.csv`: row 331 (SupperMeeting_Carousel: shape `page + hook`, useSupperMeetingCarousel; `api.ts` and `types.ts` gone), row 167 (CarouselSupperMeetingDetails: props only, baseline row gone).
    - `components/directory/EntitiesCarouselElement/README.md` is now outdated in two places: it says that the step SupperMeeting_Carousel changes the supper meeting slide (it did not: see item 5), and that the stories of EntitiesCarouse_lSupperMeetingDetails show the synched state (they no longer set it). I did not change that folder (master: the EntitiesCarousel blocks are done).
    - `calls-by-domain.md` has no row for `pages/SupperMeeting_Carousel/api.ts` (it had no call); nothing to change there.

## Questions for the user
none
