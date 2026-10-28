# Item 5: the Tooltip and the MultiResolutionImageLoader: build note (2026-10-28)

- Design: `../review/item5-solution.md` §1-8, decisions §9 (user, 2026-10-28). Facts T1-T5, L1-L3: `../review/item5-tooltip-loader.md`.
- `W<n>` = character offset in `migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js`.
- The paths below are relative to `app/` unless they start with `migration/`.
- Nothing is committed. No parity sweep and no `npm run ci` were run (the orchestrator runs them).

## Files

Added (`src/components/ui/Tooltip/`, `@origin` and `@os-block OutSystemsUI_2_23.Content.Tooltip`):

- `Tooltip.tsx`: the markup of T3, the open state, the handle `open()` and `close()` (`TooltipHandle`), B1-B15.
- `balloonPosition.ts`: `computeBalloonPosition`, the offset, arrow and flip middlewares as a pure function (O1 a).
- `Tooltip.test.tsx`, `balloonPosition.test.ts`, `Tooltip.stories.tsx` (`Closed`, `Open`), `README.md`, `index.ts`.

Added (`src/components/ui/MultiResolutionImageLoader/`, `@origin` and `@os-block Connect2_LegacyShared.Widgets.MultiResolutionImageLoader`):

- `MultiResolutionImageLoader.tsx`: props `id`, `loading`, `imagesToLoad`; one effect ports InitializeJS (R1-R7, C a).
- `MultiResolutionImageLoader.test.tsx`, `.stories.tsx` (`Loading`, `Loaded`), `README.md`, `index.ts`.
- `src/pages/MilestoneDetail/components/PhotoLazyLoaded.test.tsx` (new render test).

Changed:

- `src/pages/HostSurvey/components/HostSurvey_AccommodationItem.tsx`: the `Tooltip` replaces the stand-in. The state
  `tooltipOpen` is gone. DelayTootlip keeps its 500 ms and calls `open()` or `close()` through `tooltipRef`. The room
  name change calls `close()`. OnDestroy keeps `clearTimeout`.
- `src/pages/MilestoneDetail/components/PhotoLazyLoaded.tsx`: the shared loader replaces the inline copy. The state
  `loaded` and the `onLoad` prop are gone.
- `src/pages/HostSurvey/components/Card_MemberInformation_Survey.tsx`: the two images are now in the loader (L3).
- Tests: `HostSurvey_AccommodationItem.test.tsx` (+1, fake timers), `HostSurvey_HelperPills.test.tsx` (+1, the card).
- Docs: `src/components/ui/README.md` (Tooltip in the OSUI group; the count 89 → 93, see Q3);
  `docs/guides/shared-code.md` (Floating UI is not vendored, O1 a).

## Tests (written first)

The three component test files failed first (the modules did not exist). The AccommodationItem and the card tests
failed on their assertions. The PhotoLazyLoaded test passed on the old inline copy too: the DOM is the same (G3).

| File | Tests | Covers |
|---|---|---|
| `Tooltip.test.tsx` | 15 | markup and ids (2.3); B1, B2, B3, B4, B5, B6, B7, B8, B9, B10, B11, B12, B14 |
| `balloonPosition.test.ts` | 7 | top, flip to bottom, bestFit, cross-axis overflow, scroll, right, arrow clamp (B12, B13) |
| `MultiResolutionImageLoader.test.tsx` | 7 | markup; R2-R6; the error path with ImageLoadErrorHandler (3.5); unmount |
| `PhotoLazyLoaded.test.tsx` | 1 | `-loading` at mount, `-loaded` after the photo load, ImageClicked |
| `HostSurvey_HelperPills.test.tsx` | +1 | the card: User image while loading, then the photo |
| `HostSurvey_AccommodationItem.test.tsx` | +1 | same name → open after 500 ms; typing closes |

`img.complete` is stubbed with `Object.defineProperty` on the prototype and restored (O8 a).

## Visible behaviour changes

| # | Change |
|---|---|
| G1a | The closed balloon and the arrow are in the DOM. The icon container is focusable (`role=button`, `tabindex=0`). |
| G1b | The open balloon has the OSUI classes, so it gets the dark style, the arrow and the position. |
| G1c | A second click on the icon keeps the tooltip open (before: it closed). |
| G1d | A body click, Esc and Tab close the tooltip. A blur closes it only in one case (see D1). |
| G1e | A focus on the icon opens the tooltip. |
| G1h | The balloon is `fixed` at `--osui-floating-position-x/y`, with the class `top` (or `bottom` after a flip). |
| G2 | The helper card shows the User image until the photo loads, then the photo only (before: both images). |
| G3 | PhotoLazyLoaded: no change. |

## Differences from the design text (TST code wins)

