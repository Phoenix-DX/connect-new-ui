import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { setClientVar } from '../../../shell/session';
import { Connect_BottomBar_Items } from '../../UBTConnect_Utils/lib/staticEntities';
import { BottomBarMenu } from './BottomBarMenu';

const meta = {
  title: 'Shared/UBTConnect/BottomBarMenu',
  component: BottomBarMenu,
  decorators: [
    /* Stories only: 3 unread updates, checked just now (the captured number is masked; no refresh call). */
    (Story) => {
      setClientVar('UBTConnect.Directory_Updates_UnreadCount', 3);
      setClientVar('UBTConnect.Directory_Updates_UnreadCount_LastCheck', new Date().toISOString().slice(0, 19));
      return (
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      );
    },
  ],
} satisfies Meta<typeof BottomBarMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default (pack: wrapper only) */
export const V1: Story = { args: { activeItem: Connect_BottomBar_Items.Bookmarks, isRootPage: true } };
/** HomeFeed/default: Home active (full markup) */
export const V2: Story = { args: { activeItem: Connect_BottomBar_Items.Home, isRootPage: true } };
