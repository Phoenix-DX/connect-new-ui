# Statistics_Icons

OutSystems: `UBTConnect.Directory_Locality.Statistics_Icons` · pack `migration/blocks/UBTConnect.Directory_Locality.Statistics_Icons.md`

| Input              | Type                                      | Prop                | Default |
| ------------------ | ----------------------------------------- | ------------------- | ------- |
| UI_StatisticsTexts | UI_StatisticsTexts (Connect_Geography_CS) | `uIStatisticsTexts` | `{}`    |

Events: none. Placeholders: none.

## Captured variants (3 tested)

| Capture | Source                                         | What it shows                                  |
| ------- | ---------------------------------------------- | ---------------------------------------------- |
| v1      | pack variant 1, CountryDetails/default         | wrapper only                                   |
| v2      | `CountryDetails/analysis/dom/default.html` [0] | supper meetings column (SupperMeetings not "") |
| v3      | `CountryList/analysis/dom/default.html` [0]    | localities column (SupperMeetings "")          |

## Notes

- Icons from GetEntityType_Icon (`UBTConnect_Utils/lib/actions.ts`) with Connect_Entity Member, Household, Locality,
  Supper Meetings; Boy / Girl from UBT_Icons2 (TST values, added to `UBTConnectLibrary/lib/staticEntities.ts`).
- Structure UI_StatisticsTexts: `Connect_Geography_CS/lib/structures.ts` (Connect_Geography_CS.model.js:86-121).
- Counts are directory statistics; masked ones get neutral values in the stories.
