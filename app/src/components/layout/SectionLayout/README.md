# SubLayout_Section

OutSystems: `UBTConnectLibrary.Layouts.SubLayout_Section` · pack
`migration/blocks/UBTConnectLibrary.Layouts.SubLayout_Section.md` · compiled source
`migration/screens/ContactUsDetails/analysis/sources/pretty/UBTConnectLibrary.Layouts.SubLayout_Section.mvc.js`

| Input           | Type            | Prop              | Default                  |
| --------------- | --------------- | ----------------- | ------------------------ |
| MarginTop       | Text (UBT_Size) | `marginTop`       | `'xs'` (ExtraSmall, :14) |
| ExtendedClasses | Text            | `extendedClasses` | `''`                     |

Placeholders `Title`, `Content` → `title`, `content`. Events: none (the CustomContainer Clicked handler is empty).

## Captured variants (1; 1 tested)

| Capture | Source                   | What it shows                                  |
| ------- | ------------------------ | ---------------------------------------------- |
| v1      | ContactUsDetails/default | inside SubLayout_DirectoryDetailScreen_Section |

In the capture, the CustomContainer content is a nested block. The inner markup (`margin-bottom-s` Title placeholder,
then Content) follows the compiled view and the ContactUsDetails dom (`b7-b2-Title`, `b7-b2-Content`). The inner markup
is tested with `it`.
