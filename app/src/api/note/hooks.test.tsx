import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useEntityNotesQuery, useNoteCardsQuery } from './hooks';
import { noteKeys } from './keys';
import type { EntityNotesCallInputs, NotesVariables } from './types';

const notesVariables: NotesVariables = {
  headerIsScrolled: false,
  notePills: [],
  notesFilter: { noteCategoryId: '', searchTerm: '', sortByNewest: '', years: [] },
  hasFiltersApplied: false,
  filterBottomSheetId: '',
  bottomSheetIdFilterIsLoaded: false,
  bottomSheetIdFilterShowSubscriptionOnClick: false,
  years: [],
  pageSize: 20,
  pageNumber: 1,
  maxRecords: '0',
  notesList: [],
  resetPillsValue: true,
  pillsLoaded: false,
  notesLoading: true,
};

const entityInputs: EntityNotesCallInputs = { EntityType: 'Household', EntityId: '1', NoteCategoryId: 'Household' };

/** A client with the library defaults (retry 3), so the tests see the options of the hooks. */
function providerOf(client: QueryClient) {
  return function Provider({ children }: { children: ReactNode }) {
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
  };
}
const calls = () => (window.__osCalls ?? []).map((c) => c.action);

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
});

describe('note query keys', () => {
  it('the inputs are part of the key', () => {
    expect(noteKeys.cards(notesVariables)).toEqual(['note', 'cards', notesVariables]);
    expect(noteKeys.entity(entityInputs)).toEqual(['note', 'entity', entityInputs]);
  });
});

describe('useNoteCardsQuery', () => {
  it('calls the server on each mount and keeps nothing in the cache (staleTime 0, gcTime 0)', async () => {
    const client = new QueryClient();
    const first = renderHook(() => useNoteCardsQuery(notesVariables), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(first.result.current.isSuccess).toBe(true);
    });
    expect(first.result.current.data?.total).toBe('1');
    first.unmount();
    await waitFor(() => {
      expect(client.getQueryCache().find({ queryKey: noteKeys.cards(notesVariables) })).toBeUndefined();
    });
    const second = renderHook(() => useNoteCardsQuery(notesVariables), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(second.result.current.isSuccess).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetNotes', 'DataActionGetNotes']);
  });

  it('does not call the server when the caller disables it, and does not retry a failed call', async () => {
    const client = new QueryClient();
    const disabled = renderHook(() => useNoteCardsQuery(notesVariables, { enabled: false }), {
      wrapper: providerOf(client),
    });
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(disabled.result.current.fetchStatus).toBe('idle');
    expect(calls()).toEqual([]);

    sessionStorage.setItem('mock:mock', 'error');
    const failed = renderHook(() => useNoteCardsQuery(notesVariables), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(failed.result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetNotes']);
  });
});

describe('useEntityNotesQuery', () => {
  it('calls the server on each mount and keeps nothing in the cache (staleTime 0, gcTime 0)', async () => {
    const client = new QueryClient();
    const first = renderHook(() => useEntityNotesQuery(entityInputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(first.result.current.isSuccess).toBe(true);
    });
    expect(first.result.current.data?.Total).toBe(3);
    first.unmount();
    await waitFor(() => {
      expect(client.getQueryCache().find({ queryKey: noteKeys.entity(entityInputs) })).toBeUndefined();
    });
    const second = renderHook(() => useEntityNotesQuery(entityInputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(second.result.current.isSuccess).toBe(true);
    });
    expect(calls()).toEqual(['DataActionFetchNotes', 'DataActionFetchNotes']);
  });

  it('does not retry a failed call', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const failed = renderHook(() => useEntityNotesQuery(entityInputs), { wrapper: providerOf(new QueryClient()) });
    await waitFor(() => {
      expect(failed.result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['DataActionFetchNotes']);
  });
});
