import type { Meta, StoryObj } from '@storybook/react-vite';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { ConnectBottomSheet } from './ConnectBottomSheet';

const meta = {
  title: 'Shared/UBTConnectLibrary/BottomSheet',
  component: ConnectBottomSheet,
} satisfies Meta<typeof ConnectBottomSheet>;
export default meta;
type Story = StoryObj<typeof meta>;

const countryFilter = {
  title: 'Country Filter',
  contentBackgroundColorId: 'neutral-2',
  contentPadding: { GeneralSizeId: 's' },
  footerHeight: '72px',
  extendedClasses: 'bottom-sheet-higher-z-index',
  content: <PendingBlock name="App_CommonBlocks_Filter.FilterSheet_OptionList_Item" />,
  footer: <CustomContainer />,
};

/** CountryDetails/default: the country filter sheet (pack: wrapper only) */
export const V1: Story = { args: countryFilter };
/** CountryDetails/default: the country filter sheet, closed (top bar with the transparent close icons) */
export const V2: Story = { args: countryFilter };
/** CountryDetails/default: the legend sheet (Directory_LegendBottomSheet), no footer content */
export const V3: Story = {
  args: {
    title: 'About the numbers',
    contentBackgroundColorId: 'neutral-0',
    contentPadding: { HorizontalSizeId: 'base', BottomSizeId: 'xxl' },
    footerHeight: '0px',
    extendedClasses: 'directory-legend-explanation',
    content: (
      <>
        <CustomContainer />
        <CustomContainer />
        <CustomContainer />
        <CustomContainer />
        <CustomContainer />
      </>
    ),
  },
};
/** Profile/default: the household preview sheet, no background colour */
export const V4: Story = {
  args: {
    title: 'Preview Household Profile',
    contentPadding: { GeneralSizeId: 'none' },
    content: (
      <div data-container="" style={{ textAlign: 'left' }}>
        <PendingBlock name="Directory_Household.HouseholdDetails_Block" />
      </div>
    ),
  },
};
