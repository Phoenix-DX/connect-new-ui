# Accordion_Orbit

OutSystems: `Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit` · pack
`migration/blocks/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.md` · source
`migration/screens/EventDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc.js`

| Input             | Type    | Prop               | Default |
| ----------------- | ------- | ------------------ | ------- |
| In_ExtendedClass  | Text    | `inExtendedClass`  | `''`    |
| In_ColoredContent | Boolean | `inColoredContent` | `false` |
| In_MultipleItems  | Boolean | `inMultipleItems`  | `false` |

No events. Placeholder `Content` → `children` (the screen's DEPRECATED_AccordionItem blocks).

View (:159-214): `osui/DEPRECATED_Accordion` with ExtendedClass `orbit-accordion` + ` orbit-accordion-colored-content`
(In_ColoredContent) + " " + In_ExtendedClass (when not empty), MultipleItems = In_MultipleItems, Content in its own
container. No controller logic.

## Captured variants (1 tested)

| Capture | Source              | What it shows                                                                    |
| ------- | ------------------- | -------------------------------------------------------------------------------- |
| v1      | EventDetail/default | wrapper; the test also compares the inner accordion with DEPRECATED_Accordion v1 |

MilestoneDetail/default has the same wrapper; story `MilestoneRooms` renders its inputs and the test compares the inner
accordion with DEPRECATED_Accordion v2.

## Not captured / not settled

- Nothing else.
