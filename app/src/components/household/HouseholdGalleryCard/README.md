# Household_GalleryCard

OutSystems: `UBTConnect.Directory_Household_Blocks.Household_GalleryCard` · pack
`migration/blocks/UBTConnect.Directory_Household_Blocks.Household_GalleryCard.md`.

| Input                            | Type                    | Prop                              | Default |
| -------------------------------- | ----------------------- | --------------------------------- | ------- |
| SubdivisionHousehold_GalleryCard | UI_SubdivisionHousehold | `subdivisionHouseholdGalleryCard` | `{}`    |
| ItemsPerRow                      | Integer                 | `itemsPerRow`                     | `2`     |

Event: `Event_OnClick` → `onEventOnClick`. Placeholders: none. Children: ImageCard_LazyLoading, UBT_LazyImage,
ImageCard__Content.

## Captures

| Capture | Source                                                                         |
| ------- | ------------------------------------------------------------------------------ |
| v1      | SupperMeeting_Carousel/default (pack: wrapper only)                            |
| v2      | SupperMeeting_Details/default, first card (UBT_LazyImage collapsed: own tests) |

Mock households are neutral (`Household_GalleryCard_List/mockData.ts`); the captured texts are masked.
