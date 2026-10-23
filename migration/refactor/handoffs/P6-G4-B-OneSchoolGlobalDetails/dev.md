## Result
status: pass
summary: OneSchoolGlobalDetails is now a page with a hook (`useOneSchoolGlobalDetails`, on `useFlowState`) and a pure state file. The page renders `DetailLayout` directly. The data action moved from the route's `api.ts` to the domain `api/locality` (repository, mapper, types, key, hook `useOneSchoolGlobalDetailsQuery`). It keeps the query semantics of the old port, so the behavior does not change. `api.ts` and `types.ts` are deleted. A temporary old-vs-new check gave the same DOM, calls, request bodies, URL and feedback in 10 of 10 scripts. All quick checks pass, the arch baseline exits 0, and the HomeFeed and Login first loads did not grow.

## Files changed
app/src/pages/OneSchoolGlobalDetails/OneSchoolGlobalDetailsPage.tsx (rewritten: layout and components only; `DetailLayout` + `useNavigateBack` instead of the `Layout_DetailPage` adapter; `useFlag` of `@/platform/flags` instead of `useFlagOn`)
app/src/pages/OneSchoolGlobalDetails/hooks/useOneSchoolGlobalDetails.ts (added)
app/src/pages/OneSchoolGlobalDetails/hooks/useOneSchoolGlobalDetails.test.tsx (added; includes the W23 unmount and StrictMode tests)
app/src/pages/OneSchoolGlobalDetails/hooks/oneSchoolGlobalDetailsState.ts (added; holds the skeleton card, the list class and the call inputs)
app/src/pages/OneSchoolGlobalDetails/hooks/oneSchoolGlobalDetailsState.test.ts (added)
app/src/pages/OneSchoolGlobalDetails/OneSchoolGlobalDetails.test.tsx (added; page test with the MSW mocks)
app/src/pages/OneSchoolGlobalDetails/inputs.ts (added; route input and its reader, from the old `api.ts` and `types.ts`)
app/src/pages/OneSchoolGlobalDetails/staticEntities.ts (moved with `git mv` from `components/staticEntities.ts`, unchanged)
app/src/pages/OneSchoolGlobalDetails/components/External_Link.tsx (`// @os-block` changed to `@origin`; `BusinessLinkItem` is now imported from `@/api/locality`)
app/src/pages/OneSchoolGlobalDetails/components/ExpandableSection.tsx (`// @os-block` changed to `@origin`; the import of `staticEntities` follows the move)
app/src/pages/OneSchoolGlobalDetails/api.ts (deleted)
app/src/pages/OneSchoolGlobalDetails/types.ts (deleted)
app/src/api/locality/types.ts (added a separate block at the end: `BusinessLinkItem`, `OneSchoolGlobalDetailCard`, `DirectoryCoordinates`, `OneSchoolGlobalDetails`, `LookupLabel`, `OneSchoolGlobalDetailsCallInputs`)
app/src/api/locality/mapper.ts (added a separate block at the end: wire types, `toOneSchoolGlobalDetailsInputs`, `toOneSchoolGlobalDetails`; 3 names added to the type import list)
app/src/api/locality/repository.ts (added a separate block at the end: `fetchOneSchoolGlobalDetails`; 4 names added to the import lists)
app/src/api/locality/keys.ts (added the `oneSchoolGlobalDetails` key as the last entry of `localityKeys`)
app/src/api/locality/hooks.ts (added a separate block at the end: `useOneSchoolGlobalDetailsQuery`; 2 names added to the import lists)
app/src/api/locality/index.ts (added a separate export block at the end)
app/src/api/locality/mapper.test.ts (added a separate describe block at the end)
app/src/api/locality/repository.test.ts (added a separate describe block at the end)
app/src/api/locality/hooks.test.tsx (added a separate describe block at the end)
migration/refactor/handoffs/P6-G4-B-OneSchoolGlobalDetails/dev.md (added)

