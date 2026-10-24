import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconInline } from './IconInline';

const meta = {
  title: 'Shared/UBTConnectLibrary/IconInline_Internal',
  component: IconInline,
} satisfies Meta<typeof IconInline>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: no icon */
export const V1: Story = { args: {} };
/** CountryDetails/default */
export const V2: Story = {
  args: {
    inlineIcon: { IconId: 'connect-icon-house_fill', IconColorId: 'orange', IconSizeId: 'icon-non-standard-16' },
  },
};
