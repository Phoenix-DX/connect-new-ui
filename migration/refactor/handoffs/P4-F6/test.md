# Test report: P4-F6

## Result

Status: pass. All gate checks and review items hold. Note for the master: the fix also re-recorded the self reference
of EventDetail (from 3b25ddd). That is a reference change (decisions Q13/Q14), not a threshold or mask change.

## Commands run

- Server check: http://localhost:5174/UBTConnect/HomeFeed gives 200; the vite cwd is this repo's `app/`.
- `npm --prefix app run ci`: exit 0 (344 test files, 1609 tests passed, build ok).
- `parity_check.cjs --self-test`: exit 0 (buildDom and preloadFonts).
- `refactor_parity.py --level strict --all --ref both --app http://localhost:5174 --report app/docs/refactor/reports/P4-F6.md`:
  exit 0; outsystems 64/64 clean, self 64/64 clean; no retry line.
- 3 runs of `--routes EventDetail --ref self`: 3 of 3 PASS, no retry (reports t1..t3.md in the scratchpad).

## Gate results

| Check | Result |
|---|---|
| ci | pass |
| lint:arch | pass (no app file changed; ci lint clean) |
| parity strict --all both | pass, 64/0 and 64/0 |
| EventDetail x3 | pass, 0 failures, no retry |
| bundle report | n/a (no app code change) |
| step "Check" (self-test, tool changes documented in README) | pass |

## Diff review

1. No change in openapi, mocks or `public/UBTConnect/css`: pass.
2. No deleted test file: pass.
3. Scope: only `parity_check.cjs`, `refactor_parity.py`, `migration/tools/README.md` (the other files are the master's): pass.
4. `@origin`: n/a.
5. `--preload-fonts` is off by default (read only when `o['preload-fonts']`); applied to both contexts (`ctx`, `expCtx`) through one loop. `route.py parity` is unchanged: pass.
6. `refactor_parity.py` passes `--preload-fonts` in `build_cmd` for every run: pass.
7. Manifest logic: `--source-commit` only with `--record-self` (argument error otherwise), checked by `git rev-parse --verify`. A full record writes the full data with an empty `rerecorded`; a partial record keeps the data and adds or replaces one entry per route. `manifest.json` has the corrected commit, a `commitNote` and one EventDetail entry; no secret: pass.
8. No app code, CSS, mocks, openapi change; no looser threshold or mask: pass.
9. README text matches the code (option row, Fonts, manifest, worktree procedure): pass.
10. No secret in the diff: pass.

## Questions for the user

None.
