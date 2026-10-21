import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './Spinner';

const meta = {
  title: 'Shared/Connect2_LegacyShared/Spinner',
  component: Spinner,
} satisfies Meta<typeof Spinner>;
export default meta;
type Story = StoryObj<typeof meta>;

/** MessageDetail/loading: the spinner while the message loads. */
export const V1: Story = { args: { id: 'b1-$b3', showLoader: true } };

/** MessageList/default: hidden (ShowLoader false). */
export const V2: Story = { args: { id: 'b1-$b11', showLoader: false } };
