// @os-block Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection
import { useEffect, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ListOfDaySelectors } from '../../../shared/Connect2_OrbitMobile_MUI/ListOfDaySelectors';
import { MilestoneTimeType } from '../../../shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import type { DayFilter } from '../../../shared/Connect2_OrbitMobile_MUI/lib/structures';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import type { DateFilters } from '../types';

/* EventDateSelection (sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.mvc.js = ES; captured
   dom/default.html:198-246). Only this route uses it. */

/** TimeTypeEndFilter: the before / after edge selection. */
interface TimeTypeEndFilter {
  MilestoneTimetypeId: string;
  IsSelected: boolean;
}

interface LocalState {
  timeTypeEndFilter: TimeTypeEndFilter;
  dateList: DayFilter[];
}

const INITIAL: LocalState = { timeTypeEndFilter: { MilestoneTimetypeId: '', IsSelected: false }, dateList: [] };

export interface EventDateSelectionProps {
  /** OutSystems instance id of the block (`b1-$b7`). */
  id: string;
  /** In_DateList (DateFilterRec): read once in OnReady (the block has no OnParametersChanged). */
  inDateList: DateFilters;
  /** Event ClickedDate(MilestoneTimeTypeId, SelectedDate, Position). */
  onClickedDate: (milestoneTimeTypeId: string, selectedDate: string, position: number) => void;
}

/** View (ES :91-262): the "B" edge (visible HasBefore), ListOfDaySelectors (ReplaceSunday, AddWeekdayBelow, the local
    DateList), the "A" edge (visible HasAfter); an edge gets `event-date-selector-selected` while it is the selected
    end filter.
    OnReady (ES :288-350): a view restored from the cache keeps its state; else without days the BEFORE edge is
    selected (and every local date unselected), otherwise DateList = In_DateList.DayFilterList.
    OnClick_Date (ES :380-470): an edge that is not the current selection becomes it, every date is unselected and
    ClickedDate(edge, null date, 0) is raised; a day not yet selected becomes the only selected one, the end filter is
    reset (DAY, not selected) and ClickedDate(DAY, date, position) is raised. */
export function EventDateSelection({ id, inDateList, onClickedDate }: EventDateSelectionProps) {
  const prefix = id.replace('$', '');
  const restored = useWasRestoredFromCache();
  const [state, setState] = useViewState<LocalState>('EventDateSelection', INITIAL);
  const latest = useRef(state);
  const set = (next: LocalState) => {
    latest.current = next;
    setState(next);
  };

  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored) return;
    if (inDateList.DayFilterList.length === 0) {
      set({
        timeTypeEndFilter: { MilestoneTimetypeId: MilestoneTimeType.BEFORE, IsSelected: true },
        dateList: latest.current.dateList.map((d) => ({ ...d, IsSelected: false })),
      });
    } else {
      set({ ...latest.current, dateList: inDateList.DayFilterList.map((d) => ({ ...d })) });
    }
    // OnReady runs once (the view cache restores the same instance state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickDate = (milestoneTimeTypeId: string, selectedPosition: number, selectedDate: string) => {
    const s = latest.current;
    if (milestoneTimeTypeId === MilestoneTimeType.BEFORE || milestoneTimeTypeId === MilestoneTimeType.AFTER) {
      if (s.timeTypeEndFilter.MilestoneTimetypeId === milestoneTimeTypeId) return;
      set({
        timeTypeEndFilter: { MilestoneTimetypeId: milestoneTimeTypeId, IsSelected: true },
        dateList: s.dateList.map((d) => ({ ...d, IsSelected: false })),
      });
      onClickedDate(milestoneTimeTypeId, '', 0);
      return;
    }
    if (milestoneTimeTypeId !== MilestoneTimeType.DAY || selectedPosition === -1) return;
    if (s.dateList[selectedPosition]?.IsSelected ?? false) return;
    set({
      dateList: s.dateList.map((d, i) => ({ ...d, IsSelected: i === selectedPosition })),
      timeTypeEndFilter: { MilestoneTimetypeId: milestoneTimeTypeId, IsSelected: false },
    });
    onClickedDate(milestoneTimeTypeId, selectedDate, selectedPosition);
  };

  const edgeClass = (edge: string, name: string) =>
    `event-date-selector event-date-selector-before-after event-date-selector-${name}${
      state.timeTypeEndFilter.MilestoneTimetypeId === edge && state.timeTypeEndFilter.IsSelected
        ? ' event-date-selector-selected'
        : ''
    }`;

  return (
    <OSBlock name="Orbit_Blocks.EventDateSelection" id={id}>
      <div className="event-date-selector-list-cont" data-container="">
        {inDateList.HasBefore && (
          <div
            className={edgeClass(MilestoneTimeType.BEFORE, 'before')}
            data-container=""
            style={{ cursor: 'pointer' }}
            onClick={() => {
              onClickDate(MilestoneTimeType.BEFORE, -1, '');
            }}
          >
            B
          </div>
        )}
        <ListOfDaySelectors
          id={`${prefix}-$b1`}
          replaceSunday
          addWeekdayBelow
          dateList={state.dateList}
          showInWeekday={false}
          onClickedDate={(type, date, position) => {
            onClickDate(type, position, date);
          }}
        />
        {inDateList.HasAfter && (
          <div
            className={edgeClass(MilestoneTimeType.AFTER, 'after')}
            data-container=""
            style={{ cursor: 'pointer' }}
            onClick={() => {
              onClickDate(MilestoneTimeType.AFTER, -1, '');
            }}
          >
            A
          </div>
        )}
      </div>
    </OSBlock>
  );
}
