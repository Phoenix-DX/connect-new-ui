# Animate

OutSystems: `OutSystemsUI_2_23.Interaction.Animate` · pack `migration/blocks/OutSystemsUI_2_23.Interaction.Animate.md`

| Input         | Type                 | Prop            | Default |
| ------------- | -------------------- | --------------- | ------- |
| AnimationType | Text (AnimationType) | `animationType` | `''`    |
| Delay         | Integer              | `delay`         | `0`     |
| Speed         | Text (Speed)         | `speed`         | `''`    |

Placeholder `Content` → `children`. Class `"animate " + AnimationType + " " + Speed`, style
`-webkit-animation-delay` / `animation-delay` (the browser keeps the second). No client actions; the OSUI provider adds
no behaviour to this block.

## Captured variants (1 distinct; 1 tested)

| Capture | Source              |
| ------- | ------------------- |
| v1      | MyBookmarks/loading |
