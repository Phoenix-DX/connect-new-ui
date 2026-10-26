# EventDetail_SubSection

OutSystems: `Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SubSection` · pack
`migration/blocks/Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SubSection.md` · source
`migration/screens/LDM_MyEvents/analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SubSection.mvc.js`

| Input              | Type    | Prop                | Default |
| ------------------ | ------- | ------------------- | ------- |
| In_Title           | Text    | `inTitle`           | `''`    |
| In_HasBottomBorder | Boolean | `inHasBottomBorder` | `false` |

No events, no controller logic. Placeholder `SubSection_Placeholder` → `children`. View `:140-200`:
`event-detail-subsection` > `event-detail-subsection-title` (title) + the placeholder div with class
`event-detail-subsection-placeholder` (+ ` border-bottom-neutral-4` when In_HasBottomBorder).

## Captured variants (1 tested)

| Capture | Source                  | What it shows                                                                          |
| ------- | ----------------------- | -------------------------------------------------------------------------------------- |
| v1      | LDM_MyEvents_V2/default | "Past Events" with a list of month groups; EventCard_V2 is a PendingBlock in the story |

## Not captured / not settled

- In_HasBottomBorder True: not captured. The compiled view gives both `style` and extendedProperties.className the
  value `event-detail-subsection-placeholder`. The capture (False) shows the class once, so the port renders the base
  class once plus `border-bottom-neutral-4`. Whether the platform repeats the class is not settled.
