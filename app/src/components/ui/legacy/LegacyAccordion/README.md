# DEPRECATED_Accordion

OutSystems UI: `OutSystemsUI_2_23.Content.DEPRECATED_Accordion` · pack
`migration/blocks/OutSystemsUI_2_23.Content.DEPRECATED_Accordion.md` · source
`migration/screens/EventDetail/analysis/sources/pretty/OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc.js` ·
stack: hand-written component with the captured DOM and classes, no library.

| Input         | Type    | Prop            | Default |
| ------------- | ------- | --------------- | ------- |
| MultipleItems | Boolean | `multipleItems` | `false` |
| ExtendedClass | Text    | `extendedClass` | `''`    |

No events. Placeholder `Content` → `children`.

- View (:140-173): the Content placeholder is the accordion element: `osui-deprecated accordion` (+ " " +
  ExtendedClass), `data-multiple-items` True / False, role `tablist`.
- OnReady (:198-223, CloseAllItems :325-339): without MultipleItems, every open item at `:scope > div >
.section-expandable.is--open` but the first is collapsed (through the item's `CollapseItem`).
- OnParametersChanged (:225-252): DEPRECATED_UpdateAccordion (OutSystemsUI_2_23.controller.js:7645-7657) hands
  MultipleItems to every item, then OnReady again.
- Only items placed directly in the placeholder match the close-others selectors. Accordion_Orbit puts its own
  container in between, so on the Orbit screens opening an item never closes another (tested, as the original).

## Captured variants (2 tested)

| Capture | Source                  | What it shows                                                        |
| ------- | ----------------------- | -------------------------------------------------------------------- |
| v1      | EventDetail/default     | colored Orbit accordion, one item (in Accordion_Orbit's container)   |
| v2      | MilestoneDetail/default | MultipleItems, `orbit-accordion-no-margin`, six room items in a List |

## Not captured / not settled

- Close-others behaviour and MultipleItems changes: from the compiled code (tests).
