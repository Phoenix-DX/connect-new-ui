# Drift WP9: footer scroll-shadow timing (messages D1), build result (2026-10-29)

Class D. Row: `../review/drift-triage-messages.md` D1 (Notes default, pixel 1, 0.58 %).

## Result

- No app code change. The React code already has the TST timing. The cause of D1 is the mock latency of the parity
  run, not the scroll-shadow code.
- The triage text names the wrong function. Notes uses `MainLayoutFixedTitle` → `useMainFixedScrollEvents` →
  `setScrollShadow` (`app/src/lib/ubtConnectLibrary/actions.ts:711-734`). That function already runs its first
  evaluation with `setTimeout(…, 200)`, as TST `ScrollEvent.shadowScroll`
  (`migration/runtime-sources/UBTConnectLibrary.ScrollAnimations.js:187-190`). `initialize_SvgScroll`
  (`actions.ts:476-533`, first evaluation at the first frame) is used only by `HomeLayout`. Its TST source also runs
  the first evaluation at the first frame (`requestAnimationFrame(onScroll)`, live TST controller copy of 2026-10-29,
  `migration/screens/AssembleEvents/analysis/sources/raw/UBTConnectLibrary.controller.js:7471-7472`). Do not change it
  to 200 ms: that is not TST.
- Fix for D1: a capture-plan entry, the same as Notifications Q5 and HouseholdDetails F5. Not done here (the brief
  does not allow edits of `migration/capture-plan.json`). See question Q1.

## Browser proof (dev server 5174, cwd this repo; scratchpad probe, `?mock=empty`)

`--footer-shadow-scroll` on `.active-screen` (ms since navigation start):

| Latency | Layout mounts | Variable set | Value | Page at that time | End state (6 s) |
|---|---|---|---|---|---|
| 0 (parity default) | ~600 | ~774 | hidden | empty state, scrollHeight 844 = clientHeight | hidden |
| 250 | ~600 | ~788 | visible | 19 loading cards, scrollHeight 1166 | visible (empty state, 844) |
| 600 (app default) | ~600 | ~773 | visible | 19 loading cards, scrollHeight 1166 | visible (empty state, 844) |

So the variable is set ~200 ms after the layout mounts, not at the first frame. With latency 0 the data arrives
before the timer, so the page does not scroll and the shadow is hidden. With a latency of more than 200 ms the loading
cards still overflow at the timer, the shadow becomes visible and stays visible, because only a scroll evaluates it
again. This is the TST captured DOM (`--footer-shadow-scroll: visible`, Notes `analysis/dom/default.raw.html`).

Parity probe (`parity_check.cjs`, output in the scratchpad, not a counted report), Notes default at latency 600 and
250: the footer band is gone (pixels 0.58 % → 0.11 %). One pixel spot is left at both latencies and also at latency 0:
the pill row, x 320-360, y 120-160 (truncated fourth pill, worst tile 6.3 %, max 3.0 %). DOM, text and positions are
equal. This is a different difference, not D1.

## Files

- `app/src/lib/ubtConnectLibrary/actions.test.ts`: 3 tests for `setScrollShadow` (first evaluation at 200 ms and not
  at the first frame; no new evaluation when the page gets shorter without a scroll; debounced scroll; listener
  removed; `clearScrollTimeout` before 200 ms sets nothing; no layout → `{}`). They pass on the current code and
  stop a change to a first-frame evaluation. Appended with a shell heredoc; imports changed with Edit.
- No other file changed.

## Checks (from `app/`)

- `npx vitest run src/lib/ubtConnectLibrary src/components/layout src/containers/DetailLayout`: 28 files, 110 tests pass.
- `npx eslint`, `npx prettier --check` on the test file: pass.
- `npx tsc --noEmit`: errors only in `src/containers/EntityDetailsActions/*` (other package, work in progress).
- `npm run arch`: 1 error, `src/components/note/NotesSheet/NotesSheet.tsx → src/legacy/os/os-exceptions.ts`
  (rule-9, other package, H-Q1). `npm run dup`: no failure line.

## Parity (`route.py parity`, after the last change; differences per state)

| Route | State | Before | After |
|---|---|---|---|
| Notes | default / loading / offline | 1 (pixel) / 0 / 0 | 1 (pixel) / 0 / 0 |
| HomeFeed | default / offline | 22 / 3 | 22 / 3 |
| Notifications | default / offline | 54 / 2 | 54 / 2 |
| Bookmarks | all | 0 | 0 |
| Profile | default | 41 | 41 |
| MessageList | default / search | 48 / 20 | 48 / 20 |
| Menu | default | 13 | 13 |
| Services | all | 0 | 0 |
| Updates_SingleList | default | 538 | 538 |
| OneSchoolGlobalDetails | default / offline | 11 / 9 | 11 / 9 |
| HouseholdDetails | default | 17 | 17 |

All other states 0 before and after. No count rose. "Before" = reports of the drift sweep (2026-10-29 09:53-10:00).
Other packages of this wave own the remaining differences of these routes.

## What is left

- Notes default pixel 1: the footer band (D1, class D) until the capture-plan entry exists, then the pill-row spot
  (pixel only, class not set; needs a triage row).

## Questions

- **Q1 (decision): how to close D1.** Evidence: browser proof above; the same cause and fix are in the capture plan
  for Notifications (`latencies.default 600`, Q5) and HouseholdDetails (F5).
  (a) Add `"latencies": {"default": 600}` and a `_latenciesNote` to the Notes entry of `migration/capture-plan.json`
  (orchestrator or user edit), then run `route.py parity Notes`;
  (b) add a parity exemption for the footer band;
  (c) keep it as known drift.
  Recommendation: (a). It reproduces the TST state with the app's default latency and needs no exemption. Then triage
  the pill-row spot as a new row.
