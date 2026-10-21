# RangeSlider

OutSystems UI: `OutSystemsUI_2_23.Interaction.RangeSlider` · pack
`migration/blocks/OutSystemsUI_2_23.Interaction.RangeSlider.md` · compiled source
`migration/blocks/sources/OutSystemsUI_2_23.Interaction.RangeSlider.mvc.js` · stack `osui:RangeSlider` = same provider
as the original: noUiSlider 15.8.1 + wNumb 1.2.0 (npm, `app/package.json`).

| Input           | Type                          | Prop              | Default                                                          |
| --------------- | ----------------------------- | ----------------- | ---------------------------------------------------------------- |
| MinValue        | Decimal                       | `minValue`        | `0`                                                              |
| MaxValue        | Decimal                       | `maxValue`        | `0`                                                              |
| StartingValue   | Decimal                       | `startingValue`   | `0`                                                              |
| Orientation     | Orientation Identifier        | `orientation`     | `Orientation.Horizontal`                                         |
| Size            | Text                          | `size`            | `'100%'`                                                         |
| OptionalConfigs | RangeSliderOptionalConfigsRec | `optionalConfigs` | record default (Step 1, ShowTickMarks True, TickMarksInterval 0) |
| ExtendedClass   | Text                          | `extendedClass`   | `''`                                                             |

Events `Initialized(RangeSliderId)` → `onInitialized`, `OnValueChange(RangeSliderId, Value)` → `onOnValueChange`
(id = the block root id; value change throttled 200 ms as the provider does).

Ported: OnInitialize (InternalConfigs), OnReady (RangeSliderCreate single + Initialize), OnParametersChanged (one
changeProperty per changed input, compiled order), OnDestroy, OnValueChangeHandler (TextToDecimal), IntializeHandler.
Provider glue `provider.ts` from `migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js` (AbstractNoUiSlider,
the single mode, their configs and the config validation; line refs inside). Styles: the original OSUI stylesheet
(`osui-range-slider*` and the bundled `noUi-*` rules).

## Captured variants

None: the pattern was never rendered in a capture (the survey lists ContactUsDetails). Built from the compiled view;
story `CompiledView`; behaviour tested against the real noUiSlider in jsdom.

## Not captured / not settled

- The record default ShowTickMarks True with TickMarksInterval 0 gives no pips and the OSUI console warning. It still
  adds `osui-range-slider--has-ticks`, as the provider does.
- `setA11YProperties` of the single slider runs after the instance exists in the original, so the handle keeps
  `aria-label="handler"` from the config (ported as is).
- The React component ports TextToDecimal as `Number`, 0 when not a number (the provider always passes a formatted number).
