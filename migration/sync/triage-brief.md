# Triage reader brief (TST sync wave, 2026-11-07)

You read the evidence of ONE group of routes and write facts. You do not change code, captures, exemptions or the
triage table. You never open `.auth/` or `migration/.raw/`. Budget: at most 70 tool calls; read each file once (grep
or a line range, never a whole raw DOM); write your notes with the Write tool in one go at the end.

## Context

- On 2026-11-07 every captured route was re-captured from TST (read-only). The React app was built to the previous
  captures. `migration/sync/sweep-2026-11-07.txt` is the parity sweep of the React app against the fresh captures:
  30 routes differ. `migration/sync/triage-2026-11-07.md` has one draft row per route (class `?`).
- Commit `2fe9efaf` is the state before the re-capture: `git diff 2fe9efaf -- migration/screens/<R>/analysis/dom/default.html`
  shows what changed in the captured DOM (pretty-printed; other states: `offline.html`, `loading.html`, `<step>.html`).
  `git diff 2fe9efaf -- migration/screens/<R>/analysis/calls.json` shows the call changes.
- `migration/sync/drift-2026-11-07.json` → `routes.changed[<file>].routes` lists the TST compiled files that changed
  since each route's previous capture; `migration/knowledge/tst-drift-2026-11-07.md` is the readable page.
- The parity reports: `migration/screens/<R>/parity/<state>.json` (`counts`, `diffs[]` with kind, path, expected,
  actual; `pixel`; `calls`). Read `counts` and the first 15 `diffs` of each state; group the rest by `kind` and the
  `data-block` in the path.
- `migration/sync/capture-2026-11-07.md`: which routes were captured today, with which account, and the failed runs.

## Classes (one per route; name a mix when the diffs split)

- **A** TST changed its code (a block or screen changed in the drift json AND the DOM diff shows new or changed
  elements, classes, text or calls) → fix React.
- **B** mock data drift: the captured DATA changed (fewer or more list items, other names, empty list, other ids) and
  the TST code did not → fix the fictional data or mocks, or keep the old capture (say which).
- **C** capture artefact: a skeleton or loading state, an animation phase, a masked-text width, a time-dependent
  label, a shifted avatar → exemption candidate or a re-capture with a longer settle (say which).
- **D** React gap that existed before: the previous capture shows the same thing and React never matched (check the
  old parity report in git: `git show 2fe9efaf:migration/screens/<R>/parity/default.json | head -c 2000`).

## Output: `migration/sync/triage-notes/<your file>.md`

One section per route, in this exact shape (facts with evidence; no recommendation beyond the class):

```
## <Route>
- Class: A | B | C | D | mixed (A+C ...)
- Size: S (≤ 10 diffs, one block) | M | L (≥ 100 diffs or 3+ blocks)
- TST files changed since the capture: <names or none>
- DOM diff (git diff 2fe9efaf …/dom/default.html): <3–6 lines: what was added, removed or changed, with line counts>
- Parity diffs: <per state: counts; the kinds and the data-block paths that carry most diffs; 2–4 example diffs
  as kind/path/expected→actual>
- Calls: <changed or not; which actions>
- Data drift signs: <empty list, item count old→new, masked text widths, …, or none>
- Artefact signs: <skeleton, animation, time label, …, or none>
- React code touched by the diff paths: <app/src/pages/<R>/… and the shared components whose @origin matches the
  data-block names in the diff paths (grep -rl "@origin <Module.Flow.Block>" app/src/components app/src/containers)>
- Shared: <the shared component paths above, or ->
- Unsure: <what you could not settle, or none>
```

End the file with `## Summary` : one line per route `Route | class | size | shared?`.
