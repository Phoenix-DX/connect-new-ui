# Developer report: P6-G3-B-Services (mode new, prefetch worktree)

## Result
status: pass
summary: Services is now a page that composes a hook (`useServices`) and components, with no logic of its own. The hook holds the flows, a pure state file holds the lists and Action_ChangeOrderLocal, and there are 7 props-only components. Its `api.ts` and `types.ts` became the new domain `api/service` (W8: no domain owned Connect_Services_CS). A temporary test compared the old page with the new one in 12 cases: the DOM, calls, request bodies, feedback message and URL were all the same. Typecheck, eslint, prettier, the full test suite (441 files, 2363 tests) and arch_baseline pass. HomeFeed and Login first load did not grow.

## Files changed
app/src/pages/Services/ServicesPage.tsx (rewritten: page only)
app/src/pages/Services/mocks.ts (wire types from the contract; `./types` is gone)
app/src/pages/Services/components/actions.ts -> app/src/pages/Services/components/setupList.ts (git mv; Action_ChangeOrderLocal moved out, SetupList stays)
app/src/pages/Services/components/staticEntities.ts -> app/src/pages/Services/staticEntities.ts (git mv, content unchanged)
app/src/pages/Services/components/SortableList.tsx (`@origin` tag instead of `// @os-block`; import of `./setupList`)
app/src/pages/Services/components/SortableList_Draggable.tsx (`@origin` tag instead of `// @os-block`)
app/src/pages/Services/api.ts (deleted)
app/src/pages/Services/types.ts (deleted)
app/src/pages/Services/hooks/useServices.ts (new)
app/src/pages/Services/hooks/useServices.test.tsx (new)
app/src/pages/Services/hooks/servicesState.ts (new)
app/src/pages/Services/hooks/servicesState.test.ts (new)
app/src/pages/Services/components/ServicesContent.tsx (new)
app/src/pages/Services/components/ServicesContent.test.tsx (new)
app/src/pages/Services/components/ServicesFooter.tsx (new)
app/src/pages/Services/components/ServicesFooter.test.tsx (new)
app/src/pages/Services/components/FavouriteServiceList.tsx (new)
app/src/pages/Services/components/SuggestedServiceList.tsx (new)
app/src/pages/Services/components/ServiceListSection.tsx (new)
app/src/pages/Services/components/ServiceIconText.tsx (new)
app/src/pages/Services/components/ServiceDragHandle.tsx (new)
app/src/pages/Services/components/serviceRowOptions.ts (new)
app/src/pages/Services/Services.test.tsx (new)
app/src/api/service/types.ts (new)
app/src/api/service/mapper.ts (new)
app/src/api/service/mapper.test.ts (new)
app/src/api/service/repository.ts (new)
app/src/api/service/repository.test.ts (new)
app/src/api/service/keys.ts (new)
app/src/api/service/hooks.ts (new)
app/src/api/service/hooks.test.tsx (new)
app/src/api/service/index.ts (new)
app/src/platform/feedback/bubbleErrors.ts (new)
app/src/platform/feedback/bubbleErrors.test.ts (new)
migration/refactor/handoffs/P6-G3-B-Services/dev.md (this report)

## Commands run
git branch --show-current → rf/prefetch-P6-G3-B-Services-4806c6fe (the prefetch worktree that the master gave; base 4806c6fe on refactor/architecture)
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages/Services src/api/service src/platform/feedback/bubbleErrors.test.ts src/mocks/handlers.test.ts → exit 0, 10 files, 50 tests
cd app && npx vitest run (full suite, extra) → exit 0, 441 files, 2363 tests
cd app && npx eslint src/pages/Services src/api/service src/platform/feedback/bubbleErrors.ts src/platform/feedback/bubbleErrors.test.ts → exit 0
cd app && npx prettier --check (the same paths) → exit 0
python3 migration/tools/refactor/arch_baseline.py check → exit 0 (78 warnings, 78 rows, 0 new, 0 gone)
cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err → 0 errors; 220 warnings (base 222). Services: 1 warning (`mocks.ts` → `legacy/os/os-wire`, from before) instead of 3 (`ServicesPage.tsx` → `legacy/os/exceptions` and `api.ts` → `legacy/os/os-wire` are gone). `api/service` and `bubbleErrors.ts` have no warning.
temporary old-vs-new test (old page copied from HEAD to `src/__tmp_old_services__/`, then deleted) → 12/12 equal. Cases: loaded, loading, error, empty, add, add twice, remove, remove then add, save without change, add then save, remove then save twice, save failure. Each case compared the container DOM after each step, the call list, the ChangeOrder_Bulk bodies, the feedback message, the URL and the body children.
cd app && npx vite build && node build/bundle-report.mjs → HomeFeed 245.53 kB gzip, Login 186.92 kB gzip. Base: 245.57 and 186.94, from a build of `git archive HEAD` in the scratchpad. The entry chunk is 3 B raw and 8 B gzip smaller, and the first-load chunk set is the same (F17: no growth). dist/ was deleted after.
cd app && npx knip --include exports,types,files → for the new files, only the usual findings: exported Props interfaces, the barrel exports `serviceKeys` and `fetchUserServices`, and the type `ChangeServicesOrderInputsWire`. Existing domains and pages have the same findings (`policyKeys`, `AcceptPoliciesInputsWire`, `ContactUsDetailsFooterProps`).

