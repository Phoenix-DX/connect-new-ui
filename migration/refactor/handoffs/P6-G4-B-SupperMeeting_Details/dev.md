## Result
status: pass
summary: W26 option A is done. SupperMeeting_DetailsBlock and SupperMeeting_HouseholdList now take props only. The new container `containers/SupperMeetingDetails` holds both data actions (useFlowState), OnClick_NavigateToHousehold and the `entityActions` slot. DataActionGetSubdivisionHouseholds moved to `api/locality`. The `renderSupperMeetingDetails` slot runs through EntitiesCarousel, EntitiesCarousel_Element and EntitiesCarouse_lSupperMeetingDetails, and SupperMeeting_Carousel fills it. Both pages render the container. The 7 baseline rows are deleted (`arch_baseline.py check` exit 0, 67 rows). Typecheck, lint, format and all 2722 tests pass. A temporary old-vs-new check gave the same DOM and calls in 18 scenarios on the 3 routes. HomeFeed and Login grew by 0.02 and 0.01 kB. The change has 44 app files, over the guideline of about 40 (see Deviations 4).

## Files changed
app/docs/refactor/arch-baseline.csv (the 7 rows of owner P6-G4-B-SupperMeeting_Details deleted)
app/src/api/locality/types.ts (new `SubdivisionHouseholdCard`)
app/src/api/locality/mapper.ts (new `SubdivisionHouseholdsWire`, `toSubdivisionHouseholdCards`)
app/src/api/locality/repository.ts (new `fetchSubdivisionHouseholds`, DataActionGetSubdivisionHouseholds)
app/src/api/locality/index.ts (export of `fetchSubdivisionHouseholds`)
app/src/api/locality/mapper.test.ts (1 test added)
app/src/api/locality/repository.test.ts (1 test added, the mock comment updated)
app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx (rewritten: props-only view with the `entityActions` slot. It renders SupperMeeting_HouseholdList with props. The `// @os-block` line and the compiled-line references are removed.)
app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.stories.tsx (props: the fictional supper meeting 1210 with its 11 households, the skeleton state, a stand-in in the slot. No `platform/` import.)
app/src/components/directory/SupperMeetingDetails/SupperMeetingDetails.test.tsx (the captures plus 4 tests: skeleton, fetched, carousel tag placeholder, household click)
app/src/components/directory/SupperMeetingDetails/README.md
app/src/components/directory/SupperMeetingDetails/api.ts (deleted)
app/src/components/directory/SupperMeetingDetails/mocks.ts (deleted; its handler is in the container mocks)
app/src/components/directory/SupperMeetingHouseholdList/SupperMeetingHouseholdList.tsx (rewritten: props only, `isDataFetched`, `isError`, `households`)
app/src/components/directory/SupperMeetingHouseholdList/SupperMeetingHouseholdList.stories.tsx (props; new story `Failed`, which has no capture)
app/src/components/directory/SupperMeetingHouseholdList/SupperMeetingHouseholdList.test.tsx (the same 2 tests, now with props)
app/src/components/directory/SupperMeetingHouseholdList/README.md
app/src/components/directory/SupperMeetingHouseholdList/api.ts (deleted)
app/src/components/directory/SupperMeetingHouseholdList/mocks.ts → app/src/containers/SupperMeetingDetails/mocks.ts (`git mv`. The file now has both handlers, the GetSubdivision recording and the fictional households, unchanged. The list is written `{ List: [...] }` instead of `wireList`.)
app/src/components/directory/CarouselSupperMeetingDetails/CarouselSupperMeetingDetails.tsx (new `CarouselSupperMeetingDetailsSlot` and `renderSupperMeetingDetails` prop; it no longer imports SupperMeetingDetails)
app/src/components/directory/CarouselSupperMeetingDetails/CarouselSupperMeetingDetails.stories.tsx (a stand-in in the slot, no providers)
app/src/components/directory/CarouselSupperMeetingDetails/CarouselSupperMeetingDetails.test.tsx (the `vi.mock` is replaced by the slot stand-in; the old test is kept, 2 tests added: slot inputs, no slot)
app/src/components/directory/CarouselSupperMeetingDetails/README.md
app/src/components/directory/EntitiesCarouselElement/EntitiesCarouselElement.tsx (`renderSupperMeetingDetails` passed on)
app/src/components/directory/EntitiesCarouselElement/EntitiesCarouselElement.stories.tsx (V3 has a stand-in in the slot; the providers decorator is removed)
app/src/components/directory/EntitiesCarouselElement/EntitiesCarouselElement.test.tsx (1 test added: the supper meeting slide)
app/src/components/directory/EntitiesCarouselElement/README.md
app/src/components/directory/EntitiesCarousel/EntitiesCarousel.tsx (`renderSupperMeetingDetails` passed on)
app/src/components/directory/EntitiesCarousel/README.md
app/src/containers/index.ts (exports `SupperMeetingDetailsContainer`, its props type, `useSupperMeetingDetailsFlags`, `SupperMeetingDetailsFlags`)
app/src/containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx (new)
app/src/containers/SupperMeetingDetails/SupperMeetingDetailsContainer.test.tsx (new, 3 tests, with the MSW mocks)
app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts (new)
app/src/containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.test.tsx (new, 8 tests, 2 of them for W23)
app/src/containers/SupperMeetingDetails/hooks/supperMeetingDetailsState.ts (new)
app/src/containers/SupperMeetingDetails/hooks/supperMeetingDetailsState.test.ts (new, 4 tests)
app/src/containers/SupperMeetingDetails/README.md (new)
app/src/pages/SupperMeeting_Details/SupperMeeting_DetailsPage.tsx (rewritten: reads the input and the flag, renders the container)
app/src/pages/SupperMeeting_Details/api.ts → app/src/pages/SupperMeeting_Details/inputs.ts (`git mv`, rewritten: the input type from `types.ts` and the reader)
app/src/pages/SupperMeeting_Details/types.ts (deleted with `rm`, not staged)
app/src/pages/SupperMeeting_Details/mocks.ts (comment only)
app/src/pages/SupperMeeting_Details/SupperMeeting_Details.test.tsx (new, 3 tests: load, back navigation, flag off)
app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx (reads the flag and passes `renderSupperMeetingDetails`, which renders the container)
app/src/pages/SupperMeeting_Carousel/SupperMeeting_Carousel.test.tsx (1 test added: each slide fetches its own supper meeting through the slot)
migration/refactor/handoffs/P6-G4-B-SupperMeeting_Details/dev.md (new)

