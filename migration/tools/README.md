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

## Refactor parity (architecture refactor, plan v2 §4.2)

`refactor_parity.py` is the parity gate of the refactor. It reuses `parity_check.cjs` and the state options of
`route.py parity`, but writes nothing into `migration/screens/` (the route reports there are frozen at the tag
`migration-complete`). Check with `git status --short migration/screens`: it stays empty.

```
python3 migration/tools/refactor_parity.py --level strict|visual [--all | --routes R1 R2 | --changed [--since <commit>]]
    [--ref outsystems|self|both] [--record-self] [--report <file.md>] [--app URL] [--jobs 4]
```

| Option | Effect |
|---|---|
| `--level strict` | Every check of `route.py parity` |
| `--level visual` | Skips `structure`, `class`, `attr`; `style` and `pseudo` only on elements that are visible on both sides |
| `--ref` | `outsystems`: the capture, exemptions `migration/parity-exemptions.json`. `self`: the self-parity reference, exemptions `migration/refactor-exemptions.json`. Default `both` |
| `--record-self` | Records the running app as the self-parity reference in `migration/refactor-reference/<Route>/<state>/` (`tree.json`, `screenshot.png`), then stops. About 2 min for 64 routes, 160 MB, so the folder is in `.gitignore`: record it again on a new clone, at the commit that is the reference |
| `--changed` | Routes whose files changed (`git diff --name-only <since>` and untracked files; default `HEAD~1`). A change in a shared path (`app/src/app`, `platform`, `api/client`, `legacy/os`, `styles`, `shell`, `shared`, `lib`, `components`, `mocks`, `app/public`, the exemption files) selects all routes. A change in `app/src/screens/<R>/` selects `<R>`. From P0-3 the file `app/docs/refactor/graph.json` (`{"routes": {"<R>": ["app/src/...", ...]}}`, the import closure per route) selects more routes |
| `--report` | Markdown: one line per route and state, a total per reference. Default `migration/refactor-parity/last/report.md` |
| `--jobs` | Parallel browser runs (default 4) |

Run time: about 4.3 min for `--all --ref both` (298 runs, 4 jobs). Exit code 1 when a route has a difference or
a state did not run. A run that differs is repeated once; when the second try is clean, the run counts as clean and the report names it.
Outputs of a run (reports, screenshots, diff images) go to `migration/refactor-parity/last/` (replaced at each run, in
`.gitignore`). The OutSystems side names the frozen `migration/screens/<R>/parity/<state>.diff.png` path in pixel
details, because the entries of `parity-exemptions.json` match on it.

Reports written with `--report app/docs/refactor/reports/<step>.md` are generated output. `app/.prettierignore` lists
`docs/refactor/reports`, so they never break `format:check` in `npm --prefix app run ci`.

Self-parity details: the reference stores the serialized tree (computed styles, boxes), the screenshot and the service
calls of each state. Both the recording and the comparison fix the page clock (`2026-03-12T10:30:00Z`), finish finite
animations and pause endless ones at their start. Calls are compared as the set of distinct calls per phase (order and
repeat counts depend on timing).

`migration/refactor-exemptions.json` is a list; each entry (same matching as `parity-exemptions.json` rules):

```json
{"id": "P3-2-LOGIN-HEADER", "step": "P3-2", "reason": "why the difference is accepted",
 "confirm": "user's answer, date", "pathRegex": "...", "kinds": ["style"], "detailRegex": "...",
 "states": "^default$", "routes": ["Login"]}
```

Only `id`, `step`, `reason` and `confirm` are required; the matching fields are optional (`routes` limits the entry to
the named routes). Add an entry only with the user's confirm.

### New options of `parity_check.cjs` (skill script, all off by default, `route.py` does not use them)

- `--skip-kinds structure,class,attr`: drop these kinds from the result.
- `--visible-only`: run the style and pseudo checks on visible elements only.
- `--record-self <dir>`: record the running app as a reference.
- `--self-ref <dir>`: compare with a record instead of the replayed capture.
- `--fixed-time <iso>`: fix the page clock.
- `--freeze-animations`: finish finite animations and pause endless ones.
- `--diff-ref <path>`: the diff image path named in pixel details.

Servers:
- dev: `npm --prefix app run dev` (http://localhost:5173)
- demo: `node app/dist-demo/serve.mjs 8099` (http://localhost:8099/UBTConnect/)

Related checks in the app:
- `npm --prefix app run ci`: types, lint, format, unit tests, build.
- `npm --prefix app run e2e:pwa`: PWA end-to-end.
- `npm --prefix app run lighthouse`: Lighthouse on the demo build.
