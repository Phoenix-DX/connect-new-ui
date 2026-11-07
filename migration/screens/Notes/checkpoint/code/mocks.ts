import { http, HttpResponse, type RequestHandler } from 'msw';
import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import { contractHandler } from '@/mocks/contract';
import { mockDelay, scenario } from '@/mocks/scenario';
import { osList, wireList } from '@/lib/os-wire';
import { Choice } from '@/lib/ubtConnect/staticEntities';
import { NULL_DATE_TIME, notesCollection, type NoteRow } from '@/containers/NoteListActions/mocks';
import { CAROUSEL_SCHOOLS } from '@/containers/OneSchoolGlobalDetails/mocks';
import { LOCALITY } from '@/mocks/fictional/directory';
import { NoteCategory2 } from './components/staticEntities';

/** The wire shape of a note card (Connect_Notes_CS UI_Note_CardItem), as the contract types it. */
type NoteCardItemWire = ActionOutputs<
  PathOf<'UBTConnect', 'Notes/DataActionGetNotes'>
>['Out_Notes']['NoteCardItem_List']['List'][number] & {
  /** INTERIM (item 10): fields of TST 2026-10-29 that the contract does not list yet (api/note/mapper.ts). */
  ItemId2: string;
  HasDetailAccess: boolean;
};

type NotePillsInputs = ActionInputs<PathOf<'UBTConnect_Notes_MCS', 'ActionGet_NotePills_ByNoteCategoryIds'>>;
type NotePillsOutputs = ActionOutputs<PathOf<'UBTConnect_Notes_MCS', 'ActionGet_NotePills_ByNoteCategoryIds'>>;

/* The pills that TST answered on 2026-10-29 for an empty category list (capture dom/default.html:164-249: the TST user
   has no notes, and the answer has nine pills). The identifiers are the NoteCategory2 values of the texts; the second
   text is masked in the capture (5 characters): MOCK ASSUMPTION "Feeds" for Feed Item (question Notes Q8). */
const TST_PILLS = [
  ['Assemble', NoteCategory2.AssembleEvent],
  ['Feeds', NoteCategory2.FeedItem],
  ['Households', NoteCategory2.Household],
  ['Interchange', NoteCategory2.Interchange],
  ['LDM', NoteCategory2.LDMEvent],
  ['Members', NoteCategory2.Member],
  ['OneSchool Global', NoteCategory2.OneSchoolGlobal],
  ['Orbit', NoteCategory2.OrbitEvent],
  ['Supper Meetings', NoteCategory2.SupperMeeting],
].map(([Text = '', Identifier = '']) => ({ Text, Identifier }));

/* Notes (P-MOCKS, P-MUTATION).
   - UBTConnect_Notes_MCS/ActionGet_NotePills_ByNoteCategoryIds: an empty category list answers the nine pills of the
     TST capture of 2026-10-29 (`TST_PILLS`; the capture of 2026-10-14 answered none). MOCK ASSUMPTION (user decision,
     Notes Q3, 2026-10-15): a list of category ids answers one pill per sent id with Text = Identifier = that id.
   - Notes/DataActionGetNotes: person data, never recorded. OutSystems MCP (Notes Q2): a pass-through to
     Connect_Notes_CS.GetNotes(PageNumber, FilterNote = Notes_Filter, PageSize) → Out_Notes; its logic is not readable.
     It reads the notes mock collection (`notesCollection`), so notes added, edited or deleted in the notes blocks show
     up here. MOCK ASSUMPTION (user decision, Notes Q2, 2026-10-15): the mock applies the Notes_Filter fields:
       SearchTerm    case-insensitive "contains" on the card title and the note texts ('' = all);
       NoteCategoryId the card's category equals it ('' = all; Notes_Filter holds one category id);
       Years         the note's year (edited date, else created date) is in the list (empty = all);
       SortByNewest  the selected sort: Choice.No (Oldest to Newest) oldest first, otherwise newest first;
       PageNumber / PageSize  pages of PageSize cards; Total = the number of matching cards.
     FICTIONAL: one card per ItemId + NoteCategoryId, the card texts below, SourceHeader.Label = the category id.
   Scenarios: real (the fictional notes: 3 of a household, 1 each of two OneSchool Global schools), empty (no notes at all, as the captured TST user: Notes Q1; the app start's
   Sync_Info_GetMain answers no LocalNotes in this scenario, so SyncNotes leaves the local notes copy empty), error
   (HTTP 500), loading (never answers). */

/* Two fictional OneSchool Global notes (OneSchoolGlobalCarousel Q2 (a), user 2026-10-29), so the demo opens the
   carousel from Notes: the OneSchool Global pill lists the two schools, and a card opens OneSchoolGlobalCarousel with
   the ItemIds of the list (Notes.mvc.js:1565-1586). Schools 1431 and 1432 of the carousel cast, not 1430: school 1430
   is the captured school of OneSchoolGlobalDetails and OneSchoolGlobalCarousel, which had no note on TST. Added to the
   notes mock collection when the mocks load, so the app start's LocalNotes (platform/bootstrap/mocks.ts) and the
   notes blocks see them too; the `empty` scenario still answers no notes. */
