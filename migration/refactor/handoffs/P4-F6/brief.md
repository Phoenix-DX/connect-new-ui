# Brief: P4-F6 (the EventDetail/default pixel flake)

Not a catalog step: the master wrote this brief by hand (follow-up F6 in `migration/refactor/followups.md`). Do not run
`rf.py start`, `stage` or `done`.

| Field | Value |
|---|---|
| Kind | fix (test tooling) |
| Parity level | strict, route EventDetail (both references), 10 runs; then `--all` once |
| Developer model | opus |
| Depends on | P4-F4 |
| Handoff folder | `migration/refactor/handoffs/P4-F6/` |

## Why

Strict self parity of EventDetail/default fails now and then with "pixel 1" and no code change: once in the P3-4 full
run, 2 of 5 reruns in P4-2, 1 of 2 reruns in P4-4. The OutSystems reference never fails there. In Phase 6, 3 to 4 steps
run parity in parallel, and a flake would start fix loops for nothing.

Evidence (`migration/refactor-parity/last/self/EventDetail/default.json` and `.diff.png`): 256 of 329,160 pixels differ
(0.08 percent, limit 0.20 percent), but the worst 40 px tile has 7.2 percent (limit 3.0 percent). Hotspots at y 680 to
720, x 80 to 200: the text of the "View Guests" button. The expected and build images look the same at 2x, so it is
sub-pixel text rendering.

## Do

1. Find the cause. Look at the "View Guests" button in the EventDetail page (component, CSS classes, any transition,
   animation, focus or hover state, late layout shift, web font) and at how `parity_check.cjs`
   (`.claude/skills/outsystems-screen-spec/scripts/`) and `migration/tools/refactor_parity.py` wait before the
   screenshot (fonts, network idle, animations). Run `--routes EventDetail --ref self` 10 times and count the failures
   before you change anything.
2. Fix the cause with the smallest change. Allowed: the capture or compare step of the parity tools (for example wait
   for `document.fonts.ready`, or turn off CSS transitions and animations before the screenshot, the same for both
   sides), or the app code of EventDetail when the cause is there and the fix does not change the final render.
   Not allowed: `public/UBTConnect/css/**`, `src/mocks/**` fixtures, `src/api/openapi.yaml`, files under
   `migration/refactor-reference/`, a looser threshold or a mask for this state only.
3. Prove it: 10 runs of EventDetail after the fix with 0 failures, then one `--all --ref both` run with 64/0 on both
   references. When a tool change affects every route, say so and show the full run.
4. When no cause is found in reasonable time, stop and report the evidence; do not add a mask.

## Checks

- Node 24: `export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH`.
- Dev server of this repo: http://localhost:5174 (`--app http://localhost:5174`). Port 5173 is another clone: never use
  it, never stop it.
- Tool tests: `node --test` on the changed `.cjs` tests; `python3 -m pytest` or the tool's own test for
  `refactor_parity.py` when you change it; `npm --prefix app run ci` when app code changes.
- Document a tool change in `migration/tools/README.md` (and the skill doc, when the skill script changes).

## Report

Write `dev.md` in this folder: summary, the cause with evidence, files changed, the run counts before and after.
