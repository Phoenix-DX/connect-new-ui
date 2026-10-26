# ImageCard__Content

OutSystems: `UBTConnectLibrary.ConnectPatterns.ImageCard__Content` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.ImageCard__Content.md`

| Input           | Type    | Prop             | Default |
| --------------- | ------- | ---------------- | ------- |
| In_Title        | Text    | `inTitle`        | `''`    |
| In_Subtitle     | Text    | `inSubtitle`     | `''`    |
| In_ShowSubtitle | Boolean | `inShowSubtitle` | `false` |

Events: none.
Placeholders: Placeholder_TopSectionContent → `placeholderTopSectionContent`, Placeholder_BottomSectionContent → `placeholderBottomSectionContent`.

## Captured variants (4 tested)

| Capture | Source                                    | What it shows                        |
| ------- | ----------------------------------------- | ------------------------------------ |
| v1      | pack variant 1, HouseholdCarousel/default | subtitle, address and See more below |
| v2      | pack variant 2                            | no subtitle                          |
| v3      | pack variant 3, HouseholdCarousel/loading | skeleton title, two top tags         |
| v4      | pack variant 4, HouseholdDetails/loading  | gallery title, empty bottom          |

## Not captured / not settled

- Pack variants 5–9 differ only in caller placeholder content (not re-tested).