const OSG_NOTES: readonly NoteRow[] = [
  ['504', '1431', 'Ask about the open day dates', '2026-09-12T08:45:00'],
  ['505', '1432', 'Send the enrolment form to the office', '2026-07-18T14:20:00'],
].map(([Id = '', ItemId = '', Note = '', DateCreatedUtc = '']) => ({
  Id,
  ItemId,
  NoteCategoryId: NoteCategory2.OneSchoolGlobal,
  Note,
  DateCreatedUtc,
  DateEditedUtc: NULL_DATE_TIME,
}));
for (const note of OSG_NOTES) if (!notesCollection().get(note.Id)) notesCollection().upsert({ ...note });

/** Fictional card texts per card (NoteCategoryId|ItemId; no real household or school): the household of the notes
    seed, and the two schools with their carousel names (subtitle: the country of the directory cast). */
const FICTIONAL_ITEMS: Record<string, { title: string; subtitle: string }> = {
  'Household|1': { title: 'Fenwick Household', subtitle: 'Northbrook' },
  ...Object.fromEntries(
    OSG_NOTES.map((n) => [
      `${n.NoteCategoryId}|${n.ItemId}`,
      { title: CAROUSEL_SCHOOLS.find((s) => s.id === n.ItemId)?.name ?? '', subtitle: LOCALITY.country },
    ]),
  ),
};

const noteDate = (n: NoteRow) => (n.DateEditedUtc === NULL_DATE_TIME ? n.DateCreatedUtc : n.DateEditedUtc);

/** The user's notes: none in the `empty` scenario (Notes Q1), else the notes mock collection. */
const userNotes = (): NoteRow[] => (scenario() === 'empty' ? [] : (notesCollection().all() as NoteRow[]));

function noteCards(rows: NoteRow[]): NoteCardItemWire[] {
  const cards = new Map<string, NoteRow[]>();
  for (const n of rows) {
    const key = `${n.NoteCategoryId}|${n.ItemId}`;
    cards.set(key, [...(cards.get(key) ?? []), n]);
  }
  return [...cards.values()].map((notes) => {
    const [first] = notes as [NoteRow, ...NoteRow[]];
    const texts = FICTIONAL_ITEMS[`${first.NoteCategoryId}|${first.ItemId}`] ?? {
      title: `Item ${first.ItemId}`,
      subtitle: '',
    };
    return {
      Id: `${first.NoteCategoryId}-${first.ItemId}`,
      ItemId: first.ItemId,
      ItemId2: '0',
      HasDetailAccess: true,
      NoteCategoryId: first.NoteCategoryId,
      NoteCardContent: {
        Title: texts.title,
        Subtitle: texts.subtitle,
        SourceHeader: { IconId: '', ImageURL: '', Initials: '', Label: first.NoteCategoryId },
        Notes: {
          Total: notes.length,
          Note_Item_List: wireList(
            notes.map((n) => ({
              Id: n.Id,
              Note: n.Note,
              DateCreatedUtc: n.DateCreatedUtc,
              DateEditedUtc: n.DateEditedUtc,
            })),
          ),
        },
      },
    };
  });
}

export const handlers: RequestHandler[] = [
  /* Not a contractHandler: the `empty` scenario empties every list of a contractHandler answer (mocks/contract.ts), but
     TST answered the nine pills for the user without notes (capture 2026-10-29), so this answer keeps its list in
     `empty` (question Notes Q8). The other scenarios as contractHandler: error → HTTP 500, loading → never answers. */
  http.post('/api/UBTConnect_Notes_MCS/ActionGet_NotePills_ByNoteCategoryIds', async ({ request }) => {
    await mockDelay();
    if (scenario() === 'error') return HttpResponse.json({ error: 'mock error' }, { status: 500 });
    const inputs = (await request.json().catch(() => ({}))) as NotePillsInputs;
    const ids = [...new Set(osList(inputs.In_NoteCategoryIds))];
    const data: NotePillsOutputs = {
      Out_NotePills: wireList(ids.length === 0 ? TST_PILLS : ids.map((id) => ({ Text: id, Identifier: id }))),
    };
    return HttpResponse.json({ data });
  }),
  contractHandler('UBTConnect', 'Notes/DataActionGetNotes', ({ Notes_Filter, PageNumber = 1, PageSize = 20 }) => {
    const term = (Notes_Filter?.SearchTerm ?? '').toLowerCase();
    const category = Notes_Filter?.NoteCategoryId ?? '';
    const years = osList(Notes_Filter?.Years);
    const oldestFirst = Notes_Filter?.SortByNewest === Choice.No;
    const rows = userNotes()
      .filter((n) => category === '' || n.NoteCategoryId === category)
      .filter((n) => years.length === 0 || years.includes(noteDate(n).slice(0, 4)))
      .sort((a, b) => (oldestFirst ? 1 : -1) * noteDate(a).localeCompare(noteDate(b)));
    const cards = noteCards(rows).filter(
      (c) =>
        term === '' ||
        c.NoteCardContent.Title.toLowerCase().includes(term) ||
        osList(c.NoteCardContent.Notes.Note_Item_List).some((i) => i.Note.toLowerCase().includes(term)),
    );
    return {
      Out_Notes: {
        Total: String(cards.length),
        NoteCardItem_List: wireList(cards.slice((PageNumber - 1) * PageSize, PageNumber * PageSize)),
      },
    };
  }),
];
