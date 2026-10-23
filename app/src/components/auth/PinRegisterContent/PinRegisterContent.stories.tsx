import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { PinRegisterContent } from './PinRegisterContent';

/** Stories only: the signed-in user who registers a PIN after the first sign-in. */
const session: Decorator = (Story) => {
  setSignedInUser(MOCK_USER_ID);
  return (
    <MemoryRouter initialEntries={['/UBTConnect/PINRegister']}>
      <Story />
    </MemoryRouter>
  );
};

const meta = {
  title: 'Shared/UBTConnect/Block_PINRegister_ContentWrapper',
  component: PinRegisterContent,
  decorators: [session],
} satisfies Meta<typeof PinRegisterContent>;
export default meta;
type Story = StoryObj<typeof meta>;

/** PINRegister/default: first entry with the user's name */
export const V1: Story = { args: { id: '$b4', enableName: true } };
/** PINRegister/default: the same state, every nested block expanded */
export const V2: Story = { args: { id: '$b4', enableName: true } };
