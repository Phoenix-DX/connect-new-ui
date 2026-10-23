## Result
status: pass
summary: Added the domain `app/src/api/update/` (types, mapper, repository, keys, hooks, barrel, 3 test files) for the 9 actions in the update table of `app/docs/refactor/calls-by-domain.md`. The old `api.ts` and `types.ts` files of HomeFeed, Updates_SingleList, HouseholdCarousel and Menu re-export the domain under their old names, and `shared/UBTConnect/lib/actions.ts` calls the repository for the unread count. Typecheck, the full vitest suite, eslint, format:check and arch pass in the worktree. Parity was not run (the worktree has no dev server).

## Files changed
All paths are in the worktree `/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/b1c0f7f3-a5be-42a8-b170-074abce216da/scratchpad/wt-update` (branch `rf/prefetch-P5-2-update`, base 35296b3). `app/src/api/update/` is untracked, so include the untracked files when you take the diff.
app/src/api/update/types.ts (added)
app/src/api/update/mapper.ts (added)
app/src/api/update/repository.ts (added)
app/src/api/update/keys.ts (added)
app/src/api/update/hooks.ts (added)
app/src/api/update/index.ts (added, barrel)
app/src/api/update/mapper.test.ts (added)
app/src/api/update/repository.test.ts (added)
app/src/api/update/hooks.test.tsx (added)
app/src/screens/HomeFeed/api.ts (changed: `useFetchUpdates`, `markAsRead` and `markAsUnread` are re-exports; `useGetServices` and `NULL_DATE` not touched)
app/src/screens/HomeFeed/types.ts (changed: `UpdateItem` re-exports the domain type; the `LongId` import is removed; `UpdateItemWire` stays for mocks.ts)
app/src/screens/Updates_SingleList/api.ts (changed: re-exports only, plus `osDateInput`, which is not a call)
app/src/screens/Updates_SingleList/types.ts (changed: the domain types are re-exported under their old names; `UpdateItemWire` stays for mocks.ts)
app/src/screens/HouseholdCarousel/api.ts (changed: `updateItemMarkAsRead` is a re-export; the other functions not touched)
app/src/screens/Menu/api.ts (changed: re-export only)
app/src/shared/UBTConnect/lib/actions.ts (changed: `directory_Updates_RefreshBottomBarCount` calls `fetchUnreadUpdateItemsCount`; 1 import added)
Main tree, written by this stage:
migration/refactor/handoffs/P5-2-update/dev.md (added)
migration/refactor/handoffs/P5-2-update/exemptions.json (added, `[]`)
No `git mv` was used. No mocks, fixtures, `openapi.yaml` or CSS changed.

Shared files changed, for the merge with P5-2-locality: only `app/src/shared/UBTConnect/lib/actions.ts` (lines 10-11, the imports, and lines 93-102, `directory_Updates_RefreshBottomBarCount`). This step does not change `shared/Connect2_LegacyShared/lib/actions.ts`, any `structures.ts`, `CacheControl_AllLocalities`, the locality screens or `src/api/README.md`. No file of this step is in the locality file list, so no text conflict is expected.

## Commands run
All commands ran from the worktree with Node 24.
npm --prefix app run typecheck → exit 0 (first run and after the Prettier format)
npx vitest run src/api/update → 3 files, 19 tests passed
npx vitest run (full suite) → 355 files, 1707 tests passed
npx vitest run src/api/update src/screens/HomeFeed src/screens/Updates_SingleList src/screens/HouseholdCarousel src/screens/Menu src/shared/UBTConnect src/mocks src/platform/bootstrap (after the format) → 154 files, 678 tests passed
npx eslint src/api/update <the 7 changed files> → exit 0, no warning
npx eslint . → exit 0, 1 warning; it is the earlier warning in `components/ui/os/OSPopup/usePopupWidget.ts`
npx prettier --write src/api/update/{mapper,mapper.test,repository,repository.test}.ts (line wraps only); npm run format:check → all files use Prettier code style
npm run arch → 0 errors, 205 warnings. The base 35296b3 (copied with `git archive` to the scratchpad, same config and node_modules) gives 207 warnings. The 2 removed warnings are rule 9 for `screens/HomeFeed/types.ts` and `screens/Updates_SingleList/api.ts` → `legacy/os/os-wire.ts`. There is no new warning and no warning in `src/api/update/`.
Parity: not run. The worktree has no dev server, as the master instructed. The tester runs the gate on the main tree.

## Deviations from the brief
- Scope of the domain. The 9 actions are the ones that `app/docs/refactor/calls-by-domain.md` (P0-4) puts under "update":
  - HomeFeed (FeedBlock_Updates): DataActionFetchUpdates, ServiceAPIAction_UI_UpdateItem_MarkAsRead and MarkAsUnread.
  - Updates_SingleList: DataActionFetchUpdates, DataActionGetDateRanges, and the service actions MarkAsRead, MarkAsUnread and MarkAllAsRead.
  - HouseholdCarousel: the server action ActionUpdateItem_MarkAsRead.
  - Menu: the server action ActionRequestPhotoUpdate.
  - shared/UBTConnect/lib/actions.ts: ServiceAPIGet_UI_UpdateItems_UnreadCount_All.
