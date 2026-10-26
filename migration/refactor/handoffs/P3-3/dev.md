## Result
status: pass
summary: Removed the only import cycle in src/ (platform/session cachedUserInfo.ts ↔ mockUser.ts): the shared record type
moved to a new leaf file, platform/session/types.ts. The named folder pairs and osui had no production import left to
remove (Q11), so 3 warn rules now keep these directions. depcruise: 0 errors, 210 warnings (0 new); all checks pass.

## Files changed
app/src/platform/session/types.ts (new: `AppManager_CachedUserInfoRec`, moved without change from cachedUserInfo.ts)
app/src/platform/session/cachedUserInfo.ts (the interface is removed; `import type` from ./types)
app/src/platform/session/mockUser.ts (`import type` from ./types instead of ./cachedUserInfo)
app/src/screens/LDM_Email_V2/components/ScreenBlock_Event_Email_V2.tsx (the type import comes from @/platform/session/types)
app/.dependency-cruiser.cjs (header comment; 3 new warn rules: `osui-no-import-of-app-modules`,
`legacyshared-no-import-of-ubtconnect`, `mybookmarks-no-import-of-assemble`)
migration/refactor/handoffs/P3-3/dev.md (this report)

No `git mv`, `git add`, checkout or restore was used. No helper script was left in the tree: the graph analysis used
one-off node scripts in the session scratchpad only.

## Commands run
`npm run arch` before the change → exit 1, 211 violations (1 error, 210 warnings). The only error: no-circular
`platform/session/cachedUserInfo.ts → mockUser.ts → cachedUserInfo.ts`. mockUser.ts imported the record type, and
cachedUserInfo.ts imported `mockCachedUserIdentity`. Type imports count (`tsPreCompilationDeps: true`).
`npm run arch` after the change → exit 0, "210 dependency violations (0 errors, 210 warnings)". The 210 warnings are
the old ones: rule-9 201, rule-8 7, rule-5 1, rule-4 1. The 3 new rules have 0 violations.
depcruise JSON, `circular: true` dependencies → 0 in all files, stories and tests included (before: 2, the cycle above).
Probe with a scratchpad copy of the config without the story/test exclusion → the new rules fire on the stories and tests
(`osui-no-import-of-app-modules` 55, `legacyshared-no-import-of-ubtconnect` 3) and no-circular stays 0. So the rule
regexes work. The copy was deleted.
Folder graph of production files (no story, no test), direct edges:
- `shared/UBTConnect → shared/Connect2_LegacyShared`: 1 (CommonUI_InsideLayout → HandleImageLoadError). Reverse: 0.
  The only reverse edges are in 2 stories (BaseLayout_UpdatedOSUI, Layout), which are out of the rules by Q11.
- `shared/Connect2_Assemble_MUI → shared/Connect2_MyBookmarks_MUI`: 1 (lib/mocks.ts → mocks.ts). There is no reverse
  path in any file. At the tag `migration-complete`, MyBookmarks also only named Assemble in comments.
- `shared/osui` production files import only `components/ui/os/OSBlock`, `platform/device` (DropdownSearch provider)
  and `shared/lib/cssText`, as at `migration-complete`. Only stories and tests import UBTConnect, UBTConnectLibrary or
  UBTConnect_Utils (Q11).
`npm --prefix app run typecheck` → exit 0
`npx vitest run src/platform/session src/screens/LDM_Email_V2` → 8 files, 49 tests passed (LDM_Email_V2 has no test file)
`npx vitest run src/platform src/shared/UBT_AppManager src/shared/Connect2_Assemble_MUI src/screens/OrbitAdminLanding
src/screens/QRCodeGenerate src/screens/AcceptPendingPolicies` → 59 files, 315 tests passed
`npx eslint` on the 5 changed code and config files → exit 0
`npm run format:check` (whole app) → "All matched files use Prettier code style!"
Parity was not run (tester). The change is type-only in TypeScript (`import type` and one interface moved), so no
emitted JavaScript changes.

## Deviations from the brief
- The plan's "Do" names two folder cycles and the osui imports. In production code these were already gone (see the
  folder graph above). The remaining edges are in stories and tests, which decision Q11 keeps out of the rules. The
  depcruise cycle that blocked the step Check ("0 cycles in src/") was the platform/session cycle, so the code change is
  there. The baseline (P0-3) found this cycle and gave P3 the target 0.
- As in P3-2, I added warn rules that keep the cleaned directions for production code. The config header names P3-3.
- Out of scope, the same as in P3-2: indirect folder paths through `platform/` close loops at folder level, but they
  make no module cycle. These are `Connect2_LegacyShared → platform/feedback → shared/UBTConnect`
  (`platform/feedback/dialogs/BlockPinUnlock.tsx` imports UBTConnect blocks) and
  `shared/osui → components/ui → platform/session → platform/bootstrap → UBTConnectLibrary / UBTConnect_Utils`. They
  end when platform/ stops importing shared/ (Phase 4) and when components/ui stops importing platform/ (rules 4 and 5,
  existing warnings). `shared/osui/DropdownSearch/provider.ts → platform/device` is not an app module. It will be a rule-5
  item when P7-1 moves osui to components/ui.
- For the documenter: record the 3 new rules with the P3-2 rules (ADR-15 or the architecture overview). Also record the
  new file `platform/session/types.ts`: the plan v2 §4 file list of platform/session (line 517) does not name it.

## Questions for the user
none