Not changed: HouseholdCarousel (page, hook, tests), CarouselHouseholdDetails, HouseholdDetailsContainer, the captures, `src/mocks/**`, `openapi.yaml`.

## Commands run
All commands ran in the worktree with Node 24 on PATH. I did not start a dev server or `vite preview`, and I did not run the parity or the e2e suite.
Bundle before the change: `npx vite build` + `node app/build/bundle-report.mjs HomeFeed Login SupperMeeting_Details SupperMeeting_Carousel HouseholdCarousel` → exit 0. HomeFeed 244.16, Login 184.18, SupperMeeting_Details 233.67, SupperMeeting_Carousel 252.65, HouseholdCarousel 264.48 kB gzip
`npm --prefix app run typecheck` → exit 0
`cd app && npx vitest run src/containers src/components/directory src/pages/SupperMeeting_Carousel src/pages/SupperMeeting_Details src/pages/HouseholdCarousel src/api/locality src/mocks/handlers.test.ts` → exit 0, 39 files, 216 tests
`cd app && npx vitest run` (full suite) → exit 0, 496 files, 2722 tests
`cd app && npx eslint` on the changed folders → exit 0, 0 problems
`npm --prefix app run lint` → exit 0, 0 errors, 68 warnings (the 67 baseline rows plus the duplicate `CommonUiLayout.tsx → platform/feedback/dialogs` line, which was there before)
`npm --prefix app run format:check` → exit 0
`npm --prefix app run arch` → 0 errors, 201 warnings. On a rebuilt base tree (`git archive HEAD` plus the staged SupperMeeting_Carousel files) it gives 209. The 8 removed warnings are 6 rule-4 and 2 rule-9 warnings of the old block files. No warning is in `containers/SupperMeetingDetails`, `components/directory/{SupperMeetingDetails,SupperMeetingHouseholdList,CarouselSupperMeetingDetails,EntitiesCarousel,EntitiesCarouselElement}` or `pages/SupperMeeting_{Details,Carousel}`.
`python3 migration/tools/refactor/arch_baseline.py check` → exit 0, "67 warnings, 67 baseline rows, 0 new, 0 gone". `list` → P7 66, pre-existing 1. HEAD has 75 rows and the index (after SupperMeeting_Carousel) 74.
`cd app && npx knip` → exit 1, as on the base (whole app). There is no unused file or unused value export in the changed files. It lists `SupperMeetingDetailsFlows` and `SupperMeetingDetailsContainerProps` as unused exported types, like the other hook return and props types.
Mutation checks: without `restore`, the back-navigation test of `SupperMeeting_Details.test.tsx` fails. Without the `isAlive` guard of the writes, the 2 W23 tests fail. Both were put back.
Temporary old-vs-new check: `app/src/pages/__old_smd/` held the base page and block files, made with a scratchpad script that rewrites the imports, and `compare.test.tsx`. Both were deleted after the run; copies are in `/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/59d369e8-2125-443a-af59-6fe7f8eaa7bc/scratchpad/smd-tools/`. 18 scenarios passed in 6 runs in a row (plus 2 old-vs-old control runs). Each scenario compared the normalised DOM (Splide and useId ids), the calls with their phase and input names, the request bodies, and, where it applies, the location and the preload object.
  - SupperMeeting_Details:
    - load (the first render and the end state)
    - invalid input
    - household click with the flag on, and with the flag off
    - HTTP 500 on both calls
    - calls that never answer
    - away and back, answered
    - away and back with the refreshes pending (the skeletons come back, both calls again)
    - away while pending (latency 40 ms)
    - StrictMode
  - SupperMeeting_Carousel:
    - mock preload, start 2820
    - preload 9202, 9203, 9204, start 9203
    - household click in slide 2
    - away and back, answered and pending
    - StrictMode
  - HouseholdCarousel: load and StrictMode. The calls are compared as a multiset: the bulk signed-image call changes its place with the batch timer, and an old-vs-old control run shows the same variation.
  - StrictMode call counts are the same: 1 call of each data action on SupperMeeting_Details, 3 of each on SupperMeeting_Carousel.
