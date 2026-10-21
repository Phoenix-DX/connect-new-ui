import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { MenuIcon_Back } from './MenuIcon_Back';

const meta = {
  title: 'Shared/Connect2_LegacyShared/MenuIcon_Back',
  component: MenuIcon_Back,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof MenuIcon_Back>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ConnectShare/default: the back arrow in the header (no inputs). */
export const V1: Story = { args: { id: 'b1-$b2' } };
