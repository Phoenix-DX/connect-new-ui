# Tag (OutSystems UI)

OutSystems UI: `OutSystemsUI_2_23.Content.Tag` · pack `migration/blocks/OutSystemsUI_2_23.Content.Tag.md` · compiled
source `migration/screens/AssembleEvents/analysis/sources/pretty/OutSystemsUI_2_23.Content.Tag.mvc.js`

| Input         | Type     | Prop            | Default         |
| ------------- | -------- | --------------- | --------------- |
| Color         | Color Id | `color`         | `Color.Primary` |
| Size          | Size Id  | `size`          | `''`            |
| Shape         | Shape Id | `shape`         | `Shape.Rounded` |
| IsLight       | Boolean  | `isLight`       | `false`         |
| ExtendedClass | Text     | `extendedClass` | `''`            |

Placeholder `Tag` → `children`. No events. `Color.Primary` = `primary` (captured `background-primary`).

## Captured variants (2; 2 tested)

| Capture | Source                 | What it shows                            |
| ------- | ---------------------- | ---------------------------------------- |
| v1      | AssembleEvents/default | active period tab (`connect-tag-active`) |
| v2      | AssembleEvents/default | inactive period tab                      |
