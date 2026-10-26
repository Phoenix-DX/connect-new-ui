# Brief: P5-F8 (parity runs in parallel)

Not a catalog step: the master wrote this brief by hand (follow-up F8 in `migration/refactor/followups.md`). Do not run
`rf.py start`, `stage` or `done`.

| Field | Value |
|---|---|
| Kind | test tooling |
| Parity level | none for the app; tool checks below |
| Developer model | sonnet |
| Depends on | P4-F6 (a3ad798) |
| Handoff folder | `migration/refactor/handoffs/P5-F8/` |

## Why

Phase 6 runs 3 to 4 page steps at the same time, each in its own git worktree with its own dev server (ports 5175 to
5178; decision U1). The tester of each step runs `migration/tools/refactor_parity.py` from the main tree with
`--app http://localhost:<port>`. Today every run that is not a record deletes and rewrites one shared folder,
`migration/refactor-parity/last/` (`shutil.rmtree(RUNS)`), so two runs at the same time delete each other's output.

## Do

1. Add an option `--out <dir>` (default: `migration/refactor-parity/last`, so a run without it does not change). All the
   per-state output and the default report go under `<dir>`. Only `<dir>` is deleted at the start of a run. Refuse a
   `<dir>` outside `migration/refactor-parity/`.
2. Check that two runs with different `--out` and different `--app` can run at the same time: nothing else is shared
   (temporary files, lock files, the reference folder is read-only in a compare run). List what you checked.
3. `--changed` reads `git diff` of the main tree. For a worktree, the tester uses `--routes <list>`, or `--changed --files
   <paths>` (exists). Add a short example of both to `migration/tools/README.md`, with `--out` and a lower `--jobs` (for
   example 2) when 3 to 4 runs share the machine.
4. Keep `--record-self` as it is (it writes the reference, never in parallel).

## Checks

- Node 24: `export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH`.
- A small test of the option (the tool has no test suite: a scratch script or a `--self-test`-style check is enough;
  say which).
- Two runs at the same time against this repo's dev server on http://localhost:5174, for example
  `--routes HomeFeed --out migration/refactor-parity/a` and `--routes Login --out migration/refactor-parity/b`, both
  `--ref both`: both pass and both folders hold their own output. Remove the two folders after the check.
- One normal run without `--out` (`--routes Menu --ref both`): same output place as before.
- Port 5173 is another clone: never use it, never stop it.

## Report

Write `dev.md` in this folder: summary, files changed, commands run with results.
