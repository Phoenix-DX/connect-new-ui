import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card_Milestone } from './Card_Milestone';
import { ACCOMMODATION } from './fixtures';

const meta = {
  title: 'Shared/Connect2_OrbitMobile_MUI/Card_Milestone',
  component: Card_Milestone,
} satisfies Meta<typeof Card_Milestone>;
export default meta;
type Story = StoryObj<typeof meta>;

/** EventDetail/default: the accommodation milestone (host, address, View Guests); the meeting card is the same
    capture with MEETING (tested against Card_Template v2). */
export const V1: Story = {
  args: { id: 'b1-l1-142797_2-$b8', inMilestoneSummary: ACCOMMODATION },
};
