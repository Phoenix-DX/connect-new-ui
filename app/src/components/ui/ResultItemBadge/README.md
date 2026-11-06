# NC_Result_Item_Badge

OutSystems: `Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item_Badge` · pack
`migration/blocks/Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item_Badge.md` · compiled source
`migration/sources/survey/Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item_Badge.mvc.js`

| Input           | Type | Prop              | Default                                           |
| --------------- | ---- | ----------------- | ------------------------------------------------- |
| BackgroundColor | Text | `backgroundColor` | `'var(--color-neutral-2)'`                        |
| Size            | Text | `size`            | `'40'` (no unit, as compiled; rendered as `40px`) |

Placeholder `Icon` → `children`. No events.

## Captured variants (1; 1 tested)

| Capture | Source                 | What it shows                          |
| ------- | ---------------------- | -------------------------------------- |
| v1      | AssembleEvents/loading | 73px badge, default colour, empty icon |

## Settled

- The default Size `40` has no unit. The original renders it as `height: 40px; width: 40px;` (AssembleDetail capture of
  2026-11-06, `migration/screens/AssembleDetail/analysis/dom/default.html`, the locality badge of
  AssembleEventDetail_LocalitySubdivisionList, whose Badge inputs are empty), so a Size without unit renders in px.
