import type { Meta, StoryObj } from '@storybook/react-vite';
import { UBT_Icons } from '@/lib/ubtConnectLibrary/staticEntities';
import { Icon } from './Icon';

const meta = { title: 'Shared/UBTConnectLibrary/Icon', component: Icon } satisfies Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default */
export const V1: Story = { args: { inIconId: 'connect-icon-home', inColorId: 'neutral-6', inSizeId: 'icon-base' } };
/** BookmarksByGroup/default */
export const V2: Story = { args: { inIconId: 'connect-icon-union', inColorId: 'neutral-6', inSizeId: 'icon-base' } };
/** BookmarksByGroup/default */
export const V3: Story = {
  args: {
    inIconId: 'connect-icon-list_alt',
    inColorId: 'neutral-6',
    inSizeId: 'icon-base',
    inExtendedClasses: 'ignore-loading',
  },
};
/** BookmarksByGroup/default */
export const V4: Story = {
  args: { inIconId: 'connect-icon-contacts_fill', inColorId: 'primary', inSizeId: 'icon-base' },
};
/** Services/default: SVG icon, default color */
export const V5: Story = { args: { inIconId: UBT_Icons.SVG_HR100, inSizeId: 'icon-base' } };
/** HomeFeed/default: In_Visible = False */
export const V6: Story = { args: { inIconId: 'connect-icon-home', inVisible: false } };
