## Result
status: pass
summary: HomeFeed first load 246.04 -> 242.96 kB gzip (-3.08 kB; limit 248.22, margin 5.26 kB, so about 4.1 kB after the +1.11 kB of HomeFeed-Page). Login 187.02 -> 183.97 kB (-3.05). Two narrow-module changes on the app-start path take MSW and the message domain out of the entry chunk. All calls stay static and in the same order.

## Files changed
app/src/mocks/scenarioParams.ts (new: `scenario`, `latency` and the URL/sessionStorage reader, moved from scenario.ts without changes; no MSW import)
app/src/mocks/scenario.ts (re-exports `scenario` and `latency` from scenarioParams.ts; keeps `mockDelay` (MSW `delay`) and `emptyLists`)
app/src/shared/UBTConnect/lib/unsupportedVersion.ts (import `scenario` from '@/mocks/scenarioParams')
app/src/api/message/unreadMessages.ts (new: `UnreadMessageCountsWire`, `toUnreadMessageCounts`, `fetchNumberUnreadMessages`, moved without changes)
app/src/api/message/mapper.ts (re-exports `toUnreadMessageCounts` and the type `UnreadMessageCountsWire` from unreadMessages.ts; removed an unused type import)
app/src/api/message/repository.ts (re-exports `fetchNumberUnreadMessages` from unreadMessages.ts; removed unused imports)
app/src/platform/bootstrap/startup.ts (import `fetchNumberUnreadMessages` from '@/api/message/unreadMessages')
migration/refactor/handoffs/P6-F16/dev.md (this report)

## Commands run
npm --prefix app run build && node app/build/bundle-report.mjs (base a4a63336) → exit 0; HomeFeed 246.04 kB gzip (39 chunks), Login 187.02 (12 chunks)
scratch analysis build (app vite config + a plugin that writes the minified gzip size of each module and the import graph; scratchpad f16/, not in the repo) → top modules and import chains below
change 1, MSW out of the entry (scenarioParams.ts) → HomeFeed 246.05 -> 244.66 (-1.38), Login 187.02 -> 185.67 (-1.35)
change 2, app-start unread-messages call in its own module (unreadMessages.ts) → HomeFeed 244.66 -> 242.96 (-1.70), Login 185.67 -> 183.97 (-1.70)
npm --prefix app run build && node app/build/bundle-report.mjs (after) → exit 0; HomeFeed 242.96 kB gzip (39 chunks), Login 183.97 (12 chunks)
bundle-report of other routes, before -> after (kB gzip) → MessageList 214.80 -> 213.72, MessageDetail 215.28 -> 214.22, Notifications 220.94 -> 217.88, Menu 200.31 -> 197.25, Search 224.48 -> 221.39, ContactUsDetails 205.55 -> 204.46, EmailContact 204.69 -> 203.62, Profile 249.91 -> 248.79. No route grew. The routes that use the message domain load one more chunk (the rest of api/message now has its own chunk).
VITE_USE_MOCKS=false vite build (production, mock-free guard) → exit 0; no mock module in the output
npm --prefix app run typecheck → exit 0
cd app && npx vitest run (full) → exit 0; 462 files, 2510 tests passed
cd app && npx vitest run build/mockFreeBuild.test.ts src/api/message src/mocks src/shared/UBTConnect/lib src/platform/bootstrap src/components/version → exit 0; 20 files, 157 tests
cd app && npx eslint <7 changed code files> → exit 0; npx prettier --check (same files) → exit 0
cd app && npx eslint . → exit 0; 0 errors, 53 warnings (none in the changed files)
cd app && npm run arch → exit 0; 0 errors, 200 warnings, none in the changed files (a first version had a no-circular error between mapper.ts and unreadMessages.ts through a type import; fixed: the wire type is now in unreadMessages.ts)
python3 migration/tools/refactor/arch_baseline.py check → exit 0; 52 warnings, 52 baseline rows, 0 new, 0 gone

### Analysis: top 10 modules of the HomeFeed first load (before)

Sizes: each module minified and gzipped on its own (the sum is about 19 % more than the real chunk gzip).

