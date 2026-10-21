import type { Meta, StoryObj } from '@storybook/react-vite';
import { AddNote } from './AddNote';

const meta = { title: 'Shared/UBTConnectLibrary/AddNote', component: AddNote } satisfies Meta<typeof AddNote>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (the notes sheet is closed in every capture): the compiled view, empty note. */
export const CompiledView: Story = {};
