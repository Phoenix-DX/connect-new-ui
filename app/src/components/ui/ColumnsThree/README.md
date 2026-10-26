# Columns_Three

OutSystems: `UBTConnectLibrary.BasePatterns.Columns_Three` · pack
`migration/blocks/UBTConnectLibrary.BasePatterns.Columns_Three.md`

| Input           | Type          | Prop                         | Default |
| --------------- | ------------- | ---------------------------- | ------- |
| ColumnOptions   | ColumnOptions | `columnOptions` (`types.ts`) | `{}`    |
| ExtendedClasses | Text          | `extendedClasses`            | `''`    |

The pack lists no inputs. The inputs come from the compiled model (`ColumnOptions`, `ExtendedClasses`, local
`MainContainerClass = "ubt-columns"`).

Events: none. Placeholders: `Left`, `Middle`, `Right` → `left`, `middle`, `right`.
Child block: `osui/Columns3`.

The logic is the same as Columns_Two: GutterSize = ConvertUbtSizeToGutterSize(SpacingSize);
ExtendedClass = `ubt-columns` + ExtendedClasses + `ubt-columns--three-columns` + GetClasses_Column.

## Captured variants

| Capture | Source                       | Note                                      |
| ------- | ---------------------------- | ----------------------------------------- |
| v1      | ContactByEmailMember/default | the only distinct variant (208 instances) |

The Columns3 captures v1, v2 and v4 (all rendered by this block) are also checked here. New static entity records:
`UBT_ColumnBehaviour.ExpandMiddle` / `SameSize` (captured `ubt-columns-expand-middle` / `ubt-columns-same-size`).

## Not captured

- `ColumnSizes.Left/Middle/Right > 0` (OnReady SetLocalVariable_ColumnSize per column, Columns_Three.mvc.js:303-310):
  built from the compiled code like Columns_Two, tested in `Columns_Three.test.tsx`.
