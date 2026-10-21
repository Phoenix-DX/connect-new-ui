# Columns3

OutSystems UI: `OutSystemsUI_2_23.Adaptive.Columns3` · pack `migration/blocks/OutSystemsUI_2_23.Adaptive.Columns3.md`

| Input          | Type                | Prop             | Default             |
| -------------- | ------------------- | ---------------- | ------------------- |
| GutterSize     | Text (GutterSize)   | `gutterSize`     | `GutterSize.Base`   |
| TabletBehavior | Text (BreakColumns) | `tabletBehavior` | `BreakColumns.None` |
| PhoneBehavior  | Text (BreakColumns) | `phoneBehavior`  | `BreakColumns.None` |
| ExtendedClass  | Text                | `extendedClass`  | `''`                |

Events: none. Placeholders: `Column1/2/3` → `column1/2/3`. Pure markup, class string as compiled
(`"columns columns3 " + GutterSize + " tablet-" + …`).

## Captured variants (14 distinct; 4 tested)

| Capture | Source                       |
| ------- | ---------------------------- |
| v1      | ContactByEmailMember/default |
| v2      | ContactUsMenu/default        |
| v3–v4   | CountryDetails/default       |

`UBTConnectLibrary/Columns_Three` renders all captured instances. Its test checks v2 and v4 again.

## Not captured

- Break behaviours other than `break-none`.
