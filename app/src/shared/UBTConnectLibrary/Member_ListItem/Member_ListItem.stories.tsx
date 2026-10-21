import type { Meta, StoryObj } from '@storybook/react-vite';
import { UBT_LazyImage } from '../../UBTConnect_Utils/UBT_LazyImage';
import { CircleButton } from '../CircleButton';
import { Member_ListItem } from './Member_ListItem';

const meta = {
  title: 'Shared/UBTConnectLibrary/Member_ListItem',
  component: Member_ListItem,
} satisfies Meta<typeof Member_ListItem>;
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
    placeholderLeft: <UBT_LazyImage />,
    actions: <CircleButton />,
  },
};
/** HouseholdCarousel/default: full markup (avatar and actions nested). */
export const V2: Story = { args: { ...V1.args, id: undefined } };
