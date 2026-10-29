# Item 10: brief for one route agent (new TST screens, 2026-10-28)

The user decided to build the screens that the TST publish of 2026-10-27 added (board `decision=build`, user
2026-10-28). Facts per screen: `../review/item10-new-screens.md`. The capture of your route is done (read-only guard on).

## What to read

1. `.claude/skills/outsystems-screen-spec/references/route-agent.md` (pipeline steps, questions) and
   `migration/AGENTS.md` (rules). **Their code paths are from before the refactor.** Where they say
   `app/src/screens/<S>/`, `src/shell`, `src/shared`, `src/shared/osui`, `src/lib/os-wire.ts` or `api.ts`, use the
   current layout below instead.
2. Your `migration/screens/<S>/pack.md`, once, fully.
3. The current architecture: `app/docs/guides/page-template.md` (folders, hook shape, flow scope author rules),
   `app/docs/guides/api-and-mocks.md`, `app/docs/guides/os-widgets.md` (only the widgets you need),
   `app/docs/guides/screens.md` (route registration). Look at one finished page of the same family as a model.

## Current layout (refactor plan v2, done; user decisions R1 to R8)

| Old path | Now |
|---|---|
| `app/src/screens/<S>/index.tsx` | `app/src/pages/<S>/<S>Page.tsx` (the route, `@origin` of the screen), `inputs.ts` |
| `api.ts` with `callAction` | `app/src/api/<domain>/` (types, mapper, repository, keys, hooks, barrel) |
| `src/shared/osui/`, shared blocks | `app/src/components/<domain>/` (props only), `app/src/containers/<Name>/` (criterion in page-template) |
| `src/shell` | `app/src/platform/` (navigation, flow scope, feedback), `app/src/app/` (routes) |
| `mocks.ts` of the screen | `pages/<S>/mocks.ts`, or the container's or module's `mocks.ts` (`app/src/mocks/modules/…`) |

A page never imports another page. A block that another page owns today moves to `components/` or `containers/`.

## Rules

- Never open, read or print anything in `.auth/` or `migration/.raw/`. No network to TST, no MCP (the orchestrator
  asks MCP facts for you: record a `fact` question).
- Never commit, push or `git add`. Do not touch `.claude/settings.json`. Use Edit/Write (no `sed -i`).
- Flow scope rules of item 8 apply to every new hook (page-template "Flow scope"): `flow.fetch` for data actions and
  aggregates (R1), `flow.own` for own actions after an await (R3), `flow.events` for block events, `flow.run` for widget
  handlers; navigation and toasts as they are.
- Mock data: plausible fictional names, places and texts, never "Sample 1" placeholders; keep the captured text lengths.
- Tests first (Vitest + Testing Library), next to the files, as in the other pages.
- Pipeline: `route.py step <S> spec` is done by the orchestrator and `pack.md` exists. You write `route-spec.md`,
  record questions (`route.py ask`), `route.py spec-done`, `route.py step <S> build`, build, then
  `route.py step <S> parity` and `route.py parity <S> --app http://localhost:5174` (the dev server runs; do not start
  another one). Fix differences in markup or logic, never in the capture or in the exemptions file.
- **Do not run `route.py ready`**: its file gate still looks for `app/src/screens/<S>/index.tsx`; the orchestrator
  deals with it.
- Budget: at most 70 tool calls. One-shot reads. Write the build note with the Write tool.

## Wave of 2026-10-29: several agents in one tree

- Five agents work at the same time: Bookmarks, OneSchoolGlobalCarousel, OrbitAdminMilestones + OrbitAdminMilestoneDetail,
  PassportScan, and the item 9 platform build (`app/src/app/`, `app/src/platform/`, `app/build/`). Change only the
  files your prompt gives you. Never edit `app/src/platform/**`, `app/src/legacy/**`, `app/src/app/router.tsx`,
  `app/src/app/screens.ts` or another route's page. If you need one of them, stop that part and report it.
- Pages are found by `import.meta.glob('../pages/*/*Page.tsx')` (`app/src/app/screens.ts:15`), and
  `app/src/app/routes.generated.ts` already has the rows of the new screens (generated, item 10 tooling). Do not edit it.
- API contract (user decision I10-6 (a)): do not edit `app/src/api/openapi.yaml` or `schema.d.ts`. A call that the
  contract does not have gets the interim form of NotificationDetails (`app/src/api/notification/notificationDetail.ts`):
  one `@ts-expect-error` on the call, a hand-written wire type, and a note in your build note. The orchestrator
  regenerates the contract after the wave and removes the interim lines.
- `route.py` now uses the current layout (`migration/clarify/builds/item10-routepy.md`). Still do not run
  `route.py ready`.

## Routes that are not captured (user decision, `route.py no-capture`)

PassportScan, OrbitAdminMilestones and OrbitAdminMilestoneDetail have no capture, no `analysis/` and no `pack.md`.
The compiled TST files are in `migration/screens/<S>/sources/` (extracted from the live survey by
`migration/clarify/tools/extract_sources.py`; run it for another file you need). Module controllers and models:
`migration/runtime-sources/` (for example `Connect2_OrbitMobile_MUI.controller.js`); look there first.
- Write `route-spec.md` from the compiled code (view, model, actions) and cite file:line. `route.py spec-done`.
- No parity: the user reviews the page by eye. Build the markup from the compiled view (`React.createElement` tree,
  classes, `data-block` names) as the captured pages do, and reuse the existing React blocks.
- Mocks: meaningful fictional data with the shape of the compiled model.

## Checks (from `app/`)

- `npx tsc --noEmit`, `npx eslint <changed files>`, `npx prettier --check <changed files>` (write if needed).
- `npx vitest run <your folders>`; report any "Errors" line.
- `npm run arch`.
- Do not run `npm run ci`, `npm run unused` or `parity_sweep.py`: the orchestrator runs them.

## Output

Write `migration/clarify/builds/item10-<S>.md`: Files (code, tests, docs, mocks), Tests (written first), Parity
(per state: clean, or the differences left and why), Differences from TST with evidence, Questions (ids from
`route.py ask`, options and a recommendation), Checks, tool-call count. Reply with the same summary.
