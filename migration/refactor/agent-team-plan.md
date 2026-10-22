# Agent team for the refactor: plan

Status: **approved by the user on 2026-10-22: A1 to A7 as recommended. Built on 2026-10-22** (user guide:
`README.md`). The refactor itself does not start before the user says so (D5 of `refactor-plan-v2.md`).

Writing rules: `migration/english-docs/style-rules.md`.

## 1. Goal

1. A **master** routes the steps of `app/docs/architecture/refactor-plan-v2.md` to three agents and controls the gates.
2. A **developer agent** makes the change of one step.
3. A **tester agent** runs the gate of the step and reviews the diff. It does not change code.
4. A **documenter agent** updates the architecture documents after the test passes.
5. A **state file** records the progress of every step. When the user comes back, the master reads the state and
   continues at the correct step and stage.

## 2. A fact that sets the design

In Claude Code a subagent cannot start another subagent. Thus the master cannot be a subagent. The master is the
main session that runs the skill `refactor-master`. The user starts it with a slash command (§6). The developer, the
tester and the documenter are subagents in `.claude/agents/`. The master starts them with the Agent tool, one at a
time.

## 3. Parts

| Part               | File                                                   | Content                                                                                 |
| ------------------ | ------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| Master playbook    | `.claude/skills/refactor-master/SKILL.md`              | Commands, the step loop, stop rules, resume rules, user gates. Maximum about 250 lines. |
| State tool         | `.claude/skills/refactor-master/scripts/rf.py`         | Reads and writes the state. Makes the brief of a step. Checks the state against git.    |
| Step catalog tool  | `.claude/skills/refactor-master/scripts/gen_steps.py`  | Makes `steps.json` from `refactor-plan-v2.md` one time, and checks that the two agree.  |
| Tests of the tools | `.claude/skills/refactor-master/scripts/test_rf.py`    | Unit tests (Python `unittest`, no new package).                                         |
| Handoff template   | `.claude/skills/refactor-master/references/handoff.md` | The report format that each agent writes (§7).                                          |
| Developer agent    | `.claude/agents/refactor-developer.md`                 | Role, rules, tools, default model.                                                      |
| Tester agent       | `.claude/agents/refactor-tester.md`                    | Role, gate commands per level, diff review checklist.                                   |
| Documenter agent   | `.claude/agents/refactor-documenter.md`                | Role, the documents it can change, STE lint.                                            |
| Step catalog       | `migration/refactor/steps.json`                        | One entry per step (§4.1).                                                              |
| State              | `migration/refactor/state.json`                        | Progress, current stage, gate results, questions (§4.2).                                |
| Session log        | `migration/refactor/log.md`                            | One short entry per session: steps done, results, next step.                            |
| Handoffs           | `migration/refactor/handoffs/<step>/`                  | `brief.md`, `dev.md`, `test.md`, `docs.md` for each step. Committed with the step.      |
| User guide         | `migration/refactor/README.md`                         | How to start, continue and stop the team. One page.                                     |

## 4. Data

### 4.1 Step catalog (`steps.json`)

One entry per step of plan v2. Phase 6 has one step per route for step B. Example:

```json
{
  "id": "P2-3",
  "phase": "P2",
  "title": "HouseholdDetails as page, hooks, container and components",
  "kind": "change",
  "level": "visual",
  "deps": ["P2-2"],
  "devModel": "opus",
  "userGate": null,
  "planRef": "refactor-plan-v2.md#p2-3",
  "estDays": 2,
  "stretch": false
}
```

| Field      | Values                                                                                                          |
| ---------- | --------------------------------------------------------------------------------------------------------------- |
| `kind`     | `move` (renames and imports only), `change`, `tool` (scripts and config), `report`, `gate` (a user review only) |
| `level`    | `strict`, `visual`, `none`                                                                                      |
| `devModel` | `sonnet` for `move`, `tool` and `report`; `opus` for `change` (memory: Sonnet for mechanical work)              |
| `userGate` | `null`, or the text of what the user must confirm before the step is done                                       |
| `stretch`  | `true` for phases 8 and 9 (R1 b). The master does not start a stretch step without the user's request.          |

User gates in the catalog:

- P0-3: the two added dev dependencies;
- P0-5: the move map and ADR-15;
- P2-4: the pilot review;
- P5-4: the exemption list;
- the end of each group of Phase 6.

