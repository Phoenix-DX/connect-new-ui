import type { Meta, StoryObj } from '@storybook/react-vite';
import { UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { SelectionOptionList } from './SelectionOptionList';
import type { SelectionOption_Item } from './types';

const meta = {
  title: 'Shared/UBTConnectLibrary/SelectionOption_List',
  component: SelectionOptionList,
} satisfies Meta<typeof SelectionOptionList>;
export default meta;
type Story = StoryObj<typeof meta>;

const countries: SelectionOption_Item[] = [
  { Id: 'Choice.None', DisplayText: 'All Countries', isSelected: true },
  ...['AR', 'AU', 'CA', 'CH', 'DE', 'DK', 'FR', 'IE', 'IT', 'JM', 'NL', 'NZ', 'SE', 'TT', 'UK', 'US', 'VC'].map(
    (code) => ({
      Id: code,
      DisplayText: `Country ${code}`,
      CountryCode: code,
    }),
  ),
];
const style = {
  itemStyleOptions: { MarginSize: { BottomSizeId: UBT_Size.Base } },
  lastItemStyleOptions: { MarginSize: { BottomSizeId: UBT_Size.None } },
};

/** CountryDetails/default: the country filter list (17 items with flags). */
export const V1: Story = { args: { selectionOptionItemList: countries.slice(1), ...style } };
/** Notes/default: a Yes / No choice. */
export const V2: Story = {
  args: {
    selectionOptionItemList: [
      { Id: 'Choice.Yes', DisplayText: 'Newest', isSelected: true },
      { Id: 'Choice.No', DisplayText: 'Oldest' },
    ],
    ...style,
  },
};
/** Notes/default: an empty flat list. */
export const V3: Story = { args: { selectionOptionItemList: [], isMultiselect: true, ...style } };
/** Search/default: "All" option then 17 countries. */
export const V4: Story = { args: { selectionOptionItemList: countries, ...style } };
