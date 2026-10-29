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

const block = (shareId: string) => (
  <MemoryRouter>
    <ShareObjectDetail_ExtendedShare
      id="b1-$b5"
      prefix="b1-b5"
      inputs={{ ShareId: shareId, HasAccessToDeceasedHousehold: true }}
      {...events}
    />
  </MemoryRouter>
);

const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));

async function renderBlock(answer: SharedObjectDetail) {
  vi.mocked(fetchSharedObjectDetail).mockResolvedValue(answer);
  const view = render(block('9001'));
  await settle();
  return view;
}

/** ShareableObject_Generic after OnInitialize: the Household "Loading Shared Object" card. */
const loadingCard = {
  ConnectEntityTypeId: 'Household',
  Title: 'Loading Shared Object',
  Subtitle: 'Loading Shared Object',
  Location: 'Loading Shared Object',
};

/** ShareableUpdateItem after OnInitialize: the UI_UpdateItem defaults. */
const emptyRecord = {
  updateItemId: '0',
  updateItemTypeId: '',
  name: '',
  date: null,
  genderId: '',
  locationString: '',
  isRead: false,
  hasAccess: false,
  hasShare: false,
  householdId: '0',
  parentsNames: '',
  birthType: '',
  memberId: '',
};

const clickCard = () => {
  fireEvent.click(screen.getByText('Lindqvist Household').closest('[style*="cursor"]') as HTMLElement);
};

beforeEach(() => {
  vi.clearAllMocks();
});

describe('ShareObjectDetail_ExtendedShare', () => {
  it('shows the "Loading Shared Object" card in the skeleton until GetShare answers', () => {
    vi.mocked(fetchSharedObjectDetail).mockReturnValue(new Promise(() => undefined));
    render(block('9001'));
    expect(document.querySelector('#b1-b5-\\$b3')?.innerHTML).toContain('ubt-skeleton-section');
    expect(screen.getAllByText('Loading Shared Object').length).toBeGreaterThan(0);
    // GetShare sends the block variables: the two inputs and the two locals of OnInitialize.
    expect(fetchSharedObjectDetail).toHaveBeenCalledWith({
      shareId: '9001',
      hasAccessToDeceasedHousehold: true,
      shareableObject: loadingCard,
      shareableUpdateItem: emptyRecord,
    });
    expect(document.getElementById('b1-b5-FreeSubscriptionAlert')).not.toBeNull();
  });

  it('OnParametersChanged sends the locals that the last GetShareOnAfterFetch set; a non-Update keeps the record', async () => {
    const view = await renderBlock(
      share(
        { shareObjectTypeId: 'Update', updateDate: '2026-10-19' },
        {
          type: 'Birth',
          title: 'Freya Lindqvist',
          householderId: '61208',
          genderId: 'F',
          parentsName: 'Anders and Maja Lindqvist',
          birthType: 'Daughter',
        },
      ),
    );
    // The Assign of an Update: NullIdentifier, IsRead and HasShare False, CanAccess, HouseholderId; MemberId not set.
    const updateRecord = {
      updateItemId: '0',
      updateItemTypeId: 'Birth',
      name: 'Freya Lindqvist',
      date: '2026-10-19',
      genderId: 'F',
      locationString: 'Uppsala',
      isRead: false,
      hasAccess: true,
      hasShare: false,
      householdId: '61208',
      parentsNames: 'Anders and Maja Lindqvist',
      birthType: 'Daughter',
      memberId: '',
    };
    vi.mocked(fetchSharedObjectDetail).mockResolvedValue(share());
    view.rerender(block('9002'));
    await settle();
    expect(fetchSharedObjectDetail).toHaveBeenLastCalledWith({
      shareId: '9002',
      hasAccessToDeceasedHousehold: true,
      shareableObject: loadingCard,
      shareableUpdateItem: updateRecord,
    });

    view.rerender(block('9003'));
    await settle();
    expect(fetchSharedObjectDetail).toHaveBeenCalledTimes(3);
    expect(fetchSharedObjectDetail).toHaveBeenLastCalledWith({
      shareId: '9003',
      hasAccessToDeceasedHousehold: true,
      shareableObject: {
        ConnectEntityTypeId: 'Household',
        Id: '61207',
        Title: 'Lindqvist Household',
        Subtitle: 'Anders and Maja Lindqvist',
        SignedURL: '',
        Location: 'Uppsala',
      },
      shareableUpdateItem: updateRecord,
    });
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
