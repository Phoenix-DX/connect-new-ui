# P4-F6 developer report

## Result

Status: pass (loop 1: fix applied after decisions Q13 (b) and Q14 (b) in
`migration/refactor/auto-decisions-2026-10-22.md`)

- `parity_check.cjs` has a new option `--preload-fonts`, off by default, so `route.py parity` does not change. It adds
  an init script to both browser contexts (the app and the replayed capture). The script starts loading every
  `@font-face` font as soon as a stylesheet is loaded. `--self-test` now also checks the script.
- `refactor_parity.py` passes `--preload-fonts` on every run: record, outsystems and self.
- `refactor_parity.py` has a new option `--source-commit <rev>` for `--record-self`. It names the commit of the code
  that the app at `--app` serves. The default is HEAD of this tree.
- Manifest of the reference:
  - A record of all finished routes writes the full-record data with an empty `rerecorded` list.
  - A partial record keeps the full-record data. It adds or replaces one `rerecorded` entry per route: `route`,
    `states`, `errors`, `commit`, `at`, `app`.
  - I corrected the commit of the full record in `migration/refactor-reference/manifest.json` from 7b63979 to 3b25ddd
    and added a `commitNote`.
- New EventDetail record from the Phase 0 code:
  - A detached worktree at 3b25ddd in the scratchpad, with its own `npm ci`.
  - Its dev server on port 5175 (PID 53758): HTTP 200. Then three warm-up runs.
  - The record: `--record-self --routes EventDetail --source-commit 3b25ddd`.
  - Then I stopped that server by its PID and removed the worktree.
  - Only `EventDetail/default/screenshot.png` changed: 540 px with any change, all in the box 15,695 to 194,772
    (button text and card corners). The `tree.json` trees and the screenshots of `loading` and `offline` did not
    change. The calls differ only in their `t` time stamps; the distinct calls per phase are the same.
  - The Phase 0 record is the same image as the HEAD record of loop 0 (no pixel differs).
- Proof on HEAD (port 5174): 10 of 10 EventDetail self runs pass, with 0 retries and 0 changed pixels in all 3 states.
  `--all --ref both` gives outsystems 64/0 and self 64/0, with no retry.

## Cause and evidence

All runs use http://localhost:5174 (the vite process cwd is this repo's `app/`), unless the text names port 5175. Probe
outputs are in the scratchpad (see "Files changed").

1. The difference is always the same: 256 px, worst tile 7.2 percent, rows 704 to 715, x 111 to 193 (the button
   text). There is also a 1-unit change on the button's left border corners. The text centroid moves from x 152.44
   (the reference) to x 152.79. The page layout is the same in both renders: button box 85.203, 688.828,
   135.016 × 42.016; text box 111.203, 701.828; no scroll offset; no running animation or transition;
   `document.fonts.status` is `loaded`. A second screenshot 700 ms later is the same as the first, so a running
   animation does not cause it.
2. The render is fixed for each browser process. In one browser with a new context for each run, 0 of 12 runs failed.
   With a new browser for each run, as `parity_check.cjs` does, 3 of 12, 2 of 16 and 4 of 16 runs failed.
3. CDP `LayerTree` shows the button as its own layer (136 × 43). The legacy rule
   `:where(.backwards-compatibility) .btn { transform: translateZ(0) }` makes this layer. The final x of this layer
   gives the result of every probe run that logged layers (88 of 88): x 84 matches the old reference, x 85 gives the
   256 px difference. The layer history explains the two values:
   - The layer first appears at x 79, y 686, then moves to x 84, y 688 (same as the old reference).
   - The layer appears at once at x 85, y 688 (the 256 px difference).
4. A per-frame probe shows that the first position (button at x 79.875) is the layout before the `orbit-icon` font is
   loaded: `.orbit-card-icon-cont` is 33.88 px wide, and 39.20 px after the font loads. The font starts to load only
   when the first card with an icon renders (about 490 to 510 ms). This is about the same time as the card's first
   paint, so the result is a race.
5. With `--preload-fonts`, all fonts are loaded at about 150 ms. The layer appears at once at x 85 in 12 of 12 probe
   runs. Against the old reference, every run failed with exactly 256 px: 5 of 5 on HEAD and 3 of 3 on the Phase 0
   code (port 5175). Thus the old reference held the late-font render.
6. Tools that reset the viewport size, the page scale or the device scale factor before the screenshot do not change
   the layer (it stays at 84). Only `display: none` on `<html>` creates the layer again. That resets scroll positions
   and restarts animations, so I did not use it.
7. The OutSystems side does not fail because the exemption `CAPTURE-VIA-MASK-SHIFT-EVENTDETAIL-PIXELS` accepts up to
   6.99 percent changed pixels for EventDetail/default. The frozen report has 6.62 percent.

## Files changed

- `.claude/skills/outsystems-screen-spec/scripts/parity_check.cjs`:
  - option `--preload-fonts` (header doc and code);
  - function `preloadFonts` with a comment on the cause;
  - a `--self-test` check: with the script, an unused declared font starts to load; without it, the font stays
    `unloaded`.
- `migration/tools/refactor_parity.py`:
  - `--preload-fonts` in `build_cmd`;
  - option `--source-commit` (only with `--record-self`; checked with `git rev-parse --verify`);
  - the functions `source_commit` and `write_manifest`;
  - the module docstring.
