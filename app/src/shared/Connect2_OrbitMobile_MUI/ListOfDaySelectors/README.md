# ListOfDaySelectors

OutSystems: `Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors` · pack
`migration/blocks/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors.md` · source
`migration/screens/EventDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors.mvc.js`

| Input           | Type                     | Prop              | Default |
| --------------- | ------------------------ | ----------------- | ------- |
| DateList        | RecordList DayFilterList | `dateList`        | `[]`    |
| ShowInWeekday   | Boolean                  | `showInWeekday`   | `false` |
| ReplaceSunday   | Boolean                  | `replaceSunday`   | `false` |
| AddWeekdayBelow | Boolean                  | `addWeekdayBelow` | `false` |

Event `ClickedDate(Event_MilestoneTimeTypeId, Event_SelectedDate, Event_Position)` → `onClickedDate` (parameter
names from the caller EventDateSelection.mvc.js:204). Record type `DayFilter` (`../lib/structures.ts`).

- View (:173-305): List `list list-group event-date-selector-list` (animateItems false, `disable-virtualization`);
  per record `event-date-selector-cont` (click) > DaySelector (IsSelected) with the digit, then with AddWeekdayBelow
  the weekday letter (`event-date-selector-weekday`).
- Digit: ShowInWeekday ? GetFormattedDate_Weekday(DateGroup, True, ReplaceSunday) : GetFormattedDate_Single(DateGroup,
  TimeFormat.Day). Ported in `../lib/actions.ts` from Connect2_OrbitMobile_MUI.controller.js and the module script
  `TimeFormat` (`migration/runtime-sources/Connect2_OrbitMobile_MUI.TimeFormat.js`, fetched 2026-10-16).
- Click: ClickedDate(MilestoneTimeType.DAY, DateGroup, current row number).

## Captured variants (1 tested)

| Capture | Source              | What it shows                                                   |
| ------- | ------------------- | --------------------------------------------------------------- |
| v1      | EventDetail/default | three days, the first selected, weekday letter below (masked •) |

The test also compares the nested DaySelectors with DaySelector v1 / v2.

## Not captured / not settled

- ShowInWeekday / ReplaceSunday (story `Weekdays`, tests): from the compiled code.
- The capture masks the weekday letters below. The mock dates are fictional.
- OutSystems hands a Date to the JS nodes as a JS Date; the port reads it as a local-midnight date (`parseOsDate`).
  The day of month and weekday use local getters as in the JS; GetFormattedDate_Single's month / year parts use UTC
  getters (TimeFormat.js:42-46, 90-92) and are not used by this block.
