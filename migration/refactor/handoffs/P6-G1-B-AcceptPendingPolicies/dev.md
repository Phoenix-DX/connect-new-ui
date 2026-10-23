## Result
status: pass
summary: AcceptPendingPolicies is now a page. It has a screen hook, a block hook and two components. The route's `api.ts` and `types.ts` moved into a new domain `api/policy` (F10, W8). The work is in the prefetch worktree `wt-AcceptPendingPolicies` (branch `rf/prefetch-P6-G1-B-AcceptPendingPolicies`, base 4146e93), not in the main tree. Typecheck, eslint, prettier and 70 tests pass. A temporary test compared the old and new page and found the same DOM, calls and navigation.

## Files changed
Work location: the git worktree
`/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/a455dc5c-a016-4a58-96d4-12e4cae1e825/scratchpad/wt-AcceptPendingPolicies`.
The paths below are relative to the repository root.

Added (new domain `api/policy`):
app/src/api/policy/types.ts
app/src/api/policy/mapper.ts
app/src/api/policy/repository.ts
app/src/api/policy/keys.ts
app/src/api/policy/hooks.ts
app/src/api/policy/index.ts
app/src/api/policy/mapper.test.ts
app/src/api/policy/repository.test.ts
app/src/api/policy/hooks.test.tsx

Added (page):
app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts
app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts
app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.test.tsx
app/src/pages/AcceptPendingPolicies/components/PoliciesHeader/PoliciesHeader.tsx
app/src/pages/AcceptPendingPolicies/components/PoliciesHeader/PoliciesHeader.stories.tsx
app/src/pages/AcceptPendingPolicies/components/PoliciesHeader/PoliciesHeader.test.tsx
app/src/pages/AcceptPendingPolicies/components/PendingPoliciesForm/PendingPoliciesForm.stories.tsx
app/src/pages/AcceptPendingPolicies/components/PendingPoliciesForm/PendingPoliciesForm.test.tsx
app/src/pages/AcceptPendingPolicies/AcceptPendingPolicies.test.tsx
app/src/pages/AcceptPendingPolicies/actions.test.ts

Moved with `git mv`, then changed:
app/src/pages/AcceptPendingPolicies/components/Policy_Custom_AcceptPendingPolicies.tsx -> app/src/pages/AcceptPendingPolicies/components/PendingPoliciesForm/PendingPoliciesForm.tsx (view only, props only)
app/src/pages/AcceptPendingPolicies/components/actions.ts -> app/src/pages/AcceptPendingPolicies/actions.ts (it now has `DeviceInfo`; the local copy of `jSUtils_PageOpenInNewTab` is deleted)
app/src/pages/AcceptPendingPolicies/components/staticEntities.ts -> app/src/pages/AcceptPendingPolicies/staticEntities.ts (the copies of `UBT_FlexDirection.Column` and `UBT_Shadow.ExtraSmallTop` are deleted)

Changed:
app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx (calls the two hooks and composes the components)
app/src/pages/AcceptPendingPolicies/mocks.ts (import line only: the wire type is now local, made from the contract)
app/src/platform/feedback/flowErrors.ts (shared: adds the re-export `isCommunicationException` next to `raiseToFlowHandler`)
app/docs/refactor/move-map.csv (shared: 3 rows added at the end, for the block, `api.ts` and `types.ts`; status left empty for the documenter)

Deleted:
app/src/pages/AcceptPendingPolicies/api.ts (to app/src/api/policy/)
app/src/pages/AcceptPendingPolicies/types.ts (to app/src/api/policy/types.ts, actions.ts and mocks.ts)

## Commands run
All commands ran in the worktree's `app/` with Node 24.21.0.
npm run typecheck → exit 0
npx vitest run src/api/policy src/pages/AcceptPendingPolicies src/mocks/handlers.test.ts src/mocks/contract.test.ts src/platform/navigation/flowState.test.tsx src/containers/HouseholdDetails --maxWorkers=2 → exit 0, 13 files, 70 tests passed
npx eslint src/api/policy src/pages/AcceptPendingPolicies src/platform/feedback/flowErrors.ts → exit 0, no warning
npx prettier --check src/api/policy src/pages/AcceptPendingPolicies src/platform/feedback/flowErrors.ts → all formatted (prettier --write ran on PendingPoliciesForm.tsx and usePendingPoliciesForm.test.tsx)
npx depcruise src --config .dependency-cruiser.cjs --output-type err → exit 0, 0 errors, 181 warnings in the whole app. The route folder had 4 warnings and now has 1. The one left is the same import as before: AcceptPendingPoliciesPage.tsx → legacy/os/os-assets (osImage). The 3 warnings that are gone: types.ts and api.ts → os-wire (now in api/policy, which may import legacy/os), and the block → legacy/os/exceptions (now through platform/feedback/flowErrors). api/policy and flowErrors.ts have no warning.
Temporary old-vs-new comparison (vitest): the HEAD version of the route was copied to app/src/pages/ZzOldAcceptPendingPolicies/ and rendered next to the new page in renderRoutes, then the copy was deleted. The script and the test are kept in the scratchpad `tools/` folder. Result → 3 of 3 tests passed:
- Default flow: the same innerHTML in 7 snapshots (open, fetched, each checkbox, "I agree to all" twice, after Continue). The same calls: DataActionGetPendingPolicies twice (ContentBlockId "" then "b1-Main"), ActionAcceptPolicies, ActionGetUserInformation. The same window.open URL. The same return to the previous route. The same App_Policies_HasPolicyToAccept = false.
- Scenario `empty`: the same DOM. AcceptedAll fires after 5 s, then the page goes back.
- Scenario `error`: the same DOM and calls. The page stays on the route.

