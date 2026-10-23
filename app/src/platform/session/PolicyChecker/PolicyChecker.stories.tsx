import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { PolicyChecker } from './PolicyChecker';

const meta = {
  title: 'Shared/UBTConnect/Policy_Checker',
  component: PolicyChecker,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof PolicyChecker>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (no pending policy on TST): the empty wrapper of the compiled view. */
export const Default: Story = {};
