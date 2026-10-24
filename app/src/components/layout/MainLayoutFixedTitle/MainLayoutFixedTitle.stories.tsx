import type { Meta, StoryObj } from '@storybook/react-vite';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { PendingBlock } from '@/test/PendingBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Skeleton } from '@/components/ui/Skeleton';
import { MainLayoutFixedTitle } from './MainLayoutFixedTitle';

/* The screen gives the bottom bar (App_Common.BottomBarMenu) and CommonUI_InsideLayout. They read the session, so the
   stories use stand-ins with the same root wrapper (the capture tests compare only that wrapper for nested blocks);
   the stories of BottomBar and CommonUiLayout show them. */
const bottomBar = (id: string) => <OSBlock name="App_Common.BottomBarMenu" id={id} />;
const commonUi = (id: string) => <OSBlock name="App_Common.CommonUI_InsideLayout" id={id} />;

const meta = {
  title: 'Shared/UBTConnectLibrary/Layout_MainPages_FixedTitle',
  component: MainLayoutFixedTitle,
} satisfies Meta<typeof MainLayoutFixedTitle>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Notes/default: gray background, "My Notes" title with the notification bell, search input, filter pills, note
    list, bottom bar, CommonUI. */
export const V1: Story = {
  args: {
    id: '$b1',
    isGrayBackground: true,
    placeholderHeaderTitle: 'My Notes',
    placeholderHeaderRight: <PendingBlock name="App_Common_Blocks.App_NotificationIcon" />,
    placeholderHeaderInput: <PendingBlock name="ConnectPatterns.Input" />,
    headerContent: <CustomContainer id="Filter_Pills" />,
    content: <PendingBlock name="Notes.NoteCard_List" />,
    bottom: bottomBar('$b9'),
    placeholderCommonUIInsideLayout: commonUi('$b10'),
  },
};

/** Updates_SingleList/loading: "Updates" title, search input and filter icon, list header, the loading list of
    skeletons, bottom bar, CommonUI. */
export const V2: Story = {
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
          <Skeleton key={i} id={`l1-106_${String(i)}-$b14`} />
        ))}
      </div>
    ),
    bottom: bottomBar('$b18'),
    placeholderCommonUIInsideLayout: commonUi('$b19'),
  },
};
