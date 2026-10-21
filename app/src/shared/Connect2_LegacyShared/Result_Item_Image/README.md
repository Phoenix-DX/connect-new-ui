# Result_Item_Image

OutSystems: `Connect2_LegacyShared.Utility.Result_Item_Image` · pack
`migration/blocks/Connect2_LegacyShared.Utility.Result_Item_Image.md`

| Input                         | Type                     | Prop                             | Default                    |
| ----------------------------- | ------------------------ | -------------------------------- | -------------------------- |
| In_ShowDescription            | Boolean                  | `inShowDescription`              | `false`                    |
| ShowPlaceholderForImage       | Boolean                  | `showPlaceholderForImage`        | `false`                    |
| In_ShowTag                    | Boolean                  | `inShowTag`                      | `false`                    |
| In_HasAction                  | Boolean                  | `inHasAction`                    | `false`                    |
| In_IsRoundImage               | Boolean                  | `inIsRoundImage`                 | `false`                    |
| In_BackgroundColor            | Text                     | `inBackgroundColor`              | `'var(--color-neutral-0)'` |
| In_Diameter                   | Integer                  | `inDiameter`                     | `70`                       |
| In_ResultType                 | Integer (ResultListType) | `inResultType`                   | `0`                        |
| In_Bucket / In_Path / In_Type | Text                     | `inBucket` / `inPath` / `inType` | `''`                       |
| In_SignedURL                  | Text                     | `inSignedURL`                    | `''`                       |
| In_HasPadding                 | Boolean                  | `inHasPadding`                   | `true`                     |
| In_HasBorder                  | Boolean                  | `inHasBorder`                    | `true`                     |
| In_IsNavigationLoading        | Boolean                  | `inIsNavigationLoading`          | `false`                    |
| CustomClass                   | Text                     | `customClass`                    | `''`                       |
| HtmlDataItem                  | Text                     | `htmlDataItem`                   | `''`                       |
| ItemHeight                    | Text                     | `itemHeight`                     | `''`                       |

Events: `OnClick_Item` → `onOnClickItem` (image and text columns). Placeholders: `ImagePlaceholder`,
`Title_Placeholder`, `Description_Placeholder`, `Tag_Placeholder`, `Result_Item_Placeholder`, `BookmarkNote` →
`imagePlaceholder`, `titlePlaceholder`, `descriptionPlaceholder`, `tagPlaceholder`, `resultItemPlaceholder`,
`bookmarkNote`. The photo carries `data-error-placeholder-src` for HandleImageLoadError.

## Captured variants (6 tested)

| Capture | Source                    | What it shows                                             |
| ------- | ------------------------- | --------------------------------------------------------- |
| v1      | BookmarksByGroup/default  | signed photo, description, tag, ItemOptionsMenu, 66px     |
| v2      | BookmarksByGroup/default  | no photo: default user image                              |
| v3      | BookmarksByGroup/default  | signed photo, no description                              |
| v4      | LegacyShareObject/default | ImagePlaceholder (UBT_LazyImage), no action               |
| v5      | LegacyShareObject/default | round default image, highlighted title, share icon action |
| v6      | LegacyShareObject/loading | navigation loading (`loading-item`, no background)        |

## Not captured / not settled

- Subdivision default image, round photo cropper, padding off, custom class: compiled view only, tested.
- **LoadPhotoAsync (controller :702-770)**: `useLoadPhotoAsync.ts`.
  - When In_SignedURL is empty and Bucket/Path/Type are unchanged, it reuses Last_SignedURL.
  - When In_SignedURL is empty and Bucket/Path/Type changed, it calls `GetCacheableSignedPhotoURL(Bucket, Path, Type)`
    (`../lib/actions.ts`, Connect2_LegacyShared.controller.js:3947-4115). That call uses the shell memory cache, type
    `Photos`, TTL 300 s. Misses go through GetBulkSignedPhotosURL → server action GetSignedPhotosInBulk.
  - The server action GetSignedPhotosInBulk is not in the API contract and was never recorded: **CR-W3Y-1**.
  - Until the server action is added, the React component makes no call. The block shows the photo only when the
    screen passes In_SignedURL, else the default image (as in v2 and v5).
  - Mock answer for the CR: `mocks.ts` (neutral landscape placeholder, mock-fixtures rule). Tested with that mock.
- `ItemOptionsMenu` (`Utility.ItemOptionsMenu`) and `Directory.HighlightSearch` are not built: PendingBlock in stories.
