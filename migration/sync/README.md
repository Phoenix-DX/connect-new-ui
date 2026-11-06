# TST sync wave: user guide

The React app is brought back to the live OutSystems TST routes after a fresh capture. The work runs through an
agent team, like the architecture refactor (`migration/refactor/agent-team-plan.md`), with the gates of the route loop
(`migration/AGENTS.md`). Plan and decisions of 2026-11-06/07: the plan file of the session, `migration/contexts/` (the
context note of the wave).

## Who does what

| Part              | Where                                   | Job                                                                                     |
| ----------------- | --------------------------------------- | --------------------------------------------------------------------------------------- |
| Master            | the main session, skill `tst-sync`      | Picks the item, starts the agents, runs the gates, asks the user, restamps, commits.     |
| `sync-developer`  | `.claude/agents/sync-developer.md`      | Fixes one route to its fresh capture. Writes only the allowed paths. Does not commit.    |
| `sync-tester`     | `.claude/agents/sync-tester.md`         | Runs the gate (scope, parity, consistency, checks) and reviews the diff. No code change. |
| `sync-documenter` | `.claude/agents/sync-documenter.md`     | Records the change (route spec, drift page, CHANGELOG-sync, route check). Markdown only. |
| You               | the chat                                | Test each route on localhost and answer `confirm …`; answer the questions.               |

## Commands

| Type                                  | Result                                                                                   |
| ------------------------------------- | ---------------------------------------------------------------------------------------- |
| `/tst-sync status`                    | Where the sync is, active items, open questions, next items. No work.                    |
| `/tst-sync import <triage.md>`        | Builds the catalog from the triage table.                                                |
| `/tst-sync start`                     | Records your start, then continues. Only you can start it.                               |
| `/tst-sync continue [--until <Route>]`| Runs the items that can run, in parallel when they share no file, to the end or `<Route>`. |
| `/tst-sync route <Route>`             | Runs one item.                                                                           |
| `/tst-sync confirm <Route> "confirm …"` | Records your confirm, restamps the route, commits.                                       |

The master stops at a question, after two failed fix loops, and at each route's review (your test). Answer in the
chat; the master records your words and continues.

## Stages of one item

`brief > dev > test > docs > spec > review > restamp > commit`. `test` fails back to `dev` at most twice. `review`
waits for your `confirm`. `restamp` runs `tools/parity/restamp.py` (parity, ready, your answer, finish). One commit
per route, `sync(<Route>): …`.

## Files

| File                          | Content                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| `captureBase.txt`             | The commit before the re-capture of 2026-11-07: the DOM diff in each brief is against it.   |
| `drift-<date>.json`           | Output of `tools/tst/survey_diff.py` (the TST files that changed since each route's capture). |
| `capture-<date>.md`           | Result of the re-capture per route.                                                         |
| `sweep-<date>.txt`            | Output of `parity_sweep.py` after the re-capture.                                           |
| `triage-<date>.md`            | The triage table (one row per route with differences), the exemptions to review, the questions. |
| `decisions-<date>.md`         | Your answers and the delegated decisions, with your words.                                  |
| `items.json`                  | The catalog, made by `sync.py import`. Do not edit by hand.                                  |
| `state.json`, `log.md`        | Progress and one line per event.                                                            |
| `handoffs/<Route>/`           | `brief.md`, `dev.md`, `test.md`, `docs.md` of each item, committed with the route.          |

## Triage table (read by `sync.py import`)

```
| Route | Class | States with diffs | Kinds | Changed TST files | Shared paths | Dev model | Owner | Note |
```

- `Class`: A = TST changed its code (fix React); B = mock data drift (fix the fictional data or mocks);
  C = capture artefact (exemption candidate, you decide); D = React gap that existed before (you decide).
- `States with diffs`: `default:3; offline:1`. `Kinds`: structure, class, attr, text, style, pseudo, layout, position,
  pixel, call. `Shared paths`: repo paths outside the page the fix needs, or `-` (a path makes the item run alone).

## Tools

```
python3 tools/sync/sync.py --help
python3 -m unittest tools/sync/test_sync.py
python3 tools/tst/survey_diff.py --help
python3 tools/parity/restamp.py --app http://localhost:5173 --confirm "confirm (user, <date>: ...)" <Route>
```

## After a break

Type `/tst-sync continue`. The master reads `state.json` and continues every active item at its stage.
