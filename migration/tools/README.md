# Orchestrator tools

Run them from the project root. The pipeline itself stays in the skill (`.claude/skills/outsystems-screen-spec/scripts`).

Earlier foundation tools in this folder each describe themselves in their docstring:
- `contract_gen.py`: the API contract, `app/src/api/openapi.yaml`;
- `docs_gen.py`: the reference pages in `app/docs/reference`;
- `sitemap.py`, `route_discovery.cjs`, `review_page.py`, `block_pack.py`, `css_*`, `*_observe.cjs`, `static_entities.py`.

The scripts below were saved from the 2026-10-16/17 session for later sessions. They only chain the skill's commands.
Node comes from `~/.nvm/versions/node/v24.21.0/bin`, and Playwright from `node_modules/playwright` at the project root.

| Script | What it does | When |
|---|---|---|
| `parity_sweep.py [--app URL] [Route…]` | `route.py parity` on every finished route (or the ones named), one line each, then a total. Report only. About 10 min for 64 routes | After any change to a parity input: route code, `src/shell`, `src/shared`, `src/lib`, `src/components`, `src/mocks`, `src/app`, `public/UBTConnect`, `index.html`, legacy CSS, `migration/parity-exemptions.json` |
| `restamp.py --confirm "<user's answer>" Route…` | Per route: parity → `step parity` → `ready` → answer the review with the user's text → `finish`. Routes with differences are only reported | When a finished route's own code changed and the user confirmed it in the conversation (CLAUDE.md rules 2 and 4). Never with an invented confirm |
| `qa_dev_demo.cjs [--settle ms] [--out dir]` | Opens the 64 URLs of `qa-urls.json` on the dev server (:5173) and the demo (:8099), compares visible text, errors, failed requests and broken images. Saves screenshots | After `npm --prefix app run build:demo`, before sharing a new demo |

Servers:
- dev: `npm --prefix app run dev` (http://localhost:5173)
- demo: `node app/dist-demo/serve.mjs 8099` (http://localhost:8099/UBTConnect/)

Related checks in the app:
- `npm --prefix app run ci`: types, lint, format, unit tests, build.
- `npm --prefix app run e2e:pwa`: PWA end-to-end.
- `npm --prefix app run lighthouse`: Lighthouse on the demo build.
