import { composeStories } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { freshPage, recordBodies } from '@/test/testSupport';
import { expectToMatchCapture } from '@/test/dom';
import { csCreateShareProfileLink } from '@/api/share';
import { Connect_Entity } from '@/lib/ubtConnectUtils/staticEntities';
import { contractHandler } from '@/mocks/contract';
import { navigateToUpgrade, showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { server } from '@/test/setup';
import { delaySetIsOpen, scrollToTop, shareSheet_IsSharing } from './jsNodes';
import { ShareSheetContainer } from './ShareSheetContainer';
import * as stories from './ShareSheetContainer.stories';

vi.mock('@/platform/feedback/dialogs/subscription', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/platform/feedback/dialogs/subscription')>();
  return {
    ...actual,
    showUpgradePopUp: vi.fn(actual.showUpgradePopUp),
    navigateToUpgrade: vi.fn(() => Promise.resolve()),
  };
});

/** GetRecentlyShared answers one disabled (fictional) member: RecordDisabled True. */
const disabledRecentMember = () => {
  server.use(
    contractHandler('UBTConnect_Utils', 'ShareSheet/DataActionGetRecentlyShared', () => ({
      Out_SearchResultItemList: {
        List: [
          {
            Id: '9301',
            HouseholderId: '9401',
            Name: 'Rosalind Ashcombe',
            AdditionalInformation: '',
            Location: 'Tamworth, Australia',
            Type: Connect_Entity.Member,
            RecordDisabled: true,
            Score: '0',
            Latitude: '0',
            Longitude: '0',
          },
        ],
      },
    })),
  );
};

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

function wrapper({ children }: { children?: ReactNode }) {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return (
    <QueryClientProvider client={client}>
      <MemoryRouter>{children}</MemoryRouter>
    </QueryClientProvider>
  );
}

async function openSheet(props: Parameters<typeof ShareSheetContainer>[0] = {}) {
  const view = render(<ShareSheetContainer {...props} />, { wrapper });
  view.rerender(<ShareSheetContainer {...props} inIsOpen />);
  await screen.findByText('Cancel');
  return view;
}

