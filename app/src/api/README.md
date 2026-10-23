# API contract

`openapi.yaml` is the contract every server call follows; `schema.d.ts` is generated from it (`npm run gen:api`, never edited). Screens call `callAction(module, action, inputs)` from `src/api/client/callAction.ts` through their own `api.ts` adapter; an action missing from the contract does not compile.

`client/apiError.ts`: `ApiError` has `kind` (`timeout`, `network`, `server`, `security`, `viewChanged`) and `cause` (the OutSystems exception). `legacy/os/os-exceptions.ts` maps in both directions. `callAction` still raises the OutSystems exceptions.

`household/` is the first domain folder: `types.ts`, `mapper.ts`, `repository.ts`, `keys.ts`, `hooks.ts` and the barrel `index.ts`. The hooks set `staleTime: 0` and `gcTime: 0`.
