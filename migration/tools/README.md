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
| `parity_sweep.py [--app URL] [Route…]` | `route.py parity` on every finished route (or the ones named), one line each, then a total. Report only. About 10 min for 64 routes | After any change to a parity input: route code, `src/platform`, `src/legacy`, `src/shared`, `src/lib`, `src/components`, `src/mocks`, `src/app`, `public/UBTConnect`, `index.html`, legacy CSS, `migration/parity-exemptions.json` |
| `restamp.py --confirm "<user's answer>" Route…` | Per route: parity → `step parity` → `ready` → answer the review with the user's text → `finish`. Routes with differences are only reported | When a finished route's own code changed and the user confirmed it in the conversation (CLAUDE.md rules 2 and 4). Never with an invented confirm |
| `qa_dev_demo.cjs [--settle ms] [--out dir]` | Opens the 64 URLs of `qa-urls.json` on the dev server (:5173) and the demo (:8099), compares visible text, errors, failed requests and broken images. Saves screenshots | After `npm --prefix app run build:demo`, before sharing a new demo |

## Refactor parity (architecture refactor, plan v2 §4.2)

`refactor_parity.py` is the parity gate of the refactor. It reuses `parity_check.cjs` and the state options of
`route.py parity`, but writes nothing into `migration/screens/` (the route reports there are frozen at the tag
`migration-complete`). Check with `git status --short migration/screens`: it stays empty.

```
python3 migration/tools/refactor_parity.py --level strict|visual [--all | --routes R1 R2 | --changed [--since <commit>]]
    [--ref outsystems|self|both] [--record-self [--source-commit <rev>]] [--report <file.md>] [--out <dir>] [--app URL] [--jobs 4]
```

| Option | Effect |
|---|---|
| `--level strict` | Every check of `route.py parity` |
| `--level visual` | Skips `structure`, `class`, `attr`; `style` and `pseudo` only on elements that are visible on both sides |
| `--ref` | `outsystems`: the capture, exemptions `migration/parity-exemptions.json`. `self`: the self-parity reference, exemptions `migration/refactor-exemptions.json`. Default `both` |
| `--record-self` | Records the running app as the self-parity reference in `migration/refactor-reference/<Route>/<state>/` (`tree.json`, `screenshot.png`), then stops. About 2 min for 64 routes, 160 MB, so the folder is in `.gitignore`: record it again on a new clone, at the commit that is the reference |
| `--source-commit` | With `--record-self`: the commit of the code that the app at `--app` serves, written to the manifest. Give it when the app runs from another worktree (for example the reference commit on port 5175). Default: `HEAD` of this tree |
| `--changed` | Routes whose import closure holds a changed file (`git diff --name-only <since>` and untracked files; default `HEAD~1`). The closure comes from `app/docs/refactor/graph.json` (dependency-cruiser, `modules[].dependencies[].resolved`); the tool runs `npm --prefix app run graph` first when the file is missing or older than the newest commit. Entry of a route: `src/pages/<R>/<R>Page.tsx`. A change in `app/src/app`, `platform`, `api/client`, `legacy/os`, `styles`, `shell`, `mocks`, `app/public`, `app/index.html`, the app build config or the exemption files selects all routes (`shared`, `lib` and `components` are not global: the closure covers them). `--files <path>...` replaces the git diff; `--explain` prints the selected routes and the files that selected them, then exits |
| `--report` | Markdown: one line per route and state, a total per reference. Default `<out>/report.md` |
| `--out` | Output folder of the run, under `migration/refactor-parity/` (anything else is refused). Default `migration/refactor-parity/last`. Only this folder is deleted at the start of a run |
| `--jobs` | Parallel browser runs (default 4) |

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
python3 migration/tools/refactor_parity.py --routes Profile Menu --ref both --jobs 2 \
    --app http://localhost:5176 --out migration/refactor-parity/p6-3
