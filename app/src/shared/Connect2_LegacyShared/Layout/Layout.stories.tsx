import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { CommonUI_InsideLayout } from '@/shared/UBTConnect/CommonUI_InsideLayout';
import { MenuIcon_Back } from '@/shared/Connect2_LegacyShared/MenuIcon_Back';
import { Layout } from './Layout';

const meta = {
  title: 'Shared/Connect2_LegacyShared/Layout',
  component: Layout,
} satisfies Meta<typeof Layout>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ConnectShare/default: the screen block's placeholders (Menu, BottomBar, CommonUI_Elements containers), back arrow,
    title, NavigationLanding, blank slate and CommonUI. */
export const V1: Story = {
  decorators: [
    (Story) => {
      setSignedInUser(MOCK_USER_ID);
      return (
        <MemoryRouter initialEntries={['/UBTConnect/ConnectShare']}>
          <Story />
        </MemoryRouter>
      );
    },
  ],
  args: {
    id: 'b1-$b1',
    menu: <div />,
    headerLeft: <MenuIcon_Back id="b1-$b2" />,
    title: (
      <div className="text-align-center" data-container="">
        Connect Share
      </div>
    ),
    headerRight: <PendingBlock name="Reusable.NavigationLanding" />,
    content: <PendingBlock name="Reusable.ConnectBlankSlate" />,
    bottomBar: <div />,
    commonUIElements: (
      <div>
        <CommonUI_InsideLayout id="$b2" />
      </div>
    ),
  },
};
