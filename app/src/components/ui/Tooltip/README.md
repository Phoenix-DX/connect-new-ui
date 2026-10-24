# Tooltip (OutSystems UI)

OutSystems UI: `OutSystemsUI_2_23.Content.Tooltip` · pack `migration/blocks/OutSystemsUI_2_23.Content.Tooltip.md` ·
compiled source `migration/blocks/sources/OutSystemsUI_2_23.Content.Tooltip.mvc.js`

| Input         | Type        | Prop            | Default           |
| ------------- | ----------- | --------------- | ----------------- |
| Position      | Position Id | `position`      | `Position.Right`  |
| StartsOpen    | Boolean     | `startsOpen`    | `false`           |
| Trigger       | Trigger Id  | `trigger`       | `Trigger.OnHover` |
| ExtendedClass | Text        | `extendedClass` | `''`              |

Events `OnToggle(TooltipId, IsOpened)` → `onOnToggle`, `Initialized(TooltipId)` → `onInitialized`. Placeholders
`Content` → `content`, `Tooltip` → `tooltip`.

Stack decision (`osui:Tooltip`): hand-written, no library. Ported from `OutSystemsUI_2_23.OutSystemsUI.js` Tooltip
(:11634-11963) and Balloon (:2060-2360). The port covers:

- IsHover = not a phone and Trigger OnHover (or empty).
- Classes `--is-hover`, `--is-open`, `osui-balloon--is-open`, the placement class.
- a11y (role button / tooltip, aria-describedby, tabindex, aria-hidden).
- Hover with balloon hover kept on desktop, click otherwise, focus / blur / Escape / Tab when not hover.
- Body click and other balloons close it.
- `--osui-balloon-width: max-content`, `--osui-balloon-shape` (Sharp → none).

Positioning (`position.ts`) replaces Floating UI: placement, offset and arrow as OSUI configures it.

## Captured variants

None: never rendered in a capture (HostSurvey). Built from the compiled view and the provider.

## Not settled

- Floating UI's flip / shift / autoUpdate are not reproduced (the component places the balloon once each time it opens).
- Device type comes from the body classes (`phone`, `desktop`) the shell sets, as OSUI DeviceInfo reads them.
- Position changes after build re-place the balloon at the next open only.
