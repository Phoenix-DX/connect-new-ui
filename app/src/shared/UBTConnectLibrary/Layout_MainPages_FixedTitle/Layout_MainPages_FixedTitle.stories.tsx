import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { MOCK_USER_ID } from '../../../shell/mockUser';
import { setClientVar, setSignedInUser } from '../../../shell/session';
import { PendingBlock } from '../../test/PendingBlock';
import { BottomBarMenu } from '../../UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '../../UBTConnect/CommonUI_InsideLayout';
import { Connect_BottomBar_Items } from '../../UBTConnect_Utils/lib/staticEntities';
import { CustomContainer } from '../CustomContainer';
import { SkeletonSection } from '../SkeletonSection';
import { Layout_MainPages_FixedTitle } from './Layout_MainPages_FixedTitle';

/** Stories only: the signed-in session of the captures (BottomBarMenu, CommonUI_InsideLayout), checked just now. */
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
  title: 'Shared/UBTConnectLibrary/Layout_MainPages_FixedTitle',
  component: Layout_MainPages_FixedTitle,
} satisfies Meta<typeof Layout_MainPages_FixedTitle>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Notes/default: gray background, "My Notes" title with the notification bell, search input, filter pills, note
    list, bottom bar, CommonUI. */
export const V1: Story = {
  decorators: [session('/UBTConnect/Notes')],
  args: {
    id: '$b1',
    isGrayBackground: true,
    placeholderHeaderTitle: 'My Notes',
    placeholderHeaderRight: <PendingBlock name="App_Common_Blocks.App_NotificationIcon" />,
    placeholderHeaderInput: <PendingBlock name="ConnectPatterns.Input" />,
    headerContent: <CustomContainer id="Filter_Pills" />,
    content: <PendingBlock name="Notes.NoteCard_List" />,
    bottom: <BottomBarMenu id="$b9" activeItem={Connect_BottomBar_Items.Menu} />,
    placeholderCommonUIInsideLayout: <CommonUI_InsideLayout id="$b10" />,
  },
};

/** Updates_SingleList/loading: "Updates" title, search input and filter icon, list header, the loading list of
    skeletons, bottom bar, CommonUI. */
export const V2: Story = {
  decorators: [session('/UBTConnect/Updates_SingleList')],
  args: {
    id: '$b1',
    isGrayBackground: true,
    placeholderHeaderTitle: 'Updates',
    placeholderHeaderRight: <PendingBlock name="App_Common_Blocks.App_NotificationIcon" />,
    placeholderHeaderInput: <PendingBlock name="ConnectPatterns.Input" />,
    placeholderHeaderInputIcon: <PendingBlock name="App_CommonBlocks_Filter.FilterSheet_Icon" />,
    headerContent: (
      <>
        <CustomContainer id="$b10" />
        <PendingBlock name="Directory_Updates.UpdateItem_Header" />
      </>
    ),
    content: (
      <div
        className="list list-group background-neutral-0 updates-list list-loading OSFillParent"
        data-animation-disabled=""
        data-list=""
        style={{ position: 'relative' }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <SkeletonSection key={i} id={`l1-106_${String(i)}-$b14`} />
        ))}
      </div>
    ),
    bottom: <BottomBarMenu id="$b18" activeItem={Connect_BottomBar_Items.Updates} />,
    placeholderCommonUIInsideLayout: <CommonUI_InsideLayout id="$b19" />,
  },
};
