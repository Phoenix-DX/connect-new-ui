import type { Meta, StoryObj } from '@storybook/react-vite';
import { OfflineDataSyncCore } from './OfflineDataSyncCore';

const meta = {
  title: 'Shared/osui/OfflineDataSyncCore',
  component: OfflineDataSyncCore,
} satisfies Meta<typeof OfflineDataSyncCore>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default */
export const V1: Story = {};
