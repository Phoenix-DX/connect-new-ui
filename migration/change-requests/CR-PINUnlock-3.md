# CR-PINUnlock-3: shell CommonUiHost — no stand-in parts on a screen that renders CommonUI_InsideLayout

- Status: applied (foundation owner, 2026-10-14)
- Raised by: PINUnlock, 2026-10-14
- Block: shell area `app/src/shell/dialogs/CommonUiHost.tsx` (`CommonUiScreenParts`)
- Other routes using it: every screen whose layout renders `UBTConnect.App_Common.CommonUI_InsideLayout`
- Related question: none (shell behaviour; the shared README already says the block replaces the stand-in)

## Evidence
- Captured markup: `migration/screens/PINUnlock/analysis/dom/default.html` lines 270-300: one CommonUI_InsideLayout (`$b2`)
  with its own `Dialog_AccessRestrictedAction` (`b2-$b4`) and `BackNavigationHandler` (`b2-$b8`); nothing else under
  `#transitionContainer`.
- `app/src/shared/UBTConnect/CommonUI_InsideLayout/README.md`: "Until they do, the shell's CommonUiHost + LockHost in
  AppFrame stand in for it; this block replaces both per screen".
- `app/src/shell/dialogs/CommonUiHost.tsx:23-26`: `CommonUiScreenParts` always mounts `DialogAccessRestrictedAction`
  (`b13-$b4`) and `useCommonUiBackHandler()`.
- Parity difference it explains: `[structure] div#reactContainer > div#transitionContainer > div#b13-$b4.OSBlockWidget
  [CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction]: extra in build` (default, loading, offline).

## Expected change
When the current screen renders `CommonUI_InsideLayout` (e.g. it registers itself with the shell on mount), the
shell does not mount its stand-in Access Restricted dialog nor the stand-in CommonUI back handler (today there are two
dialogs and two −10000 back handlers on PINUnlock).

## Workaround in the route until applied
None needed in the screen (the screen renders the captured CommonUI_InsideLayout); the extra dialog stays in parity.

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change:
- Regression parity run on:
