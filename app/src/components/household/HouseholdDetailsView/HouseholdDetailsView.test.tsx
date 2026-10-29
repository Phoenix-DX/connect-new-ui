import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { supperMeetingName, VITALE } from '@/mocks/fictional/directory';
import { KebabButtonMenu } from '@/components/ui/KebabButtonMenu';
import * as stories from './HouseholdDetailsView.stories';

const { Default, Loading, Offline, Preview } = composeStories(stories);

/* The real KebabButtonMenu, spied on for its inputs. */
vi.mock('@/components/ui/KebabButtonMenu', async (importOriginal) => {
  const real = await importOriginal<typeof import('@/components/ui/KebabButtonMenu')>();
  return { ...real, KebabButtonMenu: vi.fn(real.KebabButtonMenu) };
});

const block = (container: HTMLElement, name: string) => container.querySelectorAll(`[data-block="${name}"]`);
/** The detail card is inside a loading skeleton section. */
const cardIsLoading = (container: HTMLElement) =>
  block(container, 'ConnectCorePatterns.ImageCard_LazyLoading')[0]?.closest('.ubt-skeleton-section') != null;

describe('HouseholdDetailsView', () => {
  it('Default: the fetched household on the About tag, bookmarked, with its actions and members', () => {
    const { container } = render(<Default />);
    expect(screen.getByText('Julián & Fiorella Vitale')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
    expect(container.querySelector('.householdAddress')).not.toBeNull();
    expect(container.querySelector('.ubt-image-card__bookmarked')).not.toBeNull();
    expect(screen.queryByText('Your profile is private and only visible to you')).toBeNull();
    expect(block(container, 'ConnectCorePatterns.Member_ListItem')).toHaveLength(5);
    // The household actions, then one per member with HasCTAs (the two parents).
    expect(block(container, 'Directory_CommonBlocks.Directory_EntityDetailsActions')).toHaveLength(3);
    expect(block(container, 'CW_Share.ShareSheet')).toHaveLength(0);
    expect(cardIsLoading(container)).toBe(false);
  });

  it('Loading: the skeleton household before the tags ("Household gallery", Photobook link, private line)', () => {
    const { container } = render(<Loading />);
    expect(screen.getByText('Household gallery')).toBeInTheDocument();
    expect(screen.getAllByText('Photobook').length).toBeGreaterThan(0);
    expect(screen.getByText('Your profile is private and only visible to you')).toBeInTheDocument();
    expect(cardIsLoading(container)).toBe(true);
  });

  it('Offline: the skeleton stays when GetHousehold failed, with the About tag', () => {
    const { container } = render(<Offline />);
    expect(screen.getByText('Actions')).toBeInTheDocument();
    expect(cardIsLoading(container)).toBe(true);
  });

  it('Preview: disabled, with the kebab menu and the share sheet', () => {
    const { container } = render(<Preview />);
    expect(screen.getByText('Christopher & Amanda Ward')).toBeInTheDocument();
    expect(block(container, 'ConnectCorePatterns.KebabButtonMenu')).toHaveLength(1);
    expect(block(container, 'CW_Share.ShareSheet')).toHaveLength(1);
    expect(block(container, 'ConnectCorePatterns.Member_ListItem')).toHaveLength(3);
  });

  it('KebabButtonMenu In_DisableShare = not GetHousehold.IsVisible (live TST, HouseholdDetails_Block.mvc.js:560)', () => {
    const household = Preview.args.household;
    if (!household) throw new Error('no household');
    render(<Preview />);
    expect(vi.mocked(KebabButtonMenu).mock.lastCall?.[0].inDisableShare).toBe(false);
    render(<Preview household={{ ...household, isVisible: false }} />);
    expect(vi.mocked(KebabButtonMenu).mock.lastCall?.[0].inDisableShare).toBe(true);
  });

  it('Photos tag: the Coming Soon box only while mobileDirectoryHouseholdGallery is off (live TST, :1298-1301)', () => {
    const { container, rerender } = render(<Default selectedTag="Photos" />);
    expect(block(container, 'ConnectPatterns.ComingSoon')).toHaveLength(1);
    rerender(<Default selectedTag="Photos" hasHouseholdGallery />);
    expect(block(container, 'ConnectPatterns.ComingSoon')).toHaveLength(0);
  });

  it('hides the members off the About tag and when skeleton only; hides the actions on request', () => {
    const { container, rerender } = render(<Default selectedTag="Photos" />);
    expect(screen.getByText('Household gallery')).toBeInTheDocument();
    const members = block(container, 'Directory_Household_Blocks.HouseholdDetails_Members_Block')[0];
    expect(members?.parentElement?.className).toBe('hidden');
    rerender(<Default isSkeletonOnly />);
    expect(block(container, 'Directory_Household_Blocks.HouseholdDetails_Members_Block')).toHaveLength(0);
    rerender(<Default hidePhotobookActions />);
    expect(screen.queryByText('Actions')).toBeNull();
  });

  it('raises the link events of the About section', () => {
    const onLocalityClick = vi.fn();
    const onSupperMeetingClick = vi.fn();
    render(<Default onLocalityClick={onLocalityClick} onSupperMeetingClick={onSupperMeetingClick} />);
    fireEvent.click(screen.getByText('Bahia Blanca'));
    expect(onLocalityClick).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText(supperMeetingName(VITALE.supperMeetingId)));
    expect(onSupperMeetingClick).toHaveBeenCalledTimes(1);
  });
});
