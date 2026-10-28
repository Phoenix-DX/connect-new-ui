# Page template

How to build a page, a hook, a container and the components of one OutSystems screen. The pilot is HouseholdDetails
(steps P2-1 to P2-3). The rules are in the plan v2 §2.3 (container criterion) and §2.4 (folder rules).

## Folders

| Folder                     | What goes there                                                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------- |
| `src/pages/<Route>/`       | The route: `<Route>Page.tsx`, `inputs.ts`, its hooks and mocks. Code that only this page uses.  |
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

The old `api.ts` of a route (deleted in every page) split in two. Server calls go to `api/<domain>/repository.ts`. The reader of the route
input goes to `pages/<Route>/inputs.ts`, not to `api.ts`. A `types.ts` that holds only input types folds into `inputs.ts`.

## Files of the pilot

| File                                                                                                                                 | Role                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| [`pages/HouseholdDetails/HouseholdDetailsPage.tsx`](../../src/pages/HouseholdDetails/HouseholdDetailsPage.tsx)                       | The route (`@origin` of the screen). Reads the URL, the flags and the view state; renders layout and container. |
| [`containers/HouseholdDetails/hooks/useHouseholdDetails.ts`](../../src/containers/HouseholdDetails/hooks/useHouseholdDetails.ts)     | The flows of the block (OnInitialize, OnParametersChanged, refreshes) with `useReducer`.                        |
| [`containers/HouseholdDetails/hooks/householdDetailsState.ts`](../../src/containers/HouseholdDetails/hooks/householdDetailsState.ts) | The state record, the reducer and the client actions. Pure, with a unit test.                                   |
| [`containers/HouseholdDetails/mocks.ts`](../../src/containers/HouseholdDetails/mocks.ts), `mockData.ts`                              | The MSW handlers and the fictional records of the page.                                                         |
| [`api/household/`](../../src/api/household)                                                                                          | The domain: data actions, mapper, query keys and hooks.                                                         |
| [`containers/HouseholdDetails/HouseholdDetailsContainer.tsx`](../../src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx)   | Runs the hook, fills the slots, renders the view.                                                               |
| [`components/household/HouseholdDetailsView/`](../../src/components/household/HouseholdDetailsView)                                  | The card, props only, with test and stories.                                                                    |

## Hook shape

- One hook per block or screen with state: `use<Thing>(parameters, flags)`. It returns the state and the handlers.
- The state of a block with flows that read each other is a record with `useReducer`. The reducer and the client
  actions go to a separate pure file (`<thing>State.ts`) that a unit test covers without React.
- Flows that refresh on block events (OnReady, OnParametersChanged) call the repository functions `fetch<Thing>()` of
  `api/<domain>/`. They never call `callAction` or `fetch` themselves.
- The `use<Thing>Query` hooks of `api/<domain>/` are for data that a component reads on render only.
  `useHouseholdQuery` and `useHouseholdCoordinatesQuery` have no caller yet. `useCountryLocalityStatisticsQuery` (CountryDetails) and `useCountryInfoQuery` (Profile) have callers: CountryDetails in `hooks/useCountryDetails.ts`, which imports it from `@/api/country`; Profile calls `@/api/country` directly.
