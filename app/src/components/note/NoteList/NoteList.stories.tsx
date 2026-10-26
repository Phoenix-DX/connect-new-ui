import type { Meta, StoryObj } from '@storybook/react-vite';
import { NoteList } from './NoteList';

const meta = { title: 'Shared/UBTConnectLibrary/Note_Item_List', component: NoteList } satisfies Meta<typeof NoteList>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Note texts are person data: fictional text only. */
const NOTES = {
  Total: 3,
  Note_Item_List: [
    {
      Id: '501',
      Note: 'Bring the picnic blanket',
      DateCreatedUtc: '2026-10-01T09:00:00',
      DateEditedUtc: '1900-01-01T00:00:00',
    },
    {
      Id: '502',
      Note: 'Ask about the meeting room',
      DateCreatedUtc: '2026-09-20T10:30:00',
      DateEditedUtc: '2026-09-21T08:00:00',
    },
    {
      Id: '503',
      Note: 'Check the parking plan',
      DateCreatedUtc: '2026-08-02T16:15:00',
      DateEditedUtc: '1900-01-01T00:00:00',
    },
  ],
};

/** Not captured (no capture shows a note): the compiled view, all notes. */
export const CompiledView: Story = { args: { notes: NOTES } };
/** Not captured: preview of the first two notes and "Show all notes (3)". */
export const Preview: Story = { args: { notes: NOTES, inShowPreviewOnly: true } };
/** Not captured: one note edited, the others dimmed. */
export const Editing: Story = { args: { notes: NOTES, inEditingNoteId: '502' } };
/** Not captured: no note. */
export const Empty: Story = { args: { notes: { Total: 0, Note_Item_List: [] } } };
