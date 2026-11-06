# Tools

Every reusable script of the project, by purpose. Run them from the project root. Node comes from
`~/.nvm/versions/node/v24.21.0/bin`, Playwright from `node_modules/playwright` at the project root, and the Python
packages from `requirements.txt`. Each script describes itself in its docstring or header comment.

| Folder | Content | Used by |
|---|---|---|
| `pipeline/` | The route pipeline of the skill `outsystems-screen-spec`: `route.py`, `parity_check.cjs`, `batch_capture.cjs`, `site_auth.cjs`, `readonly_guard.cjs`, `record_har.cjs`, `har_to_fixtures.py`, `board.py`, `catalog.py`, `flags.py`, `stack.py`, `ledger.py`, … and `assets/` (site profiles, templates) | `.claude/skills/outsystems-screen-spec/SKILL.md`, `CLAUDE.md` (`$SK`) |
| `parity/` | `parity_sweep.py`, `restamp.py`, `refactor_parity.py`, `qa_dev_demo.cjs` (+ `qa-urls.json`) | parity of the routes, the refactor gate, the demo check |
| `generate/` | `contract_gen.py`, `docs_gen.py`, `css_sets.py`, `sitemap.py`, `static_entities.py`, `block_pack.py`, `review_page.py` | generated files in `app/` and `migration/` (each carries a banner with the tool name) |
| `docs/` | `ste_lint.py`, `check_mermaid.cjs` | the English documents (ASD-STE100) |
| `tst/` | `journey_capture.cjs`, `flag_probe.cjs`, `route_discovery.cjs` | read-only runs on TST (journeys, flag values, route ids) |
| `clarify/` | `tst_source.py`, `flow_pack.py`, `collect.py`, `aggregate.py`, `answers.py`, `artifact_*.py`, … (ex `migration/clarify/tools/`, moved 2026-11-06) | the clarify program (`migration/clarify/`) and its two artifacts |
| `refactor/` | `rf.py`, `gen_steps.py`, `test_rf.py`, `arch_baseline.py` (`npm --prefix app run ci` calls it) | the skill `refactor-master` and its agents |
| `route-check/` | `check_route.py`, `os_static.py`, `os_extras.py`, `os_call_graph.py`, `extras_md.py`, `render_v2.py`, `mcp_client.py`, `unwrap.py`, `paths.py`, `react_calls.mjs`, `render_svg.cjs` | the skill `route-check`; reports in `route-check/` |

History: until 2026-11-05 the scripts lived in `.claude/skills/<skill>/scripts/`, `migration/tools/` and
`route-actions/tools/`. The one-off scripts were deleted that day. Commit `eee05575` is the last one that holds them:
- the refactor step scripts `migration/tools/refactor/add-origin-g*.py`, `f59-*.ts`, `p7-*`, `p8-1-tokens.py`,
  `p9-3-*.py`, `rename-exports-g1-shared.ts`, `strip-compiled-lines-milestonedetail.py`;
- the TST observation scripts `shell_observe.cjs`, `unlock_target.cjs`, `css_observe.cjs`, and `mcp/graph.py`;
- the clarify probes `migration/clarify/tools/probe_*.cjs`, `capture_followup.cjs`, `drift_table.py`, `extract_sources.py`.

## Compiled sources store (`common/sources_store.py`)

Every compiled TST file of the project is in `migration/sources/` (since 2026-11-06 the only place):

| Folder | Content | Index |
|---|---|---|
| `raw/`, `pretty/`, `styles/` | the compiled files and the styles of the route captures, one copy per content | `migration/screens/<S>/analysis/manifest.json`: `{"raw": {name: path}, "pretty": {...}, "styles": {"bundle.css": path, "assets.json": path}}` |
| `survey/` | copies of the live survey: blocks no capture loaded (route check of routes without a capture, block packs) | none; a copy of another survey version gets `@<sha8>` |
| `runtime/` | the OutSystems runtime, module, plugin and SDK files fetched read-only from TST (`moduleinfo.json`, `OutSystemsSettings.js`, …); `css/` the three live stylesheets | `migration/knowledge/runtime-sources.md`; `live-files.txt` lists the files TST changed after the captures (the route check reads those live) |
| `contract/` | producer-module `*.model.js` fetched for the API contract | `migration/contract/README.md` |
| `shell/` | module and UI flow controllers, client variables of the app shell | `migration/shell/README.md` |

