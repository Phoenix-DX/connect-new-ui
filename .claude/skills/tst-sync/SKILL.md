---
name: tst-sync
description: Master of the TST sync wave of UBTConnect: after a fresh capture of the OutSystems TST routes, fixes the React routes that differ, one route per item, through the sync-developer, sync-tester and sync-documenter agents, with the user's confirm per route and a restamp. State in migration/sync/state.json (tools/sync/sync.py). Use when the user types /tst-sync (status, start, continue, route <Route>, confirm <Route>, import) or asks to continue, resume or check the sync of the React app with TST.
argument-hint: "status | start | continue [--until <Route>] | route <Route> | confirm <Route> \"confirm ...\" | import <triage.md>"
---

# TST sync master

You are the master. You run in the main session, because a subagent cannot start other subagents. You do not write
the code, the tests or the documents of an item yourself. You route each item to three agents, then to the user:

| Agent             | Stage | Model                        | Writes    |
| ----------------- | ----- | ---------------------------- | --------- |
| `sync-developer`  | dev   | `devModel` of the item (Opus) | `dev.md`  |
| `sync-tester`     | test  | `sonnet`                     | `test.md` |
| `sync-documenter` | docs  | `sonnet`                     | `docs.md` |

Sources: the catalog `migration/sync/items.json` (from the triage), the state `migration/sync/state.json`, the
handoffs `migration/sync/handoffs/<Route>/`, the guide `migration/sync/README.md`. The tool is
`python3 tools/sync/sync.py` (below: `sync.py`). Run every command from the project root.

Talk to the user in Vietnamese (CLAUDE.md). Write files in English.

## 0. What the sync is, and is not

- A route item = one finished React route whose fresh TST capture (`migration/screens/<Route>/capture/`, `analysis/`)
  differs from the React page. The fix brings React to the capture (markup, text, calls, mocks). Nothing is invented.
- The sync never calls `route.py start`: `start --force` deletes the page. A finished route is re-stamped with
  `ready → the user's confirm → finish` (`tools/parity/restamp.py`), as the user agreed on 2026-11-07.
- Only the master edits `migration/parity-exemptions.json`, with the user's decision quoted in `evidence`, batched
  right before the final sweep (every edit makes every parity report stale).
- Parallel items write only `app/src/pages/<Route>/**` and `migration/screens/<Route>/**`. An item with granted
  shared paths (`sync.py start <Route> --shared ...`) runs alone; the grant replaces the change request of
  AGENTS.md rule 7 for that item (user, 2026-11-07), and the tester sweeps every route that uses the block.

## 1. Commands

| Argument                       | Do                                                                                                                                                 |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| none or `status`               | `sync.py status` and `sync.py verify`. Tell the user in 5 lines: begun or not, items by class and status, active items, open questions, next. No work. |
| `import <triage.md>`           | `sync.py import --triage <md> --capture-base $(cat migration/sync/captureBase.txt) --drift migration/sync/drift-<date>.json`. Report the counts.     |
| `start`                        | Only when the user's message says to start. `sync.py begin --by user --text "<the user's words>"`. Then `continue`.                               |
| `continue [--until <Route>]`   | Run the loop (§3) for the items `sync.py next` gives, up to 10 developers in parallel for page-only items, to the end of the catalog or `<Route>`.  |
| `route <Route>`                | Run the loop for one item.                                                                                                                         |
| `confirm <Route> "confirm …"`  | Only with the user's words from this conversation: `sync.py confirm <Route> --by user --text "…"`, then the restamp and the commit (§5, §6).        |

When the user answers a question in the chat, record it with the user's words: `sync.py answer <Q> --by user --text "..."`.
Use `--by user` only for words that the user wrote in this conversation. Never confirm a route for the user.

## 2. Preflight (before each item and after each resume)

1. `sync.py status`. Not begun: stop and tell the user ("chưa bắt đầu, gõ /tst-sync start").
2. `sync.py verify`. When it fails, stop. Show the problems and `git status --short`. Never discard changes.
3. Dev server (§4). The URL goes into every brief (`sync.py brief <Route> --app <url>`).
4. `sync.py next`: the items that can start now (class C and D need an answered question first).
5. `python3 tools/generate/css_sets.py --check` (exit 0). A fresh capture can bring a stylesheet that the app does not
   have: the parity reference renders with the app's own stylesheets, so parity never shows it (HomeFeed,
   2026-11-07). When the check fails, the master fetches the missing or changed stylesheets (static GET, read-only,
   logged in `migration/knowledge/runtime-sources.md`), re-runs `css_sets.py` and the parity of the routes whose set
   changed, before any item starts.

## 3. The loop of one item

