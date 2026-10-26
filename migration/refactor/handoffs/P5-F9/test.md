# P5-F9 tester report

## Result

Status: pass

All checks pass. Self-test ok; `--all --ref both` is 64/0 on both references with no "second try"; 3 runs under load had 0 failures; the proxy design holds up in review.

## Commands run

- Server check: 5174 returns 200, vite cwd is /Users/khaitruong/Projects/connect-new/app.
- `parity_check.cjs --self-test`: exit 0 (thirdPartyHold included).
- `refactor_parity.py --level strict --all --ref both --app http://localhost:5174 --report app/docs/refactor/reports/P5-F9.md`: exit 0, outsystems 64/0, self 64/0, 4.3 min, no "second try" line.
- 3 x (`--routes CountryDetails BrowseDirectory --ref self --jobs 4` plus a parallel `--routes HomeFeed Search MessageList Menu --ref both --jobs 4`): all exit 0; foreground self 2/2 clean each time, background outsystems 4/4 and self 4/4 each time; no "second try". The two output folders are deleted.
- After the runs: no leftover parity_check or chromium process; no new listening port from the tool.

## Gate results

| Check | Result |
|---|---|
| self-test | pass |
| parity --all both | pass, 64/0 and 64/0 |
| load test (3 runs) | pass, 0 failures |
| ci / lint:arch | not run: no app file changed |

## Diff review

1. No change in openapi.yaml, mocks or css: ok.
2. No deleted test file: ok.
3. Scope: changed files are parity_check.cjs, refactor_parity.py, tools README, plus the master's files. ok.
4. @origin: no new screen file: n/a.
5. Not a move step: n/a.
6. Behavior: the option is off by default (`o['hold-third-party']` unset gives no proxy and the same context options), so `route.py parity` is unchanged. `refactor_parity.py` adds it only in the `--record-self` branch and the self-ref branch of `build_cmd`; the outsystems branch is untouched. ok.
   - Proxy: bypass is app host, localhost, 127.0.0.1, [::1], so own and MSW traffic is direct. It holds only proxied (other) hosts. The wait is capped at 15 s. `close()` runs in `finally` before `browser.close()` and destroys all sockets. No leftover process or port (lsof, pgrep).
   - It cannot hide an app difference: no `page.route`, no change to the page's own requests, `expCtx` unchanged; only third-party connections are delayed.
   - Nothing changed in app code, reference, exemptions, thresholds or masks (git diff).
   - README text matches the code (free port on 127.0.0.1, 500 ms idle, two frames, self and record only).
   - Self-test block reads correctly: three cases (own, busy, control), a 5 s networkidle limit, and servers closed in `finally`.
   - Minor note, not a failure: the header says "with --fixed-time" but the code does not enforce it. Both callers pass it together.
7. No secret in the diff: ok.

## Questions for the user

None.
