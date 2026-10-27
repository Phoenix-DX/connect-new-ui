import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import type { UpdateItem } from '@/api/update';
import { getSkeletonList_UI_Updates } from '@/pages/Updates_SingleList/hooks/updatesSingleListState';
import { UpdatesList, type UpdatesListProps } from './UpdatesList';

const update = (id: string, name: string, date: string, isRead = false): UpdateItem => ({
  updateItemId: id,
  updateItemTypeId: 'Marriage',
  householdId: '880101',
  memberId: '770101',
  name,
  date,
  genderId: 'Gender.MALE',
  locationString: 'Bendigo, Australia',
  parentsNames: '',
  birthType: '',
  isRead,
  hasAccess: true,
  hasShare: true,
});
const ITEMS = [
  update('980101', 'Oscar & Emma Hughes', '2026-10-13'),
  update('980102', 'Liam & Grace Hales', '2026-10-09', true),
];

function renderList(props: Partial<UpdatesListProps> = {}) {
  const handlers = {
    onUpdateListHeader: vi.fn(),
    onItemShare: vi.fn(),
    onItemClick: vi.fn(),
    onItemMarkAsRead: vi.fn(),
    onItemMarkAsUnread: vi.fn(),
  };
  const view = render(
    <MemoryRouter>
      <UpdatesList
        items={ITEMS}
        isLoading={false}
        isDataFetched
        fetchStatus="ok"
        dateRangesFailed={false}
        breakpoints={[]}
        isAscending={false}
        {...handlers}
        {...props}
      />
    </MemoryRouter>,
  );
  return { ...view, handlers };
}

describe('UpdatesList', () => {
  it('a fetched list: one row per update with its date, the section header from the second row on', () => {
    const { container } = renderList();
    const list = container.querySelector('#List_Updates');
    expect(list?.className).toBe('list list-group background-neutral-0 updates-list OSFillParent');
    const rows = [...container.querySelectorAll('.updates-list__list-item')];
    expect(rows.map((r) => r.getAttribute('data-plus-date'))).toEqual(['13/10/2026', '09/10/2026']);
    expect(rows[0]?.querySelector('[data-block="Directory_Updates.SectionHeader"]')).toBeNull();
    expect(rows[1]?.querySelector('[data-block="Directory_Updates.SectionHeader"]')?.id).toBe('l1-478_1-$b15');
    expect(container.querySelector('[id="l1-478_0-UpdateItem"]')).not.toBeNull();
    expect(screen.getByText('Oscar & Emma Hughes')).toBeInTheDocument();
  });

  it('while loading: the list-loading class and the runtime key 106; after a failed GetDateRanges: 129', () => {
    const skeleton = getSkeletonList_UI_Updates(3);
    const loading = renderList({ items: skeleton, isLoading: true, isDataFetched: false, fetchStatus: 'notFetched' });
    expect(loading.container.querySelector('#List_Updates')?.className).toContain('list-loading');
    expect(loading.container.querySelector('[id="l1-106_2-$b14"]')).not.toBeNull();
    loading.unmount();
    const failed = renderList({ items: skeleton, isLoading: true, fetchStatus: 'error', dateRangesFailed: true });
    expect(failed.container.querySelector('#List_Updates')?.className).toContain('list-error');
    expect(failed.container.querySelector('[id="l1-129_0-$b14"]')).not.toBeNull();
  });

  it('an empty fetched list shows Updates_NoItemsFound instead of the list (BR-UBTCON-872)', () => {
    const { container } = renderList({ items: [] });
    expect(container.querySelector('#List_Updates')).toBeNull();
    const block = container.querySelector('[data-block="Directory_Updates.Updates_NoItemsFound"]');
    expect(block?.id).toBe('$b13');
    expect(block?.querySelector('.ubt-icon-button .connect-icon-calendar_busy_fill')).not.toBeNull();
    expect(screen.getByText('No Updates Found')).toBeInTheDocument();
    expect(screen.getByText('We were unable to find any Updates to display.')).toBeInTheDocument();
  });

  it('a list that is still loading or not fetched shows no empty state', () => {
    expect(renderList({ items: [], isLoading: true }).container.textContent).not.toContain('No Updates Found');
  });

  it('a click on an update raises OnClick with its index', () => {
    const { handlers } = renderList();
    fireEvent.click(screen.getByText('Liam & Grace Hales'));
    expect(handlers.onItemClick).toHaveBeenCalledExactlyOnceWith(1);
  });
});
