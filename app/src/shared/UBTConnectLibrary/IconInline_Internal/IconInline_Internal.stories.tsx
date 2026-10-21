import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconInline_Internal } from './IconInline_Internal';

const meta = {
  title: 'Shared/UBTConnectLibrary/IconInline_Internal',
  component: IconInline_Internal,
} satisfies Meta<typeof IconInline_Internal>;
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
