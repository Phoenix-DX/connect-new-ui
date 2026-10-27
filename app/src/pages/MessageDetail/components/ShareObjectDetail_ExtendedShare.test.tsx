import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchSharedObjectDetail, type SharedObjectDetail } from '@/api/share';
import { showFeedbackMessage } from '@/platform/feedback';
import { ShareObjectDetail_ExtendedShare } from './ShareObjectDetail_ExtendedShare';

/* The block from its inputs, with GetShare and the feedback replaced by spies. Fictional shares. */
vi.mock('@/api/share', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/share')>()),
  fetchSharedObjectDetail: vi.fn(),
}));
vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback')>()),
  showFeedbackMessage: vi.fn(),
}));
vi.mock('@/platform/session/userInfo', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/userInfo')>()),
  getUserInformation: vi.fn(() => Promise.resolve({})),
}));

const share = (patch: Partial<SharedObjectDetail> = {}, item: Partial<SharedObjectDetail['shareItem']> = {}) => ({
  objectId: '61207',
  senderId: '900131',
  shareObjectTypeId: 'Household',
  shareObjectTypeLabel: 'Household',
  isShareAvailable: true,
  updateDate: null,
  ...patch,
  shareItem: {
    id: '61207',
    canAccess: true,
    isDeceased: false,
    householderId: '61207',
    type: '',
    title: 'Lindqvist Household',
    subtitle: 'Anders and Maja Lindqvist',
    label: 'Uppsala',
    dateTime: null,
    genderId: '',
    parentsName: '',
    birthType: '',
    localityName: 'Uppsala',
    countryName: 'Sweden',
    photoSignedPath: '',
    isVisible: true,
    ...item,
  },
});

const events = { onGoToObjectDetail: vi.fn(), onSubscriptionDenied: vi.fn() };

async function renderBlock(answer: SharedObjectDetail) {
  vi.mocked(fetchSharedObjectDetail).mockResolvedValue(answer);
  const view = render(
    <MemoryRouter>
      <ShareObjectDetail_ExtendedShare
        id="b1-$b5"
        prefix="b1-b5"
        inputs={{ ShareId: '9001', HasAccessToDeceasedHousehold: true }}
        {...events}
      />
    </MemoryRouter>,
  );
  await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
  return view;
}

const clickCard = () => {
  fireEvent.click(screen.getByText('Lindqvist Household').closest('[style*="cursor"]') as HTMLElement);
};

beforeEach(() => {
  vi.clearAllMocks();
});

describe('ShareObjectDetail_ExtendedShare', () => {
  it('shows the "Loading Shared Object" card in the skeleton until GetShare answers', () => {
    vi.mocked(fetchSharedObjectDetail).mockReturnValue(new Promise(() => undefined));
    render(
      <MemoryRouter>
        <ShareObjectDetail_ExtendedShare
          id="b1-$b5"
          prefix="b1-b5"
          inputs={{ ShareId: '9001', HasAccessToDeceasedHousehold: true }}
          {...events}
        />
      </MemoryRouter>,
    );
    expect(document.querySelector('#b1-b5-\\$b3')?.innerHTML).toContain('ubt-skeleton-section');
    expect(screen.getAllByText('Loading Shared Object').length).toBeGreaterThan(0);
    expect(fetchSharedObjectDetail).toHaveBeenCalledWith({ ShareId: '9001', HasAccessToDeceasedHousehold: true });
    expect(document.getElementById('b1-b5-FreeSubscriptionAlert')).not.toBeNull();
  });

  it('shows the shared household and opens it', async () => {
    await renderBlock(share());
    expect(document.getElementById('b1-b5-$b5')?.textContent).toContain('Anders and Maja Lindqvist');
    clickCard();
    expect(events.onGoToObjectDetail).toHaveBeenCalledWith('61207', 'Household');
  });

  it('shows "This <type> link is unavailable" when the object is missing or not visible', async () => {
    await renderBlock(share({}, { isVisible: false }));
    expect(document.getElementById('b1-b5-$b2')?.textContent).toBe('This Household link is unavailable');
  });

  it('OneSchool Global: the location is the locality and the country', async () => {
    await renderBlock(share({ shareObjectTypeId: 'OneSchool Global', shareObjectTypeLabel: 'OneSchool Global' }));
    expect(document.getElementById('b1-b5-$b5')?.textContent).toContain('Uppsala, Sweden');
  });

  it('an Update shows its Update_ListItem and opens the householder', async () => {
    await renderBlock(
      share(
        { shareObjectTypeId: 'Update', updateDate: '2026-10-19' },
        { title: 'Freya Lindqvist', householderId: '61208' },
      ),
    );
    expect(document.getElementById('b1-b5-$b4')?.textContent).toContain('Freya Lindqvist');
    fireEvent.click(screen.getByText('Freya Lindqvist'));
    expect(events.onGoToObjectDetail).toHaveBeenCalledWith('61208', 'Update');
  });

  it('OnClickShareDetail: no access raises SubscriptionDenied; the messages of a missing item or share', async () => {
    const view = await renderBlock(share({}, { canAccess: false }));
    clickCard();
    expect(events.onSubscriptionDenied).toHaveBeenCalledTimes(1);
    view.unmount();

    const gone = await renderBlock(share({ isShareAvailable: false }));
    clickCard();
    expect(showFeedbackMessage).toHaveBeenLastCalledWith('This shared item is no longer available.', 0);
    expect(events.onGoToObjectDetail).not.toHaveBeenCalled();
    gone.unmount();
  });
});
