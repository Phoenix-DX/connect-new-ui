import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { setFlag } from '@/platform/flags/flags';
import { diffAgainstCapture } from '@/test/dom';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import * as stories from './HouseholdDetails_Block.stories';
import { handlePreviewData, initialTagsList, selectedTagOf, selectTimelinePhoto, setPhotosTagEnabled } from './logic';
import type { GetHouseholdOutput } from './api';

const navigate = vi.hoisted(() => vi.fn());
vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  useOsNavigate: () => navigate,
}));

/* V1, V2 (wrappers) and V4 (loading) are compared on the first render; V3 and V5 once the data actions answered. */
const capturedStories = { default: stories.default, V1: stories.V1, V2: stories.V2, V4: stories.V4 };
const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V3, V5 } = composeStories(stories);

const rootOf = (container: HTMLElement) => {
  const root = container.firstElementChild;
  if (!root) throw new Error('nothing rendered');
  return root;
};
const matches = async (root: Element, capture: string) => {
  await waitFor(
    () => {
      expect(diffAgainstCapture(root, captures[capture] ?? '')).toEqual([]);
    },
    { timeout: 4000 },
  );
};
const tag = (name: string) => screen.getByText(name, { selector: 'span' });

afterEach(() => {
  setFlag('mobilePhotobook', null);
});

describe('HouseholdDetails_Block', () => {
  testCapturedVariants(capturedStories, captures);

  it('V3 matches __captures__/v3.html (HouseholdDetails/default, fetched, bookmarked)', async () => {
    await V3.load();
    const { container } = render(<V3 />);
    await matches(rootOf(container), './__captures__/v3.html');
  });

  it('V5 matches __captures__/v5.html (Profile/default, fetched, disabled, kebab menu)', async () => {
    const { container } = render(<V5 />);
    await matches(rootOf(container), './__captures__/v5.html');
  });

  it('raises HouseholdDataFetched(LocalityName, CountryName, deceased or ancestry) after GetHousehold', async () => {
    const onHouseholdDataFetched = vi.fn();
    render(<V5 onHouseholdDataFetched={onHouseholdDataFetched} />);
    await waitFor(() => {
      expect(onHouseholdDataFetched).toHaveBeenCalledWith('San Marcos', 'United States', false);
    });
  });

  it('Photos tag: gallery title, timeline and Coming soon, Photobook link, members hidden (not captured)', async () => {
    const { container } = render(<V5 isEnabled />);
    await waitFor(() => expect(tag('Photos')).toBeInTheDocument());
    fireEvent.click(tag('Photos'));
    await waitFor(() => expect(screen.getByText('Household gallery')).toBeInTheDocument());
    expect(container.querySelector('[data-block="ConnectPatterns.ComingSoon"]')).not.toBeNull();
    expect(
      container.querySelector('[data-block="Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List"]'),
    ).not.toBeNull();
    expect(screen.getAllByText('Photobook').length).toBeGreaterThan(0);
    expect(container.querySelector('.householdAddress')).toBeNull();
    const members = container.querySelector('[data-block="Directory_Household_Blocks.HouseholdDetails_Members_Block"]');
    expect(members?.parentElement?.className).toBe('hidden');
  });

  it('Photos tag without photobook access hides the call-to-action section (Action_SetHideActionsPhotobook)', async () => {
    setFlag('mobilePhotobook', 'off');
    render(<V5 isEnabled />);
    await waitFor(() => expect(tag('Photos')).toBeInTheDocument());
    expect(screen.getByText('Actions')).toBeInTheDocument();
    fireEvent.click(tag('Photos'));
    await waitFor(() => {
      expect(screen.queryByText('Photobook')).toBeNull();
    });
    expect(screen.queryByText('Actions')).toBeNull();
  });
});

