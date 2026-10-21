# ConnectBlankSlate

OutSystems: `Connect2_LegacyShared.Reusable.ConnectBlankSlate` · pack
`migration/blocks/Connect2_LegacyShared.Reusable.ConnectBlankSlate.md` (compiled source
`migration/screens/ConnectShare/analysis/sources/pretty/Connect2_LegacyShared.Reusable.ConnectBlankSlate.mvc.js`)

Inputs, events: none. Placeholders: `Image` → `image`, `Title` → `title`, `Subtitle` → `subtitle`.

Markup (view :110-160): `connect-blank-slate-container` > Image placeholder, Title placeholder
(`connect-blank-slate-title margin-top-base text-align-center`), Subtitle placeholder
(`connect-blank-slate-sub-title margin-top-s`). Callers render the image (`osImage(...)`) and texts.

## Captured variants (3 distinct; 3 tested)

| Capture | Source                   | What it shows                                       |
| ------- | ------------------------ | --------------------------------------------------- |
| v1      | BookmarksByGroup/loading | inside NoBookmarks: bookmark image, title, subtitle |
| v2      | ConnectShare/default     | share image, status message, empty subtitle         |
| v3      | ConnectShare/offline     | share image, empty status message                   |
