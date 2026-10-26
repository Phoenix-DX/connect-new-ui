import { fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { localNotesSchemas, memoryDatabase, setLocalNotesDatabase, syncNotes } from '@/platform/storage/localEntities';
import { freshPage, recordBodies } from '@/test/testSupport';
import Notes from './NotesPage';

/* The page with its flows (useNotes) in the app frame on a memory router, with the MSW mocks of the test setup
   (pages/Notes/mocks.ts: the cards of the notes mock collection, one fictional household with three notes; one pill
   per local note category). The local notes copy is an in-memory database with two fictional categories. */
const PATH = '/UBTConnect/Notes';
const routes = {
  [PATH]: <Notes />,
  '/UBTConnect/HouseholdDetails': <p>HouseholdDetails screen</p>,
};
const NULL_DATE_TIME = '1900-01-01T00:00:00';
const localNote = (id: string, noteCategoryId: string, itemId: string, dateCreatedUtc: string) => ({
  Id: id,
  UserId: Number(MOCK_USER_ID),
  NoteId: `50${id}`,
  NoteCategoryId: noteCategoryId,
  ItemId: itemId,
  DateCreatedUtc: dateCreatedUtc,
  DateEditedUtc: NULL_DATE_TIME,
});

/** The text of a pill of the category row. */
const pill = (text: string) => {
  const found = [...document.querySelectorAll('[data-block="ConnectPatterns.TagToggle"] span')].find(
    (span) => span.textContent === text,
  );
  if (!(found instanceof HTMLElement)) throw new Error(`no pill ${text}`);
  return found;
};

beforeEach(async () => {
  freshPage();
  resetNavigation();
  setSignedInUser(MOCK_USER_ID);
  setLocalNotesDatabase(memoryDatabase(localNotesSchemas()));
  await syncNotes([
    localNote('1', 'Household', '1', '2026-10-01T09:00:00'),
    localNote('2', 'Supper Meeting', '7', '2025-03-01T09:00:00'),
  ]);
});
afterEach(() => {
  setLocalNotesDatabase(null);
  setSignedInUser(null);
  sessionStorage.clear();
});

describe('Notes page', () => {
  it('shows the title, the category pills, the filter label and the note cards', async () => {
    const { container } = renderRoutes(routes, PATH);
    expect(screen.getByText('My Notes')).toBeInTheDocument();
    expect(await screen.findByText('Fenwick Household')).toBeInTheDocument();
    expect(screen.getByText('Northbrook')).toBeInTheDocument();
    expect(pill('All')).toBeInTheDocument();
    expect(pill('Household')).toBeInTheDocument();
    expect(pill('Supper Meeting')).toBeInTheDocument();
    expect(screen.getByText('Filter')).toBeInTheDocument();
    expect(container.querySelectorAll('[data-block="Notes.NoteCard_Item"]')).toHaveLength(1);
    expect(container.querySelector('[data-block="Notes.Notes_FilterSheet"]')?.id).toBe('$b11');
    // One card only: the search input stays disabled (GetNotes.List.Length > 1).
    expect(screen.getByPlaceholderText('Search')).toBeDisabled();
  });

  it('a pill sends its category with DataActionGetNotes', async () => {
    const bodies = recordBodies('UBTConnect/Notes/DataActionGetNotes');
    renderRoutes(routes, PATH);
    await screen.findByText('Fenwick Household');
    await waitFor(() => {
      expect(bodies).toHaveLength(1);
    });
    fireEvent.click(pill('Supper Meeting'));
    await waitFor(() => {
      expect(bodies[1]).toMatchObject({ Notes_Filter: { NoteCategoryId: 'Supper Meeting' }, PageNumber: 1 });
    });
    expect(await screen.findByText('No Notes found')).toBeInTheDocument();
  });

  it('a card of a household opens HouseholdDetails', async () => {
    const { at } = renderRoutes(routes, PATH);
    fireEvent.click(await screen.findByText('Fenwick Household'));
    expect(await screen.findByText('HouseholdDetails screen')).toBeInTheDocument();
    expect(at()).toBe('/UBTConnect/HouseholdDetails?HouseholdId=1');
  });

  it('the empty scenario shows "No Notes found"', async () => {
    sessionStorage.setItem('mock:mock', 'empty');
    renderRoutes(routes, PATH);
    expect(await screen.findByText('No Notes found')).toBeInTheDocument();
    expect(screen.getByText('We were unable to find any Notes to')).toBeInTheDocument();
  });
});
