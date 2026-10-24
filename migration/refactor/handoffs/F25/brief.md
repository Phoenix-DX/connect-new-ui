# Brief · F25 · Port the OutSystems "navigating away" guard into navigationGate

Fix step outside `steps.json` (no `rf.py` state). Decision: user, 2026-10-24 ("ok tôi duyệt hết"), option A of
`migration/refactor/followups.md` row F25. Advisors: Opus and Fable both chose A (confidence medium).

| Field | Value |
|---|---|
| Kind | behavior fix (approved by the user; rule 4 does not block it) |
| Parity level | visual, all routes (platform change) |
| Developer model | opus |
| Handoff folder | `migration/refactor/handoffs/F25/` |

## Read

- `facts.md` in this folder: the OutSystems logic (read through the Service Studio MCP on DEV; same as the TST code)
  and the 4 options. Option A is decided.
- `migration/screens/BookmarksByGroup/analysis/sources/pretty/NavigationHandler.controller.js` lines 800-945
  (TST compiled code: `navigatingAwayFromScreen`, `screenMutationObserver`, `Navigation.onBeforeNavigate`).
- `app/src/platform/navigation/navigationGate.ts`, `backQueue.ts`, `historyStack.ts`, `screenTransition.ts`,
  `osNavigate.ts` (`useNavigateBack`), and where `shouldBlockNavigation` is called (the NavigationHost blocker).
- `app/src/pages/HostSurvey/hooks/useHostSurvey.ts` (`onBackNavigation`) and `HostSurveyPage.tsx`.

## Change

1. In `shouldBlockNavigation`, port NH:904-916: block a history (POP) navigation while the app navigates away from
   the current screen (the screen element being left is still in the document) or while there is no active screen.
   Keep a reference to the element of the screen being left when a navigation is allowed, and clear it when that
   element leaves the document (OutSystems: `parentNode` + MutationObserver; `isConnected` is acceptable). Do not use
   a "transition ended" event or a timer as the only release: if the guard does not clear, every later back fails.
2. Also block a POP that arrives while the gate itself is still running (re-entry). With the memory router used in
   tests, `navigate(-1)` inside a back handler re-enters the gate synchronously before the flag above is set. In a
   browser this changes nothing.
3. Make sure a blocked POP (React Router restores the URL) does not re-enter the back queue, the view cache
   (`saveView`/`enterView`) or `dx-navigation`.
4. Do not change HostSurvey: on Unable to Host it triggers `NavigateTo_Back` without `preventDefault`, as OutSystems.
5. Keep the `@origin`/NH line references in comments (same style as the file).

Edge cases to check and cover: a lazy route still loading (no active screen yet; do not block the first screen
forever), a route that keeps its DOM node when only its parameters change, `prefers-reduced-motion` (no transition),
the initial entry, `allowUpcomingNavigation` (skip events), and replace navigations.

## Tests

- Unit (`navigationGate` and/or the NavigationHost tests): a back handler that calls `navigateBack()` without
  `preventDefault` gives exactly one back and no RangeError; a POP during "navigating away" is blocked; the guard
  clears when the old screen leaves the document, so the next back works.
- HostSurvey page test: stack Events → EventDetail (or the test's usual parent) → HostSurvey (Unable to Host); device
  back → one screen back, no RangeError. Same with a confirmed survey: one normal back.
- Browser check on the preview build (Playwright, `vite preview` only, see the worktree rules): from a 2-screen
  stack, HostSurvey Unable to Host, browser back once → previous screen and URL; wait, back again → normal back. With
  reduced motion too. Add it as an e2e spec when the e2e setup can reach HostSurvey with mock data; otherwise keep the
  script in the handoff folder and report the result in dev.md.
- Update existing tests that asserted the recursion or the old behavior; say which ones in dev.md.

## Gate commands for the tester

```
npm --prefix app run ci
npm --prefix app run lint:arch   # no new warning
python3 migration/tools/refactor/arch_baseline.py check   # 0 new
python3 migration/tools/refactor_parity.py --level visual --all --ref both --app http://localhost:5174 --report migration/refactor/handoffs/F25/parity.md
npm --prefix app run build && node app/build/bundle-report.mjs   # limits: plan v2 section 7 and W21 (+0.3 kB per step)
npm --prefix app run e2e:pwa
```

## Not in this step

`migration/refactor/followups.md`, CHANGELOG and other docs: the master and the documenter do them after the test.
