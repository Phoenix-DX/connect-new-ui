# DynamicTextArea

OutSystems: `UBTConnectLibrary.ConnectPatterns.DynamicTextArea` · pack
`migration/blocks/UBTConnectLibrary.ConnectPatterns.DynamicTextArea.md` · compiled source
`migration/screens/ContactByEmailOneSchoolGlobal/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc.js`

| Input        | Type    | Prop          | Default |
| ------------ | ------- | ------------- | ------- |
| In_Text      | Text    | `inText`      | `''`    |
| In_IsBounded | Boolean | `inIsBounded` | `false` |

Placeholder `Placeholder_TextArea` → `children` (the caller's TextArea widget, `<span><textarea …></span>`).
Action ported: `Action_SetDataReplicatedValue` (OnReady and OnParametersChanged): sets `data-replicated-value` = In_Text on
the parent of the first textarea in the placeholder (SetValue JS, :296-303).

## Captured variants (1 tested)

| Capture | Source                                | What it shows                                         |
| ------- | ------------------------------------- | ----------------------------------------------------- |
| v1      | ContactByEmailOneSchoolGlobal/default | bounded, empty subject text area (ContactByEmailForm) |

## Not captured / not settled

- In_IsBounded False (class without the modifier) and a non-empty In_Text: tested with `it`.
