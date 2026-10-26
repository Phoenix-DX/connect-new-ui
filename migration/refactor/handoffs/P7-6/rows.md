# P7-6 part 1: move-map rows for src/shared/ (for review)

Developer, 2026-10-24. These rows are in `app/docs/refactor/move-map.csv` (phase `P7-6`, status empty). The script
`migration/tools/refactor/p7-6-move-map-rows.py` writes them. When the review changes a row, edit its `ROWS` list and
run the script again.

Review: approved with changes, decision W32 (Opus + Fable): T1 to T12 all option (a). The changes are in this file
(owners, "Debt created") and in the row notes.

## How the targets were chosen

- Files: 142 in `app/src/shared/` (`git ls-files` plus untracked files; no untracked file). The rows cover all of
  them: 136 move, 6 are deleted (`--check`: 0 uncovered, 0 collisions, 0 existing targets).
- Importers: the dependency-cruiser graph of the base (`depcruise src --output-type json`, type imports included).
  Then a simulation applied the rows to the graph and counted the folder-rule warnings again (dependency-cruiser
  rules 3 to 9, and ESLint rule 4 on `components/**`, stories and tests included).
- Hard limits found:
  1. **ESLint rule 4 decides the gate.** A file that any `components/**` file imports (stories and tests too) cannot
     go to `api/`, `platform/`, `containers/` or `pages/`. The new warning would be in an importer that does not move.
     W15 (`arch_baseline.py --move-step`) accepts only warnings in moved files, so `arch_baseline.py check` fails.
  2. **MSW glob.** `src/mocks/handlers.ts` loads `pages/*/mocks.ts`, `containers/*/mocks.ts`, `shared/**/mocks.ts`,
     `components/**/mocks.ts` and `platform/**/mocks.ts`. A `mocks.ts` in `api/`, `lib/` or `legacy/` is not loaded,
     and its handlers are lost (a behavior change). The 19 action keys of the shared mocks are each in one file only
     (checked), so the order of the handler groups does not change an answer.
  3. **Pure move.** A file goes to one place as it is. The module client actions (`<package>/lib/actions.ts`) mix pure
     helpers with api, platform and DOM code. No target is clean for them without a split (T1).

### Projected lint effect of the rows (simulation)

| Check                          | Base | After | New | Gone |
| ------------------------------ | ---: | ----: | --: | ---: |
| rule-5 (components/ui imports) |  122 |    13 |   1 |  110 |
| rule-6 (lib imports only lib)  |    0 |    55 |  55 |    0 |
| rule-9 (legacy/os importers)   |   94 |    99 |   5 |    0 |
| rule-8 (platform imports)      |   19 |    20 |   1 |    0 |
| rule-4 (components imports)    |   39 |    40 |   1 |    0 |
| dependency-cruiser total       |  274 |   227 |     |      |
| ESLint rule 4 (arch baseline)  |   78 |    79 |   1 |    0 |

The ESLint row is W15-acceptable (`components/ui/os/OSLink.tsx` → `@/platform/navigation`, which the old file imported).
Of the 55 rule-6 warnings: 48 are from the 8 module client-action files (T1), 6 are type-only re-exports of api domain
types in 4 structures files (T6), and 1 is from Leaflet (`UserException`).

## Table

Paths without `src/shared/` (file) and `src/` (target). Imp. = importer files outside the row (tests and stories
included). R = plan v2 §2.4 rule.