| # | Design text | Built, with evidence |
|---|---|---|
| D1 | B3: blur closes unless the focus is inside this tooltip. | `_onBlur` (W648757) closes only when the focus is inside another `.osui-tooltip` with no `[data-allow-event-propagation]`. Else it listens to the blur of the focused element and checks again. A blur to the body keeps it open. See Q1. |
| D2 | 2.3: the placement class and the arrow style are there only while open. | `unsetFloatingPosition` (W1281400) resets only x and y (to `0`, after 50 ms). The class and the arrow style stay (W1279300). See Q2. |
| D3 | B8: the body listener runs while open. | It starts one tick after the open (AsyncInvocation of `_setEventListeners`, W114773). |
| D4 | Props: `trigger?: 'OnClick' \| 'OnHover'`, default OnHover. | `trigger: 'OnClick'`, required. The hover path is out of scope (§2.4). A default of OnHover would be a silent unported path. |
| D5 | B5, B7: OnToggle(true) and OnToggle(false). | Once, at once. The provider raises it a tick later (W185300) and twice on a close by the API, the keyboard or the blur (`_triggerClose` W655010). The app has no handler (T1). |
| D6 | 2.3 markup: `data-container` only on the root. | Also on the balloon wrapper and the arrow: the three are `OSWidgets.Container` (Tooltip.mvc.js:181-247). The placeholders have none. |
| D7 | B12: re-run on scroll and resize. | Built as written (a capture `scroll` listener and `resize` on `window`). The Floating UI autoUpdate also uses a ResizeObserver; not ported. |

The loader keeps the TST rules. One guard is added: TST reads the last complete image without a check
(MRIL.mvc.js:268). A browser raises `load` only on a complete image, so the guard changes nothing there. Without the
guard, a test `load` on a jsdom image throws.

## Not built, and why

- Out of scope (§2.4): the hover path, the close when another balloon opens (O5 a) and the event Initialized. Also
  out of scope: the `auto` placement, the alignments and the close on a window resize.
- `docs/reference/shared-blocks.md`: no change. Both rows already say "yes". `docs_gen.py` output differs from the
  committed page only in a hand-edited intro line, so I did not regenerate it.
- The B2 note (decisions 2 and 3) and `migration/clarify/builds/README.md`: left to the orchestrator, as in item 3.
- The context note and the parity sweep: the orchestrator does them (§7.1 step 6).

## Questions

1. Q1 (D1): the TST blur rule is ported, not the design summary. Do you keep it? Options: a) keep TST; b) close on
   any blur outside the tooltip. Recommendation: a.
2. Q2 (D2): the placement class and the arrow style stay after a close, as on TST. Options: a) keep; b) remove on
   close. Recommendation: a.
3. Q3: `components/ui/README.md` said 89 folders, but HEAD had 91. With this change there are 93. I wrote 93.
   Confirm, or name the two folders that do not count.
4. Q4 (parity): the card DOM changes (`OSBlockWidget` loader block, Root and two slots in place of a bare div). If a
   HostSurvey capture shows a helper card, the sweep sees this change. TST has the loader block (L3).

## Checks (from `app/`)

| Command | Result |
|---|---|
| `npx tsc --noEmit` | pass, 0 errors |
| `npx eslint <16 changed files>` | pass, 0 problems (one unneeded type assertion fixed) |
| `npx prettier --check <changed files and docs>` | pass (after `prettier --write` on 2 tests and 3 Markdown files) |
| `npx vitest run src/components/ui src/pages/HostSurvey src/pages/MilestoneDetail` | 135 files, 768 tests pass |
| `npx vitest run` (all) | 686 files, 4437 tests pass (before: 4405); **Errors: 0** (no "Errors" line) |
| `npm run arch` | pass, no new violation (144 known) |
| `npm run unused` | pass: 1089 rows, 0 new, 0 stale (the export of `BalloonPosition` was removed) |
| `npm run dup` | pass, 0.43 % (35 clones, none in the changed files) |

The full run prints one jsdom line on stderr: "Not implemented: navigation to another Document". It is not an
error, and the changed tests do not navigate.

## Orchestrator checks (2026-10-28)

- Review of the diff against the TST runtime. The blur rule (D1, `_onBlur` W648757) and the kept placement class
  (D2, `unsetFloatingPosition`) are as on TST. The body click of the Balloon (W104610) also skips a balloon that the
  API opened (`_isOpenedByApi`). The provider resets the flag one tick after the open (W116913, W656411), before the
  body listener starts, so the port needs no flag.
- Q3: `components/ui/` has 96 folders; without `legacy/`, `lib/` and `os/` that is 93. The README count is correct.
- `npm run ci` passed: 686 files, 4437 tests, no "Errors" line, build OK, 0 new unused exports.
- Parity sweep of the 64 routes on port 5174 (dev server of this repo): 64 of 64 clean. No HostSurvey capture
  shows a helper card, so the new loader DOM of the card (Q4) is not in a captured state.
- Seen, not changed: `components/orbit/MemberInformationCard` (Card_MemberInformation) has no loader. TST has none
  there either: the live survey has only two users of the loader (L2).
