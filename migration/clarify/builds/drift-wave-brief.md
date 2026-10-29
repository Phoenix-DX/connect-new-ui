# Drift wave, build: brief for one agent (2026-10-29)

Decisions: `../review/drift-decisions-2026-10-29.md` (work packages WP1 to WP9, user decisions, recommendations of the
small questions, which the user accepted). Evidence: the four triage reports `../review/drift-triage-*.md` (rows,
file:line, old vs new TST code). TST is the source of truth (the live code of 2026-10-27).

## Rules

- Never open `.auth/` or `migration/.raw/`. No TST access and no MCP unless your prompt says so. Never commit or `git add`;
  do not touch `.claude/settings.json`. Use Edit/Write (a one-off exact-match script for many identical edits is fine;
  say so). Tests first for logic. Meaningful fictional mock data with the captured lengths.
- Seven agents work at the same time. Change only the files of your package (the ownership list in your prompt). If
  you need a file of another package, stop that part and report it. Do not edit `migration/parity-exemptions.json`,
  `migration/capture-plan.json` or the skill scripts unless your prompt says so.
- Architecture: `app/docs/guides/page-template.md` (layers, flow scope rules), `app/docs/architecture/overview.md`.
- Parity: `python3 .claude/skills/outsystems-screen-spec/scripts/route.py parity <S> --app http://localhost:5174` for
  the routes your prompt names, after your last change (the dev server runs; do not start another). Counts must go
  down to the C-class rest; list what is left with its class. Do not run the full sweep, `npm run ci` or `npm run unused`.
- Budget: at most 80 tool calls. One-shot reads.

## Checks (from `app/`)

`npx tsc --noEmit` (report other agents' errors as seen), `npx eslint` and `npx prettier --check` on changed files,
`npx vitest run` on your folders, `npm run arch`, `npm run dup`.

## Output

Write `drift-<WP>.md` in this folder: files, tests, parity before/after per route and state, what is left (class),
questions (options and a recommendation). Reply with the same summary and your tool-call count.
