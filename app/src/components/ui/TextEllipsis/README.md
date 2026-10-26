# TextEllipsis

OutSystems: `UBTConnectLibrary.ConnectPatterns.TextEllipsis` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.TextEllipsis.md`

| Input           | Type | Prop              | Default |
| --------------- | ---- | ----------------- | ------- |
| Text            | Text | `text`            | `''`    |
| ExtendedClasses | Text | `extendedClasses` | `''`    |

Events, placeholders, child blocks: none. One expression `span.ubt-text-ellipsis.text-ellipsis` + ExtendedClasses.

## Captured variants (2; 2 tested)

| Capture | Source                                       | What it shows      |
| ------- | -------------------------------------------- | ------------------ |
| v1      | CommunityBusinessDetails_CoomingSoon/default | StaticInput prompt |
| v2      | CountryList/default                          | another prompt     |

## Not captured

- `ExtendedClasses`: tested in `TextEllipsis.test.tsx`.