| #   | File or folder (files)                                  | Imp. | Proposed target                                             | Rule that allows it                                              | Risk                                         |
| --- | ------------------------------------------------------- | ---: | ----------------------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------- |
| 1   | `Connect2_LegacyShared/MultiResolutionImageLoader` (5)  |    0 | delete                                                      | P0-5 shape delete; import graph + grep: no user (knip keeps stories alive) | deletes its test (T12)             |
| 2   | `UBTConnectLibrary/Member_ListItem` (8)                 |    1 | `components/household/MemberListItem/MemberListItem.tsx`    | R4: imports components/ui and lib only                           | rename (W12)                                 |
| 3   | `UBTConnect/HouseholdDetails_TimelinePhoto` (6)         |    1 | `components/household/HouseholdTimelinePhoto/…tsx`          | R4                                                               | rename                                       |
| 4   | `UBTConnect/HouseholdDetails_TimelinePhoto_List` (6)    |    1 | `components/household/HouseholdTimelinePhotoList/…tsx`      | R4                                                               | rename                                       |
| 5   | `UBTConnectLibrary/Layout_DetailPage` adapter (11)      |   11 | `containers/DetailLayout/DetailLayoutContainer.tsx`         | §2.1 container (hook + one tree); only pages import it           | 2nd row for the source (T4)                  |
| 6   | `UBTConnect_Utils/CacheControl` (6)                     |    4 | `legacy/os/cache/CacheControl/CacheControl.tsx`             | §2.2 legacy/os: OutSystems compatibility; only the family imports | none                                         |
| 7   | `UBTConnect_Utils/CacheControl_AllCountries` (7)        |    2 | `legacy/os/cache/AllCountriesCacheControl/…tsx`             | §2.2 legacy/os                                                   | R9: 2; rename (T2)                           |
| 8   | `UBTConnect_Utils/CacheControl_AllLocalities` (7)       |    1 | `legacy/os/cache/AllLocalitiesCacheControl/…tsx`            | §2.2 legacy/os                                                   | R9: 1; rename (T2)                           |
| 9   | `UBTConnect_Utils/CacheControl_Policies` (7)            |    4 | `legacy/os/cache/PoliciesCacheControl/…tsx`                 | §2.2 legacy/os; R9 allows its 2 platform importers               | R9: 2; rename (T2)                           |
| 10  | `UBTConnect_Utils/CacheControl_UserInfo` (7)            |    1 | `legacy/os/cache/UserInfoCacheControl/…tsx`                 | §2.2 legacy/os; its importer is platform (row 11)                | rename (T2)                                  |
| 11  | `UBTConnect/CacheControl_UserInfo_Wrapper` (7)          |   12 | `platform/session/UserInfoCache/UserInfoCache.tsx` (P0-5)   | data owner: session user info; R8 ok for its importers           | R8: 1 (OSBlock); rename (T3)                 |
| 12  | `UBTConnect/Directory_Updates` (1: mocks.ts)            |    1 | `mocks/modules/UBTConnect/Directory_Updates/mocks.ts`       | §2.2 mocks/ holds MSW handlers                                   | glob line (T7)                               |
| 13  | `lib/cssText.ts` (+test)                                |   25 | `lib/cssText.ts`                                            | R6: imports nothing                                              | none                                         |
| 14  | `lib/osDateTime.ts`                                     |   14 | `lib/osDateTime.ts`                                         | R6                                                               | none                                         |
| 15  | `lib/OSLink.tsx`                                        |   19 | `components/ui/os/OSLink.tsx`                               | §2.6 OutSystems widget → components/ui (next to OSBlock)         | 1 W15 row (FU-OSLink-navigation); tool fix (T5) |
| 16  | `test` (5)                                              |  218 | `test/` (names kept)                                        | brief: src/test/ for test setup; stories and tests only          | none: folder exists, no file collision       |
| 17  | `README.md`                                             |    0 | delete                                                      | describes src/shared/ only                                       | none                                         |
| 18  | `UBTConnectLibrary/lib/staticEntities.ts`               |  194 | `lib/ubtConnectLibrary/staticEntities.ts`                   | R6: imports nothing                                              | none (T8 naming)                             |
| 19  | `UBTConnectLibrary/lib/structures.ts`                   |   77 | `lib/ubtConnectLibrary/structures.ts`                       | R6                                                               | none                                         |
| 20  | `UBTConnect/lib/staticEntities.ts`                      |   97 | `lib/ubtConnect/staticEntities.ts`                          | R6                                                               | none                                         |
| 21  | `UBTConnect/lib/structures.ts`                          |   52 | `lib/ubtConnect/structures.ts`                              | R6: imports rows 19 and 28                                       | none                                         |
| 22  | `UBTConnect_Utils/lib/staticEntities.ts`                |   65 | `lib/ubtConnectUtils/staticEntities.ts`                     | R6                                                               | none                                         |
| 23  | `UBTConnect_Utils/lib/structures.ts`                    |   35 | `lib/ubtConnectUtils/structures.ts`                         | none clean (T6)                                                  | R6: 1 type edge                              |
| 24  | `Connect2_LegacyShared/lib/staticEntities.ts`           |   31 | `lib/legacyShared/staticEntities.ts`                        | R6                                                               | none                                         |
| 25  | `Connect2_LegacyShared/lib/structures.ts`               |    8 | `lib/legacyShared/structures.ts`                            | none clean (T6)                                                  | R6: 3 type edges                             |
| 26  | `Connect2_OrbitMobile_MUI/lib/staticEntities.ts`        |   46 | `lib/orbit/staticEntities.ts`                               | R6                                                               | none                                         |
| 27  | `Connect2_OrbitMobile_MUI/lib/structures.ts`            |   12 | `lib/orbit/structures.ts`                                   | none clean (T6)                                                  | R6: 1 type edge                              |
| 28  | `Connect_Geography_CS/lib/structures.ts`                |    7 | `lib/geography/structures.ts`                               | R6: imports row 19                                               | none                                         |
| 29  | `Connect2_Assemble_MUI/lib/staticEntities.ts`           |    4 | `lib/assemble/staticEntities.ts`                            | R6                                                               | none                                         |
| 30  | `Connect2_Assemble_MUI/lib/structures.ts`               |    2 | `lib/assemble/structures.ts`                                | none clean (T6)                                                  | R6: 1 type edge                              |
| 31  | `UBTConnectLibrary/lib/actions.ts` (+test)              |   62 | `lib/ubtConnectLibrary/actions.ts`                          | none clean (T1)                                                  | R6: 2                                        |
| 32  | `UBTConnect/lib/actions.ts` (+test)                     |   49 | `lib/ubtConnect/actions.ts`                                 | none clean (T1)                                                  | R6: 9                                        |
| 33  | `UBTConnect/lib/unsupportedVersion.ts` (+test)          |    4 | `lib/ubtConnect/unsupportedVersion.ts`                      | none clean (T1)                                                  | R6: 2                                        |
| 34  | `UBTConnect_Utils/lib/actions.ts` (+test)               |   50 | `lib/ubtConnectUtils/actions.ts`                            | none clean (T1)                                                  | R6: 10                                       |
| 35  | `UBTConnect_Utils/lib/openPolicy.test.ts`               |    0 | `lib/ubtConnectUtils/openPolicy.test.ts`                    | test of row 34                                                   | none                                         |
| 36  | `Connect2_LegacyShared/lib/actions.ts` (+test)          |   33 | `lib/legacyShared/actions.ts`                               | none clean (T1)                                                  | R6: 13                                       |
| 37  | `Connect2_OrbitMobile_MUI/lib/actions.ts` (+test)       |   46 | `lib/orbit/actions.ts`                                      | none clean (T1)                                                  | R6: 5                                        |
| 38  | `Connect2_Assemble_MUI/lib/actions.ts` (+test)          |   11 | `lib/assemble/actions.ts`                                   | none clean (T1)                                                  | R6: 6                                        |
| 39  | `Connect2_Assemble_MUI/lib/toggleBookmarkItem.test.ts`  |    0 | `lib/assemble/toggleBookmarkItem.test.ts`                   | test of row 38                                                   | none                                         |
| 40  | `UBTJavaScriptUtils/lib/actions.ts` (+test)             |   21 | `lib/jsUtils.ts`                                            | none clean (T1)                                                  | R6: 1 (navigation hook)                      |
| 41  | `Leaflet/lib` (5)                                       |   10 | `lib/leaflet/` (names kept)                                 | R6 except `UserException` (T1)                                   | R6: 1                                        |
| 42  | `NavigationHandler/lib/actions.ts` (+test)              |   16 | `lib/navigationEvent.ts`                                    | R6: imports nothing; components/ui/Dialog imports it (R5 ok)     | none                                         |
| 43  | `ReactiveHtmlSanitizer/lib/actions.ts` (+test)          |    2 | `lib/sanitizeHtml.ts`                                       | R6; §2.2 lists sanitize in lib/                                  | none (T9)                                    |
| 44  | `UBTConnect_EmbedFeed/lib/actions.ts`                   |    1 | `components/feed/FeedCms/embedFeed.ts`                      | its only user; imports nothing                                   | none (T10)                                   |
| 45  | `UBT_AppManager/lib/actions.ts` (+test)                 |    1 | `platform/session/pinRules.ts`                              | its only user is platform/session; R8 ok                         | none (T11)                                   |
| 46  | `FileTransferPlugin/lib/handleDownload.ts`              |    3 | `platform/device/handleDownload.ts`                         | §2.2 platform/device holds the file plugins; pages import it     | none                                         |
| 47  | `Connect2_MyBookmarks_MUI/mocks.ts` (+test)             |    8 | `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts`           | §2.2 mocks/                                                      | glob line (T7)                               |
| 48  | `Connect2_Assemble_MUI/lib/mocks.ts`                    |    0 | `mocks/modules/Connect2_Assemble_MUI/mocks.ts`              | §2.2 mocks/                                                      | glob line (T7)                               |
| 49  | `Connect2_LegacyShared/lib/mocks.ts`                    |    2 | `mocks/modules/Connect2_LegacyShared/mocks.ts`              | §2.2 mocks/                                                      | glob line (T7)                               |
| 50  | `Connect2_LegacyShared/lib/mockDefaults.ts`             |    5 | `mocks/modules/Connect2_LegacyShared/mockDefaults.ts`       | with row 49; tests import it                                     | none                                         |
| 51  | `Connect2_OrbitMobile_MUI/lib/mocks.ts`                 |    3 | `mocks/modules/Connect2_OrbitMobile_MUI/mocks.ts`           | §2.2 mocks/                                                      | glob line (T7)                               |
| 52  | `UBTConnect_Utils/CacheControl_AllCountries/mocks.ts`   |    0 | `mocks/modules/UBTConnect_Utils/CacheControl_AllCountries/mocks.ts` | legacy/os is outside the MSW glob                        | glob line (T7)                               |
| 53  | `UBTConnect_Utils/CacheControl_AllLocalities/mocks.ts`  |    0 | `mocks/modules/UBTConnect_Utils/CacheControl_AllLocalities/mocks.ts` | as row 52                                               | glob line (T7)                               |
| 54  | `UBTConnect_Utils/CacheControl_Policies/mocks.ts` (+test) |  0 | `mocks/modules/UBTConnect_Utils/CacheControl_Policies/mocks.ts` | as row 52                                                    | glob line (T7)                               |
| S1  | `NavigationHandler/NavigationConfirmationDialog`        |    – | `components/ui/Dialog/NavigationDialog.tsx`                 | settled by P7-2: status `moved`                                  | none                                         |
| S2  | `UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy` |    – | `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` | settled by P7-2: target fixed, status `moved`, shape `component` | none                                 |