Bundle after the change: `npm --prefix app run build` → exit 0. `node app/build/bundle-report.mjs …`:
  - HomeFeed 244.18 kB gzip (+0.02), Login 184.19 (+0.01): W21 holds.
  - SupperMeeting_Details 234.76 (+1.09): the container chunk, the shared `flowState` chunk (0.47) and the state chunk (0.24).
  - SupperMeeting_Carousel 253.78 (+1.13).
  - HouseholdCarousel 259.75 (−4.73, 52 chunks instead of 55): EntitiesCarousel_Element no longer loads SupperMeeting_DetailsBlock and its children statically.

## Deviations from the brief
1. Branch: the worktree is on `rf/prefetch-P6-G4-B-SupperMeeting_Details-039e275f`, not on `refactor/architecture`. The master set up this branch and told me to work in it. The base is HEAD plus the staged SupperMeeting_Carousel diff; I did not unstage anything.
2. Git index:
   - `git mv` staged the 2 renames (household list `mocks.ts` → container `mocks.ts`, page `api.ts` → `inputs.ts`).
   - I deleted 3 files with `git rm`, so their deletions are staged: `components/directory/SupperMeetingDetails/{api,mocks}.ts` and `components/directory/SupperMeetingHouseholdList/api.ts`. Rule 2 names only `git mv`.
   - `pages/SupperMeeting_Details/types.ts` was deleted with `rm` and is not staged.
