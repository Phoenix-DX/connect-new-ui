# OSDropdownCustom (OutSystems Dropdown widget, Custom mode)

Platform widget `OSWidgets.Dropdown` with `dropdownMode: 1` (Custom). It ports the DropdownCustom module of
`migration/runtime-sources/OutSystemsReactWidgets.js` (W11610-21275; `W<n>` = character offset). It is not an
OutSystems block: no `@os-block` tag, no `OSBlockWidget` root. The app has 8 such dropdowns (F2 in
`migration/clarify/review/item3-dropdowns.md`).

## Files

| File                        | Holds                                                                                |
| --------------------------- | ------------------------------------------------------------------------------------ |
| `OSDropdownCustom.tsx`      | the markup, select, show, hide, the keyboard of the container and the rows           |
| `dropdownListPosition.ts`   | `computeListPosition` and `keepListPosition`: the math of updateState (pure numbers) |
| `dropdownListDom.ts`        | the class names, navigateList, the focus helpers and the scroll to the selected row  |
| `useDropdownListEffects.ts` | the effect after every render: position, then scroll, then focus                     |

## Props

| Dropdown property (compiled view) | Prop             | Note                                                       |
| --------------------------------- | ---------------- | ---------------------------------------------------------- |
| widget name or instance id        | `id`             | the container `id`                                         |
| Style Classes                     | `style`          | "dropdown" in all 8                                        |
| Empty Value                       | `emptyValue`     | the prompt row and the closed text                         |
| Mandatory                         | `mandatory`      | read only by validate()                                    |
| Enabled                           | `enabled`        | default true                                               |
| List                              | `list`           | any item type `T`                                          |
| Values                            | `getValue(item)` | the value as text; also the row key                        |
| List placeholder                  | `renderRow`      | the content of a row and of the closed display             |
| Variable                          | `value`          |                                                            |
| null value of the variable type   | `nullValue`      | "" (default, Text) or "0" (Long Integer)                   |
| variable assignment               | `onValueChange`  | runs first                                                 |
| OnChange                          | `onChange`       | runs after the variable is set                             |
| extended event onfocus            | `onFocus`        | on the container; it bubbles from the display and the rows |
| `Valid` and `ValidationMessage`   | `record`         | only when the block keeps the record itself (see below)    |

## Behaviour

- A row click: the same value only closes the list (D7). Another value sets the variable, closes the list, then
  raises OnChange.
- The empty row click sets the null value and raises OnChange each time, also when the value is already empty (D6).
- Enter or Space on the empty row sets the null value without OnChange (D5, the runtime's keyboard path).
- Closed: Enter or Space opens the list when the widget is enabled. Open: ArrowDown and ArrowUp move the selected
  row and the focus; Enter or Space on a row selects it and focuses the display; any other key closes the list and
  focuses the display (D3).
- On open, the selected row (else the first row) gets the focus, and the scroll parent scrolls to the selected row
  (D4).
- While open, the list gets `left`, `top`, `width` and `height` and the container gets `dropdown-expanded
dropdown-expanded-up|down` (D1).
- D2 (decision O2): the runtime reads the container's `childNodes[1]` as the list. A closed dropdown that shows its
  message has the validation span there, so it also gets the expanded classes. This is ported from the runtime code
  and the TST CSS. It is not checked on TST.
- The container has no `aria-describedby` (D8).

## Validation

The widget registers through `useValidationWidget` (`OSValidation`). Its validate takes the value when it is in the
list, else none, so a mandatory dropdown on its empty value fails with "This field is required.".

- Inside a `ValidationServiceProvider`, it registers under the enclosing `OSForm`, and the record comes from the
  service (Dropdown_Country in Form_ContactUs).
- Pass `record` only when the block keeps the record itself (the HostSurvey blocks, F4). The `record` prop wins over
  the service record.
- The bed check of HostSurvey (F6) reads `.dropdown-container .dropdown-display .dropdown-display-content span`. Keep
  this markup.

## Not ported

- `setVariable` (W13531): it sets the variable to the first row and raises OnChange only when the widget has no Empty
  Value. All 8 dropdowns have one.
- The runtime adds the expanded classes with `classList`. Here they are state that the component renders. The result
  is the same class string.

Stories (`OSDropdownCustom.stories.tsx`) show the closed states only: no capture shows an open list. Tests:
`OSDropdownCustom.test.tsx`, `dropdownListPosition.test.ts`.