- ActionRequestPhotoUpdate is in the update table only because its name has the keyword "update" (the table's method). It asks for an update of the user's photo; it does not read or change an update item. This step keeps the table, as P5-2-country did. A later step can move `requestPhotoUpdate` to `api/member` with no caller change (Menu imports it from its own `api.ts`).
- Names. Repository: `fetchFeedUpdates`, `fetchUpdatesList`, `fetchUpdateDateRangeIds`, `markUpdateItemAsRead`, `markUpdateItemAsUnread`, `markAllUpdateItemsAsRead`, `markCarouselUpdateItemAsRead` (the server action UpdateItem_MarkAsRead, not the service action), `fetchUnreadUpdateItemsCount`, `requestPhotoUpdate`. Hook: `useFeedUpdatesQuery`. Key: `updateKeys.feed()` = `['update', 'feed']`. Types: `UpdateItem`, `UpdatesList`, `UpdateDateRange`, `UpdateBreakpoint`, `FilterUpdates`, `UpdateTypeOption`, `UpdatesListVariables`. The old modules keep their names through aliases: `useFetchUpdates`, `markAsRead`, `markAsUnread`, `fetchUpdates`, `getDateRanges`, `markAllAsRead`, `updateItemMarkAsRead`, `requestPhotoUpdate`, `DateRange`, `Breakpoint`, `TagOption`, `UpdatesVariables`, `UpdateItem`, `FilterUpdates`. No screen, block or client action caller changed.
- One `UpdateItem` type, two mappers. HomeFeed and Updates_SingleList had two `UpdateItem` interfaces with the same 13 fields. The domain has one type. The date stays different, as before: `toFeedUpdateItems` keeps the null date "1900-01-01" as the server sends it (HomeFeed); `toUpdateItem` gives "" for it (Updates_SingleList). Each mapper keeps the key order of its old mapper.
- Fields that the mappers drop: none. Both item mappers keep all 13 UI_UpdateItem fields; `toUpdatesList` keeps the items and `osNumber(UnreadCount)`, as before; `toUpdateDateRangeIds` keeps the ids, as before; `toUnreadCount` keeps `UnreadCount` as the server sends it (no `osNumber`, as before); `requestPhotoUpdate` still answers `Out_IsSuccess`.
- Inputs. `toUpdatesListVariablesWire` is the old `screenVariables` of Updates_SingleList: the same 19 variables, the same order, the same null dates and the same tag options (IconId "", Enabled True). `toFilterUpdatesWire` is the old `filterWire`. The feed call still sends `CarouselPreloadedHouseholds` with an empty list. The repository test checks the input names of each call.
- Exports removed with no importer (grep in `src/`, `build/` and the tests): `toItem` and `filterWire` of `Updates_SingleList/api.ts`; `ScreenVariablesWire` and `FetchUpdatesResult` of `Updates_SingleList/types.ts`. Their code is now `toUpdateItem`, `toFilterUpdatesWire`, `UpdatesListVariablesWire` and `UpdatesList` in the domain.
- Hooks and §5.4. No call moves into a new query in this step. `useFeedUpdatesQuery` is the old `useFetchUpdates` with the same options: `retry: false` and the library cache defaults (staleTime 0, gcTime 5 minutes), so the block still shows the cached items on the next mount while it fetches again. Only the key changed, from `['HomeFeed', 'FeedBlock_Updates/DataActionFetchUpdates']` to `['update', 'feed']`. Nothing reads this key: grep found no `invalidateQueries`, `setQueryData`, `getQueryData` or `removeQueries` in the app code, and the view cache dehydrates every successful query that has an observer, whatever its key. The calls of Updates_SingleList, HouseholdCarousel, Menu and the bottom bar stay imperative calls in their flows (no hook): the screens call them in sequence (P5-4 or P6 can change this). So no `call` difference is expected, and `migration/refactor/handoffs/P5-2-update/exemptions.json` is `[]`.
- `@origin`: none in `api/update/`. The repository does not port one screen or block: it has the calls of 2 blocks or screens with data actions, 2 other screens and 1 service. Each function's JSDoc names its action and owner.
- Compiled-line references (`mvc.js:…`, `SCR ctrl :…`, `controller.js:…`) were removed only in the code that this step rewrote: the old functions of the four `api.ts` files and the old types of `Updates_SingleList/types.ts`. The kept comment block at the top of `HouseholdCarousel/api.ts` still has its references.
- For the documenter: `src/api/README.md` does not name `update/` yet. `app/docs/refactor/calls-by-domain.md` can get a "P5-2-update" note under the update table, as for country. The ActionRequestPhotoUpdate point above can go to the open items.

## Questions for the user
none
