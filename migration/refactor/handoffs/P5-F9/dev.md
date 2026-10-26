# P5-F9 developer report

## Result

Status: pass

- Cause: a race in the self runs between the map tile network and the first zoom change of the CountryDetails map.
  The fixed page clock of the self runs makes the result of the race permanent. The app code is correct; the cause is
  in the capture of the parity tools.
- Fix: `parity_check.cjs` has a new option `--hold-third-party`. It is off by default, so `route.py parity` does not
  change. With the option, the browser context of the app uses a local proxy. The proxy holds each connection to a
  third-party host until two conditions are true:
  1. The own requests of the page are idle for 500 ms.
  2. The page ran its queued timers and two animation frames.
- `refactor_parity.py` passes the option on the self runs and on `--record-self`. The `outsystems` runs do not change.
- No app code, reference, exemption, threshold or mask changed. The reference was not recorded again, because the final
  render does not change (full run: self 64/0).
- Proof:
  - Under load, CountryDetails/default passed 15 of 15 tries (45 of 45 states). Before the fix, 2 of 15 tries failed.
  - 10 of 10 `refactor_parity.py --routes CountryDetails --ref self --jobs 4` runs under load passed, with no "second
    try".
  - `--all --ref both` gives outsystems 64/0 and self 64/0, with no "second try".

## Cause and evidence

Scratch folder: `<s>` = `/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/b1c0f7f3-a5be-42a8-b170-074abce216da/scratchpad/f9`.

1. All differences of a failing try are in the Leaflet tile pane (`<s>/before/`, runs 5 and 14). The build has a second
   `.leaflet-tile-container` with `z-index 19` and `transform matrix(0.5, 0, 0, 0.5, 76, 103)`. That is the zoom-5 level
   at half scale, with 2 or 3 loaded tiles of 128×128 px. The reference has one container (`z-index 20`, zoom 4, 6
   loaded tiles). The pixel check is 0 because every tile has opacity 0 in the self runs (see 3).
2. The map opens at zoom 5 (`mapOptions.Zoom`). Then `Handler_LeafletMapOnInitialized` calls `map_FitBoundsAuto` in a
   `setTimeout(…, 0)`, and `fitBounds` starts the zoom animation to zoom 4 in the next frame. At that moment,
   `TileLayer._abortLoading` cancels every zoom-5 tile that is not `complete`. The app code follows the OutSystems
   handler that its comment cites (`Handler_LeafletMapOnInitialized`, CountryDetails.mvc.js :2460-2490), so I did not
   change it.
3. Leaflet fades a loaded tile in with `+new Date()` steps (`GridLayer._updateOpacity`). Under the fixed clock of the
   self runs (`--fixed-time`), the fade stays at 0, so no tile becomes active. Then `_pruneTiles` → `_retainChildren`
   keeps every loaded zoom-5 tile as a stand-in for the zoom-4 tiles, for good. Without the fixed clock, Leaflet removes
   them about 250 ms after the zoom-4 tiles load. Thus the `outsystems` runs (no fixed clock) do not show the flake.
4. A probe with hooks on the global `L` (`<s>/probe.cjs`, `<s>/probe-*.txt`) logged `fitBounds`, the zoom animation
   start, `_abortLoading` and `_tileReady`.
   - In every stale run, 1 to 3 zoom-5 tiles were ready (or `complete`) before the animation started. Example: zoom-5
     tiles ready at 594 to 601 ms, animation at 602 ms.
   - In every clean run, no zoom-5 tile was ready before the animation.
   - The tiles come from `server.arcgisonline.com` through the MSW service worker (passthrough). They load in about
     10 ms, about as long as the gap (2 to 16 ms).
5. The race depends on the network and on the CPU:
   - probe, no load: 4 of 8 runs stale;
   - tiles answered at once from a cache: 7 of 8 stale;
   - a copy of the tool with CPU throttling ×4 on the app page: 9 of 10 tries fail with the flake signature.
6. Only CountryDetails/default and BrowseDirectory/default open third-party connections (`<s>/hosts.py`, all 149
   states). The hosts are `server.arcgisonline.com` and `a`–`d.basemaps.cartocdn.com`.

Two earlier designs failed. They explain the final design.