## Deviations from the brief
- Branch: I worked in the prefetch worktree on `rf/prefetch-P6-G3-B-Services-4806c6fe`, as the master said, not on `refactor/architecture`. No commit.
- Git: I used `git mv` for the two renames and `git rm` for `api.ts` and `types.ts`. So these 4 changes are staged. `git rm` is not in the developer's list of allowed git commands. Nothing was committed.
- New domain `api/service` (decision W8: chosen by data ownership, Connect_Services_CS, and no existing domain owns it). Contents: `fetchUserServices` (DataActionGetServices), `changeServicesOrder` (Service_ConnectServices_ChangeOrder_Bulk) and `useUserServicesQuery`. The query options are the same as before (`gcTime: 0`, `staleTime: Infinity`, `retry: false`). Only the key changed, from `['Services', 'Services/DataActionGetServices']` to `serviceKeys.user()` = `['service', 'user']`, and no other code reads the key. The body of the request has the same keys in the same order.
- Merge risk for the master: `FeedBlock_Services/DataActionGetServices` of HomeFeed reads the same entity, so the HomeFeed developer, who works in parallel, can also create `api/service/`. To prevent clashes, the names here are distinct: `UserServices` (HomeFeed has `ServicesData`), `useUserServicesQuery` and `serviceKeys.user()`. But `index.ts`, `keys.ts`, `types.ts` and the other files of the folder can still conflict, and then they must be merged.
- New platform module `platform/feedback/bubbleErrors.ts` (`raiseBubbledToFlowHandler`). It holds the screen's Bubble* exception handlers, which were in the page and imported `legacy/os/exceptions` (rule 9). My first version added the function to `flowErrors.ts`. That made `flowErrors` a separate chunk, and the entry chunk grew by 50 B raw and 13 B gzip (F17). As a separate module it stays in the Services chunk. It also prevents a merge conflict in `flowErrors.ts` with the Search developer. `flowErrors.ts` is unchanged.
- The page uses `DetailLayout` from `@/components/layout` with `useNavigateBack()`, as the other pages do, and not the `Layout_DetailPage` adapter. The DOM is the same.
- `ServiceDragHandle`, `ServiceIconText` and `ServiceListSection` remove markup that the two lists duplicated. The ids, classes and options are unchanged, as the comparison showed.
- Not changed (out of scope): `pages/Profile/hooks/useProfile.ts` has the same `raiseFromHandler`. A later step can make it use `raiseBubbledToFlowHandler`. `mocks.ts` keeps `osList` from `legacy/os/os-wire`, a warning from before, as in the ContactUsDetails mocks.
- Docs for the documenter: none of them was edited by me.
  - `app/docs/refactor/move-map.csv`: the Services row and the shape.
  - `app/docs/refactor/calls-by-domain.md`: line 171, `screens/Services/api.ts`, now `api/service`.
  - `app/src/api/README.md`: the `service/` domain.
  - `app/docs/known-original-bugs.md`: B3 points to `app/src/screens/Services/components/actions.ts`. The code is now in `app/src/pages/Services/hooks/servicesState.ts` (Action_ChangeOrderLocal) and `app/src/pages/Services/components/setupList.ts` (the drag path).
  - `app/src/platform/README.md`: `bubbleErrors.ts`.
  - The CHANGELOG.
- Parity: not run (the tester runs it).

## Questions for the user
none
