# Card_Template

OutSystems: `Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template` · pack
`migration/blocks/Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template.md` · compiled source
`migration/screens/EventDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template.mvc.js`

| Input              | Type | Prop                | Default |
| ------------------ | ---- | ------------------- | ------- |
| In_MainColorVar    | Text | `inMainColorVar`    | `''`    |
| In_MilestoneTypeId | Text | `inMilestoneTypeId` | `''`    |

Placeholders `Placeholder_Icon`, `Placeholder_Title`, `Placeholder_Content` → `placeholderIcon`, `placeholderTitle`,
`placeholderContent`. Event `OnClick` → `onOnClick`.

Colours: GetCSSVarFromMainColor (`../lib/actions.ts`, controller.js:2234-2262) → `var(--orbit-<color>-<shade>)`; border
shade 2, background shade 1, text shade 10. Title margin 0 for OrbitMilestoneType Break.

## Captured variants (3; 3 tested)

| Capture | Source               | What it shows                                  |
| ------- | -------------------- | ---------------------------------------------- |
| v1      | EventDetail/default  | Card_Milestone, accommodation (purple), button |
| v2      | EventDetail/default  | Card_Milestone, meeting (green), time only     |
| v3      | OrbitLanding/default | Card_Event (purple), dates and location        |

Not captured: the Break title margin (tested with `it`).

## Not settled / original behaviour

- The frame and each placeholder carry their own click handler, without stopPropagation: one click inside a placeholder
  raises OnClick twice (known-original-bugs.md B7). Kept 1:1.
