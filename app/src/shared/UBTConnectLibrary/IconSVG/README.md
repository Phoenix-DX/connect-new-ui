# IconSVG

OutSystems: `UBTConnectLibrary.ConnectPatterns.IconSVG` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.IconSVG.md`

| Input     | Type             | Prop       | Default |
| --------- | ---------------- | ---------- | ------- |
| In_IconId | Text (UBT_Icons) | `inIconId` | `''`    |

Events and placeholders: none. One `<img>` per known SVG icon (`UBT_Icons.SVG_*`), nothing for other ids.

## Captured variants

| Capture | Source                         |
| ------- | ------------------------------ |
| v1      | Services/default (`SVG_HR100`) |

## Not captured / not settled

- The nine other icons: built from the compiled view. Their Ids are assumed equal to the record names, as captured for
  `SVG_HR100` and `SVG_ElGusto` (see `../lib/staticEntities.ts`).
- The SVG files are not in the captured assets: `osImage()` shows its "Image not captured" marker.
