import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { OrbitLayout } from './OrbitLayout';

const meta = {
  title: 'Shared/Connect2_LegacyShared/Layout_Orbit',
  component: OrbitLayout,
} satisfies Meta<typeof OrbitLayout>;
export default meta;
type Story = StoryObj<typeof meta>;

/** EventDetail/default: the Orbit event screen; the screen's blocks are stand-ins here (their own stories show them). */
export const V1: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/UBTConnect/EventDetail']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    id: 'b1-$b1',
    headerLeft: <PendingBlock name="Reusable.MenuIcon__UpdatedOSUI" />,
    title: (
      <span className="text-align-center" data-expression="">
        Event Detail
      </span>
    ),
    content: <PendingBlock name="Orbit_ScreenBlocks.ScreenBlock_EventDetail" />,
  },
};
