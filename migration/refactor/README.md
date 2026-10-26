# Refactor agent team: user guide

The architecture refactor (`app/docs/architecture/refactor-plan-v2.md`) runs through an agent team. The design is in
`agent-team-plan.md` (decisions A1 to A7, user, 2026-10-22).

## Who does what

| Part                  | Where                                     | Job                                                                            |
| --------------------- | ----------------------------------------- | ------------------------------------------------------------------------------ |
| Master                | the main session, skill `refactor-master` | Picks the step, starts the agents, controls gates, commits, records the state. |
| `refactor-developer`  | `.claude/agents/refactor-developer.md`    | Makes the change of one step. Does not commit.                                 |
| `refactor-tester`     | `.claude/agents/refactor-tester.md`       | Runs the gate and reviews the diff. Does not change code.                      |
| `refactor-documenter` | `.claude/agents/refactor-documenter.md`   | Updates the architecture documents. Changes Markdown and CSV only.             |

## Commands

| Type                                     | Result                                                                           |
| ---------------------------------------- | -------------------------------------------------------------------------------- |
| `/refactor-master status`                | Where the refactor is, and the next step. No work.                               |
| `/refactor-master start`                 | Records your start (D5), then continues. Only you can start it.                  |
| `/refactor-master continue`              | Continues the active step, or starts the next one. Runs to the end of the phase. |
| `/refactor-master continue --until P4-2` | Same, and stops after P4-2.                                                      |
| `/refactor-master phase P3`              | Runs the steps of phase P3.                                                      |
| `/refactor-master step P2-3`             | Runs one step.                                                                   |

The master stops at a question, after two failed fix loops, and at your gates: P0-3, P0-5, P2-4, P5-4, and the end
of each group of Phase 6. Answer in the chat. The master records your words and continues.

## Files

| File               | Content                                                                            |
| ------------------ | ---------------------------------------------------------------------------------- |
| `steps.json`       | The 121 steps (115 in scope, R1 b). Made by `gen_steps.py`. Do not edit by hand.   |
| `state.json`       | Progress: begun, active step and stage, done steps with commits, gates, questions. |
| `log.md`           | One line per event.                                                                |
| `handoffs/<step>/` | `brief.md`, `dev.md`, `test.md`, `docs.md` of each step. Committed with the step.  |

## Tools

```
python3 .claude/skills/refactor-master/scripts/rf.py status       # also: next, verify, brief, ... (rf.py --help)
python3 .claude/skills/refactor-master/scripts/gen_steps.py --check
python3 -m unittest discover -s .claude/skills/refactor-master/scripts -p 'test_*.py'
```

## After a break

Type `/refactor-master continue`. The master reads `state.json` and continues at the stage of the active step:
brief, dev, test, docs or commit. A session can stop at any moment without loss.
