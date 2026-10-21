import type { Meta, StoryObj } from '@storybook/react-vite';
import { CircleButton_IconPrimary } from './CircleButton_IconPrimary';

const meta = {
  title: 'Shared/UBTConnectLibrary/CircleButton_IconPrimary',
  component: CircleButton_IconPrimary,
} satisfies Meta<typeof CircleButton_IconPrimary>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdCarousel/default: action row */
export const V1: Story = { args: { iconId: 'connect-icon-check', text: 'Unmark' } };
/** HouseholdCarousel/default: Bookmark action, whole content */
export const V2: Story = { args: { iconId: 'connect-icon-bookmark', text: 'Bookmark' } };
/** HouseholdCarousel/default: Gift action disabled (isEnabled = False) */
export const V3: Story = { args: { iconId: 'connect-icon-gifting', text: 'Gift', isEnabled: false } };
/** HouseholdCarousel/default: Call action without label */
export const V4: Story = { args: { iconId: 'connect-icon-call' } };
