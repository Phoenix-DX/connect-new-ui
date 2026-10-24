## Result
status: pass
summary: ViewDocuments is a page now. The block ScreenBlock_ViewDocuments is split into `hooks/useViewDocuments` (useFlowState with `beforePaint: true` per W28, W23 guards, the pure `viewDocumentsState`) and the props-only `components/ViewDocumentsView`. The page reads `inputs.ts` and the flag, and calls the hook. The domain `api/event` is used directly, and `api.ts`, `types.ts` and `components/actions.ts` are deleted. A temporary old-vs-new probe (now deleted) gave identical results in 7 scenarios (44 observations). Typecheck, ESLint, Prettier and the route tests pass, and arch_baseline exits 0.

## Files changed
app/src/pages/ViewDocuments/ViewDocumentsPage.tsx (changed: the page reads inputs and the flag, calls useViewDocuments, and renders ViewDocumentsView + CommonUiLayout; useFlagOn → useFlag)
app/src/pages/ViewDocuments/inputs.ts (added: ViewDocumentsInputs, readViewDocumentsInputs)
app/src/pages/ViewDocuments/mocks.ts (changed: the wire type is local, from the contract; the deleted types.ts held it before)
app/src/pages/ViewDocuments/ViewDocuments.test.tsx (added: page test with MSW)
app/src/pages/ViewDocuments/hooks/useViewDocuments.ts (added: OnReady, OnClick_Document, Action_OpenDoc, HandleDownload events, OnHandle_ContactHelpdesk of the block and of the screen)
app/src/pages/ViewDocuments/hooks/useViewDocuments.test.tsx (added: includes the 2 W23 unmount tests)
app/src/pages/ViewDocuments/hooks/viewDocumentsState.ts (added: state, patch reducer, call inputs, withDocumentViewed, getContactHelpdeskSubject_Event)
app/src/pages/ViewDocuments/hooks/viewDocumentsState.test.ts (added)
app/src/pages/ViewDocuments/components/ScreenBlock_ViewDocuments.tsx → app/src/pages/ViewDocuments/components/ViewDocumentsView.tsx (moved and rewritten as a props-only view; same JSX)
app/src/pages/ViewDocuments/components/ViewDocumentsView.test.tsx (added)
app/src/pages/ViewDocuments/components/LoadingSpinner.tsx (changed: `// @os-block` → `@origin` JSDoc; compiled-line references removed from its comments; code unchanged)
app/src/pages/ViewDocuments/api.ts (deleted)
app/src/pages/ViewDocuments/types.ts (deleted)
app/src/pages/ViewDocuments/components/actions.ts (deleted: getContactHelpdeskSubject_Event moved to hooks/viewDocumentsState.ts)
migration/refactor/handoffs/P6-G6-B-ViewDocuments/dev.md (added)