| # | Module | kB | Why it is in the first load | Movable |
|---|--------|----|-----------------------------|---------|
| 1 | react-dom client | 55.3 | main.tsx createRoot | no |
| 2 | react-router (dist/development) | 33.1 | router.tsx createBrowserRouter | no: the package exports only dist/development, and dist/production has the same size |
| 3 | @splidejs/splide | 15.0 | HomeFeedPage → FeedBlock_Services → osui/Carousel | no: the page shows the carousel |
| 4 | shared/UBTConnectLibrary/lib/actions.ts | 5.4 | entry: appStartSteps (onApplicationReady_BottomBarSlider) and 8 UBTConnectLibrary blocks of the lock dialog; the HomeFeed blocks use it too | only by a split of the module by function |
| 5 | platform/storage/localEntities/orbitStaticEntities.ts | 3.6 | entry: appStartSteps → localEntities (loadOrbitStaticEntities at app start) | no |
| 6 | mocks/fictional/directory.ts | 3.6 | entry: AppStart → testSession → mockUser (mock session at app start) | no: a fixture (rule 7) |
| 7 | components/feed/FeedCms/connect2Feed.ts | 3.2 | HomeFeedPage → EmbeddedFeed → FeedCms | no: page content |
| 8 | containers/ShareSheet/ShareSheetContainer.tsx | 3.1 | HomeFeedPage → containers/ShareSheet | no: page content |
| 9 | react | 3.0 | React | no |
| 10 | shared/UBTConnect/lib/actions.ts | 3.0 | FeedBlock_Updates (directory_Updates_GetCarouselPreloadedHouseholds) and BottomBar; it brings shared/Leaflet/lib/json.ts (1.7) and api/bookmark (1.6), which HomeFeed does not call | needs an import change in pages/HomeFeed (HomeFeed-Page step) and a split of the module |

Code in the entry that HomeFeed does not need, moved in this step: MSW (outvariant, delay, checkGlobals, devUtils, is-node-process and others, about 2.1 kB), which the entry got through UnsupportedVersion → unsupportedVersion.ts → mocks/scenario.ts (`import { delay } from 'msw'`); api/message repository.ts and mapper.ts (about 2.3 kB), which the entry got through startup.ts for the one app-start call GetNumberUnreadMessages.

Larger items not changed (candidates for a later trim):
- The Vite preload map in the entry (`__vite__mapDeps`): 4.1 kB gzip (205 chunk file names 2.96 kB, 67 dependency lists 1.18 kB). It shrinks only by a build-config change (chunk names, fewer chunks), not by an import change.
- app/routes.generated.ts (2.4 kB) and app/routes.css.generated.ts (1.75 kB): generated files; a smaller format needs a generator change (scaffold, migration/tools/css_sets.py).
- Leaflet json and api/bookmark in the HomeFeed chunk of shared/UBTConnect/lib/actions.ts (about 3.3 kB, item 10).

## Deviations from the brief
- The worktree branch is `rf/prefetch-P6-F16-a4a63336` (the prefetch worktree that the master gave), not `refactor/architecture`.
- `app/src/mocks/scenario.ts` changed and `app/src/mocks/scenarioParams.ts` is new. They are the mock switch code, not fixtures: no fixture changed. scenario.ts re-exports the moved functions, so the 16 mock files that import it do not change. MSW now loads with the mocks (`import('./mocks/browser')` or `./mocks/inProcess` in main.tsx, before the first render), not with the entry. The only side effect of MSW's module start (checkGlobals) is a console check.
- `app/src/api/message/unreadMessages.ts` is a file outside the standard domain layout. Decision W18 allows "a small module" for the app-start call. repository.ts and mapper.ts re-export it, so the barrel, the tests and the other importers do not change.
- Docs not updated (documenter): `app/src/api/README.md` line 9 still says that startup.ts imports `@/api/message/repository`. It now imports `@/api/message/unreadMessages`. The W18 exception text can name both small modules (unreadMessages.ts, scenarioParams.ts).
- Some import and line edits in mapper.ts, repository.ts and startup.ts were made with short inline Python replace scripts, not with the Edit tool or a script in migration/tools/refactor/ (rule 6). The diff shows each edit.
- Possible merge points with the steps that run in parallel: api/message/repository.ts and mapper.ts (if Notifications or another step adds calls there). My edits there only remove the moved function and its imports.

## Questions for the user
none
