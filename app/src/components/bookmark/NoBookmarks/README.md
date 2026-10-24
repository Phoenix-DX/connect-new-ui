# NoBookmarks

OutSystems: `Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks` · pack
`migration/blocks/Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks.md` (compiled source
`migration/blocks/sources/Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks.mvc.js`)

| Input       | Type    | Prop          | Default |
| ----------- | ------- | ------------- | ------- |
| IsToDisplay | Boolean | `isToDisplay` | `false` |

Events: none. Placeholders: `TitlePlaceholder` → `titlePlaceholder`, `TextPlaceholder` → `textPlaceholder`.

Markup (view :127-200): when IsToDisplay, ConnectBlankSlate (`../../Connect2_LegacyShared/ConnectBlankSlate`) with the
static image `img/Connect2_LegacyShared.bookmark_unavailable_icon.svg` (class OSFillParent) and the two placeholders.

## Captured variants (1 distinct; 1 tested)

| Capture | Source                   | What it shows                                     |
| ------- | ------------------------ | ------------------------------------------------- |
| v1      | BookmarksByGroup/loading | shown (blank slate content: ConnectBlankSlate v1) |

## Not captured

- IsToDisplay False (empty wrapper): tested with `it`.
