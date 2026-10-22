# Brief: P1-fix (parity regressions of phase P1)

Not a catalog step: the master wrote this brief by hand (user, 2026-10-22: "okie cứ chạy 4 bước"). Do not run
`rf.py start`, `stage` or `done`.

## Why

The parity runs of P1-1 to P1-4 used a dev server on port 5173 that served another clone, so they tested the wrong
code. The self reference was recorded again from a worktree at 3b25ddd (the P0 tip, 149/149 states). A full run on
HEAD (7b63979, same app code as faf8682) against this repo's server on port 5174 fails:

| Route | State | outsystems | self |
| --- | --- | --- | --- |
| CountryDetails | default | OK | DIFF: structure 5, style 3, layout 2, position 2 |
| LDM_MyEvents_V2 | default | OK | DIFF: style 16 |
| Menu | default | DIFF | DIFF: the row "Request Photo Update" is missing; 1 extra call `ActionGetSignedImagesInBulk` |
| Profile | default | DIFF | DIFF: user name "Amanda Ward" (reference) shows as "Matías Vitale" |

Report: `app/docs/refactor/reports/P1-verify.md`. Per-state files: `migration/refactor-parity/last/<ref>/<Route>/`.

## Lead (master's hypothesis, verify it)

`app/src/mocks/handlers.ts` builds the MSW handlers with one `import.meta.glob` over three patterns and
`Object.values(...)`. At 3b25ddd the patterns were `../screens`, `../shell`, `../shared`; P1-2 changed `../shell` to
`../platform`. When the glob result is in path order, the shell handlers came last before (`screens` < `shared` <
`shell`) and come first now (`platform` < `screens`). MSW uses the first handler that matches, so the shared app-start
mocks now override the screen mocks (Profile user, Menu).

## Do

1. Confirm or reject the lead: compare the handler order at 3b25ddd (`git show 3b25ddd:<path>`) and at HEAD.
2. Fix the order so that the precedence equals 3b25ddd. Keep the change small and explicit (for example one glob per
   folder, concatenated in the old order, with a comment that says why the order matters). Add a unit test that fails
   when the order changes again.
3. Investigate CountryDetails/default and LDM_MyEvents_V2/default (self only). Run them 3 times. When the result
   changes between runs, it is a timing flake: say so with the evidence. When it is stable, find the cause in the P1
   diff (`git diff 3b25ddd..HEAD -- app/src`) and fix it.
4. Do not change files under `migration/refactor-reference/`, fixtures, CSS or `openapi.yaml`.

## Checks (run them yourself)

- `npm --prefix app run ci` (Node 24: `export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH`).
- `python3 migration/tools/refactor_parity.py --level strict --routes Menu Profile CountryDetails LDM_MyEvents_V2
  --ref both --app http://localhost:5174`.
- The dev server of this repo runs on http://localhost:5174. Port 5173 is another clone: never use it, never stop it.

## Report

Write `dev.md` in this folder: summary, files changed, commands run with results, the cause of each of the 4 routes.

## Decision (user, 2026-10-22 19:15)

LDM_MyEvents_V2: the self reference holds `http://localhost:5175/...` image URLs (recorded on port 5175). The user chose
"Bỏ origin khi so" (English: "ignore the origin when comparing"): change `migration/tools/refactor_parity.py` (or the
`parity_check.cjs` option it uses for self runs) so that the origin `http://localhost:<port>` (and `127.0.0.1`) in
absolute URLs is normalized on both sides before the style, attribute and call comparison. Do not re-record the
reference. Add a test for the normalization, document it in `migration/tools/README.md`, then run the 4 routes again
and `--all --ref both --app http://localhost:5174` once.
