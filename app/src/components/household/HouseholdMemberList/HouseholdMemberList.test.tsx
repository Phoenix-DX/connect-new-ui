import { composeStories } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { HouseholdMemberList } from './HouseholdMemberList';
import * as stories from './HouseholdMemberList.stories';

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
    const { container, rerender } = render(<V2 onMemberClick={onMember} />);
    const second = chevrons(container)[1];
    if (!second) throw new Error('no chevron');
    fireEvent.click(second);
    expect(onMember).toHaveBeenCalledWith('7002');
    rerender(<V2 onMemberClick={onMember} isEnabled={false} />);
    const first = chevrons(container)[0];
    if (!first) throw new Error('no chevron');
    fireEvent.click(first);
    expect(onMember).toHaveBeenCalledTimes(1);
  });

  it('shows five skeleton members while loading without members (OnReady, not captured)', () => {
    const { container } = render(<HouseholdMemberList isLoading />, { wrapper: Providers });
    expect(container.querySelectorAll('[data-block="ConnectCorePatterns.Member_ListItem"]')).toHaveLength(5);
  });

  it('raises the married child click from its chevron; the parent checks the region (not captured)', () => {
    const onNonMember = vi.fn();
    const child = { Id: '7101', HouseholdId: '9101', Title: 'Ana', HasNavigation: true };
    const { container } = render(<HouseholdMemberList nonMembers={[child]} onNonMemberClick={onNonMember} />, {
      wrapper: Providers,
    });
    const chevron = chevrons(container)[0];
    if (!chevron) throw new Error('no chevron');
    fireEvent.click(chevron);
    expect(onNonMember).toHaveBeenCalledWith(child);
  });

  it('renders the call-to-actions of the parent for a member with HasCTAs only', () => {
    const renderMemberActions = vi.fn(() => <span>actions</span>);
    render(
      <HouseholdMemberList
        members={[
          { Id: '1', Title: 'A', HasCTAs: true },
          { Id: '2', Title: 'B', HasCTAs: false },
        ]}
        renderMemberActions={renderMemberActions}
      />,
      { wrapper: Providers },
    );
    expect(renderMemberActions).toHaveBeenCalledTimes(1);
    expect(renderMemberActions).toHaveBeenCalledWith(expect.objectContaining({ Id: '1' }));
  });
});
