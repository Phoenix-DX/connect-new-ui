import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { App_IconBadge } from '../../UBTConnect/App_IconBadge';
import { CustomText } from '../../UBTConnectLibrary/CustomText';
import { Icon } from '../../UBTConnectLibrary/Icon';
import { BottomBarItem } from './BottomBarItem';

const meta = {
  title: 'Shared/osui/BottomBarItem',
  component: BottomBarItem,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof BottomBarItem>;
export default meta;
type Story = StoryObj<typeof meta>;

/* The BottomBarMenu content of each item, as BottomBarMenu passes it. */
const label = (text: string) => <CustomText inText={text} inTextOptions={{ Color: 'neutral-6', FontSize: 'xs' }} />;

/** BookmarksByGroup/default: Icon item */
export const V1: Story = {
  args: { icon: <Icon inIconId="connect-icon-home" inColorId="neutral-6" inSizeId="icon-base" />, text: label('Home') },
};
/** BookmarksByGroup/default: Updates item with its badge */
export const V2: Story = {
  args: {
    icon: <App_IconBadge badgeNumber="3" maxNotifications={9} iconId="connect-icon-list_alt" iconColor="neutral-6" />,
    text: label('Updates'),
  },
};
