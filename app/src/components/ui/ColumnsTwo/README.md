# Columns_Two

OutSystems: `UBTConnectLibrary.BasePatterns.Columns_Two` · pack `migration/blocks/UBTConnectLibrary.BasePatterns.Columns_Two.md`

| Input           | Type          | Prop                         | Default |
| --------------- | ------------- | ---------------------------- | ------- |
| ColumnOptions   | ColumnOptions | `columnOptions` (`types.ts`) | `{}`    |
| ExtendedClasses | Text          | `extendedClasses`            | `''`    |

Events: none. Placeholders: `Left` → `left`, `Right` → `right`. Child block: `osui/Columns2`.

GutterSize = ConvertUbtSizeToGutterSize(SpacingSize) (empty when no spacing); ExtendedClass = `ubt-columns` +
ExtendedClasses + `ubt-columns--two-columns` + GetClasses_Column.

## Captured variants

| Capture | Source                  | Note                                       |
| ------- | ----------------------- | ------------------------------------------ |
| v1      | BrowseCountries/default | the only distinct variant (1005 instances) |

The Columns2 captures (all rendered by this block) are also checked here: `osui/Columns2/__captures__/v2.html` and
`v3.html` (gutter from SpacingSize, vertical align).

## Not captured

- `ColumnSizes.Left/Right > 0`: `--fixed-width` class and the `--_ubt-column-width` custom property set by the
  SetLocalVariable_ColumnSize JS (`placeholder.style = placeholder.style + "; " + Style`). The browser drops the
  invalid first part and keeps the custom property. Built from the compiled code, tested in `Columns_Two.test.tsx`.
