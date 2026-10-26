## Result
status: pass
summary: I split the 4 files into 15 modules, each 367 lines or less (largest: ListItemSwipeable.tsx). Bodies are copied by
a kept script (`migration/tools/refactor/f59-a-split.ts`, reads HEAD, checks that each code line is copied once).
Typecheck, eslint, the 640 test files, the arch baselines (depcruise 142 rows, eslint 72 rows, knip 1130 → 1124) and dup pass.

## Files changed
app/.dependency-cruiser-known-violations.json
app/.knip-known-unused.json
app/src/components/feed/FeedCms/connect2Feed.ts
app/src/components/feed/FeedCms/connect2FeedIframe.ts (new)
app/src/components/feed/FeedCms/connect2FeedItems.ts (new)
app/src/components/feed/FeedCms/connect2FeedMessages.ts (new)
app/src/components/feed/FeedCms/connect2FeedState.ts (new)
app/src/components/filter/FilterSheet/FilterSheet.tsx
app/src/components/filter/FilterSheet/FilterSheet.stories.tsx (import only)
app/src/components/filter/FilterSheet/FilterSheet.test.tsx (import only)
app/src/components/filter/FilterSheet/types.ts
app/src/components/filter/FilterSheet/filterSheetActions.ts (new)
app/src/components/filter/FilterSheet/filterSheetState.ts (new)
app/src/components/filter/FilterSheet/useFilterSheet.ts (new)
app/src/components/ui/DropdownSearch/provider.ts
app/src/components/ui/DropdownSearch/providerConfig.ts (new)
app/src/components/ui/DropdownSearch/DropdownSearch.tsx (import only)
app/src/components/ui/DropdownSearch/DropdownSearch.test.tsx (import only)
app/src/components/ui/DropdownTags/DropdownTags.tsx (import only)
app/src/components/ui/os/OSList/OSListItem.tsx
app/src/components/ui/os/OSList/ListItemSwipeable.tsx (new)
app/src/components/ui/os/OSList/Swipeable.tsx (new)
migration/tools/refactor/f59-a-split.ts (new: the split script)
migration/refactor/handoffs/F59-a/dev.md (new)

Line counts (before → after):

| Folder | Files |
|---|---|
| `filter/FilterSheet/` | FilterSheet.tsx 695 → 325 (view, props), filterSheetActions.ts 272 (createActions), useFilterSheet.ts 120 (model class + hook), filterSheetState.ts 38 (constants, helpers, Vars), types.ts 6 → 31 (+ the 5 exported types) |
| `feed/FeedCms/` | connect2Feed.ts 652 → 173 (configure, loadFeeds, destroy, embed, reset), connect2FeedIframe.ts 169, connect2FeedItems.ts 146, connect2FeedState.ts 115, connect2FeedMessages.ts 110 |
| `ui/os/OSList/` | OSListItem.tsx 574 → 129 (OSListItem, OSListItemAction), ListItemSwipeable.tsx 367, Swipeable.tsx 87 |
| `ui/DropdownSearch/` | provider.ts 412 → 222 (DropdownSearchProvider class), providerConfig.ts 201 (types, option grouping, getProviderConfig) |

## Commands run
node migration/tools/refactor/f59-a-split.ts --dry-run → exit 0; only imports, the 12 `let` lines of connect2Feed.ts and 2 replaced header comments are not copied; no line is copied twice
node migration/tools/refactor/f59-a-split.ts → exit 0 (202 references renamed to `sdk.<name>`); second run → outputs byte-identical (shasum)
npm --prefix app run typecheck → exit 0 (after the 4 importer edits and the stories import)
npx eslint src/components/filter/FilterSheet src/components/feed/FeedCms src/components/ui/os/OSList src/components/ui/DropdownSearch src/components/ui/DropdownTags/DropdownTags.tsx → exit 0, 0 errors, 1 warning = the baseline row `provider.ts,@/platform/device/device,rule-4`
npx vitest run (the 4 folders + DropdownTags + containers/FilterSheet) → 8 files, 56 tests passed
npx vitest run (all) → 640 files, 3975 tests passed
npm --prefix app run arch → 0 new violations, 142 known
node app/build/check-arch-baselines.mjs → 142 rows, 142 violations, 0 stale
python3 migration/tools/refactor/arch_baseline.py check --strict → 72 warnings, 72 rows, 0 new, 0 gone
npm --prefix app run unused → knip 1124 rows, 1124 found, 0 new, 0 stale (6 stale rows deleted from 1130)
npm --prefix app run dup → exit 0, 35 clones, 0.51 % lines (the connect2FeedItems/connect2FeedMessages clone already existed inside the old connect2Feed.ts: relayItemMessage vs handleMessage)
npm --prefix app run format:check → all files formatted
npx vite build + node build/bundle-report.mjs, HEAD copy vs change (HEAD copy in the scratchpad, made with git show) → HomeFeed 751.86 → 754.08 kB raw, 244.87 → 244.98 kB gzip (+0.11); Login 601.87 → 601.87 raw, 184.92 → 184.89 gzip (−0.03). W21 gzip tripwire 0.3 kB not reached. The tester's build is still the gate.

