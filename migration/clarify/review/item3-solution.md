# Item 3: proposal for one shared Custom Dropdown and its validation hook (2026-10-28)

Proposal for the user to approve. No code changed. Facts F1 to F6 are those of `item3-dropdowns.md` and are settled.

Evidence keys: `W<n>` = character offset in `migration/runtime-sources/OutSystemsReactWidgets.js` (the DropdownCustom
module is W11610-21275); `RV<n>` = offset in `migration/runtime-sources/OutSystemsReactView.js`; `CUD:<n>` =
`UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js` line; `AccItem:<n>` and `HelperItem:<n>` = the HostSurvey block
`.mvc.js` lines (via `tst_source.py show`); `app/src/` paths are relative to `app/src/`.

## 1. Summary

- Build one platform widget `OSDropdownCustom` in `components/ui/os/OSDropdownCustom/` (rule 5 allows it: it imports
  only `components/ui/os/OSValidation` and React). It takes a generic `list`, `getValue` and `renderRow`, so no page
  type leaks into `components/ui` (today `CountryDropdown.tsx:2` imports `@/api/message`, which rule 5 forbids there).
- Port the whole runtime module (F5) once, split by concern. The parts are the component (markup and select) and a
  pure `computeListPosition()` for `updateState`. Small DOM helpers do the navigation, the focus and the scroll. One
  layout effect runs them in the runtime's order.
- Add `useValidationWidget({ id, validate })` to `OSValidation`: the binding of any built validation widget that is
  not an input. `useInputWithVariableValidation` and `UnbuiltValidationWidget` become thin layers over it.
- The dropdown registers through this hook with the runtime's own `validate` (the widget is an
  `InputWithVariableWidget`, W21210). It takes the record from the service in context, or from a `record` prop when
  the block writes the record itself (F4).
- The three copies go. Dropdown_Country keeps its behaviour. The seven HostSurvey dropdowns gain the list position,
  the keyboard, the scroll and focus, and three small OnChange and class corrections (section 4).

## 2. Design

### 2.1 Files

| File (`components/ui/os/OSDropdownCustom/`) | Holds | Ports |
|---|---|---|
| `OSDropdownCustom.tsx` (≈170 lines) | the markup, `select`, `show`, `hide`, the container `onKeyDown` switch, the empty row | `render` W19998-20470, `renderEmptyValue` W17658-18470, `renderDropdownList` W18476-19230, `renderDropdownBackground` W19640-19990, `prepareDropdownDisplayAttributes` W17429-17650, `prepareDropdownContainerAttributes` W15900-16560, `select` W12140-12300, `show` W13912, `hide` W14035 |
| `dropdownListPosition.ts` (≈60 lines) | `computeListPosition(input): { position, expanded }`, pure numbers in, no DOM | the math of `updateState` W14151-15700: smartphone width 420, margin 10, the `[data-popup]` top, up or down, the height clamp, the "same position" guard |
| `dropdownListDom.ts` (≈50 lines) | `navigateList`, `focusCorrectElement`, `focusClosedDropdown`, `scrollIntoSelectedElement`, `getScrollParent` | W17012-17390, W16563-16800, W16810-16900, W19230-19600 |
| `useDropdownListEffects.ts` (≈50 lines) | one `useLayoutEffect` after every render: read `childNodes[0]`, `[0][0]`, `[1]`, call `computeListPosition`, set the state, then scroll, then focus | `componentDidMount` W13040 and `componentDidUpdate` W13185 (updateState → scrollIntoSelectedElement → focusCorrectElement) |
| `OSDropdownCustom.test.tsx`, `dropdownListPosition.test.ts`, `README.md`, `index.ts` | tests, the prop table and the "not ported" list, the barrel (rule 12) | |

The component keeps the class constants of the runtime, with its spelling `drowpdown-empty-value-row` (W20885).

### 2.2 Public props

