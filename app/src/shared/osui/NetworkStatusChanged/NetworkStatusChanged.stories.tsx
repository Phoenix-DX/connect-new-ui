import type { Meta, StoryObj } from '@storybook/react-vite';
import { NetworkStatusChanged } from './NetworkStatusChanged';

const meta = {
  title: 'Shared/osui/NetworkStatusChanged',
  component: NetworkStatusChanged,
} satisfies Meta<typeof NetworkStatusChanged>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default */
export const V1: Story = {};