Block renames (W12 map, identifier `<Old>` and `<Old>Props`): Member_ListItem → MemberListItem,
HouseholdDetails_TimelinePhoto(_List) → HouseholdTimelinePhoto(List), CacheControl_AllCountries →
AllCountriesCacheControl, CacheControl_AllLocalities → AllLocalitiesCacheControl, CacheControl_Policies →
PoliciesCacheControl, CacheControl_UserInfo → UserInfoCacheControl, CacheControl_UserInfo_Wrapper → UserInfoCache,
Layout_DetailPage → DetailLayoutContainer. No new name is used in `src/` today.

## Rows with two possible targets

Numbers: the simulation with only that choice changed. "dc" = dependency-cruiser total (rows as proposed: 227).

**T1. Module client actions (rows 31 to 34, 36 to 38, 40, 41).** They mix pure helpers with api calls, platform
state, DOM code and `legacy/os`, and `components/**` imports each of them.
- (a) `lib/<module>/actions.ts` (proposed): dc 227, ESLint +0; 48 rule-6 edges from these files. Rule 6 is broken.
  Owner: follow-up FU-split-module-actions.
- (b) `components/<domain>/` or `components/ui/lib/`: dc 236, 52 new W15 rows, rule-8 +6.
- (c) by data owner (`platform/<area>`, `api/<domain>`): 62 ESLint rule-4 warnings in importers that do not move.
  The gate fails, and 18 rule-7 warnings are added.
