# Item 3: the shared Custom Dropdown and the validation hook: build note (2026-10-28)

- Design: `../review/item3-solution.md` §1-8, decisions §9 (user, 2026-10-28). Facts F1-F6: `../review/item3-dropdowns.md`.
- `W<n>` = character offset in `migration/runtime-sources/OutSystemsReactWidgets.js`.
- The paths below are relative to `app/` unless they start with `migration/`.
- Nothing is committed. No parity sweep and no `npm run ci` were run (the orchestrator runs them).

## Files

Added (`src/components/ui/os/OSDropdownCustom/`):

- `OSDropdownCustom.tsx`: the widget. Markup of `render` (W19996), `select` (W12138), `show` (W13910), the container
  and row keyboard (W15798, W18133), the empty row (W17646), the background window (W19709). Generic props with
  `list`, `getValue`, `renderRow` (§2.2). It registers through `useValidationWidget` with the runtime's validate (§3.2).
- `dropdownListPosition.ts`: `computeListPosition` (the math of updateState, W14139) and `keepListPosition` (the
  setState guard, W15503). Pure numbers.
- `dropdownListDom.ts`: the class names, `navigateList` (W17000), `focusCorrectElement` (W16595),
  `focusClosedDropdown` (W16850), `scrollIntoSelectedElement` and `getScrollParent` (W19291, W19562).
- `useDropdownListEffects.ts`: one layout effect after every render (componentDidMount W13028, componentDidUpdate
  W13173): position, then scroll, then focus. It reads `childNodes[1]` as the runtime does (D2).
- `OSDropdownCustom.test.tsx`, `dropdownListPosition.test.ts`, `OSDropdownCustom.stories.tsx` (O4: `Closed`,
  `Disabled`, `NotValid`), `README.md` (props, behaviour, not ported), `index.ts`.

Changed:

- `src/components/ui/os/OSValidation/OSValidation.tsx`: new `useValidationWidget({ id, validate })` (§3.1).
  `useInputWithVariableValidation` is now a layer over it (same exports, same behaviour, its callers do not change).
  `UnbuiltValidationWidget` is deleted (O5 (a)).
- `src/components/ui/os/OSValidation/index.ts`: exports `useValidationWidget`; `UnbuiltValidationWidget` removed.
- `src/components/ui/os/OSValidation/OSValidation.test.tsx`: the 3 `UnbuiltValidationWidget` tests move to
  `useValidationWidget` (a test widget that only calls the hook); 3 new hook tests.
- `src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx`: Dropdown_Country uses `OSDropdownCustom<CountryName>`.
  The country type stays in the page (rule 5).
- `src/pages/HostSurvey/components/HostSurvey_AccommodationItem.tsx`: the 3 dropdowns. `onChangeNoOfBeds()` and
  `onChangeBedSize(position)` now read the variable from `latest` (the dropdown has set it); new `setBedSize`.
- `src/pages/HostSurvey/components/HostSurvey_AddHelper.tsx`, `HostSurvey_HelperItem.tsx`: the role dropdown; the
  handler is split into the variable (`onValueChange`) and OnChange_HelperRoles (`onChange`). AddHelper has no `enabled`.
- `src/pages/HostSurvey/components/HostSurvey_VehicleItem.tsx`: the local `DropdownCustom` is deleted; the 2 dropdowns
  use the widget. `onValueChange` sets `Edit_HostSurvey_Vehicle`, `onChange` writes `vehicleOnChangeWrite`.
- Tests of 4 blocks (see below). `docs/guides/os-widgets.md` (table row, `useValidationWidget`, a section),
  `src/components/ui/README.md` (platform widgets row).
- `.knip-known-unused.json`: the row `OSValidation/index.ts | export | validateInputWithVariable` is deleted. The widget
  now imports it from the barrel, so the gate reported the row as stale.

Deleted: `src/pages/ContactUsDetails/components/CountryDropdown.tsx`, `src/pages/HostSurvey/components/OSDropdownCustom.tsx`.

## Tests (written first; they failed before the change)

- `dropdownListPosition.test.ts` (8):
  - down and up; the phone width (≤ 420: width − 20, left = pageX + 10; 421: none);
  - the height clamp at the window bottom and at the `[data-popup]` top; the page offset;
  - left from the recorded offset while open, else centred and not before pageX;
  - the guard keeps the current position on an empty new height.
- `OSDropdownCustom.test.tsx` (22):
  - the closed markup, the value shown, the disabled state;
  - the open markup: the empty row first, the classes, tabindex, the background style, `left: 0px; top: 0px;`,
    `dropdown-expanded dropdown-expanded-down`; the background click;
  - the row click order `onValueChange` then `onChange`; D7; D6; the null value "0"; D5 (Enter and Space);
  - Enter or Space opens only when enabled; the focus on open; ArrowDown and ArrowUp, kept after a re-render;
  - another key closes and focuses the display; Enter on a row; D4 scroll with mocked sizes; `onFocus` on the
    container;
  - the `record` prop, the span last, no `aria-describedby` (D8); D2;
  - in a Form: a mandatory empty value fails with "This field is required.", Form.Valid follows, a value passes; not
    mandatory passes; `setWidgetValidity` renders the message again.