- v1, a Playwright route on the tile URLs, with `PW_EXPERIMENTAL_SERVICE_WORKER_NETWORK_EVENTS` for the service-worker
  requests:
  - It fixed the race (tiles at once: 0 of 10).
  - But `networkidle` did not count the held service-worker requests. Thus the tiles loaded only during the settle time,
    and 1 of 15 load tries had 6 tiles that were not loaded yet.
  - A trace (`<s>/trace2/run9-default.txt`) also showed a 6 s tile stall.
- v2, the same route with a wait for the held tiles: CountryDetails passed 15 of 15. But any Playwright route turns on
  request interception (v1 and v2). Then Playwright reports a request that the MSW service worker answers only when its
  response arrives, so `networkidle` misses mocked calls in flight.
  - HouseholdDetails/default [self] failed in 4 of 4 runs: 3 background runs with v1 or v2, and 1 run alone with v2.
    The differences: structure 5, class 12, style 38, layout 110, pixel 1.
  - A skeleton count timeline (`<s>/var/`) showed 7 skeleton sections at the snapshot (about 3.3 s). Without the route,
    the count was 0 from 4.0 s.
  - A route that matches nothing gave the same failure.

The final design (a proxy) uses no request interception. The page requests for held tiles stay in flight, so the
normal `networkidle` waits for them, as before the fix.

## Files changed

- `.claude/skills/outsystems-screen-spec/scripts/parity_check.cjs`:
  - option `--hold-third-party` in the header doc;
  - function `thirdPartyHold`, with a comment on the cause. It has these parts:
    - a local HTTP proxy for plain HTTP and CONNECT;
    - the gate: own requests idle for 500 ms (at most 15 s), then `setTimeout(0)` and two `requestAnimationFrame`;
    - the own-request tracking: a host stops being own when the browser connects to it through the proxy;
    - `close()`;
  - `main`: the app context gets the proxy (bypass: the app host, `localhost`, `127.0.0.1`, `[::1]`). The proxy closes
    before the browser in `finally`. `expCtx` does not change;
  - `--self-test`: three cases with a local tile server. They are an own request, a busy main thread (800 ms), and a
    control without the hold. The test also requires `networkidle` in under 5 s. Four broken copies of the code each
    fail the test: no gate, no idle wait, no frame wait, no own-request purge.
- `migration/tools/refactor_parity.py`: `--hold-third-party` in `build_cmd` for `--record-self` and the self reference;
  the module docstring.
- `migration/tools/README.md`:
  - the "Third-party hosts" paragraphs;
  - the option in "New options of `parity_check.cjs`";
  - one sentence in "Parallel runs" (one proxy per run, on a free port).

  `ste_lint.py`: no new errors (the 4 errors were there before).

Not touched: app code, `src/mocks/**`, `openapi.yaml`, `public/UBTConnect/css/**`, `migration/refactor-reference/**`,
the exemption files. The tree also shows `migration/refactor/followups.md` and
`migration/refactor/auto-decisions-2026-10-22.md` as changed. I did not change them.

The parity output folders `migration/refactor-parity/f9-*` are deleted. The probes, harnesses and logs are in `<s>`:

- probes: `probe.cjs`, `probe_hh.cjs`, `tiles.py`;
- load tests: `loop.sh`, `cmd.py`, `rp_loop.sh`, `hosts.py`;
- stress tests: `make_fast.py`, `fast.sh`, `make_cpu.py`, `cpu.sh`, `exit_test.cjs`;
- traced copies: `make_trace.py`, `tracebin/`;
- results: `before/`, `after/`, `trace/`, `trace2/`, `final/`, `final2/`, `rp/`, `final-all.md`, `final-all.log`.

## Commands run

- `node .claude/skills/outsystems-screen-spec/scripts/parity_check.cjs --self-test`: ok, 3 of 3 times on the final code.
- `node --test .claude/skills/outsystems-screen-spec/scripts/origin_normalize.test.cjs`: pass 3, fail 0.
- `node --check` on `parity_check.cjs` and `python3 -m py_compile migration/tools/refactor_parity.py`.
- `python3 migration/tools/ste_lint.py migration/tools/README.md`: 4 errors, all there before the step.
- Load tests: `<s>/loop.sh <tag> 15`. In the background, `refactor_parity.py --routes <the other 63> --ref both --jobs 4
  --app http://localhost:5174 --out migration/refactor-parity/f9-load-<tag>`. In the foreground, per iteration, the
  3 CountryDetails states against the self reference at the same time. These runs use the `parity_check.cjs` command of
  `build_cmd`, without the built-in retry, `--out migration/refactor-parity/f9-<tag>`.
