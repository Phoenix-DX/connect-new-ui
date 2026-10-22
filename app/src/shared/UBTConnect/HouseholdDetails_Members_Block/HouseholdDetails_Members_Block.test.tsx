import { composeStories } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { HouseholdDetails_Members_Block } from './HouseholdDetails_Members_Block';
import * as stories from './HouseholdDetails_Members_Block.stories';

/* HasAccessToRegion reads the signed-in user's subscription (shell getUserInformation): stubbed here. */
vi.mock('@/shared/UBTConnect/lib/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/shared/UBTConnect/lib/actions')>()),
  hasAccessToRegion: vi.fn(() => Promise.resolve(true)),
}));

function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter>{children}</MemoryRouter>
    </QueryClientProvider>
  );
}

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V2 } = composeStories(stories);
const chevrons = (root: Element) =>
  root.querySelectorAll('.flex-direction-column [data-block="ConnectPatterns.Icon"] > div');

describe('HouseholdDetails_Members_Block', () => {
  testCapturedVariants(stories, captures);

  it('raises Event_MemberOnClick from a chevron, never when disabled', () => {
    const onMember = vi.fn();
    const { container, rerender } = render(<V2 onEventMemberOnClick={onMember} />);
    const second = chevrons(container)[1];
    if (!second) throw new Error('no chevron');
    fireEvent.click(second);
    expect(onMember).toHaveBeenCalledWith('7002');
    rerender(<V2 onEventMemberOnClick={onMember} isEnabled={false} />);
    const first = chevrons(container)[0];
    if (!first) throw new Error('no chevron');
    fireEvent.click(first);
    expect(onMember).toHaveBeenCalledTimes(1);
  });

  it('shows five skeleton members while loading without members (OnReady, not captured)', () => {
    const { container } = render(<HouseholdDetails_Members_Block inIsLoading />, { wrapper: Providers });
    expect(container.querySelectorAll('[data-block="ConnectCorePatterns.Member_ListItem"]')).toHaveLength(5);
  });

  it('raises Event_NonMemberOnClick for a married child in a region the user can access (not captured)', async () => {
    const onNonMember = vi.fn();
    const { container } = render(
      <HouseholdDetails_Members_Block
        inNonHouseholdMembers={[{ Id: '7101', HouseholdId: '9101', Title: 'Ana', HasNavigation: true }]}
        onEventNonMemberOnClick={onNonMember}
      />,
      { wrapper: Providers },
    );
    const chevron = chevrons(container)[0];
    if (!chevron) throw new Error('no chevron');
    fireEvent.click(chevron);
    await waitFor(() => {
      expect(onNonMember).toHaveBeenCalledWith('9101');
    });
  });
});
