# Dev report · F57

Status: pass

## Result
- Share calls moved to `api/share`: `fetchRecentlyShared`, `csShareObject`, `csCreateShareProfileLink` (repository), `useRecentlySharedQuery` (hooks), `shareKeys.recentlyShared`, types `ShareSheetVariables`, `ShareProfileLink`.
- User information call moved to `api/member` (`fetchUserInformation` in repository, exported by the barrel). Why: `memberCache.userInfo` (the cache key of this same data) already lives in `api/member`, and `userInfo.ts` already imports it from there. The cache stays in `platform/session/userInfo.ts`.
- `containers/ShareSheet/api.ts` deleted. `csShareObject` takes the sharer name; `ShareSheetContainer` reads the user (`getUserInformation`) and builds "FirstName LastName" first, so `api/` does not import `platform/`. Same order of calls, same inputs.
- Tests: new cases in `api/share/repository.test.ts` and `api/member/repository.test.ts`; the ShareSheet test imports `csCreateShareProfileLink` from `@/api/share`. README of ShareSheet updated for the new places.
- Quick checks: typecheck pass; vitest (api/share, api/member, containers/ShareSheet, platform) 481 pass; eslint clean; arch, check-arch-baselines, arch_baseline --strict: 0 new, 0 gone; unused: 0 new after removing the stale row `ShareSheet/api.ts | type | ShareSheetVariables` from `app/.knip-known-unused.json`.
- Measure: `callAction(` outside `api/` (non-test code): `ShareSheet/api.ts` and `userInfo.ts` are gone. Remaining: `lib/ubtConnectUtils/actions.ts`, `lib/orbit/actions.ts`, `lib/legacyShared/actions.ts`, `legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx` (4 code files, F35/F37), plus `mocks/fixtures.ts` (a mock helper, not counted before either).
- Note: I used `git rm` on `api.ts`, so that deletion is staged. No other git changes.

## Files changed
- app/src/api/share/{types,repository,keys,hooks,index}.ts, repository.test.ts
- app/src/api/member/{repository,index}.ts, repository.test.ts
- app/src/platform/session/userInfo.ts
- app/src/containers/ShareSheet/ShareSheetContainer.tsx, ShareSheetContainer.test.tsx, README.md
- app/src/containers/ShareSheet/api.ts (deleted)
- app/.knip-known-unused.json (one row removed)

## Loop 1

- `fetchUserInformation` moved to `app/src/api/member/userInformation.ts` (re-exported by the `api/member` barrel; the test imports it from there). Entry chunk no longer hoists the member repository.
- ShareSheet calls (`fetchRecentlyShared`, `csShareObject`, `csCreateShareProfileLink`) and `useRecentlySharedQuery` moved from `api/share/repository.ts` and `hooks.ts` to the new `app/src/api/share/shareSheet.ts` (barrel exports `csShareObject`, `csCreateShareProfileLink`, `useRecentlySharedQuery`; `repository.test.ts` imports the rest from `./shareSheet`). Only the ShareSheet chunk imports it.
- Bundle: HomeFeed 245.05 kB gzip (HEAD 244.87, +0.18), Login 184.92 (HEAD 184.92, +0.00). Typecheck, vitest of changed folders, eslint, arch, arch baselines, unused: pass.
