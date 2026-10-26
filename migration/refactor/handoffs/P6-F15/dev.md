## Result
status: pass
summary: Login first load 193.05 -> 186.84 kB gzip (-6.21 kB, target was <= 190.6). startup.ts and the Connect2_LegacyShared actions import narrowly; get_IsUnsupportedVersion/System moved to a new module. HomeFeed 244.92 -> 245.48 kB (+0.56, chunk split).

## Files changed
app/src/platform/bootstrap/startup.ts (import from '@/api/message/repository')
app/src/shared/Connect2_LegacyShared/lib/actions.ts (bookmarkCache from '@/api/bookmark/keys')
app/src/shared/UBTConnect/lib/unsupportedVersion.ts (new: IsUnsupportedVersion, UNSUPPORTED_BROWSER_SCENARIO, get_IsUnsupportedVersion, get_IsUnsupportedSystem)
app/src/shared/UBTConnect/lib/unsupportedVersion.test.ts (new: the two describe blocks moved from actions.test.ts)
app/src/shared/UBTConnect/lib/actions.ts (block removed, unused imports removed)
app/src/shared/UBTConnect/lib/actions.test.ts (tests moved out)
app/src/platform/feedback/dialogs/BlockPinUnlock.tsx, app/src/pages/Login/hooks/useLogin.ts, app/src/components/version/UnsupportedVersionWrapper/{UnsupportedVersionWrapper.tsx,UnsupportedVersionWrapper.stories.tsx,README.md} (import path)

## Commands run
npm --prefix app run build + bundle-report → before Login 193.05 / HomeFeed 244.92; after Login 186.84 / HomeFeed 245.48
typecheck → exit 0
vitest run (full) → 419 files, 2244 tests passed
eslint . → 0 errors, 49 warnings (pre-existing; none in changed files)
npm run arch → 0 errors, 213 warnings (not compared with baseline)

## Deviations from the brief
Deep imports (api/message/repository, api/bookmark/keys) are accepted by the lint (no rule against them); no barrel change and no exception needed. Calls stay static and in the same order. The route table manifest was not touched (target reached).

## Questions for the user
none