- (d) `legacy/os/modules/`: dc 409 (rule-9 +204).
- (e) split each module first (a change step per module): this is not a pure move, and it is larger than this step.
- Recommendation: (a), approved (W32). Owner of the debt: follow-up **FU-split-module-actions** ("split module client
  actions by data owner", change steps, before P9-1, when rule 6 becomes an error). It also covers the type-only edges
  of T6 and row 33: `lib/ubtConnect/unsupportedVersion.ts` imports `@/mocks/scenarioParams` (a mock-scenario read in
  app code) and `@/platform/config`. For row 31 alone, `components/ui/lib/ubtConnectLibrary.ts` costs one more warning
  (rule 8 from `platform/bootstrap/appStartSteps.ts`), so (a) stays.

**T2. CacheControl family (rows 6 to 10).** These are OutSystems blocks. Each one renders an `OSBlock` placeholder and
runs the cache flow. The P0-5 targets (`api/client/cacheControl.ts`, `api/<domain>/hooks.ts`) merge the hook into api
and keep the placeholder where the pages render it. That is a change for a later step.
- (a) `legacy/os/cache/<Name>/` (proposed), with the 3 `mocks.ts` out to `mocks/modules/` (rows 52 to 54): dc 227,
  ESLint +0. Rule-9 +5: `containers/FilterSheet` ×2, `pages/TermsAndPoliciesMenu`, and type imports in
  `components/filter/FilterSheet` and `components/auth/PinUnlockContent`.
- (b) `components/cache/<Name>/`: dc 242, 37 new W15 rows, rule-8 +4.
- (c) `containers/<Name>/`: dc 227, but 2 ESLint hard warnings (`components/filter/FilterSheet` and
  `components/auth/PinUnlockContent` import a type), so the gate fails. Rule-8 +4.
- (d) `api/<domain>/<Name>/` folders: dc 232, the same 2 ESLint hard warnings, and rule-7 +8.
- Recommendation: (a). The family stays together, and a later step replaces it with the P0-5 api hooks.

**T3. CacheControl_UserInfo_Wrapper (row 11).**
- (a) `platform/session/UserInfoCache/` (the P0-5 target, proposed): dc 227. Its `OSBlock` import is rule-8 +1.
- (b) `containers/UserInfoCache/`: dc 227 (rule-9 +1 instead).
- (c) `legacy/os/cache/` with the family: dc 238 (rule-9 +11 from pages).
- Recommendation: (a). It sets the session user info, and it keeps the approved P0-5 target.

**T4. Layout_DetailPage adapter (row 5).** The P2 row (status `moved`) records the view move to
`components/layout/DetailLayout`. The adapter (`useNavigateBack` + `DetailLayout`) still serves 11 pages.
- (a) `containers/DetailLayout/DetailLayoutContainer.tsx` (proposed): 0 warnings. It matches §2.1, but not the §2.3
  criterion. It is temporary: later each page passes `onBack`.
- (b) `components/layout/DetailPageLayout/`: dc 228, 4 new W15 rows (the adapter, its test and story).
- Recommendation: (a). Tool note: the new row comes after the P2 row with the same source, so the rename map of
  `rf.py` (last row wins) maps `Layout_DetailPage` to `DetailLayoutContainer`.

**T5. OSLink (row 15).**
- (a) `components/ui/os/OSLink.tsx` (proposed): 1 W15 row, rule-4 and rule-5 +1 each.
  `arch_baseline.py old_path_of` handles folder rows only. It builds the old path of a file row as
  `…/OSLink.tsx/OSLink.tsx.tsx`, so it needs a small fix (own commit and test, W12 guard), or the master adds the row.
- (b) `lib/OSLink.tsx`: dc 226, no baseline row, no tool change, but a React component in `lib/`.
- Recommendation: (a), approved (W32). It is an OutSystems widget port, and its navigation dependency is real UI debt.
  Baseline row owner: follow-up **FU-OSLink-navigation** (OSLink gets its navigation by a prop or an app-level
  context), not P7.

**T6. Structures that re-export api domain types (rows 23, 25, 27, 30).**
- (a) `lib/<module>/structures.ts` (proposed): 6 type-only rule-6 edges.
- (b) `api/<domain>/types.ts`: a merge, and ESLint hard in their `components/**` importers.
- Recommendation: (a).

**T7. MSW mock modules (rows 12, 47 to 54).**
- (a) `src/mocks/modules/<Module>/…` (proposed). This mirrors `src/mocks/fixtures/<Module>/`. Commit 2 changes the
  glob `../shared/**/mocks.ts` to `./modules/**/mocks.ts` at the same place in `src/mocks/handlers.ts` (same group
  order, same order inside the group), and the 2 globs of `handlers.test.ts`. These are 3 non-move lines, and no
  fixture changes.
- (b) Folders that the glob already loads (for example `components/bookmark/mocks.ts`, `components/orbit/mocks.ts`):
  no glob change, but MSW servers sit in UI folders. They add W15 rows (`@/api/schema` imports) and rule-8 +1
  (`platform/bootstrap/mocks.ts`) (estimate, not simulated).
- Recommendation: (a). The glob line has to change anyway when `shared/` goes. (The P0-5 target of row 12,
  `src/mocks/handlers/update.ts`, needs a new glob with a test-file exclusion.)

**T8. Folder names in lib/.**
- (a) `lib/<module>/` in camelCase without the Connect2_/_MUI/_CS parts (proposed): `ubtConnectLibrary`, `ubtConnect`,
  `ubtConnectUtils`, `legacyShared`, `orbit`, `assemble`, `geography`, `leaflet`. Single-file modules get a flat name
  (`jsUtils.ts`, `navigationEvent.ts`, `sanitizeHtml.ts`).
- (b) Flat files with a module prefix.
- Recommendation: (a). Three modules export the same names with other values (`UBT_Color`, `UBT_Size`, `UBT_Icons`),
  so the module stays the namespace.

**T9. ReactiveHtmlSanitizer (row 43).** (a) `lib/sanitizeHtml.ts` (proposed: §2.2 lists sanitize in lib/).
(b) `components/ui/SanitizedHtml/sanitizeHtml.ts` (its only user). 0 warnings either way. Recommendation: (a).

**T10. UBTConnect_EmbedFeed (row 44).** (a) `components/feed/FeedCms/embedFeed.ts` (proposed: its only user, next to
`connect2Feed.ts`). (b) `lib/embedFeed.ts`. 0 warnings either way. Recommendation: (a).

**T11. UBT_AppManager PIN_ValidateRules (row 45).** (a) `platform/session/pinRules.ts` (proposed: its only user,
PIN in session §3.2). (b) `lib/pinRules.ts` (pure function). 0 warnings either way. Recommendation: (a).

**T12. MultiResolutionImageLoader (row 1).** No importer outside its own test and story. Evidence: the
dependency-cruiser import graph (0 dependents outside the folder) and a grep of `src`, `build` and `.storybook` for the
name (no hit outside the folder). knip cannot show it: its stories are knip entries, so knip keeps the component alive.
- (a) Delete it (proposed). This is the P0-5 shape `delete`. Do it in a commit of its own, not in the pure move. It
  deletes its test, so it needs the master's OK (agent rule 8).
- (b) Move it to `components/ui/MultiResolutionImageLoader/` in the pure move, and delete it later (P9, knip).
- Recommendation: (a).

## Debt created

Every new dependency-cruiser warning that the rows make, per file after the move (simulation of the rows on the base
graph; part 4 checks it against a real `depcruise` run). Paths without `src/`. 63 warnings: rule-6 55, rule-9 5,
rule-8 1, rule-4 1, rule-5 1. The rule-6 count is the ceiling: later steps may only lower it.

Owners:
- **FU-split-module-actions**: split the module client actions by data owner (change steps, before P9-1). It also
  covers the type re-exports of the structures files.
- **FU-OSLink-navigation**: OSLink gets its navigation by a prop or an app-level context.
- **CacheControl → api hooks step**: the later change step that replaces the CacheControl blocks with the P0-5 api
  hooks (`api/client/cacheControl.ts`, `api/<domain>/hooks.ts`) and keeps only the `OSBlock` placeholders.

| File                                                      | Rule   |   N | Imports                                                                                                                                                                                                                                                                      | Owner                         |
| --------------------------------------------------------- | ------ | --: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `components/ui/os/OSLink.tsx`                             | rule-4 |   1 | `platform/navigation/index.ts`                                                                                                                                                                                                                                               | FU-OSLink-navigation          |
| `components/ui/os/OSLink.tsx`                             | rule-5 |   1 | `platform/navigation/index.ts`                                                                                                                                                                                                                                               | FU-OSLink-navigation          |
| `lib/assemble/actions.ts`                                 | rule-6 |   6 | `api/bookmark/index.ts`, `legacy/os/os-wire.ts`, `platform/feedback/feedbackStore.ts`, `platform/log/log.ts`, `platform/session/userInfo.ts`, `platform/storage/localEntities/index.ts`                                                                                         | FU-split-module-actions       |
| `lib/assemble/structures.ts`                              | rule-6 |   1 | `api/event/index.ts` (type)                                                                                                                                                                                                                                                  | FU-split-module-actions       |
| `lib/jsUtils.ts`                                          | rule-6 |   1 | `platform/navigation/index.ts`                                                                                                                                                                                                                                               | FU-split-module-actions       |
| `lib/leaflet/actions.ts`                                  | rule-6 |   1 | `legacy/os/os-exceptions.ts`                                                                                                                                                                                                                                                 | FU-split-module-actions       |
| `lib/legacyShared/actions.ts`                             | rule-6 |  13 | `api/bookmark/keys.ts`, `api/client/cache.ts`, `api/client/callAction.ts`, `api/country/index.ts`, `api/image/index.ts`, `api/locality/index.ts`, `api/member/index.ts`, `api/message/index.ts`, `legacy/os/os-exceptions.ts`, `legacy/os/os-wire.ts`, `platform/feedback/feedbackStore.ts`, `platform/log/log.ts`, `platform/session/session.ts` | FU-split-module-actions |
| `lib/legacyShared/structures.ts`                          | rule-6 |   3 | `api/country/index.ts`, `api/locality/index.ts`, `api/message/index.ts` (types)                                                                                                                                                                                              | FU-split-module-actions       |
| `lib/orbit/actions.ts`                                    | rule-6 |   5 | `api/client/callAction.ts`, `api/event/index.ts`, `platform/log/log.ts`, `platform/session/session.ts`, `platform/storage/localEntities/orbitStaticEntities.ts`                                                                                                             | FU-split-module-actions       |
| `lib/orbit/structures.ts`                                 | rule-6 |   1 | `api/event/index.ts` (type)                                                                                                                                                                                                                                                  | FU-split-module-actions       |
| `lib/ubtConnect/actions.ts`                               | rule-6 |   9 | `api/bookmark/index.ts`, `api/update/index.ts`, `components/ui/lib/actions.ts`, `legacy/os/os-exceptions.ts`, `legacy/os/os-wire.ts`, `platform/log/log.ts`, `platform/session/session.ts`, `platform/session/userInfo.ts`, `platform/storage/localEntities/index.ts`             | FU-split-module-actions       |
| `lib/ubtConnect/unsupportedVersion.ts`                    | rule-6 |   2 | `mocks/scenarioParams.ts`, `platform/config/config.ts`                                                                                                                                                                                                                       | FU-split-module-actions       |
| `lib/ubtConnectLibrary/actions.ts`                        | rule-6 |   2 | `components/ui/lib/staticEntities.ts`, `legacy/os/os-assets.ts`                                                                                                                                                                                                              | FU-split-module-actions       |
| `lib/ubtConnectUtils/actions.ts`                          | rule-6 |  10 | `api/client/cache.ts`, `api/client/callAction.ts`, `api/image/index.ts`, `components/ui/lib/actions.ts`, `legacy/os/os-wire.ts`, `platform/feedback/index.ts`, `platform/feedback/pageRedirect.ts`, `platform/flags/index.ts`, `platform/log/log.ts`, `platform/session/session.ts` | FU-split-module-actions       |
| `lib/ubtConnectUtils/structures.ts`                       | rule-6 |   1 | `api/locality/index.ts` (type)                                                                                                                                                                                                                                               | FU-split-module-actions       |
| `platform/session/UserInfoCache/UserInfoCache.tsx`        | rule-8 |   1 | `components/ui/os/OSBlock.tsx`                                                                                                                                                                                                                                               | CacheControl → api hooks step |
| `components/auth/PinUnlockContent/PinUnlockContent.tsx`   | rule-9 |   1 | `legacy/os/cache/PoliciesCacheControl/index.ts` (type)                                                                                                                                                                                                                       | CacheControl → api hooks step |
| `components/filter/FilterSheet/FilterSheet.tsx`           | rule-9 |   1 | `legacy/os/cache/AllCountriesCacheControl/index.ts` (type)                                                                                                                                                                                                                   | CacheControl → api hooks step |
| `containers/FilterSheet/FilterSheetContainer.tsx`         | rule-9 |   2 | `legacy/os/cache/AllCountriesCacheControl/index.ts`, `legacy/os/cache/AllLocalitiesCacheControl/index.ts`                                                                                                                                                                    | CacheControl → api hooks step |
| `pages/TermsAndPoliciesMenu/TermsAndPoliciesMenuPage.tsx` | rule-9 |   1 | `legacy/os/cache/PoliciesCacheControl/index.ts`                                                                                                                                                                                                                              | CacheControl → api hooks step |

T2 note (not counted: no rule restricts what `legacy/os/` imports): after the move, `legacy/os/cache/` imports
`api/client/cache`, `api/client/callAction`, `api/country`, `api/locality`, `api/app`, `api/member`,
`platform/session/session` and `components/ui/os/OSBlock`. Until now `legacy/os/` imported `platform/`, `app/`
(generated CSS table), `api/schema` types and a shared static-entities file, but no `api/<domain>`, no `api/client` and
no `components/`. Those three are new. Owner: the CacheControl → api hooks step, which leaves `legacy/os/cache/` empty
again.

## Commit 2 notes (not part of the approval)

- Non-move lines expected: `src/mocks/handlers.ts` and `handlers.test.ts` (T7). In `.dependency-cruiser.cjs`, the 6
  `shared/` rules and the `shared/` text in comments go. `.prettierignore` loses `src/shared/**/__captures__` (the
  captures already pass Prettier). `arch-baseline.csv` gets +1 row (T5). The `@origin` tags go on the moved block
  files (row 2 to 11). Commit 2 also removes the empty folders that `git mv` leaves in `src/shared/`. There is no
  `shared` alias in `tsconfig.json` or `vite.config.ts`.
- `move.ts`: use the per-file list of `p7-6-move-map-rows.py --files`, as P7-0 did. A folder row with a file target
  and the `mocks.ts` rows inside the CacheControl folders overlap in `--map` mode.
- Move-map rows 7 and 245 had 9 fields (an unquoted comma in the notes, from an earlier step). Their notes are now
  quoted (W32).
