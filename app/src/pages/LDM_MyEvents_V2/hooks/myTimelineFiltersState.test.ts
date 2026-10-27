import { describe, expect, it } from 'vitest';
import {
  ALL_LOCALITIES,
  NULL_DATE,
  boundariesCheck,
  bypassClearFromDate,
  clearFilters,
  dateInputWritten,
  filterOf,
  initialMyTimelineFiltersState,
  onChangeDateInputs,
  onClickListItem,
  onReadyDates,
  onReadyPosition,
  resetFiltersOf,
  selectLocalities,
  selectedLocalityText,
  toggleIsShowList,
} from './myTimelineFiltersState';

/* The client actions of LDM_Blocks.MyTimeline_Filters (TST compiled code, controller :832-1834). Fictional
   localities of the LDM world. */
const TODAY = new Date(2026, 9, 27);
const RANGE = 24;
const BAHIA = { IdAsText: '252', Name: 'Bahia Blanca', IsSelected: false };
const ROSARIO = { IdAsText: '601', Name: 'Rosario', IsSelected: false };
const LOCALITIES = [ALL_LOCALITIES, BAHIA, ROSARIO];
const ready = (from = NULL_DATE, to = NULL_DATE, localities = LOCALITIES) =>
  onReadyPosition(
    onReadyDates(initialMyTimelineFiltersState({ FromDate: from, ToDate: to, Localities: localities }), TODAY, RANGE),
    { topPosition: 200, height: 500 },
  );
const selectedIds = (s: ReturnType<typeof ready>) =>
  s.selectedFilters.Localities.filter((p) => p.IsSelected).map((p) => p.IdAsText);

describe('MyTimeline_Filters dates', () => {
  it('OnReady with NullDate dates: the default window, 24 months back to 7 days ahead, and its limits', () => {
    const s = ready();
    expect(s.fromDate).toEqual({ SelectedDate: '2024-10-27', MinDate: '2016-11-03', MaxDate: '2026-11-03' });
    expect(s.toDate).toEqual({ SelectedDate: '2026-11-03', MinDate: '2024-10-27', MaxDate: '2026-11-03' });
    expect(s.isReady).toBe(true);
    expect(s.listTopPosition).toBe(205);
    expect(s.listHeight).toBe(490);
  });

  it('OnReady keeps the dates of In_SelectedFilters inside their limits', () => {
    const s = ready('2025-03-01', '2028-01-01');
    expect(s.fromDate.SelectedDate).toBe('2025-03-01');
    expect(s.toDate).toEqual({ SelectedDate: '2027-03-08', MinDate: '2025-03-01', MaxDate: '2027-03-08' });
  });

  it('BoundariesCheck: broken limits, below the minimum, above the maximum', () => {
    expect(boundariesCheck({ SelectedDate: '2026-01-01', MinDate: '2026-02-01', MaxDate: '2026-01-15' })).toEqual({
      SelectedDate: '2026-02-01',
      MinDate: '2026-02-01',
      MaxDate: '2026-02-01',
    });
    expect(
      boundariesCheck({ SelectedDate: '2025-01-01', MinDate: '2026-01-01', MaxDate: '2026-12-31' }).SelectedDate,
    ).toBe('2026-01-01');
    expect(
      boundariesCheck({ SelectedDate: '2027-06-01', MinDate: '2026-01-01', MaxDate: '2026-12-31' }).SelectedDate,
    ).toBe('2026-12-31');
  });

  it('a new From date sets IsToReset False, checks it and moves the To limits', () => {
    const s = { ...ready(), isToReset: true };
    const change = onChangeDateInputs(dateInputWritten(s, true, '2025-06-15'), true, RANGE);
    expect(change.bypassClear).toBeNull();
    expect(change.state.isToReset).toBe(false);
    expect(change.state.toDate).toEqual({ SelectedDate: '2026-11-03', MinDate: '2025-06-15', MaxDate: '2027-06-22' });
  });

  it('a To date above its maximum becomes the maximum', () => {
    const change = onChangeDateInputs(dateInputWritten(ready(), false, '2030-01-01'), false, RANGE);
    expect(change.state.toDate.SelectedDate).toBe('2026-11-03');
  });

  it('a cleared date asks for BypassClear, which sets the default window again', () => {
    const s = ready('2025-03-01');
    const change = onChangeDateInputs(dateInputWritten(s, true, ''), true, RANGE);
    expect(change.bypassClear).toBe('from');
    expect(change.state.fromDate.SelectedDate).toBe(NULL_DATE);
    const fixed = bypassClearFromDate(change.state, TODAY, RANGE);
    expect(fixed.fromDate.SelectedDate).toBe('2024-10-27');
    expect(fixed.toDate.SelectedDate).toBe('2026-10-27');
    expect(onChangeDateInputs(dateInputWritten(s, false, ''), false, RANGE).bypassClear).toBe('to');
  });
});

