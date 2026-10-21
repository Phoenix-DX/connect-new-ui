# NC_Result_Item_Badge

OutSystems: `Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item_Badge` · pack
`migration/blocks/Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item_Badge.md` · compiled source
`migration/blocks/sources/Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item_Badge.mvc.js`

| Input           | Type | Prop              | Default                       |
| --------------- | ---- | ----------------- | ----------------------------- |
| BackgroundColor | Text | `backgroundColor` | `'var(--color-neutral-2)'`    |
| Size            | Text | `size`            | `'40'` (no unit, as compiled) |

Placeholder `Icon` → `children`. No events.

## Captured variants (1; 1 tested)

| Capture | Source                 | What it shows                          |
| ------- | ---------------------- | -------------------------------------- |
| v1      | AssembleEvents/loading | 73px badge, default colour, empty icon |

## Not settled

- The default Size `40` has no unit, so the browser drops height and width (as in the original); callers pass `73px`.