### 4.2 State (`state.json`)

```json
{
  "plan": "app/docs/architecture/refactor-plan-v2.md",
  "branch": "refactor/architecture",
  "begun": null,
  "current": {
    "step": "P2-3",
    "stage": "test",
    "loop": 1,
    "since": "2026-11-03T10:12:00"
  },
  "steps": {
    "P2-2": {
      "status": "done",
      "commit": "a1b2c3d",
      "gate": "ci: pass; parity strict: 3/0 (OutSystems), 3/0 (self)",
      "tokens": { "dev": 61000, "test": 22000, "docs": 9000 },
      "finished": "2026-11-03T09:40:00"
    }
  },
  "gates": {
    "P0-5": {
      "status": "confirmed",
      "by": "user",
      "at": "...",
      "text": "<the user's words>"
    }
  },
  "questions": [
    { "id": "Q1", "step": "P0-3", "text": "...", "status": "open" }
  ],
  "stash": []
}
```

- `begun` stays `null` until the user says "start" in the conversation. Then the master runs
  `rf.py begin --by user --text "<the user's words>"`. While `begun` is `null`, `rf.py start` refuses every step.
- A step has one status: `pending`, `active`, `waiting_user`, `blocked`, `done`.
- The active step has one stage: `brief`, `dev`, `test`, `docs`, `commit`.
- `loop` counts the developer runs after a failed test.

### 4.3 Commands of `rf.py`

| Command                                                                     | What it does                                                                                                      |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `rf.py status`                                                              | Prints: begun or not, phase, last done step and commit, active step and stage, open questions, next step.         |
| `rf.py next [--phase P3]`                                                   | Prints the next step that can run: dependencies done, no open gate, not stretch.                                  |
| `rf.py verify`                                                              | Checks: branch, each done commit is in the history of HEAD, the working tree has only changes of the active step. |
| `rf.py begin --by user --text "..."`                                        | Records the start (D5).                                                                                           |
| `rf.py start <step>`                                                        | Sets the step `active`, stage `brief`. Refuses when another step is active or `begun` is null.                    |
| `rf.py brief <step>`                                                        | Writes `handoffs/<step>/brief.md` (§7.1).                                                                         |
| `rf.py stage <step> dev\|test\|docs\|commit`                                | Moves the active step to the next stage. Refuses a stage out of order.                                            |
| `rf.py fail <step> --report test.md`                                        | Records a failed test. Increments `loop`. Sets the stage back to `dev`.                                           |
| `rf.py done <step> --commit <sha> --gate "..."`                             | Records the commit and the gate result. Sets the step `done`.                                                     |
| `rf.py wait <step> --gate "..."`                                            | Sets the step `waiting_user` with what the user must confirm.                                                     |
| `rf.py confirm <step> --by user --text "..."`                               | Records the user's confirm. Only after the user said it in the conversation.                                      |
| `rf.py ask <step> --text "..."` / `rf.py answer <Q> --by user --text "..."` | Records a question and the user's answer.                                                                         |
| `rf.py block <step> --reason "..." [--stash <name>]`                        | Sets the step `blocked`, with the stash name of the work.                                                         |
| `rf.py tokens <step> --agent dev\|test\|docs --n <tokens>`                  | Adds the tokens to the state and writes the line of `ledger.py`.                                                  |

## 5. The loop of one step

```
master                         developer            tester               documenter
  │ preflight (§5.1)
  │ rf.py start, rf.py brief
  ├──── brief.md ──────────────▶ change, quick checks
  │                              writes dev.md
  │◀──── status ────────────────┘
  │ start the dev server
  ├──── brief.md + dev.md ─────────────────────────▶ gate, diff review
  │                                                  writes test.md
  │◀──── pass / fail ───────────────────────────────┘
  │   fail and loop < 2: back to the developer with test.md
  │   fail and loop = 2: stash, block, tell the user
  ├──── brief.md + dev.md + test.md ───────────────────────────────────▶ update docs
  │                                                                     writes docs.md
  │◀──── status ───────────────────────────────────────────────────────┘
  │ commit, rf.py done, ledger, next step or stop
```

### 5.1 Preflight (master, before each step)

1. `git branch --show-current` is `refactor/architecture`. If not, stop and tell the user.
2. `rf.py verify` passes. If the tree has changes that are not from the active step, stop and show `git status`.
   Never discard changes.
