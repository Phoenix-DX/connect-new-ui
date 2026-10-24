import type { Meta, StoryObj } from '@storybook/react-vite';
import { osImage } from '@/lib/os-assets';
import { ConnectBlankSlate } from './ConnectBlankSlate';

const meta = {
  title: 'Shared/Connect2_LegacyShared/ConnectBlankSlate',
  component: ConnectBlankSlate,
} satisfies Meta<typeof ConnectBlankSlate>;
export default meta;
type Story = StoryObj<typeof meta>;

const shareImage = <img data-image="" src={osImage('img/Connect2_LegacyShared.share_unavailable_icon.png')} />;

/** BookmarksByGroup/loading: inside NoBookmarks (its image and placeholders, with the texts of ScreenBlock_BookmarkGroup
    .mvc.js:1579-1625). */
export const V1: Story = {
  args: {
    id: 'b1-b21-$b1',
    image: (
      <img
        className="OSFillParent"
        data-image=""
        src={osImage('img/Connect2_LegacyShared.bookmark_unavailable_icon.svg')}
      />
    ),
    title: (
      <div>
        <div className="no-bookmark-top-message" data-container="">
          You&apos;ll find your
          <br /> bookmarks here
        </div>
      </div>
    ),
    subtitle: (
      <div>
        <div className="no-bookmark-bottom-message" data-container="">
          You can get back to a page that&apos;s
          <br />
          important to you by adding a bookmark{' '}
        </div>
      </div>
    ),
  },
};

/** ConnectShare/default: share unavailable, the status message as title (ScreenBlock_ShareDetail.mvc.js:227-260). */
export const V2: Story = {
  args: {
    id: 'b1-$b4',
    image: shareImage,
    title: <span data-expression="">No messages yet</span>,
  },
};

/** ConnectShare/offline: share unavailable with an empty status message. */
export const V3: Story = {
  args: {
    id: 'b1-$b4',
    image: shareImage,
    title: <span data-expression="" />,
  },
};
