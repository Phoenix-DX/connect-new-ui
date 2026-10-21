import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card_Event } from './Card_Event';
import { THREE_DAY_MEETINGS } from './fixtures';

const meta = {
  title: 'Shared/Connect2_OrbitMobile_MUI/Card_Event',
  component: Card_Event,
} satisfies Meta<typeof Card_Event>;
export default meta;
type Story = StoryObj<typeof meta>;

/** OrbitLanding/default: the account's one upcoming event (purple meeting card, three days, main hall). */
export const V1: Story = {
  args: { id: 'b1-l1-60_0-$b5', inEventSummary: THREE_DAY_MEETINGS },
};
