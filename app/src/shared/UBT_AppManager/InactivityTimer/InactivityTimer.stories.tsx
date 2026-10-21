import type { Meta, StoryObj } from '@storybook/react-vite';
import { InactivityTimer } from './InactivityTimer';

const meta = {
  title: 'Shared/UBT_AppManager/InactivityTimer',
  component: InactivityTimer,
} satisfies Meta<typeof InactivityTimer>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default */
export const V1: Story = {};
