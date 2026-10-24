# Separator (OutSystems UI)

OutSystems: `OutSystemsUI_2_23.Utilities.Separator` · pack `migration/blocks/OutSystemsUI_2_23.Utilities.Separator.md`
(survey only: compiled source in `capture/survey-UBTConnect.json`)

| Input         | Type    | Prop            | Default          |
| ------------- | ------- | --------------- | ---------------- |
| IsVertical    | Boolean | `isVertical`    | `false`          |
| Space         | Space   | `space`         | `Space.Base`     |
| Color         | Color   | `color`         | `Color.Neutral4` |
| ExtendedClass | Text    | `extendedClass` | `''`             |

Events: none. Placeholders: none. Markup (compiled view): a container `padding-top-<Space> padding-bottom-<Space>`
(vertical: `separator-wrapper full-height padding-right-<Space> padding-left-<Space>`) around the line
`separator separator-horizontal|separator-vertical background-<Color> <ExtendedClass>`. Identifier values from
the original CSS (`components/ui/lib/staticEntities.ts`).

## Captured variants (0)

Used by AcceptPendingPolicies and MessageList, never captured. Stories `Default` and `Vertical` show the compiled
markup, tested in `Separator.test.tsx`.