Before 2026-11-06 the last four were `migration/blocks/sources/`, `migration/runtime-sources/` (with a `live/` copy
of 286 files), `migration/contract/sources/raw/` and `migration/shell/sources/`; `check` and `gc` leave them alone.

Rules: a store file is never overwritten. The same sha1 is a no-op. Another content under a used name gets
`<stem>@<sha8><ext>`; the first version keeps the plain name. The `styles/` files are always suffixed.

Writer: `analyze_capture.py`. Readers through the manifests: `contract_gen.py`, `static_entities.py`, `css_sets.py`,
`block_pack.py`, `context_pack.py`, `flags.py` and the route check. A file no capture holds comes from the live survey
(`survey/`). Before 2026-11-05 every route kept its own copies (913 MB); the store holds 125 MB.

```
python3 tools/common/sources_store.py check        # every manifest entry exists, every store file is referenced
python3 tools/common/sources_store.py gc           # delete the store files no manifest references (after route.py reset --recapture)
python3 tools/common/sources_store.py migrate [--keep-copies]   # one-off: build the store from per-route copies
```

## Parity and demo (`parity/`)

The scripts below were saved from the 2026-10-16/17 session for later sessions. They only chain the pipeline's commands.

| Script                                          | What it does                                                                                                                                                            | When                                                                                                                                                                                                                               |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `parity_sweep.py [--app URL] [Route…]`          | `route.py parity` on every finished route (or the ones named), one line each, then a total. Report only. About 10 min for 64 routes                                     | After any change to a parity input: route code, `src/platform`, `src/legacy`, `src/shared`, `src/lib`, `src/components`, `src/mocks`, `src/app`, `public/UBTConnect`, `index.html`, legacy CSS, `migration/parity-exemptions.json` |
| `restamp.py --confirm "<user's answer>" Route…` | Per route: parity → `step parity` → `ready` → answer the review with the user's text → `finish`. Routes with differences are only reported                              | When a finished route's own code changed and the user confirmed it in the conversation (CLAUDE.md rules 2 and 4). Never with an invented confirm                                                                                   |
| `qa_dev_demo.cjs [--settle ms] [--out dir]`     | Opens the 64 URLs of `qa-urls.json` on the dev server (:5173) and the demo (:8099), compares visible text, errors, failed requests and broken images. Saves screenshots | After `npm --prefix app run build:demo`, before sharing a new demo                                                                                                                                                                 |

## Refactor parity (architecture refactor, plan v2 §4.2)

`refactor_parity.py` is the parity gate of the refactor. It reuses `parity_check.cjs` and the state options of
`route.py parity`, but writes nothing into `migration/screens/` (the route reports there are frozen at the tag
`migration-complete`). Check with `git status --short migration/screens`: it stays empty.

```
python3 tools/parity/refactor_parity.py --level strict|visual [--all | --routes R1 R2 | --changed [--since <commit>]]
    [--ref outsystems|self|both] [--record-self [--source-commit <rev>]] [--report <file.md>] [--out <dir>] [--app URL] [--jobs 4]
```

