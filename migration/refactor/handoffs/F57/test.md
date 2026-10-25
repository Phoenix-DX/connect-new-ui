# Test report · F57

Status: pass (re-test after loop 1; W21 tripwire now met)

## Commands run
- `npm --prefix app run ci`: exit 0 (typecheck, lint, arch, arch:baselines, dup, unused, flags, format:check, test 640 files / 3979 tests, build). `format:check` passes (prettier does not flag `src/api/schema.d.ts` in this tree; `prettier --check src/api/schema.d.ts` also clean).
- dev server http://localhost:5174: 200, cwd `/Users/khaitruong/Projects/connect-new/app`.
- `refactor_parity.py --level visual --all --ref both --app http://localhost:5174`: outsystems 64/64 clean, self 64/64 clean, 0 new differences. Report: `F57/parity.md`.
- `node app/build/bundle-report.mjs`: HomeFeed 753.82 kB, gzip 245.53 (baseline 244.87 -> +0.66); Login gzip 185.21 (baseline 184.92 -> +0.29). Both far inside the +5 percent limit, but HomeFeed is above the W21 per-step tripwire (+0.3 kB). Not measured against HEAD (cannot build HEAD without changing the tree), so part of the growth may not come from F57.
- `arch_baseline.py check`: 72 warnings, 72 rows, 0 new, 0 gone. `check-arch-baselines` and `unused` pass inside ci. One knip row removed (`ShareSheet/api.ts | type | ShareSheetVariables`): the baselines only shrank.

## Diff review
1. openapi.yaml, mocks, public css: no change. Pass.
2. No test file deleted; tests added in api/share and api/member; ShareSheet test updated. Pass.
3. Scope: only the files listed in dev.md (plus the staged deletion of `containers/ShareSheet/api.ts`). Pass.
4. `@origin`: no new screen file; moved functions keep their ShareSheet.mvc.js line references in comments. Pass.
5. n/a (change step).
6. Behavior: call names, inputs, outputs and error handling are identical to `git show HEAD:.../ShareSheet/api.ts`. Order of effects: old `cs_ShareObject` awaited `getUserInformation()` and then `callAction`; the new container does the same two awaits in the same order, inside the same `try` in `submitShare`, so failures still reach the same `catch`. `useRecentlySharedQuery` and `useAvailableMembersQuery` replace the old hooks (the old file re-exported the member hook). `fetchUserInformation` is passed to `getCacheableObject` as the loader; the cache stays in `platform/session/userInfo.ts`. Pass.
7. No secret, password or email in the diff. Pass.
- Measure: `callAction` outside `api/` is down to 4 code files (F35/F37), as dev.md says.

## Failures
- W21: HomeFeed gzip +0.66 kB (245.53 vs 244.87), more than +0.3 kB per step. Limit 248.22 still has 2.69 kB margin.

## Re-test (loop 1)

Status: pass

### Commands run
- dev server http://localhost:5174: 200, cwd `/Users/khaitruong/Projects/connect-new/app`.
- `npm --prefix app run ci`: exit 0.
- `node app/build/bundle-report.mjs`: HomeFeed gzip 245.05 (baseline 244.87, +0.18, limit +0.3); Login gzip 184.92 (+0.00, limit +0.3). Pass (W21).
- `refactor_parity.py --level visual --all --ref both --app http://localhost:5174`: outsystems 64/64 clean, self 64/64 clean, 0 new differences. Report: `F57/parity.md`.
- `arch_baseline.py check`: 72 warnings, 72 rows, 0 new, 0 gone.

### Diff review of the loop
- `api/member/userInformation.ts`: `fetchUserInformation` has the same body as the old inline loader in `platform/session/userInfo.ts`; `userInfo.ts` passes it to `getCacheableObject` as before, cache and `setClientVar` order unchanged. Barrel re-exports it. Pass.
- `api/share/shareSheet.ts`: same call names, inputs, outputs (osList / wireList, `{shareId,url}`), `retry:false`, `enabled: fetchId > 0`. Query key moved to `shareKeys.recentlyShared` (same content, `shareKeys.all` prefix; cache key only). The `getUserInformation` await stays in the container, same order and `try`. Barrel re-exports `csShareObject`, `csCreateShareProfileLink`, `useRecentlySharedQuery`. Pass.
- No change to openapi.yaml, mocks, public css; no secret in the diff. F52 (`check-flags.mjs`) in the same tree: the flags check inside ci passes.
