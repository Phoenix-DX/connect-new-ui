# Brief · F59-b · Split the large containers files (400 lines or less)

Move step outside `steps.json` (no `rf.py` state). Decision: user, 2026-10-25 (question F59, answer "Chỉ tách
component/page (Recommended)"): split the code files of `components/`, `containers/` and `pages/` that are over 400
lines; accept the generated files, the api types and mappers, and `lib/*/actions.ts` (F35). Plan v2 §7 metric "Lines of
the largest page or component file": target 400 or less. Group b of 3.

| Field | Value |
|---|---|
| Kind | move inside the same folder (split a file into smaller modules; no logic change) |
| Parity level | visual, all routes |
| Developer model | sonnet |
| Handoff folder | `migration/refactor/handoffs/F59-b/` |

## Files

- `app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx (570)`
- `app/src/containers/ShareSheet/ShareSheetContainer.tsx (526)`

## Change

1. Split each file into modules of 400 lines or less, by responsibility, in the style of the page template
   (`app/docs/guides/page-template.md`): view and hook apart; one hook per block with state; pure state helpers
   (`*State.ts`) apart from flows; sub-views (`components/` of the same folder) for big render branches; for a logic
   file (`connect2Feed.ts`, `provider.ts`), split by concern (types, parsing, mapping, actions).
2. Cut and paste only: same logic, same order of effects, same hook order inside a component, same DOM. Export names
   that other files import stay the same (re-export from the old file only if needed to keep importers unchanged; the
   knip baseline must not grow; prefer updating the few importers).
3. Keep the `@origin` tag in each new file that ports part of a block (one tag per file, R4) and keep the comment
   style. Tests move with their code; add no new behavior.
4. Checks: `npm --prefix app run typecheck`, vitest of the changed folders, eslint; the architecture baselines must not
   grow (`npm --prefix app run arch`, `node app/build/check-arch-baselines.mjs`,
   `python3 migration/tools/refactor/arch_baseline.py check --strict`, `npm --prefix app run unused`). Report the new
   line counts.

## Gate commands for the tester

```
npm --prefix app run ci
python3 migration/tools/refactor_parity.py --level visual --all --ref both --app <URL from the master> --report migration/refactor/handoffs/F59-b/parity.md
npm --prefix app run build && node app/build/bundle-report.mjs   # W21: +0.3 kB per step
```

## Not in this step

Other files over 400 lines (generated, api types and mappers, `lib/*/actions.ts`); docs (the documenter).
