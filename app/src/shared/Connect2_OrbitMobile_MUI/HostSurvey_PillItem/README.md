# HostSurvey_PillItem

OutSystems: `Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem` · pack
`migration/blocks/Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.md` · source
`migration/screens/EventDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc.js`

| Input            | Type    | Prop              | Default |
| ---------------- | ------- | ----------------- | ------- |
| In_IsDisabled    | Boolean | `inIsDisabled`    | `false` |
| In_IconClass     | Text    | `inIconClass`     | `''`    |
| In_PillText      | Text    | `inPillText`      | `''`    |
| In_IsSmallIcon   | Boolean | `inIsSmallIcon`   | `false` |
| In_ExtendedClass | Text    | `inExtendedClass` | `''`    |
| In_ExtendedStyle | Text    | `inExtendedStyle` | `''`    |

No events, placeholders or controller logic. View `:196-263`: container class `orbit-host-survey-pill` +
`orbit-host-survey-pill-disabled` (In_IsDisabled) or + " " + In_ExtendedClass; style "" when disabled else
In_ExtendedStyle; icon `icon <In_IconClass>` + `font-size-xs` / `font-size-base`; text with
`margin-left-s font-size-xs line-height-xs white-space-nowrap`.

## Captured variants (4 tested)

| Capture | Source              | What it shows                               |
| ------- | ------------------- | ------------------------------------------- |
| v1      | EventDetail/default | enabled "Confirmed" pill, small icon, style |
| v2      | HostSurvey/default  | disabled, couple icon                       |
| v3      | HostSurvey/default  | disabled, accommodation icon                |
| v4      | HostSurvey/default  | disabled, home icon "Ground Floor"          |

## Not captured / not settled

- The pack lists 8 distinct variants but prints 4 (the other 4 were not extracted). In_ExtendedClass non-empty and
  enabled without style are tested with `it`.
- The Icon widget's own `style` is the literal string `"icon"` with quotes (`:231`); the class is overridden by
  extendedProperties, so it has no visible effect.
