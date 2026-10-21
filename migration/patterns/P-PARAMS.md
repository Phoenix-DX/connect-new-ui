# P-PARAMS: Route inputs and navigation

- Status: accepted
- Applies when: the route has inputs or navigates
- Reference: route Login: `app/src/screens/Login/api.ts`, `app/src/screens/Login/components/AppManager_Events.tsx`, `app/src/screens/Login/components/Tile.tsx`, `app/src/screens/Login/components/Version_LoginWrapper.tsx`, `app/src/screens/Login/components/staticEntities.ts`, `app/src/screens/Login/index.tsx`, `app/src/screens/Login/mocks.ts`, `app/src/screens/Login/types.ts`
- Fingerprint: f72b9589573439c9

## Rules
- Read the route inputs with useSearchParams. Use the original parameter names and types.
- Navigate with the navigate helper of the shell. Use the original names.
- Preload objects with the preload store of the shell.

## Notes
Add notes below this line; stack.py keeps them only through `pattern reference`.
