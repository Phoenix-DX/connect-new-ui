## Result
status: pass
summary: TermsAndPoliciesMenu is now a page plus a hook (`useTermsAndPoliciesMenu`). The page renders `DetailLayout` directly, not through the Layout_DetailPage adapter. The view-state variables, the policies result and OnClick_MenuOption are in the hook. `api.ts` (empty), `types.ts` and the re-export `components/actions.ts` are deleted. The OpenPolicy test moved next to its code. A temporary old-vs-new test (since deleted) found the same DOM, calls, clicks and back-restore. Typecheck, eslint, prettier, 28 tests and arch_baseline pass.

## Files changed
app/src/pages/TermsAndPoliciesMenu/TermsAndPoliciesMenuPage.tsx (rewritten: DetailLayout + useNavigateBack, calls the hook)
app/src/pages/TermsAndPoliciesMenu/hooks/useTermsAndPoliciesMenu.ts (new)
app/src/pages/TermsAndPoliciesMenu/hooks/useTermsAndPoliciesMenu.test.tsx (new)
app/src/pages/TermsAndPoliciesMenu/TermsAndPoliciesMenu.test.tsx (new, page test against the MSW mocks)
app/src/pages/TermsAndPoliciesMenu/components/staticEntities.ts -> app/src/pages/TermsAndPoliciesMenu/staticEntities.ts (git mv, unchanged)
app/src/pages/TermsAndPoliciesMenu/components/actions.test.ts -> app/src/shared/UBTConnect_Utils/lib/openPolicy.test.ts (git mv, unchanged: `./actions` now resolves to the real code)
app/src/pages/TermsAndPoliciesMenu/components/actions.ts (deleted: re-export of openPolicy and POLICY_NOT_FOUND)
app/src/pages/TermsAndPoliciesMenu/api.ts (deleted: `export {}` with a comment)
app/src/pages/TermsAndPoliciesMenu/types.ts (deleted: LocalCacheControl_Policies folded into the hook, with the domain type `Policies` of `@/api/app`; PolicyInformation had no reader)
migration/refactor/handoffs/P6-G1-B-TermsAndPoliciesMenu/dev.md (this report)

## Commands run
npm --prefix app run typecheck → exit 0
cd app && npx eslint src/pages/TermsAndPoliciesMenu src/shared/UBTConnect_Utils/lib/openPolicy.test.ts → exit 0, 0 warnings
cd app && npx prettier --check (same files) → exit 0
cd app && npx vitest run src/pages/TermsAndPoliciesMenu src/shared/UBTConnect_Utils/lib src/shared/UBTConnect_Utils/CacheControl_Policies src/components/menu/MenuList src/mocks/handlers.test.ts → exit 0, 8 files, 28 tests
python3 migration/tools/refactor/arch_baseline.py check → exit 0 (88 warnings, 88 baseline rows, 0 new, 0 gone)
npm --prefix app run lint:arch → 0 errors; no warning in src/pages/TermsAndPoliciesMenu or openPolicy.test.ts
temporary test (src/__tmp_parity/, deleted): old page (HEAD) vs new page in renderRoutes → same innerHTML while loading, after the policies came and after back-navigation restore; same calls (only CacheControl_Policies/DataActionGetCacheInfo); same window.open calls (terms and privacy URLs, `_blank`) and the same error feedback before fetch

## Deviations from the brief
- Work done in the prefetch worktree wt-TermsAndPoliciesMenu (branch rf/prefetch-P6-G1-B-TermsAndPoliciesMenu-43946ee, base 43946ee), as the master told me, not on refactor/architecture.
- Shape: page + hook. No container (one data source, no data hook, 2 handlers). No component of its own: the content is the shared MenuList inside SkeletonSection. No reducer file: the two view-state variables (`MenuOptionList`, `LocalCacheControl_Policies`) do not depend on each other, and they keep `useViewState` with the same names, so the back-navigation restore (P-BACK) does not change.
- The shared blocks (MenuList, CacheControl_Policies, SkeletonSection, CommonUiLayout, DetailLayout, shared lib actions) are imported and not changed.
- The test of the deleted re-export tests the shared `openPolicy`. It moved next to that code, as `shared/UBTConnect_Utils/lib/openPolicy.test.ts`, with its content unchanged. This adds a file under `shared/` but does not change shared code.
- Deletions were staged with `git rm`, and the new files with `git add -N` (intent to add, so that `git diff` shows them). Nothing is committed.
- For the documenter: the move-map row `src/screens/TermsAndPoliciesMenu/index.tsx` needs status `moved`, the shape and the notes above. `migration/knowledge/audit-a1-empty-handlers.md` still says "the route re-exports them" about openPolicy. That re-export is now deleted: the hook imports `@/shared/UBTConnect_Utils/lib/actions`.

## Questions for the user
none