describe('ShareSheet', () => {
  // Action_SubmitShare reads the signed-in user's name (Cache_UserInfo_Get).
  beforeEach(() => {
    freshPage();
    setSignedInUser(MOCK_USER_ID);
  });

  // Only V1 has a capture (testCapturedVariants would ask one for the Open story too): same check, by hand.
  it('V1 matches __captures__/v1.html', () => {
    const { V1 } = composeStories(stories);
    const { container } = render(<V1 />, { wrapper });
    expectToMatchCapture(container.firstElementChild, captures['./__captures__/v1.html'] ?? '');
  });

  it('opening renders the sheet, loads GetRecentlyShared (skeleton first), Cancel raises Event_ClosedShareSheet', async () => {
    const onClosed = vi.fn();
    const { container } = await openSheet({ inShareObjectTypeId: 'Household', onEventClosedShareSheet: onClosed });
    expect(screen.getByText('Share Household')).toBeInTheDocument();
    expect(container.querySelector('.osui-bottom-sheet')).toHaveClass(
      'connect-share-sheet',
      'background-neutral-2',
      'ubt-bottom-sheet--dynamic-height',
    );
    expect(container.querySelector('[data-block="NavigationHandler.PreventBackNavigation"]')).not.toBeNull();
    expect(screen.getAllByText('Loading Name')).toHaveLength(5);
    expect(await screen.findByText('Thomas Hargreaves')).toBeInTheDocument();
    expect(screen.queryByText('Loading Name')).toBeNull();
    expect(screen.getByText('Recently Shared')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Cancel'));
    expect(onClosed).toHaveBeenCalledTimes(1);
  });

  it('search step: search, select a member, Send shares with CS_ShareObject and closes', async () => {
    const onClosed = vi.fn();
    const shares = recordBodies('UBTConnect_Utils/ActionCS_ShareObject');
    const { container } = await openSheet({
      inShareObjectTypeId: 'Household',
      inShareableObjectId: '77',
      inIsLegacy: true,
      onEventClosedShareSheet: onClosed,
    });
    const dummy = container.querySelector('.connect-share-sheet__search input');
    if (!dummy) throw new Error('no search input');
    fireEvent.focus(dummy);
    expect(container.querySelector('.osui-bottom-sheet')).toHaveClass(
      'ubt-bottom-sheet--full-height',
      'connect-share-sheet--legacy',
    );
    expect(screen.getByText('Send').closest('button')).toBeDisabled();
    expect(await screen.findByText('Recently shared')).toBeInTheDocument();
    const input = container.querySelector('input[type="search"]');
    if (!input) throw new Error('no input');
    fireEvent.change(input, { target: { value: 'Grace' } });
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter', keyCode: 13 });
    expect(await screen.findByText('Results')).toBeInTheDocument();
    await waitFor(() => {
      expect(container.querySelectorAll('.connect-search-result')).toHaveLength(1);
    });
    const box = container.querySelector('.connect-icon-checkbox_outline_blank');
    if (!box) throw new Error('no checkbox');
    fireEvent.click(box);
    expect(screen.getByText('1 person selected')).toBeInTheDocument();
    expect(container.querySelector('.connect-icon-checkbox_fill')).not.toBeNull();
    fireEvent.click(screen.getByText('Send'));
    await waitFor(() => {
      expect(onClosed).toHaveBeenCalledTimes(1);
    });
    expect(shares).toEqual([
      expect.objectContaining({ In_SharedObjectId: '77', In_TargetCBUserIds: { List: ['9104'] } }),
    ]);
  });

  it('a search with no member shows the empty list', async () => {
    const { container } = await openSheet();
    const dummy = container.querySelector('.connect-share-sheet__search input');
    if (!dummy) throw new Error('no search input');
    fireEvent.focus(dummy);
    const input = container.querySelector('input[type="search"]');
    if (!input) throw new Error('no input');
    fireEvent.change(input, { target: { value: 'Nobody' } });
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter', keyCode: 13 });
    expect(await screen.findByText("No results found for 'Nobody'")).toBeInTheDocument();
  });

  it('a click on a recent member shares with it at once', async () => {
    const onClosed = vi.fn();
    await openSheet({ onEventClosedShareSheet: onClosed });
    await act(async () => {
      fireEvent.click(await screen.findByText('Eleanor Whitfield'));
    });
    await waitFor(() => {
      expect(onClosed).toHaveBeenCalledTimes(1);
    });
  });

  it('a click on a disabled recent member runs App_Subscription_ShowUpgradePopUp and shares nothing (TST :2588-2592)', async () => {
    disabledRecentMember();
    const shares = recordBodies('UBTConnect_Utils/ActionCS_ShareObject');
    const onClosed = vi.fn();
    await openSheet({ onEventClosedShareSheet: onClosed });
    await act(async () => {
      fireEvent.click(await screen.findByText('Rosalind Ashcombe'));
    });
    await waitFor(() => {
      expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    });
    expect(shares).toHaveLength(0);
    expect(onClosed).not.toHaveBeenCalled();
  });

  it('search step: "Subscription upgrade needed" of a disabled member runs App_Subscription_NavigateToUpgrade', async () => {
    disabledRecentMember();
    const { container } = await openSheet();
    const dummy = container.querySelector('.connect-share-sheet__search input');
    if (!dummy) throw new Error('no search input');
    fireEvent.focus(dummy);
    fireEvent.click(await screen.findByText('Subscription upgrade needed'));
    await waitFor(() => {
      expect(navigateToUpgrade).toHaveBeenCalledTimes(1);
    });
  });

  it('CS_CreateShareProfileLink returns the share id and URL', async () => {
    await expect(
      csCreateShareProfileLink({
        In_ShareObjectTypeId: 'Household',
        In_ShareableObjectId: '77',
        In_UpdateType: '',
        In_UpdateDate: '1900-01-01',
      }),
    ).resolves.toEqual({ shareId: '1', url: '' });
  });

  it('ShareSheet_IsSharing, DelaySetIsOpen and ScrollTop', () => {
    expect(shareSheet_IsSharing('', '')).toBe(false);
    expect(shareSheet_IsSharing('Copy', '')).toBe(true);
    expect(shareSheet_IsSharing('', '12')).toBe(true);
    document.body.innerHTML =
      '<div id="s"><div class="osui-bottom-sheet"><div class="osui-bottom-sheet__content"></div></div></div>';
    const setOpen = vi.fn();
    delaySetIsOpen('s', setOpen);
    const sheet = document.querySelector('.osui-bottom-sheet');
    sheet?.dispatchEvent(new Event('transitionend'));
    sheet?.dispatchEvent(new Event('transitionend'));
    expect(setOpen).toHaveBeenCalledTimes(1);
    expect(setOpen).toHaveBeenCalledWith(false);
    const content = document.querySelector('.osui-bottom-sheet__content');
    if (content) content.scrollTop = 40;
    scrollToTop('s');
    expect(content?.scrollTop).toBe(0);
  });
});
