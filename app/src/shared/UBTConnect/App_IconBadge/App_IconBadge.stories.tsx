import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { UBT_Color, UBT_Icons2 } from '../lib/staticEntities';
import { App_IconBadge } from './App_IconBadge';

const meta = {
  title: 'Shared/UBTConnect/App_IconBadge',
  component: App_IconBadge,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof App_IconBadge>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: the Updates item of the bottom bar (pack: wrapper only) */
export const V1: Story = {
  args: { badgeNumber: '3', maxNotifications: 9, iconId: 'connect-icon-list_alt', iconColor: 'neutral-6' },
};
/** HomeFeed/default: the bell (App_NotificationIcon), notifications synchronised */
export const V2: Story = {
  args: { badgeNumber: '2', maxNotifications: 9, iconId: UBT_Icons2.Notifications, iconColor: UBT_Color.Neutral0 },
};
/** HomeFeed/loading: the bell while notifications are not synchronised (skeleton) */
export const V3: Story = { args: { ...V2.args, isLoading: true } };
