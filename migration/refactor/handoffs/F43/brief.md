# Brief · F43 · Move the wire and asset helpers to lib/ (before P9-1)

Move step outside `steps.json` (no `rf.py` state). Decision W38/W39 in `migration/refactor/auto-decisions-2026-10-22.md`
(advisors Opus + Fable, auto-accepted under the user instruction 2026-10-24, away): before P9-1 turns the folder rules
into errors, fix the cheap, import-path-only part of rule 9 ("only platform/, api/ and app/ import legacy/os/").

| Field | Value |
|---|---|
| Kind | move (no other change: rule 1 of plan v2 §1.4) |
| Parity level | visual, all routes |
| Developer model | sonnet |
| Handoff folder | `migration/refactor/handoffs/F43/` |

## Facts

- Plan v2 §2.2 (target tree, line 101): "`lib/` pure functions: date, format, sanitize, os-wire helpers that have no
  state". P1-3 moved `lib/os-wire.ts`, `lib/os-assets.ts` and `lib/os-assets.manifest.json` to `legacy/os/`
  (`app/docs/refactor/move-map.csv` rows 370-372). This step moves them back to `lib/`, as §2.2 says.
- `legacy/os/os-wire.ts` (12 lines, pure: `osList`, `osText`, `osDate`, `osLong`, `osNumber`, `wireList`, `LongId`) and
  `legacy/os/os-assets.ts` (11 lines, `osImage` over the JSON manifest `os-assets.manifest.json`; no other import).
- About 107 files import them (pages 55-ish, components 22, lib 8, api, platform, mocks, tests). Today they give 64
  rule-9 warnings and 8 rule-6 warnings (lib → legacy/os). After the move, `lib/` imports only `lib/` for these.

## Change

1. Move with the codemod (plan v2 §4.3), never by hand and never with `sed -i`:
   `node migration/tools/refactor/move.ts --from app/src/legacy/os/os-wire.ts --to app/src/lib/os-wire.ts` and the same
   for `os-assets.ts` and `os-assets.manifest.json` (check the codemod's options with `--dry-run` first; it moves tests
   and stories with the file). Target names: `src/lib/os-wire.ts`, `src/lib/os-assets.ts`,
   `src/lib/os-assets.manifest.json`.
2. The codemod rewrites the imports. No other code change: no rename, no new barrel, no logic change.
3. Docs and tools that name the old paths (for example `app/docs/guides/api-and-mocks.md`,
   `components/ui/LazyImage/README.md`, migration tools): list them in dev.md. Fix the paths only in `app/src/**`
   comments that the codemod did not cover; the documenter does the docs.
4. Add rows to `app/docs/refactor/move-map.csv` for the 3 files (source `src/legacy/os/...`, target `src/lib/...`, phase
   `F43`, status `moved`, note "back to lib/ as plan v2 §2.2; W38/W39").

## Checks for the developer

- `npm --prefix app run typecheck`; vitest of the moved files and a sample of importers; eslint of the changed files.
- `cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err | tail -3`: report the counts of
  rule 9 and rule 6 before and after (expected: rule 9 about 98 → about 34, rule 6 55 → about 47).

## Gate commands for the tester

```
npm --prefix app run ci
npm --prefix app run lint:arch   # no new warning; report the rule counts before and after
python3 migration/tools/refactor/arch_baseline.py check   # 0 new
python3 .claude/skills/refactor-master/scripts/rf.py diffcheck --move   # or the P6-F12 move check: only import lines change
python3 migration/tools/refactor_parity.py --level visual --all --ref both --app <the URL the master gives> --report migration/refactor/handoffs/F43/parity.md
npm --prefix app run build && node app/build/bundle-report.mjs   # W21: +0.3 kB per step
```

Guard (W39): when a moved file changes parity or the bundle limit, stop with `question`.

## Not in this step

The rule scope changes (mock handlers and test helpers out of rule 9) and the error severity: step P9-1.
`migration/refactor/followups.md`, CHANGELOG: the master and the documenter.
