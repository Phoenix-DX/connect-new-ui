# Minor findings wave of 2026-10-27

The user ordered the fix of the 56 minor findings of the flow reports (2026-10-27). Eight developer agents (Opus)
worked in parallel, one group each, from the brief `../FIX.md`. The orchestrator fixed ContactFlow F2 (shared
component). `manifest.json` lists every finding with its result; `../tools/apply_fixes.py` writes the result into the
report (§5 column "Status") and the checklist rows.

## Result

| Result | Count | Findings |
|---|---|---|
| Fixed in the React code | 51 | see the group notes; App_Common F2 and Directory_Updates F2 after the user's decisions of the same day (`H-user-followups.md`) |
| Withdrawn after a second read of the TST code | 4 | Legacy_AssembleFlow F1, Legacy_OrbitEventsFlow F5, Legacy_OrbitEventsFlow F6, _libraries F4 |
| Kept by a recorded decision | 1 | Legacy_OrbitEventsFlow F4 (W34 a, 2026-10-22) |
| Open | 0 | Directory_Updates F2 closed: capture, then the port of the scroll anchor (`H-user-followups.md`) |

Partial fixes inside the 49: App_Common F3 (the constant; the dialog waits by Q3 a), Directory_Updates F3 (mock
only; row 007 stays mock-only).

## Group notes

| Group | Note | Findings |
|---|---|---|
| A | `A-shell.md` | document.title ×6, App_Common F3, _shared F1, Legacy_Share F1 |
| B | `B-restore.md` | App_Menu F1, Legacy_LDMEventsFlow F2; F4 and F5 of Legacy_OrbitEventsFlow not changed |
| C | `C-errors.md` | Calendar F2, App_Policies F2–F4, Home F2, _libraries F2, F3 |
| D | `D-forms.md` | App_Profile F2, App_PIN F1, Legacy_OrbitQRCodeFlow F2, ContactFlow F2; _libraries F4 withdrawn |
| E | `E-directory.md` | Directory_Locality F1–F3, Directory_Search F4, F5, Directory_CommonBlocks F1–F3, Directory_Photobook F1, F2, Directory_Household_Blocks F1 |
| F | `F-lists.md` | App_Services F3, F4, Notes F1, Directory_Updates F3 |
| G1 | `G1-content.md` | Bookmarks F1, Home F1, F4, Legacy_MyNotificationsFlow F4, F5, Legacy_Share F2; Legacy_AssembleFlow F1 withdrawn |
| H | `H-user-followups.md` | App_Common F2 (Forgot Password as TST), Directory_Updates F2 (capture, then the scroll-anchor port) (orchestrator, 2026-10-27) |
| G2 | `G2-orbit-ldm.md` | Legacy_OrbitAdminFlow F2, F3, Legacy_OrbitEventsFlow F8, Legacy_LDMEventsFlow_V2 F3–F5; Legacy_OrbitEventsFlow F6 withdrawn |

## Checks after the wave

- `npm run typecheck`: pass. `npm run lint`: 0 errors, 73 warnings (the same 73 as HEAD; 0 in the changed files).
- `npm run arch`: no dependency violation. `npx vitest run`: 651 files, 4060 tests, pass.
- Parity: `migration/tools/parity_sweep.py --app http://localhost:5174` over the 64 routes: 63 clean, LegacyShareObject
  with structure diffs (loading, offline) after the Legacy_Share F2 change. Fixed: the view is created after a handled
  OnInitialize error (as the runtime does), plus one loading-state exemption (`G1-content.md`, last section). Then
  `route.py parity LegacyShareObject`: clean.
- Matrix after the wave (INDEX.md): match 4365 (was 4295), partial 79 (137), missing 152 (166), differs 98 (96).

## Side changes

- `app/docs/known-original-bugs.md` B3: the touch-drag-to-top case is added.
- `app/src/platform/feedback/flowErrors.ts`: two exports for the NotRegistered check (group C).
- `app/src/pages/HomeFeed/staticEntities.ts`: `UBT_Color_BlueDark` (group G1).
- `app/src/pages/PINRegister/PINRegister.test.tsx`: test set-up writes the AppManager record (group D).

## Questions for the user

- Legacy_OrbitEventsFlow F4: keep decision W34 (a) (recommended; the rows are `differs` by W34), or reverse it. A
  reversal changes about 20 hooks and the page template guide.
- App_Policies F2: group C set `networkMode: 'always'` (the report's fix): a call made offline fails at once with the
  communication message, as on TST. The feed and member queries keep `'online'`.
