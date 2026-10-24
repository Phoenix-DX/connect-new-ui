# RadioButtonListItem

OutSystems: `Connect2_LegacyShared.Reusable.RadioButtonListItem` · pack
`migration/blocks/Connect2_LegacyShared.Reusable.RadioButtonListItem.md` · source
`migration/blocks/sources/Connect2_LegacyShared.Reusable.RadioButtonListItem.mvc.js`

| Input            | Type | Prop               | Default |
| ---------------- | ---- | ------------------ | ------- |
| SelectedValue    | Text | `selectedValue`    | `''`    |
| RadioButtonValue | Text | `radioButtonValue` | `''`    |
| ExtendedClass    | Text | `extendedClass`    | `''`    |

Event `Selected` → `onSelected` (click on the RadioButton wrapper). Placeholder `Title` → `children`.

View (:147-215): RadioGroup (`radio-group radio-group--list-item <ExtendedClass>`, variable RadioButtonValue) > one
RadioButton (`radio-button`, value SelectedValue). The compiled names are: the RadioButton's value is
SelectedValue, and the group variable is RadioButtonValue. `OSRadioGroup`'s RadioButton got an `onClick` prop for the
widget's extendedEvents (on the wrapper, as fillWithBuiltinProperties puts it).

## Captured variants (0)

Never rendered in a capture (AssembleEvents / Assemble_BrowseByCountry open it only inside the locality filter).
Stories `Selected` and `NotSelected`; `RadioButtonListItem.test.tsx` checks the structure and the event.

## Not settled

- The RadioGroup / RadioButton ids come from OutSystems (`<block>-RadioGroup`); React `useId` stands in (the
  inputs need a group name).
