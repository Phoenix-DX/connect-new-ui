# Card_Milestone

OutSystems: `Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone` · pack
`migration/blocks/Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.md` · compiled source
`migration/screens/EventDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc.js`

| Input                  | Type                                          | Prop                     | Default      |
| ---------------------- | --------------------------------------------- | ------------------------ | ------------ |
| In_MilestoneSummary    | Milestone_ScreenRec (Connect2_OrbitMobile_BL) | `inMilestoneSummary`     | empty record |
| IsOverrideMainColorVar | Text                                          | `isOverrideMainColorVar` | `''`         |
| IsSetUpMeals           | Boolean                                       | `isSetUpMeals`           | `false`      |

Event `ClickedMilestone(MilestoneSummary)` → `onClickedMilestone(milestoneSummary)`: from the card (OnHandle_ClickedMilestone,
needs a MilestoneId) and from View Guests (OnClick_Button: not for a host meal while IsSetUpMeals).

Child: Card_Template (In_MainColorVar = MainColorVar set once in OnInitialize, In_MilestoneTypeId = type Id). Content per
OrbitMilestoneType: transport (GetFormattedDateTimeById), meeting / meal at hall, meal, accommodation, hotel, break,
admin. Formatters in `../lib/actions.ts` (GetFormattedDateTime, GetFormattedDateTimeById, GetFormattedTime_FromDateTime).

## Captured variants (1; 1 tested, plus 2 nested)

| Capture | Source              | What it shows                                                                 |
| ------- | ------------------- | ----------------------------------------------------------------------------- |
| v1      | EventDetail/default | 2 instances; their Card_Template content = Card_Template v1 / v2 (`it` tests) |

Fixtures: `fixtures.ts` (accommodation and meeting as captured; meal host and flight not captured).

Not captured (tested with `it`, built from the compiled view): meeting with location / seat, meal, transport, hotel,
IsOverrideMainColorVar, IsSetUpMeals, the events.

## Not settled / original behaviour

- Admin milestone types (AdminMeeting…AdminBreak) are compiled but missing from the TST moduleinfo: their identifiers are
  `undefined` on TST and the admin branch never renders. Its time row class lacks a space
  (`orbit-card-content-infomargin-top-m`, kept).
- OnHandle_ClickedMilestone compares MilestoneId (not the type Id) with AccommodationHotel, so hotel cards raise
  ClickedMilestone (known-original-bugs.md B8).
- Transport rows pass Milestone `Type` (not the type Id) to GetFormattedDateTimeById, as compiled.
