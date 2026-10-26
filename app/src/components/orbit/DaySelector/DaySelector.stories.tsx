import type { Meta, StoryObj } from '@storybook/react-vite';
import { DaySelector } from './DaySelector';

const meta = {
  title: 'Shared/Connect2_OrbitMobile_MUI/DaySelector',
  component: DaySelector,
} satisfies Meta<typeof DaySelector>;
export default meta;
type Story = StoryObj<typeof meta>;

/** EventDetail/default: the selected first day of the event (ListOfDaySelectors puts the day of month here). */
export const V1: Story = {
  args: { id: 'b1-b7-b1-l1-142790_0-$b1', isSelected: true, children: <span data-expression="">23</span> },
};

/** EventDetail/default: a day that is not selected. */
export const V2: Story = {
  args: { id: 'b1-b7-b1-l1-142790_1-$b1', children: <span data-expression="">24</span> },
};
