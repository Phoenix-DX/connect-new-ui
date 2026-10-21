import type { Meta, StoryObj } from '@storybook/react-vite';
import { MessageList_NoResults } from './MessageList_NoResults';

const meta = {
  title: 'Shared/Connect2_LegacyShared/MessageList_NoResults',
  component: MessageList_NoResults,
} satisfies Meta<typeof MessageList_NoResults>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (no screen state shows it): the compiled view with three suggestion texts. */
export const CompiledView: Story = {
  args: {
    placeholder1: 'Suggestion one',
    placeholder2: 'Suggestion two',
    placeholder3: 'Suggestion three',
  },
};
