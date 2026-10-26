import type { Meta, StoryObj } from '@storybook/react-vite';
import { MessageListNoResults } from './MessageListNoResults';

const meta = {
  title: 'Shared/Connect2_LegacyShared/MessageList_NoResults',
  component: MessageListNoResults,
} satisfies Meta<typeof MessageListNoResults>;
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