## Deviations from the brief
- connect2Feed.ts: an ES module cannot assign another module's variable. So the 12 module-level `let` variables are
  now fields of one exported record `sdk` (`connect2FeedState.ts`); ts-morph renamed all 202 references (`iframe` →
  `sdk.iframe`, `config` → `sdk.config`, …). No other change to the logic. Effect: the minifier cannot shorten the
  property names. HomeFeed grows 2.22 kB raw and 0.11 kB gzip (see the bundle line above).
- FilterSheet: the 5 exported types (`OptionControl`, `FilterSheetCountry`, `FilterSheetLocality`,
  `FilterSheetSubscription`, `FilterSheetBackNavigationEvent`) moved to `types.ts`. The barrel still exports them
  through `export type * from './types'`, so FilterSheetContainer is unchanged. The test and the stories import 2 of
  them from `./types`. In `Vars`, the country list type is now `FilterSheetCountry[]` and not
  `AllCountries['CountryList']['List']`. Both are `CountryCodeName[]`. This change keeps `types.ts` the only file that
  imports the legacy cache type.
- Depcruise baseline: the rule-9 row (`→ legacy/os/cache/AllCountriesCacheControl`) moved with that type import. Its
  `from` changed from `FilterSheet.tsx` to `types.ts`, in place. There were 142 rows before and 142 after, so no row
  was added and no new import exists. Knip baseline: 6 rows were stale after the split and are deleted (buildEmbedUrl,
  Connect2FeedConfig, Connect2FeedUserConfig, FeedMessage, OptionControl, DropdownVariant). The modules of the split
  now import these names.
- Files stay flat in their folder (no `hooks/` or `components/` subfolder). Reasons: the step kind is "move inside the
  same folder", components already keep their hooks flat (`OSPopup/usePopupWidget.ts`), and a subfolder would need `@/`
  imports to reach its parent (rule 11 forbids `../`).
- No sub-view for the main branch of FilterSheet. With the view and the hook apart, the file has 325 lines, and a new
  component would add a component boundary and a props interface that the line target does not need. Hook order in
  FilterSheet is unchanged: `useFilterSheet` runs the same hooks, in the same order, as the first statement.
- The move codemod does not apply, because it moves whole files and does not split them. The split script does the
  copy, the `export` keywords and the renames, then runs prettier. Prettier changed `<T,>` to `<T>` in
  `filterSheetState.ts` and wrapped some lines again after the `export ` and `sdk.` prefixes.
- Comments: each new file has a short header comment. `connect2Feed.ts`, `OSListItem.tsx` and `provider.ts` now point to
  their split modules (the `provider.ts` header now lists only the class parts). `@origin
  UBTConnect.App_CommonBlocks_Filter.FilterSheet` is on the 3 new FilterSheet modules. The other new files port runtime
  sources (Connect2Feed SDK, OutSystemsReactWidgets, OSUI provider) and have no tag, like the files they come from.
- Not done (documenter): the folder READMEs of FilterSheet, FeedCms, OSList and DropdownSearch still name the old file
  for the moved parts. Same for move-map.csv and the CHANGELOG.
- Left in place: `app/dist/` of the worktree (gitignored, from the size check) and the HEAD copy
  `/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/59d369e8-2125-443a-af59-6fe7f8eaa7bc/scratchpad/head-F59-a`
  (outside the repo; its `app/node_modules` is a symlink to the main checkout's node_modules).

## Questions for the user
none
