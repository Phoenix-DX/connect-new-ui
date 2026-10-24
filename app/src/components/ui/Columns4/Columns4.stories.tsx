import type { Meta, StoryObj } from '@storybook/react-vite';
import { Columns4 } from './Columns4';

/* Never captured (the pack has no DOM variant): story from the compiled view. */
const meta = { title: 'Shared/osui/Columns4', component: Columns4 } satisfies Meta<typeof Columns4>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Four meal options side by side (default gutter, no breaks). */
export const Default: Story = {
  args: {
    column1: <span>Breakfast</span>,
    column2: <span>Lunch</span>,
    column3: <span>Tea</span>,
    column4: <span>Dinner</span>,
  },
};
