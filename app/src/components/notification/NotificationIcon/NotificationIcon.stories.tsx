import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { NotificationIcon } from './NotificationIcon';

/** The values of the captured screens: 2 unread notifications (the captured number is masked), synchronised or not.
    The bell is an OSLink, which needs a router. */
const meta = {
  title: 'Shared/UBTConnect/App_NotificationIcon',
  component: NotificationIcon,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    isLoading: false,
    unreadNumber: 2,
    lastChecked: '1900-01-01T00:00:00',
    onIconClick: () => undefined,
    onRefreshUpdated: () => undefined,
  },
} satisfies Meta<typeof NotificationIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

/** CountryList/default (pack: wrappers only) */
export const V1: Story = {};
/** HomeFeed/default: notifications synchronised */
export const V2: Story = {};
/** HomeFeed/loading: notifications not synchronised yet (skeleton) */
export const V3: Story = { args: { isLoading: true } };
