# Docs: P4-F7 (ADR-15 back into `stack.json`)

## Result

Status: pass.

`migration/architecture.md` had ADR-15 text that `migration/stack.json` did not have (P3-1 rules, P3-2, P3-3, P4-1 to
P4-5 lines, the ESLint sentence of rules 10 and 11, the route guard sub-bullet). I put this text into the `decision`
field of the ADR-15 entry, with the same words. No other entry, item, rule, dependency or status changed.
`stack.py render` then gave a file that is identical to the old `architecture.md`. The documenter agent now edits
ADR-15 in `stack.json` and runs `stack.py render`.

## Files changed

- `migration/stack.json` (ADR-15 `decision` only; 1 line in the diff, the field is one JSON string)
- `migration/architecture.md` (written by `stack.py render`; no content change)
- `.claude/agents/refactor-documenter.md` (table row for ADR-15)
- `migration/refactor/handoffs/P4-F7/docs.md`

## Commands run

- `cp migration/architecture.md <scratchpad>/architecture.old.md`
- `python3 .claude/skills/outsystems-screen-spec/scripts/stack.py render`
- `diff <scratchpad>/architecture.old.md migration/architecture.md`
- `python3 migration/tools/ste_lint.py migration/architecture.md`

## Render diff

Empty. The new `architecture.md` equals the old one byte for byte. `git diff --stat migration/architecture.md` shows
no change.

## Checks

- `ste_lint.py migration/architecture.md`: 20 errors, 40 warnings (20 errors at HEAD; not higher).
- `stack.json` parses as JSON.

## Questions

None.
