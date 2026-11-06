# HouseholdDetails_TimelinePhoto_List

OutSystems: `UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List` · pack
`migration/blocks/UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.md` · source
`migration/sources/survey/UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.mvc.js`.

| Input                      | Type                            | Prop                                       | Default |
| -------------------------- | ------------------------------- | ------------------------------------------ | ------- |
| In_HouseholdTimelineImages | UI_HouseholdTimelineImages List | `inHouseholdTimelineImages`                | `[]`    |
| (its data fetch status)    | DataFetchStatus                 | `inHouseholdTimelineImagesDataFetchStatus` | Fetched |

Event: `Event_DateSelected(Date)` → `onEventDateSelected(date)`. Placeholders: none. Child: HouseholdDetails_TimelinePhoto.

## Captures

None (no captured screen shows a timeline). Live compiled code of 2026-11-05
(`migration/sources/runtime/UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.mvc.js:140-251`):
an empty list shows a bordered box with Unavailable_Image instead of the List. Stories `CompiledView`, `Empty`,
`Fetching`; the test checks the List, `list-loading`, the empty box and the event.

## Not captured / not settled

- The whole block. Row keys: Date + index (the record has no id).