## Commands run
All commands ran in the worktree wt-ViewDocuments, with Node 24.
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages/ViewDocuments → 4 files, 35 tests passed
cd app && npx vitest run src/pages/ViewDocuments src/mocks/handlers.test.ts src/api/event src/platform/navigation/flowState.test.tsx src/pages/EventDetail → 9 files, 202 tests passed
cd app && npx eslint src/pages/ViewDocuments → exit 0, no warning
cd app && npx prettier --check src/pages/ViewDocuments → all files formatted
cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err → 189 warnings, 0 errors (the same count as before the change). ViewDocuments has 2 rule-9 warnings: mocks.ts → legacy/os/os-wire (present before) and hooks/useViewDocuments.ts → legacy/os/exceptions (moved from the old block file, see Deviations)
python3 migration/tools/refactor/arch_baseline.py check → exit 0 (75 warnings, 75 baseline rows, 0 new, 0 gone)
cd app && npx knip → the route has no unused file or export. It has 3 unused exported types: LoadingSpinnerProps (present before), ViewDocumentsFlags and ViewDocumentsFlows (the same style as EmailContactFlags)
Temporary probe (app/src/pages/ViewDocuments/zzProbe.test.tsx, deleted) on the old and the new code → IDENTICAL in 7 scenarios and 44 observations. The scenarios were: first frame after navigation (skeleton), loaded DOM, calls and request body, document click (window.open and the viewed class), double click, footer navigation and back navigation (view cache restore without a new call), each without and with StrictMode; no Orbit access (HomeFeed and the message after 500 ms); an event without documents; mock=error (skeleton kept, flow handler message); mock=empty; unmount while the call is pending
npm --prefix app run build && node app/build/bundle-report.mjs → exit 0. HomeFeed 751.62 kB, 244.47 kB gzip; Login 601.56 kB, 184.49 kB gzip
W21 base: the same tree with the index version of pages/ViewDocuments, built in a scratch copy → HomeFeed 751.61 kB, 244.44 kB gzip; Login 601.56 kB, 184.47 kB gzip. Change: +3 bytes raw in the entry chunk only. The route table of the entry now preloads one more chunk for ViewDocuments, `flowState` (useFlowState), as `,61`. Gzip change: HomeFeed +0.03 kB, Login +0.02 kB. All other chunks have the same byte size except ViewDocumentsPage (7005 → 7531 bytes) and handlers (+6 bytes, the ACTION const in mocks.ts)

## Deviations from the brief
1. Branch: I worked in the prefetch worktree on the branch `rf/prefetch-P6-G6-B-ViewDocuments-f29b7bd0`, as the master instructed, not on `refactor/architecture`. I moved and deleted files with plain `mv` and `rm`, and I did no git staging.
2. One hook holds the block flows and the screen action OnHandle_ContactHelpdesk (the flag check and the navigation), as useEmailContact does. The page reads the flag (`useFlag('mobileOrbitAccess')`) and passes it as a `flags` argument, so the page has no logic.
3. The client action getContactHelpdeskSubject_Event moved from components/actions.ts into the pure file hooks/viewDocumentsState.ts (page-template rule). EventDetail, HelpersDetail and QRCodeGenerate still have their own copies (duplicates from before this step, for step C and jscpd). I did not merge them, because the other pages are changed in parallel.
4. Rule-9 depcruise warning: `isUserException` comes only from `@/legacy/os/exceptions`, and `platform/feedback/flowErrors` does not export it. The warning moved from the old block file to hooks/useViewDocuments.ts, and the count is unchanged (189). Other hooks have the same warning (useSearch, useCountryList). To export `isUserException` from flowErrors would change a platform file outside the route, while the other worktrees run in parallel. `raiseToFlowHandler` now comes from `@/platform/feedback/flowErrors`.
5. Restore edge case: the old block fetched again when the view was restored but had no saved 'Model' entry. useFlowState cannot tell that case apart, so the new hook skips the call on every restore. The view cache always saves the state, because the state registers at mount, before any navigation away. So the behavior does not change in practice: the probe's back-navigation scenario is identical.
6. W21: the first load grows by 3 bytes raw (gzip: HomeFeed +0.03 kB, Login +0.02 kB). The cause is the flowState chunk in the entry's preload list for ViewDocuments, which the page template requires. This is far under the W21 tripwire (+0.3 kB per step). The numbers are under "Commands run".
7. I did not update the documents; the documenter does that. Needed updates: move-map.csv rows 29 and 336 (status `moved`); CHANGELOG; the `event/` paragraph of app/src/api/README.md (ViewDocuments no longer has the re-export files `api.ts` and `types.ts`); app/docs/refactor/calls-by-domain.md row `screens/ViewDocuments/api.ts` (the call is now in `pages/ViewDocuments/hooks/useViewDocuments.ts` through `fetchEventDocuments`). I did not edit move-map.csv, because rows next to row 29 can belong to other G6 routes that change in parallel worktrees.
8. No browser check with vite preview: the probe compares the full DOM (body innerHTML, with the portal) of the old and new code in every scenario, and the tester runs the visual parity.

## Questions for the user
none
