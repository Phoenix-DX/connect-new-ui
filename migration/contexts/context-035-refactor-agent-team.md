# context-035 · Refactor agent team built and tested (2026-10-22)

## Result
- Agent team for `refactor-plan-v2.md`: skill `refactor-master` (the main session is the master) and three agents:
  `refactor-developer`, `refactor-tester`, `refactor-documenter` (`.claude/agents/`). Guide: `migration/refactor/README.md`.
- State tool `rf.py` with 20 unit tests. Step catalog `steps.json`: 121 steps, 115 in scope (R1 b), from `gen_steps.py`.
- Acceptance (A6 b): one full loop on a throwaway step T0-1 in a temporary worktree. Developer, tester and documenter
  passed, and the master committed. The worktree and the branch `rf-selftest` are deleted.
- The refactor has not begun: `rf.py start` refuses until the user says start (D5).

## Decisions (who, date)
- User, 2026-10-22: A1 to A7 as recommended (`migration/refactor/agent-team-plan.md` §9).
- User, 2026-10-22: R1 to R8 as recommended; do not start before the user says so ([context-034](context-034-refactor-plan-review.md)).

## Facts learned (evidence)
- A subagent cannot start another subagent, so the master is the main session (`SKILL.md` §0).
- A new agent file loads into the running session after a short time. Until then, `general-purpose` with the role
  file works (self-test, 2026-10-22).
- The completion notification gives the tokens of an agent (`subagent_tokens`). Self-test T0-1: developer 40,743,
  tester 14,325, documenter 13,236 (Sonnet).
- The self-test found one bug: `rf.py tokens` writes `ledger.csv`, and `verify` treated it as an unexpected change.
  Fixed: the ledger is an allowed file, with a test.
- Plan v2 day totals were wrong: 56 days in total and 50 days for phases 0 to 7, not 51 and 45. Corrected in the plan
  and the review.

## Files changed
- Added: `.claude/skills/refactor-master/` (SKILL.md, references, scripts), `.claude/agents/refactor-*.md`,
  `migration/refactor/` (README, agent-team-plan, steps.json, state.json).
- Changed: `CLAUDE.md` (section "Refactor"), `.claude/settings.json` (git mv, commit, stash, rev-parse, branch),
  `refactor-plan-v2.md` and `refactor-plan-review.md` (day totals). No file in `app/src` changed.

## Open issues
- D5: the start date. P0-3 has a before-gate for the dev dependencies `eslint-plugin-import-x` and `tsx`.

## Next
- When the user says start: `/refactor-master start` (step P0-1, baseline).
