# AvatarImage

OutSystems: `UBTConnectLibrary.ConnectPatterns.AvatarImage` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.AvatarImage.md`
(the pack lists only two inputs; `In_AvatarImage` comes from the compiled model)

| Input           | Type              | Prop             | Default            |
| --------------- | ----------------- | ---------------- | ------------------ |
| In_AvatarImage  | AvatarImage       | `inAvatarImage`  | `{}`               |
| In_SizeId       | UBT_AvatarSize Id | `inSizeId`       | `''`               |
| In_BorderRadius | UBT_Shape Id      | `inBorderRadius` | `UBT_Shape.Circle` |

Events, placeholders: none. The structure `AvatarImage` is re-exported as `AvatarImageRecord` (it shares the block's
name). URL set → CustomContainer (Neutral5 Small border, In_BorderRadius, skeleton) with an `<img data-image>`.
URL empty → CustomContainer from FallbackOptions (background, border colour/size, font colour, font size default Base,
SemiBold). The CustomContainer holds, in order of precedence, `span.ubt-avatar-image__initials`, `InlineSVG` (with no input, as compiled:
`UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc.js:341`, BrowseCountries copy) or an `Icon` (IconId, FontColor).

## Captured variants (1 in the pack + 3 whole; 4 tested)

| Capture | Source                          | What it shows                        |
| ------- | ------------------------------- | ------------------------------------ |
| v1      | BrowseCountries/default         | country flag (pack)                  |
| v2      | BrowseCountries/default (whole) | v1 with its image                    |
| v3      | Notes/loading (whole)           | icon fallback, size xxs              |
| v4      | Notifications/default (whole)   | empty fallback record (Icon `text-`) |

## Not captured

- Initials and SVG fallbacks, `In_BorderRadius`: from the compiled view, tested in `AvatarImage.test.tsx`.