```
sync.py start <R> [--shared p1,p2]  →  sync.py brief <R> --app <url>
sync.py stage <R> dev      → developer (mode new | loop n | resume)
sync.py stage <R> test     → tester;  fail → sync.py fail <R>, sync.py brief <R>, developer "loop <n>", test again
sync.py stage <R> docs     → documenter
sync.py stage <R> spec     → python3 tools/pipeline/route.py spec-done <R>
sync.py stage <R> review   → python3 tools/pipeline/route.py ready <R> --base <baseCommit of the item>
                             (while sibling items are dirty in the tree: --no-scope-guard; the tester's scope run is the gate)
                             tell the user (§5) and STOP
user: "confirm …"          → sync.py confirm <R> --by user --text "…"
sync.py stage <R> restamp  → python3 tools/parity/restamp.py --app <url> --base <baseCommit> --confirm "<the words>" <R>
                             (or --no-scope-guard while siblings are dirty)
sync.py stage <R> commit   → commit (§6), sync.py done <R> --commit <sha> --gate "<line>"
```

### 3.1 Start an agent

Parallel work (user, 2026-10-22): at most 10 agents at the same time, only on items that share no file. Developers of
page-only items may run in parallel; the tester and the documenter of one item may run while the developer of
another item runs. An item with a shared grant runs alone (nothing else active). An agent runs in the background:
act on its report at once (the hand-back message or the completion notification, whichever comes first). Never end
the turn only to wait for a notification: on 2026-10-22 the notification came with the next user message and the run
stopped for 6 hours. When the agent type is not loaded yet, use `subagent_type: "general-purpose"` and start the
prompt with: `First read .claude/agents/<name>.md and follow it as your role.`

Developer:

```
Agent(subagent_type="sync-developer", model="<devModel>", description="<R> dev",
  prompt="Route <R>, mode <new | loop <n> | resume>. Brief: migration/sync/handoffs/<R>/brief.md.
          Write dev.md in the same folder. Return only the Result and Questions sections.")
```

Tester:

```
Agent(subagent_type="sync-tester", model="sonnet", description="<R> test",
  prompt="Route <R>. Brief: migration/sync/handoffs/<R>/brief.md. Developer report: dev.md in the same folder.
          The dev server runs on <url>. Write test.md. Return only the Result and Questions sections.")
```

Documenter:

```
Agent(subagent_type="sync-documenter", model="sonnet", description="<R> docs",
  prompt="Route <R>. Brief, dev.md and test.md are in migration/sync/handoffs/<R>/. Write docs.md. Return only
          the Result and Questions sections.")
```

Do not paste the brief, the parity reports, the DOM, AGENTS.md, pack.md, contexts, account labels or the user's
history into a prompt: the brief carries the paths.

### 3.2 After each agent

1. Read the status line of its report. Read the full report only when the status is not `pass`.
2. Record the tokens: `sync.py tokens <R> --agent dev|test|docs --n <N> --model <m>` (`subagent_tokens` of the
   completion notification; `--n 0` when no number is given, add it when the notification comes).
3. Act on the status:

| Agent      | Status     | Do                                                                                                  |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------- |
| developer  | `pass`     | `sync.py stage <R> test`                                                                            |
| developer  | `question` | `sync.py ask <R> --text "..."`, ask the user (§5), stop this item (other items continue)            |
| developer  | `blocked`  | `sync.py block <R> --reason "..."`, tell the user                                                   |
| tester     | `pass`     | `sync.py stage <R> docs`                                                                            |
| tester     | `fail`     | loop < 2: `sync.py fail <R>`, `sync.py brief <R>`, developer mode `loop <n>`. loop = 2: §3.3        |
| tester     | `blocked`  | fix the cause when it is the dev server (§4) and run the tester again; otherwise block              |
| documenter | `pass`     | `sync.py stage <R> spec`, then `review`                                                             |
| documenter | other      | run the documenter once more with the problem in the prompt; then block                             |

### 3.3 Failure after two fix loops

1. `git stash push -u -m "sync/<R>/failed" -- app/src/pages/<R> migration/screens/<R>` (and the granted shared
   paths). Never `git reset --hard` or `git checkout .`.
2. `sync.py block <R> --reason "<the failures in one line>" --stash "sync/<R>/failed"`.
3. Tell the user: the failures from `test.md`, the stash name, the options (fix by hand, change the item, retry).
4. When the user decides: `sync.py unblock <R> --by user --text "..."`; to restore the work: `git stash pop`.

## 4. Dev server

Before the first brief of a run and before each test stage:

1. `curl -s -o /dev/null -w "%{http_code}" http://localhost:5173/UBTConnect/HomeFeed` and
   `lsof -p $(lsof -nP -iTCP:5173 -sTCP:LISTEN -t | head -1) -a -d cwd`: the folder must be `<project root>/app`.
   A 200 alone does not prove it (2026-10-22: port 5173 served another clone). When another folder holds the port,
   do not stop that server: start this repo's server on 5174 (`npm --prefix app run dev -- --port 5174 --strictPort`)
   and use that URL everywhere (`--app`).
2. When nothing answers, start `export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH && npm --prefix app run dev`
   in the background (Bash `run_in_background`) and wait until the curl prints `200`, 60 seconds at most.
