import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '@/components/ui/Icon';
import { UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { IconText } from './IconText';

const meta = { title: 'Shared/UBTConnectLibrary/IconText', component: IconText } satisfies Meta<typeof IconText>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BrowseDirectory/default (Columns_Two content not in the pack variant) */
export const V1: Story = {
  args: { text: 'Directory', spacingSize: UBT_Size.Base, children: <Icon inIconId="connect-icon-book_closed" /> },
};
/** ContactByEmailMember/default: text options, icon colour and size */
export const V2: Story = {
  args: {
    text: 'Test Locality, Test Country',
    textOptions: { Color: 'neutral-7', FontSize: 'xs' },
    children: <Icon inIconId="connect-icon-home_pin" inColorId="neutral-7" inSizeId="icon-non-standard-14" />,
  },
};
/** HomeFeed/default: icon on the right ("View all") */
export const V3: Story = {
  args: {
    isIconOnRight: true,
    spacingSize: UBT_Size.Base,
    text: 'View all',
    textOptions: { Color: 'neutral-7', FontWeight: 'semi-bold', FontSize: 'xs', IsUnderlined: true },
    children: <Icon inIconId="connect-icon-arrow_right_alt" inColorId="neutral-8" inSizeId="icon-medium" />,
  },
};
