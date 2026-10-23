import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setClientVar, setSignedInUser } from '@/platform/session/session';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { Connect_BottomBar_Items } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { FixedFooter } from '@/shared/UBTConnectLibrary/FixedFooter';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { Layout_DetailPage } from './Layout_DetailPage';

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
  title: 'Shared/UBTConnectLibrary/Layout_DetailPage',
  component: Layout_DetailPage,
} satisfies Meta<typeof Layout_DetailPage>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BrowseCountries/default: primary header, centred text title, statistics list, bottom bar, CommonUI. */
export const V1: Story = {
  decorators: [session('/UBTConnect/BrowseCountries')],
  args: {
    id: '$b1',
    placeholderHeaderTitle: 'Browse by country',
    content: <PendingBlock name="Directory_Locality.StatisticsList" />,
    bottom: <BottomBar id="$b3" activeItem={Connect_BottomBar_Items.Directory} />,
    placeholderCommonUIInsideLayout: <CommonUiLayout id="$b4" />,
  },
};

/** BrowseDirectory/default: primary header, centred expression title, browse section, bottom bar, CommonUI. */
export const V2: Story = {
  decorators: [session('/UBTConnect/BrowseDirectory')],
  args: {
    id: '$b1',
    placeholderHeaderTitle: <span data-expression="">Argentina</span>,
    content: <PendingBlock name="SubLayout.SubLayout_Browse_Section" />,
    bottom: <BottomBar id="$b12" activeItem={Connect_BottomBar_Items.Directory} />,
    placeholderCommonUIInsideLayout: <CommonUiLayout id="$b13" />,
  },
};

/** ContactByEmailMember/default: neutral header (not primary), title left, the email form, no bottom bar, no CommonUI. */
export const V3: Story = {
  decorators: [session('/UBTConnect/ContactByEmailMember')],
  args: {
    id: '$b1',
    inIsPrimaryColor: false,
    inAlignTitleLeft: true,
    placeholderHeaderTitle: <span data-expression="">Contact Member</span>,
    content: <PendingBlock name="ContactFlow.ContactByEmailForm" />,
  },
};

/** ContactByEmailOneSchoolGlobal/default: primary header, title left, the email form. */
export const V4: Story = {
  decorators: [session('/UBTConnect/ContactByEmailOneSchoolGlobal')],
  args: {
    id: '$b1',
    inAlignTitleLeft: true,
    placeholderHeaderTitle: <span data-expression="">Email</span>,
    content: <PendingBlock name="ContactFlow.ContactByEmailForm" />,
  },
};

/** ContactUsDetails/default: extended class `bottom-padding-base-button`, title left, content with a fixed footer
    and popups, CommonUI. */
export const V5: Story = {
  decorators: [session('/UBTConnect/ContactUsDetails')],
  args: {
    id: '$b1',
    inAlignTitleLeft: true,
    inExtendedClass: 'bottom-padding-base-button',
    placeholderHeaderTitle: <span data-expression="">User Account Management</span>,
    content: (
      <>
        <div data-container="" id="Content">
          <CustomContainer id="$b2" />
          <PendingBlock name="App_Common_Blocks.SectionSeparator" />
          <PendingBlock name="SubLayout.SubLayout_DirectoryDetailScreen_Section" />
        </div>
        <FixedFooter
          id="$b15"
          contentContainerId="Content"
          expectedFooterHeight="calc(2 * var(--space-base) + var(--ubt-button-height-m))"
        />
        <div data-container="" id="PopUps">
          <PendingBlock name="App_Common_Blocks_PopupDialogs.Dialog_Information" />
          <PendingBlock name="CW_CTA_PopUps.ContactPopup_ByPhone" />
        </div>
      </>
    ),
    placeholderCommonUIInsideLayout: <CommonUiLayout id="$b25" />,
  },
};

/** HouseholdCarousel/default: neutral header, centred title still loading (skeleton), carousel, bottom bar, CommonUI. */
export const V6: Story = {
  decorators: [session('/UBTConnect/HouseholdCarousel')],
  args: {
    id: '$b1',
    inIsPrimaryColor: false,
    placeholderHeaderTitle: <SkeletonSection id="$b2" />,
    content: <PendingBlock name="Directory_Caroussel.EntitiesCarousel" />,
    bottom: <BottomBar id="$b5" activeItem={Connect_BottomBar_Items.Directory} />,
    placeholderCommonUIInsideLayout: <CommonUiLayout id="$b6" />,
  },
};
