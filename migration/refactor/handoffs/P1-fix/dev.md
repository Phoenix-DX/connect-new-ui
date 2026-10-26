# Dev report: P1-fix

Status: pass for Menu, Profile, CountryDetails; question for LDM_MyEvents_V2 (reference artifact, see below).

## Summary

- Lead confirmed. At 3b25ddd one glob over `../screens`, `../shell`, `../shared` returned the modules in path order
  (screens < shared < shell), so `shell/mocks.ts` (app-start mocks) was last. After P1-2 the pattern is `../platform`,
  which sorts before `screens`, so the app-start mocks came first and won in MSW.
- Fix: `app/src/mocks/handlers.ts` now uses one glob per folder and joins them with `collectHandlers(screens, shared, platform)`.
  The comment explains why the order matters. New test `handlers.test.ts` checks the group order and that all
  `platform/bootstrap` handlers come after every screens/shared handler.
- CountryDetails/default: timing flake. It failed in the run of the brief and in 1 of my 3 runs (run 2); runs 1 and 3 were clean,
  and the report said "Passed on the second try". No code cause.
- LDM_MyEvents_V2/default: stable (3 of 3 runs, style 16), but not a code regression. All 16 diffs have one detail:
  `background-image url("http://localhost:5175/mock-images/placeholder-square.svg") -> url("http://localhost:5174/...")`.
  The self reference was recorded with the app on port 5175 (`migration/refactor-reference/manifest.json` line 4,
  and `LDM_MyEvents_V2/default/tree.json`), and the computed style holds the absolute URL with the origin. It fails on any server
  other than 5175. Pixel diff is 0 and calls match.

## Cause per route

| Route | Cause |
| --- | --- |
| Menu | handler order (shared bootstrap mocks before screen mocks) |
| Profile | handler order (same) |
| CountryDetails | timing flake (first try only) |
| LDM_MyEvents_V2 | origin of the reference (5175) inside an absolute `background-image` URL; not a code change |

## Files changed

- `app/src/mocks/handlers.ts` (changed)
- `app/src/mocks/handlers.test.ts` (added)
- Not touched: `migration/refactor-reference/`, fixtures, CSS, openapi.yaml.

## Commands

- `npm --prefix app run ci`: pass (typecheck, lint, format, tests, build). A lint warning in `components/ui/os/OSPopup/usePopupWidget.ts` (rule 4) existed before and is not from this change.
- `python3 migration/tools/refactor_parity.py --level strict --routes Menu Profile CountryDetails LDM_MyEvents_V2 --ref both --app http://localhost:5174`, 3 runs:
  - outsystems: 4/4 clean in all runs (Menu and Profile now OK).
  - self: Menu OK, Profile OK; CountryDetails OK in runs 1 and 3, DIFF in run 2; LDM_MyEvents_V2/default DIFF style 16 in all runs.

## Questions for the user / master

- LDM_MyEvents_V2 needs either a re-record of that reference from port 5174, or a normalisation of the origin in the style
  comparison of `refactor_parity.py`. I did not touch either (not allowed by the brief). Also check other references for
  `localhost:5175` (only this one appeared in the 4 routes I ran).

## Loop 1: origin normalization (user decision, 2026-10-22)

- New `.claude/skills/outsystems-screen-spec/scripts/origin_normalize.cjs`: `normalizeOrigins()` replaces
  `http(s)://localhost:<port>` and `127.0.0.1:<port>` with `http://localhost:*` in any JSON value.
- `parity_check.cjs` (self-ref runs only): applies it to the reference tree, the live tree and both call lists before the
  style/attribute/call comparison. The outsystems runs are not changed. The reference is not re-recorded.
- Test: `.claude/skills/outsystems-screen-spec/scripts/origin_normalize.test.cjs` (3 tests, `node --test`).
- Docs: `migration/tools/README.md`, section "New options of parity_check.cjs".
- Files changed: the 3 scripts above and `migration/tools/README.md`.
- Results: 4 routes, `--ref both`: 4/4 clean on both sides. `--all --ref both --app http://localhost:5174`: outsystems 64/64,
  self 64/64, PASS (4.2 min). `npm --prefix app run ci`: pass (325 files, 1459 tests, build ok; the one lint warning is the
  existing rule-4 warning in usePopupWidget.ts).
