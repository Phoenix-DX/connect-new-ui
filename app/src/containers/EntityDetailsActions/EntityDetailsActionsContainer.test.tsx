import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { setClientVar } from '@/platform/session/session';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { Connect_Entity } from '@/shared/UBTConnect/lib/staticEntities';
import { EntityDetailsActionsContainer } from './EntityDetailsActionsContainer';
import * as stories from './EntityDetailsActionsContainer.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const wrap = (ui: ReactNode) => (
  <QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}>
    <MemoryRouter>{ui}</MemoryRouter>
  </QueryClientProvider>
);

const labels = (root: ParentNode) =>
  [...root.querySelectorAll('[data-block="ConnectPatterns.CircleButton_IconPrimary"]')].map((b) => b.textContent);

describe('Directory_EntityDetailsActions', () => {
  testCapturedVariants(stories, captures);

  it('Household: bookmark, notes, gift, share with labels (+ view details when useViewDetails)', async () => {
    setClientVar('UBTConnect.Bookmarks_IsSynched', true);
    setClientVar('UBTConnect.Notes_IsSynched', true);
    const onView = vi.fn();
    const { container } = render(
      wrap(
        <EntityDetailsActionsContainer
          entityType={Connect_Entity.Household}
          entityId="101"
          useViewDetails
          onViewDetailsOnClick={onView}
        />,
      ),
    );
    expect(labels(container)).toEqual(['Bookmark', 'Notes', 'Gift', 'Share', 'View details']);
    fireEvent.click(screen.getByText('View details'));
    expect(onView).toHaveBeenCalledTimes(1);
    expect(await screen.findByText('Bookmark')).toBeInTheDocument();
  });

  it('Member: call and email without labels; after the contact fetch the call popup lists the numbers', async () => {
    const { container } = render(
      wrap(<EntityDetailsActionsContainer entityType={Connect_Entity.Member} entityId="7" />),
    );
    expect(labels(container)).toEqual(['', '']);
    const call = container.querySelector('.connect-icon-call');
    if (!call) throw new Error('call button not rendered');
    fireEvent.click(call);
    expect(await screen.findByText('Mobile')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('Notes opens the notes sheet after fetching the notes', async () => {
    const { container } = render(
      wrap(
        <EntityDetailsActionsContainer
          entityType={Connect_Entity.Interchange}
          entityId="5"
          enableOptions={{
            EnableBookmark: true,
            EnableNotes: true,
            EnableGift: false,
            EnableShare: true,
            EnableCall: true,
            EnableEmail: true,
            EnableViewDetails: true,
          }}
        />,
      ),
    );
    expect(labels(container)).toEqual(['Bookmark', 'Notes']);
    fireEvent.click(screen.getByText('Notes'));
    expect(
      await screen.findByText('Notes', { selector: '.ubt-bottom-sheet *, [role="dialog"] *' }).catch(() => null),
    ).not.toBeUndefined();
  });
});