3. Edits: one edit used an inline Python string replacement with a check that each match occurs once (3 replacements in `api/locality/repository.test.ts`), not the Edit tool (rule 6). Every other edit used Edit or Write. No `sed -i` was used.
4. File count: 44 app files plus dev.md, over the guideline of about 40. Of these, 37 are code, test and story files; 6 are READMEs and 1 is the baseline CSV. I did not split the step (W26/W22). In a "view + container + page first" part, EntitiesCarouse_lSupperMeetingDetails would render the props-only view without data, because a component cannot import the container, so the carousel slides would break.
5. Shape (W26 option A, "for example" slots):
   - The view has one slot, `entityActions` (Directory_EntityDetailsActions, a container).
   - SupperMeeting_HouseholdList is a props-only component, so the view renders it with props (`households`, `onHouseholdClick`), not through a `householdList` slot. Slots are for containers (page-template.md).
   - The household list keeps no instance id, as before.
6. Flag: both pages read `useSupperMeetingDetailsFlags()` (`useFlag('C2EnableCarousel')` of `@/platform/flags`) and pass `flags`, as HouseholdCarousel does with `useHouseholdDetailsFlags()`. Before, the block called `useFlagOn` itself.
7. View cache: `useFlowState` saves the state of a view, but the old port kept no block state. On a back navigation it showed the skeletons and called both data actions again.
   - The hook keeps that behavior: `restore` gives the first state, and OnReady always refreshes.
   - OutSystems skips both on a restored view. The container README lists this under "Not settled".
   - The page test covers the back navigation.
8. W23:
   - OnReady runs once per mount, with the `readyStarted`/`newestReadyRun` pattern of CountryList and MessageDetail.
   - Writes after an unmount are skipped; the calls already ran. No failure goes to the flow handler, as before (the old port ignored a failed GetSubdivision and kept the Error status of the list).
   - There are no app-level side effects after the awaits.
   - 2 unit tests in `useSupperMeetingDetails.test.tsx`.
9. Call order: the hook starts GetSubdivisionHouseholds before GetSubdivision, in one effect. This is the order the old child and parent effects had. The check found the same order.
10. Domain mapping: `toSubdivisionHouseholdCards` keeps HouseholdId, HouseholdName and ChildrenNames. The old `api.ts` passed the wire rows as they were. The gallery card reads only these 3 fields, so the DOM does not change.
11. Mocks:
    - The container `mocks.ts` writes the list as `{ List: [...] }` (what `wireList` returns), so the new folder has no rule-9 warning for `legacy/os/os-wire`.
    - Both handlers moved from the `components/**` glob to the `containers/*` glob of `mocks/handlers.ts`. No other handler answers these 2 URLs, and `handlers.test.ts` passes.
12. R4:
    - `@origin` is on the container, the hook, the state file, the view, the list, both pages and `inputs.ts`.
    - The `// @os-block` lines of the 2 rewritten blocks are removed.
    - The rewritten code has no compiled-line references. The moved mock comment keeps its capture references.
13. For the documenter:
    - `move-map.csv`:
      - row 195 (SupperMeeting_DetailsBlock): container `containers/SupperMeetingDetails` + props-only view, baseline rows gone
      - row 196 (SupperMeeting_HouseholdList): props only, data in the container
      - row 167 (CarouselSupperMeetingDetails): slot `renderSupperMeetingDetails`
      - rows 168 and 169 (EntitiesCarousel, EntitiesCarousel_Element): both slots
      - row 332 (SupperMeeting_Details): page renders the container; `inputs.ts`
    - `app/docs/refactor/calls-by-domain.md` lines 34 and 66: the old `shared/...` api.ts rows. Both calls are now in `api/locality` (`fetchSubdivisionHouseholds`, `fetchSubdivisionDetails`).
    - `app/src/api/README.md` line 17: `locality/` now has 12 calls (DataActionGetSubdivisionHouseholds of SupperMeeting_HouseholdList is new).
    - The CHANGELOG entry: baseline 74 → 67 rows. HouseholdCarousel first load −4.73 kB gzip.

## Questions for the user
none
