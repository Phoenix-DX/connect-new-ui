import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlignCenter } from './AlignCenter';

const meta = {
  title: 'Shared/OutSystemsUI/AlignCenter',
  component: AlignCenter,
} satisfies Meta<typeof AlignCenter>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (BookmarksByGroup / MessageList states never rendered it): the compiled defaults. */
export const Default: Story = { args: { children: <div data-container="">Content</div> } };