| Option            | Effect                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--level strict`  | Every check of `route.py parity`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `--level visual`  | Skips `structure`, `class`, `attr`; `style` and `pseudo` only on elements that are visible on both sides                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `--ref`           | `outsystems`: the capture, exemptions `migration/parity-exemptions.json`. `self`: the self-parity reference, exemptions `migration/refactor-exemptions.json`. Default `both`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `--record-self`   | Records the running app as the self-parity reference in `migration/refactor-reference/<Route>/<state>/` (`tree.json`, `screenshot.png`), then stops. About 2 min for 64 routes, 160 MB, so the folder is in `.gitignore`: record it again on a new clone, at the commit that is the reference                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--source-commit` | With `--record-self`: the commit of the code that the app at `--app` serves, written to the manifest. Give it when the app runs from another worktree (for example the reference commit on port 5175). Default: `HEAD` of this tree                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `--changed`       | Routes whose import closure holds a changed file (`git diff --name-only <since>` and untracked files; default `HEAD~1`). The closure comes from `app/docs/refactor/graph.json` (dependency-cruiser, `modules[].dependencies[].resolved`); the tool runs `npm --prefix app run graph` first when the file is missing or older than the newest commit. Entry of a route: `src/pages/<R>/<R>Page.tsx`. A change in `app/src/app`, `platform`, `api/client`, `legacy/os`, `styles`, `shell`, `mocks`, `app/public`, `app/index.html`, the app build config or the exemption files selects all routes (`shared`, `lib` and `components` are not global: the closure covers them). `--files <path>...` replaces the git diff; `--explain` prints the selected routes and the files that selected them, then exits |
| `--report`        | Markdown: one line per route and state, a total per reference. Default `<out>/report.md`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `--out`           | Output folder of the run, under `migration/refactor-parity/` (anything else is refused). Default `migration/refactor-parity/last`. Only this folder is deleted at the start of a run                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--jobs`          | Parallel browser runs (default 4)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

Run time: about 4.3 min for `--all --ref both` (298 runs, 4 jobs). Exit code 1 when a route has a difference or
a state did not run. A run that differs is repeated once; when the second try is clean, the run counts as clean and the report names it.
Outputs of a run (reports, screenshots, diff images) go to `--out` (default `migration/refactor-parity/last/`; replaced at each run, in
`.gitignore`). The OutSystems side names the frozen `migration/screens/<R>/parity/<state>.diff.png` path in pixel
details, because the entries of `parity-exemptions.json` match on it.

### Parallel runs (Phase 6 worktrees)

Runs at the same time need a different `--out` and a different `--app` each; nothing else is shared (the reference folder
is read-only in a compare run). Each self run starts its own `--hold-third-party` proxy on a free port of `127.0.0.1`. Use a lower `--jobs` when 3 to 4 runs share the machine. `--changed` reads `git diff` of
the main tree, so a tester of a worktree names the routes or the files:

```
python3 tools/parity/refactor_parity.py --routes Profile Menu --ref both --jobs 2 \
    --app http://localhost:5176 --out migration/refactor-parity/p6-3
python3 tools/parity/refactor_parity.py --changed --files app/src/pages/Profile/ProfilePage.tsx --jobs 2 \
    --app http://localhost:5176 --out migration/refactor-parity/p6-3
