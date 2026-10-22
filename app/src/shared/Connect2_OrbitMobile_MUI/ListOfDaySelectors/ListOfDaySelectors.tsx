// @os-block Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { DaySelector } from '../DaySelector';
import { getFormattedDate_Single, getFormattedDate_Weekday } from '../lib/actions';
import { MilestoneTimeType, TimeFormat } from '../lib/staticEntities';
import type { DayFilter } from './types';

export interface ListOfDaySelectorsProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** DateList (DayFilterList): one day per record. */
  dateList?: readonly DayFilter[];
  /** ShowInWeekday: the day shows its weekday letter instead of the day of month (default false). */
  showInWeekday?: boolean;
  /** ReplaceSunday: Sunday reads "Lord's Day Meal" (first letter "L") (default false). */
  replaceSunday?: boolean;
  /** AddWeekdayBelow: weekday letter under each day (default false). */
  addWeekdayBelow?: boolean;
  /** Event ClickedDate(Event_MilestoneTimeTypeId, Event_SelectedDate, Event_Position). */
  onClickedDate?: (eventMilestoneTimeTypeId: string, eventSelectedDate: string, eventPosition: number) => void;
}

/** Row of day selectors of the Orbit event date filter (ListOfDaySelectors.mvc.js view :173-305): List
    `list list-group event-date-selector-list` (no animation, virtualization disabled) over DateList; per day a
    clickable `event-date-selector-cont` with DaySelector (IsSelected = the record's) whose digit is
    GetFormattedDate_Weekday(DateGroup, True, ReplaceSunday) when ShowInWeekday, else GetFormattedDate_Single(DateGroup,
    TimeFormat.Day); with AddWeekdayBelow the weekday letter follows in `event-date-selector-weekday`. A click raises
    ClickedDate(MilestoneTimeType.DAY, DateGroup, row number). */
export function ListOfDaySelectors({
  id,
  dateList = [],
  showInWeekday = false,
  replaceSunday = false,
  addWeekdayBelow = false,
  onClickedDate,
}: ListOfDaySelectorsProps) {
  return (
    <OSBlock name="Orbit_Generic_Blocks.ListOfDaySelectors" id={id}>
      <OSList
        source={dateList}
        keyOf={(day, index) => `${day.DateGroup ?? ''}-${String(index)}`}
        className="list list-group event-date-selector-list"
        animateItems={false}
        disableVirtualization
      >
        {(day, index) => {
          const date = day.DateGroup ?? '';
          return (
            <div
              className="event-date-selector-cont"
              data-container=""
              style={{ cursor: 'pointer' }}
              onClick={() => onClickedDate?.(MilestoneTimeType.DAY, date, index)}
            >
              <DaySelector isSelected={day.IsSelected ?? false}>
                <span data-expression="">
                  {showInWeekday
                    ? getFormattedDate_Weekday(date, true, replaceSunday)
                    : getFormattedDate_Single(date, TimeFormat.Day)}
                </span>
              </DaySelector>
              {addWeekdayBelow && (
                <span className="event-date-selector-weekday" data-expression="">
                  {getFormattedDate_Weekday(date, true, replaceSunday)}
                </span>
              )}
            </div>
          );
        }}
      </OSList>
    </OSBlock>
  );
}
