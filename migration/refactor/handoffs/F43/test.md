# Test · F43

Status: pass (after re-test loop 1; see "Re-test (loop 1)")

## Failures
1. `npm --prefix app run ci` exit 1 at `format:check`: `[warn] src/lib/os-assets.manifest.json`. `app/.prettierignore` still lists
   `src/legacy/os/os-assets.manifest.json` (old path); the moved file is now formatted-checked. Fix: change that line to
   `src/lib/os-assets.manifest.json` (a config file the codemod did not rewrite). Nothing else in ci failed (gen:api, typecheck, lint 0 errors/73 warnings pass).
   Because ci stopped before test and build, I ran them separately (below), both pass.

## Commands run
- server check: 200 on /UBTConnect/HomeFeed; cwd = /Users/khaitruong/Projects/connect-new/app
- npm run ci: exit 1 (format:check, see above)
- npm run test (separately): 640 files, 3975 tests pass
- arch_baseline.py check: exit 0, 72 warnings, 0 new, 0 gone
- depcruise: 146 violations (0 errors, 146 warnings), matches dev.md (222 -> 146)
- rf.py diffcheck --move (works without step id): exit 0; renames 3; other file: move-map.csv only (3 rows, phase F43, as asked)
- Extra check: all non-import/non-comment changed lines in `git diff --cached -M -U0 -- app/src` = none; os-assets.ts differs only by the manifest import path (R093); wire and manifest R100
- parity visual --all --ref both --app http://localhost:5174: 64/64 clean outsystems, 64/64 clean self, PASS (report parity.md)
- vite build + bundle-report: HomeFeed 244.87 kB gzip (baseline 236.40, +3.6%), Login 184.92 (baseline 184.61, +0.2%); both within 5 percent

## Diff review
1. openapi.yaml, mocks fixtures, public css: no change. Pass.
2. No test file deleted. Pass.
3. Scope: only imports in app/src, move-map, handoff files. Pass.
4. @origin: no screen ported. Pass (n/a).
5. Move, no logic change: pass.
6. n/a.
7. No secret found in diff (grep). Pass.

## Notes
- Baseline.md HomeFeed gzip is 3.6% below current; not caused by this step (moved files are tiny).
- Old paths left for documenter (per dev.md): LazyImage/README.md:34, docs/guides/api-and-mocks.md:75.

## Re-test (loop 1)

Status: pass

- `npm --prefix app run ci`: exit 0 (format:check, gen:api, typecheck, lint, vitest 640 files / 3975 tests passed, build ok). No vitest timeout, so no rerun needed.
- `python3 migration/tools/refactor/arch_baseline.py check`: exit 0 (72 warnings, 72 baseline rows, 0 new, 0 gone).
- `git diff` (unstaged vs. my first run): only `app/.prettierignore` (path now `src/lib/os-assets.manifest.json`) and `app/src/components/ui/LazyImage/README.md` changed in app/; the rest are handoff/state/log/ledger files. No code, no CSS.
- Parity (64/64 against both references) stays valid: the loop-1 edits are a prettier ignore line and a README, so they cannot change rendered output or the bundle.
- Earlier failure (prettier on the moved manifest) is fixed.