python3 migration/tools/refactor_parity.py --changed --files app/src/pages/Profile/ProfilePage.tsx --jobs 2 \
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
python3 migration/tools/refactor_parity.py --record-self --routes <R> --source-commit <commit> --app http://localhost:5175
```

Then stop that server (its PID) and run `git worktree remove <dir>`. The full record and the EventDetail record of
P4-F6 come from `3b25ddd` (the Phase 0 code).

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
- `--preload-fonts`: an init script of both pages (app and replayed capture) starts loading every `@font-face` font
  as soon as a stylesheet is in. Test: `node .claude/skills/outsystems-screen-spec/scripts/parity_check.cjs
  --self-test` (an unused font starts to load with the script and stays unloaded without it).
- `--hold-third-party`: with `--fixed-time`, the app context uses a local proxy. A connection to a third-party host
  waits for idle own requests of the page, then for its queued timers and two frames. Test: `--self-test` (the
  third-party request goes on after the own request and after the queued frame; `networkidle` waits for it).

With `--self-ref`, the script normalizes local origins before the style, attribute and call comparison, on both sides:
`http(s)://localhost:<port>` and `http(s)://127.0.0.1:<port>` become `http://localhost:*`
(`origin_normalize.cjs`, test: `node --test .claude/skills/outsystems-screen-spec/scripts/origin_normalize.test.cjs`).
Reason: a self reference keeps the origin of the server that recorded it, and absolute image URLs in computed styles
would differ on any other port. Only the origin is ignored; the path and the query still count.

## Refactor codemod (`refactor/move.ts`)

The codemod runs on plain Node 24 (it loads ts-morph from `app/node_modules`). It moves files with `git mv`, moves their tests and stories, rewrites the imports that the move changes to `@/`, then runs the typecheck. Always use `--dry-run` first: it prints the file list and the import count and changes nothing.
- One folder: `node migration/tools/refactor/move.ts --from app/src/shell --to app/src/platform [--dry-run]`
- Rows of the move map: `node migration/tools/refactor/move.ts --map app/docs/refactor/move-map.csv --phase P1 [--dry-run]`
- Only rewrite `../` imports to `@/`: `node migration/tools/refactor/move.ts --alias-only [--dry-run]`
- `--no-typecheck` skips the typecheck at the end. `import.meta.glob` patterns are not rewritten; the tool prints a warning.

## Refactor prop rename (P7-3)

- `node migration/tools/refactor/p7-3-rename-props.ts <component file> <PropsInterface> old=new [old=new ...]`: renames props of a component in the component and in every user (ts-morph language service rename). Used for EmptyState and Skeleton.

## Refactor measurement (P0-4)

- `node migration/tools/refactor/measure.mjs`: writes `app/docs/refactor/inventory.csv`, `routes.csv` and `calls-by-domain.md` from `app/src` (AST scan). Then run `npx prettier --write docs/refactor/calls-by-domain.md` in `app`.
- `node app/build/bundle-report.mjs`: prints the first-load size (entry, route chunk, shared chunks) of HomeFeed and Login from `app/dist/`. Run `npm --prefix app run build` first.


## Refactor move map (P0-5)

- `node migration/tools/refactor/move-map.mjs [--check]`: writes `app/docs/refactor/move-map.csv` (one row per row of `inventory.csv` and one row per route screen; 329 rows). Rules come from plan v2 §2.2 to §2.6 and §8. The file `migration/tools/refactor/move-map.decisions.json` holds the decisions and wins over the rules. `--check` prints the counts and the name collisions and writes nothing. Run `measure.mjs` first when `src/` changed.


Servers:
- dev: `npm --prefix app run dev` (http://localhost:5173)
- demo: `node app/dist-demo/serve.mjs 8099` (http://localhost:8099/UBTConnect/)

Related checks in the app:
- `npm --prefix app run ci`: types, lint, format, unit tests, build.
- `npm --prefix app run e2e:pwa`: PWA end-to-end.
- `npm --prefix app run lighthouse`: Lighthouse on the demo build.
- `npm --prefix app run arch` and `npm --prefix app run graph`: dependency-cruiser check and graph (see `app/docs/guides/quality.md`).
