import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { Policy_Checker } from './Policy_Checker';

const meta = {
  title: 'Shared/UBTConnect/Policy_Checker',
  component: Policy_Checker,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Policy_Checker>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (no pending policy on TST): the empty wrapper of the compiled view. */
export const Default: Story = {};
