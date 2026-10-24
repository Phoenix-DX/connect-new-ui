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

The old `api.ts` of a route (now deleted in every page) split in two. Server calls go to `api/<domain>/repository.ts`. The reader of the route
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
- The `use<Thing>Query` hooks of `api/<domain>/` are for data that a component reads on render only. They come later
  (P5/P6). `useHouseholdQuery` and `useHouseholdCoordinatesQuery` have no caller yet. `useCountryLocalityStatisticsQuery` (CountryDetails) and `useCountryInfoQuery` (Profile) have callers: CountryDetails in `hooks/useCountryDetails.ts`, which imports it from `@/api/country`; Profile calls `@/api/country` directly.
- State and flows of a flow hook: call `useFlowState` (`@/platform/navigation`, `platform/navigation/flowState.ts`).
  Do not write the `latest` ref, `useReducer`, the `useViewState` dispatch, `flowsRef` or `parametersKey` again.
  - Options: `viewName` (the view cache key), `reducer`, `initial`, `parameters` (plain data; their JSON is the
    parameters key) and the optional `events`, `onReady(isAlive, restored)` and `onParametersChanged(isAlive)`.
  - Returns: `state` (rendered), `dispatch` (updates `latest` at once, saves the state, renders),
    `latest` (newest state), `parameters` and `events` (newest inputs and event handlers). The flows read `latest`,
    `parameters` and `events`, never the rendered values.
  - Optional `restore(saved) => state`: OnInitialize of a restored view. The initialiser applies it to the saved
    state, so the first render of a back navigation shows the restored state. Use it when OnInitialize changes
    variables on a restored view (`hooks/useUpdatesSingleList.ts`). Do not use a `dispatch` in `onReady` for this:
    it renders the old state first. Without `restore`, the saved state is used as it is.
  - Order, as in OutSystems: OnInitialize is `initial` (a restored view starts from its saved state instead), then the
    first render. Then `onReady` runs once (`restored` is true after a back navigation). `onParametersChanged` runs
    only when the parameters key changes, never after the first render. `isAlive` turns false at the next run and on
    unmount. A rejection of either flow goes to the flow handler.
  - Optional `beforePaint: true` (decision W28): set it when the old port of the screen or block ran OnReady in a
    `useLayoutEffect`. The default runs it after the paint. With the option, `onReady` runs once, before the first
    paint, also in StrictMode. A state write at its start shows in the first frame. `isAlive` is true until the
    unmount. `restored` and the flow handler do not change, and a rejection goes to the flow handler after the unmount.
  - Rule for `isAlive` (decision W23): `isAlive` guards state writes only.
    - App-level side effects of a flow that already started run to the end after unmount: toast, navigation,
      counters, notification-opened and other server calls. Do not put them behind `isAlive`.
    - Use a once-guard so that StrictMode does not run them twice.
    - Write one unit test per screen. It unmounts the screen while the flow is pending. The side effects must run
      once and no state may change.
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
  - OnReady in its own effect: use it when OnReady reads variables that OnInitialize assigns. Do not run OnReady in the
    same flow as OnInitialize. Run it in one effect that starts when `isInitialized` turns true. The blocks
    have then mounted and the variables are set (`pages/Notes/hooks/useNotes.ts`).
  - Do not use `useFlowState` for a screen whose view cache keeps only some variables (Notifications keeps 3 of its
    variables). It saves and restores the whole state record, so a back navigation shows the old list. Keep
    `useReducer` and a `latest` ref and write one `useViewState` record
    (`pages/Notifications/hooks/useNotifications.ts`).
  - 2 files still have the old pattern and change in Phase 6, with their page: `components/share/SharePopup/SharePopup.tsx` and
    `components/ui/EntityLazyImage/EntityLazyImage.tsx`. `pages/Household_Relations/hooks/useHouseholdRelations.ts` now uses `useFlowState`.
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
5. `npm run ci`, `npm run lint:arch` (no new warning in the folders of the step) and `npm run format:check` pass.
6. Parity: `python3 migration/tools/refactor_parity.py --level visual --all --ref both --report <report>`: every
   route OK for both references.
7. `build` and `build/bundle-report.mjs` stay within the limits of plan §7.
8. `move-map.csv` row has status `moved` and the shape; the CHANGELOG has the step; the folder README is updated.
9. Use each name once. The port of an OutSystems block keeps its business name. A section that only composes blocks
   gets another name (see the move-map notes of HouseholdTimelinePhotoList and HouseholdTimelinePhotos).
