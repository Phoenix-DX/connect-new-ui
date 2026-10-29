# Item 9 build: brief for one build agent (2026-10-29)

The design is approved by the user: `../review/item9-solution.md` (cases D1 to D6, §8 markers, §9 test plan, §10
build steps, §12 user decisions). Evidence: `../review/item9-render-route-errors.md`. Item 8 built the flow scope and
the error page: `../review/item8-solution.md` §2 and §9, `app/docs/guides/page-template.md`.

## Hard rules

- Never open, read or print anything in `.auth/` or `migration/.raw/`. No network, no MCP, no TST access.
- Never commit, push or `git add`. Do not touch `.claude/settings.json`. Use Edit/Write (no `sed -i`).
- Five route agents build new pages at the same time (Bookmarks, OneSchoolGlobalCarousel, OrbitAdminMilestones,
  OrbitAdminMilestoneDetail, PassportScan). Do not edit `app/src/pages/**`, `app/src/components/**`,
  `app/src/containers/**`, `app/src/api/**` or `app/src/mocks/**`. The Bookmarks agent may change the lines of
  `platform/flags`, bootstrap and `platform/navigation/navigationGate.ts` that name MyBookmarks or BookmarksByGroup:
  leave those lines alone.
- The other item 9 agent works at the same time. Agent 9A owns B1 to B3; agent 9B owns B4 to B7. Both change
  `app/src/app/router.tsx`: 9A only lines 19-23 and 37 (the boundary and the root), 9B only line 43 (the `*` route).
  When an Edit fails because the file changed, read it again and retry.
- Do not run the full `npx vitest run`, `npm run ci`, `npm run unused`, `npm run e2e:pwa` or a parity sweep: the
  orchestrator runs them after the wave. Write the e2e cases; do not run them.
- Budget: at most 70 tool calls. One-shot reads.

## Rules of the design

- Tests first (Vitest + Testing Library), as §9.1 lists them. Keep all other tests green; update the assertions that
  expect today's markers (RouteError, NotMigrated "unknown route") to the approved result.
- Comments cite the TST evidence (probe ids P1 to P8, code facts N/T/E rows) as the design does.
- No markers for D1, D2, D5 in any build (decision 2). D3: the `*` marker only on the dev server with `?review=1`.
- D6: no code (decision 4). B6: confirm N8 against the compiled code (`R281345`, see the findings) before you set
  `replace: true`; if the code does not confirm it, do not change it and report.

## Checks (from `app/`)

- `npx tsc --noEmit` (report errors in other files as seen; do not fix them).
- `npx eslint <your changed files>` and `npx prettier --check <your changed files>` (write if needed).
- `npx vitest run <your test files and folders>`; report any "Errors" line.
- `npm run arch`.

## Output

Write the build note named in your prompt: Files, Tests (written first), Behaviour per case (TST result, React now),
Differences from the design with evidence, Questions (options and a recommendation), Checks, tool-call count. Reply
with the same summary.
