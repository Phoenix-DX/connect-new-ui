import type { Meta, StoryObj } from '@storybook/react-vite';
import { DEPRECATED_ButtonLoading } from './DEPRECATED_ButtonLoading';

/* Never captured (the pack has no DOM variant): stories from the compiled view. */
const meta = {
  title: 'Shared/osui/DEPRECATED_ButtonLoading',
  component: DEPRECATED_ButtonLoading,
} satisfies Meta<typeof DEPRECATED_ButtonLoading>;
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
