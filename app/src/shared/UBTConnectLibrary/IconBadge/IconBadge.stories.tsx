import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { UBT_Color } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { IconBadge } from './IconBadge';

const meta = { title: 'Shared/UBTConnectLibrary/IconBadge', component: IconBadge } satisfies Meta<typeof IconBadge>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: the Updates item of the bottom bar (App_IconBadge) */
export const V1: Story = {
  args: {
    number: '3',
    maxNumber: 9,
    color: UBT_Color.Red,
    icon: (
      <Icon
        inIconId="connect-icon-list_alt"
        inColorId="neutral-6"
        inSizeId="icon-base"
        inExtendedClasses="ignore-loading"
      />
    ),
  },
};
