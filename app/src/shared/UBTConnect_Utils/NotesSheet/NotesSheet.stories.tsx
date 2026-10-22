import type { Meta, StoryObj } from '@storybook/react-vite';
import { SAMPLE_NOTES } from '@/shared/UBTConnect_Utils/NoteListActions/NoteListActions.stories';
import { NotesSheet } from './NotesSheet';

const meta = { title: 'Shared/UBTConnect_Utils/NotesSheet', component: NotesSheet } satisfies Meta<typeof NotesSheet>;
export default meta;
type Story = StoryObj<typeof meta>;

const household = { inItemId: '1', inNoteCategoryId: 'Household', inNotes: SAMPLE_NOTES };

/** HouseholdCarousel/default: the sheet is closed, the root is empty (pack) */
export const V1: Story = { args: household };
/** Notes/loading: the sheet is closed, the root is empty */
export const V2: Story = { args: household };
/** Not captured (no capture opens the sheet): open, with three notes and the AddNote footer. */
export const Open: Story = { args: { ...household, inIsOpen: true } };
