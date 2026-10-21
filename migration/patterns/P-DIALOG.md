# P-DIALOG: Popups, sheets and toasts

- Status: accepted
- Applies when: the route opens a dialog or a bottom sheet, or shows a feedback message
- Reference: route Login: `app/src/screens/Login/api.ts`, `app/src/screens/Login/components/AppManager_Events.tsx`, `app/src/screens/Login/components/Tile.tsx`, `app/src/screens/Login/components/Version_LoginWrapper.tsx`, `app/src/screens/Login/components/staticEntities.ts`, `app/src/screens/Login/index.tsx`, `app/src/screens/Login/mocks.ts`, `app/src/screens/Login/types.ts`
- Fingerprint: f72b9589573439c9

## Rules
- Use the shell/shared dialog, sheet and feedback APIs.
- Do not use a route-local overlay.

## Notes
Add notes below this line; stack.py keeps them only through `pattern reference`.
