import type { Meta, StoryObj } from '@storybook/react-vite';
import { KebabButton_BookmarkNotes } from './KebabButton_BookmarkNotes';

const meta = {
  title: 'Shared/UBTConnectLibrary/KebabButton_BookmarkNotes',
  component: KebabButton_BookmarkNotes,
} satisfies Meta<typeof KebabButton_BookmarkNotes>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (no capture shows a note): the compiled view, enabled. */
export const CompiledView: Story = {};
/** Not captured: disabled (another note is being edited). */
export const Disabled: Story = { args: { isEnable: false } };
