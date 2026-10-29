# RangeSlider

OutSystems: `OutSystemsUI_2_23.Interaction.RangeSlider` · pack `migration/blocks/OutSystemsUI_2_23.Interaction.RangeSlider.md`

| Input           | Type                                | Prop              | Default |
| --------------- | ----------------------------------- | ----------------- | ------- |
| OptionalConfigs | RangeSliderOptionalConfigs (record) | `optionalConfigs` | `{}`    |
| MinValue        | Decimal                             | `minValue`        | `0`     |
| MaxValue        | Decimal                             | `maxValue`        | `100`   |
| StartingValue   | Decimal                             | `startingValue`   | `0`     |
| ExtendedClass   | Text                                | `extendedClass`   | `''`    |

Event `OnValueChange(RangeSliderId, Value)` → `onValueChange`. Placeholders: none.

The block renders two containers: `osui-range-slider` (with the attribute `name` = the unique id) and
`osui-range-slider__provider`. The OutSystems UI provider then builds a noUiSlider 15.8.1 on the provider element.
This port renders the same DOM. Sources:

- `migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js`: AbstractNoUiSlider, OSUINoUiSliderSingle,
  NoUiSliderSingleConfig and getPipsConfig.
- `migration/runtime-sources/OutSystemsUI_2_23.NoUISlider.js`: the noUiSlider markup and handlers (fetched from TST
  on 2026-10-27).

Markup and behaviour:

- Root classes: `osui-range-slider`, the ExtendedClass and `osui-range-slider--has-ticks` (ShowTickMarks). A changed
  ExtendedClass goes to the end of the list, as `Dom.Styles.ExtendedClass` does. The style is
  `--range-slider-size: 100%`.
- The provider gets `noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr`, and `noUi-state-tap` for 300 ms after a
  tap.
- The base holds the connect (`scale(<position>, 1)`), the origin (`translate(<position - 100>%, 0px)`, z-index 4) and
  the handle `noUi-handle noUi-handle-lower`. The handle has `data-handle="0"`, `tabindex="0"`, `aria-label="handler"`,
  `role="slider"` and the aria values with one decimal (`aria-valuenow="1.0"`). The theme CSS selects on these values.
- Pips (mode "values"): a large marker and a value for each tick, from MinValue by TickMarksInterval. The density is
  the interval × 100, so there are no sub-markers.
- The start value is clamped to the range: StartingValue 0 on a 1 to 10 slider puts the handle on 1.
- A tap on the base moves the handle to the nearest step. A drag moves it step by step. The arrows move one step,
  PageUp and PageDown five steps, and Home and End go to the ends.
- Each move raises the noUiSlider slide event. The first slide starts a 200 ms timer. The timer raises OnValueChange
  with the value at that moment (OSUINoUiSliderSingle `_valueChangeCallback`).

Not built, because no screen uses them: vertical orientation, right-to-left, the floating label, the Interval mode,
the Size option and the extensibility configs.