```

Do not start `--record-self` or `--changed` without `--files` in parallel (the first writes the shared reference; the
second may run `npm --prefix app run graph`, which rewrites `app/docs/refactor/graph.json`).

Reports written with `--report app/docs/refactor/reports/<step>.md` are generated output. `app/.prettierignore` lists
`docs/refactor/reports`, so they never break `format:check` in `npm --prefix app run ci`.

Self-parity details: the reference stores the serialized tree (computed styles, boxes), the screenshot and the service
calls of each state. Both the recording and the comparison fix the page clock (`2026-03-12T10:30:00Z`), finish finite
animations and pause endless ones at their start. Calls are compared as the set of distinct calls per phase (order and
repeat counts depend on timing).

Fonts: every run (the record and both references) passes `--preload-fonts` to `parity_check.cjs`. A browser loads a
web font only when some text needs it. Thus an icon font can arrive after the content that uses it has painted. The
layout then moves, and a composited layer keeps the sub-pixel offset of its first position.

On EventDetail/default, the "View Guests" button (`.btn`, `transform: translateZ(0)` in the legacy CSS) had two
renders 256 px apart: 6 of 15 tries failed before the fix (P4-F6). With all fonts loading at once, the font comes first
in every run. The final render does not change.

Third-party hosts: self runs and the record pass `--hold-third-party` to `parity_check.cjs`; the `outsystems` runs do
not (no fixed clock there). Leaflet fades a loaded map tile in with `Date` steps. Under the fixed clock, no tile becomes
active. Thus Leaflet keeps every loaded tile of an earlier zoom level as a stand-in.

On CountryDetails/default, the map opens at zoom 5. A `setTimeout(…, 0)` and the next frame then fit the bounds
(zoom 4). A zoom-5 tile that loaded in this gap stayed in the tree as a second tile level. Before the fix, 2 of 15 tries
under load failed with structure, style, layout and position differences (P5-F9).

With the option, the browser context of the app uses a local proxy. The app host and loopback addresses go direct. The
proxy holds each connection to another host (here the map tile servers) until two conditions are true:

1. The own requests of the page are idle for 500 ms. A host stops being "own" when the browser connects to it through
   the proxy. MSW answers mocked hosts in the service worker, so their calls stay own requests.
2. The page ran its queued timers and two animation frames.

Thus every zoom-5 tile is still loading at the zoom change, and Leaflet cancels it. The page requests for held tiles stay
in flight, so `networkidle` waits for them. The tiles load before the settle time, and the final render does not change.

Do not use `page.route` for this hold. A Playwright route turns on request interception. Then Playwright reports a
request that the MSW service worker answers only when its response arrives. Thus `networkidle` does not wait for mocked
calls in flight. In a test, HouseholdDetails/default then took its snapshot with 7 skeleton sections still on the page.

Reference manifest (`migration/refactor-reference/manifest.json`):

- A record of all finished routes writes the full-record data: `commit` (the source commit), `at`, `app`, `routes`,
  `states`, `errors`, `bytes`, and an empty `rerecorded` list.
- A record of some routes (`--routes`, `--changed`) keeps that data and adds or replaces one `rerecorded` entry per
  route: `route`, `states`, `errors`, `commit`, `at`, `app`. Of the full-record data, it changes only `bytes`.

To record routes from older code, run the app of a worktree at that commit:

```
git worktree add --detach <dir> <commit>        # then npm ci in <dir>/app (own node_modules and Vite cache)
<dir>/app/node_modules/.bin/vite --port 5175 --strictPort    # from <dir>/app, Node 24, in the background
python3 tools/parity/refactor_parity.py --record-self --routes <R> --source-commit <commit> --app http://localhost:5175
```

Then stop that server (its PID) and run `git worktree remove <dir>`. The full record and the EventDetail record of
P4-F6 come from `3b25ddd` (the Phase 0 code).

`migration/refactor-exemptions.json` is a list; each entry (same matching as `parity-exemptions.json` rules):

```json
{
  "id": "P3-2-LOGIN-HEADER",
  "step": "P3-2",
  "reason": "why the difference is accepted",
  "confirm": "user's answer, date",
  "pathRegex": "...",
  "kinds": ["style"],
  "detailRegex": "...",
  "states": "^default$",
  "routes": ["Login"]
}
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
- `--preload-fonts`: an init script of both pages (app and replayed capture) starts loading every `@font-face` font
  as soon as a stylesheet is in. Test: `node tools/pipeline/parity_check.cjs
--self-test` (an unused font starts to load with the script and stays unloaded without it).
- `--hold-third-party`: with `--fixed-time`, the app context uses a local proxy. A connection to a third-party host
  waits for idle own requests of the page, then for its queued timers and two frames. Test: `--self-test` (the
  third-party request goes on after the own request and after the queued frame; `networkidle` waits for it).

With `--self-ref`, the script normalizes local origins before the style, attribute and call comparison, on both sides:
`http(s)://localhost:<port>` and `http(s)://127.0.0.1:<port>` become `http://localhost:*`
(`origin_normalize.cjs`, test: `node --test tools/pipeline/origin_normalize.test.cjs`).
Reason: a self reference keeps the origin of the server that recorded it, and absolute image URLs in computed styles
would differ on any other port. Only the origin is ignored; the path and the query still count.

## Refactor step tools (deleted)

The refactor is done. Its step tools were deleted on 2026-11-06. Commit `d12b6041` is the last one that holds them:

- `move.ts` (codemod), `measure.mjs`, `measure-final.mjs`, `move-map.mjs` with its decisions file;
- `css-prune.py`, `css-coverage-node.sh`, `css-coverage-preload.cjs`, `os-block-to-origin.py`, `arch_baseline_selfcheck.py`,
  `p7-3-rename-props.ts`.

The outputs they made stay in `app/docs/refactor/` (`inventory.csv`, `routes.csv`, `move-map.csv`).
`node app/build/bundle-report.mjs` still prints the first-load size of HomeFeed and Login from `app/dist/`
(run `npm --prefix app run build` first).

Servers:

- dev: `npm --prefix app run dev` (http://localhost:5173)
- demo: `node app/dist-demo/serve.mjs 8099` (http://localhost:8099/UBTConnect/)

Related checks in the app:

- `npm --prefix app run ci`: types, lint, format, unit tests, build.
- `npm --prefix app run e2e:pwa`: PWA end-to-end.
- `npm --prefix app run lighthouse`: Lighthouse on the demo build.
- `npm --prefix app run arch` and `npm --prefix app run graph`: dependency-cruiser check and graph (see `app/docs/guides/quality.md`).
