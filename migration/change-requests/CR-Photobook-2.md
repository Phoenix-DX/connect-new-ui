# CR-Photobook-2: platform RadioGroup / RadioButton widgets

- Status: done (F4b, 2026-10-15; awaiting orchestrator review)
- Raised by: Photobook, 2026-10-15
- Block: OutSystems platform widgets `OSWidgets.RadioGroup` / `OSWidgets.RadioButton` → `app/src/components/` (like OSList)
- Other routes using it (catalog/blocks.md): none known
- Related question: none (shared-component gap, rule 7)

## Evidence
- `sources/pretty/UBTConnect.Directory_Photobook.Photobook_Options_Right.mvc.js` view: BottomSheet_Speed content =
  RadioGroup `radio-group photobook-carousel--radio-group` (variable SelectedSpeed) with RadioButtons Five / Eight /
  Fifteen (`radio-button photobook-carousel--radio-button`, values Photobook_Speed 5000 / 8000 / 15000, labels "5s",
  "8s", "15s"). Not rendered in any captured state (the sheet exists only while the options are shown).
- Port source: `migration/runtime-sources/OutSystemsReactWidgets.js` (RadioGroup / RadioButton).

## Expected change
Platform RadioGroup / RadioButton components with the runtime markup, bound to a value with onChange.

## Workaround in the route until applied
`<NotCaptured name="CR-Photobook-2: RadioGroup_SpeedOptions (5s / 8s / 15s)">` as the speed sheet content; SelectedSpeed
stays In_CurrentSpeed, so closing the sheet raises Closed (never SetSpeed).

## Resolution (foundation owner)
- Change: new platform widgets `app/src/components/OSRadioGroup/` (`RadioGroup`, `RadioButton`, index, DOM tests),
  next to OSList / OSPopup. Ported from OutSystemsReactWidgets.js (readable copy
  migration/screens/MessageList/analysis/sources/pretty/OutSystemsReactWidgets.js): RadioGroup W:347-370 over
  AbstractButtonGroup W:78-188 (`data-radio-group`, class = style + gridProperties "OSFillParent", role radiogroup,
  aria-activedescendant = selected RadioButton id, inner div, validation span + `not-valid` when a message is set;
  updateValue W:106-115: variable set only when the value differs, OnChange after paint = rAF + setTimeout 1 ms,
  OutSystemsReactView.js executeAfterPaint); RadioButton W:371-430 (`data-radio-button` wrapper with OSFillParent,
  input radio `<id>-input` class = style, name = group id, value as text, hidden / disabled / checked, label for).
  Not ported: the runtime's stale aria-activedescendant when no option matches (left out instead).
  Photobook_Options_Right: the NotCaptured is replaced by RadioGroup_SpeedOptions (Five / Eight / Fifteen, 5000 /
  8000 / 15000, "5s" / "8s" / "15s"), SelectedSpeed state reset to In_CurrentSpeed on OnInitialize /
  OnParametersChanged (:762 / :787), so closing the sheet after a change raises SetSpeed.
- Regression parity run on: 2026-10-15 — Photobook (the sheet is not rendered in any captured state: default 345 capture
  artifacts, loading 0, offline 0). No other user.
