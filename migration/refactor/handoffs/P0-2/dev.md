## Result
status: pass
summary: Wrote refactor_parity.py (levels, refs, --changed, --record-self, Markdown report) and added default-off flags to parity_check.cjs. The reference is recorded (149 states, 162 MB, in .gitignore). The strict run of `--all --ref both` is 64/0 for both references in 4.2 min. Nothing under migration/screens changed.

## Files changed
migration/tools/refactor_parity.py (new)
migration/refactor-exemptions.json (new, `[]`)
migration/tools/README.md (section "Refactor parity" and the new parity_check.cjs options)
.claude/skills/outsystems-screen-spec/scripts/parity_check.cjs (new flags, all off by default)
.gitignore (migration/refactor-reference/, migration/refactor-parity/)
app/docs/refactor/reports/P0-2.md (report of the strict run, 64/0 and 64/0)
migration/refactor-reference/ (generated, git-ignored, 162 MB)
migration/refactor-parity/ (generated outputs, git-ignored)

## Commands run
python3 migration/tools/refactor_parity.py --record-self --all → exit 0, 149/149 states, 162.4 MB, about 2 min
python3 migration/tools/refactor_parity.py --level strict --all --ref both --report app/docs/refactor/reports/P0-2.md → exit 0, outsystems 64/0, self 64/0, 4.2 min (298 runs, 4 jobs); repeated 3 times, the last 2 runs clean after the fixes below
python3 migration/tools/refactor_parity.py --level visual --all → exit 0 on the second run, 64/0 and 64/0 (the first run had 1 timing flake per reference; the retry was added after it)
node parity_check.cjs --self-test → ok
Negative test: a changed color, class and call in one recorded tree gave DIFF in strict, and in visual no class diff but still style and call diff
git status --short migration/screens → empty after every run
npm typecheck, vitest and eslint: not run, no app code changed

## Deviations from the brief
- Output paths (master item 1): runs go to migration/refactor-parity/last/ (replaced at each run); the self reference goes to migration/refactor-reference/. The OutSystems side passes `--diff-ref migration/screens/<R>/parity/<state>.diff.png` so pixel exemptions of parity-exemptions.json, which match on that path, still apply.
- Reference size is 162 MB (over 50 MB), so migration/refactor-reference/ is in .gitignore and not committed. A new clone must run `--record-self --all` at the reference commit (about 2 min). migration/refactor-parity/ is ignored too.
- The self reference needed flags in parity_check.cjs (default off): `--record-self`, `--self-ref`, `--skip-kinds`, `--visible-only`, `--fixed-time`, `--freeze-animations`, `--diff-ref`. The recorded tree is the serialized build (not an HTML replay), so CSS changes show. The self runs fix the page clock (Locality_Details shows the time) and finish or pause animations. The OutSystems side also uses `--freeze-animations` (one transition was caught mid-way, MessageDetail/loading). Calls in self runs are compared as distinct calls per phase (repeat counts vary with timing).
- A run with a difference is repeated once; a clean second try counts as clean and the report names it. Real differences fail twice.
- `--changed` uses `git diff --name-only <since>` (default HEAD~1, includes the working tree and untracked files). `app/docs/refactor/graph.json` does not exist before P0-3, so a change outside app/src/screens/<R>/ selects all routes. The expected graph shape is `{"routes": {"<Route>": [files]}}`; P0-3 must write it that way or adjust `changed_routes`.
- The patch of parity_check.cjs was a one-time edit done through a script in the scratchpad, not kept in the repository.

## Questions for the user
none

## Loop 1
- F1 fixed: added `docs/refactor/reports` to `app/.prettierignore` (generated output) and a note in `migration/tools/README.md`.
- Files changed: app/.prettierignore, migration/tools/README.md.
- `npm --prefix app run ci` → exit 0. Parity not re-run.
