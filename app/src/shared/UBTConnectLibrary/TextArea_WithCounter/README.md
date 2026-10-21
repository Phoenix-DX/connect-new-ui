# TextArea_WithCounter

OutSystems: `UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter` · pack
`migration/blocks/UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.md`

| Input            | Type    | Prop              | Default |
| ---------------- | ------- | ----------------- | ------- |
| In_InitialLength | Integer | `inInitialLength` | `0`     |

Events: none. Placeholder `Placeholder_Input` → `children` (the caller's label and text area). Markup: container
`ubt-input-with-counter` (MainContainerClass default) > the placeholder > InputCounter (In_InputId = InputId,
In_InitialLength) once InputId is set. OnReady runs GetInputId (`…TextArea_WithCounter.mvc.js:314-320`): InputId = the
id of the first `textarea` in the placeholder (the placeholder's own generated id is not rendered; a ref finds it).

## Captured variants (2 distinct in the pack; 3 tested)

| Capture | Source                       | What it shows                            |
| ------- | ---------------------------- | ---------------------------------------- |
| v1      | ContactByEmailMember/default | Message text area (counter wrapper only) |
| v2      | ContactUsDetails/default     | mandatory label, long prompt             |
| v3      | ContactUsDetails/default     | v2 whole, with the InputCounter content  |

## Not settled

- A placeholder without a text area makes the original JS throw (`input.id` of null). The React component shows no counter.
