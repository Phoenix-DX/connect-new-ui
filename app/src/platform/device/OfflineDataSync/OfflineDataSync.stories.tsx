import type { Meta, StoryObj } from '@storybook/react-vite';
import { OfflineDataSync } from './OfflineDataSync';

const meta = {
  title: 'Shared/UBTConnect/OfflineDataSyncEvents',
  component: OfflineDataSync,
} satisfies Meta<typeof OfflineDataSync>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default */
export const V1: Story = {};
