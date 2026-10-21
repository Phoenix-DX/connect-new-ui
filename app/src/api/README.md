# API contract

`openapi.yaml` is the contract every server call follows; `schema.d.ts` is generated from it (`npm run gen:api`, never edited). Screens call `callAction(module, action, inputs)` from `src/lib/api.ts` through their own `api.ts` adapter; an action missing from the contract does not compile.
