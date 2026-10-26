# ImageCard_LazyLoading

OutSystems: `UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading` · pack `migration/blocks/UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.md`

| Input               | Type                     | Prop                 | Default |
| ------------------- | ------------------------ | -------------------- | ------- |
| In_CardTypeId       | Text (UBT_ImageCardType) | `inCardTypeId`       | `''`    |
| In_ItemsPerRow      | Integer                  | `inItemsPerRow`      | `0`     |
| In_ShowAvatarList   | Boolean                  | `inShowAvatarList`   | `false` |
| In_ExtendedClass    | Text                     | `inExtendedClass`    | `''`    |
| In_IsBookmarked     | Boolean                  | `inIsBookmarked`     | `false` |
| In_BookmarkModifier | Text                     | `inBookmarkModifier` | `''`    |

Events: Event_Click → `onEventClick` (the card container).
Placeholders: LazyImage_Placeholder → `lazyImagePlaceholder`, Placeholder_ImageTag → `placeholderImageTag`, AvatarList → `avatarList`, Placeholder_Content → `placeholderContent`.

## Captured variants (3 tested)

| Capture | Source                                            | What it shows                                |
| ------- | ------------------------------------------------- | -------------------------------------------- |
| v1      | pack variant 1, HouseholdCarousel/default         | wrapper only                                 |
| v2      | `HouseholdCarousel/analysis/dom/default.html` [0] | bookmarked detail card (placeholders nested) |
| v3      | `Locality_Details/analysis/dom/default.html` [0]  | list card, avatar list, `bookmark--rounded`  |

## Not captured / not settled

- Gallery card (GetGalleryBackgroundClass by In_ItemsPerRow, small padding, xxs text) and ListWithImages / Sublist: compiled code only (UBTConnectLibrary.controller.js:3339, 3694, 5770, 6488, 7093). The gallery card is tested.
- Ported actions (`lib/actions.ts`): GetClasses_ImageCard, GetClasses_BackgroundImageSize, GetGalleryBackgroundClass, GetBorderOptions_ImageCard, GetTextOptions_ImageCard, GetSpacingOptions_ImageCardContent. UBT_ImageCardType values: TST.
