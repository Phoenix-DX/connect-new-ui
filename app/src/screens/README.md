# Screens

One folder per screen, named exactly as in `src/app/routes.generated.ts` (`screen`).

```
src/screens/<Screen>/
  index.tsx      default export: the screen component (auto-routed)
  api.ts         adapters: callAction(...) + wire → domain mapping
  types.ts       wire types (from the spec) and domain types
  mocks.ts       export const handlers = [...] (MSW): recordedHandler(...) or fictional data with captured counts
  components/    blocks owned by this screen
```
