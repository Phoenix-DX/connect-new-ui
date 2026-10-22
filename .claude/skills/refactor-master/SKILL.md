---
name: refactor-master
description: Master of the React architecture refactor of UBTConnect (app/docs/architecture/refactor-plan-v2.md). Routes each step to the refactor-developer, refactor-tester and refactor-documenter agents, controls the gates, commits on refactor/architecture, and resumes from migration/refactor/state.json. Use when the user types /refactor-master (status, start, continue, phase P<n>, step <id>) or asks to continue, resume, or check the refactor.
argument-hint: "status | start | continue [--until <step>] | phase P<n> | step <id>"
---

# Refactor master

You are the master. You run in the main session, because a subagent cannot start other subagents. You do not write
the code, the tests or the documents of a step yourself. You route the step to three agents, one at a time:

| Agent                 | Stage | Model                       | Writes    |
| --------------------- | ----- | --------------------------- | --------- |
| `refactor-developer`  | dev   | `devModel` of the step (A1) | `dev.md`  |
| `refactor-tester`     | test  | `sonnet`                    | `test.md` |
| `refactor-documenter` | docs  | `sonnet`                    | `docs.md` |

Sources: the plan `app/docs/architecture/refactor-plan-v2.md`, the catalog `migration/refactor/steps.json`, the
state `migration/refactor/state.json`, the handoffs `migration/refactor/handoffs/<step>/`. The tool is
`python3 .claude/skills/refactor-master/scripts/rf.py` (below: `rf.py`). Run every command from the project root.

Talk to the user in Vietnamese (CLAUDE.md). Write files in English.

## 1. Commands

| Argument                  | Do                                                                                                                                            |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| none or `status`          | `rf.py status` and `rf.py verify`. Tell the user in 5 lines: begun or not, phase, last step, active step or open gate, next step. Do no work. |
| `start`                   | Only when the user's message says to start. `rf.py begin --by user --text "<the user's words>"`. Then do `continue`.                          |
| `continue [--until <id>]` | Run the loop (§3) from the active step or the next step, to the end of the current phase (A2), or to `<id>`.                                  |
| `phase P<n>`              | Run the loop for the steps of phase `P<n>`, from its first step that is not done. Use `rf.py next --phase P<n>`.                              |
| `step <id>`               | Run the loop for one step only.                                                                                                               |

When the user answers a gate or a question in the chat, record the answer with the user's words and continue:
`rf.py confirm <id> --by user --text "..."` or `rf.py answer <Q> --by user --text "..."`. Use `--by user` only for
words that the user wrote in this conversation. Never confirm a gate for the user.

## 2. Preflight (before each step and after each resume)

1. `rf.py status`. When the refactor has not begun, stop and tell the user: "chưa bắt đầu, gõ /refactor-master start".
2. `rf.py verify`. When it fails, stop. Show the problems and `git status --short`. Never discard changes.
3. `rf.py next` (or `--phase`). Exit code 2: a step waits for the user or is blocked. Show it and stop.
4. Stretch steps (phases 8 and 9): start them only when the user asked for them (`rf.py start <id> --stretch`).

## 3. The loop of one step

```
rf.py start <id>          # refuses when a before-gate is open: ask the user (section 5), then stop
rf.py brief <id>
rf.py stage <id> dev      → developer
rf.py stage <id> test     → tester        (start the dev server first, section 4)
   fail: rf.py fail <id>, rf.py brief <id>, developer in mode "loop <n>", then test again
rf.py stage <id> docs     → documenter
rf.py stage <id> commit   → commit (section 6), rf.py done
```

### 3.1 Start an agent

Start one subagent at a time (A4). Use these calls. An agent runs in the background: wait for its completion
notification before the next command, and do not start another agent in the meantime. When the agent type is not
available in this session, use `subagent_type: "general-purpose"`, and start the prompt with this line:

```
First read `.claude/agents/<name>.md` and follow it as your role.
```

Fact (2026-10-22): a new agent file loads into the running session after a short time. The fallback is for that gap.

Developer:

```
Agent(subagent_type="refactor-developer", model="<devModel>", description="<id> dev",
  prompt="Step <id>, mode <new | loop <n> | resume>. Brief: migration/refactor/handoffs/<id>/brief.md.
          Write dev.md in the same folder. Return only the Result and Questions sections.")
```

Tester:

```
Agent(subagent_type="refactor-tester", model="sonnet", description="<id> test",
  prompt="Step <id>. Brief: migration/refactor/handoffs/<id>/brief.md. Developer report: dev.md in the same
          folder. The dev server runs on http://localhost:5173. Write test.md. Return only the Result and Questions
          sections.")
```

Documenter:

```
Agent(subagent_type="refactor-documenter", model="sonnet", description="<id> docs",
  prompt="Step <id>. Brief, dev.md and test.md are in migration/refactor/handoffs/<id>/. Write docs.md. Return
          only the Result and Questions sections.")
```

Do not paste the plan or file contents into a prompt: the brief carries them.

### 3.2 After each agent

1. Read the status line of its report. Do not read the full report unless the status is not `pass`.
2. Record the tokens of the agent: `rf.py tokens <id> --agent dev|test|docs --n <N> --model <m>`. The number is
   `subagent_tokens` in the usage of the completion notification. When no number is given, use `--n 0`.
3. Act on the status:

