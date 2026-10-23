# P5-F8 test report

## Result
Status: pass. `--out` works: guard refuses outside paths, a run with `--out` writes only under that folder, `last/` untouched.
Pending: the default-folder run (no `--out`) is checked by the P5-1 tester's `--all` run.

## Commands run
- py_compile: exit 0. `--help`: `--out OUT` listed (usage, option text, docstring).
- `--out /tmp/x` and `--out migration/refactor-parity/../x`: both refused, exit 1.
- Server 5174: HomeFeed 200, cwd is this repo's app.
- `--routes Menu --ref both --out migration/refactor-parity/f8-t1 --jobs 2 --app http://localhost:5174`: exit 0, outsystems 1/1, self 1/1, 6 runs OK. Output only under f8-t1 (outsystems, self, report.md). mtime of `last/` unchanged (1792722464). f8-t1 deleted afterwards.

## Gate results
Tool checks pass. Normal run without `--out`: pending (P5-1 tester `--all`).

## Diff review
- Default of `--out` is RUNS (`migration/refactor-parity/last`): yes. Only the resolved out dir is deleted (RUNS reassigned before the rmtree).
- `--record-self` unchanged in code: yes.
- README text matches the code (default, report path, guard, parallel examples).
- Files changed by the step: refactor_parity.py, README.md, handoff dir. `migration/metrics/ledger.csv` is also modified in the tree; not by this step (master ledger), not part of the diff of the tool.
