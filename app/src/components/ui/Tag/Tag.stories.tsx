import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Tag';

const meta = { title: 'Shared/osui/Tag', component: Tag } satisfies Meta<typeof Tag>;
export default meta;
type Story = StoryObj<typeof meta>;

/** AssembleEvents/default: the selected period tab "Upcoming Meetings". */
export const V1: Story = {
  args: {
    id: 'b2-b4-b2-l1-70_0-$b2',
    extendedClass: 'connect-tag connect-tag-active',
    children: (
      <span className="text-no-wrap" data-expression="">
        Upcoming Meetings
      </span>
    ),
  },
};

/** AssembleEvents/default: the other period tab "Past Meetings" (not selected). */
export const V2: Story = {
  args: {
    id: 'b2-b4-b2-l1-70_1-$b2',
    extendedClass: 'connect-tag',
    children: (
      <span className="text-no-wrap" data-expression="">
        Past Meetings
      </span>
    ),
  },
};
