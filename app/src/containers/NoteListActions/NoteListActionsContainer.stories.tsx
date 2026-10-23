import type { Meta, StoryObj } from '@storybook/react-vite';
import { NoteListActionsContainer } from './NoteListActionsContainer';

const meta = { title: 'Shared/UBTConnect_Utils/NoteListActions', component: NoteListActionsContainer } satisfies Meta<
  typeof NoteListActionsContainer
>;
export default meta;
type Story = StoryObj<typeof meta>;

/* The ids and fictional texts of the mock notes collection (mocks.ts), so edits and deletes reach it. */
export const SAMPLE_NOTES = {
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
      DateEditedUtc: '1900-01-01T00:00:00',
    },
    {
      Id: '503',
      Note: 'Check the parking plan',
      DateCreatedUtc: '2026-08-02T16:15:00',
      DateEditedUtc: '1900-01-01T00:00:00',
    },
  ],
};

/** Not captured (the notes sheet is closed in every capture): the compiled view with three notes. */
export const CompiledView: Story = { args: { notes: SAMPLE_NOTES, inItemId: '1', inNoteCategoryId: 'Household' } };
/** Not captured: preview of the first two notes. */
export const Preview: Story = { args: { ...CompiledView.args, inShowPreviewOnly: true } };
