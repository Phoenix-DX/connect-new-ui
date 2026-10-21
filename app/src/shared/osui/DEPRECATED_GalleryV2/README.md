# DEPRECATED_GalleryV2

OutSystems UI: `OutSystemsUI_2_23.Adaptive.DEPRECATED_GalleryV2` · pack
`migration/blocks/OutSystemsUI_2_23.Adaptive.DEPRECATED_GalleryV2.md` · compiled source
`migration/screens/MyBookmarks/analysis/sources/pretty/OutSystemsUI_2_23.Adaptive.DEPRECATED_GalleryV2.mvc.js` · stack
`osui:Gallery` = hand-written component with the captured DOM and classes (no library).

| Input          | Type         | Prop             | Default      |
| -------------- | ------------ | ---------------- | ------------ |
| ItemInPhone    | Phone Number | `itemInPhone`    | `'1'`        |
| ItemsInTablet  | Integer      | `itemsInTablet`  | `3`          |
| ItemsInDesktop | Integer      | `itemsInDesktop` | `4`          |
| GutterSize     | Text         | `gutterSize`     | `Space.Base` |

Placeholder `Content` → `children` (element `osui-deprecated grid-gallery`). Ported: OnReady / OnParametersChanged →
InitJS (:313-339) as the inline style: `--grid-<device>`, `--grid-gap: var(--space-<GutterSize>)`, `--grid-list-<device>`
= count + 1 (JS `++` on the parameters).

## Captured variants (2 tested)

| Capture | Source              | What it shows                               |
| ------- | ------------------- | ------------------------------------------- |
| v1      | MyBookmarks/default | household bookmarks album: 2 columns, gap s |
| v2      | MyBookmarks/default | division bookmarks album: 2 columns, gap s  |

The cards are the caller's markup (MyBookmarks_Album), written in the stories as captured with neutral titles.

## Not captured / not settled

- Defaults and parameter changes: tested with `it`. A non-numeric ItemInPhone gives `NaN` for `--grid-list-phone`, as
  the original script does.
