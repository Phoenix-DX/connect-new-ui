import type { Meta, StoryObj } from '@storybook/react-vite';
import { TouchEvents } from './TouchEvents';

const meta = {
  title: 'Shared/OutSystemsUI/TouchEvents',
  component: TouchEvents,
} satisfies Meta<typeof TouchEvents>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Photobook/default: tracks the photo container (renders nothing). */
export const V1: Story = {
  args: { id: 'b4-b6-$b4', widgetId: 'PhotoContainer' },
};
