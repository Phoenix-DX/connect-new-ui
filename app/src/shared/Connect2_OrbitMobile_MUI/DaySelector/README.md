# DaySelector

OutSystems: `Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DaySelector` · pack
`migration/blocks/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DaySelector.md` · source
`migration/screens/EventDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DaySelector.mvc.js`

| Input      | Type    | Prop         | Default |
| ---------- | ------- | ------------ | ------- |
| IsSelected | Boolean | `isSelected` | `false` |

No events. Placeholder `Placeholder_Digit` → `children`.

View (:126-164): container `event-date-selector event-date-selector-day` + ` event-date-selector-selected` when
IsSelected, with the placeholder inside. The caller (ListOfDaySelectors) handles the click.

## Captured variants (2 tested)

| Capture | Source              | What it shows       |
| ------- | ------------------- | ------------------- |
| v1      | EventDetail/default | selected day "23"   |
| v2      | EventDetail/default | unselected day "24" |

## Not captured / not settled

- Nothing else: two states, both captured.
