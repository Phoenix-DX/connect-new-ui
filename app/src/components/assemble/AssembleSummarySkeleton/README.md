# AssembleSummaryDetailHeader_Skeleton

OutSystems: `Connect2_Assemble_MUI.AssembleSkeleton.AssembleSummaryDetailHeader_Skeleton` · pack
`migration/blocks/Connect2_Assemble_MUI.AssembleSkeleton.AssembleSummaryDetailHeader_Skeleton.md` · source
`migration/blocks/sources/Connect2_Assemble_MUI.AssembleSkeleton.AssembleSummaryDetailHeader_Skeleton.mvc.js`

No inputs, events or actions. Placeholders `Placeholder_Image`, `Placeholder_SubtitleTop`, `Placeholder_Title`,
`Placeholder_Subtitle_Bottom`, `Placeholder_Right`, `Placeholder_Location` → `placeholderImage`,
`placeholderSubtitleTop`, `placeholderTitle`, `placeholderSubtitleBottom`, `placeholderRight`, `placeholderLocation`.

## Captured variants (1; 1 tested)

| Capture | Source                 | What it shows                                  |
| ------- | ---------------------- | ---------------------------------------------- |
| v1      | AssembleEvents/loading | loading card (nested NC_Result_Item__Card, ×6) |

The pack capture stops at the nested card; the test also compares the card against NC_Result_Item__Card's v1 (taken
from this very instance). `NC_Result_Item__Card__Location` is an own block of AssembleEvents (not in the foundation
queue): `PendingBlock` in the story.
