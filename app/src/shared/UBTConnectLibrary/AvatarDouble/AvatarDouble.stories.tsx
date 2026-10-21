import type { Meta, StoryObj } from '@storybook/react-vite';
import { AvatarDouble } from './AvatarDouble';

const meta = { title: 'Shared/UBTConnectLibrary/AvatarDouble', component: AvatarDouble } satisfies Meta<
  typeof AvatarDouble
>;
export default meta;
type Story = StoryObj<typeof meta>;

/** No capture: inputs as Notification_ListItem passes them (Base_52, mock initials), markup from the compiled view. */
export const CompiledView: Story = {
  args: {
    inSizeId: 'base',
    inFirstAvatarImage: { FallbackOptions: { Initials: 'AB' } },
    inSecondAvatarImage: { FallbackOptions: { Initials: 'CD' } },
  },
};