## Deviations from the brief
- Domain (F10, W8): the domain is a new `api/policy`, chosen by the data. The two calls read and write the ApplicationPolicies acceptance records (PolicyAcceptanceInformation, PolicyAcceptanceDeviceDetails), and no domain owned these records. `api/app` holds the app-start calls and keeps DataActionGetCacheInfo of CacheControl_Policies (the policy documents). That call has other readers: TermsAndPoliciesMenu, PINChange and the lock dialog. A later step can move it to `api/policy`. The move-map notes say this.
- `usePendingPoliciesQuery` keeps the options of the old block query: keepPreviousData, retry false and the library default cache times. It does not use the NO_CACHE pattern of the other domains, because NO_CACHE would change what the page shows on a second visit. This follows the precedent of `useCountryInfoQuery`. The query key changes from `['AcceptPendingPolicies','DataActionGetPendingPolicies',inputs]` to `['policy','pending',inputs]`. No other code reads that key.
- Shape: hook+component, with no container. The block has one data hook, so container criterion 2 is not met. The page calls `useAcceptPendingPolicies` (screen flows) and `usePendingPoliciesForm` (block flows) and passes props to `PoliciesHeader` and `PendingPoliciesForm`. The block flows now run in the page, not in a child component. The comparison above shows the same DOM, calls and order.
- Shared blocks that this route uses with other G1 routes (plan step B, item 3). This step moves none of them:
  - Layout_LoginFlow (→ components/layout/LoginLayout): also used by Login, PINChange and PINRegister.
  - CommonUI_InsideLayout (→ components/layout/CommonUiLayout): 54 routes.
  - BackNavigationHandler (→ platform/navigation): 64 routes.
  - The layout also renders LayoutRuntime_Top (P6-G1) and SVG_Background_LoginWrapper (P7).
  - The other shared blocks (CustomContainer, CustomText, Columns_Two, FixedFooter, Icon, UBTConnect_Utils Button, Separator) are P7 ui blocks.
  - No shared block is used only by this route.
- Shared files touched: platform/feedback/flowErrors.ts (one line) and the end of move-map.csv. The Login, Splash and Menu developers can touch the same places, so a merge can conflict there.
- Reuse: the route's copies of `jSUtils_PageOpenInNewTab`, `UBT_FlexDirection.Column` and `UBT_Shadow.ExtraSmallTop` were the same as the shared ones (shared/UBTJavaScriptUtils, shared/UBTConnectLibrary/lib). The page now imports the shared ones.
- `PoliciesHeader` takes `logoSrc` as a prop, so that only the page imports legacy/os.
- Inline compiled-line references were removed from the rewritten files (api.ts, the block, the page, the doc comments of actions.ts).
- New tests: the route had no test. Added: 3 domain test files, a hook test, 2 component tests with stories, a page test and an actions test.
- Process: I used an inline Python heredoc once to reorder the tests in my own new file usePendingPoliciesForm.test.tsx (rule 6: use Edit). All other edits used Edit or Write.
- `git add -N` on the route folder also staged the 2 deletions (api.ts, types.ts). `git mv` had already staged the 3 renames. No commit.
- Left to the documenter: the `api/policy/` paragraph in app/src/api/README.md, the status `moved` of the move-map rows (row 267 and the 3 new rows), and the CHANGELOG.
- Finding, not changed (no behavior change): when `.ubt-header-svg svg path` is missing, `getSVGMetric` returns HeightWithoutCurve = 0/0 = NaN, and DefineHeight then sets `--current-svg-height: NaNpx`. The comment says that the outputs keep their default 0. The behavior was the same before this step.

## Questions for the user
none