3. The step's dependencies are `done`, and no gate of an earlier step is open.

### 5.2 Developer stage

1. The master starts `refactor-developer` with the model of `devModel` and the path of `brief.md`.
2. The developer reads `brief.md` and the files it lists. It does not read the full plan.
3. The developer makes the change. It runs the quick checks of the brief (typecheck, the tests of the changed files).
4. The developer does not commit. It writes `dev.md` and returns the result section only.
5. When the developer needs a decision, it stops with status `question`. The master asks the user and records the
   question with `rf.py ask`.

### 5.3 Tester stage

The tester gets the brief, the list of changed files and the gate commands. It runs every command itself and does
not trust the result of the developer. Checks:

| Check             | Command or rule                                                                           | From step |
| ----------------- | ----------------------------------------------------------------------------------------- | --------- |
| CI                | `npm --prefix app run ci`                                                                 | P0-1      |
| Architecture lint | `npm --prefix app run lint:arch`: no new warning in the folders of the step               | P1-1      |
| Parity            | before P0-2: `parity_sweep.py`; from P0-2: `refactor_parity.py --level <level> --changed` | P0-1      |
| Full parity       | `refactor_parity.py --level <level> --all` at the last step of a phase                    | P0-2      |
| Bundle            | `node app/build/bundle-report.mjs`: within the limits of plan v2 §7                       | P0-4      |
| Move only         | for `kind: move`: `rf.py diffcheck --move`, renames and import lines only                 | P1-2      |
| Protected files   | no change in `src/api/openapi.yaml`, `src/mocks/**` fixtures, `public/UBTConnect/css/**`  | always    |
| Tests             | no test file deleted without a replacement test in the same diff                          | always    |
| Step check        | the commands of "Check" in the step of plan v2                                            | always    |
| Rules             | `@origin` tag in each ported file; no `sed -i`; no change outside the scope of the brief  | always    |

The tester writes `test.md` with each command and its result, and status `pass` or `fail`.

### 5.4 Documenter stage

The documenter changes Markdown and CSV files only. Scope:

1. `app/docs/refactor/CHANGELOG.md`: one entry per step: what changed in the architecture, in 3 lines or less.
2. `app/docs/refactor/move-map.csv`: the `status` column of the moved blocks.
3. `app/docs/architecture/overview.md`, `app/docs/guides/*.md`, `src/**/README.md`: paths and diagrams that the step
   changed.
4. ADR-15 in `migration/architecture.md`, when a rule of the architecture changed.
5. `app/docs/guides/page-template.md`, from P2-4.
6. At the last step of a phase: a full pass of the architecture documents against the code.

The documenter runs `ste_lint.py` (0 errors), `prettier --check` and `check_mermaid.cjs`. It can return
"no document change" with a reason.

### 5.5 Commit stage (master)

1. `git add` the files of `dev.md` and `docs.md`, and `migration/refactor/`.
2. Commit with the message of the step and the gate result in the body (plan v2 §1.3). The user gave a standing
   approval for commits on `refactor/architecture`.
3. `rf.py done`, `rf.py tokens` for each agent, one line in `log.md`.

### 5.6 Stop rules

The master stops and reports to the user when one of these happens:

1. A step has a user gate. The master gives the files to review and the localhost links, then `rf.py wait`.
2. The test fails two times after the first run (loop 2). The master stashes the work
   (`git stash push -u -m "rf/<step>/failed"`), runs `rf.py block` and gives the summary of `test.md`.
3. The developer returns status `question`.
4. The preflight fails.
5. The scope of the command is complete (one step, or one phase).

## 6. Commands for the user

| The user types                           | The master does                                                                                     |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `/refactor-master`                       | Same as `status`.                                                                                   |
| `/refactor-master status`                | `rf.py status` and `rf.py verify`. Reports in 5 lines. Does no work.                                |
| `/refactor-master start`                 | Records the start (D5) with the user's words, then runs as `continue`.                              |
| `/refactor-master continue`              | Continues the active step at its stage, or starts the next step. Runs to the end of the phase.      |
| `/refactor-master phase P3`              | Runs the steps of P3 in order, from the first step that is not done.                                |
| `/refactor-master step P2-3`             | Runs one step only.                                                                                 |
| `/refactor-master continue --until P4-2` | Runs as `continue` and stops after P4-2.                                                            |
| An answer in the chat                    | The master records it with `rf.py confirm` or `rf.py answer`, with the user's words, and continues. |

