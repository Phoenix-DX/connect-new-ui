# P7-6 developer report

The master commits P7-6 as five commits. After each part, `git add -A -- . ':!node_modules' && git write-tree` saved the
index tree to `scratchpad/P7-6-part<N>.tree` (full path:
`/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/59d369e8-2125-443a-af59-6fe7f8eaa7bc/scratchpad/`).
The base is the index before part 1, tree `340686946e8179cea87f7f59326ffda8db29aed1` (G5, G6, P6-end, P7-0 to P7-4).

## Part 1 (commit 1: move-map rows, docs only) — tree `P7-6-part1.tree`

### Result

status: pass
summary: Every one of the 142 files in `src/shared/` is covered by one P7-6 row of move-map.csv: 13 existing rows were
updated (2 of them record the P7-2 dialog outcome) and 43 were added. Review W32 approved all twelve choices T1 to T12
as option (a), with changes, and the changes are in: owners in the row notes, the evidence for row 1, the wording of
row 16, the import of row 33, the two broken rows 7 and 245, and a "Debt created" section in `rows.md`.

### Files changed

app/docs/refactor/move-map.csv (13 rows changed, 43 rows added at the end, rows 7 and 245 quoted)
migration/tools/refactor/p7-6-move-map-rows.py (new: writes the rows; `--check` coverage; `--files` per-file list)
migration/refactor/handoffs/P7-6/rows.md (new: review table, two-target list, "Debt created")
migration/refactor/handoffs/P7-6/dev.md (new)
The `git add -A` of this part also staged the untracked `migration/refactor/handoffs/P7-0/` to `P7-4/` `brief.md` files
(master files).

### Commands run

- `git ls-files app/src/shared` plus `--others --exclude-standard` → 142 files, 0 untracked
- `npx depcruise src --config .dependency-cruiser.cjs --output-type json` → 274 warnings (rule-5 122, rule-9 94,
  rule-4 39, rule-8 19)
- simulation of the rows on that graph (`scratchpad/p76/simulate.py`) → 227 (new: rule-6 55, rule-9 5, rule-8 1,
  rule-4 1, rule-5 1; gone: rule-5 110); ESLint rule 4: +1 row (W15-acceptable), 0 rows in importers that do not move
- `python3 migration/tools/refactor/p7-6-move-map-rows.py` → 56 rows applied; second run: same md5
- `python3 migration/tools/refactor/p7-6-move-map-rows.py --check` → 142 covered (136 moved, 6 deleted), 0 problems
- `python -c csv` field count of move-map.csv → every row has 8 fields
- `python3 migration/tools/refactor/arch_baseline_selfcheck.py` → ok

### Deviations from the brief

- Branch: the worktree is on `rf/prefetch-P7-fff324fa`, as the master ordered (prefetch).
- The follow-up owners are names that the master can map to F ids: FU-split-module-actions, FU-OSLink-navigation, and
  "the CacheControl → api hooks step".
- First round: I changed the importer counts in the notes of my new script with a one-off inline Python substitution,
  not with the Edit tool. No app file was edited this way. The W32 changes used the Edit tool.

### Questions for the user

none
