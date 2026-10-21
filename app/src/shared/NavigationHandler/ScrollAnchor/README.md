# ScrollAnchor

OutSystems: `NavigationHandler.ScrollAnchors.ScrollAnchor` · pack
`migration/blocks/NavigationHandler.ScrollAnchors.ScrollAnchor.md`

| Input | Type | Prop   | Default |
| ----- | ---- | ------ | ------- |
| Id    | Text | `idIn` | `''`    |

Events: none. Placeholders: none. Renders one container with `data-dx-scroll-anchor-id` = Id.

## Captured variants (1 tested)

| Capture | Source                   | What it shows                                        |
| ------- | ------------------------ | ---------------------------------------------------- |
| v1      | BookmarksByGroup/default | the anchor container (134 instances, only Id varies) |

## Not settled

- Prop name: the input has the name `Id`, which the conventions reserve for the instance id (`id`); the prop uses the
  compiled variable name `idIn`.
- Who reads `data-dx-scroll-anchor-id` (scroll restoration of the NavigationHandler runtime) is not in the block's
  sources; the block only renders the attribute.
