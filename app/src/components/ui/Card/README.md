# Card

OutSystems: `OutSystemsUI_2_23.Content.Card` · pack `migration/blocks/OutSystemsUI_2_23.Content.Card.md`

| Input         | Type    | Prop            | Default |
| ------------- | ------- | --------------- | ------- |
| UsePadding    | Boolean | `usePadding`    | `true`  |
| ExtendedClass | Text    | `extendedClass` | `''`    |

Events: none. Placeholder `Content` → `children`. Markup: the Content placeholder with the class
`"placeholder-empty card card-content" + If(UsePadding, "", " padding-none ") + If(ExtendedClass = "", "", " " +
ExtendedClass)` (compiled `Content.Style`, spaces kept). Its generated id is not rendered.

## Captured variants (1 in the pack; 1 tested)

| Capture | Source                | What it shows                                                |
| ------- | --------------------- | ------------------------------------------------------------ |
| v1      | MessageDetail/default | notification detail card (UsePadding True, no ExtendedClass) |

## Not captured

- UsePadding False / an ExtendedClass: tested from the compiled expression.