describe('HouseholdDetails_Block navigation', () => {
  it('OnClick_NavigateToLocality: Locality_Details with the label and id', async () => {
    navigate.mockClear();
    render(<V5 isEnabled />);
    fireEvent.click(await screen.findByText('San Marcos'));
    expect(navigate).toHaveBeenCalledWith(expect.stringMatching(/\/Locality_Details$/), {
      PreloadedLocalityLabel: 'San Marcos',
      LocalityId: '501',
    });
    fireEvent.click(screen.getByText('Kyle'));
    expect(navigate).toHaveBeenCalledWith(expect.stringMatching(/\/SupperMeeting_Details$/), {
      In_SubdivsionId: '9301',
    });
  });

  it('Handler_OnClickPhotobook: Photobook with the household and its locality', async () => {
    navigate.mockClear();
    render(<V5 isEnabled />);
    await waitFor(() => expect(tag('Photos')).toBeInTheDocument());
    await screen.findByText('San Marcos');
    fireEvent.click(tag('Photos'));
    const links = await screen.findAllByText('Photobook');
    const link = links.at(-1);
    if (!link) throw new Error('no Photobook link');
    fireEvent.click(link);
    expect(navigate).toHaveBeenCalledWith(expect.stringMatching(/\/Photobook$/), {
      In_HouseholdId: '9002',
      In_LocalityId: '501',
    });
  });
});

describe('HouseholdDetails_Block client actions', () => {
  const data: GetHouseholdOutput = {
    Household: { HouseholdCard: { Id: '1', Household_Card_Content: { Address: 'Old address' } } },
    Out_HouseholdMembers: [{ Id: '11', MobilePhone: 'm', WorkPhone: 'w', HomePhone: 'h' }, { Id: '12' }],
    Out_NonHouseholdMembers: [],
    isVisible: true,
  };
  const accountForm = {
    AccountForm_PersonalInformation: { ShowLifeCycleDates: true, Email: 'e' },
    AccountForm_ContactInformation: {
      ShowMobileNumber: false,
      MobileNumber: 'm2',
      ShowWorkNumber: true,
      WorkNumber: 'w2',
      HomeNumber: 'h2',
    },
  };

  it('Action_HandlePreviewData: nothing without UsePreview', () => {
    expect(handlePreviewData(data, { UsePreview: false, FormattedAddress: 'x' })).toBe(data);
  });

  it('Action_HandlePreviewData: address, then the previewed member (home phone only for a householder)', () => {
    const out = handlePreviewData(data, {
      UsePreview: true,
      FormattedAddress: 'New address',
      HouseholdMemberId: '11',
      UI_AccountForm: accountForm,
    });
    expect(out.Household.HouseholdCard?.Household_Card_Content?.Address).toBe('New address');
    expect(out.Out_HouseholdMembers[0]).toEqual({
      Id: '11',
      DisplayAge: true,
      MobilePhone: '',
      WorkPhone: 'w2',
      Email: 'e',
      HomePhone: 'h',
    });
    const householder = handlePreviewData(data, {
      UsePreview: true,
      HouseholdMemberId: '11',
      isHouseholder: true,
      UI_AccountForm: accountForm,
    });
    expect(householder.Out_HouseholdMembers[0]?.HomePhone).toBe('h2');
    const unknown = handlePreviewData(data, { UsePreview: true, HouseholdMemberId: '99', UI_AccountForm: accountForm });
    expect(unknown.Out_HouseholdMembers).toBe(data.Out_HouseholdMembers);
  });

  it('OnAfterFetch: the Photos tag is disabled for a deceased, ancestry or hidden household', () => {
    const tags = initialTagsList();
    expect(setPhotosTagEnabled(tags, {}).map((t) => t.Enabled)).toEqual([undefined, true]);
    for (const option of ['IsDeceased', 'IsAncestry', 'IsHidden'] as const) {
      expect(setPhotosTagEnabled(tags, { DisplayOptions: { [option]: true } })[1]?.Enabled).toBe(false);
    }
  });

  it('OnChangeTag and Handler_TimelinePhotoSelected', () => {
    expect(selectedTagOf(initialTagsList())).toBe('About');
    expect(selectedTagOf([])).toBe('');
    const images = selectTimelinePhoto([{ Date: '2020-01-01' }, { Date: '2021-01-01', IsCurrent: true }], '2020-01-01');
    expect(images.map((i) => i.IsCurrent)).toEqual([true, false]);
  });
});
