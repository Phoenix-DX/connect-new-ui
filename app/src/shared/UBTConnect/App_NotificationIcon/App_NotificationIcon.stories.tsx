import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { setClientVar } from '@/platform/session/session';
import { App_NotificationIcon } from './App_NotificationIcon';

/** Stories only: the client variables the captured screen had (2 unread notifications; synchronised or not). */
const notifications =
  (isSynched: boolean): Decorator =>
  (Story) => {
    setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', 2);
    setClientVar('UBTConnect.Notifications_IsSynched', isSynched);
    return (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    );
  };

const meta = { title: 'Shared/UBTConnect/App_NotificationIcon', component: App_NotificationIcon } satisfies Meta<
  typeof App_NotificationIcon
>;
export default meta;
type Story = StoryObj<typeof meta>;

/** CountryList/default (pack: wrappers only) */
export const V1: Story = { decorators: [notifications(true)] };
/** HomeFeed/default: notifications synchronised */
export const V2: Story = { decorators: [notifications(true)] };
/** HomeFeed/loading: notifications not synchronised yet (skeleton) */
export const V3: Story = { decorators: [notifications(false)] };