## 7. Handoff files

### 7.1 `brief.md` (made by `rf.py brief`)

1. The step section of plan v2, copied as it is.
2. The rules of plan v2 §1.4.
3. The files to read, from "Read" of the step.
4. The quick checks for the developer and the gate commands for the tester.
5. For a loop: the result section of the last `test.md`.
6. The handoff template.

### 7.2 Report of each agent (`dev.md`, `test.md`, `docs.md`)

```
## Result
status: pass | fail | blocked | question
summary: <3 lines or less>

## Files changed
## Commands run
<command> → <result>
## Deviations from the brief
## Questions for the user
```

The master reads the "Result" and "Questions" sections only. This keeps the context of the master small.

## 8. Resume after a break

When the user starts a new session and types `/refactor-master continue`:

1. The master runs `rf.py status` and `rf.py verify`.
2. When no step is active, the master starts the next step.
3. When a step is active, the master continues at its stage:

| Stage    | Files present                 | The master                                                  |
| -------- | ----------------------------- | ----------------------------------------------------------- |
| `brief`  | none or `brief.md`            | Makes the brief again. Starts the developer.                |
| `dev`    | `brief.md`, partial changes   | Starts the developer with "continue from the current diff". |
| `test`   | `brief.md`, `dev.md`, changes | Starts the tester.                                          |
| `docs`   | `test.md` with `pass`         | Starts the documenter.                                      |
| `commit` | `docs.md`                     | Runs `git status`, commits, `rf.py done`.                   |

4. When a step is `waiting_user`, the master shows the open gate and stops.
5. When a step is `blocked`, the master shows the reason and the stash name, and stops.

Every stage change writes `state.json` at once. Thus a session can end at any time without loss.

At the end of a phase, the master writes a context note in `migration/contexts/` (CLAUDE.md, "Context notes").

## 9. Decisions for the user

| Id  | Decision                    | Options                                                                                                                                                              | Decision (user, 2026-10-22)  |
| --- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| A1  | Models                      | (a) developer: Opus for `change`, Sonnet for `move`, `tool`, `report`; tester and documenter: Sonnet; (b) all Opus                                                   | (a)                          |
| A2  | Scope of `continue`         | (a) to the end of the phase or the next stop; (b) one step only                                                                                                      | (a)                          |
| A3  | Fix loops                   | (a) 2 loops, then stash and block; (b) 1 loop                                                                                                                        | (a)                          |
| A4  | Parallel work               | (a) one subagent at a time; (b) 2 developers in separate worktrees for Phase 6 step B                                                                                | (a) now, (b) after the pilot |
| A5  | Documenter run              | (a) after every step, "no change" allowed; (b) only at the end of each phase                                                                                         | (a)                          |
| A6  | Acceptance test of the team | (a) unit tests and a dry run only; (b) also a full loop on a throwaway step in a temporary worktree, then delete it                                                  | (b)                          |
| A7  | Project files               | (a) add a "Refactor" pointer in `CLAUDE.md`, and allow `git mv`, `git commit`, `git stash` in `.claude/settings.json`; (b) no change, the user approves each command | (a)                          |

## 10. Build steps (after the user's approval)

| Id  | Do                                                                      | Check                                                                                                                |
| --- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| B1  | Write `gen_steps.py`. Make `steps.json` from plan v2 (121 steps).       | Each step id of plan v2 is in `steps.json`; each dependency exists.                                                  |
| B2  | Write `rf.py` and `test_rf.py`.                                         | The unit tests pass: stage order, begin gate, loop limit, verify.                                                    |
| B3  | Write the three agent files.                                            | The frontmatter is valid; each file is 150 lines or less.                                                            |
| B4  | Write `SKILL.md` and `references/handoff.md`.                           | `/refactor-master status` prints "not begun" and next step P0-1.                                                     |
| B5  | Write `migration/refactor/README.md`, `state.json`, `log.md`. Apply A7. | `rf.py verify` passes.                                                                                               |
| B6  | Acceptance test (A6).                                                   | `rf.py start P0-1` refuses (not begun). The throwaway loop commits on the temporary branch; the worktree is deleted. |
| B7  | Commit on `refactor/architecture`, context note, memory.                | `git status` clean.                                                                                                  |

Estimate: half a day. No file in `app/src` changes. The refactor does not start.