- `<s>/rp_loop.sh rp 10`: 10 × `refactor_parity.py --routes CountryDetails --ref self --jobs 4 --app
  http://localhost:5174 --out migration/refactor-parity/f9-rp-rp`, with the same background run.
- `<s>/cpu.sh 10 4`, before and after the last edit.
- `<s>/fast.sh 10`, for v1 and v2 only.
- `python3 <s>/hosts.py`.
- `node <s>/exit_test.cjs`: a run that ends while a connection is held exits after 1.2 s.
- `python3 migration/tools/refactor_parity.py --level strict --all --ref both --app http://localhost:5174 --out
  migration/refactor-parity/f9-all --report <s>/final-all.md`.
- Dev server: http://localhost:5174 (vite cwd is this repo's `app/`). I did not start or stop a server, and I did not use
  port 5173.
- No typecheck, vitest, eslint or `npm --prefix app run ci`: no app file changed.

## Run counts before and after

| Run | Setup | Result |
|---|---|---|
| Before, load | `loop.sh`, 15 iterations, background run of the other 63 routes | default: 2 of 15 tries differ (run 5: structure 4, style 4, layout 3, position 3; run 14: structure 5, style 3, layout 2, position 2; pixel 0 in both). loading, offline: 15 of 15 OK |
| Before, probe | Leaflet hooks, fixed clock, no load | 4 of 8 stale without a route; 3 of 8 with a pass-through route; 7 of 8 with tiles answered at once |
| Before, CPU ×4 | tool copy without the hold, CPU throttling 4 on the app page | 9 of 10 differ, with the flake signature |
| v1, load | route hold, no wait for the tiles | CountryDetails: 1 of 15 tries differ (6 tiles not loaded at the snapshot: class 6, style 6), then 1 of 15 in a traced run |
| v2, load | route hold and a wait for the tiles | CountryDetails 15 of 15 OK |
| v1 and v2, other routes | background runs `after`, `trace` (v1), `trace2` (v2); one run alone (v2) | HouseholdDetails/default [self] DIFF in 4 of 4, both tries (structure 5, class 12–13, style 38, layout 110, pixel 1) |
| After, load | `loop.sh final2`, final code, same setup as "Before, load" | default 15 of 15 OK; 45 of 45 states OK; background run: 126 OK, 0 DIFF or ERROR |
| After, refactor_parity under load | `rp_loop.sh`, 10 runs | 10 PASS, 0 "second try"; background run: 78 OK, 0 DIFF or ERROR |
| After, CPU ×4 | final code | 0 of 10 differ (the copy without the hold: 9 of 10) |
| After, all | `--all --ref both`, 4 jobs, HEAD `35296b3` with the tool changes | outsystems 64/0, self 64/0, 298 runs, 0 DIFF or ERROR lines, no "second try", 4.4 min |

The load average was 7 to 9 during the final load test. An earlier load test with the proxy design overlapped with
`rp_loop.sh` (load average up to 19): 45 of 45 states OK there too.

## Deviations

- I replaced the self-test block of `parity_check.cjs` once with a one-off Python script, not with the Edit tool (master
  note). The result is in the diff of that file; the script changed no other file. All other changes use the Edit tool.
- The brief gives "wait for a condition the page already exposes" as an example. A wait alone cannot fix this flake:
  under the fixed clock, the stale level never goes away. The capture therefore holds third-party connections until a
  page condition is true (own requests idle, then queued timers and frames). The hold applies only where the clock is
  fixed: the self runs and the record.
- The load tests call `parity_check.cjs` directly, with the command of `build_cmd`. Thus each try keeps its own report.
  (`refactor_parity.py` writes over the first try when it repeats a run.) `rp_loop.sh` also checks the
  `refactor_parity.py` path.
- Open point, not new: the self runs of CountryDetails/default and BrowseDirectory/default still load the tiles from the
  live tile servers. When these servers do not answer, the tiles do not load (class `leaflet-tile-loaded` missing). The
  hold does not change this. `networkidle` now waits for the held tiles for up to 15 s.

## Questions for the user

None.