- State and flows of a flow hook: call `useFlowState` (`@/platform/navigation`, `platform/navigation/flowState.ts`).
  Do not write the `latest` ref, `useReducer`, the `useViewState` dispatch, `flowsRef` or `parametersKey` again.
  - Options: `viewName` (the view cache key), `reducer`, `initial`, `parameters` (plain data; their JSON is the
    parameters key) and the optional `events`, `onReady(isAlive, restored)` and `onParametersChanged(isAlive)`.
  - Returns: `state` (rendered), `dispatch` (updates `latest` at once, saves the state, renders),
    `latest` (newest state), `parameters` and `events` (newest inputs and event handlers), and `flow` (the flow
    scope, `platform/navigation/flowScope.ts`). The flows read `latest`, `parameters` and `events`, never the rendered
    values. A hook without reducer state gets the scope from `useFlowScope(events?)`.
  - Optional `restore(saved) => state`: OnInitialize of a restored view. The initialiser applies it to the saved
    state, so the first render of a back navigation shows the restored state. Use it when OnInitialize changes
    variables on a restored view (`hooks/useUpdatesSingleList.ts`). Do not use a `dispatch` in `onReady` for this:
    it renders the old state first. Without `restore`, the saved state is used as it is.
  - Order, as in OutSystems: OnInitialize is `initial` (a restored view starts from its saved state instead), then the
    first render. Then `onReady` runs once, also in StrictMode (`restored` is true after a back navigation).
    `onParametersChanged` runs only when the parameters key changes, never after the first render. The `isAlive` of
    `onReady` turns false on unmount. The `isAlive` of `onParametersChanged` also turns false at the next run. A
    rejection of either flow goes to the flow handler with the flow scope. A hook needs no once-guard of its own.
  - Optional `beforePaint: true` (decision W28): set it when the old port of the screen or block ran OnReady in a
    `useLayoutEffect`. The default runs it after the paint. With the option, `onReady` runs before the first paint. A
    state write at its start shows in the first frame.
  - Rule for a flow after the user left (item 8, flow scope; it replaces decision W23). TST rules R1–R6:
    `migration/clarify/review/item8-w23-errorpage.md` §1. `dispatch` is a no-op after the unmount.

    | The awaited call is                                                                                              | Wrap                                                                                      | Rule                    |
    | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------- |
    | a data action or a screen aggregate (`callAction` path `Owner/Action`; a `refetch()` or `fetchQuery` of a query) | `await flow.fetch(call)`                                                                  | R1                      |
    | a server action (`callAction` path `Action`), a module client action, a plugin, a dialog                         | nothing                                                                                   | R2                      |
    | an own action of this screen or block that a flow calls after an await                                           | define it with `flow.own(…)`                                                              | R3                      |
    | a block event after an await                                                                                     | `flow.events.onX(…)`, not `events.current.onX(…)`                                         | R3                      |
    | a navigation                                                                                                     | `navigate(…)` or `back()` as today: they throw `OutOfContextException` from a left screen | R4                      |
    | a toast                                                                                                          | `showFeedbackMessage(…)` as today                                                         | R5                      |
    | a widget handler that starts a flow                                                                              | `flow.run(() => handler(…))`                                                              | R6                      |
    | a state write                                                                                                    | `dispatch(…)` as today                                                                    | no-op after the unmount |
    - The hooks that still have W23 guards and once-guards keep them until their group step (item 8 §7.1, S1–S5).
    - Write one unit test per screen: unmount the screen while the R1 call is pending. No side effect runs and no
      state changes.

  - Example, from `containers/HouseholdDetails/hooks/useHouseholdDetails.ts`:

    ```ts
    const {
      state,
      dispatch,
      latest,
      parameters,
      events: eventsRef,
    } = useFlowState({
      viewName: `Directory_Household.HouseholdDetails_Block#${householdId}`,
      reducer: householdDetailsReducer,
      initial: INITIAL_HOUSEHOLD_DETAILS_STATE,
      parameters: inputs,
      events,
      onReady: (isAlive, restored) => onInitialize(isAlive, restored),
      onParametersChanged: (isAlive) => onParametersChanged(isAlive),
    });
    ```

  - `restore: () => INITIAL_STATE`: use it when the old port kept no view state on a back navigation. A restored view
    then starts from OnInitialize with the initial state (`pages/Notes/hooks/useNotes.ts`).
  - No `restore`: a restored view starts from its saved state. OnReady skips its calls when `restored` is true and the
    saved state has the data (`pages/MilestoneDetail/hooks/useAccommodationHost.ts`).
  - Restored without data: the user may leave before the
    answer, or the answer may fail. Then the saved state has no data and OnReady calls again. It makes reads only;
    side effects such as audits run only on a forward visit. OutSystems keeps the skeleton in that case: an intended deviation (F40,
    W34). `useLdmEventDetail`, `useAdminLanding`, `useAdminEventDetail` and `useOrbitLanding` follow this rule.
  - OnReady in its own effect: use it when OnReady reads variables that OnInitialize assigns. Do not run OnReady in the
    same flow as OnInitialize. Run it in one effect that starts when `isInitialized` turns true. The blocks
    have then mounted and the variables are set (`pages/Notes/hooks/useNotes.ts`).
  - Do not use `useFlowState` for a screen whose view cache keeps only some variables (Notifications keeps 3 of its
    variables). It saves and restores the whole state record, so a back navigation shows the old list. Keep
    `useReducer` and a `latest` ref and write one `useViewState` record
    (`pages/Notifications/hooks/useNotifications.ts`).
  - OutSystems OnParametersChanged: a block that has this flow in OutSystems gets `onParametersChanged` in its hook.
    Do not leave it out. A flow that the old port never had is new behavior, so ask the user first. F39 (the hall block
    of `pages/AssembleDetail`) waits for this decision.
- Flags are read by the page (`useFlag`) and passed in as a `flags` argument. A component never reads a flag (rule 4).
  Only pages, hooks and containers read flags: `npm run flags` fails on a new reader elsewhere.
- A failed data action goes to the flow handler. For a query, the hook does nothing: one subscription on the query
  cache (`installQueryErrorsToFlowHandler`, `platform/feedback/flowErrors.ts`, installed by `main.tsx`) raises once per
  failed fetch. It raises nothing when no mounted screen uses the query (the user left: TST shows no message, E9). The
  query status still sets the `list-error` classes and the skeleton.
  - A flow that awaits the fetch (`await refetch()`, `fetchQuery`) and handles the error itself sets
    `meta: { errorFlow: 'caller' }` on the query, or the message shows twice.
  - Tests render with `testQueryClient()` (`platform/navigation/testRouter.tsx`; `renderRoutes` uses it), which has the
    subscription. A test with `new QueryClient()` sees no message.

## Container criterion

Make a container only when one of these is true (plan §2.3):

1. The same component tree renders data from two sources. Example: HouseholdDetails renders the server household and
   the Profile preview form data. The container takes `source: { kind: 'server' | 'preview', ... }`.
2. The tree needs 2 or more data hooks and 3 or more event handlers, and the component file is over 200 lines.

A container keeps its hook, state file and mocks in its own folder (see "Folders"). Otherwise the page calls the hook
and passes props to components. Write the choice in `move-map.csv`, column `shape`.
A component cannot import a container (rule 4). So the container gives the view these blocks as slots:
`entityActions`, `renderMemberActions`, `shareSheet`.

One exception to the two points above: `containers/AssembleSummaryCard` has no data hook and no state. It exists
because the actions of the card (address link, MeetingInfo dialog) call `platform/`. 2 pages (AssembleDetail,
AssembleEvents) need them (plan §2.4 rule 2).

The component `AssembleSummaryCard` is props only. It has the prop
`onAddressClick` and, through `VirtualMeetingUrl`, the props `onMeetingInfoToggle` and the slot
`renderMeetingInfoDialog`. The container fills them.

A component between a page and a container passes a slot down: `renderHouseholdDetails` and `renderSupperMeetingDetails` go through `EntitiesCarousel` and `EntitiesCarousel_Element`, and the page fills them with `HouseholdDetailsContainer` or `SupperMeetingDetailsContainer`.

## Pattern of a form page with a config (ContactByEmail)

For pages that differ only in values, use a config and not a container (decision Q6). The pilot is
`pages/ContactByEmailMember/`. Each page has:

- `inputs.ts`: the route input type and its reader.
- `config.ts`: a function `<route>Config(inputs)` that returns a `ContactEmailPageConfig` (title, primary colour, form
  settings). The types are in `components/contact/ContactEmailForm/types.ts`.
- `hooks/use<Route>Submit.ts`: the submit flow of the screen. It returns a `ContactEmailFormSubmit`
  (`isLoading`, `onBeforeSubmitForm`, `onEventSubmitForm`). The platform step `allowUpcomingNavigation` comes from this
  hook, so the form stays props only.
- A card in `components/contact/`: `ContactPersonCard` or `ContactHeaderCard`.
- The page: layout, `ContactEmailForm` with `{...config.form}` and `{...submit}`, and the card as its child.

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
5. `npm run ci` passes. It runs the contract types, typecheck, lint, `arch`, `arch:baselines`, `dup`, `unused`, `flags`,
   `format:check`, the tests and the build. A new violation or a stale baseline row fails it. `npm run lint:arch` also
   passes. Never add a row to a baseline to hide a new violation
   ([quality checks](quality.md#architecture-baselines-p9-1)).
6. Parity: `python3 migration/tools/refactor_parity.py --level visual --all --ref both --report <report>`: every
   route OK for both references.
7. `build` and `build/bundle-report.mjs` stay within the limits of plan §7.
8. `move-map.csv` row has status `moved` and the shape; the CHANGELOG has the step; the folder README is updated.
9. Use each name once. The port of an OutSystems block keeps its business name. A section that only composes blocks
   gets another name (see the move-map notes of HouseholdTimelinePhotoList and HouseholdTimelinePhotos).
