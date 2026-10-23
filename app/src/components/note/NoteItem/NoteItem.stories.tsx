import type { Meta, StoryObj } from '@storybook/react-vite';
import { NoteItem } from './NoteItem';

const meta = { title: 'Shared/UBTConnectLibrary/Note_Item', component: NoteItem } satisfies Meta<typeof NoteItem>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Note texts are person data: fictional text only. */
const note = {
  inNoteId: '501',
  inNote: 'Bring the picnic blanket to the next visit',
  dateCreatedUtc: '2026-10-01T09:00:00',
  dateEditedUtc: '1900-01-01T00:00:00',
};

/** Not captured (no capture shows a note): the compiled view, reading. */
export const CompiledView: Story = { args: note };
/** Not captured: the search term is highlighted. */
export const Search: Story = { args: { ...note, inSearchString: 'sample' } };
/** Not captured: dimmed while another note is edited. */
export const Dimmed: Story = { args: { ...note, isDimmed: true } };
/** Not captured: the edit form. */
export const Editing: Story = { args: { ...note, isEditing: true } };
