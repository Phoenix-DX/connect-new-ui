# Add or change a screen

Each screen of the original app has one folder, named exactly as the OutSystems screen, served at the original route
(`src/app/routes.generated.ts`). A screen appears automatically once `index.tsx` exists.

A migrated screen lives in `src/pages/<Screen>/` and its page file is `<Screen>Page.tsx` instead of `index.tsx`
(HouseholdDetails since P2-1). `src/app/screens.ts` loads `pages/*/<Screen>Page.tsx` first and falls back to
`screens/*/index.tsx` during the transition. The other files keep their names.

```
src/screens/<Screen>/
  index.tsx     default export: the screen (markup and class names as in the original)
  api.ts        TanStack Query hooks; callAction(...) with OutSystems input names; wire → domain mapping
  types.ts      wire types (from the contract) and domain types
  mocks.ts      export const handlers = [...]: recordedHandler(...) or fictional data with the recorded shapes
  components/   blocks used only by this screen
```

Rules (checked before a screen is finished):

- import only from the screen's folder and `src/shared`, `src/platform`, `src/api`, `src/legacy`, `src/components`, `src/mocks`;
- no `fetch`, browser storage, CSS files, inline visual styles, raw HTML or `console.log`;
- server data only through `callAction` (types from the contract); flags only through `useFlag` / `useFlagOn`;
- anything the capture does not show renders `<NotCaptured name="…">` with what is known, never an invented design;
- a needed change in shared code is a change request (`migration/change-requests/`), not an edit.

How to verify a screen: write a route spec (`migration/screens/<Screen>/route-spec.md`) with evidence for every statement.
Then run parity against each captured state of the original. The product owner then does the review.

Screen scenarios: a screen that needs another account type or state adds a scenario to its `mocks.ts`. It documents the
scenario in the header (see [API and mock data](api-and-mocks.md)). A form validates with the platform validation
([platform widgets](os-widgets.md)); a screen that asks before leaving uses the navigation guard ([shell](shell.md)).
