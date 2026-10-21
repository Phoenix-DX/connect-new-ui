# Card_Event

OutSystems: `Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event` · pack
`migration/blocks/Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event.md` · compiled source
`migration/screens/OrbitLanding/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event.mvc.js`

| Input           | Type                                      | Prop             | Default      |
| --------------- | ----------------------------------------- | ---------------- | ------------ |
| In_EventSummary | Event_ScreenRec (Connect2_OrbitMobile_BL) | `inEventSummary` | empty record |

Event `ClickedEvent(EventSummary)` → `onClickedEvent(eventSummary)`, raised by Card_Template's OnClick (so twice for a
click inside a placeholder, see Card_Template).

Child: Card_Template (In_MainColorVar = OrbitEventType.MainColorVar). Dates: GetFormattedDateTime (`../lib/actions.ts`,
controller.js:2770-2938) with weekday abbreviated, no time: "Fri 16 Oct 2026 - Sun 18 Oct 2026" (UTC parts of the wire
DateTime, as the JS node).

## Captured variants (1; 1 tested)

| Capture | Source               | What it shows                                                       |
| ------- | -------------------- | ------------------------------------------------------------------- |
| v1      | OrbitLanding/default | one event; the nested Card_Template is compared to Card_Template v3 |

Fixture: `fixtures.ts` (fictional event, captured word lengths).
