import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setClientVar, setSignedInUser } from '@/platform/session/session';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { Connect_BottomBar_Items } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { FixedFooter } from '@/components/ui/FixedFooter';
import { UBT_Color } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { Skeleton } from '@/components/ui/Skeleton';
import { HomeLayout } from './HomeLayout';

/** Stories only: the signed-in session of the captures, 3 unread updates checked just now (no refresh call). */
const session =
  (path: string): Decorator =>
  (Story) => {
    setSignedInUser(MOCK_USER_ID);
    setClientVar('UBTConnect.Directory_Updates_UnreadCount', 3);
    setClientVar('UBTConnect.Directory_Updates_UnreadCount_LastCheck', new Date().toISOString().slice(0, 19));
    return (
      <MemoryRouter initialEntries={[path]}>
        <Story />
      </MemoryRouter>
    );
  };

const meta = {
  title: 'Shared/UBTConnectLibrary/Layout_HomePage',
  component: HomeLayout,
} satisfies Meta<typeof HomeLayout>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HomeFeed/default: logo and bell header, search bar, the feed sections, bottom bar (Home) and CommonUI. */
export const V1: Story = {
  decorators: [session('/UBTConnect/HomeFeed')],
  args: {
    id: '$b1',
    placeholderHeaderTitle: <PendingBlock name="App_Common.AppLogo_White" />,
    placeholderHeaderRight: <PendingBlock name="App_Common_Blocks.App_NotificationIcon" />,
    content: (
      <>
        <PendingBlock name="Home.Section_FeedWrapper" />
        <PendingBlock name="Home.Section_FeedWrapper" />
        <PendingBlock name="Home.Section_FeedWrapper" />
        <PendingBlock name="Home.Feed_Embeded" />
        <PendingBlock name="App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation" />
      </>
    ),
    bottom: <BottomBar id="$b12" activeItem={Connect_BottomBar_Items.Home} isRootPage />,
    placeholderCommonUIInsideLayout: <CommonUiLayout id="$b13" />,
  },
};

/** Profile/default: profile class, white content, no search bar, taller-curve SVG height, fixed footer, CommonUI. */
export const V2: Story = {
  decorators: [session('/UBTConnect/Profile')],
  args: {
    id: '$b1',
    extendedClass: 'ubt-profile-screen',
    contentBackgroundColor: UBT_Color.Neutral0,
    addSearchBar: false,
    sVGHeight: 'calc(200px - var(--header-size))',
    content: (
      <>
        <Skeleton id="Content" isLoading={false} />
        <FixedFooter
          id="$b49"
          contentContainerId="b1-ContentWrapper"
          expectedFooterHeight="calc(2 * var(--space-base) + var(--ubt-button-height-m))"
        />
      </>
    ),
    placeholderCommonUIInsideLayout: <CommonUiLayout id="$b55" />,
  },
};
