import type { Meta, StoryObj } from '@storybook/react-vite';
import { TagToggle } from './TagToggle';

const meta = {
  title: 'Shared/UBTConnectLibrary/TagToggle',
  component: TagToggle,
} satisfies Meta<typeof TagToggle>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdCarousel/default: a selected tag without icon. */
export const V1: Story = { args: { tag: { Text: 'About', Identifier: 'about', IconId: '', IsSelected: true } } };
