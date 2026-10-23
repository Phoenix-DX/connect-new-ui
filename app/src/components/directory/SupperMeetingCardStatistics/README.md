# SupperMeeting_ImageCard_Content_Statistics

OutSystems: `UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics` · pack `migration/blocks/UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics.md`

| Input             | Type    | Prop               | Default |
| ----------------- | ------- | ------------------ | ------- |
| In_BretherenCount | Integer | `inBretherenCount` | `0`     |
| In_HouseholdCount | Integer | `inHouseholdCount` | `0`     |
| In_GenderSplit    | Text    | `inGenderSplit`    | `''`    |

Events: none.
Placeholders: none.

## Captured variants (2 tested)

| Capture | Source                                                 | What it shows |
| ------- | ------------------------------------------------------ | ------------- |
| v1      | pack variant 1, SupperMeeting_Carousel/default         | wrapper only  |
| v2      | `SupperMeeting_Carousel/analysis/dom/default.html` [0] | full markup   |

## Not captured / not settled

- Ported actions: GetDescriptor_BretherenCount, GetDescriptor_Subdivision_HouseholdCount (`UBTConnect/lib/actions.ts`), GetLookupConcepts and SetLookupLabel_MaybeLowercase (`UBTConnectLibrary/lib/actions.ts`).
