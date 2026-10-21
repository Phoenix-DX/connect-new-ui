# Columns2

OutSystems UI: `OutSystemsUI_2_23.Adaptive.Columns2` · pack `migration/blocks/OutSystemsUI_2_23.Adaptive.Columns2.md`

| Input          | Type                | Prop             | Default             |
| -------------- | ------------------- | ---------------- | ------------------- |
| GutterSize     | Text (GutterSize)   | `gutterSize`     | `GutterSize.Base`   |
| TabletBehavior | Text (BreakColumns) | `tabletBehavior` | `BreakColumns.None` |
| PhoneBehavior  | Text (BreakColumns) | `phoneBehavior`  | `BreakColumns.None` |
| ExtendedClass  | Text                | `extendedClass`  | `''`                |

Events: none. Placeholders: `Column1` → `column1`, `Column2` → `column2`. No provider library (pure markup).
Class string kept verbatim (`"columns columns2 " + GutterSize + " tablet-" + …`, double spaces included).

## Captured variants (52 distinct; 4 tested)

| Capture | Source                  |
| ------- | ----------------------- |
| v1      | BrowseCountries/default |
| v2–v4   | BrowseDirectory/default |

All captured instances are rendered by `UBTConnectLibrary/Columns_Two`, whose test also checks v2 and v3.

## Not captured

- Break behaviours other than `break-none` (only that identifier value is evidenced).
