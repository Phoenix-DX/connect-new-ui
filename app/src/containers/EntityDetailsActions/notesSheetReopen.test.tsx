import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, fireEvent, render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { setClientVar } from '@/platform/session/session';
import { Connect_Entity } from '@/lib/ubtConnect/staticEntities';
import { freshPage } from '@/test/testSupport';
import { fetchNotes } from './api';
import { EntityDetailsActionsContainer } from './EntityDetailsActionsContainer';

/* PendingOpen and the deferred reopen of the notes sheet (live UBTConnect.Directory_CommonBlocks
   .Directory_EntityDetailsActions.mvc.js: Handler_AddNotesOnClick :1395-1435, Handler_OnNotesSheetClosed :1114-1148,
   its JavaScript node `setTimeout(Handler_OpenNotesSheetDeferred, 50)` :2478-2484, Handler_OpenNotesSheetDeferred
   :1151-1166). The NotesSheet is a stub that shows ShowNotesSheet and raises OnNoteSheetClosed; FetchNotes answers at
   once. */
vi.mock('@/components/note/NotesSheet', () => ({
  NotesSheet: ({ inIsOpen = false, onOnNoteSheetClosed }: { inIsOpen?: boolean; onOnNoteSheetClosed?: () => void }) => (
    <div data-testid="notes-sheet" data-open={String(inIsOpen)}>
      <button type="button" onClick={onOnNoteSheetClosed}>
        Close sheet
      </button>
    </div>
  ),
}));
vi.mock('./api', async (importOriginal) => ({
  ...(await importOriginal<typeof import('./api')>()),
  fetchNotes: vi.fn(),
}));

const wrap = (ui: ReactNode) => (
  <QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}>
    <MemoryRouter>{ui}</MemoryRouter>
  </QueryClientProvider>
);
const sheetOpen = () => screen.getByTestId('notes-sheet').getAttribute('data-open');
const clickNotes = async () => {
  await act(async () => {
    fireEvent.click(screen.getByText('Notes'));
    await Promise.resolve();
  });
};

describe('Directory_EntityDetailsActions notes sheet reopen (PendingOpen)', () => {
  beforeEach(() => {
    freshPage();
    setClientVar('UBTConnect.Bookmarks_IsSynched', true);
    setClientVar('UBTConnect.Notes_IsSynched', true);
    vi.mocked(fetchNotes).mockResolvedValue({});
    render(wrap(<EntityDetailsActionsContainer entityType={Connect_Entity.Household} entityId="101" />));
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.mocked(fetchNotes).mockReset();
  });

  it('Notes while the sheet is open: the close hides it, and it opens again after 50 ms, not after 49', async () => {
    await clickNotes();
    expect(sheetOpen()).toBe('true');
    await clickNotes();
    expect(sheetOpen()).toBe('true');
    vi.useFakeTimers();
    fireEvent.click(screen.getByText('Close sheet'));
    expect(sheetOpen()).toBe('false');
    act(() => {
      vi.advanceTimersByTime(49);
    });
    expect(sheetOpen()).toBe('false');
    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(sheetOpen()).toBe('true');
  });

  it('a close without PendingOpen keeps the sheet closed', async () => {
    await clickNotes();
    vi.useFakeTimers();
    fireEvent.click(screen.getByText('Close sheet'));
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(sheetOpen()).toBe('false');
  });
});
