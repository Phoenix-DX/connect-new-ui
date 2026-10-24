import type { Meta, StoryObj } from '@storybook/react-vite';
import { NoBookmarks } from './NoBookmarks';

const meta = {
  title: 'Shared/Connect2_MyBookmarks_MUI/NoBookmarks',
  component: NoBookmarks,
} satisfies Meta<typeof NoBookmarks>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/loading: shown, with the texts of ScreenBlock_BookmarkGroup.mvc.js:1579-1625. */
export const V1: Story = {
  args: {
    id: 'b1-$b21',
    isToDisplay: true,
    titlePlaceholder: (
      <div className="no-bookmark-top-message" data-container="">
        You&apos;ll find your
        <br /> bookmarks here
      </div>
    ),
    textPlaceholder: (
      <div className="no-bookmark-bottom-message" data-container="">
        You can get back to a page that&apos;s
        <br />
        important to you by adding a bookmark{' '}
      </div>
    ),
  },
};
