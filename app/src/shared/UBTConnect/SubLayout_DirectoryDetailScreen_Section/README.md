# SubLayout_DirectoryDetailScreen_Section

OutSystems: `UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section` · pack
`migration/blocks/UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.md` · compiled source
`migration/screens/ContactUsDetails/analysis/sources/pretty/UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc.js`

| Input            | Type            | Prop              | Default            |
| ---------------- | --------------- | ----------------- | ------------------ |
| In_Title         | Text            | `inTitle`         | `''`               |
| In_PaddingTop    | Text (UBT_Size) | `inPaddingTop`    | `'s'` (Small, :20) |
| In_PaddingBottom | Text (UBT_Size) | `inPaddingBottom` | `'s'` (Small, :26) |

Placeholder `Placeholder_SectionContent` → `children`. Events: none.

## Captured variants (1; 1 tested)

| Capture | Source                   | What it shows                         |
| ------- | ------------------------ | ------------------------------------- |
| v1      | ContactUsDetails/default | no title, default paddings, form body |

Inner markup (nested in the capture) follows the compiled view and the ContactUsDetails dom (`b7-b1-Content`:
`background-neutral-0 padding-x-base padding-top-s padding-bottom-s`). Tests with `it` cover the title branch.