| Agent      | Status     | Do                                                                                                          |
| ---------- | ---------- | ----------------------------------------------------------------------------------------------------------- |
| developer  | `pass`     | `rf.py stage <id> test`                                                                                     |
| developer  | `question` | `rf.py ask <id> --text "..."`, ask the user (section 5), stop                                               |
| developer  | `blocked`  | `rf.py block <id> --reason "..."`, tell the user, stop                                                      |
| tester     | `pass`     | `rf.py stage <id> docs`                                                                                     |
| tester     | `fail`     | when loop < 2: `rf.py fail <id>`, `rf.py brief <id>`, developer mode `loop <n>`. When loop = 2: section 3.3 |
| tester     | `blocked`  | fix the cause when it is the dev server (section 4) and run the tester again; otherwise block and stop      |
| documenter | `pass`     | `rf.py stage <id> commit`                                                                                   |
| documenter | other      | run the documenter one more time with the problem in the prompt; then block and stop                        |

### 3.3 Failure after two fix loops (A3)

1. `git stash push -u -m "rf/<id>/failed"`. This keeps the work. Never use `git reset --hard` or `git checkout .`.
2. `rf.py block <id> --reason "<the failures in one line>" --stash "rf/<id>/failed"`.
3. Tell the user: the failures from `test.md`, the stash name, and the options (fix by hand, change the step, retry).
4. When the user decides, `rf.py unblock <id> --by user --text "..."`. To restore the work: `git stash pop`.

## 4. Dev server

Before the test stage of a step with a parity level other than `none`:

1. `curl -s -o /dev/null -w "%{http_code}" http://localhost:5173/UBTConnect/HomeFeed`.
2. When it does not print `200`, start `npm --prefix app run dev` in the background (Bash `run_in_background`) and
   wait until the curl prints `200`, for 60 seconds at most.
3. After a step that changed `vite.config.ts`, `tsconfig.json` or `index.html`, restart the dev server.

## 5. User gates and questions

| Case                                     | Do                                                                                                                                                                                                 |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| before-gate (P0-3)                       | Before `rf.py start`: ask the user the gate text, with the evidence. Stop.                                                                                                                         |
| after-gate (P0-5, P2-4, P5-4, P6-G<n>-C) | After the docs stage and before the commit: `rf.py wait <id>`. Give the user the files to read, the localhost links `http://localhost:5173/UBTConnect/<Route>` and the decisions to confirm. Stop. |
| question of the developer                | `rf.py ask`. Ask the user with evidence, options and a recommendation (CLAUDE.md). Stop.                                                                                                           |

When the user confirms an after-gate, continue with the commit (section 6). When the user asks for a change, run the
developer in mode `loop <n>` with the user's words in the prompt.

## 6. Commit

The user gave a standing approval for commits on `refactor/architecture` after the gate passes (user, 2026-10-22).

1. Wait for the completion notification of the documenter and record its tokens first. Then run `git status --short`.
   Every change must be in `dev.md` or `docs.md`, in `migration/refactor/`, or `migration/metrics/ledger.csv`. When a
   file is not, stop and ask.
2. `git add -A`, then commit:

   ```
   refactor(<id>): <title of the step>

   <summary line of dev.md>

   <gate line from test.md, for example: ci: pass; parity strict --changed: 4/0 (OutSystems), 4/0 (self)>
   Agents: developer <model> (fix loops <n>), tester sonnet, documenter sonnet

   Co-Authored-By: <the line that the session's attribution reminder gives>
   ```

3. `rf.py done <id> --commit $(git rev-parse --short HEAD) --gate "<gate line>"`.
4. Never push and never merge (CLAUDE.md, rule 7).

## 7. Resume

`rf.py status` shows the active step and its stage. Continue at that stage:

| Stage    | Do                                                                      |
| -------- | ----------------------------------------------------------------------- |
| `brief`  | `rf.py brief <id>`, then the developer in mode `new`.                   |
| `dev`    | The developer in mode `resume` (or `loop <n>` when loop > 0).           |
| `test`   | Start the dev server, then the tester.                                  |
| `docs`   | The documenter.                                                         |
| `commit` | Section 6. When the step has an open after-gate, `rf.py wait` and stop. |

`state.json` changes at each stage. A session can stop at any moment.

## 8. Stop and report

Stop at: a user gate, a question, a block, a failed preflight, the end of the scope of the command.

1. When only `migration/refactor/state.json`, `log.md` and `migration/metrics/ledger.csv` changed since the last
   commit, commit them: `chore(refactor): state after <id>`.
2. Tell the user in Vietnamese, in 5 lines:
   - the steps done in this run, with their commits;
   - the gate results;
   - what waits for the user;
   - the tokens of the run;
   - the next step.
3. At the end of a phase, write a context note in `migration/contexts/` and update `INDEX.md` (CLAUDE.md, "Context
   notes"). Link to `app/docs/refactor/CHANGELOG.md` and the phase report. Do not copy them.

## 9. Never

- Start a step before `rf.py begin`, or a stretch step without the user's request.
- Confirm a gate or answer a question for the user.
- Run two subagents at the same time (A4), or do the work of an agent yourself.
- Discard changes: use `git stash`. Push or merge.
- Read `.auth/` or `migration/.raw/`.
- Edit `steps.json` by hand: change `scripts/gen_steps.py` and run it, after the user agreed to the change.
