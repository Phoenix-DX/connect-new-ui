## Result
status: pass
summary: Added the typed settings store `platform/settings` (plan v2 §3.2). `synchAppContext` now writes the store with one `setSettings` call. The old readers keep `getClientVar`/`useClientVar`/`setClientVar` with the OutSystems names: the adapter in `legacy/os/clientVarNames.ts` reads and writes the store for them. Typecheck, eslint, prettier, dependency-cruiser (0 errors, no new warnings) and the full Vitest suite (333 files, 1498 tests) pass.

## Files changed
app/src/platform/settings/store.ts (new)
app/src/platform/settings/useSetting.ts (new)
app/src/platform/settings/index.ts (new)
app/src/platform/settings/store.test.ts (new)
app/src/legacy/os/clientVarNames.ts (new)
app/src/legacy/os/clientVarNames.test.ts (new)
app/src/platform/session/clientVars.ts
app/src/platform/session/session.ts
app/src/platform/session/session.test.ts
app/src/platform/bootstrap/startup.ts
app/src/platform/bootstrap/startup.test.ts
migration/refactor/handoffs/P4-1/dev.md (new)

## Commands run
git branch --show-current → refactor/architecture
npm --prefix app run typecheck → exit 0
npx vitest run src/platform/settings src/legacy/os/clientVarNames.test.ts src/platform/session src/platform/bootstrap src/platform/navigation/LockHost.test.tsx src/platform/feedback/dialogs/BlockPinUnlock.test.tsx src/shared/UBT_AppManager src/shared/UBTConnect/Block_PINRegister_ContentWrapper src/shared/UBTConnect/Block_PINUnlock_ContentWrapper src/shared/UBTConnect/Version src/components/ui/os/OSPopup → exit 0, 26 files, 160 tests passed
npx vitest run (full suite, because 59 files call getClientVar) → exit 0, 333 files, 1498 tests passed
npx eslint <the 11 changed code files> → exit 0, no problem
npx eslint . → exit 0, 0 errors, 1 warning (existing: usePopupWidget.ts imports platform/session, rule 4)
npm run format:check → exit 0, all files use Prettier style
npm run arch → 0 errors (no cycle), 210 warnings. No warning comes from a new file or a new import. The only lines that name a changed file are the existing usePopupWidget.ts → session.ts warnings (rules 4 and 5).

## Design
- `platform/settings/store.ts`: the `Settings` interface (11 typed keys), the defaults (the compiled client-variable defaults false, 0 and ""), `getSetting`, `getSettings`, `setSettings(partial)`, `resetSettings`, `subscribeSettings`. Each read reads localStorage, as `getClientVar` does. A stored value of the wrong type gives the default of that setting.
- `useSetting.ts`: `useSyncExternalStore` hook for pages, hooks and containers. Nothing calls it yet, because the readers change when their page moves.
- `index.ts`: the barrel (R8). Other code imports `@/platform/settings`.
- `legacy/os/clientVarNames.ts`: `SETTING_CLIENT_VARS` (OutSystems name → setting key), `isSettingClientVar`, `readSettingClientVar`, `writeSettingClientVar`. Import direction: `legacy/os` → `platform/settings` → `platform/storage`. The store does not import `legacy/os`, so there is no cycle.
- `session.ts`: `getClientVar` and `setClientVar` send the setting names to the adapter. `clearClientVarsAfterLogout` also calls `resetSettings()`. `subscribeSettings(emit)` keeps the old notification rule: a settings change notifies the session listeners and rebuilds the shell snapshot. Both `useClientVar` readers and `usePopupWidget` depend on this, because `usePopupWidget` renders again on every client-variable change.
- `clientVars.ts`: the 11 setting names are no longer in `CLIENT_VAR_DEFAULTS`. `ClientVarName` is now the stored names plus the setting names, so every existing call still type-checks. These readers are unchanged: pin.ts, inactivity.ts, LockHost.tsx, Pincode_Unlock.tsx, UBTConnect_Utils actions.ts, and the tests and stories.

## Deviations from the brief
1. The store has 11 settings, not the 10 that §3.2 lists. I added `pin.inactivity.navigate` (PIN_SessionInactivity_Navigate) because `synchAppContext` writes it from the same AppManager_ClientCache and `inactivity.ts` reads it.
2. Storage layout: the settings persist as one typed object under `ubtc-mock:settings`. Before, there were 11 keys `ubtc-mock:cv:UBT_AppManager.*`. A store that used the old keys would need the OutSystems names, which would create a cycle with the adapter or a second copy of the names. This has no effect from a clean storage: parity contexts, e2e and unit tests. A demo tab that ran an older build reads the defaults until its next SynchAppContext answer, which comes on every page load. The next logout removes its old `cv:` setting keys. The tester can judge whether this counts as a behavior change.
3. session.test.ts: I did not delete the test "a stored value of the wrong type falls back to the default". It now uses `PIN_IsLocked` instead of `PIN_Use`, because `PIN_Use` is no longer a stored client variable. The settings fallback has its own test in store.test.ts.
4. I renamed `isClientVarName` to `isStoredClientVarName` in clientVars.ts. Only session.ts uses it.
5. New tests: store.test.ts (6), clientVarNames.test.ts (3), session.test.ts (2 new, 1 assertion added), startup.test.ts (2 new: SynchAppContext fills the store; a communication error keeps the stored settings).

## Questions for the user
none
