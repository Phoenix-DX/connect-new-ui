import { fireEvent, render, screen } from '@testing-library/react';
import type { ComponentProps } from 'react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import type { AssembleEventFilter, AssembleMeeting } from '@/api/event';
import { AssembleSummary_List } from './AssembleSummary_List';

/* The props-only view of AssembleSummary_List. The meetings and the supper meeting are fictional. */
const FILTER: AssembleEventFilter = {
  AssembleFilterTimeOptionId: 'Upcoming Meetings',
  AssembleEventType: [
    { AssembleEventType: { Id: 'lords-supper', Title: "Lord's Supper" }, IsSelected: false },
    { AssembleEventType: { Id: 'prayer', Title: 'Prayer Meeting' }, IsSelected: false },
  ],
};
const meeting = (i: number): AssembleMeeting => ({
  EventId: `1210-2026111${String(i)}-prayer`,
  SeriesId: '1210-series-prayer',
  DateTime: `2026-11-1${String(i)}T19:30:00`,
  AssembleEventType: { Title: 'Prayer Meeting' },
  HostingLocation: 'Zapiola (Main Meeting Room)',
  LocalityName: 'Bahia Blanca',
  CountryName: 'Argentina',
  IsUnavailable: false,
});
const cards = (container: HTMLElement) =>
  container.querySelectorAll('#b2-b4-List_AssembleSummaryCards > [data-container]');

type Props = ComponentProps<typeof AssembleSummary_List>;
function renderView(overrides: Partial<Props> = {}) {
  const props: Props = {
    id: 'b2-$b4',
    eventList: [meeting(1), meeting(2)],
    filter: FILTER,
    filterLabel: 'All Meeting Types',
    listHeaderLabel: 'From November 2026',
    isHeaderLoading: false,
    isFiltered: false,
    isSummaryFetched: true,
    isShowFilterDrawer: false,
    onClickTag: vi.fn(),
    onToggleFilterDrawer: vi.fn(),
    onClearFilters: vi.fn(),
    onApplyFilters: vi.fn(),
    onScrollEnding: vi.fn(),
    onClickMeeting: vi.fn(),
    ...overrides,
  };
  const view = render(
    <MemoryRouter>
      <AssembleSummary_List {...props} />
    </MemoryRouter>,
  );
  return { ...view, props };
}

describe('AssembleSummary_List', () => {
  it('the time tags, the header and one card per meeting, each with its scroll anchor', () => {
    const { container, props } = renderView();
    expect(container.querySelector('.connect-tag-active')).toHaveTextContent('Upcoming Meetings');
    expect(container.querySelector('#b2-b4-b3-DIV_Filter')).toHaveTextContent('All Meeting Types');
    expect(container.querySelector('#b2-b4-b3-DIV_ListHeader')).toHaveTextContent('From November 2026');
    expect(cards(container)).toHaveLength(2);
    expect(container.querySelector(`[data-dx-scroll-anchor-id="${meeting(2).EventId}"]`)).not.toBeNull();
    expect(container.querySelector('[data-block="AssembleSkeleton.AssembleSummary_SkeletonList"]')).toBeNull();
    fireEvent.click(screen.getByText('Past Meetings'));
    expect(props.onClickTag).toHaveBeenCalledWith('Past Meetings');
    fireEvent.click(cards(container)[1] as HTMLElement);
    expect(props.onClickMeeting).toHaveBeenCalledWith(meeting(2), 1);
    fireEvent.click(container.querySelector('#b2-b4-b3-DIV_Filter') as HTMLElement);
    expect(props.onToggleFilterDrawer).toHaveBeenCalledTimes(1);
  });

  it('loading: the skeleton list and the header skeleton', () => {
    const { container } = renderView({ eventList: [], isSummaryFetched: false, isHeaderLoading: true });
    expect(container.querySelector('[data-block="AssembleSkeleton.AssembleSummary_SkeletonList"]')).not.toBeNull();
    expect(container.querySelector('#b2-b4-b3-DIV_ListHeader [data-block]')).not.toBeNull();
    expect(container.querySelector('[data-block="NewConnect_Utilities.NC_ErrorScreen"]')).toBeNull();
  });

  it('no meeting: NC_ErrorScreen', () => {
    const { container } = renderView({ eventList: [], listHeaderLabel: '' });
    expect(container.querySelector('[data-block="NewConnect_Utilities.NC_ErrorScreen"]')).toHaveTextContent(
      'We were unable to find any meetings to display.',
    );
    expect(container.querySelector('#b2-b4-b3-DIV_ListHeader')).toBeNull();
  });

  it('a filter: the Clear link; the drawer, once opened, applies the edited filter or closes', () => {
    const { container, props, rerender } = renderView({ isFiltered: true, filterLabel: 'Meeting Types (1)' });
    // The drawer copies the filter when it opens (its OnParametersChanged).
    rerender(
      <MemoryRouter>
        <AssembleSummary_List {...props} isShowFilterDrawer />
      </MemoryRouter>,
    );
    fireEvent.click(screen.getByText('Clear'));
    expect(props.onClearFilters).toHaveBeenCalledTimes(1);
    expect(props.onToggleFilterDrawer).not.toHaveBeenCalled();
    expect(container.querySelector('#b2-b4-b8-Block_ActionMenu-ActionMenuContainer')).toHaveClass(
      'action-menu-container--visible',
    );
    const boxes = container.querySelectorAll<HTMLInputElement>('#b2-b4-b8-DIV_MeetingType__FilterList input');
    expect(boxes).toHaveLength(2);
    fireEvent.click(boxes[1] as HTMLInputElement);
    fireEvent.click(screen.getByText('Apply'));
    expect(props.onApplyFilters).toHaveBeenCalledWith({
      ...FILTER,
      AssembleEventType: FILTER.AssembleEventType.map((t, i) => ({ ...t, IsSelected: i === 1 })),
    });
    fireEvent.click(screen.getByText('Cancel'));
    expect(props.onToggleFilterDrawer).toHaveBeenCalledTimes(1);
  });
});
