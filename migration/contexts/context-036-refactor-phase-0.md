# context-036 · Refactor Phase 0 done by the agent team (2026-10-22)

## Result
- P0-1 to P0-5 committed on `refactor/architecture` between 11:44 and 14:20: 6b4efba, 4bee9f6, 9e439d0, 9c0bd22,
  eeb37e2. Plan text sync: 5979d1c. Next step: P1-1 (not started).
- Baseline (`app/docs/refactor/baseline.md`): ci pass on Node 24; parity 64/0 against OutSystems and the self reference.
  Coverage is 49.22 percent. First load (gzip): HomeFeed 236.40 kB, Login 184.61 kB.
- Tools: `migration/tools/refactor_parity.py` (strict/visual, `--changed` from the dependency graph), dependency-cruiser,
  jscpd, knip, codemod `migration/tools/refactor/move.ts`, `measure.mjs`, `bundle-report.mjs`.
- Plan of the moves: `app/docs/refactor/move-map.csv` (329 rows), `duplicates.md`, ADR-15 accepted.

## Decisions (who, date)
- User, 2026-10-22 11:44: start; delegation to an Opus advisor; extended at 12:59 until P0-5 was done (ended 14:20).
- Auto decisions Q1 to Q7 and the P0-5 gate: `migration/refactor/auto-decisions-2026-10-22.md` (for the user's review).
- User, 2026-10-22: up to 10 agents in parallel; advisor rules (one question, Sonnet facts, Opus judgment, no installs).

## Facts learned (evidence)
- The default shell has Node 22; the project needs Node 24 (agent files, SKILL.md).
- `route.py parity` rewrites the frozen `migration/screens/*/parity/` files; they are in the stash
  `rf/P0-1/parity-artifacts`. The refactor writes to `migration/refactor-parity/` only.
- The self reference is 162 MB and git-ignored: a new clone runs `refactor_parity.py --record-self --all`.
- An agent ran `git stash` and `stash pop` on the shared tree; nothing was lost. Documenters now use read-only git.
- Tokens of the run: about 1.5 M for the agents (`migration/metrics/ledger.csv`, screen "refactor").

## Files changed
- See the commits above. `app/src` did not change in Phase 0.

## Open issues
- The user reviews the auto decisions, specially Q4 (changes D3) and the plan text changes of Q5 and Q7.
- `npm audit`: braces (high, dev-only, no fix) accepted in ADR-15; re-check in Phase 9.
- No periodic security audit in the gate (the user asked; Claude proposed a report-only audit per phase, not built).

## Next
- `/refactor-master continue` starts P1-1. Decisions are the user's again (CLAUDE.md rule 2).
