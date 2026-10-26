import type { Meta, StoryObj } from '@storybook/react-vite';
import { ItemOptionsMenu } from './ItemOptionsMenu';

const meta = {
  title: 'Shared/Connect2_LegacyShared/ItemOptionsMenu',
  component: ItemOptionsMenu,
} satisfies Meta<typeof ItemOptionsMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: the options of a bookmarked household (closed; no capture opened it), share implemented,
    the ellipsis anchor of ScreenBlock_BookmarkGroup. */
export const V1: Story = {
  args: {
    id: 'b1-l1-57_0-$b5',
    inIsBookmarked: true,
    isShareImplemented: true,
    anchorPlaceholder: <i className="icon padding-x-base fa fa-ellipsis-h fa-1x" data-icon="" />,
  },
};
