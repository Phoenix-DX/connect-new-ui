import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { MOCK_USER_ID } from '../../../shell/mockUser';
import { setClientVar, setSignedInUser } from '../../../shell/session';
import { BlankSlate } from '../../osui/BlankSlate';
import { PendingBlock } from '../../test/PendingBlock';
import { BottomBarMenu } from '../../UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '../../UBTConnect/CommonUI_InsideLayout';
import { Connect_BottomBar_Items } from '../../UBTConnect_Utils/lib/staticEntities';
import { CustomContainer } from '../CustomContainer';
import { Layout_MainPages } from './Layout_MainPages';

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
  title: 'Shared/UBTConnectLibrary/Layout_MainPages',
  component: Layout_MainPages,
} satisfies Meta<typeof Layout_MainPages>;
export default meta;
type Story = StoryObj<typeof meta>;

/** CommunityBusinessDetails_CoomingSoon/default: title, BlankSlate "Comming soon", no bottom bar / CommonUI. */
export const V1: Story = {
  decorators: [session('/UBTConnect/CommunityBusinessDetails_CoomingSoon')],
  args: {
    id: '$b1',
    placeholderHeaderTitle: 'Coming soon',
    content: (
      <BlankSlate id="$b3" icon={<i className="icon fa fa-ellipsis-h fa-2x" data-icon="" />} content="Comming soon" />
    ),
  },
};

/** CountryList/default: gray background, country list, bottom bar, CommonUI. */
export const V2: Story = {
  decorators: [session('/UBTConnect/CountryList')],
  args: {
    id: '$b1',
    isGrayBackground: true,
    placeholderHeaderTitle: 'Countries',
    content: <CustomContainer id="Content">Country list</CustomContainer>,
    bottom: <BottomBarMenu id="$b25" activeItem={Connect_BottomBar_Items.Directory} />,
    placeholderCommonUIInsideLayout: <CommonUI_InsideLayout id="$b26" />,
  },
};

/** Locality_Details/default: subtitle and tabs in the header content, households list. */
export const V3: Story = {
  decorators: [session('/UBTConnect/Locality_Details')],
  args: {
    id: '$b1',
    placeholderHeaderTitle: 'Locality',
    headerContent: (
      <>
        <div className="locality-subtitle" data-container="">
          <PendingBlock name="Layouts.SubHeader_MainPages" />
        </div>
        <CustomContainer id="$b14">Tabs</CustomContainer>
      </>
    ),
    content: <PendingBlock name="Directory_Locality.Locality_Households" />,
    bottom: <BottomBarMenu id="$b23" activeItem={Connect_BottomBar_Items.Directory} />,
    placeholderCommonUIInsideLayout: <CommonUI_InsideLayout id="$b24" />,
  },
};

/** Locality_Details/loading: as V3 with no content yet. */
export const V4: Story = {
  decorators: [session('/UBTConnect/Locality_Details')],
  args: { ...V3.args, content: undefined },
};
