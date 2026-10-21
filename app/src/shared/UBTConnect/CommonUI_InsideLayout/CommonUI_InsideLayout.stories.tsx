import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { setSignedInUser } from '../../../shell/session';
import { CommonUI_InsideLayout } from './CommonUI_InsideLayout';

/** Stories only: the mock session the captured screen had (the lock block needs a signed-in user). */
const session =
  (userId: string | null, path: string): Decorator =>
  (Story) => {
    setSignedInUser(userId);
    return (
      <MemoryRouter initialEntries={[path]}>
        <Story />
      </MemoryRouter>
    );
  };

const meta = {
  title: 'Shared/UBTConnect/CommonUI_InsideLayout',
  component: CommonUI_InsideLayout,
} satisfies Meta<typeof CommonUI_InsideLayout>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: signed in, with the lock block */
export const V1: Story = { args: { id: '$b3' }, decorators: [session('mock-user', '/UBTConnect/BookmarksByGroup')] };
/** Login/default: signed out, no lock block */
export const V2: Story = { args: { id: '$b14' }, decorators: [session(null, '/UBTConnect/Login')] };
