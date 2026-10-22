# Page template

How to build a page, a hook, a container and the components of one OutSystems screen. The pilot is HouseholdDetails
(steps P2-1 to P2-3). The rules are in the plan v2 §2.3 (container criterion) and §2.4 (folder rules).

## Folders

| Folder                     | What goes there                                                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------- |
| `src/pages/<Route>/`       | The route: `<Route>Page.tsx`, its hooks, its mocks, its types. Code that only this page uses.   |
| `src/api/<domain>/`        | The calls of one domain: types, mapper, repository, keys, hooks, barrel (`src/api/household/`). |
| `src/components/<domain>/` | Components with props only. They import no `api/`, `platform/`, `containers/` or `pages/`.      |
| `src/containers/<Name>/`   | A container, only by the criterion below.                                                       |

A second page that needs code from the first one: move the code to `components/`, `containers/` or `api/`. A page
never imports another page (rule 3).

Where the files of a container go:

- The hook, the state file and the MSW mocks of a container live in `containers/<Name>/` (`hooks/`, `mocks.ts`).
- `pages/<Route>/` holds only what that page alone uses.
- `containers/` never imports `pages/`.
- Shared fictional data lives in `src/mocks/fictional/`.
- Temporary exception: the hook, the state file and the mocks of the pilot are still in `pages/HouseholdDetails/`.
  P3-1 moves them (follow-up F1 in `migration/refactor/followups.md`).

A `screens/<Route>/api.ts` splits in two. Server calls go to `api/<domain>/repository.ts`. The reader of the route
input goes to `pages/<Route>/inputs.ts`, not to `api.ts`. The pilot still has `api.ts` until P3-1 (follow-up F2).

## Files of the pilot

| File                                                                                                                               | Role                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`pages/HouseholdDetails/HouseholdDetailsPage.tsx`](../../src/pages/HouseholdDetails/HouseholdDetailsPage.tsx)                     | The route (`@origin` of the screen). Reads the URL, the flags and the view state; renders layout and container. |
| [`pages/HouseholdDetails/hooks/useHouseholdDetails.ts`](../../src/pages/HouseholdDetails/hooks/useHouseholdDetails.ts)             | The flows of the block (OnInitialize, OnParametersChanged, refreshes) with `useReducer`.                        |
| [`pages/HouseholdDetails/hooks/householdDetailsState.ts`](../../src/pages/HouseholdDetails/hooks/householdDetailsState.ts)         | The state record, the reducer and the client actions. Pure, with a unit test.                                   |
| [`pages/HouseholdDetails/mocks.ts`](../../src/pages/HouseholdDetails/mocks.ts), `mockData.ts`                                      | The MSW handlers and the fictional records of the page.                                                         |
| [`api/household/`](../../src/api/household)                                                                                        | The domain: data actions, mapper, query keys and hooks.                                                         |
| [`containers/HouseholdDetails/HouseholdDetailsContainer.tsx`](../../src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx) | Runs the hook, fills the slots, renders the view.                                                               |
| [`components/household/HouseholdDetailsView/`](../../src/components/household/HouseholdDetailsView)                                | The card, props only, with test and stories.                                                                    |

## Hook shape

- One hook per block or screen with state: `use<Thing>(parameters, flags)`. It returns the state and the handlers.
- The state of a block with flows that read each other is a record with `useReducer`. The reducer and the client
  actions go to a separate pure file (`<thing>State.ts`) that a unit test covers without React.
- Flows that refresh on block events (OnReady, OnParametersChanged) call the repository functions `fetch<Thing>()` of
  `api/<domain>/`. They never call `callAction` or `fetch` themselves.
- The `use<Thing>Query` hooks of `api/<domain>/` are for data that a component reads on render only. They come later
  (P5/P6). `useHouseholdQuery` and `useHouseholdCoordinatesQuery` have no caller yet.
- Standard state shape of a flow hook: a `latest` ref that holds the current state, `useReducer`, the `useViewState`
  dispatch, and `flowsRef` and `parametersKey` for OnParametersChanged. It moves into one platform hook in P4
  (follow-up F4), so pages do not copy it.
- Flags are read by the page (`useFlag`) and passed in as a `flags` argument. A component never reads a flag (rule 4).
- A failed data action goes to the flow handler (`platform/feedback/flowErrors.ts`).

## Container criterion

Make a container only when one of these is true (plan §2.3):

1. The same component tree renders data from two sources. Example: HouseholdDetails renders the server household and
   the Profile preview form data. The container takes `source: { kind: 'server' | 'preview', ... }`.
2. The tree needs 2 or more data hooks and 3 or more event handlers, and the component file is over 200 lines.

A container keeps its hook, state file and mocks in its own folder (see "Folders"). Otherwise the page calls the hook
and passes props to components. Write the choice in `move-map.csv`, column `shape`.
A component cannot import a container (rule 4). So the container gives the view these blocks as slots:
`entityActions`, `renderMemberActions`, `shareSheet`.

## Test and story shape

- Each component folder has `<Name>.tsx`, `<Name>.stories.tsx` and `<Name>.test.tsx`. The test uses `composeStories`
  of the stories, so the stories are the fixtures.
- Stories: `Default`, `Loading`, `Offline`, and one per state that a capture shows (`Preview`). Fictional data comes
  from `src/mocks/fictional/`.
- Tests check what the user sees (text, counts of nested blocks, skeleton state) and the callbacks. They do not
  check the class names that no capture shows.
- Captured DOM of a variant goes to `<Name>/__captures__/v<n>.html`, and the folder `README.md` lists the captures,
  the inputs-to-props table and what is not settled.
- The reducer or any pure logic has its own `*.test.ts` next to it.

## Checklist of the gate

1. `@origin <OutSystems qualified name>` on each file that ports a screen or a block (R4). No `// @os-block`, no inline
   compiled-line references in rewritten code.
2. The step is a move or a change, never both. Moves use the codemod `migration/tools/refactor/move.ts`.
3. No behavior change; no change to `openapi.yaml`, `src/mocks/` fixtures or `public/UBTConnect/css/`.
4. Imports use `@/`; barrels only at the allowed boundaries (rule 12); no import cycle.
5. `npm run ci`, `npm run lint:arch` (no new warning in the folders of the step) and `npm run format:check` pass.
6. Parity: `python3 migration/tools/refactor_parity.py --level visual --all --ref both --report <report>`: every
   route OK for both references.
7. `build` and `build/bundle-report.mjs` stay within the limits of plan §7.
8. `move-map.csv` row has status `moved` and the shape; the CHANGELOG has the step; the folder README is updated.
9. Use each name once. The port of an OutSystems block keeps its business name. A section that only composes blocks
   gets another name (see the move-map notes of HouseholdTimelinePhotoList and HouseholdTimelinePhotos).
