# context-073: convention review of `app/src` (2026-11-04)

## Result
- Read-only review of folder, file and identifier conventions in `app/src` at `978fd4fd`:
  report `../reviews/app-conventions-review-2026-11-04.md`.
- 16 findings (C-01 to C-16), 8 decisions for the user (D1 to D8), plan N0 to N5 with steps, gates and effort.
- Main cause: no single rule for "OutSystems name or React name". `components/` uses React names; `pages/`, `lib/`
  and part of `platform/` keep OutSystems names. No lint checks a name.
- No file in `app/` changed. One Opus session, no subagent, scripts in the session scratchpad.

## Decisions (who, date)
- User 2026-11-04: CLAUDE.md route count corrected (84 routes on TST: 68 build, 16 skip), commit `978fd4fd`.
- User 2026-11-04: do not correct the other docs that still say 64 routes.
- None of D1 to D8 is decided.

## Facts learned (evidence)
- In the report: section 2 (what is consistent), section 3 (findings), section 6 (what must not change).
- `catalog.py:42`, `docs_gen.py` and `contract_gen.py` read `// @os-block`; removing the tag needs a tool change first.
- The plan v2 §7 metric "pages import `platform/` only through barrels" is not met: 200 page files import past an area.

## Files changed
- New: `migration/reviews/app-conventions-review-2026-11-04.md`, this context. Updated: `INDEX.md`.

## Open issues
- D1 to D8 wait for the user. D3 changes R8 (user, 2026-10-22) when the user picks (b) or (c).
- N4 and N5 overlap WP-7 of context-072; the order of the two plans needs the user.

## Next
- The user reads the report and answers D1 to D8.
