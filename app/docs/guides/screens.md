# Add or change a screen

Each screen of the original app has one folder, named exactly as the OutSystems screen, served at the original route
(`src/app/routes.generated.ts`). A screen appears automatically once `<Screen>Page.tsx` exists.

The screen lives in `src/pages/<Screen>/` and its page file is `<Screen>Page.tsx`.
`src/app/screens.ts` loads `pages/*/<Screen>Page.tsx`. The full recipe (hook, container criterion, test and story shape) is the
[page template](page-template.md).

```
src/pages/<Screen>/
  <Screen>Page.tsx  default export: the screen (markup and class names as in the original)
  hooks/            the flow hook of the page; server calls come from the domain hooks in src/api/<domain>
  inputs.ts         reader of the route input
  mocks.ts          export const handlers = [...]: recordedHandler(...) or fictional data with the recorded shapes
  components/       blocks used only by this screen
```

Rules (checked before a screen is finished):

- import only from the screen's folder and `src/shared`, `src/platform`, `src/api`, `src/legacy`, `src/components`, `src/mocks`;
- no `fetch`, browser storage, CSS files, inline visual styles, raw HTML or `console.log`;
- server data only through `callAction` (types from the contract); flags only through `useFlag` (`@/platform/flags`; old code uses the adapter `useFlagOn`);
- anything the capture does not show renders `<NotCaptured name="…">` with what is known, never an invented design;
- a needed change in shared code is a change request (`migration/change-requests/`), not an edit.

How to verify a screen: write a route spec (`migration/screens/<Screen>/route-spec.md`) with evidence for every statement.
Then run parity against each captured state of the original. The product owner then does the review.

Screen scenarios: a screen that needs another account type or state adds a scenario to its `mocks.ts`. It documents the
scenario in the header (see [API and mock data](api-and-mocks.md)). A form validates with the platform validation
([platform widgets](os-widgets.md)); a screen that asks before leaving uses the navigation guard ([shell](shell.md)).