```ts
export interface OSDropdownCustomProps<T> {
  /** Widget name or instance id (the element id). */
  id: string;
  /** Style Classes ("dropdown" in all 8, F2). */
  style: string;
  /** Empty Value: the prompt row and the closed text while the value is not in the list. All 8 define one (F2). */
  emptyValue: string;
  /** Mandatory (true in all 8, F2). Read only by validate(). */
  mandatory: boolean;
  /** Enabled; default true (Dropdown_HelperRoles of AddHelper has no Enabled, F2). */
  enabled?: boolean;
  /** List. */
  list: readonly T[];
  /** Values: the value of a row, as text. */
  getValue: (item: T) => string;
  /** The content of a row (the List placeholder). */
  renderRow: (item: T, index: number) => ReactNode;
  /** Variable. */
  value: string;
  /** JSConversions.convertTo(null, variable.type): "" for Text (default), "0" for Long Integer (Dropdown_BedsNumber). */
  nullValue?: string;
  /** The variable assignment (model.createVariable setter, CUD:936-938). */
  onValueChange: (value: string) => void;
  /** The OnChange event. The widget raises it after the variable is set (W12140-12300, W17950-18100). */
  onChange?: () => void;
  /** The extended event onfocus on the container (AccItem:628-640, HelperItem:411-423: OnFocus_Inputs). */
  onFocus?: () => void;
  /** The widget record when the block keeps it itself (F4). Without it, the record comes from the service in context. */
  record?: WidgetValidationRecord;
}
```

Prop names follow `OSRadioGroup` (`id`, `style`, `enabled`, `value`, `onValueChange`, `onChange`) and `OSList`
(`keyOf`-style callbacks). Row key = `getValue(item)` as the three copies do today.

### 2.3 Markup (F5, F6)

Exactly the runtime's `render` (W19998-20470), so the DOM check of F6 keeps working:

```
div[data-dropdown]#<id>.dropdown-container <style>[ not-valid][ dropdown-expanded dropdown-expanded-up|down]
  div.dropdown-display[tabindex=0][ dropdown-disabled]
    div.dropdown-display-content
      <renderRow(selected)> | <span>emptyValue</span>
  div.dropdown-list[style=left/top/width/height]            (only while open)
    div.scrollable-list.scrollable-list-with-scroll
      div.dropdown-popup-row.drowpdown-empty-value-row[tabindex=0][ dropdown-popup-row-selected]
      div.dropdown-popup-row[ dropdown-popup-row-selected][tabindex=0 when selected] × list
  div.dropdown-background-window[style=fixed 100%]          (only while open)
  span#<id>_DescribedBy.validation-message                  (last child, only while not valid with a message)
```

- `not-valid` comes from `fillWithBuiltinProperties` (RV210359). It adds no `aria-describedby` to a generic widget;
  only the Input widget adds its own (`OSValidation.tsx:71`). So the container gets none.
- `onFocus` goes on the container (`extendedEvents`, AccItem:628). React's `onFocus` bubbles from the display and the
  rows, as the runtime's does.
- `ValidateBedSizeInputs` (F6) reads `.dropdown-container` > `.dropdown-display .dropdown-display-content span` and
  toggles `not-valid` and `span.validation-message` itself. The React port (`hostSurveyAccommodationItem.ts:121-124`,
  `HostSurvey_AccommodationItem.tsx:481`) feeds the result through the `record` prop. Both paths keep working.

### 2.4 Behaviours ported, and how the split keeps them readable

| Behaviour | Runtime | Where it lives after the change |
|---|---|---|
| Row click: same value → close only; other value → set the variable, close, then OnChange | W12140-12300 | `select()` in the component |
| Empty row click: set the null value, OnChange, close (always, no equality check) | W17950-18100 | `selectEmpty()` in the component |
| Empty row Enter or Space: set the null value, close, **no OnChange** (the quirk B1 kept, `CountryDropdown.tsx:290-296`) | W18100-18300 | `onKeyDown` of the empty row |
| Row Enter or Space: `select`, then focus the closed display | W18810-19000 | `onKeyDown` of a row |
| Container keys while open: Enter or Space (no row in the DOM: close and focus the display), ArrowDown / ArrowUp navigate, any other key closes and focuses the display. Closed: Enter or Space opens when enabled | W15900-16560 | `onKeyDown` of the container; `navigateList` and `focusClosedDropdown` from `dropdownListDom.ts` |
| `navigateList`: move `dropdown-popup-row-selected` and `tabIndex=0` to the next or previous sibling, focus it (direct DOM, as the runtime) | W17012-17390 | `dropdownListDom.ts` |
| After every render: list position and `dropdown-expanded(-up/-down)` classes, scroll the scroll parent to the selected row, focus the selected (or first) row while open | W13185, W14151-15700, W19230-19600, W16563-16800 | `useDropdownListEffects.ts`, with the math in `dropdownListPosition.ts` |
| `show` records the container's left offset for the position while open | W13912-14030 | `show()` + a ref |
| Background window click closes (stops propagation) | W19640-19990 | the component |

