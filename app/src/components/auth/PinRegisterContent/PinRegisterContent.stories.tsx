import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { MOCK_USER } from '@/mocks/fictional/directory';
import { PinRegisterContent } from './PinRegisterContent';

/** Stories only: the router of the PINRegister screen. */
const router: Decorator = (Story) => (
  <MemoryRouter initialEntries={['/UBTConnect/PINRegister']}>
    <Story />
  </MemoryRouter>
);

/** The PreventBackNavigation block of the keypad as the page gives it (platform/navigation): its wrapper and its
    nested BackNavigationHandler. */
const renderPreventBackNavigation = (id: string | undefined) => (
  <OSBlock name="NavigationHandler.PreventBackNavigation" id={id}>
    <OSBlock name="NavigationHandler.BackNavigationHandler" />
  </OSBlock>
);

/** The fictional signed-in user who registers a PIN after the first sign-in. */
const userName = `${MOCK_USER.firstName} ${MOCK_USER.lastName}`;

const meta = {
  title: 'Shared/UBTConnect/Block_PINRegister_ContentWrapper',
  component: PinRegisterContent,
  decorators: [router],
  args: { renderPreventBackNavigation },
} satisfies Meta<typeof PinRegisterContent>;
export default meta;
type Story = StoryObj<typeof meta>;

/** PINRegister/default: first entry with the user's name */
export const V1: Story = { args: { id: '$b4', enableName: true, userName } };
/** PINRegister/default: the same state, every nested block expanded */
export const V2: Story = { args: { id: '$b4', enableName: true, userName } };
