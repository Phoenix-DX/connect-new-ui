# SubLayout_DirectoryDetailScreen

OutSystems: `UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen` · pack
`migration/blocks/UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.md` · compiled source
`migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc.js`

| Input       | Type    | Prop          | Default |
| ----------- | ------- | ------------- | ------- |
| HideActions | Boolean | `hideActions` | `false` |

Placeholders `Placeholder_DetailCard`, `Placeholder_CallToAction`, `Placeholder_Content` → `placeholderDetailCard`,
`placeholderCallToAction`, `placeholderContent`. Events: none.

## Captured variants (4; 4 tested)

| Capture | Source                         | What it shows                              |
| ------- | ------------------------------ | ------------------------------------------ |
| v1      | HouseholdCarousel/default      | skeleton card / actions, visible About tab |
| v2      | HouseholdDetails/loading       | About tab hidden (caller markup)           |
| v3      | OneSchoolGlobalDetails/default | actions in a CustomContainer               |
| v4      | SupperMeeting_Carousel/default | household list content                     |

Not captured: HideActions True (`display-none`), tested with `it`. Placeholder content is the caller's.
