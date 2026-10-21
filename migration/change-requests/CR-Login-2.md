# CR-Login-2: shell CommonUiHost — no stand-in on screens that render CommonUI_InsideLayout

- Status: applied (foundation owner, 2026-10-14)
- Raised by: Login, 2026-10-14
- Block: shell area `app/src/shell/dialogs/CommonUiHost.tsx` (`CommonUiScreenParts`: Dialog_AccessRestrictedAction
  stand-in + CommonUI back handler)
- Other routes using it (catalog/blocks.md): every screen whose layout renders `App_Common.CommonUI_InsideLayout`
  (Login renders it in Layout_LoginFlow's Placeholder_CommonUI_Inside_Layout, as the shared Layout_LoginFlow story V2 does)
- Related question: none

## Evidence
- Captured markup: `migration/screens/Login/analysis/dom/default.html:145-154`: one Dialog_AccessRestrictedAction,
  inside `CommonUI_InsideLayout` `$b14` (`b14-$b4`); nothing else in `#transitionContainer` but the active screen.
- Parity difference it explains: `[structure] div#reactContainer > div#transitionContainer >
  div#b13-$b4.OSBlockWidget[CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction]: extra in build`
  (states default, loading, offline; parity/default.json).
- Shell README (CommonUI_InsideLayout): "this block replaces both per screen", but `CommonUiHost` still mounts its
  stand-in for every location, so the Access Restricted dialog and the CommonUI back handler (−10000) exist twice.

## Expected change
`CommonUiHost` does not mount `CommonUiScreenParts` (Access Restricted stand-in, CommonUI back handler) while the current
screen renders `CommonUI_InsideLayout` (for example a registration from the block on mount, or a list of screens whose
layouts render it). Feedback container and network listener stay app-wide.

## Workaround in the route until applied
None needed in the route's markup (the extra element is outside the screen); the structure difference stays in the
parity reports of every Login state until applied.

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change:
- Regression parity run on:
