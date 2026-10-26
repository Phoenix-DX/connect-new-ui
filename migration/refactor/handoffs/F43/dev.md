# Dev · F43

Status: pass

## Result
Moved with `migration/tools/refactor/move.ts` (git mv): `legacy/os/os-wire.ts`, `os-assets.ts`, `os-assets.manifest.json` -> `app/src/lib/`.
Codemod rewrote 62 + 46 + 1 imports (about 107 files). No other code change.
Depcruise (warnings 222 -> 146): rule 9 98 -> 34, rule 6 55 -> 50.
Quick checks: typecheck pass; vitest src/lib + LazyImage 14 files / 117 tests pass; eslint of changed files: 0 errors, 1 old warning (ImageLoadErrorHandler rule 4, not new).

## Files changed
- Moved: app/src/lib/os-wire.ts, app/src/lib/os-assets.ts, app/src/lib/os-assets.manifest.json
- Import lines rewritten in about 107 files under app/src (see `git diff --stat`)
- app/docs/refactor/move-map.csv: 3 rows, phase F43

## Old paths left for the documenter
- app/src/components/ui/LazyImage/README.md:34 (`src/legacy/os/os-assets.ts`)
- app/docs/guides/api-and-mocks.md:75 (`src/legacy/os/os-wire.ts`)
- migration/tools/refactor/p7-6-move-map-rows.py:195 (historic note text; leave)

## Loop 1

Failure: `npm run ci` exited 1 at `format:check` because `app/.prettierignore` still listed `src/legacy/os/os-assets.manifest.json`.

Files changed:
- `app/.prettierignore`: path now `src/lib/os-assets.manifest.json`.
- `app/src/components/ui/LazyImage/README.md`: pointer `src/legacy/os/os-assets.ts` -> `src/lib/os-assets.ts`.

Grep of app config, `app/build/`, `.storybook/`, `migration/tools/`: no other reader of the 3 old paths (the `legacy/os/` rules in `.dependency-cruiser.cjs` cover other files still there; the remaining hit in `p7-6-move-map-rows.py` is a historic note, left).

Checks: `format:check` passes; `lint` 0 errors (73 warnings, existing rule warnings).
