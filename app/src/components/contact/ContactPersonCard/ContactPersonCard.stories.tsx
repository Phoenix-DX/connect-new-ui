import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContactPersonCard } from './ContactPersonCard';

const meta = {
  title: 'Components/Contact/ContactPersonCard',
  component: ContactPersonCard,
} satisfies Meta<typeof ContactPersonCard>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ContactByEmailMember: a member without an avatar URL (the initials placeholder), locality and country. */
export const Default: Story = {
  args: {
    entityType: '',
    entityId: '0',
    avatarURL: '',
    name: 'Clara Whitfield',
    locality: 'Ashford',
    country: 'United Kingdom',
  },
};

/** The locality line without the separator: only the country is known. */
export const CountryOnly: Story = {
  args: { ...Default.args, name: 'Jonas Lindqvist', locality: '', country: 'Sweden' },
};