describe('MyTimeline_Filters localities', () => {
  it('OnReady keeps the selected localities for the locality input', () => {
    expect(ready().selectedLocalities).toEqual([ALL_LOCALITIES]);
    expect(selectedLocalityText('Bahia Blanca', 0, 2)).toBe('Bahia Blanca, ');
    expect(selectedLocalityText('Rosario', 1, 2)).toBe('Rosario');
  });

  it('a locality is selected and "All Localities" unselected; the last selected one stays selected', () => {
    let s = onClickListItem(ready(), BAHIA, 1);
    expect(selectedIds(s)).toEqual(['252']);
    s = onClickListItem(s, { ...ROSARIO }, 2);
    expect(selectedIds(s)).toEqual(['252', '601']);
    s = onClickListItem(s, { ...BAHIA, IsSelected: true }, 1);
    expect(selectedIds(s)).toEqual(['601']);
    expect(onClickListItem(s, { ...ROSARIO, IsSelected: true }, 2)).toBe(s);
  });

  it('"All Localities" unselects every other locality, and stays selected when clicked again', () => {
    const two = onClickListItem(onClickListItem(ready(), BAHIA, 1), ROSARIO, 2);
    const all = onClickListItem(two, { ...ALL_LOCALITIES, IsSelected: false }, 0);
    expect(selectedIds(all)).toEqual(['AllLocalities']);
    expect(selectedIds(onClickListItem(all, ALL_LOCALITIES, 0))).toEqual(['AllLocalities']);
  });

  it('Toggle_IsShowList only when IsReady; Select keeps the selection and hides the list', () => {
    const notReady = initialMyTimelineFiltersState({ FromDate: NULL_DATE, ToDate: NULL_DATE, Localities: LOCALITIES });
    expect(toggleIsShowList(notReady).isShowList).toBe(false);
    const shown = toggleIsShowList(onClickListItem(ready(), ROSARIO, 2));
    expect(shown.isShowList).toBe(true);
    const selected = selectLocalities({ ...shown, isToReset: true });
    expect(selected.isShowList).toBe(false);
    expect(selected.isToReset).toBe(false);
    expect(selected.selectedLocalities.map((p) => p.Name)).toEqual(['Rosario']);
  });

  it('Clear: the default dates, only "All Localities", IsToReset True, and the ResetFilters record', () => {
    const s = clearFilters(onClickListItem(ready('2025-03-01', '2025-09-01'), ROSARIO, 2), TODAY, RANGE);
    expect(s.isToReset).toBe(true);
    expect(selectedIds(s)).toEqual(['AllLocalities']);
    expect(s.selectedLocalities).toEqual([ALL_LOCALITIES]);
    expect(resetFiltersOf(s)).toEqual({
      Localities: [ALL_LOCALITIES, BAHIA, ROSARIO],
      FromDate: '2024-10-27',
      ToDate: '2026-11-03',
    });
  });

  it('the Filter record has the distinct localities and the selected dates', () => {
    const s = onClickListItem(ready(NULL_DATE, NULL_DATE, [...LOCALITIES, BAHIA]), ROSARIO, 2);
    expect(filterOf(s)).toEqual({
      Localities: [{ ...ALL_LOCALITIES, IsSelected: false }, BAHIA, { ...ROSARIO, IsSelected: true }],
      FromDate: '2024-10-27',
      ToDate: '2026-11-03',
    });
  });
});
