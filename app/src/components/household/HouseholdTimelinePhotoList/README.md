# HouseholdDetails_TimelinePhoto_List

OutSystems: `UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List` · pack
`migration/blocks/UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.md` · source
`migration/blocks/sources/UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.mvc.js`.

| Input                      | Type                            | Prop                        | Default |
| -------------------------- | ------------------------------- | --------------------------- | ------- |
| In_HouseholdTimelineImages | UI_HouseholdTimelineImages List | `inHouseholdTimelineImages` | `[]`    |

Event: `Event_DateSelected(Date)` → `onEventDateSelected(date)`. Placeholders: none. Child: HouseholdDetails_TimelinePhoto.

## Captures

None (no captured screen shows a timeline). Story `CompiledView`; the test checks the compiled List and the event.

## Not captured / not settled

- The whole block. Row keys: Date + index (the record has no id).
