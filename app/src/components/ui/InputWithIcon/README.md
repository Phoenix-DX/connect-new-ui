# InputWithIcon

OutSystems UI: `OutSystemsUI_2_23.Interaction.InputWithIcon` · pack
`migration/blocks/OutSystemsUI_2_23.Interaction.InputWithIcon.md`

| Input          | Type    | Prop             | Default |
| -------------- | ------- | ---------------- | ------- |
| AlignIconRight | Boolean | `alignIconRight` | `false` |
| ExtendedClass  | Text    | `extendedClass`  | `''`    |

Events: none. Placeholders: `Icon` → `icon`, `Input` → `input` (the caller's Input widget, written by the caller as
captured). Pure markup: `"input-with-icon" + If(AlignIconRight, " input-with-icon-right", "") + " " + ExtendedClass`;
the icon placeholder always has the static classes `input-with-icon-content-icon center placeholder-empty`.

## Captured variants (4 distinct; 4 tested)

| Capture | Source                                                                     |
| ------- | -------------------------------------------------------------------------- |
| v1      | BrowseCountries/default (outer block, a second InputWithIcon in the Input) |
| v2      | BrowseCountries/default (inner block: icon on the right, empty icon)       |
| v3      | LegacyShareObject/default (ExtendedClass, Font Awesome icon)               |
| v4      | Profile/default (disabled text input)                                      |

Story icons use neutral icon ids: the nested Icon block is compared by its wrapper only.

## Not captured

- Nothing: the block has no state of its own.
