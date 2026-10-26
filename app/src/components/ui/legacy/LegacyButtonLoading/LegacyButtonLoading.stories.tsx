import type { Meta, StoryObj } from '@storybook/react-vite';
import { LegacyButtonLoading } from './LegacyButtonLoading';

/* Never captured (the pack has no DOM variant): stories from the compiled view. */
const meta = {
  title: 'Shared/osui/DEPRECATED_ButtonLoading',
  component: LegacyButtonLoading,
} satisfies Meta<typeof LegacyButtonLoading>;
export default meta;
type Story = StoryObj<typeof meta>;

const button = (
  <button className="btn btn-primary" type="button">
    Send email
  </button>
);

/** The Send button of the email screens, idle. */
export const Idle: Story = { args: { children: button } };

/** Sending: the loading state. */
export const Loading: Story = { args: { isLoading: true, children: button } };