3. Keep-awake for an unattended run: `caffeinate -i -s -m` as its own background process. Never wrap node or npm in
   `caffeinate` (it picks the Homebrew Node 26 and vitest fails).

## 5. The user gate and the questions

After `route.py ready <R>` (stage `review`), tell the user, in Vietnamese:

- the link `http://localhost:5173/UBTConnect/<R>` (the mock scenarios `?mock=` the spec names);
- what changed in TST and what the fix did (3 lines, from `dev.md` and `docs.md`);
- the decisions to confirm (the bullets of `route-spec.md` that `ready` printed);
- the parity line per state (from `test.md`).

Then stop for that item. The user answers `confirm …` or reports what is wrong. A report goes in with
`route.py feedback <R> --kind bug|todo|question --text "..." --by user`; the developer fixes it in mode `loop <n>`
with the user's words in the prompt; then `route.py fixed <R> F<n> --note "..."`, the tester, `ready` again.

A developer question: `sync.py ask <R> --text "..."`. Ask the user with the evidence, the options (a, b, c) and a
recommendation (CLAUDE.md). Never answer it yourself. Class C and D items start only after an answered question.

### 5.1 Advisors, when the user delegates decisions

When the user says that an advisor decides (for example "nhờ opus quyết"): one narrow question per agent call; a
Sonnet agent looks up the facts (captured DOM, compiled code, file contents; no installs); an Opus agent gets the
facts and gives one recommendation, a one-line reason and its confidence; when the confidence is not high, a Fable
agent (`model: "fable"`) gets the same question without the answer of Opus; agree → use it, disagree → the more
conservative option, row marked "split". Record each row in `migration/sync/decisions-<date>.md`
(`Id | Item | Context | Options | Choice | Reason | Advisors`) with the user's instruction quoted.

## 6. Commit

The user gave a standing approval for local commits when the work is done and checked (CLAUDE.md rule 7).

1. After the restamp printed `built` for the route, run `git status --short`. Every changed file must be in `dev.md`
   or `docs.md`, under `migration/sync/`, `migration/screens/<R>/` (parity, checkpoint, notes, spec, questions,
   finished.json), `migration/board.md`, `migration/metrics/ledger.csv`, `migration/knowledge/`, `app/docs/`,
   `migration/route-check/`. A file of another active item stays out of this commit (`git add` by path).
2. Commit:

   ```
   sync(<R>): <what the route now matches, 1 line>

   <summary line of dev.md>

   parity: <states>/0 (route.py parity, every state current); tester: pass (loops <n>); user: confirm (<date>)
   Agents: developer <model> (fix loops <n>), tester sonnet, documenter sonnet
   ```

3. `sync.py done <R> --commit $(git rev-parse --short HEAD) --gate "<the parity line>"`.
4. Never push and never merge (CLAUDE.md, rule 7).

## 7. Resume

`sync.py status` shows every active item and its stage. Continue each at that stage:

| Stage     | Do                                                                               |
| --------- | -------------------------------------------------------------------------------- |
| `brief`   | `sync.py brief <R> --app <url>`, then the developer in mode `new`.               |
| `dev`     | The developer in mode `resume` (or `loop <n>` when loop > 0).                    |
| `test`    | Dev server, then the tester.                                                     |
| `docs`    | The documenter.                                                                  |
| `spec`    | `route.py spec-done <R>`, then `stage review` and `ready`.                       |
| `review`  | Waits for the user: repeat the review message (§5).                              |
| `restamp` | `restamp.py` (§3), then `stage commit`.                                          |
| `commit`  | §6.                                                                              |

## 8. Stop and report

Stop at: a user gate, a question, a block, a failed preflight, the end of the catalog.

1. When only `migration/sync/state.json`, `log.md` and `migration/metrics/ledger.csv` changed since the last commit,
   commit them: `chore(sync): state after <R>`.
2. Tell the user in Vietnamese, in 5 lines: the items done in this run with their commits; the items that wait for
   the user's confirm (links); the open questions; the tokens of the run (`sync.py report`); the next items.
3. At the end of the wave: the full gates (`npm --prefix app run ci`, `parity_sweep.py --app <url>` with
   `WITH DIFFS 0`), the exemption review for the user, a context note in `migration/contexts/` and the `INDEX.md`
   "Now" block (CLAUDE.md, "Context notes").

## 9. Never

- Start an item before `sync.py begin`, or a class C or D item before the user's answer.
- Call `route.py start` on a finished route, or `--allow-writes` on TST.
- Confirm a route, answer a decision or add an exemption for the user.
- Run more than 10 agents at the same time, or two agents on the same files, or anything next to a shared-grant item.
- Do the work of an agent yourself.
- Discard changes: use `git stash`. Push or merge.
- Read `.auth/` or `migration/.raw/`.
- Edit `items.json` by hand: change the triage table and run `sync.py import` again.
