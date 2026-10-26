import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { PersonContactOptions } from './PersonContactOptions';

const meta = {
  title: 'Shared/Connect2_LegacyShared/Person_Contact_Options',
  component: PersonContactOptions,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof PersonContactOptions>;
export default meta;
type Story = StoryObj<typeof meta>;

/** LDM_EventDetail_V2/default: the host card with a phone and an email (the values are masked in the capture). */
export const V1: Story = { args: { id: 'b1-b5-$b1', phone: '+00 000 0000', emailAddress: 'person@example.invalid' } };