Not ported, and said so in the README: `setVariable` (W13540-13900). It sets the variable to the first row and raises
OnChange only when the widget has no Empty Value. All 8 have one (F2), so the branch never runs.

One runtime quirk to port on purpose (new finding, see open point O2): `updateState` takes `childNodes[1]` as "the
list" (W14151-14180). When the list is closed and the validation span shows, `childNodes[1]` is that span, so the
runtime adds `dropdown-expanded dropdown-expanded-down|up` to a closed, invalid dropdown. The CSS styles that state:
`.dropdown-container.not-valid.dropdown-expanded > div.dropdown-display { border: … error }`
(`OutSystemsUI_2_23.OutSystemsUI.css`) and `.phone .orbit-theme .orbit-host-survey
.not-valid.dropdown-expanded.dropdown-container:after { border-color: var(--color-error) }`
(`Connect2_LegacyShared.OrbitTheme.css`). The effect must therefore read `childNodes[1]` as the runtime does and
re-run when the record changes (B1's effect does not list the record, `CountryDropdown.tsx:225`).

## 3. Validation

### 3.1 `useValidationWidget` in `OSValidation.tsx`

```ts
export interface ValidationWidgetBinding {
  record: WidgetValidationRecord;
  /** The element class with " not-valid" while a message shows (RV210359). */
  className: (className: string | undefined) => string | undefined;
  /** createValidationElement (RV209990): the span, rendered last inside the widget. */
  validationElement: ReactNode;
}
export function useValidationWidget(options: {
  id: string;
  /** The widget's validate (RV ValidationWidget.validate ≈209195 by default: a valid result). */
  validate?: (service: ValidationService) => ValidationResult;
}): ValidationWidgetBinding;
```

- On mount it registers `{ id, validationParentId: <ParentContext>, validate }` in the service of `ServiceContext`;
  on unmount it unregisters (RV internalComponentWillMount ≈209258). With no provider it registers nowhere and the
  record stays the default, as every widget today (`OSValidation.tsx:26`).
- It reads the record with `useWidgetValidationRecord(id, service)`, so the `Valid` and `ValidationMessage` an action
  assigns through `setWidgetValidity` (F4) re-render the widget.
- `useInputWithVariableValidation` becomes: `useValidationWidget` with the element-based validate, plus
  `ariaDescribedBy` (Input only). Same exports, same behaviour; its 6 callers do not change.
- `UnbuiltValidationWidget` becomes `useValidationWidget({ id, validate }); return null;`. Its only production caller
  is `CountryDropdown.tsx:268`, which goes away. See open point O5 for keep or delete.

### 3.2 The dropdown's validate

`DropdownCustom extends InputWithVariableWidget` (W21210). Its `inputedValue` is the selected value when it is in the
list, else null; its `inputedValueValidity` is `{ valid: isValueInList, badInput: false }`; `isMandatory` is the prop
(W12410-12960). So the widget registers:

```ts
validate: (service) =>
  validateInputWithVariable(
    { inputedValue: inList ? value : '', inputedValueValidity: { valid: inList, badInput: false },
      isMandatory: mandatory, dataType: 'Text' },
    service,
  )
```

Result: a mandatory dropdown on its empty value fails with "This field is required."; any value in the list passes.
Today no screen calls `validate()` on either page (no `.validate(` in `pages/ContactUsDetails` or
`pages/HostSurvey` outside tests; F3), so this adds no visible change. It makes the widget correct for a future
`validate()`.

### 3.3 Inside a Form and outside any Form

| Case | TST | React after the change |
|---|---|---|
| Dropdown_Country in Form_ContactUs (F3) | `_validationProps: { validationService, validationParentId: idService.getId("Form_ContactUs") }` (CUD:910-913) | `ContactUsDetailsPage.tsx:107` provides the service; `OSForm id="Form_ContactUs"` (`ContactUsMessageForm.tsx:135`) sets the parent; the hook registers under it. No `record` prop. `Form_ContactUs.Valid` aggregates it as today. |
| The 7 HostSurvey dropdowns, no Form (F4) | `_validationProps: { validationService }` of the block, no parent (AccItem:622-624, HelperItem:405-407); the actions write `Valid` and `ValidationMessage` | No provider wraps the blocks, so the hook registers nowhere. The block passes `record`: VehicleItem from its block service (`HostSurvey_VehicleItem.tsx:238, 70-71`), AccommodationItem from `records` and `bedMessages` (`:140, :481`), HelperItem and AddHelper from state (`:70`, `:453`). As today. |

The `record` prop wins over the context record. The README states the rule: pass `record` only when the block keeps
the record itself.

## 4. Behaviour mapping

| # | Dropdown (block) | Today | After | Same or changes |
|---|---|---|---|---|
| 1 | Dropdown_Country (ContactUsDetails) | B1 `CountryDropdown` | shared widget, `getValue = code`, `renderRow = <div data-container><span data-expression>name` | Same look and events. Registration through `useValidationWidget` instead of `UnbuiltValidationWidget` (G3); validate ported (3.2), not visible (F3). D2 cannot show here: no message ever shows (F3). |
| 2 | Dropdown_BedsNumber (AccommodationItem) | B2 `OSDropdownCustom`, `nullValue "0"` | shared widget, `record` from `records` | D1, D2, D3, D4, D5, D6 |
| 3 | Dropdown_BedSize × beds (AccommodationItem) | B2, `record` from `bedMessages` | shared widget, same `record` (F6 path unchanged) | D1, D2, D3, D4, D5, D6 |
| 4 | Dropdown_Floor (AccommodationItem) | B2 | shared widget | D1, D2, D3, D4, D5, D6 |
| 5 | Dropdown_HelperRoles (AddHelper) | B2, `enabled` always | shared widget, `enabled` left out (default true) | D1, D2, D3, D4, D5, D6 |
| 6 | Dropdown_HelperRoles (HelperItem) | B2 | shared widget | D1, D2, D3, D4, D5, D6 |
| 7 | Dropdown_OwnerType (VehicleItem) | local `DropdownCustom` | shared widget, `record` from the block service | D1, D2, D3, D4, D5, D7, D8 |
| 8 | Dropdown_VehicleType (VehicleItem) | local `DropdownCustom` | shared widget | D1, D2, D3, D4, D5, D7, D8 |

Every visible difference, and why the change moves toward TST:

- **D1 List position (HostSurvey 7).** While open, the list gets `style="left; top; width; height"` and the
  container gets `dropdown-expanded dropdown-expanded-down|up` (W14151-15700). The CSS reads them
  (`.dropdown-expanded-down div.dropdown-list { top:100% !important }`, `.dropdown-expanded-up div.dropdown-list {
  bottom:100% !important }`, `.dropdown-container.dropdown-expanded > div.dropdown-display { border: … primary }`,
  `OutSystemsUI_2_23.OutSystemsUI.css`). Today B2 and Local render the list with no style and no expanded class
  (`OSDropdownCustom.tsx:92`, `HostSurvey_VehicleItem.tsx:115`). So the open list has no primary border on the
  display, and it can open the wrong way at the bottom of the screen.
- **D2 Invalid closed dropdown (HostSurvey 7).** TST adds the expanded classes to a closed dropdown that shows its
  message (section 2.4). Then the display has an error border and the arrow is red (`OrbitTheme.css`). Today nothing
  of this shows on "Owner type is required." or "Helper role is required.". After: as TST (open point O2).
- **D3 Keyboard (HostSurvey 7).** ArrowDown and ArrowUp move the selection and the focus; Enter or Space on a row
  selects and focuses the display. Any other key closes and focuses the display (W15900-16560, W17012-17390,
  W18810-19000). Today B2 only opens on Enter or Space (`OSDropdownCustom.tsx:72-77`); Local closes on other keys and
  ignores the arrows (`HostSurvey_VehicleItem.tsx:95-102`).
- **D4 Focus and scroll (HostSurvey 7).** On open, the selected row (else the first) gets the focus and the scroll
  parent scrolls to the selected row (W16563-16800, W19230-19600). Today: none.
- **D5 Empty row by keyboard (HostSurvey 7).** Enter or Space on the focused empty row sets the null value without
  OnChange (W18100-18300). Today the rows have no keyboard path.
- **D6 Empty row click when the value is already empty (B2: dropdowns 2 to 6).** TST sets the null value and raises
  OnChange every time (W17950-18100). B2 raises OnChange only on a change (`OSDropdownCustom.tsx:61-64, :97-99`).
  - Visible: in TST, a pick of "Select role" while the role is still empty runs OnChange_HelperRoles. That action
    sets the dropdown not valid with "Helper role is required." (F4). Today React shows nothing.
  - B1 already does it the TST way (`CountryDropdown.tsx:285-289`).
- **D7 Same row again (VehicleItem 7, 8).** TST only closes (W12140-12150). Local calls `onSelect` every time
  (`HostSurvey_VehicleItem.tsx:84-87` → `change()` :299 → `vehicleOnChangeWrite`). No visible change today: the write
  repeats the same validity. After: one write fewer, as TST.
- **D8 `aria-describedby` (VehicleItem 7, 8).** Local sets it on the container (`HostSurvey_VehicleItem.tsx:90`).
  TST sets none on a dropdown (RV210359 adds only `not-valid`; `OSValidation.tsx:71`). After: removed.

## 5. Options considered

| Option | What | Pros | Cons |
|---|---|---|---|
| **a. One generic widget with render props** (`list`, `getValue`, `renderRow`), runtime logic split into a pure position module, DOM helpers and one effect hook | recommended | One port of W11610-21275, tested once with jsdom and pure tests. Rows can hold any content, as the List placeholder in TST. The component stays about 170 lines. | Six call sites change their prop names. |
| b. Thin data-driven widget: `options: { value, content }[]` (the Local shape) | | Simplest props; the callers map their lists. | Today every row is `<span data-expression>` text, so it works, but a row with richer content later needs (a) anyway. The caller rebuilds the options array on every render. |
| c. Keep the page copies, share only hooks (position, keyboard, scroll) | | No caller change. | G1 stays: three markups to keep equal; three places for D6 to D8 to drift again; `npm run dup` keeps the clones. |

For the product owner: (a) builds the dropdown once, tests it once, and every screen then behaves as TST. It is the
same rule the app already applies to List, RadioGroup and Form.

## 6. Open points for the user

| # | Point | Options | Recommendation |
|---|---|---|---|
| O1 | Event props | (a) two props, `onValueChange(value)` then `onChange()`, as `OSRadioGroup` and the runtime (W12140-12300). (b) one `onChange(value)` as B2 today. | (a). Only (a) can port D5 (the null value without OnChange). Cost: the five HostSurvey callers split their handler in two; they already keep a `latest` ref for this. |
| O2 | The expanded classes on a closed, invalid dropdown (D2) | (a) port it: read `childNodes[1]` as W14151 does and re-run on the record. (b) treat it as a TST defect and add the classes only while open. | (a). The CSS has rules for that exact state (section 2.4), so the design expects it. No capture shows it: check it once on TST (a vehicle with an empty owner type, then Save) before the build. |
| O3 | Record source of the HostSurvey blocks | (a) keep: VehicleItem's block service, the other three blocks' state (`record` prop). (b) move AccommodationItem, HelperItem and AddHelper to a block `ValidationService` + `setWidgetValidity`, as VehicleItem and TST (one service per block, AccItem:622-624). | (a) for item 3: no behaviour change. (b) as a separate, later item. |
| O4 | Stories | (a) `Closed`, `Disabled`, `NotValid` stories (closed states; the page template asks for stories in a component folder). (b) none, as `OSRadioGroup`. | (a). Small. No story for the open list: no capture shows it. |
| O5 | `UnbuiltValidationWidget` | (a) delete it: its only production caller is `CountryDropdown.tsx:268`; `useValidationWidget` plus `return null` replaces it in 3 lines when a page needs one again. (b) keep it as a thin layer over the hook. | (a). An export with no caller can fail `npm run unused` (knip baseline, "new violation fails"); whether the knip config ignores barrel exports is unclear. Its 3 tests move to `useValidationWidget`. |
| O6 | Row key | `getValue(item)` as today. A list with two equal values would warn in React; the TST List keys rows by index. | Keep `getValue`. All 8 lists are static entities or a country list, so equal values are not expected (unclear for GetCountriesNames: the real list is not recorded, B1 decision 4). |

## 7. Change list and test plan

### 7.1 Files

| Action | File |
|---|---|
| Add | `components/ui/os/OSDropdownCustom/OSDropdownCustom.tsx`, `dropdownListPosition.ts`, `dropdownListDom.ts`, `useDropdownListEffects.ts`, `OSDropdownCustom.test.tsx`, `dropdownListPosition.test.ts`, `README.md`, `index.ts` (and `OSDropdownCustom.stories.tsx` per O4) |
| Change | `components/ui/os/OSValidation/OSValidation.tsx` (add `useValidationWidget`; rewrite `useInputWithVariableValidation` and `UnbuiltValidationWidget` over it), `index.ts` (export), `OSValidation.test.tsx` |
| Delete | `pages/ContactUsDetails/components/CountryDropdown.tsx`; `pages/HostSurvey/components/OSDropdownCustom.tsx`; the local `DropdownCustom` in `pages/HostSurvey/components/HostSurvey_VehicleItem.tsx:53-154` |
| Update callers | `ContactUsMessageForm.tsx:145-153`; `HostSurvey_AccommodationItem.tsx:436-449, 471-486, 497-513`; `HostSurvey_AddHelper.tsx:430-454`; `HostSurvey_HelperItem.tsx:173-193`; `HostSurvey_VehicleItem.tsx:335-375` |
| Docs | `app/docs/guides/os-widgets.md` (table row and a section), `components/ui/README.md` (platform widgets row), `migration/clarify/builds/README.md` follow-up rows of B1 and B2 |

No change to `openapi.yaml`, `src/mocks/`, `public/UBTConnect/css/`.

### 7.2 Tests to write first (Vitest; they fail before the change)

1. `dropdownListPosition.test.ts` (pure):
   - down when the space below is larger; up when the space above is larger;
   - phone width ≤ 420 → `width = innerWidth − 20`, `left = pageX + 10`;
   - the height clamp at the bottom and at the popup top; `left` from the recorded offset while open;
   - the "same position" guard that keeps an empty height.
2. `OSDropdownCustom.test.tsx`:
   - closed markup: `dropdown-container <style>`, the row content or `<span>emptyValue</span>`, `dropdown-disabled`;
   - open: the empty row first with its classes, one row per item, `tabindex` on the selected row, the background
     window;
   - open: `dropdown-expanded dropdown-expanded-down` and the inline `left/top` on the list (jsdom rects are 0, so
     "down" at `0px`);
   - row click: `onValueChange` then `onChange`, list closed; same row: close only, no calls (D7);
   - empty row click: `onValueChange(nullValue)` and `onChange` even when the value is already empty (D6);
   - Enter on the empty row: `onValueChange` without `onChange` (D5);
   - keyboard: Enter or Space opens when enabled, not when disabled; ArrowDown moves `dropdown-popup-row-selected`
     and the focus; Escape closes and focuses the display; Enter on a row selects and focuses the display (D3);
   - on open, the selected row has the focus; with a mocked `scrollHeight > clientHeight`, `scrollTop` =
     `offsetTop` difference (D4);
   - `onFocus` fires on the container when a row gets focus;
   - `record` prop: `not-valid` on the container, the span last, no `aria-describedby` (D8); and the expanded classes
     on the closed invalid dropdown (D2, per O2);
   - in `ValidationServiceProvider` + `OSForm`: `validate()` fails a mandatory empty dropdown with "This field is
     required.", `Form.Valid` follows, a value in the list passes; `setWidgetValidity` re-renders the message.
3. `OSValidation.test.tsx`: `useValidationWidget` registers under the Form, unregisters on unmount, calls `validate`
   with the service; the existing Form, Input and `UnbuiltValidationWidget` cases keep passing (or move, O5).

### 7.3 Existing tests to adapt

- `HostSurvey_VehicleItem.test.tsx:132` asserts the exact class `dropdown-container dropdown not-valid`; with D2 the
  class gains `dropdown-expanded dropdown-expanded-down` (jsdom: down). `:99` (closed, valid) stays.
- `HostSurvey_HelperItem.test.tsx:96` uses `toContain('not-valid')`: stays.
- `ContactUsMessageForm.test.tsx:130, 164-187` and `HostSurvey_VehicleItem.test.tsx:94-125` test the closed and open
  markup through the page: they stay and now also prove the callers.
- `HostSurvey_AccommodationItem.test.tsx:106` (one Bed Type dropdown per bed) stays.
- The B2 and Local copies have no test file of their own; nothing to move. B1's dropdown tests live in
  `ContactUsMessageForm.test.tsx` and stay there.

### 7.4 Checks

`npx vitest run src/components/ui/os src/pages/ContactUsDetails src/pages/HostSurvey`, then `npm run ci` (typecheck,
lint, `arch`, `dup` — the clones go, so the 0.57 % threshold gets easier —, `unused`, tests, build). Parity: no
capture shows an open dropdown or an invalid dropdown (B2 note :139, :162; the test survey is confirmed). So the
sweep checks only the closed, valid markup of ContactUsDetails and HostSurvey, and that markup does not change. The
Vitest tests cover the open list, the keyboard and D2. The TST check of D2 waits for test data (section 9).

## 8. Risks

| Risk | Why | Mitigation |
|---|---|---|
| D2 changes the look of an invalid HostSurvey dropdown without a capture | The finding comes from reading W14151 and the CSS, not from a capture | One manual check on TST before the build (O2); the port follows the runtime either way |
| jsdom has no layout | Position and scroll tests need mocked rects and `scrollHeight` | The math is pure (`computeListPosition`) and tested with numbers; the DOM tests check classes and calls only |
| `navigateList` edits classes in the DOM directly | A React re-render can reset them | The runtime does the same (W17012-17390); the test covers "ArrowDown then re-render" |
| The effect runs after every render | Same as the runtime's `componentDidUpdate` (W13185) | 8 widgets; the `setState` guard (W15400-15700) stops loops |
| Callers split one handler into `onValueChange` + `onChange` (O1) | A missed `onChange` or a double call | The block tests of each caller assert the OnChange effects (messages, bed rows, pills) |
| `UnbuiltValidationWidget` kept with no caller (O5 b) | knip may fail `npm run ci` | Delete it (O5 a) or confirm the knip config |
| `npm run dup` | Deleting three clones lowers the figure; new files must not clone `OSRadioGroup` helpers | `executeAfterPaint`-style helpers stay local; none is needed here |

## 9. Decisions (user, 2026-10-28)

- Design (a): one generic `OSDropdownCustom` widget with render props in `components/ui/os/`.
- O1 (a): two event props, `onValueChange(value)` then `onChange()`.
- O2: port D2 from the runtime code (`updateState` reads `childNodes[1]`, W14151) and the TST CSS. It is not checked on
  TST: the test account has no Orbit event now, so HostSurvey cannot be opened (read-only probe
  `../tools/probe_dropdown_d2.cjs`, `probe-dropdown-d2.json`: OrbitLanding shows NoInformation_Orbit, no call
  blocked). Check it when the account has an event with a host survey.
- O3 (a), O4 (a), O5 (a), O6: as recommended.
