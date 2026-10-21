# Badge

OutSystems: `UBTConnectLibrary.OutSystemsUIOverrides.Badge` · pack
`migration/blocks/UBTConnectLibrary.OutSystemsUIOverrides.Badge.md`

| Input         | Type             | Prop            | Default             |
| ------------- | ---------------- | --------------- | ------------------- |
| Number        | Long Integer     | `number`        | `'0'`               |
| Color         | Text (UBT_Color) | `color`         | `UBT_Color.Primary` |
| Size          | Text             | `size`          | `''`                |
| Shape         | Text (Shape)     | `shape`         | `Shape.Rounded`     |
| IsLight       | Boolean          | `isLight`       | `false`             |
| ExtendedClass | Text             | `extendedClass` | `''`                |
| MaxNumber     | Integer          | `maxNumber`     | `9`                 |

Events, placeholders: none. Class = `"ubt-badge badge" + If(Size <> "", " badge-" + Size) + " border-radius-" + Shape

- If(IsLight, " " + GetClass_BackgroundColor(Color) + "-lightest text-" + Color + "-darker", " " +
  GetClass_BackgroundColor(Color)) + " " + ExtendedClass`, then the grid class `OSInline`(Badge.mvc.js:229-234).
Text =`If(Number <= MaxNumber, Number, MaxNumber + "+")`.

## Captured variants (2 distinct; 2 tested)

| Capture | Source                                       |
| ------- | -------------------------------------------- |
| v1      | BookmarksByGroup/default (bottom bar, red)   |
| v2      | Notifications/default (`badge-xs`, red-dark) |

The captures mask the numbers. Stories use neutral values. New static entity records: `Shape.Rounded`,
`UBT_Color.Red` (UBTConnectLibrary/lib/staticEntities.ts).

## Not captured

- IsLight (lightest/darker classes): from the compiled code, tested in `Badge.test.tsx`.
