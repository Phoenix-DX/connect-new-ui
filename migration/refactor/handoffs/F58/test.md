# Test · F58 · Client variables through typed platform accessors

Status: pass

## Commands run

| Command | Exit | Key numbers |
|---|---|---|
| `npm --prefix app run ci` | 0 | all stages pass, build ok |
| `refactor_parity.py --level visual --all --ref both --app http://localhost:5174` | 0 | outsystems 64/64 clean, self 64/64 clean, PASS |
| `npm --prefix app run e2e:pwa` | 0 | 9 tests pass |
| `bundle-report.mjs` after build | 0 | HomeFeed 245.80 gzip (base 245.67, +0.13); Login 185.06 (base 184.93, +0.13) |
| `arch_baseline.py check` | 0 | 72 warnings, 72 rows, 0 new, 0 gone |
| `check-arch-baselines.mjs` | 0 | 144 rows, 144 violations, 0 stale |
| server check | - | 200; vite cwd = /Users/khaitruong/Projects/connect-new/app |

W45: step delta +0.13 (under +0.3); HomeFeed growth since 244.87 is +0.93 (under +1.5). No trim step.

## Diff review

1. openapi, mocks, public css: no change. Pass.
2. No test file deleted; 5 tests added in session.test.ts. Pass.
3. Scope: 15 files + session.ts/test + handoff files. Pass.
4. No new ported screen files. Pass.
5. n/a (change step).
6. All 15 accessors checked against the replaced call: each name is identical (`accessorOf(name)` calls getClientVar/setClientVar with the same name, so default, storage and persistence are unchanged). Reads stay synchronous. `useClientVar` accepts name or accessor, same subscription. Photobook constant `SPEED_CLIENT_VAR` replaced by `photobookSpeed` (same name). Statements keep order and arguments. No behavior change found. Pass.
7. No secret in the diff. Pass.

## Metric

Callers of getClientVar/setClientVar by name outside platform/, non-test, non-story: 7 files
(4 `legacy/os/cache/*` blocks, 3 `lib/*/actions.ts`). `legacy/os/clientVarNames.ts` only names it in a comment.
Matches the expected 7 (brief said 5 cache blocks; there are 4).

## Failures

None.
