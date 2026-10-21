# P-STATES: Loading, empty, error and not-captured states

- Status: accepted
- Applies when: always (every route)
- Reference: route Login: `app/src/screens/Login/api.ts`, `app/src/screens/Login/components/AppManager_Events.tsx`, `app/src/screens/Login/components/Tile.tsx`, `app/src/screens/Login/components/Version_LoginWrapper.tsx`, `app/src/screens/Login/components/staticEntities.ts`, `app/src/screens/Login/index.tsx`, `app/src/screens/Login/mocks.ts`, `app/src/screens/Login/types.ts`
- Fingerprint: f72b9589573439c9

## Rules
- states follow the original render conditions
- loading and error UI use the shared blocks the capture shows
- anything not captured renders <NotCaptured name=...> with the known content

## Notes
Add notes below this line; stack.py keeps them only through `pattern reference`.
