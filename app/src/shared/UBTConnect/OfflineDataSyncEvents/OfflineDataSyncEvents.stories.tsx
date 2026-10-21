import type { Meta, StoryObj } from '@storybook/react-vite';
import { OfflineDataSyncEvents } from './OfflineDataSyncEvents';

const meta = {
  title: 'Shared/UBTConnect/OfflineDataSyncEvents',
  component: OfflineDataSyncEvents,
} satisfies Meta<typeof OfflineDataSyncEvents>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default */
export const V1: Story = {};