## Commands run
npm --prefix app run typecheck → exit 0
npx vitest run src/pages/OneSchoolGlobalDetails src/api/locality src/containers/EntityDetailsActions src/components/contact/AddressPopupWrapper src/components/layout → exit 0; 30 files, 152 tests
npx vitest run src/app src/mocks src/platform/navigation src/platform/flags → exit 0; 25 files, 129 tests
npx vitest run (full suite) → exit 0; 483 files, 2647 tests
npx eslint src/pages/OneSchoolGlobalDetails src/api/locality → exit 0; 0 problems
npx prettier --check src/pages/OneSchoolGlobalDetails src/api/locality → clean
python3 migration/tools/refactor/arch_baseline.py check → exit 0; 87 warnings, 87 baseline rows, 0 new, 0 gone (the route had no row)
npx depcruise src --config .dependency-cruiser.cjs --output-type err → exit 0; 210 warnings (212 at HEAD). The 2 rule-9 warnings of the route are gone: `OneSchoolGlobalDetailsPage.tsx → legacy/os/exceptions.ts` (the hook imports `raiseToFlowHandler` from `platform/feedback/flowErrors`) and `api.ts → legacy/os/os-wire.ts` (`osList` is now used in `api/locality/mapper.ts`, which rule 9 allows). No new warning in `pages/OneSchoolGlobalDetails` or `api/locality`.
npx knip → no unused file. New unused-export findings follow the existing domain pattern: `OneSchoolGlobalDetailsInputsWire` (like `OneSchoolListInputsWire` and 6 other `*InputsWire` types of `api/locality/mapper.ts`) and `OneSchoolGlobalDetailsAction`. The props findings of the 3 page components existed before.
npx vite build && node build/bundle-report.mjs HomeFeed Login OneSchoolGlobalDetails → exit 0; HomeFeed 244.17 kB gzip (244.17 at HEAD), Login 184.18 kB gzip (184.20 at HEAD); no growth (W21). OneSchoolGlobalDetails 235.48 kB gzip (233.03 at HEAD). The route now loads the shared `api/locality` chunk. This route is not a gated first load.
Temporary old-vs-new test (old page, `api.ts` and `types.ts` from HEAD next to the new page, same MSW mocks; deleted after use) → 10 of 10 scripts the same: load, load in StrictMode, no id in the query string, loading, error (flow handler message), flag mobileStudentInformation off, button group click then back navigation (restored, 1 call), leave while loading then back while the call is still pending (it joins the call: 1 call), leave while loading then back after the call (2 calls), and leave while loading with an error (no flow handler message after the unmount). The test compared the DOM (React useId ids normalised), the GetOneSchoolGlobalDetails call count, all called actions, the request bodies, the URL and the feedback message.

## Deviations from the brief
- Item 4 (api.ts → the domain hooks): the old port read the data action with a TanStack query (`enabled` = the OnReady decision, `gcTime: 0`, `staleTime: Infinity`, no retry, variables read when the fetch starts). It is now the domain hook `useOneSchoolGlobalDetailsQuery` with the same options. It is not an OnReady flow with `fetch…()`. A flow would change 3 behaviors that parity cannot see: (1) a back navigation while the first call is pending would make a second call (the query joins the pending call); (2) a failure after an unmount would reach the flow handler (the old port did not show it); (3) the query pauses while TanStack sees the browser offline. The same shape was used before: Services (`useUserServicesQuery`, same options) and Search (`useSearchBirthdayOptionsQuery`). The query key holds the school id only, as before. A key with all the call inputs would fetch again when the user selects a sub-section.
- W23: there is no OnReady flow with app-level side effects. The call that started runs to its end after an unmount, and it writes no state. A failure after the unmount does not reach the flow handler. That is the behavior of the port before this step, so W23 rule (b) keeps it. Unit tests: unmount while pending with success, and with failure (1 call, no reducer call, no flow handler call); StrictMode success and failure (1 call, 1 flow handler call). No once-guard is needed: the query removes duplicate calls.
- Domain choice (decision W8, by data ownership): the call returns a school of Connect_CommunityBusiness_CS. No domain owns that data, and `api/locality` already has the OneSchoolGlobal list of Locality_Details (`fetchOneSchoolCards`, `OneSchoolCard`). So I reused `api/locality` and did not create a new domain. In each locality file, the additions are a separate block at the end, marked `/* ---- OneSchoolGlobalDetails: DataActionGetOneSchoolGlobalDetails ---- */`. Only the import lists, the `localityKeys` object and `index.ts` got single lines elsewhere.
- W6 caveat (domain hooks with callers): `useOneSchoolGlobalDetailsQuery` now has a caller. The calls and the request bodies are the same as before (old-vs-new check: same order of the input keys, same count). So there is no parity-visible `call` difference and no exemption entry.
- Items 2 and 3: the page-only blocks (`External_Link`, `ExpandableSection`, `ButtonGroup`) were already in `pages/OneSchoolGlobalDetails/components`. The shared blocks (`components/contact/AddressPopupWrapper`, `components/layout/DirectoryDetailLayout`, `containers/EntityDetailsActions`) are imported and not changed.
- The view cache key changed from 4 names (`LookupSections`, `Selected_OneschoolGlobal_SubsectionId`, `LocalIsBookmarked`, `GetOneSchoolGlobalDetails`) to one `useFlowState` record, `Directory_OneSchoolGlobal.OneSchoolGlobalDetails`. The key is internal and the same 4 values are saved. The back-navigation scripts gave the same result.
- Process: I added the types block of `api/locality/types.ts` with a shell append (`cat >> … <<EOF`). I used the Edit and Write tools for every other change. I created and deleted the temporary comparison files with shell commands. No `sed -i` was used.
- For the documenter: the `move-map.csv` row `src/screens/OneSchoolGlobalDetails/index.tsx` (shape: page + hook + state, no container; `api.ts` and `types.ts` deleted; `inputs.ts`; `staticEntities.ts` at the page root; the call is in `api/locality` as a query hook). `calls-by-domain.md` line 168 still names `screens/OneSchoolGlobalDetails/api.ts` with `<ACTION>`. `api/README.md`: the `locality/` paragraph says 11 calls (now 12), and the new hook has a caller. The header comment of `api/locality/hooks.ts` ("No caller yet") is now wrong for the new hook. I did not change it, to keep the merge with the parallel G4 steps simple. The CHANGELOG also needs the step.

## Questions for the user
none
