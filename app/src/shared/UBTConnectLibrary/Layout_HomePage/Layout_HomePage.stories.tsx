import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setClientVar, setSignedInUser } from '@/platform/session/session';
import { PendingBlock } from '../../test/PendingBlock';
import { BottomBarMenu } from '../../UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '../../UBTConnect/CommonUI_InsideLayout';
import { Connect_BottomBar_Items } from '../../UBTConnect_Utils/lib/staticEntities';
import { FixedFooter } from '../FixedFooter';
import { UBT_Color } from '../lib/staticEntities';
import { SkeletonSection } from '../SkeletonSection';
import { Layout_HomePage } from './Layout_HomePage';

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
  component: Layout_HomePage,
} satisfies Meta<typeof Layout_HomePage>;
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
    bottom: <BottomBarMenu id="$b12" activeItem={Connect_BottomBar_Items.Home} isRootPage />,
    placeholderCommonUIInsideLayout: <CommonUI_InsideLayout id="$b13" />,
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
        <SkeletonSection id="Content" inIsLoading={false} />
        <FixedFooter
          id="$b49"
          contentContainerId="b1-ContentWrapper"
          expectedFooterHeight="calc(2 * var(--space-base) + var(--ubt-button-height-m))"
        />
      </>
    ),
    placeholderCommonUIInsideLayout: <CommonUI_InsideLayout id="$b55" />,
  },
};
