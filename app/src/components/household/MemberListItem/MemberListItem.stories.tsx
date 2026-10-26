import type { Meta, StoryObj } from '@storybook/react-vite';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import { CircleButton } from '@/components/ui/CircleButton';
import { MemberListItem } from './MemberListItem';

const meta = {
  title: 'Shared/UBTConnectLibrary/Member_ListItem',
  component: MemberListItem,
} satisfies Meta<typeof MemberListItem>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Member names and life-cycle texts are person data (masked): neutral mock values; the avatar is UBT_LazyImage's
   neutral placeholder. */
/** HouseholdCarousel/default (pack: wrapper only): parent row. */
export const V1: Story = {
  args: {
    id: 'ParentsAndChildren',
    title: 'Member Example',
    lifeCycleText: 'Example life cycle',
    placeholderLeft: <EntityLazyImage />,
    actions: <CircleButton />,
  },
};
/** HouseholdCarousel/default: full markup (avatar and actions nested). */
export const V2: Story = { args: { ...V1.args, id: undefined } };
