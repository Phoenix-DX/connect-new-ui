import { fireEvent, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { MessageItem } from '@/api/message';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { freshPage } from '@/test/testSupport';
import { initialMessageListState } from '@/pages/MessageList/hooks/messageListState';
import { MessageListView, type MessageListViewProps } from './MessageListView';

/* The view from props, on a memory router (MenuIcon and MenuIconBack need one). Fictional rows with icons, so no
   sender photo is fetched. */
const PATH = '/UBTConnect/MessageList';
const ICON = '/UBT_CW/img/UBT_CW.logo_assemble.svg';

const item = (id: string, title: string, isRead = false): MessageItem => ({
  id,
  messageTemplateTypeId: 1,
  title,
  dateTimeCreated: '2026-10-13T09:15:00',
  messageTemplatePriorityId: 1,
  profileIconURL: ICON,
  isClear: false,
  isRead,
  createdByUserId: 0,
  createdByMemberId: '0',
  messageInfoTypeId: 1,
});
const ROWS = [item('81018', 'Winter assembly hall catering schedule'), item('81003', 'Camp is booked out', true)];

type Variables = MessageListViewProps['variables'];

function renderView(
  props: Partial<Omit<MessageListViewProps, 'variables'>> & { variables?: Partial<Variables>; signedIn?: boolean } = {},
) {
  const signedIn = props.signedIn ?? true;
  const { variables, ...rest } = props;
  const handlers = {
    onPullToRefresh: vi.fn(),
    onCloseSearchAndFilter: vi.fn(),
    onSearchStringChange: vi.fn(),
    onSearchSubmit: vi.fn(),
    onSearchClear: vi.fn(),
    onSearch: vi.fn(),
    onFilter: vi.fn(),
    onToggleShowFilters: vi.fn(),
    onNavigateToLogin: vi.fn(),
    onDismissWarning: vi.fn(),
    onSwipeEventsClear: vi.fn(() => Promise.resolve()),
    onMarkAllRead: vi.fn(),
    onGoToMessageDetail: vi.fn(() => Promise.resolve()),
    onSwipeEventsRead: vi.fn(() => Promise.resolve()),
    onScrollEnding: vi.fn(() => Promise.resolve()),
    onMessageSort: vi.fn(),
    onResetFilters: vi.fn(),
    onApplyFilters: vi.fn(),
  };
  const view = renderRoutes(
    {
      '/UBTConnect/HomeFeed': <p>HomeFeed screen</p>,
      [PATH]: (
        <MessageListView
          id="$b1"
          signedIn={signedIn}
          variables={{ ...initialMessageListState(signedIn, '').variables, ...variables }}
          messagesList={{ items: ROWS, hasUnreadMessages: true }}
          isDataFetched
          backNavigationHandler={<p>back handler</p>}
          bottomBar={<p>bottom bar</p>}
          commonUIElements={<p>common UI</p>}
          {...handlers}
          {...rest}
        />
      ),
    },
    PATH,
  );
  return { ...view, handlers };
}

const byId = (id: string) => document.querySelector(`[id="${id}"]`);
const blocks = (container: HTMLElement) =>
  [...container.querySelectorAll('[data-block]')].map((e) => e.getAttribute('data-block'));

beforeEach(() => {
  freshPage();
  resetNavigation();
});

describe('MessageListView', () => {
  it('signed in: the menu icon, "My Notifications", the search and filter icons, the rows and "Mark All as Read"', () => {
    const { container, handlers } = renderView();
    const block = container.querySelector('[data-block="MyNotifications.ScreenBlock_MessageList"]');
    expect(block?.id).toBe('$b1');
    expect(byId('b1-$b2')).toHaveAttribute('data-block', 'Layout.MenuIcon__UpdatedOSUI');
    expect(byId('b1-$b3')).toBeNull();
    expect(screen.getByText('My Notifications')).toBeInTheDocument();
    expect(screen.getByText('Winter assembly hall catering schedule')).toBeInTheDocument();
    expect(container.querySelectorAll('[data-list-item-content]')).toHaveLength(2);
    expect(container.querySelectorAll('.background-blue-lightest')).toHaveLength(1);
    expect(blocks(container)).not.toContain('Reusable.Warning_PrivateMessage');
    fireEvent.click(byId('b1-Search_Icon') as Element);
    fireEvent.click(byId('b1-Filter_Icon') as Element);
    fireEvent.click(screen.getByText('Mark All as Read'));
    expect(handlers.onSearch).toHaveBeenCalledTimes(1);
    expect(handlers.onFilter).toHaveBeenCalledTimes(1);
    expect(handlers.onMarkAllRead).toHaveBeenCalledTimes(1);
  });

  it('a row click raises OnClick_GoToMessageDetail with the message id', () => {
    const { container, handlers } = renderView();
    fireEvent.click(container.querySelectorAll('[data-list-item-content]')[1] as Element);
    expect(handlers.onGoToMessageDetail).toHaveBeenCalledWith('81003');
  });

  it('the slots: the back handler at the end of the content, the bottom bar and the common UI', () => {
    const { container } = renderView();
    expect(container.querySelector('.message-list')?.nextElementSibling?.textContent).toBe('back handler');
    expect(byId('b1-BottomBar')?.textContent).toBe('bottom bar');
    expect(byId('b1-CommonUI_Elements')?.textContent).toBe('common UI');
    expect(byId('b1-Menu_IfLoggedIn')?.textContent).toBe('');
  });

  it('signed out: the back icon and the private-message warning with Dismiss and Login', () => {
    const { handlers } = renderView({ signedIn: false });
    expect(byId('b1-$b3')).not.toBeNull();
    expect(byId('b1-$b2')).toBeNull();
    expect(byId('b1-$b6')).toHaveAttribute('data-block', 'Reusable.Warning_PrivateMessage');
    expect(byId('b1-$b6')?.textContent).toContain('To access your Private Messages,');
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss' }));
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));
    expect(handlers.onDismissWarning).toHaveBeenCalledTimes(1);
    expect(handlers.onNavigateToLogin).toHaveBeenCalledTimes(1);
  });

  it('search open: the input, the history block, Enter submits and blurs, the remove icon clears', () => {
    const { container, handlers } = renderView({ variables: { ShowSearch: true, SearchMessageString: 'camp' } });
    const input = byId('b1-Input_SearchMessages') as HTMLInputElement;
    expect(input.value).toBe('camp');
    expect(input).not.toBeDisabled();
    expect(input.placeholder).toBe('Search My Notifications...');
    expect(byId('b1-$b5')).toHaveAttribute('data-block', 'UtilityFlow.MessageSearchHistory');
    expect(byId('b1-Search_Icon')).toBeNull();
    expect(byId('b1-Filter_Icon')).toBeNull();
    expect(byId('b1-Close_Search_Icon')).toHaveAttribute('data-icon', 'icon-search');
    fireEvent.change(input, { target: { value: 'camps' } });
    expect(handlers.onSearchStringChange).toHaveBeenCalledWith('camps');
    input.focus();
    fireEvent.keyUp(input, { key: 'a' });
    expect(handlers.onSearchSubmit).not.toHaveBeenCalled();
    fireEvent.keyUp(input, { key: 'Enter' });
    expect(handlers.onSearchSubmit).toHaveBeenCalledTimes(1);
    expect(document.activeElement).not.toBe(input);
    fireEvent.click(container.querySelector('.fa-remove') as Element);
    expect(handlers.onSearchClear).toHaveBeenCalledTimes(1);
    fireEvent.click(byId('b1-Close_Search_Icon') as Element);
    expect(handlers.onCloseSearchAndFilter).toHaveBeenCalledTimes(1);
  });

  it('filters open: "Sort", the two orders, Reset and Apply; no rows', () => {
    const { container, handlers } = renderView({ variables: { ShowFilters: true } });
    expect(screen.getByText('Sort', { selector: '.header-title span' })).toBeInTheDocument();
    expect(container.querySelectorAll('[data-list-item-content]')).toHaveLength(0);
    expect(byId('b1-$b12')).toHaveAttribute('data-block', 'Interaction.Animate');
    expect(byId('b1-$b13')).toHaveAttribute('data-block', 'MyNotifications.MessageList_Filter');
    expect(byId('b1-Close_Search_Icon')).toHaveAttribute('data-icon', 'icon-filter');
    expect((byId('b1-b13-NewToOld_Checkbox') as HTMLInputElement).checked).toBe(true);
    expect((byId('b1-b13-OldToNew_Checkbox') as HTMLInputElement).checked).toBe(false);
    fireEvent.click(byId('b1-b13-OldToNew_Checkbox') as Element);
    expect(handlers.onMessageSort).toHaveBeenCalledWith(true);
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));
    fireEvent.click(screen.getByRole('button', { name: 'Apply' }));
    fireEvent.click(byId('b1-Close_Filter_Icon') as Element);
    expect(handlers.onResetFilters).toHaveBeenCalledTimes(1);
    expect(handlers.onApplyFilters).toHaveBeenCalledTimes(1);
    // Close_Filter_Icon raises ToggleShowFilters, not OnClick_CloseSearchAndFilter (ScreenBlock_MessageList.mvc.js:566-588).
    expect(handlers.onToggleShowFilters).toHaveBeenCalledTimes(1);
    expect(handlers.onCloseSearchAndFilter).not.toHaveBeenCalled();
    fireEvent.click(byId('b1-Close_Search_Icon') as Element);
    expect(handlers.onCloseSearchAndFilter).toHaveBeenCalledTimes(1);
  });

  it.each([
    ['before GetMessages answered: nothing', { isDataFetched: false }, {}, null],
    ['fetched and empty: the banner $b10', {}, {}, 'b1-$b10'],
    ['searched and empty: NoResults $b8', {}, { SearchMessageString: 'zzz' }, 'b1-$b8'],
    [
      'searched, the last message cleared: the banner $b9',
      {},
      { SearchMessageString: 'zzz', IsEmptyMessage: true },
      'b1-$b9',
    ],
  ] as const)('the empty list, %s', (_name, props, variables, shown) => {
    const { container } = renderView({ ...props, variables, messagesList: { items: [], hasUnreadMessages: false } });
    const empty = ['b1-$b8', 'b1-$b9', 'b1-$b10'].filter((id) => byId(id) !== null);
    expect(empty).toEqual(shown === null ? [] : [shown]);
    expect(blocks(container)).not.toContain('MyNotifications.MessageListBlock');
  });

  it('IsShowLoading: no FilterDataBlock and the spinner of "Mark All as Read"', () => {
    renderView({ variables: { IsShowLoading: true } });
    expect(byId('b1-FilterDataBlock')).toBeNull();
    expect(byId('b1-LoadingMarkAllRead')?.querySelector('.list-updating-cont')).not.toBeNull();
  });
});