- `migration/tools/README.md`:
  - the `--source-commit` row;
  - the "Fonts" and "Reference manifest" paragraphs;
  - the worktree record procedure;
  - `--preload-fonts` in the list of new `parity_check.cjs` options.

  `ste_lint.py`: no new errors (the 2 remaining errors were there before).
- `migration/refactor-reference/manifest.json` (git-ignored): commit corrected to 3b25ddd, `commitNote` added, and the
  `rerecorded` entry for EventDetail (3 states, 0 errors, commit 3b25ddd, 2026-10-23T09:14:11, app :5175).
- `migration/refactor-reference/EventDetail/{default,loading,offline}/{tree.json,screenshot.png}` (git-ignored):
  recorded again from 3b25ddd. Only `default/screenshot.png` has other pixels. The old files are saved in
  `<scratch>/EventDetail.before/` and `<scratch>/manifest.before.json`.

Not touched: app code, Profile test files, `public/UBTConnect/css/**`, `src/mocks/**`, `openapi.yaml`.

Scratch files (`<scratch>` =
`/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/b1c0f7f3-a5be-42a8-b170-074abce216da/scratchpad/f6`):

- Loop 0 evidence:
  - `loop.sh`, and the `before/` runs;
  - `probe.cjs`, `cmp.py` and their outputs: `p1` to `p5`, `x-viewport`, `x-pagescale`, `x-dsf`, `x-display`, `x-pf`;
  - the prototype: `sk/`, `ref/`, `rp_proto.py`, `parity_check.preload-fonts.diff`;
  - the prototype reports: `proto-oldref/`, `after/`, `proto-all.md`.
- Loop 1:
  - `test_manifest.py` (a check of `write_manifest` and `source_commit`);
  - `vite-5175.log`, `warm5175-1..3.md`;
  - `final/run1..10.md`, `final-all.md`, `final-all.log`.
- The worktree `<scratch>/../ref-3b25ddd` is removed. `git worktree list` shows only the main tree.

## Commands run

Loop 0: see the scratch files above (10 baseline runs, probes, prototype runs).

Loop 1:

- `node .claude/skills/outsystems-screen-spec/scripts/parity_check.cjs --self-test`: ok (buildDom and preloadFonts).
- `node --test .claude/skills/outsystems-screen-spec/scripts/origin_normalize.test.cjs`: pass.
- `python3 -m py_compile migration/tools/refactor_parity.py`. The tool has no test suite. I checked the manifest logic
  with `python3 <scratch>/test_manifest.py`: full record, partial record keeps the data, replace per route, a new
  full record clears the list, `source_commit` of HEAD and 3b25ddd. I also checked the 2 argument errors
  (`--source-commit` without `--record-self`, an unknown rev).
- `python3 migration/tools/ste_lint.py migration/tools/README.md`.
- `git worktree add --detach <scratch>/../ref-3b25ddd 3b25ddd`, then `npm ci` in its `app/` (Node 24).
- `<worktree>/app/node_modules/.bin/vite --port 5175 --strictPort` in the background (PID 53758), then a wait for
  HTTP 200.
- `python3 migration/tools/refactor_parity.py --level strict --routes EventDetail --ref self --app
  http://localhost:5175`, 3 warm-up runs. Each gave the 256 px difference against the old reference.
- `python3 migration/tools/refactor_parity.py --record-self --routes EventDetail --source-commit 3b25ddd --app
  http://localhost:5175`: 3/3 recorded.
- `kill 53758` (after a check that it was the 5175 listener with the worktree as cwd), then
  `git worktree remove <scratch>/../ref-3b25ddd`. I did not touch ports 5173 and 5174.
- `python3 migration/tools/refactor_parity.py --level strict --routes EventDetail --ref self --app
  http://localhost:5174 --report <scratch>/final/run<N>.md`, 10 times.
- `python3 migration/tools/refactor_parity.py --level strict --all --ref both --app http://localhost:5174 --report
  <scratch>/final-all.md`.
- No typecheck, vitest or eslint: no app code changed.

## Run counts before and after

| Run | Setup | Result |
|---|---|---|
| Before | `--routes EventDetail --ref self`, 10 runs | 9 PASS, 1 FAIL (run 9: default, pixel 1, 256 px, both tries). Runs 4, 6, 8 and 10 passed only on the built-in second try. 6 of 15 tries of `default` differed; `loading` and `offline` always OK |
| Probe | New browser for each run, no fix | 9 of 44 runs had the 256 px render |
| Fix, old reference | `--preload-fonts`: 5 runs on HEAD, 3 runs on 3b25ddd | 8 FAIL, each exactly 256 px: the render is the same each time, and the old reference held the other render |
| After | HEAD (:5174), new reference from 3b25ddd, 10 runs | 10 PASS, 0 retries, diffPixels 0. In run 10, no pixel differs from the reference in any of the 3 states |
| After, all | HEAD `f526c98` with the tool changes, `--all --ref both`, 4 jobs | outsystems 64/0, self 64/0, 298 runs, no "second try" line, 4.3 min |

The tool change affects every route (every run now preloads fonts), so the full run above is the check. Only the
EventDetail/default self result changed, and it passes with the new record.

## Deviations

- `node_modules` of the worktree: `npm ci` (8 s), not a symlink. With a symlink, Vite would write its dependency
  cache into `app/node_modules/.vite` of this repo, which the running :5174 server uses.
- The manifest correction adds a `commitNote` field next to the corrected `commit`.

## Questions for the user

None.
