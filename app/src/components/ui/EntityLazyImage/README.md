# UBT_LazyImage

OutSystems: `UBTConnect_Utils.CW_Image.UBT_LazyImage` · pack `migration/blocks/UBTConnect_Utils.CW_Image.UBT_LazyImage.md`

| Input           | Type                  | Prop              | Default |
| --------------- | --------------------- | ----------------- | ------- |
| ImageURL        | Text                  | `imageURL`        | `''`    |
| EntityId        | Text                  | `entityId`        | `''`    |
| EntityType      | Text (Connect_Entity) | `entityType`      | `''`    |
| ImageSize       | LazyImageSize         | `imageSize`       | `{}`    |
| ExtendedClass   | Text                  | `extendedClass`   | `''`    |
| In_BorderRadius | Text (UBT_Shape)      | `inBorderRadius`  | `''`    |
| In_HighRes      | Boolean               | `inHighRes`       | `false` |
| HasErrorMessage | Boolean               | `hasErrorMessage` | `false` |

The pack lists 4 inputs; the 8 above are from the compiled model (UBT_LazyImage.mvc.js:12-95). Events, placeholders:
none. Children: SkeletonSection (In_IsLoading = not isFetched) around LazyImage.

- OnInitialize (`onInitialize.ts`, mvc.js:381-717):
  - Fallback cyan colours, Display font, entity icon (GetEntityType_Icon), message "Sorry, no photo available" when
    HasErrorMessage, padding Base.
  - The Height switch, then the Width switch, set font / icon size and the requested image size (Small / Medium /
    Large). The message is cleared for Small and Medium.
  - Not In_HighRes → Medium. In_BorderRadius.
  - A Member gets the circle, a small neutral-3 border and the `inline-block ubt-avatar-image` classes.
- OnReady (:719-785):
  - An ImageURL is used as is.
  - Without an ImageURL, a valid EntityId (not "", not "0") with an EntityType and an image type
    (GetImageType_FromEntity) asks Cache_SignedImageURL_Get. It is in `UBTConnect_Utils/lib/actions.ts`: memory cache
    `getCacheableObjectInBulk`, TTL 300 s, timeout 10, bulk of 15, server action GetSignedImagesInBulk. In this case,
    the loading skeleton shows until Cache_SignedImageURL_Get answers.
  - A failed GetSignedImagesInBulk answers "" through the memory cache (`api/client/cache.ts`; every
    `offline` capture shows the fallback, not the skeleton).
  - If an exception occurs, the skeleton stays (the original OnReady stops at it).
  - The block applies the synchronous part before the first paint.
- OnParametersChanged (:812-845, CR-SupperMeeting_Details-1) runs on any input change:
  - A new EntityId resets LocalImageURL and isFetched and runs OnInitialize again.
  - Then OnReady always runs with the new inputs.
  - Example: a data-fed card that first renders without an EntityId asks for its signed URL once the id arrives.

## Captured variants (51 distinct; 2 tested)

| Capture | Source                                                 |
| ------- | ------------------------------------------------------ |
| v1      | ContactByEmailMember/default (pack: wrapper only)      |
| v2      | CountryDetails/default (country flag after load; `it`) |

Most other captures (members, localities, households) come from the signed-image path: their image URLs were removed
from the captures as person data (`data-masked-src="user-image"`).

## Not captured / not settled

- CR-W2A-1 applied (wave 2C). The mock (`mocks.ts`) answers an empty signed URL for every image, so the fallback icon
  shows; TST showed real photos for most members / households / localities (masked in the captures). Which image the mock
  shows is open: question Q-W2C-1.
- FeedItem's fallback icon: UBT_Icons.FeedItem = `connect-icon-feed`, confirmed by the TST value
  (migration/knowledge/static-entities.md "TST values"; answers Q-W2A-2). No capture shows it.
- Static values from the original CSS, not captured: ImageSize ExtraSmall_32 `xs`, Medium_60 `m`; IconSize Medium_20
  `icon-medium`; FontSize Heading6 `h6`; icons PartnerExchange, ImageGallery. Connect_Entity and ImageSize identifiers
  are opaque constants (compared or sent only).
