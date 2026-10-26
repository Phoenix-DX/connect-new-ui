import type { Meta, StoryObj } from '@storybook/react-vite';
import { BlankSlate } from './BlankSlate';

const meta = {
  title: 'Shared/OutSystemsUI/BlankSlate',
  component: BlankSlate,
} satisfies Meta<typeof BlankSlate>;
export default meta;
type Story = StoryObj<typeof meta>;

/** CommunityBusinessDetails_CoomingSoon/default: ellipsis icon and the "Comming soon" text (caller markup). */
export const V1: Story = {
  args: {
    id: '$b3',
    icon: <i className="icon fa fa-ellipsis-h fa-2x" data-icon="" />,
    content: 'Comming soon',
  },
};
