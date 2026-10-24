# LazyImage

OutSystems: `UBTConnectLibrary.ConnectPatterns.LazyImage` · pack
`migration/blocks/UBTConnectLibrary.ConnectPatterns.LazyImage.md`

| Input            | Type                       | Prop              | Default                                |
| ---------------- | -------------------------- | ----------------- | -------------------------------------- |
| ImageURL         | Text                       | `imageURL`        | `''`                                   |
| In_ImageSize     | LazyImageSize              | `inImageSize`     | `{}`                                   |
| FallbackOptions  | AvatarImageFallbackoptions | `fallbackOptions` | `{}` (FontSize `UBT_FontSize.Base`)    |
| FallbackPadding  | SpacingOptions             | `fallbackPadding` | `{}`                                   |
| In_BorderOptions | ImageBorderOptions         | `inBorderOptions` | `{}` (BorderRadius `UBT_Shape.Circle`) |
| HasErrorMessage  | Boolean                    | `hasErrorMessage` | `false`                                |
| ExtendedClass    | Text                       | `extendedClass`   | `''`                                   |

Events: none. Placeholders: none.

Structure: SkeletonSection (loading while the image loads) › CustomContainer with the image.

- The image is `hidden` in three cases: there is no image, the image loads, or the image failed.
- In those cases, the fallback CustomContainer (`--no-image`, skeleton element) shows:
  1. Initials.
  2. Else, when `SVG` is set: InlineSVG (no inputs, as compiled).
  3. Else: the icon and, when HasErrorMessage is true, the message.

`getClasses_LazyImageSize_Dev` (`../lib/actions.ts`) gives the size classes.

Lifecycle (controller):

- OnReady runs on mount and on every new ImageURL, as OnParametersChanged.
- OnReady resets the error, sets Local_ImageURL, and sets isLoading = ImageURL <> "".
- The load and error events of the image run OnLoad and OnError. The error event runs only with a `src`.

Static app images come from `osImage()` (`src/legacy/os/os-assets.ts`); the mock data has no user photo URLs, so
screens show the fallback.

## Captured variants (50 distinct; 4 tested)

| Capture | Source                              | What it shows                                                                     |
| ------- | ----------------------------------- | --------------------------------------------------------------------------------- |
| v1      | ContactByEmailMember/default (pack) | wrapper and skeleton                                                              |
| v2      | ContactByEmailMember/default        | avatar fallback with icon                                                         |
| v3      | SupperMeeting_Carousel/default      | fallback with the error message                                                   |
| v4      | CountryDetails/default              | loaded image (test after the load event; jsdom does not load images, so no story) |

## Not captured

- Initials and SVG fallbacks, the error path and a new ImageURL: from the compiled code, tested in `LazyImage.test.tsx`.
- IsViewRestoredFromCache (OnInitialize) only sets isLoading before OnReady. OnReady overwrites isLoading before the
  first paint. The React component does not read IsViewRestoredFromCache (no router needed).