- `OSValidation.test.tsx` (+3, 3 moved): registers under the Form and unregisters; `validate` gets the service;
  the binding returns the record, `not-valid` and the span.
- Callers (+4): AccommodationItem (a bed dropdown sets its bed, then OnChange_BedSize shows "Bed type is required."
  on the empty row; D6 on Floor), HelperItem and AddHelper (D6: "Helper role is required.", then a role clears it).

Existing tests adapted (§7.3): only `HostSurvey_VehicleItem.test.tsx` "OnChange_Inputs: the empty value …". The exact
class now ends with `dropdown-expanded dropdown-expanded-down` (D2), and the test also checks that the container has
no `aria-describedby` (D8). The other tests named in §7.3 pass unchanged.

## Behaviour changes per dropdown

| Dropdown | Change |
|---|---|
| Dropdown_Country | None visible. It registers with `useValidationWidget` and the runtime validate; no screen action calls `validate()` (F3). |
| Dropdown_BedsNumber, Dropdown_BedSize, Dropdown_Floor, Dropdown_HelperRoles (2) | D1 position and expanded classes; D2; D3 keyboard; D4 focus and scroll; D5; D6 (the empty row raises OnChange on an empty value: the required message now shows) |
| Dropdown_OwnerType, Dropdown_VehicleType | D1, D2, D3, D4, D5; D7 (the same row writes nothing); D8 (`aria-describedby` removed) |

## Not built

- `migration/clarify/builds/README.md` (§7.1, the B1 and B2 follow-up rows): not changed. This build may change
  only its own note under `migration/`.
- D2 is ported from the runtime code and the CSS (O2). It is not checked on TST: the test account has no Orbit event.
- Not ported (as §2.4 says): `setVariable` (W13531), because all 8 dropdowns have an Empty Value. The container
  Enter or Space branch "no row in the DOM" closes and focuses the display. Its write to the internal `selectedValue`
  is not ported, because the next render resets it in the runtime. The branch cannot run with an Empty Value.

## Open questions

None for the user. Notes:

- The validate uses data type Text for every dropdown, also Dropdown_BedsNumber (Long Integer). A value in the list
  is always acceptable and any other value counts as empty, so the result is the same.
- With two rows of the same value, the runtime shows the last one as selected. The port does the same; React warns
  about the duplicate key (O6).

## Checks (from `app/`)

| Command | Result |
|---|---|
| `npx tsc --noEmit` | pass, 0 errors |
| `npx eslint <changed files>` | pass, 0 problems |
| `npx prettier --check <changed files>` | pass (after `prettier --write` on 6 new or changed files) |
| `npx vitest run src/components/ui/os src/pages/ContactUsDetails src/pages/HostSurvey` | 29 files, 273 tests pass (before: 27 files, 236 tests) |
| `npx vitest run` (all) | 682 files, 4401 tests pass |
| `npm run arch` | pass, no new violation (144 known) |
| `npm run unused` | pass after the stale row was deleted: 1089 rows, 0 new, 0 stale |
| `npm run dup` | pass, 0.43 % (threshold 0.57 %); no clone in the changed files |

## Orchestrator checks (2026-10-28)

- The first full `npm run ci` failed with 10 unhandled errors, while all tests passed: jsdom has no
  `Element.scrollIntoView`. The widget now focuses the dropdown as the runtime does, so the HostSurvey OnFocus_Inputs
  runs `scrollInputIntoView`. Fix: a no-op polyfill in `app/src/test/setup.ts`. Then `npm run ci` passed (682 files,
  4401 tests, build).
- User decision (c), 2026-10-28: keep the polyfill and test the TST behaviour.
  - Four tests spy on `Element.prototype.scrollIntoView` (AddHelper, HelperItem, VehicleItem, AccommodationItem). The
    focus of a dropdown scrolls it smoothly to the centre (OnFocus_Inputs, ScrollIntoView JS).
  - `HostSurvey_AccommodationItem.tsx` had a jsdom workaround in production code: `?.scrollIntoView?.(...)` with an
    eslint-disable. It is now a direct call, as in TST and the other blocks.
  - `npm run ci` passed (4405 tests); parity HostSurvey OK.
- Seen, not changed: three copies of the scrollIntoView helper (`hostSurveyMealItem.ts`, `hostSurveyHelpers.ts`,
  `HostSurvey_AccommodationItem.tsx`).

