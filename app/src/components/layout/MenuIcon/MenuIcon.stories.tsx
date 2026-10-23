import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { MenuAction } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import { MenuIcon } from './MenuIcon';

const meta = {
  title: 'Shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI',
  component: MenuIcon,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof MenuIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: MenuAction Back (class `back`). */
export const V1: Story = { args: { id: 'b1-$b2', menuAction: MenuAction.Back } };

/** MessageList/default: MenuAction Menu (no `back` class). */
export const V2: Story = { args: { id: 'b1-$b2', menuAction: MenuAction.Menu } };
